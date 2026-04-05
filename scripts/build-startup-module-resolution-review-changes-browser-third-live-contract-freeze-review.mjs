#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const THIRD_LIVE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-freeze-review.json');
const THIRD_LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-admission-plan.json');
const THIRD_LIVE_CONTRACT_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-third-module-resolution-live-contract.json');
const THIRD_EXPORT_DELTA_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-export-delta-gate.json');
const THIRD_FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-fallback-preflight.json');
const THIRD_STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const thirdLiveFreezeReview = readJson(THIRD_LIVE_FREEZE_REVIEW_PATH);
  const thirdLiveAdmissionPlan = readJson(THIRD_LIVE_ADMISSION_PLAN_PATH);
  const thirdLiveContract = readJson(THIRD_LIVE_CONTRACT_PATH);
  const thirdExportDelta = readJson(THIRD_EXPORT_DELTA_PATH);
  const thirdFallbackPreflight = readJson(THIRD_FALLBACK_PREFLIGHT_PATH);
  const thirdStickyPreflight = readJson(THIRD_STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'third-live-contract-freeze-review',
    sources: {
      thirdLiveFreezeReview: normalizePath(path.relative(ROOT, THIRD_LIVE_FREEZE_REVIEW_PATH)),
      thirdLiveAdmissionPlan: normalizePath(path.relative(ROOT, THIRD_LIVE_ADMISSION_PLAN_PATH)),
      thirdLiveContract: normalizePath(path.relative(ROOT, THIRD_LIVE_CONTRACT_PATH)),
      thirdExportDeltaGate: normalizePath(path.relative(ROOT, THIRD_EXPORT_DELTA_PATH)),
      thirdFallbackPreflight: normalizePath(path.relative(ROOT, THIRD_FALLBACK_PREFLIGHT_PATH)),
      thirdStickyPreflight: normalizePath(path.relative(ROOT, THIRD_STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: thirdLiveFreezeReview.decision?.laneState ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      firstSingleLiveModuleId: thirdLiveFreezeReview.proven?.firstSingleLiveModuleId ?? null,
      firstSingleLiveWaveId: thirdLiveFreezeReview.proven?.firstSingleLiveWaveId ?? null,
      secondSingleLiveModuleId: thirdLiveFreezeReview.proven?.secondSingleLiveModuleId ?? null,
      secondSingleLiveWaveId: thirdLiveFreezeReview.proven?.secondSingleLiveWaveId ?? null,
      thirdNoOpModuleId: thirdLiveFreezeReview.thirdNoOp?.moduleId ?? null,
      thirdNoOpWaveId: thirdLiveFreezeReview.thirdNoOp?.waveId ?? null,
    },
    thirdLiveContract: {
      moduleId: thirdLiveAdmissionPlan.candidate?.moduleId ?? null,
      waveId: thirdLiveContract.canary?.waveId ?? null,
      mode: thirdLiveContract.mode ?? null,
      resolverEnabled: thirdLiveContract.defaults?.resolverEnabled ?? null,
      laneToggleEnabled: thirdLiveContract.defaults?.laneToggles?.['deep-zone-browser'] ?? null,
      perModuleKillSwitchEnabled: thirdLiveContract.defaults?.perModuleKillSwitch?.['out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'] === false,
      exportDeltaPassed: thirdExportDelta.passed === true,
      fallbackPreflightPassed: thirdFallbackPreflight.passed === true,
      stickyPreflightPassed: thirdStickyPreflight.passed === true,
    },
    blockedSurfaces: thirdLiveAdmissionPlan.blockedSurfaces ?? [],
    runnerUpLock: thirdLiveAdmissionPlan.runnerUpLock ?? {},
    failureClassification: {
      rollbackContractOnlyOn: [
        'live contract no longer pins DBR3L to diffMentionUtils.js in live-canary mode',
        'browser-third export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'browser third contract artifacts no longer uniquely lock the next step to browser-third-live-execution',
        'preflight evidence suggests browser lane fallback or sticky-disable semantics are no longer trustworthy',
        'quality-report or rollout stability regresses while preparing DBR3L live execution',
      ],
    },
    batchEligibilityGate: {
      discussionBlocked: true,
      currentProofState: 'two-live-plus-one-no-op',
      whyCurrentProofIsInsufficient: 'a ready live contract plus green browser-third preflight still does not count as a proven third live execution, so browser batch discussion remains premature until DBR3L live execution is proven and frozen',
      requiredMilestonesBeforeDiscussion: [
        'DBR3L live execution proven',
        'post-DBR3L browser lane freeze review',
      ],
    },
    minimumWin: {
      definition: 'DBR3L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-third-live-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-third-live-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'DBR3L live contract artifacts',
        'browser third export-delta artifacts',
        'browser third fallback preflight artifacts',
        'browser third sticky-disable preflight artifacts',
        'browser third live contract freeze artifacts',
        'browser third live contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser live execution',
        'browser batch',
        'reviewChanges main lane',
        'composer lane',
        'mechanical recovery chain',
      ],
    },
    followUpPriority: {
      next: 'browser-third-live-execution',
      afterThat: 'browser lane freeze review only after live execution result is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'two-single-live-proven-third-live-contract-ready-still-no-batch',
      nextApprovedStep: 'browser-third-live-contract-next-step-lock',
      thirdLiveContractReadyOnly: true,
      browserMultiModuleBatchStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      browserThirdRunnerUpSwitchBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'browser third runner-up switch',
      'cross-lane expansion',
      'rename-driven work',
      'browser third live execution before explicit run step',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
