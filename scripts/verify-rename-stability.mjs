#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import * as vm from 'node:vm';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const CLUSTERS = {
  'composer-pilot': {
    reportPath: 'mapped/thalamus-rename-composer-pilot.json',
    expectations: [
      {
        file: 'recovered/candidate-source-deep/cursor-modules/vs/workbench/contrib/composer/browser/composerDecisionsService.js',
        requiredIncludes: [
          'commandSchema.parse(',
          'fileDiffSchema.parse(',
          'filePathSchema.parse(',
          'toolCallSchema.parse(',
          'composerDecisionsServiceToken',
        ],
        forbiddenIncludes: [
          'TSf.parse(',
          'xSf.parse(',
          'ISf.parse(',
          'DSf.parse(',
          'IComposerDecisionsService',
        ],
      },
      {
        file: 'recovered/candidate-source-deep/cursor-modules/vs/workbench/contrib/composer/browser/naiveComposerAgentProvider.js',
        requiredIncludes: [
          'composerDecisionsServiceToken',
          'x.get(composerDecisionsServiceToken).handleApprovalRequest',
        ],
        forbiddenIncludes: [
          'x.get(Kkt).handleApprovalRequest',
        ],
      },
    ],
  },
  'composer-core-names': {
    reportPath: 'mapped/thalamus-rename-composer-core-names.json',
    expectations: [
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerStorageService.js',
        requiredIncludes: [
          'composerStorageServiceToken = xi("composerStorageService")',
          'Vi(composerStorageServiceToken, ComposerStorageService, 0)',
        ],
        forbiddenIncludes: [
          'IComposerStorageService = xi("composerStorageService")',
        ],
      },
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerTextModelService.js',
        requiredIncludes: [
          'composerTextModelServiceToken = xi("composerTextModelService")',
          'Vi(composerTextModelServiceToken, ComposerTextModelService, 1)',
        ],
        forbiddenIncludes: [
          'IComposerTextModelService = xi("composerTextModelService")',
        ],
      },
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerContextKeys.js',
        requiredIncludes: [
          'composerBarIsVisibleContextKey = new Sn("composerBarIsVisible", false)',
          'isComposerProjectsEnabledContextKey = new Sn("isComposerProjectsEnabled", true)',
          'browserEditorActiveContextKey = new Sn("browserEditorActive", false)',
        ],
        forbiddenIncludes: [
          'NSf = new Sn("composerBarIsVisible", false)',
          'USf = new Sn("browserEditorActive", false)',
        ],
      },
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js',
        requiredIncludes: [
          'ComposerAgentProviderRouter = class {',
        ],
        forbiddenIncludes: [
          'LSf = class {',
        ],
      },
    ],
  },
  'composer-plan-tokens': {
    reportPath: 'mapped/thalamus-rename-composer-plan-tokens.json',
    expectations: [
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerUtilsService.js',
        requiredIncludes: [
          'composerPlanServiceToken = xi("composerPlanService")',
          'f.get(composerPlanServiceToken)).dereferencePlansCreatedByDeletedBubbles',
        ],
        forbiddenIncludes: [
          'IComposerPlanService = xi("composerPlanService")',
          'f.get(IComposerPlanService)).dereferencePlansCreatedByDeletedBubbles',
        ],
      },
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/services/composerPlanService.js',
        requiredIncludes: [
          'composerPlanServiceToken = xi("composerPlanService")',
        ],
        forbiddenIncludes: [
          'IComposerPlanService = xi("composerPlanService")',
        ],
      },
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/services/planStorageService.js',
        requiredIncludes: [
          'planStorageServiceToken = xi("planStorageService")',
        ],
        forbiddenIncludes: [
          'IPlanStorageService = xi("planStorageService")',
        ],
      },
    ],
  },
  'unified-app-layout-context-keys': {
    reportPath: 'mapped/thalamus-rename-unified-app-layout-context-keys.json',
    expectations: [
      {
        file: 'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/appLayout/common/unifiedAppLayoutContextKeys.js',
        requiredIncludes: [
          'agentIdeUnificationEnabledKey = "cursor.agentIdeUnification.enabled"',
          'agentIdeUnificationEnabledContextKey = new Sn(agentIdeUnificationEnabledKey, false, "Whether the agent ide unification is enabled")',
          'unifiedSidebarVisibleKey = "cursor.agentIdeUnification.unifiedSidebarVisible"',
          'unifiedSidebarVisibleContextKey = new Sn(unifiedSidebarVisibleKey, false, "Whether the unified sidebar is visible")',
          'agentsSurfaceVisibleKey = "cursor.agentIdeUnification.agentsSurfaceVisible"',
          'agentsSurfaceVisibleContextKey = new Sn(agentsSurfaceVisibleKey, false, "Whether any agents surface is visible")',
          'onboardingShowingKey = "cursor.onboarding.showing"',
          'onboardingShowingContextKey = new Sn(onboardingShowingKey, false, "Whether the onboarding UI is currently being displayed")',
        ],
        forbiddenIncludes: [
          '$F = "cursor.agentIdeUnification.enabled"',
          '_fa = new Sn($F, false, "Whether the agent ide unification is enabled")',
          'sru = "cursor.agentIdeUnification.unifiedSidebarVisible"',
          'Dvi = new Sn(sru, false, "Whether the unified sidebar is visible")',
          'zHg = "cursor.agentIdeUnification.agentsSurfaceVisible"',
          'MSt = new Sn(zHg, false, "Whether any agents surface is visible")',
          'omn = "cursor.onboarding.showing"',
          'O2A = new Sn(omn, false, "Whether the onboarding UI is currently being displayed")',
        ],
      },
    ],
  },
};

