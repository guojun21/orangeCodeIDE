#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FOURTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fourth-live-execution-next-step-lock',
    sources: {
      fourthLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, FOURTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      batchWaveId: freezeReview.proven?.batchWaveId ?? null,
      fourthSingleLiveModuleId: freezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: freezeReview.proven?.fourthSingleLiveWaveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-second-batch-admission-plan',
      secondBatchAdmissionMayStartOnlyAfterFourthFreeze: true,
      browserSecondBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserFifthCandidateAdmissionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser fourth single-live freeze artifacts',
      'browser second-batch admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser second batch live',
      'browser component or widget admission',
      'browser template-surface admission',
      'browser fifth candidate admission before second-batch planning',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not execute a second browser batch before a dedicated second-batch admission plan and freeze are completed',
      'do not switch to ciMessageUtils.js before second-batch planning outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
