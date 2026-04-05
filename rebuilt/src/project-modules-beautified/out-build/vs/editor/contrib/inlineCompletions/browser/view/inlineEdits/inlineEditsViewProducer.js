"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditsViewProducer.js
// Offset: 25559599 (bundle byte offset)
// Size: 1846 bytes
v9e();
rt();
Uc();
Wt();
V$();
Ix();
ts();
EW();
q3t();
Vyg();
YSA();
kkA();
_dn();
bua = class extends at {
  static {
    Fjl = this;
  }
  static {
    this.hot = i3n(Fjl);
  }
  constructor(e, t, i, r, s) {
    super();
    this._editor = e;
    this._edit = t;
    this._model = i;
    this._focusIsInMenu = r;
    this._inlineEdit = Ro(this, o => {
      const a = this._model.read(o);
      if (!a) {
        return;
      }
      const l = this._edit.read(o);
      if (!l) {
        return;
      }
      const u = this._editor.getModel();
      if (!u) {
        return;
      }
      const d = a.inlineEditState.get()?.inlineCompletion.updatedEdit.read(o);
      if (!d) {
        return;
      }
      const p = (a.inPartialAcceptFlow.read(o) ? [d.edits[0]] : d.edits).map(A => {
        const w = Zt.fromPositions(u.getPositionAt(A.replaceRange.start), u.getPositionAt(A.replaceRange.endExclusive));
        return new cI(w, A.newText);
      });
      const g = new Fte(p);
      const f = new bKe(u);
      return new wjl(f, g, a.primaryPosition.get(), l.commands, l.inlineCompletion);
    });
    this._inlineEditModel = Ro(this, o => {
      const a = this._model.read(o);
      if (!a) {
        return;
      }
      const l = this._inlineEdit.read(o);
      if (!l) {
        return;
      }
      const u = Ro(this, d => {
        if (this._editorObs.isFocused.read(d)) {
          if (a.tabShouldJumpToInlineEdit.read(d)) {
            return sV.Jump;
          }
          if (a.tabShouldAcceptInlineEdit.read(d)) {
            return sV.Accept;
          }
        }
        return sV.Inactive;
      });
      return new _jl(a, l, u);
    });
    this._inlineEditHost = Ro(this, o => {
      const a = this._model.read(o);
      if (a) {
        return new Kyg(a);
      }
    });
    this._ghostTextIndicator = Ro(this, o => {
      const a = this._model.read(o);
      if (!a) {
        return;
      }
      const l = a.inlineCompletionState.read(o);
      if (!l) {
        return;
      }
      const u = l.inlineCompletion;
      if (!u || !u.sourceInlineCompletion.showInlineEditMenu) {
        return;
      }
      const d = rh.ofLength(l.primaryGhostText.lineNumber, 1);
      return new Yyg(this._editor, a, d, u);
    });
    this._editorObs = HB(this._editor);
    this._register(s.createInstance(fua, this._editor, this._inlineEditHost, this._inlineEditModel, this._ghostTextIndicator, this._focusIsInMenu));
  }
};
bua = Fjl = __decorate([__param(4, ln)], bua);
