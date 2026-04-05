#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-live-execution-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'fourth-live-execution-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-batch-live-proven'
      && report.baseline?.batchWaveId === 'DBRB1'
      && report.baseline?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.baseline?.fourthSingleLiveWaveId === 'DBR4L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-second-batch-admission-plan'
      && report.decision?.secondBatchAdmissionMayStartOnlyAfterFourthFreeze === true
      && report.decision?.browserSecondBatchLiveBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.browserFifthCandidateAdmissionBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser fourth single-live freeze artifacts')
      && allowedNow.includes('browser second-batch admission planning only'),
    blockedNowScoped:
      blockedNow.includes('browser second batch live')
      && blockedNow.includes('browser component or widget admission')
      && blockedNow.includes('browser template-surface admission')
      && blockedNow.includes('browser fifth candidate admission before second-batch planning')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not execute a second browser batch before a dedicated second-batch admission plan and freeze are completed')
      && stopConditions.includes('do not switch to ciMessageUtils.js before second-batch planning outcome is frozen'),
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
