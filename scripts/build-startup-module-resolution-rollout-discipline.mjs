#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const CANARY_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-canary-plan.json');
const LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-live-canary-gate.json');
const FOUNDATION_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-foundation-live-gate.json');
const FOUNDATION_UNIFIED_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-foundation-unified-gate.json');
const FOUNDATION_BOTH_GATE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-foundation-live-both-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-rollout-discipline.json');

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
    enabledCount: Array.isArray(report.enabledIds) ? report.enabledIds.length : 0,
    hitCount: Array.isArray(report.factoryHitIds) ? report.factoryHitIds.length : 0,
    enabledIds: report.enabledIds ?? [],
  };
}

function main() {
  const canaryPlan = readJson(CANARY_PLAN_PATH);
  const rolloutDiscipline = {
    generatedAt: new Date().toISOString(),
    canaryPlanPath: normalizePath(path.relative(ROOT, CANARY_PLAN_PATH)),
    candidatePool: {
      totalModules: canaryPlan.totals?.totalModules ?? null,
      stagedModules: canaryPlan.totals?.stagedModules ?? null,
      sourceViewOnlyCount: canaryPlan.totals?.sourceViewOnlyCount ?? null,
      candidatePoolCount: canaryPlan.totals?.candidatePoolCount ?? null,
      doNotTouchYetCount: canaryPlan.totals?.doNotTouchYetCount ?? null,
    },
    lanePolicy: {
      immediateLanes: canaryPlan.rules?.immediateLanes ?? [],
      foundationLanes: canaryPlan.rules?.foundationLanes ?? [],
      deferredLanes: canaryPlan.rules?.deferredLanes ?? [],
      forbiddenForCurrentStage: ['contrib-composer', 'contrib-reviewChanges', 'browser'],
    },
    provenMicroWaves: [
      summarizeGate(LIVE_GATE_PATH, 'S1-services-common-live'),
      summarizeGate(FOUNDATION_LIVE_GATE_PATH, 'F1-appLayoutContextKeys-live'),
      summarizeGate(FOUNDATION_UNIFIED_GATE_PATH, 'F1-unifiedAppLayoutContextKeys-live'),
      summarizeGate(FOUNDATION_BOTH_GATE_PATH, 'F1-dual-foundation-live'),
    ],
    currentPolicy: {
      renameOnMainline: false,
      nextAllowedExpansion: 'phase4-rollout-discipline',
      nextForbiddenExpansion: ['contrib-composer', 'contrib-reviewChanges', 'browser'],
      phase4Focus: [
        'freeze proven micro-wave set',
        'keep deep zones disabled by default',
        'only expand with dedicated gate artifacts',
      ],
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(rolloutDiscipline, null, 2)}\n`);

  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
