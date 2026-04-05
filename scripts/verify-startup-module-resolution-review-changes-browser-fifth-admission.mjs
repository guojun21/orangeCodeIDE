#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fifth-admission-verify.json');

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
    phasePinned: report.phase === 'fifth-candidate-admission',
    baselinePinned:
      report.baseline?.laneState === 'four-single-live-proven-first-and-second-batch-live-proven'
      && report.baseline?.nextApprovedAction === 'browser-fifth-candidate-admission-plan'
      && report.baseline?.firstBatchWaveId === 'DBRB1'
      && report.baseline?.secondBatchWaveId === 'DBRB2'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.baseline?.firstSingleLiveWaveId === 'DBR1L'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.baseline?.secondSingleLiveWaveId === 'DBR2L'
      && report.baseline?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.baseline?.thirdSingleLiveWaveId === 'DBR3L'
      && report.baseline?.fourthSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.baseline?.fourthSingleLiveWaveId === 'DBR4L',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DBR5A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js'
      && report.approvedCandidate?.riskClass === 'initializer-heavy-util-planning-only',
    runnerUpsPinned: Array.isArray(report.runnerUps) && report.runnerUps.length === 0,
    blockedGroupsPinned:
      Array.isArray(report.blockedGroups?.alreadyProvenBrowserSingles)
      && report.blockedGroups.alreadyProvenBrowserSingles.length === 4
      && report.blockedGroups.alreadyProvenBrowserSingles.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js')
      && Array.isArray(report.blockedGroups?.alreadyProvenBrowserBatches)
      && report.blockedGroups.alreadyProvenBrowserBatches.length === 4
      && report.blockedGroups.alreadyProvenBrowserBatches.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js')
      && Array.isArray(report.blockedGroups?.managerStateful)
      && report.blockedGroups.managerStateful.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js')
      && report.blockedGroups.managerStateful.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js')
      && Array.isArray(report.blockedGroups?.uiSurface)
      && report.blockedGroups.uiSurface.includes('out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js'),
    admissionOnly:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'browser-fifth-dedicated-no-op-runtime-plan'
      && report.decision?.runtimeGatePlannedInThisPhase === false
      && report.decision?.livePlannedInThisPhase === false,
    comparisonReasonsPresent:
      typeof report.comparisons?.noRunnerUpLeft === 'string'
      && typeof report.comparisons?.notAlreadyBatchProven === 'string'
      && typeof report.comparisons?.notUiOrStateful === 'string',
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
