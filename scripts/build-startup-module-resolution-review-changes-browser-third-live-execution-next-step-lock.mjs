#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-execution-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_LIVE_EXECUTION_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-live-execution-next-step-lock',
    sources: {
      thirdLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      firstSingleLiveModuleId: freezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: freezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: freezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: freezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: freezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: freezeReview.proven?.thirdSingleLiveWaveId ?? null,
    },
    decision: {
      nextApprovedAction: 'browser-batch-admission-plan',
      browserBatchAdmissionMayStartOnlyAfterThirdFreeze: true,
      browserMultiModuleBatchLiveBlocked: true,
      browserComponentWidgetTemplateBlocked: true,
      browserFourthCandidateAdmissionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser third single-live freeze artifacts',
      'browser batch admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'browser fourth candidate admission before browser batch planning',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not execute browser batch before a dedicated browser batch admission plan and freeze are completed',
      'do not switch to generatedFilesConstants.js or ciMessageUtils.js before browser batch planning outcome is frozen',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
