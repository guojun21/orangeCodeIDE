"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/inlineEdit.js
// Offset: 25334808 (bundle byte offset)
// Size: 878 bytes
fyg = class {
    constructor(n, e, t) {
        this.edit = n;
        this.commands = e;
        this.inlineCompletion = t;
    }
    get range() {
        return this.edit.range;
    }
    get text() {
        return this.edit.text;
    }
    equals(n) {
        return this.edit.equals(n.edit) && this.inlineCompletion === n.inlineCompletion;
    }
};
