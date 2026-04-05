#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-freeze-review.json');
const CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan.json');
const EXPORT_DELTA_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-export-delta-preflight.json');
const FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-fallback-preflight.json');
const STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const freezeReview = readJson(FREEZE_REVIEW_PATH);
  const contractPlan = readJson(CONTRACT_PLAN_PATH);
  const exportDeltaPreflight = readJson(EXPORT_DELTA_PREFLIGHT_PATH);
  const fallbackPreflight = readJson(FALLBACK_PREFLIGHT_PATH);
  const stickyPreflight = readJson(STICKY_PREFLIGHT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-heavier-ui-contract-freeze-review',
    sources: {
      browserHeavierUiFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
      browserHeavierUiContractPlan: normalizePath(path.relative(ROOT, CONTRACT_PLAN_PATH)),
      browserHeavierUiExportDeltaPreflight: normalizePath(path.relative(ROOT, EXPORT_DELTA_PREFLIGHT_PATH)),
      browserHeavierUiFallbackPreflight: normalizePath(path.relative(ROOT, FALLBACK_PREFLIGHT_PATH)),
      browserHeavierUiStickyDisablePreflight: normalizePath(path.relative(ROOT, STICKY_PREFLIGHT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: freezeReview.decision?.laneState ?? null,
      latestAcceptAt: freezeReview.baseline?.latestAcceptAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: freezeReview.proven ?? {},
    admittedSurface: freezeReview.admittedSurface ?? {},
    heavierUiContract: {
      surfaceWaveId: contractPlan.heavierUiContractPlan?.surfaceWaveId ?? null,
      selectedModules: contractPlan.heavierUiContractPlan?.selectedModules ?? [],
      resourceFirst: contractPlan.heavierUiContractPlan?.resourceFirst ?? [],
      viewZoneLater: contractPlan.heavierUiContractPlan?.viewZoneLater ?? [],
      output: contractPlan.heavierUiContractPlan?.output ?? null,
      runtimeCopy: contractPlan.heavierUiContractPlan?.runtimeCopy ?? null,
      mode: contractPlan.heavierUiContractPlan?.mode ?? null,
      enableResolver: contractPlan.heavierUiContractPlan?.enableResolver ?? null,
      enableDedicatedLane: contractPlan.heavierUiContractPlan?.enableDedicatedLane ?? null,
      lockResourceSubsetBeforeLive: contractPlan.heavierUiContractPlan?.lockResourceSubsetBeforeLive ?? null,
      planningOnly: contractPlan.heavierUiContractPlan?.planningOnly ?? null,
      exportDeltaPassed: exportDeltaPreflight.passed === true,
      fallbackPreflightPassed: fallbackPreflight.passed === true,
      stickyDisablePreflightPassed: stickyPreflight.passed === true,
      expectedModuleCount: exportDeltaPreflight.expectedModuleCount ?? null,
      observedModuleCount: exportDeltaPreflight.observedModuleCount ?? null,
    },
    failureClassification: {
      rollbackContractOnlyOn: [
        'heavier UI contract plan no longer pins DBHUI1A to the approved three-module surface',
        'heavier UI export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'heavier UI contract artifacts no longer uniquely lock the next step to browser-heavier-ui-live-execution',
        'preflight evidence suggests heavier UI fallback or sticky-disable semantics are no longer trustworthy',
        'quality-report or rollout stability regresses while preparing heavier UI execution',
      ],
    },
    minimumWin: {
      definition: 'browser heavier UI contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-heavier-ui-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan-verify.json',
        'startup-module-resolution-review-changes-browser-heavier-ui-export-delta-preflight.json',
        'startup-module-resolution-review-changes-browser-heavier-ui-fallback-preflight.json',
        'startup-module-resolution-review-changes-browser-heavier-ui-sticky-disable-preflight.json',
        'startup-module-resolution-review-changes-browser-heavier-ui-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-heavier-ui-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser heavier UI contract plan artifacts',
        'browser heavier UI preflight artifacts',
        'browser heavier UI contract freeze artifacts',
        'browser heavier UI contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser heavier UI contract file generation',
        'browser heavier UI wrapper patch',
        'browser heavier UI live gate',
        'browser heavier UI execution',
        'browser broader editor/widget/view-zone admission',
        'browser further util-batch expansion',
        'cross-lane expansion',
        'rename-driven work',
      ],
    },
    followUpPriority: {
      next: 'browser-heavier-ui-live-execution',
      afterThat: 'browser heavier UI execution freeze review only after surface live outcome is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-contract-ready',
      nextApprovedStep: 'browser-heavier-ui-contract-next-step-lock',
      heavierUiContractReadyOnly: true,
      browserHeavierUiLiveStillBlocked: true,
      browserBroaderUiSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser heavier UI/view-zone live before explicit run step',
      'browser broader editor/widget/view-zone admission',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
