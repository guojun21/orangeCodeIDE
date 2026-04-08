#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { getAllSliceIds, ROOT } from './watch-rebuilt-slices.mjs';
import { acquireDirectoryLock, releaseDirectoryLock } from './directory-lock.mjs';
import { resolveRuntimeInputRoot } from './runtime-config.mjs';

const PHASE = 'rebuilt';
const ASSEMBLY = 'rebuilt-runtime';
const PREPARE_LOCK_PATH = path.join(ROOT, '.prepare-rebuilt-runtime.lock');

function runNodeScript(scriptName, args = []) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName), ...args], {
    cwd: ROOT,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`${scriptName} failed with exit code ${result.status ?? 1}`);
  }
}

const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});

const sliceIds = getAllSliceIds();

await acquireDirectoryLock(PREPARE_LOCK_PATH, {
  label: 'prepare lock',
});

try {
  runNodeScript('prepare-phase2-entrypoints.mjs', ['--runtime-input-root', runtimeInputRoot]);
  for (const sliceId of sliceIds) {
    runNodeScript('build-rebuilt-slice.mjs', ['--slice', sliceId, '--phase', PHASE]);
  }

  const overrideArgs = [];
  for (const sliceId of sliceIds) {
    overrideArgs.push('--slice', sliceId);
  }
  overrideArgs.push('--phase', PHASE);

  runNodeScript('prepare-runtime-override.mjs', overrideArgs);
  runNodeScript('sync-rebuilt-extension-signatures.mjs', ['--runtime-input-root', runtimeInputRoot]);
  runNodeScript('assemble-runtime-from-slices.mjs', ['--assembly', ASSEMBLY, '--runtime-input-root', runtimeInputRoot]);
} finally {
  releaseDirectoryLock(PREPARE_LOCK_PATH);
}

console.log(path.join(ROOT, 'recovered', PHASE, 'runtime-app'));
