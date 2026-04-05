#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-live-contract-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'seventh-live-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-six-single-live-one-micro-batch-seventh-live-admission-planned'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstMicroBatchWaveId === 'DCB1'
      && report.proven?.seventhNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.proven?.seventhNoOpWaveId === 'DC7',
    liveContractPinned:
      report.seventhLiveContract?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.seventhLiveContract?.waveId === 'DC7L'
      && report.seventhLiveContract?.mode === 'live-canary'
      && report.seventhLiveContract?.resolverEnabled === true
      && report.seventhLiveContract?.laneToggleEnabled === true
      && report.seventhLiveContract?.perModuleKillSwitchEnabled === true
      && report.seventhLiveContract?.exportDeltaPassed === true
      && report.seventhLiveContract?.fallbackPreflightPassed === true
      && report.seventhLiveContract?.stickyPreflightPassed === true,
    decisionPinned:
      report.decision?.laneState === 'contrib-composer-six-single-live-one-micro-batch-seventh-live-contract-ready'
      && report.decision?.seventhLiveContractReadyOnly === true
      && report.decision?.nextApprovedStep === 'composer-seventh-live-contract-next-step-lock'
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
