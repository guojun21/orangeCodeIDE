#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan-verify.json');

const EXPECTED_SURFACE = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
];

const RESOURCE_FIRST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
];

const VIEW_ZONE_LATER = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
];

const EXPECTED_PREFLIGHT_CHAIN = ['export-delta', 'fallback', 'sticky-disable'];

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
  const plan = report.heavierUiContractPlan ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const minimumWin = report.minimumWin ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-heavier-ui-contract-plan',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-admission-planned'
      && report.baseline?.surfaceWaveId === 'DBHUI1A'
      && arrayEquals(report.baseline?.approvedSurface, EXPECTED_SURFACE),
    contractPlanPinned:
      plan.surfaceWaveId === 'DBHUI1A'
      && arrayEquals(plan.selectedModules, EXPECTED_SURFACE)
      && arrayEquals(plan.resourceFirst, RESOURCE_FIRST)
      && arrayEquals(plan.viewZoneLater, VIEW_ZONE_LATER)
      && plan.output === 'mapped/contrib-review-changes-browser-heavier-ui-module-resolution-live-contract.json'
      && plan.runtimeCopy === 'mapped/contrib-review-changes-browser-heavier-ui-module-resolution-live-contract.runtime.json'
      && plan.mode === 'live-canary'
      && plan.enableResolver === true
      && plan.enableDedicatedLane === true
      && plan.lockResourceSubsetBeforeLive === true
      && plan.planningOnly === true,
    preflightChainPinned: arrayEquals(report.plannedPreflightChain, EXPECTED_PREFLIGHT_CHAIN),
    minimumWinPinned:
      minimumWin.definition === 'browser heavier UI contract plan verify green and nextApprovedAction uniquely locked to browser-heavier-ui-contract-preflight'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-contract-plan-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser heavier UI contract plan artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser heavier UI contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI export-delta preflight results')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI fallback preflight results')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI sticky-disable preflight results')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI live execution')
      && scopeBoundary.mustNotTouch.includes('browser broader editor/widget/view-zone admission')
      && scopeBoundary.mustNotTouch.includes('browser further util-batch expansion')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPinned:
      followUpPriority.next === 'browser-heavier-ui-contract-preflight'
      && followUpPriority.afterThat === 'browser-heavier-ui-contract-freeze-review',
    decisionPinned:
      report.decision?.contractPlanReady === true
      && report.decision?.nextApprovedAction === 'browser-heavier-ui-contract-preflight'
      && report.decision?.browserHeavierUiLiveStillBlocked === true
      && report.decision?.browserBroaderUiAdmissionStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    planningOnly:
      !('wrapperPatch' in plan)
      && !('liveGate' in plan)
      && !('execution' in report),
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
