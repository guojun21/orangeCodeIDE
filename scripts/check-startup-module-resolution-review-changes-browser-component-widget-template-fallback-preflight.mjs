#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-contract-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-component-widget-template-fallback-preflight.json');

const HEAVY_HOLDER_MARKERS = [
  'diffCommentViewZoneManager',
  'ReviewChangesResourceManager',
  'ReviewChangesResource',
];

const GLOBAL_MUTATION_MARKERS = [
  'globalThis',
  'window.',
  'document.',
  'addEventListener',
  'MutationObserver',
  'setInterval',
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
  const plan = contractPlan.componentWidgetTemplateContractPlan ?? {};
  const selectedModules = plan.selectedModules ?? [];
  const presentationalFirst = new Set(plan.presentationalFirst ?? []);
  const interactiveLater = new Set(plan.interactiveLater ?? []);
  const blockedOutsideSurface = new Set(plan.blockedOutsideSurface ?? []);

  const modules = selectedModules.map((moduleId) => {
    const sourcePath = moduleIdToSourcePath(moduleId);
    const source = readText(sourcePath);
    const classification = presentationalFirst.has(moduleId)
      ? 'presentational-first'
      : interactiveLater.has(moduleId)
        ? 'interactive-later'
        : 'unclassified';

    const checks = {
      classificationPinned: classification !== 'unclassified',
      blockedOutsideSurfaceExcluded: !blockedOutsideSurface.has(moduleId),
      noHeavyHolderMarkers: !hasAnyMarker(source, HEAVY_HOLDER_MARKERS),
      noGlobalMutationMarkers: !hasAnyMarker(source, GLOBAL_MUTATION_MARKERS),
      presentationalHasNoTimers:
        classification !== 'presentational-first' || !hasAnyMarker(source, TIMER_MARKERS),
      interactiveStillNoGlobalMutation:
        classification !== 'interactive-later' || !hasAnyMarker(source, GLOBAL_MUTATION_MARKERS),
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
    expectedModuleCountMatches: selectedModules.length === 8,
    observedModuleCountMatches: modules.length === 8,
    presentationalFirstCountMatches: modules.filter((entry) => entry.classification === 'presentational-first').length === 6,
    interactiveLaterCountMatches: modules.filter((entry) => entry.classification === 'interactive-later').length === 2,
    blockedOutsideSurfaceStillThree: blockedOutsideSurface.size === 3,
  };

  const failedModules = modules
    .filter((entry) => !entry.passed)
    .map((entry) => entry.moduleId);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-component-widget-template-fallback-preflight',
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
