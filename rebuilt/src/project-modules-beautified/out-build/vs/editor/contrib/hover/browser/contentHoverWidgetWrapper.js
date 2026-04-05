"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/contentHoverWidgetWrapper.js
// Offset: 25112251 (bundle byte offset)
// Size: 6968 bytes
ri();
rt();
Tg();
WJh();
mhe();
Wt();
ka();
iAA();
rAA();
sAA();
yn();
ICA();
b$o();
Id();
pla = class extends at {
  constructor(e, t, i, r) {
    super();
    this._editor = e;
    this._instantiationService = t;
    this._keybindingService = i;
    this._hoverService = r;
    this._currentResult = null;
    this._renderedContentHover = this._register(new uo());
    this._onContentsChanged = this._register(new Qe());
    this.onContentsChanged = this._onContentsChanged.event;
    this._contentHoverWidget = this._register(this._instantiationService.createInstance(w$o, this._editor));
    this._participants = this._initializeHoverParticipants();
    this._hoverOperation = this._register(new B5c(this._editor, new ZJh(this._editor, this._participants)));
    this._registerListeners();
  }
  _initializeHoverParticipants() {
    const e = [];
    for (const t of u8e.getAll()) {
      const i = this._instantiationService.createInstance(t, this._editor);
      e.push(i);
    }
    e.sort((t, i) => t.hoverOrdinal - i.hoverOrdinal);
    this._register(this._contentHoverWidget.onDidResize(() => {
      this._participants.forEach(t => t.handleResize?.());
    }));
    this._register(this._contentHoverWidget.onDidScroll(t => {
      this._participants.forEach(i => i.handleScroll?.(t));
    }));
    return e;
  }
  _registerListeners() {
    this._register(this._hoverOperation.onResult(t => {
      const i = t.hasLoadingMessage ? this._addLoadingMessage(t) : t.value;
      this._withResult(new N5c(i, t.isComplete, t.options));
    }));
    const e = this._contentHoverWidget.getDomNode();
    this._register(_f(e, "keydown", t => {
      if (t.equals(9)) {
        this.hide();
      }
    }));
    this._register(_f(e, "mouseleave", t => {
      this._onMouseLeave(t);
    }));
    this._register(pT.onDidChange(() => {
      if (this._contentHoverWidget.position && this._currentResult) {
        this._setCurrentResult(this._currentResult);
      }
    }));
  }
  _startShowingOrUpdateHover(e, t, i, r, s) {
    if (!this._contentHoverWidget.position || !this._currentResult) {
      if (e) {
        this._startHoverOperationIfNecessary(e, t, i, r, false);
        return true;
      } else {
        return false;
      }
    }
    const a = this._editor.getOption(62).sticky;
    const l = s && this._contentHoverWidget.isMouseGettingCloser(s.event.posx, s.event.posy);
    if (a && l) {
      if (e) {
        this._startHoverOperationIfNecessary(e, t, i, r, true);
      }
      return true;
    } else if (e) {
      if (this._currentResult && this._currentResult.options.anchor.equals(e)) {
        return true;
      } else if (this._currentResult && e.canAdoptVisibleHover(this._currentResult.options.anchor, this._contentHoverWidget.position)) {
        if (this._currentResult) {
          this._setCurrentResult(this._currentResult.filter(e));
        }
        this._startHoverOperationIfNecessary(e, t, i, r, false);
        return true;
      } else {
        this._setCurrentResult(null);
        this._startHoverOperationIfNecessary(e, t, i, r, false);
        return true;
      }
    } else {
      this._setCurrentResult(null);
      return false;
    }
  }
  _startHoverOperationIfNecessary(e, t, i, r, s) {
    if (this._hoverOperation.options && this._hoverOperation.options.anchor.equals(e)) {
      return;
    }
    this._hoverOperation.cancel();
    const a = {
      anchor: e,
      source: i,
      shouldFocus: r,
      insistOnKeepingHoverVisible: s
    };
    this._hoverOperation.start(t, a);
  }
  _setCurrentResult(e) {
    let t = e;
    if (this._currentResult === t) {
      return;
    }
    if (t && t.hoverParts.length === 0) {
      t = null;
    }
    this._currentResult = t;
    if (this._currentResult) {
      this._showHover(this._currentResult);
    } else {
      this._hideHover();
    }
  }
  _addLoadingMessage(e) {
    for (const t of this._participants) {
      if (!t.createLoadingMessage) {
        continue;
      }
      const i = t.createLoadingMessage(e.options.anchor);
      if (i) {
        return e.value.slice(0).concat([i]);
      }
    }
    return e.value;
  }
  _withResult(e) {
    if (!this._contentHoverWidget.position || !this._currentResult || !this._currentResult.isComplete) {
      this._setCurrentResult(e);
    }
    if (!e.isComplete) {
      return;
    }
    const r = e.hoverParts.length === 0;
    const s = e.options.insistOnKeepingHoverVisible;
    if (!r || !s) {
      this._setCurrentResult(e);
    }
  }
  _showHover(e) {
    const t = this._getHoverContext();
    this._renderedContentHover.value = new hla(this._editor, e, this._participants, t, this._keybindingService, this._hoverService);
    if (this._renderedContentHover.value.domNodeHasChildren) {
      this._contentHoverWidget.show(this._renderedContentHover.value);
    } else {
      this._renderedContentHover.clear();
    }
  }
  _hideHover() {
    this._contentHoverWidget.hide();
    this._participants.forEach(e => e.handleHide?.());
  }
  _getHoverContext() {
    return {
      hide: () => {
        this.hide();
      },
      onContentsChanged: () => {
        this._onContentsChanged.fire();
        this._contentHoverWidget.onContentsChanged();
      },
      setMinimumDimensions: s => {
        this._contentHoverWidget.setMinimumDimensions(s);
      },
      focus: () => this.focus()
    };
  }
  showsOrWillShow(e) {
    if (this._contentHoverWidget.isResizing) {
      return true;
    }
    const i = this._findHoverAnchorCandidates(e);
    if (!(i.length > 0)) {
      return this._startShowingOrUpdateHover(null, 0, 0, false, e);
    }
    const s = i[0];
    return this._startShowingOrUpdateHover(s, 0, 0, false, e);
  }
  _findHoverAnchorCandidates(e) {
    const t = [];
    for (const r of this._participants) {
      if (!r.suggestHoverAnchor) {
        continue;
      }
      const s = r.suggestHoverAnchor(e);
      if (s) {
        t.push(s);
      }
    }
    const i = e.target;
    switch (i.type) {
      case 6:
        {
          t.push(new a$o(0, i.range, e.event.posx, e.event.posy));
          break;
        }
      case 7:
        {
          const r = this._editor.getOption(52).typicalHalfwidthCharacterWidth / 2;
          if (!!i.detail.isAfterLines || typeof i.detail.horizontalDistanceToText != "number" || !(i.detail.horizontalDistanceToText < r)) {
            break;
          }
          t.push(new a$o(0, i.range, e.event.posx, e.event.posy));
          break;
        }
    }
    t.sort((r, s) => s.priority - r.priority);
    return t;
  }
  _onMouseLeave(e) {
    const t = this._editor.getDomNode();
    if (!t || !f$o(t, e.x, e.y)) {
      this.hide();
    }
  }
  startShowingAtRange(e, t, i, r) {
    this._startShowingOrUpdateHover(new a$o(0, e, undefined, undefined), t, i, r, null);
  }
  getWidgetContent() {
    const e = this._contentHoverWidget.getDomNode();
    if (e.textContent) {
      return e.textContent;
    }
  }
  async updateHoverVerbosityLevel(e, t, i) {
    this._renderedContentHover.value?.updateHoverVerbosityLevel(e, t, i);
  }
  doesHoverAtIndexSupportVerbosityAction(e, t) {
    return this._renderedContentHover.value?.doesHoverAtIndexSupportVerbosityAction(e, t) ?? false;
  }
  getAccessibleWidgetContent() {
    return this._renderedContentHover.value?.getAccessibleWidgetContent();
  }
  getAccessibleWidgetContentAtIndex(e) {
    return this._renderedContentHover.value?.getAccessibleWidgetContentAtIndex(e);
  }
  focusedHoverPartIndex() {
    return this._renderedContentHover.value?.focusedHoverPartIndex ?? -1;
  }
  containsNode(e) {
    if (e) {
      return this._contentHoverWidget.getDomNode().contains(e);
    } else {
      return false;
    }
  }
  focus() {
    if (this._renderedContentHover.value?.hoverPartsCount === 1) {
      this.focusHoverPartWithIndex(0);
      return;
    }
    this._contentHoverWidget.focus();
  }
  focusHoverPartWithIndex(e) {
    this._renderedContentHover.value?.focusHoverPartWithIndex(e);
  }
  scrollUp() {
    this._contentHoverWidget.scrollUp();
  }
  scrollDown() {
    this._contentHoverWidget.scrollDown();
  }
  scrollLeft() {
    this._contentHoverWidget.scrollLeft();
  }
  scrollRight() {
    this._contentHoverWidget.scrollRight();
  }
  pageUp() {
    this._contentHoverWidget.pageUp();
  }
  pageDown() {
    this._contentHoverWidget.pageDown();
  }
  goToTop() {
    this._contentHoverWidget.goToTop();
  }
  goToBottom() {
    this._contentHoverWidget.goToBottom();
  }
  hide() {
    this._hoverOperation.cancel();
    this._setCurrentResult(null);
  }
  getDomNode() {
    return this._contentHoverWidget.getDomNode();
  }
  get isColorPickerVisible() {
    return this._renderedContentHover.value?.isColorPickerVisible() ?? false;
  }
  get isVisibleFromKeyboard() {
    return this._contentHoverWidget.isVisibleFromKeyboard;
  }
  get isVisible() {
    return this._contentHoverWidget.isVisible;
  }
  get isFocused() {
    return this._contentHoverWidget.isFocused;
  }
  get isResizing() {
    return this._contentHoverWidget.isResizing;
  }
  get widget() {
    return this._contentHoverWidget;
  }
};
pla = __decorate([__param(1, ln), __param(2, mo), __param(3, Kc)], pla);
