#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-seventh-admission-verify.json');

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
    phasePinned: report.phase === 'seventh-admission',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DC7A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.approvedCandidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.approvedCandidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'
      && report.approvedCandidate?.riskClass === 'stateful-browser-blob-store-holder-planning-only',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('stateful browser-side blob-store holder is now the next smallest remaining composer browser store surface after six single-live waves')
      && rationale.includes('still non-component and non-renderer-facing at admission time, but broader than utility and interface surfaces so this phase stays planning-only')
      && rationale.includes('source and startup-loader input already exist and remain auditable before dedicated runtime')
      && rationale.includes('composer lane has exhausted the lower-width utility and interface queue, so continuation now legitimately steps into blob-store holder planning'),
    currentStatePinned:
      report.currentState?.laneState === 'contrib-composer-lane-six-single-live-one-micro-batch-proven'
      && report.currentState?.laneContinuationAllowed === true
      && report.currentState?.lanePromotionEligible === true
      && report.currentState?.stableRuntimeStillGreen === true
      && report.currentState?.deepZoneNextExecutableStep === 'composer-seventh-candidate-admission-plan'
      && report.currentState?.deepZoneCurrentCandidate === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js',
    blockedNowScoped:
      blockedNow.includes('composer seventh live execution')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.approvedWaveId === 'DC7A'
      && report.decision?.nextApprovedAction === 'composer-seventh-dedicated-no-op-runtime-plan'
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
