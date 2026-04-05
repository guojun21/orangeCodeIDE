#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-runtime-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const eighteenthRuntimeFreezeReview = readJson(ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const eighteenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eighteenth-live-freeze-review',
    sources: {
      eighteenthRuntimeFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      eighteenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
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
      tenthSingleLiveModuleId: eighteenthRuntimeFreezeReview.proven?.tenthSingleLiveModuleId ?? null,
      tenthSingleLiveWaveId: eighteenthRuntimeFreezeReview.proven?.tenthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: eighteenthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    eighteenthNoOp: {
      moduleId: eighteenthRuntimeFreezeReview.eighteenthNoOp?.moduleId ?? null,
      waveId: eighteenthRuntimeFreezeReview.eighteenthNoOp?.waveId ?? null,
      mode: eighteenthRuntimeFreezeReview.eighteenthNoOp?.mode ?? null,
      result: eighteenthRuntimeFreezeReview.eighteenthNoOp?.result ?? null,
      fallbackReason: eighteenthRuntimeFreezeReview.eighteenthNoOp?.fallbackReason ?? null,
    },
    eighteenthLivePlan: {
      moduleId: eighteenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: eighteenthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: eighteenthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: eighteenthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-eighteenth-live-admission-planned',
      nextApprovedStep: 'composer-eighteenth-live-next-step-lock',
      eighteenthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer eighteenth runner-up switch',
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
