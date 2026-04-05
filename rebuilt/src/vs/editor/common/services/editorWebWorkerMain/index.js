'use strict';

import { bootstrapWebWorker } from '../../../../../../../reference/vscode/src/vs/base/common/worker/webWorkerBootstrap.ts';
import { EditorWorker } from '../../../../../../../reference/vscode/src/vs/editor/common/services/editorWebWorker.ts';

globalThis.__SHOPEE_EDITOR_WEB_WORKER_MAIN__ ??= {
  source: 'rebuilt/src/vs/editor/common/services/editorWebWorkerMain/index.js',
  kind: 'rebuilt-worker-main',
};

export const ready = '__SHOPEE_EDITOR_WEB_WORKER_MAIN__';

bootstrapWebWorker(() => new EditorWorker(null));
