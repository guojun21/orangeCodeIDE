#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { ROOT } from './paths.mjs';

const root = ROOT;
const rawRoot = path.join(root, 'raw', 'phase2', 'core-entrypoints');
const recoveredRoot = path.join(root, 'recovered', 'phase2', 'core-entrypoints');

const rawTargets = [
  'out/bootstrap-fork.js',
  'out/vs/code/electron-sandbox/workbench/workbench.js',
  'out/vs/base/parts/sandbox/electron-sandbox/preload.js',
  'out/main.js',
  'out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js',
  'out/vs/workbench/api/node/extensionHostProcess.js',
  'out/vs/workbench/workbench.desktop.main.js'
];

const readableTargets = [
  'out/bootstrap-fork.js',
  'out/vs/code/electron-sandbox/workbench/workbench.js',
  'out/vs/base/parts/sandbox/electron-sandbox/preload.js'
];

function ensureParent(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function resetDir(dir) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      fs.rmSync(dir, { recursive: true, force: true, maxRetries: 3, retryDelay: 50 });
      fs.mkdirSync(dir, { recursive: true });
      return;
    } catch (error) {
      if (!error || (error.code !== 'ENOTEMPTY' && error.code !== 'EBUSY' && error.code !== 'EPERM')) {
        throw error;
      }
    }
  }

  fs.rmSync(dir, { recursive: true, force: true, maxRetries: 10, retryDelay: 100 });
  fs.mkdirSync(dir, { recursive: true });
}

resetDir(rawRoot);
resetDir(recoveredRoot);

for (const rel of rawTargets) {
  const src = path.join(root, rel);
  const dst = path.join(rawRoot, rel);
  ensureParent(dst);
  fs.copyFileSync(src, dst);
}

for (const rel of readableTargets) {
  const src = path.join(root, rel);
  const dst = path.join(recoveredRoot, rel);
  ensureParent(dst);
  const formatted = execFileSync(
    'npx',
    ['-y', 'prettier@3.6.2', '--parser', 'babel', src],
    { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }
  );
  fs.writeFileSync(dst, formatted);
}

const manifest = {
  generatedAt: new Date().toISOString(),
  rawTargets,
  readableTargets
};

fs.writeFileSync(
  path.join(recoveredRoot, 'manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n'
);

console.log(path.join(recoveredRoot, 'manifest.json'));
