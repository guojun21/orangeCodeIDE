#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { getActiveProfile, sliceMatchesProfile } from './watch-rebuilt-slices.mjs';

import { ROOT } from './paths.mjs';
const SLICES_PATH = path.join(ROOT, 'mapped', 'rebuilt-slices.json');
const ASSEMBLIES_PATH = path.join(ROOT, 'mapped', 'runtime-assemblies.json');
const RESULT_PATH = path.join(ROOT, 'mapped', 'rebuilt-source-quality.json');

const RUNTIME_SIZE_LOWER_BOUND = 0.3;
const RUNTIME_SIZE_UPPER_BOUND = 2.0;
const SMALL_RUNTIME_SIZE_UPPER_BOUND = 2.5;
const SMALL_RUNTIME_THRESHOLD_BYTES = 4096;
const EXTENSION_API_KIND_RATIO = 0.5;

const API_KIND_PATTERNS = [
  ['createOutputChannel', [/\bcreateOutputChannel\b/g]],
  ['registerCommand', [/\bregisterCommand\b/g]],
  ['executeCommand', [/\bexecuteCommand\b/g]],
  ['registerUriHandler', [/\bregisterUriHandler\b/g]],
  ['registerRemoteAuthorityResolver', [/\bregisterRemoteAuthorityResolver\b/g]],
  ['createTerminal', [/\bcreateTerminal\b/g]],
  ['createStatusBarItem', [/\bcreateStatusBarItem\b/g]],
  ['showInformationMessage', [/\bshowInformationMessage\b/g]],
  ['showWarningMessage', [/\bshowWarningMessage\b/g]],
  ['showErrorMessage', [/\bshowErrorMessage\b/g]],
  ['withProgress', [/\bwithProgress\b/g]],
  ['EventEmitter', [/\bEventEmitter\b/g]],
  ['createWebviewPanel', [/\bcreateWebviewPanel\b/g]],
  ['registerWebviewViewProvider', [/\bregisterWebviewViewProvider\b/g]],
  ['registerTreeDataProvider', [/\bregisterTreeDataProvider\b/g]],
  ['registerTextEditorCommand', [/\bregisterTextEditorCommand\b/g]],
  ['registerFileSystemProvider', [/\bregisterFileSystemProvider\b/g]],
  ['onDidChangeConfiguration', [/\bonDidChangeConfiguration\b/g]],
  ['workspaceState', [/\bworkspaceState\b/g]],
  ['globalState', [/\bglobalState\b/g]],
  ['registerMcpProvider', [/\bregisterMcpProvider\b/g]],
  ['registerConnectionTokenProvider', [/\bregisterConnectionTokenProvider\b/g]],
  ['registerShadowClientProvider', [/\bregisterShadowClientProvider\b/g]],
  ['registerShadowServerProvider', [/\bregisterShadowServerProvider\b/g]],
  ['registerAlwaysLocalProvider', [/\bregisterAlwaysLocalProvider\b/g]],
  ['registerBrowserAutomationProvider', [/\bregisterBrowserAutomationProvider\b/g]],
];

function materialize(template, phase) {
  return template.replaceAll('{phase}', phase);
}

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

function extractApiKinds(sourceText) {
  const kinds = [];
  for (const [kind, patterns] of API_KIND_PATTERNS) {
    if (
      patterns.some((pattern) => {
        pattern.lastIndex = 0;
        const matched = pattern.test(sourceText);
        pattern.lastIndex = 0;
        return matched;
      })
    ) {
      kinds.push(kind);
    }
  }
  return kinds.sort();
}

