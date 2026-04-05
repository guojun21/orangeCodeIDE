#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-runtime-freeze-review.json');
const SECOND_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-admission-plan.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondRuntimeFreezeReview = readJson(SECOND_RUNTIME_FREEZE_REVIEW_PATH);
  const secondLiveAdmissionPlan = readJson(SECOND_LIVE_ADMISSION_PLAN_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'second-live-freeze-review',
    sources: {
      secondRuntimeFreezeReview: normalizePath(path.relative(ROOT, SECOND_RUNTIME_FREEZE_REVIEW_PATH)),
      secondLiveAdmissionPlan: normalizePath(path.relative(ROOT, SECOND_LIVE_ADMISSION_PLAN_PATH)),
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
      moduleId: secondRuntimeFreezeReview.proven?.moduleId ?? null,
      waveId: secondRuntimeFreezeReview.proven?.waveId ?? null,
      overlayProbeIds: secondRuntimeFreezeReview.proven?.overlayProbeIds ?? [],
      factoryHitIds: secondRuntimeFreezeReview.proven?.factoryHitIds ?? [],
      diagnostics: secondRuntimeFreezeReview.proven?.diagnostics ?? null,
    },
    secondNoOp: {
      moduleId: secondRuntimeFreezeReview.secondNoOp?.moduleId ?? null,
      waveId: secondRuntimeFreezeReview.secondNoOp?.waveId ?? null,
      mode: secondRuntimeFreezeReview.secondNoOp?.mode ?? null,
      result: secondRuntimeFreezeReview.secondNoOp?.result ?? null,
      fallbackReason: secondRuntimeFreezeReview.secondNoOp?.fallbackReason ?? null,
    },
    secondLivePlan: {
      moduleId: secondLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: secondLiveAdmissionPlan.candidate?.waveId ?? null,
      liveShape: secondLiveAdmissionPlan.candidate?.liveShape ?? null,
      requiredBeforeLive: secondLiveAdmissionPlan.requiredBeforeLive ?? [],
    },
    decision: {
      laneFrozen: true,
      laneState: 'single-live-proven-second-live-admission-planned-still-no-batch',
      nextApprovedStep: 'browser-second-live-next-step-lock',
      secondLiveAdmissionPlannedOnly: true,
      browserMultiModuleBatchStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'browser second runner-up switch',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
