#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-runtime-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'eighteenth-runtime-freeze-review',
    baselinePinned:
      typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    firstSinglePinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.proven?.firstSingleLiveWaveId === 'DC1',
    secondSinglePinned:
      report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.proven?.secondSingleLiveWaveId === 'DC2',
    microBatchPinned:
      report.proven?.firstMicroBatchWaveId === 'DCB1'
      && Array.isArray(report.proven?.firstMicroBatchModuleIds)
      && report.proven.firstMicroBatchModuleIds.length === 2,
    thirdSinglePinned:
      report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.proven?.thirdSingleLiveWaveId === 'DC3L',
    fourthSinglePinned:
      report.proven?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && report.proven?.fourthSingleLiveWaveId === 'DC4L',
    fifthSinglePinned:
      report.proven?.fifthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.proven?.fifthSingleLiveWaveId === 'DC5L',
    sixthSinglePinned:
      report.proven?.sixthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js'
      && report.proven?.sixthSingleLiveWaveId === 'DC6L',
    seventhSinglePinned:
      report.proven?.seventhSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.proven?.seventhSingleLiveWaveId === 'DC7L',
    eighthSinglePinned:
      report.proven?.eighthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js'
      && report.proven?.eighthSingleLiveWaveId === 'DC8L',
    ninthSinglePinned:
      report.proven?.ninthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.proven?.ninthSingleLiveWaveId === 'DC9L',
    tenthSinglePinned:
      report.proven?.tenthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.proven?.tenthSingleLiveWaveId === 'DC10L',
    eighteenthNoOpPinned:
      report.eighteenthNoOp?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js'
      && report.eighteenthNoOp?.waveId === 'DC18'
      && report.eighteenthNoOp?.mode === 'no-op-observable'
      && report.eighteenthNoOp?.result === 'original-pass'
      && report.eighteenthNoOp?.fallbackReason === 'disabled-global'
      && report.eighteenthNoOp?.originalPassCount === 1
      && report.eighteenthNoOp?.overlayHitCount === 0
      && report.eighteenthNoOp?.stickyDisabledCount === 0,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-eighteenth-no-op-proven'
      && report.decision?.nextApprovedStep === 'composer-eighteenth-runtime-next-step-lock'
      && report.decision?.eighteenthNoOpProvenOnly === true
      && report.decision?.eighteenthLiveStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('composer eighteenth live execution before admission')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
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
