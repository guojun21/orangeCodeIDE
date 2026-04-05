"use strict";

// Module: out-build/vs/editor/contrib/wordHighlighter/browser/textualHighlightProvider.js
// Offset: 32764441 (bundle byte offset)
// Size: 1589 bytes
Jbe();
Cm();
Tg();
rt();
cu();
Myu = class {
  constructor() {
    this.selector = {
      language: "*"
    };
  }
  provideDocumentHighlights(n, e, t) {
    const i = [];
    const r = n.getWordAtPosition({
      lineNumber: e.lineNumber,
      column: e.column
    });
    if (r) {
      if (n.isDisposed()) {
        return undefined;
      } else {
        return n.findMatches(r.word, true, false, true, eVe, false).map(o => ({
          range: o.range,
          kind: LOt.Text
        }));
      }
    } else {
      return Promise.resolve(i);
    }
  }
  provideMultiDocumentHighlights(n, e, t, i) {
    const r = new fu();
    const s = n.getWordAtPosition({
      lineNumber: e.lineNumber,
      column: e.column
    });
    if (!s) {
      return Promise.resolve(r);
    }
    for (const o of [n, ...t]) {
      if (o.isDisposed()) {
        continue;
      }
      const l = o.findMatches(s.word, true, false, true, eVe, false).map(u => ({
        range: u.range,
        kind: LOt.Text
      }));
      if (l) {
        r.set(o.uri, l);
      }
    }
    return r;
  }
};
vxa = class extends at {
  constructor(e) {
    super();
    this._register(e.documentHighlightProvider.register("*", new Myu()));
    this._register(e.multiDocumentHighlightProvider.register("*", new Myu()));
  }
};
vxa = __decorate([__param(0, $u)], vxa);
