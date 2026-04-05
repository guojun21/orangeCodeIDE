'use strict';

import { bootstrapWebWorker } from '../../../../../../../../reference/vscode/src/vs/base/common/worker/webWorkerBootstrap.ts';
import { create } from '../../../../../../../../reference/vscode/src/vs/workbench/contrib/output/common/outputLinkComputer.ts';

globalThis.__SHOPEE_OUTPUT_LINK_COMPUTER_MAIN__ ??= {
  source: 'rebuilt/src/vs/workbench/contrib/output/common/outputLinkComputerMain/index.js',
  kind: 'rebuilt-worker-main',
};

export const ready = '__SHOPEE_OUTPUT_LINK_COMPUTER_MAIN__';

bootstrapWebWorker(create);
