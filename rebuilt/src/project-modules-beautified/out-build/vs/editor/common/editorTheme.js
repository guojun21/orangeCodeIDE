"use strict";

// Module: out-build/vs/editor/common/editorTheme.js
// Offset: 1758378 (bundle byte offset)
// Size: 248 bytes
vyh = class {
    get type() {
        return this._theme.type;
    }
    get value() {
        return this._theme;
    }
    constructor(n) {
        this._theme = n;
    }
    update(n) {
        this._theme = n;
    }
    getColor(n) {
        return this._theme.getColor(n);
    }
};
