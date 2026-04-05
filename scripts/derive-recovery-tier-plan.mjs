#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ROOT } from './paths.mjs';

const DEFAULT_DIRS = [
  'recovered/cursor-recovered',
  'recovered/packages-ui-recovered',
  'recovered/packages-ui-components',
];

const recoveryQualityPath = path.join(ROOT, 'mapped', 'recovery-quality-report.json');
const promotionGatePath = path.join(ROOT, 'mapped', 'promotion-gate-result.json');
const outputPath = path.join(ROOT, 'mapped', 'recovery-tier-plan.json');

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

function getAllTrackedFiles() {
  return DEFAULT_DIRS.flatMap(dir =>
    walkJsFiles(path.join(ROOT, dir)).map(file => normalizePath(path.relative(ROOT, file)))
  );
}

function buildPromotionIndex(promotionGate) {
  const index = new Map();
  for (const candidate of promotionGate.candidates ?? []) {
    index.set(candidate.file, {
      id: candidate.id,
      recommendation: candidate.recommendation,
      gateReady: candidate.gateReady,
      score: candidate.gates?.staticGateScore ?? null,
    });
  }
  return index;
}

function classifyDirectory(summary, directoryFiles, candidateFiles, promotionIndex) {
  const wrapperSignals = directoryFiles
    .map(file => promotionIndex.get(file))
    .filter(Boolean);

  if (summary.passedCount === 0) {
    return {
      classification: 'analysis-only',
      recommendation: 'freeze-as-analysis',
      rationale:
        '当前目录没有任何文件通过 recovery-quality，先禁止目录级 promotion 或搬迁。',
      wrapperSignals: [],
    };
  }

  if (summary.passedCount < summary.fileCount) {
    return {
      classification: 'mixed',
      recommendation: 'promote-passed-files-only',
      rationale:
        '当前目录只有少量文件达标，先按文件级提升，剩余文件继续留在 analysis 层。',
      wrapperSignals,
    };
  }

  return {
    classification: 'candidate-source-ready',
    recommendation: 'eligible-for-directory-promotion',
    rationale: '当前目录全部文件通过 recovery-quality，可考虑整体进入 candidate-source。',
    wrapperSignals,
  };
}

function main() {
  const recoveryQuality = JSON.parse(fs.readFileSync(recoveryQualityPath, 'utf8'));
  const promotionGate = fs.existsSync(promotionGatePath)
    ? JSON.parse(fs.readFileSync(promotionGatePath, 'utf8'))
    : { candidates: [] };

  const failedByFile = new Map(
    recoveryQuality.failedFiles.map(file => [file.file, file])
  );
  const allFiles = getAllTrackedFiles();
  const passedFiles = allFiles.filter(file => !failedByFile.has(file));
  const promotionIndex = buildPromotionIndex(promotionGate);

  const directories = recoveryQuality.directories.map(summary => {
    const directoryFiles = allFiles.filter(file => file.startsWith(`${summary.input}/`));
    const candidateFiles = directoryFiles.filter(file => !failedByFile.has(file));
    const analysisFiles = directoryFiles.filter(file => failedByFile.has(file));
    const classification = classifyDirectory(
      summary,
      directoryFiles,
      candidateFiles,
      promotionIndex
    );

    return {
      input: summary.input,
      fileCount: summary.fileCount,
      passedCount: summary.passedCount,
      classification: classification.classification,
      recommendation: classification.recommendation,
      rationale: classification.rationale,
      candidateFiles,
      analysisFileCount: analysisFiles.length,
      primaryBlockers: summary.failureBreakdown.slice(0, 5),
      wrapperPromotionSignals: classification.wrapperSignals,
    };
  });

  const candidateNow = directories.flatMap(dir =>
    dir.candidateFiles.map(file => ({
      file,
      sourceDirectory: dir.input,
      promotionSignal: promotionIndex.get(file) ?? null,
    }))
  );

  const wrapperOnlySignals = Array.from(promotionIndex.entries())
    .filter(([file]) => failedByFile.has(file))
    .map(([file, signal]) => ({
      file,
      ...signal,
    }));

  const output = {
    generatedAt: new Date().toISOString(),
    sourceReports: {
      recoveryQuality: normalizePath(path.relative(ROOT, recoveryQualityPath)),
      promotionGate: fs.existsSync(promotionGatePath)
        ? normalizePath(path.relative(ROOT, promotionGatePath))
        : null,
    },
    directories,
    candidateNow,
    wrapperOnlySignals,
    immediateActions: [
      {
        step: '冻结 recovered/cursor-recovered 为 analysis-only',
        reason: '0/506 通过 recovery-quality，且 parse / wrapper / 行长问题同时存在。',
      },
      {
        step: '只提升 packages-ui 已通过文件',
        reason:
          '当前仅 4 个文件通过 recovery-quality，应按文件级 promotion，而不是目录级搬迁。',
      },
      {
        step: '保留 packages-ui-components 中的 wrapper-backed promotion 信号',
        reason:
          'FileTree / ModelPicker / PlanTodosSection / Streamdown 仍未 parse，但 promotion-gate 为后续 v2 提取提供了稳定目标。',
      },
    ],
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`Recovery tier plan: ${normalizePath(path.relative(ROOT, outputPath))}`);
  for (const directory of directories) {
    console.log(
      `${directory.input}: ${directory.classification} ${directory.passedCount}/${directory.fileCount} candidates=${directory.candidateFiles.length}`
    );
  }
  console.log(`Candidate-now files: ${candidateNow.length}`);
  console.log(`Wrapper-only promotion signals: ${wrapperOnlySignals.length}`);
}

main();
