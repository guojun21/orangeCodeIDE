#!/usr/bin/env node

import path from 'path';
import { spawn } from 'child_process';
import { ROOT } from './paths.mjs';

const child = spawn(
  process.execPath,
  [path.join(ROOT, 'scripts', 'run-rebuilt-dev.mjs'), ...process.argv.slice(2)],
  {
    cwd: ROOT,
    stdio: 'inherit',
  }
);

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});
