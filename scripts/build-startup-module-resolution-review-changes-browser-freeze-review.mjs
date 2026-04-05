#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const BROWSER_LANE_POLICY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-lane-policy.json');
const LIVE_ADMISSION_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-live-admission-plan.json');
const LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-live-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const lanePolicy = readJson(BROWSER_LANE_POLICY_PATH);
  const admissionPlan = readJson(LIVE_ADMISSION_PLAN_PATH);
  const liveGate = readJson(LIVE_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'single-live-freeze-review',
    sources: {
      lanePolicy: normalizePath(path.relative(ROOT, BROWSER_LANE_POLICY_PATH)),
      admissionPlan: normalizePath(path.relative(ROOT, LIVE_ADMISSION_PLAN_PATH)),
      liveGate: normalizePath(path.relative(ROOT, LIVE_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      moduleId: admissionPlan.candidate?.moduleId ?? null,
      waveId: liveGate.expectedWaveId ?? null,
      overlayProbeIds: liveGate.overlayProbeIds ?? [],
      factoryHitIds: liveGate.factoryHitIds ?? [],
      diagnostics: liveGate.runtimeState?.resolution?.diagnostics?.counters ?? null,
    },
    decision: {
      laneFrozen: true,
      laneState: 'single-live-proven-still-no-batch',
      nextApprovedStep: 'browser-next-step-lock',
      multiModuleBatchStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
