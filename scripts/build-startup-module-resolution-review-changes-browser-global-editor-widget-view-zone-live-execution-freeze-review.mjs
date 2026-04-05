#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-freeze-review.json'
);
const LIVE_GATE_PATH = path.join(
  ROOT,
  'mapped',
  'contrib-review-changes-browser-global-editor-widget-view-zone-module-resolution-live-gate.json'
);
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-live-execution-freeze-review.json'
);

const EXPECTED_MODULES = [
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

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function uniqueSorted(values) {
  return [...new Set((values ?? []).filter(Boolean))].sort();
}

function main() {
  const contractFreezeReview = readJson(CONTRACT_FREEZE_REVIEW_PATH);
  const liveGate = readJson(LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-global-editor-widget-view-zone-live-execution-freeze-review',
    sources: {
      browserGlobalEditorWidgetViewZoneContractFreezeReview: normalizePath(path.relative(ROOT, CONTRACT_FREEZE_REVIEW_PATH)),
      browserGlobalEditorWidgetViewZoneLiveGate: normalizePath(path.relative(ROOT, LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      laneState: contractFreezeReview.decision?.laneState ?? null,
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true
        && quality.stability?.startupModuleResolutionRolloutDisciplinePassed === true
        && quality.stability?.startupModuleResolutionDeepZoneAdmissionPassed === true,
    },
    proven: {
      ...contractFreezeReview.proven,
      globalEditorWidgetViewZoneWaveId: liveGate.expectedWaveId ?? null,
      approvedSurface: uniqueSorted(liveGate.enabledIds ?? []),
      overlayProbeIds: uniqueSorted(liveGate.overlayProbeIds ?? []),
      factoryHitIds: uniqueSorted(liveGate.factoryHitIds ?? []),
      diagnostics: liveGate.runtimeState?.resolution?.diagnostics?.counters ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-live-proven',
      nextApprovedStep: 'browser-global-editor-widget-view-zone-live-execution-next-step-lock',
      browserLaneFreezeUnlocked: true,
      browserBeyondReviewChangesGlobalSurfaceStillBlocked: true,
      browserFurtherUtilBatchExpansionStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion',
      'browser further util-batch expansion',
      'cross-lane expansion',
      'rename-driven work',
    ],
    assertions: {
      expectedSurfaceSize: EXPECTED_MODULES.length,
      expectedSurface: EXPECTED_MODULES,
      overlayProbeCount: liveGate.overlayProbeIds?.length ?? 0,
      factoryHitCount: liveGate.factoryHitIds?.length ?? 0,
      overlayHitCount: liveGate.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount ?? null,
      stickyDisabledCount: liveGate.runtimeState?.resolution?.diagnostics?.counters?.stickyDisabledCount ?? null,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
