"use strict";

// Module: out-build/vs/base/browser/ui/list/listView.js
// Offset: 1971998 (bundle byte offset)
// Size: 32219 bytes
dz();
ri();
z$();
Dx();
zI();
Vs();
vr();
U0();
yn();
rt();
M3o();
NSe();
TuA();
IuA();
_s();
sE();
sbt();
YVe = {
  CurrentDragAndDropData: undefined
};
(function (n) {
  n[n.TOP = 0] = "TOP";
  n[n.CENTER_TOP = 1] = "CENTER_TOP";
  n[n.CENTER_BOTTOM = 2] = "CENTER_BOTTOM";
  n[n.BOTTOM = 3] = "BOTTOM";
})(r_h ||= {});
JSe = {
  useShadows: true,
  verticalScrollMode: 1,
  setRowLineHeight: true,
  setRowHeight: true,
  supportDynamicHeights: false,
  dnd: {
    getDragElements(n) {
      return [n];
    },
    getDragURI() {
      return null;
    },
    onDragStart() {},
    onDragOver() {
      return false;
    },
    drop() {},
    dispose() {}
  },
  horizontalScrolling: false,
  transformOptimization: true,
  alwaysConsumeMouseWheel: true
};
ove = class {
  get context() {
    return this._context;
  }
  set context(n) {
    this._context = n;
  }
  constructor(n) {
    this.elements = n;
  }
  update() {}
  getData() {
    return this.elements;
  }
};
WIc = class {
  constructor(n) {
    this.elements = n;
  }
  update() {}
  getData() {
    return this.elements;
  }
};
f3t = class {
  constructor() {
    this.types = [];
    this.files = [];
  }
  update(n) {
    if (n.types) {
      this.types.splice(0, this.types.length, ...n.types);
    }
    if (n.files) {
      this.files.splice(0, this.files.length);
      for (let e = 0; e < n.files.length; e++) {
        const t = n.files.item(e);
        if (t && (t.size || t.type)) {
          this.files.push(t);
        }
      }
    }
  }
  getData() {
    return {
      types: this.types,
      files: this.files
    };
  }
};
s_h = class {
  constructor(n) {
    if (n?.getSetSize) {
      this.getSetSize = n.getSetSize.bind(n);
    } else {
      this.getSetSize = (e, t, i) => i;
    }
    if (n?.getPosInSet) {
      this.getPosInSet = n.getPosInSet.bind(n);
    } else {
      this.getPosInSet = (e, t) => t + 1;
    }
    if (n?.getRole) {
      this.getRole = n.getRole.bind(n);
    } else {
      this.getRole = e => "listitem";
    }
    if (n?.isChecked) {
      this.isChecked = n.isChecked.bind(n);
    } else {
      this.isChecked = e => {};
    }
  }
};
joe = class EGb {
  static {
    this.InstanceCount = 0;
  }
  get contentHeight() {
    return this.rangeMap.size;
  }
  get contentWidth() {
    return this.scrollWidth ?? 0;
  }
  get onDidScroll() {
    return this.scrollableElement.onScroll;
  }
  get onWillScroll() {
    return this.scrollableElement.onWillScroll;
  }
  get containerDomNode() {
    return this.rowsContainer;
  }
  get scrollableElementDomNode() {
    return this.scrollableElement.getDomNode();
  }
  get horizontalScrolling() {
    return this._horizontalScrolling;
  }
  set horizontalScrolling(e) {
    if (e !== this._horizontalScrolling) {
      if (e && this.supportDynamicHeights) {
        throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
      }
      this._horizontalScrolling = e;
      this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling);
      if (this._horizontalScrolling) {
        for (const t of this.items) {
          this.measureItemWidth(t);
        }
        this.updateScrollWidth();
        this.scrollableElement.setScrollDimensions({
          width: KFn(this.domNode)
        });
        this.rowsContainer.style.width = `${Math.max(this.scrollWidth || 0, this.renderWidth)}px`;
      } else {
        this.scrollableElementWidthDelayer.cancel();
        this.scrollableElement.setScrollDimensions({
          width: this.renderWidth,
          scrollWidth: this.renderWidth
        });
        this.rowsContainer.style.width = "";
      }
    }
  }
  constructor(e, t, i, r = JSe) {
    this.virtualDelegate = t;
    this.domId = `list_id_${++EGb.InstanceCount}`;
    this.renderers = new Map();
    this.renderWidth = 0;
    this._scrollHeight = 0;
    this.scrollableElementUpdateDisposable = null;
    this.scrollableElementWidthDelayer = new Nv(50);
    this.splicing = false;
    this.dragOverAnimationStopDisposable = at.None;
    this.dragOverMouseY = 0;
    this.canDrop = false;
    this.currentDragFeedbackDisposable = at.None;
    this.onDragLeaveTimeout = at.None;
    this.currentSelectionDisposable = at.None;
    this.disposables = new Ut();
    this._onDidChangeContentHeight = new Qe();
    this._onDidChangeContentWidth = new Qe();
    this.onDidChangeContentHeight = In.latch(this._onDidChangeContentHeight.event, undefined, this.disposables);
    this.onDidChangeContentWidth = In.latch(this._onDidChangeContentWidth.event, undefined, this.disposables);
    this._horizontalScrolling = false;
    if (r.horizontalScrolling && r.supportDynamicHeights) {
      throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
    }
    this.items = [];
    this.itemId = 0;
    this.rangeMap = this.createRangeMap(r.paddingTop ?? 0);
    for (const o of i) {
      this.renderers.set(o.templateId, o);
    }
    this.cache = this.disposables.add(new i_h(this.renderers));
    this.lastRenderTop = 0;
    this.lastRenderHeight = 0;
    this.domNode = document.createElement("div");
    this.domNode.className = "monaco-list";
    this.domNode.classList.add(this.domId);
    this.domNode.tabIndex = 0;
    this.domNode.classList.toggle("mouse-support", typeof r.mouseSupport == "boolean" ? r.mouseSupport : true);
    this._horizontalScrolling = r.horizontalScrolling ?? JSe.horizontalScrolling;
    this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling);
    this.paddingBottom = typeof r.paddingBottom === "undefined" ? 0 : r.paddingBottom;
    this.itemGap = typeof r.itemGap === "undefined" ? 0 : r.itemGap;
    this.accessibilityProvider = new s_h(r.accessibilityProvider);
    this.rowsContainer = document.createElement("div");
    this.rowsContainer.className = "monaco-list-rows";
    if (r.transformOptimization ?? JSe.transformOptimization) {
      this.rowsContainer.style.transform = "translate3d(0px, 0px, 0px)";
      this.rowsContainer.style.overflow = "hidden";
      this.rowsContainer.style.contain = "strict";
    }
    this.disposables.add(E1.addTarget(this.rowsContainer));
    this.scrollable = this.disposables.add(new Fde({
      forceIntegerValues: true,
      smoothScrollDuration: r.smoothScrolling ?? false ? 125 : 0,
      scheduleAtNextAnimationFrame: o => r_(As(this.domNode), o)
    }));
    this.scrollableElement = this.disposables.add(new Yft(this.rowsContainer, {
      alwaysConsumeMouseWheel: r.alwaysConsumeMouseWheel ?? JSe.alwaysConsumeMouseWheel,
      horizontal: 1,
      vertical: r.verticalScrollMode ?? JSe.verticalScrollMode,
      useShadows: r.useShadows ?? JSe.useShadows,
      mouseWheelScrollSensitivity: r.mouseWheelScrollSensitivity,
      fastScrollSensitivity: r.fastScrollSensitivity,
      scrollByPage: r.scrollByPage
    }, this.scrollable));
    this.domNode.appendChild(this.scrollableElement.getDomNode());
    e.appendChild(this.domNode);
    this.scrollableElement.onScroll(this.onScroll, this, this.disposables);
    this.disposables.add(ei(this.rowsContainer, MA.Change, o => this.onTouchChange(o)));
    this.disposables.add(ei(this.scrollableElement.getDomNode(), "scroll", o => {
      const a = o.target;
      const l = a.scrollTop;
      a.scrollTop = 0;
      if (r.scrollToActiveElement) {
        this.setScrollTop(this.scrollTop + l);
      }
    }));
    this.disposables.add(ei(this.domNode, "dragover", o => this.onDragOver(this.toDragEvent(o))));
    this.disposables.add(ei(this.domNode, "drop", o => this.onDrop(this.toDragEvent(o))));
    this.disposables.add(ei(this.domNode, "dragleave", o => this.onDragLeave(this.toDragEvent(o))));
    this.disposables.add(ei(this.domNode, "dragend", o => this.onDragEnd(o)));
    if (r.userSelection) {
      if (r.dnd) {
        throw new Error("DND and user selection cannot be used simultaneously");
      }
      this.disposables.add(ei(this.domNode, "mousedown", o => this.onPotentialSelectionStart(o)));
    }
    this.setRowLineHeight = r.setRowLineHeight ?? JSe.setRowLineHeight;
    this.setRowHeight = r.setRowHeight ?? JSe.setRowHeight;
    this.supportDynamicHeights = r.supportDynamicHeights ?? JSe.supportDynamicHeights;
    this.dnd = r.dnd ?? this.disposables.add(JSe.dnd);
    this.layout(r.initialSize?.height, r.initialSize?.width);
    if (r.scrollToActiveElement) {
      this._setupFocusObserver(e);
    }
  }
  _setupFocusObserver(e) {
    this.disposables.add(ei(e, "focus", () => {
      const t = _C();
      if (this.activeElement !== t && t !== null) {
        this.activeElement = t;
        this._scrollToActiveElement(this.activeElement, e);
      }
    }, true));
  }
  _scrollToActiveElement(e, t) {
    const i = t.getBoundingClientRect();
    const s = e.getBoundingClientRect().top - i.top;
    if (s < 0) {
      this.setScrollTop(this.scrollTop + s);
    }
  }
  updateOptions(e) {
    if (e.paddingBottom !== undefined) {
      this.paddingBottom = e.paddingBottom;
      this.scrollableElement.setScrollDimensions({
        scrollHeight: this.scrollHeight
      });
    }
    if (e.smoothScrolling !== undefined) {
      this.scrollable.setSmoothScrollDuration(e.smoothScrolling ? 125 : 0);
    }
    if (e.horizontalScrolling !== undefined) {
      this.horizontalScrolling = e.horizontalScrolling;
    }
    if (e.itemGap !== undefined && e.itemGap !== this.itemGap) {
      this.itemGap = e.itemGap;
      const i = this.items.slice();
      this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop);
      this._splice(0, i.length, i.map(r => r.element));
    }
    let t;
    if (e.scrollByPage !== undefined) {
      t = {
        ...(t ?? {}),
        scrollByPage: e.scrollByPage
      };
    }
    if (e.mouseWheelScrollSensitivity !== undefined) {
      t = {
        ...(t ?? {}),
        mouseWheelScrollSensitivity: e.mouseWheelScrollSensitivity
      };
    }
    if (e.fastScrollSensitivity !== undefined) {
      t = {
        ...(t ?? {}),
        fastScrollSensitivity: e.fastScrollSensitivity
      };
    }
    if (t) {
      this.scrollableElement.updateOptions(t);
    }
    if (e.paddingTop !== undefined && e.paddingTop !== this.rangeMap.paddingTop) {
      const i = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
      const r = e.paddingTop - this.rangeMap.paddingTop;
      this.rangeMap.paddingTop = e.paddingTop;
      this.render(i, Math.max(0, this.lastRenderTop + r), this.lastRenderHeight, undefined, undefined, true);
      this.setScrollTop(this.lastRenderTop);
      this.eventuallyUpdateScrollDimensions();
      if (this.supportDynamicHeights) {
        this._rerender(this.lastRenderTop, this.lastRenderHeight);
      }
    }
  }
  delegateScrollFromMouseWheelEvent(e) {
    this.scrollableElement.delegateScrollFromMouseWheelEvent(e);
  }
  delegateVerticalScrollbarPointerDown(e) {
    this.scrollableElement.delegateVerticalScrollbarPointerDown(e);
  }
  updateElementHeight(e, t, i) {
    if (e < 0 || e >= this.items.length) {
      return;
    }
    const r = this.items[e].size;
    if (typeof t === "undefined") {
      if (!this.supportDynamicHeights) {
        console.warn("Dynamic heights not supported", new Error().stack);
        return;
      }
      this.items[e].lastDynamicHeightWidth = undefined;
      t = r + this.probeDynamicHeight(e);
    }
    if (r === t) {
      return;
    }
    const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    let o = 0;
    if (e < s.start || i !== null && i > e && i < s.end) {
      o = t - r;
    } else {
      o = 0;
    }
    const a = this.itemGap > 0 ? t + this.itemGap : t;
    this.rangeMap.splice(e, 1, [{
      size: a
    }]);
    this.items[e].size = t;
    this.render(s, Math.max(0, this.lastRenderTop + o), this.lastRenderHeight, undefined, undefined, true);
    this.setScrollTop(this.lastRenderTop);
    this.eventuallyUpdateScrollDimensions();
    if (this.supportDynamicHeights) {
      this._rerender(this.lastRenderTop, this.lastRenderHeight);
    } else {
      this._onDidChangeContentHeight.fire(this.contentHeight);
    }
  }
  createRangeMap(e) {
    return new n_h(e);
  }
  splice(e, t, i = []) {
    if (this.splicing) {
      throw new Error("Can't run recursive splices.");
    }
    this.splicing = true;
    try {
      return this._splice(e, t, i);
    } finally {
      this.splicing = false;
      this._onDidChangeContentHeight.fire(this.contentHeight);
    }
  }
  _splice(e, t, i = []) {
    const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    const s = {
      start: e,
      end: e + t
    };
    const o = QH.intersect(r, s);
    const a = new Map();
    for (let R = o.end - 1; R >= o.start; R--) {
      const N = this.items[R];
      N.dragStartDisposable.dispose();
      N.checkedDisposable.dispose();
      if (N.row) {
        let M = a.get(N.templateId);
        if (!M) {
          M = [];
          a.set(N.templateId, M);
        }
        const O = this.renderers.get(N.templateId);
        if (O && O.disposeElement) {
          O.disposeElement(N.element, R, N.row.templateData, N.size);
        }
        M.unshift(N.row);
      }
      N.row = null;
      N.stale = true;
    }
    const l = {
      start: e + t,
      end: this.items.length
    };
    const u = QH.intersect(l, r);
    const d = QH.relativeComplement(l, r);
    const m = i.map(R => ({
      id: String(this.itemId++),
      element: R,
      templateId: this.virtualDelegate.getTemplateId(R),
      size: this.virtualDelegate.getHeight(R),
      width: undefined,
      hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(R),
      lastDynamicHeightWidth: undefined,
      row: null,
      uri: undefined,
      dropTarget: false,
      dragStartDisposable: at.None,
      checkedDisposable: at.None,
      stale: false
    }));
    let p;
    if (e === 0 && t >= this.items.length) {
      this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop);
      if (this.itemGap > 0) {
        const R = m.map(N => ({
          ...N,
          size: N.size + this.itemGap
        }));
        if (R.length > 0) {
          const N = R[R.length - 1];
          R[R.length - 1] = {
            ...N,
            size: N.size - this.itemGap
          };
        }
        this.rangeMap.splice(0, 0, R);
      } else {
        this.rangeMap.splice(0, 0, m);
      }
      p = this.items;
      this.items = m;
    } else {
      if (this.itemGap > 0) {
        const R = m.map(N => ({
          ...N,
          size: N.size + this.itemGap
        }));
        if (R.length > 0 && e + R.length === this.items.length + R.length) {
          const N = R[R.length - 1];
          R[R.length - 1] = {
            ...N,
            size: N.size - this.itemGap
          };
        }
        this.rangeMap.splice(e, t, R);
      } else {
        this.rangeMap.splice(e, t, m);
      }
      p = MMo(this.items, e, t, m);
    }
    const g = i.length - t;
    const f = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
    const A = GIc(u, g);
    const w = QH.intersect(f, A);
    for (let R = w.start; R < w.end; R++) {
      this.updateItemInDOM(this.items[R], R);
    }
    const C = QH.relativeComplement(A, f);
    for (const R of C) {
      for (let N = R.start; N < R.end; N++) {
        this.removeItemFromDOM(N);
      }
    }
    const x = d.map(R => GIc(R, g));
    const B = [{
      start: e,
      end: e + i.length
    }, ...x].map(R => QH.intersect(f, R)).reverse();
    for (const R of B) {
      for (let N = R.end - 1; N >= R.start; N--) {
        const M = this.items[N];
        const $ = a.get(M.templateId)?.pop();
        this.insertItemInDOM(N, $);
      }
    }
    for (const R of a.values()) {
      for (const N of R) {
        this.cache.release(N);
      }
    }
    this.eventuallyUpdateScrollDimensions();
    if (this.supportDynamicHeights) {
      this._rerender(this.scrollTop, this.renderHeight);
    }
    return p.map(R => R.element);
  }
  eventuallyUpdateScrollDimensions() {
    this._scrollHeight = this.contentHeight;
    this.rowsContainer.style.height = `${this._scrollHeight}px`;
    this.scrollableElementUpdateDisposable ||= r_(As(this.domNode), () => {
      this.scrollableElement.setScrollDimensions({
        scrollHeight: this.scrollHeight
      });
      this.updateScrollWidth();
      this.scrollableElementUpdateDisposable = null;
    });
  }
  eventuallyUpdateScrollWidth() {
    if (!this.horizontalScrolling) {
      this.scrollableElementWidthDelayer.cancel();
      return;
    }
    this.scrollableElementWidthDelayer.trigger(() => this.updateScrollWidth());
  }
  updateScrollWidth() {
    if (!this.horizontalScrolling) {
      return;
    }
    let e = 0;
    for (const t of this.items) {
      if (typeof t.width !== "undefined") {
        e = Math.max(e, t.width);
      }
    }
    this.scrollWidth = e;
    this.scrollableElement.setScrollDimensions({
      scrollWidth: e === 0 ? 0 : e + 10
    });
    this._onDidChangeContentWidth.fire(this.scrollWidth);
  }
  updateWidth(e) {
    if (!this.horizontalScrolling || typeof this.scrollWidth === "undefined") {
      return;
    }
    const t = this.items[e];
    this.measureItemWidth(t);
    if (typeof t.width !== "undefined" && t.width > this.scrollWidth) {
      this.scrollWidth = t.width;
      this.scrollableElement.setScrollDimensions({
        scrollWidth: this.scrollWidth + 10
      });
      this._onDidChangeContentWidth.fire(this.scrollWidth);
    }
  }
  rerender() {
    if (this.supportDynamicHeights) {
      for (const e of this.items) {
        e.lastDynamicHeightWidth = undefined;
      }
      this._rerender(this.lastRenderTop, this.lastRenderHeight);
    }
  }
  get length() {
    return this.items.length;
  }
  get renderHeight() {
    return this.scrollableElement.getScrollDimensions().height;
  }
  get firstVisibleIndex() {
    return this.getVisibleRange(this.lastRenderTop, this.lastRenderHeight).start;
  }
  get firstMostlyVisibleIndex() {
    const e = this.firstVisibleIndex;
    const t = this.rangeMap.positionAt(e);
    const i = this.rangeMap.positionAt(e + 1);
    if (i !== -1 && (i - t) / 2 + t < this.scrollTop) {
      return e + 1;
    } else {
      return e;
    }
  }
  get lastVisibleIndex() {
    return this.getRenderRange(this.lastRenderTop, this.lastRenderHeight).end - 1;
  }
  element(e) {
    return this.items[e].element;
  }
  indexOf(e) {
    return this.items.findIndex(t => t.element === e);
  }
  domElement(e) {
    const t = this.items[e].row;
    return t && t.domNode;
  }
  elementHeight(e) {
    return this.items[e].size;
  }
  elementTop(e) {
    return this.rangeMap.positionAt(e);
  }
  indexAt(e) {
    return this.rangeMap.indexAt(e);
  }
  indexAfter(e) {
    return this.rangeMap.indexAfter(e);
  }
  layout(e, t) {
    const i = {
      height: typeof e == "number" ? e : QSc(this.domNode)
    };
    if (this.scrollableElementUpdateDisposable) {
      this.scrollableElementUpdateDisposable.dispose();
      this.scrollableElementUpdateDisposable = null;
      i.scrollHeight = this.scrollHeight;
    }
    this.scrollableElement.setScrollDimensions(i);
    if (typeof t !== "undefined") {
      this.renderWidth = t;
      if (this.supportDynamicHeights) {
        this._rerender(this.scrollTop, this.renderHeight);
      }
    }
    if (this.horizontalScrolling) {
      this.scrollableElement.setScrollDimensions({
        width: typeof t == "number" ? t : KFn(this.domNode)
      });
    }
  }
  render(e, t, i, r, s, o = false) {
    const a = this.getRenderRange(t, i);
    const l = QH.relativeComplement(a, e).reverse();
    const u = QH.relativeComplement(e, a);
    if (o) {
      const d = QH.intersect(e, a);
      for (let m = d.start; m < d.end; m++) {
        this.updateItemInDOM(this.items[m], m);
      }
    }
    this.cache.transact(() => {
      for (const d of u) {
        for (let m = d.start; m < d.end; m++) {
          this.removeItemFromDOM(m);
        }
      }
      for (const d of l) {
        for (let m = d.end - 1; m >= d.start; m--) {
          this.insertItemInDOM(m);
        }
      }
    });
    if (r !== undefined) {
      this.rowsContainer.style.left = `-${r}px`;
    }
    this.rowsContainer.style.top = `-${t}px`;
    if (this.horizontalScrolling && s !== undefined) {
      this.rowsContainer.style.width = `${Math.max(s, this.renderWidth)}px`;
    }
    this.lastRenderTop = t;
    this.lastRenderHeight = i;
  }
  insertItemInDOM(e, t) {
    const i = this.items[e];
    if (!i.row) {
      if (t) {
        i.row = t;
        i.stale = true;
      } else {
        const l = this.cache.alloc(i.templateId);
        i.row = l.row;
        i.stale ||= l.isReusingConnectedDomNode;
      }
    }
    const r = this.accessibilityProvider.getRole(i.element) || "listitem";
    i.row.domNode.setAttribute("role", r);
    const s = this.accessibilityProvider.isChecked(i.element);
    if (typeof s == "boolean") {
      i.row.domNode.setAttribute("aria-checked", String(!!s));
    } else if (s) {
      const l = u => i.row.domNode.setAttribute("aria-checked", String(!!u));
      l(s.value);
      i.checkedDisposable = s.onDidChange(() => l(s.value));
    }
    if (i.stale || !i.row.domNode.parentElement) {
      const l = this.items.at(e + 1)?.row?.domNode ?? null;
      if (i.row.domNode.parentElement !== this.rowsContainer || i.row.domNode.nextElementSibling !== l) {
        this.rowsContainer.insertBefore(i.row.domNode, l);
      }
      i.stale = false;
    }
    this.updateItemInDOM(i, e);
    const o = this.renderers.get(i.templateId);
    if (!o) {
      throw new Error(`No renderer found for template id ${i.templateId}`);
    }
    o?.renderElement(i.element, e, i.row.templateData, i.size);
    const a = this.dnd.getDragURI(i.element);
    i.dragStartDisposable.dispose();
    i.row.domNode.draggable = !!a;
    if (a) {
      i.dragStartDisposable = ei(i.row.domNode, "dragstart", l => this.onDragStart(i.element, a, l));
    }
    if (this.horizontalScrolling) {
      this.measureItemWidth(i);
      this.eventuallyUpdateScrollWidth();
    }
  }
  measureItemWidth(e) {
    if (!e.row || !e.row.domNode) {
      return;
    }
    e.row.domNode.style.width = "fit-content";
    e.width = KFn(e.row.domNode);
    const t = As(e.row.domNode).getComputedStyle(e.row.domNode);
    if (t.paddingLeft) {
      e.width += parseFloat(t.paddingLeft);
    }
    if (t.paddingRight) {
      e.width += parseFloat(t.paddingRight);
    }
    e.row.domNode.style.width = "";
  }
  updateItemInDOM(e, t) {
    e.row.domNode.style.top = `${this.elementTop(t)}px`;
    if (this.setRowHeight) {
      e.row.domNode.style.height = `${e.size}px`;
    }
    if (this.setRowLineHeight) {
      e.row.domNode.style.lineHeight = `${e.size}px`;
    }
    e.row.domNode.setAttribute("data-index", `${t}`);
    e.row.domNode.setAttribute("data-last-element", t === this.length - 1 ? "true" : "false");
    e.row.domNode.setAttribute("data-parity", t % 2 === 0 ? "even" : "odd");
    e.row.domNode.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(e.element, t, this.length)));
    e.row.domNode.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(e.element, t)));
    e.row.domNode.setAttribute("id", this.getElementDomId(t));
    e.row.domNode.classList.toggle("drop-target", e.dropTarget);
  }
  removeItemFromDOM(e) {
    const t = this.items[e];
    t.dragStartDisposable.dispose();
    t.checkedDisposable.dispose();
    if (t.row) {
      const i = this.renderers.get(t.templateId);
      if (i && i.disposeElement) {
        i.disposeElement(t.element, e, t.row.templateData, t.size);
      }
      this.cache.release(t.row);
      t.row = null;
    }
    if (this.horizontalScrolling) {
      this.eventuallyUpdateScrollWidth();
    }
  }
  getScrollTop() {
    return this.scrollableElement.getScrollPosition().scrollTop;
  }
  setScrollTop(e, t) {
    if (this.scrollableElementUpdateDisposable) {
      this.scrollableElementUpdateDisposable.dispose();
      this.scrollableElementUpdateDisposable = null;
      this.scrollableElement.setScrollDimensions({
        scrollHeight: this.scrollHeight
      });
    }
    this.scrollableElement.setScrollPosition({
      scrollTop: e,
      reuseAnimation: t
    });
  }
  getScrollLeft() {
    return this.scrollableElement.getScrollPosition().scrollLeft;
  }
  setScrollLeft(e) {
    if (this.scrollableElementUpdateDisposable) {
      this.scrollableElementUpdateDisposable.dispose();
      this.scrollableElementUpdateDisposable = null;
      this.scrollableElement.setScrollDimensions({
        scrollWidth: this.scrollWidth
      });
    }
    this.scrollableElement.setScrollPosition({
      scrollLeft: e
    });
  }
  get scrollTop() {
    return this.getScrollTop();
  }
  set scrollTop(e) {
    this.setScrollTop(e);
  }
  get scrollHeight() {
    return this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.paddingBottom;
  }
  get onMouseClick() {
    return In.map(this.disposables.add(new Hg(this.domNode, "click")).event, e => this.toMouseEvent(e), this.disposables);
  }
  get onMouseDblClick() {
    return In.map(this.disposables.add(new Hg(this.domNode, "dblclick")).event, e => this.toMouseEvent(e), this.disposables);
  }
  get onMouseMiddleClick() {
    return In.filter(In.map(this.disposables.add(new Hg(this.domNode, "auxclick")).event, e => this.toMouseEvent(e), this.disposables), e => e.browserEvent.button === 1, this.disposables);
  }
  get onMouseUp() {
    return In.map(this.disposables.add(new Hg(this.domNode, "mouseup")).event, e => this.toMouseEvent(e), this.disposables);
  }
  get onMouseDown() {
    return In.map(this.disposables.add(new Hg(this.domNode, "mousedown")).event, e => this.toMouseEvent(e), this.disposables);
  }
  get onMouseOver() {
    return In.map(this.disposables.add(new Hg(this.domNode, "mouseover")).event, e => this.toMouseEvent(e), this.disposables);
  }
  get onMouseMove() {
    return In.map(this.disposables.add(new Hg(this.domNode, "mousemove")).event, e => this.toMouseEvent(e), this.disposables);
  }
  get onMouseOut() {
    return In.map(this.disposables.add(new Hg(this.domNode, "mouseout")).event, e => this.toMouseEvent(e), this.disposables);
  }
  get onContextMenu() {
    return In.any(In.map(this.disposables.add(new Hg(this.domNode, "contextmenu")).event, e => this.toMouseEvent(e), this.disposables), In.map(this.disposables.add(new Hg(this.domNode, MA.Contextmenu)).event, e => this.toGestureEvent(e), this.disposables));
  }
  get onTouchStart() {
    return In.map(this.disposables.add(new Hg(this.domNode, "touchstart")).event, e => this.toTouchEvent(e), this.disposables);
  }
  get onTap() {
    return In.map(this.disposables.add(new Hg(this.rowsContainer, MA.Tap)).event, e => this.toGestureEvent(e), this.disposables);
  }
  toMouseEvent(e) {
    const t = this.getItemIndexFromEventTarget(e.target || null);
    const i = typeof t === "undefined" ? undefined : this.items[t];
    const r = i && i.element;
    return {
      browserEvent: e,
      index: t,
      element: r
    };
  }
  toTouchEvent(e) {
    const t = this.getItemIndexFromEventTarget(e.target || null);
    const i = typeof t === "undefined" ? undefined : this.items[t];
    const r = i && i.element;
    return {
      browserEvent: e,
      index: t,
      element: r
    };
  }
  toGestureEvent(e) {
    const t = this.getItemIndexFromEventTarget(e.initialTarget || null);
    const i = typeof t === "undefined" ? undefined : this.items[t];
    const r = i && i.element;
    return {
      browserEvent: e,
      index: t,
      element: r
    };
  }
  toDragEvent(e) {
    const t = this.getItemIndexFromEventTarget(e.target || null);
    const i = typeof t === "undefined" ? undefined : this.items[t];
    const r = i && i.element;
    const s = this.getTargetSector(e, t);
    return {
      browserEvent: e,
      index: t,
      element: r,
      sector: s
    };
  }
  onScroll(e) {
    try {
      const t = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
      this.render(t, e.scrollTop, e.height, e.scrollLeft, e.scrollWidth);
      if (this.supportDynamicHeights) {
        this._rerender(e.scrollTop, e.height, e.inSmoothScrolling);
      }
    } catch (t) {
      console.error("Got bad scroll event:", e);
      throw t;
    }
  }
  onTouchChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.scrollTop -= e.translationY;
  }
  onDragStart(e, t, i) {
    if (!i.dataTransfer) {
      return;
    }
    const r = this.dnd.getDragElements(e);
    i.dataTransfer.effectAllowed = "copyMove";
    i.dataTransfer.setData(fT.TEXT, t);
    let s;
    if (this.dnd.getDragLabel) {
      s = this.dnd.getDragLabel(r, i);
    }
    if (typeof s === "undefined") {
      s = String(r.length);
    }
    rbt(i, this.domNode, s, [this.domId]);
    this.domNode.classList.add("dragging");
    this.currentDragData = new ove(r);
    YVe.CurrentDragAndDropData = new WIc(r);
    this.dnd.onDragStart?.(this.currentDragData, i);
  }
  onPotentialSelectionStart(e) {
    this.currentSelectionDisposable.dispose();
    const t = lFo(this.domNode);
    const i = this.currentSelectionDisposable = new Ut();
    const r = i.add(new Ut());
    r.add(ei(this.domNode, "selectstart", () => {
      r.add(ei(t, "mousemove", s => {
        if (t.getSelection()?.isCollapsed === false) {
          this.setupDragAndDropScrollTopAnimation(s);
        }
      }));
      i.add($i(() => {
        const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        this.currentSelectionBounds = undefined;
        this.render(s, this.lastRenderTop, this.lastRenderHeight, undefined, undefined);
      }));
      i.add(ei(t, "selectionchange", () => {
        const s = t.getSelection();
        if (!s || s.isCollapsed) {
          if (r.isDisposed) {
            i.dispose();
          }
          return;
        }
        let o = this.getIndexOfListElement(s.anchorNode);
        let a = this.getIndexOfListElement(s.focusNode);
        if (o !== undefined && a !== undefined) {
          if (a < o) {
            [o, a] = [a, o];
          }
          this.currentSelectionBounds = {
            start: o,
            end: a
          };
        }
      }));
    }));
    r.add(ei(t, "mouseup", () => {
      r.dispose();
      this.teardownDragAndDropScrollTopAnimation();
      if (t.getSelection()?.isCollapsed !== false) {
        i.dispose();
      }
    }));
  }
  getIndexOfListElement(e) {
    if (!!e && !!this.domNode.contains(e)) {
      while (e && e !== this.domNode) {
        if (e.dataset?.index) {
          return Number(e.dataset.index);
        }
        e = e.parentElement;
      }
    }
  }
  onDragOver(e) {
    e.browserEvent.preventDefault();
    this.onDragLeaveTimeout.dispose();
    if (YVe.CurrentDragAndDropData && YVe.CurrentDragAndDropData.getData() === "vscode-ui" || (this.setupDragAndDropScrollTopAnimation(e.browserEvent), !e.browserEvent.dataTransfer)) {
      return false;
    }
    if (!this.currentDragData) {
      if (YVe.CurrentDragAndDropData) {
        this.currentDragData = YVe.CurrentDragAndDropData;
      } else {
        if (!e.browserEvent.dataTransfer.types) {
          return false;
        }
        this.currentDragData = new f3t();
      }
    }
    const t = this.dnd.onDragOver(this.currentDragData, e.element, e.index, e.sector, e.browserEvent);
    this.canDrop = typeof t == "boolean" ? t : t.accept;
    if (!this.canDrop) {
      this.currentDragFeedback = undefined;
      this.currentDragFeedbackDisposable.dispose();
      return false;
    }
    e.browserEvent.dataTransfer.dropEffect = typeof t != "boolean" && t.effect?.type === 0 ? "copy" : "move";
    let i;
    if (typeof t != "boolean" && t.feedback) {
      i = t.feedback;
    } else if (typeof e.index === "undefined") {
      i = [-1];
    } else {
      i = [e.index];
    }
    i = xb(i).filter(s => s >= -1 && s < this.length).sort((s, o) => s - o);
    i = i[0] === -1 ? [-1] : i;
    let r = typeof t != "boolean" && t.effect && t.effect.position ? t.effect.position : "drop-target";
    if (BuA(this.currentDragFeedback, i) && this.currentDragFeedbackPosition === r) {
      return true;
    }
    this.currentDragFeedback = i;
    this.currentDragFeedbackPosition = r;
    this.currentDragFeedbackDisposable.dispose();
    if (i[0] === -1) {
      this.domNode.classList.add(r);
      this.rowsContainer.classList.add(r);
      this.currentDragFeedbackDisposable = $i(() => {
        this.domNode.classList.remove(r);
        this.rowsContainer.classList.remove(r);
      });
    } else {
      if (i.length > 1 && r !== "drop-target") {
        throw new Error("Can't use multiple feedbacks with position different than 'over'");
      }
      if (r === "drop-target-after" && i[0] < this.length - 1) {
        i[0] += 1;
        r = "drop-target-before";
      }
      for (const s of i) {
        const o = this.items[s];
        o.dropTarget = true;
        o.row?.domNode.classList.add(r);
      }
      this.currentDragFeedbackDisposable = $i(() => {
        for (const s of i) {
          const o = this.items[s];
          o.dropTarget = false;
          o.row?.domNode.classList.remove(r);
        }
      });
    }
    return true;
  }
  onDragLeave(e) {
    this.onDragLeaveTimeout.dispose();
    this.onDragLeaveTimeout = nC(() => this.clearDragOverFeedback(), 100, this.disposables);
    if (this.currentDragData) {
      this.dnd.onDragLeave?.(this.currentDragData, e.element, e.index, e.browserEvent);
    }
  }
  onDrop(e) {
    if (!this.canDrop) {
      return;
    }
    const t = this.currentDragData;
    this.teardownDragAndDropScrollTopAnimation();
    this.clearDragOverFeedback();
    this.domNode.classList.remove("dragging");
    this.currentDragData = undefined;
    YVe.CurrentDragAndDropData = undefined;
    if (!!t && !!e.browserEvent.dataTransfer) {
      e.browserEvent.preventDefault();
      t.update(e.browserEvent.dataTransfer);
      this.dnd.drop(t, e.element, e.index, e.sector, e.browserEvent);
    }
  }
  onDragEnd(e) {
    this.canDrop = false;
    this.teardownDragAndDropScrollTopAnimation();
    this.clearDragOverFeedback();
    this.domNode.classList.remove("dragging");
    this.currentDragData = undefined;
    YVe.CurrentDragAndDropData = undefined;
    this.dnd.onDragEnd?.(e);
  }
  clearDragOverFeedback() {
    this.currentDragFeedback = undefined;
    this.currentDragFeedbackPosition = undefined;
    this.currentDragFeedbackDisposable.dispose();
    this.currentDragFeedbackDisposable = at.None;
  }
  setupDragAndDropScrollTopAnimation(e) {
    if (!this.dragOverAnimationDisposable) {
      const t = x5e(this.domNode).top;
      this.dragOverAnimationDisposable = Qoh(As(this.domNode), this.animateDragAndDropScrollTop.bind(this, t));
    }
    this.dragOverAnimationStopDisposable.dispose();
    this.dragOverAnimationStopDisposable = nC(() => {
      if (this.dragOverAnimationDisposable) {
        this.dragOverAnimationDisposable.dispose();
        this.dragOverAnimationDisposable = undefined;
      }
    }, 1000, this.disposables);
    this.dragOverMouseY = e.pageY;
  }
  animateDragAndDropScrollTop(e) {
    if (this.dragOverMouseY === undefined) {
      return;
    }
    const t = this.dragOverMouseY - e;
    const i = this.renderHeight - 35;
    if (t < 35) {
      this.scrollTop += Math.max(-14, Math.floor((t - 35) * 0.3));
    } else if (t > i) {
      this.scrollTop += Math.min(14, Math.floor((t - i) * 0.3));
    }
  }
  teardownDragAndDropScrollTopAnimation() {
    this.dragOverAnimationStopDisposable.dispose();
    if (this.dragOverAnimationDisposable) {
      this.dragOverAnimationDisposable.dispose();
      this.dragOverAnimationDisposable = undefined;
    }
  }
  getTargetSector(e, t) {
    if (t === undefined) {
      return;
    }
    const i = e.offsetY / this.items[t].size;
    const r = Math.floor(i / 0.25);
    return zA(r, 0, 3);
  }
  getItemIndexFromEventTarget(e) {
    const t = this.scrollableElement.getDomNode();
    let i = e;
    while ((wf(i) || Uoh(i)) && i !== this.rowsContainer && t.contains(i)) {
      const r = i.getAttribute("data-index");
      if (r) {
        const s = Number(r);
        if (!isNaN(s)) {
          return s;
        }
      }
      i = i.parentElement;
    }
  }
  getVisibleRange(e, t) {
    return {
      start: this.rangeMap.indexAt(e),
      end: this.rangeMap.indexAfter(e + t - 1)
    };
  }
  getRenderRange(e, t) {
    const i = this.getVisibleRange(e, t);
    if (this.currentSelectionBounds) {
      const r = this.rangeMap.count;
      i.start = Math.min(i.start, this.currentSelectionBounds.start, r);
      i.end = Math.min(Math.max(i.end, this.currentSelectionBounds.end + 1), r);
    }
    return i;
  }
  _rerender(e, t, i) {
    const r = this.getRenderRange(e, t);
    let s;
    let o;
    if (e === this.elementTop(r.start)) {
      s = r.start;
      o = 0;
    } else if (r.end - r.start > 1) {
      s = r.start + 1;
      o = this.elementTop(s) - e;
    }
    let a = 0;
    while (true) {
      const l = this.getRenderRange(e, t);
      let u = false;
      for (let d = l.start; d < l.end; d++) {
        const m = this.probeDynamicHeight(d);
        if (m !== 0) {
          this.rangeMap.splice(d, 1, [this.items[d]]);
        }
        a += m;
        u = u || m !== 0;
      }
      if (!u) {
        if (a !== 0) {
          this.eventuallyUpdateScrollDimensions();
        }
        const d = QH.relativeComplement(r, l);
        for (const p of d) {
          for (let g = p.start; g < p.end; g++) {
            if (this.items[g].row) {
              this.removeItemFromDOM(g);
            }
          }
        }
        const m = QH.relativeComplement(l, r).reverse();
        for (const p of m) {
          for (let g = p.end - 1; g >= p.start; g--) {
            this.insertItemInDOM(g);
          }
        }
        for (let p = l.start; p < l.end; p++) {
          if (this.items[p].row) {
            this.updateItemInDOM(this.items[p], p);
          }
        }
        if (typeof s == "number") {
          const p = this.scrollable.getFutureScrollPosition().scrollTop - e;
          const g = this.elementTop(s) - o + p;
          this.setScrollTop(g, i);
        }
        this._onDidChangeContentHeight.fire(this.contentHeight);
        return;
      }
    }
  }
  probeDynamicHeight(e) {
    const t = this.items[e];
    if (this.virtualDelegate.getDynamicHeight) {
      const o = this.virtualDelegate.getDynamicHeight(t.element);
      if (o !== null) {
        const a = t.size;
        t.size = o;
        t.lastDynamicHeightWidth = this.renderWidth;
        return o - a;
      }
    }
    if (!t.hasDynamicHeight || t.lastDynamicHeightWidth === this.renderWidth || this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(t.element)) {
      return 0;
    }
    const i = t.size;
    if (t.row) {
      t.row.domNode.style.height = "";
      t.size = t.row.domNode.offsetHeight;
      if (t.size === 0 && !HS(t.row.domNode, As(t.row.domNode).document.body)) {
        console.warn("Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!", new Error().stack);
      }
      t.lastDynamicHeightWidth = this.renderWidth;
      return t.size - i;
    }
    const {
      row: r
    } = this.cache.alloc(t.templateId);
    r.domNode.style.height = "";
    this.rowsContainer.appendChild(r.domNode);
    const s = this.renderers.get(t.templateId);
    if (!s) {
      throw new _m("Missing renderer for templateId: " + t.templateId);
    }
    s.renderElement(t.element, e, r.templateData, undefined);
    t.size = r.domNode.offsetHeight;
    s.disposeElement?.(t.element, e, r.templateData, undefined);
    this.virtualDelegate.setDynamicHeight?.(t.element, t.size);
    t.lastDynamicHeightWidth = this.renderWidth;
    r.domNode.remove();
    this.cache.release(r);
    return t.size - i;
  }
  getElementDomId(e) {
    return `${this.domId}_${e}`;
  }
  dispose() {
    for (const e of this.items) {
      e.dragStartDisposable.dispose();
      e.checkedDisposable.dispose();
      if (e.row) {
        const t = this.renderers.get(e.row.templateId);
        if (t) {
          t.disposeElement?.(e.element, -1, e.row.templateData, undefined);
          t.disposeTemplate(e.row.templateData);
        }
      }
    }
    this.items = [];
    this.domNode?.remove();
    this.dragOverAnimationDisposable?.dispose();
    this.disposables.dispose();
  }
};
__decorate([cl], joe.prototype, "onMouseClick", null);
__decorate([cl], joe.prototype, "onMouseDblClick", null);
__decorate([cl], joe.prototype, "onMouseMiddleClick", null);
__decorate([cl], joe.prototype, "onMouseUp", null);
__decorate([cl], joe.prototype, "onMouseDown", null);
__decorate([cl], joe.prototype, "onMouseOver", null);
__decorate([cl], joe.prototype, "onMouseMove", null);
__decorate([cl], joe.prototype, "onMouseOut", null);
__decorate([cl], joe.prototype, "onContextMenu", null);
__decorate([cl], joe.prototype, "onTouchStart", null);
__decorate([cl], joe.prototype, "onTap", null);
