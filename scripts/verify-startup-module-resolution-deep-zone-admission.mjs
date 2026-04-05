#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-admission-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const deepZones = report.deepZones ?? [];
  const checks = {
    disciplinePassed: report.disciplinePassed === true,
    baselineRequirementsSatisfied: report.baselineRequirements?.satisfied === true,
    defaultAdmissionIsDeny: report.policy?.defaultAdmission === 'deny',
    renameStillOffMainline: report.policy?.renameOnMainline === false,
    deepZoneCountPinned: deepZones.length === 3,
    composerPartiallyProven: (() => {
      const composer = deepZones.find((entry) => entry.lane === 'contrib-composer');
      return composer?.status === 'active-partially-proven'
        && composer?.provenArtifacts?.dedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.firstSingleLive?.passed === true
        && composer?.provenArtifacts?.secondSingleLive?.passed === true
        && composer?.provenArtifacts?.firstMicroBatchLive?.passed === true
        && composer?.provenArtifacts?.fourthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.fourthSingleLive?.passed === true
        && composer?.provenArtifacts?.fifthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.fifthSingleLive?.passed === true
        && composer?.provenArtifacts?.sixthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.sixthSingleLive?.passed === true
        && composer?.provenArtifacts?.seventhDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.seventhSingleLive?.passed === true
        && composer?.provenArtifacts?.eighthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.eighthSingleLive?.passed === true
        && composer?.provenArtifacts?.ninthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.tenthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.tenthSingleLive?.passed === true
        && composer?.provenArtifacts?.eleventhDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.eleventhSingleLive?.passed === true
        && composer?.provenArtifacts?.twelfthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.twelfthSingleLive?.passed === true
        && composer?.provenArtifacts?.thirteenthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.thirteenthSingleLive?.passed === true
        && composer?.provenArtifacts?.fourteenthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.fourteenthSingleLive?.passed === true
        && composer?.provenArtifacts?.fifteenthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.fifteenthSingleLive?.passed === true
        && composer?.provenArtifacts?.sixteenthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.sixteenthSingleLive?.passed === true
        && composer?.provenArtifacts?.seventeenthDedicatedNoOpRuntime?.passed === true
        && composer?.provenArtifacts?.seventeenthSingleLive?.passed === true
        && composer?.nextRecommendedFocus === 'composer-twentyseventh-candidate-admission-plan'
        && Array.isArray(composer?.liveBlockedCandidates)
        && composer.liveBlockedCandidates.includes('out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js')
        && composer.liveBlockedCandidates.includes('out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js');
    })(),
    reviewChangesFrozenGlobalProven: (() => {
      const reviewChanges = deepZones.find((entry) => entry.lane === 'contrib-reviewChanges');
      return reviewChanges?.status === 'frozen-global-proven'
        && reviewChanges?.frozenState?.laneFrozen === true
        && reviewChanges?.frozenState?.laneState === 'review-changes-lane-global-live-proven'
        && reviewChanges?.frozenState?.browserGlobalSurfaceCount === 14;
    })(),
    browserDeferredBlocked: (() => {
      const browser = deepZones.find((entry) => entry.lane === 'browser');
      return browser?.status === 'deferred-blocked'
        && browser?.forbiddenUntilSatisfied === true
        && Array.isArray(browser?.blockedUntil)
        && browser.blockedUntil.length >= 2;
    })(),
    blockedByDefaultPinned: Array.isArray(report.blockedByDefault)
      && report.blockedByDefault.length === 1
      && report.blockedByDefault[0] === 'browser',
    nextExecutableLanePinned:
      report.decision?.nextExecutableLane === 'contrib-composer'
      && report.decision?.nextExecutableStep === 'composer-twentyseventh-candidate-admission-plan',
    stabilityPinned:
      report.stability?.acceptRecorded === true
      && report.stability?.headlessVerifyPassed === true
      && report.stability?.rolloutGatePassed === true,
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const output = {
    generatedAt: new Date().toISOString(),
    inputPath: normalizePath(path.relative(ROOT, INPUT_PATH)),
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${output.passed}`);

  if (!output.passed) {
    process.exitCode = 1;
  }
}

main();
