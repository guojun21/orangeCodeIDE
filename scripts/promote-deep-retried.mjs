#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULTS = {
  reportPath: 'mapped/recovery-quality-candidate-source-deep-retried.json',
  inputDir: 'recovered/candidate-source-deep-retried/cursor-modules',
  outputDir: 'recovered/candidate-source-deep-retried-promoted/cursor-modules',
  resultPath: 'mapped/deep-retried-promotion.json',
};

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function parseArgs(argv) {
  const options = { ...DEFAULTS };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--report') {
      i += 1;
      options.reportPath = argv[i];
      continue;
    }
    if (arg === '--input-dir') {
      i += 1;
      options.inputDir = argv[i];
      continue;
    }
    if (arg === '--output-dir') {
      i += 1;
      options.outputDir = argv[i];
      continue;
    }
    if (arg === '--result') {
      i += 1;
      options.resultPath = argv[i];
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }
  return {
    reportPath: path.join(ROOT, options.reportPath),
    inputDir: path.join(ROOT, options.inputDir),
    outputDir: path.join(ROOT, options.outputDir),
    resultPath: path.join(ROOT, options.resultPath),
  };
}

function main() {
  const { reportPath, inputDir, outputDir, resultPath } = parseArgs(process.argv.slice(2));
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const failed = new Set(report.failedFiles.map(item => item.file));
  const passedFiles = [];

  fs.rmSync(outputDir, { recursive: true, force: true });
  fs.mkdirSync(outputDir, { recursive: true });

  for (const directory of report.directories) {
    const resolvedDir = path.join(ROOT, directory.resolvedPath);
    if (!fs.existsSync(resolvedDir)) {
      continue;
    }
    const stack = [resolvedDir];
    while (stack.length > 0) {
      const current = stack.pop();
      for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
        const entryPath = path.join(current, entry.name);
        if (entry.isDirectory()) {
          stack.push(entryPath);
          continue;
        }
        if (!entry.isFile() || !entry.name.endsWith('.js')) {
          continue;
        }
        const relativeFile = normalizePath(path.relative(ROOT, entryPath));
        if (failed.has(relativeFile)) {
          continue;
        }
        const relativeToInput = path.relative(inputDir, entryPath);
        const outputPath = path.join(outputDir, relativeToInput);
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.copyFileSync(entryPath, outputPath);
        passedFiles.push(normalizePath(path.relative(ROOT, outputPath)));
      }
    }
  }

  const result = {
    generatedAt: new Date().toISOString(),
    inputDir: normalizePath(path.relative(ROOT, inputDir)),
    outputDir: normalizePath(path.relative(ROOT, outputDir)),
    promotedCount: passedFiles.length,
    promotedFiles: passedFiles,
  };

  fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
  console.log(`Deep retried promotion: ${normalizePath(path.relative(ROOT, resultPath))}`);
  console.log(`Promoted: ${passedFiles.length}`);
}

main();
