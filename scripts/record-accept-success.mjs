#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { ROOT } from './paths.mjs';

const OUTPUT_PATH = path.join(ROOT, 'mapped', 'accept-latest.json');

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function resolveHead() {
  try {
    return execSync('git rev-parse --short HEAD', { cwd: ROOT, encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

const verify = readJson(path.join(ROOT, 'mapped', 'rebuilt-headless-verify.json'));
const payload = {
  generatedAt: new Date().toISOString(),
  gitHead: resolveHead(),
  verifyPath: path.join(ROOT, 'mapped', 'rebuilt-headless-verify.json'),
  verifyGeneratedAt: verify?.generatedAt ?? null,
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2) + '\n');
console.log(OUTPUT_PATH);
