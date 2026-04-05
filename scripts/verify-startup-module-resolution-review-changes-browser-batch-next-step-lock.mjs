#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-next-step-lock-verify.json');

const EXPECTED_MODULES = [
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

function arrayEquals(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((item, index) => item === b[index]);
}

function main() {
  const report = readJson(INPUT_PATH);
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];
  const runnerUpLock = report.runnerUpLock ?? {};
  const failureClassification = report.failureClassification ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-batch-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'three-single-live-proven-batch-admission-planned'
      && report.baseline?.batchWaveId === 'DBRB1A'
      && arrayEquals(report.baseline?.approvedBatch, EXPECTED_MODULES),
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-batch-contract-plan'
      && arrayEquals(report.decision?.approvedBatchOnly, EXPECTED_MODULES)
      && report.decision?.browserBatchLiveBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.browserFourthCandidateAdmissionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('browser batch admission freeze artifacts')
      && allowedNow.includes('browser batch contract planning only'),
    blockedNowPinned:
      blockedNow.includes('browser batch live')
      && blockedNow.includes('browser component/widget/template')
      && blockedNow.includes('browser fourth candidate admission')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename'),
    stopConditionsPinned:
      stopConditions.includes('do not execute browser batch before a dedicated browser batch contract, preflight, and freeze are completed')
      && stopConditions.includes('do not switch to generatedFilesConstants.js or ciMessageUtils.js before browser batch planning outcome is frozen')
      && stopConditions.includes('do not discuss browser component/widget/template batch before browser batch execution outcome is frozen'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser batch admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-batch-contract-plan'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser batch admission artifacts')
      && scopeBoundary.allowOnly.includes('browser batch freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser batch next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser batch execution')
      && scopeBoundary.mustNotTouch.includes('browser fourth candidate admission')
      && scopeBoundary.mustNotTouch.includes('component/widget/template')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-batch-contract-plan',
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
