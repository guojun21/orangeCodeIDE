#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CANARY_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-canary-plan.json');
const STAGE_REGISTRY_PATH = path.join(ROOT, 'mapped', 'startup-runtime-loader-stage-registry.json');
const DEEP_ZONE_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');

const PREFERRED_IDS = {
  'contrib-composer': [
    'out-build/vs/workbench/contrib/composer/common/composerUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js',
    'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
    'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
    'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
    'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
    'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js',
    'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
    'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
    'out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js',
    'out-build/vs/workbench/contrib/composer/browser/browserAnalytics.js',
    'out-build/vs/workbench/contrib/composer/browser/composerAgent.js',
    'out-build/vs/workbench/contrib/composer/browser/browserTabId.js',
    'out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js',
    'out-build/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextKeys.js',
    'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js',
    'out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js',
    'out-build/vs/workbench/contrib/composer/browser/composerStorageService.js',
    'out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js',
    'out-build/vs/workbench/contrib/composer/browser/browserScreenshotService.js',
    'out-build/vs/workbench/contrib/composer/browser/composerMultiDiffContentProvider.js',
    'out-build/vs/workbench/contrib/composer/browser/composerWakelockManager.js',
    'out-build/vs/workbench/contrib/composer/browser/browserPlaceholderPages.js',
    'out-build/vs/workbench/contrib/composer/browser/composer.js',
    'out-build/vs/workbench/contrib/composer/browser/composerViews.js',
  ],
  'contrib-reviewChanges': [
    'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  ],
  browser: [
    'out-build/vs/workbench/browser/parts/layoutPositioning.js',
    'out-build/vs/workbench/browser/web.api.js',
    'out-build/vs/workbench/browser/quickaccess.js',
    'out-build/vs/workbench/browser/actions.js',
    'out-build/vs/workbench/browser/composite.js',
  ],
};

const SOFT_HOLD_PATTERNS = [
  /\/components\//i,
  /\/hooks\//i,
  /\/parts\/editor\//i,
  /\/view/i,
  /\/widget/i,
  /\/list/i,
  /\/diff/i,
  /render/i,
];

const KNOWN_PROVEN_IDS = {
  'contrib-composer': new Set([
    'out-build/vs/workbench/contrib/composer/common/composerUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js',
    'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
    'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js',
    'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
    'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
    'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
    'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js',
    'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
    'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
    'out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js',
    'out-build/vs/workbench/contrib/composer/browser/browserAnalytics.js',
    'out-build/vs/workbench/contrib/composer/browser/composerAgent.js',
    'out-build/vs/workbench/contrib/composer/browser/browserTabId.js',
    'out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js',
    'out-build/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js',
    'out-build/vs/workbench/contrib/composer/browser/composerContextKeys.js',
    'out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js',
    'out-build/vs/workbench/contrib/composer/browser/composerStorageService.js',
    'out-build/vs/workbench/contrib/composer/browser/browserScreenshotService.js',
    'out-build/vs/workbench/contrib/composer/browser/composerMultiDiffContentProvider.js',
    'out-build/vs/workbench/contrib/composer/browser/composerWakelockManager.js',
    'out-build/vs/workbench/contrib/composer/browser/browserPlaceholderPages.js',
    'out-build/vs/workbench/contrib/composer/browser/composer.js',
  ]),
};

const LIVE_BLOCKED_IDS = {
  'contrib-composer': new Set([
    'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js',
    'out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js',
  ]),
};

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function buildPlanModuleIndex(canaryPlan) {
  const index = new Map();
  for (const wave of canaryPlan.microWaves ?? []) {
    for (const moduleEntry of wave.modules ?? []) {
      index.set(moduleEntry.id, moduleEntry);
    }
  }
  return index;
}

function summarizeReasons(modules) {
  const counts = {};
  for (const moduleEntry of modules) {
    for (const reason of moduleEntry.reasons ?? []) {
      counts[reason] = (counts[reason] ?? 0) + 1;
    }
  }
  return counts;
}

function scoreDeepCandidate(moduleEntry, lane) {
  let score = moduleEntry.score ?? 0;
  const id = moduleEntry.id;

  if ((moduleEntry.reasons ?? []).some((reason) => String(reason).startsWith('content-risk:'))) {
    score -= 40;
  }

  if (id.includes('/common/')) {
    score += 24;
  }
  if (id.includes('/service/')) {
    score += 18;
  }
  if (id.includes('/utils/')) {
    score += 10;
  }
  if (id.includes('Types.js') || id.includes('Interface.js')) {
    score += 8;
  }

  if (lane === 'browser') {
    score -= 12;
  }

  for (const pattern of SOFT_HOLD_PATTERNS) {
    if (pattern.test(id)) {
      score -= 20;
    }
  }

  if ((moduleEntry.byteLength ?? 0) < 150 || (moduleEntry.byteLength ?? 0) > 10000) {
    score -= 16;
  }

  return score;
}

function toCandidate(moduleEntry, stageEntry, lane) {
  return {
    id: moduleEntry.id,
    lane,
    selectedLayer: moduleEntry.selectedLayer,
    selectedTargetFile: moduleEntry.selectedTargetFile,
    sourceFile: stageEntry?.sourceFile ?? null,
    targetFile: stageEntry?.targetFile ?? null,
    sha256: stageEntry?.sha256 ?? null,
    byteLength: moduleEntry.byteLength ?? null,
    score: scoreDeepCandidate(moduleEntry, lane),
    reasons: moduleEntry.reasons ?? [],
    softHold: SOFT_HOLD_PATTERNS.some((pattern) => pattern.test(moduleEntry.id)),
  };
}

function rankCandidates(candidates, lane) {
  const preferredIds = PREFERRED_IDS[lane] ?? [];
  const preferredRank = new Map(preferredIds.map((id, index) => [id, index]));

  return [...candidates].sort((left, right) => {
    const leftPreferred = preferredRank.has(left.id);
    const rightPreferred = preferredRank.has(right.id);
    if (leftPreferred !== rightPreferred) {
      return leftPreferred ? -1 : 1;
    }
    if (leftPreferred && rightPreferred) {
      return preferredRank.get(left.id) - preferredRank.get(right.id);
    }
    return right.score - left.score
      || Number(left.softHold) - Number(right.softHold)
      || (left.byteLength ?? 0) - (right.byteLength ?? 0)
      || left.id.localeCompare(right.id);
  });
}

function buildLanePlan(lane, planIndex, stageEntries, laneAdmission) {
  const merged = stageEntries
    .map((stageEntry) => {
      const planEntry = planIndex.get(stageEntry.id);
      return planEntry ? toCandidate(planEntry, stageEntry, lane) : null;
    })
    .filter(Boolean);

  const ranked = rankCandidates(
    merged.filter((entry) => !(KNOWN_PROVEN_IDS[lane]?.has(entry.id) || LIVE_BLOCKED_IDS[lane]?.has(entry.id))),
    lane,
  );
  const noOpReady = ranked.filter((entry) => !entry.softHold).slice(0, 5);
  const holdQueue = ranked.filter((entry) => entry.softHold).slice(0, 5);

  let recommendation = 'hold';
  if (laneAdmission?.status === 'frozen-global-proven') {
    recommendation = 'frozen-global-proven';
  } else if (lane === 'contrib-composer') {
    recommendation = laneAdmission?.nextRecommendedFocus ?? 'composer-twentyseventh-candidate-admission-plan';
  } else if (lane === 'contrib-reviewChanges') {
    recommendation = 'frozen-global-proven';
  } else if (lane === 'browser') {
    recommendation = 'hold-until-composer-lane-review';
  }

  return {
    lane,
    status: laneAdmission?.status ?? 'deferred-blocked',
    stagedCount: merged.length,
    lowRiskCandidateCount: ranked.filter((entry) => !entry.softHold).length,
    softHoldCount: ranked.filter((entry) => entry.softHold).length,
    preferredIdsPresent: (PREFERRED_IDS[lane] ?? []).filter((id) => ranked.some((entry) => entry.id === id)),
    reasonSummary: summarizeReasons(ranked),
    firstNoOpCandidate: noOpReady[0] ?? null,
    noOpQueue: noOpReady,
    holdQueue,
    recommendation,
  };
}

function main() {
  const canaryPlan = readJson(CANARY_PLAN_PATH);
  const stageRegistry = readJson(STAGE_REGISTRY_PATH);
  const deepZoneAdmission = readJson(DEEP_ZONE_ADMISSION_PATH);
  const planIndex = buildPlanModuleIndex(canaryPlan);

  const deepZoneByLane = new Map((deepZoneAdmission.deepZones ?? []).map((entry) => [entry.lane, entry]));
  const deepZoneLanes = [...deepZoneByLane.keys()];
  const lanePlans = deepZoneLanes.map((lane) => {
    const stageEntries = (stageRegistry.results ?? []).filter((entry) => entry.lane === lane && entry.status === 'staged');
    return buildLanePlan(lane, planIndex, stageEntries, deepZoneByLane.get(lane));
  });

  const composerLanePlan = lanePlans.find((entry) => entry.lane === 'contrib-composer');
  const composerNextStep = deepZoneAdmission.decision?.nextExecutableStep ?? null;
  if (composerLanePlan && composerNextStep) {
    composerLanePlan.recommendation = composerNextStep;
  }
  const currentRecommendation = {
    nextLane: 'contrib-composer',
    nextAction: composerNextStep ?? composerLanePlan?.recommendation ?? 'composer-twentyseventh-candidate-admission-plan',
    nextCandidateId: composerLanePlan?.firstNoOpCandidate?.id ?? null,
    secondaryLane: null,
    browserStatus: 'hold',
  };

  const output = {
    generatedAt: new Date().toISOString(),
    sources: {
      canaryPlan: normalizePath(path.relative(ROOT, CANARY_PLAN_PATH)),
      stageRegistry: normalizePath(path.relative(ROOT, STAGE_REGISTRY_PATH)),
      deepZoneAdmission: normalizePath(path.relative(ROOT, DEEP_ZONE_ADMISSION_PATH)),
    },
    policy: {
      renameOnMainline: false,
      deepZonesDefaultAdmission: 'deny',
      currentPhase: 'deep-zone-composer-twentyseventh-candidate-planning',
      firstExecutableStep: 'composer-twentyseventh-candidate-admission-plan',
    },
    lanePlans,
    currentRecommendation,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
