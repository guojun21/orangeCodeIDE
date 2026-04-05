#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-contract-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-contract-freeze-review-verify.json');

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
    phasePinned: report.phase === 'ninth-live-contract-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-eight-single-live-one-micro-batch-ninth-live-admission-planned'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstMicroBatchWaveId === 'DCB1'
      && report.proven?.ninthNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.proven?.ninthNoOpWaveId === 'DC9',
    liveContractPinned:
      report.ninthLiveContract?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.ninthLiveContract?.waveId === 'DC9L'
      && report.ninthLiveContract?.mode === 'live-canary'
      && report.ninthLiveContract?.resolverEnabled === true
      && report.ninthLiveContract?.laneToggleEnabled === true
      && report.ninthLiveContract?.perModuleKillSwitchEnabled === true
      && report.ninthLiveContract?.exportDeltaPassed === true
      && report.ninthLiveContract?.fallbackPreflightPassed === true
      && report.ninthLiveContract?.stickyPreflightPassed === true,
    decisionPinned:
      report.decision?.laneState === 'contrib-composer-eight-single-live-one-micro-batch-ninth-live-contract-ready'
      && report.decision?.ninthLiveContractReadyOnly === true
      && report.decision?.nextApprovedStep === 'composer-ninth-live-contract-next-step-lock'
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
