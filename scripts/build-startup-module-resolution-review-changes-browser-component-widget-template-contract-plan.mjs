#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const COMPONENT_WIDGET_TEMPLATE_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-plan.json');

const EXPECTED_SURFACE = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
];

const PRESENTATIONAL_FIRST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
];

const INTERACTIVE_LATER = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
];

const BLOCKED_OUTSIDE_SURFACE = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
];

const PLANNED_PREFLIGHT_CHAIN = ['export-delta', 'fallback', 'sticky-disable'];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function arrayEquals(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((item, index) => item === b[index]);
}

function main() {
  const nextStepLock = readJson(COMPONENT_WIDGET_TEMPLATE_NEXT_STEP_LOCK_PATH);
  const approvedSurface = nextStepLock.decision?.approvedSurfaceOnly ?? [];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-component-widget-template-contract-plan',
    sources: {
      browserComponentWidgetTemplateNextStepLock: normalizePath(path.relative(ROOT, COMPONENT_WIDGET_TEMPLATE_NEXT_STEP_LOCK_PATH)),
    },
    baseline: {
      laneState: nextStepLock.baseline?.laneState ?? null,
      surfaceWaveId: nextStepLock.baseline?.surfaceWaveId ?? null,
      approvedSurface,
    },
    componentWidgetTemplateContractPlan: {
      surfaceWaveId: 'DBCWT1A',
      selectedModules: EXPECTED_SURFACE,
      presentationalFirst: PRESENTATIONAL_FIRST,
      interactiveLater: INTERACTIVE_LATER,
      blockedOutsideSurface: BLOCKED_OUTSIDE_SURFACE,
      output: 'mapped/contrib-review-changes-browser-component-widget-template-module-resolution-live-contract.json',
      runtimeCopy: 'mapped/contrib-review-changes-browser-component-widget-template-module-resolution-live-contract.runtime.json',
      mode: 'live-canary',
      enableResolver: true,
      enableDedicatedLane: true,
      lockPresentationalSubsetBeforeLive: true,
      planningOnly: true,
    },
    plannedPreflightChain: PLANNED_PREFLIGHT_CHAIN,
    failureClassification: {
      rollbackContractPlanOnlyOn: [
        'component/widget/template contract plan no longer pins DBCWT1A to the approved eight-module surface',
        'presentational-first ordering drifts before contract preflight is frozen',
        'planned preflight chain drifts away from export-delta, fallback, and sticky-disable only',
      ],
      freezeBrowserLaneOn: [
        'browser component/widget/template contract plan no longer uniquely locks the next step to browser-component-widget-template-contract-preflight',
        'contract planning starts to imply wrapper patch, live gate, or execution in the same phase',
        'contract planning starts to admit heavier UI/view-zone holders into the same surface',
      ],
    },
    minimumWin: {
      definition: 'browser component/widget/template contract plan verify green and nextApprovedAction uniquely locked to browser-component-widget-template-contract-preflight',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-component-widget-template-contract-plan-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser component/widget/template contract plan artifacts',
      ],
      mustNotTouch: [
        'browser component/widget/template contract file generation',
        'browser component/widget/template export-delta preflight results',
        'browser component/widget/template fallback preflight results',
        'browser component/widget/template sticky-disable preflight results',
        'browser component/widget/template live execution',
        'browser heavier UI/view-zone',
        'browser further util-batch expansion',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-component-widget-template-contract-preflight',
      afterThat: 'browser-component-widget-template-contract-freeze-review',
    },
    decision: {
      contractPlanReady:
        nextStepLock.decision?.nextApprovedAction === 'browser-component-widget-template-contract-plan'
        && arrayEquals(approvedSurface, EXPECTED_SURFACE),
      nextApprovedAction: 'browser-component-widget-template-contract-preflight',
      browserComponentWidgetTemplateLiveStillBlocked: true,
      browserHeavierUiSurfaceStillBlocked: nextStepLock.decision?.browserHeavierUiSurfaceBlocked === true,
      browserFurtherUtilBatchExpansionStillBlocked: nextStepLock.decision?.browserFurtherUtilBatchExpansionBlocked === true,
      crossLaneExpansionBlocked: nextStepLock.decision?.crossLaneExpansionBlocked === true,
      renameOnMainline: nextStepLock.decision?.renameOnMainline ?? false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
