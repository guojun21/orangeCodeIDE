#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const LANE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-freeze-review.json');
const MANAGER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-manager-batch-module-resolution-live-gate.json');
const RESOURCE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-resource-module-resolution-live-gate.json');
const BROWSER_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-admission.json');
const BROWSER_ADMISSION_VERIFY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-admission-verify.json');
const BROWSER_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-module-resolution-runtime-gate.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-lane-policy.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function summarizeGate(filePath, label) {
  const report = readJson(filePath);
  return {
    label,
    reportPath: normalizePath(path.relative(ROOT, filePath)),
    passed: report.passed === true,
    expectedWaveId: report.expectedWaveId ?? null,
    enabledCount: Array.isArray(report.enabledIds) ? report.enabledIds.length : null,
    overlayHitCount:
      report.runtimeState?.resolution?.diagnostics?.counters?.overlayHitCount
      ?? report.runtimeState?.resolution?.diagnostics?.overlayHitCount
      ?? null,
    originalPassCount:
      report.runtimeState?.resolution?.diagnostics?.counters?.originalPassCount
      ?? report.runtimeState?.resolution?.diagnostics?.originalPassCount
      ?? null,
  };
}

function main() {
  const laneFreezeReview = readJson(LANE_FREEZE_REVIEW_PATH);
  const managerBatchLive = readJson(MANAGER_BATCH_LIVE_GATE_PATH);
  const resourceLive = readJson(RESOURCE_LIVE_GATE_PATH);
  const browserAdmission = readJson(BROWSER_ADMISSION_PATH);
  const browserAdmissionVerify = readJson(BROWSER_ADMISSION_VERIFY_PATH);
  const browserRuntimeGate = readJson(BROWSER_RUNTIME_GATE_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'measured-no-op-hold',
    sources: {
      laneFreezeReview: normalizePath(path.relative(ROOT, LANE_FREEZE_REVIEW_PATH)),
      managerBatchLiveGate: normalizePath(path.relative(ROOT, MANAGER_BATCH_LIVE_GATE_PATH)),
      resourceLiveGate: normalizePath(path.relative(ROOT, RESOURCE_LIVE_GATE_PATH)),
      browserAdmission: normalizePath(path.relative(ROOT, BROWSER_ADMISSION_PATH)),
      browserAdmissionVerify: normalizePath(path.relative(ROOT, BROWSER_ADMISSION_VERIFY_PATH)),
      browserRuntimeGate: normalizePath(path.relative(ROOT, BROWSER_RUNTIME_GATE_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      gitHead: accept.gitHead ?? null,
      latestAcceptAt: accept.generatedAt ?? null,
      reviewChangesLaneState: laneFreezeReview.decision?.laneState ?? null,
      reviewChangesBrowserHold: laneFreezeReview.decision?.browserHold === true,
      qualityStability: quality.stability ?? {},
    },
    inheritedPrereqs: {
      managerIncludingBatchLive: summarizeGate(MANAGER_BATCH_LIVE_GATE_PATH, 'DRMB1L-reviewChanges-manager-batch'),
      secondStatefulCandidateLive: summarizeGate(RESOURCE_LIVE_GATE_PATH, 'DRR1L-reviewChanges-resource'),
    },
    browserMeasuredNoOp: {
      admissionReady: browserAdmission.decision?.admissionReady === true,
      admissionVerifyPassed: browserAdmissionVerify.passed === true,
      runtimeGate: summarizeGate(BROWSER_RUNTIME_GATE_PATH, 'DBR1-browser-dedicated-no-op'),
      moduleId: browserAdmission.candidate?.moduleId ?? null,
      rationale: browserAdmission.candidate?.rationale ?? null,
    },
    decision: {
      liveStillBlocked: true,
      currentState: 'measured-no-op-only',
      nextApprovedAction: 'browser-single-live-admission-plan',
      nextCandidateModuleId: browserAdmission.candidate?.moduleId ?? null,
      renameOnMainline: false,
    },
    blockReasons: [
      'no browser single-live gate exists yet',
      'no browser live fallback coverage exists yet',
      'no browser export-signature delta gate exists yet',
      'no browser lane freeze review exists after live proof',
      'browser component/widget subtree remains untouched',
    ],
    allowedNow: [
      'browser single-live admission planning for DBR1 only',
      'browser export-signature and fallback diagnostics for DBR1 only',
      'status documentation updates',
    ],
    blockedNow: [
      'browser live canary execution',
      'browser multi-module batch live',
      'browser component or widget modules',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
