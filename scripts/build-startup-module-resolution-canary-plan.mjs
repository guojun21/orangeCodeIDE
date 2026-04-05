#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'startup-overlay-registry.json');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-module-resolution-canary-plan.json');

const DEFERRED_LANES = new Set(['contrib-composer', 'contrib-reviewChanges', 'browser']);
const FOUNDATION_LANES = new Set(['contrib-appLayout']);
const EARLY_LANES = new Set(['services', 'common']);

const PREFERRED_CANARY_IDS = [
  'out-build/vs/workbench/common/component.js',
  'out-build/vs/workbench/common/memento.js',
  'out-build/vs/workbench/common/resources.js',
  'out-build/vs/workbench/services/localization/common/locale.js',
  'out-build/vs/workbench/services/log/common/logConstants.js',
];

const HIGH_RISK_PATH_PATTERNS = [
  /\/browser\//i,
  /electron-browser/i,
  /webview/i,
  /widget/i,
  /panel/i,
  /terminal/i,
  /notebook/i,
  /tree/i,
  /list/i,
  /diff/i,
  /renderer/i,
  /statusbar/i,
  /titlebar/i,
  /toolbar/i,
  /contextmenu/i,
  /hover/i,
  /actionbar/i,
  /input/i,
  /native/i,
  /ipc/i,
  /remote/i,
  /worker/i,
];

const HIGH_RISK_CONTENT_PATTERNS = [
  { code: 'dom-touch', regex: /\b(document|window|HTMLElement|MutationObserver|ResizeObserver)\b/ },
  { code: 'global-mutation', regex: /globalThis\./ },
  { code: 'native-touch', regex: /\bipc\b|\belectron\b/i },
];

const DIAGNOSTIC_FIELDS = [
  'resolverEnabled',
  'laneEnabled',
  'moduleEnabled',
  'resolverHit',
  'resolverMiss',
  'fallbackReason',
  'lastError',
  'stickyDisabledModules',
];

const REASON_CODES = [
  'disabled-global',
  'disabled-lane',
  'disabled-module',
  'not-whitelisted',
  'no-overlay-entry',
  'overlay-load-failed',
  'export-signature-mismatch',
  'resolver-timeout',
  'sticky-disabled',
  'original-fallback',
];

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let outputPath = DEFAULT_OUTPUT;
  let canarySize = 5;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--canary-size') {
      i += 1;
      canarySize = Number.parseInt(argv[i], 10);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!Number.isInteger(canarySize) || canarySize < 1) {
    throw new Error(`Invalid --canary-size: ${canarySize}`);
  }

  return { registryPath, outputPath, canarySize };
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function countBy(items, pickKey) {
  const counts = {};
  for (const item of items) {
    const key = pickKey(item);
    counts[key] = (counts[key] ?? 0) + 1;
  }
  return counts;
}

function scoreModule(moduleEntry, inspectedContent) {
  let score = 0;

  if (moduleEntry.selectedLayer === 'beautified') {
    score += 20;
  } else if (moduleEntry.selectedLayer === 'raw') {
    score += 5;
  }

  if (moduleEntry.lane === 'services') {
    score += 30;
  } else if (moduleEntry.lane === 'common') {
    score += 24;
  } else if (moduleEntry.lane === 'contrib-appLayout') {
    score += 8;
  }

  if (moduleEntry.id.includes('/common/')) {
    score += 12;
  }

  if (moduleEntry.byteLength >= 150 && moduleEntry.byteLength <= 4000) {
    score += 18;
  } else if (moduleEntry.byteLength < 150) {
    score -= 10;
  } else if (moduleEntry.byteLength > 12000) {
    score -= 12;
  }

  if (!inspectedContent.flags.length) {
    score += 8;
  }

  return score;
}

function inspectModule(moduleEntry) {
  const selectedTargetFile = moduleEntry.selectedTargetFile ? path.join(ROOT, moduleEntry.selectedTargetFile) : null;
  const inspectedContent = {
    flags: [],
    lineCount: null,
  };

  if (selectedTargetFile && fs.existsSync(selectedTargetFile)) {
    const content = fs.readFileSync(selectedTargetFile, 'utf8');
    inspectedContent.lineCount = content.split('\n').length;
    for (const rule of HIGH_RISK_CONTENT_PATTERNS) {
      if (rule.regex.test(content)) {
        inspectedContent.flags.push(rule.code);
      }
    }
  }

  const reasons = [];
  let bucket = 'candidate-pool';

  if (moduleEntry.selectedLayer === 'original') {
    bucket = 'source-view-only';
    reasons.push('original-fallback');
  } else if (DEFERRED_LANES.has(moduleEntry.lane)) {
    bucket = 'source-view-only';
    reasons.push(`lane-deferred:${moduleEntry.lane}`);
  } else if (moduleEntry.byteLength > 20000) {
    bucket = 'do-not-touch-yet';
    reasons.push('too-large');
  }

  for (const pattern of HIGH_RISK_PATH_PATTERNS) {
    if (pattern.test(moduleEntry.id)) {
      bucket = bucket === 'source-view-only' ? bucket : 'do-not-touch-yet';
      reasons.push(`path-risk:${pattern}`);
    }
  }

  for (const flag of inspectedContent.flags) {
    bucket = bucket === 'source-view-only' ? bucket : 'do-not-touch-yet';
    reasons.push(`content-risk:${flag}`);
  }

  const score = scoreModule(moduleEntry, inspectedContent);

  return {
    ...moduleEntry,
    bucket,
    score,
    lineCount: inspectedContent.lineCount,
    reasons,
  };
}

