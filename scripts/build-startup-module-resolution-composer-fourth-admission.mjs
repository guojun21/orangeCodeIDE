#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEEP_ZONE_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const DEEP_ZONE_CANARY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const COMPOSER_SINGLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-module-resolution-live-gate.json');
const COMPOSER_CONTEXT_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-context-module-resolution-live-gate.json');
const COMPOSER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-live-both-module-resolution-live-gate.json');
const COMPOSER_THIRD_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-composer-third-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-admission.json');

const MAIN_CANDIDATE = {
  waveId: 'DC4A',
  moduleId: 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
  sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
  runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
  rationale: [
    'tiny browser-scope handler-types module that remains non-DOM and non-component at admission time',
    'already present in startup-loader input and still small enough to stay fully auditable before dedicated runtime',
    'narrower than chat-service and blob-store shaped runner-ups because it stays type/contract oriented',
    'fits the composer lane rule of exhausting low-width browser-side utility and types surfaces before broader holders',
  ],
  riskClass: 'tiny-browser-handler-types-planning-only',
};

const RUNNER_UPS = [
  {
    moduleId: 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
    rank: 1,
    whyNotNow: 'interface-shaped browser entry remains viable but still fans out wider than file-change handler types at admission time',
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
    rank: 2,
    whyNotNow: 'debug-log helper stays useful later, but it still carries a broader fallback/diagnostics surface than handler types',
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
    rank: 3,
    whyNotNow: 'blob-store holder is meaningfully more stateful than the current fourth candidate and should stay deferred',
  },
];

const BLOCKED_GROUPS = {
  alreadyProvenComposerSingles: [
    'out-build/vs/workbench/contrib/composer/common/composerUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js',
    'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
  ],
  alreadyProvenComposerBatch: [
    'out-build/vs/workbench/contrib/composer/common/composerUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js',
  ],
  statefulOrBroaderHolders: [
    'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
    'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js',
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
  const composerSingleLiveGate = readJson(COMPOSER_SINGLE_LIVE_GATE_PATH);
  const composerContextLiveGate = readJson(COMPOSER_CONTEXT_LIVE_GATE_PATH);
  const composerBatchLiveGate = readJson(COMPOSER_BATCH_LIVE_GATE_PATH);
  const composerThirdLiveGate = readJson(COMPOSER_THIRD_LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const composerLane = (deepZoneAdmission.deepZones ?? []).find((entry) => entry.lane === 'contrib-composer');
  const composerLanePlan = (deepZoneCanary.lanePlans ?? []).find((entry) => entry.lane === 'contrib-composer');

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourth-candidate-admission',
    sources: {
      deepZoneAdmission: normalizePath(path.relative(ROOT, DEEP_ZONE_ADMISSION_PATH)),
      deepZoneCanary: normalizePath(path.relative(ROOT, DEEP_ZONE_CANARY_PATH)),
      composerSingleLiveGate: normalizePath(path.relative(ROOT, COMPOSER_SINGLE_LIVE_GATE_PATH)),
      composerContextLiveGate: normalizePath(path.relative(ROOT, COMPOSER_CONTEXT_LIVE_GATE_PATH)),
      composerBatchLiveGate: normalizePath(path.relative(ROOT, COMPOSER_BATCH_LIVE_GATE_PATH)),
      composerThirdLiveGate: normalizePath(path.relative(ROOT, COMPOSER_THIRD_LIVE_GATE_PATH)),
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
      thirdSingleLiveModuleId: composerThirdLiveGate.enabledIds?.[0] ?? null,
      thirdSingleLiveWaveId: composerThirdLiveGate.expectedWaveId ?? null,
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
      'must remain narrower than chat-service and stateful-holder runner-ups',
      'must not directly touch DOM/component/widget editor surface',
      'must already exist in startup-loader input and overlay manifest',
      'must not already be a proven composer single-live or included in the proven composer micro-batch',
      'must keep reviewChanges frozen and browser held while composer continuation planning advances',
    ],
    approvedCandidate: MAIN_CANDIDATE,
    runnerUps: RUNNER_UPS,
    blockedGroups: BLOCKED_GROUPS,
    comparisons: {
      notComposerChatServiceInterface: 'composerChatServiceInterface.js remains viable but still exposes a wider browser interface entry than composerFileChangeHandlerTypes.js',
      notDebugLogFileUtils: 'debugLogFileUtils.js is still useful later, but its diagnostics and fallback behavior is broader than the handler-types target',
      notComposerBlobStore: 'composerBlobStore.js remains too stateful for the current fourth-candidate admission step',
      notAlreadyProven: 'composerUtils.js, composerContextServiceTypes.js, and composerModelFilters.js are excluded because they are already proven single-live slices',
    },
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DC4A',
      nextApprovedAction: 'composer-fourth-dedicated-no-op-runtime-plan',
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
