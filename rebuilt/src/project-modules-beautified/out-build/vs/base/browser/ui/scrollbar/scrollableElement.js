"use strict";

// Module: out-build/vs/base/browser/ui/scrollbar/scrollableElement.js
// Offset: 1550142 (bundle byte offset)
// Size: 10460 bytes
Ay();
ri();
sI();
h0();
CcA();
ScA();
$4();
vr();
yn();
rt();
_r();
NSe();
kcA();
Kvh = 500;
DTc = 50;
BTc = true;
Yvh = class {
  constructor(n, e, t) {
    this.timestamp = n;
    this.deltaX = e;
    this.deltaY = t;
    this.score = 0;
  }
};
t3t = class fGb {
  static {
    this.INSTANCE = new fGb();
  }
  constructor() {
    this._capacity = 5;
    this._memory = [];
    this._front = -1;
    this._rear = -1;
  }
  isPhysicalMouseWheel() {
    if (this._front === -1 && this._rear === -1) {
      return false;
    }
    let e = 1;
    let t = 0;
    let i = 1;
    let r = this._rear;
    do {
      const s = r === this._front ? e : Math.pow(2, -i);
      e -= s;
      t += this._memory[r].score * s;
      if (r === this._front) {
        break;
      }
      r = (this._capacity + r - 1) % this._capacity;
      i++;
    } while (true);
    return t <= 0.5;
  }
  acceptStandardWheelEvent(e) {
    if (_ze) {
      const t = As(e.browserEvent);
      const i = Vj(t);
      this.accept(Date.now(), e.deltaX * i, e.deltaY * i);
    } else {
      this.accept(Date.now(), e.deltaX, e.deltaY);
    }
  }
  accept(e, t, i) {
    let r = null;
    const s = new Yvh(e, t, i);
    if (this._front === -1 && this._rear === -1) {
      this._memory[0] = s;
      this._front = 0;
      this._rear = 0;
    } else {
      r = this._memory[this._rear];
      this._rear = (this._rear + 1) % this._capacity;
      if (this._rear === this._front) {
        this._front = (this._front + 1) % this._capacity;
      }
      this._memory[this._rear] = s;
    }
    s.score = this._computeScore(s, r);
  }
  _computeScore(e, t) {
    if (Math.abs(e.deltaX) > 0 && Math.abs(e.deltaY) > 0) {
      return 1;
    }
    let i = 0.5;
    if (!this._isAlmostInt(e.deltaX) || !this._isAlmostInt(e.deltaY)) {
      i += 0.25;
    }
    if (t) {
      const r = Math.abs(e.deltaX);
      const s = Math.abs(e.deltaY);
      const o = Math.abs(t.deltaX);
      const a = Math.abs(t.deltaY);
      const l = Math.max(Math.min(r, o), 1);
      const u = Math.max(Math.min(s, a), 1);
      const d = Math.max(r, o);
      const m = Math.max(s, a);
      if (d % l === 0 && m % u === 0) {
        i -= 0.5;
      }
    }
    return Math.min(Math.max(i, 0), 1);
  }
  _isAlmostInt(e) {
    return Math.abs(Math.round(e) - e) < 0.01;
  }
};
zOn = class extends HR {
  get options() {
    return this._options;
  }
  constructor(n, e, t) {
    super();
    this._onScroll = this._register(new Qe());
    this.onScroll = this._onScroll.event;
    this._onWillScroll = this._register(new Qe());
    this.onWillScroll = this._onWillScroll.event;
    n.style.overflow = "hidden";
    this._options = EcA(e);
    this._scrollable = t;
    this._register(this._scrollable.onScroll(s => {
      this._onWillScroll.fire(s);
      this._onDidScroll(s);
      this._onScroll.fire(s);
    }));
    const i = {
      onMouseWheel: s => this._onMouseWheel(s),
      onDragStart: () => this._onDragStart(),
      onDragEnd: () => this._onDragEnd()
    };
    this._verticalScrollbar = this._register(new Vvh(this._scrollable, this._options, i));
    this._horizontalScrollbar = this._register(new zvh(this._scrollable, this._options, i));
    this._domNode = document.createElement("div");
    this._domNode.className = "monaco-scrollable-element " + this._options.className;
    this._domNode.setAttribute("role", "presentation");
    this._domNode.style.position = "relative";
    const r = e.horizontal && e.vertical ? "both" : e.horizontal ? "horizontal" : "vertical";
    if (r === "both") {
      this._domNode.style.overflow = "hidden";
    } else if (r === "horizontal") {
      this._domNode.style.overflowX = "hidden";
    } else {
      this._domNode.style.overflowY = "hidden";
    }
    this._domNode.appendChild(n);
    this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode);
    this._domNode.appendChild(this._verticalScrollbar.domNode.domNode);
    if (this._options.useShadows) {
      this._leftShadowDomNode = mw(document.createElement("div"));
      this._leftShadowDomNode.setClassName("shadow");
      this._domNode.appendChild(this._leftShadowDomNode.domNode);
      this._topShadowDomNode = mw(document.createElement("div"));
      this._topShadowDomNode.setClassName("shadow");
      this._domNode.appendChild(this._topShadowDomNode.domNode);
      this._topLeftShadowDomNode = mw(document.createElement("div"));
      this._topLeftShadowDomNode.setClassName("shadow");
      this._domNode.appendChild(this._topLeftShadowDomNode.domNode);
    } else {
      this._leftShadowDomNode = null;
      this._topShadowDomNode = null;
      this._topLeftShadowDomNode = null;
    }
    this._listenOnDomNode = this._options.listenOnDomNode || this._domNode;
    this._mouseWheelToDispose = [];
    this._setListeningToMouseWheel(this._options.handleMouseWheel);
    this.onmouseover(this._listenOnDomNode, s => this._onMouseOver(s));
    this.onmouseleave(this._listenOnDomNode, s => this._onMouseLeave(s));
    this._hideTimeout = this._register(new O$());
    this._isDragging = false;
    this._mouseIsOver = false;
    this._shouldRender = true;
    this._revealOnScroll = true;
  }
  dispose() {
    this._mouseWheelToDispose = Bo(this._mouseWheelToDispose);
    super.dispose();
  }
  getDomNode() {
    return this._domNode;
  }
  getOverviewRulerLayoutInfo() {
    return {
      parent: this._domNode,
      insertBefore: this._verticalScrollbar.domNode.domNode
    };
  }
  delegateVerticalScrollbarPointerDown(n) {
    this._verticalScrollbar.delegatePointerDown(n);
  }
  getScrollDimensions() {
    return this._scrollable.getScrollDimensions();
  }
  setScrollDimensions(n) {
    this._scrollable.setScrollDimensions(n, false);
  }
  updateClassName(n) {
    this._options.className = n;
    if (Fs) {
      this._options.className += " mac";
    }
    this._domNode.className = "monaco-scrollable-element " + this._options.className;
  }
  updateOptions(n) {
    if (typeof n.handleMouseWheel !== "undefined") {
      this._options.handleMouseWheel = n.handleMouseWheel;
      this._setListeningToMouseWheel(this._options.handleMouseWheel);
    }
    if (typeof n.ignoreVerticalScrolling !== "undefined") {
      this._options.ignoreVerticalScrolling = n.ignoreVerticalScrolling;
    }
    if (typeof n.mouseWheelScrollSensitivity !== "undefined") {
      this._options.mouseWheelScrollSensitivity = n.mouseWheelScrollSensitivity;
    }
    if (typeof n.fastScrollSensitivity !== "undefined") {
      this._options.fastScrollSensitivity = n.fastScrollSensitivity;
    }
    if (typeof n.scrollPredominantAxis !== "undefined") {
      this._options.scrollPredominantAxis = n.scrollPredominantAxis;
    }
    if (typeof n.horizontal !== "undefined") {
      this._options.horizontal = n.horizontal;
    }
    if (typeof n.vertical !== "undefined") {
      this._options.vertical = n.vertical;
    }
    if (typeof n.horizontalScrollbarSize !== "undefined") {
      this._options.horizontalScrollbarSize = n.horizontalScrollbarSize;
    }
    if (typeof n.verticalScrollbarSize !== "undefined") {
      this._options.verticalScrollbarSize = n.verticalScrollbarSize;
    }
    if (typeof n.scrollByPage !== "undefined") {
      this._options.scrollByPage = n.scrollByPage;
    }
    this._horizontalScrollbar.updateOptions(this._options);
    this._verticalScrollbar.updateOptions(this._options);
    if (!this._options.lazyRender) {
      this._render();
    }
  }
  setRevealOnScroll(n) {
    this._revealOnScroll = n;
  }
  delegateScrollFromMouseWheelEvent(n) {
    this._onMouseWheel(new d5e(n));
  }
  _setListeningToMouseWheel(n) {
    if (this._mouseWheelToDispose.length > 0 !== n && (this._mouseWheelToDispose = Bo(this._mouseWheelToDispose), n)) {
      const t = i => {
        this._onMouseWheel(new d5e(i));
      };
      this._mouseWheelToDispose.push(ei(this._listenOnDomNode, ir.MOUSE_WHEEL, t, {
        passive: false
      }));
    }
  }
  _onMouseWheel(n) {
    if (n.browserEvent?.defaultPrevented) {
      return;
    }
    const e = t3t.INSTANCE;
    if (BTc) {
      e.acceptStandardWheelEvent(n);
    }
    let t = false;
    if (n.deltaY || n.deltaX) {
      let r = n.deltaY * this._options.mouseWheelScrollSensitivity;
      let s = n.deltaX * this._options.mouseWheelScrollSensitivity;
      if (this._options.scrollPredominantAxis) {
        if (this._options.scrollYToX && s + r === 0) {
          s = r = 0;
        } else if (Math.abs(r) >= Math.abs(s)) {
          s = 0;
        } else {
          r = 0;
        }
      }
      if (this._options.ignoreVerticalScrolling === true) {
        r = 0;
      }
      if (this._options.flipAxes) {
        [r, s] = [s, r];
      }
      const o = !Fs && n.browserEvent && n.browserEvent.shiftKey;
      if ((this._options.scrollYToX || o) && !s) {
        s = r;
        r = 0;
      }
      if (n.browserEvent && n.browserEvent.altKey) {
        s = s * this._options.fastScrollSensitivity;
        r = r * this._options.fastScrollSensitivity;
      }
      const a = this._scrollable.getFutureScrollPosition();
      let l = {};
      if (r) {
        const u = DTc * r;
        const d = a.scrollTop - (u < 0 ? Math.floor(u) : Math.ceil(u));
        this._verticalScrollbar.writeScrollPosition(l, d);
      }
      if (s) {
        const u = DTc * s;
        const d = a.scrollLeft - (u < 0 ? Math.floor(u) : Math.ceil(u));
        this._horizontalScrollbar.writeScrollPosition(l, d);
      }
      l = this._scrollable.validateScrollPosition(l);
      if (a.scrollLeft !== l.scrollLeft || a.scrollTop !== l.scrollTop) {
        if (BTc && this._options.mouseWheelSmoothScroll && e.isPhysicalMouseWheel()) {
          this._scrollable.setScrollPositionSmooth(l);
        } else {
          this._scrollable.setScrollPositionNow(l);
        }
        t = true;
      }
    }
    let i = t;
    if (!i && this._options.alwaysConsumeMouseWheel) {
      i = true;
    }
    if (!i && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded())) {
      i = true;
    }
    if (i) {
      n.preventDefault();
      n.stopPropagation();
    }
  }
  _onDidScroll(n) {
    this._shouldRender = this._horizontalScrollbar.onDidScroll(n) || this._shouldRender;
    this._shouldRender = this._verticalScrollbar.onDidScroll(n) || this._shouldRender;
    if (this._options.useShadows) {
      this._shouldRender = true;
    }
    if (this._revealOnScroll) {
      this._reveal();
    }
    if (!this._options.lazyRender) {
      this._render();
    }
  }
  renderNow() {
    if (!this._options.lazyRender) {
      throw new Error("Please use `lazyRender` together with `renderNow`!");
    }
    this._render();
  }
  _render() {
    if (this._shouldRender && (this._shouldRender = false, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
      const n = this._scrollable.getCurrentScrollPosition();
      const e = n.scrollTop > 0;
      const t = n.scrollLeft > 0;
      const i = t ? " left" : "";
      const r = e ? " top" : "";
      const s = t || e ? " top-left-corner" : "";
      this._leftShadowDomNode.setClassName(`shadow${i}`);
      this._topShadowDomNode.setClassName(`shadow${r}`);
      this._topLeftShadowDomNode.setClassName(`shadow${s}${r}${i}`);
    }
  }
  _onDragStart() {
    this._isDragging = true;
    this._reveal();
  }
  _onDragEnd() {
    this._isDragging = false;
    this._hide();
  }
  _onMouseLeave(n) {
    this._mouseIsOver = false;
    this._hide();
  }
  _onMouseOver(n) {
    this._mouseIsOver = true;
    this._reveal();
  }
  _reveal() {
    this._verticalScrollbar.beginReveal();
    this._horizontalScrollbar.beginReveal();
    this._scheduleHide();
  }
  _hide() {
    if (!this._mouseIsOver && !this._isDragging) {
      this._verticalScrollbar.beginHide();
      this._horizontalScrollbar.beginHide();
    }
  }
  _scheduleHide() {
    if (!this._mouseIsOver && !this._isDragging) {
      this._hideTimeout.cancelAndSet(() => this._hide(), Kvh);
    }
  }
};
a3o = class extends zOn {
  constructor(n, e) {
    e = e || {};
    e.mouseWheelSmoothScroll = false;
    const t = new Fde({
      forceIntegerValues: true,
      smoothScrollDuration: 0,
      scheduleAtNextAnimationFrame: i => r_(As(n), i)
    });
    super(n, e, t);
    this._register(t);
  }
  setScrollPosition(n) {
    this._scrollable.setScrollPositionNow(n);
  }
  getScrollPosition() {
    return this._scrollable.getCurrentScrollPosition();
  }
};
Yft = class extends zOn {
  constructor(n, e, t) {
    super(n, e, t);
  }
  setScrollPosition(n) {
    if (n.reuseAnimation) {
      this._scrollable.setScrollPositionSmooth(n, n.reuseAnimation);
    } else {
      this._scrollable.setScrollPositionNow(n);
    }
  }
  getScrollPosition() {
    return this._scrollable.getCurrentScrollPosition();
  }
};
Zvh = class extends zOn {
  constructor(n, e, t) {
    super(n, e, t);
  }
};
vF = class extends zOn {
  constructor(n, e) {
    e = e || {};
    e.mouseWheelSmoothScroll = false;
    const t = new Fde({
      forceIntegerValues: false,
      smoothScrollDuration: 0,
      scheduleAtNextAnimationFrame: i => r_(As(n), i)
    });
    super(n, e, t);
    this._register(t);
    this._element = n;
    this._register(this.onScroll(i => {
      if (i.scrollTopChanged) {
        this._element.scrollTop = i.scrollTop;
      }
      if (i.scrollLeftChanged) {
        this._element.scrollLeft = i.scrollLeft;
      }
    }));
    this.scanDomNode();
  }
  setScrollPosition(n) {
    this._scrollable.setScrollPositionNow(n);
  }
  getScrollPosition() {
    return this._scrollable.getCurrentScrollPosition();
  }
  scanDomNode() {
    this.setScrollDimensions({
      width: this._element.clientWidth,
      scrollWidth: this._element.scrollWidth,
      height: this._element.clientHeight,
      scrollHeight: this._element.scrollHeight
    });
    this.setScrollPosition({
      scrollLeft: this._element.scrollLeft,
      scrollTop: this._element.scrollTop
    });
  }
};
