'use strict';

globalThis.__SHOPEE_CLI_PROCESS_MAIN__ ??= {
  source: 'rebuilt/src/vs/code/node/cliProcessMain/index.js',
  kind: 'rebuilt-node-entry',
};

export { main } from '../../../../../../out/vs/code/node/cliProcessMain.js';
