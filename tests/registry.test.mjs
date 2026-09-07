import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('registry/projects');

test('registry contains the three existing evidence projects', () => {
  for (const id of ['music-production-skills','narrative-production-skills','video-production-skills']) {
    assert.ok(fs.existsSync(path.join(dir, `${id}.json`)), id);
  }
});

test('all registry entries have unique ids', () => {
  const entries = fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(file => JSON.parse(fs.readFileSync(path.join(dir,file),'utf8')));
  assert.equal(new Set(entries.map(e => e.id)).size, entries.length);
});
