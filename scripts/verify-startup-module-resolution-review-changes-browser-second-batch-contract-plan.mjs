#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-batch-contract-plan-verify.json');

const EXPECTED_MODULES = [
  'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js',
  'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js',
];

const EXPECTED_WAVES = ['DBR1L', 'DBR2L', 'DBR3L', 'DBR4L'];
const EXPECTED_PREFLIGHT_CHAIN = ['export-delta', 'fallback', 'sticky-disable'];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function arrayEquals(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && a.length === b.length
    && a.every((item, index) => item === b[index]);
}

function main() {
  const report = readJson(INPUT_PATH);
  const plan = report.batchContractPlan ?? {};
  const runnerUpLock = report.runnerUpLock ?? {};
  const scopeBoundary = report.scopeBoundary ?? {};
  const minimumWin = report.minimumWin ?? {};
  const followUpPriority = report.followUpPriority ?? {};
  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'browser-second-batch-contract-plan',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-batch-live-proven-second-batch-admission-planned'
      && report.baseline?.batchWaveId === 'DBRB2A'
      && arrayEquals(report.baseline?.approvedBatch, EXPECTED_MODULES),
    contractPlanPinned:
      plan.batchWaveId === 'DBRB2A'
      && arrayEquals(plan.selectedModules, EXPECTED_MODULES)
      && arrayEquals(plan.selectedWaves, EXPECTED_WAVES)
      && plan.output === 'mapped/contrib-review-changes-browser-second-batch-module-resolution-live-contract.json'
      && plan.runtimeCopy === 'mapped/contrib-review-changes-browser-second-batch-module-resolution-live-contract.runtime.json'
      && plan.mode === 'live-canary'
      && plan.enableResolver === true
      && plan.enableDedicatedLane === true
      && plan.planningOnly === true,
    preflightChainPinned: arrayEquals(report.plannedPreflightChain, EXPECTED_PREFLIGHT_CHAIN),
    runnerUpLockPinned:
      runnerUpLock.locked === true
      && Array.isArray(runnerUpLock.blockedRunnerUps)
      && arrayEquals(runnerUpLock.blockedRunnerUps, ['out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js']),
    minimumWinPinned:
      minimumWin.definition === 'browser second-batch contract plan verify green and nextApprovedAction uniquely locked to browser-second-batch-contract-preflight'
      && Array.isArray(minimumWin.mustVerify)
      && minimumWin.mustVerify.includes('startup-module-resolution-review-changes-browser-second-batch-contract-plan-verify.json'),
    scopeBoundaryPinned:
      Array.isArray(scopeBoundary.allowOnly)
      && scopeBoundary.allowOnly.includes('browser second-batch contract plan artifacts')
      && Array.isArray(scopeBoundary.mustNotTouch)
      && scopeBoundary.mustNotTouch.includes('browser second-batch contract file generation')
      && scopeBoundary.mustNotTouch.includes('browser second-batch wrapper patch')
      && scopeBoundary.mustNotTouch.includes('browser second-batch live gate')
      && scopeBoundary.mustNotTouch.includes('browser second-batch execution')
      && scopeBoundary.mustNotTouch.includes('browser fifth candidate admission')
      && scopeBoundary.mustNotTouch.includes('component/widget/template')
      && scopeBoundary.mustNotTouch.includes('cross-lane expansion'),
    followUpPinned:
      followUpPriority.next === 'browser-second-batch-contract-preflight'
      && followUpPriority.afterThat === 'browser-second-batch-contract-freeze-review',
    decisionPinned:
      report.decision?.contractPlanReady === true
      && report.decision?.nextApprovedAction === 'browser-second-batch-contract-preflight'
      && report.decision?.browserSecondBatchLiveStillBlocked === true
      && report.decision?.browserComponentWidgetTemplateStillBlocked === true
      && report.decision?.browserFifthCandidateAdmissionStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    admissionOnly:
      !('wrapperPatch' in plan)
      && !('liveGate' in plan)
      && !('execution' in report),
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
