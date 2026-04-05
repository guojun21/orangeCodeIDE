#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const TENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-runtime-freeze-review.json');
const TENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const tenthRuntimeFreezeReview = readJson(TENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const tenthLiveAdmissionPlan = readJson(TENTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'tenth-live-freeze-review',
    sources: {
      tenthRuntimeFreezeReview: normalizePath(path.relative(ROOT, TENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      tenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, TENTH_LIVE_ADMISSION_PLAN_PATH)),
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
      ninthSingleLiveModuleId: tenthRuntimeFreezeReview.proven?.ninthSingleLiveModuleId ?? null,
      ninthSingleLiveWaveId: tenthRuntimeFreezeReview.proven?.ninthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: tenthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    tenthNoOp: {
      moduleId: tenthRuntimeFreezeReview.tenthNoOp?.moduleId ?? null,
      waveId: tenthRuntimeFreezeReview.tenthNoOp?.waveId ?? null,
      mode: tenthRuntimeFreezeReview.tenthNoOp?.mode ?? null,
      result: tenthRuntimeFreezeReview.tenthNoOp?.result ?? null,
      fallbackReason: tenthRuntimeFreezeReview.tenthNoOp?.fallbackReason ?? null,
    },
    tenthLivePlan: {
      moduleId: tenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: tenthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: tenthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: tenthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-nine-single-live-one-micro-batch-tenth-live-admission-planned',
      nextApprovedStep: 'composer-tenth-live-next-step-lock',
      tenthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer tenth runner-up switch',
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
