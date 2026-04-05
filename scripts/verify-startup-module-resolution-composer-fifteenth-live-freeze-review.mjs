#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifteenth-live-freeze-review-verify.json');

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
    phasePinned: report.phase === 'fifteenth-live-freeze-review',
    baselinePinned: typeof report.baseline?.latestAcceptAt === 'string' && report.baseline?.stableRuntimeStillGreen === true,
    fifteenthNoOpPinned:
      report.fifteenthNoOp?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js'
      && report.fifteenthNoOp?.waveId === 'DC15'
      && report.fifteenthNoOp?.mode === 'no-op-observable',
    fifteenthLivePlanPinned:
      report.fifteenthLivePlan?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js'
      && report.fifteenthLivePlan?.waveId === 'DC15L'
      && report.fifteenthLivePlan?.liveShape === 'single-module-live',
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'contrib-composer-eleven-single-live-one-micro-batch-fifteenth-live-admission-planned'
      && report.decision?.nextApprovedStep === 'composer-fifteenth-live-next-step-lock'
      && report.decision?.fifteenthLiveAdmissionPlannedOnly === true
      && report.decision?.widerBatchExpansionStillBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowPinned:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('composer fifteenth runner-up switch')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('rename-driven work'),
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
