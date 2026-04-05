#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-admission-verify.json');

const SURFACE_MODULES = [
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
    phasePinned: report.phase === 'browser-heavier-ui-admission-plan',
    surfacePinned:
      report.surfaceCandidate?.surfaceWaveId === 'DBHUI1A'
      && report.surfaceCandidate?.surfaceSize === 3
      && arrayEquals(report.surfaceCandidate?.selectedModules, SURFACE_MODULES)
      && arrayEquals(report.surfaceCandidate?.resourceFirst, RESOURCE_FIRST)
      && arrayEquals(report.surfaceCandidate?.viewZoneLater, VIEW_ZONE_LATER)
      && Array.isArray(report.surfaceCandidate?.remainingRunnerUps)
      && report.surfaceCandidate.remainingRunnerUps.length === 0,
    prerequisitesPinned:
      report.prerequisites?.heavierUiAdmissionUnlocked === true
      && report.prerequisites?.componentWidgetTemplateLiveProven === true
      && report.prerequisites?.fiveSingleLiveStillProven === true
      && report.prerequisites?.thirdBatchStillProven === true
      && report.prerequisites?.stableAcceptRecorded === true
      && report.prerequisites?.stableQualityGreen === true
      && report.prerequisites?.candidatePoolExhausted === true
      && report.prerequisites?.heavierUiLiveStillBlocked === true
      && report.prerequisites?.furtherUtilBatchExpansionBlocked === true,
    requiredBeforeContractPinned:
      requiredBeforeContract.includes('build browser heavier UI/view-zone contract plan')
      && requiredBeforeContract.includes('lock a resource-first subset before any live preparation')
      && requiredBeforeContract.includes('run browser heavier UI/view-zone export-delta preflight')
      && requiredBeforeContract.includes('run browser heavier UI/view-zone fallback preflight')
      && requiredBeforeContract.includes('run browser heavier UI/view-zone sticky-disable preflight')
      && requiredBeforeContract.includes('run heavier UI/view-zone live gate')
      && requiredBeforeContract.includes('run accept')
      && requiredBeforeContract.includes('run quality-report'),
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser heavier UI/view-zone live')
      && blockedSurfaces.includes('browser broader editor/widget/view-zone admission')
      && blockedSurfaces.includes('browser further util-batch expansion')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.nextApprovedAction === 'browser-heavier-ui-contract-plan'
      && report.decision?.browserHeavierUiLiveStillBlocked === true
      && report.decision?.browserBroaderUiSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true,
    minimumWinPinned:
      report.minimumWin?.definition === 'browser heavier UI admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-heavier-ui-contract-plan'
      && Array.isArray(report.minimumWin?.mustVerify)
      && report.minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-heavier-ui-admission-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(report.scopeBoundary?.allowOnly)
      && report.scopeBoundary.allowOnly.includes('browser heavier UI admission artifacts')
      && mustNotTouch.includes('browser heavier UI contract artifacts')
      && mustNotTouch.includes('browser heavier UI live execution')
      && mustNotTouch.includes('browser broader editor/widget/view-zone admission')
      && mustNotTouch.includes('browser further util-batch expansion')
      && mustNotTouch.includes('cross-lane expansion'),
    followUpPinned: report.followUpPriority?.next === 'browser-heavier-ui-contract-plan',
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
