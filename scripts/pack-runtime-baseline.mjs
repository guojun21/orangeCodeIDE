#!/usr/bin/env node

import fs from 'fs';
import os from 'os';
import path from 'path';
import { spawnSync } from 'child_process';
import { ROOT } from './paths.mjs';

const REQUIRED_RUNTIME_ITEMS = [
  'bin',
  'extensions',
  'node_modules',
  'node_modules.asar',
  'out',
  'policies',
  'product.json',
  'resources',
  'LICENSE.txt',
  'ThirdPartyNotices.txt',
];

function parseArgs(argv) {
  const args = {
    output: path.join(ROOT, 'dist', 'orangeCodeIDE-runtime-baseline.tar.gz'),
    sourceRoot: ROOT,
  };
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--output') {
      args.output = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (token === '--source-root') {
      args.sourceRoot = fs.realpathSync(path.resolve(argv[index + 1]));
      index += 1;
    }
  }
  return args;
}

const args = parseArgs(process.argv);

for (const relativePath of REQUIRED_RUNTIME_ITEMS) {
  if (!fs.existsSync(path.join(args.sourceRoot, relativePath))) {
    throw new Error(`Missing runtime input for packaging from ${args.sourceRoot}: ${relativePath}`);
  }
}

fs.mkdirSync(path.dirname(args.output), { recursive: true });
const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'orangecodeide-runtime-pack-'));
const stagingRoot = path.join(tmpRoot, 'payload');
fs.mkdirSync(stagingRoot, { recursive: true });

for (const relativePath of REQUIRED_RUNTIME_ITEMS) {
  const sourcePath = path.join(args.sourceRoot, relativePath);
  const targetPath = path.join(stagingRoot, relativePath);
  const stat = fs.statSync(sourcePath);
  if (stat.isDirectory()) {
    fs.cpSync(sourcePath, targetPath, { recursive: true, force: true, dereference: true });
  } else {
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(sourcePath, targetPath);
  }
}

const tar = spawnSync('tar', ['-czf', args.output, '-C', stagingRoot, '.'], {
  stdio: 'inherit',
});
if (tar.status !== 0) {
  throw new Error(`tar creation failed with exit code ${tar.status ?? 1}`);
}

const stats = fs.statSync(args.output);
const manifestPath = path.join(ROOT, 'mapped', 'packed-runtime-baseline.json');
fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(
  manifestPath,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      sourceRoot: args.sourceRoot,
      output: args.output,
      bytes: stats.size,
      requiredRuntimeItems: REQUIRED_RUNTIME_ITEMS,
    },
    null,
    2
  ) + '\n'
);

console.log(args.output);
