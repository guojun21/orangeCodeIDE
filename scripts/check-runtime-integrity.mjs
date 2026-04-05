#!/usr/bin/env node

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

import { ROOT } from './paths.mjs';
const MANIFEST_PATH = path.join(ROOT, 'recovered', 'phase2', 'core-entrypoints', 'manifest.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-integrity-check.json');

function sha256(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
const rawTargets = manifest.rawTargets ?? [];

const checks = rawTargets.map((relativePath) => {
  const referencePath = path.join(ROOT, 'raw', 'phase2', 'core-entrypoints', relativePath);
  const currentPath = path.join(ROOT, relativePath);
  const referenceExists = fs.existsSync(referencePath);
  const currentExists = fs.existsSync(currentPath);
  const referenceHash = referenceExists ? sha256(referencePath) : null;
  const currentHash = currentExists ? sha256(currentPath) : null;

  return {
    relativePath,
    referencePath,
    currentPath,
    referenceExists,
    currentExists,
    matches: referenceExists && currentExists && referenceHash === currentHash,
    referenceHash,
    currentHash,
  };
});

const result = {
  generatedAt: new Date().toISOString(),
  allMatch: checks.every((entry) => entry.matches),
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
