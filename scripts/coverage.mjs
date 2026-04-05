#!/usr/bin/env node

import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const measure = spawnSync(
  process.execPath,
  [path.join(ROOT, 'scripts', 'measure-rebuilt-coverage.mjs'), ...process.argv.slice(2)],
  {
    cwd: ROOT,
    stdio: 'inherit',
  }
);

if ((measure.status ?? 1) !== 0) {
  process.exit(measure.status ?? 1);
}

const gate = spawnSync(
  process.execPath,
  [path.join(ROOT, 'scripts', 'check-rebuilt-coverage-gate.mjs')],
  {
    cwd: ROOT,
    stdio: 'inherit',
  }
);

process.exit(gate.status ?? 1);
