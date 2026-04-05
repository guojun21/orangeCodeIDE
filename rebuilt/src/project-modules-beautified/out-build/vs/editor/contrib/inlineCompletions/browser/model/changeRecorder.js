"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/changeRecorder.js
// Offset: 25265921 (bundle byte offset)
// Size: 871 bytes
rt();
Uc();
Wt();
VI();
FAg();
Nla = class extends at {
  constructor(e, t) {
    super();
    this._editor = e;
    this._instantiationService = t;
    this._structuredLogger = this._register(this._instantiationService.createInstance(Cgi.cast(), "editor.inlineSuggest.logChangeReason.commandId"));
    this._register(M0((i, r) => {
      if (!(this._editor instanceof WS) || !this._structuredLogger.isEnabled.read(i)) {
        return;
      }
      const s = [];
      r.add(this._editor.onBeforeExecuteEdit(({
        source: o
      }) => {
        if (o) {
          s.push(o);
        }
      }));
      r.add(this._editor.onDidChangeModelContent(o => {
        const a = this._editor.getModel();
        if (a) {
          for (const l of s) {
            const u = {
              sourceId: "TextModel.setChangeReason",
              source: l,
              time: Date.now(),
              modelUri: a.uri.toString(),
              modelVersion: a.getVersionId()
            };
            this._structuredLogger.log(u);
          }
          s.length = 0;
        }
      }));
    }));
  }
};
Nla = __decorate([__param(1, ln)], Nla);
