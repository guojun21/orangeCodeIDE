'use strict';

import { bootstrapWebWorker } from '../../../../../../../../../../reference/vscode/src/vs/base/common/worker/webWorkerBootstrap.ts';
import { create } from '../../../../../../../../../../reference/vscode/src/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateTokenizationWorker.worker.ts';

globalThis.__SHOPEE_TEXTMATE_TOKENIZATION_WORKER_MAIN__ ??= {
  source: 'rebuilt/src/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateTokenizationWorkerMain/index.js',
  kind: 'rebuilt-worker-main',
};

export const ready = '__SHOPEE_TEXTMATE_TOKENIZATION_WORKER_MAIN__';

bootstrapWebWorker(create);
