#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-freeze-review-verify.json');

const EXPECTED_MODULES = [
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

function arrayEquals(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((item, index) => item === b[index]);
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];
  const runnerUpLock = report.runnerUpLock ?? {};
  const failureClassification = report.failureClassification ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-third-batch-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'five-single-live-proven-first-and-second-batch-live-proven'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L'
      && report.proven?.fifthSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.proven?.fifthSingleLiveWaveId === 'DBR5L'
      && report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2',
    batchPinned:
      report.plannedBatch?.batchWaveId === 'DBRB3A'
      && report.plannedBatch?.batchSize === 5
      && arrayEquals(report.plannedBatch?.selectedModules, EXPECTED_MODULES),
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'five-single-live-proven-first-and-second-batch-live-proven-third-batch-admission-planned'
      && report.decision?.nextApprovedStep === 'browser-third-batch-next-step-lock'
      && report.decision?.batchStillNotContractReady === true
      && report.decision?.browserThirdBatchLiveStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.browserHeavierUiSurfaceStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser third batch live')
      && blockedNow.includes('browser component/widget/template')
      && blockedNow.includes('browser heavier UI/view-zone')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.length === 0
      && runnerUpLock.candidatePoolExhausted === true,
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser third-batch admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-batch-contract-plan'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-batch-freeze-review-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser third-batch admission artifacts')
      && scopeBoundary.allowOnly.includes('browser third-batch freeze artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser third-batch execution')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI/view-zone')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-third-batch-contract-plan',
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
