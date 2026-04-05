'use strict';

import { bootstrapWebWorker } from '../../../../../../../../reference/vscode/src/vs/base/common/worker/webWorkerBootstrap.ts';
import { create } from '../../../../../../../../reference/vscode/src/vs/workbench/services/languageDetection/browser/languageDetectionWebWorker.ts';

globalThis.__SHOPEE_LANGUAGE_DETECTION_WEB_WORKER_MAIN__ ??= {
  source: 'rebuilt/src/vs/workbench/services/languageDetection/browser/languageDetectionWebWorkerMain/index.js',
  kind: 'rebuilt-worker-main',
};

export const ready = '__SHOPEE_LANGUAGE_DETECTION_WEB_WORKER_MAIN__';

bootstrapWebWorker(create);
