#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_BATCH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-admission.json');
const FIFTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-execution-freeze-review.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(THIRD_BATCH_ADMISSION_PATH);
  const fifthFreeze = readJson(FIFTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-third-batch-freeze-review',
    sources: {
      thirdBatchAdmission: normalizePath(path.relative(ROOT, THIRD_BATCH_ADMISSION_PATH)),
      fifthLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, FIFTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: fifthFreeze.decision?.laneState ?? null,
      latestAcceptAt: fifthFreeze.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: fifthFreeze.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: fifthFreeze.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: fifthFreeze.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: fifthFreeze.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: fifthFreeze.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: fifthFreeze.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: fifthFreeze.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: fifthFreeze.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: fifthFreeze.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: fifthFreeze.proven?.fifthSingleLiveWaveId ?? null,
      firstBatchWaveId: fifthFreeze.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: fifthFreeze.proven?.secondBatchWaveId ?? null,
    },
    plannedBatch: {
      batchWaveId: admission.batchCandidate?.batchWaveId ?? null,
      batchSize: admission.batchCandidate?.batchSize ?? null,
      selectedModules: admission.batchCandidate?.selectedModules ?? [],
      requiredBeforeBatch: admission.requiredBeforeBatch ?? [],
    },
    runnerUpLock: admission.runnerUpLock ?? {},
    failureClassification: admission.failureClassification ?? {},
    minimumWin: {
      definition: admission.minimumWin?.definition ?? null,
      mustVerify: [
        ...(admission.minimumWin?.mustVerify ?? []),
        'startup-module-resolution-review-changes-browser-third-batch-freeze-review-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(admission.scopeBoundary?.allowOnly ?? []),
        'browser third-batch freeze artifacts',
      ],
      mustNotTouch: admission.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: admission.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-batch-live-proven-third-batch-admission-planned',
      nextApprovedStep: 'browser-third-batch-next-step-lock',
      batchStillNotContractReady: true,
      browserThirdBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third batch live',
      'browser component/widget/template',
      'browser heavier UI/view-zone',
      'cross-lane expansion',
      'rename',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
