#!/usr/bin/env node

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import * as vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { parse } from 'acorn';

import { ROOT } from './paths.mjs';

const THALAMUS_URL = 'http://127.0.0.1:3013/v1/chat/completions';
const MODEL = 'fast';
const BATCH_SIZE = 12;
const RESERVED_NAMES = new Set([
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'false',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'let',
  'new',
  'null',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
]);

const CLUSTERS = {
  'composer-pilot': {
    description: 'Validated approval-flow deep recovery pilot for composer modules.',
    inputRoot: 'recovered/candidate-source/cursor-modules',
    outputDir: 'recovered/candidate-source-deep/cursor-modules',
    reportPath: 'mapped/thalamus-rename-composer-pilot.json',
    targets: [
      {
        input: 'recovered/candidate-source/cursor-modules/vs/workbench/contrib/composer/browser/composerDecisionsService.js',
        lockedRenames: {
          xSf: 'fileDiffSchema',
          TSf: 'commandSchema',
          ISf: 'filePathSchema',
          DSf: 'toolCallSchema',
          IComposerDecisionsService: 'composerDecisionsServiceToken',
        },
      },
      {
        input: 'recovered/candidate-source/cursor-modules/vs/workbench/contrib/composer/browser/naiveComposerAgentProvider.js',
        lockedRenames: {
          Kkt: 'composerDecisionsServiceToken',
        },
      },
      {
        input: 'recovered/candidate-source/cursor-modules/vs/workbench/contrib/composer/browser/pendingApprovalRegistry.js',
        lockedRenames: {},
      },
    ],
  },
  'composer-longlines': {
    description: 'Deep normalize parseable composer candidates that only fail longestLineOk.',
    inputRoot: 'recovered/candidate-source/cursor-modules',
    outputDir: 'recovered/candidate-source-deep/cursor-modules',
    reportPath: 'mapped/thalamus-rename-composer-longlines.json',
    targets: [
      {
        input: 'recovered/candidate-source/cursor-modules/vs/workbench/contrib/composer/browser/composerCodeBlockService.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source/cursor-modules/vs/workbench/contrib/composer/browser/composerDataService.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source/cursor-modules/vs/workbench/contrib/composer/browser/composerUtilsService.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source/cursor-modules/vs/workbench/contrib/composer/browser/components/cssInspector/LayoutSection.js',
        lockedRenames: {},
        useLlm: false,
      },
    ],
  },
  'composer-core-names': {
    description: 'Stabilize core composer tokens, context keys, and router names on promoted deep files.',
    inputRoot: 'recovered/candidate-source-deep-promoted/cursor-modules',
    outputDir: 'recovered/candidate-source-deep-renamed/cursor-modules',
    reportPath: 'mapped/thalamus-rename-composer-core-names.json',
    targets: [
      {
        input: 'recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/composer/browser/composerStorageService.js',
        lockedRenames: {
          IComposerStorageService: 'composerStorageServiceToken',
        },
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/composer/browser/composerTextModelService.js',
        lockedRenames: {
          IComposerTextModelService: 'composerTextModelServiceToken',
        },
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/composer/browser/composerContextKeys.js',
        lockedRenames: {
          NSf: 'composerBarIsVisibleContextKey',
          mty: 'isComposerProjectsEnabledContextKey',
          dmu: 'currentComposerIsEmptyContextKey',
          pty: 'isComposerUnifyingContextKey',
          ngn: 'composerFocusedContextKey',
          MSf: 'chatModeMenuFocusedContextKey',
          FSf: 'composerIsBackgroundModeContextKey',
          Ykt: 'quickAgentPopupIsVisibleContextKey',
          OSf: 'voiceInputRecordingContextKey',
          hmu: 'browserViewFocusedContextKey',
          USf: 'browserEditorActiveContextKey',
          mmu: 'browserEditorTransientContextKey',
          rit: 'composerFindWidgetFocusedContextKey',
          pmu: 'simulateSlowProviderEnabledContextKey',
        },
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js',
        lockedRenames: {
          LSf: 'ComposerAgentProviderRouter',
        },
        useLlm: false,
      },
    ],
  },
  'composer-plan-tokens': {
    description: 'Stabilize composer plan service tokens across recovered plan modules and live consumers.',
    inputRoot: 'recovered/candidate-source-deep-deshelled/cursor-modules',
    outputDir: 'recovered/candidate-source-deep-renamed/cursor-modules',
    reportPath: 'mapped/thalamus-rename-composer-plan-tokens.json',
    targets: [
      {
        input: 'recovered/candidate-source-deep-deshelled/cursor-modules/vs/workbench/contrib/composer/browser/composerUtilsService.js',
        outputRelativePath: 'vs/workbench/contrib/composer/browser/composerUtilsService.js',
        lockedRenames: {
          IComposerPlanService: 'composerPlanServiceToken',
        },
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source-deep-retried-promoted/cursor-modules/vs/workbench/contrib/composer/browser/services/composerPlanService.js',
        outputRelativePath: 'vs/workbench/contrib/composer/browser/services/composerPlanService.js',
        lockedRenames: {
          IComposerPlanService: 'composerPlanServiceToken',
        },
        useLlm: false,
      },
      {
        input: 'recovered/candidate-source-deep-retried-promoted/cursor-modules/vs/workbench/contrib/composer/browser/services/planStorageService.js',
        outputRelativePath: 'vs/workbench/contrib/composer/browser/services/planStorageService.js',
        lockedRenames: {
          IPlanStorageService: 'planStorageServiceToken',
        },
        useLlm: false,
      },
    ],
  },
  'unified-app-layout-context-keys': {
    description: 'Stabilize unification-related app layout context key names from literal key strings.',
    inputRoot: 'recovered/candidate-source-deep-promoted/cursor-modules',
    outputDir: 'recovered/candidate-source-deep-renamed/cursor-modules',
    reportPath: 'mapped/thalamus-rename-unified-app-layout-context-keys.json',
    targets: [
      {
        input: 'recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/appLayout/common/unifiedAppLayoutContextKeys.js',
        lockedRenames: {
          '$F': 'agentIdeUnificationEnabledKey',
          _fa: 'agentIdeUnificationEnabledContextKey',
          Vtt: 'agentIdeUnificationFeatureGateKey',
          nru: 'agentIdeUnificationFeatureGateContextKey',
          QHg: 'defaultSidebarLocationKey',
          iru: 'defaultSidebarLocationContextKey',
          Ivi: 'unifiedSidebarLocationKey',
          Cfa: 'unifiedSidebarLocationContextKey',
          sru: 'unifiedSidebarVisibleKey',
          Dvi: 'unifiedSidebarVisibleContextKey',
          zHg: 'agentsSurfaceVisibleKey',
          MSt: 'agentsSurfaceVisibleContextKey',
          ONe: 'noTitlebarLayoutEnabledKey',
          aru: 'noTitlebarLayoutEnabledContextKey',
          omn: 'onboardingShowingKey',
          O2A: 'onboardingShowingContextKey',
        },
        useLlm: false,
      },
    ],
  },
  'cursor-bulk-deshell': {
    description: 'Bulk de-shell and unminify all parseable cursor candidate modules without rename.',
    inputRoot: 'recovered/candidate-source/cursor-modules',
    outputDir: 'recovered/candidate-source-deep-deshelled/cursor-modules',
    reportPath: 'mapped/deep-normalize-cursor-bulk.json',
    targetDir: 'recovered/candidate-source/cursor-modules',
    useLlm: false,
    cleanOutput: true,
  },
  'cursor-analysis-deshell': {
    description: 'Bulk de-shell and unminify current analysis cursor modules without rename.',
    inputRoot: 'recovered/analysis/cursor-modules',
    outputDir: 'recovered/analysis-deep-deshelled/cursor-modules',
    reportPath: 'mapped/deep-normalize-analysis-bulk.json',
    targetDir: 'recovered/analysis/cursor-modules',
    useLlm: false,
    cleanOutput: true,
    allowFailures: true,
  },
  'cursor-analysis-raw-retry': {
    description: 'Retry failed analysis modules directly from raw out-build with trim-to-parse recovery.',
    inputRoot: 'recovered/cursor-recovered/out-build',
    outputDir: 'recovered/candidate-source-deep-retried/cursor-modules',
    reportPath: 'mapped/deep-normalize-analysis-raw-retry.json',
    targets: [
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/composer/browser/services/composerPlanService.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/composer/browser/services/planStorageService.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/chat/browser/chatDragAndDrop.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/cursorBlame/browser/renderCursorBlamePane.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/composer/browser/components/BrowserEditorContent.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/composer/browser/components/cssInspector/TypographySection.js',
        lockedRenames: {},
        useLlm: false,
      },
    ],
    cleanOutput: true,
    allowFailures: true,
  },
  'cursor-analysis-raw-retry-2': {
    description: 'Retry near-threshold high-value analysis modules directly from raw out-build.',
    inputRoot: 'recovered/cursor-recovered/out-build',
    outputDir: 'recovered/candidate-source-deep-retried-2/cursor-modules',
    reportPath: 'mapped/deep-normalize-analysis-raw-retry-2.json',
    targets: [
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/reviewChanges/browser/service/reviewChangesService.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/composer/browser/services/planUpdateMerger.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/composer/browser/components/ElementTreeSidebar.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/composer/browser/components/cssInspector/CSSInspectorHeader.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/appLayout/browser/appLayoutService.js',
        lockedRenames: {},
        useLlm: false,
      },
      {
        input: 'recovered/cursor-recovered/out-build/vs/workbench/contrib/appLayout/browser/agentLayoutService.js',
        lockedRenames: {},
        useLlm: false,
      },
    ],
    cleanOutput: true,
    allowFailures: true,
  },
};

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function relativeToRoot(filePath) {
  return normalizePath(path.relative(ROOT, filePath));
}

