#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-freeze-review.json');
const SECOND_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-admission-plan.json');
const SECOND_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-live-contract.json');
const SECOND_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-export-delta-gate.json');
const SECOND_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-fallback-preflight.json');
const SECOND_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondLiveFreezeReview = readJson(SECOND_LIVE_FREEZE_REVIEW_PATH);
  const secondLiveAdmissionPlan = readJson(SECOND_LIVE_ADMISSION_PLAN_PATH);
  const secondLiveContract = readJson(SECOND_LIVE_CONTRACT_PATH);
  const secondExportDelta = readJson(SECOND_EXPORT_DELTA_PATH);
  const secondFallbackPreflight = readJson(SECOND_FALLBACK_PREFLIGHT_PATH);
  const secondStickyPreflight = readJson(SECOND_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'second-live-contract-freeze-review',
    sources: {
      secondLiveFreezeReview: normalizePath(path.relative(ROOT, SECOND_LIVE_FREEZE_REVIEW_PATH)),
      secondLiveAdmissionPlan: normalizePath(path.relative(ROOT, SECOND_LIVE_ADMISSION_PLAN_PATH)),
      secondLiveContract: normalizePath(path.relative(ROOT, SECOND_LIVE_CONTRACT_PATH)),
      secondExportDeltaGate: normalizePath(path.relative(ROOT, SECOND_EXPORT_DELTA_PATH)),
      secondFallbackPreflight: normalizePath(path.relative(ROOT, SECOND_FALLBACK_PREFLIGHT_PATH)),
      secondStickyPreflight: normalizePath(path.relative(ROOT, SECOND_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: secondLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: secondLiveFreezeReview.proven?.moduleId ?? null,
      firstSingleLiveWaveId: secondLiveFreezeReview.proven?.waveId ?? null,
      secondNoOpModuleId: secondLiveFreezeReview.secondNoOp?.moduleId ?? null,
      secondNoOpWaveId: secondLiveFreezeReview.secondNoOp?.waveId ?? null,
    },
    secondLiveContract: {
      moduleId: secondLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: secondLiveContract.canary?.waveId ?? null,
      mode: secondLiveContract.mode ?? null,
      resolverEnabled: secondLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: secondLiveContract.defaults?.laneToggles?.['deep-zone-browser'] ?? null,
      perModuleKillSwitchEnabled: secondLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'] === false,
      exportDeltaPassed: secondExportDelta.passed === true,
      fallbackPreflightPassed: secondFallbackPreflight.passed === true,
      stickyPreflightPassed: secondStickyPreflight.passed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'single-live-proven-second-live-contract-ready-still-no-batch',
      nextApprovedStep: 'browser-second-live-contract-next-step-lock',
      secondLiveContractReadyOnly: true,
      browserMultiModuleBatchStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      browserSecondRunnerUpSwitchBlocked: true,
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
      'browser second live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
