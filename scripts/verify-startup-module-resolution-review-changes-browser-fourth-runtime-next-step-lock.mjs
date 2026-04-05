#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-runtime-next-step-lock-verify.json');

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

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fourth-runtime-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'three-single-live-proven-first-batch-live-proven-fourth-no-op-proven'
      && report.baseline?.batchWaveId === 'DBRB1'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.baseline?.firstSingleLiveWaveId === 'DBR1L'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.baseline?.secondSingleLiveWaveId === 'DBR2L'
      && report.baseline?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.baseline?.thirdSingleLiveWaveId === 'DBR3L'
      && report.baseline?.fourthNoOpModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.baseline?.fourthNoOpWaveId === 'DBR4',
    decisionPinned:
      report.decision?.nextApprovedAction === 'browser-fourth-live-admission-plan'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.decision?.browserBatchScopeExpansionBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser fourth dedicated no-op runtime artifacts')
      && allowedNow.includes('browser fourth live admission planning only'),
    blockedNowScoped:
      blockedNow.includes('browser batch scope expansion')
      && blockedNow.includes('browser second batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('browser fourth live execution before admission')
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
