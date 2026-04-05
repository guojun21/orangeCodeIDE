#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-live-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-live-admission-plan.json');
const ELEVENTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-eighteenth-module-resolution-live-contract.json');
const ELEVENTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-export-delta-gate.json');
const ELEVENTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-fallback-preflight.json');
const ELEVENTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const eighteenthLiveFreezeReview = readJson(ELEVENTH_LIVE_FREEZE_REVIEW_PATH);
  const eighteenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const eighteenthLiveContract = readJson(ELEVENTH_LIVE_CONTRACT_PATH);
  const eighteenthExportDelta = readJson(ELEVENTH_EXPORT_DELTA_PATH);
  const eighteenthFallbackPreflight = readJson(ELEVENTH_FALLBACK_PREFLIGHT_PATH);
  const eighteenthStickyPreflight = readJson(ELEVENTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'eighteenth-live-contract-freeze-review',
    sources: {
      eighteenthLiveFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_FREEZE_REVIEW_PATH)),
      eighteenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
      eighteenthLiveContract: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_PATH)),
      eighteenthExportDeltaGate: normalizePath(path.relative(ROOT, ELEVENTH_EXPORT_DELTA_PATH)),
      eighteenthFallbackPreflight: normalizePath(path.relative(ROOT, ELEVENTH_FALLBACK_PREFLIGHT_PATH)),
      eighteenthStickyPreflight: normalizePath(path.relative(ROOT, ELEVENTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: eighteenthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: eighteenthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      eighteenthNoOpModuleId: eighteenthLiveFreezeReview.eighteenthNoOp?.moduleId ?? null,
      eighteenthNoOpWaveId: eighteenthLiveFreezeReview.eighteenthNoOp?.waveId ?? null,
    },
    eighteenthLiveContract: {
      moduleId: eighteenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: eighteenthLiveContract.canary?.waveId ?? null,
      mode: eighteenthLiveContract.mode ?? null,
      resolverEnabled: eighteenthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: eighteenthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        eighteenthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js'] === false,
      exportDeltaPassed: eighteenthExportDelta.passed === true,
      fallbackPreflightPassed: eighteenthFallbackPreflight.passed === true,
      stickyPreflightPassed: eighteenthStickyPreflight.passed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-eighteenth-live-contract-ready',
      nextApprovedStep: 'composer-eighteenth-live-contract-next-step-lock',
      eighteenthLiveContractReadyOnly: true,
      widerBatchExpansionStillBlocked: true,
      reviewChangesLaneStillFrozen: true,
      broadBrowserStillHeld: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'composer wider batch expansion',
      'new reviewChanges browser surface expansion',
      'cross-lane expansion',
      'rename-driven work',
      'composer eighteenth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
