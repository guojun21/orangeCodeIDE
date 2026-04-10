'use strict';

globalThis.__SHOPEE_CLI_RUNTIME_BRIDGE__ ??= {
  source: 'rebuilt/src/cli/cliRuntimeBridge.js',
  kind: 'rebuilt-cli-runtime-bridge',
};

// Keep CLI behavior unchanged while moving the staged-runtime import behind
// a named bridge module. The active entry can now forward through source-owned code.
import '../../../recovered/phase2/runtime-input/out/cli.js';
