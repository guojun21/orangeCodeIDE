#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CONTRACT_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-contract-plan.json');
const COMPONENT_WIDGET_TEMPLATE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-browser-component-widget-template-module-resolution-live-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-heavier-ui-sticky-disable-preflight.json');

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

function main() {
  const contractPlan = readJson(CONTRACT_PLAN_PATH);
  const componentWidgetTemplateLiveGate = readJson(COMPONENT_WIDGET_TEMPLATE_LIVE_GATE_PATH);
  const plan = contractPlan.heavierUiContractPlan ?? {};
  const selectedModules = plan.selectedModules ?? [];

  const modules = selectedModules.map((moduleId) => {
    const sourcePath = moduleIdToSourcePath(moduleId);
    const source = readText(sourcePath);

    const checks = {
      noGlobalStickyMarkers: !hasAnyMarker(source, GLOBAL_STICKY_MARKERS),
      notAlreadyInPriorSurface:
        !(Array.isArray(componentWidgetTemplateLiveGate.enabledIds) && componentWidgetTemplateLiveGate.enabledIds.includes(moduleId)),
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
    expectedModuleCountMatches: selectedModules.length === 3,
    observedModuleCountMatches: modules.length === 3,
    browserLaneStickyBaselineClean:
      (componentWidgetTemplateLiveGate.runtimeState?.resolution?.diagnostics?.counters?.stickyDisabledCount ?? -1) === 0,
    noSelectedModuleAlreadyLive:
      modules.every((entry) => entry.checks.notAlreadyInPriorSurface === true),
  };

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'browser-heavier-ui-sticky-disable-preflight',
    contractPlanPath: normalizePath(path.relative(ROOT, CONTRACT_PLAN_PATH)),
    componentWidgetTemplateLiveGatePath: normalizePath(path.relative(ROOT, COMPONENT_WIDGET_TEMPLATE_LIVE_GATE_PATH)),
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
