#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-freeze-review-verify.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
];

const EXPECTED_WAVES = ['DBR1L', 'DBR2L', 'DBR3L', 'DBR4L'];

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
  const batchContract = report.batchContract ?? {};
  const runnerUpLock = report.runnerUpLock ?? {};
  const failureClassification = report.failureClassification ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-second-batch-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-batch-live-proven-second-batch-admission-planned'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === EXPECTED_MODULES[0]
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === EXPECTED_MODULES[1]
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === EXPECTED_MODULES[2]
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.batchWaveId === 'DBRB1'
      && report.proven?.fourthSingleLiveModuleId === EXPECTED_MODULES[3]
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L',
    plannedBatchPinned:
      report.plannedBatch?.batchWaveId === 'DBRB2A'
      && report.plannedBatch?.batchSize === 4
      && arrayEquals(report.plannedBatch?.selectedModules, EXPECTED_MODULES),
    batchContractPinned:
      batchContract.batchWaveId === 'DBRB2A'
      && arrayEquals(batchContract.selectedModules, EXPECTED_MODULES)
      && arrayEquals(batchContract.selectedWaves, EXPECTED_WAVES)
      && batchContract.output === 'mapped/contrib-review-changes-browser-second-batch-module-resolution-live-contract.json'
      && batchContract.runtimeCopy === 'mapped/contrib-review-changes-browser-second-batch-module-resolution-live-contract.runtime.json'
      && batchContract.mode === 'live-canary'
      && batchContract.enableResolver === true
      && batchContract.enableDedicatedLane === true
      && batchContract.planningOnly === true
      && batchContract.exportDeltaPassed === true
      && batchContract.fallbackPreflightPassed === true
      && batchContract.stickyDisablePreflightPassed === true
      && batchContract.expectedModuleCount === 4
      && batchContract.observedModuleCount === 4,
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && arrayEquals(runnerUpLock.blockedRunnerUps, ['out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js']),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser second-batch contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-second-batch-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-contract-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-export-delta-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-fallback-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-sticky-disable-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser second-batch contract plan artifacts')
      && scopeBoundary.allowOnly.includes('browser second-batch preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser second-batch contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser second-batch contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser second-batch contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser second-batch wrapper patch')
      && scopeBoundary.mustNotTouch.includes('browser second-batch live gate')
      && scopeBoundary.mustNotTouch.includes('browser second-batch execution')
      && scopeBoundary.mustNotTouch.includes('browser fifth candidate admission')
      && scopeBoundary.mustNotTouch.includes('component/widget/template')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion')
      && scopeBoundary.mustNotTouch.includes('rename-driven work'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-second-batch-live-execution'
      && followUpPriority.afterThat === 'browser second-batch execution freeze review only after batch live outcome is frozen',
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'four-single-live-proven-first-batch-live-proven-second-batch-contract-ready'
      && report.decision?.nextApprovedStep === 'browser-second-batch-contract-next-step-lock'
      && report.decision?.batchContractReadyOnly === true
      && report.decision?.browserSecondBatchLiveStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.browserFifthCandidateAdmissionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('browser second-batch live before explicit run step')
      && blockedNow.includes('browser component/widget/template')
      && blockedNow.includes('browser fifth candidate admission')
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
