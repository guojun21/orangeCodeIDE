#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-live-execution-next-step-lock',
    sources: {
      browserBatchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.proven?.batchWaveId ?? null,
      approvedBatch: freezeReview.proven?.approvedBatch ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-fourth-candidate-admission-plan',
      approvedBatchOnly: freezeReview.proven?.approvedBatch ?? [],
      fourthCandidateAdmissionMayStartOnlyAfterBatchFreeze: true,
      browserComponentWidgetTemplateBlocked: true,
      browserBatchScopeExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser batch live execution freeze artifacts',
      'browser fourth candidate admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser batch scope expansion',
      'browser component or widget admission',
      'browser template-surface admission',
      'cross-lane expansion',
      'rename-driven work',
      'runner-up switch without fourth-candidate admission plan',
    ],
    stopConditions: [
      'do not widen browser batch beyond DBR1L, DBR2L, and DBR3L before browser fourth candidate planning outcome is frozen',
      'do not start component/widget/template admission before browser fourth candidate planning outcome is frozen',
      'do not switch to generatedFilesConstants.js or ciMessageUtils.js outside a dedicated fourth-candidate admission plan',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
