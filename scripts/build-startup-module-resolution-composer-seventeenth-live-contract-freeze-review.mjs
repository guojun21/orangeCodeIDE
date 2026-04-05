#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const ELEVENTH_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-live-freeze-review.json');
const ELEVENTH_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-live-admission-plan.json');
const ELEVENTH_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-composer-seventeenth-module-resolution-live-contract.json');
const ELEVENTH_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-export-delta-gate.json');
const ELEVENTH_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-fallback-preflight.json');
const ELEVENTH_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventeenth-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const seventeenthLiveFreezeReview = readJson(ELEVENTH_LIVE_FREEZE_REVIEW_PATH);
  const seventeenthLiveAdmissionPlan = readJson(ELEVENTH_LIVE_ADMISSION_PLAN_PATH);
  const seventeenthLiveContract = readJson(ELEVENTH_LIVE_CONTRACT_PATH);
  const seventeenthExportDelta = readJson(ELEVENTH_EXPORT_DELTA_PATH);
  const seventeenthFallbackPreflight = readJson(ELEVENTH_FALLBACK_PREFLIGHT_PATH);
  const seventeenthStickyPreflight = readJson(ELEVENTH_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-composer',
    phase: 'seventeenth-live-contract-freeze-review',
    sources: {
      seventeenthLiveFreezeReview: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_FREEZE_REVIEW_PATH)),
      seventeenthLiveAdmissionPlan: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_ADMISSION_PLAN_PATH)),
      seventeenthLiveContract: normalizePath(path.relative(ROOT, ELEVENTH_LIVE_CONTRACT_PATH)),
      seventeenthExportDeltaGate: normalizePath(path.relative(ROOT, ELEVENTH_EXPORT_DELTA_PATH)),
      seventeenthFallbackPreflight: normalizePath(path.relative(ROOT, ELEVENTH_FALLBACK_PREFLIGHT_PATH)),
      seventeenthStickyPreflight: normalizePath(path.relative(ROOT, ELEVENTH_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: seventeenthLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstMicroBatchWaveId: seventeenthLiveFreezeReview.proven?.firstMicroBatchWaveId ?? null,
      seventeenthNoOpModuleId: seventeenthLiveFreezeReview.seventeenthNoOp?.moduleId ?? null,
      seventeenthNoOpWaveId: seventeenthLiveFreezeReview.seventeenthNoOp?.waveId ?? null,
    },
    seventeenthLiveContract: {
      moduleId: seventeenthLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: seventeenthLiveContract.canary?.waveId ?? null,
      mode: seventeenthLiveContract.mode ?? null,
      resolverEnabled: seventeenthLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: seventeenthLiveContract.defaults?.laneToggles?.['deep-zone-composer'] ?? null,
      perModuleKillSwitchEnabled:
        seventeenthLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/composer/browser/composerContextKeys.js'] === false,
      exportDeltaPassed: seventeenthExportDelta.passed === true,
      fallbackPreflightPassed: seventeenthFallbackPreflight.passed === true,
      stickyPreflightPassed: seventeenthStickyPreflight.passed === true,
    },
    decision: {
      laneFrozen: true,
      laneState: 'contrib-composer-eleven-single-live-one-micro-batch-seventeenth-live-contract-ready',
      nextApprovedStep: 'composer-seventeenth-live-contract-next-step-lock',
      seventeenthLiveContractReadyOnly: true,
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
      'composer seventeenth live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
