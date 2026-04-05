#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfifth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-twentyfifth-live-contract-freeze-review-verify.json');

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
    phasePinned: report.phase === 'twentyfirst-live-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-twentyfirst-live-admission-planned'
      && report.baseline?.stableRuntimeStillGreen === true,
    contractPinned:
      report.twentyfirstLiveContract?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/browserPlaceholderPages.js'
      && report.twentyfirstLiveContract?.waveId === 'DC25L'
      && report.twentyfirstLiveContract?.mode === 'live-canary'
      && report.twentyfirstLiveContract?.resolverEnabled === true
      && report.twentyfirstLiveContract?.laneToggleEnabled === true
      && report.twentyfirstLiveContract?.perModuleKillSwitchEnabled === true
      && report.twentyfirstLiveContract?.exportDeltaPassed === true
      && report.twentyfirstLiveContract?.fallbackPreflightPassed === true
      && report.twentyfirstLiveContract?.stickyPreflightPassed === true,
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-twentyfirst-live-contract-ready'
      && report.decision?.nextApprovedStep === 'composer-twentyfifth-live-contract-next-step-lock'
      && report.decision?.twentyfirstLiveContractReadyOnly === true
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
      && blockedNow.includes('composer twentyfirst live execution before explicit run step'),
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
