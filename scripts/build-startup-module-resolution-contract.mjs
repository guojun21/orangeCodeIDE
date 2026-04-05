#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_CANARY_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-canary-plan.json');
const DEFAULT_OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-contract.json');
const DEFAULT_RUNTIME_COPY_PATH = path.join(
  ROOT,
  'recovered',
  'startup-loader',
  'overrides',
  '.shopeecode',
  'startup-loader',
  'module-resolution-contract.json',
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let canaryPlanPath = DEFAULT_CANARY_PLAN_PATH;
  let outputPath = DEFAULT_OUTPUT_PATH;
  let runtimeCopyPath = DEFAULT_RUNTIME_COPY_PATH;
  let waveId = 'S1';
  let mode = 'no-op-observable';
  let resolverEnabled = false;
  const enabledLanes = new Set();
  const enabledModules = new Set();
  let skipRuntimeCopy = false;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--canary-plan') {
      index += 1;
      canaryPlanPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--output') {
      index += 1;
      outputPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--runtime-copy') {
      index += 1;
      runtimeCopyPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--mode') {
      index += 1;
      mode = argv[index];
      continue;
    }
    if (arg === '--wave-id') {
      index += 1;
      waveId = argv[index];
      continue;
    }
    if (arg === '--enable-resolver') {
      resolverEnabled = true;
      continue;
    }
    if (arg === '--enable-lane') {
      index += 1;
      enabledLanes.add(argv[index]);
      continue;
    }
    if (arg === '--enable-module') {
      index += 1;
      enabledModules.add(argv[index]);
      continue;
    }
    if (arg === '--skip-runtime-copy') {
      skipRuntimeCopy = true;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return {
    canaryPlanPath,
    outputPath,
    runtimeCopyPath,
    waveId,
    mode,
    resolverEnabled,
    enabledLanes,
    enabledModules,
    skipRuntimeCopy,
  };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function indexMicroWaves(canaryPlan) {
  const map = {};
  for (const wave of canaryPlan.microWaves || []) {
    map[wave.id] = wave;
  }
  return map;
}

function buildContract(canaryPlanPath, options = {}) {
  const {
    waveId = 'S1',
    mode = 'no-op-observable',
    resolverEnabled = false,
    enabledLanes = new Set(),
    enabledModules = new Set(),
  } = options;
  const canaryPlan = readJson(canaryPlanPath);
  const waveIndex = indexMicroWaves(canaryPlan);
  const selectedWave = waveIndex[waveId];
  if (!selectedWave) {
    throw new Error(`Wave not found in canary plan: ${waveId}`);
  }
  const canaryModules = (selectedWave.modules || []).map((moduleEntry) => ({
    id: moduleEntry.id,
    lane: moduleEntry.lane,
    selectedLayer: moduleEntry.selectedLayer,
    selectedTargetFile: moduleEntry.selectedTargetFile,
    selectionReason: moduleEntry.selectionReason ?? selectedWave.label,
  }));

  const laneToggles = {
    'services-canary': false,
    'services-low-risk': false,
    'services-broader': false,
    foundation: false,
  };

  const perModuleKillSwitch = Object.fromEntries(
    canaryModules.map((moduleEntry) => [moduleEntry.id, false]),
  );

  const contract = {
    generatedAt: new Date().toISOString(),
    sourceCanaryPlanPath: normalizePath(path.relative(ROOT, canaryPlanPath)),
    mode,
    defaults: {
      resolverEnabled,
      laneToggles,
      perModuleKillSwitch,
      stickyDisabledModules: [],
    },
    canary: {
      waveId,
      totalCount: canaryModules.length,
      modules: canaryModules.map((moduleEntry) => ({
        id: moduleEntry.id,
        lane: moduleEntry.lane,
        selectedLayer: moduleEntry.selectedLayer,
        selectedTargetFile: moduleEntry.selectedTargetFile,
        selectionReason: moduleEntry.selectionReason,
      })),
    },
    laneGroups: {
      S1: (waveIndex.S1?.modules || []).map((moduleEntry) => moduleEntry.id),
      S2: (waveIndex.S2?.modules || []).map((moduleEntry) => moduleEntry.id),
      S3: (waveIndex.S3?.modules || []).map((moduleEntry) => moduleEntry.id),
      F1: (waveIndex.F1?.modules || []).map((moduleEntry) => moduleEntry.id),
    },
    diagnostics: {
      requiredFields: canaryPlan.diagnosticContract?.requiredFields || [],
      reasonCodes: canaryPlan.diagnosticContract?.reasonCodes || [],
      counters: [
        'overlayHitCount',
        'originalPassCount',
        'fallbackCount',
        'stickyDisabledCount',
      ],
      eventShape: {
        moduleId: 'string',
        lane: 'string',
        result: 'overlay-hit | original-pass | fallback-hit',
        fallbackReason: 'string | null',
        elapsedMs: 'number',
        selectedTargetFile: 'string | null',
        timestamp: 'string',
      },
    },
    guardrails: {
      firstRealTakeoverAllowedLanes: waveId === 'F1' ? ['contrib-appLayout', 'common'] : ['services', 'common'],
      forbiddenLanesForPhase1: ['contrib-composer', 'contrib-reviewChanges', 'browser'],
      exportSignatureCheckRequired: true,
      fallbackOnResolverError: true,
      fallbackOnTimeout: true,
      fallbackOnSignatureMismatch: true,
    },
  };

  for (const lane of enabledLanes) {
    if (Object.hasOwn(contract.defaults.laneToggles, lane)) {
      contract.defaults.laneToggles[lane] = true;
    }
  }

  if (enabledModules.size > 0) {
    for (const moduleId of Object.keys(contract.defaults.perModuleKillSwitch)) {
      contract.defaults.perModuleKillSwitch[moduleId] = !enabledModules.has(moduleId);
    }
  }

  return contract;
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`);
}

function main() {
  const {
    canaryPlanPath,
    outputPath,
    runtimeCopyPath,
    waveId,
    mode,
    resolverEnabled,
    enabledLanes,
    enabledModules,
    skipRuntimeCopy,
  } = parseArgs(process.argv.slice(2));
  const contract = buildContract(canaryPlanPath, {
    waveId,
    mode,
    resolverEnabled,
    enabledLanes,
    enabledModules,
  });

  writeJson(outputPath, contract);
  if (!skipRuntimeCopy) {
    writeJson(runtimeCopyPath, contract);
  }

  console.log(`Startup module resolution contract: ${normalizePath(path.relative(ROOT, outputPath))}`);
  if (!skipRuntimeCopy) {
    console.log(`Runtime copy: ${normalizePath(path.relative(ROOT, runtimeCopyPath))}`);
  }
  console.log(`Wave: ${contract.canary.waveId}`);
  console.log(`Mode: ${contract.mode}`);
  console.log(`Canary modules: ${contract.canary.totalCount}`);
}

main();
