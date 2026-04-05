#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-runtime-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-runtime-next-step-lock-verify.json');

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
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'fifth-runtime-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-four-single-live-one-micro-batch-fifth-no-op-proven'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.baseline?.firstSingleLiveWaveId === 'DC1'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.baseline?.secondSingleLiveWaveId === 'DC2'
      && report.baseline?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.baseline?.thirdSingleLiveWaveId === 'DC3L'
      && report.baseline?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && report.baseline?.fourthSingleLiveWaveId === 'DC4L'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.fifthNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.baseline?.fifthNoOpWaveId === 'DC5',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-fifth-live-admission-plan'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.decision?.reviewChangesLaneFrozen === true
      && report.decision?.broadBrowserHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('composer fifth dedicated no-op runtime artifacts')
      && allowedNow.includes('composer fifth live admission planning only'),
    blockedNowScoped:
      blockedNow.includes('composer fifth live execution before admission')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss DC5L execution until DC5 dedicated no-op runtime is frozen and locked')
      && stopConditions.includes('do not reopen reviewChanges or browser lane expansion while composer continuation is still in fifth-candidate transition'),
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
