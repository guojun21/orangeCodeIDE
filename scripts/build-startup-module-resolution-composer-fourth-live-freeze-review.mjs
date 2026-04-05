#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FOURTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-runtime-freeze-review.json');
const FOURTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fourthRuntimeFreezeReview = readJson(FOURTH_RUNTIME_FREEZE_REVIEW_PATH);
  const fourthLiveAdmissionPlan = readJson(FOURTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourth-live-freeze-review',
    sources: {
      fourthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FOURTH_RUNTIME_FREEZE_REVIEW_PATH)),
      fourthLiveAdmissionPlan: normalizePath(path.relative(ROOT, FOURTH_LIVE_ADMISSION_PLAN_PATH)),
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
      firstSingleLiveModuleId: fourthRuntimeFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: fourthRuntimeFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: fourthRuntimeFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: fourthRuntimeFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: fourthRuntimeFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: fourthRuntimeFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: fourthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    fourthNoOp: {
      moduleId: fourthRuntimeFreezeReview.fourthNoOp?.moduleId ?? null,
      waveId: fourthRuntimeFreezeReview.fourthNoOp?.waveId ?? null,
      mode: fourthRuntimeFreezeReview.fourthNoOp?.mode ?? null,
      result: fourthRuntimeFreezeReview.fourthNoOp?.result ?? null,
      fallbackReason: fourthRuntimeFreezeReview.fourthNoOp?.fallbackReason ?? null,
    },
    fourthLivePlan: {
      moduleId: fourthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: fourthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: fourthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: fourthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    blockedSurfaces: fourthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: fourthLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: fourthLiveAdmissionPlan.failureClassification ?? {},
    widerBatchEligibilityGate: fourthLiveAdmissionPlan.widerBatchEligibilityGate ?? {},
    minimumWin: fourthLiveAdmissionPlan.minimumWin ?? {},
    scopeBoundary: fourthLiveAdmissionPlan.scopeBoundary ?? {},
    followUpPriority: fourthLiveAdmissionPlan.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-three-single-live-one-micro-batch-fourth-live-admission-planned',
      nextApprovedStep: 'composer-fourth-live-next-step-lock',
      fourthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer fourth runner-up switch',
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
