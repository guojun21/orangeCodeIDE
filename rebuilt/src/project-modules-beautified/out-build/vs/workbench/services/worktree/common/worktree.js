"use strict";

// Module: out-build/vs/workbench/services/worktree/common/worktree.js
// Offset: 26900186 (bundle byte offset)
// Size: 551 bytes
Wt();
UFg = class extends Error {
    constructor(n = "No changes to apply") {
        super(n);
        this.name = "NoChangesToApplyError";
    }
};
Lnu = class {
    constructor(n, e) {
        this.currentLock = n;
        this.releaseLock = e;
        this._isDisposed = false;
    }
    dispose() {
            if (!this._isDisposed) {
                this._isDisposed = true;
                this.releaseLock();
            }
        }
        [Symbol.dispose]() {
            this.dispose();
        }
};
Oga = class extends Error {
    constructor(n = "Worktree operation canceled") {
        super(n);
        this.name = "WorktreeOperationCanceledError";
    }
};
C$e = xi("worktreeManagerService");
