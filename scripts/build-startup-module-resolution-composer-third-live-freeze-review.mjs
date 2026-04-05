#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-runtime-freeze-review.json');
const THIRD_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const thirdRuntimeFreezeReview = readJson(THIRD_RUNTIME_FREEZE_REVIEW_PATH);
  const thirdLiveAdmissionPlan = readJson(THIRD_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'third-live-freeze-review',
    sources: {
      thirdRuntimeFreezeReview: normalizePath(path.relative(ROOT, THIRD_RUNTIME_FREEZE_REVIEW_PATH)),
      thirdLiveAdmissionPlan: normalizePath(path.relative(ROOT, THIRD_LIVE_ADMISSION_PLAN_PATH)),
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
      firstSingleLiveModuleId: thirdRuntimeFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: thirdRuntimeFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: thirdRuntimeFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: thirdRuntimeFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: thirdRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    thirdNoOp: {
      moduleId: thirdRuntimeFreezeReview.thirdNoOp?.moduleId ?? null,
      waveId: thirdRuntimeFreezeReview.thirdNoOp?.waveId ?? null,
      mode: thirdRuntimeFreezeReview.thirdNoOp?.mode ?? null,
      result: thirdRuntimeFreezeReview.thirdNoOp?.result ?? null,
      fallbackReason: thirdRuntimeFreezeReview.thirdNoOp?.fallbackReason ?? null,
    },
    thirdLivePlan: {
      moduleId: thirdLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: thirdLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: thirdLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: thirdLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    blockedSurfaces: thirdLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: thirdLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: thirdLiveAdmissionPlan.failureClassification ?? {},
    widerBatchEligibilityGate: thirdLiveAdmissionPlan.widerBatchEligibilityGate ?? {},
    minimumWin: thirdLiveAdmissionPlan.minimumWin ?? {},
    scopeBoundary: thirdLiveAdmissionPlan.scopeBoundary ?? {},
    followUpPriority: thirdLiveAdmissionPlan.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-two-single-live-one-micro-batch-third-live-admission-planned',
      nextApprovedStep: 'composer-third-live-next-step-lock',
      thirdLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer third runner-up switch',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
