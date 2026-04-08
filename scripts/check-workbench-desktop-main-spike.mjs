#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { launchRuntime } from '../test/driver/launch.mjs';
import { waitForCondition } from '../test/driver/helpers.mjs';
import {
  createIsolatedProbeUserDataDir,
} from './rebuilt-user-data.mjs';
import { ROOT } from './paths.mjs';
import { resolveRuntimeInputRoot } from './runtime-config.mjs';

const REAL_ROOT = fs.realpathSync(ROOT);
const PROFILE = 'workbench-desktop-main-spike';
const SLICE_ID = 'workbench-desktop-main-proxy';
const PHASE = 'rebuilt';
const DEBUG = process.env.SHOPEECODE_DEBUG_SPIKE === '1';
const RESULT_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const CONFIG_BASELINE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-configuration-baseline.json');
const EXPORT_BASELINE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-export-baseline.json');
const SHORT_PROBE_ROOT = path.join('/tmp', 'shc-spk');
const BUILT_PATH = path.join(ROOT, 'recovered', PHASE, 'built', 'workbench-desktop-main-proxy.js');
const RUNTIME_PATH = path.join(ROOT, 'recovered', PHASE, 'runtime-app', 'out', 'vs', 'workbench', 'workbench.desktop.main.js');
const RUNTIME_ORIGINAL_MODULE_PATH = path.join(
  ROOT,
  'recovered',
  PHASE,
  'runtime-app',
  'out',
  'vs',
  'workbench',
  'workbench.desktop.main.original.js'
);
const ORIGINAL_MODULE_URL = `vscode-file://vscode-app${path.join(
  REAL_ROOT,
  'recovered',
  PHASE,
  'runtime-app',
  'out',
  'vs',
  'workbench',
  'workbench.desktop.main.original.js'
)}`;

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

function debug(message, detail = null) {
  if (!DEBUG) {
    return;
  }
  if (detail == null) {
    console.error(`[wbm-spike] ${message}`);
    return;
  }
  console.error(`[wbm-spike] ${message}`, detail);
}

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

function readOptionalBuffer(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath);
}

function writeOptionalBuffer(filePath, value) {
  if (value == null) {
    fs.rmSync(filePath, { force: true });
    return;
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, value);
}

function prepareSpikeRuntime() {
  runNodeScript('build-rebuilt-slice.mjs', ['--slice', SLICE_ID, '--phase', PHASE]);
  fs.mkdirSync(path.dirname(RUNTIME_PATH), { recursive: true });
  fs.copyFileSync(BUILT_PATH, RUNTIME_PATH);
}

function restoreStableRuntime({ runtimeBackup, runtimeOriginalBackup }) {
  writeOptionalBuffer(RUNTIME_PATH, runtimeBackup);
  writeOptionalBuffer(RUNTIME_ORIGINAL_MODULE_PATH, runtimeOriginalBackup);
}

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

function uniqueSorted(values) {
  return [...new Set((values ?? []).filter((value) => typeof value === 'string'))].sort();
}

function readConfigBaseline() {
  if (!fs.existsSync(CONFIG_BASELINE_PATH)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(CONFIG_BASELINE_PATH, 'utf8'));
}

function readExportBaseline() {
  if (!fs.existsSync(EXPORT_BASELINE_PATH)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(EXPORT_BASELINE_PATH, 'utf8'));
}

const args = parseArgs(process.argv);
const runtimeInputRoot = resolveRuntimeInputRoot({
  explicitRoot: args['runtime-input-root'] ?? process.env.ORANGECODEIDE_RUNTIME_INPUT_ROOT ?? null,
});
const ORIGINAL_MODULE_PATH = path.join(
  runtimeInputRoot,
  'out',
  'vs',
  'workbench',
  'workbench.desktop.main.js'
);

const runtimeBackup = readOptionalBuffer(RUNTIME_PATH);
const runtimeOriginalBackup = readOptionalBuffer(RUNTIME_ORIGINAL_MODULE_PATH);

