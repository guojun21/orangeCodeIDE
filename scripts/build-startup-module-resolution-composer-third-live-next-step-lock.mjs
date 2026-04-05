#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_LIVE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'third-live-next-step-lock',
    sources: {
      thirdLiveFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      thirdNoOpModuleId: freezeReview.thirdNoOp?.moduleId ?? null,
      thirdNoOpWaveId: freezeReview.thirdNoOp?.waveId ?? null,
      thirdLiveModuleId: freezeReview.thirdLivePlan?.moduleId ?? null,
      thirdLiveWaveId: freezeReview.thirdLivePlan?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-third-live-contract',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
      widerBatchExpansionBlocked: true,
      composerThirdRunnerUpSwitchBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    widerBatchEligibilityGate: freezeReview.widerBatchEligibilityGate ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'composer third live admission artifacts',
      'composer third live contract planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'composer third runner-up switch',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer third live execution before contract',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC3L live is executed and frozen',
      'do not switch to composer runner-ups before DC3L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
