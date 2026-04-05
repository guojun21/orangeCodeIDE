#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

import { ROOT } from './paths.mjs';
const SLICES_PATH = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-slice-maturity.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function extractExportNames(sourceText) {
  const names = new Set();
  const matchers = [
    /export\s+(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/g,
    /export\s+class\s+([A-Za-z_$][\w$]*)/g,
    /export\s+(?:const|let|var)\s+([A-Za-z_$][\w$]*)/g,
    /exports\.([A-Za-z_$][\w$]*)\s*=/g,
    /module\.exports\.([A-Za-z_$][\w$]*)\s*=/g,
  ];

  for (const matcher of matchers) {
    for (const match of sourceText.matchAll(matcher)) {
      names.add(match[1]);
    }
  }

  for (const match of sourceText.matchAll(/export\s*\{([^}]+)\}/g)) {
    const entries = match[1]
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean);
    for (const entry of entries) {
      const aliasMatch = entry.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
      names.add(aliasMatch ? aliasMatch[1] : entry.replace(/\s+/g, ''));
    }
  }

  for (const match of sourceText.matchAll(/module\.exports\s*=\s*\{([\s\S]*?)\}/g)) {
    const members = match[1]
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean);
    for (const member of members) {
      const keyMatch = member.match(/^([A-Za-z_$][\w$]*)\s*:/) ?? member.match(/^([A-Za-z_$][\w$]*)$/);
      if (keyMatch) {
        names.add(keyMatch[1]);
      }
    }
  }

  return [...names].sort();
}

function countNonEmptyLines(sourceText) {
  return sourceText
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean).length;
}

function classifyMaturity(slice) {
  switch (slice.source_quality_mode) {
    case 'proxy-worker':
    case 'proxy-runtime':
    case 'proxy-exec':
    case 'proxy-node-entry':
    case 'proxy-browser-module':
      return 'proxy-passthrough';
    default:
      return 'full-rebuilt';
  }
}

const slices = readJson(SLICES_PATH).slices;
const profile = getActiveProfile();
const activeSlices = slices.filter((slice) => sliceMatchesProfile(slice, profile));

const checks = activeSlices.map((slice) => {
  const rebuiltPath = path.join(ROOT, slice.rebuilt_entry);
  const basePath = path.join(ROOT, slice.base_recovered_path ?? slice.target_runtime_bundle ?? '');
  const maturityLevel = classifyMaturity(slice);

  const rebuiltExists = fs.existsSync(rebuiltPath);
  const baseExists = basePath ? fs.existsSync(basePath) : false;
  const rebuiltText = rebuiltExists ? fs.readFileSync(rebuiltPath, 'utf8') : '';
  const baseText = baseExists ? fs.readFileSync(basePath, 'utf8') : '';

  const rebuiltLoc = rebuiltExists ? countNonEmptyLines(rebuiltText) : 0;
  const rebuiltExports = rebuiltExists ? extractExportNames(rebuiltText) : [];
  const baseExports = baseExists ? extractExportNames(baseText) : [];
  const contractCoverageRatio = baseExports.length === 0
    ? null
    : Number((rebuiltExports.length / baseExports.length).toFixed(4));
  const markerPresent = typeof slice.validation_marker === 'string'
    ? rebuiltText.includes(slice.validation_marker)
    : false;

  return {
    sliceId: slice.slice_id,
    type: slice.target_runtime_bundle?.startsWith('extensions/') ? 'extension' : 'runtime',
    maturityLevel,
    sourceQualityMode: slice.source_quality_mode ?? 'default',
    overridePatchStrategy: slice.override_patch_strategy,
    rebuiltPath,
    basePath: basePath || null,
    rebuiltExists,
    baseExists,
    rebuiltLoc,
    rebuiltExportCount: rebuiltExports.length,
    baseExportCount: baseExports.length,
    contractCoverageRatio,
    markerPresent,
  };
});

const summary = {
  activeProfile: profile,
  totalActiveSlices: checks.length,
  byMaturity: checks.reduce((acc, check) => {
    acc[check.maturityLevel] = (acc[check.maturityLevel] ?? 0) + 1;
    return acc;
  }, {}),
  totalRebuiltLoc: checks.reduce((sum, check) => sum + check.rebuiltLoc, 0),
  averageRebuiltLoc: checks.length === 0 ? 0 : Number((checks.reduce((sum, check) => sum + check.rebuiltLoc, 0) / checks.length).toFixed(2)),
  proxySlicesWithMarker: checks.filter((check) => check.maturityLevel !== 'full-rebuilt' && check.markerPresent).length,
};

const result = {
  generatedAt: new Date().toISOString(),
  activeProfile: profile,
  passed: checks.every((check) => check.rebuiltExists),
  summary,
  checks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
