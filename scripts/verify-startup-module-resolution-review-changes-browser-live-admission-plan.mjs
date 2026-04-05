#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-live-admission-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-live-admission-plan-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const prerequisites = report.prerequisites ?? {};
  const requiredBeforeLive = report.requiredBeforeLive ?? [];
  const stopConditions = report.stopConditions ?? [];
  const moduleId = 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js';

  const checks = {
    lanePinned: report.lane === 'browser',
    phasePinned: report.phase === 'single-live-admission-plan',
    candidatePinned:
      report.candidate?.waveId === 'DBR1L'
      && report.candidate?.moduleId === moduleId
      && report.candidate?.liveShape === 'single-module-live',
    lanePolicyPassed: prerequisites.lanePolicyPassed === true,
    measuredNoOpPassed:
      prerequisites.measuredNoOpPassed === true
      && prerequisites.measuredNoOpWaveId === 'DBR1',
    inheritedManagerBatchProven: prerequisites.managerIncludingBatchProven === true,
    inheritedStatefulProven: prerequisites.secondStatefulCandidateProven === true,
    stableRuntimeStillGreen: prerequisites.stableRuntimeStillGreen === true,
    requiredBeforeLivePresent:
      requiredBeforeLive.includes('build browser live contract for DBR1L')
      && requiredBeforeLive.includes('apply wrapper patch for DBR1L')
      && requiredBeforeLive.includes('run browser single-live gate')
      && requiredBeforeLive.includes('run accept')
      && requiredBeforeLive.includes('run quality-report'),
    stopConditionsPresent:
      stopConditions.length >= 4
      && stopConditions.includes('single-live gate does not record overlay-hit'),
    nextActionPinned:
      report.decision?.admissionPlanReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.nextApprovedAction === 'browser-single-live-contract'
      && report.decision?.nextApprovedWaveId === 'DBR1L'
      && report.decision?.multiModuleBatchStillBlocked === true,
    rollbackPinned:
      Array.isArray(report.rollbackPolicy?.perModuleKillSwitchOn)
      && report.rollbackPolicy.perModuleKillSwitchOn.length === 1
      && report.rollbackPolicy.perModuleKillSwitchOn[0] === moduleId
      && Array.isArray(report.rollbackPolicy?.laneFreezeOn)
      && report.rollbackPolicy.laneFreezeOn.length >= 3,
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
