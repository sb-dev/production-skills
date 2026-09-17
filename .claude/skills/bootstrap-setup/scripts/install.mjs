import fs from 'node:fs';
import path from 'node:path';
import { createHash, randomUUID } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..');
export const skillNames = ['bootstrap', 'bootstrap-stage-execution', 'bootstrap-research', 'direct-source-extraction'];
const digest = value => createHash('sha256').update(value).digest('hex');
const exists = file => { try { fs.lstatSync(file); return true; } catch (e) { if (e.code === 'ENOENT') return false; throw e; } };

function git(root, args, input) {
  const r = spawnSync('git', ['-C', root, ...args], { encoding: 'utf8', input, timeout: 20000 });
  if (r.error || r.status !== 0) throw new Error(`Git precondition failed: ${args[0]}`);
  return r.stdout.trim();
}

function safePath(root, relative) {
  if (!relative || path.isAbsolute(relative) || relative.includes('\\') || relative.split('/').some(p => !p || p === '..' || p === '.')) {
    throw new Error('Expected a repository-relative path without traversal');
  }
  let file = root;
  const segments = relative.split('/');
  for (let i = 0; i < segments.length; i++) {
    file = path.join(file, segments[i]);
    if (exists(file)) {
      const stat = fs.lstatSync(file);
      if (stat.isSymbolicLink()) throw new Error(`Refusing symlink destination: ${relative}`);
      if (i < segments.length - 1 && !stat.isDirectory()) throw new Error(`Non-directory parent: ${relative}`);
    }
  }
  if (exists(file) && !fs.statSync(file).isFile()) throw new Error(`Expected a regular file: ${relative}`);
  return file;
}

function read(root, relative) {
  const file = safePath(root, relative);
  return exists(file) ? fs.readFileSync(file, 'utf8') : null;
}

function repositoryFromUrl(url) {
  const m = /^(?:https:\/\/github\.com\/|git@github\.com:|ssh:\/\/git@github\.com\/)([^/]+\/[^/]+?)\/?$/.exec(url);
  return m?.[1].replace(/\.git$/, '').toLowerCase();
}

export function validatePayload(root = sourceRoot) {
  for (const name of skillNames) {
    const text = read(root, `docs/bootstrap/runtime/${name}/SKILL.md`);
    const frontmatter = text?.match(/^---\n([\s\S]*?)\n---\n/)?.[1];
    if (!frontmatter || !frontmatter.split('\n').includes(`name: ${name}`)) throw new Error(`Skill name/path mismatch: ${name}`);
    const flag = name === 'bootstrap' ? 'disable-model-invocation: true' : 'user-invocable: false';
    if (!frontmatter.split('\n').includes(flag)) throw new Error(`Missing invocation control: ${name}`);
  }
}

function render(template, values) {
  if (!template) throw new Error('Missing contract template');
  for (const [key, value] of Object.entries(values)) {
    if (!template.includes(`{{${key}}}`)) throw new Error(`Missing template field: ${key}`);
    template = template.replaceAll(`{{${key}}}`, value);
  }
  if (/\{\{[^}]+\}\}/.test(template)) throw new Error('Unresolved contract placeholder');
  return template;
}

