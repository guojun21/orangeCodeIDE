#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SECOND_RUNTIME_NEXT_STEP_LOCK_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-runtime-next-step-lock.json');
const SECOND_RUNTIME_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-runtime-freeze-review.json');
const SECOND_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-second-module-resolution-runtime-gate.json');
const SECOND_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-admission.json');
const SPIKE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-live-admission-plan.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const secondRuntimeLock = readJson(SECOND_RUNTIME_NEXT_STEP_LOCK_PATH);
  const secondRuntimeFreeze = readJson(SECOND_RUNTIME_FREEZE_REVIEW_PATH);
  const secondRuntimeGate = readJson(SECOND_RUNTIME_GATE_PATH);
  const secondAdmission = readJson(SECOND_ADMISSION_PATH);
  const spike = readJson(SPIKE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const moduleId = secondAdmission.approvedCandidate?.moduleId ?? null;
  const sourceFile = secondAdmission.approvedCandidate?.sourceFile ?? null;
  const runtimeInputFile = secondAdmission.approvedCandidate?.runtimeInputFile ?? null;

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'second-live-admission-plan',
    sources: {
      secondRuntimeNextStepLock: normalizePath(path.relative(ROOT, SECOND_RUNTIME_NEXT_STEP_LOCK_PATH)),
      secondRuntimeFreezeReview: normalizePath(path.relative(ROOT, SECOND_RUNTIME_FREEZE_REVIEW_PATH)),
      secondRuntimeGate: normalizePath(path.relative(ROOT, SECOND_RUNTIME_GATE_PATH)),
      secondAdmission: normalizePath(path.relative(ROOT, SECOND_ADMISSION_PATH)),
      spike: normalizePath(path.relative(ROOT, SPIKE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    candidate: {
      waveId: 'DBR2L',
      moduleId,
      sourceFile,
      runtimeInputFile,
      rationale: [
        'util-level browser candidate with no direct DOM/template/component surface',
        'no manager/stateful resource-holder signals in the recovered slice',
        'source and startup-loader input currently share the same minimal body shape',
        'more suitable for a second single-live than the remaining browser util candidates',
      ],
      liveShape: 'single-module-live',
    },
    prerequisites: {
      secondNoOpPassed: secondRuntimeGate.passed === true,
      secondNoOpWaveId: secondRuntimeGate.expectedWaveId ?? null,
      firstSingleLiveStillProven:
        secondRuntimeFreeze.proven?.moduleId === 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js'
        && secondRuntimeFreeze.proven?.waveId === 'DBR1L'
        && secondRuntimeFreeze.proven?.diagnostics?.overlayHitCount === 1,
      stableSpikeStillGreen: spike.passed === true,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
      latestAcceptAt: accept.generatedAt ?? null,
      browserBatchStillBlocked: secondRuntimeLock.decision?.browserMultiModuleBatchBlocked === true,
    },
    requiredBeforeLive: [
      'build DBR2L live contract',
      'run browser-second export-delta gate',
      'run browser-second fallback/sticky preflight check',
      'apply wrapper patch',
      'run live gate',
      'run smoke',
      'run workbench-desktop-main spike',
      'run accept',
      'run quality-report',
    ],
    stopConditions: [
      'DBR2L single-live gate does not record overlay-hit',
      'smoke fails or regresses before workbench ready',
      'spike fails or hangs after DBR2L enablement',
      'accept fails with browser-adjacent runtime regression',
      'quality-report no longer shows stable rollout gates as green',
    ],
    rollbackPolicy: {
      perModuleKillSwitchOn: [
        moduleId,
      ],
      laneFreezeOn: [
        'browser second single-live failure with ambiguous cause',
        'smoke or spike regression after DBR2L enablement',
        'accept regression attributable to browser lane',
      ],
    },
    decision: {
      admissionPlanReady: true,
      executionStillPending: true,
      nextApprovedAction: 'browser-second-live-contract',
      nextApprovedWaveId: 'DBR2L',
      multiModuleBatchStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
