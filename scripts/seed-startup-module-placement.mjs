#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'vs', 'workbench', 'recovered-modules');
const REGISTRY_PATH = path.join(ROOT, 'mapped', 'module-placement-registry.json');

const SEED_MODULES = [
  {
    id: 'app-layout-unification-contexts',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/appLayout/common/unifiedAppLayoutContextKeys.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'layout',
    startupRole: 'context-keys',
  },
  {
    id: 'agents-context-keys',
    sourceFile:
      'recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/agents/common/agentsContextKeys.js',
    sourceTier: 'candidate-source-deep-promoted',
    startupLane: 'agents',
    startupRole: 'context-keys',
  },
  {
    id: 'composer-context-keys',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerContextKeys.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'composer',
    startupRole: 'context-keys',
  },
  {
    id: 'composer-storage-service',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerStorageService.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'composer',
    startupRole: 'service',
  },
  {
    id: 'composer-text-model-service',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerTextModelService.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'composer',
    startupRole: 'service',
  },
  {
    id: 'composer-agent-provider-router',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'composer',
    startupRole: 'routing',
  },
  {
    id: 'composer-utils-service',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/composerUtilsService.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'composer',
    startupRole: 'service',
  },
  {
    id: 'composer-plan-service',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/services/composerPlanService.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'composer',
    startupRole: 'service-token',
  },
  {
    id: 'plan-storage-service',
    sourceFile:
      'recovered/candidate-source-deep-renamed/cursor-modules/vs/workbench/contrib/composer/browser/services/planStorageService.js',
    sourceTier: 'candidate-source-deep-renamed',
    startupLane: 'composer',
    startupRole: 'service-token',
  },
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function toWorkbenchRelative(sourceFile) {
  const normalized = normalizePath(sourceFile);
  const marker = '/vs/workbench/';
  const index = normalized.indexOf(marker);
  if (index === -1) {
    throw new Error(`Cannot derive workbench-relative path from ${sourceFile}`);
  }
  return normalized.slice(index + marker.length);
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function copySeedModule(entry) {
  const sourcePath = path.join(ROOT, entry.sourceFile);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Seed source does not exist: ${entry.sourceFile}`);
  }

  const workbenchRelative = toWorkbenchRelative(entry.sourceFile);
  const targetPath = path.join(TARGET_ROOT, workbenchRelative);
  ensureDir(targetPath);
  fs.copyFileSync(sourcePath, targetPath);

  return {
    id: entry.id,
    sourceFile: normalizePath(path.relative(ROOT, sourcePath)),
    targetFile: normalizePath(path.relative(ROOT, targetPath)),
    sourceTier: entry.sourceTier,
    startupLane: entry.startupLane,
    startupRole: entry.startupRole,
    moduleRuntimePath: `out-build/vs/workbench/${workbenchRelative}`,
    workbenchRelativePath: workbenchRelative,
    status: 'placed',
  };
}

function main() {
  fs.mkdirSync(TARGET_ROOT, { recursive: true });

  const placements = SEED_MODULES.map(copySeedModule);
  const registry = {
    generatedAt: new Date().toISOString(),
    targetRoot: normalizePath(path.relative(ROOT, TARGET_ROOT)),
    placementCount: placements.length,
    startupLanes: [...new Set(placements.map(item => item.startupLane))].sort(),
    sourceTiers: [...new Set(placements.map(item => item.sourceTier))].sort(),
    placements,
  };

  fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2));

  console.log(`Startup placement seeded: ${normalizePath(path.relative(ROOT, REGISTRY_PATH))}`);
  console.log(`Placed modules: ${placements.length}`);
}

main();
