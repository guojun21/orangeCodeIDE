#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-contract-freeze-review-verify.json');

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
    phasePinned: report.phase === 'tenth-live-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-nine-single-live-one-micro-batch-tenth-live-admission-planned'
      && report.baseline?.stableRuntimeStillGreen === true,
    contractPinned:
      report.tenthLiveContract?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.tenthLiveContract?.waveId === 'DC10L'
      && report.tenthLiveContract?.mode === 'live-canary'
      && report.tenthLiveContract?.resolverEnabled === true
      && report.tenthLiveContract?.laneToggleEnabled === true
      && report.tenthLiveContract?.perModuleKillSwitchEnabled === true
      && report.tenthLiveContract?.exportDeltaPassed === true
      && report.tenthLiveContract?.fallbackPreflightPassed === true
      && report.tenthLiveContract?.stickyPreflightPassed === true,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-nine-single-live-one-micro-batch-tenth-live-contract-ready'
      && report.decision?.nextApprovedStep === 'composer-tenth-live-contract-next-step-lock'
      && report.decision?.tenthLiveContractReadyOnly === true
      && report.decision?.widerBatchExpansionStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work')
      && blockedNow.includes('composer tenth live execution before explicit run step'),
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
