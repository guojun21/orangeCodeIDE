#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-live-execution-next-step-lock-verify.json');

const APPROVED_BATCH = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
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
    phasePinned: report.phase === 'browser-second-batch-live-execution-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven'
      && report.baseline?.batchWaveId === 'DBRB2'
      && sameSet(report.baseline?.approvedBatch, APPROVED_BATCH),
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-fifth-candidate-admission-plan'
      && sameSet(report.decision?.approvedBatchOnly, APPROVED_BATCH)
      && report.decision?.fifthCandidateAdmissionMayStartOnlyAfterSecondBatchFreeze === true
      && report.decision?.browserThirdBatchScopeExpansionBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser second-batch live execution freeze artifacts')
      && allowedNow.includes('browser fifth-candidate admission planning only'),
    blockedNowScoped:
      blockedNow.includes('browser third batch live')
      && blockedNow.includes('browser component or widget admission')
      && blockedNow.includes('browser template-surface admission')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not execute a third browser batch before a dedicated third-batch admission plan and freeze are completed')
      && stopConditions.includes('do not start component/widget/template admission before browser fifth candidate planning outcome is frozen')
      && stopConditions.includes('do not switch beyond ciMessageUtils.js outside a dedicated fifth-candidate admission plan'),
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
