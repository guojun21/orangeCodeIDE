#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

const INPUTS = {
  runtimeBootstrap: path.join(ROOT, 'mapped', 'bootstrap-runtime-baseline.json'),
  vscodeBootstrap: path.join(ROOT, 'mapped', 'bootstrap-vscode-reference.json'),
  watcherSpike: path.join(ROOT, 'mapped', 'watcher-spike-check.json'),
  workbenchSpike: path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json'),
};

const OUTPUT = path.join(ROOT, 'mapped', 'public-bootstrap-verify.json');

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const runtimeBootstrap = readJson(INPUTS.runtimeBootstrap);
const vscodeBootstrap = readJson(INPUTS.vscodeBootstrap);
const watcherSpike = readJson(INPUTS.watcherSpike);
const workbenchSpike = readJson(INPUTS.workbenchSpike);

const missing = Object.entries(INPUTS)
  .filter(([, filePath]) => !fs.existsSync(filePath))
  .map(([key]) => key);

const passed =
  missing.length === 0 &&
  runtimeBootstrap !== null &&
  vscodeBootstrap !== null &&
  watcherSpike?.passed === true &&
  workbenchSpike?.passed === true;

const result = {
  generatedAt: new Date().toISOString(),
  passed,
  missing,
  steps: {
    runtimeBootstrap: runtimeBootstrap
      ? {
          source: runtimeBootstrap.source ?? null,
          archive: runtimeBootstrap.archive ?? null,
          url: runtimeBootstrap.url ?? null,
        }
      : null,
    vscodeBootstrap: vscodeBootstrap
      ? {
          tag: vscodeBootstrap.tag ?? null,
          sourceUrl: vscodeBootstrap.sourceUrl ?? null,
        }
      : null,
    watcherSpike: watcherSpike
      ? {
          passed: watcherSpike.passed === true,
          generatedAt: watcherSpike.generatedAt ?? null,
        }
      : null,
    workbenchSpike: workbenchSpike
      ? {
          passed: workbenchSpike.passed === true,
          generatedAt: workbenchSpike.generatedAt ?? null,
        }
      : null,
  },
};

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(result, null, 2) + '\n');
console.log(OUTPUT);
