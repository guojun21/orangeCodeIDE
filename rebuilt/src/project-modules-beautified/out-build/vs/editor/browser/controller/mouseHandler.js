"use strict";

// Module: out-build/vs/editor/browser/controller/mouseHandler.js
// Offset: 1560602 (bundle byte offset)
// Size: 13285 bytes
ri();
h0();
rt();
_r();
$vh();
XOt();
ZOo();
tl();
db();
Gft();
zI();
c3o = class extends qVe {
  constructor(n, e, t) {
    super();
    this._mouseLeaveMonitor = null;
    this._context = n;
    this.viewController = e;
    this.viewHelper = t;
    this.mouseTargetFactory = new s3o(this._context, t);
    this._mouseDownOperation = this._register(new Xvh(this._context, this.viewController, this.viewHelper, this.mouseTargetFactory, (s, o) => this._createMouseTarget(s, o), s => this._getMouseColumn(s)));
    this.lastMouseLeaveTime = -1;
    this._height = this._context.configuration.options.get(151).height;
    const i = new gvh(this.viewHelper.viewDomNode);
    this._register(i.onContextMenu(this.viewHelper.viewDomNode, s => this._onContextMenu(s, true)));
    this._register(i.onMouseMove(this.viewHelper.viewDomNode, s => {
      this._onMouseMove(s);
      this._mouseLeaveMonitor ||= ei(this.viewHelper.viewDomNode.ownerDocument, "mousemove", o => {
        if (!this.viewHelper.viewDomNode.contains(o.target)) {
          this._onMouseLeave(new mRe(o, false, this.viewHelper.viewDomNode));
        }
      });
    }));
    this._register(i.onMouseUp(this.viewHelper.viewDomNode, s => this._onMouseUp(s)));
    this._register(i.onMouseLeave(this.viewHelper.viewDomNode, s => this._onMouseLeave(s)));
    let r = 0;
    this._register(i.onPointerDown(this.viewHelper.viewDomNode, (s, o) => {
      r = o;
    }));
    this._register(ei(this.viewHelper.viewDomNode, ir.POINTER_UP, s => {
      this._mouseDownOperation.onPointerUp();
    }));
    this._register(i.onMouseDown(this.viewHelper.viewDomNode, s => this._onMouseDown(s, r)));
    this._setupMouseWheelZoomListener();
    this._context.addEventHandler(this);
  }
  _setupMouseWheelZoomListener() {
    const n = t3t.INSTANCE;
    let e = 0;
    let t = Ude.getZoomLevel();
    let i = false;
    let r = 0;
    const s = a => {
      this.viewController.emitMouseWheel(a);
      if (!this._context.configuration.options.get(77)) {
        return;
      }
      const l = new d5e(a);
      n.acceptStandardWheelEvent(l);
      if (n.isPhysicalMouseWheel()) {
        if (o(a)) {
          const u = Ude.getZoomLevel();
          const d = l.deltaY > 0 ? 1 : -1;
          Ude.setZoomLevel(u + d);
          l.preventDefault();
          l.stopPropagation();
        }
      } else {
        if (Date.now() - e > 50) {
          t = Ude.getZoomLevel();
          i = o(a);
          r = 0;
        }
        e = Date.now();
        r += l.deltaY;
        if (i) {
          Ude.setZoomLevel(t + r / 5);
          l.preventDefault();
          l.stopPropagation();
        }
      }
    };
    this._register(ei(this.viewHelper.viewDomNode, ir.MOUSE_WHEEL, s, {
      capture: true,
      passive: false
    }));
    function o(a) {
      if (Fs) {
        return (a.metaKey || a.ctrlKey) && !a.shiftKey && !a.altKey;
      } else {
        return a.ctrlKey && !a.metaKey && !a.shiftKey && !a.altKey;
      }
    }
  }
  dispose() {
    this._context.removeEventHandler(this);
    if (this._mouseLeaveMonitor) {
      this._mouseLeaveMonitor.dispose();
      this._mouseLeaveMonitor = null;
    }
    super.dispose();
  }
  onConfigurationChanged(n) {
    if (n.hasChanged(151)) {
      const e = this._context.configuration.options.get(151).height;
      if (this._height !== e) {
        this._height = e;
        this._mouseDownOperation.onHeightChanged();
      }
    }
    return false;
  }
  onCursorStateChanged(n) {
    this._mouseDownOperation.onCursorStateChanged(n);
    return false;
  }
  onFocusChanged(n) {
    return false;
  }
  getTargetAtClientPoint(n, e) {
    const i = new pTc(n, e).toPageCoordinates(As(this.viewHelper.viewDomNode));
    const r = hTc(this.viewHelper.viewDomNode);
    if (i.y < r.y || i.y > r.y + r.height || i.x < r.x || i.x > r.x + r.width) {
      return null;
    }
    const s = mTc(this.viewHelper.viewDomNode, r, i);
    return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), r, i, s, null);
  }
  _createMouseTarget(n, e) {
    let t = n.target;
    if (!this.viewHelper.viewDomNode.contains(t)) {
      const i = Qze(this.viewHelper.viewDomNode);
      if (i) {
        t = i.elementsFromPoint(n.posx, n.posy).find(r => this.viewHelper.viewDomNode.contains(r));
      }
    }
    return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), n.editorPos, n.pos, n.relativePos, e ? t : null);
  }
  _getMouseColumn(n) {
    return this.mouseTargetFactory.getMouseColumn(n.relativePos);
  }
  _onContextMenu(n, e) {
    this.viewController.emitContextMenu({
      event: n,
      target: this._createMouseTarget(n, e)
    });
  }
  _onMouseMove(n) {
    if (!this.mouseTargetFactory.mouseTargetIsWidget(n)) {
      n.preventDefault();
    }
    if (!this._mouseDownOperation.isActive() && !(n.timestamp < this.lastMouseLeaveTime)) {
      this.viewController.emitMouseMove({
        event: n,
        target: this._createMouseTarget(n, true)
      });
    }
  }
  _onMouseLeave(n) {
    if (this._mouseLeaveMonitor) {
      this._mouseLeaveMonitor.dispose();
      this._mouseLeaveMonitor = null;
    }
    this.lastMouseLeaveTime = new Date().getTime();
    this.viewController.emitMouseLeave({
      event: n,
      target: null
    });
  }
  _onMouseUp(n) {
    this.viewController.emitMouseUp({
      event: n,
      target: this._createMouseTarget(n, true)
    });
  }
  _onMouseDown(n, e) {
    const t = this._createMouseTarget(n, true);
    const i = t.type === 6 || t.type === 7;
    const r = t.type === 2 || t.type === 3 || t.type === 4;
    const s = t.type === 3;
    const o = this._context.configuration.options.get(114);
    const a = this._context.configuration.options.get(158);
    const l = t.type === 8 || t.type === 5;
    const u = t.type === 9;
    let d = n.leftButton || n.middleButton;
    if (Fs && n.leftButton && n.ctrlKey) {
      d = false;
    }
    const m = () => {
      n.preventDefault();
      this.viewHelper.focusTextArea();
    };
    if (d && (i || s && o && !a)) {
      m();
      this._mouseDownOperation.start(t.type, n, e);
    } else if (r) {
      n.preventDefault();
    } else if (l) {
      const p = t.detail;
      if (d && this.viewHelper.shouldSuppressMouseDownOnViewZone(p.viewZoneId)) {
        m();
        this._mouseDownOperation.start(t.type, n, e);
        n.preventDefault();
      }
    } else if (u && this.viewHelper.shouldSuppressMouseDownOnWidget(t.detail)) {
      m();
      n.preventDefault();
    }
    this.viewController.emitMouseDown({
      event: n,
      target: t
    });
  }
  _onMouseWheel(n) {
    this.viewController.emitMouseWheel(n);
  }
};
Xvh = class extends at {
  constructor(n, e, t, i, r, s) {
    super();
    this._context = n;
    this._viewController = e;
    this._viewHelper = t;
    this._mouseTargetFactory = i;
    this._createMouseTarget = r;
    this._getMouseColumn = s;
    this._mouseMoveMonitor = this._register(new bvh(this._viewHelper.viewDomNode));
    this._topBottomDragScrolling = this._register(new eAh(this._context, this._viewHelper, this._mouseTargetFactory, (o, a, l) => this._dispatchMouse(o, a, l)));
    this._mouseState = new nAh();
    this._currentSelection = new Vl(1, 1, 1, 1);
    this._isActive = false;
    this._lastMouseEvent = null;
  }
  dispose() {
    super.dispose();
  }
  isActive() {
    return this._isActive;
  }
  _onMouseDownThenMove(n) {
    this._lastMouseEvent = n;
    this._mouseState.setModifiers(n);
    const e = this._findMousePosition(n, false);
    if (e) {
      if (this._mouseState.isDragAndDrop) {
        this._viewController.emitMouseDrag({
          event: n,
          target: e
        });
      } else if (e.type === 13 && (e.outsidePosition === "above" || e.outsidePosition === "below")) {
        this._topBottomDragScrolling.start(e, n);
      } else {
        this._topBottomDragScrolling.stop();
        this._dispatchMouse(e, true, 1);
      }
    }
  }
  start(n, e, t) {
    this._lastMouseEvent = e;
    this._mouseState.setStartedOnLineNumbers(n === 3);
    this._mouseState.setStartButtons(e);
    this._mouseState.setModifiers(e);
    const i = this._findMousePosition(e, true);
    if (!i || !i.position) {
      return;
    }
    this._mouseState.trySetCount(e.detail, i.position);
    e.detail = this._mouseState.count;
    const r = this._context.configuration.options;
    if (!r.get(96) && r.get(35) && !r.get(22) && !this._mouseState.altKey && e.detail < 2 && !this._isActive && !this._currentSelection.isEmpty() && i.type === 6 && i.position && this._currentSelection.containsPosition(i.position)) {
      this._mouseState.isDragAndDrop = true;
      this._isActive = true;
      this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, t, e.buttons, s => this._onMouseDownThenMove(s), s => {
        const o = this._findMousePosition(this._lastMouseEvent, false);
        if (BH(s)) {
          this._viewController.emitMouseDropCanceled();
        } else {
          this._viewController.emitMouseDrop({
            event: this._lastMouseEvent,
            target: o ? this._createMouseTarget(this._lastMouseEvent, true) : null
          });
        }
        this._stop();
      });
      return;
    }
    this._mouseState.isDragAndDrop = false;
    this._dispatchMouse(i, e.shiftKey, 1);
    if (!this._isActive) {
      this._isActive = true;
      this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, t, e.buttons, s => this._onMouseDownThenMove(s), () => this._stop());
    }
  }
  _stop() {
    this._isActive = false;
    this._topBottomDragScrolling.stop();
  }
  onHeightChanged() {
    this._mouseMoveMonitor.stopMonitoring();
  }
  onPointerUp() {
    this._mouseMoveMonitor.stopMonitoring();
  }
  onCursorStateChanged(n) {
    this._currentSelection = n.selections[0];
  }
  _getPositionOutsideEditor(n) {
    const e = n.editorPos;
    const t = this._context.viewModel;
    const i = this._context.viewLayout;
    const r = this._getMouseColumn(n);
    if (n.posy < e.y) {
      const o = e.y - n.posy;
      const a = Math.max(i.getCurrentScrollTop() - o, 0);
      const l = r3o.getZoneAtCoord(this._context, a);
      if (l) {
        const d = this._helpPositionJumpOverViewZone(l);
        if (d) {
          return HH.createOutsideEditor(r, d, "above", o);
        }
      }
      const u = i.getLineNumberAtVerticalOffset(a);
      return HH.createOutsideEditor(r, new ar(u, 1), "above", o);
    }
    if (n.posy > e.y + e.height) {
      const o = n.posy - e.y - e.height;
      const a = i.getCurrentScrollTop() + n.relativePos.y;
      const l = r3o.getZoneAtCoord(this._context, a);
      if (l) {
        const d = this._helpPositionJumpOverViewZone(l);
        if (d) {
          return HH.createOutsideEditor(r, d, "below", o);
        }
      }
      const u = i.getLineNumberAtVerticalOffset(a);
      return HH.createOutsideEditor(r, new ar(u, t.getLineMaxColumn(u)), "below", o);
    }
    const s = i.getLineNumberAtVerticalOffset(i.getCurrentScrollTop() + n.relativePos.y);
    if (n.posx < e.x) {
      const o = e.x - n.posx;
      return HH.createOutsideEditor(r, new ar(s, 1), "left", o);
    }
    if (n.posx > e.x + e.width) {
      const o = n.posx - e.x - e.width;
      return HH.createOutsideEditor(r, new ar(s, t.getLineMaxColumn(s)), "right", o);
    }
    return null;
  }
  _findMousePosition(n, e) {
    const t = this._getPositionOutsideEditor(n);
    if (t) {
      return t;
    }
    const i = this._createMouseTarget(n, e);
    if (!i.position) {
      return null;
    }
    if (i.type === 8 || i.type === 5) {
      const s = this._helpPositionJumpOverViewZone(i.detail);
      if (s) {
        return HH.createViewZone(i.type, i.element, i.mouseColumn, s, i.detail);
      }
    }
    return i;
  }
  _helpPositionJumpOverViewZone(n) {
    const e = new ar(this._currentSelection.selectionStartLineNumber, this._currentSelection.selectionStartColumn);
    const t = n.positionBefore;
    const i = n.positionAfter;
    if (t && i) {
      if (t.isBefore(e)) {
        return t;
      } else {
        return i;
      }
    } else {
      return null;
    }
  }
  _dispatchMouse(n, e, t) {
    if (n.position) {
      this._viewController.dispatchMouse({
        position: n.position,
        mouseColumn: n.mouseColumn,
        startedOnLineNumbers: this._mouseState.startedOnLineNumbers,
        revealType: t,
        inSelectionMode: e,
        mouseDownCount: this._mouseState.count,
        altKey: this._mouseState.altKey,
        ctrlKey: this._mouseState.ctrlKey,
        metaKey: this._mouseState.metaKey,
        shiftKey: this._mouseState.shiftKey,
        leftButton: this._mouseState.leftButton,
        middleButton: this._mouseState.middleButton,
        onInjectedText: n.type === 6 && n.detail.injectedText !== null
      });
    }
  }
};
eAh = class extends at {
  constructor(n, e, t, i) {
    super();
    this._context = n;
    this._viewHelper = e;
    this._mouseTargetFactory = t;
    this._dispatchMouse = i;
    this._operation = null;
  }
  dispose() {
    super.dispose();
    this.stop();
  }
  start(n, e) {
    if (this._operation) {
      this._operation.setPosition(n, e);
    } else {
      this._operation = new tAh(this._context, this._viewHelper, this._mouseTargetFactory, this._dispatchMouse, n, e);
    }
  }
  stop() {
    if (this._operation) {
      this._operation.dispose();
      this._operation = null;
    }
  }
};
tAh = class extends at {
  constructor(n, e, t, i, r, s) {
    super();
    this._context = n;
    this._viewHelper = e;
    this._mouseTargetFactory = t;
    this._dispatchMouse = i;
    this._position = r;
    this._mouseEvent = s;
    this._lastTime = Date.now();
    this._animationFrameDisposable = r_(As(s.browserEvent), () => this._execute());
  }
  dispose() {
    this._animationFrameDisposable.dispose();
    super.dispose();
  }
  setPosition(n, e) {
    this._position = n;
    this._mouseEvent = e;
  }
  _tick() {
    const n = Date.now();
    const e = n - this._lastTime;
    this._lastTime = n;
    return e;
  }
  _getScrollSpeed() {
    const n = this._context.configuration.options.get(68);
    const e = this._context.configuration.options.get(151).height / n;
    const t = this._position.outsideDistance / n;
    if (t <= 1.5) {
      return Math.max(30, e * (1 + t));
    } else if (t <= 3) {
      return Math.max(60, e * (2 + t));
    } else {
      return Math.max(200, e * (7 + t));
    }
  }
  _execute() {
    const n = this._context.configuration.options.get(68);
    const e = this._getScrollSpeed();
    const t = this._tick();
    const i = e * (t / 1000) * n;
    const r = this._position.outsidePosition === "above" ? -i : i;
    this._context.viewModel.viewLayout.deltaScrollNow(0, r);
    this._viewHelper.renderNow();
    const s = this._context.viewLayout.getLinesViewportData();
    const o = this._position.outsidePosition === "above" ? s.startLineNumber : s.endLineNumber;
    let a;
    {
      const l = hTc(this._viewHelper.viewDomNode);
      const u = this._context.configuration.options.get(151).horizontalScrollbarHeight;
      const d = new GOn(this._mouseEvent.pos.x, l.y + l.height - u - 0.1);
      const m = mTc(this._viewHelper.viewDomNode, l, d);
      a = this._mouseTargetFactory.createMouseTarget(this._viewHelper.getLastRenderData(), l, d, m, null);
    }
    if (!a.position || a.position.lineNumber !== o) {
      if (this._position.outsidePosition === "above") {
        a = HH.createOutsideEditor(this._position.mouseColumn, new ar(o, 1), "above", this._position.outsideDistance);
      } else {
        a = HH.createOutsideEditor(this._position.mouseColumn, new ar(o, this._context.viewModel.getLineMaxColumn(o)), "below", this._position.outsideDistance);
      }
    }
    this._dispatchMouse(a, true, 2);
    this._animationFrameDisposable = r_(As(a.element), () => this._execute());
  }
};
nAh = class bGb {
  static {
    this.CLEAR_MOUSE_DOWN_COUNT_TIME = 400;
  }
  get altKey() {
    return this._altKey;
  }
  get ctrlKey() {
    return this._ctrlKey;
  }
  get metaKey() {
    return this._metaKey;
  }
  get shiftKey() {
    return this._shiftKey;
  }
  get leftButton() {
    return this._leftButton;
  }
  get middleButton() {
    return this._middleButton;
  }
  get startedOnLineNumbers() {
    return this._startedOnLineNumbers;
  }
  constructor() {
    this._altKey = false;
    this._ctrlKey = false;
    this._metaKey = false;
    this._shiftKey = false;
    this._leftButton = false;
    this._middleButton = false;
    this._startedOnLineNumbers = false;
    this._lastMouseDownPosition = null;
    this._lastMouseDownPositionEqualCount = 0;
    this._lastMouseDownCount = 0;
    this._lastSetMouseDownCountTime = 0;
    this.isDragAndDrop = false;
  }
  get count() {
    return this._lastMouseDownCount;
  }
  setModifiers(e) {
    this._altKey = e.altKey;
    this._ctrlKey = e.ctrlKey;
    this._metaKey = e.metaKey;
    this._shiftKey = e.shiftKey;
  }
  setStartButtons(e) {
    this._leftButton = e.leftButton;
    this._middleButton = e.middleButton;
  }
  setStartedOnLineNumbers(e) {
    this._startedOnLineNumbers = e;
  }
  trySetCount(e, t) {
    const i = new Date().getTime();
    if (i - this._lastSetMouseDownCountTime > bGb.CLEAR_MOUSE_DOWN_COUNT_TIME) {
      e = 1;
    }
    this._lastSetMouseDownCountTime = i;
    if (e > this._lastMouseDownCount + 1) {
      e = this._lastMouseDownCount + 1;
    }
    if (this._lastMouseDownPosition && this._lastMouseDownPosition.equals(t)) {
      this._lastMouseDownPositionEqualCount++;
    } else {
      this._lastMouseDownPositionEqualCount = 1;
    }
    this._lastMouseDownPosition = t;
    this._lastMouseDownCount = Math.min(e, this._lastMouseDownPositionEqualCount);
  }
};
