#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-runtime-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-nineteenth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const nineteenthRuntimeFreezeReview = readJson(ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const nineteenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'nineteenth-live-freeze-review',
    sources: {
      nineteenthRuntimeFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      nineteenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
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
      tenthSingleLiveModuleId: nineteenthRuntimeFreezeReview.proven?.tenthSingleLiveModuleId ?? null,
      tenthSingleLiveWaveId: nineteenthRuntimeFreezeReview.proven?.tenthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: nineteenthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    nineteenthNoOp: {
      moduleId: nineteenthRuntimeFreezeReview.nineteenthNoOp?.moduleId ?? null,
      waveId: nineteenthRuntimeFreezeReview.nineteenthNoOp?.waveId ?? null,
      mode: nineteenthRuntimeFreezeReview.nineteenthNoOp?.mode ?? null,
      result: nineteenthRuntimeFreezeReview.nineteenthNoOp?.result ?? null,
      fallbackReason: nineteenthRuntimeFreezeReview.nineteenthNoOp?.fallbackReason ?? null,
    },
    nineteenthLivePlan: {
      moduleId: nineteenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: nineteenthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: nineteenthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: nineteenthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-nineteenth-live-admission-planned',
      nextApprovedStep: 'composer-nineteenth-live-next-step-lock',
      nineteenthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer nineteenth runner-up switch',
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
