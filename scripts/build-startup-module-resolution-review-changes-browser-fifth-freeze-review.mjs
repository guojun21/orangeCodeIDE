#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-freeze-review.json');
const FIFTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-admission.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondBatchLiveExecutionFreezeReview = readJson(SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const fifthAdmission = readJson(FIFTH_ADMISSION_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-candidate-freeze-review',
    sources: {
      secondBatchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, SECOND_BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      fifthAdmission: normalizePath(path.relative(ROOT, FIFTH_ADMISSION_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: secondBatchLiveExecutionFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: secondBatchLiveExecutionFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      firstBatchWaveId: secondBatchLiveExecutionFreezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: secondBatchLiveExecutionFreezeReview.proven?.secondBatchWaveId ?? null,
      approvedSecondBatch: secondBatchLiveExecutionFreezeReview.proven?.approvedSecondBatch ?? [],
    },
    plannedCandidate: {
      moduleId: fifthAdmission.approvedCandidate?.moduleId ?? null,
      waveId: fifthAdmission.approvedCandidate?.waveId ?? null,
      riskClass: fifthAdmission.approvedCandidate?.riskClass ?? null,
      runnerUps: (fifthAdmission.runnerUps ?? []).map((entry) => entry.moduleId),
    },
    decision: {
      laneFrozen: true,
      laneState: 'four-single-live-proven-first-and-second-batch-live-proven-fifth-candidate-planned',
      nextApprovedStep: 'browser-fifth-next-step-lock',
      fifthCandidatePlannedOnly: true,
      browserThirdBatchScopeExpansionStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third batch scope expansion',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser fifth candidate live execution',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
