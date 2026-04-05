#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { ROOT } from './paths.mjs';

const SRC_ROOT = path.join(ROOT, 'rebuilt', 'src');
const OUTPUT_PATH = path.join(ROOT, 'mapped', 'readability-report.json');
const SOURCE_EXTENSIONS = new Set(['.js', '.mjs', '.ts']);
const HOTSPOT_LIMIT = 20;

const READABLE_ANCHORS = [
  'main/index.js',
  'cli/index.js',
  'bootstrapFork/index.js',
  'shared/originalNodeEntrypointProxy/index.js',
  'shared/originalBrowserModuleProxy/index.js',
  'vs/workbench/workbenchDesktopMain/index.js',
  'vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js',
  'vs/platform/files/node/watcherMain/index.js',
  'extensions/cursor-browser-automation/index.js',
  'extensions/cursor-agent-exec/index.js',
  'extensions/cursor-mcp/index.js',
];

const COMPLEX_BUT_HUMAN_FILES = [
  'vs/workbench/contrib/composer/browser/preloadWebviewBrowser/index.js',
];

const HARD_ZONE_MARKERS = [
  'project-modules-raw/',
  'node_modules/',
  '/dist/',
  '/proto/',
];

function walk(dirPath, files = []) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    const ext = path.extname(entry.name);
    if (SOURCE_EXTENSIONS.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function countLines(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.length === 0) {
    return 0;
  }
  return content.split('\n').length;
}

function relativeFromSrc(filePath) {
  return path.relative(SRC_ROOT, filePath).split(path.sep).join('/');
}

function looksGeneratedOrPayload(relativePath) {
  return (
    HARD_ZONE_MARKERS.some((marker) => relativePath.includes(marker)) ||
    relativePath.endsWith('_pb.js') ||
    relativePath.endsWith('/bundle.js') ||
    relativePath.endsWith('.min.js')
  );
}

function isReadableAnchor(relativePath) {
  return READABLE_ANCHORS.includes(relativePath);
}

function isComplexButHuman(relativePath) {
  return COMPLEX_BUT_HUMAN_FILES.includes(relativePath);
}

const sourceFiles = walk(SRC_ROOT);
const rows = sourceFiles.map((filePath) => {
  const relativePath = relativeFromSrc(filePath);
  const lineCount = countLines(filePath);
  return {
    relativePath,
    lineCount,
    generatedLike: looksGeneratedOrPayload(relativePath),
    readableAnchor: isReadableAnchor(relativePath),
    complexButHuman: isComplexButHuman(relativePath),
  };
});

const hotspotFiles = [...rows]
  .sort((left, right) => right.lineCount - left.lineCount)
  .slice(0, HOTSPOT_LIMIT)
  .map((row) => ({
    path: `rebuilt/src/${row.relativePath}`,
    lineCount: row.lineCount,
    generatedLike: row.generatedLike,
  }));

const hugeFilesOver1000 = rows.filter((row) => row.lineCount >= 1000).length;
const hugeFilesOver5000 = rows.filter((row) => row.lineCount >= 5000).length;
const generatedLikeFiles = rows.filter((row) => row.generatedLike).length;
const readableAnchorCount = rows.filter((row) => row.readableAnchor).length;
const complexButHumanCount = rows.filter((row) => row.complexButHuman).length;

const report = {
  generatedAt: new Date().toISOString(),
  repoRoot: ROOT,
  verdict: {
    globallyReadable: false,
    humanControlSurfaceReadable: true,
    summary:
      '入口控制面和 rebuilt 代理层已经可读，但仓库整体仍包含大量生成物、proto、dist bundle 和超长 payload 文件，不能算全局可读。',
  },
  totals: {
    sourceFileCount: rows.length,
    readableAnchorCount,
    complexButHumanCount,
    generatedLikeFileCount: generatedLikeFiles,
    hugeFilesOver1000,
    hugeFilesOver5000,
  },
  readableNow: {
    topLevelAlias: 'src/',
    anchorFiles: READABLE_ANCHORS.map((relativePath) => `src/${relativePath}`),
    notes: [
      '这些文件是默认应该先读的控制面，不需要先钻进 project-modules-raw 或大 bundle。',
      '它们定义了 app main、CLI、workbench、watcher、extension provider 等真实工程入口。',
    ],
  },
  stillHardToRead: {
    characteristics: [
      '超长第三方 bundle 或 dist 产物',
      'proto 生成文件',
      'raw 恢复层 payload',
      '单文件 preload / browser glue 过长',
    ],
    hotspotFiles,
  },
  nextReadableTargets: [
    {
      path: 'src/vs/workbench/contrib/composer/browser/preloadWebviewBrowser/index.js',
      reason: '是真正业务相关的人写 glue 层，但已经长到需要拆分职责。',
    },
    {
      path: 'src/vs/workbench/workbenchDesktopMain/index.js',
      reason: '虽然可读，但属于全局入口，适合继续补结构说明和子模块导航。',
    },
  ],
  plan: [
    '继续把可读入口保持在 src/、CORE_INDEX.md、EXTENSION_INDEX.md 这一层，不让人先掉进 raw payload。',
    '对复杂但仍有人维护的长文件先加同目录 README 或 role map，而不是直接硬看 1000+ 行实现。',
    '对 proto、dist、第三方 bundle 一律标为 payload，不把它们当默认阅读面。',
    '对真正需要长期维护的长文件，逐步拆分成 facade + helper + capability 子模块。',
  ],
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2) + '\n');
console.log(OUTPUT_PATH);
