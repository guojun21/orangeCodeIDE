"use strict";

// Module: out-build/vs/workbench/services/cursorHooks/common/cursorHooks.js
// Offset: 30363404 (bundle byte offset)
// Size: 1065 bytes
Wt();
lX = xi("cursorHooksService");
Znt = class extends Error {
    constructor(n, e) {
        const t = e ? `File reading was blocked by a security hook: ${e}` : `File reading was blocked by a security hook: ${n}. Do not attempt to work around this restriction using alternative methods or commands.`;
        super(t);
        this.name = "FileReadBlockedByHookError";
        this.filePath = n;
        this.userMessage = e;
    }
};