prepareSpikeRuntime();
fs.copyFileSync(ORIGINAL_MODULE_PATH, RUNTIME_ORIGINAL_MODULE_PATH);

const builtHash = fs.existsSync(BUILT_PATH) ? sha256(BUILT_PATH) : null;
const runtimeHash = fs.existsSync(RUNTIME_PATH) ? sha256(RUNTIME_PATH) : null;
const userDataDir = createIsolatedProbeUserDataDir({
  sourceDir: null,
  rootDir: SHORT_PROBE_ROOT,
  prefix: 'wbm',
});

let session = null;
let marker = null;
let checks = [];
let configurationBaseline = null;
let configurationDelta = null;
let exportBaseline = null;
let exportDelta = null;
let mainReturnContract = null;

try {
  debug('launch-runtime:start', { userDataDir });
  session = await launchRuntime({
    userDataDir,
    skipPrepare: true,
    cleanupPreviousLaunch: true,
    attachIfAvailable: false,
    extraEnv: {
      SHOPEECODE_REBUILT_PROFILE: PROFILE,
    },
  });

  marker = await waitForCondition(
    async () => {
      const value = await session.evaluateJson('window.__SHOPEE_WORKBENCH_DESKTOP_MAIN_PROXY__ ?? null');
      if (
        value?.source === 'rebuilt/src/vs/workbench/workbenchDesktopMain/index.js' &&
        typeof value.importResolvedAt === 'string'
      ) {
        return value;
      }
      return null;
    },
    {
      timeoutMs: 30000,
      description: 'workbench desktop main proxy marker',
    }
  );

  configurationBaseline = readConfigBaseline();
  exportBaseline = readExportBaseline();
  mainReturnContract = marker?.mainReturnContract ?? null;
  const currentConfigurationKeys = uniqueSorted(marker?.configurationKeys);
  const baselineConfigurationKeys = uniqueSorted(configurationBaseline?.configurationKeys);
  const currentExportKeys = uniqueSorted(marker?.originalExportKeys);
  const baselineExportKeys = uniqueSorted(exportBaseline?.exportKeys);
  const added = currentConfigurationKeys.filter((key) => !baselineConfigurationKeys.includes(key));
  const removed = baselineConfigurationKeys.filter((key) => !currentConfigurationKeys.includes(key));
  configurationDelta = {
    baselinePath: CONFIG_BASELINE_PATH,
    baselineCount: baselineConfigurationKeys.length,
    currentCount: currentConfigurationKeys.length,
    added,
    removed,
    addedCount: added.length,
    removedCount: removed.length,
  };
  const addedExports = currentExportKeys.filter((key) => !baselineExportKeys.includes(key));
  const removedExports = baselineExportKeys.filter((key) => !currentExportKeys.includes(key));
  exportDelta = {
    baselinePath: EXPORT_BASELINE_PATH,
    baselineCount: baselineExportKeys.length,
    currentCount: currentExportKeys.length,
    added: addedExports,
    removed: removedExports,
    addedCount: addedExports.length,
    removedCount: removedExports.length,
  };

  checks = [
    {
      id: 'runtime-started',
      passed: !!session,
      detail: { remoteDebuggingPort: session?.remoteDebuggingPort ?? null },
    },
    {
      id: 'marker-visible',
      passed: !!marker,
      detail: marker,
    },
    {
      id: 'marker-source',
      passed: marker?.source === 'rebuilt/src/vs/workbench/workbenchDesktopMain/index.js',
      detail: marker,
    },
    {
      id: 'import-resolved',
      passed: typeof marker?.importResolvedAt === 'string',
      detail: marker,
    },
    {
      id: 'main-export-present',
      passed: Array.isArray(marker?.originalExportKeys) && marker.originalExportKeys.includes('main'),
      detail: marker,
    },
    {
      id: 'original-module-url',
      passed: marker?.originalModuleUrl === ORIGINAL_MODULE_URL,
      detail: marker,
    },
    {
      id: 'tslib-interception',
      passed:
        marker?.tslibSource === 'rebuilt' &&
        Array.isArray(marker?.interceptedExportKeys) &&
        marker.interceptedExportKeys.includes('__extends') &&
        marker.interceptedExportKeys.includes('__assign'),
      detail: marker,
    },
    {
      id: 'configuration-keys-baseline',
      passed: added.length === 0 && removed.length === 0,
      detail: configurationDelta,
      advisory: true,
    },
    {
      id: 'export-keys-baseline',
      passed: addedExports.length === 0 && removedExports.length === 0,
      detail: exportDelta,
      advisory: true,
    },
    {
      id: 'main-return-contract',
      passed: !!mainReturnContract && typeof mainReturnContract.type === 'string',
      detail: mainReturnContract,
      advisory: true,
    },
    {
      id: 'direct-runtime-hash',
      passed: !!builtHash && !!runtimeHash && builtHash === runtimeHash,
      detail: {
        builtPath: BUILT_PATH,
        runtimePath: RUNTIME_PATH,
        builtHash,
        runtimeHash,
      },
    },
  ];
} finally {
  debug('finally:session-close:start');
  await session?.close();
  debug('finally:session-close:done');
  debug('finally:remove-user-data:start');
  fs.rmSync(userDataDir, { recursive: true, force: true });
  debug('finally:remove-user-data:done');
  debug('finally:restore-stable:start');
  restoreStableRuntime({ runtimeBackup, runtimeOriginalBackup });
  debug('finally:restore-stable:done');
}

