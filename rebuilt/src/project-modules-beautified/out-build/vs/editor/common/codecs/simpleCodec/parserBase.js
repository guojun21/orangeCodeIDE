"use strict";

// Module: out-build/vs/editor/common/codecs/simpleCodec/parserBase.js
// Offset: 31069403 (bundle byte offset)
// Size: 383 bytes
Lv();
Fqe = class {
    constructor(n = []) {
        this.currentTokens = n;
        this.isConsumed = false;
        this.startTokensCount = this.currentTokens.length;
    }
    get tokens() {
        return this.currentTokens;
    }
    assertNotConsumed() {
        Qb(this.isConsumed === false, "The parser object is already consumed and should not be used anymore.");
    }
};
