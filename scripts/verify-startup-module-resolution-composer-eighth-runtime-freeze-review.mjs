#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-runtime-freeze-review-verify.json');

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
    phasePinned: report.phase === 'eighth-runtime-freeze-review',
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
      && report.proven?.sixthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js'
      && report.proven?.sixthSingleLiveWaveId === 'DC6L'
      && report.proven?.seventhSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.proven?.seventhSingleLiveWaveId === 'DC7L'
      && report.proven?.firstMicroBatchWaveId === 'DCB1'
      && Array.isArray(report.proven?.firstMicroBatchModuleIds)
      && report.proven.firstMicroBatchModuleIds.includes('out-build/vs/workbench/contrib/composer/common/composerUtils.js')
      && report.proven.firstMicroBatchModuleIds.includes('out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'),
    eighthNoOpPinned:
      report.eighthNoOp?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js'
      && report.eighthNoOp?.waveId === 'DC8'
      && report.eighthNoOp?.mode === 'no-op-observable'
      && report.eighthNoOp?.canaryCount === 1
      && report.eighthNoOp?.result === 'original-pass'
      && report.eighthNoOp?.fallbackReason === 'disabled-global'
      && report.eighthNoOp?.originalPassCount === 1
      && report.eighthNoOp?.overlayHitCount === 0
      && report.eighthNoOp?.stickyDisabledCount === 0,
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-seven-single-live-one-micro-batch-eighth-no-op-proven'
      && report.decision?.nextApprovedStep === 'composer-eighth-runtime-next-step-lock'
      && report.decision?.eighthNoOpProvenOnly === true
      && report.decision?.eighthLiveStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('composer eighth live execution before admission')
      && report.blockedNow.includes('composer wider batch expansion')
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
