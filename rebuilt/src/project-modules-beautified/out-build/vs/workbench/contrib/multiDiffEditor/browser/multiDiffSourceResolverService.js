"use strict";

// Module: out-build/vs/workbench/contrib/multiDiffEditor/browser/multiDiffSourceResolverService.js
// Offset: 33626593 (bundle byte offset)
// Size: 2117 bytes
_s();
rt();
Wt();
Hbn = xi("multiDiffSourceResolverService");
Nrt = class {
  constructor(n, e, t, i, r, s, o) {
    this.originalUri = n;
    this.modifiedUri = e;
    this.goToFileUri = t;
    this.contextKeys = i;
    this.status = r;
    this.originalContents = s;
    this.modifiedContents = o;
    if (!n && !e) {
      throw new _m("Invalid arguments");
    }
  }
  getKey() {
    return JSON.stringify([this.modifiedUri?.toString(), this.originalUri?.toString()]);
  }
};
D6f = class {
  constructor() {
    this._resolvers = new Set();
  }
  registerResolver(n) {
    if (this._resolvers.has(n)) {
      throw new _m("Duplicate resolver");
    }
    this._resolvers.add(n);
    return $i(() => this._resolvers.delete(n));
  }
  resolve(n) {
    for (const e of this._resolvers) {
      if (e.canHandleUri(n)) {
        return e.resolveDiffSource(n);
      }
    }
    return Promise.resolve(undefined);
  }
};
