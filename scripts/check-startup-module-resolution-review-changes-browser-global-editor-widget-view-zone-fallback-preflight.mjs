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
  'startup-module-resolution-review-changes-browser-global-editor-widget-view-zone-fallback-preflight.json'
);

const GLOBAL_MUTATION_MARKERS = [
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
  const bridgeAndComponentFirst = new Set(plan.bridgeAndComponentFirst ?? []);
  const heavierUiLast = new Set(plan.heavierUiLast ?? []);

  const modules = selectedModules.map((moduleId) => {
    const sourcePath = moduleIdToSourcePath(moduleId);
    const source = readText(sourcePath);
    const classification = bridgeAndComponentFirst.has(moduleId)
      ? 'bridge-and-component-first'
      : heavierUiLast.has(moduleId)
        ? 'heavier-ui-last'
        : 'unclassified';

    const checks = {
      classificationPinned: classification !== 'unclassified',
      noGlobalMutationMarkers: !hasAnyMarker(source, GLOBAL_MUTATION_MARKERS),
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    return {
      moduleId,
      classification,
      sourcePath: normalizePath(path.relative(ROOT, sourcePath)),
      checks,
      failedChecks,
      passed: failedChecks.length === 0,
    };
  });

  const failedModules = modules
    .filter((entry) => !entry.passed)
    .map((entry) => entry.moduleId);

  const broaderApproved = broaderFreeze.proven?.approvedSurface ?? [];
  const componentApproved = componentFreeze.proven?.approvedSurface ?? [];
  const heavierApproved = heavierFreeze.proven?.approvedSurface ?? [];

  const crossModuleChecks = {
    expectedModuleCountMatches: selectedModules.length === 14,
    observedModuleCountMatches: modules.length === 14,
    bridgeAndComponentFirstCountMatches: modules.filter((entry) => entry.classification === 'bridge-and-component-first').length === 11,
    heavierUiLastCountMatches: modules.filter((entry) => entry.classification === 'heavier-ui-last').length === 3,
    broaderSurfaceReused: broaderApproved.every((moduleId) => selectedModules.includes(moduleId)),
    componentSurfaceReused: componentApproved.every((moduleId) => selectedModules.includes(moduleId)),
    heavierSurfaceReused: heavierApproved.every((moduleId) => selectedModules.includes(moduleId)),
    selectedSurfaceMatchesPriorProvenUnion:
      sameSet(selectedModules, [...broaderApproved, ...componentApproved, ...heavierApproved]),
  };

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-global-editor-widget-view-zone-fallback-preflight',
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
