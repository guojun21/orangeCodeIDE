#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import * as vm from 'node:vm';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const DEFAULT_REGISTRY = path.join(ROOT, 'mapped', 'module-placement-registry.json');
const DEFAULT_OUTPUT = path.join(ROOT, 'mapped', 'module-placement-verify.json');
const MIN_LINE_COUNT = 20;
const MAX_LONGEST_LINE = 5000;
const TARGET_ROOT = path.join(ROOT, 'rebuilt', 'src', 'vs', 'workbench', 'recovered-modules');

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

function inspectPlacement(entry) {
  const targetPath = path.join(ROOT, entry.targetFile);
  const sourcePath = path.join(ROOT, entry.sourceFile);
  const targetExists = fs.existsSync(targetPath);
  const sourceExists = fs.existsSync(sourcePath);

  let lineCount = 0;
  let longestLine = 0;
  let acorn = { ok: false, error: 'missing target' };
  let runtimeSuffixMatches = false;
  let underRecoveredModulesRoot = false;
  let noAeWrapper = false;

  if (targetExists) {
    const code = fs.readFileSync(targetPath, 'utf8').replace(/^\uFEFF/, '');
    const lines = code.split(/\r?\n/);
    lineCount = lines.length;
    longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
    acorn = parseWithAcorn(code);
    const vmResult = parseWithVm(code, path.basename(targetPath));
    const targetRelative = normalizePath(path.relative(TARGET_ROOT, targetPath));
    const expectedRelative = entry.moduleRuntimePath.replace(/^out-build\/vs\/workbench\//, '');
    runtimeSuffixMatches = targetRelative === expectedRelative;
    underRecoveredModulesRoot = normalizePath(path.relative(ROOT, targetPath)).startsWith(
      'rebuilt/src/vs/workbench/recovered-modules/'
    );
    noAeWrapper = !code.trimStart().startsWith('Ae({');

    const checks = {
      sourceExists,
      targetExists,
      acornParseable: acorn.ok,
      vmScriptParseable: vmResult.ok,
      lineCountOk: lineCount >= MIN_LINE_COUNT,
      longestLineOk: longestLine < MAX_LONGEST_LINE,
      noAeWrapper,
      runtimeSuffixMatches,
      underRecoveredModulesRoot,
    };

    const failedChecks = Object.entries(checks)
      .filter(([, passed]) => !passed)
      .map(([name]) => name);

    return {
      id: entry.id,
      sourceFile: entry.sourceFile,
      targetFile: entry.targetFile,
      moduleRuntimePath: entry.moduleRuntimePath,
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
      failedChecks,
    };
  }

  return {
    id: entry.id,
    sourceFile: entry.sourceFile,
    targetFile: entry.targetFile,
    moduleRuntimePath: entry.moduleRuntimePath,
    lineCount,
    longestLine,
    checks: {
      sourceExists,
      targetExists,
      acornParseable: false,
      vmScriptParseable: false,
      lineCountOk: false,
      longestLineOk: false,
      noAeWrapper,
      runtimeSuffixMatches,
      underRecoveredModulesRoot,
    },
    parse: {
      acornParseable: false,
      acornError: acorn.error,
      vmScriptParseable: false,
      vmError: 'missing target',
    },
    passed: false,
    failedChecks: [
      ...(sourceExists ? [] : ['sourceExists']),
      'targetExists',
      'acornParseable',
      'vmScriptParseable',
      'lineCountOk',
      'longestLineOk',
      'runtimeSuffixMatches',
      'underRecoveredModulesRoot',
    ],
  };
}

function main() {
  const { registryPath, outputPath } = parseArgs(process.argv.slice(2));
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const results = registry.placements.map(inspectPlacement);
  const passedCount = results.filter(item => item.passed).length;

  const report = {
    generatedAt: new Date().toISOString(),
    registryPath: normalizePath(path.relative(ROOT, registryPath)),
    targetRoot: normalizePath(path.relative(ROOT, TARGET_ROOT)),
    fileCount: results.length,
    passedCount,
    failedCount: results.length - passedCount,
    results,
  };

  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

  console.log(`Module placement verify: ${normalizePath(path.relative(ROOT, outputPath))}`);
  console.log(`Passed: ${passedCount}/${results.length}`);

  if (passedCount !== results.length) {
    process.exitCode = 1;
  }
}

main();
