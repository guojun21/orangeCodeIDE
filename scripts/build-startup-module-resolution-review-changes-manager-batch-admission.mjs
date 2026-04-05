#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const LANE_FREEZE_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-freeze-review.json');
const MANAGER_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-manager-module-resolution-live-gate.json');
const TRIPLE_LIVE_GATE_PATH = path.join(ROOT, 'mapped', 'contrib-review-changes-live-triple-module-resolution-live-gate.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-batch-admission.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const laneFreeze = readJson(LANE_FREEZE_PATH);
  const managerLive = readJson(MANAGER_LIVE_GATE_PATH);
  const tripleLive = readJson(TRIPLE_LIVE_GATE_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-reviewChanges',
    sources: {
      laneFreeze: normalizePath(path.relative(ROOT, LANE_FREEZE_PATH)),
      managerLive: normalizePath(path.relative(ROOT, MANAGER_LIVE_GATE_PATH)),
      tripleLive: normalizePath(path.relative(ROOT, TRIPLE_LIVE_GATE_PATH)),
    },
    candidateWave: {
      waveId: 'DRMB1',
      type: 'manager-including-batch-admission',
      selectedModules: [
        'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
        'out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
      ],
      deferredModules: [
        'out-build/vs/workbench/contrib/reviewChanges/browser/service/semanticReviewService.js',
        'out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js',
      ],
    },
    rationale: {
      managerSingleLiveProven: managerLive.passed === true,
      lowRiskBatchProven: tripleLive.passed === true,
      pairingRule: 'one stateful manager plus one near-zero-risk service token',
      whyThisPair: [
        'introduces exactly one stateful/resource-holder module',
        'keeps companion module as token-like service surface with minimal side effects',
        'avoids immediately mixing manager with util/parser logic or a larger low-risk batch',
      ],
    },
    decision: {
      admissionReady: laneFreeze.decision?.laneFrozen === true
        && laneFreeze.currentState?.managerSingleLive?.passed === true
        && laneFreeze.currentState?.lowRiskBatch?.passed === true,
      nextAction: 'manager-including-batch-no-op-runtime',
      browserStillHeld: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
