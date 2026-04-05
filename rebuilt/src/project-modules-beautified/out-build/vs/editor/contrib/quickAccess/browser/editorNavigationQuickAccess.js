"use strict";

// Module: out-build/vs/editor/contrib/quickAccess/browser/editorNavigationQuickAccess.js
// Offset: 28202071 (bundle byte offset)
// Size: 2203 bytes
wH();
rt();
lv();
xw();
az();
Io();
Ew();
pau = class {
  constructor(n) {
    this.options = n;
    this.rangeHighlightDecorationId = undefined;
  }
  provide(n, e, t) {
    const i = new Ut();
    n.canAcceptInBackground = !!this.options?.canAcceptInBackground;
    n.matchOnLabel = n.matchOnDescription = n.matchOnDetail = n.sortByLabel = false;
    const r = i.add(new uo());
    r.value = this.doProvide(n, e, t);
    i.add(this.onDidActiveTextEditorControlChange(() => {
      r.value = undefined;
      r.value = this.doProvide(n, e);
    }));
    return i;
  }
  doProvide(n, e, t) {
    const i = new Ut();
    const r = this.activeTextEditorControl;
    if (r && this.canProvideWithTextEditor(r)) {
      const s = {
        editor: r
      };
      const o = gN(r);
      if (o) {
        let a = r.saveViewState() ?? undefined;
        i.add(o.onDidChangeCursorPosition(() => {
          a = r.saveViewState() ?? undefined;
        }));
        s.restoreViewState = () => {
          if (a && r === this.activeTextEditorControl) {
            r.restoreViewState(a);
          }
        };
        i.add(_6(e.onCancellationRequested)(() => s.restoreViewState?.()));
      }
      i.add($i(() => this.clearDecorations(r)));
      i.add(this.provideWithTextEditor(s, n, e, t));
    } else {
      i.add(this.provideWithoutTextEditor(n, e));
    }
    return i;
  }
  canProvideWithTextEditor(n) {
    return true;
  }
  gotoLocation({
    editor: n
  }, e) {
    n.setSelection(e.range, "code.jump");
    n.revealRangeInCenter(e.range, 0);
    if (!e.preserveFocus) {
      n.focus();
    }
    const t = n.getModel();
    if (t && "getLineContent" in t) {
      Ex(`${t.getLineContent(e.range.startLineNumber)}`);
    }
  }
  getModel(n) {
    if (iB(n)) {
      return n.getModel()?.modified;
    } else {
      return n.getModel();
    }
  }
  addDecorations(n, e) {
    n.changeDecorations(t => {
      const i = [];
      if (this.rangeHighlightDecorationId) {
        i.push(this.rangeHighlightDecorationId.overviewRulerDecorationId);
        i.push(this.rangeHighlightDecorationId.rangeHighlightId);
        this.rangeHighlightDecorationId = undefined;
      }
      const r = [{
        range: e,
        options: {
          description: "quick-access-range-highlight",
          className: "rangeHighlight",
          isWholeLine: true
        }
      }, {
        range: e,
        options: {
          description: "quick-access-range-highlight-overview",
          overviewRuler: {
            color: kC(fEc),
            position: Tx.Full
          }
        }
      }];
      const [s, o] = t.deltaDecorations(i, r);
      this.rangeHighlightDecorationId = {
        rangeHighlightId: s,
        overviewRulerDecorationId: o
      };
    });
  }
  clearDecorations(n) {
    const e = this.rangeHighlightDecorationId;
    if (e) {
      n.changeDecorations(t => {
        t.deltaDecorations([e.overviewRulerDecorationId, e.rangeHighlightId], []);
      });
      this.rangeHighlightDecorationId = undefined;
    }
  }
};
