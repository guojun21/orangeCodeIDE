"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/suggestWidgetAdapter.js
// Offset: 25435115 (bundle byte offset)
// Size: 4059 bytes
Vs();
GD();
yn();
rt();
tl();
ts();
EW();
Tg();
Dgi();
Vde();
$Ag();
Tq();
Uc();
Gyg = class extends at {
  get selectedItem() {
    return this._currentSuggestItemInfo;
  }
  constructor(n, e, t) {
    super();
    this.editor = n;
    this.suggestControllerPreselector = e;
    this.onWillAccept = t;
    this.isSuggestWidgetVisible = false;
    this.isShiftKeyPressed = false;
    this._isActive = false;
    this._currentSuggestItemInfo = undefined;
    this._onDidSelectedItemChange = this._register(new Qe());
    this.onDidSelectedItemChange = this._onDidSelectedItemChange.event;
    this._register(n.onKeyDown(r => {
      if (r.shiftKey && !this.isShiftKeyPressed) {
        this.isShiftKeyPressed = true;
        this.update(this._isActive);
      }
    }));
    this._register(n.onKeyUp(r => {
      if (r.shiftKey && this.isShiftKeyPressed) {
        this.isShiftKeyPressed = false;
        this.update(this._isActive);
      }
    }));
    const i = aR.get(this.editor);
    if (i) {
      this._register(i.registerSelector({
        priority: 100,
        select: (o, a, l) => {
          const u = this.editor.getModel();
          if (!u) {
            return -1;
          }
          const d = this.suggestControllerPreselector();
          const m = d ? XUe(d, u) : undefined;
          if (!m) {
            return -1;
          }
          const p = ar.lift(a);
          const g = l.map((A, w) => {
            const C = jla.fromSuggestion(i, u, p, A, this.isShiftKeyPressed);
            const x = XUe(C.toSingleTextEdit(), u);
            const I = KAg(m, x);
            return {
              index: w,
              valid: I,
              prefixLength: x.text.length,
              suggestItem: A
            };
          }).filter(A => A && A.valid && A.prefixLength > 0);
          const f = Y_c(g, JP(A => A.prefixLength, p9));
          if (f) {
            return f.index;
          } else {
            return -1;
          }
        }
      }));
      let r = false;
      const s = () => {
        if (!r) {
          r = true;
          this._register(i.widget.value.onDidShow(() => {
            this.isSuggestWidgetVisible = true;
            this.update(true);
          }));
          this._register(i.widget.value.onDidHide(() => {
            this.isSuggestWidgetVisible = false;
            this.update(false);
          }));
          this._register(i.widget.value.onDidFocus(() => {
            this.isSuggestWidgetVisible = true;
            this.update(true);
          }));
        }
      };
      this._register(In.once(i.model.onDidTrigger)(o => {
        s();
      }));
      this._register(i.onWillInsertSuggestItem(o => {
        const a = this.editor.getPosition();
        const l = this.editor.getModel();
        if (!a || !l) {
          return;
        }
        const u = jla.fromSuggestion(i, l, a, o.item, this.isShiftKeyPressed);
        this.onWillAccept(u);
      }));
    }
    this.update(this._isActive);
  }
  update(n) {
    const e = this.getSuggestItemInfo();
    if (this._isActive !== n || !WSA(this._currentSuggestItemInfo, e)) {
      this._isActive = n;
      this._currentSuggestItemInfo = e;
      this._onDidSelectedItemChange.fire();
    }
  }
  getSuggestItemInfo() {
    const n = aR.get(this.editor);
    if (!n || !this.isSuggestWidgetVisible) {
      return;
    }
    const e = n.widget.value.getFocusedItem();
    const t = this.editor.getPosition();
    const i = this.editor.getModel();
    if (!!e && !!t && !!i) {
      return jla.fromSuggestion(n, i, t, e.item, this.isShiftKeyPressed);
    }
  }
  stopForceRenderingAbove() {
    aR.get(this.editor)?.stopForceRenderingAbove();
  }
  forceRenderingAbove() {
    aR.get(this.editor)?.forceRenderingAbove();
  }
};
jla = class sQb {
  static fromSuggestion(e, t, i, r, s) {
    let {
      insertText: o
    } = r.completion;
    let a = false;
    if (r.completion.insertTextRules & 4) {
      const u = new Ute().parse(o);
      if (u.children.length < 100) {
        kgi.adjustWhitespace(t, i, true, u);
      }
      o = u.toString();
      a = true;
    }
    const l = e.getOverwriteInfo(r, s);
    return new sQb(Zt.fromPositions(i.delta(0, -l.overwriteBefore), i.delta(0, Math.max(l.overwriteAfter, 0))), o, r.completion.kind, a);
  }
  constructor(e, t, i, r) {
    this.range = e;
    this.insertText = t;
    this.completionItemKind = i;
    this.isSnippetText = r;
  }
  equals(e) {
    return this.range.equalsRange(e.range) && this.insertText === e.insertText && this.completionItemKind === e.completionItemKind && this.isSnippetText === e.isSnippetText;
  }
  toSelectedSuggestionInfo() {
    return new xgh(this.range, this.insertText, this.completionItemKind, this.isSnippetText);
  }
  toSingleTextEdit() {
    return new cI(this.range, this.insertText);
  }
};
Wyg = class extends at {
  constructor(n, e, t) {
    super();
    this._editorObs = n;
    this._handleSuggestAccepted = e;
    this._suggestControllerPreselector = t;
    this._suggestWidgetAdaptor = this._register(new Gyg(this._editorObs.editor, () => {
      this._editorObs.forceUpdate();
      return this._suggestControllerPreselector();
    }, i => this._editorObs.forceUpdate(r => {
      this._handleSuggestAccepted(i);
    })));
    this.selectedItem = tp(this, i => this._suggestWidgetAdaptor.onDidSelectedItemChange(() => {
      this._editorObs.forceUpdate(r => i(undefined));
    }), () => this._suggestWidgetAdaptor.selectedItem);
  }
  stopForceRenderingAbove() {
    this._suggestWidgetAdaptor.stopForceRenderingAbove();
  }
  forceRenderingAbove() {
    this._suggestWidgetAdaptor.forceRenderingAbove();
  }
};
