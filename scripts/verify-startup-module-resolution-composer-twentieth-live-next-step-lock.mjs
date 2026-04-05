#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentieth-live-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentieth-live-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'twentieth-live-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-twentieth-live-admission-planned'
      && report.baseline?.tenthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.baseline?.tenthSingleLiveWaveId === 'DC10L'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.twentiethNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerStorageService.js'
      && report.baseline?.twentiethNoOpWaveId === 'DC20'
      && report.baseline?.twentiethLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerStorageService.js'
      && report.baseline?.twentiethLiveWaveId === 'DC20L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-twentieth-live-contract'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/composerStorageService.js'
      && report.decision?.widerBatchExpansionBlocked === true
      && report.decision?.composerEighteenthRunnerUpSwitchBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('composer twentieth live admission artifacts')
      && allowedNow.includes('composer twentieth live contract planning only'),
    blockedNowPinned:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('composer twentieth runner-up switch')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work')
      && blockedNow.includes('composer twentieth live execution before contract'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss wider composer batch until DC20L live is executed and frozen')
      && stopConditions.includes('do not switch to composer runner-ups before DC20L live outcome is frozen'),
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
