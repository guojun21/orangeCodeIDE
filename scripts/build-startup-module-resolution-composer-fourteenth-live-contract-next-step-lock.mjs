#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourteenth-live-contract-next-step-lock',
    sources: {
      fourteenthLiveContractFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      fourteenthLiveModuleId: freezeReview.fourteenthLiveContract?.moduleId ?? null,
      fourteenthLiveWaveId: freezeReview.fourteenthLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-fourteenth-live-execution',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js',
      widerBatchExpansionBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer fourteenth live contract artifacts',
      'composer fourteenth live execution only',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'composer fourteenth live batch expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC14L live is executed and frozen',
      'do not reopen reviewChanges or browser lane expansion before DC14L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
