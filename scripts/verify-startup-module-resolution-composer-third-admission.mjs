#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-third-admission-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const runnerUpIds = (report.runnerUps ?? []).map((entry) => entry.moduleId);

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'third-candidate-admission',
    baselinePinned:
      report.baseline?.laneStatus === 'active-partially-proven'
      && report.baseline?.nextExecutableLane === 'contrib-composer'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
      && report.baseline?.firstSingleLiveWaveId === 'DC1'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'
      && report.baseline?.secondSingleLiveWaveId === 'DC2'
      && report.baseline?.firstMicroBatchWaveId === 'DCB1'
      && report.baseline?.firstMicroBatchEnabledCount === 2,
    candidatePinned:
      report.approvedCandidate?.waveId === 'DC3A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'
      && report.approvedCandidate?.riskClass === 'tiny-browser-filter-planning-only',
    runnerUpsPinned:
      runnerUpIds.length === 3
      && runnerUpIds[0] === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'
      && runnerUpIds[1] === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && runnerUpIds[2] === 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js',
    blockedGroupsPinned:
      Array.isArray(report.blockedGroups?.alreadyProvenComposerSingles)
      && report.blockedGroups.alreadyProvenComposerSingles.includes('out-build/vs/workbench/contrib/composer/common/composerUtils.js')
      && report.blockedGroups.alreadyProvenComposerSingles.includes('out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js')
      && Array.isArray(report.blockedGroups?.statefulOrBroaderHolders)
      && report.blockedGroups.statefulOrBroaderHolders.includes('out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js')
      && Array.isArray(report.blockedGroups?.uiSurfaceOrHooks)
      && report.blockedGroups.uiSurfaceOrHooks.includes('out-build/vs/workbench/contrib/composer/browser/components/DOMTreeView.js'),
    stabilityPinned:
      report.stability?.acceptRecorded === true
      && report.stability?.headlessVerifyPassed === true
      && report.stability?.rolloutGatePassed === true
      && report.stability?.deepZoneAdmissionStillGreen === true,
    admissionOnly:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'composer-third-dedicated-no-op-runtime-plan'
      && report.decision?.runtimeGatePlannedInThisPhase === false
      && report.decision?.livePlannedInThisPhase === false
      && report.decision?.reviewChangesLaneFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    comparisonReasonsPresent:
      typeof report.comparisons?.notComposerFileChangeHandlerTypes === 'string'
      && typeof report.comparisons?.notComposerChatServiceInterface === 'string'
      && typeof report.comparisons?.notDebugLogFileUtils === 'string'
      && typeof report.comparisons?.notAlreadyProven === 'string',
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
