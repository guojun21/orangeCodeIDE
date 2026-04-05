#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIFTH_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-runtime-freeze-review.json');
const FIFTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const fifthRuntimeFreezeReview = readJson(FIFTH_RUNTIME_FREEZE_REVIEW_PATH);
  const fifthLiveAdmissionPlan = readJson(FIFTH_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'fifth-live-freeze-review',
    sources: {
      fifthRuntimeFreezeReview: normalizePath(path.relative(ROOT, FIFTH_RUNTIME_FREEZE_REVIEW_PATH)),
      fifthLiveAdmissionPlan: normalizePath(path.relative(ROOT, FIFTH_LIVE_ADMISSION_PLAN_PATH)),
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
      firstSingleLiveModuleId: fifthRuntimeFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: fifthRuntimeFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: fifthRuntimeFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: fifthRuntimeFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdSingleLiveModuleId: fifthRuntimeFreezeReview.proven?.thirdSingleLiveModuleId ?? null,
      thirdSingleLiveWaveId: fifthRuntimeFreezeReview.proven?.thirdSingleLiveWaveId ?? null,
      fourthSingleLiveModuleId: fifthRuntimeFreezeReview.proven?.fourthSingleLiveModuleId ?? null,
      fourthSingleLiveWaveId: fifthRuntimeFreezeReview.proven?.fourthSingleLiveWaveId ?? null,
      firstBatchWaveId: fifthRuntimeFreezeReview.proven?.firstBatchWaveId ?? null,
      secondBatchWaveId: fifthRuntimeFreezeReview.proven?.secondBatchWaveId ?? null,
    },
    fifthNoOp: {
      moduleId: fifthRuntimeFreezeReview.fifthNoOp?.moduleId ?? null,
      waveId: fifthRuntimeFreezeReview.fifthNoOp?.waveId ?? null,
      mode: fifthRuntimeFreezeReview.fifthNoOp?.mode ?? null,
      result: fifthRuntimeFreezeReview.fifthNoOp?.result ?? null,
      fallbackReason: fifthRuntimeFreezeReview.fifthNoOp?.fallbackReason ?? null,
    },
    fifthLivePlan: {
      moduleId: fifthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: fifthLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: fifthLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: fifthLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    blockedSurfaces: fifthLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: fifthLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: fifthLiveAdmissionPlan.failureClassification ?? {},
    thirdBatchEligibilityGate: fifthLiveAdmissionPlan.thirdBatchEligibilityGate ?? {},
    minimumWin: fifthLiveAdmissionPlan.minimumWin ?? {},
    scopeBoundary: fifthLiveAdmissionPlan.scopeBoundary ?? {},
    followUpPriority: fifthLiveAdmissionPlan.followUpPriority ?? {},
    decision: {
      laneFrozen: true,
      laneState: 'four-single-live-proven-first-and-second-batch-live-proven-fifth-live-admission-planned',
      nextApprovedStep: 'browser-fifth-live-next-step-lock',
      fifthLiveAdmissionPlannedOnly: true,
      browserThirdBatchScopeExpansionStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser third batch scope expansion',
      'browser component or widget live',
      'browser template-surface live',
      'browser heavier UI/view-zone live',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
