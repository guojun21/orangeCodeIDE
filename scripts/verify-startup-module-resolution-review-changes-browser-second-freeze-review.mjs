#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-freeze-review-verify.json');

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
    phasePinned: report.phase === 'second-candidate-freeze-review',
    stableRuntimeStillGreen: report.baseline?.stableRuntimeStillGreen === true,
    provenPinned:
      report.proven?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.proven?.waveId === 'DBR1L'
      && report.proven?.diagnostics?.overlayHitCount === 1,
    plannedCandidatePinned:
      report.plannedCandidate?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/utils/discussionUtils.js'
      && report.plannedCandidate?.waveId === 'DBR2A'
      && report.plannedCandidate?.riskClass === 'low-risk-util-planning-only',
    freezeDecisionPinned:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'single-live-proven-next-candidate-planned'
      && report.decision?.nextApprovedStep === 'browser-second-next-step-lock'
      && report.decision?.secondCandidatePlannedOnly === true
      && report.decision?.browserMultiModuleBatchStillBlocked === true
      && report.decision?.componentWidgetTemplateStillBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    blockedNowScoped:
      Array.isArray(report.blockedNow)
      && report.blockedNow.includes('browser multi-module batch live')
      && report.blockedNow.includes('browser component or widget live')
      && report.blockedNow.includes('browser template-surface live'),
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
