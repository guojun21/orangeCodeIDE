#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-next-step-lock.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-next-step-lock-verify.json');

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
    phasePinned: report.phase === 'next-step-lock',
    baselinePinned:
      report.baseline?.laneState === 'single-live-proven-still-no-batch'
      && report.baseline?.provenModuleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
      && report.baseline?.provenWaveId === 'DBR1L',
    decisionPinned:
      report.decision?.nextApprovedAction === 'second-browser-hook-admission-plan'
      && report.decision?.secondCandidateMayBeScoutedOnlyAfterFreeze === true
      && report.decision?.browserMultiModuleBatchBlocked === true
      && report.decision?.browserComponentWidgetTemplateBlocked === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
    allowedNowScoped:
      allowedNow.includes('browser single-live freeze artifacts')
      && allowedNow.includes('browser second hook or util admission planning only'),
    blockedNowScoped:
      blockedNow.includes('browser multi-module batch live')
      && blockedNow.includes('browser component or widget live')
      && blockedNow.includes('browser template-surface live')
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
