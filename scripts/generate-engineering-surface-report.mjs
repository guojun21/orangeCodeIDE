#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

const MAPPED = path.join(ROOT, 'mapped');
const OUTPUT_PATH = path.join(MAPPED, 'engineering-surface.json');

function readJson(name, { required = false } = {}) {
  const filePath = path.join(MAPPED, name);
  if (!fs.existsSync(filePath)) {
    if (required) {
      throw new Error(`missing required report: ${filePath}`);
    }
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function relative(filePath) {
  return path.relative(ROOT, filePath) || '.';
}

const quality = readJson('quality-report.json');
const sourceQuality = readJson('rebuilt-source-quality.json');
const sliceMaturity = readJson('rebuilt-slice-maturity.json');
const rebuiltSlices = readJson('rebuilt-slices.json', { required: true });
const runtimeGate = readJson('startup-loader-runtime-gate.json');
const rolloutGate = readJson('startup-loader-rollout-gate.json');
const acceptLatestPath = path.join(MAPPED, 'accept-latest.json');
const acceptLatest = fs.existsSync(acceptLatestPath)
  ? JSON.parse(fs.readFileSync(acceptLatestPath, 'utf8'))
  : null;

const slices = rebuiltSlices.slices ?? [];
const stableSlices = slices.filter((slice) => Array.isArray(slice.profiles) && slice.profiles.includes('stable'));
const spikeSlices = slices.filter((slice) => slice.status === 'spike');

const report = {
  generatedAt: new Date().toISOString(),
  repoRoot: ROOT,
  posture: 'post-100-runtime-gui-closure',
  health: {
    sourceQualityPassed: sourceQuality ? sourceQuality.passed === true : null,
    sliceMaturityPassed: sliceMaturity ? sliceMaturity.passed === true : null,
    startupLoaderRuntimeGatePassed: runtimeGate ? runtimeGate.passed === true : null,
    startupLoaderRolloutGatePassed: rolloutGate ? (rolloutGate.passed === true || rolloutGate.passedSoFar === true) : null,
    acceptRecorded: !!acceptLatest,
    acceptGeneratedAt: acceptLatest?.generatedAt ?? null,
    stableSliceCount: quality?.topLine?.stableSliceCount ?? stableSlices.length,
    fullRebuiltCount: quality?.topLine?.fullRebuiltCount ?? sliceMaturity?.summary?.byMaturity?.['full-rebuilt'] ?? null,
    fullRebuiltPct: quality?.topLine?.fullRebuiltPct ?? null,
    spikeSliceCount: quality?.topLine?.spikeSliceCount ?? spikeSlices.length,
  },
  primaryEngineeringSurface: {
    defaultReadOrder: [
      'README.md',
      'ARCHITECTURE.md',
      'CORE_INDEX.md',
      'EXTENSION_INDEX.md',
      'READABILITY.md',
      'CODE_INDEX.md',
      'docs/DEPENDENCY_MODEL.md',
      'docs/PUBLIC_BOOTSTRAP.md',
      'docs/ENGINEERING_SURFACE.md',
      'WORKSPACE.md',
      'mapped/engineering-surface.json',
      'mapped/quality-report.json',
      'src/',
      'rebuilt/src/',
      'scripts/',
      'test/',
    ],
    repositoryModel: {
      summary: '不是纯插件仓，而是 Cursor/VS Code 本体 rebuilt 层 + Cursor 内置扩展层的双层工程。',
      coreRuntimeLayer: {
        description: '直接接管 app main、CLI、workbench、watcher 等宿主运行时入口。',
        anchorPaths: [
          'src/main/index.js',
          'src/cli/index.js',
          'src/vs/workbench/workbenchDesktopMain/index.js',
          'src/vs/platform/files/node/watcherMain/index.js',
        ],
      },
      extensionLayer: {
        description: '宿主内置的 Cursor 扩展能力层。',
        anchorPaths: [
          'src/extensions/cursor-agent-exec/index.js',
          'src/extensions/cursor-browser-automation/index.js',
          'src/extensions/cursor-mcp/index.js',
        ],
      },
    },
    editableDirectories: [
      {
        path: 'src/',
        role: '顶层源码入口，指向 rebuilt/src，方便直接进入代码文件。',
        editPolicy: 'primary-alias',
        anchorPaths: [
          'src/vs/workbench/workbenchDesktopMain/index.js',
          'src/vs/platform/files/node/watcherMain/index.js',
          'src/main/index.js',
          'src/cli/index.js',
        ],
      },
      {
        path: 'rebuilt/',
        role: '真正的工程源码层，目标是可维护的恢复后源码。',
        editPolicy: 'primary',
        anchorPaths: [
          'rebuilt/src/vs/workbench/workbenchDesktopMain/index.js',
          'rebuilt/src/vs/platform/files/node/watcherMain/index.js',
        ],
      },
      {
        path: 'scripts/',
        role: '构建、恢复、报告、装配和校验自动化。',
        editPolicy: 'primary',
        anchorPaths: [
          'scripts/build-rebuilt-slice.mjs',
          'scripts/generate-quality-report.mjs',
          'scripts/generate-engineering-surface-report.mjs',
        ],
      },
      {
        path: 'test/',
        role: '运行时、GUI、smoke、agent 和 spike 校验。',
        editPolicy: 'primary',
        anchorPaths: [
          'test/run-smoke.mjs',
          'test/run-agent.mjs',
          'test/smoke/bootstrap.test.mjs',
          'test/agent/bootstrap.test.mjs',
        ],
      },
      {
        path: 'docs/',
        role: '仓库导航、工程入口和阶段说明。',
        editPolicy: 'primary',
        anchorPaths: [
          'docs/ENGINEERING_SURFACE.md',
          'docs/DEPENDENCY_MODEL.md',
          'docs/PUBLIC_BOOTSTRAP.md',
        ],
      },
    ],
    runtimeBaselineDirectories: [
      'out/',
      'extensions/',
      'resources/',
      'bin/',
      'node_modules/',
    ],
  },
  supportLayers: {
    generatedButUseful: [
      {
        path: 'mapped/',
        role: '机器生成的报告、基线、质量汇总和映射结果。',
      },
      {
        path: 'recovered/',
        role: '恢复过程产物、built 结果、runtime 组装结果、覆盖层。',
      },
    ],
    readOnlyReference: [
      {
        path: 'reference/',
        role: '上游 VS Code 和只读参考。',
      },
      {
        path: 'raw/',
        role: '原始抽取层，不直接演进。',
      },
    ],
    archiveAndHistory: [
      'notes/',
      'archived/',
      'wrapDoc/',
    ],
  },
  operatorGuidance: {
    editFirst: [
      'src/',
      'rebuilt/',
      'scripts/',
      'test/',
      'docs/',
    ],
    avoidEditingDirectly: [
      'out/',
      'extensions/',
      'resources/',
      'bin/',
      'node_modules/',
      'reference/',
      'raw/',
      'recovered/',
      'mapped/',
    ],
    defaultCommands: [
      'npm run report:engineering-surface',
      'npm run verify:public-bootstrap',
      'npm run report:quality',
      'npm run accept',
      'npm run test:startup-loader-rollout:full',
      'npm run test:watcher:spike',
      'npm run test:workbench-desktop-main:spike',
    ],
  },
  sources: {
    qualityReport: fs.existsSync(path.join(MAPPED, 'quality-report.json'))
      ? relative(path.join(MAPPED, 'quality-report.json'))
      : null,
    sourceQuality: fs.existsSync(path.join(MAPPED, 'rebuilt-source-quality.json'))
      ? relative(path.join(MAPPED, 'rebuilt-source-quality.json'))
      : null,
    sliceMaturity: fs.existsSync(path.join(MAPPED, 'rebuilt-slice-maturity.json'))
      ? relative(path.join(MAPPED, 'rebuilt-slice-maturity.json'))
      : null,
    rebuiltSlices: relative(path.join(MAPPED, 'rebuilt-slices.json')),
    startupLoaderRuntimeGate: fs.existsSync(path.join(MAPPED, 'startup-loader-runtime-gate.json'))
      ? relative(path.join(MAPPED, 'startup-loader-runtime-gate.json'))
      : null,
    startupLoaderRolloutGate: fs.existsSync(path.join(MAPPED, 'startup-loader-rollout-gate.json'))
      ? relative(path.join(MAPPED, 'startup-loader-rollout-gate.json'))
      : null,
    acceptLatest: fs.existsSync(acceptLatestPath) ? relative(acceptLatestPath) : null,
  },
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2) + '\n');
console.log(OUTPUT_PATH);
