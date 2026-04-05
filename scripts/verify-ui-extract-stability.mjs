#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

import { ROOT } from './paths.mjs';

const extractionPath = path.join(ROOT, 'mapped', 'packages-ui-v2-extraction.json');
const outputPath = path.join(ROOT, 'mapped', 'packages-ui-v2-stability.json');

function hashFile(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

function loadExtractionSnapshot() {
  if (!fs.existsSync(extractionPath)) {
    return null;
  }

  const extraction = JSON.parse(fs.readFileSync(extractionPath, 'utf8'));
  const results = new Map();

  for (const result of extraction.results ?? []) {
    const absoluteFile = path.join(ROOT, result.file);
    results.set(result.id, {
      id: result.id,
      status: result.status,
      file: result.file,
      startLine: result.startLine,
      endLine: result.endLine,
      lineCount: result.lineCount,
      bytes: result.bytes,
      regionId: result.regionId,
      anchors: result.anchors,
      parse: result.parse,
      fileExists: fs.existsSync(absoluteFile),
      fileHash: fs.existsSync(absoluteFile) ? hashFile(absoluteFile) : null,
    });
  }

  return {
    generatedAt: extraction.generatedAt,
    sourcePath: extraction.sourcePath,
    candidateCount: extraction.candidateCount,
    analysisCount: extraction.analysisCount,
    results,
  };
}

function normalizeSnapshot(snapshot) {
  return {
    sourcePath: snapshot.sourcePath,
    candidateCount: snapshot.candidateCount,
    analysisCount: snapshot.analysisCount,
    results: Array.from(snapshot.results.values()).sort((a, b) =>
      a.id.localeCompare(b.id)
    ),
  };
}

function compareSnapshots(before, after) {
  const ids = new Set([...before.results.keys(), ...after.results.keys()]);
  const changes = [];

  for (const id of Array.from(ids).sort()) {
    const left = before.results.get(id);
    const right = after.results.get(id);

    if (!left || !right) {
      changes.push({
        id,
        type: 'added-or-removed',
        before: left ?? null,
        after: right ?? null,
      });
      continue;
    }

    const fields = [
      'status',
      'file',
      'startLine',
      'endLine',
      'lineCount',
      'bytes',
      'regionId',
      'fileExists',
      'fileHash',
    ];

    const fieldChanges = [];
    for (const field of fields) {
      if (JSON.stringify(left[field]) !== JSON.stringify(right[field])) {
        fieldChanges.push({
          field,
          before: left[field],
          after: right[field],
        });
      }
    }

    if (JSON.stringify(left.anchors) !== JSON.stringify(right.anchors)) {
      fieldChanges.push({
        field: 'anchors',
        before: left.anchors,
        after: right.anchors,
      });
    }

    if (JSON.stringify(left.parse) !== JSON.stringify(right.parse)) {
      fieldChanges.push({
        field: 'parse',
        before: left.parse,
        after: right.parse,
      });
    }

    if (fieldChanges.length > 0) {
      changes.push({
        id,
        type: 'modified',
        fieldChanges,
      });
    }
  }

  const topLevelChanges = [];
  for (const field of ['sourcePath', 'candidateCount', 'analysisCount']) {
    if (before[field] !== after[field]) {
      topLevelChanges.push({
        field,
        before: before[field],
        after: after[field],
      });
    }
  }

  return { changes, topLevelChanges };
}

if (!fs.existsSync(extractionPath)) {
  execFileSync(process.execPath, ['scripts/extract-ui-components-v2.mjs'], {
    cwd: ROOT,
    stdio: 'inherit',
  });
}

const before = loadExtractionSnapshot();
if (!before) {
  throw new Error(`Missing extraction snapshot at ${extractionPath}`);
}

execFileSync(process.execPath, ['scripts/extract-ui-components-v2.mjs'], {
  cwd: ROOT,
  stdio: 'inherit',
});

const after = loadExtractionSnapshot();
if (!after) {
  throw new Error(`Missing extraction snapshot after rerun at ${extractionPath}`);
}

const { changes, topLevelChanges } = compareSnapshots(before, after);

const output = {
  generatedAt: new Date().toISOString(),
  stable: changes.length === 0 && topLevelChanges.length === 0,
  extractionPath: path.relative(ROOT, extractionPath).split(path.sep).join('/'),
  compared: {
    before: normalizeSnapshot(before),
    after: normalizeSnapshot(after),
  },
  topLevelChanges,
  changes,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`UI extract stability: ${path.relative(ROOT, outputPath).split(path.sep).join('/')}`);
console.log(`Stable: ${output.stable}`);
console.log(`Top-level changes: ${topLevelChanges.length}`);
console.log(`Per-target changes: ${changes.length}`);

process.exitCode = output.stable ? 0 : 1;
