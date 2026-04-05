#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-admission-verify.json');

const SURFACE_MODULES = [
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
    phasePinned: report.phase === 'browser-broader-editor-widget-view-zone-admission-plan',
    surfacePinned:
      report.surfaceCandidate?.surfaceWaveId === 'DBEWV1A'
      && report.surfaceCandidate?.surfaceSize === 3
      && arrayEquals(report.surfaceCandidate?.selectedModules, SURFACE_MODULES)
      && arrayEquals(report.surfaceCandidate?.serviceBridgeFirst, SERVICE_BRIDGE_FIRST)
      && arrayEquals(report.surfaceCandidate?.utilSupportLater, UTIL_SUPPORT_LATER)
      && Array.isArray(report.surfaceCandidate?.remainingRunnerUps)
      && report.surfaceCandidate.remainingRunnerUps.length === 0,
    prerequisitesPinned:
      report.prerequisites?.broaderUiAdmissionUnlocked === true
      && report.prerequisites?.heavierUiLiveProven === true
      && report.prerequisites?.componentWidgetTemplateLiveProven === true
      && report.prerequisites?.fiveSingleLiveStillProven === true
      && report.prerequisites?.thirdBatchStillProven === true
      && report.prerequisites?.priorReviewChangesSingleProven === true
      && report.prerequisites?.priorReviewChangesServiceProven === true
      && report.prerequisites?.priorReviewChangesCiProven === true
      && report.prerequisites?.priorReviewChangesBatchProven === true
      && report.prerequisites?.stableAcceptRecorded === true
      && report.prerequisites?.stableQualityGreen === true
      && report.prerequisites?.candidatePoolExhausted === true
      && report.prerequisites?.broaderUiLiveStillBlocked === true
      && report.prerequisites?.furtherUtilBatchExpansionBlocked === true,
    requiredBeforeContractPinned:
      requiredBeforeContract.includes('build browser broader editor/widget/view-zone contract plan')
      && requiredBeforeContract.includes('lock a service-bridge subset before any live preparation')
      && requiredBeforeContract.includes('run browser broader editor/widget/view-zone export-delta preflight')
      && requiredBeforeContract.includes('run browser broader editor/widget/view-zone fallback preflight')
      && requiredBeforeContract.includes('run browser broader editor/widget/view-zone sticky-disable preflight')
      && requiredBeforeContract.includes('run broader editor/widget/view-zone live gate')
      && requiredBeforeContract.includes('run accept')
      && requiredBeforeContract.includes('run quality-report'),
    blockedSurfacesPinned:
      blockedSurfaces.includes('browser broader editor/widget/view-zone live')
      && blockedSurfaces.includes('browser global editor/widget/view-zone expansion beyond the approved bridge surface')
      && blockedSurfaces.includes('browser further util-batch expansion')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.nextApprovedAction === 'browser-broader-editor-widget-view-zone-contract-plan'
      && report.decision?.browserBroaderUiLiveStillBlocked === true
      && report.decision?.browserGlobalEditorWidgetViewZoneStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    minimumWinPinned:
      report.minimumWin?.definition === 'browser broader editor/widget/view-zone admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-broader-editor-widget-view-zone-contract-plan'
      && Array.isArray(report.minimumWin?.mustVerify)
      && report.minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-admission-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(report.scopeBoundary?.allowOnly)
      && report.scopeBoundary.allowOnly.includes('browser broader editor/widget/view-zone admission artifacts')
      && mustNotTouch.includes('browser broader editor/widget/view-zone contract artifacts')
      && mustNotTouch.includes('browser broader editor/widget/view-zone live execution')
      && mustNotTouch.includes('browser global editor/widget/view-zone expansion beyond the approved bridge surface')
      && mustNotTouch.includes('browser further util-batch expansion')
      && mustNotTouch.includes('cross-lane expansion'),
    followUpPinned: report.followUpPriority?.next === 'browser-broader-editor-widget-view-zone-contract-plan',
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
