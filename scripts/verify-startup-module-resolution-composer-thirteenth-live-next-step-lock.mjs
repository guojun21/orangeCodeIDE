#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-thirteenth-live-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-thirteenth-live-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'thirteenth-live-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-thirteenth-live-admission-planned'
      && report.baseline?.tenthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.baseline?.tenthSingleLiveWaveId === 'DC10L'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.thirteenthNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerAgent.js'
      && report.baseline?.thirteenthNoOpWaveId === 'DC13'
      && report.baseline?.thirteenthLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerAgent.js'
      && report.baseline?.thirteenthLiveWaveId === 'DC13L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-thirteenth-live-contract'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/composerAgent.js'
      && report.decision?.widerBatchExpansionBlocked === true
      && report.decision?.composerThirteenthRunnerUpSwitchBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('composer thirteenth live admission artifacts')
      && allowedNow.includes('composer thirteenth live contract planning only'),
    blockedNowPinned:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('composer thirteenth runner-up switch')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work')
      && blockedNow.includes('composer thirteenth live execution before contract'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss wider composer batch until DC13L live is executed and frozen')
      && stopConditions.includes('do not switch to composer runner-ups before DC13L live outcome is frozen'),
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
