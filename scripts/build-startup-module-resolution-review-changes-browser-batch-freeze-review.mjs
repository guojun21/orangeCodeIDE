#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BATCH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-admission.json');
const THIRD_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-execution-freeze-review.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(BATCH_ADMISSION_PATH);
  const thirdFreeze = readJson(THIRD_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-batch-freeze-review',
    sources: {
      batchAdmission: normalizePath(path.relative(ROOT, BATCH_ADMISSION_PATH)),
      thirdLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: thirdFreeze.decision?.laneState ?? null,
      latestAcceptAt: thirdFreeze.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: thirdFreeze.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: thirdFreeze.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: thirdFreeze.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: thirdFreeze.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: thirdFreeze.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: thirdFreeze.proven?.thirdSingleLiveWaveId ?? null,
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
        'startup-module-resolution-review-changes-browser-batch-freeze-review-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(admission.scopeBoundary?.allowOnly ?? []),
        'browser batch freeze artifacts',
      ],
      mustNotTouch: admission.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: admission.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'three-single-live-proven-batch-admission-planned',
      nextApprovedStep: 'browser-batch-next-step-lock',
      batchStillNotContractReady: true,
      browserBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserFourthCandidateAdmissionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser batch live',
      'browser component/widget/template',
      'browser fourth candidate admission',
      'cross-lane expansion',
      'rename',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
