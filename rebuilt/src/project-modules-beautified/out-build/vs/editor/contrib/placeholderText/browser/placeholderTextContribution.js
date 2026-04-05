"use strict";

// Module: out-build/vs/editor/contrib/placeholderText/browser/placeholderTextContribution.js
// Offset: 33176286 (bundle byte offset)
// Size: 1744 bytes
ri();
Nbe();
rt();
Uc();
V$();
nki = class wzb extends at {
  static get(e) {
    return e.getContribution(wzb.ID);
  }
  static {
    this.ID = "editor.contrib.placeholderText";
  }
  constructor(e) {
    super();
    this._editor = e;
    this._editorObs = HB(this._editor);
    this._placeholderText = this._editorObs.getOption(92);
    this._state = uF({
      owner: this,
      equalsFn: Hze
    }, t => {
      const i = this._placeholderText.read(t);
      if (i && this._editorObs.valueIsEmpty.read(t)) {
        return {
          placeholder: i
        };
      }
    });
    this._shouldViewBeAlive = Quy(this, t => this._state.read(t)?.placeholder !== undefined);
    this._view = Ite((t, i) => {
      if (!this._shouldViewBeAlive.read(t)) {
        return;
      }
      const r = kl("div.editorPlaceholder");
      i.add(Oc(s => {
        const o = this._state.read(s);
        const a = o?.placeholder !== undefined;
        r.root.style.display = a ? "block" : "none";
        r.root.innerText = o?.placeholder ?? "";
      }));
      i.add(Oc(s => {
        const o = this._editorObs.layoutInfo.read(s);
        r.root.style.left = `${o.contentLeft}px`;
        r.root.style.width = o.contentWidth - o.verticalScrollbarWidth + "px";
        r.root.style.top = `${this._editor.getTopForLineNumber(0)}px`;
      }));
      i.add(Oc(s => {
        r.root.style.fontFamily = this._editorObs.getOption(51).read(s);
        r.root.style.fontSize = this._editorObs.getOption(54).read(s) + "px";
        r.root.style.lineHeight = this._editorObs.getOption(68).read(s) + "px";
      }));
      i.add(this._editorObs.createOverlayWidget({
        allowEditorOverflow: false,
        minContentWidthInPx: F0(0),
        position: F0(null),
        domNode: r.root
      }));
    });
    this._view.recomputeInitiallyAndOnChange(this._store);
  }
};
