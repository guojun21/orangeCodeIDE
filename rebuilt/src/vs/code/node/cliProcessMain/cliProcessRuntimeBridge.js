'use strict';

globalThis.__SHOPEE_CLI_PROCESS_MAIN__ ??= {
  source: 'rebuilt/src/vs/code/node/cliProcessMain/cliProcessRuntimeBridge.js',
  kind: 'rebuilt-node-entry',
};

export { main } from '../../../../../../recovered/phase2/runtime-input/out/vs/code/node/cliProcessMain.js';
