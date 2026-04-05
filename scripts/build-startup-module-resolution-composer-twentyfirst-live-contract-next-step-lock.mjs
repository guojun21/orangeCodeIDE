#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfirst-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfirst-live-contract-next-step-lock.json');

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
    phase: 'twentyfirst-live-contract-next-step-lock',
    sources: {
      twentyfirstLiveContractFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstMicroBatchWaveId: freezeReview.proven?.firstMicroBatchWaveId ?? null,
      twentyfirstLiveModuleId: freezeReview.twentyfirstLiveContract?.moduleId ?? null,
      twentyfirstLiveWaveId: freezeReview.twentyfirstLiveContract?.waveId ?? null,
    },
    decision: {
      nextApprovedAction: 'composer-twentyfirst-live-execution',
      approvedCandidateOnly: 'out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js',
      widerBatchExpansionBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'composer twentyfirst live contract artifacts',
      'composer twentyfirst live execution only',
    ],
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'composer twentyfirst live batch expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not discuss wider composer batch until DC21L live is executed and frozen',
      'do not reopen reviewChanges or browser lane expansion before DC21L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
