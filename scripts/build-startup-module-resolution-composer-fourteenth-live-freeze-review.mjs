#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-runtime-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fourteenthRuntimeFreezeReview = readJson(ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const fourteenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'fourteenth-live-freeze-review',
    sources: {
      fourteenthRuntimeFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      fourteenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
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
      tenthSingleLiveModuleId: fourteenthRuntimeFreezeReview.proven?.tenthSingleLiveModuleId ?? null,
      tenthSingleLiveWaveId: fourteenthRuntimeFreezeReview.proven?.tenthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: fourteenthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    fourteenthNoOp: {
      moduleId: fourteenthRuntimeFreezeReview.fourteenthNoOp?.moduleId ?? null,
      waveId: fourteenthRuntimeFreezeReview.fourteenthNoOp?.waveId ?? null,
      mode: fourteenthRuntimeFreezeReview.fourteenthNoOp?.mode ?? null,
      result: fourteenthRuntimeFreezeReview.fourteenthNoOp?.result ?? null,
      fallbackReason: fourteenthRuntimeFreezeReview.fourteenthNoOp?.fallbackReason ?? null,
    },
    fourteenthLivePlan: {
      moduleId: fourteenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: fourteenthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: fourteenthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: fourteenthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-fourteenth-live-admission-planned',
      nextApprovedStep: 'composer-fourteenth-live-next-step-lock',
      fourteenthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer fourteenth runner-up switch',
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
