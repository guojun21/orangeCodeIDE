#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const EIGHTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(EIGHTH_LIVE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eighth-live-next-step-lock',
    sources: {
      eighthLiveFreezeReview: normalizePath(path.relative(ROOT, EIGHTH_LIVE_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: freezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: freezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: freezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: freezeReview.proven?.fifthSingleLiveWaveId ?? null,
      sixthSingleLiveModuleId: freezeReview.proven?.sixthSingleLiveModuleId ?? null,
      sixthSingleLiveWaveId: freezeReview.proven?.sixthSingleLiveWaveId ?? null,
      seventhSingleLiveModuleId: freezeReview.proven?.seventhSingleLiveModuleId ?? null,
      seventhSingleLiveWaveId: freezeReview.proven?.seventhSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      eighthNoOpModuleId: freezeReview.eighthNoOp?.moduleId ?? null,
      eighthNoOpWaveId: freezeReview.eighthNoOp?.waveId ?? null,
      eighthLiveModuleId: freezeReview.eighthLivePlan?.moduleId ?? null,
      eighthLiveWaveId: freezeReview.eighthLivePlan?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-eighth-live-contract',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js',
      widerBatchExpansionBlocked: true,
      composerEighthRunnerUpSwitchBlocked: true,
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
      'composer eighth live admission artifacts',
      'composer eighth live contract planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'composer eighth runner-up switch',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer eighth live execution before contract',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC8L live is executed and frozen',
      'do not switch to composer runner-ups before DC8L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
