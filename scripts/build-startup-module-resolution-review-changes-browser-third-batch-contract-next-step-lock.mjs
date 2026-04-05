#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_BATCH_CONTRACT_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-contract-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_BATCH_CONTRACT_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-third-batch-contract-next-step-lock',
    sources: {
      browserThirdBatchContractFreezeReview: normalizePath(path.relative(ROOT, THIRD_BATCH_CONTRACT_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.batchContract?.batchWaveId ?? null,
      approvedBatch: freezeReview.batchContract?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-third-batch-live-execution',
      approvedBatchOnly: freezeReview.batchContract?.selectedModules ?? [],
      browserThirdBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserHeavierUiSurfaceBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    minimumWin: freezeReview.minimumWin ?? {},
    scopeBoundary: freezeReview.scopeBoundary ?? {},
    followUpPriority: freezeReview.followUpPriority ?? {},
    allowedNow: [
      'browser third-batch contract artifacts',
      'browser third-batch live execution only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser component/widget/template',
      'browser heavier UI/view-zone',
      'cross-lane expansion',
      'rename-driven work',
    ],
    runnerUpLock: freezeReview.runnerUpLock ?? {},
    stopConditions: [
      'do not widen browser third batch beyond DBR1L, DBR2L, DBR3L, DBR4L, and DBR5L before third-batch execution outcome is frozen',
      'do not start component/widget/template admission before third-batch execution outcome is frozen',
      'do not start heavier UI admission before third-batch execution outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
