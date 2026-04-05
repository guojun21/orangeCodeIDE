#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BROWSER_LANE_POLICY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-lane-policy.json');
const BROWSER_LANE_POLICY_VERIFY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-lane-policy-verify.json');
const BROWSER_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-admission.json');
const BROWSER_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-runtime-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const lanePolicy = readJson(BROWSER_LANE_POLICY_PATH);
  const lanePolicyVerify = readJson(BROWSER_LANE_POLICY_VERIFY_PATH);
  const browserAdmission = readJson(BROWSER_ADMISSION_PATH);
  const browserRuntimeGate = readJson(BROWSER_RUNTIME_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = browserAdmission.candidate?.moduleId ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'single-live-admission-plan',
    sources: {
      browserLanePolicy: normalizePath(path.relative(ROOT, BROWSER_LANE_POLICY_PATH)),
      browserLanePolicyVerify: normalizePath(path.relative(ROOT, BROWSER_LANE_POLICY_VERIFY_PATH)),
      browserAdmission: normalizePath(path.relative(ROOT, BROWSER_ADMISSION_PATH)),
      browserRuntimeGate: normalizePath(path.relative(ROOT, BROWSER_RUNTIME_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DBR1L',
      moduleId,
      sourceFile: browserAdmission.candidate?.sourceFile ?? null,
      runtimeInputFile: browserAdmission.candidate?.runtimeInputFile ?? null,
      rationale: browserAdmission.candidate?.rationale ?? null,
      liveShape: 'single-module-live',
    },
    prerequisites: {
      lanePolicyPassed: lanePolicyVerify.passed === true,
      measuredNoOpPassed: browserRuntimeGate.passed === true,
      measuredNoOpWaveId: browserRuntimeGate.expectedWaveId ?? null,
      managerIncludingBatchProven: lanePolicy.inheritedPrereqs?.managerIncludingBatchLive?.passed === true,
      secondStatefulCandidateProven: lanePolicy.inheritedPrereqs?.secondStatefulCandidateLive?.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
    },
    requiredBeforeLive: [
      'build browser live contract for DBR1L',
      'apply wrapper patch for DBR1L',
      'run browser single-live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DBR1L enablement',
      'accept fails with browser-adjacent runtime regression',
    ],
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'browser single-live failure with ambiguous cause',
        'smoke or spike regression after DBR1L enablement',
        'accept regression attributable to browser lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'browser-single-live-contract',
      nextApprovedWaveId: 'DBR1L',
      multiModuleBatchStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
