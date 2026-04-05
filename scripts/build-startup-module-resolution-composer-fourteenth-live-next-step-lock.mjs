#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(ELEVENTH_LIVE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourteenth-live-next-step-lock',
    sources: {
      fourteenthLiveFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      tenthSingleLiveModuleId: freezeReview.proven?.tenthSingleLiveModuleId ?? null,
      tenthSingleLiveWaveId: freezeReview.proven?.tenthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      fourteenthNoOpModuleId: freezeReview.fourteenthNoOp?.moduleId ?? null,
      fourteenthNoOpWaveId: freezeReview.fourteenthNoOp?.waveId ?? null,
      fourteenthLiveModuleId: freezeReview.fourteenthLivePlan?.moduleId ?? null,
      fourteenthLiveWaveId: freezeReview.fourteenthLivePlan?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-fourteenth-live-contract',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js',
      widerBatchExpansionBlocked: true,
      composerFourteenthRunnerUpSwitchBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer fourteenth live admission artifacts',
      'composer fourteenth live contract planning only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'composer fourteenth runner-up switch',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer fourteenth live execution before contract',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC14L live is executed and frozen',
      'do not switch to composer runner-ups before DC14L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
