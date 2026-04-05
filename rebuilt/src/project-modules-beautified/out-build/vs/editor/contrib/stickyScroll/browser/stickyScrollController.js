"use strict";

// Module: out-build/vs/editor/contrib/stickyScroll/browser/stickyScrollController.js
// Offset: 25480311 (bundle byte offset)
// Size: 12990 bytes
rt();
Cm();
XSA();
tkA();
Wt();
pl();
dr();
si();
Qh();
Api();
ts();
wet();
Jbg();
tl();
Po();
QE();
xve();
ri();
nwg();
h0();
jAe();
Vvg();
yn();
iu();
Kae = class extends at {
  static {
    Ijl = this;
  }
  static {
    this.ID = "store.contrib.stickyScrollController";
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this._editor = e;
    this._contextMenuService = t;
    this._languageFeaturesService = i;
    this._instaService = r;
    this._contextKeyService = a;
    this._sessionStore = new Ut();
    this._maxStickyLines = Number.MAX_SAFE_INTEGER;
    this._candidateDefinitionsLength = -1;
    this._focusedStickyElementIndex = -1;
    this._enabled = false;
    this._focused = false;
    this._positionRevealed = false;
    this._onMouseDown = false;
    this._endLineNumbers = [];
    this._mouseTarget = null;
    this._onDidChangeStickyScrollHeight = this._register(new Qe());
    this.onDidChangeStickyScrollHeight = this._onDidChangeStickyScrollHeight.event;
    this._stickyScrollWidget = new Xyg(this._editor);
    this._stickyLineCandidateProvider = new tua(this._editor, i, s);
    this._register(this._stickyScrollWidget);
    this._register(this._stickyLineCandidateProvider);
    this._widgetState = $gi.Empty;
    const l = this._stickyScrollWidget.getDomNode();
    this._register(this._editor.onDidChangeConfiguration(d => {
      this._readConfigurationChange(d);
    }));
    this._register(ei(l, ir.CONTEXT_MENU, async d => {
      this._onContextMenu(As(l), d);
    }));
    this._stickyScrollFocusedContextKey = Ci.stickyScrollFocused.bindTo(this._contextKeyService);
    this._stickyScrollVisibleContextKey = Ci.stickyScrollVisible.bindTo(this._contextKeyService);
    const u = this._register(CC(l));
    this._register(u.onDidBlur(d => {
      if (this._positionRevealed === false && l.clientHeight === 0) {
        this._focusedStickyElementIndex = -1;
        this.focus();
      } else {
        this._disposeFocusStickyScrollStore();
      }
    }));
    this._register(u.onDidFocus(d => {
      this.focus();
    }));
    this._registerMouseListeners();
    this._register(ei(l, ir.MOUSE_DOWN, d => {
      this._onMouseDown = true;
    }));
    this._register(this._stickyScrollWidget.onDidChangeStickyScrollHeight(d => {
      this._onDidChangeStickyScrollHeight.fire(d);
    }));
    this._onDidResize();
    this._readConfiguration();
  }
  get stickyScrollCandidateProvider() {
    return this._stickyLineCandidateProvider;
  }
  get stickyScrollWidgetState() {
    return this._widgetState;
  }
  get stickyScrollWidgetHeight() {
    return this._stickyScrollWidget.height;
  }
  static get(e) {
    return e.getContribution(Ijl.ID);
  }
  _disposeFocusStickyScrollStore() {
    this._stickyScrollFocusedContextKey.set(false);
    this._focusDisposableStore?.dispose();
    this._focused = false;
    this._positionRevealed = false;
    this._onMouseDown = false;
  }
  isFocused() {
    return this._focused;
  }
  focus() {
    if (this._onMouseDown) {
      this._onMouseDown = false;
      this._editor.focus();
      return;
    }
    if (this._stickyScrollFocusedContextKey.get() !== true) {
      this._focused = true;
      this._focusDisposableStore = new Ut();
      this._stickyScrollFocusedContextKey.set(true);
      this._focusedStickyElementIndex = this._stickyScrollWidget.lineNumbers.length - 1;
      this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex);
    }
  }
  focusNext() {
    if (this._focusedStickyElementIndex < this._stickyScrollWidget.lineNumberCount - 1) {
      this._focusNav(true);
    }
  }
  focusPrevious() {
    if (this._focusedStickyElementIndex > 0) {
      this._focusNav(false);
    }
  }
  selectEditor() {
    this._editor.focus();
  }
  _focusNav(e) {
    this._focusedStickyElementIndex = e ? this._focusedStickyElementIndex + 1 : this._focusedStickyElementIndex - 1;
    this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex);
  }
  goToFocused() {
    const e = this._stickyScrollWidget.lineNumbers;
    this._disposeFocusStickyScrollStore();
    this._revealPosition({
      lineNumber: e[this._focusedStickyElementIndex],
      column: 1
    });
  }
  _revealPosition(e) {
    this._reveaInEditor(e, () => this._editor.revealPosition(e));
  }
  _revealLineInCenterIfOutsideViewport(e) {
    this._reveaInEditor(e, () => this._editor.revealLineInCenterIfOutsideViewport(e.lineNumber, 0));
  }
  _reveaInEditor(e, t) {
    if (this._focused) {
      this._disposeFocusStickyScrollStore();
    }
    this._positionRevealed = true;
    t();
    this._editor.setSelection(Zt.fromPositions(e));
    this._editor.focus();
  }
  _registerMouseListeners() {
    const e = this._register(new Ut());
    const t = this._register(new Cun(this._editor, {
      extractLineNumberFromMouseEvent: l => {
        const u = this._stickyScrollWidget.getEditorPositionFromNode(l.target.element);
        if (u) {
          return u.lineNumber;
        } else {
          return 0;
        }
      }
    }));
    const i = l => {
      if (!this._editor.hasModel() || l.target.type !== 12 || l.target.detail !== this._stickyScrollWidget.getId()) {
        return null;
      }
      const u = l.target.element;
      if (!u || u.innerText !== u.innerHTML) {
        return null;
      }
      const d = this._stickyScrollWidget.getEditorPositionFromNode(u);
      if (d) {
        return {
          range: new Zt(d.lineNumber, d.column, d.lineNumber, d.column + u.innerText.length),
          textElement: u
        };
      } else {
        return null;
      }
    };
    const r = this._stickyScrollWidget.getDomNode();
    this._register(_f(r, ir.CLICK, l => {
      if (l.ctrlKey || l.altKey || l.metaKey || !l.leftButton) {
        return;
      }
      if (l.shiftKey) {
        const p = this._stickyScrollWidget.getLineIndexFromChildDomNode(l.target);
        if (p === null) {
          return;
        }
        const g = new ar(this._endLineNumbers[p], 1);
        this._revealLineInCenterIfOutsideViewport(g);
        return;
      }
      if (this._stickyScrollWidget.isInFoldingIconDomNode(l.target)) {
        const p = this._stickyScrollWidget.getLineNumberFromChildDomNode(l.target);
        this._toggleFoldingRegionForLine(p);
        return;
      }
      if (!this._stickyScrollWidget.isInStickyLine(l.target)) {
        return;
      }
      let m = this._stickyScrollWidget.getEditorPositionFromNode(l.target);
      if (!m) {
        const p = this._stickyScrollWidget.getLineNumberFromChildDomNode(l.target);
        if (p === null) {
          return;
        }
        m = new ar(p, 1);
      }
      this._revealPosition(m);
    }));
    const s = l => {
      this._mouseTarget = l.target;
      this._onMouseMoveOrKeyDown(l);
    };
    const o = l => {
      this._onMouseMoveOrKeyDown(l);
    };
    const a = l => {
      if (this._showEndForLine !== undefined) {
        this._showEndForLine = undefined;
        this._renderStickyScroll();
      }
    };
    bi.addEventListener(ir.MOUSE_MOVE, s);
    bi.addEventListener(ir.KEY_DOWN, o);
    bi.addEventListener(ir.KEY_UP, a);
    this._register($i(() => {
      bi.removeEventListener(ir.MOUSE_MOVE, s);
      bi.removeEventListener(ir.KEY_DOWN, o);
      bi.removeEventListener(ir.KEY_UP, a);
    }));
    this._register(t.onMouseMoveOrRelevantKeyDown(([l, u]) => {
      const d = i(l);
      if (!d || !l.hasTriggerModifier || !this._editor.hasModel()) {
        e.clear();
        return;
      }
      const {
        range: m,
        textElement: p
      } = d;
      if (!m.equalsRange(this._stickyRangeProjectedOnEditor)) {
        this._stickyRangeProjectedOnEditor = m;
        e.clear();
      } else if (p.style.textDecoration === "underline") {
        return;
      }
      const g = new Wc();
      e.add($i(() => g.dispose(true)));
      let f;
      F1e(this._languageFeaturesService.definitionProvider, this._editor.getModel(), new ar(m.startLineNumber, m.startColumn + 1), false, g.token).then(A => {
        if (!g.token.isCancellationRequested) {
          if (A.length !== 0) {
            this._candidateDefinitionsLength = A.length;
            const w = p;
            if (f !== w) {
              e.clear();
              f = w;
              f.style.textDecoration = "underline";
              e.add($i(() => {
                f.style.textDecoration = "none";
              }));
            } else if (!f) {
              f = w;
              f.style.textDecoration = "underline";
              e.add($i(() => {
                f.style.textDecoration = "none";
              }));
            }
          } else {
            e.clear();
          }
        }
      });
    }));
    this._register(t.onCancel(() => {
      e.clear();
    }));
    this._register(t.onExecute(async l => {
      if (l.target.type !== 12 || l.target.detail !== this._stickyScrollWidget.getId()) {
        return;
      }
      const u = this._stickyScrollWidget.getEditorPositionFromNode(l.target.element);
      if (u) {
        if (!!this._editor.hasModel() && !!this._stickyRangeProjectedOnEditor) {
          if (this._candidateDefinitionsLength > 1) {
            if (this._focused) {
              this._disposeFocusStickyScrollStore();
            }
            this._revealPosition({
              lineNumber: u.lineNumber,
              column: 1
            });
          }
          this._instaService.invokeFunction(Hbg, l, this._editor, {
            uri: this._editor.getModel().uri,
            range: this._stickyRangeProjectedOnEditor
          });
        }
      }
    }));
    this._register(_f(r, ir.MOUSE_DOWN, l => {
      if (this._clickHandler) {
        const u = this._stickyScrollWidget.getLineNumberFromChildDomNode(l.target);
        if (u !== null) {
          this._clickHandler(l, u);
          l.preventDefault();
          l.stopPropagation();
        }
        return;
      }
    }));
  }
  _onContextMenu(e, t) {
    const i = new yy(e, t);
    this._contextMenuService.showContextMenu({
      menuId: st.StickyScrollContext,
      getAnchor: () => i
    });
  }
  _onMouseMoveOrKeyDown(e) {
    if (!e.shiftKey || !this._mouseTarget || !wf(this._mouseTarget)) {
      return;
    }
    const t = this._stickyScrollWidget.getLineIndexFromChildDomNode(this._mouseTarget);
    if (t !== null && this._showEndForLine !== t) {
      this._showEndForLine = t;
      this._renderStickyScroll();
    }
  }
  _toggleFoldingRegionForLine(e) {
    if (!this._foldingModel || e === null) {
      return;
    }
    const t = this._stickyScrollWidget.getRenderedStickyLine(e);
    const i = t?.foldingIcon;
    if (!i) {
      return;
    }
    SQl(this._foldingModel, 1, [e]);
    i.isCollapsed = !i.isCollapsed;
    const r = (i.isCollapsed ? this._editor.getTopForLineNumber(i.foldingEndLine) : this._editor.getTopForLineNumber(i.foldingStartLine)) - this._editor.getOption(68) * t.index + 1;
    this._editor.setScrollTop(r);
    this._renderStickyScroll(e);
  }
  _readConfiguration() {
    const e = this._editor.getOption(120);
    if (e.enabled === false) {
      this._editor.removeOverlayWidget(this._stickyScrollWidget);
      this._resetState();
      this._sessionStore.clear();
      this._enabled = false;
      return;
    } else if (e.enabled && !this._enabled) {
      this._editor.addOverlayWidget(this._stickyScrollWidget);
      this._sessionStore.add(this._editor.onDidScrollChange(i => {
        if (i.scrollTopChanged) {
          this._showEndForLine = undefined;
          this._renderStickyScroll();
        }
      }));
      this._sessionStore.add(this._editor.onDidLayoutChange(() => this._onDidResize()));
      this._sessionStore.add(this._editor.onDidChangeModelTokens(i => this._onTokensChange(i)));
      this._sessionStore.add(this._stickyLineCandidateProvider.onDidChangeStickyScroll(() => {
        this._showEndForLine = undefined;
        this._renderStickyScroll();
      }));
      this._enabled = true;
    }
    if (this._editor.getOption(69).renderType === 2) {
      this._sessionStore.add(this._editor.onDidChangeCursorPosition(() => {
        this._showEndForLine = undefined;
        this._renderStickyScroll(0);
      }));
    }
  }
  _readConfigurationChange(e) {
    if (e.hasChanged(120) || e.hasChanged(74) || e.hasChanged(68) || e.hasChanged(115) || e.hasChanged(69)) {
      this._readConfiguration();
    }
    if (e.hasChanged(69) || e.hasChanged(45) || e.hasChanged(115)) {
      this._renderStickyScroll(0);
    }
  }
  _needsUpdate(e) {
    const t = this._stickyScrollWidget.getCurrentLines();
    for (const i of t) {
      for (const r of e.ranges) {
        if (i >= r.fromLineNumber && i <= r.toLineNumber) {
          return true;
        }
      }
    }
    return false;
  }
  _onTokensChange(e) {
    if (this._needsUpdate(e)) {
      this._renderStickyScroll(0);
    }
  }
  _onDidResize() {
    const t = this._editor.getLayoutInfo().height / this._editor.getOption(68);
    this._maxStickyLines = Math.round(t * 0.25);
    this._renderStickyScroll(0);
  }
  async _renderStickyScroll(e) {
    const t = this._editor.getModel();
    if (!t || t.isTooLargeForTokenization()) {
      this._resetState();
      return;
    }
    const i = this._updateAndGetMinRebuildFromLine(e);
    const r = this._stickyLineCandidateProvider.getVersionId();
    if (r === undefined || r === t.getVersionId()) {
      if (!this._focused) {
        await this._updateState(i);
      } else if (this._focusedStickyElementIndex === -1) {
        await this._updateState(i);
        this._focusedStickyElementIndex = this._stickyScrollWidget.lineNumberCount - 1;
        if (this._focusedStickyElementIndex !== -1) {
          this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex);
        }
      } else {
        const o = this._stickyScrollWidget.lineNumbers[this._focusedStickyElementIndex];
        await this._updateState(i);
        if (this._stickyScrollWidget.lineNumberCount === 0) {
          this._focusedStickyElementIndex = -1;
        } else {
          if (!this._stickyScrollWidget.lineNumbers.includes(o)) {
            this._focusedStickyElementIndex = this._stickyScrollWidget.lineNumberCount - 1;
          }
          this._stickyScrollWidget.focusLineWithIndex(this._focusedStickyElementIndex);
        }
      }
    }
  }
  _updateAndGetMinRebuildFromLine(e) {
    if (e !== undefined) {
      const t = this._minRebuildFromLine !== undefined ? this._minRebuildFromLine : Infinity;
      this._minRebuildFromLine = Math.min(e, t);
    }
    return this._minRebuildFromLine;
  }
  async _updateState(e) {
    this._minRebuildFromLine = undefined;
    this._foldingModel = (await AJ.get(this._editor)?.getFoldingModel()) ?? undefined;
    this._widgetState = this.findScrollWidgetState();
    const t = this._widgetState.startLineNumbers.length > 0;
    this._stickyScrollVisibleContextKey.set(t);
    this._stickyScrollWidget.setState(this._widgetState, this._foldingModel, e);
  }
  async _resetState() {
    this._minRebuildFromLine = undefined;
    this._foldingModel = undefined;
    this._widgetState = $gi.Empty;
    this._stickyScrollVisibleContextKey.set(false);
    this._stickyScrollWidget.setState(undefined, undefined);
  }
  findScrollWidgetState() {
    if (!this._editor.hasModel()) {
      return $gi.Empty;
    }
    const e = this._editor.getModel();
    const t = Math.min(this._maxStickyLines, this._editor.getOption(120).maxLineCount);
    const i = this._editor.getScrollTop();
    let r = 0;
    const s = [];
    const o = [];
    const a = this._editor.getVisibleRanges();
    if (a.length !== 0) {
      const l = new Cdn(a[0].startLineNumber, a[a.length - 1].endLineNumber);
      const u = this._stickyLineCandidateProvider.getCandidateStickyLinesIntersecting(l);
      for (const d of u) {
        const m = d.startLineNumber;
        const p = d.endLineNumber;
        if (e.isValidRange({
          startLineNumber: m,
          endLineNumber: p,
          startColumn: 1,
          endColumn: 1
        }) && p - m > 0) {
          const f = d.top;
          const A = f + d.height;
          const w = this._editor.getTopForLineNumber(m) - i;
          const C = this._editor.getBottomForLineNumber(p) - i;
          if (f > w && f <= C) {
            s.push(m);
            o.push(p + 1);
            if (A > C) {
              r = C - A;
            }
          }
          if (s.length === t) {
            break;
          }
        }
      }
    }
    this._endLineNumbers = o;
    return new $gi(s, o, r, this._showEndForLine);
  }
  hijackOnClickItem(e) {
    this._clickHandler = e;
    return {
      dispose: () => {
        this._clickHandler = undefined;
      }
    };
  }
  dispose() {
    super.dispose();
    this._sessionStore.dispose();
  }
};
Kae = Ijl = __decorate([__param(1, kc), __param(2, $u), __param(3, ln), __param(4, JS), __param(5, ene), __param(6, wi)], Kae);
