#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-execution-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-live-execution-freeze-review-verify.json');

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
    phasePinned: report.phase === 'composer-tenth-live-execution-freeze-review',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-nine-single-live-one-micro-batch-tenth-live-contract-ready'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstMicroBatchWaveId === 'DCB1'
      && report.proven?.tenthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.proven?.tenthSingleLiveWaveId === 'DC10L'
      && Array.isArray(report.proven?.enabledIds)
      && report.proven.enabledIds.length === 1
      && report.proven.enabledIds[0] === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && Array.isArray(report.proven?.overlayProbeIds)
      && report.proven.overlayProbeIds.includes('out-build/vs/workbench/contrib/composer/browser/worktreeGate.js')
      && Array.isArray(report.proven?.factoryHitIds)
      && report.proven.factoryHitIds.includes('out-build/vs/workbench/contrib/composer/browser/worktreeGate.js')
      && report.proven?.diagnostics?.overlayHitCount === 1
      && report.proven?.diagnostics?.stickyDisabledCount === 0,
    decisionPinned:
      report.decision?.laneState === 'contrib-composer-ten-single-live-one-micro-batch-proven'
      && report.decision?.nextApprovedStep === 'composer-tenth-live-execution-next-step-lock'
      && report.decision?.widerBatchDiscussionStillBlocked === true
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
