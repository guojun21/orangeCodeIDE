#!/usr/bin/env node

import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from '../scripts/paths.mjs';

for (const scriptName of ['run-smoke.mjs', 'run-agent.mjs']) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'test', scriptName)], {
    cwd: ROOT,
    stdio: 'inherit',
  });
  if ((result.status ?? 1) !== 0) {
    process.exit(result.status ?? 1);
  }
}

process.exit(0);