let bundleFingerprint = null;
try {
  debug('fingerprint:start');
  const registryPath = path.join(ROOT, 'mapped', 'workbench-desktop-main-module-registry.json');
  const symbolIndexPath = path.join(ROOT, 'mapped', 'cursor-ui-symbol-index.json');
  const extractionPath = path.join(ROOT, 'mapped', 'packages-ui-component-extraction.json');
  const partitionPath = path.join(ROOT, 'mapped', 'packages-ui-partition.json');

  const registry = fs.existsSync(registryPath) ? JSON.parse(fs.readFileSync(registryPath, 'utf8')) : null;
  const symbolIdx = fs.existsSync(symbolIndexPath) ? JSON.parse(fs.readFileSync(symbolIndexPath, 'utf8')) : null;
  const extraction = fs.existsSync(extractionPath) ? JSON.parse(fs.readFileSync(extractionPath, 'utf8')) : null;
  const partition = fs.existsSync(partitionPath) ? JSON.parse(fs.readFileSync(partitionPath, 'utf8')) : null;

  bundleFingerprint = {
    moduleRegistryModules: registry?.totalModules ?? null,
    symbolIndexTotal: symbolIdx?.totalSymbols ?? null,
    symbolIndexCounts: symbolIdx?.countsByKind ?? null,
    extractedComponents: extraction?.extracted ?? null,
    extractedComponentIds: extraction?.results?.filter(r => r.status === 'extracted').map(r => r.id) ?? null,
    partitionRegions: partition?.summary?.regionCount ?? null,
    partitionCursorOwn: partition?.summary?.cursorOwnCount ?? null,
  };
  debug('fingerprint:done');
} catch { /* advisory — never block spike check */ }

checks.push({
  id: 'bundle-analysis-fingerprint',
  passed: bundleFingerprint !== null && (bundleFingerprint.moduleRegistryModules ?? 0) > 0,
  detail: bundleFingerprint,
  advisory: true,
});

const payload = {
  generatedAt: new Date().toISOString(),
  profile: PROFILE,
  runtimeInputRoot,
  passed: checks.every((entry) => entry.passed || entry.advisory === true),
  configurationBaselinePath: CONFIG_BASELINE_PATH,
  configurationDelta,
  exportBaselinePath: EXPORT_BASELINE_PATH,
  exportDelta,
  mainReturnContract,
  builtPath: BUILT_PATH,
  runtimePath: RUNTIME_PATH,
  bundleFingerprint,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(payload, null, 2) + '\n');
debug('result:written', { resultPath: RESULT_PATH, passed: payload.passed });
console.log(RESULT_PATH);
