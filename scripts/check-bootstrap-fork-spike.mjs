#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

import { ROOT } from './paths.mjs';
const PHASE = 'rebuilt';
const PROFILE = 'bootstrap-fork-spike';
const RESULT_PATH = path.join(ROOT, 'mapped', 'bootstrap-fork-spike-check.json');
const PROBE_ENTRY_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'bootstrap-fork-spike-entry.js');
const PROBE_OUTPUT_PATH = path.join(ROOT, 'mapped', 'bootstrap-fork-spike-probe.json');

function runNodeScript(scriptName, args = [], env = {}) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', scriptName), ...args], {
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

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

runNodeScript('prepare-rebuilt-runtime.mjs');

fs.mkdirSync(path.dirname(PROBE_ENTRY_PATH), { recursive: true });
fs.writeFileSync(
  PROBE_ENTRY_PATH,
  `import fs from 'fs';

const outputPath = process.env.SHOPEECODE_BOOTSTRAP_FORK_PROBE;
const payload = {
  executed: true,
  marker: globalThis.__SHOPEE_BOOTSTRAP_FORK__ ?? null,
  hasProductJson: !!globalThis._VSCODE_PRODUCT_JSON,
  hasPackageJson: !!globalThis._VSCODE_PACKAGE_JSON,
  productName: globalThis._VSCODE_PRODUCT_JSON?.nameShort ?? globalThis._VSCODE_PRODUCT_JSON?.nameLong ?? null,
  packageName: globalThis._VSCODE_PACKAGE_JSON?.name ?? null,
  fileRoot: globalThis._VSCODE_FILE_ROOT ?? null,
  nlsLanguage: globalThis._VSCODE_NLS_LANGUAGE ?? null,
};

fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2) + '\\n');
process.exit(0);
`
);

fs.rmSync(PROBE_OUTPUT_PATH, { force: true });

const runtimeBootstrapPath = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'bootstrap-fork.js');
const result = spawnSync(process.execPath, [runtimeBootstrapPath], {
  cwd: ROOT,
  encoding: 'utf8',
  env: {
    ...process.env,
    SHOPEECODE_REBUILT_PROFILE: PROFILE,
    VSCODE_ESM_ENTRYPOINT: 'bootstrap-fork-spike-entry',
    SHOPEECODE_BOOTSTRAP_FORK_PROBE: PROBE_OUTPUT_PATH,
    VSCODE_HANDLES_UNCAUGHT_ERRORS: 'true',
    VSCODE_DEV: 'true',
  },
});

const builtPath = path.join(ROOT, 'recovered', PHASE, 'built', 'bootstrap-fork-runtime.js');
const runtimeHash = fs.existsSync(runtimeBootstrapPath) ? sha256(runtimeBootstrapPath) : null;
const builtHash = fs.existsSync(builtPath) ? sha256(builtPath) : null;
const probeExists = fs.existsSync(PROBE_OUTPUT_PATH);
const probe = probeExists ? JSON.parse(fs.readFileSync(PROBE_OUTPUT_PATH, 'utf8')) : null;

const checks = [
  {
    id: 'process-exit',
    passed: (result.status ?? 1) === 0,
    detail: { status: result.status ?? 1, stderr: result.stderr?.trim() ?? '' },
  },
  {
    id: 'probe-file-written',
    passed: probeExists,
    detail: { probePath: PROBE_OUTPUT_PATH },
  },
  {
    id: 'direct-runtime-hash',
    passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
    detail: { builtPath, runtimeBootstrapPath, builtHash, runtimeHash },
  },
  {
    id: 'bootstrap-marker',
    passed: probe?.marker?.source === 'rebuilt/src/bootstrapFork/index.js',
    detail: probe?.marker ?? null,
  },
  {
    id: 'globals-exposed',
    passed: probe?.hasProductJson === true && probe?.hasPackageJson === true,
    detail: probe,
  },
  {
    id: 'file-root-out',
    passed: typeof probe?.fileRoot === 'string' && probe.fileRoot.endsWith('/out'),
    detail: { fileRoot: probe?.fileRoot ?? null },
  },
];

const payload = {
  generatedAt: new Date().toISOString(),
  profile: PROFILE,
  passed: checks.every((entry) => entry.passed),
  builtPath,
  runtimeBootstrapPath,
  probeOutputPath: PROBE_OUTPUT_PATH,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(RESULT_PATH);
