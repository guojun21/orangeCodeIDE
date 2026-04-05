#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const NEXT_STEP_LOCK_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-next-step-lock.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-plan.json'
);

const EXPECTED_SURFACE = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
];

const BRIDGE_AND_COMPONENT_FIRST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
];

const HEAVIER_UI_LAST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
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
  const nextStepLock = readJson(NEXT_STEP_LOCK_PATH);
  const approvedSurface = nextStepLock.decision?.approvedSurfaceOnly ?? [];

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-global-editor-widget-view-zone-contract-plan',
    sources: {
      browserGlobalEditorWidgetViewZoneNextStepLock: normalizePath(path.relative(ROOT, NEXT_STEP_LOCK_PATH)),
    },
    baseline: {
      laneState: nextStepLock.baseline?.laneState ?? null,
      surfaceWaveId: nextStepLock.baseline?.globalEditorWidgetViewZoneWaveId ?? null,
      approvedSurface,
    },
    globalEditorWidgetViewZoneContractPlan: {
      surfaceWaveId: 'DBGEWV1A',
      selectedModules: EXPECTED_SURFACE,
      bridgeAndComponentFirst: BRIDGE_AND_COMPONENT_FIRST,
      heavierUiLast: HEAVIER_UI_LAST,
      output: 'mapped/contrib-review-changes-browser-global-editor-widget-view-zone-module-resolution-live-contract.json',
      runtimeCopy: 'mapped/contrib-review-changes-browser-global-editor-widget-view-zone-module-resolution-live-contract.runtime.json',
      mode: 'live-canary',
      enableResolver: true,
      enableDedicatedLane: true,
      lockBridgeAndComponentSubsetBeforeLive: true,
      planningOnly: true,
    },
    plannedPreflightChain: PLANNED_PREFLIGHT_CHAIN,
    failureClassification: {
      rollbackContractPlanOnlyOn: [
        'global editor/widget/view-zone contract plan no longer pins DBGEWV1A to the approved 14-module reviewChanges browser surface',
        'bridge-and-component-first ordering drifts before contract preflight is frozen',
        'planned preflight chain drifts away from export-delta, fallback, and sticky-disable only',
      ],
      freezeBrowserLaneOn: [
        'browser global editor/widget/view-zone contract plan no longer uniquely locks the next step to browser-global-editor-widget-view-zone-contract-preflight',
        'contract planning starts to imply wrapper patch, live gate, or execution in the same phase',
        'contract planning starts to widen beyond the approved reviewChanges browser surface',
      ],
    },
    minimumWin: {
      definition: 'browser global editor/widget/view-zone contract plan verify green and nextApprovedAction uniquely locked to browser-global-editor-widget-view-zone-contract-preflight',
      mustVerify: [
        'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-plan-verify.json',
      ],
    },
    scopeBoundary: {
      allowOnly: [
        'browser global editor/widget/view-zone contract plan artifacts',
      ],
      mustNotTouch: [
        'browser global editor/widget/view-zone contract file generation',
        'browser global editor/widget/view-zone export-delta preflight results',
        'browser global editor/widget/view-zone fallback preflight results',
        'browser global editor/widget/view-zone sticky-disable preflight results',
        'browser global editor/widget/view-zone live execution',
        'browser further util-batch expansion',
        'cross-lane expansion',
      ],
    },
    followUpPriority: {
      next: 'browser-global-editor-widget-view-zone-contract-preflight',
      afterThat: 'browser-global-editor-widget-view-zone-contract-freeze-review',
    },
    decision: {
      contractPlanReady:
        nextStepLock.decision?.nextApprovedAction === 'browser-global-editor-widget-view-zone-contract-plan'
        && arrayEquals(approvedSurface, EXPECTED_SURFACE),
      nextApprovedAction: 'browser-global-editor-widget-view-zone-contract-preflight',
      browserGlobalEditorWidgetViewZoneLiveStillBlocked: true,
      browserBeyondReviewChangesGlobalSurfaceExpansionStillBlocked:
        nextStepLock.decision?.browserBeyondReviewChangesGlobalSurfaceExpansionBlocked === true,
      browserFurtherUtilBatchExpansionStillBlocked:
        nextStepLock.decision?.browserFurtherUtilBatchExpansionBlocked === true,
      crossLaneExpansionBlocked: nextStepLock.decision?.crossLaneExpansionBlocked === true,
      renameOnMainline: nextStepLock.decision?.renameOnMainline ?? false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
