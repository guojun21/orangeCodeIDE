#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-admission-verify.json');

const SURFACE_MODULES = [
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
    phasePinned: report.phase === 'browser-component-widget-template-admission-plan',
    surfacePinned:
      report.surfaceCandidate?.surfaceWaveId === 'DBCWT1A'
      && report.surfaceCandidate?.surfaceSize === 8
      && arrayEquals(report.surfaceCandidate?.selectedModules, SURFACE_MODULES)
      && arrayEquals(report.surfaceCandidate?.presentationalFirst, PRESENTATIONAL_FIRST)
      && arrayEquals(report.surfaceCandidate?.interactiveLater, INTERACTIVE_LATER)
      && arrayEquals(report.surfaceCandidate?.blockedOutsideSurface, BLOCKED_OUTSIDE_SURFACE),
    prerequisitesPinned:
      report.prerequisites?.componentWidgetTemplateAdmissionUnlocked === true
      && report.prerequisites?.thirdBatchLiveProven === true
      && report.prerequisites?.fiveSingleLiveStillProven === true
      && report.prerequisites?.stableAcceptRecorded === true
      && report.prerequisites?.stableQualityGreen === true
      && report.prerequisites?.heavierUiStillBlocked === true
      && report.prerequisites?.furtherUtilBatchExpansionBlocked === true,
    requiredBeforeContractPinned:
      requiredBeforeContract.includes('build browser component/widget/template contract plan')
      && requiredBeforeContract.includes('lock a presentational-first subset before any live preparation')
      && requiredBeforeContract.includes('run browser component/widget/template export-delta preflight')
      && requiredBeforeContract.includes('run browser component/widget/template fallback preflight')
      && requiredBeforeContract.includes('run browser component/widget/template sticky-disable preflight')
      && requiredBeforeContract.includes('run component/widget/template live gate')
      && requiredBeforeContract.includes('run accept')
      && requiredBeforeContract.includes('run quality-report'),
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser component/widget/template live')
      && blockedSurfaces.includes('browser heavier UI/view-zone admission')
      && blockedSurfaces.includes('browser further util-batch expansion')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.nextApprovedAction === 'browser-component-widget-template-contract-plan'
      && report.decision?.browserComponentWidgetTemplateLiveStillBlocked === true
      && report.decision?.browserHeavierUiSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true,
    minimumWinPinned:
      report.minimumWin?.definition === 'browser component/widget/template admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-component-widget-template-contract-plan'
      && Array.isArray(report.minimumWin?.mustVerify)
      && report.minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-component-widget-template-admission-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(report.scopeBoundary?.allowOnly)
      && report.scopeBoundary.allowOnly.includes('browser component/widget/template admission artifacts')
      && mustNotTouch.includes('browser component/widget/template contract artifacts')
      && mustNotTouch.includes('browser component/widget/template live execution')
      && mustNotTouch.includes('browser heavier UI/view-zone')
      && mustNotTouch.includes('browser further util-batch expansion')
      && mustNotTouch.includes('cross-lane expansion'),
    followUpPinned: report.followUpPriority?.next === 'browser-component-widget-template-contract-plan',
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
