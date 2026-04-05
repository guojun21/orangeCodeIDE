#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourth-runtime-freeze-review-verify.json');

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
    phasePinned: report.phase === 'fourth-runtime-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.proven?.firstSingleLiveWaveId === 'DC1'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.proven?.secondSingleLiveWaveId === 'DC2'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.proven?.thirdSingleLiveWaveId === 'DC3L'
      && report.proven?.firstMicroBatchWaveId === 'DCB1'
      && Array.isArray(report.proven?.firstMicroBatchModuleIds)
      && report.proven.firstMicroBatchModuleIds.includes('out-build/vs/workbench/contrib/composer/common/composerUtils.js')
      && report.proven.firstMicroBatchModuleIds.includes('out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'),
    fourthNoOpPinned:
      report.fourthNoOp?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && report.fourthNoOp?.waveId === 'DC4'
      && report.fourthNoOp?.mode === 'no-op-observable'
      && report.fourthNoOp?.canaryCount === 1
      && report.fourthNoOp?.result === 'original-pass'
      && report.fourthNoOp?.fallbackReason === 'disabled-global'
      && report.fourthNoOp?.originalPassCount === 1
      && report.fourthNoOp?.overlayHitCount === 0
      && report.fourthNoOp?.stickyDisabledCount === 0,
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-three-single-live-one-micro-batch-fourth-no-op-proven'
      && report.decision?.nextApprovedStep === 'composer-fourth-runtime-next-step-lock'
      && report.decision?.fourthNoOpProvenOnly === true
      && report.decision?.fourthLiveStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('composer fourth live execution before admission')
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
