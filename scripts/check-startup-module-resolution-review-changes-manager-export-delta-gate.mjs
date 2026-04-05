#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const SOURCE_PATH = path.join(
  ROOT,
  'rebuilt',
  'src',
  'project-modules-beautified',
  'out-build',
  'vs',
  'workbench',
  'contrib',
  'reviewChanges',
  'browser',
  'ReviewChangesResourceManager.js',
);
const INPUT_PATH = path.join(
  ROOT,
  'recovered',
  'startup-loader',
  'input',
  'out-build',
  'vs',
  'workbench',
  'contrib',
  'reviewChanges',
  'browser',
  'ReviewChangesResourceManager.js',
);
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-review-changes-manager-export-delta-gate.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function surfaceSignature(source) {
  const topLevelClassMatch = source.match(/([A-Za-z_$][\w$]*)\s*=\s*class\b/);
  const methods = [...source.matchAll(/^\s{2}(?:get\s+)?([A-Za-z_$][\w$]*)\(/gm)].map((match) => match[1]);
  const constructorPresent = /\n\s{2}constructor\(/.test(source);
  const fieldSignals = [
    '_resourcesObservable',
    '_currentResources',
    '_resourcesMap',
    'resources',
    'contextKeys',
  ].filter((token) => source.includes(token));

  return {
    topLevelClassName: topLevelClassMatch?.[1] ?? null,
    constructorPresent,
    methods: [...new Set(methods)].sort(),
    fieldSignals,
  };
}

function main() {
  const sourceSig = surfaceSignature(readText(SOURCE_PATH));
  const inputSig = surfaceSignature(readText(INPUT_PATH));
  const checks = {
    topLevelClassNameMatches: sourceSig.topLevelClassName === inputSig.topLevelClassName,
    constructorPresenceMatches: sourceSig.constructorPresent === inputSig.constructorPresent,
    methodsMatch: JSON.stringify(sourceSig.methods) === JSON.stringify(inputSig.methods),
    fieldSignalsMatch: JSON.stringify(sourceSig.fieldSignals) === JSON.stringify(inputSig.fieldSignals),
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const report = {
    generatedAt: new Date().toISOString(),
    sourcePath: normalizePath(path.relative(ROOT, SOURCE_PATH)),
    inputPath: normalizePath(path.relative(ROOT, INPUT_PATH)),
    sourceSignature: sourceSig,
    inputSignature: inputSig,
    checks,
    failedChecks,
    passed: failedChecks.length === 0,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  console.log(normalizePath(path.relative(ROOT, OUTPUT_PATH)));
  console.log(`Passed: ${report.passed}`);
  if (!report.passed) {
    process.exitCode = 1;
  }
}

main();