function inspectTarget(options) {
  const { target, repo, branch, spec, date, sourceRef } = options;
  if (!/^sb-dev\/[A-Za-z0-9_.-]+$/.test(repo ?? '') || repo === 'sb-dev/production-skills') throw new Error('Specify a target sb-dev repository, not the central repository');
  if (!branch || ['main', 'master'].includes(branch)) throw new Error('An explicit non-main feature branch is required');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? '') || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) throw new Error('Invalid installation date');
  if (!/^[a-f0-9]{40}$/.test(sourceRef ?? '')) throw new Error('A full central source commit SHA is required');
  if (!target || !exists(target) || fs.lstatSync(target).isSymbolicLink()) throw new Error('Target must be an existing non-symlink checkout');
  const root = fs.realpathSync(target);
  const central = fs.realpathSync(options.sourceRoot ?? sourceRoot);
  if (root === central || root.startsWith(central + path.sep)) throw new Error('Target checkout must be outside the central checkout');
  if (fs.realpathSync(git(root, ['rev-parse', '--show-toplevel'])) !== root) throw new Error('Target must be the repository root');
  git(root, ['check-ref-format', '--branch', branch]);
  if (git(root, ['branch', '--show-current']) !== branch) throw new Error('Working branch differs from the requested branch');
  if (repositoryFromUrl(git(root, ['remote', 'get-url', 'origin'])) !== repo.toLowerCase()) throw new Error('Target origin differs from the requested repository');
  git(root, ['diff', '--cached', '--quiet']);
  if (git(root, ['ls-files', '-z', '--', 'books', '.firecrawl'])) throw new Error('Private source or retrieval files are tracked; review separately before installation');
  if (exists(path.join(root, '.claude/bootstrap'))) throw new Error('Legacy .claude/bootstrap needs an explicitly reviewed migration');
  if (!/^docs\/research-logs\/[^/]+-new-project-bootstrap-process\.md$/.test(spec ?? '') || read(root, spec) === null) throw new Error('An existing governing bootstrap specification is required');
  git(root, ['ls-files', '--error-unmatch', '--', spec]);
  return { root, central, head: git(root, ['rev-parse', 'HEAD']) };
}

export function planInstall(options) {
  const { root, central, head } = inspectTarget(options);
  validatePayload(central);
  const { repo, branch, spec, date, sourceRef } = options;
  const contents = new Map();
  for (const name of skillNames) contents.set(`.claude/skills/${name}/SKILL.md`, read(central, `docs/bootstrap/runtime/${name}/SKILL.md`));
  contents.set('docs/bootstrap-guide.md', read(central, 'docs/bootstrap/runtime/bootstrap-guide.md'));
  contents.set('docs/claude-code-web-firecrawl-setup.md', read(central, 'docs/bootstrap/claude-code-web-firecrawl-setup.md'));
  if ([...contents.values()].some(v => v === null)) throw new Error('Incomplete canonical payload');

  const logs = path.join(root, 'docs/research-logs');
  const contracts = fs.readdirSync(logs).filter(f => /bootstrap.*execution-contract\.md$/.test(f));
  const matching = contracts.filter(f => read(root, `docs/research-logs/${f}`).includes(`**Working branch:** \`${branch}\``));
  if (matching.length > 1) throw new Error('Multiple contracts match the requested branch; resolve explicitly');
  const contractPath = `docs/research-logs/${matching[0] ?? `${date}-bootstrap-execution-contract.md`}`;
  const existingContract = read(root, contractPath);
  const configured = existingContract?.match(/^\*\*Configured:\*\* (\d{4}-\d{2}-\d{2})/m)?.[1] ?? date;
  let contract = render(read(central, 'docs/bootstrap/runtime/bootstrap-execution-contract-template.md'), {
    REPOSITORY: repo, BRANCH: branch, SPEC_PATH: spec, DATE: configured, SOURCE_REVISION: sourceRef,
  });
  // Avoid churn for a new invocation date or an unrelated central commit.
  const stripProvenance = s => s.replace(/^\*\*Runtime source:\*\*.*$/m, '');
  if (existingContract && stripProvenance(existingContract) === stripProvenance(contract) && [...contents].every(([p, c]) => read(root, p) === c)) contract = existingContract;
  contents.set(contractPath, contract);

  let ignore = read(root, '.gitignore') ?? '';
  const privateRules = '/books/\n/.firecrawl/\n';
  if (!ignore.endsWith(privateRules)) {
    if (ignore && !ignore.endsWith('\n')) ignore += '\n';
    ignore += privateRules;
  }
  contents.set('.gitignore', ignore);
  requireCleanOrDesired(root, contents);
  const approvals = options.approvals ?? {};
  const changes = [];
  for (const [relative, content] of contents) {
    const before = read(root, relative);
    if (before === content) continue;
    const previousSha256 = before === null ? null : digest(before);
    const action = before === null ? 'add' : relative === '.gitignore' ? 'merge' : 'replace';
    changes.push({ path: relative, action, previousSha256, nextSha256: digest(content), approved: action !== 'replace' || approvals[relative] === previousSha256 });
  }
  for (const [relative, hash] of Object.entries(approvals)) {
    const item = changes.find(c => c.path === relative && c.action === 'replace');
    if (!item || hash !== item.previousSha256) throw new Error('Replacement approval is stale or outside the installation plan');
  }
  return { root, head, repo, branch, changes, contents };
}

