#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-runtime-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fifth-runtime-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.proven?.fourthSingleLiveWaveId === 'DBR4L'
      && report.proven?.firstBatchWaveId === 'DBRB1'
      && report.proven?.secondBatchWaveId === 'DBRB2',
    fifthNoOpPinned:
      report.fifthNoOp?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.fifthNoOp?.waveId === 'DBR5'
      && report.fifthNoOp?.mode === 'no-op-observable'
      && report.fifthNoOp?.canaryCount === 1
      && report.fifthNoOp?.result === 'original-pass'
      && report.fifthNoOp?.fallbackReason === 'disabled-global'
      && report.fifthNoOp?.originalPassCount === 1
      && report.fifthNoOp?.overlayHitCount === 0
      && report.fifthNoOp?.stickyDisabledCount === 0,
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven-fifth-no-op-proven'
      && report.decision?.nextApprovedStep === 'browser-fifth-runtime-next-step-lock'
      && report.decision?.fifthNoOpProvenOnly === true
      && report.decision?.fifthLiveStillBlocked === true
      && report.decision?.browserThirdBatchScopeExpansionStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('browser third batch scope expansion')
      && report.blockedNow.includes('browser component or widget live')
      && report.blockedNow.includes('browser template-surface live')
      && report.blockedNow.includes('browser fifth live execution without admission'),
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
