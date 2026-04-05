#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-live-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fifth-live-contract-next-step-lock',
    sources: {
      fifthLiveContractFreezeReview: normalizePath(path.relative(ROOT, FIFTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      fifthLiveModuleId: freezeReview.fifthLiveContract?.moduleId ?? null,
      fifthLiveWaveId: freezeReview.fifthLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-fifth-live-execution',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
      widerBatchExpansionBlocked: true,
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
      'composer fifth live contract artifacts',
      'composer fifth live execution only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer fifth live batch expansion',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC5L live is executed and frozen',
      'do not reopen reviewChanges or browser lane expansion before DC5L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
