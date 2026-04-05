#!/usr/bin/env node

import { spawnSync } from 'child_process';
import path from 'path';
import { ROOT } from '../scripts/paths.mjs';

const result = spawnSync(process.execPath, [
  '--test',
  '--test-force-exit',
  '--test-concurrency=1',
  path.join(ROOT, 'test', 'agent', 'bootstrap.test.mjs'),
], {
  cwd: ROOT,
  stdio: 'inherit',
});

process.exit(result.status ?? 1);
