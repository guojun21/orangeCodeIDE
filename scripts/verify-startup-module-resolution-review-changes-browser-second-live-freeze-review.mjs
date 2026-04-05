#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];
  const requiredBeforeLive = report.secondLivePlan?.requiredBeforeLive ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'second-live-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.waveId === 'DBR1L'
      && report.proven?.diagnostics?.overlayHitCount === 1,
    secondNoOpPinned:
      report.secondNoOp?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.secondNoOp?.waveId === 'DBR2'
      && report.secondNoOp?.mode === 'no-op-observable'
      && report.secondNoOp?.result === 'original-pass'
      && report.secondNoOp?.fallbackReason === 'disabled-global',
    secondLivePlanPinned:
      report.secondLivePlan?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.secondLivePlan?.waveId === 'DBR2L'
      && report.secondLivePlan?.liveShape === 'single-module-live'
      && requiredBeforeLive.includes('build DBR2L live contract'),
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'single-live-proven-second-live-admission-planned-still-no-batch'
      && report.decision?.nextApprovedStep === 'browser-second-live-next-step-lock'
      && report.decision?.secondLiveAdmissionPlannedOnly === true
      && report.decision?.browserMultiModuleBatchStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('browser multi-module batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('browser second runner-up switch')
      && blockedNow.includes('cross-lane expansion'),
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
