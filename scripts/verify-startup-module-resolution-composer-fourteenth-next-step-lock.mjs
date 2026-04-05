#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fourteenth-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'fourteenth-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-ten-single-live-one-micro-batch-fourteenth-candidate-planned'
      && report.baseline?.nextCandidateModuleId === 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js'
      && report.baseline?.nextCandidateWaveId === 'DC14A',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-fourteenth-dedicated-no-op-runtime-plan'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js'
      && report.decision?.reviewChangesLaneFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowPinned:
      allowedNow.includes('composer fourteenth candidate admission artifacts')
      && allowedNow.includes('composer fourteenth dedicated no-op runtime planning only'),
    blockedNowPinned:
      blockedNow.includes('composer fourteenth candidate live execution')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss DC14L until DC14A dedicated no-op runtime gate completes')
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
