#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-third-admission-verify.json');

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
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'third-candidate-admission',
    baselinePinned:
      report.baseline?.laneState === 'two-single-live-proven-still-no-batch'
      && report.baseline?.nextApprovedAction === 'browser-third-candidate-admission-plan'
      && report.baseline?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.baseline?.firstSingleLiveWaveId === 'DBR1L'
      && report.baseline?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.baseline?.secondSingleLiveWaveId === 'DBR2L',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DBR3A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.approvedCandidate?.riskClass === 'moderate-util-planning-only',
    runnerUpsPinned:
      runnerUpIds.length === 2
      && runnerUpIds[0] === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && runnerUpIds[1] === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
    blockedGroupsPinned:
      Array.isArray(report.blockedGroups?.alreadyProvenBrowserSingles)
      && report.blockedGroups.alreadyProvenBrowserSingles.includes('out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js')
      && report.blockedGroups.alreadyProvenBrowserSingles.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js')
      && Array.isArray(report.blockedGroups?.alreadyProvenReviewChangesUtil)
      && report.blockedGroups.alreadyProvenReviewChangesUtil.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js')
      && Array.isArray(report.blockedGroups?.managerStateful)
      && report.blockedGroups.managerStateful.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js')
      && report.blockedGroups.managerStateful.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js')
      && Array.isArray(report.blockedGroups?.uiSurface)
      && report.blockedGroups.uiSurface.includes('out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js'),
    admissionOnly:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'browser-third-dedicated-no-op-runtime-plan'
      && report.decision?.runtimeGatePlannedInThisPhase === false
      && report.decision?.livePlannedInThisPhase === false,
    comparisonReasonsPresent:
      typeof report.comparisons?.notGeneratedFilesConstants === 'string'
      && typeof report.comparisons?.notCiMessageUtils === 'string'
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
