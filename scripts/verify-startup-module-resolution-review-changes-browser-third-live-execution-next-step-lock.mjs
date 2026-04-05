#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-execution-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-live-execution-next-step-lock-verify.json');

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

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'third-live-execution-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'three-single-live-proven-still-no-batch'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.baseline?.firstSingleLiveWaveId === 'DBR1L'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.baseline?.secondSingleLiveWaveId === 'DBR2L'
      && report.baseline?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.baseline?.thirdSingleLiveWaveId === 'DBR3L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-batch-admission-plan'
      && report.decision?.browserBatchAdmissionMayStartOnlyAfterThirdFreeze === true
      && report.decision?.browserMultiModuleBatchLiveBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.browserFourthCandidateAdmissionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser third single-live freeze artifacts')
      && allowedNow.includes('browser batch admission planning only'),
    blockedNowScoped:
      blockedNow.includes('browser multi-module batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('browser fourth candidate admission before browser batch planning')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not execute browser batch before a dedicated browser batch admission plan and freeze are completed')
      && stopConditions.includes('do not switch to generatedFilesConstants.js or ciMessageUtils.js before browser batch planning outcome is frozen'),
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
