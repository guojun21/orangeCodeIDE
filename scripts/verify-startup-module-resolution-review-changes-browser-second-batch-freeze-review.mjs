#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-freeze-review-verify.json');

const EXPECTED_MODULES = [
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
    phasePinned: report.phase === 'browser-second-batch-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-batch-live-proven'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.batchWaveId === 'DBRB1'
      && report.proven?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L',
    batchPinned:
      report.plannedBatch?.batchWaveId === 'DBRB2A'
      && report.plannedBatch?.batchSize === 4
      && arrayEquals(report.plannedBatch?.selectedModules, EXPECTED_MODULES),
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'four-single-live-proven-first-batch-live-proven-second-batch-admission-planned'
      && report.decision?.nextApprovedStep === 'browser-second-batch-next-step-lock'
      && report.decision?.batchStillNotContractReady === true
      && report.decision?.browserSecondBatchLiveStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.browserFifthCandidateAdmissionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('browser second batch live')
      && blockedNow.includes('browser component/widget/template')
      && blockedNow.includes('browser fifth candidate admission')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename'),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && arrayEquals(runnerUpLock.blockedRunnerUps, ['out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js']),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackAdmissionOnlyOn)
      && failureClassification.rollbackAdmissionOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser second-batch admission / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-second-batch-contract-plan'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-freeze-review-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser second-batch admission artifacts')
      && scopeBoundary.allowOnly.includes('browser second-batch freeze artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser second-batch execution')
      && scopeBoundary.mustNotTouch.includes('browser fifth candidate admission')
      && scopeBoundary.mustNotTouch.includes('component/widget/template')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-second-batch-contract-plan',
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
