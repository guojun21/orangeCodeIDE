#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-live-execution-next-step-lock-verify.json');

const APPROVED_BATCH = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
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
    phasePinned: report.phase === 'browser-batch-live-execution-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'three-single-live-proven-first-batch-live-proven'
      && report.baseline?.batchWaveId === 'DBRB1'
      && sameSet(report.baseline?.approvedBatch, APPROVED_BATCH),
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-fourth-candidate-admission-plan'
      && sameSet(report.decision?.approvedBatchOnly, APPROVED_BATCH)
      && report.decision?.fourthCandidateAdmissionMayStartOnlyAfterBatchFreeze === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.browserBatchScopeExpansionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser batch live execution freeze artifacts')
      && allowedNow.includes('browser fourth candidate admission planning only'),
    blockedNowScoped:
      blockedNow.includes('browser batch scope expansion')
      && blockedNow.includes('browser component or widget admission')
      && blockedNow.includes('browser template-surface admission')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('runner-up switch without fourth-candidate admission plan'),
    stopConditionsPinned:
      stopConditions.includes('do not widen browser batch beyond DBR1L, DBR2L, and DBR3L before browser fourth candidate planning outcome is frozen')
      && stopConditions.includes('do not start component/widget/template admission before browser fourth candidate planning outcome is frozen')
      && stopConditions.includes('do not switch to generatedFilesConstants.js or ciMessageUtils.js outside a dedicated fourth-candidate admission plan'),
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