function parseArgs(argv) {
  let clusterName = 'composer-pilot';

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--cluster') {
      i += 1;
      if (i >= argv.length) {
        throw new Error('--cluster requires a value');
      }
      clusterName = argv[i];
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  const cluster = CLUSTERS[clusterName];
  if (!cluster) {
    throw new Error(`Unknown cluster: ${clusterName}`);
  }

  return { clusterName, cluster };
}

function stripLeadingComments(code) {
  let rest = code.trimStart();
  while (rest.startsWith('//') || rest.startsWith('/*')) {
    if (rest.startsWith('//')) {
      const nextLine = rest.indexOf('\n');
      rest = (nextLine === -1 ? '' : rest.slice(nextLine + 1)).trimStart();
      continue;
    }
    const end = rest.indexOf('*/');
    if (end === -1) {
      break;
    }
    rest = rest.slice(end + 2).trimStart();
  }
  return rest;
}

function stripTrailingConnectorLines(lines) {
  const trimmed = [...lines];
  while (trimmed.length > 0) {
    const last = trimmed[trimmed.length - 1].trim();
    if (
      last === '' ||
      /^\}\)\s*,/.test(last) ||
      /^[\w$]+\s*,\s*[\w$]+=?\s*$/.test(last)
    ) {
      trimmed.pop();
      continue;
    }
    break;
  }
  return trimmed;
}

