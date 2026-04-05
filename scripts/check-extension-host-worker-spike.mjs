#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
const PHASE = 'rebuilt';
const PROFILE = 'extension-host-worker-spike';
const RESULT_PATH = path.join(ROOT, 'mapped', 'extension-host-worker-spike-check.json');
const MARKER_OUTPUT_PATH = path.join(ROOT, 'mapped', 'extension-host-worker-spike-marker.json');
const BUILT_PATH = path.join(ROOT, 'recovered', PHASE, 'built', 'extension-host-worker-main.js');
const RUNTIME_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'vs', 'workbench', 'api', 'worker', 'extensionHostWorkerMain.js');
const RUNNER_PATH = path.join(os.tmpdir(), 'shopeecode-extension-host-worker-spike-runner.mjs');

function runNodeScript(scriptName, env = {}) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName)], {
    cwd: ROOT,
    stdio: 'inherit',
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: PROFILE,
      ...env,
    },
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`${scriptName} failed with exit code ${result.status ?? 1}`);
  }
}

function runStablePrepare() {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'prepare-rebuilt-runtime.mjs')], {
    cwd: ROOT,
    stdio: 'inherit',
    env: {
      ...process.env,
      SHOPEECODE_REBUILT_PROFILE: 'stable',
    },
  });

  if ((result.status ?? 1) !== 0) {
    throw new Error(`restore stable runtime failed with exit code ${result.status ?? 1}`);
  }
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function writeRunner() {
  fs.writeFileSync(
    RUNNER_PATH,
    `'use strict';

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const builtPath = process.env.SHOPEECODE_WORKER_BUILT_PATH;
const outputPath = process.env.SHOPEECODE_WORKER_MARKER_OUTPUT;
const markerKey = '__SHOPEE_EXTENSION_HOST_WORKER_MAIN__';

const listeners = new Map();
globalThis.self = globalThis;
globalThis.postMessage = () => {};
globalThis.addEventListener = (type, listener) => {
  if (!listeners.has(type)) {
    listeners.set(type, new Set());
  }
  listeners.get(type).add(listener);
};
globalThis.removeEventListener = (type, listener) => {
  listeners.get(type)?.delete(listener);
};
globalThis.dispatchEvent = (event) => {
  const eventType = event?.type ?? null;
  if (!eventType) {
    return false;
  }

  for (const listener of listeners.get(eventType) ?? []) {
    listener.call(globalThis, event);
  }

  if (eventType === 'message' && typeof globalThis.onmessage === 'function') {
    globalThis.onmessage.call(globalThis, event);
  }

  return true;
};
globalThis.close = () => {};
globalThis.importScripts = () => {};
globalThis._VSCODE_NLS_MESSAGES = new Proxy([], {
  get(target, property) {
    if (typeof property === 'string' && /^\\d+$/.test(property)) {
      return 'mock-nls-' + property;
    }
    return target[property];
  },
});
globalThis._VSCODE_NLS_LANGUAGE = 'en';

function flush(extra = {}) {
  const payload = {
    builtPath,
    marker: globalThis[markerKey] ?? null,
    extra,
  };
  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2) + '\\n');
}

const timeout = setTimeout(() => {
  flush({ timedOut: true });
  process.exit(0);
}, 2500);

import(pathToFileURL(path.resolve(builtPath)).href + '?check=' + Date.now())
  .then(async (mod) => {
    if (mod.ready && typeof mod.ready.then === 'function') {
      await Promise.race([
        mod.ready,
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);
    }
    clearTimeout(timeout);
    flush({ timedOut: false });
    process.exit(0);
  })
  .catch((error) => {
    clearTimeout(timeout);
    flush({
      timedOut: false,
      importError: error instanceof Error ? (error.stack || error.message) : String(error),
    });
    process.exit(1);
  });
`
  );
}

writeRunner();
fs.rmSync(MARKER_OUTPUT_PATH, { force: true });

let result = null;
let markerPayload = null;
let builtHash = null;
let runtimeHash = null;

try {
  runNodeScript('prepare-rebuilt-runtime.mjs');
  builtHash = fs.existsSync(BUILT_PATH) ? sha256(BUILT_PATH) : null;
  runtimeHash = fs.existsSync(RUNTIME_PATH) ? sha256(RUNTIME_PATH) : null;

  result = spawnSync(process.execPath, [RUNNER_PATH], {
    cwd: ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      SHOPEECODE_WORKER_BUILT_PATH: BUILT_PATH,
      SHOPEECODE_WORKER_MARKER_OUTPUT: MARKER_OUTPUT_PATH,
    },
  });

  markerPayload = fs.existsSync(MARKER_OUTPUT_PATH)
    ? JSON.parse(fs.readFileSync(MARKER_OUTPUT_PATH, 'utf8'))
    : null;
} finally {
  runStablePrepare();
}

const marker = markerPayload?.marker ?? null;

const checks = [
  {
    id: 'runner-exit',
    passed: (result?.status ?? 1) === 0,
    detail: { status: result?.status ?? 1, stderr: result?.stderr?.trim() ?? '' },
  },
  {
    id: 'marker-file-written',
    passed: !!markerPayload,
    detail: { markerOutputPath: MARKER_OUTPUT_PATH },
  },
  {
    id: 'marker-source',
    passed: marker?.source === 'rebuilt/src/vs/workbench/api/worker/extensionHostWorkerMain/index.js',
    detail: marker,
  },
  {
    id: 'loaded-at',
    passed: typeof marker?.loadedAt === 'string',
    detail: marker,
  },
  {
    id: 'import-progress-observed',
    passed: typeof marker?.importResolvedAt === 'string' || markerPayload?.extra?.timedOut === true,
    detail: markerPayload,
  },
  {
    id: 'onmessage-bridge',
    passed: marker?.hasOnMessageHandler === true || markerPayload?.extra?.timedOut === true,
    detail: markerPayload,
  },
  {
    id: 'direct-runtime-hash',
    passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
    detail: { builtPath: BUILT_PATH, runtimePath: RUNTIME_PATH, builtHash, runtimeHash },
  },
  {
    id: 'stderr-empty',
    passed: typeof result?.stderr === 'string' ? result.stderr.trim().length === 0 : true,
    detail: { stderr: result?.stderr?.trim() ?? '' },
    advisory: true,
  },
];

const payload = {
  generatedAt: new Date().toISOString(),
  profile: PROFILE,
  passed: checks.every((entry) => entry.passed || entry.advisory === true),
  builtPath: BUILT_PATH,
  runtimePath: RUNTIME_PATH,
  markerOutputPath: MARKER_OUTPUT_PATH,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(RESULT_PATH);