function buildExtensionCheck(slice) {
  const rebuiltPath = path.join(ROOT, slice.rebuilt_entry);
  const basePath = path.join(ROOT, slice.base_recovered_path ?? slice.target_runtime_bundle);
  const issues = [];

  if (!fs.existsSync(rebuiltPath)) {
    return {
      sliceId: slice.slice_id,
      type: 'extension',
      status: 'failed',
      passed: false,
      rebuiltPath,
      basePath,
      issues: ['rebuilt-entry-missing'],
    };
  }

  if (!fs.existsSync(basePath)) {
    return {
      sliceId: slice.slice_id,
      type: 'extension',
      status: 'failed',
      passed: false,
      rebuiltPath,
      basePath,
      issues: ['base-bundle-missing'],
    };
  }

  const rebuiltText = fs.readFileSync(rebuiltPath, 'utf8');
  const baseText = fs.readFileSync(basePath, 'utf8');

  const rebuiltExports = extractExportNames(rebuiltText);
  const baseRawExports = extractExportNames(baseText);
  const rebuiltApiKinds = extractApiKinds(rebuiltText);
  const baseApiKinds = extractApiKinds(baseText);
  const minimumApiKinds = baseApiKinds.length === 0
    ? 0
    : Math.ceil(baseApiKinds.length * EXTENSION_API_KIND_RATIO);
  const lifecyclePassed = rebuiltExports.includes('activate');
  const apiKindsPassed = rebuiltApiKinds.length >= minimumApiKinds;

  if (!lifecyclePassed) {
    issues.push('missing-activate-export');
  }
  if (!apiKindsPassed) {
    issues.push('api-kind-coverage-below-threshold');
  }

  return {
    sliceId: slice.slice_id,
    type: 'extension',
    status: issues.length === 0 ? 'passed' : 'failed',
    passed: issues.length === 0,
    rebuiltPath,
    basePath,
    lifecycle: {
      rebuiltExports,
      requiredLifecycleExports: ['activate'],
      passed: lifecyclePassed,
    },
    apiKinds: {
      rebuilt: rebuiltApiKinds,
      base: baseApiKinds,
      minimumRequired: minimumApiKinds,
      rule: `rebuilt >= ceil(base * ${EXTENSION_API_KIND_RATIO})`,
      passed: apiKindsPassed,
    },
    advisory: {
      rebuiltExportCount: rebuiltExports.length,
      baseRawExportCount: baseRawExports.length,
      rawBaseExports: baseRawExports,
      note: 'Raw minified bundle exports are advisory only; noisy bundler exports do not gate pass/fail.',
    },
    issues,
  };
}

function buildRuntimeCheck(slice, phase) {
  const builtPath = path.join(ROOT, materialize(slice.build_output_template, phase));
  const originalPath = path.join(ROOT, slice.target_runtime_bundle);
  const directReplace = slice.override_patch_strategy === 'direct-file-replace';
  const sourceQualityMode = slice.source_quality_mode ?? 'default';

  if (!directReplace) {
    return {
      sliceId: slice.slice_id,
      type: 'runtime',
      status: 'skipped',
      passed: true,
      skipped: true,
      reason: `skip-${slice.override_patch_strategy}`,
      builtPath,
      originalPath,
    };
  }

  const issues = [];
  if (!fs.existsSync(builtPath)) {
    issues.push('built-artifact-missing');
  }
  if (!fs.existsSync(originalPath)) {
    issues.push('original-runtime-file-missing');
  }

  const builtSizeBytes = fs.existsSync(builtPath) ? fs.statSync(builtPath).size : null;
  const originalSizeBytes = fs.existsSync(originalPath) ? fs.statSync(originalPath).size : null;
  const builtText = fs.existsSync(builtPath) ? fs.readFileSync(builtPath, 'utf8') : '';
  const upperBound = originalSizeBytes !== null && originalSizeBytes < SMALL_RUNTIME_THRESHOLD_BYTES
    ? SMALL_RUNTIME_SIZE_UPPER_BOUND
    : RUNTIME_SIZE_UPPER_BOUND;
  const sizeRatio = builtSizeBytes && originalSizeBytes
    ? Number((builtSizeBytes / originalSizeBytes).toFixed(4))
    : null;
  let sizePassed = sizeRatio !== null
    ? sizeRatio >= RUNTIME_SIZE_LOWER_BOUND && sizeRatio <= upperBound
    : false;

  let proxyRule = null;
  if (sourceQualityMode === 'proxy-runtime') {
    const rebuiltExports = extractExportNames(builtText);
    const hasStartupExport = rebuiltExports.includes('startup');
    const hasMarker = typeof slice.validation_marker === 'string'
      ? builtText.includes(slice.validation_marker)
      : true;
    const hasOriginalModuleImport = builtText.includes('originalModuleUrl') || builtText.includes('Original module is missing startup()');

    proxyRule = {
      mode: sourceQualityMode,
      rebuiltExports,
      requiresStartupExport: true,
      requiresMarker: !!slice.validation_marker,
      requiresOriginalModuleImport: true,
      passed: hasStartupExport && hasMarker && hasOriginalModuleImport,
    };

    sizePassed = proxyRule.passed;
    if (!proxyRule.passed) {
      issues.push('proxy-runtime-contract-failed');
    }
  } else if (sourceQualityMode === 'proxy-worker') {
    const rebuiltExports = extractExportNames(builtText);
    const hasReadyExport = rebuiltExports.includes('ready');
    const hasMarker = typeof slice.validation_marker === 'string'
      ? builtText.includes(slice.validation_marker)
      : true;
    const hasOnMessageBridge = builtText.includes('globalThis.onmessage');
    const hasOriginalModuleImport = builtText.includes('originalModuleUrl');

    proxyRule = {
      mode: sourceQualityMode,
      rebuiltExports,
      requiresReadyExport: true,
      requiresMarker: !!slice.validation_marker,
      requiresOnMessageBridge: true,
      requiresOriginalModuleImport: true,
      passed: hasReadyExport && hasMarker && hasOnMessageBridge && hasOriginalModuleImport,
    };

    sizePassed = proxyRule.passed;
    if (!proxyRule.passed) {
      issues.push('proxy-worker-contract-failed');
    }
  } else if (sourceQualityMode === 'proxy-exec') {
    const hasMarker = typeof slice.validation_marker === 'string'
      ? builtText.includes(slice.validation_marker)
      : true;
    const hasOriginalModuleImport = builtText.includes('originalModuleUrl');
    const hasProxyEntrypoint = builtText.includes('runOriginalNodeEntrypoint');

    proxyRule = {
      mode: sourceQualityMode,
      requiresMarker: !!slice.validation_marker,
      requiresOriginalModuleImport: true,
      requiresProxyEntrypoint: true,
      passed: hasMarker && hasOriginalModuleImport && hasProxyEntrypoint,
    };

    sizePassed = proxyRule.passed;
    if (!proxyRule.passed) {
      issues.push('proxy-exec-contract-failed');
    }
  } else if (sizeRatio === null || !sizePassed) {
    issues.push('runtime-size-ratio-out-of-range');
  }

  return {
    sliceId: slice.slice_id,
    type: 'runtime',
    status: issues.length === 0 ? 'passed' : 'failed',
    passed: issues.length === 0,
    skipped: false,
    builtPath,
    originalPath,
    builtSizeBytes,
    originalSizeBytes,
    sizeRatio,
    sizeRule: {
      lowerBound: RUNTIME_SIZE_LOWER_BOUND,
      upperBound,
      smallRuntimeThresholdBytes: SMALL_RUNTIME_THRESHOLD_BYTES,
      passed: sizePassed,
    },
    sourceQualityMode,
    proxyRule,
    issues,
  };
}

