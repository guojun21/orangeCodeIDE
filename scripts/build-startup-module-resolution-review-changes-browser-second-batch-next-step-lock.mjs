#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(SECOND_BATCH_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-next-step-lock',
    sources: {
      browserSecondBatchFreezeReview: normalizePath(path.relative(ROOT, SECOND_BATCH_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.plannedBatch?.batchWaveId ?? null,
      approvedBatch: freezeReview.plannedBatch?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-second-batch-contract-plan',
      approvedBatchOnly: freezeReview.plannedBatch?.selectedModules ?? [],
      browserSecondBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserFifthCandidateAdmissionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser second-batch admission freeze artifacts',
      'browser second-batch contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser second batch live',
      'browser component/widget/template',
      'browser fifth candidate admission',
      'cross-lane expansion',
      'rename',
    ],
    runnerUpLock: freezeReview.runnerUpLock ?? {},
    failureClassification: freezeReview.failureClassification ?? {},
    minimumWin: {
      definition: freezeReview.minimumWin?.definition ?? null,
      mustVerify: [
        ...(freezeReview.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-second-batch-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(freezeReview.scopeBoundary?.allowOnly ?? []),
        'browser second-batch next-step lock artifacts',
      ],
      mustNotTouch: freezeReview.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: freezeReview.followUpPriority ?? {},
    stopConditions: [
      'do not execute browser second batch before a dedicated browser-second-batch contract, preflight, and freeze are completed',
      'do not switch to ciMessageUtils.js before second-batch planning outcome is frozen',
      'do not discuss browser component/widget/template or a third browser batch before second-batch execution outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
