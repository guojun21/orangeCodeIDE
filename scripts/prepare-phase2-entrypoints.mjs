#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { ROOT } from './paths.mjs';
import { resolveRuntimeInputRoot } from './runtime-config.mjs';

const root = ROOT;
const rawRoot = path.join(root, 'raw', 'phase2', 'core-entrypoints');
const recoveredRoot = path.join(root, 'recovered', 'phase2', 'core-entrypoints');
const runtimeInputStageRoot = path.join(root, 'recovered', 'phase2', 'runtime-input');

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

function parseArgs(argv) {
  const args = {};
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      continue;
    }
    const key = token.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = value;
    index += 1;
  }
  return args;
}

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

const args = parseArgs(process.argv);
const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: args['runtime-input-root'] ?? process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});

resetDir(rawRoot);
resetDir(recoveredRoot);
resetDir(runtimeInputStageRoot);

const stagedOutRoot = path.join(runtimeInputStageRoot, 'out');
fs.symlinkSync(path.join(runtimeInputRoot, 'out'), stagedOutRoot, 'dir');

for (const rel of rawTargets) {
  const src = path.join(runtimeInputRoot, rel);
  const dst = path.join(rawRoot, rel);
  ensureParent(dst);
  fs.copyFileSync(src, dst);
}

for (const rel of readableTargets) {
  const src = path.join(runtimeInputRoot, rel);
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
  runtimeInputRoot,
  runtimeInputStageRoot,
  rawTargets,
  readableTargets
};

fs.writeFileSync(
  path.join(recoveredRoot, 'manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n'
);

console.log(path.join(recoveredRoot, 'manifest.json'));
