"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerAgentProviderRouter.js
// Offset: 30409735 (bundle byte offset)
// Size: 525 bytes
dty();
LSf = class {
    constructor(n, e, t, i, r, s, o) {
        this.agentHandles = new Map();
        this.naiveComposerAgentProvider = new PSf(n, e, t, i, r, s, o);
    }
    createAgentHandle(n, e) {
        const t = this.agentHandles.get(n);
        if (t) {
            return t;
        }
        const i = this.naiveComposerAgentProvider.loadAgent(n, e, e.data.agentBackendData ?? {});
        this.agentHandles.set(n, i);
        return i;
    }
    getAgentHandle(n) {
        return this.agentHandles.get(n);
    }
    removeAgentHandle(n) {
        this.agentHandles.delete(n);
    }
};