function pickCanaryModules(candidatePool, canarySize) {
  const byId = new Map(candidatePool.map((entry) => [entry.id, entry]));
  const selected = [];

  for (const preferredId of PREFERRED_CANARY_IDS) {
    const entry = byId.get(preferredId);
    if (!entry) {
      continue;
    }
    selected.push({
      ...entry,
      selectionReason: 'preferred-safe-canary',
    });
  }

  if (selected.length >= canarySize) {
    return selected.slice(0, canarySize);
  }

  const taken = new Set(selected.map((entry) => entry.id));
  const ranked = [...candidatePool]
    .filter((entry) => !taken.has(entry.id))
    .sort((left, right) => right.score - left.score || left.byteLength - right.byteLength || left.id.localeCompare(right.id));

  for (const entry of ranked) {
    selected.push({
      ...entry,
      selectionReason: 'score-fill',
    });
    if (selected.length >= canarySize) {
      break;
    }
  }

  return selected;
}

function summarizeWave(id, label, modules) {
  return {
    id,
    label,
    totalCount: modules.length,
    modules: modules.map((entry) => ({
      id: entry.id,
      lane: entry.lane,
      selectedLayer: entry.selectedLayer,
      byteLength: entry.byteLength,
      score: entry.score,
      selectedTargetFile: entry.selectedTargetFile,
      reasons: entry.reasons,
    })),
  };
}

function buildPlan({ registryPath, canarySize }) {
  const registry = readJson(registryPath);
  const stagedModules = (registry.modules || []).filter((entry) => entry.selectedLayer !== 'original');
  const inspected = stagedModules.map(inspectModule);

  const sourceViewOnly = inspected.filter((entry) => entry.bucket === 'source-view-only');
  const doNotTouchYet = inspected.filter((entry) => entry.bucket === 'do-not-touch-yet');
  const candidatePool = inspected.filter((entry) => entry.bucket === 'candidate-pool');

  const candidateServicesCommon = candidatePool.filter((entry) => EARLY_LANES.has(entry.lane));
  const foundationCandidates = candidatePool.filter((entry) => FOUNDATION_LANES.has(entry.lane));

  const canaryModules = pickCanaryModules(candidateServicesCommon, canarySize);
  const canarySet = new Set(canaryModules.map((entry) => entry.id));

  const s2Modules = candidateServicesCommon
    .filter((entry) => !canarySet.has(entry.id))
    .sort((left, right) => right.score - left.score || left.byteLength - right.byteLength)
    .slice(0, 10);
  const s2Set = new Set(s2Modules.map((entry) => entry.id));

  const s3Modules = candidateServicesCommon
    .filter((entry) => !canarySet.has(entry.id) && !s2Set.has(entry.id))
    .sort((left, right) => right.score - left.score || left.byteLength - right.byteLength);

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    totals: {
      totalModules: registry.totalModules ?? registry.modules?.length ?? 0,
      stagedModules: stagedModules.length,
      sourceViewOnlyCount: sourceViewOnly.length,
      candidatePoolCount: candidatePool.length,
      doNotTouchYetCount: doNotTouchYet.length,
    },
    rules: {
      immediateLanes: ['services', 'common'],
      deferredLanes: [...DEFERRED_LANES],
      foundationLanes: [...FOUNDATION_LANES],
      highRiskPathPatterns: HIGH_RISK_PATH_PATTERNS.map((pattern) => pattern.toString()),
      highRiskContentFlags: HIGH_RISK_CONTENT_PATTERNS.map((rule) => rule.code),
      preferredCanaryIds: PREFERRED_CANARY_IDS,
    },
    diagnosticContract: {
      reasonCodes: REASON_CODES,
      requiredFields: DIAGNOSTIC_FIELDS,
      toggles: ['resolverEnabled', 'laneToggle', 'perModuleKillSwitch'],
    },
    microWaves: [
      summarizeWave('S0', 'source-view-only', sourceViewOnly),
      summarizeWave('S1', 'services/common canary', canaryModules),
      summarizeWave('S2', 'services/common low-risk', s2Modules),
      summarizeWave('S3', 'services/common broader', s3Modules),
      summarizeWave('F1', 'foundation pure', foundationCandidates),
      summarizeWave('H0', 'do-not-touch-yet', doNotTouchYet),
    ],
    buckets: {
      byLane: countBy(inspected, (entry) => `${entry.bucket}:${entry.lane}`),
      bySelectedLayer: countBy(inspected, (entry) => `${entry.bucket}:${entry.selectedLayer}`),
    },
    canaryModules: canaryModules.map((entry) => ({
      id: entry.id,
      lane: entry.lane,
      byteLength: entry.byteLength,
      lineCount: entry.lineCount,
      score: entry.score,
      selectedLayer: entry.selectedLayer,
      selectedTargetFile: entry.selectedTargetFile,
      selectionReason: entry.selectionReason,
      reasons: entry.reasons,
    })),
    sourceViewOnly: sourceViewOnly.map((entry) => ({
      id: entry.id,
      lane: entry.lane,
      reasons: entry.reasons,
    })),
    doNotTouchYet: doNotTouchYet.map((entry) => ({
      id: entry.id,
      lane: entry.lane,
      reasons: entry.reasons,
    })),
  };

  return report;
}

function main() {
  const { registryPath, outputPath, canarySize } = parseArgs(process.argv.slice(2));
  const report = buildPlan({ registryPath, canarySize });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup module resolution canary plan: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`staged=${report.totals.stagedModules} candidate=${report.totals.candidatePoolCount} source-view=${report.totals.sourceViewOnlyCount} hold=${report.totals.doNotTouchYetCount}`);
  console.log(`S1 canary=${report.canaryModules.length}`);
  for (const moduleEntry of report.canaryModules) {
    console.log(`- ${moduleEntry.id} [${moduleEntry.selectionReason}]`);
  }
}

main();
