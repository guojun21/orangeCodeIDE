#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-next-step-lock.json');
const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-freeze-review.json');
const BROWSER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-admission.json');

const MAIN_CANDIDATE = {
  waveId: 'DBR2A',
  moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  rationale: [
    'util-level browser candidate with no direct DOM/template surface',
    'no manager/stateful resource holder signals in recovered slice',
    'smallest visible export surface among remaining browser util candidates',
    'already staged into startup-loader input and overlay manifest',
    'lower coupling to proven browser single-live than the remaining util files',
  ],
  riskClass: 'low-risk-util-planning-only',
};

const RUNNER_UPS = [
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
    rank: 1,
    whyNotNow: 'contains multiple top-level assignments and a visible helper-init call, so it is less minimal than discussionUtils.js',
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
    rank: 2,
    whyNotNow: 'large constant surface and broader matching footprint make it a worse second-candidate planning target',
  },
  {
    moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
    rank: 3,
    whyNotNow: 'shows multiple initializer calls in the recovered slice, so fallback ambiguity is higher than discussionUtils.js',
  },
];

const BLOCKED_GROUPS = {
  alreadyProven: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
  ],
  managerStateful: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  ],
  uiSurface: [
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
    'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
  ],
};

const REUSABLE_GATE_BASELINE = [
  'startup-module-resolution-review-changes-browser-export-delta-gate.json',
  'startup-module-resolution-review-changes-browser-fallback-gate.json',
  'startup-module-resolution-review-changes-browser-sticky-disable-audit.json',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const nextStepLock = readJson(NEXT_STEP_LOCK_PATH);
  const freezeReview = readJson(FREEZE_REVIEW_PATH);
  const browserLiveGate = readJson(BROWSER_LIVE_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'second-candidate-admission',
    sources: {
      nextStepLock: normalizePath(path.relative(ROOT, NEXT_STEP_LOCK_PATH)),
      freezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
      provenSingleLiveGate: normalizePath(path.relative(ROOT, BROWSER_LIVE_GATE_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      nextApprovedAction: nextStepLock.decision?.nextApprovedAction ?? null,
      provenModuleId: freezeReview.proven?.moduleId ?? null,
      provenWaveId: freezeReview.proven?.waveId ?? null,
      provenOverlayHitCount: browserLiveGate.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount ?? null,
    },
    selectionRules: [
      'must stay inside browser hook/util scope only',
      'must not touch DOM/template/component/widget surface directly',
      'must not be manager/stateful or resource-holder',
      'must already exist in startup-loader input and overlay manifest',
      'must have lower fallback ambiguity than remaining util candidates',
      'must not already be a proven browser single-live or proven reviewChanges util live',
    ],
    approvedCandidate: MAIN_CANDIDATE,
    runnerUps: RUNNER_UPS,
    blockedGroups: BLOCKED_GROUPS,
    comparisons: {
      notDiffMentionUtils: 'discussionUtils.js is smaller and has fewer visible top-level operations than diffMentionUtils.js',
      notGeneratedFilesConstants: 'generatedFilesConstants.js is intentionally deferred because of its broad constant footprint',
      notCiMessageUtils: 'ciMessageUtils.js still shows more initializer-style calls than discussionUtils.js',
    },
    reusableGateBaseline: {
      files: REUSABLE_GATE_BASELINE,
      note: 'These browser-specific gates remain reusable evidence only; DBR2A does not create a new runtime gate in this phase.',
    },
    decision: {
      admissionReady: true,
      executionStillPending: true,
      approvedWaveId: 'DBR2A',
      nextApprovedAction: 'browser-second-dedicated-no-op-runtime-plan',
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
