#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-admission-verify.json');

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
    phasePinned: report.phase === 'fifth-admission',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DC5A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.approvedCandidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.approvedCandidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'
      && report.approvedCandidate?.riskClass === 'small-browser-service-interface-planning-only',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('small browser-side service interface module that stays narrower than blob-store and browserViewStore style holders')
      && rationale.includes('still non-component and non-renderer-facing at admission time')
      && rationale.includes('source and startup-loader input already exist and remain auditable before dedicated runtime')
      && rationale.includes('fits the composer lane rule of exhausting low-width browser-side interface and utility surfaces before broader holders'),
    currentStatePinned:
      report.currentState?.laneState === 'contrib-composer-lane-four-single-live-one-micro-batch-proven'
      && report.currentState?.laneContinuationAllowed === true
      && report.currentState?.lanePromotionEligible === true
      && report.currentState?.stableRuntimeStillGreen === true
      && report.currentState?.deepZoneNextExecutableStep === 'composer-fifth-candidate-admission-plan'
      && report.currentState?.deepZoneCurrentCandidate === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js',
    blockedNowScoped:
      blockedNow.includes('composer fifth live execution')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.approvedWaveId === 'DC5A'
      && report.decision?.nextApprovedAction === 'composer-fifth-dedicated-no-op-runtime-plan'
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
