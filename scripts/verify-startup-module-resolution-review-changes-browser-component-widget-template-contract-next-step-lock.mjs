#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-next-step-lock-verify.json');

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
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-component-widget-template-contract-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-contract-ready'
      && report.baseline?.surfaceWaveId === 'DBCWT1A'
      && arrayEquals(report.baseline?.approvedSurface, EXPECTED_MODULES),
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-component-widget-template-live-execution'
      && arrayEquals(report.decision?.approvedSurfaceOnly, EXPECTED_MODULES)
      && report.decision?.browserComponentWidgetTemplateLiveBlocked === true
      && report.decision?.browserHeavierUiSurfaceBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('browser component/widget/template contract artifacts')
      && allowedNow.includes('browser component/widget/template live execution only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowPinned:
      blockedNow.includes('browser heavier UI/view-zone')
      && blockedNow.includes('browser further util-batch expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
    stopConditionsPinned:
      stopConditions.includes('do not widen component/widget/template execution beyond DBCWT1A before execution outcome is frozen')
      && stopConditions.includes('do not start heavier UI admission before component/widget/template execution outcome is frozen')
      && stopConditions.includes('do not reopen browser util or batch expansion after candidate pool exhaustion'),
    minimumWinPinned:
      minimumWin.definition === 'browser component/widget/template contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-component-widget-template-live-execution'
      && Array.isArray(minimumWin.mustVerify)
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
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template execution'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-component-widget-template-live-execution'
      && followUpPriority.afterThat === 'browser component/widget/template execution freeze review only after surface live outcome is frozen',
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