function parseArgs(argv) {
  let clusterName = 'composer-pilot';
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--cluster') {
      i += 1;
      if (i >= argv.length) {
        throw new Error('--cluster requires a value');
      }
      clusterName = argv[i];
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }
  const cluster = CLUSTERS[clusterName];
  if (!cluster) {
    throw new Error(`Unknown cluster: ${clusterName}`);
  }
  return { clusterName, cluster };
}

function parseWithAcorn(code) {
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowAwaitOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
    });
    return { ok: true, error: null };
  } catch (error) {
    return {
      ok: false,
      error: `${error.message}${error.loc?.line ? ` at line ${error.loc.line}` : ''}`,
    };
  }
}

function parseWithVm(code, filename) {
  try {
    new vm.Script(code, { filename });
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function main() {
  const { clusterName, cluster } = parseArgs(process.argv.slice(2));
  const reportPath = path.join(ROOT, cluster.reportPath);
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

  const results = cluster.expectations.map(expectation => {
    const absolutePath = path.join(ROOT, expectation.file);
    const code = fs.readFileSync(absolutePath, 'utf8');
    const acornResult = parseWithAcorn(code);
    const vmResult = parseWithVm(code, path.basename(absolutePath));
    const missing = expectation.requiredIncludes.filter(pattern => !code.includes(pattern));
    const forbidden = expectation.forbiddenIncludes.filter(pattern => code.includes(pattern));

    return {
      file: expectation.file,
      parse: {
        acornParseable: acornResult.ok,
        acornError: acornResult.error,
        vmScriptParseable: vmResult.ok,
        vmError: vmResult.error,
      },
      missingRequiredPatterns: missing,
      forbiddenPatternHits: forbidden,
      passed:
        acornResult.ok &&
        vmResult.ok &&
        missing.length === 0 &&
        forbidden.length === 0,
    };
  });

  const conflicts = report.results.flatMap(result =>
    result.conflicts.map(conflict => ({
      file: result.output,
      ...conflict,
    }))
  );

  const output = {
    generatedAt: new Date().toISOString(),
    cluster: clusterName,
    reportPath: cluster.reportPath,
    fileCount: results.length,
    passedCount: results.filter(result => result.passed).length,
    renameConflictCount: conflicts.length,
    results,
    conflicts,
  };

  const outputPath = path.join(ROOT, 'mapped', `${clusterName}-rename-stability.json`);
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  for (const result of results) {
    const icon = result.passed ? '✓' : '✗';
    console.log(
      `${icon} ${result.file}: acorn=${result.parse.acornParseable} vm=${result.parse.vmScriptParseable} missing=${result.missingRequiredPatterns.length} forbidden=${result.forbiddenPatternHits.length}`
    );
  }
  console.log(`Conflicts: ${conflicts.length}`);
  console.log(`Result: ${path.relative(ROOT, outputPath)}`);

  if (results.some(result => !result.passed) || conflicts.length > 0) {
    process.exitCode = 1;
  }
}

main();
