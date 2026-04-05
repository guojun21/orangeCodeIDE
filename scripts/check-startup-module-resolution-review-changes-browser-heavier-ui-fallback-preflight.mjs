#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-fallback-preflight.json');

const GLOBAL_MUTATION_MARKERS = [
  'globalThis',
  'window.',
  'MutationObserver',
  'setInterval',
];

const VIEW_ZONE_MARKERS = [
  'changeViewZones',
  'addZone(',
  'removeZone(',
  'layoutZone(',
  'document.createElement',
];

const TIMER_MARKERS = [
  'setTimeout',
  'requestAnimationFrame',
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

function main() {
  const contractPlan = readJson(CONTRACT_PLAN_PATH);
  const plan = contractPlan.heavierUiContractPlan ?? {};
  const selectedModules = plan.selectedModules ?? [];
  const resourceFirst = new Set(plan.resourceFirst ?? []);
  const viewZoneLater = new Set(plan.viewZoneLater ?? []);

  const modules = selectedModules.map((moduleId) => {
    const sourcePath = moduleIdToSourcePath(moduleId);
    const source = readText(sourcePath);
    const classification = resourceFirst.has(moduleId)
      ? 'resource-first'
      : viewZoneLater.has(moduleId)
        ? 'view-zone-later'
        : 'unclassified';

    const checks = {
      classificationPinned: classification !== 'unclassified',
      noGlobalMutationMarkers: !hasAnyMarker(source, GLOBAL_MUTATION_MARKERS),
      resourceFirstAvoidsViewZoneMarkers:
        classification !== 'resource-first' || !hasAnyMarker(source, VIEW_ZONE_MARKERS),
      resourceFirstAvoidsTimers:
        classification !== 'resource-first' || !hasAnyMarker(source, TIMER_MARKERS),
      viewZoneLaterActuallyUsesViewZoneMarkers:
        classification !== 'view-zone-later' || hasAnyMarker(source, VIEW_ZONE_MARKERS),
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

  const crossModuleChecks = {
    expectedModuleCountMatches: selectedModules.length === 3,
    observedModuleCountMatches: modules.length === 3,
    resourceFirstCountMatches: modules.filter((entry) => entry.classification === 'resource-first').length === 2,
    viewZoneLaterCountMatches: modules.filter((entry) => entry.classification === 'view-zone-later').length === 1,
  };

  const failedModules = modules
    .filter((entry) => !entry.passed)
    .map((entry) => entry.moduleId);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-heavier-ui-fallback-preflight',
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
