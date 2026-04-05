#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-admission-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const blockedNow = report.blockedNow ?? [];
  const rationale = report.approvedCandidate?.rationale ?? [];

  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    phasePinned: report.phase === 'eighteenth-admission',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DC18A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js'
      && report.approvedCandidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js'
      && report.approvedCandidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js'
      && report.approvedCandidate?.riskClass === 'browser-composer-data-creation-planning-only',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('worktreeSetupRunner.js is now the top-ranked remaining staged composer browser candidate once composerDataCreation.js is frozen into the proven set')
      && rationale.includes('stays in a narrow browser data-creation and serialization shape rather than dropping directly into widget or render work')
      && rationale.includes('source and startup-loader input are byte-for-byte aligned before dedicated runtime')
      && rationale.includes('current canary ranking places worktreeSetupRunner.js ahead of the broader composer browser surface after eleven single-live waves and one micro-batch are frozen'),
    currentStatePinned:
      report.currentState?.laneState === 'contrib-composer-lane-ten-single-live-one-micro-batch-proven'
      && report.currentState?.laneContinuationAllowed === true
      && report.currentState?.lanePromotionEligible === true
      && report.currentState?.stableRuntimeStillGreen === true
      && report.currentState?.deepZoneNextExecutableStep === 'composer-eighteenth-candidate-admission-plan'
      && report.currentState?.deepZoneCurrentCandidate === 'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js'
      && report.currentState?.qualityAcceptRecorded === true,
    blockedNowScoped:
      blockedNow.includes('composer eighteenth live execution')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.approvedWaveId === 'DC18A'
      && report.decision?.nextApprovedAction === 'composer-eighteenth-dedicated-no-op-runtime-plan'
      && report.decision?.runtimeGatePlannedInThisPhase === false
      && report.decision?.livePlannedInThisPhase === false
      && report.decision?.reviewChangesLaneFrozen === true
      && report.decision?.broadBrowserStillHeld === true
      && report.decision?.crossLaneExpansionBlocked === true
      && report.decision?.renameOnMainline === false,
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
