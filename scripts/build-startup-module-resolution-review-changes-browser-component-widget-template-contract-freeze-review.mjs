#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-freeze-review.json');
const CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-plan.json');
const EXPORT_DELTA_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-export-delta-preflight.json');
const FALLBACK_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-fallback-preflight.json');
const STICKY_PREFLIGHT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-sticky-disable-preflight.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-freeze-review.json');

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
    phase: 'browser-component-widget-template-contract-freeze-review',
    sources: {
      browserComponentWidgetTemplateFreezeReview: normalizePath(path.relative(ROOT, FREEZE_REVIEW_PATH)),
      browserComponentWidgetTemplateContractPlan: normalizePath(path.relative(ROOT, CONTRACT_PLAN_PATH)),
      browserComponentWidgetTemplateExportDeltaPreflight: normalizePath(path.relative(ROOT, EXPORT_DELTA_PREFLIGHT_PATH)),
      browserComponentWidgetTemplateFallbackPreflight: normalizePath(path.relative(ROOT, FALLBACK_PREFLIGHT_PATH)),
      browserComponentWidgetTemplateStickyDisablePreflight: normalizePath(path.relative(ROOT, STICKY_PREFLIGHT_PATH)),
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
    componentWidgetTemplateContract: {
      surfaceWaveId: contractPlan.componentWidgetTemplateContractPlan?.surfaceWaveId ?? null,
      selectedModules: contractPlan.componentWidgetTemplateContractPlan?.selectedModules ?? [],
      presentationalFirst: contractPlan.componentWidgetTemplateContractPlan?.presentationalFirst ?? [],
      interactiveLater: contractPlan.componentWidgetTemplateContractPlan?.interactiveLater ?? [],
      blockedOutsideSurface: contractPlan.componentWidgetTemplateContractPlan?.blockedOutsideSurface ?? [],
      output: contractPlan.componentWidgetTemplateContractPlan?.output ?? null,
      runtimeCopy: contractPlan.componentWidgetTemplateContractPlan?.runtimeCopy ?? null,
      mode: contractPlan.componentWidgetTemplateContractPlan?.mode ?? null,
      enableResolver: contractPlan.componentWidgetTemplateContractPlan?.enableResolver ?? null,
      enableDedicatedLane: contractPlan.componentWidgetTemplateContractPlan?.enableDedicatedLane ?? null,
      lockPresentationalSubsetBeforeLive: contractPlan.componentWidgetTemplateContractPlan?.lockPresentationalSubsetBeforeLive ?? null,
      planningOnly: contractPlan.componentWidgetTemplateContractPlan?.planningOnly ?? null,
      exportDeltaPassed: exportDeltaPreflight.passed === true,
      fallbackPreflightPassed: fallbackPreflight.passed === true,
      stickyDisablePreflightPassed: stickyPreflight.passed === true,
      expectedModuleCount: exportDeltaPreflight.expectedModuleCount ?? null,
      observedModuleCount: exportDeltaPreflight.observedModuleCount ?? null,
    },
    failureClassification: {
      rollbackContractOnlyOn: [
        'component/widget/template contract plan no longer pins DBCWT1A to the approved eight-module surface',
        'component/widget/template export/fallback/sticky preflight chain is incomplete or no longer all green',
      ],
      freezeBrowserLaneOn: [
        'component/widget/template contract artifacts no longer uniquely lock the next step to browser-component-widget-template-live-execution',
        'preflight evidence suggests component/widget/template fallback or sticky-disable semantics are no longer trustworthy',
        'quality-report or rollout stability regresses while preparing component/widget/template execution',
      ],
    },
    minimumWin: {
      definition: 'browser component/widget/template contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-component-widget-template-live-execution',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-component-widget-template-contract-plan-verify.json',
        'startup-module-resolution-review-changes-browser-component-widget-template-export-delta-preflight.json',
        'startup-module-resolution-review-changes-browser-component-widget-template-fallback-preflight.json',
        'startup-module-resolution-review-changes-browser-component-widget-template-sticky-disable-preflight.json',
        'startup-module-resolution-review-changes-browser-component-widget-template-contract-freeze-review-verify.json',
        'startup-module-resolution-review-changes-browser-component-widget-template-contract-next-step-lock-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser component/widget/template contract plan artifacts',
        'browser component/widget/template preflight artifacts',
        'browser component/widget/template contract freeze artifacts',
        'browser component/widget/template contract next-step lock artifacts',
      ],
      mustNotTouch: [
        'browser component/widget/template contract file generation',
        'browser component/widget/template wrapper patch',
        'browser component/widget/template live gate',
        'browser component/widget/template execution',
        'browser heavier UI/view-zone',
        'browser further util-batch expansion',
        'cross-lane expansion',
        'rename-driven work',
      ],
    },
    followUpPriority: {
      next: 'browser-component-widget-template-live-execution',
      afterThat: 'browser component/widget/template execution freeze review only after surface live outcome is frozen',
    },
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-contract-ready',
      nextApprovedStep: 'browser-component-widget-template-contract-next-step-lock',
      componentWidgetTemplateContractReadyOnly: true,
      browserComponentWidgetTemplateLiveStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser component/widget/template live before explicit run step',
      'browser heavier UI/view-zone',
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
