"use strict";

// Module: out-build/vs/workbench/contrib/webview/browser/webview.js
// Offset: 33117553 (bundle byte offset)
// Size: 895 bytes
Vs();
Yr();
Bc();
si();
Wt();
kr();
Qq();
kwu = new Sn("webviewFindWidgetVisible", false);
vbn = new Sn("webviewFindWidgetFocused", false);
Ewu = new Sn("webviewFindWidgetEnabled", false);
Wie = xi("webviewService");
(function (n) {
  n.NotebookRenderer = "notebookRenderer";
  n.CustomEditor = "customEditor";
  n.WebviewView = "webviewView";
})(t8f ||= {});
XSi = class {
  constructor(e, t) {
    this._memento = new EM(e, t);
    this._state = this._memento.getMemento(-1, 1);
  }
  getOrigin(e, t) {
    const i = this._getKey(e, t);
    const r = this._state[i];
    if (r && typeof r == "string") {
      return r;
    }
    const s = Wr();
    this._state[i] = s;
    this._memento.saveMemento();
    return s;
  }
  _getKey(e, t) {
    return JSON.stringify({
      viewType: e,
      key: t
    });
  }
};
XSi = __decorate([__param(1, Hi)], XSi);
Abn = class {
  constructor(e, t) {
    this._store = new XSi(e, t);
  }
  getOrigin(e, t) {
    return this._store.getOrigin(e, t.value);
  }
};
Abn = __decorate([__param(1, Hi)], Abn);
