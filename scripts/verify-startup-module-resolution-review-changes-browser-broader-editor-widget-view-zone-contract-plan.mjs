#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-contract-plan.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-contract-plan-verify.json'
);

const EXPECTED_SURFACE = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
];

const SERVICE_BRIDGE_FIRST = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
];

const UTIL_SUPPORT_LATER = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
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
  const plan = report.broaderEditorWidgetViewZoneContractPlan ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const minimumWin = report.minimumWin ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-broader-editor-widget-view-zone-contract-plan',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-admission-planned'
      && report.baseline?.surfaceWaveId === 'DBEWV1A'
      && arrayEquals(report.baseline?.approvedSurface, EXPECTED_SURFACE),
    contractPlanPinned:
      plan.surfaceWaveId === 'DBEWV1A'
      && arrayEquals(plan.selectedModules, EXPECTED_SURFACE)
      && arrayEquals(plan.serviceBridgeFirst, SERVICE_BRIDGE_FIRST)
      && arrayEquals(plan.utilSupportLater, UTIL_SUPPORT_LATER)
      && plan.output === 'mapped/contrib-review-changes-browser-broader-editor-widget-view-zone-module-resolution-live-contract.json'
      && plan.runtimeCopy === 'mapped/contrib-review-changes-browser-broader-editor-widget-view-zone-module-resolution-live-contract.runtime.json'
      && plan.mode === 'live-canary'
      && plan.enableResolver === true
      && plan.enableDedicatedLane === true
      && plan.lockServiceBridgeSubsetBeforeLive === true
      && plan.planningOnly === true,
    preflightChainPinned: arrayEquals(report.plannedPreflightChain, EXPECTED_PREFLIGHT_CHAIN),
    minimumWinPinned:
      minimumWin.definition === 'browser broader editor/widget/view-zone contract plan verify green and nextApprovedAction uniquely locked to browser-broader-editor-widget-view-zone-contract-preflight'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-contract-plan-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser broader editor/widget/view-zone contract plan artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser broader editor/widget/view-zone contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser broader editor/widget/view-zone export-delta preflight results')
      && scopeBoundary.mustNotTouch.includes('browser broader editor/widget/view-zone fallback preflight results')
      && scopeBoundary.mustNotTouch.includes('browser broader editor/widget/view-zone sticky-disable preflight results')
      && scopeBoundary.mustNotTouch.includes('browser broader editor/widget/view-zone live execution')
      && scopeBoundary.mustNotTouch.includes('browser global editor/widget/view-zone expansion beyond the approved bridge surface')
      && scopeBoundary.mustNotTouch.includes('browser further util-batch expansion')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPinned:
      followUpPriority.next === 'browser-broader-editor-widget-view-zone-contract-preflight'
      && followUpPriority.afterThat === 'browser-broader-editor-widget-view-zone-contract-freeze-review',
    decisionPinned:
      report.decision?.contractPlanReady === true
      && report.decision?.nextApprovedAction === 'browser-broader-editor-widget-view-zone-contract-preflight'
      && report.decision?.browserBroaderUiLiveStillBlocked === true
      && report.decision?.browserGlobalEditorWidgetViewZoneExpansionStillBlocked === true
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
