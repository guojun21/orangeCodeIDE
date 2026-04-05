#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NINTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-runtime-freeze-review.json');
const NINTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const ninthRuntimeFreezeReview = readJson(NINTH_RUNTIME_FREEZE_REVIEW_PATH);
  const ninthLiveAdmissionPlan = readJson(NINTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'ninth-live-freeze-review',
    sources: {
      ninthRuntimeFreezeReview: normalizePath(path.relative(ROOT, NINTH_RUNTIME_FREEZE_REVIEW_PATH)),
      ninthLiveAdmissionPlan: normalizePath(path.relative(ROOT, NINTH_LIVE_ADMISSION_PLAN_PATH)),
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
      firstSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      fifthSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.fifthSingleLiveModuleId ?? null,
      fifthSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.fifthSingleLiveWaveId ?? null,
      sixthSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.sixthSingleLiveModuleId ?? null,
      sixthSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.sixthSingleLiveWaveId ?? null,
      seventhSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.seventhSingleLiveModuleId ?? null,
      seventhSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.seventhSingleLiveWaveId ?? null,
      eighthSingleLiveModuleId: ninthRuntimeFreezeReview.proven?.eighthSingleLiveModuleId ?? null,
      eighthSingleLiveWaveId: ninthRuntimeFreezeReview.proven?.eighthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: ninthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    ninthNoOp: {
      moduleId: ninthRuntimeFreezeReview.ninthNoOp?.moduleId ?? null,
      waveId: ninthRuntimeFreezeReview.ninthNoOp?.waveId ?? null,
      mode: ninthRuntimeFreezeReview.ninthNoOp?.mode ?? null,
      result: ninthRuntimeFreezeReview.ninthNoOp?.result ?? null,
      fallbackReason: ninthRuntimeFreezeReview.ninthNoOp?.fallbackReason ?? null,
    },
    ninthLivePlan: {
      moduleId: ninthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: ninthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: ninthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: ninthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    blockedSurfaces: ninthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: ninthLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: ninthLiveAdmissionPlan.failureClassification ?? {},
    widerBatchEligibilityGate: ninthLiveAdmissionPlan.widerBatchEligibilityGate ?? {},
    minimumWin: ninthLiveAdmissionPlan.minimumWin ?? {},
    scopeBoundary: ninthLiveAdmissionPlan.scopeBoundary ?? {},
    followUpPriority: ninthLiveAdmissionPlan.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eight-single-live-one-micro-batch-ninth-live-admission-planned',
      nextApprovedStep: 'composer-ninth-live-next-step-lock',
      ninthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer ninth runner-up switch',
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
