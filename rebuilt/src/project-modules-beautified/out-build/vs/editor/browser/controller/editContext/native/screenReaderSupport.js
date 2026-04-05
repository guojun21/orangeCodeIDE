"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/native/screenReaderSupport.js
// Offset: 1841853 (bundle byte offset)
// Size: 5328 bytes
ri();
Ht();
zg();
ka();
db();
HY();
Zyh();
w3o = class {
  constructor(e, t, i, r) {
    this._domNode = e;
    this._context = t;
    this._keybindingService = i;
    this._accessibilityService = r;
    this._contentLeft = 1;
    this._contentWidth = 1;
    this._contentHeight = 1;
    this._divWidth = 1;
    this._lineHeight = 1;
    this._accessibilityPageSize = 1;
    this._ignoreSelectionChangeTime = 0;
    this._primarySelection = new Vl(1, 1, 1, 1);
    this._primaryCursorVisibleRange = null;
    this._updateConfigurationSettings();
    this._updateDomAttributes();
  }
  setIgnoreSelectionChangeTime(e) {
    this._ignoreSelectionChangeTime = Date.now();
  }
  getIgnoreSelectionChangeTime() {
    return this._ignoreSelectionChangeTime;
  }
  resetSelectionChangeTime() {
    this._ignoreSelectionChangeTime = 0;
  }
  onConfigurationChanged(e) {
    this._updateConfigurationSettings();
    this._updateDomAttributes();
    if (e.hasChanged(2)) {
      this.writeScreenReaderContent();
    }
  }
  _updateConfigurationSettings() {
    const e = this._context.configuration.options;
    const t = e.get(151);
    const i = t.wrappingColumn;
    this._contentLeft = t.contentLeft;
    this._contentWidth = t.contentWidth;
    this._contentHeight = t.height;
    this._fontInfo = e.get(52);
    this._lineHeight = e.get(68);
    this._accessibilityPageSize = e.get(3);
    this._divWidth = Math.round(i * this._fontInfo.typicalHalfwidthCharacterWidth);
  }
  _updateDomAttributes() {
    const e = this._context.configuration.options;
    this._domNode.domNode.setAttribute("role", "textbox");
    this._domNode.domNode.setAttribute("aria-required", e.get(5) ? "true" : "false");
    this._domNode.domNode.setAttribute("aria-multiline", "true");
    this._domNode.domNode.setAttribute("aria-autocomplete", e.get(96) ? "none" : "both");
    this._domNode.domNode.setAttribute("aria-roledescription", _(180, null));
    this._domNode.domNode.setAttribute("aria-label", fIc(e, this._keybindingService));
    const t = this._context.viewModel.model.getOptions().tabSize;
    const i = e.get(52).spaceWidth;
    this._domNode.domNode.style.tabSize = `${t * i}px`;
    const r = e.get(142);
    const s = r !== "inherit" ? r : e.get(137);
    this._domNode.domNode.style.textWrap = s === "off" ? "nowrap" : "wrap";
  }
  onCursorStateChanged(e) {
    this._primarySelection = e.selections[0] ?? new Vl(1, 1, 1, 1);
  }
  prepareRender(e) {
    this.writeScreenReaderContent();
    this._primaryCursorVisibleRange = e.visibleRangeForPosition(this._primarySelection.getPosition());
  }
  render(e) {
    if (!this._screenReaderContentState) {
      return;
    }
    if (!this._primaryCursorVisibleRange) {
      this._renderAtTopLeft();
      return;
    }
    const t = this._context.viewLayout.getCurrentScrollLeft();
    const i = this._contentLeft + this._primaryCursorVisibleRange.left - t;
    if (i < this._contentLeft || i > this._contentLeft + this._contentWidth) {
      this._renderAtTopLeft();
      return;
    }
    const r = this._context.viewLayout.getCurrentScrollTop();
    const s = this._primarySelection.positionLineNumber;
    const o = this._context.viewLayout.getVerticalOffsetForLineNumber(s) - r;
    if (o < 0 || o > this._contentHeight) {
      this._renderAtTopLeft();
      return;
    }
    const a = this._context.viewLayout.getVerticalOffsetForLineNumber(this._screenReaderContentState.startPositionWithinEditor.lineNumber);
    const u = this._context.viewLayout.getVerticalOffsetForLineNumber(s) - a;
    this._doRender(u, o, this._contentLeft, this._divWidth, this._lineHeight);
  }
  _renderAtTopLeft() {
    this._doRender(0, 0, 0, this._contentWidth, 1);
  }
  _doRender(e, t, i, r, s) {
    bF(this._domNode, this._fontInfo);
    this._domNode.setTop(t);
    this._domNode.setLeft(i);
    this._domNode.setWidth(r);
    this._domNode.setHeight(s);
    this._domNode.domNode.scrollTop = e;
  }
  setAriaOptions(e) {
    if (e.activeDescendant) {
      this._domNode.setAttribute("aria-haspopup", "true");
      this._domNode.setAttribute("aria-autocomplete", "list");
      this._domNode.setAttribute("aria-activedescendant", e.activeDescendant);
    } else {
      this._domNode.setAttribute("aria-haspopup", "false");
      this._domNode.setAttribute("aria-autocomplete", "both");
      this._domNode.removeAttribute("aria-activedescendant");
    }
    if (e.role) {
      this._domNode.setAttribute("role", e.role);
    }
  }
  writeScreenReaderContent() {
    const e = $c().document.activeElement;
    if (!e || e !== this._domNode.domNode) {
      return;
    }
    if (this._accessibilityService.isScreenReaderOptimized()) {
      this._screenReaderContentState = this._getScreenReaderContentState();
      if (this._domNode.domNode.textContent !== this._screenReaderContentState.value) {
        this.setIgnoreSelectionChangeTime("setValue");
        this._domNode.domNode.textContent = this._screenReaderContentState.value;
      }
      this._setSelectionOfScreenReaderContent(this._screenReaderContentState.selectionStart, this._screenReaderContentState.selectionEnd);
    } else {
      this._screenReaderContentState = undefined;
      this.setIgnoreSelectionChangeTime("setValue");
      this._domNode.domNode.textContent = "";
    }
  }
  get screenReaderContentState() {
    return this._screenReaderContentState;
  }
  _getScreenReaderContentState() {
    const e = {
      getLineCount: () => this._context.viewModel.getLineCount(),
      getLineMaxColumn: t => this._context.viewModel.getLineMaxColumn(t),
      getValueInRange: (t, i) => this._context.viewModel.getValueInRange(t, i),
      getValueLengthInRange: (t, i) => this._context.viewModel.getValueLengthInRange(t, i),
      modifyPosition: (t, i) => this._context.viewModel.modifyPosition(t, i)
    };
    return bIc.fromEditorSelection(e, this._primarySelection, this._accessibilityPageSize, this._accessibilityService.getAccessibilitySupport() === 0);
  }
  _setSelectionOfScreenReaderContent(e, t) {
    const r = $c().document.getSelection();
    if (!r) {
      return;
    }
    const s = this._domNode.domNode.firstChild;
    if (!s) {
      return;
    }
    const o = new globalThis.Range();
    o.setStart(s, e);
    o.setEnd(s, t);
    this.setIgnoreSelectionChangeTime("setRange");
    r.removeAllRanges();
    r.addRange(o);
  }
};
w3o = __decorate([__param(2, mo), __param(3, Cf)], w3o);
