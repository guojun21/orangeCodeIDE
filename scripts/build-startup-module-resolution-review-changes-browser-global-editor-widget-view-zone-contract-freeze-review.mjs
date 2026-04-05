#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-freeze-review.json'
);
const CONTRACT_PLAN_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-plan.json'
);
const EXPORT_DELTA_PREFLIGHT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-export-delta-preflight.json'
);
const FALLBACK_PREFLIGHT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-fallback-preflight.json'
);
const STICKY_PREFLIGHT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-sticky-disable-preflight.json'
);
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-freeze-review.json'
);

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
    phase: 'browser-global-editor-widget-view-zone-contract-freeze-review',
    sources: {
      browserGlobalEditorWidgetViewZoneFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
      browserGlobalEditorWidgetViewZoneContractPlan: normalizePath(path.relative(ROOT, CONTRACT_PLAN_PATH)),
      browserGlobalEditorWidgetViewZoneExportDeltaPreflight: normalizePath(path.relative(ROOT, EXPORT_DELTA_PREFLIGHT_PATH)),
      browserGlobalEditorWidgetViewZoneFallbackPreflight: normalizePath(path.relative(ROOT, FALLBACK_PREFLIGHT_PATH)),
      browserGlobalEditorWidgetViewZoneStickyDisablePreflight: normalizePath(path.relative(ROOT, STICKY_PREFLIGHT_PATH)),
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
    globalEditorWidgetViewZoneContract: {
      surfaceWaveId: contractPlan.globalEditorWidgetViewZoneContractPlan?.surfaceWaveId ?? null,
      selectedModules: contractPlan.globalEditorWidgetViewZoneContractPlan?.selectedModules ?? [],
      bridgeAndComponentFirst: contractPlan.globalEditorWidgetViewZoneContractPlan?.bridgeAndComponentFirst ?? [],
      heavierUiLast: contractPlan.globalEditorWidgetViewZoneContractPlan?.heavierUiLast ?? [],
      output: contractPlan.globalEditorWidgetViewZoneContractPlan?.output ?? null,
      runtimeCopy: contractPlan.globalEditorWidgetViewZoneContractPlan?.runtimeCopy ?? null,
      mode: contractPlan.globalEditorWidgetViewZoneContractPlan?.mode ?? null,
      enableResolver: contractPlan.globalEditorWidgetViewZoneContractPlan?.enableResolver ?? null,
      enableDedicatedLane: contractPlan.globalEditorWidgetViewZoneContractPlan?.enableDedicatedLane ?? null,
      lockBridgeAndComponentSubsetBeforeLive:
        contractPlan.globalEditorWidgetViewZoneContractPlan?.lockBridgeAndComponentSubsetBeforeLive ?? null,
      planningOnly: contractPlan.globalEditorWidgetViewZoneContractPlan?.planningOnly ?? null,
      exportDeltaPassed: exportDeltaPreflight.passed === true,
      fallbackPreflightPassed: fallbackPreflight.passed === true,
      stickyDisablePreflightPassed: stickyPreflight.passed === true,
      expectedModuleCount: exportDeltaPreflight.expectedModuleCount ?? null,
      observedModuleCount: exportDeltaPreflight.observedModuleCount ?? null,
    },
    failureClassification: {
      rollbackContractOnlyOn: [
        'global editor/widget/view-zone contract plan no longer pins DBGEWV1A to the approved 14-module reviewChanges browser surface',
        'global editor/widget/view-zone export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'global editor/widget/view-zone contract artifacts no longer uniquely lock the next step to browser-global-editor-widget-view-zone-live-execution',
        'preflight evidence suggests global editor/widget/view-zone fallback or sticky-disable semantics are no longer trustworthy',
        'quality-report or rollout stability regresses while preparing global editor/widget/view-zone execution',
      ],
    },
    minimumWin: {
      definition: 'browser global editor/widget/view-zone contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-global-editor-widget-view-zone-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-plan-verify.json',
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-export-delta-preflight.json',
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-fallback-preflight.json',
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-sticky-disable-preflight.json',
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser global editor/widget/view-zone contract plan artifacts',
        'browser global editor/widget/view-zone preflight artifacts',
        'browser global editor/widget/view-zone contract freeze artifacts',
        'browser global editor/widget/view-zone contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser global editor/widget/view-zone contract file generation',
        'browser global editor/widget/view-zone wrapper patch',
        'browser global editor/widget/view-zone live gate',
        'browser global editor/widget/view-zone execution',
        'browser further util-batch expansion',
        'cross-lane expansion',
        'rename-driven work',
      ],
    },
    followUpPriority: {
      next: 'browser-global-editor-widget-view-zone-live-execution',
      afterThat: 'browser global editor/widget/view-zone execution freeze review only after surface live outcome is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-contract-ready',
      nextApprovedStep: 'browser-global-editor-widget-view-zone-contract-next-step-lock',
      globalEditorWidgetViewZoneContractReadyOnly: true,
      browserGlobalEditorWidgetViewZoneLiveStillBlocked: true,
      browserBeyondReviewChangesGlobalSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser global editor/widget/view-zone live before explicit run step',
      'browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion',
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
