#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'startup-runtime-loader-stage-registry.json');
const DEFAULT_CONTAINER_ROOT = path.join(
  ROOT,
  'recovered',
  'startup-loader',
  'overrides',
  '.shopeecode',
  'startup-loader'
);
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-loader-runtime-overlay-manifest.json');
const DEFAULT_RESOLUTION_CONTRACT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-contract.json'
);
const WORKBENCH_PROXY_BUILT_PATH = path.join(
  ROOT,
  'recovered',
  'rebuilt',
  'built',
  'workbench-desktop-main-proxy.js'
);
const ORIGINAL_WORKBENCH_BUNDLE_PATH = path.join(
  ROOT,
  'out',
  'vs',
  'workbench',
  'workbench.desktop.main.js'
);

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let containerRoot = DEFAULT_CONTAINER_ROOT;
  let outputPath = DEFAULT_OUTPUT;
  let resolutionContractPath = DEFAULT_RESOLUTION_CONTRACT_PATH;
  let cleanTarget = true;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--container-root') {
      i += 1;
      containerRoot = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--resolution-contract') {
      i += 1;
      resolutionContractPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--no-clean-target') {
      cleanTarget = false;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { registryPath, containerRoot, outputPath, resolutionContractPath, cleanTarget };
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function sha256(filePath) {
  const hash = crypto.createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function main() {
  const { registryPath, containerRoot, outputPath, resolutionContractPath, cleanTarget } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const resolutionContract = fs.existsSync(resolutionContractPath)
    ? JSON.parse(fs.readFileSync(resolutionContractPath, 'utf8'))
    : null;
  const inputRoot = path.join(containerRoot, 'input');
  const manifestPath = path.join(containerRoot, 'manifest.json');
  const bridgePath = path.join(containerRoot, 'bridge.js');
  const resolutionContractRuntimePath = path.join(containerRoot, 'module-resolution-contract.json');
  const workbenchOverrideRoot = path.join(
    ROOT,
    'recovered',
    'startup-loader',
    'overrides',
    'out',
    'vs',
    'workbench'
  );
  const workbenchProxyPath = path.join(workbenchOverrideRoot, 'workbench.desktop.main.js');
  const workbenchOriginalSidecarPath = path.join(
    workbenchOverrideRoot,
    'workbench.desktop.main.original.js'
  );

  if (cleanTarget) {
    fs.rmSync(containerRoot, {
      recursive: true,
      force: true,
      maxRetries: 10,
      retryDelay: 100,
    });
  }

  const results = registry.results.map((entry) => {
    if (entry.status === 'skipped-original') {
      return {
        id: entry.id,
        lane: entry.lane,
        status: entry.status,
        sourceFile: null,
        runtimeLoaderFile: null,
      };
    }

    const sourcePath = path.join(ROOT, entry.targetFile);
    const runtimeLoaderPath = path.join(inputRoot, entry.id);
    ensureDir(runtimeLoaderPath);
    fs.copyFileSync(sourcePath, runtimeLoaderPath);

    return {
      id: entry.id,
      lane: entry.lane,
      status: 'materialized',
      sourceFile: entry.targetFile,
      runtimeLoaderFile: normalizePath(path.relative(ROOT, runtimeLoaderPath)),
      sha256: sha256(runtimeLoaderPath),
    };
  });

  const stagedCount = results.filter((entry) => entry.status === 'materialized').length;
  const skippedOriginalCount = results.filter((entry) => entry.status === 'skipped-original').length;

  const runtimeManifest = {
    generatedAt: new Date().toISOString(),
    sourceRegistryPath: normalizePath(path.relative(ROOT, registryPath)),
    sourceResolutionContractPath: resolutionContract
      ? normalizePath(path.relative(ROOT, resolutionContractPath))
      : null,
    containerRoot: normalizePath(path.relative(ROOT, containerRoot)),
    inputRoot: normalizePath(path.relative(ROOT, inputRoot)),
    totalSelected: registry.totalSelected,
    stagedCount,
    skippedOriginalCount,
    results,
  };

  ensureDir(manifestPath);
  if (resolutionContract) {
    ensureDir(resolutionContractRuntimePath);
    fs.writeFileSync(resolutionContractRuntimePath, JSON.stringify(resolutionContract, null, 2));
  }

  const bridgeModuleSource = `const manifest = ${JSON.stringify(runtimeManifest, null, 2)};
const resolutionContract = ${JSON.stringify(resolutionContract, null, 2)};
const moduleMap = new Map(
  manifest.results
    .filter((entry) => entry.status === 'materialized' && entry.runtimeLoaderFile)
    .map((entry) => [entry.id, entry])
);
const laneGroups = new Map(
  Object.entries(resolutionContract?.laneGroups ?? {}).flatMap(([waveId, ids]) =>
    ids.map((id) => [id, waveId])
  )
);
const explicitWaveToggleMap = new Map(Object.entries(resolutionContract?.waveToggleMap ?? {}));
const laneToggleByWave = new Map([
  ['S1', 'services-canary'],
  ['S2', 'services-low-risk'],
  ['S3', 'services-broader'],
  ['F1', 'foundation'],
]);
const diagnosticsState = {
  mode: resolutionContract?.mode ?? 'unavailable',
  startedAt: new Date().toISOString(),
  counters: {
    overlayHitCount: 0,
    originalPassCount: 0,
    fallbackCount: 0,
    stickyDisabledCount: 0,
  },
  stickyDisabledModules: [...(resolutionContract?.defaults?.stickyDisabledModules ?? [])],
  events: [],
  lastEvent: null,
};
function toPlain(value) {
  return JSON.parse(JSON.stringify(value));
}
function resolveToggleKey(id) {
  const waveId = laneGroups.get(id);
  return explicitWaveToggleMap.get(waveId) ?? laneToggleByWave.get(waveId) ?? null;
}
function buildProbeResult(id) {
  const entry = moduleMap.get(id) ?? null;
  const toggleKey = resolveToggleKey(id);
  const resolverEnabled = resolutionContract?.defaults?.resolverEnabled === true;
  const laneEnabled = toggleKey ? resolutionContract?.defaults?.laneToggles?.[toggleKey] === true : false;
  const moduleEnabled = entry ? resolutionContract?.defaults?.perModuleKillSwitch?.[id] !== true : false;
  let result = 'original-pass';
  let fallbackReason = null;
  if (!entry) {
    fallbackReason = 'no-overlay-entry';
  } else if (!moduleEnabled) {
    fallbackReason = 'disabled-module';
  } else if (!resolverEnabled) {
    fallbackReason = 'disabled-global';
  } else if (!laneEnabled) {
    fallbackReason = 'disabled-lane';
  } else {
    if (resolutionContract?.mode === 'no-op-observable') {
      fallbackReason = 'original-fallback';
    } else {
      result = 'overlay-hit';
    }
  }
  return {
    moduleId: id,
    lane: entry?.lane ?? null,
    waveId: laneGroups.get(id) ?? null,
    resolverEnabled,
    laneEnabled,
    moduleEnabled,
    result,
    fallbackReason,
    elapsedMs: 0,
    selectedTargetFile: entry?.runtimeLoaderFile ?? null,
    timestamp: new Date().toISOString(),
  };
}
function pushDiagnostic(event) {
  diagnosticsState.events.push(event);
  diagnosticsState.lastEvent = event;
  if (diagnosticsState.events.length > 200) {
    diagnosticsState.events.shift();
  }
  if (event.result === 'overlay-hit') {
    diagnosticsState.counters.overlayHitCount += 1;
  } else if (event.result === 'fallback-hit') {
    diagnosticsState.counters.fallbackCount += 1;
  } else {
    diagnosticsState.counters.originalPassCount += 1;
  }
  diagnosticsState.counters.stickyDisabledCount = diagnosticsState.stickyDisabledModules.length;
  return event;
}
const bridge = {
  status: 'loaded',
  source: 'recovered/startup-loader/overrides/.shopeecode/startup-loader/bridge.js',
  generatedAt: manifest.generatedAt,
  stagedCount: manifest.stagedCount,
  skippedOriginalCount: manifest.skippedOriginalCount,
  mode: resolutionContract?.mode ?? 'manifest-only',
  contract: resolutionContract,
  has(id) {
    return moduleMap.has(id);
  },
  get(id) {
    return moduleMap.get(id) ?? null;
  },
  entries() {
    return [...moduleMap.values()];
  },
  getCanaryModules() {
    return [...(resolutionContract?.canary?.modules ?? [])];
  },
  getResolutionContract() {
    return resolutionContract;
  },
  getDiagnostics() {
    return toPlain(diagnosticsState);
  },
  resetDiagnostics() {
    diagnosticsState.events = [];
    diagnosticsState.lastEvent = null;
    diagnosticsState.counters = {
      overlayHitCount: 0,
      originalPassCount: 0,
      fallbackCount: 0,
      stickyDisabledCount: diagnosticsState.stickyDisabledModules.length,
    };
    return this.getDiagnostics();
  },
  probeResolution(id) {
    return pushDiagnostic(buildProbeResult(id));
  },
  manifest,
};
globalThis.__SHOPEE_STARTUP_LOADER__ = bridge;
export { bridge as default, manifest, resolutionContract };
`;
  fs.writeFileSync(bridgePath, bridgeModuleSource);

  ensureDir(workbenchProxyPath);
  fs.copyFileSync(WORKBENCH_PROXY_BUILT_PATH, workbenchProxyPath);
  fs.copyFileSync(ORIGINAL_WORKBENCH_BUNDLE_PATH, workbenchOriginalSidecarPath);

  runtimeManifest.bridgeFile = normalizePath(path.relative(ROOT, bridgePath));
  runtimeManifest.resolutionContractFile = resolutionContract
    ? normalizePath(path.relative(ROOT, resolutionContractRuntimePath))
    : null;
  runtimeManifest.workbenchProxyFile = normalizePath(path.relative(ROOT, workbenchProxyPath));
  runtimeManifest.workbenchOriginalSidecarFile = normalizePath(
    path.relative(ROOT, workbenchOriginalSidecarPath)
  );
  fs.writeFileSync(manifestPath, JSON.stringify(runtimeManifest, null, 2));
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(runtimeManifest, null, 2));

  console.log(`Startup loader runtime overlay manifest: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Materialized: ${stagedCount}`);
  console.log(`Skipped(original): ${skippedOriginalCount}`);
}

main();
