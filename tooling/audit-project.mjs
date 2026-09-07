import fs from 'node:fs';
import path from 'node:path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: pnpm audit:project -- <path-to-production-skills-repo>');
  process.exit(2);
}

const root = path.resolve(target);
const rel = value => path.join(root, value);
const exists = value => fs.existsSync(rel(value));
const listDirs = value => {
  const dir = rel(value);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name);
};
const listFiles = value => {
  const dir = rel(value);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(entry => entry.isFile()).map(entry => entry.name);
};

const check = (status, message, evidence = []) => ({ status, message, evidence });

const docs = listFiles('docs');
const skills = listDirs('skills');
const examples = listDirs('examples');
const specPrefixes = ['01-', '02-', '03-', '04-', '05-', '06-'];
const representedSpecs = specPrefixes.filter(prefix => docs.some(file => file.startsWith(prefix)));

const levelCoverage = {};
for (let level = 1; level <= 5; level += 1) {
  const matching = examples.filter(name => name.startsWith(`level-${level}-`));
  levelCoverage[level] = matching;
}

const checks = {
  readme: exists('README.md')
    ? check('pass', 'README.md exists.', ['README.md'])
    : check('fail', 'README.md is required.', []),

  skills: skills.length > 0
    ? check('pass', `Found ${skills.length} skill package(s).`, skills.map(name => `skills/${name}`))
    : check('fail', 'At least one installable skill package is required.', []),

  docs: exists('docs')
    ? check('pass', 'docs/ exists.', ['docs/'])
    : check('fail', 'docs/ is required.', []),

  six_spec_responsibilities: representedSpecs.length === 6
    ? check('pass', 'All six numbered specification responsibilities are represented.', representedSpecs)
    : check('warn', `Found ${representedSpecs.length}/6 numbered specification responsibilities. Equivalent legacy documents may still satisfy the contract and require manual review.`, representedSpecs),

  examples: exists('examples')
    ? check('pass', 'examples/ exists.', ['examples/'])
    : check('fail', 'examples/ is required.', []),

  progressive_levels: Object.values(levelCoverage).every(items => items.length >= 3)
    ? check('pass', 'Five progressive levels each contain at least three primary example directories.', Object.entries(levelCoverage).flatMap(([level, items]) => items.map(name => `level ${level}: examples/${name}`)))
    : check('warn', 'The family target is five progressive levels with three primary examples per level. Directory naming may be domain-specific; review manually if equivalent coverage exists.', Object.entries(levelCoverage).map(([level, items]) => `level ${level}: ${items.length}`)),

  evaluation_surface: exists('evals') || exists('benchmarks') || exists('tests')
    ? check('pass', 'At least one evaluation surface exists.', ['evals', 'benchmarks', 'tests'].filter(exists).map(name => `${name}/`))
    : check('fail', 'At least one evaluation surface is required.', []),

  extension_pack_contract: docs.some(file => file.startsWith('05-'))
    ? check('pass', 'Numbered Extension Pack/customisation contract is represented.', docs.filter(file => file.startsWith('05-')).map(file => `docs/${file}`))
    : check('warn', 'No numbered 05 Extension Pack/customisation specification found. Equivalent legacy documentation may require manual review.', []),

  extension_pack_catalogue: docs.some(file => file.startsWith('06-'))
    ? check('pass', 'Numbered Extension Pack catalogue is represented.', docs.filter(file => file.startsWith('06-')).map(file => `docs/${file}`))
    : check('warn', 'No numbered 06 Extension Pack catalogue found. Equivalent legacy documentation may require manual review.', []),

  pack_authoring_capability: skills.some(name => /pack|extension/i.test(name))
    ? check('pass', 'A pack/extension authoring-related skill package is represented.', skills.filter(name => /pack|extension/i.test(name)).map(name => `skills/${name}`))
    : check('warn', 'No obvious pack-authoring skill package was found by name. Domain-native naming may require manual review.', []),

  installation_guidance: exists('README.md')
    ? check('pass', 'Installation guidance can be reviewed from README.md; semantic completeness remains project-owned.', ['README.md'])
    : check('not-applicable', 'README.md is missing, so installation guidance cannot be inspected.', []),

  pactwright_boundary: exists('integrations/pactwright.yml')
    ? check('warn', 'Pactwright integration exists; verify manually that it contains compatibility/bindings only.', ['integrations/pactwright.yml'])
    : check('not-applicable', 'No Pactwright integration is present.', []),
};

const summary = { pass: 0, warn: 0, fail: 0, not_applicable: 0 };
for (const result of Object.values(checks)) {
  if (result.status === 'not-applicable') summary.not_applicable += 1;
  else summary[result.status] += 1;
}

console.log(JSON.stringify({
  project: root,
  checked_at: new Date().toISOString(),
  summary,
  checks,
}, null, 2));

if (summary.fail > 0) process.exit(1);
