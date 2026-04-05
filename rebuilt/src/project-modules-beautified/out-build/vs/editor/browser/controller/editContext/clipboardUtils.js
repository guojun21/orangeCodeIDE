"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/clipboardUtils.js
// Offset: 1574604 (bundle byte offset)
// Size: 838 bytes
_r();
hF();
n3t = class vGb {
  static {
    this.INSTANCE = new vGb();
  }
  constructor() {
    this._lastState = null;
  }
  set(e, t) {
    this._lastState = {
      lastCopiedValue: e,
      data: t
    };
  }
  get(e) {
    if (this._lastState && this._lastState.lastCopiedValue === e) {
      return this._lastState.data;
    } else {
      this._lastState = null;
      return null;
    }
  }
};
l3o = {
  forceCopyWithSyntaxHighlighting: false
};
i3t = {
  getTextData(n) {
    const e = n.getData(NA.text);
    let t = null;
    const i = n.getData("vscode-editor-data");
    if (typeof i == "string") {
      try {
        t = JSON.parse(i);
        if (t.version !== 1) {
          t = null;
        }
      } catch {}
    }
    if (e.length === 0 && t === null && n.files.length > 0) {
      return [Array.prototype.slice.call(n.files, 0).map(s => s.name).join(`
`), null];
    } else {
      return [e, t];
    }
  },
  setTextData(n, e, t, i) {
    n.setData(NA.text, e);
    if (typeof t == "string") {
      n.setData("text/html", t);
    }
    n.setData("vscode-editor-data", JSON.stringify(i));
  }
};
