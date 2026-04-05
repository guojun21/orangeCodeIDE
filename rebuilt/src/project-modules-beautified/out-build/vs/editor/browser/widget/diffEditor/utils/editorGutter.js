"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/utils/editorGutter.js
// Offset: 2323011 (bundle byte offset)
// Size: 2655 bytes
ri();
rt();
Uc();
Ix();
$I();
YCh = class extends at {
  constructor(n, e, t) {
    super();
    this._editor = n;
    this._domNode = e;
    this.itemProvider = t;
    this.scrollTop = tp(this, this._editor.onDidScrollChange, s => this._editor.getScrollTop());
    this.isScrollTopZero = this.scrollTop.map(s => s === 0);
    this.modelAttached = tp(this, this._editor.onDidChangeModel, s => this._editor.hasModel());
    this.editorOnDidChangeViewZones = m3("onDidChangeViewZones", this._editor.onDidChangeViewZones);
    this.editorOnDidContentSizeChange = m3("onDidContentSizeChange", this._editor.onDidContentSizeChange);
    this.domNodeSizeChanged = IY("domNodeSizeChanged");
    this.views = new Map();
    this._domNode.className = "gutter monaco-editor";
    const i = this._domNode.appendChild(kl("div.scroll-decoration", {
      role: "presentation",
      ariaHidden: "true",
      style: {
        width: "100%"
      }
    }).root);
    const r = new ResizeObserver(() => {
      pp(s => {
        this.domNodeSizeChanged.trigger(s);
      });
    });
    r.observe(this._domNode);
    this._register($i(() => r.disconnect()));
    this._register(Oc(s => {
      i.className = this.isScrollTopZero.read(s) ? "" : "scroll-decoration";
    }));
    this._register(Oc(s => this.render(s)));
  }
  dispose() {
    super.dispose();
    um(this._domNode);
  }
  render(n) {
    if (!this.modelAttached.read(n)) {
      return;
    }
    this.domNodeSizeChanged.read(n);
    this.editorOnDidChangeViewZones.read(n);
    this.editorOnDidContentSizeChange.read(n);
    const e = this.scrollTop.read(n);
    const t = this._editor.getVisibleRanges();
    const i = new Set(this.views.keys());
    const r = dm.ofStartAndLength(0, this._domNode.clientHeight);
    if (!r.isEmpty) {
      for (const s of t) {
        const o = new rh(s.startLineNumber, s.endLineNumber + 1);
        const a = this.itemProvider.getIntersectingGutterItems(o, n);
        pp(l => {
          for (const u of a) {
            if (!u.range.intersect(o)) {
              continue;
            }
            i.delete(u.id);
            let d = this.views.get(u.id);
            if (d) {
              d.item.set(u, l);
            } else {
              const f = document.createElement("div");
              this._domNode.appendChild(f);
              const A = Ua("item", u);
              const w = this.itemProvider.createView(A, f);
              d = new ZCh(A, w, f);
              this.views.set(u.id, d);
            }
            const m = u.range.startLineNumber <= this._editor.getModel().getLineCount() ? this._editor.getTopForLineNumber(u.range.startLineNumber, true) - e : this._editor.getBottomForLineNumber(u.range.startLineNumber - 1, false) - e;
            const g = (u.range.endLineNumberExclusive === 1 ? Math.max(m, this._editor.getTopForLineNumber(u.range.startLineNumber, false) - e) : Math.max(m, this._editor.getBottomForLineNumber(u.range.endLineNumberExclusive - 1, true) - e)) - m;
            d.domNode.style.top = `${m}px`;
            d.domNode.style.height = `${g}px`;
            d.gutterItemView.layout(dm.ofStartAndLength(m, g), r);
          }
        });
      }
    }
    for (const s of i) {
      const o = this.views.get(s);
      o.gutterItemView.dispose();
      o.domNode.remove();
      this.views.delete(s);
    }
  }
};
ZCh = class {
  constructor(n, e, t) {
    this.item = n;
    this.gutterItemView = e;
    this.domNode = t;
  }
};
