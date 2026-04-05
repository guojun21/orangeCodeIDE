#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-runtime-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const seventeenthRuntimeFreezeReview = readJson(ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH);
  const seventeenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'seventeenth-live-freeze-review',
    sources: {
      seventeenthRuntimeFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_RUNTIME_FREEZE_REVIEW_PATH)),
      seventeenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
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
      tenthSingleLiveModuleId: seventeenthRuntimeFreezeReview.proven?.tenthSingleLiveModuleId ?? null,
      tenthSingleLiveWaveId: seventeenthRuntimeFreezeReview.proven?.tenthSingleLiveWaveId ?? null,
      firstMicroBatchWaveId: seventeenthRuntimeFreezeReview.proven?.firstMicroBatchWaveId ?? null,
    },
    seventeenthNoOp: {
      moduleId: seventeenthRuntimeFreezeReview.seventeenthNoOp?.moduleId ?? null,
      waveId: seventeenthRuntimeFreezeReview.seventeenthNoOp?.waveId ?? null,
      mode: seventeenthRuntimeFreezeReview.seventeenthNoOp?.mode ?? null,
      result: seventeenthRuntimeFreezeReview.seventeenthNoOp?.result ?? null,
      fallbackReason: seventeenthRuntimeFreezeReview.seventeenthNoOp?.fallbackReason ?? null,
    },
    seventeenthLivePlan: {
      moduleId: seventeenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: seventeenthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: seventeenthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: seventeenthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-seventeenth-live-admission-planned',
      nextApprovedStep: 'composer-seventeenth-live-next-step-lock',
      seventeenthLiveAdmissionPlannedOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'composer seventeenth runner-up switch',
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
