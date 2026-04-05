#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-browser-admission.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function main() {
  const report = {
    generatedAt: new Date().toISOString(),
    lane: 'browser',
    candidate: {
      waveId: 'DBR1',
      moduleId: 'out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
      sourceFile: 'rebuilt/src/project-modules-beautified/out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
      runtimeInputFile: 'recovered/startup-loader/input/out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js',
      rationale: 'hook-level browser candidate with no direct DOM template surface in recovered file tree',
    },
    comparison: {
      saferThan: [
        'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
        'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
      ],
      deferredBrowserModules: [
        'out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesFindWidget.js',
        'out-build/vs/workbench/contrib/reviewChanges/browser/diffCommentViewZoneManager.js',
        'out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js',
      ],
    },
    decision: {
      admissionReady: true,
      nextAction: 'browser-dedicated-no-op-runtime',
      liveStillBlocked: true,
    },
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
}

main();
