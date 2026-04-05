#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const EIGHTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-runtime-freeze-review.json');
const EIGHTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const eighthRuntimeFreezeReview = readJson(EIGHTH_RUNTIME_FREEZE_REVIEW_PATH);
  const eighthLiveAdmissionPlan = readJson(EIGHTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eighth-live-freeze-review',
    sources: {
      eighthRuntimeFreezeReview: normalizePath(path.relative(ROOT, EIGHTH_RUNTIME_FREEZE_REVIEW_PATH)),
      eighthLiveAdmissionPlan: normalizePath(path.relative(ROOT, EIGHTH_LIVE_ADMISSION_PLAN_PATH)),
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
      firstSingleLiveModuleId: eighthRuntimeFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: eighthRuntimeFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: eighthRuntimeFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: eighthRuntimeFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: eighthRuntimeFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: eighthRuntimeFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: eighthRuntimeFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: eighthRuntimeFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: eighthRuntimeFreezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: eighthRuntimeFreezeReview.proven?.fifthSingleLiveWaveId ?? null,
      sixthSingleLiveModuleId: eighthRuntimeFreezeReview.proven?.sixthSingleLiveModuleId ?? null,
      sixthSingleLiveWaveId: eighthRuntimeFreezeReview.proven?.sixthSingleLiveWaveId ?? null,
      seventhSingleLiveModuleId: eighthRuntimeFreezeReview.proven?.seventhSingleLiveModuleId ?? null,
      seventhSingleLiveWaveId: eighthRuntimeFreezeReview.proven?.seventhSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: eighthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    eighthNoOp: {
      moduleId: eighthRuntimeFreezeReview.eighthNoOp?.moduleId ?? null,
      waveId: eighthRuntimeFreezeReview.eighthNoOp?.waveId ?? null,
      mode: eighthRuntimeFreezeReview.eighthNoOp?.mode ?? null,
      result: eighthRuntimeFreezeReview.eighthNoOp?.result ?? null,
      fallbackReason: eighthRuntimeFreezeReview.eighthNoOp?.fallbackReason ?? null,
    },
    eighthLivePlan: {
      moduleId: eighthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: eighthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: eighthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: eighthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    blockedSurfaces: eighthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: eighthLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: eighthLiveAdmissionPlan.failureClassification ?? {},
    widerBatchEligibilityGate: eighthLiveAdmissionPlan.widerBatchEligibilityGate ?? {},
    minimumWin: eighthLiveAdmissionPlan.minimumWin ?? {},
    scopeBoundary: eighthLiveAdmissionPlan.scopeBoundary ?? {},
    followUpPriority: eighthLiveAdmissionPlan.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-seven-single-live-one-micro-batch-eighth-live-admission-planned',
      nextApprovedStep: 'composer-eighth-live-next-step-lock',
      eighthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer eighth runner-up switch',
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
