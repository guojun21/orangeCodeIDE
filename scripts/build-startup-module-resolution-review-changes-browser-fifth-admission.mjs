#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-next-step-lock.json');
const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-freeze-review.json');
const FOURTH_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-fourth-module-resolution-live-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-admission.json');

const MAIN_CANDIDATE = {
  waveId: 'DBR5A',
  moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
  sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
  runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
  rationale: [
    'util-level browser candidate that still stays outside DOM/template/component surface',
    'the only remaining browser util candidate after DBR1L, DBR2L, DBR3L, DBR4L and DBRB2 are frozen',
    'initializer-heavy recovered shape still makes it unsuitable for direct live planning, so admission must remain planning-only first',
    'no manager/stateful resource-holder ownership is visible in the recovered slice',
    'source and startup-loader input are both already present, so dedicated no-op runtime can stay tightly scoped next',
  ],
  riskClass: 'initializer-heavy-util-planning-only',
};

const BLOCKED_GROUPS = {
  alreadyProvenBrowserSingles: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  ],
  alreadyProvenBrowserBatches: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
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
  const fourthBrowserLiveGate = readJson(FOURTH_BROWSER_LIVE_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-candidate-admission',
    sources: {
      nextStepLock: normalizePath(path.relative(ROOT, NEXT_STEP_LOCK_PATH)),
      freezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
      fourthSingleLiveGate: normalizePath(path.relative(ROOT, FOURTH_BROWSER_LIVE_GATE_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      nextApprovedAction: nextStepLock.decision?.nextApprovedAction ?? null,
      firstBatchWaveId: freezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: freezeReview.proven?.secondBatchWaveId ?? null,
      approvedSecondBatch: freezeReview.proven?.approvedSecondBatch ?? [],
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: freezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: freezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fourthOverlayHitCount: fourthBrowserLiveGate.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount ?? null,
    },
    selectionRules: [
      'must stay inside browser util scope only',
      'must not widen DBRB2 approved batch during planning',
      'must not touch DOM/template/component/widget surface directly',
      'must not be manager/stateful or resource-holder',
      'must already exist in startup-loader input and recovered source form',
      'must be the final remaining browser util candidate outside the frozen single-live and batch set',
      'must remain planning-only until a dedicated no-op runtime gate proves it on the current green baseline',
    ],
    approvedCandidate: MAIN_CANDIDATE,
    runnerUps: [],
    blockedGroups: BLOCKED_GROUPS,
    comparisons: {
      noRunnerUpLeft: 'ciMessageUtils.js is the last remaining browser util candidate, so there is no same-scope runner-up left after this admission',
      notAlreadyBatchProven: 'DBR1L, DBR2L, DBR3L, and DBR4L are excluded because they are already frozen inside proven browser singles and DBRB2',
      notUiOrStateful: 'stateful/resource and component/view-zone surfaces remain blocked until a separate post-util admission lane exists',
    },
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DBR5A',
      nextApprovedAction: 'browser-fifth-dedicated-no-op-runtime-plan',
      runtimeGatePlannedInThisPhase: false,
      livePlannedInThisPhase: false,
      browserThirdBatchScopeExpansionStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      renameOnMainline: false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
