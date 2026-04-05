#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_DEEP_ZONE_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const DEFAULT_CANARY_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-canary-plan.json');
const DEFAULT_OVERLAY_REGISTRY_PATH = path.join(ROOT, 'mapped', 'startup-overlay-registry.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let deepZonePlanPath = DEFAULT_DEEP_ZONE_PLAN_PATH;
  let canaryPlanPath = DEFAULT_CANARY_PLAN_PATH;
  let overlayRegistryPath = DEFAULT_OVERLAY_REGISTRY_PATH;
  let lane = null;
  let limit = 1;
  const moduleIds = [];
  let outputPath = null;
  let runtimeCopyPath = null;
  let waveId = 'DC1';
  let mode = 'no-op-observable';
  let resolverEnabled = false;
  let enableDedicatedLane = false;
  let skipRuntimeCopy = false;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--deep-zone-plan') {
      index += 1;
      deepZonePlanPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--canary-plan') {
      index += 1;
      canaryPlanPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--overlay-registry') {
      index += 1;
      overlayRegistryPath = path.isAbsolute(argv[index]) ? argv[index] : path.join(ROOT, argv[index]);
      continue;
    }
    if (arg === '--lane') {
      index += 1;
      lane = argv[index];
      continue;
    }
    if (arg === '--limit') {
      index += 1;
      limit = Number.parseInt(argv[index], 10);
      continue;
    }
    if (arg === '--module-id') {
      index += 1;
      moduleIds.push(argv[index]);
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
    if (arg === '--wave-id') {
      index += 1;
      waveId = argv[index];
      continue;
    }
    if (arg === '--mode') {
      index += 1;
      mode = argv[index];
      continue;
    }
    if (arg === '--enable-resolver') {
      resolverEnabled = true;
      continue;
    }
    if (arg === '--enable-dedicated-lane') {
      enableDedicatedLane = true;
      continue;
    }
    if (arg === '--skip-runtime-copy') {
      skipRuntimeCopy = true;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!lane) {
    throw new Error('Missing required --lane');
  }
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error(`Invalid --limit: ${limit}`);
  }
  if (!outputPath) {
    throw new Error('Missing required --output');
  }
  if (!runtimeCopyPath && !skipRuntimeCopy) {
    throw new Error('Missing required --runtime-copy');
  }

  return {
    deepZonePlanPath,
    canaryPlanPath,
    overlayRegistryPath,
    lane,
    limit,
    moduleIds,
    outputPath,
    runtimeCopyPath,
    waveId,
    mode,
    resolverEnabled,
    enableDedicatedLane,
    skipRuntimeCopy,
  };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function laneToggleKey(lane) {
  if (lane === 'contrib-composer') {
    return 'deep-zone-composer';
  }
  if (lane === 'contrib-reviewChanges') {
    return 'deep-zone-reviewChanges';
  }
  if (lane === 'browser') {
    return 'deep-zone-browser';
  }
  return `deep-zone-${lane.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
}

function buildContract(options) {
  const deepZonePlan = readJson(options.deepZonePlanPath);
  const canaryPlan = readJson(options.canaryPlanPath);
  const overlayRegistry = readJson(options.overlayRegistryPath);
  const lanePlan = (deepZonePlan.lanePlans ?? []).find((entry) => entry.lane === options.lane);
  if (!lanePlan) {
    throw new Error(`Lane not found in deep-zone plan: ${options.lane}`);
  }

  const selectableModules = [
    ...(lanePlan.noOpQueue ?? []),
    ...(lanePlan.holdQueue ?? []),
  ];
  const moduleById = new Map(selectableModules.map((moduleEntry) => [moduleEntry.id, moduleEntry]));
  let modules = options.moduleIds.length
    ? options.moduleIds.map((moduleId) => moduleById.get(moduleId)).filter(Boolean)
    : (lanePlan.noOpQueue ?? []).slice(0, options.limit);
  if (options.moduleIds.length && modules.length !== options.moduleIds.length) {
    const overlayEntries = overlayRegistry.modules ?? overlayRegistry.entries ?? [];
    const overlayById = new Map(overlayEntries.map((entry) => [entry.id, entry]));
    modules = options.moduleIds.map((moduleId) => {
      const inLane = moduleById.get(moduleId);
      if (inLane) {
        return inLane;
      }
      const overlayEntry = overlayById.get(moduleId);
      if (!overlayEntry) {
        return null;
      }
      return {
        id: overlayEntry.id,
        lane: options.lane,
        selectedLayer: overlayEntry.selectedLayer,
        selectedTargetFile: overlayEntry.selectedTargetFile,
        selectionReason: `cross-lane-explicit:${options.lane}`,
      };
    }).filter(Boolean);
  }
  if (!modules.length) {
    if (options.moduleIds.length) {
      throw new Error(`Requested module ids not found for lane ${options.lane}: ${options.moduleIds.join(', ')}`);
    }
    throw new Error(`No no-op candidates available for lane: ${options.lane}`);
  }
  if (options.moduleIds.length && modules.length !== options.moduleIds.length) {
    const knownIds = new Set(modules.map((moduleEntry) => moduleEntry.id));
    const missing = options.moduleIds.filter((moduleId) => !knownIds.has(moduleId));
    throw new Error(`Requested module ids not found for lane ${options.lane}: ${missing.join(', ')}`);
  }

  const toggleKey = laneToggleKey(options.lane);
  const laneToggles = {
    'services-canary': false,
    'services-low-risk': false,
    'services-broader': false,
    foundation: false,
    [toggleKey]: options.enableDedicatedLane,
  };
  const perModuleKillSwitch = Object.fromEntries(modules.map((moduleEntry) => [moduleEntry.id, false]));

  return {
    generatedAt: new Date().toISOString(),
    sourceDeepZonePlanPath: normalizePath(path.relative(ROOT, options.deepZonePlanPath)),
    sourceCanaryPlanPath: normalizePath(path.relative(ROOT, options.canaryPlanPath)),
    mode: options.mode,
    defaults: {
      resolverEnabled: options.resolverEnabled,
      laneToggles,
      perModuleKillSwitch,
      stickyDisabledModules: [],
    },
    canary: {
      waveId: options.waveId,
      totalCount: modules.length,
      modules: modules.map((moduleEntry) => ({
        id: moduleEntry.id,
        lane: moduleEntry.lane,
        selectedLayer: moduleEntry.selectedLayer,
        selectedTargetFile: moduleEntry.selectedTargetFile,
        selectionReason: `deep-zone-no-op:${options.lane}`,
      })),
    },
    laneGroups: {
      [options.waveId]: modules.map((moduleEntry) => moduleEntry.id),
    },
    waveToggleMap: {
      [options.waveId]: toggleKey,
    },
    diagnostics: {
      requiredFields: canaryPlan.diagnosticContract?.requiredFields ?? [],
      reasonCodes: canaryPlan.diagnosticContract?.reasonCodes ?? [],
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
      firstRealTakeoverAllowedLanes: [],
      forbiddenLanesForCurrentStage: ['contrib-reviewChanges', 'browser'],
      exportSignatureCheckRequired: true,
      fallbackOnResolverError: true,
      fallbackOnTimeout: true,
      fallbackOnSignatureMismatch: true,
      dedicatedLane: options.lane,
      dedicatedToggle: toggleKey,
    },
  };
}

function writeJson(filePath, payload) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`);
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const contract = buildContract(options);

  writeJson(options.outputPath, contract);
  if (!options.skipRuntimeCopy) {
    writeJson(options.runtimeCopyPath, contract);
  }

  console.log(`Startup module resolution selected contract: ${normalizePath(path.relative(ROOT, options.outputPath))}`);
  if (!options.skipRuntimeCopy) {
    console.log(`Runtime copy: ${normalizePath(path.relative(ROOT, options.runtimeCopyPath))}`);
  }
  console.log(`Wave: ${contract.canary.waveId}`);
  console.log(`Lane: ${options.lane}`);
  console.log(`Canary modules: ${contract.canary.totalCount}`);
}

main();
