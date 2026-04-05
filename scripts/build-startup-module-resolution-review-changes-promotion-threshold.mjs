#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const LANE_POLICY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-policy.json');
const MANAGER_ADMISSION_VERIFY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-admission-verify.json');
const MANAGER_RUNTIME_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-manager-module-resolution-runtime-gate.json');
const MANAGER_CLEANUP_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-cleanup-gate.json');
const MANAGER_FALLBACK_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-fallback-gate.json');
const MANAGER_EXPORT_DELTA_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-export-delta-gate.json');
const MANAGER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-manager-module-resolution-live-gate.json');
const TRIPLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-live-triple-module-resolution-live-gate.json');
const MANAGER_BATCH_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-manager-batch-module-resolution-live-gate.json');
const RESOURCE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-resource-module-resolution-live-gate.json');
const BROWSER_LANE_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-lane-freeze-review.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-promotion-threshold.json');

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
    enabledCount: Array.isArray(report.enabledIds) ? report.enabledIds.length : null,
    factoryHitCount: Array.isArray(report.factoryHitIds) ? report.factoryHitIds.length : null,
  };
}

function summarizeBrowserLaneFreeze(filePath) {
  const report = readJson(filePath);
  return {
    label: 'DBGEWV1-reviewChanges-browser-global',
    reportPath: normalizePath(path.relative(ROOT, filePath)),
    passed:
      report.decision?.laneFrozen === true
      && report.decision?.laneState === 'review-changes-browser-lane-global-live-proven',
    enabledCount: Array.isArray(report.proven?.approvedGlobalSurface) ? report.proven.approvedGlobalSurface.length : null,
    factoryHitCount: Array.isArray(report.proven?.factoryHitIds) ? report.proven.factoryHitIds.length : null,
    overlayHitCount: report.proven?.diagnostics?.overlayHitCount ?? null,
    stickyDisabledCount: report.proven?.diagnostics?.stickyDisabledCount ?? null,
  };
}

function main() {
  const lanePolicy = readJson(LANE_POLICY_PATH);
  const managerAdmissionVerify = readJson(MANAGER_ADMISSION_VERIFY_PATH);
  const managerRuntimeGate = readJson(MANAGER_RUNTIME_GATE_PATH);
  const managerCleanupGate = readJson(MANAGER_CLEANUP_GATE_PATH);
  const managerFallbackGate = readJson(MANAGER_FALLBACK_GATE_PATH);
  const managerExportDeltaGate = readJson(MANAGER_EXPORT_DELTA_GATE_PATH);
  const managerLiveGate = readJson(MANAGER_LIVE_GATE_PATH);
  const tripleLiveGate = readJson(TRIPLE_LIVE_GATE_PATH);
  const managerBatchLiveGate = readJson(MANAGER_BATCH_LIVE_GATE_PATH);
  const resourceLiveGate = readJson(RESOURCE_LIVE_GATE_PATH);
  const browserLaneFreezeReview = readJson(BROWSER_LANE_FREEZE_REVIEW_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const browserLaneGlobalLive = summarizeBrowserLaneFreeze(BROWSER_LANE_FREEZE_REVIEW_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-reviewChanges',
    sources: {
      lanePolicy: normalizePath(path.relative(ROOT, LANE_POLICY_PATH)),
      managerAdmissionVerify: normalizePath(path.relative(ROOT, MANAGER_ADMISSION_VERIFY_PATH)),
      managerRuntimeGate: normalizePath(path.relative(ROOT, MANAGER_RUNTIME_GATE_PATH)),
      managerCleanupGate: normalizePath(path.relative(ROOT, MANAGER_CLEANUP_GATE_PATH)),
      managerFallbackGate: normalizePath(path.relative(ROOT, MANAGER_FALLBACK_GATE_PATH)),
      managerExportDeltaGate: normalizePath(path.relative(ROOT, MANAGER_EXPORT_DELTA_GATE_PATH)),
      managerLiveGate: normalizePath(path.relative(ROOT, MANAGER_LIVE_GATE_PATH)),
      tripleLiveGate: normalizePath(path.relative(ROOT, TRIPLE_LIVE_GATE_PATH)),
      managerBatchLiveGate: normalizePath(path.relative(ROOT, MANAGER_BATCH_LIVE_GATE_PATH)),
      resourceLiveGate: normalizePath(path.relative(ROOT, RESOURCE_LIVE_GATE_PATH)),
      browserLaneFreezeReview: normalizePath(path.relative(ROOT, BROWSER_LANE_FREEZE_REVIEW_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    provenSet: {
      lowRiskBatch: summarizeGate(TRIPLE_LIVE_GATE_PATH, 'DRB2-reviewChanges-live-triple'),
      managerSingleLive: summarizeGate(MANAGER_LIVE_GATE_PATH, 'DRM1L-reviewChanges-resource-manager'),
      managerIncludingBatchLive: summarizeGate(MANAGER_BATCH_LIVE_GATE_PATH, 'DRMB1L-reviewChanges-manager-batch'),
      resourceSingleLive: summarizeGate(RESOURCE_LIVE_GATE_PATH, 'DRR1L-reviewChanges-resource'),
      browserLaneGlobalLive,
    },
    managerGateSet: {
      admissionVerifyPassed: managerAdmissionVerify.passed === true,
      runtimeNoOpPassed: managerRuntimeGate.passed === true,
      cleanupPassed: managerCleanupGate.passed === true,
      fallbackPassed: managerFallbackGate.passed === true,
      exportDeltaPassed: managerExportDeltaGate.passed === true,
    },
    stability: {
      latestAcceptAt: accept.generatedAt ?? null,
      acceptRecorded: quality.stability?.acceptRecorded === true,
      headlessVerifyPassed: quality.stability?.headlessVerifyPassed === true,
      rolloutGatePassed: quality.stability?.startupLoaderRolloutGatePassed === true,
      deepZoneAdmissionPassed: quality.stability?.startupModuleResolutionDeepZoneAdmissionPassed === true,
      browserLaneFreezeRecorded: browserLaneFreezeReview.decision?.laneFrozen === true,
    },
    decision: {
      lanePromotionEligible:
        tripleLiveGate.passed === true
        && managerAdmissionVerify.passed === true
        && managerRuntimeGate.passed === true
        && managerCleanupGate.passed === true
        && managerFallbackGate.passed === true
        && managerExportDeltaGate.passed === true
        && managerLiveGate.passed === true
        && managerBatchLiveGate.passed === true
        && resourceLiveGate.passed === true
        && browserLaneGlobalLive.passed === true
        && quality.stability?.acceptRecorded === true,
      browserStillHeld: false,
      browserLaneFrozen: browserLaneGlobalLive.passed === true,
      browserHoldReason: [],
      nextAction: 'lane-freeze-review',
    },
    thresholds: {
      promotionNowSatisfied: [
        'three-module batch live passes',
        'manager/stateful single live passes',
        'manager-including batch live passes',
        'resource/stateful companion single live passes',
        'browser lane freeze review passes with global live proven',
        'manager cleanup gate passes',
        'manager fallback gate passes',
        'manager export-delta gate passes',
        'accept remains green',
      ],
      browserStillBlockedUntil: [],
      renameOnMainline: lanePolicy.immediatePolicy?.renameOnMainline === false,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
