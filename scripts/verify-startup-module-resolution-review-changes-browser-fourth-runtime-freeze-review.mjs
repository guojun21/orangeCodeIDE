#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-freeze-review-verify.json');

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
    phasePinned: report.phase === 'fourth-runtime-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.batchWaveId === 'DBRB1',
    fourthNoOpPinned:
      report.fourthNoOp?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.fourthNoOp?.waveId === 'DBR4'
      && report.fourthNoOp?.mode === 'no-op-observable'
      && report.fourthNoOp?.canaryCount === 1
      && report.fourthNoOp?.result === 'original-pass'
      && report.fourthNoOp?.fallbackReason === 'disabled-global'
      && report.fourthNoOp?.originalPassCount === 1
      && report.fourthNoOp?.overlayHitCount === 0
      && report.fourthNoOp?.stickyDisabledCount === 0,
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'three-single-live-proven-first-batch-live-proven-fourth-no-op-proven'
      && report.decision?.nextApprovedStep === 'browser-fourth-runtime-next-step-lock'
      && report.decision?.fourthNoOpProvenOnly === true
      && report.decision?.fourthLiveStillBlocked === true
      && report.decision?.browserBatchScopeExpansionStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('browser batch scope expansion')
      && report.blockedNow.includes('browser second batch live')
      && report.blockedNow.includes('browser component or widget live')
      && report.blockedNow.includes('browser template-surface live')
      && report.blockedNow.includes('browser fourth live execution without admission'),
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
