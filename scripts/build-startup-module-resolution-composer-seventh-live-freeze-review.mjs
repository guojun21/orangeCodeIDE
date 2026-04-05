#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-runtime-freeze-review.json');
const SEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const seventhRuntimeFreezeReview = readJson(SEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const seventhLiveAdmissionPlan = readJson(SEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'seventh-live-freeze-review',
    sources: {
      seventhRuntimeFreezeReview: normalizePath(path.relative(ROOT, SEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      seventhLiveAdmissionPlan: normalizePath(path.relative(ROOT, SEVENTH_LIVE_ADMISSION_PLAN_PATH)),
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
      firstSingleLiveModuleId: seventhRuntimeFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: seventhRuntimeFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: seventhRuntimeFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: seventhRuntimeFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: seventhRuntimeFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: seventhRuntimeFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: seventhRuntimeFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: seventhRuntimeFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: seventhRuntimeFreezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: seventhRuntimeFreezeReview.proven?.fifthSingleLiveWaveId ?? null,
      sixthSingleLiveModuleId: seventhRuntimeFreezeReview.proven?.sixthSingleLiveModuleId ?? null,
      sixthSingleLiveWaveId: seventhRuntimeFreezeReview.proven?.sixthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: seventhRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    seventhNoOp: {
      moduleId: seventhRuntimeFreezeReview.seventhNoOp?.moduleId ?? null,
      waveId: seventhRuntimeFreezeReview.seventhNoOp?.waveId ?? null,
      mode: seventhRuntimeFreezeReview.seventhNoOp?.mode ?? null,
      result: seventhRuntimeFreezeReview.seventhNoOp?.result ?? null,
      fallbackReason: seventhRuntimeFreezeReview.seventhNoOp?.fallbackReason ?? null,
    },
    seventhLivePlan: {
      moduleId: seventhLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: seventhLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: seventhLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: seventhLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    blockedSurfaces: seventhLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: seventhLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: seventhLiveAdmissionPlan.failureClassification ?? {},
    widerBatchEligibilityGate: seventhLiveAdmissionPlan.widerBatchEligibilityGate ?? {},
    minimumWin: seventhLiveAdmissionPlan.minimumWin ?? {},
    scopeBoundary: seventhLiveAdmissionPlan.scopeBoundary ?? {},
    followUpPriority: seventhLiveAdmissionPlan.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-six-single-live-one-micro-batch-seventh-live-admission-planned',
      nextApprovedStep: 'composer-seventh-live-next-step-lock',
      seventhLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer seventh runner-up switch',
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
