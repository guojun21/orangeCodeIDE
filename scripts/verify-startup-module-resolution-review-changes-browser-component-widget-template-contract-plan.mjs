#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-plan-verify.json');

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
  const plan = report.componentWidgetTemplateContractPlan ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const minimumWin = report.minimumWin ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-component-widget-template-contract-plan',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-admission-planned'
      && report.baseline?.surfaceWaveId === 'DBCWT1A'
      && arrayEquals(report.baseline?.approvedSurface, EXPECTED_SURFACE),
    contractPlanPinned:
      plan.surfaceWaveId === 'DBCWT1A'
      && arrayEquals(plan.selectedModules, EXPECTED_SURFACE)
      && arrayEquals(plan.presentationalFirst, PRESENTATIONAL_FIRST)
      && arrayEquals(plan.interactiveLater, INTERACTIVE_LATER)
      && arrayEquals(plan.blockedOutsideSurface, BLOCKED_OUTSIDE_SURFACE)
      && plan.output === 'mapped/contrib-review-changes-browser-component-widget-template-module-resolution-live-contract.json'
      && plan.runtimeCopy === 'mapped/contrib-review-changes-browser-component-widget-template-module-resolution-live-contract.runtime.json'
      && plan.mode === 'live-canary'
      && plan.enableResolver === true
      && plan.enableDedicatedLane === true
      && plan.lockPresentationalSubsetBeforeLive === true
      && plan.planningOnly === true,
    preflightChainPinned: arrayEquals(report.plannedPreflightChain, EXPECTED_PREFLIGHT_CHAIN),
    minimumWinPinned:
      minimumWin.definition === 'browser component/widget/template contract plan verify green and nextApprovedAction uniquely locked to browser-component-widget-template-contract-preflight'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-contract-plan-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser component/widget/template contract plan artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template export-delta preflight results')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template fallback preflight results')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template sticky-disable preflight results')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template live execution')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI/view-zone')
      && scopeBoundary.mustNotTouch.includes('browser further util-batch expansion')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPinned:
      followUpPriority.next === 'browser-component-widget-template-contract-preflight'
      && followUpPriority.afterThat === 'browser-component-widget-template-contract-freeze-review',
    decisionPinned:
      report.decision?.contractPlanReady === true
      && report.decision?.nextApprovedAction === 'browser-component-widget-template-contract-preflight'
      && report.decision?.browserComponentWidgetTemplateLiveStillBlocked === true
      && report.decision?.browserHeavierUiSurfaceStillBlocked === true
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
