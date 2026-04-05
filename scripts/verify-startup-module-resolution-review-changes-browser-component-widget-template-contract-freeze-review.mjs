#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-freeze-review-verify.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesSummaryHeader.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesMarkdownDescription.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileItem.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFileList/ReviewChangesFileList.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
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
  const contract = report.componentWidgetTemplateContract ?? {};
  const failureClassification = report.failureClassification ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-component-widget-template-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-admission-planned'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    priorProofsPinned:
      report.proven?.thirdBatchWaveId === 'DBRB3'
      && report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2'
      && report.proven?.fifthSingleLiveWaveId === 'DBR5L',
    surfacePinned:
      report.admittedSurface?.surfaceWaveId === 'DBCWT1A'
      && report.admittedSurface?.surfaceSize === 8
      && arrayEquals(report.admittedSurface?.selectedModules, EXPECTED_MODULES)
      && Array.isArray(report.admittedSurface?.presentationalFirst)
      && report.admittedSurface.presentationalFirst.length === 6
      && Array.isArray(report.admittedSurface?.interactiveLater)
      && report.admittedSurface.interactiveLater.length === 2,
    contractPinned:
      contract.surfaceWaveId === 'DBCWT1A'
      && arrayEquals(contract.selectedModules, EXPECTED_MODULES)
      && Array.isArray(contract.presentationalFirst)
      && contract.presentationalFirst.length === 6
      && Array.isArray(contract.interactiveLater)
      && contract.interactiveLater.length === 2
      && Array.isArray(contract.blockedOutsideSurface)
      && contract.blockedOutsideSurface.length === 3
      && contract.output === 'mapped/contrib-review-changes-browser-component-widget-template-module-resolution-live-contract.json'
      && contract.runtimeCopy === 'mapped/contrib-review-changes-browser-component-widget-template-module-resolution-live-contract.runtime.json'
      && contract.mode === 'live-canary'
      && contract.enableResolver === true
      && contract.enableDedicatedLane === true
      && contract.lockPresentationalSubsetBeforeLive === true
      && contract.planningOnly === true
      && contract.exportDeltaPassed === true
      && contract.fallbackPreflightPassed === true
      && contract.stickyDisablePreflightPassed === true
      && contract.expectedModuleCount === 8
      && contract.observedModuleCount === 8,
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser component/widget/template contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-component-widget-template-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-contract-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-export-delta-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-fallback-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-sticky-disable-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser component/widget/template contract plan artifacts')
      && scopeBoundary.allowOnly.includes('browser component/widget/template preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser component/widget/template contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser component/widget/template contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template wrapper patch')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template live gate')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template execution')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI/view-zone')
      && scopeBoundary.mustNotTouch.includes('browser further util-batch expansion')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion')
      && scopeBoundary.mustNotTouch.includes('rename-driven work'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-component-widget-template-live-execution'
      && followUpPriority.afterThat === 'browser component/widget/template execution freeze review only after surface live outcome is frozen',
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-contract-ready'
      && report.decision?.nextApprovedStep === 'browser-component-widget-template-contract-next-step-lock'
      && report.decision?.componentWidgetTemplateContractReadyOnly === true
      && report.decision?.browserComponentWidgetTemplateLiveStillBlocked === true
      && report.decision?.browserHeavierUiSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser component/widget/template live before explicit run step')
      && blockedNow.includes('browser heavier UI/view-zone')
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
