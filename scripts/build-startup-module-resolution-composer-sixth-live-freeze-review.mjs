#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SIXTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-runtime-freeze-review.json');
const SIXTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const sixthRuntimeFreezeReview = readJson(SIXTH_RUNTIME_FREEZE_REVIEW_PATH);
  const sixthLiveAdmissionPlan = readJson(SIXTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'sixth-live-freeze-review',
    sources: {
      sixthRuntimeFreezeReview: normalizePath(path.relative(ROOT, SIXTH_RUNTIME_FREEZE_REVIEW_PATH)),
      sixthLiveAdmissionPlan: normalizePath(path.relative(ROOT, SIXTH_LIVE_ADMISSION_PLAN_PATH)),
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
      firstSingleLiveModuleId: sixthRuntimeFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: sixthRuntimeFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: sixthRuntimeFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: sixthRuntimeFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: sixthRuntimeFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: sixthRuntimeFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: sixthRuntimeFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: sixthRuntimeFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: sixthRuntimeFreezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: sixthRuntimeFreezeReview.proven?.fifthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: sixthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    sixthNoOp: {
      moduleId: sixthRuntimeFreezeReview.sixthNoOp?.moduleId ?? null,
      waveId: sixthRuntimeFreezeReview.sixthNoOp?.waveId ?? null,
      mode: sixthRuntimeFreezeReview.sixthNoOp?.mode ?? null,
      result: sixthRuntimeFreezeReview.sixthNoOp?.result ?? null,
      fallbackReason: sixthRuntimeFreezeReview.sixthNoOp?.fallbackReason ?? null,
    },
    sixthLivePlan: {
      moduleId: sixthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: sixthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: sixthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: sixthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    blockedSurfaces: sixthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: sixthLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: sixthLiveAdmissionPlan.failureClassification ?? {},
    widerBatchEligibilityGate: sixthLiveAdmissionPlan.widerBatchEligibilityGate ?? {},
    minimumWin: sixthLiveAdmissionPlan.minimumWin ?? {},
    scopeBoundary: sixthLiveAdmissionPlan.scopeBoundary ?? {},
    followUpPriority: sixthLiveAdmissionPlan.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-five-single-live-one-micro-batch-sixth-live-admission-planned',
      nextApprovedStep: 'composer-sixth-live-next-step-lock',
      sixthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer sixth runner-up switch',
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
