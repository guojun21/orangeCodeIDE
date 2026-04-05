#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-batch-admission-verify.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
];

const EXPECTED_REQUIRED_BEFORE_BATCH = [
  'build browser batch live contract',
  'run browser-batch export-delta preflight',
  'run browser-batch fallback preflight',
  'run browser-batch sticky-disable preflight',
  'apply batch wrapper patch',
  'run batch live gate',
  'run smoke',
  'run workbench-desktop-main spike',
  'run accept',
  'run quality-report',
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
  const runnerUpLock = report.runnerUpLock ?? {};
  const failureClassification = report.failureClassification ?? {};
  const minimumWin = report.minimumWin ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-batch-admission-plan',
    batchWavePinned:
      report.batchCandidate?.batchWaveId === 'DBRB1A'
      && report.batchCandidate?.batchSize === 3,
    batchModulesPinned: arrayEquals(report.batchCandidate?.selectedModules, EXPECTED_MODULES),
    selectedWavesPinned: arrayEquals(report.batchCandidate?.selectedWaves, ['DBR1L', 'DBR2L', 'DBR3L']),
    blockedCandidatesPinned:
      Array.isArray(report.batchCandidate?.blockedCandidates)
      && report.batchCandidate.blockedCandidates.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js')
      && report.batchCandidate.blockedCandidates.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'),
    prerequisitesPinned:
      report.prerequisites?.browserBatchAdmissionUnlocked === true
      && report.prerequisites?.firstSingleLiveProven === true
      && report.prerequisites?.secondSingleLiveProven === true
      && report.prerequisites?.thirdSingleLiveProven === true
      && report.prerequisites?.stableAcceptRecorded === true
      && report.prerequisites?.stableQualityGreen === true
      && report.prerequisites?.rolloutGatePassed === true
      && report.prerequisites?.componentWidgetTemplateStillBlocked === true
      && report.prerequisites?.fourthCandidateStillBlocked === true,
    requiredBeforeBatchPinned: arrayEquals(report.requiredBeforeBatch, EXPECTED_REQUIRED_BEFORE_BATCH),
    blockedSurfacesPinned:
      Array.isArray(report.blockedSurfaces)
      && report.blockedSurfaces.includes('browser batch live')
      && report.blockedSurfaces.includes('browser component/widget/template')
      && report.blockedSurfaces.includes('browser fourth candidate admission')
      && report.blockedSurfaces.includes('cross-lane expansion')
      && report.blockedSurfaces.includes('rename'),
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
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-batch-admission-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser batch admission artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser batch execution')
      && scopeBoundary.mustNotTouch.includes('browser fourth candidate admission')
      && scopeBoundary.mustNotTouch.includes('component/widget/template')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-batch-contract-plan',
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.nextApprovedAction === 'browser-batch-contract-plan'
      && report.decision?.browserBatchExecutionStillBlocked === true
      && report.decision?.browserFourthCandidateStillBlocked === true,
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
