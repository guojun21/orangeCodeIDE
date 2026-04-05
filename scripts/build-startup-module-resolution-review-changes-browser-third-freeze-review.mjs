#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_LIVE_EXECUTION_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-execution-freeze-review.json');
const THIRD_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-admission.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondLiveExecutionFreezeReview = readJson(SECOND_LIVE_EXECUTION_FREEZE_REVIEW_PATH);
  const thirdAdmission = readJson(THIRD_ADMISSION_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-candidate-freeze-review',
    sources: {
      secondLiveExecutionFreezeReview: normalizePath(path.relative(ROOT, SECOND_LIVE_EXECUTION_FREEZE_REVIEW_PATH)),
      thirdAdmission: normalizePath(path.relative(ROOT, THIRD_ADMISSION_PATH)),
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
      firstSingleLiveModuleId: secondLiveExecutionFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: secondLiveExecutionFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: secondLiveExecutionFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: secondLiveExecutionFreezeReview.proven?.secondSingleLiveWaveId ?? null,
    },
    plannedCandidate: {
      moduleId: thirdAdmission.approvedCandidate?.moduleId ?? null,
      waveId: thirdAdmission.approvedCandidate?.waveId ?? null,
      riskClass: thirdAdmission.approvedCandidate?.riskClass ?? null,
      runnerUps: (thirdAdmission.runnerUps ?? []).map((entry) => entry.moduleId),
    },
    decision: {
      laneFrozen: true,
      laneState: 'two-single-live-proven-third-candidate-planned-still-no-batch',
      nextApprovedStep: 'browser-third-next-step-lock',
      thirdCandidatePlannedOnly: true,
      browserMultiModuleBatchStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
      'browser third candidate live execution',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
