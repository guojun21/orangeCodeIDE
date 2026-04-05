"use strict";

// Module: out-build/vs/base/browser/ui/scrollbar/abstractScrollbar.js
// Offset: 1536333 (bundle byte offset)
// Size: 4650 bytes
ri();
sI();
ZOt();
xTc();
_cA();
$4();
_r();
Wvh = 140;
TTc = class extends HR {
  constructor(n) {
    super();
    this._lazyRender = n.lazyRender;
    this._host = n.host;
    this._scrollable = n.scrollable;
    this._scrollByPage = n.scrollByPage;
    this._scrollbarState = n.scrollbarState;
    this._visibilityController = this._register(new Gvh(n.visibility, "visible scrollbar " + n.extraScrollbarClassName, "invisible scrollbar " + n.extraScrollbarClassName));
    this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
    this._pointerMoveMonitor = this._register(new Jft());
    this._shouldRender = true;
    this.domNode = mw(document.createElement("div"));
    this.domNode.setAttribute("role", "presentation");
    this.domNode.setAttribute("aria-hidden", "true");
    this._visibilityController.setDomNode(this.domNode);
    this.domNode.setPosition("absolute");
    this._register(ei(this.domNode.domNode, ir.POINTER_DOWN, e => this._domNodePointerDown(e)));
  }
  _createArrow(n) {
    const e = this._register(new Jvh(n));
    this.domNode.domNode.appendChild(e.bgDomNode);
    this.domNode.domNode.appendChild(e.domNode);
  }
  _createSlider(n, e, t, i) {
    this.slider = mw(document.createElement("div"));
    this.slider.setClassName("slider");
    this.slider.setPosition("absolute");
    this.slider.setTop(n);
    this.slider.setLeft(e);
    if (typeof t == "number") {
      this.slider.setWidth(t);
    }
    if (typeof i == "number") {
      this.slider.setHeight(i);
    }
    this.slider.setLayerHinting(true);
    this.slider.setContain("strict");
    this.domNode.domNode.appendChild(this.slider.domNode);
    this._register(ei(this.slider.domNode, ir.POINTER_DOWN, r => {
      if (r.button === 0) {
        r.preventDefault();
        this._sliderPointerDown(r);
      }
    }));
    this.onclick(this.slider.domNode, r => {
      if (r.leftButton) {
        r.stopPropagation();
      }
    });
  }
  _onElementSize(n) {
    if (this._scrollbarState.setVisibleSize(n)) {
      this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
      this._shouldRender = true;
      if (!this._lazyRender) {
        this.render();
      }
    }
    return this._shouldRender;
  }
  _onElementScrollSize(n) {
    if (this._scrollbarState.setScrollSize(n)) {
      this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
      this._shouldRender = true;
      if (!this._lazyRender) {
        this.render();
      }
    }
    return this._shouldRender;
  }
  _onElementScrollPosition(n) {
    if (this._scrollbarState.setScrollPosition(n)) {
      this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
      this._shouldRender = true;
      if (!this._lazyRender) {
        this.render();
      }
    }
    return this._shouldRender;
  }
  beginReveal() {
    this._visibilityController.setShouldBeVisible(true);
  }
  beginHide() {
    this._visibilityController.setShouldBeVisible(false);
  }
  render() {
    if (this._shouldRender) {
      this._shouldRender = false;
      this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize());
      this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition());
    }
  }
  _domNodePointerDown(n) {
    if (n.target === this.domNode.domNode) {
      this._onPointerDown(n);
    }
  }
  delegatePointerDown(n) {
    const e = this.domNode.domNode.getClientRects()[0].top;
    const t = e + this._scrollbarState.getSliderPosition();
    const i = e + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize();
    const r = this._sliderPointerPosition(n);
    if (t <= r && r <= i) {
      if (n.button === 0) {
        n.preventDefault();
        this._sliderPointerDown(n);
      }
    } else {
      this._onPointerDown(n);
    }
  }
  _onPointerDown(n) {
    let e;
    let t;
    if (n.target === this.domNode.domNode && typeof n.offsetX == "number" && typeof n.offsetY == "number") {
      e = n.offsetX;
      t = n.offsetY;
    } else {
      const r = qS(this.domNode.domNode);
      e = n.pageX - r.left;
      t = n.pageY - r.top;
    }
    const i = this._pointerDownRelativePosition(e, t);
    this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(i) : this._scrollbarState.getDesiredScrollPositionFromOffset(i));
    if (n.button === 0) {
      n.preventDefault();
      this._sliderPointerDown(n);
    }
  }
  _sliderPointerDown(n) {
    if (!n.target || !(n.target instanceof Element)) {
      return;
    }
    const e = this._sliderPointerPosition(n);
    const t = this._sliderOrthogonalPointerPosition(n);
    const i = this._scrollbarState.clone();
    this.slider.toggleClassName("active", true);
    this._pointerMoveMonitor.startMonitoring(n.target, n.pointerId, n.buttons, r => {
      const s = this._sliderOrthogonalPointerPosition(r);
      const o = Math.abs(s - t);
      if (Sc && o > Wvh) {
        this._setDesiredScrollPositionNow(i.getScrollPosition());
        return;
      }
      const l = this._sliderPointerPosition(r) - e;
      this._setDesiredScrollPositionNow(i.getDesiredScrollPositionFromDelta(l));
    }, () => {
      this.slider.toggleClassName("active", false);
      this._host.onDragEnd();
    });
    this._host.onDragStart();
  }
  _setDesiredScrollPositionNow(n) {
    const e = {};
    this.writeScrollPosition(e, n);
    this._scrollable.setScrollPositionNow(e);
  }
  updateScrollbarSize(n) {
    this._updateScrollbarSize(n);
    this._scrollbarState.setScrollbarSize(n);
    this._shouldRender = true;
    if (!this._lazyRender) {
      this.render();
    }
  }
  isNeeded() {
    return this._scrollbarState.isNeeded();
  }
};
