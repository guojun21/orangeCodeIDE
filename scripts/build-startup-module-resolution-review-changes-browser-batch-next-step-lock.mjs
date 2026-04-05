#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(BATCH_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-next-step-lock',
    sources: {
      browserBatchFreezeReview: normalizePath(path.relative(ROOT, BATCH_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.plannedBatch?.batchWaveId ?? null,
      approvedBatch: freezeReview.plannedBatch?.selectedModules ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-batch-contract-plan',
      approvedBatchOnly: freezeReview.plannedBatch?.selectedModules ?? [],
      browserBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserFourthCandidateAdmissionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser batch admission freeze artifacts',
      'browser batch contract planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser batch live',
      'browser component/widget/template',
      'browser fourth candidate admission',
      'cross-lane expansion',
      'rename',
    ],
    runnerUpLock: freezeReview.runnerUpLock ?? {},
    failureClassification: freezeReview.failureClassification ?? {},
    minimumWin: {
      definition: freezeReview.minimumWin?.definition ?? null,
      mustVerify: [
        ...(freezeReview.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-batch-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(freezeReview.scopeBoundary?.allowOnly ?? []),
        'browser batch next-step lock artifacts',
      ],
      mustNotTouch: freezeReview.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: freezeReview.followUpPriority ?? {},
    stopConditions: [
      'do not execute browser batch before a dedicated browser batch contract, preflight, and freeze are completed',
      'do not switch to generatedFilesConstants.js or ciMessageUtils.js before browser batch planning outcome is frozen',
      'do not discuss browser component/widget/template batch before browser batch execution outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
