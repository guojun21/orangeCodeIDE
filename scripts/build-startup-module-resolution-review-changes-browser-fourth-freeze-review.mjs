#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-freeze-review.json');
const FOURTH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-admission.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const batchLiveExecutionFreezeReview = readJson(BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const fourthAdmission = readJson(FOURTH_ADMISSION_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fourth-candidate-freeze-review',
    sources: {
      batchLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, BATCH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      fourthAdmission: normalizePath(path.relative(ROOT, FOURTH_ADMISSION_PATH)),
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
      firstSingleLiveModuleId: batchLiveExecutionFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: batchLiveExecutionFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: batchLiveExecutionFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: batchLiveExecutionFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: batchLiveExecutionFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: batchLiveExecutionFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      batchWaveId: batchLiveExecutionFreezeReview.proven?.batchWaveId ?? null,
      approvedBatch: batchLiveExecutionFreezeReview.proven?.approvedBatch ?? [],
    },
    plannedCandidate: {
      moduleId: fourthAdmission.approvedCandidate?.moduleId ?? null,
      waveId: fourthAdmission.approvedCandidate?.waveId ?? null,
      riskClass: fourthAdmission.approvedCandidate?.riskClass ?? null,
      runnerUps: (fourthAdmission.runnerUps ?? []).map((entry) => entry.moduleId),
    },
    decision: {
      laneFrozen: true,
      laneState: 'three-single-live-proven-first-batch-live-proven-fourth-candidate-planned',
      nextApprovedStep: 'browser-fourth-next-step-lock',
      fourthCandidatePlannedOnly: true,
      browserBatchScopeExpansionStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser batch scope expansion',
      'browser second batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser fourth candidate live execution',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
