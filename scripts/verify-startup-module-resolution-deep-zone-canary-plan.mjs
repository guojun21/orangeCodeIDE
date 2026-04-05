#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan.json');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-deep-zone-canary-plan-verify.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const report = readJson(INPUT_PATH);
  const lanePlans = report.lanePlans ?? [];
  const byLane = new Map(lanePlans.map((entry) => [entry.lane, entry]));

  const checks = {
    renameStillOffMainline: report.policy?.renameOnMainline === false,
    phasePinned:
      report.policy?.currentPhase === 'deep-zone-composer-twentyseventh-candidate-planning'
      && report.policy?.firstExecutableStep === 'composer-twentyseventh-candidate-admission-plan',
    currentRecommendationPinned:
      report.currentRecommendation?.nextLane === 'contrib-composer'
      && report.currentRecommendation?.nextAction === 'composer-twentyseventh-candidate-admission-plan'
      && typeof report.currentRecommendation?.nextCandidateId === 'string'
      && report.currentRecommendation.nextCandidateId.length > 0
      && report.currentRecommendation.nextCandidateId === 'out-build/vs/workbench/contrib/composer/browser/composerViews.js',
    composerLanePresent:
      byLane.has('contrib-composer')
      && byLane.get('contrib-composer')?.status === 'active-partially-proven'
      && byLane.get('contrib-composer')?.firstNoOpCandidate?.id === 'out-build/vs/workbench/contrib/composer/browser/composerViews.js'
      && byLane.get('contrib-composer')?.recommendation === 'composer-twentyseventh-candidate-admission-plan',
    reviewLaneFrozen:
      byLane.has('contrib-reviewChanges')
      && byLane.get('contrib-reviewChanges')?.status === 'frozen-global-proven'
      && byLane.get('contrib-reviewChanges')?.recommendation === 'frozen-global-proven',
    browserLanePresent: byLane.has('browser') && !!byLane.get('browser')?.firstNoOpCandidate,
    browserStillHeld: byLane.get('browser')?.recommendation === 'hold-until-composer-lane-review',
    composerQueueAdvanced:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/common/composerUtils.js'
        || entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerContextServiceTypes.js'),
    composerThirdRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerModelFilters.js'),
    composerFourthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerFileChangeHandlerTypes.js'),
    composerFifthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerChatServiceInterface.js'),
    composerSixthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/utils/debugLogFileUtils.js'),
    composerSeventhRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerBlobStore.js'),
    composerEighthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/browserViewStore.js'),
    composerNinthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/capabilities/serializeToolformerBubbleData.js'),
    composerTenthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/worktreeGate.js'),
    composerEleventhRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerDataCreation.js'),
    composerTwelfthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/browserAnalytics.js'),
    composerThirteenthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerAgent.js'),
    composerFourteenthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/browserTabId.js'),
    composerFifteenthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/bubbleComposerDataHandle.js'),
    composerSixteenthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js'),
    composerSeventeenthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerContextKeys.js'),
    composerEighteenthBlockedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/worktreeSetupRunner.js'),
    composerNineteenthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/asyncOperationRegistry.js'),
    composerTwentiethRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerStorageService.js'),
    composerTwentyfirstBlockedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerTextModelService.js'),
    composerTwentysecondRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/browserScreenshotService.js'),
    composerTwentythirdRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerMultiDiffContentProvider.js'),
    composerTwentyfourthRemovedFromQueue:
      Array.isArray(byLane.get('contrib-composer')?.noOpQueue)
      && !byLane.get('contrib-composer').noOpQueue.some((entry) =>
        entry.id === 'out-build/vs/workbench/contrib/composer/browser/composerWakelockManager.js'),
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
