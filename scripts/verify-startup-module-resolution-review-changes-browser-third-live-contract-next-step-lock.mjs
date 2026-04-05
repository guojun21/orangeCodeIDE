#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-contract-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-contract-next-step-lock-verify.json');

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
  const minimumWin = report.minimumWin ?? {};
  const batchEligibilityGate = report.batchEligibilityGate ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const followUpPriority = report.followUpPriority ?? {};

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'third-live-contract-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'two-single-live-proven-third-live-contract-ready-still-no-batch'
      && report.baseline?.thirdLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.baseline?.thirdLiveWaveId === 'DBR3L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-third-live-execution'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.decision?.browserMultiModuleBatchBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.browserThirdRunnerUpSwitchBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser third live contract artifacts')
      && allowedNow.includes('browser third live execution only')
      && allowedNow.includes('browser-specific diagnostics refinement'),
    blockedNowScoped:
      blockedNow.includes('browser multi-module batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('browser third runner-up switch')
      && blockedNow.includes('browser third live batch expansion')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss browser batch until DBR3L live is executed and frozen')
      && stopConditions.includes('do not switch to generatedFilesConstants.js or ciMessageUtils.js before DBR3L live outcome is frozen'),
    minimumWinPinned:
      minimumWin.definition === 'DBR3L live contract / export-delta / fallback / sticky-disable / freeze / next-step lock all verify green and nextApprovedAction uniquely locked to browser-third-live-execution'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-third-live-contract-next-step-lock-verify.json'),
    batchEligibilityGatePinned:
      batchEligibilityGate.discussionBlocked === true
      && batchEligibilityGate.currentProofState === 'two-live-plus-one-no-op'
      && Array.isArray(batchEligibilityGate.requiredMilestonesBeforeDiscussion)
      && batchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('DBR3L live execution proven')
      && batchEligibilityGate.requiredMilestonesBeforeDiscussion.includes('post-DBR3L browser lane freeze review'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('DBR3L live contract artifacts')
      && scopeBoundary.allowOnly.includes('browser third live contract next-step lock artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser live execution')
      && scopeBoundary.mustNotTouch.includes('browser batch'),
    followUpPriorityPinned:
      followUpPriority.next === 'browser-third-live-execution'
      && followUpPriority.afterThat === 'browser lane freeze review only after live execution result is frozen',
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
