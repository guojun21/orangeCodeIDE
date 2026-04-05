#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(SECOND_BATCH_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-contract-next-step-lock',
    sources: {
      browserSecondBatchContractFreezeReview: normalizePath(path.relative(ROOT, SECOND_BATCH_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.batchContract?.batchWaveId ?? null,
      approvedBatch: freezeReview.batchContract?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-second-batch-live-execution',
      approvedBatchOnly: freezeReview.batchContract?.selectedModules ?? [],
      browserSecondBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserFifthCandidateAdmissionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser second-batch contract artifacts',
      'browser second-batch live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser component/widget/template',
      'browser fifth candidate admission',
      'cross-lane expansion',
      'rename-driven work',
      'browser third batch scope expansion',
    ],
    runnerUpLock: freezeReview.runnerUpLock ?? {},
    stopConditions: [
      'do not widen browser second batch beyond DBR1L, DBR2L, DBR3L, and DBR4L before second-batch execution outcome is frozen',
      'do not switch to ciMessageUtils.js before second-batch execution outcome is frozen',
      'do not discuss browser component/widget/template or a third browser batch before second-batch execution outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
