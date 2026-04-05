"use strict";

// Module: out-build/vs/editor/browser/view.js
// Offset: 1862200 (bundle byte offset)
// Size: 19953 bytes
ri();
sI();
dTc();
_s();
rt();
$vh();
TcA();
e3t();
IcA();
DcA();
j$();
fAh();
RcA();
PcA();
NcA();
FcA();
OcA();
qTc();
qcA();
RAh();
QcA();
zcA();
OAh();
YcA();
nlA();
rlA();
slA();
olA();
clA();
ulA();
plA();
blA();
AlA();
wlA();
tl();
ts();
db();
xw();
Gft();
_lA();
SlA();
Wt();
Io();
ZOn();
HlA();
WlA();
KlA();
YlA();
XlA();
yn();
_3o = class extends qVe {
  constructor(e, t, i, r, s, o, a, l, u) {
    super();
    this._instantiationService = u;
    this._shouldRecomputeGlyphMarginLanes = false;
    this._ownerID = t;
    this._widgetFocusTracker = this._register(new owh(e, l));
    this._register(this._widgetFocusTracker.onChange(() => {
      this._context.viewModel.setHasWidgetFocus(this._widgetFocusTracker.hasFocus());
    }));
    this._selections = [new Vl(1, 1, 1, 1)];
    this._renderAnimationFrame = null;
    this._overflowGuardContainer = mw(document.createElement("div"));
    tve.write(this._overflowGuardContainer, 3);
    this._overflowGuardContainer.setClassName("overflow-guard");
    this._viewController = new dAh(r, o, a, i);
    this._context = new Ayh(r, s, o);
    this._context.addEventHandler(this);
    this._viewParts = [];
    this._experimentalEditContextEnabled = this._context.configuration.options.get(157);
    this._accessibilitySupport = this._context.configuration.options.get(2);
    this._editContext = this._instantiateEditContext();
    this._viewParts.push(this._editContext);
    this._linesContent = mw(document.createElement("div"));
    this._linesContent.setClassName("lines-content monaco-editor-background");
    this._linesContent.setPosition("absolute");
    this.domNode = mw(document.createElement("div"));
    this.domNode.setClassName(this._getEditorClassName());
    this.domNode.setAttribute("role", "code");
    if (this._context.configuration.options.get(39) === "on") {
      this._viewGpuContext = this._instantiationService.createInstance(JH, this._context);
    }
    this._scrollbar = new CAh(this._context, this._linesContent, this.domNode, this._overflowGuardContainer);
    this._viewParts.push(this._scrollbar);
    this._viewLines = new MAh(this._context, this._viewGpuContext, this._linesContent);
    if (this._viewGpuContext) {
      this._viewLinesGpu = this._instantiationService.createInstance(v3o, this._context, this._viewGpuContext);
    }
    this._viewZones = new gyh(this._context);
    this._viewParts.push(this._viewZones);
    const d = new iyh(this._context);
    this._viewParts.push(d);
    const m = new lyh(this._context);
    this._viewParts.push(m);
    const p = new pAh(this._context);
    this._viewParts.push(p);
    p.addDynamicOverlay(new yAh(this._context));
    p.addDynamicOverlay(new myh(this._context));
    p.addDynamicOverlay(new BAh(this._context));
    p.addDynamicOverlay(new _Ah(this._context));
    p.addDynamicOverlay(new fyh(this._context));
    const g = new gAh(this._context);
    this._viewParts.push(g);
    g.addDynamicOverlay(new wAh(this._context));
    g.addDynamicOverlay(new UAh(this._context));
    g.addDynamicOverlay(new FAh(this._context));
    g.addDynamicOverlay(new HTc(this._context));
    if (this._viewGpuContext) {
      g.addDynamicOverlay(new rwh(this._context, this._viewGpuContext));
    }
    this._glyphMarginWidgets = new EAh(this._context);
    this._viewParts.push(this._glyphMarginWidgets);
    const f = new GTc(this._context);
    f.getDomNode().appendChild(this._viewZones.marginDomNode);
    f.getDomNode().appendChild(g.getDomNode());
    f.getDomNode().appendChild(this._glyphMarginWidgets.domNode);
    this._viewParts.push(f);
    this._contentWidgets = new vAh(this._context, this.domNode);
    this._viewParts.push(this._contentWidgets);
    this._viewCursors = new pyh(this._context);
    this._viewParts.push(this._viewCursors);
    this._overlayWidgets = new ZAh(this._context, this.domNode);
    this._viewParts.push(this._overlayWidgets);
    const A = this._viewGpuContext ? new iwh(this._context, this._viewGpuContext) : new cyh(this._context);
    this._viewParts.push(A);
    const w = new bAh(this._context);
    this._viewParts.push(w);
    const C = new KAh(this._context);
    this._viewParts.push(C);
    if (d) {
      const x = this._scrollbar.getOverviewRulerLayoutInfo();
      x.parent.insertBefore(d.getDomNode(), x.insertBefore);
    }
    this._linesContent.appendChild(p.getDomNode());
    if ("domNode" in A) {
      this._linesContent.appendChild(A.domNode);
    }
    this._linesContent.appendChild(this._viewZones.domNode);
    this._linesContent.appendChild(this._viewLines.getDomNode());
    this._linesContent.appendChild(this._contentWidgets.domNode);
    this._linesContent.appendChild(this._viewCursors.getDomNode());
    this._overflowGuardContainer.appendChild(f.getDomNode());
    this._overflowGuardContainer.appendChild(this._scrollbar.getDomNode());
    if (this._viewGpuContext) {
      this._overflowGuardContainer.appendChild(this._viewGpuContext.canvas);
    }
    this._overflowGuardContainer.appendChild(m.getDomNode());
    this._overflowGuardContainer.appendChild(this._overlayWidgets.getDomNode());
    this._overflowGuardContainer.appendChild(C.getDomNode());
    this._overflowGuardContainer.appendChild(w.domNode);
    this.domNode.appendChild(this._overflowGuardContainer);
    if (l) {
      l.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode.domNode);
      l.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode);
    } else {
      this.domNode.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode);
      this.domNode.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode);
    }
    this._applyLayout();
    this._pointerHandler = this._register(new uAh(this._context, this._viewController, this._createPointerHandlerHelper()));
  }
  _instantiateEditContext() {
    if (this._context.configuration.options.get(157)) {
      return this._instantiationService.createInstance(t3n, this._ownerID, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper());
    } else {
      return this._instantiationService.createInstance(y3o, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper());
    }
  }
  _updateEditContext() {
    const e = this._context.configuration.options.get(157);
    const t = this._context.configuration.options.get(2);
    if (this._experimentalEditContextEnabled === e && this._accessibilitySupport === t) {
      return;
    }
    this._experimentalEditContextEnabled = e;
    this._accessibilitySupport = t;
    const i = this._editContext.isFocused();
    const r = this._viewParts.indexOf(this._editContext);
    this._editContext.dispose();
    this._editContext = this._instantiateEditContext();
    if (i) {
      this._editContext.focus();
    }
    if (r !== -1) {
      this._viewParts.splice(r, 1, this._editContext);
    }
  }
  _computeGlyphMarginLanes() {
    const e = this._context.viewModel.model;
    const t = this._context.viewModel.glyphLanes;
    let i = [];
    let r = 0;
    i = i.concat(e.getAllMarginDecorations().map(s => {
      const o = s.options.glyphMargin?.position ?? G$.Center;
      r = Math.max(r, s.range.endLineNumber);
      return {
        range: s.range,
        lane: o,
        persist: s.options.glyphMargin?.persistLane
      };
    }));
    i = i.concat(this._glyphMarginWidgets.getWidgets().map(s => {
      const o = e.validateRange(s.preference.range);
      r = Math.max(r, o.endLineNumber);
      return {
        range: o,
        lane: s.preference.lane
      };
    }));
    i.sort((s, o) => Zt.compareRangesUsingStarts(s.range, o.range));
    t.reset(r);
    for (const s of i) {
      t.push(s.lane, s.range, s.persist);
    }
    return t;
  }
  _createPointerHandlerHelper() {
    return {
      viewDomNode: this.domNode.domNode,
      linesContentDomNode: this._linesContent.domNode,
      viewLinesDomNode: this._viewLines.getDomNode().domNode,
      viewLinesGpu: this._viewLinesGpu,
      focusTextArea: () => {
        this.focus();
      },
      dispatchTextAreaEvent: e => {
        this._editContext.domNode.domNode.dispatchEvent(e);
      },
      getLastRenderData: () => {
        const e = this._viewCursors.getLastRenderData() || [];
        const t = this._editContext.getLastRenderData();
        return new Mvh(e, t);
      },
      renderNow: () => {
        this.render(true, false);
      },
      shouldSuppressMouseDownOnViewZone: e => this._viewZones.shouldSuppressMouseDownOnViewZone(e),
      shouldSuppressMouseDownOnWidget: e => this._contentWidgets.shouldSuppressMouseDownOnWidget(e),
      getPositionFromDOMInfo: (e, t) => {
        this._flushAccumulatedAndRenderNow();
        return this._viewLines.getPositionFromDOMInfo(e, t);
      },
      visibleRangeForPosition: (e, t) => {
        this._flushAccumulatedAndRenderNow();
        const i = new ar(e, t);
        return this._viewLines.visibleRangeForPosition(i) ?? this._viewLinesGpu?.visibleRangeForPosition(i) ?? null;
      },
      getLineWidth: e => {
        this._flushAccumulatedAndRenderNow();
        if (this._viewLinesGpu) {
          const t = this._viewLinesGpu.getLineWidth(e);
          if (t !== undefined) {
            return t;
          }
        }
        return this._viewLines.getLineWidth(e);
      }
    };
  }
  _createTextAreaHandlerHelper() {
    return {
      visibleRangeForPosition: e => {
        this._flushAccumulatedAndRenderNow();
        return this._viewLines.visibleRangeForPosition(e);
      },
      linesVisibleRangesForRange: (e, t) => {
        this._flushAccumulatedAndRenderNow();
        return this._viewLines.linesVisibleRangesForRange(e, t);
      }
    };
  }
  _applyLayout() {
    const t = this._context.configuration.options.get(151);
    this.domNode.setWidth(t.width);
    this.domNode.setHeight(t.height);
    this._overflowGuardContainer.setWidth(t.width);
    this._overflowGuardContainer.setHeight(t.height);
    this._linesContent.setWidth(16777216);
    this._linesContent.setHeight(16777216);
  }
  _getEditorClassName() {
    const e = this._editContext.isFocused() ? " focused" : "";
    return this._context.configuration.options.get(148) + " " + Q4n(this._context.theme.type) + e;
  }
  handleEvents(e) {
    super.handleEvents(e);
    this._scheduleRender();
  }
  onConfigurationChanged(e) {
    this.domNode.setClassName(this._getEditorClassName());
    this._updateEditContext();
    this._applyLayout();
    return false;
  }
  onCursorStateChanged(e) {
    this._selections = e.selections;
    return false;
  }
  onDecorationsChanged(e) {
    if (e.affectsGlyphMargin) {
      this._shouldRecomputeGlyphMarginLanes = true;
    }
    return false;
  }
  onFocusChanged(e) {
    this.domNode.setClassName(this._getEditorClassName());
    return false;
  }
  onThemeChanged(e) {
    this._context.theme.update(e.theme);
    this.domNode.setClassName(this._getEditorClassName());
    return false;
  }
  dispose() {
    if (this._renderAnimationFrame !== null) {
      this._renderAnimationFrame.dispose();
      this._renderAnimationFrame = null;
    }
    this._contentWidgets.overflowingContentWidgetsDomNode.domNode.remove();
    this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode.remove();
    this._context.removeEventHandler(this);
    this._viewGpuContext?.dispose();
    this._viewLines.dispose();
    this._viewLinesGpu?.dispose();
    for (const e of this._viewParts) {
      e.dispose();
    }
    super.dispose();
  }
  _scheduleRender() {
    if (this._store.isDisposed) {
      throw new _m();
    }
    if (this._renderAnimationFrame === null) {
      if (this._editContext instanceof t3n) {
        this._editContext.setEditContextOnDomNode();
      }
      const e = this._createCoordinatedRendering();
      this._renderAnimationFrame = swh.INSTANCE.scheduleCoordinatedRendering({
        window: As(this.domNode?.domNode),
        prepareRenderText: () => {
          if (this._store.isDisposed) {
            throw new _m();
          }
          try {
            return e.prepareRenderText();
          } finally {
            this._renderAnimationFrame = null;
          }
        },
        renderText: () => {
          if (this._store.isDisposed) {
            throw new _m();
          }
          return e.renderText();
        },
        prepareRender: (t, i) => {
          if (this._store.isDisposed) {
            throw new _m();
          }
          return e.prepareRender(t, i);
        },
        render: (t, i) => {
          if (this._store.isDisposed) {
            throw new _m();
          }
          return e.render(t, i);
        }
      });
    }
  }
  _flushAccumulatedAndRenderNow() {
    const e = this._createCoordinatedRendering();
    jVe(() => e.prepareRenderText());
    const t = jVe(() => e.renderText());
    if (t) {
      const [i, r] = t;
      jVe(() => e.prepareRender(i, r));
      jVe(() => e.render(i, r));
    }
  }
  _getViewPartsToRender() {
    const e = [];
    let t = 0;
    for (const i of this._viewParts) {
      if (i.shouldRender()) {
        e[t++] = i;
      }
    }
    return e;
  }
  _createCoordinatedRendering() {
    return {
      prepareRenderText: () => {
        if (this._shouldRecomputeGlyphMarginLanes) {
          this._shouldRecomputeGlyphMarginLanes = false;
          const e = this._computeGlyphMarginLanes();
          this._context.configuration.setGlyphMarginDecorationLaneCount(e.requiredLanes);
        }
        d9e.onRenderStart();
      },
      renderText: () => {
        if (!this.domNode?.domNode.isConnected) {
          return null;
        }
        let e = this._getViewPartsToRender();
        if (!this._viewLines.shouldRender() && e.length === 0) {
          return null;
        }
        const t = this._context.viewLayout.getLinesViewportData();
        this._context.viewModel.setViewport(t.startLineNumber, t.endLineNumber, t.centeredLineNumber);
        const i = new byh(this._selections, t, this._context.viewLayout.getWhitespaceViewportData(), this._context.viewModel);
        if (this._contentWidgets.shouldRender()) {
          this._contentWidgets.onBeforeRender(i);
        }
        if (this._viewLines.shouldRender()) {
          this._viewLines.renderText(i);
          this._viewLines.onDidRender();
          e = this._getViewPartsToRender();
        }
        if (this._viewLinesGpu?.shouldRender()) {
          this._viewLinesGpu.renderText(i);
          this._viewLinesGpu.onDidRender();
        }
        return [e, new wvh(this._context.viewLayout, i, this._viewLines, this._viewLinesGpu)];
      },
      prepareRender: (e, t) => {
        for (const i of e) {
          i.prepareRender(t);
        }
      },
      render: (e, t) => {
        for (const i of e) {
          i.render(t);
          i.onDidRender();
        }
      }
    };
  }
  delegateVerticalScrollbarPointerDown(e) {
    this._scrollbar.delegateVerticalScrollbarPointerDown(e);
  }
  delegateScrollFromMouseWheelEvent(e) {
    this._scrollbar.delegateScrollFromMouseWheelEvent(e);
  }
  restoreState(e) {
    this._context.viewModel.viewLayout.setScrollPosition({
      scrollTop: e.scrollTop,
      scrollLeft: e.scrollLeft
    }, 1);
    this._context.viewModel.visibleLinesStabilized();
  }
  getOffsetForColumn(e, t) {
    const i = this._context.viewModel.model.validatePosition({
      lineNumber: e,
      column: t
    });
    const r = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(i);
    this._flushAccumulatedAndRenderNow();
    const s = this._viewLines.visibleRangeForPosition(new ar(r.lineNumber, r.column));
    if (s) {
      return s.left;
    } else {
      return -1;
    }
  }
  getTargetAtClientPoint(e, t) {
    const i = this._pointerHandler.getTargetAtClientPoint(e, t);
    if (i) {
      return MTc.convertViewToModelMouseTarget(i, this._context.viewModel.coordinatesConverter);
    } else {
      return null;
    }
  }
  createOverviewRuler(e) {
    return new ayh(this._context, e);
  }
  change(e) {
    this._viewZones.changeViewZones(e);
    this._scheduleRender();
  }
  render(e, t) {
    if (t) {
      this._viewLines.forceShouldRender();
      for (const i of this._viewParts) {
        i.forceShouldRender();
      }
    }
    if (e) {
      this._flushAccumulatedAndRenderNow();
    } else {
      this._scheduleRender();
    }
  }
  writeScreenReaderContent(e) {
    this._editContext.writeScreenReaderContent(e);
  }
  focus() {
    this._editContext.focus();
  }
  isFocused() {
    return this._editContext.isFocused();
  }
  isWidgetFocused() {
    return this._widgetFocusTracker.hasFocus();
  }
  refreshFocusState() {
    this._editContext.refreshFocusState();
    this._widgetFocusTracker.refreshState();
  }
  setAriaOptions(e) {
    this._editContext.setAriaOptions(e);
  }
  addContentWidget(e) {
    this._contentWidgets.addWidget(e.widget);
    this.layoutContentWidget(e);
    this._scheduleRender();
  }
  layoutContentWidget(e) {
    this._contentWidgets.setWidgetPosition(e.widget, e.position?.position ?? null, e.position?.secondaryPosition ?? null, e.position?.preference ?? null, e.position?.positionAffinity ?? null);
    this._scheduleRender();
  }
  removeContentWidget(e) {
    this._contentWidgets.removeWidget(e.widget);
    this._scheduleRender();
  }
  addOverlayWidget(e) {
    this._overlayWidgets.addWidget(e.widget);
    this.layoutOverlayWidget(e);
    this._scheduleRender();
  }
  layoutOverlayWidget(e) {
    if (this._overlayWidgets.setWidgetPosition(e.widget, e.position)) {
      this._scheduleRender();
    }
  }
  removeOverlayWidget(e) {
    this._overlayWidgets.removeWidget(e.widget);
    this._scheduleRender();
  }
  addGlyphMarginWidget(e) {
    this._glyphMarginWidgets.addWidget(e.widget);
    this._shouldRecomputeGlyphMarginLanes = true;
    this._scheduleRender();
  }
  layoutGlyphMarginWidget(e) {
    const t = e.position;
    if (this._glyphMarginWidgets.setWidgetPosition(e.widget, t)) {
      this._shouldRecomputeGlyphMarginLanes = true;
      this._scheduleRender();
    }
  }
  removeGlyphMarginWidget(e) {
    this._glyphMarginWidgets.removeWidget(e.widget);
    this._shouldRecomputeGlyphMarginLanes = true;
    this._scheduleRender();
  }
};
_3o = __decorate([__param(8, ln)], _3o);
swh = class SGb {
  static {
    this.INSTANCE = new SGb();
  }
  constructor() {
    this._coordinatedRenderings = [];
    this._animationFrameRunners = new Map();
  }
  scheduleCoordinatedRendering(e) {
    this._coordinatedRenderings.push(e);
    this._scheduleRender(e.window);
    return {
      dispose: () => {
        const t = this._coordinatedRenderings.indexOf(e);
        if (t !== -1 && (this._coordinatedRenderings.splice(t, 1), this._coordinatedRenderings.length === 0)) {
          for (const [i, r] of this._animationFrameRunners) {
            r.dispose();
          }
          this._animationFrameRunners.clear();
        }
      }
    };
  }
  _scheduleRender(e) {
    if (!this._animationFrameRunners.has(e)) {
      const t = () => {
        this._animationFrameRunners.delete(e);
        this._onRenderScheduled();
      };
      this._animationFrameRunners.set(e, I5e(e, t, 100));
    }
  }
  _onRenderScheduled() {
    const e = this._coordinatedRenderings.slice(0);
    this._coordinatedRenderings = [];
    for (const i of e) {
      jVe(() => i.prepareRenderText());
    }
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      t[i] = jVe(() => s.renderText());
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      const o = t[i];
      if (!o) {
        continue;
      }
      const [a, l] = o;
      jVe(() => s.prepareRender(a, l));
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      const o = t[i];
      if (!o) {
        continue;
      }
      const [a, l] = o;
      jVe(() => s.render(a, l));
    }
  }
};
owh = class extends at {
  constructor(n, e) {
    super();
    this._onChange = this._register(new Qe());
    this.onChange = this._onChange.event;
    this._hadFocus = undefined;
    this._hasDomElementFocus = false;
    this._domFocusTracker = this._register(CC(n));
    this._overflowWidgetsDomNodeHasFocus = false;
    this._register(this._domFocusTracker.onDidFocus(() => {
      this._hasDomElementFocus = true;
      this._update();
    }));
    this._register(this._domFocusTracker.onDidBlur(() => {
      this._hasDomElementFocus = false;
      this._update();
    }));
    if (e) {
      this._overflowWidgetsDomNode = this._register(CC(e));
      this._register(this._overflowWidgetsDomNode.onDidFocus(() => {
        this._overflowWidgetsDomNodeHasFocus = true;
        this._update();
      }));
      this._register(this._overflowWidgetsDomNode.onDidBlur(() => {
        this._overflowWidgetsDomNodeHasFocus = false;
        this._update();
      }));
    }
  }
  _update() {
    const n = this._hasDomElementFocus || this._overflowWidgetsDomNodeHasFocus;
    if (this._hadFocus !== n) {
      this._hadFocus = n;
      this._onChange.fire(undefined);
    }
  }
  hasFocus() {
    return this._hadFocus ?? false;
  }
  refreshState() {
    this._domFocusTracker.refreshState();
    this._overflowWidgetsDomNode?.refreshState?.();
  }
};
