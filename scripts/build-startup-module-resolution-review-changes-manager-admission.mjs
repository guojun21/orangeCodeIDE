#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const LANE_POLICY_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-lane-policy.json');
const DEEP_ZONE_PLAN_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const MANAGER_FILE_PATH = path.join(
  ROOT,
  'rebuilt',
  'src',
  'project-modules-beautified',
  'out-build',
  'vs',
  'workbench',
  'contrib',
  'reviewChanges',
  'browser',
  'ReviewChangesResourceManager.js',
);
const RESOURCE_FILE_PATH = path.join(
  ROOT,
  'rebuilt',
  'src',
  'project-modules-beautified',
  'out-build',
  'vs',
  'workbench',
  'contrib',
  'reviewChanges',
  'browser',
  'ReviewChangesResource.js',
);
const STARTUP_INPUT_MANAGER_PATH = path.join(
  ROOT,
  'recovered',
  'startup-loader',
  'input',
  'out-build',
  'vs',
  'workbench',
  'contrib',
  'reviewChanges',
  'browser',
  'ReviewChangesResourceManager.js',
);
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-admission.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function main() {
  const lanePolicy = readJson(LANE_POLICY_PATH);
  const deepZonePlan = readJson(DEEP_ZONE_PLAN_PATH);
  const managerSource = readText(MANAGER_FILE_PATH);
  const resourceSource = readText(RESOURCE_FILE_PATH);
  const reviewLane = (deepZonePlan.lanePlans ?? []).find((entry) => entry.lane === 'contrib-reviewChanges');

  const riskSignals = {
    mutableResourceMap: managerSource.includes('_resourcesMap = new Map()'),
    currentResourcesArray: managerSource.includes('_currentResources = []'),
    emitsChangeEvent: managerSource.includes('_onDidChangeResources.fire()'),
    disposesRemovedResources: managerSource.includes('.dispose();'),
    clearsResourceMapOnDispose: managerSource.includes('_resourcesMap.clear()'),
    hydratesResourceSkeletons: managerSource.includes('hydrateSkeleton'),
    companionResourceHydratesModels: resourceSource.includes('hydrate()') && resourceSource.includes('createModelReference'),
    startupInputPresent: fs.existsSync(STARTUP_INPUT_MANAGER_PATH),
  };

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-reviewChanges',
    managerModuleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
    sourcePaths: {
      lanePolicy: normalizePath(path.relative(ROOT, LANE_POLICY_PATH)),
      deepZonePlan: normalizePath(path.relative(ROOT, DEEP_ZONE_PLAN_PATH)),
      managerSource: normalizePath(path.relative(ROOT, MANAGER_FILE_PATH)),
      resourceSource: normalizePath(path.relative(ROOT, RESOURCE_FILE_PATH)),
      startupInput: normalizePath(path.relative(ROOT, STARTUP_INPUT_MANAGER_PATH)),
    },
    policyChecks: {
      lanePolicyNextAction: lanePolicy.immediatePolicy?.nextAction ?? null,
      managerHoldPinned: (lanePolicy.explicitHold?.managerStatefulIds ?? []).includes(
        'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
      ),
      browserStillHeld: lanePolicy.explicitHold?.browserLaneStillHeld === true,
    },
    candidatePool: {
      preferredIdsPresent: reviewLane?.preferredIdsPresent ?? [],
      lowRiskCandidateCount: reviewLane?.lowRiskCandidateCount ?? null,
      softHoldCount: reviewLane?.softHoldCount ?? null,
      managerInPreferredIds: (reviewLane?.preferredIdsPresent ?? []).includes(
        'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResourceManager.js',
      ),
    },
    riskSignals,
    admissionDecision: {
      category: 'manager-stateful',
      nextAction: 'dedicated-no-op-runtime-gate',
      liveStillBlocked: true,
      liveBlockedUntil: [
        'manager-admission-verify',
        'manager-runtime-gate',
        'cleanup-gate',
        'fallback-coverage-gate',
        'export-signature-delta-gate',
      ],
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
