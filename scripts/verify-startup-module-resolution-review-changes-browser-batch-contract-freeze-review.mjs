#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-contract-freeze-review-verify.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
];

const EXPECTED_WAVES = ['DBR1L', 'DBR2L', 'DBR3L'];

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
    phasePinned: report.phase === 'browser-batch-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'three-single-live-proven-batch-admission-planned'
      && typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === EXPECTED_MODULES[0]
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === EXPECTED_MODULES[1]
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === EXPECTED_MODULES[2]
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L',
    plannedBatchPinned:
      report.plannedBatch?.batchWaveId === 'DBRB1A'
      && report.plannedBatch?.batchSize === 3
      && arrayEquals(report.plannedBatch?.selectedModules, EXPECTED_MODULES),
    batchContractPinned:
      batchContract.batchWaveId === 'DBRB1A'
      && arrayEquals(batchContract.selectedModules, EXPECTED_MODULES)
      && arrayEquals(batchContract.selectedWaves, EXPECTED_WAVES)
      && batchContract.output === 'mapped/contrib-review-changes-browser-batch-module-resolution-live-contract.json'
      && batchContract.runtimeCopy === 'mapped/contrib-review-changes-browser-batch-module-resolution-live-contract.runtime.json'
      && batchContract.mode === 'live-canary'
      && batchContract.enableResolver === true
      && batchContract.enableDedicatedLane === true
      && batchContract.planningOnly === true
      && batchContract.exportDeltaPassed === true
      && batchContract.fallbackPreflightPassed === true
      && batchContract.stickyDisablePreflightPassed === true
      && batchContract.expectedModuleCount === 3
      && batchContract.observedModuleCount === 3,
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js')
      && runnerUpLock.blockedRunnerUps.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'),
    failureClassificationPinned:
      Array.isArray(failureClassification.rollbackContractOnlyOn)
      && failureClassification.rollbackContractOnlyOn.length >= 2
      && Array.isArray(failureClassification.freezeBrowserLaneOn)
      && failureClassification.freezeBrowserLaneOn.length >= 3,
    minimumWinPinned:
      minimumWin.definition === 'browser batch contract plan / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-batch-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-contract-plan-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-export-delta-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-fallback-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-sticky-disable-preflight.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-contract-freeze-review-verify.json')
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-contract-next-step-lock-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser batch contract plan artifacts')
      && scopeBoundary.allowOnly.includes('browser batch preflight artifacts')
      && scopeBoundary.allowOnly.includes('browser batch contract freeze artifacts')
      && scopeBoundary.allowOnly.includes('browser batch contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser batch contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser batch wrapper patch')
      && scopeBoundary.mustNotTouch.includes('browser batch live gate')
      && scopeBoundary.mustNotTouch.includes('browser batch execution')
      && scopeBoundary.mustNotTouch.includes('browser fourth candidate admission')
      && scopeBoundary.mustNotTouch.includes('component/widget/template')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion')
      && scopeBoundary.mustNotTouch.includes('rename-driven work'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-batch-live-execution'
      && followUpPriority.afterThat === 'browser batch execution freeze review only after batch live outcome is frozen',
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'three-single-live-proven-batch-contract-ready'
      && report.decision?.nextApprovedStep === 'browser-batch-contract-next-step-lock'
      && report.decision?.batchContractReadyOnly === true
      && report.decision?.browserBatchLiveStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.browserFourthCandidateAdmissionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('browser batch live before explicit run step')
      && blockedNow.includes('browser component/widget/template')
      && blockedNow.includes('browser fourth candidate admission')
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
