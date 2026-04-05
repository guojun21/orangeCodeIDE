"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/fixBrackets.js
// Offset: 25314899 (bundle byte offset)
// Size: 2856 bytes
Cph();
X5e();
Tph();
TOt();
REc();
oyg = class {
    constructor(n) {
        this.lines = n;
        this.tokenization = {
            getLineTokens: e => this.lines[e - 1]
        };
    }
    getValue() {
        return this.lines.map(n => n.getLineContent()).join(`
`);
    }
    getLineCount() {
        return this.lines.length;
    }
    getLineLength(n) {
        return this.lines[n - 1].getLineContent().length;
    }
};
