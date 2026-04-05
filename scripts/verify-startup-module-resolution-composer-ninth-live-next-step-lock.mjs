#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-live-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'ninth-live-next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'contrib-composer-eight-single-live-one-micro-batch-ninth-live-admission-planned'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.baseline?.firstSingleLiveWaveId === 'DC1'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.baseline?.secondSingleLiveWaveId === 'DC2'
      && report.baseline?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.baseline?.thirdSingleLiveWaveId === 'DC3L'
      && report.baseline?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && report.baseline?.fourthSingleLiveWaveId === 'DC4L'
      && report.baseline?.fifthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.baseline?.fifthSingleLiveWaveId === 'DC5L'
      && report.baseline?.sixthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js'
      && report.baseline?.sixthSingleLiveWaveId === 'DC6L'
      && report.baseline?.seventhSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.baseline?.seventhSingleLiveWaveId === 'DC7L'
      && report.baseline?.eighthSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js'
      && report.baseline?.eighthSingleLiveWaveId === 'DC8L'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.ninthNoOpModuleId === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.baseline?.ninthNoOpWaveId === 'DC9'
      && report.baseline?.ninthLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.baseline?.ninthLiveWaveId === 'DC9L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'composer-ninth-live-contract'
      && report.decision?.approvedCandidateOnly === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.decision?.widerBatchExpansionBlocked === true
      && report.decision?.composerNinthRunnerUpSwitchBlocked === true
      && report.decision?.reviewChangesLaneStillFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('composer ninth live admission artifacts')
      && allowedNow.includes('composer ninth live contract planning only'),
    blockedNowScoped:
      blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('composer ninth runner-up switch')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('composer ninth live execution before contract'),
    stopConditionsPinned:
      stopConditions.includes('do not discuss wider composer batch until DC9L live is executed and frozen')
      && stopConditions.includes('do not switch to composer runner-ups before DC9L live outcome is frozen'),
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
  console.log(normalizePath(path.relative(ROOT, INPUT_PATH)));
  console.log(`Passed: ${output.passed}`);
  if (!output.passed) {
    process.exitCode = 1;
  }
}

main();
