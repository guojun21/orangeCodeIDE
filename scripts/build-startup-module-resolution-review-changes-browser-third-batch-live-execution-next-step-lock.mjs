#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-live-execution-next-step-lock.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(THIRD_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-third-batch-live-execution-next-step-lock',
    sources: {
      browserThirdBatchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, THIRD_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      thirdBatchWaveId: freezeReview.proven?.thirdBatchWaveId ?? null,
      approvedBatch: freezeReview.proven?.approvedThirdBatch ?? [],
    },
    decision: {
      nextApprovedAction: 'browser-component-widget-template-admission-plan',
      approvedBatchOnly: freezeReview.proven?.approvedThirdBatch ?? [],
      componentWidgetTemplateAdmissionMayStartOnlyAfterThirdBatchFreeze: true,
      browserComponentWidgetTemplateLiveBlocked: true,
      browserHeavierUiSurfaceBlocked: true,
      browserFurtherUtilBatchExpansionBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    allowedNow: [
      'browser third-batch live execution freeze artifacts',
      'browser component/widget/template admission planning only',
      'browser-specific diagnostics refinement',
    ],
    blockedNow: [
      'browser component/widget/template live',
      'browser heavier UI/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    stopConditions: [
      'do not start component/widget/template live before a dedicated component/widget/template admission, contract, and execution chain are completed',
      'do not start heavier UI admission before component/widget/template admission outcome is frozen',
      'do not reopen browser util candidate or batch expansion after candidate pool exhaustion',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
