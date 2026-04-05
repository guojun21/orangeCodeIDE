#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-freeze-review-verify.json'
);

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-global-editor-widget-view-zone-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    priorProofsPinned:
      report.proven?.thirdBatchWaveId === 'DBRB3'
      && report.proven?.fifthSingleLiveWaveId === 'DBR5L'
      && report.proven?.componentWidgetTemplateWaveId === 'DBCWT1'
      && report.proven?.heavierUiWaveId === 'DBHUI1'
      && report.proven?.broaderEditorWidgetViewZoneWaveId === 'DBEWV1',
    surfacePinned:
      report.admittedSurface?.surfaceWaveId === 'DBGEWV1A'
      && report.admittedSurface?.surfaceSize === 14
      && Array.isArray(report.admittedSurface?.selectedModules)
      && report.admittedSurface.selectedModules.length === 14
      && Array.isArray(report.admittedSurface?.bridgeAndComponentFirst)
      && report.admittedSurface.bridgeAndComponentFirst.length === 11
      && Array.isArray(report.admittedSurface?.heavierUiLast)
      && report.admittedSurface.heavierUiLast.length === 3
      && Array.isArray(report.admittedSurface?.alreadyFrozenOutsideSurface)
      && report.admittedSurface.alreadyFrozenOutsideSurface.length === 5,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven-global-editor-widget-view-zone-admission-planned'
      && report.decision?.nextApprovedStep === 'browser-global-editor-widget-view-zone-next-step-lock'
      && report.decision?.contractStillNotReady === true
      && report.decision?.browserGlobalEditorWidgetViewZoneLiveStillBlocked === true
      && report.decision?.browserBeyondReviewChangesGlobalSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser global editor/widget/view-zone live')
      && blockedNow.includes('browser beyond the approved reviewChanges global editor/widget/view-zone surface')
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
