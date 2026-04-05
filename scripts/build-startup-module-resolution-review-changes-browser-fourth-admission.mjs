#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-next-step-lock.json');
const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-freeze-review.json');
const SECOND_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-gate.json');
const THIRD_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-live-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-admission.json');

const MAIN_CANDIDATE = {
  waveId: 'DBR4A',
  moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  rationale: [
    'util-level browser candidate that remains outside DOM/template/component surface',
    'constant-oriented recovered body with no initializer-call fan-out in the visible slice',
    'no manager/stateful resource-holder signals in the recovered module body',
    'source and startup-loader input are both already present, so admission can stay planning-only without widening scope',
    'now acceptable only after DBRB1 batch live is proven, because its larger constant surface is still safer than ciMessageUtils.js initializer-heavy shape',
  ],
  riskClass: 'large-constants-util-planning-only',
};

const RUNNER_UPS = [
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
    rank: 1,
    whyNotNow: 'shows multiple initializer calls in the recovered slice, so runtime ambiguity is still higher than generatedFilesConstants.js',
  },
];

const BLOCKED_GROUPS = {
  alreadyProvenBrowserSingles: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  ],
  alreadyProvenBrowserBatch: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  ],
  alreadyProvenReviewChangesUtil: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
  ],
  managerStateful: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  ],
  uiSurface: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
  ],
};

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const nextStepLock = readJson(NEXT_STEP_LOCK_PATH);
  const freezeReview = readJson(FREEZE_REVIEW_PATH);
  const secondBrowserLiveGate = readJson(SECOND_BROWSER_LIVE_GATE_PATH);
  const thirdBrowserLiveGate = readJson(THIRD_BROWSER_LIVE_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fourth-candidate-admission',
    sources: {
      nextStepLock: normalizePath(path.relative(ROOT, NEXT_STEP_LOCK_PATH)),
      freezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, SECOND_BROWSER_LIVE_GATE_PATH)),
      thirdSingleLiveGate: normalizePath(path.relative(ROOT, THIRD_BROWSER_LIVE_GATE_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      nextApprovedAction: nextStepLock.decision?.nextApprovedAction ?? null,
      batchWaveId: freezeReview.proven?.batchWaveId ?? null,
      approvedBatch: freezeReview.proven?.approvedBatch ?? [],
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
      secondOverlayHitCount: secondBrowserLiveGate.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount ?? null,
      thirdOverlayHitCount: thirdBrowserLiveGate.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount ?? null,
    },
    selectionRules: [
      'must stay inside browser util scope only',
      'must not widen the DBRB1 approved batch during planning',
      'must not touch DOM/template/component/widget surface directly',
      'must not be manager/stateful or resource-holder',
      'must already exist in startup-loader input and recovered source form',
      'must remain safer than the remaining runner-up browser util',
      'must not already be a proven browser single-live or member of a wider browser batch-expansion proposal',
    ],
    approvedCandidate: MAIN_CANDIDATE,
    runnerUps: RUNNER_UPS,
    blockedGroups: BLOCKED_GROUPS,
    comparisons: {
      notCiMessageUtils: 'ciMessageUtils.js remains deferred because its recovered slice still starts with multiple initializer-style calls',
      notAlreadyBatchProven: 'DBR1L, DBR2L, and DBR3L are excluded because they are already frozen inside the proven DBRB1 batch',
      notUiOrStateful: 'stateful/resource and component/view-zone surfaces remain blocked until a separate post-batch admission lane exists',
    },
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DBR4A',
      nextApprovedAction: 'browser-fourth-dedicated-no-op-runtime-plan',
      runtimeGatePlannedInThisPhase: false,
      livePlannedInThisPhase: false,
      browserBatchScopeExpansionStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      renameOnMainline: false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
