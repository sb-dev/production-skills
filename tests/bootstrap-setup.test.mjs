import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { planInstall, applyPlan, validatePayload, skillNames } from '../.claude/skills/bootstrap-setup/scripts/install.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const spec = 'docs/research-logs/2026-09-17-fixture-new-project-bootstrap-process.md';
const sourceRef = '20979e0c68ac4b37433374df7fe10ceb2e7ee69a';
function git(cwd, ...args) { return execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim(); }
function write(root, name, content) { const p = path.join(root, name); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, content); }
function fixture(t, repo = 'sb-dev/fixture-skills', branch = 'feat/bootstrap-test') {
  const target = fs.mkdtempSync(path.join(os.tmpdir(), 'bootstrap-fixture-'));
  t.after(() => fs.rmSync(target, { recursive: true, force: true }));
  git(target, 'init', '-b', 'main');
  git(target, 'config', 'user.email', 'fixture@example.invalid');
  git(target, 'config', 'user.name', 'Synthetic test fixture');
  git(target, 'remote', 'add', 'origin', `https://github.com/${repo}.git`);
  write(target, spec, '# Synthetic bootstrap\n\nStage 1 -> Stage 1A -> Stage 1B -> Stage 2\n');
  write(target, 'README.md', '# Preserve existing project\n');
  write(target, '.gitignore', 'node_modules/\n');
  git(target, 'add', '.'); git(target, 'commit', '-m', 'test: create synthetic main');
  const main = git(target, 'rev-parse', 'HEAD');
  git(target, 'switch', '-c', branch);
  return { target, repo, branch, spec, date: '2026-09-17', sourceRef, main };
}
function commit(f) { git(f.target, 'add', '.'); git(f.target, 'commit', '-m', 'test: accept fixture content'); }

// These tests never contact GitHub, Firecrawl or Claude. Every target is synthetic.
test('canonical names, invocation controls and local guide links', () => {
  validatePayload();
  const guide = fs.readFileSync(path.join(root, 'docs/bootstrap/runtime/bootstrap-guide.md'), 'utf8');
  assert.match(guide, /\]\(claude-code-web-firecrawl-setup\.md\)/);
  for (const name of skillNames) {
    const text = fs.readFileSync(path.join(root, `docs/bootstrap/runtime/${name}/SKILL.md`), 'utf8');
    assert.doesNotMatch(text, /\.\.\/.*production-skills|\.claude\/bootstrap\/research-profile/);
  }
});

