#!/usr/bin/env node

import path from 'path';
import { generateSourceNormalizationReport } from './report-source-normalization.mjs';
import { ROOT } from './paths.mjs';

const RESULT_PATH = path.join(ROOT, 'mapped', 'source-normalization-report.json');

const result = generateSourceNormalizationReport();

if (!result.passed) {
  const reasons = [];
  if (result.missingEntrypoints?.length) {
    reasons.push(`missingEntrypoints=${result.missingEntrypoints.length}`);
  }
  if (result.totals?.unexpectedMatchCount) {
    reasons.push(`unexpectedMatches=${result.totals.unexpectedMatchCount}`);
  }
  const reasonText = reasons.length > 0 ? reasons.join(', ') : 'unknown';
  throw new Error(`Source normalization verification failed: ${reasonText}`);
}

console.log(RESULT_PATH);
