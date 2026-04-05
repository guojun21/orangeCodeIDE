#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import * as vm from 'node:vm';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'startup-source-tree-registry.json');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'startup-source-tree-verify.json');
const TARGET_PREFIX = 'rebuilt/src/vs/workbench/recovered-modules/';
const TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'vs', 'workbench', 'recovered-modules');
const MIN_LINE_COUNT = 20;
const MAX_LONGEST_LINE = 5000;

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  let registryPath = DEFAULT_REGISTRY;
  let outputPath = DEFAULT_OUTPUT;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--registry') {
      i += 1;
      registryPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    if (arg === '--output') {
      i += 1;
      outputPath = path.isAbsolute(argv[i]) ? argv[i] : path.join(ROOT, argv[i]);
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return { registryPath, outputPath };
}

function parseWithAcorn(code) {
  try {
    parse(code, {
      ecmaVersion: 'latest',
      sourceType: 'module',
      allowAwaitOutsideFunction: true,
      allowImportExportEverywhere: true,
      allowReturnOutsideFunction: true,
    });
    return { ok: true, error: null };
  } catch (error) {
    return {
      ok: false,
      error: `${error.message}${error.loc?.line ? ` at line ${error.loc.line}` : ''}`,
    };
  }
}

function parseWithVm(code, filename) {
  try {
    new vm.Script(code, { filename });
    return { ok: true, error: null };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function inspectEntry(entry) {
  if (entry.status === 'skipped-original' || entry.status === 'skipped-non-workbench') {
    return {
      ...entry,
      checks: {
        expectedSkip: true,
      },
      passed: true,
      skipped: true,
      failedChecks: [],
    };
  }

  const targetPath = path.join(ROOT, entry.targetFile);
  const sourcePath = entry.sourceFile ? path.join(ROOT, entry.sourceFile) : null;
  const targetExists = fs.existsSync(targetPath);
  const sourceExists = sourcePath ? fs.existsSync(sourcePath) : false;
  const underRecoveredModulesRoot = normalizePath(path.relative(ROOT, targetPath)).startsWith(TARGET_PREFIX);

  let lineCount = 0;
  let longestLine = 0;
  let acorn = { ok: false, error: 'missing target' };
  let vmResult = { ok: false, error: 'missing target' };
  let noAeWrapper = false;

  if (targetExists) {
    const code = fs.readFileSync(targetPath, 'utf8').replace(/^\uFEFF/, '');
    const lines = code.split(/\r?\n/);
    lineCount = lines.length;
    longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
    acorn = parseWithAcorn(code);
    vmResult = parseWithVm(code, path.basename(targetPath));
    noAeWrapper = !code.trimStart().startsWith('Ae({');
  }

  const checks = {
    sourceExists,
    targetExists,
    underRecoveredModulesRoot,
    acornParseable: acorn.ok,
    vmScriptParseable: vmResult.ok,
    lineCountOk: lineCount >= MIN_LINE_COUNT,
    longestLineOk: longestLine < MAX_LONGEST_LINE,
    noAeWrapper,
  };
  const hardCheckKeys = [
    'sourceExists',
    'targetExists',
    'underRecoveredModulesRoot',
    'acornParseable',
    'vmScriptParseable',
    'noAeWrapper',
  ];
  const failedChecks = hardCheckKeys
    .filter((name) => !checks[name])
    .map((name) => name);

  return {
    ...entry,
    lineCount,
    longestLine,
    checks,
    parse: {
      acornParseable: acorn.ok,
      acornError: acorn.error,
      vmScriptParseable: vmResult.ok,
      vmError: vmResult.error,
    },
    passed: failedChecks.length === 0,
    skipped: false,
    failedChecks,
  };
}

function main() {
  const { registryPath, outputPath } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const results = (registry.results || []).map(inspectEntry);
  const checked = results.filter((entry) => !entry.skipped);
  const passedCount = checked.filter((entry) => entry.passed).length;
  const skippedCount = results.filter((entry) => entry.skipped).length;

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    targetRoot: normalizePath(path.relative(ROOT, TARGET_ROOT)),
    fileCount: results.length,
    checkedCount: checked.length,
    passedCount,
    skippedCount,
    failedCount: checked.length - passedCount,
    results,
  };

  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Startup source tree verify: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Passed: ${passedCount}/${checked.length}`);
  console.log(`Skipped: ${skippedCount}`);

  if (passedCount !== checked.length) {
    process.exitCode = 1;
  }
}

main();
