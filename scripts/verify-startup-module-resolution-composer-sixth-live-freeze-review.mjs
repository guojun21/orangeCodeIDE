#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-sixth-live-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'sixth-live-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.proven?.firstSingleLiveWaveId === 'DC1'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.proven?.secondSingleLiveWaveId === 'DC2'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.proven?.thirdSingleLiveWaveId === 'DC3L'
      && report.proven?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && report.proven?.fourthSingleLiveWaveId === 'DC4L'
      && report.proven?.fifthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.proven?.fifthSingleLiveWaveId === 'DC5L'
      && report.proven?.firstMicroBatchWaveId === 'DCB1',
    sixthNoOpPinned:
      report.sixthNoOp?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js'
      && report.sixthNoOp?.waveId === 'DC6'
      && report.sixthNoOp?.mode === 'no-op-observable'
      && report.sixthNoOp?.result === 'original-pass'
      && report.sixthNoOp?.fallbackReason === 'disabled-global',
    sixthLivePlanPinned:
      report.sixthLivePlan?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js'
      && report.sixthLivePlan?.waveId === 'DC6L'
      && report.sixthLivePlan?.liveShape === 'single-module-live'
      && Array.isArray(report.sixthLivePlan?.requiredBeforeLive)
      && report.sixthLivePlan.requiredBeforeLive.includes('build DC6L live contract'),
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-five-single-live-one-micro-batch-sixth-live-admission-planned'
      && report.decision?.nextApprovedStep === 'composer-sixth-live-next-step-lock'
      && report.decision?.sixthLiveAdmissionPlannedOnly === true
      && report.decision?.widerBatchExpansionStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('composer wider batch expansion')
      && report.blockedNow.includes('composer sixth runner-up switch')
      && report.blockedNow.includes('new reviewChanges browser surface expansion')
      && report.blockedNow.includes('cross-lane expansion'),
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
