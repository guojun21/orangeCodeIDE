#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-batch-admission-verify.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
];

const EXPECTED_REQUIRED_BEFORE_BATCH = [
  'build browser third batch live contract',
  'run browser-third-batch export-delta preflight',
  'run browser-third-batch fallback preflight',
  'run browser-third-batch sticky-disable preflight',
  'apply third batch wrapper patch',
  'run third batch live gate',
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
    phasePinned: report.phase === 'browser-third-batch-admission-plan',
    batchWavePinned:
      report.batchCandidate?.batchWaveId === 'DBRB3A'
      && report.batchCandidate?.batchSize === 5,
    batchModulesPinned: arrayEquals(report.batchCandidate?.selectedModules, EXPECTED_MODULES),
    selectedWavesPinned: arrayEquals(report.batchCandidate?.selectedWaves, ['DBR1L', 'DBR2L', 'DBR3L', 'DBR4L', 'DBR5L']),
    blockedCandidatesPinned:
      Array.isArray(report.batchCandidate?.blockedCandidates)
      && report.batchCandidate.blockedCandidates.length === 0,
    prerequisitesPinned:
      report.prerequisites?.thirdBatchAdmissionUnlocked === true
      && report.prerequisites?.secondBatchLiveProven === true
      && report.prerequisites?.fifthSingleLiveProven === true
      && report.prerequisites?.stableAcceptRecorded === true
      && report.prerequisites?.stableQualityGreen === true
      && report.prerequisites?.rolloutGatePassed === true
      && report.prerequisites?.componentWidgetTemplateStillBlocked === true
      && report.prerequisites?.heavierUiStillBlocked === true,
    requiredBeforeBatchPinned: arrayEquals(report.requiredBeforeBatch, EXPECTED_REQUIRED_BEFORE_BATCH),
    blockedSurfacesPinned:
      Array.isArray(report.blockedSurfaces)
      && report.blockedSurfaces.includes('browser third batch live')
      && report.blockedSurfaces.includes('browser component/widget/template')
      && report.blockedSurfaces.includes('browser heavier UI/view-zone')
      && report.blockedSurfaces.includes('cross-lane expansion')
      && report.blockedSurfaces.includes('rename'),
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
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-batch-admission-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser third-batch admission artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser third-batch execution')
      && scopeBoundary.mustNotTouch.includes('browser component/widget/template')
      && scopeBoundary.mustNotTouch.includes('browser heavier UI/view-zone')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-third-batch-contract-plan',
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.nextApprovedAction === 'browser-third-batch-contract-plan'
      && report.decision?.browserThirdBatchExecutionStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.browserHeavierUiSurfaceStillBlocked === true,
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
