"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/native/nativeEditContextRegistry.js
// Offset: 1848878 (bundle byte offset)
// Size: 370 bytes
twh = class {
    constructor() {
        this._nativeEditContextMapping = new Map();
    }
    register(n, e) {
        this._nativeEditContextMapping.set(n, e);
        return {
            dispose: () => {
                this._nativeEditContextMapping.delete(n);
            }
        };
    }
    get(n) {
        return this._nativeEditContextMapping.get(n);
    }
};
yIc = new twh();
