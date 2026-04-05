"use strict";

// Module: out-build/vs/base/browser/ui/splitview/splitview.js
// Offset: 24770755 (bundle byte offset)
// Size: 17969 bytes
ri();
z$();
jSe();
zI();
Vs();
xf();
yn();
rt();
sE();
NSe();
Js();
f0A();
jSe();
ypg = {
  separatorBorder: Xr.transparent
};
fca = 0;
(function (n) {
  n[n.Normal = 0] = "Normal";
  n[n.Low = 1] = "Low";
  n[n.High = 2] = "High";
})(wpg ||= {});
BGl = class {
  set size(n) {
    this._size = n;
  }
  get size() {
    return this._size;
  }
  get cachedVisibleSize() {
    return this._cachedVisibleSize;
  }
  get visible() {
    return typeof this._cachedVisibleSize === "undefined";
  }
  setVisible(n, e) {
    if (n !== this.visible) {
      if (n) {
        this.size = zA(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize);
        this._cachedVisibleSize = undefined;
      } else {
        this._cachedVisibleSize = typeof e == "number" ? e : this.size;
        this.size = 0;
      }
      this.container.classList.toggle("visible", n);
      try {
        this.view.setVisible?.(n);
      } catch (t) {
        console.error("Splitview: Failed to set visible view");
        console.error(t);
      }
    }
  }
  get minimumSize() {
    if (this.visible) {
      return this.view.minimumSize;
    } else {
      return 0;
    }
  }
  get viewMinimumSize() {
    return this.view.minimumSize;
  }
  get maximumSize() {
    if (this.visible) {
      return this.view.maximumSize;
    } else {
      return 0;
    }
  }
  get viewMaximumSize() {
    return this.view.maximumSize;
  }
  get priority() {
    return this.view.priority;
  }
  get proportionalLayout() {
    return this.view.proportionalLayout ?? true;
  }
  get snap() {
    return !!this.view.snap;
  }
  set enabled(n) {
    this.container.style.pointerEvents = n ? "" : "none";
  }
  constructor(n, e, t, i) {
    this.container = n;
    this.view = e;
    this.disposable = i;
    this._cachedVisibleSize = undefined;
    if (typeof t == "number") {
      this._size = t;
      this._cachedVisibleSize = undefined;
      n.classList.add("visible");
    } else {
      this._size = 0;
      this._cachedVisibleSize = t.cachedVisibleSize;
    }
  }
  layout(n, e) {
    this.layoutContainer(n);
    try {
      this.view.layout(this.size, n, e);
    } catch (t) {
      console.error("Splitview: Failed to layout view");
      console.error(t);
    }
  }
  dispose() {
    this.disposable.dispose();
  }
};
_pg = class extends BGl {
  layoutContainer(n) {
    this.container.style.top = `${n}px`;
    this.container.style.height = `${this.size}px`;
  }
};
Cpg = class extends BGl {
  layoutContainer(n) {
    this.container.style.left = `${n}px`;
    this.container.style.width = `${this.size}px`;
  }
};
(function (n) {
  n[n.Idle = 0] = "Idle";
  n[n.Busy = 1] = "Busy";
})(Zz ||= {});
(function (n) {
  n.Distribute = {
    type: "distribute"
  };
  function e(r) {
    return {
      type: "split",
      index: r
    };
  }
  n.Split = e;
  function t(r) {
    return {
      type: "auto",
      index: r
    };
  }
  n.Auto = t;
  function i(r) {
    return {
      type: "invisible",
      cachedVisibleSize: r
    };
  }
  n.Invisible = i;
})(tP ||= {});
Xz = class extends at {
  get contentSize() {
    return this._contentSize;
  }
  get length() {
    return this.viewItems.length;
  }
  get minimumSize() {
    return this.viewItems.reduce((n, e) => n + e.minimumSize, 0);
  }
  get maximumSize() {
    if (this.length === 0) {
      return Number.POSITIVE_INFINITY;
    } else {
      return this.viewItems.reduce((n, e) => n + e.maximumSize, 0);
    }
  }
  get orthogonalStartSash() {
    return this._orthogonalStartSash;
  }
  get orthogonalEndSash() {
    return this._orthogonalEndSash;
  }
  get startSnappingEnabled() {
    return this._startSnappingEnabled;
  }
  get endSnappingEnabled() {
    return this._endSnappingEnabled;
  }
  set orthogonalStartSash(n) {
    for (const e of this.sashItems) {
      e.sash.orthogonalStartSash = n;
    }
    this._orthogonalStartSash = n;
  }
  set orthogonalEndSash(n) {
    for (const e of this.sashItems) {
      e.sash.orthogonalEndSash = n;
    }
    this._orthogonalEndSash = n;
  }
  get sashes() {
    return this.sashItems.map(n => n.sash);
  }
  set startSnappingEnabled(n) {
    if (this._startSnappingEnabled !== n) {
      this._startSnappingEnabled = n;
      this.updateSashEnablement();
    }
  }
  set endSnappingEnabled(n) {
    if (this._endSnappingEnabled !== n) {
      this._endSnappingEnabled = n;
      this.updateSashEnablement();
    }
  }
  constructor(n, e = {}) {
    super();
    this.size = 0;
    this._contentSize = 0;
    this.proportions = undefined;
    this.viewItems = [];
    this.sashItems = [];
    this.state = Zz.Idle;
    this._onDidSashChange = this._register(new Qe());
    this._onDidSashReset = this._register(new Qe());
    this._startSnappingEnabled = true;
    this._endSnappingEnabled = true;
    this.onDidSashChange = this._onDidSashChange.event;
    this.onDidSashReset = this._onDidSashReset.event;
    this.orientation = e.orientation ?? 0;
    this.inverseAltBehavior = e.inverseAltBehavior ?? false;
    this.proportionalLayout = e.proportionalLayout ?? true;
    this.getSashOrthogonalSize = e.getSashOrthogonalSize;
    this.el = document.createElement("div");
    this.el.classList.add("monaco-split-view2");
    this.el.classList.add(this.orientation === 0 ? "vertical" : "horizontal");
    n.appendChild(this.el);
    this.sashContainer = Rt(this.el, Ct(".sash-container"));
    this.viewContainer = Ct(".split-view-container");
    this.scrollable = this._register(new Fde({
      forceIntegerValues: true,
      smoothScrollDuration: 125,
      scheduleAtNextAnimationFrame: i => r_(As(this.el), i)
    }));
    this.scrollableElement = this._register(new Yft(this.viewContainer, {
      vertical: this.orientation === 0 ? e.scrollbarVisibility ?? 1 : 2,
      horizontal: this.orientation === 1 ? e.scrollbarVisibility ?? 1 : 2
    }, this.scrollable));
    const t = this._register(new Hg(this.viewContainer, "scroll")).event;
    this._register(t(i => {
      const r = this.scrollableElement.getScrollPosition();
      const s = Math.abs(this.viewContainer.scrollLeft - r.scrollLeft) <= 1 ? undefined : this.viewContainer.scrollLeft;
      const o = Math.abs(this.viewContainer.scrollTop - r.scrollTop) <= 1 ? undefined : this.viewContainer.scrollTop;
      if (s !== undefined || o !== undefined) {
        this.scrollableElement.setScrollPosition({
          scrollLeft: s,
          scrollTop: o
        });
      }
    }));
    this.onDidScroll = this.scrollableElement.onScroll;
    this._register(this.onDidScroll(i => {
      if (i.scrollTopChanged) {
        this.viewContainer.scrollTop = i.scrollTop;
      }
      if (i.scrollLeftChanged) {
        this.viewContainer.scrollLeft = i.scrollLeft;
      }
    }));
    Rt(this.el, this.scrollableElement.getDomNode());
    this.style(e.styles || ypg);
    if (e.descriptor) {
      this.size = e.descriptor.size;
      e.descriptor.views.forEach((i, r) => {
        const s = Df(i.visible) || i.visible ? i.size : {
          type: "invisible",
          cachedVisibleSize: i.size
        };
        const o = i.view;
        this.doAddView(o, s, r, true);
      });
      this._contentSize = this.viewItems.reduce((i, r) => i + r.size, 0);
      this.saveProportions();
    }
  }
  style(n) {
    if (n.separatorBorder.isTransparent()) {
      this.el.classList.remove("separator-border");
      this.el.style.removeProperty("--separator-border");
    } else {
      this.el.classList.add("separator-border");
      this.el.style.setProperty("--separator-border", n.separatorBorder.toString());
    }
  }
  addView(n, e, t = this.viewItems.length, i) {
    this.doAddView(n, e, t, i);
  }
  removeView(n, e) {
    if (n < 0 || n >= this.viewItems.length) {
      throw new Error("Index out of bounds");
    }
    if (this.state !== Zz.Idle) {
      throw new Error("Cant modify splitview");
    }
    this.state = Zz.Busy;
    try {
      if (e?.type === "auto") {
        if (this.areViewsDistributed()) {
          e = {
            type: "distribute"
          };
        } else {
          e = {
            type: "split",
            index: e.index
          };
        }
      }
      const t = e?.type === "split" ? this.viewItems[e.index] : undefined;
      const i = this.viewItems.splice(n, 1)[0];
      if (t) {
        t.size += i.size;
      }
      if (this.viewItems.length >= 1) {
        const s = Math.max(n - 1, 0);
        this.sashItems.splice(s, 1)[0].disposable.dispose();
      }
      this.relayout();
      if (e?.type === "distribute") {
        this.distributeViewSizes();
      }
      const r = i.view;
      i.dispose();
      return r;
    } finally {
      this.state = Zz.Idle;
    }
  }
  removeAllViews() {
    if (this.state !== Zz.Idle) {
      throw new Error("Cant modify splitview");
    }
    this.state = Zz.Busy;
    try {
      const n = this.viewItems.splice(0, this.viewItems.length);
      for (const t of n) {
        t.dispose();
      }
      const e = this.sashItems.splice(0, this.sashItems.length);
      for (const t of e) {
        t.disposable.dispose();
      }
      this.relayout();
      return n.map(t => t.view);
    } finally {
      this.state = Zz.Idle;
    }
  }
  moveView(n, e) {
    if (this.state !== Zz.Idle) {
      throw new Error("Cant modify splitview");
    }
    const t = this.getViewCachedVisibleSize(n);
    const i = typeof t === "undefined" ? this.getViewSize(n) : tP.Invisible(t);
    const r = this.removeView(n);
    this.addView(r, i, e);
  }
  swapViews(n, e) {
    if (this.state !== Zz.Idle) {
      throw new Error("Cant modify splitview");
    }
    if (n > e) {
      return this.swapViews(e, n);
    }
    const t = this.getViewSize(n);
    const i = this.getViewSize(e);
    const r = this.removeView(e);
    const s = this.removeView(n);
    this.addView(r, t, n);
    this.addView(s, i, e);
  }
  isViewVisible(n) {
    if (n < 0 || n >= this.viewItems.length) {
      throw new Error("Index out of bounds");
    }
    return this.viewItems[n].visible;
  }
  setViewVisible(n, e) {
    if (n < 0 || n >= this.viewItems.length) {
      throw new Error("Index out of bounds");
    }
    this.viewItems[n].setVisible(e);
    this.distributeEmptySpace(n);
    this.layoutViews();
    this.saveProportions();
  }
  getViewCachedVisibleSize(n) {
    if (n < 0 || n >= this.viewItems.length) {
      throw new Error("Index out of bounds");
    }
    return this.viewItems[n].cachedVisibleSize;
  }
  layout(n, e) {
    const t = Math.max(this.size, this._contentSize);
    this.size = n;
    this.layoutContext = e;
    if (this.proportions) {
      let i = 0;
      for (let r = 0; r < this.viewItems.length; r++) {
        const s = this.viewItems[r];
        const o = this.proportions[r];
        if (typeof o == "number") {
          i += o;
        } else {
          n -= s.size;
        }
      }
      for (let r = 0; r < this.viewItems.length; r++) {
        const s = this.viewItems[r];
        const o = this.proportions[r];
        if (typeof o == "number" && i > 0) {
          s.size = zA(Math.round(o * n / i), s.minimumSize, s.maximumSize);
        }
      }
    } else {
      const i = _H(this.viewItems.length);
      const r = i.filter(o => this.viewItems[o].priority === 1);
      const s = i.filter(o => this.viewItems[o].priority === 2);
      this.resize(this.viewItems.length - 1, n - t, undefined, r, s);
    }
    this.distributeEmptySpace();
    this.layoutViews();
  }
  saveProportions() {
    if (this.proportionalLayout && this._contentSize > 0) {
      this.proportions = this.viewItems.map(n => n.proportionalLayout && n.visible ? n.size / this._contentSize : undefined);
    }
  }
  onSashStart({
    sash: n,
    start: e,
    alt: t
  }) {
    fca++;
    for (const o of this.viewItems) {
      o.enabled = false;
    }
    const i = this.sashItems.findIndex(o => o.sash === n);
    const r = H_(ei(this.el.ownerDocument.body, "keydown", o => s(this.sashDragState.current, o.altKey)), ei(this.el.ownerDocument.body, "keyup", () => s(this.sashDragState.current, false)));
    const s = (o, a) => {
      const l = this.viewItems.map(g => g.size);
      let u = Number.NEGATIVE_INFINITY;
      let d = Number.POSITIVE_INFINITY;
      if (this.inverseAltBehavior) {
        a = !a;
      }
      if (a) {
        if (i === this.sashItems.length - 1) {
          const f = this.viewItems[i];
          u = (f.minimumSize - f.size) / 2;
          d = (f.maximumSize - f.size) / 2;
        } else {
          const f = this.viewItems[i + 1];
          u = (f.size - f.maximumSize) / 2;
          d = (f.size - f.minimumSize) / 2;
        }
      }
      let m;
      let p;
      if (!a) {
        const g = _H(i, -1);
        const f = _H(i + 1, this.viewItems.length);
        const A = g.reduce((M, O) => M + (this.viewItems[O].minimumSize - l[O]), 0);
        const w = g.reduce((M, O) => M + (this.viewItems[O].viewMaximumSize - l[O]), 0);
        const C = f.length === 0 ? Number.POSITIVE_INFINITY : f.reduce((M, O) => M + (l[O] - this.viewItems[O].minimumSize), 0);
        const x = f.length === 0 ? Number.NEGATIVE_INFINITY : f.reduce((M, O) => M + (l[O] - this.viewItems[O].viewMaximumSize), 0);
        const I = Math.max(A, x);
        const B = Math.min(C, w);
        const R = this.findFirstSnapIndex(g);
        const N = this.findFirstSnapIndex(f);
        if (typeof R == "number") {
          const M = this.viewItems[R];
          const O = Math.floor(M.viewMinimumSize / 2);
          m = {
            index: R,
            limitDelta: M.visible ? I - O : I + O,
            size: M.size
          };
        }
        if (typeof N == "number") {
          const M = this.viewItems[N];
          const O = Math.floor(M.viewMinimumSize / 2);
          p = {
            index: N,
            limitDelta: M.visible ? B + O : B - O,
            size: M.size
          };
        }
      }
      this.sashDragState = {
        start: o,
        current: o,
        index: i,
        sizes: l,
        minDelta: u,
        maxDelta: d,
        alt: a,
        snapBefore: m,
        snapAfter: p,
        disposable: r
      };
    };
    s(e, t);
  }
  onSashChange({
    current: n
  }) {
    const {
      index: e,
      start: t,
      sizes: i,
      alt: r,
      minDelta: s,
      maxDelta: o,
      snapBefore: a,
      snapAfter: l
    } = this.sashDragState;
    this.sashDragState.current = n;
    const u = n - t;
    const d = this.resize(e, u, i, undefined, undefined, s, o, a, l);
    if (r) {
      const m = e === this.sashItems.length - 1;
      const p = this.viewItems.map(x => x.size);
      const g = m ? e : e + 1;
      const f = this.viewItems[g];
      const A = f.size - f.maximumSize;
      const w = f.size - f.minimumSize;
      const C = m ? e - 1 : e + 1;
      this.resize(C, -d, p, undefined, undefined, A, w);
    }
    this.distributeEmptySpace();
    this.layoutViews();
  }
  onSashEnd(n) {
    fca--;
    this._onDidSashChange.fire(n);
    this.sashDragState.disposable.dispose();
    this.sashDragState = undefined;
    this.saveProportions();
    this.updateScrollableElement();
    for (const e of this.viewItems) {
      e.enabled = true;
    }
  }
  onViewChange(n, e) {
    const t = this.viewItems.indexOf(n);
    if (!(t < 0) && !(t >= this.viewItems.length)) {
      e = typeof e == "number" ? e : n.size;
      e = zA(e, n.minimumSize, n.maximumSize);
      if (this.inverseAltBehavior && t > 0) {
        this.resize(t - 1, Math.floor((n.size - e) / 2));
        this.distributeEmptySpace();
        this.layoutViews();
      } else {
        n.size = e;
        this.relayout([t], undefined);
      }
    }
  }
  resizeView(n, e) {
    if (!(n < 0) && !(n >= this.viewItems.length)) {
      if (this.state !== Zz.Idle) {
        throw new Error("Cant modify splitview");
      }
      this.state = Zz.Busy;
      try {
        const t = _H(this.viewItems.length).filter(o => o !== n);
        const i = [...t.filter(o => this.viewItems[o].priority === 1), n];
        const r = t.filter(o => this.viewItems[o].priority === 2);
        const s = this.viewItems[n];
        e = Math.round(e);
        e = zA(e, s.minimumSize, Math.min(s.maximumSize, this.size));
        s.size = e;
        this.relayout(i, r);
      } finally {
        this.state = Zz.Idle;
      }
    }
  }
  isViewExpanded(n) {
    if (n < 0 || n >= this.viewItems.length) {
      return false;
    }
    for (const e of this.viewItems) {
      if (e !== this.viewItems[n] && e.size > e.minimumSize) {
        return false;
      }
    }
    return true;
  }
  distributeViewSizes() {
    const n = [];
    let e = 0;
    for (const o of this.viewItems) {
      if (o.maximumSize - o.minimumSize > 0) {
        n.push(o);
        e += o.size;
      }
    }
    const t = Math.floor(e / n.length);
    for (const o of n) {
      o.size = zA(t, o.minimumSize, o.maximumSize);
    }
    const i = _H(this.viewItems.length);
    const r = i.filter(o => this.viewItems[o].priority === 1);
    const s = i.filter(o => this.viewItems[o].priority === 2);
    this.relayout(r, s);
  }
  getViewSize(n) {
    if (n < 0 || n >= this.viewItems.length) {
      return -1;
    } else {
      return this.viewItems[n].size;
    }
  }
  doAddView(n, e, t = this.viewItems.length, i) {
    if (this.state !== Zz.Idle) {
      throw new Error("Cant modify splitview");
    }
    this.state = Zz.Busy;
    try {
      const r = Ct(".split-view-view");
      if (t === this.viewItems.length) {
        this.viewContainer.appendChild(r);
      } else {
        this.viewContainer.insertBefore(r, this.viewContainer.children.item(t));
      }
      const s = n.onDidChange(m => this.onViewChange(u, m));
      const o = $i(() => r.remove());
      const a = H_(s, o);
      let l;
      if (typeof e == "number") {
        l = e;
      } else {
        if (e.type === "auto") {
          if (this.areViewsDistributed()) {
            e = {
              type: "distribute"
            };
          } else {
            e = {
              type: "split",
              index: e.index
            };
          }
        }
        if (e.type === "split") {
          l = this.getViewSize(e.index) / 2;
        } else if (e.type === "invisible") {
          l = {
            cachedVisibleSize: e.cachedVisibleSize
          };
        } else {
          l = n.minimumSize;
        }
      }
      const u = this.orientation === 0 ? new _pg(r, n, l, a) : new Cpg(r, n, l, a);
      this.viewItems.splice(t, 0, u);
      if (this.viewItems.length > 1) {
        const m = {
          orthogonalStartSash: this.orthogonalStartSash,
          orthogonalEndSash: this.orthogonalEndSash
        };
        const p = this.orientation === 0 ? new Qde(this.sashContainer, {
          getHorizontalSashTop: M => this.getSashPosition(M),
          getHorizontalSashWidth: this.getSashOrthogonalSize
        }, {
          ...m,
          orientation: 1
        }) : new Qde(this.sashContainer, {
          getVerticalSashLeft: M => this.getSashPosition(M),
          getVerticalSashHeight: this.getSashOrthogonalSize
        }, {
          ...m,
          orientation: 0
        });
        const g = this.orientation === 0 ? M => ({
          sash: p,
          start: M.startY,
          current: M.currentY,
          alt: M.altKey
        }) : M => ({
          sash: p,
          start: M.startX,
          current: M.currentX,
          alt: M.altKey
        });
        const A = In.map(p.onDidStart, g)(this.onSashStart, this);
        const C = In.map(p.onDidChange, g)(this.onSashChange, this);
        const I = In.map(p.onDidEnd, () => this.sashItems.findIndex(M => M.sash === p))(this.onSashEnd, this);
        const B = p.onDidReset(() => {
          const M = this.sashItems.findIndex(z => z.sash === p);
          const O = _H(M, -1);
          const $ = _H(M + 1, this.viewItems.length);
          const H = this.findFirstSnapIndex(O);
          const W = this.findFirstSnapIndex($);
          if ((typeof H != "number" || !!this.viewItems[H].visible) && (typeof W != "number" || !!this.viewItems[W].visible)) {
            this._onDidSashReset.fire(M);
          }
        });
        const R = H_(A, C, I, B, p);
        const N = {
          sash: p,
          disposable: R
        };
        this.sashItems.splice(t - 1, 0, N);
      }
      r.appendChild(n.element);
      let d;
      if (typeof e != "number" && e.type === "split") {
        d = [e.index];
      }
      if (!i) {
        this.relayout([t], d);
      }
      if (!i && typeof e != "number" && e.type === "distribute") {
        this.distributeViewSizes();
      }
    } finally {
      this.state = Zz.Idle;
    }
  }
  relayout(n, e) {
    const t = this.viewItems.reduce((i, r) => i + r.size, 0);
    this.resize(this.viewItems.length - 1, this.size - t, undefined, n, e);
    this.distributeEmptySpace();
    this.layoutViews();
    this.saveProportions();
  }
  resize(n, e, t = this.viewItems.map(u => u.size), i, r, s = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY, a, l) {
    if (n < 0 || n >= this.viewItems.length) {
      return 0;
    }
    const u = _H(n, -1);
    const d = _H(n + 1, this.viewItems.length);
    if (r) {
      for (const N of r) {
        t0c(u, N);
        t0c(d, N);
      }
    }
    if (i) {
      for (const N of i) {
        LMo(u, N);
        LMo(d, N);
      }
    }
    const m = u.map(N => this.viewItems[N]);
    const p = u.map(N => t[N]);
    const g = d.map(N => this.viewItems[N]);
    const f = d.map(N => t[N]);
    const A = u.reduce((N, M) => N + (this.viewItems[M].minimumSize - t[M]), 0);
    const w = u.reduce((N, M) => N + (this.viewItems[M].maximumSize - t[M]), 0);
    const C = d.length === 0 ? Number.POSITIVE_INFINITY : d.reduce((N, M) => N + (t[M] - this.viewItems[M].minimumSize), 0);
    const x = d.length === 0 ? Number.NEGATIVE_INFINITY : d.reduce((N, M) => N + (t[M] - this.viewItems[M].maximumSize), 0);
    const I = Math.max(A, x, s);
    const B = Math.min(C, w, o);
    let R = false;
    if (a) {
      const N = this.viewItems[a.index];
      const M = e >= a.limitDelta;
      R = M !== N.visible;
      N.setVisible(M, a.size);
    }
    if (!R && l) {
      const N = this.viewItems[l.index];
      const M = e < l.limitDelta;
      R = M !== N.visible;
      N.setVisible(M, l.size);
    }
    if (R) {
      return this.resize(n, e, t, i, r, s, o);
    }
    e = zA(e, I, B);
    for (let N = 0, M = e; N < m.length; N++) {
      const O = m[N];
      const $ = zA(p[N] + M, O.minimumSize, O.maximumSize);
      const H = $ - p[N];
      M -= H;
      O.size = $;
    }
    for (let N = 0, M = e; N < g.length; N++) {
      const O = g[N];
      const $ = zA(f[N] - M, O.minimumSize, O.maximumSize);
      const H = $ - f[N];
      M += H;
      O.size = $;
    }
    return e;
  }
  distributeEmptySpace(n) {
    const e = this.viewItems.reduce((o, a) => o + a.size, 0);
    let t = this.size - e;
    const i = _H(this.viewItems.length - 1, -1);
    const r = i.filter(o => this.viewItems[o].priority === 1);
    const s = i.filter(o => this.viewItems[o].priority === 2);
    for (const o of s) {
      t0c(i, o);
    }
    for (const o of r) {
      LMo(i, o);
    }
    if (typeof n == "number") {
      LMo(i, n);
    }
    for (let o = 0; t !== 0 && o < i.length; o++) {
      const a = this.viewItems[i[o]];
      const l = zA(a.size + t, a.minimumSize, a.maximumSize);
      const u = l - a.size;
      t -= u;
      a.size = l;
    }
  }
  layoutViews() {
    this._contentSize = this.viewItems.reduce((e, t) => e + t.size, 0);
    let n = 0;
    for (const e of this.viewItems) {
      e.layout(n, this.layoutContext);
      n += e.size;
    }
    this.sashItems.forEach(e => e.sash.layout());
    this.updateSashEnablement();
    if (fca === 0) {
      this.updateScrollableElement();
    }
  }
  updateScrollableElement() {
    if (this.orientation === 0) {
      this.scrollableElement.setScrollDimensions({
        height: this.size,
        scrollHeight: this._contentSize
      });
    } else {
      this.scrollableElement.setScrollDimensions({
        width: this.size,
        scrollWidth: this._contentSize
      });
    }
  }
  updateSashEnablement() {
    let n = false;
    const e = this.viewItems.map(a => n = a.size - a.minimumSize > 0 || n);
    n = false;
    const t = this.viewItems.map(a => n = a.maximumSize - a.size > 0 || n);
    const i = [...this.viewItems].reverse();
    n = false;
    const r = i.map(a => n = a.size - a.minimumSize > 0 || n).reverse();
    n = false;
    const s = i.map(a => n = a.maximumSize - a.size > 0 || n).reverse();
    let o = 0;
    for (let a = 0; a < this.sashItems.length; a++) {
      const {
        sash: l
      } = this.sashItems[a];
      const u = this.viewItems[a];
      o += u.size;
      const d = !e[a] || !s[a + 1];
      const m = !t[a] || !r[a + 1];
      if (d && m) {
        const p = _H(a, -1);
        const g = _H(a + 1, this.viewItems.length);
        const f = this.findFirstSnapIndex(p);
        const A = this.findFirstSnapIndex(g);
        const w = typeof f == "number" && !this.viewItems[f].visible;
        const C = typeof A == "number" && !this.viewItems[A].visible;
        if (w && r[a] && (o > 0 || this.startSnappingEnabled)) {
          l.state = 1;
        } else if (C && e[a] && (o < this._contentSize || this.endSnappingEnabled)) {
          l.state = 2;
        } else {
          l.state = 0;
        }
      } else if (d && !m) {
        l.state = 1;
      } else if (!d && m) {
        l.state = 2;
      } else {
        l.state = 3;
      }
    }
  }
  getSashPosition(n) {
    let e = 0;
    for (let t = 0; t < this.sashItems.length; t++) {
      e += this.viewItems[t].size;
      if (this.sashItems[t].sash === n) {
        return e;
      }
    }
    return 0;
  }
  findFirstSnapIndex(n) {
    for (const e of n) {
      const t = this.viewItems[e];
      if (t.visible && t.snap) {
        return e;
      }
    }
    for (const e of n) {
      const t = this.viewItems[e];
      if (t.visible && t.maximumSize - t.minimumSize > 0) {
        return;
      }
      if (!t.visible && t.snap) {
        return e;
      }
    }
  }
  areViewsDistributed() {
    let n;
    let e;
    for (const t of this.viewItems) {
      n = n === undefined ? t.size : Math.min(n, t.size);
      e = e === undefined ? t.size : Math.max(e, t.size);
      if (e - n > 2) {
        return false;
      }
    }
    return true;
  }
  dispose() {
    this.sashDragState?.disposable.dispose();
    Bo(this.viewItems);
    this.viewItems = [];
    this.sashItems.forEach(n => n.disposable.dispose());
    this.sashItems = [];
    super.dispose();
  }
};
