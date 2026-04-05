"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/contentHoverWidget.js
// Offset: 4228060 (bundle byte offset)
// Size: 10102 bytes
ri();
ka();
tAA();
si();
Ei();
zg();
Qh();
W9t();
yn();
L5c = 30;
w$o = class extends zJh {
  static {
    Tve = this;
  }
  static {
    this.ID = "editor.contrib.resizableContentHoverWidget";
  }
  static {
    this._lastDimensions = new Lu(0, 0);
  }
  get isVisibleFromKeyboard() {
    return this._renderedHover?.source === 2;
  }
  get isVisible() {
    return this._hoverVisibleKey.get() ?? false;
  }
  get isFocused() {
    return this._hoverFocusedKey.get() ?? false;
  }
  constructor(e, t, i, r, s) {
    const o = e.getOption(68) + 8;
    const a = 150;
    const l = new Lu(a, o);
    super(e, l);
    this._configurationService = i;
    this._accessibilityService = r;
    this._keybindingService = s;
    this._hover = this._register(new A$o(true));
    this._onDidResize = this._register(new Qe());
    this.onDidResize = this._onDidResize.event;
    this._onDidScroll = this._register(new Qe());
    this.onDidScroll = this._onDidScroll.event;
    this._minimumSize = l;
    this._hoverVisibleKey = Ci.hoverVisible.bindTo(t);
    this._hoverFocusedKey = Ci.hoverFocused.bindTo(t);
    Rt(this._resizableNode.domNode, this._hover.containerDomNode);
    this._resizableNode.domNode.style.zIndex = "50";
    this._resizableNode.domNode.className = "monaco-resizable-hover";
    this._register(this._editor.onDidLayoutChange(() => {
      if (this.isVisible) {
        this._updateMaxDimensions();
      }
    }));
    this._register(this._editor.onDidChangeConfiguration(d => {
      if (d.hasChanged(52)) {
        this._updateFont();
      }
    }));
    const u = this._register(CC(this._resizableNode.domNode));
    this._register(u.onDidFocus(() => {
      this._hoverFocusedKey.set(true);
    }));
    this._register(u.onDidBlur(() => {
      this._hoverFocusedKey.set(false);
    }));
    this._register(this._hover.scrollbar.onScroll(d => {
      this._onDidScroll.fire(d);
    }));
    this._setRenderedHover(undefined);
    this._editor.addContentWidget(this);
  }
  dispose() {
    super.dispose();
    this._renderedHover?.dispose();
    this._editor.removeContentWidget(this);
  }
  getId() {
    return Tve.ID;
  }
  static _applyDimensions(e, t, i) {
    const r = typeof t == "number" ? `${t}px` : t;
    const s = typeof i == "number" ? `${i}px` : i;
    e.style.width = r;
    e.style.height = s;
  }
  _setContentsDomNodeDimensions(e, t) {
    const i = this._hover.contentsDomNode;
    return Tve._applyDimensions(i, e, t);
  }
  _setContainerDomNodeDimensions(e, t) {
    const i = this._hover.containerDomNode;
    return Tve._applyDimensions(i, e, t);
  }
  _setScrollableElementDimensions(e, t) {
    const i = this._hover.scrollbar.getDomNode();
    return Tve._applyDimensions(i, e, t);
  }
  _setHoverWidgetDimensions(e, t) {
    this._setContainerDomNodeDimensions(e, t);
    this._setScrollableElementDimensions(e, t);
    this._setContentsDomNodeDimensions(e, t);
    this._layoutContentWidget();
  }
  static _applyMaxDimensions(e, t, i) {
    const r = typeof t == "number" ? `${t}px` : t;
    const s = typeof i == "number" ? `${i}px` : i;
    e.style.maxWidth = r;
    e.style.maxHeight = s;
  }
  _setHoverWidgetMaxDimensions(e, t) {
    Tve._applyMaxDimensions(this._hover.contentsDomNode, e, t);
    Tve._applyMaxDimensions(this._hover.scrollbar.getDomNode(), e, t);
    Tve._applyMaxDimensions(this._hover.containerDomNode, e, t);
    this._hover.containerDomNode.style.setProperty("--vscode-hover-maxWidth", typeof e == "number" ? `${e}px` : e);
    this._layoutContentWidget();
  }
  _setAdjustedHoverWidgetDimensions(e) {
    this._setHoverWidgetMaxDimensions("none", "none");
    this._setHoverWidgetDimensions(e.width, e.height);
  }
  _updateResizableNodeMaxDimensions() {
    const e = this._findMaximumRenderingWidth() ?? Infinity;
    const t = this._findMaximumRenderingHeight() ?? Infinity;
    this._resizableNode.maxSize = new Lu(e, t);
    this._setHoverWidgetMaxDimensions(e, t);
  }
  _resize(e) {
    Tve._lastDimensions = new Lu(e.width, e.height);
    this._setAdjustedHoverWidgetDimensions(e);
    this._resizableNode.layout(e.height, e.width);
    this._updateResizableNodeMaxDimensions();
    this._hover.scrollbar.scanDomNode();
    this._editor.layoutContentWidget(this);
    this._onDidResize.fire();
  }
  _findAvailableSpaceVertically() {
    const e = this._renderedHover?.showAtPosition;
    if (e) {
      if (this._positionPreference === 1) {
        return this._availableVerticalSpaceAbove(e);
      } else {
        return this._availableVerticalSpaceBelow(e);
      }
    }
  }
  _findMaximumRenderingHeight() {
    const e = this._findAvailableSpaceVertically();
    if (!e) {
      return;
    }
    let i = this._hover.contentsDomNode.children.length - 1;
    Array.from(this._hover.contentsDomNode.children).forEach(r => {
      i += r.clientHeight;
    });
    return Math.min(e, i);
  }
  _isHoverTextOverflowing() {
    this._hover.containerDomNode.style.setProperty("--vscode-hover-whiteSpace", "nowrap");
    this._hover.containerDomNode.style.setProperty("--vscode-hover-sourceWhiteSpace", "nowrap");
    const e = Array.from(this._hover.contentsDomNode.children).some(t => t.scrollWidth > t.clientWidth);
    this._hover.containerDomNode.style.removeProperty("--vscode-hover-whiteSpace");
    this._hover.containerDomNode.style.removeProperty("--vscode-hover-sourceWhiteSpace");
    return e;
  }
  _findMaximumRenderingWidth() {
    if (!this._editor || !this._editor.hasModel()) {
      return;
    }
    const e = this._isHoverTextOverflowing();
    const t = typeof this._contentWidth === "undefined" ? 0 : this._contentWidth;
    if (e || this._hover.containerDomNode.clientWidth < t) {
      return DY(this._hover.containerDomNode.ownerDocument.body).width - 14;
    } else {
      return this._hover.containerDomNode.clientWidth;
    }
  }
  isMouseGettingCloser(e, t) {
    if (!this._renderedHover) {
      return false;
    }
    if (this._renderedHover.initialMousePosX === undefined || this._renderedHover.initialMousePosY === undefined) {
      this._renderedHover.initialMousePosX = e;
      this._renderedHover.initialMousePosY = t;
      return false;
    }
    const i = qS(this.getDomNode());
    if (this._renderedHover.closestMouseDistance === undefined) {
      this._renderedHover.closestMouseDistance = YJh(this._renderedHover.initialMousePosX, this._renderedHover.initialMousePosY, i.left, i.top, i.width, i.height);
    }
    const r = YJh(e, t, i.left, i.top, i.width, i.height);
    if (r > this._renderedHover.closestMouseDistance + 4) {
      return false;
    } else {
      this._renderedHover.closestMouseDistance = Math.min(this._renderedHover.closestMouseDistance, r);
      return true;
    }
  }
  _setRenderedHover(e) {
    this._renderedHover?.dispose();
    this._renderedHover = e;
    this._hoverVisibleKey.set(!!e);
    this._hover.containerDomNode.classList.toggle("hidden", !e);
  }
  _updateFont() {
    const {
      fontSize: e,
      lineHeight: t
    } = this._editor.getOption(52);
    const i = this._hover.contentsDomNode;
    i.style.fontSize = `${e}px`;
    i.style.lineHeight = `${t / e}`;
    Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach(s => this._editor.applyFontInfo(s));
  }
  _updateContent(e) {
    const t = this._hover.contentsDomNode;
    t.style.paddingBottom = "";
    t.textContent = "";
    t.appendChild(e);
  }
  _layoutContentWidget() {
    this._editor.layoutContentWidget(this);
    this._hover.onContentsChanged();
  }
  _updateMaxDimensions() {
    const e = Math.max(this._editor.getLayoutInfo().height / 4, 250, Tve._lastDimensions.height);
    const t = Math.max(this._editor.getLayoutInfo().width * 0.66, 750, Tve._lastDimensions.width);
    this._resizableNode.maxSize = new Lu(t, e);
    this._setHoverWidgetMaxDimensions(t, e);
  }
  _render(e) {
    this._setRenderedHover(e);
    this._updateFont();
    this._updateContent(e.domNode);
    this.onContentsChanged();
    this._editor.render();
  }
  getPosition() {
    if (this._renderedHover) {
      return {
        position: this._renderedHover.showAtPosition,
        secondaryPosition: this._renderedHover.showAtSecondaryPosition,
        positionAffinity: this._renderedHover.shouldAppearBeforeContent ? 3 : undefined,
        preference: [this._positionPreference ?? 1]
      };
    } else {
      return null;
    }
  }
  show(e) {
    if (!this._editor || !this._editor.hasModel()) {
      return;
    }
    this._render(e);
    const t = DH(this._hover.containerDomNode);
    const i = e.showAtPosition;
    this._positionPreference = this._findPositionPreference(t, i) ?? 1;
    this.onContentsChanged();
    if (e.shouldFocus) {
      this._hover.containerDomNode.focus();
    }
    this._onDidResize.fire();
    const s = this._hover.containerDomNode.ownerDocument.activeElement === this._hover.containerDomNode && VJh(this._configurationService.getValue("accessibility.verbosity.hover") === true && this._accessibilityService.isScreenReaderOptimized(), this._keybindingService.lookupKeybinding("editor.action.accessibleView")?.getAriaLabel() ?? "");
    if (s) {
      this._hover.contentsDomNode.ariaLabel = this._hover.contentsDomNode.textContent + ", " + s;
    }
  }
  hide() {
    if (!this._renderedHover) {
      return;
    }
    const e = this._renderedHover.shouldFocus || this._hoverFocusedKey.get();
    this._setRenderedHover(undefined);
    this._resizableNode.maxSize = new Lu(Infinity, Infinity);
    this._resizableNode.clearSashHoverState();
    this._hoverFocusedKey.set(false);
    this._editor.layoutContentWidget(this);
    if (e) {
      this._editor.focus();
    }
  }
  _removeConstraintsRenderNormally() {
    const e = this._editor.getLayoutInfo();
    this._resizableNode.layout(e.height, e.width);
    this._setHoverWidgetDimensions("auto", "auto");
    this._updateMaxDimensions();
  }
  setMinimumDimensions(e) {
    this._minimumSize = new Lu(Math.max(this._minimumSize.width, e.width), Math.max(this._minimumSize.height, e.height));
    this._updateMinimumWidth();
  }
  _updateMinimumWidth() {
    const e = typeof this._contentWidth === "undefined" ? this._minimumSize.width : Math.min(this._contentWidth, this._minimumSize.width);
    this._resizableNode.minSize = new Lu(e, this._minimumSize.height);
  }
  onContentsChanged() {
    this._removeConstraintsRenderNormally();
    const e = this._hover.contentsDomNode;
    let t = DH(e);
    let i = jP(e) + 2;
    this._resizableNode.layout(t, i);
    this._setHoverWidgetDimensions(i, t);
    t = DH(e);
    i = jP(e);
    this._contentWidth = i;
    this._updateMinimumWidth();
    this._resizableNode.layout(t, i);
    if (this._renderedHover?.showAtPosition) {
      const r = DH(this._hover.containerDomNode);
      this._positionPreference = this._findPositionPreference(r, this._renderedHover.showAtPosition);
    }
    this._layoutContentWidget();
  }
  focus() {
    this._hover.containerDomNode.focus();
  }
  scrollUp() {
    const e = this._hover.scrollbar.getScrollPosition().scrollTop;
    const t = this._editor.getOption(52);
    this._hover.scrollbar.setScrollPosition({
      scrollTop: e - t.lineHeight
    });
  }
  scrollDown() {
    const e = this._hover.scrollbar.getScrollPosition().scrollTop;
    const t = this._editor.getOption(52);
    this._hover.scrollbar.setScrollPosition({
      scrollTop: e + t.lineHeight
    });
  }
  scrollLeft() {
    const e = this._hover.scrollbar.getScrollPosition().scrollLeft;
    this._hover.scrollbar.setScrollPosition({
      scrollLeft: e - L5c
    });
  }
  scrollRight() {
    const e = this._hover.scrollbar.getScrollPosition().scrollLeft;
    this._hover.scrollbar.setScrollPosition({
      scrollLeft: e + L5c
    });
  }
  pageUp() {
    const e = this._hover.scrollbar.getScrollPosition().scrollTop;
    const t = this._hover.scrollbar.getScrollDimensions().height;
    this._hover.scrollbar.setScrollPosition({
      scrollTop: e - t
    });
  }
  pageDown() {
    const e = this._hover.scrollbar.getScrollPosition().scrollTop;
    const t = this._hover.scrollbar.getScrollDimensions().height;
    this._hover.scrollbar.setScrollPosition({
      scrollTop: e + t
    });
  }
  goToTop() {
    this._hover.scrollbar.setScrollPosition({
      scrollTop: 0
    });
  }
  goToBottom() {
    this._hover.scrollbar.setScrollPosition({
      scrollTop: this._hover.scrollbar.getScrollDimensions().scrollHeight
    });
  }
};
w$o = Tve = __decorate([__param(1, wi), __param(2, Fn), __param(3, Cf), __param(4, mo)], w$o);
