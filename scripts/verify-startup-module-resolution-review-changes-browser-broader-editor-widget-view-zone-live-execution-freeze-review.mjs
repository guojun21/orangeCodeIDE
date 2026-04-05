#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-freeze-review-verify.json'
);

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function sameSet(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-broader-editor-widget-view-zone-live-execution-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-contract-ready'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    priorProofsPinned:
      report.proven?.thirdBatchWaveId === 'DBRB3'
      && report.proven?.componentWidgetTemplateWaveId === 'DBCWT1'
      && report.proven?.heavierUiWaveId === 'DBHUI1',
    broaderPinned:
      report.proven?.broaderEditorWidgetViewZoneWaveId === 'DBEWV1'
      && sameSet(report.proven?.approvedSurface, EXPECTED_MODULES)
      && sameSet(report.proven?.overlayProbeIds, EXPECTED_MODULES)
      && sameSet(report.proven?.factoryHitIds, EXPECTED_MODULES)
      && report.proven?.diagnostics?.overlayHitCount === 3
      && report.proven?.diagnostics?.originalPassCount === 0
      && report.proven?.diagnostics?.fallbackCount === 0
      && report.proven?.diagnostics?.stickyDisabledCount === 0,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven-heavier-ui-live-proven-broader-editor-widget-view-zone-live-proven'
      && report.decision?.nextApprovedStep === 'browser-broader-editor-widget-view-zone-live-execution-next-step-lock'
      && report.decision?.globalEditorWidgetViewZoneDiscussionUnlocked === true
      && report.decision?.browserGlobalEditorWidgetViewZoneStillBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser global editor/widget/view-zone admission')
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
