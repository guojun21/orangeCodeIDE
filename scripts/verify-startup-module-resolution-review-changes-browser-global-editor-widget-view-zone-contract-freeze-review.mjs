#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-freeze-review-verify.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const contract = report.globalEditorWidgetViewZoneContract ?? {};
  const failureClassification = report.failureClassification ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-global-editor-widget-view-zone-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-admission-planned'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    priorProofsPinned:
      report.proven?.thirdBatchWaveId === 'DBRB3'
      && report.proven?.fifthSingleLiveWaveId === 'DBR5L'
      && report.proven?.componentWidgetTemplateWaveId === 'DBCWT1'
      && report.proven?.heavierUiWaveId === 'DBHUI1'
      && report.proven?.broaderEditorWidgetViewZoneWaveId === 'DBEWV1',
    surfacePinned:
      report.admittedSurface?.surfaceWaveId === 'DBGEWV1A'
      && report.admittedSurface?.surfaceSize === 14
      && Array.isArray(report.admittedSurface?.selectedModules)
      && report.admittedSurface.selectedModules.length === 14
      && Array.isArray(report.admittedSurface?.bridgeAndComponentFirst)
      && report.admittedSurface.bridgeAndComponentFirst.length === 11
      && Array.isArray(report.admittedSurface?.heavierUiLast)
      && report.admittedSurface.heavierUiLast.length === 3
      && Array.isArray(report.admittedSurface?.alreadyFrozenOutsideSurface)
      && report.admittedSurface.alreadyFrozenOutsideSurface.length === 5,
    contractPinned:
      contract.surfaceWaveId === 'DBGEWV1A'
      && Array.isArray(contract.selectedModules)
      && contract.selectedModules.length === 14
      && Array.isArray(contract.bridgeAndComponentFirst)
      && contract.bridgeAndComponentFirst.length === 11
      && Array.isArray(contract.heavierUiLast)
      && contract.heavierUiLast.length === 3
      && contract.output === 'mapped/contrib-review-changes-browser-global-editor-widget-view-zone-module-resolution-live-contract.json'
      && contract.runtimeCopy === 'mapped/contrib-review-changes-browser-global-editor-widget-view-zone-module-resolution-live-contract.runtime.json'
      && contract.mode === 'live-canary'
      && contract.enableResolver === true
      && contract.enableDedicatedLane === true
      && contract.lockBridgeAndComponentSubsetBeforeLive === true
      && contract.planningOnly === true
      && contract.exportDeltaPassed === true
      && contract.fallbackPreflightPassed === true
      && contract.stickyDisablePreflightPassed === true
      && contract.expectedModuleCount === 14
      && contract.observedModuleCount === 14,
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser global editor/widget/view-zone contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-global-editor-widget-view-zone-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-export-delta-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-fallback-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-sticky-disable-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser global editor/widget/view-zone contract plan artifacts')
      && scopeBoundary.allowOnly.includes('browser global editor/widget/view-zone preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser global editor/widget/view-zone contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser global editor/widget/view-zone contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser global editor/widget/view-zone contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser global editor/widget/view-zone wrapper patch')
      && scopeBoundary.mustNotTouch.includes('browser global editor/widget/view-zone live gate')
      && scopeBoundary.mustNotTouch.includes('browser global editor/widget/view-zone execution')
      && scopeBoundary.mustNotTouch.includes('browser further util-batch expansion')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion')
      && scopeBoundary.mustNotTouch.includes('rename-driven work'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-global-editor-widget-view-zone-live-execution'
      && followUpPriority.afterThat === 'browser global editor/widget/view-zone execution freeze review only after surface live outcome is frozen',
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-contract-ready'
      && report.decision?.nextApprovedStep === 'browser-global-editor-widget-view-zone-contract-next-step-lock'
      && report.decision?.globalEditorWidgetViewZoneContractReadyOnly === true
      && report.decision?.browserGlobalEditorWidgetViewZoneLiveStillBlocked === true
      && report.decision?.browserBeyondReviewChangesGlobalSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser global editor/widget/view-zone live before explicit run step')
      && blockedNow.includes('browser beyond the approved reviewChanges global editor/widget/view-zone surface expansion')
      && blockedNow.includes('browser further util-batch expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
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
