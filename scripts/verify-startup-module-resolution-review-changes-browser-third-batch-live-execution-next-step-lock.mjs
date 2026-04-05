#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-live-execution-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-live-execution-next-step-lock-verify.json');

const APPROVED_BATCH = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function sameSet(left, right) {
  const l = [...new Set(left ?? [])].sort();
  const r = [...new Set(right ?? [])].sort();
  return JSON.stringify(l) === JSON.stringify(r);
}

function main() {
  const report = readJson(INPUT_PATH);
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-third-batch-live-execution-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-and-third-batch-live-proven'
      && report.baseline?.thirdBatchWaveId === 'DBRB3'
      && sameSet(report.baseline?.approvedBatch, APPROVED_BATCH),
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-component-widget-template-admission-plan'
      && sameSet(report.decision?.approvedBatchOnly, APPROVED_BATCH)
      && report.decision?.componentWidgetTemplateAdmissionMayStartOnlyAfterThirdBatchFreeze === true
      && report.decision?.browserComponentWidgetTemplateLiveBlocked === true
      && report.decision?.browserHeavierUiSurfaceBlocked === true
      && report.decision?.browserFurtherUtilBatchExpansionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser third-batch live execution freeze artifacts')
      && allowedNow.includes('browser component/widget/template admission planning only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowScoped:
      blockedNow.includes('browser component/widget/template live')
      && blockedNow.includes('browser heavier UI/view-zone admission')
      && blockedNow.includes('browser further util-batch expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
    stopConditionsPinned:
      stopConditions.includes('do not start component/widget/template live before a dedicated component/widget/template admission, contract, and execution chain are completed')
      && stopConditions.includes('do not start heavier UI admission before component/widget/template admission outcome is frozen')
      && stopConditions.includes('do not reopen browser util candidate or batch expansion after candidate pool exhaustion'),
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
