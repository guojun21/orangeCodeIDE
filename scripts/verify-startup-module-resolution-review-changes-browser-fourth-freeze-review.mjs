#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-fourth-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'fourth-candidate-freeze-review',
    baselinePinned:
      typeof report.baseline?.latestAcceptAt === 'string'
      && report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.firstSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.firstSingleLiveWaveId === 'DBR1L'
      && report.proven?.secondSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.proven?.secondSingleLiveWaveId === 'DBR2L'
      && report.proven?.thirdSingleLiveModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/diffMentionUtils.js'
      && report.proven?.thirdSingleLiveWaveId === 'DBR3L'
      && report.proven?.batchWaveId === 'DBRB1',
    plannedCandidatePinned:
      report.plannedCandidate?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js'
      && report.plannedCandidate?.waveId === 'DBR4A'
      && report.plannedCandidate?.riskClass === 'large-constants-util-planning-only',
    decisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'three-single-live-proven-first-batch-live-proven-fourth-candidate-planned'
      && report.decision?.nextApprovedStep === 'browser-fourth-next-step-lock'
      && report.decision?.fourthCandidatePlannedOnly === true
      && report.decision?.browserBatchScopeExpansionStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      blockedNow.includes('browser batch scope expansion')
      && blockedNow.includes('browser second batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
      && blockedNow.includes('cross-lane expansion')
      && blockedNow.includes('browser fourth candidate live execution'),
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