test('preview does not write; installation preserves main, spec, README and private inputs', t => {
  const f = fixture(t);
  write(f.target, 'books/Space in title.PDF', '%PDF-synthetic fixture, not a real book');
  const before = fs.readFileSync(path.join(f.target, spec), 'utf8');
  const plan = planInstall(f);
  assert.equal(plan.changes.length, 8);
  assert.equal(fs.existsSync(path.join(f.target, '.claude')), false);
  applyPlan(plan, plan.head);
  assert.equal(git(f.target, 'rev-parse', 'HEAD'), f.main);
  assert.equal(git(f.target, 'rev-parse', 'main'), f.main);
  assert.equal(fs.readFileSync(path.join(f.target, spec), 'utf8'), before);
  assert.equal(fs.readFileSync(path.join(f.target, 'README.md'), 'utf8'), '# Preserve existing project\n');
  assert.equal(fs.readFileSync(path.join(f.target, 'books/Space in title.PDF'), 'utf8'), '%PDF-synthetic fixture, not a real book');
  assert.equal(git(f.target, 'ls-files', '--', 'books'), '');
  assert.match(fs.readFileSync(path.join(f.target, '.gitignore'), 'utf8'), /^node_modules\//);
  assert.equal(planInstall(f).changes.length, 0);
});

test('repeat setup is a no-op across dates and unrelated central revisions', t => {
  const f = fixture(t); const p = planInstall(f); applyPlan(p, p.head); commit(f);
  assert.deepEqual(planInstall({ ...f, date: '2026-09-18', sourceRef: 'a'.repeat(40) }).changes, []);
});

test('different existing content is refused before any installation writes', t => {
  const f = fixture(t); write(f.target, '.claude/skills/bootstrap/SKILL.md', '# Existing custom workflow\n'); commit(f);
  const p = planInstall(f);
  assert.equal(p.changes.find(c => c.path.endsWith('bootstrap/SKILL.md')).approved, false);
  assert.throws(() => applyPlan(p, p.head), /Existing content conflicts/);
  assert.equal(fs.existsSync(path.join(f.target, 'docs/bootstrap-guide.md')), false);
  assert.equal(fs.readFileSync(path.join(f.target, '.claude/skills/bootstrap/SKILL.md'), 'utf8'), '# Existing custom workflow\n');
});

test('explicit content-hash approval permits only the reviewed replacement', t => {
  const f = fixture(t); const name = '.claude/skills/bootstrap/SKILL.md'; write(f.target, name, '# Reviewed legacy workflow\n'); commit(f);
  const p = planInstall(f); const hash = p.changes.find(c => c.path === name).previousSha256;
  const approved = planInstall({ ...f, approvals: { [name]: hash } }); applyPlan(approved, approved.head);
  assert.match(fs.readFileSync(path.join(f.target, name), 'utf8'), /^---\nname: bootstrap/);
});

test('stale replacement approval is rejected', t => {
  const f = fixture(t); write(f.target, '.claude/skills/bootstrap/SKILL.md', '# custom\n'); commit(f);
  assert.throws(() => planInstall({ ...f, approvals: { '.claude/skills/bootstrap/SKILL.md': '0'.repeat(64) } }), /stale/);
});

test('target HEAD changes are rejected', t => {
  const f = fixture(t); const p = planInstall(f); write(f.target, 'other.md', 'changed head\n'); commit(f);
  assert.throws(() => applyPlan(p, p.head), /HEAD changed/);
});

test('branch switch after preview is rejected even at the same commit', t => {
  const f = fixture(t); const p = planInstall(f); git(f.target, 'switch', 'main');
  assert.throws(() => applyPlan(p, p.head), /Branch changed/);
});

test('origin change after preview is rejected', t => {
  const f = fixture(t); const p = planInstall(f); git(f.target, 'remote', 'set-url', 'origin', 'https://github.com/sb-dev/other-skills.git');
  assert.throws(() => applyPlan(p, p.head), /Origin changed/);
});

test('untracked destination appearing after preview is preserved', t => {
  const f = fixture(t); const p = planInstall(f); write(f.target, 'docs/bootstrap-guide.md', 'another writer\n');
  assert.throws(() => applyPlan(p, p.head), /Destination changed/);
  assert.equal(fs.readFileSync(path.join(f.target, 'docs/bootstrap-guide.md'), 'utf8'), 'another writer\n');
});

test('requires exact target branch and origin', t => {
  const f = fixture(t);
  assert.throws(() => planInstall({ ...f, branch: 'feat/wrong' }), /Working branch/);
  assert.throws(() => planInstall({ ...f, repo: 'sb-dev/wrong' }), /origin/);
  assert.throws(() => planInstall({ ...f, branch: 'main' }), /non-main/);
  assert.throws(() => planInstall({ ...f, branch: 'master' }), /non-main/);
  assert.throws(() => planInstall({ ...f, repo: 'sb-dev/production-skills' }), /central repository/);
});

test('does not infer or generate an absent specification', t => {
  const f = fixture(t);
  assert.throws(() => planInstall({ ...f, spec: 'docs/research-logs/missing-new-project-bootstrap-process.md' }), /existing governing/);
});

test('rejects tracked private inputs without untracking or deleting them', t => {
  const f = fixture(t); write(f.target, 'books/private.pdf', 'synthetic private fixture'); commit(f);
  assert.throws(() => planInstall(f), /Private source/);
  assert.equal(fs.existsSync(path.join(f.target, 'books/private.pdf')), true);
});

test('preserves unrelated uncommitted and staged changes by refusing mutation', t => {
  const f = fixture(t); write(f.target, 'README.md', 'local edit\n');
  assert.throws(() => planInstall(f), /Uncommitted tracked/);
  git(f.target, 'add', 'README.md');
  assert.throws(() => planInstall(f), /Git precondition/);
  assert.equal(fs.readFileSync(path.join(f.target, 'README.md'), 'utf8'), 'local edit\n');
});

test('rejects symlink destinations', t => {
  const f = fixture(t); const elsewhere = fs.mkdtempSync(path.join(os.tmpdir(), 'bootstrap-outside-'));
  t.after(() => fs.rmSync(elsewhere, { recursive: true, force: true }));
  fs.symlinkSync(elsewhere, path.join(f.target, '.claude'), 'dir');
  assert.throws(() => planInstall(f), /symlink/);
  assert.equal(fs.readdirSync(elsewhere).length, 0);
});

test('refuses ambiguous active contracts and legacy profile migration', t => {
  const f = fixture(t);
  for (const date of ['2026-09-16', '2026-09-17']) write(f.target, `docs/research-logs/${date}-bootstrap-execution-contract.md`, `**Working branch:** \`${f.branch}\`\n`);
  assert.throws(() => planInstall(f), /Multiple contracts/);
  fs.mkdirSync(path.join(f.target, '.claude/bootstrap'), { recursive: true });
  assert.throws(() => planInstall(f), /Legacy/);
});

test('renders repo-specific contracts without renumbering or inherited stage claims', t => {
  for (const [repo, branch] of [['sb-dev/legal-skills', 'feat/bootstrap-3'], ['sb-dev/software-engineering-skills', 'feat/bootstrap-3'], ['sb-dev/game-development-skills', 'feat/bootstrap-3'], ['sb-dev/business-building-skills', 'feat/bootstrap-4']]) {
    const f = fixture(t, repo, branch); const p = planInstall(f); applyPlan(p, p.head);
    const c = fs.readFileSync(path.join(f.target, 'docs/research-logs/2026-09-17-bootstrap-execution-contract.md'), 'utf8');
    assert.ok(c.includes(repo) && c.includes(branch) && c.includes(spec));
    assert.doesNotMatch(c, /\{\{|Stage 17 is next|Stage 1.*16.*complete|inherited accepted state/i);
    for (const name of skillNames) assert.equal(fs.readFileSync(path.join(f.target, `.claude/skills/${name}/SKILL.md`), 'utf8'), fs.readFileSync(path.join(root, `docs/bootstrap/runtime/${name}/SKILL.md`), 'utf8'));
  }
});

test('final ignore rules protect both private directories despite earlier exceptions', t => {
  const f = fixture(t); write(f.target, '.gitignore', 'node_modules/\n/books/\n!books/\n'); commit(f);
  const p = planInstall(f); applyPlan(p, p.head);
  assert.equal(git(f.target, 'check-ignore', 'books/nested/source.PDF'), 'books/nested/source.PDF');
  assert.equal(git(f.target, 'check-ignore', '.firecrawl/result.json'), '.firecrawl/result.json');
});

test('rejects invalid installation dates and source revision identifiers', t => {
  const f = fixture(t);
  assert.throws(() => planInstall({ ...f, date: '2026-02-30' }), /Invalid installation date/);
  assert.throws(() => planInstall({ ...f, sourceRef: 'main' }), /full central/);
  assert.throws(() => planInstall({ ...f, spec: '../escape-new-project-bootstrap-process.md' }), /existing governing/);
});

test('source policy covers actual attachments, uppercase PDFs, deduplication and absent fresh-session sources', () => {
  const c = fs.readFileSync(path.join(root, 'docs/bootstrap/runtime/direct-source-extraction/SKILL.md'), 'utf8');
  for (const term of ['attachments', '.PDF', 'duplicate', 'reacquired', 'Firecrawl', 'permission']) assert.ok(c.includes(term));
  const b = fs.readFileSync(path.join(root, 'docs/bootstrap/runtime/bootstrap/SKILL.md'), 'utf8');
  assert.match(b, /including lettered stages and pack sub-stages/);
  assert.match(b, /Do not commit the stage a second time/);
  assert.doesNotMatch(b, /books must.*always|five new books/i);
});
