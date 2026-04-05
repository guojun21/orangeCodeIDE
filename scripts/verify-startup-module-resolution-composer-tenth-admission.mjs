#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-tenth-admission-verify.json');

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
    phasePinned: report.phase === 'tenth-admission',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DC10A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.approvedCandidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.approvedCandidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'
      && report.approvedCandidate?.riskClass === 'browser-worktree-gate-planning-only',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('worktreeGate.js is now the next smallest remaining staged composer browser candidate after nine single-live waves')
      && rationale.includes('stays at the browser gate and lifecycle boundary without dropping into widget or render implementation at admission time')
      && rationale.includes('source and startup-loader input already exist and remain byte-for-byte auditable before dedicated runtime')
      && rationale.includes('deep-zone canary ranking now places worktreeGate.js first once serializeToolformerBubbleData.js is frozen into the proven set'),
    currentStatePinned:
      report.currentState?.laneState === 'contrib-composer-lane-nine-single-live-one-micro-batch-proven'
      && report.currentState?.laneContinuationAllowed === true
      && report.currentState?.lanePromotionEligible === true
      && report.currentState?.stableRuntimeStillGreen === true
      && report.currentState?.deepZoneNextExecutableStep === 'composer-tenth-candidate-admission-plan'
      && report.currentState?.deepZoneCurrentCandidate === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js',
    blockedNowScoped:
      blockedNow.includes('composer tenth live execution')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.approvedWaveId === 'DC10A'
      && report.decision?.nextApprovedAction === 'composer-tenth-dedicated-no-op-runtime-plan'
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
