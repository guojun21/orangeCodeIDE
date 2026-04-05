#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighth-live-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedSurfaces = report.blockedSurfaces ?? [];

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'eighth-live-freeze-review',
    baselinePinned:
      typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
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
      && report.proven?.firstMicroBatchWaveId === 'DCB1',
    eighthNoOpPinned:
      report.eighthNoOp?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js'
      && report.eighthNoOp?.waveId === 'DC8'
      && report.eighthNoOp?.mode === 'no-op-observable'
      && report.eighthNoOp?.result === 'original-pass'
      && report.eighthNoOp?.fallbackReason === 'disabled-global',
    eighthLivePlanPinned:
      report.eighthLivePlan?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js'
      && report.eighthLivePlan?.waveId === 'DC8L'
      && report.eighthLivePlan?.liveShape === 'single-module-live'
      && Array.isArray(report.eighthLivePlan?.requiredBeforeLive)
      && report.eighthLivePlan.requiredBeforeLive.includes('build DC8L live contract'),
    blockedSurfacesPinned:
      blockedSurfaces.includes('composer wider batch expansion')
      && blockedSurfaces.includes('composer browser widget or renderer expansion')
      && blockedSurfaces.includes('new reviewChanges browser surface expansion')
      && blockedSurfaces.includes('cross-lane expansion')
      && blockedSurfaces.includes('rename-driven work'),
    decisionPinned:
      report.decision?.laneState === 'contrib-composer-seven-single-live-one-micro-batch-eighth-live-admission-planned'
      && report.decision?.nextApprovedStep === 'composer-eighth-live-next-step-lock'
      && report.decision?.eighthLiveAdmissionPlannedOnly === true
      && report.decision?.widerBatchExpansionStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
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
