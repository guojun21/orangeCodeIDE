'use strict';

globalThis.__SHOPEE_PTY_HOST_RUNTIME_BRIDGE__ ??= {
  source: 'rebuilt/src/vs/platform/terminal/node/ptyHostMain/ptyHostRuntimeBridge.js',
  kind: 'rebuilt-pty-host-runtime-bridge',
};

// Keep PTY host behavior unchanged while moving the staged-runtime import
// behind a named bridge module. The active entry can now forward through
// source-owned code without changing side effects or startup order.
import '../../../../../../../recovered/phase2/runtime-input/out/vs/platform/terminal/node/ptyHostMain.js';
