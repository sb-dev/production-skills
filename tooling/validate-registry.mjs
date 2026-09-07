import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const dir = path.join(root, 'registry', 'projects');
const allowedStatus = new Set(['proposed','researching','specified','scaffolded','working','benchmarked','mature']);
const allowedPactwright = new Set(['none','planned','compatible']);
const required = ['id','repository','domain','status','capabilities','pactwright'];
const errors = [];
const ids = new Set();

for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()) {
  const full = path.join(dir, file);
  let data;
  try { data = JSON.parse(fs.readFileSync(full, 'utf8')); }
  catch (error) { errors.push(`${file}: invalid JSON: ${error.message}`); continue; }

  for (const key of required) if (!(key in data)) errors.push(`${file}: missing ${key}`);
  if (data.id && ids.has(data.id)) errors.push(`${file}: duplicate id ${data.id}`);
  if (data.id) ids.add(data.id);
  if (data.id && file !== `${data.id}.json`) errors.push(`${file}: filename must match id`);
  if (data.status && !allowedStatus.has(data.status)) errors.push(`${file}: invalid status ${data.status}`);
  if (data.pactwright && !allowedPactwright.has(data.pactwright)) errors.push(`${file}: invalid pactwright value ${data.pactwright}`);
  if (data.repository && !/^https:\/\/github\.com\/sb-dev\/[A-Za-z0-9_.-]+$/.test(data.repository)) errors.push(`${file}: invalid repository URL`);
  if (data.capabilities && (!Array.isArray(data.capabilities) || data.capabilities.length === 0)) errors.push(`${file}: capabilities must be a non-empty array`);
}

if (errors.length) {
  console.error(`Registry validation failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Registry valid: ${ids.size} projects.`);
