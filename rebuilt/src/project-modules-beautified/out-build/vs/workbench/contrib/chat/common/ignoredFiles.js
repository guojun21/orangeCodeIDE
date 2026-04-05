"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/ignoredFiles.js
// Offset: 32555843 (bundle byte offset)
// Size: 399 bytes
rt();
Wt();
xCi = xi("languageModelIgnoredFilesService");
s3f = class {
    constructor() {
        this._providers = new Set();
    }
    async fileIsIgnored(n, e) {
        const t = this._providers.values().next().value;
        if (t) {
            return t.isFileIgnored(n, e);
        } else {
            return false;
        }
    }
    registerIgnoredFileProvider(n) {
        this._providers.add(n);
        return $i(() => {
            this._providers.delete(n);
        });
    }
};
