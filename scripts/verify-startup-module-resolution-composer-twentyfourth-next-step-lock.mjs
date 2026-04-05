#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfourth-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfourth-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'twentyfirst-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-ten-single-live-one-micro-batch-twentyfirst-candidate-planned'
      && report.baseline?.nextCandidateModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerWakelockManager.js'
      && report.baseline?.nextCandidateWaveId === 'DC24A',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-twentyfourth-dedicated-no-op-runtime-plan'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/composerWakelockManager.js'
      && report.decision?.reviewChangesLaneFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('composer twentyfirst candidate admission artifacts')
      && allowedNow.includes('composer twentyfirst dedicated no-op runtime planning only'),
    blockedNowPinned:
      blockedNow.includes('composer twentyfirst candidate live execution')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss DC24L until DC24A dedicated no-op runtime gate completes')
      && stopConditions.includes('do not reopen reviewChanges or browser lane expansion while composer continuation is still in candidate-only planning'),
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
