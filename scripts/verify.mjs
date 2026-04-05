#!/usr/bin/env node

import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const result = spawnSync(
  process.execPath,
  [path.join(ROOT, 'scripts', 'run-rebuilt-checks.mjs'), ...process.argv.slice(2)],
  {
    cwd: ROOT,
    stdio: 'inherit',
  }
);

process.exit(result.status ?? 1);
