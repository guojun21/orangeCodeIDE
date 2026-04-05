#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const SUITE_PATH = path.join(ROOT, 'mapped', 'rebuilt-check-suite.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-verify.json');

if (!fs.existsSync(SUITE_PATH)) {
  throw new Error(`Check suite missing: ${SUITE_PATH}`);
}

const suite = JSON.parse(fs.readFileSync(SUITE_PATH, 'utf8'));
const coverageGate = suite.coverageGate ?? {};
const sourceQuality = suite.sourceQuality ?? {};
const artifact = suite.artifact ?? {};
const integrity = suite.integrity ?? {};
const extension = suite.extension ?? {};
const activation = suite.activation ?? {};
const runtimeDirect = suite.runtimeDirect ?? {};
const runtime = suite.probe?.runtime ?? {};
const browserViewProbes = suite.probe?.browserViewProbes ?? [];
const browserViewProbesSummary = suite.probe?.browserViewProbesSummary ?? { totalChecked: 0, passedCount: 0, failedSliceIds: [] };

const checks = [
  {
    id: 'runtime-root',
    passed: artifact.runtimeExists === true,
    detail: artifact.runtimeRoot,
  },
  {
    id: 'coverage-gate',
    passed: coverageGate.passed === true,
    detail: {
      baselinePath: coverageGate.baselinePath,
      baselineSource: coverageGate.baselineSource,
      regressions: coverageGate.regressions,
      current: coverageGate.current,
      baseline: coverageGate.baseline,
    },
  },
  {
    id: 'rebuilt-source-quality',
    passed: sourceQuality.passed === true,
    detail: {
      summary: sourceQuality.summary,
      extensionChecks: sourceQuality.extensionChecks,
      runtimeChecks: sourceQuality.runtimeChecks,
    },
  },
  {
    id: 'slice-artifacts',
    passed: artifact.slicesOk === true,
    detail: artifact.sliceChecks,
  },
  {
    id: 'base-overlay',
    passed: artifact.overlayOk === true,
    detail: artifact.baseOverlayChecks,
  },
  {
    id: 'runtime-integrity',
    passed: integrity.allMatch === true,
    detail: integrity.checks,
  },
  {
    id: 'renderer-ready',
    passed: runtime.readyState === 'complete' && runtime.hasWorkbench === true,
    detail: {
      readyState: runtime.readyState,
      hasWorkbench: runtime.hasWorkbench,
    },
  },
  {
    id: 'hook-markers',
    passed: !!runtime.workbenchBadgeMarker && !!runtime.preloadBridgeInfo && !!runtime.statusPanelMarker,
    detail: {
      workbenchBadgeMarker: runtime.workbenchBadgeMarker,
      preloadBridgeInfo: runtime.preloadBridgeInfo,
      statusPanelMarker: runtime.statusPanelMarker,
    },
  },
  {
    id: 'preload-direct-source',
    passed:
      runtime.preloadBridgeInfo?.source ===
      'rebuilt/src/vs/base/parts/sandbox/electron-sandbox/preload/runtime',
    detail: runtime.preloadBridgeInfo ?? null,
  },
  {
    id: 'hook-dom-nodes',
    passed: runtime.badgeNode === true && runtime.statusPanelNode === true,
    detail: {
      badgeNodeInfo: runtime.badgeNodeInfo,
      statusPanelNodeInfo: runtime.statusPanelNodeInfo,
    },
  },
  {
    id: 'functional-smoke',
    passed: runtime.functionalChecks?.passed === true,
    detail: runtime.functionalChecks ?? null,
  },
  {
    id: 'browser-view-smoke',
    passed:
      browserViewProbesSummary.totalChecked === 0 ||
      browserViewProbes.every((entry) => entry.passed === true),
    advisory: true,
    detail: {
      summary: browserViewProbesSummary,
      probes: browserViewProbes,
    },
  },
  {
    id: 'extension-slices',
    passed: extension.passed === true,
    detail: extension.checks,
  },
  {
    id: 'extension-activation',
    passed: activation.passed === true,
    detail: {
      exthostLogPath: activation.exthostLogPath,
      rebuiltExtensionIds: activation.rebuiltExtensionIds,
      observedUnrebuiltExtensionIds: activation.observedUnrebuiltExtensionIds,
      missingPreviouslyObservedUnrebuilt: activation.missingPreviouslyObservedUnrebuilt,
    },
  },
  {
    id: 'runtime-direct-slices',
    passed: runtimeDirect.passed === true,
    detail: runtimeDirect.checks,
  },
];

const result = {
  generatedAt: new Date().toISOString(),
  passed: checks.every((entry) => entry.passed || entry.advisory === true),
  checks,
  screenshotPath: suite.probe?.screenshotPath ?? null,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
