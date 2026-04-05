'use strict';

import { bootstrapWebWorker } from '../../../../../../../../../reference/vscode/src/vs/base/common/worker/webWorkerBootstrap.ts';
import { create } from '../../../../../../../../../reference/vscode/src/vs/workbench/contrib/notebook/common/services/notebookWebWorker.ts';

globalThis.__SHOPEE_NOTEBOOK_WEB_WORKER_MAIN__ ??= {
  source: 'rebuilt/src/vs/workbench/contrib/notebook/common/services/notebookWebWorkerMain/index.js',
  kind: 'rebuilt-worker-main',
};

export const ready = '__SHOPEE_NOTEBOOK_WEB_WORKER_MAIN__';

bootstrapWebWorker(create);
