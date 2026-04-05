#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_BATCH_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-admission.json');
const FOURTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-freeze-review.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const admission = readJson(SECOND_BATCH_ADMISSION_PATH);
  const fourthFreeze = readJson(FOURTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-second-batch-freeze-review',
    sources: {
      secondBatchAdmission: normalizePath(path.relative(ROOT, SECOND_BATCH_ADMISSION_PATH)),
      fourthLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, FOURTH_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: fourthFreeze.decision?.laneState ?? null,
      latestAcceptAt: fourthFreeze.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: fourthFreeze.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: fourthFreeze.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: fourthFreeze.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: fourthFreeze.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: fourthFreeze.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: fourthFreeze.proven?.thirdSingleLiveWaveId ?? null,
      batchWaveId: fourthFreeze.proven?.batchWaveId ?? null,
      fourthSingleLiveModuleId: fourthFreeze.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: fourthFreeze.proven?.fourthSingleLiveWaveId ?? null,
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
        'startup-module-resolution-review-changes-browser-second-batch-freeze-review-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        ...(admission.scopeBoundary?.allowOnly ?? []),
        'browser second-batch freeze artifacts',
      ],
      mustNotTouch: admission.scopeBoundary?.mustNotTouch ?? [],
    },
    followUpPriority: admission.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'four-single-live-proven-first-batch-live-proven-second-batch-admission-planned',
      nextApprovedStep: 'browser-second-batch-next-step-lock',
      batchStillNotContractReady: true,
      browserSecondBatchLiveStillBlocked: true,
      browserComponentWidgetTemplateStillBlocked: true,
      browserFifthCandidateAdmissionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser second batch live',
      'browser component/widget/template',
      'browser fifth candidate admission',
      'cross-lane expansion',
      'rename',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