const manifest = readJson(SLICES_PATH);
const assemblies = readJson(ASSEMBLIES_PATH);
const rebuiltAssembly = assemblies.assemblies.find((entry) => entry.assembly_id === 'rebuilt-runtime');
const activeProfile = getActiveProfile();

if (!rebuiltAssembly) {
  throw new Error('Missing rebuilt-runtime assembly');
}

const phase = rebuiltAssembly.phase;
const activeSlices = manifest.slices.filter((slice) => sliceMatchesProfile(slice, activeProfile));
const extensionChecks = activeSlices
  .filter((slice) => slice.target_runtime_bundle.startsWith('extensions/'))
  .map((slice) => buildExtensionCheck(slice));
const runtimeChecks = activeSlices
  .filter((slice) => !slice.target_runtime_bundle.startsWith('extensions/'))
  .map((slice) => buildRuntimeCheck(slice, phase));

const allChecks = [...extensionChecks, ...runtimeChecks.filter((entry) => !entry.skipped)];
const passedChecks = allChecks.filter((entry) => entry.passed).length;
const failedChecks = allChecks.filter((entry) => !entry.passed).length;

const result = {
  generatedAt: new Date().toISOString(),
  phase,
  activeProfile,
  thresholds: {
    extensionApiKindRatio: EXTENSION_API_KIND_RATIO,
    runtimeSizeRatio: {
      lowerBound: RUNTIME_SIZE_LOWER_BOUND,
      upperBound: RUNTIME_SIZE_UPPER_BOUND,
      smallRuntimeUpperBound: SMALL_RUNTIME_SIZE_UPPER_BOUND,
      smallRuntimeThresholdBytes: SMALL_RUNTIME_THRESHOLD_BYTES,
    },
  },
  passed: failedChecks === 0,
  summary: {
    totalActiveSlices: activeSlices.length,
    extensionChecks: extensionChecks.length,
    runtimeChecks: runtimeChecks.filter((entry) => !entry.skipped).length,
    skippedRuntimeChecks: runtimeChecks.filter((entry) => entry.skipped).length,
    passedChecks,
    failedChecks,
  },
  extensionChecks,
  runtimeChecks,
};

fs.writeFileSync(RESULT_PATH, JSON.stringify(result, null, 2) + '\n');
console.log(RESULT_PATH);
