#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEEP_ZONE_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const DEEP_ZONE_CANARY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const COMPOSER_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-runtime-gate.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-admission.json');

const MAIN_CANDIDATE = {
  waveId: 'DC3A',
  moduleId: 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
  sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
  runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
  rationale: [
    'tiny browser-scope filter/types-like module with no visible DOM/component/widget touch points',
    'already present in startup-loader input and small enough to stay fully auditable at admission time',
    'safer than the next browser-path composer runner-ups because it exposes a narrower initialization surface',
    'fits the current composer lane rule of continuing from proven util/types-style slices before stateful holders',
  ],
  riskClass: 'tiny-browser-filter-planning-only',
};

const RUNNER_UPS = [
  {
    moduleId: 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
    rank: 1,
    whyNotNow: 'still tiny, but carries file-change handler semantics that are broader than the plan-mode filter string in composerModelFilters.js',
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
    rank: 2,
    whyNotNow: 'interface-shaped browser entry but still broader in calling footprint than composerModelFilters.js',
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
    rank: 3,
    whyNotNow: 'util candidate remains viable, but debug-log handling is still a wider fallback surface than the filter-only admission target',
  },
];

const BLOCKED_GROUPS = {
  alreadyProvenComposerSingles: [
    'out-build/vs/workbench/contrib/composer/common/composerUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js',
  ],
  alreadyProvenComposerBatch: [
    'out-build/vs/workbench/contrib/composer/common/composerUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js',
  ],
  statefulOrBroaderHolders: [
    'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
  ],
  uiSurfaceOrHooks: [
    'out-build/vs/workbench/contrib/composer/browser/renderBrowserEditor.js',
    'out-build/vs/workbench/contrib/composer/browser/components/AgentContextTabDirtyIndicator.js',
    'out-build/vs/workbench/contrib/composer/browser/hooks/useComposerHoverTooltip.js',
    'out-build/vs/workbench/contrib/composer/browser/hooks/useAutoVerticalScroll.js',
    'out-build/vs/workbench/contrib/composer/browser/components/DOMTreeView.js',
  ],
};

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const deepZoneAdmission = readJson(DEEP_ZONE_ADMISSION_PATH);
  const deepZoneCanary = readJson(DEEP_ZONE_CANARY_PATH);
  const composerRuntimeGate = readJson(COMPOSER_RUNTIME_GATE_PATH);
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const composerLane = (deepZoneAdmission.deepZones ?? []).find((entry) => entry.lane === 'contrib-composer');
  const composerLanePlan = (deepZoneCanary.lanePlans ?? []).find((entry) => entry.lane === 'contrib-composer');

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'third-candidate-admission',
    sources: {
      deepZoneAdmission: normalizePath(path.relative(ROOT, DEEP_ZONE_ADMISSION_PATH)),
      deepZoneCanary: normalizePath(path.relative(ROOT, DEEP_ZONE_CANARY_PATH)),
      composerRuntimeGate: normalizePath(path.relative(ROOT, COMPOSER_RUNTIME_GATE_PATH)),
      composerSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      composerContextLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      composerBatchLiveGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneStatus: composerLane?.status ?? null,
      laneRecommendation: composerLane?.nextRecommendedFocus ?? null,
      nextExecutableLane: deepZoneAdmission.decision?.nextExecutableLane ?? null,
      nextExecutableStep: deepZoneAdmission.decision?.nextExecutableStep ?? null,
      canaryRecommendation: composerLanePlan?.recommendation ?? null,
      firstSingleLiveModuleId: composerSingleLiveGate.enabledIds?.[0] ?? null,
      firstSingleLiveWaveId: composerSingleLiveGate.expectedWaveId ?? null,
      secondSingleLiveModuleId: composerContextLiveGate.enabledIds?.[0] ?? null,
      secondSingleLiveWaveId: composerContextLiveGate.expectedWaveId ?? null,
      firstMicroBatchWaveId: composerBatchLiveGate.expectedWaveId ?? null,
      firstMicroBatchEnabledCount: Array.isArray(composerBatchLiveGate.enabledIds) ? composerBatchLiveGate.enabledIds.length : null,
    },
    stability: {
      latestAcceptAt: accept.generatedAt ?? null,
      acceptRecorded: quality.stability?.acceptRecorded === true,
      headlessVerifyPassed: quality.stability?.headlessVerifyPassed === true,
      rolloutGatePassed: quality.stability?.startupLoaderRolloutGatePassed === true,
      deepZoneAdmissionStillGreen: quality.stability?.startupModuleResolutionDeepZoneAdmissionPassed === true,
    },
    selectionRules: [
      'must stay inside contrib-composer lane only',
      'must remain narrower than existing browser-path runner-ups',
      'must not directly touch DOM/component/widget editor surface',
      'must already exist in startup-loader input and overlay manifest',
      'must not already be a proven composer single-live or included in the proven composer micro-batch',
      'must keep reviewChanges frozen and browser held while composer continuation planning advances',
    ],
    approvedCandidate: MAIN_CANDIDATE,
    runnerUps: RUNNER_UPS,
    blockedGroups: BLOCKED_GROUPS,
    comparisons: {
      notComposerFileChangeHandlerTypes: 'composerFileChangeHandlerTypes.js stays deferred because handler semantics are still broader than the plan-mode filter string',
      notComposerChatServiceInterface: 'composerChatServiceInterface.js remains viable but is still a wider interface entry than composerModelFilters.js',
      notDebugLogFileUtils: 'debugLogFileUtils.js is useful later, but debug-log behavior is a wider live-admission surface than the filter-only candidate',
      notAlreadyProven: 'composerUtils.js and composerContextServiceTypes.js are excluded because they are already proven single-live and micro-batch members',
    },
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DC3A',
      nextApprovedAction: 'composer-third-dedicated-no-op-runtime-plan',
      runtimeGatePlannedInThisPhase: false,
      livePlannedInThisPhase: false,
      reviewChangesLaneFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
