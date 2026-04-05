"use strict";

// Module: out-build/vs/platform/undoRedo/common/undoRedo.js
// Offset: 1244171 (bundle byte offset)
// Size: 17124 bytes
Wt();
qB = xi("undoRedoService");
(function(n) {
    n[n.Resource = 0] = "Resource";
    n[n.Workspace = 1] = "Workspace";
})(tfh ||= {});
Axc = class {
    constructor(n, e) {
        this.resource = n;
        this.elements = e;
    }
};
FOt = class fad {
    static {
        this._ID = 0;
    }
    constructor() {
        this.id = fad._ID++;
        this.order = 1;
    }
    nextOrder() {
        if (this.id === 0) {
            return 0;
        } else {
            return this.order++;
        }
    }
    static {
        this.None = new fad();
    }
};
Ift = class bad {
    static {
        this._ID = 0;
    }
    constructor() {
        this.id = bad._ID++;
        this.order = 1;
    }
    nextOrder() {
        if (this.id === 0) {
            return 0;
        } else {
            return this.order++;
        }
    }
    static {
        this.None = new bad();
    }
};
