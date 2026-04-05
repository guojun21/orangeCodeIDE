#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const PROBE_PATH = path.join(ROOT, 'mapped', 'rebuilt-runtime-probe.json');

if (!fs.existsSync(PROBE_PATH)) {
  throw new Error(`Probe result missing: ${PROBE_PATH}`);
}

const probe = JSON.parse(fs.readFileSync(PROBE_PATH, 'utf8'));
const runtime = probe.runtime ?? {};

const checks = [
  ['renderer readyState complete', runtime.readyState === 'complete'],
  ['monaco workbench present', runtime.hasWorkbench === true],
  ['workbench rebuilt marker present', !!runtime.workbenchBadgeMarker],
  ['preload bridge info present', !!runtime.preloadBridgeInfo],
  ['preload runtime source active', runtime.preloadBridgeInfo?.source === 'rebuilt/src/vs/base/parts/sandbox/electron-sandbox/preload/runtime'],
  ['status panel marker present', !!runtime.statusPanelMarker],
  ['badge DOM node present', runtime.badgeNode === true],
  ['status panel DOM node present', runtime.statusPanelNode === true],
];

const failures = checks.filter(([, passed]) => !passed).map(([label]) => label);

if (failures.length > 0) {
  console.error('Rebuilt runtime assertions failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('rebuilt runtime assertions passed');