function sanitizeInput(rawCode) {
  const withoutComments = stripLeadingComments(rawCode);
  const lines = stripTrailingConnectorLines(withoutComments.split('\n'));
  return lines.join('\n').trimEnd();
}

function trimToParse(code, filename) {
  let working = code.trimEnd();
  let lines = working.split('\n');
  let trimmedTailLines = 0;
  let trimmedTailChars = 0;
  let acornResult = parseWithAcorn(working);
  let vmResult = parseWithVm(working, filename);

  while (lines.length > 1 && (!acornResult.ok || !vmResult.ok)) {
    lines = lines.slice(0, -1);
    trimmedTailLines += 1;
    working = lines.join('\n').trimEnd();
    acornResult = parseWithAcorn(working);
    vmResult = parseWithVm(working, filename);
  }

  while (working.length > 1 && (!acornResult.ok || !vmResult.ok)) {
    working = working.slice(0, -1).trimEnd();
    trimmedTailChars += 1;
    acornResult = parseWithAcorn(working);
    vmResult = parseWithVm(working, filename);
  }

  return {
    code: working,
    trimmedTailLines,
    trimmedTailChars,
    acornResult,
    vmResult,
  };
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

function wrapForWebcrack(code) {
  return `(function(exports, module) {\n"use strict";\n${code}\n})({}, {});`;
}

function runWebcrack(code) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'shopeecode-webcrack-'));
  const inputFile = path.join(tempRoot, 'input.js');
  const outputDir = path.join(tempRoot, 'out');
  fs.writeFileSync(inputFile, wrapForWebcrack(code));
  try {
    execFileSync(
      'npx',
      ['webcrack', inputFile, '-o', outputDir],
      {
        cwd: ROOT,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
      }
    );
    const outputFile = path.join(outputDir, 'deobfuscated.js');
    return {
      ok: true,
      code: fs.readFileSync(outputFile, 'utf8'),
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      code,
      error: error.stderr?.toString?.() || error.message,
    };
  } finally {
    fs.rmSync(tempRoot, { recursive: true, force: true });
  }
}

