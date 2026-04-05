#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-execution-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-live-execution-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'composer-fourteenth-live-execution-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-twelve-single-live-one-micro-batch-proven'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.fourteenthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js'
      && report.baseline?.fourteenthSingleLiveWaveId === 'DC14L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-lane-freeze-review'
      && report.decision?.composerLaneFreezeMayStartOnlyAfterFourteenthLiveFreeze === true
      && report.decision?.widerBatchDiscussionStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('composer fourteenth live freeze artifacts')
      && allowedNow.includes('composer lane freeze review only')
      && allowedNow.includes('composer-specific diagnostics refinement'),
    blockedNowScoped:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('broad browser expansion')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss wider composer batch before a dedicated composer lane freeze review is completed')
      && stopConditions.includes('do not reopen reviewChanges or browser lane expansion before composer lane freeze outcome is recorded'),
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
