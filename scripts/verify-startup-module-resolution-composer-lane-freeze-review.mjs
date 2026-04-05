#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-lane-freeze-review.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-lane-freeze-review-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const checks = {
    lanePinned: report.lane === 'contrib-composer',
    promotionEligiblePinned: report.currentState?.lanePromotionEligible === true,
    widerBatchStillBlocked: report.currentState?.widerBatchStillBlocked === true,
    firstSinglePinned:
      report.currentState?.firstSingleLive?.passed === true
      && report.currentState.firstSingleLive.enabledCount === 1
      && report.currentState.firstSingleLive.factoryHitCount === 1,
    secondSinglePinned:
      report.currentState?.secondSingleLive?.passed === true
      && report.currentState.secondSingleLive.enabledCount === 1
      && report.currentState.secondSingleLive.factoryHitCount === 1,
    microBatchPinned:
      report.currentState?.firstMicroBatch?.passed === true
      && report.currentState.firstMicroBatch.enabledCount === 2
      && report.currentState.firstMicroBatch.factoryHitCount === 2,
    thirdSinglePinned:
      report.currentState?.thirdSingleLive?.passed === true
      && report.currentState.thirdSingleLive.enabledCount === 1
      && report.currentState.thirdSingleLive.factoryHitCount === 1,
    fourthSinglePinned:
      report.currentState?.fourthSingleLive?.passed === true
      && report.currentState.fourthSingleLive.enabledCount === 1
      && report.currentState.fourthSingleLive.factoryHitCount === 1,
    fifthSinglePinned:
      report.currentState?.fifthSingleLive?.passed === true
      && report.currentState.fifthSingleLive.enabledCount === 1
      && report.currentState.fifthSingleLive.factoryHitCount === 1,
    sixthSinglePinned:
      report.currentState?.sixthSingleLive?.passed === true
      && report.currentState.sixthSingleLive.enabledCount === 1
      && report.currentState.sixthSingleLive.factoryHitCount === 1,
    seventhSinglePinned:
      report.currentState?.seventhSingleLive?.passed === true
      && report.currentState.seventhSingleLive.enabledCount === 1
      && report.currentState.seventhSingleLive.factoryHitCount === 1,
    eighthSinglePinned:
      report.currentState?.eighthSingleLive?.passed === true
      && report.currentState.eighthSingleLive.enabledCount === 1
      && report.currentState.eighthSingleLive.factoryHitCount === 1,
    ninthSinglePinned:
      report.currentState?.ninthSingleLive?.passed === true
      && report.currentState.ninthSingleLive.enabledCount === 1
      && report.currentState.ninthSingleLive.factoryHitCount === 1,
    tenthSinglePinned:
      report.currentState?.tenthSingleLive?.passed === true
      && report.currentState.tenthSingleLive.enabledCount === 1
      && report.currentState.tenthSingleLive.factoryHitCount === 1,
    eleventhSinglePinned:
      report.currentState?.eleventhSingleLive?.passed === true
      && report.currentState.eleventhSingleLive.enabledCount === 1
      && report.currentState.eleventhSingleLive.factoryHitCount === 1,
    twelfthSinglePinned:
      report.currentState?.twelfthSingleLive?.passed === true
      && report.currentState.twelfthSingleLive.enabledCount === 1
      && report.currentState.twelfthSingleLive.factoryHitCount === 1,
    thirteenthSinglePinned:
      report.currentState?.thirteenthSingleLive?.passed === true
      && report.currentState.thirteenthSingleLive.enabledCount === 1
      && report.currentState.thirteenthSingleLive.factoryHitCount === 1,
    fourteenthSinglePinned:
      report.currentState?.fourteenthSingleLive?.passed === true
      && report.currentState.fourteenthSingleLive.enabledCount === 1
      && report.currentState.fourteenthSingleLive.factoryHitCount === 1,
    fifteenthSinglePinned:
      report.currentState?.fifteenthSingleLive?.passed === true
      && report.currentState.fifteenthSingleLive.enabledCount === 1
      && report.currentState.fifteenthSingleLive.factoryHitCount === 1,
    sixteenthSinglePinned:
      report.currentState?.sixteenthSingleLive?.passed === true
      && report.currentState.sixteenthSingleLive.enabledCount === 1
      && report.currentState.sixteenthSingleLive.factoryHitCount === 1,
    seventeenthSinglePinned:
      report.currentState?.seventeenthSingleLive?.passed === true
      && report.currentState.seventeenthSingleLive.enabledCount === 1
      && report.currentState.seventeenthSingleLive.factoryHitCount === 1,
    eighteenthBlockedPinned:
      report.currentState?.eighteenthLiveBlocked?.passed === false
      && report.currentState.eighteenthLiveBlocked.enabledCount === 1
      && report.currentState.eighteenthLiveBlocked.factoryHitCount === 0
      && (report.currentState.eighteenthLiveBlocked.failedChecks ?? []).includes('actualFactoryHitRecorded'),
    nineteenthSinglePinned:
      report.currentState?.nineteenthSingleLive?.passed === true
      && report.currentState.nineteenthSingleLive.enabledCount === 1
      && report.currentState.nineteenthSingleLive.factoryHitCount === 1,
    twentiethSinglePinned:
      report.currentState?.twentiethSingleLive?.passed === true
      && report.currentState.twentiethSingleLive.enabledCount === 1
      && report.currentState.twentiethSingleLive.factoryHitCount === 1,
    twentyfirstBlockedPinned:
      report.currentState?.twentyfirstLiveBlocked?.passed === false
      && report.currentState.twentyfirstLiveBlocked.enabledCount === 1
      && report.currentState.twentyfirstLiveBlocked.factoryHitCount === 1
      && report.currentState.twentyfirstLiveBlocked.blockedBy === 'accept:test-agent',
    twentysecondSinglePinned:
      report.currentState?.twentysecondSingleLive?.passed === true
      && report.currentState.twentysecondSingleLive.enabledCount === 1
      && report.currentState.twentysecondSingleLive.factoryHitCount === 1,
    twentythirdSinglePinned:
      report.currentState?.twentythirdSingleLive?.passed === true
      && report.currentState.twentythirdSingleLive.enabledCount === 1
      && report.currentState.twentythirdSingleLive.factoryHitCount === 1,
    twentyfourthSinglePinned:
      report.currentState?.twentyfourthSingleLive?.passed === true
      && report.currentState.twentyfourthSingleLive.enabledCount === 1
      && report.currentState.twentyfourthSingleLive.factoryHitCount === 1,
    twentyfifthSinglePinned:
      report.currentState?.twentyfifthSingleLive?.passed === true
      && report.currentState.twentyfifthSingleLive.enabledCount === 1
      && report.currentState.twentyfifthSingleLive.factoryHitCount === 1,
    twentysixthSinglePinned:
      report.currentState?.twentysixthSingleLive?.passed === true
      && report.currentState.twentysixthSingleLive.enabledCount === 1
      && report.currentState.twentysixthSingleLive.factoryHitCount === 1,
    stableRuntimePinned:
      typeof report.currentState?.latestAcceptAt === 'string'
      && report.currentState?.stableRuntimeStillGreen === true,
    laneFrozen: report.decision?.laneFrozen === true,
    laneStatePinned: report.decision?.laneState === 'contrib-composer-lane-twentyfour-single-live-two-live-blocked-one-micro-batch-proven',
    nextApprovedStepPinned: report.decision?.nextApprovedStep === 'composer-twentyseventh-candidate-admission-plan',
    liveBlockedCandidatePinned:
      Array.isArray(report.decision?.liveBlockedCandidates)
      && report.decision.liveBlockedCandidates.length === 2
      && report.decision.liveBlockedCandidates[0] === 'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js',
    liveBlockedCandidateSecondPinned:
      Array.isArray(report.decision?.liveBlockedCandidates)
      && report.decision.liveBlockedCandidates[1] === 'out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js',
    continuationAllowed: report.decision?.composerLaneContinuationAllowed === true,
    crossLaneBlocked: report.decision?.crossLaneExpansionBlocked === true,
    blockedExpansionPresent:
      Array.isArray(report.guardrails?.blockedNow)
      && report.guardrails.blockedNow.includes('composer wider batch expansion')
      && report.guardrails.blockedNow.includes('cross-lane execution without dedicated admission'),
    renameBlocked: Array.isArray(report.guardrails?.blockedNow) && report.guardrails.blockedNow.includes('rename-driven work'),
    minimumWinPinned:
      report.minimumWin?.definition === 'composer lane freeze review verify green with laneState fixed to contrib-composer-lane-twentyfour-single-live-two-live-blocked-one-micro-batch-proven',
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