function unwrapWebcrackIife(code) {
  const lines = code.split('\n');
  if (lines.length < 3) {
    return code;
  }
  if (
    !lines[0].trim().startsWith('(function') ||
    lines[lines.length - 1].trim() !== '})({}, {});'
  ) {
    return code;
  }
  return lines
    .slice(1, -1)
    .map(line => (line.startsWith('  ') ? line.slice(2) : line))
    .join('\n')
    .trimEnd();
}

function findRenameTargets(code) {
  const identifierBuckets = [
    /(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*class\s+extends/g,
    /(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*class\b/g,
    /(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*xi\(/g,
    /(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*Tr\.[A-Za-z_]+\(/g,
    /(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*(?:async\s+)?function\b/g,
    /(\b[a-zA-Z_$][\w$]{1,4})\s*=\s*(?:async\s+)?\(/g,
  ];

  const found = new Set();
  for (const regex of identifierBuckets) {
    for (const match of code.matchAll(regex)) {
      found.add(match[1]);
    }
  }

  return [...found].sort();
}

function getIdentifierUniverse(code) {
  return new Set(code.match(/\b[A-Za-z_$][\w$]*\b/g) ?? []);
}

function getVariableContext(code, varName, maxChars = 320) {
  const assignmentIndex = code.indexOf(`${varName} =`);
  const referenceIndex = assignmentIndex === -1 ? code.indexOf(varName) : assignmentIndex;
  const index = referenceIndex === -1 ? 0 : referenceIndex;
  const start = Math.max(0, index - 80);
  const end = Math.min(code.length, index + maxChars);
  return code.slice(start, end);
}

function buildPrompt(filePath, variables, code, lockedRenames) {
  const contexts = variables.map(variable => ({
    variable,
    context: getVariableContext(code, variable),
  }));

  return [
    'You are restoring readable engineering names inside recovered Cursor IDE JavaScript.',
    'Rules:',
    '- Reply with JSON only.',
    '- Keep names stable with the locked mappings.',
    '- Prefer schema/token/service/provider/store/helper suffixes that match actual role.',
    '- Do not rename a symbol to a name that already exists in the file for a different binding.',
    '- If uncertain, omit the variable from the JSON.',
    '',
    `File: ${filePath}`,
    `Locked mappings: ${JSON.stringify(lockedRenames)}`,
    `Rename these variables: ${variables.join(', ')}`,
    '',
    'Per-variable contexts:',
    JSON.stringify(contexts, null, 2),
  ].join('\n');
}

async function requestRenameBatch(filePath, variables, code, lockedRenames) {
  const response = await fetch(THALAMUS_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer sk-local-placeholder',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: 'You are a code analysis tool. Return valid JSON only. Never use markdown fences.',
        },
        {
          role: 'user',
          content: buildPrompt(filePath, variables, code, lockedRenames),
        },
      ],
      stream: false,
      temperature: 0.1,
    }),
  });

  if (!response.ok) {
    throw new Error(`Thalamus request failed with status ${response.status}`);
  }

  const payload = await response.json();
  const content = payload.choices?.[0]?.message?.content?.trim() ?? '';
  if (!content) {
    return {};
  }

  try {
    const parsed = JSON.parse(content.replace(/^```json\s*/, '').replace(/\s*```$/, ''));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return {};
    }
    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([key, value]) => variables.includes(key) && typeof value === 'string'
      )
    );
  } catch {
    return {};
  }
}

