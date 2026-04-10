#!/usr/bin/env node

import path from 'path';
import { pathToFileURL } from 'url';
import { app } from 'electron';

function resolveRuntimeRoot() {
  const runtimeRoot = process.env.SHOPEECODE_REBUILT_RUNTIME_ROOT;
  if (!runtimeRoot) {
    throw new Error('Missing SHOPEECODE_REBUILT_RUNTIME_ROOT');
  }

  return path.isAbsolute(runtimeRoot)
    ? runtimeRoot
    : path.resolve(process.cwd(), runtimeRoot);
}

const runtimeRoot = resolveRuntimeRoot();
const runtimeMainPath = path.join(runtimeRoot, 'out', 'main.js');

app.setAppPath(runtimeRoot);
process.chdir(runtimeRoot);

// Electron includes the launcher script path in argv[1]. Strip it so the
// underlying Cursor/VS Code CLI parser only sees the real app arguments.
process.argv = [process.argv[0], ...process.argv.slice(2)];

globalThis.__SHOPEECODE_ELECTRON_RUNTIME_LAUNCHER__ = {
  source: 'scripts/electron-runtime-launcher.mjs',
  runtimeRoot,
  runtimeMainPath,
  argv: process.argv.slice(1),
};

await import(pathToFileURL(runtimeMainPath).href);
