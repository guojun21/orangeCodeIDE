#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  ROOT,
  readRuntimeHostAssetsModelConfig,
} from './runtime-config-entry.mjs';

const EXTERNAL_REPORT_PATH = path.join(ROOT, 'mapped', 'runtime-external-dependencies-report.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'runtime-host-assets-model-report.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function flattenSections(sections, prefix) {
  return Object.entries(sections).map(([name, entry]) => ({
    section: `${prefix}.${name}`,
    ...entry,
  }));
}

function toFileSet(files) {
  return new Set((files ?? []).map((entry) => (typeof entry === 'string' ? entry : entry.path)));
}

if (!fs.existsSync(EXTERNAL_REPORT_PATH)) {
  throw new Error(
    `Missing runtime external dependencies report: ${EXTERNAL_REPORT_PATH}. Run "npm run report:runtime-external-dependencies" first.`
  );
}

const model = readRuntimeHostAssetsModelConfig();
const externalReport = readJson(EXTERNAL_REPORT_PATH);

const resourceFiles = externalReport.resources?.files ?? [];
const binFiles = (externalReport.bin?.files ?? []).map((entry) => entry.path);
const policyFiles = externalReport.policies?.files ?? [];
const productSummary = externalReport.product ?? { exists: false };

const resourceSections = flattenSections(model.resources ?? {}, 'resources');
const binSections = flattenSections(model.bin ?? {}, 'bin');
const policySections = flattenSections(model.policies ?? {}, 'policies');
const productSections = flattenSections(model.product ?? {}, 'product');

const configuredResourceFiles = new Set(resourceSections.flatMap((entry) => entry.files ?? []));
const configuredBinFiles = new Set(binSections.flatMap((entry) => entry.files ?? []));
const configuredPolicyFiles = new Set(policySections.flatMap((entry) => entry.files ?? []));

const result = {
  generatedAt: new Date().toISOString(),
  sourceOfTruth: 'config/runtime/host-assets-model.json',
  resources: {
    fileCount: resourceFiles.length,
    sections: resourceSections.map((entry) => ({
      section: entry.section,
      kind: entry.kind,
      notes: entry.notes,
      files: (entry.files ?? []).map((filePath) => ({
        path: filePath,
        existsInRuntime: resourceFiles.includes(filePath),
      })),
    })),
    unclassifiedFiles: resourceFiles.filter((filePath) => !configuredResourceFiles.has(filePath)),
  },
  bin: {
    fileCount: binFiles.length,
    sections: binSections.map((entry) => ({
      section: entry.section,
      kind: entry.kind,
      notes: entry.notes,
      files: (entry.files ?? []).map((filePath) => ({
        path: filePath,
        existsInRuntime: binFiles.includes(filePath),
      })),
    })),
    unclassifiedFiles: binFiles.filter((filePath) => !configuredBinFiles.has(filePath)),
  },
  policies: {
    fileCount: policyFiles.length,
    sections: policySections.map((entry) => ({
      section: entry.section,
      kind: entry.kind,
      notes: entry.notes,
      files: (entry.files ?? []).map((filePath) => ({
        path: filePath,
        existsInRuntime: policyFiles.includes(filePath),
      })),
    })),
    unclassifiedFiles: policyFiles.filter((filePath) => !configuredPolicyFiles.has(filePath)),
  },
  product: {
    exists: productSummary.exists === true,
    sections: productSections.map((entry) => ({
      section: entry.section,
      kind: entry.kind,
      notes: entry.notes,
      presentInSummary: productSummary[entry.section.split('.').at(-1)] !== undefined,
    })),
    summary: productSummary,
  },
};

result.passed =
  result.resources.unclassifiedFiles.length === 0 &&
  result.bin.unclassifiedFiles.length === 0 &&
  result.policies.unclassifiedFiles.length === 0 &&
  result.product.exists === true;

fs.mkdirSync(path.dirname(RESULT_PATH), { recursive: true });
fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
