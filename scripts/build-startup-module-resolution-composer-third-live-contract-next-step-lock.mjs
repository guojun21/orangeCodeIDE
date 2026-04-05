#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'third-live-contract-next-step-lock',
    sources: {
      thirdLiveContractFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      thirdLiveModuleId: freezeReview.thirdLiveContract?.moduleId ?? null,
      thirdLiveWaveId: freezeReview.thirdLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-third-live-execution',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js',
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
      'composer third live contract artifacts',
      'composer third live execution only',
      'composer-specific diagnostics refinement',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer third live batch expansion',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC3L live is executed and frozen',
      'do not reopen reviewChanges or browser lane expansion before DC3L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
