#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixteenth-runtime-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixteenth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixteenth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const sixteenthRuntimeFreezeReview = readJson(ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const sixteenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'sixteenth-live-freeze-review',
    sources: {
      sixteenthRuntimeFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      sixteenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
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
      tenthSingleLiveModuleId: sixteenthRuntimeFreezeReview.proven?.tenthSingleLiveModuleId ?? null,
      tenthSingleLiveWaveId: sixteenthRuntimeFreezeReview.proven?.tenthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: sixteenthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    sixteenthNoOp: {
      moduleId: sixteenthRuntimeFreezeReview.sixteenthNoOp?.moduleId ?? null,
      waveId: sixteenthRuntimeFreezeReview.sixteenthNoOp?.waveId ?? null,
      mode: sixteenthRuntimeFreezeReview.sixteenthNoOp?.mode ?? null,
      result: sixteenthRuntimeFreezeReview.sixteenthNoOp?.result ?? null,
      fallbackReason: sixteenthRuntimeFreezeReview.sixteenthNoOp?.fallbackReason ?? null,
    },
    sixteenthLivePlan: {
      moduleId: sixteenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: sixteenthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: sixteenthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: sixteenthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-sixteenth-live-admission-planned',
      nextApprovedStep: 'composer-sixteenth-live-next-step-lock',
      sixteenthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer sixteenth runner-up switch',
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
