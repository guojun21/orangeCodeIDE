#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-resource-admission.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function main() {
  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'contrib-reviewChanges',
    candidate: {
      waveId: 'DRR1',
      moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
      sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
      runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/ReviewChangesResource.js',
    },
    riskSignals: {
      skeletonAndResourceDualClass: true,
      textModelDisposables: true,
      registerTextModelContentProvider: true,
      createModelReference: true,
      changeContentListeners: true,
      diffLineCountComputation: true,
      commentsStateStore: true,
      commentRendererFactory: true,
      hydrateOnConstruct: true,
      companionToManagerLane: true,
    },
    decision: {
      admissionReady: true,
      nextAction: 'dedicated-no-op-runtime',
      browserStillHeld: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
