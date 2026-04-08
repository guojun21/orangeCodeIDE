#!/usr/bin/env node

import path from 'path';
import { spawn, spawnSync } from 'child_process';
import { getAllSliceIds, watchRebuiltSources, ROOT } from './watch-rebuilt-slices.mjs';
import { getSharedRebuiltUserDataDir } from './rebuilt-user-data.mjs';
import { resolveRuntimeInputRoot } from './runtime-config.mjs';

const ELECTRON_VERSION = process.env.SHOPEECODEDEV_ELECTRON_VERSION ?? '39.8.3';
const USER_DATA_DIR = getSharedRebuiltUserDataDir(
  'SHOPEECODE_REBUILT_DEV_USER_DATA_DIR',
  'SHOPEECODE_REBUILT_USER_DATA_DIR'
);
const REMOTE_DEBUGGING_PORT = process.env.SHOPEECODE_REBUILT_DEV_DEBUG_PORT ?? '9334';
const PHASE = 'rebuilt';
const ASSEMBLY = 'rebuilt-runtime';
const PROBE_OUTPUT = path.join(ROOT, 'mapped', 'rebuilt-runtime-live-probe.json');
const PROBE_SCREENSHOT = '/tmp/shopeecode-rebuilt-live-probe.png';
const RUNTIME_INPUT_ROOT = resolveRuntimeInputRoot({
  explicitRoot: process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});

function runNodeScript(scriptName, args = []) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName), ...args], {
    cwd: ROOT,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`${scriptName} failed with exit code ${result.status ?? 1}`);
  }
}

function runBuild(sliceIds) {
  for (const sliceId of sliceIds) {
    runNodeScript('build-rebuilt-slice.mjs', ['--slice', sliceId, '--phase', PHASE]);
  }
}

function prepareRuntime(sliceIds) {
  const args = [];
  for (const sliceId of sliceIds) {
    args.push('--slice', sliceId);
  }
  args.push('--phase', PHASE);
  runNodeScript('prepare-runtime-override.mjs', args);
  runNodeScript('sync-rebuilt-extension-signatures.mjs', ['--runtime-input-root', RUNTIME_INPUT_ROOT]);
  runNodeScript('assemble-runtime-from-slices.mjs', ['--assembly', ASSEMBLY, '--runtime-input-root', RUNTIME_INPUT_ROOT]);
}

function runProbe() {
  runNodeScript('probe-runtime-port.mjs', [
    '--port',
    REMOTE_DEBUGGING_PORT,
    '--output',
    PROBE_OUTPUT,
    '--screenshot',
    PROBE_SCREENSHOT,
  ]);
}

function startElectron() {
  return spawn(
    'npx',
    [
      '-y',
      `electron@${ELECTRON_VERSION}`,
      path.join(ROOT, 'recovered', PHASE, 'runtime-app'),
      `--user-data-dir=${USER_DATA_DIR}`,
      `--remote-debugging-port=${REMOTE_DEBUGGING_PORT}`,
    ],
    {
      cwd: ROOT,
      stdio: 'inherit',
      detached: true,
    }
  );
}

async function stopElectron(child) {
  if (!child || child.killed) {
    return;
  }
  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch {
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 1500));
  try {
    process.kill(-child.pid, 0);
    process.kill(-child.pid, 'SIGKILL');
  } catch {}
}

let electronChild;
let rebuildTimer;
let rebuildRunning = false;
const pendingSlices = new Set();
const allSliceIds = getAllSliceIds();

async function rebuildAndRestart(reason, sliceIds = allSliceIds) {
  if (rebuildRunning) {
    sliceIds.forEach((sliceId) => pendingSlices.add(sliceId));
    return;
  }

  rebuildRunning = true;
  try {
    console.log(`[rebuilt-dev] rebuild start: ${reason} -> ${sliceIds.join(', ')}`);
    runNodeScript('prepare-phase2-entrypoints.mjs', ['--runtime-input-root', RUNTIME_INPUT_ROOT]);
    runBuild(sliceIds);
    prepareRuntime(allSliceIds);
    await stopElectron(electronChild);
    electronChild = startElectron();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    runProbe();
    console.log('[rebuilt-dev] rebuild complete');
  } finally {
    rebuildRunning = false;
    if (pendingSlices.size > 0) {
      const nextSlices = [...pendingSlices];
      pendingSlices.clear();
      await rebuildAndRestart('queued-change', nextSlices);
    }
  }
}

await rebuildAndRestart('initial');

const stopWatching = watchRebuiltSources({
  onEvent(event) {
    event.sliceIds.forEach((sliceId) => pendingSlices.add(sliceId));
    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(() => {
      const sliceIds = pendingSlices.size > 0 ? [...pendingSlices] : allSliceIds;
      pendingSlices.clear();
      rebuildAndRestart(event.relativePath, sliceIds).catch((error) => {
        console.error('[rebuilt-dev] rebuild failed', error);
      });
    }, 250);
  },
});

async function shutdown() {
  clearTimeout(rebuildTimer);
  stopWatching();
  await stopElectron(electronChild);
}

process.on('SIGINT', async () => {
  await shutdown();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await shutdown();
  process.exit(0);
});

await new Promise(() => {});