function requireCleanOrDesired(root, contents) {
  git(root, ['diff', '--cached', '--quiet']);
  const dirty = git(root, ['diff', '--name-only', '-z']).split('\0').filter(Boolean);
  for (const relative of dirty) {
    if (!contents.has(relative) || read(root, relative) !== contents.get(relative)) {
      throw new Error('Uncommitted tracked changes require review before installation');
    }
  }
}

export function applyPlan(plan, expectedHead) {
  if (expectedHead !== plan.head || git(plan.root, ['rev-parse', 'HEAD']) !== expectedHead) throw new Error('Target HEAD changed or --expect-head is missing');
  if (git(plan.root, ['branch', '--show-current']) !== plan.branch) throw new Error('Branch changed after preview');
  if (repositoryFromUrl(git(plan.root, ['remote', 'get-url', 'origin'])) !== plan.repo.toLowerCase()) throw new Error('Origin changed after preview');
  requireCleanOrDesired(plan.root, plan.contents);
  if (plan.changes.some(c => !c.approved)) throw new Error('Existing content conflicts: review and explicitly approve exact replacement hashes');
  for (const item of plan.changes) {
    const current = read(plan.root, item.path);
    if ((current === null ? null : digest(current)) !== item.previousSha256) throw new Error('Destination changed after preview');
  }
  for (const item of plan.changes) {
    const destination = safePath(plan.root, item.path);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    const temp = `${destination}.bootstrap-${randomUUID()}`;
    try {
      fs.writeFileSync(temp, plan.contents.get(item.path), { encoding: 'utf8', flag: 'wx' });
      fs.renameSync(temp, destination);
    } finally {
      if (exists(temp)) fs.unlinkSync(temp);
    }
  }
  const ignored = git(plan.root, ['check-ignore', '--no-index', '--stdin'], 'books/example.pdf\n.firecrawl/example.json\n').split('\n');
  if (!ignored.includes('books/example.pdf') || !ignored.includes('.firecrawl/example.json')) throw new Error('Private directory ignore validation failed');
  git(plan.root, ['diff', '--check']);
  return plan.changes.map(c => c.path);
}

function main(argv) {
  const options = { approvals: {} };
  const flags = { '--target': 'target', '--repo': 'repo', '--branch': 'branch', '--spec': 'spec', '--date': 'date', '--source-ref': 'sourceRef', '--expect-head': 'expectedHead' };
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i];
    if (flag === '--apply') { options.apply = true; continue; }
    if (flag === '--help') {
      console.log('Preview: install.mjs --target PATH --repo sb-dev/REPO --branch BRANCH --spec PATH --date YYYY-MM-DD --source-ref SHA\nApply: add --apply --expect-head SHA. Approved replacement: --approve PATH=SHA256. No network or Git mutations are performed.');
      return;
    }
    const value = argv[++i];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${flag}`);
    if (flag === '--approve') {
      const match = /^(.*)=([a-f0-9]{64})$/.exec(value);
      if (!match) throw new Error('Approval requires PATH=SHA256');
      options.approvals[match[1]] = match[2];
    } else if (flags[flag]) options[flags[flag]] = value;
    else throw new Error(`Unknown argument: ${flag}`);
  }
  const plan = planInstall(options);
  if (options.apply) applyPlan(plan, options.expectedHead);
  console.log(JSON.stringify({ mode: options.apply ? 'applied' : 'preview', repository: plan.repo, branch: plan.branch, head: plan.head, changes: plan.changes }, null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(process.argv.slice(2)); }
  catch (error) { console.error(`Bootstrap setup: ${error.message}`); process.exitCode = 1; }
}
