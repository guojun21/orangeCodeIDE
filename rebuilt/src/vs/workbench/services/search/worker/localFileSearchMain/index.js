'use strict';

import { bootstrapWebWorker } from '../../../../../../../../reference/vscode/src/vs/base/common/worker/webWorkerBootstrap.ts';
import { create } from '../../../../../../../../reference/vscode/src/vs/workbench/services/search/worker/localFileSearch.ts';

globalThis.__SHOPEE_LOCAL_FILE_SEARCH_MAIN__ ??= {
  source: 'rebuilt/src/vs/workbench/services/search/worker/localFileSearchMain/index.js',
  kind: 'rebuilt-worker-main',
};

export const ready = '__SHOPEE_LOCAL_FILE_SEARCH_MAIN__';

bootstrapWebWorker(create);
