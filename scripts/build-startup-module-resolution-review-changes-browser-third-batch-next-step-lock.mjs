#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_BATCH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_BATCH_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-third-batch-next-step-lock',
    sources: {
      browserThirdBatchFreezeReview: normalizePath(path.relative(ROOT, THIRD_BATCH_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.plannedBatch?.batchWaveId ?? null,
      approvedBatch: freezeReview.plannedBatch?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-third-batch-contract-plan',
      approvedBatchOnly: freezeReview.plannedBatch?.selectedModules ?? [],
      browserThirdBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserHeavierUiSurfaceBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser third-batch admission freeze artifacts',
      'browser third-batch contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser third batch live',
      'browser component or widget admission',
      'browser template-surface admission',
      'browser heavier UI/view-zone admission',
      'cross-lane expansion',
      'rename-driven work',
    ],
    runnerUpLock: freezeReview.runnerUpLock ?? {},
    failureClassification: freezeReview.failureClassification ?? {},
    minimumWin: {
      definition: freezeReview.minimumWin?.definition ?? null,
      mustVerify: [
        ...(freezeReview.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-third-batch-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(freezeReview.scopeBoundary?.allowOnly ?? []),
        'browser third-batch next-step lock artifacts',
      ],
      mustNotTouch: freezeReview.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: freezeReview.followUpPriority ?? {},
    stopConditions: [
      'do not execute browser third batch before a dedicated browser-third-batch contract, preflight, and freeze are completed',
      'do not start component/widget/template admission before third-batch execution outcome is frozen',
      'do not start heavier UI admission before third-batch execution outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
