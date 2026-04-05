#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(BATCH_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-contract-next-step-lock',
    sources: {
      browserBatchContractFreezeReview: normalizePath(path.relative(ROOT, BATCH_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.batchContract?.batchWaveId ?? null,
      approvedBatch: freezeReview.batchContract?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-batch-live-execution',
      approvedBatchOnly: freezeReview.batchContract?.selectedModules ?? [],
      browserBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserFourthCandidateAdmissionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser batch contract artifacts',
      'browser batch live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser component/widget/template',
      'browser fourth candidate admission',
      'cross-lane expansion',
      'rename-driven work',
      'browser batch scope expansion',
    ],
    runnerUpLock: freezeReview.runnerUpLock ?? {},
    stopConditions: [
      'do not widen browser batch beyond DBR1L, DBR2L, and DBR3L before batch execution outcome is frozen',
      'do not switch to generatedFilesConstants.js or ciMessageUtils.js before browser batch execution outcome is frozen',
      'do not discuss browser component/widget/template batch before browser batch execution outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
