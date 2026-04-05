#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-live-next-step-lock-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const allowedNow = report.allowedNow ?? [];
  const blockedNow = report.blockedNow ?? [];
  const stopConditions = report.stopConditions ?? [];

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'third-live-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-two-single-live-one-micro-batch-third-live-admission-planned'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.baseline?.firstSingleLiveWaveId === 'DC1'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.baseline?.secondSingleLiveWaveId === 'DC2'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.thirdNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.baseline?.thirdNoOpWaveId === 'DC3'
      && report.baseline?.thirdLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.baseline?.thirdLiveWaveId === 'DC3L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-third-live-contract'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.decision?.widerBatchExpansionBlocked === true
      && report.decision?.composerThirdRunnerUpSwitchBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('composer third live admission artifacts')
      && allowedNow.includes('composer third live contract planning only'),
    blockedNowScoped:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('composer third runner-up switch')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('composer third live execution before contract'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss wider composer batch until DC3L live is executed and frozen')
      && stopConditions.includes('do not switch to composer runner-ups before DC3L live outcome is frozen'),
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
