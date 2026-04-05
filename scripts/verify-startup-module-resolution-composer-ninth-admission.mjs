#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-ninth-admission-verify.json');

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
    phasePinned: report.phase === 'ninth-admission',
    candidatePinned:
      report.approvedCandidate?.waveId === 'DC9A'
      && report.approvedCandidate?.moduleId === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.approvedCandidate?.sourceFile === 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.approvedCandidate?.runtimeInputFile === 'recovered/startup-loader/input/out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'
      && report.approvedCandidate?.riskClass === 'capability-serializer-planning-only',
    rationalePinned:
      Array.isArray(rationale)
      && rationale.includes('tiny composer browser capability serializer surface is now the next smallest remaining staged composer candidate after eight single-live waves')
      && rationale.includes('stays below widget or render surface and remains planning-only at admission time even though it sits inside browser capabilities')
      && rationale.includes('source and startup-loader input already exist and remain byte-for-byte auditable before dedicated runtime')
      && rationale.includes('deep-zone canary ranking now places serializeToolformerBubbleData.js first once browserViewStore.js is frozen into the proven set'),
    currentStatePinned:
      report.currentState?.laneState === 'contrib-composer-lane-eight-single-live-one-micro-batch-proven'
      && report.currentState?.laneContinuationAllowed === true
      && report.currentState?.lanePromotionEligible === true
      && report.currentState?.stableRuntimeStillGreen === true
      && report.currentState?.deepZoneNextExecutableStep === 'composer-ninth-candidate-admission-plan'
      && report.currentState?.deepZoneCurrentCandidate === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js',
    blockedNowScoped:
      blockedNow.includes('composer ninth live execution')
      && blockedNow.includes('composer wider batch expansion')
      && blockedNow.includes('new reviewChanges browser surface expansion')
      && blockedNow.includes('cross-lane expansion'),
    decisionPinned:
      report.decision?.admissionReady === true
      && report.decision?.executionStillPending === true
      && report.decision?.approvedWaveId === 'DC9A'
      && report.decision?.nextApprovedAction === 'composer-ninth-dedicated-no-op-runtime-plan'
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
