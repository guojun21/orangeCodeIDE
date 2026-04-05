#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-live-execution-next-step-lock',
    sources: {
      browserSecondBatchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.proven?.secondBatchWaveId ?? null,
      approvedBatch: freezeReview.proven?.approvedSecondBatch ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-fifth-candidate-admission-plan',
      approvedBatchOnly: freezeReview.proven?.approvedSecondBatch ?? [],
      fifthCandidateAdmissionMayStartOnlyAfterSecondBatchFreeze: true,
      browserThirdBatchScopeExpansionBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser second-batch live execution freeze artifacts',
      'browser fifth-candidate admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser third batch live',
      'browser component or widget admission',
      'browser template-surface admission',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not execute a third browser batch before a dedicated third-batch admission plan and freeze are completed',
      'do not start component/widget/template admission before browser fifth candidate planning outcome is frozen',
      'do not switch beyond ciMessageUtils.js outside a dedicated fifth-candidate admission plan',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
