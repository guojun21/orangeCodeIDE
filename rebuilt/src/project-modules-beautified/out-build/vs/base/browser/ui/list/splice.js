"use strict";

// Module: out-build/vs/base/browser/ui/list/splice.js
// Offset: 1956149 (bundle byte offset)
// Size: 962 bytes
Lwh = class {
    constructor(n) {
        this.spliceables = n;
    }
    splice(n, e, t) {
        this.spliceables.forEach(i => i.splice(n, e, t));
    }
};
