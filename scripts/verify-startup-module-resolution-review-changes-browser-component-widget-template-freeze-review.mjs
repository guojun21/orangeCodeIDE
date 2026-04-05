#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-freeze-review-verify.json');

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
    phasePinned: report.phase === 'browser-component-widget-template-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    priorProofsPinned:
      report.proven?.thirdBatchWaveId === 'DBRB3'
      && report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2'
      && report.proven?.fifthSingleLiveWaveId === 'DBR5L',
    surfacePinned:
      report.admittedSurface?.surfaceWaveId === 'DBCWT1A'
      && report.admittedSurface?.surfaceSize === 8
      && Array.isArray(report.admittedSurface?.selectedModules)
      && report.admittedSurface.selectedModules.length === 8
      && Array.isArray(report.admittedSurface?.presentationalFirst)
      && report.admittedSurface.presentationalFirst.length === 6
      && Array.isArray(report.admittedSurface?.interactiveLater)
      && report.admittedSurface.interactiveLater.length === 2,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-admission-planned'
      && report.decision?.nextApprovedStep === 'browser-component-widget-template-next-step-lock'
      && report.decision?.contractStillNotReady === true
      && report.decision?.browserComponentWidgetTemplateLiveStillBlocked === true
      && report.decision?.browserHeavierUiSurfaceStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser component/widget/template live')
      && blockedNow.includes('browser heavier UI/view-zone admission')
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
