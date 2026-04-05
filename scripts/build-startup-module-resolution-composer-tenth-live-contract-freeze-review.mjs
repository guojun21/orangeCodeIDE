#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const TENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-freeze-review.json');
const TENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-admission-plan.json');
const TENTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-tenth-module-resolution-live-contract.json');
const TENTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-export-delta-gate.json');
const TENTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-fallback-preflight.json');
const TENTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const tenthLiveFreezeReview = readJson(TENTH_LIVE_FREEZE_REVIEW_PATH);
  const tenthLiveAdmissionPlan = readJson(TENTH_LIVE_ADMISSION_PLAN_PATH);
  const tenthLiveContract = readJson(TENTH_LIVE_CONTRACT_PATH);
  const tenthExportDelta = readJson(TENTH_EXPORT_DELTA_PATH);
  const tenthFallbackPreflight = readJson(TENTH_FALLBACK_PREFLIGHT_PATH);
  const tenthStickyPreflight = readJson(TENTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'tenth-live-contract-freeze-review',
    sources: {
      tenthLiveFreezeReview: normalizePath(path.relative(ROOT, TENTH_LIVE_FREEZE_REVIEW_PATH)),
      tenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, TENTH_LIVE_ADMISSION_PLAN_PATH)),
      tenthLiveContract: normalizePath(path.relative(ROOT, TENTH_LIVE_CONTRACT_PATH)),
      tenthExportDeltaGate: normalizePath(path.relative(ROOT, TENTH_EXPORT_DELTA_PATH)),
      tenthFallbackPreflight: normalizePath(path.relative(ROOT, TENTH_FALLBACK_PREFLIGHT_PATH)),
      tenthStickyPreflight: normalizePath(path.relative(ROOT, TENTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: tenthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: tenthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      tenthNoOpModuleId: tenthLiveFreezeReview.tenthNoOp?.moduleId ?? null,
      tenthNoOpWaveId: tenthLiveFreezeReview.tenthNoOp?.waveId ?? null,
    },
    tenthLiveContract: {
      moduleId: tenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: tenthLiveContract.canary?.waveId ?? null,
      mode: tenthLiveContract.mode ?? null,
      resolverEnabled: tenthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: tenthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        tenthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'] === false,
      exportDeltaPassed: tenthExportDelta.passed === true,
      fallbackPreflightPassed: tenthFallbackPreflight.passed === true,
      stickyPreflightPassed: tenthStickyPreflight.passed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-nine-single-live-one-micro-batch-tenth-live-contract-ready',
      nextApprovedStep: 'composer-tenth-live-contract-next-step-lock',
      tenthLiveContractReadyOnly: true,
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
      'composer tenth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
