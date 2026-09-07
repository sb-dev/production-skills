import fs from 'node:fs';
import path from 'node:path';

const target = process.argv[2];
if (!target) {
  console.error('Usage: pnpm audit:project -- <path-to-production-skills-repo>');
  process.exit(2);
}

const root = path.resolve(target);
const exists = rel => fs.existsSync(path.join(root, rel));
const checks = {
  readme: exists('README.md'),
  skills: exists('skills'),
  docs: exists('docs'),
  examples: exists('examples'),
  evaluation_surface: exists('evals') || exists('benchmarks') || exists('tests'),
};

const failed = Object.entries(checks).filter(([, ok]) => !ok);
console.log(JSON.stringify({ project: root, checked_at: new Date().toISOString(), checks }, null, 2));
if (failed.length) process.exit(1);
