#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-live-contract-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-live-contract-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'fifteenth-live-contract-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-fifteenth-live-contract-ready'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.fifteenthLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js'
      && report.baseline?.fifteenthLiveWaveId === 'DC15L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-fifteenth-live-execution'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js'
      && report.decision?.widerBatchExpansionBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('composer fifteenth live contract artifacts')
      && allowedNow.includes('composer fifteenth live execution only'),
    blockedNowScoped:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('composer fifteenth live batch expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss wider composer batch until DC15L live is executed and frozen')
      && stopConditions.includes('do not reopen reviewChanges or browser lane expansion before DC15L live outcome is frozen'),
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
