"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/suggestWidgetDetails.js
// Offset: 25383823 (bundle byte offset)
// Size: 9591 bytes
ri();
zI();
qi();
Jr();
yn();
tg();
rt();
oN();
eUn();
Ht();
Wt();
Jla = class {
  constructor(e, t) {
    this._editor = e;
    this._onDidClose = new Qe();
    this.onDidClose = this._onDidClose.event;
    this._onDidChangeContents = new Qe();
    this.onDidChangeContents = this._onDidChangeContents.event;
    this._disposables = new Ut();
    this._renderDisposeable = new Ut();
    this._borderWidth = 1;
    this._size = new Lu(330, 0);
    this.domNode = Ct(".suggest-details");
    this.domNode.classList.add("no-docs");
    this._markdownRenderer = t.createInstance(sL, {
      editor: e
    });
    this._body = Ct(".body");
    this._scrollbar = new vF(this._body, {
      alwaysConsumeMouseWheel: true
    });
    Rt(this.domNode, this._scrollbar.getDomNode());
    this._disposables.add(this._scrollbar);
    this._header = Rt(this._body, Ct(".header"));
    this._close = Rt(this._header, Ct("span" + Qt.asCSSSelector(Be.close)));
    this._close.title = _(1630, null);
    this._close.role = "button";
    this._close.tabIndex = -1;
    this._type = Rt(this._header, Ct("p.type"));
    this._docs = Rt(this._body, Ct("p.docs"));
    this._configureFont();
    this._disposables.add(this._editor.onDidChangeConfiguration(i => {
      if (i.hasChanged(52)) {
        this._configureFont();
      }
    }));
  }
  dispose() {
    this._disposables.dispose();
    this._renderDisposeable.dispose();
  }
  _configureFont() {
    const e = this._editor.getOptions();
    const t = e.get(52);
    const i = t.getMassagedFontFamily();
    const r = e.get(124) || t.fontSize;
    const s = e.get(125) || t.lineHeight;
    const o = t.fontWeight;
    const a = `${r}px`;
    const l = `${s}px`;
    this.domNode.style.fontSize = a;
    this.domNode.style.lineHeight = `${s / r}`;
    this.domNode.style.fontWeight = o;
    this.domNode.style.fontFeatureSettings = t.fontFeatureSettings;
    this._type.style.fontFamily = i;
    this._close.style.height = l;
    this._close.style.width = l;
  }
  getLayoutInfo() {
    const e = this._editor.getOption(125) || this._editor.getOption(52).lineHeight;
    const t = this._borderWidth;
    const i = t * 2;
    return {
      lineHeight: e,
      borderWidth: t,
      borderHeight: i,
      verticalPadding: 22,
      horizontalPadding: 14
    };
  }
  renderLoading() {
    this._type.textContent = _(1631, null);
    this._docs.textContent = "";
    this.domNode.classList.remove("no-docs", "no-type");
    this.layout(this.size.width, this.getLayoutInfo().lineHeight * 2);
    this._onDidChangeContents.fire(this);
  }
  renderItem(e, t) {
    this._renderDisposeable.clear();
    let {
      detail: i,
      documentation: r
    } = e.completion;
    if (t) {
      let s = "";
      s += `score: ${e.score[0]}
`;
      s += `prefix: ${e.word ?? "(no prefix)"}
`;
      s += `word: ${e.completion.filterText ? e.completion.filterText + " (filterText)" : e.textLabel}
`;
      s += `distance: ${e.distance} (localityBonus-setting)
`;
      s += `index: ${e.idx}, based on ${e.completion.sortText && `sortText: "${e.completion.sortText}"` || "label"}
`;
      s += `commit_chars: ${e.completion.commitCharacters?.join("")}
`;
      r = new _c().appendCodeblock("empty", s);
      i = `Provider: ${e.provider._debugDisplayName}`;
    }
    if (!t && !mjl(e)) {
      this.clearContents();
      return;
    }
    this.domNode.classList.remove("no-docs", "no-type");
    if (i) {
      const s = i.length > 100000 ? `${i.substr(0, 100000)}\u2026` : i;
      this._type.textContent = s;
      this._type.title = s;
      gv(this._type);
      this._type.classList.toggle("auto-wrap", !/\r?\n^\s+/gmi.test(s));
    } else {
      th(this._type);
      this._type.title = "";
      Ng(this._type);
      this.domNode.classList.add("no-type");
    }
    th(this._docs);
    if (typeof r == "string") {
      this._docs.classList.remove("markdown-docs");
      this._docs.textContent = r;
    } else if (r) {
      this._docs.classList.add("markdown-docs");
      th(this._docs);
      const s = this._markdownRenderer.render(r, {
        asyncRenderCallback: () => {
          this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight);
          this._onDidChangeContents.fire(this);
        }
      });
      this._docs.appendChild(s.element);
      this._renderDisposeable.add(s);
    }
    this.domNode.classList.toggle("detail-and-doc", !!i && !!r);
    this.domNode.style.userSelect = "text";
    this.domNode.tabIndex = -1;
    this._close.onmousedown = s => {
      s.preventDefault();
      s.stopPropagation();
    };
    this._close.onclick = s => {
      s.preventDefault();
      s.stopPropagation();
      this._onDidClose.fire();
    };
    this._body.scrollTop = 0;
    this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight);
    this._onDidChangeContents.fire(this);
  }
  clearContents() {
    this.domNode.classList.add("no-docs");
    this._type.textContent = "";
    this._docs.textContent = "";
  }
  get isEmpty() {
    return this.domNode.classList.contains("no-docs");
  }
  get size() {
    return this._size;
  }
  layout(e, t) {
    const i = new Lu(e, t);
    if (!Lu.equals(i, this._size)) {
      this._size = i;
      Jgt(this.domNode, e, t);
    }
    this._scrollbar.scanDomNode();
  }
  scrollDown(e = 8) {
    this._body.scrollTop += e;
  }
  scrollUp(e = 8) {
    this._body.scrollTop -= e;
  }
  scrollTop() {
    this._body.scrollTop = 0;
  }
  scrollBottom() {
    this._body.scrollTop = this._body.scrollHeight;
  }
  pageDown() {
    this.scrollDown(80);
  }
  pageUp() {
    this.scrollUp(80);
  }
  set borderWidth(e) {
    this._borderWidth = e;
  }
  get borderWidth() {
    return this._borderWidth;
  }
  focus() {
    this.domNode.focus();
  }
};
Jla = __decorate([__param(1, ln)], Jla);
Dyg = class {
  constructor(n, e) {
    this.widget = n;
    this._editor = e;
    this.allowEditorOverflow = true;
    this._disposables = new Ut();
    this._added = false;
    this._preferAlignAtTop = true;
    this._resizable = new G9t();
    this._resizable.domNode.classList.add("suggest-details-container");
    this._resizable.domNode.appendChild(n.domNode);
    this._resizable.enableSashes(false, true, true, false);
    let t;
    let i;
    let r = 0;
    let s = 0;
    this._disposables.add(this._resizable.onDidWillResize(() => {
      t = this._topLeft;
      i = this._resizable.size;
    }));
    this._disposables.add(this._resizable.onDidResize(o => {
      if (t && i) {
        this.widget.layout(o.dimension.width, o.dimension.height);
        let a = false;
        if (o.west) {
          s = i.width - o.dimension.width;
          a = true;
        }
        if (o.north) {
          r = i.height - o.dimension.height;
          a = true;
        }
        if (a) {
          this._applyTopLeft({
            top: t.top + r,
            left: t.left + s
          });
        }
      }
      if (o.done) {
        t = undefined;
        i = undefined;
        r = 0;
        s = 0;
        this._userSize = o.dimension;
      }
    }));
    this._disposables.add(this.widget.onDidChangeContents(() => {
      if (this._anchorBox) {
        this._placeAtAnchor(this._anchorBox, this._userSize ?? this.widget.size, this._preferAlignAtTop);
      }
    }));
  }
  dispose() {
    this._resizable.dispose();
    this._disposables.dispose();
    this.hide();
  }
  getId() {
    return "suggest.details";
  }
  getDomNode() {
    return this._resizable.domNode;
  }
  getPosition() {
    if (this._topLeft) {
      return {
        preference: this._topLeft
      };
    } else {
      return null;
    }
  }
  show() {
    if (!this._added) {
      this._editor.addOverlayWidget(this);
      this._added = true;
    }
  }
  hide(n = false) {
    this._resizable.clearSashHoverState();
    if (this._added) {
      this._editor.removeOverlayWidget(this);
      this._added = false;
      this._anchorBox = undefined;
      this._topLeft = undefined;
    }
    if (n) {
      this._userSize = undefined;
      this.widget.clearContents();
    }
  }
  placeAtAnchor(n, e) {
    const t = n.getBoundingClientRect();
    this._anchorBox = t;
    this._preferAlignAtTop = e;
    this._placeAtAnchor(this._anchorBox, this._userSize ?? this.widget.size, e);
  }
  _placeAtAnchor(n, e, t) {
    const i = DY(this.getDomNode().ownerDocument.body);
    const r = this.widget.getLayoutInfo();
    const s = new Lu(220, r.lineHeight * 2);
    const o = n.top;
    const a = function () {
      const B = i.width - (n.left + n.width + r.borderWidth + r.horizontalPadding);
      const R = -r.borderWidth + n.left + n.width;
      const N = new Lu(B, i.height - n.top - r.borderHeight - r.verticalPadding);
      const M = N.with(undefined, n.top + n.height - r.borderHeight - r.verticalPadding);
      return {
        top: o,
        left: R,
        fit: B - e.width,
        maxSizeTop: N,
        maxSizeBottom: M,
        minSize: s.with(Math.min(B, s.width))
      };
    }();
    const l = function () {
      const B = n.left - r.borderWidth - r.horizontalPadding;
      const R = Math.max(r.horizontalPadding, n.left - e.width - r.borderWidth);
      const N = new Lu(B, i.height - n.top - r.borderHeight - r.verticalPadding);
      const M = N.with(undefined, n.top + n.height - r.borderHeight - r.verticalPadding);
      return {
        top: o,
        left: R,
        fit: B - e.width,
        maxSizeTop: N,
        maxSizeBottom: M,
        minSize: s.with(Math.min(B, s.width))
      };
    }();
    const u = function () {
      const B = n.left;
      const R = -r.borderWidth + n.top + n.height;
      const N = new Lu(n.width - r.borderHeight, i.height - n.top - n.height - r.verticalPadding);
      return {
        top: R,
        left: B,
        fit: N.height - e.height,
        maxSizeBottom: N,
        maxSizeTop: N,
        minSize: s.with(N.width)
      };
    }();
    const d = [a, l, u];
    const m = d.find(B => B.fit >= 0) ?? d.sort((B, R) => R.fit - B.fit)[0];
    const p = n.top + n.height - r.borderHeight;
    let g;
    let f = e.height;
    const A = Math.max(m.maxSizeTop.height, m.maxSizeBottom.height);
    if (f > A) {
      f = A;
    }
    let w;
    if (t) {
      if (f <= m.maxSizeTop.height) {
        g = true;
        w = m.maxSizeTop;
      } else {
        g = false;
        w = m.maxSizeBottom;
      }
    } else if (f <= m.maxSizeBottom.height) {
      g = false;
      w = m.maxSizeBottom;
    } else {
      g = true;
      w = m.maxSizeTop;
    }
    let {
      top: C,
      left: x
    } = m;
    if (!g && f > n.height) {
      C = p - f;
    }
    const I = this._editor.getDomNode();
    if (I) {
      const B = I.getBoundingClientRect();
      C -= B.top;
      x -= B.left;
    }
    this._applyTopLeft({
      left: x,
      top: C
    });
    this._resizable.enableSashes(!g, m === a, g, m !== a);
    this._resizable.minSize = m.minSize;
    this._resizable.maxSize = w;
    this._resizable.layout(f, Math.min(w.width, e.width));
    this.widget.layout(this._resizable.size.width, this._resizable.size.height);
  }
  _applyTopLeft(n) {
    this._topLeft = n;
    this._editor.layoutOverlayWidget(this);
  }
};
