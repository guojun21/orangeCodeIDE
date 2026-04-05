#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const FIRST_FREEZE_REVIEW_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-freeze-review.json');
const SECOND_ADMISSION_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-admission.json');
const ACCEPT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');
const QUALITY_PATH = path.join(ROOT, 'mapped', 'quality-report.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-second-freeze-review.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const firstFreeze = readJson(FIRST_FREEZE_REVIEW_PATH);
  const secondAdmission = readJson(SECOND_ADMISSION_PATH);
  const accept = readJson(ACCEPT_PATH);
  const quality = readJson(QUALITY_PATH);

  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    phase: 'second-candidate-freeze-review',
    sources: {
      firstFreezeReview: normalizePath(path.relative(ROOT, FIRST_FREEZE_REVIEW_PATH)),
      secondAdmission: normalizePath(path.relative(ROOT, SECOND_ADMISSION_PATH)),
      accept: normalizePath(path.relative(ROOT, ACCEPT_PATH)),
      quality: normalizePath(path.relative(ROOT, QUALITY_PATH)),
    },
    baseline: {
      latestAcceptAt: accept.generatedAt ?? null,
      stableRuntimeStillGreen:
        quality.stability?.headlessVerifyPassed === true
        && quality.stability?.acceptRecorded === true
        && quality.stability?.startupLoaderRuntimeGatePassed === true
        && quality.stability?.startupLoaderRolloutGatePassed === true,
    },
    proven: {
      moduleId: firstFreeze.proven?.moduleId ?? null,
      waveId: firstFreeze.proven?.waveId ?? null,
      overlayProbeIds: firstFreeze.proven?.overlayProbeIds ?? [],
      factoryHitIds: firstFreeze.proven?.factoryHitIds ?? [],
      diagnostics: firstFreeze.proven?.diagnostics ?? null,
    },
    plannedCandidate: {
      moduleId: secondAdmission.approvedCandidate?.moduleId ?? null,
      waveId: secondAdmission.approvedCandidate?.waveId ?? null,
      riskClass: secondAdmission.approvedCandidate?.riskClass ?? null,
      runnerUps: (secondAdmission.runnerUps ?? []).map((entry) => entry.moduleId),
    },
    decision: {
      laneFrozen: true,
      laneState: 'single-live-proven-next-candidate-planned',
      nextApprovedStep: 'browser-second-next-step-lock',
      secondCandidatePlannedOnly: true,
      browserMultiModuleBatchStillBlocked: true,
      componentWidgetTemplateStillBlocked: true,
      crossLaneExpansionBlocked: true,
      renameOnMainline: false,
    },
    blockedNow: [
      'browser multi-module batch live',
      'browser component or widget live',
      'browser template-surface live',
      'cross-lane expansion',
      'rename-driven work',
    ],
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
