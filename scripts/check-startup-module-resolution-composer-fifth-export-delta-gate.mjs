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
  'composerChatServiceInterface.js',
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
  'composerChatServiceInterface.js',
);
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'startup-module-resolution-composer-fifth-export-delta-gate.json');

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
  const topLevelCalls = [...normalizedBody.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(/g)].map((match) => match[1]);

  return {
    normalizedBody,
    bodyHash,
    byteLength: Buffer.byteLength(normalizedBody, 'utf8'),
    topLevelCalls: [...new Set(topLevelCalls)],
  };
}

function main() {
  const sourceSummary = summarizeSource(readText(SOURCE_PATH));
  const inputSummary = summarizeSource(readText(INPUT_PATH));

  const checks = {
    bodyHashMatches: sourceSummary.bodyHash === inputSummary.bodyHash,
    normalizedBodyMatches: sourceSummary.normalizedBody === inputSummary.normalizedBody,
    byteLengthMatches: sourceSummary.byteLength === inputSummary.byteLength,
    topLevelCallsMatch: JSON.stringify(sourceSummary.topLevelCalls) === JSON.stringify(inputSummary.topLevelCalls),
    assignmentShapePinned:
      sourceSummary.normalizedBody === '_r(); Wt(); wM = xi("composerChatService");'
      && inputSummary.normalizedBody === '_r(); Wt(); wM = xi("composerChatService");'
      && JSON.stringify(sourceSummary.topLevelCalls) === JSON.stringify(['_r', 'Wt', 'xi'])
      && JSON.stringify(inputSummary.topLevelCalls) === JSON.stringify(['_r', 'Wt', 'xi']),
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
