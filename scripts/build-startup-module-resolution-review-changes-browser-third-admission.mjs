#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-execution-next-step-lock.json');
const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-execution-freeze-review.json');
const FIRST_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-gate.json');
const SECOND_BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-admission.json');

const MAIN_CANDIDATE = {
  waveId: 'DBR3A',
  moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  rationale: [
    'util-level browser candidate with no direct DOM/template/component surface',
    'no manager/stateful resource holder signals in the recovered slice',
    'small enough recovered body to remain auditable while stepping up slightly from discussionUtils.js',
    'already present in startup-loader input and available for overlay materialization',
    'only one visible helper-init call and two top-level assignments, which is still safer than the remaining browser util runner-ups',
  ],
  riskClass: 'moderate-util-planning-only',
};

const RUNNER_UPS = [
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
    rank: 1,
    whyNotNow: 'large constant surface and broader matching footprint make it a worse third-candidate planning target than diffMentionUtils.js',
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
    rank: 2,
    whyNotNow: 'shows multiple initializer calls in the recovered slice, so fallback ambiguity is still higher than diffMentionUtils.js',
  },
];

const BLOCKED_GROUPS = {
  alreadyProvenBrowserSingles: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
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
  const firstBrowserLiveGate = readJson(FIRST_BROWSER_LIVE_GATE_PATH);
  const secondBrowserLiveGate = readJson(SECOND_BROWSER_LIVE_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-candidate-admission',
    sources: {
      nextStepLock: normalizePath(path.relative(ROOT, NEXT_STEP_LOCK_PATH)),
      freezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
      firstSingleLiveGate: normalizePath(path.relative(ROOT, FIRST_BROWSER_LIVE_GATE_PATH)),
      secondSingleLiveGate: normalizePath(path.relative(ROOT, SECOND_BROWSER_LIVE_GATE_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      nextApprovedAction: nextStepLock.decision?.nextApprovedAction ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      firstOverlayHitCount: firstBrowserLiveGate.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount ?? null,
      secondOverlayHitCount: secondBrowserLiveGate.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount ?? null,
    },
    selectionRules: [
      'must stay inside browser hook/util scope only',
      'must not touch DOM/template/component/widget surface directly',
      'must not be manager/stateful or resource-holder',
      'must already exist in startup-loader input and overlay manifest',
      'must remain more auditable than the remaining browser util candidates',
      'must not already be a proven browser single-live or proven reviewChanges util live',
    ],
    approvedCandidate: MAIN_CANDIDATE,
    runnerUps: RUNNER_UPS,
    blockedGroups: BLOCKED_GROUPS,
    comparisons: {
      notGeneratedFilesConstants: 'generatedFilesConstants.js is intentionally deferred because of its much larger constant surface',
      notCiMessageUtils: 'ciMessageUtils.js still shows more initializer-style calls than diffMentionUtils.js',
      notAlreadyProven: 'useResourceLineCounts.js and discussionUtils.js are excluded because they are already proven browser single-live modules',
    },
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DBR3A',
      nextApprovedAction: 'browser-third-dedicated-no-op-runtime-plan',
      runtimeGatePlannedInThisPhase: false,
      livePlannedInThisPhase: false,
      browserBatchStillBlocked: true,
      renameOnMainline: false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
