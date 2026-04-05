"use strict";

// Module: out-build/vs/base/common/observableInternal/logging/debugger/utils.js
// Offset: 512193 (bundle byte offset)
// Size: 310 bytes
poh = class {
    constructor() {
        this._timeout = undefined;
    }
    throttle(n, e) {
        if (this._timeout === undefined) {
            this._timeout = setTimeout(() => {
                this._timeout = undefined;
                n();
            }, e);
        }
    }
    dispose() {
        if (this._timeout !== undefined) {
            clearTimeout(this._timeout);
        }
    }
};
