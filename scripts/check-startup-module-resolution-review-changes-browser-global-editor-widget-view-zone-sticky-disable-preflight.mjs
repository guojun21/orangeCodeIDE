#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PLAN_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-contract-plan.json'
);
const BROADER_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-broader-editor-widget-view-zone-live-execution-freeze-review.json'
);
const COMPONENT_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-component-widget-template-live-execution-freeze-review.json'
);
const HEAVIER_FREEZE_REVIEW_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-heavier-ui-live-execution-freeze-review.json'
);
const OUTPUT_PATH = path.join(
  ROOT,
  'mapped',
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-sticky-disable-preflight.json'
);

const GLOBAL_STICKY_MARKERS = [
  'globalThis',
  'window.',
  'MutationObserver',
  'setInterval',
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function moduleIdToSourcePath(moduleId) {
  return path.join(ROOT, 'rebuilt', 'src', 'project-modules-beautified', moduleId);
}

function hasAnyMarker(source, markers) {
  return markers.some((marker) => source.includes(marker));
}

function sameSet(a, b) {
  return Array.isArray(a)
    && Array.isArray(b)
    && JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
}

function main() {
  const contractPlan = readJson(CONTRACT_PLAN_PATH);
  const broaderFreeze = readJson(BROADER_FREEZE_REVIEW_PATH);
  const componentFreeze = readJson(COMPONENT_FREEZE_REVIEW_PATH);
  const heavierFreeze = readJson(HEAVIER_FREEZE_REVIEW_PATH);
  const plan = contractPlan.globalEditorWidgetViewZoneContractPlan ?? {};
  const selectedModules = plan.selectedModules ?? [];

  const modules = selectedModules.map((moduleId) => {
    const sourcePath = moduleIdToSourcePath(moduleId);
    const source = readText(sourcePath);

    const checks = {
      noGlobalStickyMarkers: !hasAnyMarker(source, GLOBAL_STICKY_MARKERS),
      belongsToPriorProvenSurface:
        (broaderFreeze.proven?.approvedSurface ?? []).includes(moduleId)
        || (componentFreeze.proven?.approvedSurface ?? []).includes(moduleId)
        || (heavierFreeze.proven?.approvedSurface ?? []).includes(moduleId),
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    return {
      moduleId,
      sourcePath: normalizePath(path.relative(ROOT, sourcePath)),
      checks,
      failedChecks,
      passed: failedChecks.length === 0,
    };
  });

  const failedModules = modules
    .filter((entry) => !entry.passed)
    .map((entry) => entry.moduleId);

  const crossModuleChecks = {
    expectedModuleCountMatches: selectedModules.length === 14,
    observedModuleCountMatches: modules.length === 14,
    broaderBaselineStickyClean: (broaderFreeze.proven?.diagnostics?.stickyDisabledCount ?? -1) === 0,
    componentBaselineStickyClean: (componentFreeze.proven?.diagnostics?.stickyDisabledCount ?? -1) === 0,
    heavierBaselineStickyClean: (heavierFreeze.proven?.diagnostics?.stickyDisabledCount ?? -1) === 0,
    selectedSurfaceMatchesPriorProvenUnion:
      sameSet(
        selectedModules,
        [
          ...(broaderFreeze.proven?.approvedSurface ?? []),
          ...(componentFreeze.proven?.approvedSurface ?? []),
          ...(heavierFreeze.proven?.approvedSurface ?? []),
        ]
      ),
  };

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-global-editor-widget-view-zone-sticky-disable-preflight',
    contractPlanPath: normalizePath(path.relative(ROOT, CONTRACT_PLAN_PATH)),
    expectedModuleCount: selectedModules.length,
    observedModuleCount: modules.length,
    failedModules,
    crossModuleChecks,
    modules,
    passed:
      Object.values(crossModuleChecks).every(Boolean)
      && failedModules.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${report.passed}`);
  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();
