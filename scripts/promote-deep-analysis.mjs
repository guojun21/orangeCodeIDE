#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const INPUT_DIR = path.join(ROOT, 'recovered', 'analysis-deep-deshelled', 'cursor-modules');
const OUTPUT_DIR = path.join(ROOT, 'recovered', 'candidate-source-deep-promoted', 'cursor-modules');
const REPORT_PATH = path.join(ROOT, 'mapped', 'deep-analysis-promotion.json');
const MIN_LINE_COUNT = 20;
const MAX_LONGEST_LINE = 5000;

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function walkJsFiles(dirPath) {
  const files = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkJsFiles(entryPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.js')) {
      files.push(entryPath);
    }
  }
  return files.sort();
}

function main() {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const results = [];
  for (const file of walkJsFiles(INPUT_DIR)) {
    const code = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(INPUT_DIR, file);
    const lines = code.split(/\r?\n/);
    const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);
    const lineCount = lines.length;
    const startsWithAe = code.trimStart().startsWith('Ae({');
    const suspiciousRename =
      /\blast\s+[A-Za-z_$][\w$]*\s*=/.test(code) ||
      /\blast\s*\(\{/.test(code) ||
      /\/packages\/read-exec\//.test(code);

    const promotable =
      lineCount >= MIN_LINE_COUNT &&
      longestLine < MAX_LONGEST_LINE &&
      !startsWithAe &&
      !suspiciousRename;

    const outputPath = path.join(OUTPUT_DIR, relativePath);
    if (promotable) {
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.copyFileSync(file, outputPath);
    }

    results.push({
      source: normalizePath(path.relative(ROOT, file)),
      output: promotable ? normalizePath(path.relative(ROOT, outputPath)) : null,
      lineCount,
      longestLine,
      promotable,
      failedChecks: [
        ...(lineCount >= MIN_LINE_COUNT ? [] : ['lineCountOk']),
        ...(longestLine < MAX_LONGEST_LINE ? [] : ['longestLineOk']),
        ...(!startsWithAe ? [] : ['noAeWrapper']),
        ...(!suspiciousRename ? [] : ['noSuspiciousRenameSignals']),
      ],
    });
  }

  const promoted = results.filter(item => item.promotable);
  const report = {
    generatedAt: new Date().toISOString(),
    inputDir: normalizePath(path.relative(ROOT, INPUT_DIR)),
    outputDir: normalizePath(path.relative(ROOT, OUTPUT_DIR)),
    totalFiles: results.length,
    promotedCount: promoted.length,
    promotedFiles: promoted.map(item => item.output),
    results,
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`Deep analysis promotion: ${normalizePath(path.relative(ROOT, REPORT_PATH))}`);
  console.log(`Promoted: ${promoted.length}/${results.length}`);
}

main();
