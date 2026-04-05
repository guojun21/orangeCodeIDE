#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-freeze-review-verify.json');

const EXPECTED_MODULES = [
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

function arrayEquals(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((item, index) => item === b[index]);
}

function main() {
  const report = readJson(INPUT_PATH);
  const contract = report.heavierUiContract ?? {};
  const failureClassification = report.failureClassification ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-heavier-ui-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-admission-planned'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    priorProofsPinned:
      report.proven?.thirdBatchWaveId === 'DBRB3'
      && report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2'
      && report.proven?.fifthSingleLiveWaveId === 'DBR5L'
      && report.proven?.componentWidgetTemplateWaveId === 'DBCWT1',
    surfacePinned:
      report.admittedSurface?.surfaceWaveId === 'DBHUI1A'
      && report.admittedSurface?.surfaceSize === 3
      && arrayEquals(report.admittedSurface?.selectedModules, EXPECTED_MODULES)
      && Array.isArray(report.admittedSurface?.resourceFirst)
      && report.admittedSurface.resourceFirst.length === 2
      && Array.isArray(report.admittedSurface?.viewZoneLater)
      && report.admittedSurface.viewZoneLater.length === 1,
    contractPinned:
      contract.surfaceWaveId === 'DBHUI1A'
      && arrayEquals(contract.selectedModules, EXPECTED_MODULES)
      && Array.isArray(contract.resourceFirst)
      && contract.resourceFirst.length === 2
      && Array.isArray(contract.viewZoneLater)
      && contract.viewZoneLater.length === 1
      && contract.output === 'mapped/contrib-review-changes-browser-heavier-ui-module-resolution-live-contract.json'
      && contract.runtimeCopy === 'mapped/contrib-review-changes-browser-heavier-ui-module-resolution-live-contract.runtime.json'
      && contract.mode === 'live-canary'
      && contract.enableResolver === true
      && contract.enableDedicatedLane === true
      && contract.lockResourceSubsetBeforeLive === true
      && contract.planningOnly === true
      && contract.exportDeltaPassed === true
      && contract.fallbackPreflightPassed === true
      && contract.stickyDisablePreflightPassed === true
      && contract.expectedModuleCount === 3
      && contract.observedModuleCount === 3,
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser heavier UI contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-heavier-ui-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-contract-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-export-delta-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-fallback-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-sticky-disable-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser heavier UI contract plan artifacts')
      && scopeBoundary.allowOnly.includes('browser heavier UI preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser heavier UI contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser heavier UI contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser heavier UI contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI wrapper patch')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI live gate')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI execution')
      && scopeBoundary.mustNotTouch.includes('browser broader editor/widget/view-zone admission')
      && scopeBoundary.mustNotTouch.includes('browser further util-batch expansion')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion')
      && scopeBoundary.mustNotTouch.includes('rename-driven work'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-heavier-ui-live-execution'
      && followUpPriority.afterThat === 'browser heavier UI execution freeze review only after surface live outcome is frozen',
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-contract-ready'
      && report.decision?.nextApprovedStep === 'browser-heavier-ui-contract-next-step-lock'
      && report.decision?.heavierUiContractReadyOnly === true
      && report.decision?.browserHeavierUiLiveStillBlocked === true
      && report.decision?.browserBroaderUiSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser heavier UI/view-zone live before explicit run step')
      && blockedNow.includes('browser broader editor/widget/view-zone admission')
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