function isValidIdentifier(name) {
  return /^[A-Za-z_$][\w$]*$/.test(name) && !RESERVED_NAMES.has(name);
}

function applyRenameMap(code, renameMap) {
  let next = code;
  const entries = Object.entries(renameMap).sort((a, b) => b[0].length - a[0].length);
  for (const [oldName, newName] of entries) {
    const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`(?<![A-Za-z0-9_$])${escaped}(?![A-Za-z0-9_$])`, 'g');
    next = next.replace(pattern, newName);
  }
  return next;
}

function collectConflicts(code, lockedRenames, llmRenames) {
  const existing = getIdentifierUniverse(code);
  const accepted = { ...lockedRenames };
  const conflicts = [];

  for (const [oldName, suggestedName] of Object.entries(llmRenames)) {
    if (!isValidIdentifier(suggestedName)) {
      conflicts.push({
        oldName,
        suggestedName,
        reason: 'invalid-identifier',
      });
      continue;
    }

    if (accepted[oldName] && accepted[oldName] !== suggestedName) {
      conflicts.push({
        oldName,
        suggestedName,
        reason: 'locked-name-mismatch',
        lockedName: accepted[oldName],
      });
      continue;
    }

    const duplicateOld = Object.entries(accepted).find(
      ([knownOldName, knownNewName]) =>
        knownOldName !== oldName && knownNewName === suggestedName
    );
    if (duplicateOld) {
      conflicts.push({
        oldName,
        suggestedName,
        reason: 'duplicate-target-name',
        existingOldName: duplicateOld[0],
      });
      continue;
    }

    if (existing.has(suggestedName) && suggestedName !== oldName) {
      conflicts.push({
        oldName,
        suggestedName,
        reason: 'existing-identifier-conflict',
      });
      continue;
    }

    accepted[oldName] = suggestedName;
  }

  return {
    accepted,
    conflicts,
  };
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function resolveTargets(cluster) {
  if (cluster.targets) {
    return cluster.targets;
  }
  if (!cluster.targetDir) {
    throw new Error('Cluster must provide either targets or targetDir');
  }
  const absoluteTargetDir = path.join(ROOT, cluster.targetDir);
  return walkJsFiles(absoluteTargetDir).map(filePath => ({
    input: relativeToRoot(filePath),
    lockedRenames: {},
    useLlm: cluster.useLlm,
  }));
}

async function processTarget(clusterName, cluster, target) {
  const inputPath = path.join(ROOT, target.input);
  const inputRootPath = path.join(ROOT, cluster.inputRoot);
  const rawCode = fs.readFileSync(inputPath, 'utf8');
  const sanitizedBase = sanitizeInput(rawCode);
  const trimResult = trimToParse(sanitizedBase, path.basename(inputPath));
  const sanitized = trimResult.code;
  const sanitizedAcorn = trimResult.acornResult;
  const sanitizedVm = trimResult.vmResult;

  if (!sanitizedAcorn.ok || !sanitizedVm.ok) {
    throw new Error(`Sanitized input is not parseable: ${target.input}`);
  }

  const webcrack = runWebcrack(sanitized);
  const unwrappedCode = unwrapWebcrackIife(webcrack.code);
  const normalized = applyRenameMap(unwrappedCode, target.lockedRenames);
  const targets = findRenameTargets(normalized).filter(name => !(name in target.lockedRenames));

  const llmRawRenames = {};
  if (target.useLlm !== false) {
    for (let index = 0; index < targets.length; index += BATCH_SIZE) {
      const batch = targets.slice(index, index + BATCH_SIZE);
      if (batch.length === 0) {
        continue;
      }
      const batchResult = await requestRenameBatch(target.input, batch, normalized, target.lockedRenames);
      Object.assign(llmRawRenames, batchResult);
    }
  }

  const { accepted, conflicts } = collectConflicts(normalized, target.lockedRenames, llmRawRenames);
  const finalCode = applyRenameMap(unwrappedCode, accepted);
  const relativeInputPath = target.outputRelativePath ?? path.relative(inputRootPath, inputPath);
  const outputPath = path.join(ROOT, cluster.outputDir, relativeInputPath);
  const header = [
    `// Deep recovered from ${target.input}`,
    `// Cluster: ${clusterName}`,
    `// webcrackUsed: ${webcrack.ok}`,
    `// lockedRenames: ${Object.keys(target.lockedRenames).length}`,
    `// llmRenamesAccepted: ${Object.keys(accepted).length - Object.keys(target.lockedRenames).length}`,
    `// llmEnabled: ${target.useLlm !== false}`,
    '',
  ].join('\n');

  ensureDir(outputPath);
  fs.writeFileSync(outputPath, `${header}${finalCode.trimEnd()}\n`);

  const finalAcorn = parseWithAcorn(finalCode);
  const finalVm = parseWithVm(finalCode, path.basename(outputPath));

  return {
    input: target.input,
    output: relativeToRoot(outputPath),
    trimmedTailLines: trimResult.trimmedTailLines,
    trimmedTailChars: trimResult.trimmedTailChars,
    webcrack: {
      used: webcrack.ok,
      error: webcrack.error,
      inputLineCount: sanitized.split('\n').length,
      outputLineCount: webcrack.code.split('\n').length,
    },
    parse: {
      sanitizedAcornParseable: sanitizedAcorn.ok,
      sanitizedVmParseable: sanitizedVm.ok,
      finalAcornParseable: finalAcorn.ok,
      finalVmParseable: finalVm.ok,
      finalAcornError: finalAcorn.error,
      finalVmError: finalVm.error,
    },
    lockedRenames: target.lockedRenames,
    llmRawRenames,
    acceptedRenames: accepted,
    conflicts,
  };
}

async function main() {
  const { clusterName, cluster } = parseArgs(process.argv.slice(2));
  const reportPath = path.join(ROOT, cluster.reportPath);
  const outputRoot = path.join(ROOT, cluster.outputDir);
  const targets = resolveTargets(cluster);
  if (cluster.cleanOutput) {
    fs.rmSync(outputRoot, { recursive: true, force: true });
  }
  fs.mkdirSync(outputRoot, { recursive: true });

  const results = [];
  for (const target of targets) {
    console.log(`Deep recovering ${target.input}`);
    try {
      results.push(await processTarget(clusterName, cluster, target));
    } catch (error) {
      if (!cluster.allowFailures) {
        throw error;
      }
      results.push({
        input: target.input,
        output: null,
        error: error instanceof Error ? error.message : String(error),
        webcrack: {
          used: false,
          error: null,
          inputLineCount: 0,
          outputLineCount: 0,
        },
        parse: {
          sanitizedAcornParseable: false,
          sanitizedVmParseable: false,
          finalAcornParseable: false,
          finalVmParseable: false,
          finalAcornError: null,
          finalVmError: null,
        },
        lockedRenames: target.lockedRenames ?? {},
        llmRawRenames: {},
        acceptedRenames: {},
        conflicts: [],
      });
      console.log(`  Skipped: ${target.input} (${error instanceof Error ? error.message : String(error)})`);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    cluster: clusterName,
    description: cluster.description,
    outputDir: cluster.outputDir,
    fileCount: results.length,
    successCount: results.filter(result => !result.error).length,
    failedCount: results.filter(result => result.error).length,
    acceptedRenameCount: results.reduce(
      (sum, result) => sum + Object.keys(result.acceptedRenames).length,
      0
    ),
    conflictCount: results.reduce((sum, result) => sum + result.conflicts.length, 0),
    results,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`Deep recovery report: ${relativeToRoot(reportPath)}`);
  console.log(`Files: ${report.fileCount}`);
  console.log(`Succeeded: ${report.successCount}`);
  console.log(`Failed: ${report.failedCount}`);
  console.log(`Accepted renames: ${report.acceptedRenameCount}`);
  console.log(`Conflicts: ${report.conflictCount}`);
}

await main();
