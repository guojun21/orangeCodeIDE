#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NINTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(NINTH_LIVE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'ninth-live-next-step-lock',
    sources: {
      ninthLiveFreezeReview: normalizePath(path.relative(ROOT, NINTH_LIVE_FREEZE_REVIEW_PATH)),
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
      eighthSingleLiveModuleId: freezeReview.proven?.eighthSingleLiveModuleId ?? null,
      eighthSingleLiveWaveId: freezeReview.proven?.eighthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      ninthNoOpModuleId: freezeReview.ninthNoOp?.moduleId ?? null,
      ninthNoOpWaveId: freezeReview.ninthNoOp?.waveId ?? null,
      ninthLiveModuleId: freezeReview.ninthLivePlan?.moduleId ?? null,
      ninthLiveWaveId: freezeReview.ninthLivePlan?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-ninth-live-contract',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
      widerBatchExpansionBlocked: true,
      composerNinthRunnerUpSwitchBlocked: true,
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
      'composer ninth live admission artifacts',
      'composer ninth live contract planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'composer ninth runner-up switch',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer ninth live execution before contract',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC9L live is executed and frozen',
      'do not switch to composer runner-ups before DC9L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
