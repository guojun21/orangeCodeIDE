#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-execution-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FIFTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-live-execution-next-step-lock',
    sources: {
      fifthLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, FIFTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstBatchWaveId: freezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: freezeReview.proven?.secondBatchWaveId ?? null,
      fifthSingleLiveModuleId: freezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: freezeReview.proven?.fifthSingleLiveWaveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-third-batch-admission-plan',
      thirdBatchAdmissionMayStartOnlyAfterFifthFreeze: true,
      browserThirdBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserHeavierUiSurfaceBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser fifth single-live freeze artifacts',
      'browser third-batch admission planning only',
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
    stopConditions: [
      'do not execute a third browser batch before a dedicated third-batch admission plan and freeze are completed',
      'do not start component/widget/template admission before DBR5L live outcome is frozen',
      'do not start heavier UI admission before DBR5L live outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
