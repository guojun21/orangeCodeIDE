#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-admission.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-admission-verify.json'
);

const GLOBAL_SURFACE_MODULES = [
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

const FROZEN_UTIL_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

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
  const report = readJson(INPUT_PATH);
  const blockedSurfaces = report.blockedSurfaces ?? [];
  const requiredBeforeContract = report.requiredBeforeContract ?? [];
  const mustNotTouch = report.scopeBoundary?.mustNotTouch ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-global-editor-widget-view-zone-admission-plan',
    surfacePinned:
      report.surfaceCandidate?.surfaceWaveId === 'DBGEWV1A'
      && report.surfaceCandidate?.surfaceSize === 14
      && arrayEquals(report.surfaceCandidate?.selectedModules, GLOBAL_SURFACE_MODULES)
      && arrayEquals(report.surfaceCandidate?.bridgeAndComponentFirst, BRIDGE_AND_COMPONENT_FIRST)
      && arrayEquals(report.surfaceCandidate?.heavierUiLast, HEAVIER_UI_LAST)
      && arrayEquals(report.surfaceCandidate?.alreadyFrozenOutsideSurface, FROZEN_UTIL_MODULES),
    prerequisitesPinned:
      report.prerequisites?.globalAdmissionUnlocked === true
      && report.prerequisites?.broaderEditorWidgetViewZoneLiveProven === true
      && report.prerequisites?.componentWidgetTemplateLiveProven === true
      && report.prerequisites?.heavierUiLiveProven === true
      && report.prerequisites?.fiveSingleLiveStillProven === true
      && report.prerequisites?.thirdBatchStillProven === true
      && report.prerequisites?.stableAcceptRecorded === true
      && report.prerequisites?.stableQualityGreen === true
      && report.prerequisites?.reviewChangesBrowserInventoryAccountedFor === true
      && report.prerequisites?.noRemainingBrowserModulesOutsideGlobalSurface === true
      && report.prerequisites?.componentSurfacePinned === true
      && report.prerequisites?.heavierSurfacePinned === true
      && report.prerequisites?.broaderSurfacePinned === true
      && report.prerequisites?.globalLiveStillBlocked === true
      && report.prerequisites?.furtherUtilBatchExpansionBlocked === true,
    requiredBeforeContractPinned:
      requiredBeforeContract.includes('build browser global editor/widget/view-zone contract plan')
      && requiredBeforeContract.includes('lock a bridge-and-component-first subset before any live preparation')
      && requiredBeforeContract.includes('run browser global editor/widget/view-zone export-delta preflight')
      && requiredBeforeContract.includes('run browser global editor/widget/view-zone fallback preflight')
      && requiredBeforeContract.includes('run browser global editor/widget/view-zone sticky-disable preflight')
      && requiredBeforeContract.includes('run global editor/widget/view-zone live gate')
      && requiredBeforeContract.includes('run accept')
      && requiredBeforeContract.includes('run quality-report'),
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser global editor/widget/view-zone live')
      && blockedSurfaces.includes('browser beyond the approved reviewChanges global editor/widget/view-zone surface')
      && blockedSurfaces.includes('browser further util-batch expansion')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.nextApprovedAction === 'browser-global-editor-widget-view-zone-contract-plan'
      && report.decision?.browserGlobalEditorWidgetViewZoneLiveStillBlocked === true
      && report.decision?.browserBeyondReviewChangesGlobalSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    minimumWinPinned:
      report.minimumWin?.definition === 'browser global editor/widget/view-zone admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-global-editor-widget-view-zone-contract-plan'
      && Array.isArray(report.minimumWin?.mustVerify)
      && report.minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-admission-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(report.scopeBoundary?.allowOnly)
      && report.scopeBoundary.allowOnly.includes('browser global editor/widget/view-zone admission artifacts')
      && mustNotTouch.includes('browser global editor/widget/view-zone contract artifacts')
      && mustNotTouch.includes('browser global editor/widget/view-zone live execution')
      && mustNotTouch.includes('browser further util-batch expansion')
      && mustNotTouch.includes('cross-lane expansion'),
    followUpPinned:
      report.followUpPriority?.next === 'browser-global-editor-widget-view-zone-contract-plan'
      && report.followUpPriority?.afterThat === 'browser-global-editor-widget-view-zone-contract-preflight',
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const output = {
    generatedAt: new Date().toISOString(),
    inputPath: normalizePath(path.relative(ROOT, INPUT_PATH)),
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${output.passed}`);
  if (!output.passed) {
    process.exitCode = 1;
  }
}

main();
