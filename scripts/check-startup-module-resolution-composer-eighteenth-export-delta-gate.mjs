#!/usr/bin/env node

import crypto from 'node:crypto';
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
  'composer',
  'browser',
  'composerDataCreation.js',
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
  'composer',
  'browser',
  'composerDataCreation.js',
);
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-eighteenth-export-delta-gate.json');

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function normalizeModuleBody(source) {
  return source
    .replace(/^"use strict";\s*/m, '')
    .replace(/^\/\/ Module:.*$/gm, '')
    .replace(/^\/\/ Offset:.*$/gm, '')
    .replace(/^\/\/ Size:.*$/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function summarizeSource(source) {
  const normalizedBody = normalizeModuleBody(source);
  const bodyHash = crypto.createHash('sha256').update(normalizedBody).digest('hex');
  return {
    normalizedBody,
    bodyHash,
    byteLength: Buffer.byteLength(normalizedBody, 'utf8'),
  };
}

function main() {
  const sourceSummary = summarizeSource(readText(SOURCE_PATH));
  const inputSummary = summarizeSource(readText(INPUT_PATH));
  const expectedNormalizedBody = 't8(); gT(); Ka(); Jk(); u5t(); cv(); Uv(); Vg(); qp(); Ql(); Yn(); Bc(); M4(); Q9(); gE(); Q0(); _Ng(); jk(); oNA(); of(); KS(); iMg = false; Ibi = n => JSON.stringify(lSt(n));';

  const checks = {
    bodyHashMatches: sourceSummary.bodyHash === inputSummary.bodyHash,
    normalizedBodyMatches: sourceSummary.normalizedBody === inputSummary.normalizedBody,
    byteLengthMatches: sourceSummary.byteLength === inputSummary.byteLength,
    moduleShapePinned:
      sourceSummary.normalizedBody === expectedNormalizedBody
      && inputSummary.normalizedBody === expectedNormalizedBody,
  };

  const failedChecks = Object.entries(checks)
    .filter(([, passed]) => !passed)
    .map(([name]) => name);

  const report = {
    generatedAt: new Date().toISOString(),
    sourcePath: normalizePath(path.relative(ROOT, SOURCE_PATH)),
    inputPath: normalizePath(path.relative(ROOT, INPUT_PATH)),
    sourceSummary,
    inputSummary,
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
