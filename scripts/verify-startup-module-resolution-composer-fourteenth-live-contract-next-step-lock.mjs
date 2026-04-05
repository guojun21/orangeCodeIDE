#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-contract-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-contract-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'fourteenth-live-contract-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-fourteenth-live-contract-ready'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.fourteenthLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js'
      && report.baseline?.fourteenthLiveWaveId === 'DC14L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-fourteenth-live-execution'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js'
      && report.decision?.widerBatchExpansionBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('composer fourteenth live contract artifacts')
      && allowedNow.includes('composer fourteenth live execution only'),
    blockedNowScoped:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('composer fourteenth live batch expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss wider composer batch until DC14L live is executed and frozen')
      && stopConditions.includes('do not reopen reviewChanges or browser lane expansion before DC14L live outcome is frozen'),
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
