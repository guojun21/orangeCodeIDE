"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/suggestWidget.js
// Offset: 25398098 (bundle byte offset)
// Size: 18338 bytes
ri();
u5c();
SW();
vr();
_s();
yn();
rt();
sE();
oa();
qSA();
yq();
Iyg();
i$o();
Ht();
si();
Wt();
kr();
Nl();
qI();
Io();
eUn();
pme();
Byg();
GSA();
$b();
Ew();
Tg();
Rn("editorSuggestWidget.background", fF, _(1613, null));
Rn("editorSuggestWidget.border", cft, _(1614, null));
Nyg = Rn("editorSuggestWidget.foreground", jE, _(1615, null));
Rn("editorSuggestWidget.selectedForeground", uOt, _(1616, null));
Rn("editorSuggestWidget.selectedIconForeground", U4o, _(1617, null));
gjl = Rn("editorSuggestWidget.selectedBackground", dOt, _(1618, null));
Rn("editorSuggestWidget.highlightForeground", fft, _(1619, null));
Rn("editorSuggestWidget.focusHighlightForeground", hdh, _(1620, null));
Rn("editorSuggestWidgetStatus.foreground", rl(Nyg, 0.5), _(1621, null));
(function (n) {
  n[n.Hidden = 0] = "Hidden";
  n[n.Loading = 1] = "Loading";
  n[n.Empty = 2] = "Empty";
  n[n.Open = 3] = "Open";
  n[n.Frozen = 4] = "Frozen";
  n[n.Details = 5] = "Details";
  n[n.onDetailsKeyDown = 6] = "onDetailsKeyDown";
})(Myg ||= {});
Fyg = class {
  constructor(n, e) {
    this._service = n;
    this._key = `suggestWidget.size/${e.getEditorType()}/${e instanceof q3}`;
  }
  restore() {
    const n = this._service.get(this._key, 0) ?? "";
    try {
      const e = JSON.parse(n);
      if (Lu.is(e)) {
        return Lu.lift(e);
      }
    } catch {}
  }
  store(n) {
    this._service.store(this._key, JSON.stringify(n), 0, 1);
  }
  reset() {
    this._service.remove(this._key, 0);
  }
};
Wla = class {
  static {
    ydn = this;
  }
  static {
    this.LOADING_MESSAGE = _(1622, null);
  }
  static {
    this.NO_SUGGESTIONS_MESSAGE = _(1623, null);
  }
  get isShown() {
    return this._ctxSuggestWidgetVisible.get();
  }
  constructor(e, t, i, r, s) {
    this.editor = e;
    this._storageService = t;
    this._state = 0;
    this._isAuto = false;
    this._pendingLayout = new uo();
    this._pendingShowDetails = new uo();
    this._ignoreFocusEvents = false;
    this._forceRenderingAbove = false;
    this._explainMode = false;
    this._showTimeout = new O$();
    this._disposables = new Ut();
    this._onDidSelect = new zj();
    this._onDidFocus = new zj();
    this._onDidHide = new Qe();
    this._onDidShow = new Qe();
    this.onDidSelect = this._onDidSelect.event;
    this.onDidFocus = this._onDidFocus.event;
    this.onDidHide = this._onDidHide.event;
    this.onDidShow = this._onDidShow.event;
    this._onDetailsKeydown = new Qe();
    this.onDetailsKeyDown = this._onDetailsKeydown.event;
    this.element = new G9t();
    this.element.domNode.classList.add("editor-widget", "suggest-widget");
    this._contentWidget = new Oyg(this, e);
    this._persistedSize = new Fyg(t, e);
    class o {
      constructor(g, f, A = false, w = false) {
        this.persistedSize = g;
        this.currentSize = f;
        this.persistHeight = A;
        this.persistWidth = w;
      }
    }
    let a;
    this._disposables.add(this.element.onDidWillResize(() => {
      this._contentWidget.lockPreference();
      a = new o(this._persistedSize.restore(), this.element.size);
    }));
    this._disposables.add(this.element.onDidResize(p => {
      this._resize(p.dimension.width, p.dimension.height);
      if (a) {
        a.persistHeight = a.persistHeight || !!p.north || !!p.south;
        a.persistWidth = a.persistWidth || !!p.east || !!p.west;
      }
      if (p.done) {
        if (a) {
          const {
            itemHeight: g,
            defaultSize: f
          } = this.getLayoutInfo();
          const A = Math.round(g / 2);
          let {
            width: w,
            height: C
          } = this.element.size;
          if (!a.persistHeight || Math.abs(a.currentSize.height - C) <= A) {
            C = a.persistedSize?.height ?? f.height;
          }
          if (!a.persistWidth || Math.abs(a.currentSize.width - w) <= A) {
            w = a.persistedSize?.width ?? f.width;
          }
          this._persistedSize.store(new Lu(w, C));
        }
        this._contentWidget.unlockPreference();
        a = undefined;
      }
    }));
    this._messageElement = Rt(this.element.domNode, Ct(".message"));
    this._listElement = Rt(this.element.domNode, Ct(".tree"));
    const l = this._disposables.add(s.createInstance(Jla, this.editor));
    l.onDidClose(() => this.toggleDetails(), this, this._disposables);
    this._details = new Dyg(l, this.editor);
    const u = () => this.element.domNode.classList.toggle("no-icons", !this.editor.getOption(123).showIcons);
    u();
    const d = s.createInstance(Gla, this.editor);
    this._disposables.add(d);
    this._disposables.add(d.onDidToggleDetails(() => this.toggleDetails()));
    this._list = new JR("SuggestWidget", this._listElement, {
      getHeight: p => this.getLayoutInfo().itemHeight,
      getTemplateId: p => "suggestion"
    }, [d], {
      alwaysConsumeMouseWheel: true,
      useShadows: false,
      mouseSupport: false,
      multipleSelectionSupport: false,
      accessibilityProvider: {
        getRole: () => "listitem",
        getWidgetAriaLabel: () => _(1624, null),
        getWidgetRole: () => "listbox",
        getAriaLabel: p => {
          let g = p.textLabel;
          const f = Eft.toLabel(p.completion.kind);
          if (typeof p.completion.label != "string") {
            const {
              detail: x,
              description: I
            } = p.completion.label;
            if (x && I) {
              g = _(1625, null, g, x, I, f);
            } else if (x) {
              g = _(1626, null, g, x, f);
            } else if (I) {
              g = _(1627, null, g, I, f);
            }
          } else {
            g = _(1628, null, g, f);
          }
          if (!p.isResolved || !this._isDetailsVisible()) {
            return g;
          }
          const {
            documentation: A,
            detail: w
          } = p.completion;
          const C = B4("{0}{1}", w || "", A ? typeof A == "string" ? A : A.value : "");
          return _(1629, null, g, C);
        }
      }
    });
    this._list.style(zSe({
      listInactiveFocusBackground: gjl,
      listInactiveFocusOutline: x_
    }));
    this._status = s.createInstance(bdn, this.element.domNode, ZUe);
    const m = () => this.element.domNode.classList.toggle("with-status-bar", this.editor.getOption(123).showStatusBar);
    m();
    this._disposables.add(r.onDidColorThemeChange(p => this._onThemeChange(p)));
    this._onThemeChange(r.getColorTheme());
    this._disposables.add(this._list.onMouseDown(p => this._onListMouseDownOrTap(p)));
    this._disposables.add(this._list.onTap(p => this._onListMouseDownOrTap(p)));
    this._disposables.add(this._list.onDidChangeSelection(p => this._onListSelection(p)));
    this._disposables.add(this._list.onDidChangeFocus(p => this._onListFocus(p)));
    this._disposables.add(this.editor.onDidChangeCursorSelection(() => this._onCursorSelectionChanged()));
    this._disposables.add(this.editor.onDidChangeConfiguration(p => {
      if (p.hasChanged(123)) {
        m();
        u();
      }
      if (this._completionModel && (p.hasChanged(52) || p.hasChanged(124) || p.hasChanged(125))) {
        this._list.splice(0, this._list.length, this._completionModel.items);
      }
    }));
    this._ctxSuggestWidgetVisible = Xf.Visible.bindTo(i);
    this._ctxSuggestWidgetDetailsVisible = Xf.DetailsVisible.bindTo(i);
    this._ctxSuggestWidgetMultipleSuggestions = Xf.MultipleSuggestions.bindTo(i);
    this._ctxSuggestWidgetHasFocusedSuggestion = Xf.HasFocusedSuggestion.bindTo(i);
    this._disposables.add(_f(this._details.widget.domNode, "keydown", p => {
      this._onDetailsKeydown.fire(p);
    }));
    this._disposables.add(this.editor.onMouseDown(p => this._onEditorMouseDown(p)));
  }
  dispose() {
    this._details.widget.dispose();
    this._details.dispose();
    this._list.dispose();
    this._status.dispose();
    this._disposables.dispose();
    this._loadingTimeout?.dispose();
    this._pendingLayout.dispose();
    this._pendingShowDetails.dispose();
    this._showTimeout.dispose();
    this._contentWidget.dispose();
    this.element.dispose();
  }
  _onEditorMouseDown(e) {
    if (this._details.widget.domNode.contains(e.target.element)) {
      this._details.widget.domNode.focus();
    } else if (this.element.domNode.contains(e.target.element)) {
      this.editor.focus();
    }
  }
  _onCursorSelectionChanged() {
    if (this._state !== 0) {
      this._contentWidget.layout();
    }
  }
  _onListMouseDownOrTap(e) {
    if (typeof e.element !== "undefined" && typeof e.index !== "undefined") {
      e.browserEvent.preventDefault();
      e.browserEvent.stopPropagation();
      this._select(e.element, e.index);
    }
  }
  _onListSelection(e) {
    if (e.elements.length) {
      this._select(e.elements[0], e.indexes[0]);
    }
  }
  _select(e, t) {
    const i = this._completionModel;
    if (i) {
      this._onDidSelect.fire({
        item: e,
        index: t,
        model: i
      });
      this.editor.focus();
    }
  }
  _onThemeChange(e) {
    this._details.widget.borderWidth = Poe(e.type) ? 2 : 1;
  }
  _onListFocus(e) {
    if (this._ignoreFocusEvents) {
      return;
    }
    if (this._state === 5) {
      this._setState(3);
    }
    if (!e.elements.length) {
      if (this._currentSuggestionDetails) {
        this._currentSuggestionDetails.cancel();
        this._currentSuggestionDetails = undefined;
        this._focusedItem = undefined;
      }
      this.editor.setAriaOptions({
        activeDescendant: undefined
      });
      this._ctxSuggestWidgetHasFocusedSuggestion.set(false);
      return;
    }
    if (!this._completionModel) {
      return;
    }
    this._ctxSuggestWidgetHasFocusedSuggestion.set(true);
    const t = e.elements[0];
    const i = e.indexes[0];
    if (t !== this._focusedItem) {
      this._currentSuggestionDetails?.cancel();
      this._currentSuggestionDetails = undefined;
      this._focusedItem = t;
      this._list.reveal(i);
      this._currentSuggestionDetails = dw(async r => {
        const s = nC(() => {
          if (this._isDetailsVisible()) {
            this._showDetails(true, false);
          }
        }, 250);
        const o = r.onCancellationRequested(() => s.dispose());
        try {
          return await t.resolve(r);
        } finally {
          s.dispose();
          o.dispose();
        }
      });
      this._currentSuggestionDetails.then(() => {
        if (!(i >= this._list.length) && t === this._list.element(i)) {
          this._ignoreFocusEvents = true;
          this._list.splice(i, 1, [t]);
          this._list.setFocus([i]);
          this._ignoreFocusEvents = false;
          if (this._isDetailsVisible()) {
            this._showDetails(false, false);
          } else {
            this.element.domNode.classList.remove("docs-side");
          }
          this.editor.setAriaOptions({
            activeDescendant: this._list.getElementID(i)
          });
        }
      }).catch(Gc);
    }
    this._onDidFocus.fire({
      item: t,
      index: i,
      model: this._completionModel
    });
  }
  _setState(e) {
    if (this._state !== e) {
      this._state = e;
      this.element.domNode.classList.toggle("frozen", e === 4);
      this.element.domNode.classList.remove("message");
      switch (e) {
        case 0:
          Ng(this._messageElement, this._listElement, this._status.element);
          this._details.hide(true);
          this._status.hide();
          this._contentWidget.hide();
          this._ctxSuggestWidgetVisible.reset();
          this._ctxSuggestWidgetMultipleSuggestions.reset();
          this._ctxSuggestWidgetHasFocusedSuggestion.reset();
          this._showTimeout.cancel();
          this.element.domNode.classList.remove("visible");
          this._list.splice(0, this._list.length);
          this._focusedItem = undefined;
          this._cappedHeight = undefined;
          this._explainMode = false;
          break;
        case 1:
          this.element.domNode.classList.add("message");
          this._messageElement.textContent = ydn.LOADING_MESSAGE;
          Ng(this._listElement, this._status.element);
          gv(this._messageElement);
          this._details.hide();
          this._show();
          this._focusedItem = undefined;
          Ex(ydn.LOADING_MESSAGE);
          break;
        case 2:
          this.element.domNode.classList.add("message");
          this._messageElement.textContent = ydn.NO_SUGGESTIONS_MESSAGE;
          Ng(this._listElement, this._status.element);
          gv(this._messageElement);
          this._details.hide();
          this._show();
          this._focusedItem = undefined;
          Ex(ydn.NO_SUGGESTIONS_MESSAGE);
          break;
        case 3:
          Ng(this._messageElement);
          gv(this._listElement, this._status.element);
          this._show();
          break;
        case 4:
          Ng(this._messageElement);
          gv(this._listElement, this._status.element);
          this._show();
          break;
        case 5:
          Ng(this._messageElement);
          gv(this._listElement, this._status.element);
          this._details.show();
          this._show();
          this._details.widget.focus();
          break;
      }
    }
  }
  _show() {
    this._status.show();
    this._contentWidget.show();
    this._layout(this._persistedSize.restore());
    this._ctxSuggestWidgetVisible.set(true);
    this._showTimeout.cancelAndSet(() => {
      this.element.domNode.classList.add("visible");
      this._onDidShow.fire(this);
    }, 100);
  }
  showTriggered(e, t) {
    if (this._state === 0) {
      this._contentWidget.setPosition(this.editor.getPosition());
      this._isAuto = !!e;
      if (!this._isAuto) {
        this._loadingTimeout = nC(() => this._setState(1), t);
      }
    }
  }
  showSuggestions(e, t, i, r, s) {
    this._contentWidget.setPosition(this.editor.getPosition());
    this._loadingTimeout?.dispose();
    this._currentSuggestionDetails?.cancel();
    this._currentSuggestionDetails = undefined;
    if (this._completionModel !== e) {
      this._completionModel = e;
    }
    if (i && this._state !== 2 && this._state !== 0) {
      this._setState(4);
      return;
    }
    const o = this._completionModel.items.length;
    const a = o === 0;
    this._ctxSuggestWidgetMultipleSuggestions.set(o > 1);
    if (a) {
      this._setState(r ? 0 : 2);
      this._completionModel = undefined;
      return;
    }
    this._focusedItem = undefined;
    this._onDidFocus.pause();
    this._onDidSelect.pause();
    try {
      this._list.splice(0, this._list.length, this._completionModel.items);
      this._setState(i ? 4 : 3);
      this._list.reveal(t, 0, t === 0 ? 0 : this.getLayoutInfo().itemHeight * 0.33);
      this._list.setFocus(s ? [] : [t]);
    } finally {
      this._onDidFocus.resume();
      this._onDidSelect.resume();
    }
    this._pendingLayout.value = I5e(As(this.element.domNode), () => {
      this._pendingLayout.clear();
      this._layout(this.element.size);
      this._details.widget.domNode.classList.remove("focused");
    });
  }
  focusSelected() {
    if (this._list.length > 0) {
      this._list.setFocus([0]);
    }
  }
  selectNextPage() {
    switch (this._state) {
      case 0:
        return false;
      case 5:
        this._details.widget.pageDown();
        return true;
      case 1:
        return !this._isAuto;
      default:
        this._list.focusNextPage();
        return true;
    }
  }
  selectNext() {
    switch (this._state) {
      case 0:
        return false;
      case 1:
        return !this._isAuto;
      default:
        this._list.focusNext(1, true);
        return true;
    }
  }
  selectLast() {
    switch (this._state) {
      case 0:
        return false;
      case 5:
        this._details.widget.scrollBottom();
        return true;
      case 1:
        return !this._isAuto;
      default:
        this._list.focusLast();
        return true;
    }
  }
  selectPreviousPage() {
    switch (this._state) {
      case 0:
        return false;
      case 5:
        this._details.widget.pageUp();
        return true;
      case 1:
        return !this._isAuto;
      default:
        this._list.focusPreviousPage();
        return true;
    }
  }
  selectPrevious() {
    switch (this._state) {
      case 0:
        return false;
      case 1:
        return !this._isAuto;
      default:
        this._list.focusPrevious(1, true);
        return false;
    }
  }
  selectFirst() {
    switch (this._state) {
      case 0:
        return false;
      case 5:
        this._details.widget.scrollTop();
        return true;
      case 1:
        return !this._isAuto;
      default:
        this._list.focusFirst();
        return true;
    }
  }
  getFocusedItem() {
    if (this._state !== 0 && this._state !== 2 && this._state !== 1 && this._completionModel && this._list.getFocus().length > 0) {
      return {
        item: this._list.getFocusedElements()[0],
        index: this._list.getFocus()[0],
        model: this._completionModel
      };
    }
  }
  getAllSuggestions() {
    if (this._state !== 0 && this._state !== 2 && this._state !== 1 && this._completionModel) {
      return this._completionModel.items;
    }
  }
  toggleDetailsFocus() {
    if (this._state === 5) {
      this._list.setFocus(this._list.getFocus());
      this._setState(3);
    } else if (this._state === 3) {
      this._setState(5);
      if (this._isDetailsVisible()) {
        this._details.widget.focus();
      } else {
        this.toggleDetails(true);
      }
    }
  }
  toggleDetails(e = false) {
    if (this._isDetailsVisible()) {
      this._pendingShowDetails.clear();
      this._ctxSuggestWidgetDetailsVisible.set(false);
      this._setDetailsVisible(false);
      this._details.hide();
      this.element.domNode.classList.remove("shows-details");
    } else if ((mjl(this._list.getFocusedElements()[0]) || this._explainMode) && (this._state === 3 || this._state === 5 || this._state === 4)) {
      this._ctxSuggestWidgetDetailsVisible.set(true);
      this._setDetailsVisible(true);
      this._showDetails(false, e);
    }
  }
  _showDetails(e, t) {
    this._pendingShowDetails.value = I5e(As(this.element.domNode), () => {
      this._pendingShowDetails.clear();
      this._details.show();
      let i = false;
      if (e) {
        this._details.widget.renderLoading();
      } else {
        this._details.widget.renderItem(this._list.getFocusedElements()[0], this._explainMode);
      }
      if (this._details.widget.isEmpty) {
        this._details.hide();
      } else {
        this._positionDetails();
        this.element.domNode.classList.add("shows-details");
        if (t) {
          this._details.widget.focus();
          i = true;
        }
      }
      if (!i) {
        this.editor.focus();
      }
    });
  }
  toggleExplainMode() {
    if (this._list.getFocusedElements()[0]) {
      this._explainMode = !this._explainMode;
      if (this._isDetailsVisible()) {
        this._showDetails(false, false);
      } else {
        this.toggleDetails();
      }
    }
  }
  resetPersistedSize() {
    this._persistedSize.reset();
  }
  hideWidget() {
    this._pendingLayout.clear();
    this._pendingShowDetails.clear();
    this._loadingTimeout?.dispose();
    this._setState(0);
    this._onDidHide.fire(this);
    this.element.clearSashHoverState();
    const e = this._persistedSize.restore();
    const t = Math.ceil(this.getLayoutInfo().itemHeight * 4.3);
    if (e && e.height < t) {
      this._persistedSize.store(e.with(undefined, t));
    }
  }
  isFrozen() {
    return this._state === 4;
  }
  _afterRender(e) {
    if (e === null) {
      if (this._isDetailsVisible()) {
        this._details.hide();
      }
      return;
    }
    if (this._state !== 2 && this._state !== 1) {
      if (this._isDetailsVisible() && !this._details.widget.isEmpty) {
        this._details.show();
      }
      this._positionDetails();
    }
  }
  _layout(e) {
    if (!this.editor.hasModel() || !this.editor.getDomNode()) {
      return;
    }
    const t = DY(this.element.domNode.ownerDocument.body);
    const i = this.getLayoutInfo();
    e ||= i.defaultSize;
    let r = e.height;
    let s = e.width;
    this._status.element.style.height = `${i.itemHeight}px`;
    if (this._state === 2 || this._state === 1) {
      r = i.itemHeight + i.borderHeight;
      s = i.defaultSize.width / 2;
      this.element.enableSashes(false, false, false, false);
      this.element.minSize = this.element.maxSize = new Lu(s, r);
      this._contentWidget.setPreference(2);
    } else {
      const o = t.width - i.borderHeight - i.horizontalPadding * 2;
      if (s > o) {
        s = o;
      }
      const a = this._completionModel ? this._completionModel.stats.pLabelLen * i.typicalHalfwidthCharacterWidth : s;
      const l = i.statusBarHeight + this._list.contentHeight + i.borderHeight;
      const u = i.itemHeight + i.statusBarHeight;
      const d = qS(this.editor.getDomNode());
      const m = this.editor.getScrolledVisiblePosition(this.editor.getPosition());
      const p = d.top + m.top + m.height;
      const g = Math.min(t.height - p - i.verticalPadding, l);
      const f = d.top + m.top - i.verticalPadding;
      const A = Math.min(f, l);
      let w = Math.min(Math.max(A, g) + i.borderHeight, l);
      if (r === this._cappedHeight?.capped) {
        r = this._cappedHeight.wanted;
      }
      if (r < u) {
        r = u;
      }
      if (r > w) {
        r = w;
      }
      if (r > g || this._forceRenderingAbove && f > 150) {
        this._contentWidget.setPreference(1);
        this.element.enableSashes(true, true, false, false);
        w = A;
      } else {
        this._contentWidget.setPreference(2);
        this.element.enableSashes(false, true, true, false);
        w = g;
      }
      this.element.preferredSize = new Lu(a, i.defaultSize.height);
      this.element.maxSize = new Lu(o, w);
      this.element.minSize = new Lu(220, u);
      this._cappedHeight = r === l ? {
        wanted: this._cappedHeight?.wanted ?? e.height,
        capped: r
      } : undefined;
    }
    this._resize(s, r);
  }
  _resize(e, t) {
    const {
      width: i,
      height: r
    } = this.element.maxSize;
    e = Math.min(i, e);
    t = Math.min(r, t);
    const {
      statusBarHeight: s
    } = this.getLayoutInfo();
    this._list.layout(t - s, e);
    this._listElement.style.height = `${t - s}px`;
    this.element.layout(t, e);
    this._contentWidget.layout();
    this._positionDetails();
  }
  _positionDetails() {
    if (this._isDetailsVisible()) {
      this._details.placeAtAnchor(this.element.domNode, this._contentWidget.getPosition()?.preference[0] === 2);
    }
  }
  getLayoutInfo() {
    const e = this.editor.getOption(52);
    const t = zA(this.editor.getOption(125) || e.lineHeight, 8, 1000);
    const i = !this.editor.getOption(123).showStatusBar || this._state === 2 || this._state === 1 ? 0 : t;
    const r = this._details.widget.borderWidth;
    const s = r * 2;
    return {
      itemHeight: t,
      statusBarHeight: i,
      borderWidth: r,
      borderHeight: s,
      typicalHalfwidthCharacterWidth: e.typicalHalfwidthCharacterWidth,
      verticalPadding: 22,
      horizontalPadding: 14,
      defaultSize: new Lu(430, i + t * 12)
    };
  }
  _isDetailsVisible() {
    return this._storageService.getBoolean("expandSuggestionDocs", 0, false);
  }
  _setDetailsVisible(e) {
    this._storageService.store("expandSuggestionDocs", e, 0, 0);
  }
  forceRenderingAbove() {
    if (!this._forceRenderingAbove) {
      this._forceRenderingAbove = true;
      this._layout(this._persistedSize.restore());
    }
  }
  stopForceRenderingAbove() {
    this._forceRenderingAbove = false;
  }
};
Wla = ydn = __decorate([__param(1, Hi), __param(2, wi), __param(3, bo), __param(4, ln)], Wla);
Oyg = class {
  constructor(n, e) {
    this._widget = n;
    this._editor = e;
    this.allowEditorOverflow = true;
    this.suppressMouseDown = false;
    this._preferenceLocked = false;
    this._added = false;
    this._hidden = false;
  }
  dispose() {
    if (this._added) {
      this._added = false;
      this._editor.removeContentWidget(this);
    }
  }
  getId() {
    return "editor.widget.suggestWidget";
  }
  getDomNode() {
    return this._widget.element.domNode;
  }
  show() {
    this._hidden = false;
    if (!this._added) {
      this._added = true;
      this._editor.addContentWidget(this);
    }
  }
  hide() {
    if (!this._hidden) {
      this._hidden = true;
      this.layout();
    }
  }
  layout() {
    this._editor.layoutContentWidget(this);
  }
  getPosition() {
    if (this._hidden || !this._position || !this._preference) {
      return null;
    } else {
      return {
        position: this._position,
        preference: [this._preference]
      };
    }
  }
  beforeRender() {
    const {
      height: n,
      width: e
    } = this._widget.element.size;
    const {
      borderWidth: t,
      horizontalPadding: i
    } = this._widget.getLayoutInfo();
    return new Lu(e + t * 2 + i, n + t * 2);
  }
  afterRender(n) {
    this._widget._afterRender(n);
  }
  setPreference(n) {
    if (!this._preferenceLocked) {
      this._preference = n;
    }
  }
  lockPreference() {
    this._preferenceLocked = true;
  }
  unlockPreference() {
    this._preferenceLocked = false;
  }
  setPosition(n) {
    this._position = n;
  }
};
