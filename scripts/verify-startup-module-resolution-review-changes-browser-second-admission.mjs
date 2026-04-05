#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-admission-verify.json');

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
    phasePinned: report.phase === 'second-candidate-admission',
    baselinePinned:
      report.baseline?.laneState === 'single-live-proven-still-no-batch'
      && report.baseline?.nextApprovedAction === 'second-browser-hook-admission-plan'
      && report.baseline?.provenModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.baseline?.provenWaveId === 'DBR1L',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DBR2A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.approvedCandidate?.riskClass === 'low-risk-util-planning-only',
    runnerUpsPinned:
      runnerUpIds.length === 3
      && runnerUpIds[0] === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && runnerUpIds[1] === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && runnerUpIds[2] === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciMessageUtils.js',
    blockedGroupsPinned:
      Array.isArray(report.blockedGroups?.alreadyProven)
      && report.blockedGroups.alreadyProven.includes('out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js')
      && report.blockedGroups.alreadyProven.includes('out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js')
      && Array.isArray(report.blockedGroups?.managerStateful)
      && report.blockedGroups.managerStateful.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js')
      && report.blockedGroups.managerStateful.includes('out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js')
      && Array.isArray(report.blockedGroups?.uiSurface)
      && report.blockedGroups.uiSurface.includes('out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js'),
    admissionOnly:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'browser-second-dedicated-no-op-runtime-plan'
      && report.decision?.runtimeGatePlannedInThisPhase === false
      && report.decision?.livePlannedInThisPhase === false,
    comparisonReasonsPresent:
      typeof report.comparisons?.notDiffMentionUtils === 'string'
      && typeof report.comparisons?.notGeneratedFilesConstants === 'string'
      && typeof report.comparisons?.notCiMessageUtils === 'string',
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
