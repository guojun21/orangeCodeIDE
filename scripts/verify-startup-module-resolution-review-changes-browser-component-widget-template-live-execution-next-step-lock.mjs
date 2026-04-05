#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-next-step-lock-verify.json');

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

function sameSet(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
}

function main() {
  const report = readJson(INPUT_PATH);
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-component-widget-template-live-execution-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven-component-widget-template-live-proven'
      && report.baseline?.componentWidgetTemplateWaveId === 'DBCWT1'
      && sameSet(report.baseline?.approvedSurface, EXPECTED_MODULES),
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-heavier-ui-admission-plan'
      && report.decision?.heavierUiAdmissionMayStartOnlyAfterComponentWidgetTemplateFreeze === true
      && report.decision?.browserHeavierUiLiveBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser component/widget/template live freeze artifacts')
      && allowedNow.includes('browser heavier UI/view-zone admission planning only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowScoped:
      blockedNow.includes('browser heavier UI/view-zone live')
      && blockedNow.includes('browser further util-batch expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
    stopConditionsPinned:
      stopConditions.includes('do not start heavier UI live before a dedicated heavier-ui admission, contract, and execution chain is completed')
      && stopConditions.includes('do not reopen browser util or batch expansion after candidate pool exhaustion')
      && stopConditions.includes('do not widen component/widget/template execution beyond DBCWT1 after the surface live outcome is frozen'),
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
