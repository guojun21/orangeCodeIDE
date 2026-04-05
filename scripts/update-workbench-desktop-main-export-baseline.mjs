#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const SPIKE_CHECK_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-spike-check.json');
const BASELINE_PATH = path.join(ROOT, 'mapped', 'workbench-desktop-main-export-baseline.json');

function uniqueSorted(values) {
  return [...new Set((values ?? []).filter((value) => typeof value === 'string'))].sort();
}

if (!fs.existsSync(SPIKE_CHECK_PATH)) {
  throw new Error(`Missing spike check result: ${SPIKE_CHECK_PATH}`);
}

const spike = JSON.parse(fs.readFileSync(SPIKE_CHECK_PATH, 'utf8'));
const marker = (spike.checks ?? []).find((entry) => entry.id === 'marker-visible')?.detail ?? {};
const exportKeys = uniqueSorted(marker.originalExportKeys);

if (exportKeys.length === 0) {
  throw new Error('No originalExportKeys found in workbench desktop main spike marker');
}

const payload = {
  generatedAt: new Date().toISOString(),
  source: 'workbench-desktop-main-spike',
  sourceFile: SPIKE_CHECK_PATH,
  keyCount: exportKeys.length,
  exportKeys,
};

fs.writeFileSync(BASELINE_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(BASELINE_PATH);
