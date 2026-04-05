#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-next-step-lock-verify.json');

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
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-heavier-ui-contract-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-contract-ready'
      && report.baseline?.surfaceWaveId === 'DBHUI1A'
      && arrayEquals(report.baseline?.approvedSurface, EXPECTED_MODULES),
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-heavier-ui-live-execution'
      && arrayEquals(report.decision?.approvedSurfaceOnly, EXPECTED_MODULES)
      && report.decision?.browserHeavierUiLiveBlocked === true
      && report.decision?.browserBroaderUiAdmissionBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('browser heavier UI contract artifacts')
      && allowedNow.includes('browser heavier UI live execution only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowPinned:
      blockedNow.includes('browser broader editor/widget/view-zone admission')
      && blockedNow.includes('browser further util-batch expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
    stopConditionsPinned:
      stopConditions.includes('do not widen heavier UI execution beyond DBHUI1A before execution outcome is frozen')
      && stopConditions.includes('do not start broader browser/editor/widget/view-zone admission before heavier UI execution outcome is frozen')
      && stopConditions.includes('do not reopen browser util or batch expansion after candidate pool exhaustion'),
    minimumWinPinned:
      minimumWin.definition === 'browser heavier UI contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-heavier-ui-live-execution'
      && Array.isArray(minimumWin.mustVerify)
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
      && scopeBoundary.mustNotTouch.includes('browser heavier UI execution'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-heavier-ui-live-execution'
      && followUpPriority.afterThat === 'browser heavier UI execution freeze review only after surface live outcome is frozen',
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
