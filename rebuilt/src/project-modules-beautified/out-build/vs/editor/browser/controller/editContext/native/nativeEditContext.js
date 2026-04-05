"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/native/nativeEditContext.js
// Offset: 1849248 (bundle byte offset)
// Size: 10715 bytes
QlA();
Ay();
ri();
sI();
Tb();
Wt();
VOn();
Kyh();
jlA();
zlA();
ts();
db();
tl();
vIc();
rt();
VlA();
zg();
nwh();
(function (n) {
  n.NONE = "edit-context-composition-none";
  n.SECONDARY = "edit-context-composition-secondary";
  n.PRIMARY = "edit-context-composition-primary";
})(e3n ||= {});
t3n = class extends gIc {
  constructor(e, t, i, r, s, o, a) {
    super(t);
    this._visibleRangeProvider = s;
    this._accessibilityService = a;
    this._editContextPrimarySelection = new Vl(1, 1, 1, 1);
    this._decorations = [];
    this._primarySelection = new Vl(1, 1, 1, 1);
    this._targetWindowId = -1;
    this._scrollTop = 0;
    this._scrollLeft = 0;
    this.domNode = new qH(document.createElement("div"));
    this.domNode.setClassName("native-edit-context");
    this._textArea = new qH(document.createElement("textarea"));
    this._textArea.setClassName("native-edit-context-textarea");
    this._textArea.setAttribute("tabindex", "-1");
    this.domNode.setAttribute("autocorrect", "off");
    this.domNode.setAttribute("autocapitalize", "off");
    this.domNode.setAttribute("autocomplete", "off");
    this.domNode.setAttribute("spellcheck", "false");
    this._updateDomAttributes();
    i.appendChild(this.domNode);
    i.appendChild(this._textArea);
    this._parent = i.domNode;
    this._selectionChangeListener = this._register(new uo());
    this._focusTracker = this._register(new ewh(this.domNode.domNode, u => {
      if (u) {
        this._selectionChangeListener.value = this._setSelectionChangeListener(r);
        this._screenReaderSupport.setIgnoreSelectionChangeTime("onFocus");
      } else {
        this._selectionChangeListener.value = undefined;
      }
      this._context.viewModel.setHasFocus(u);
    }));
    const l = As(this.domNode.domNode);
    this._editContext = AIc.create(l);
    this.setEditContextOnDomNode();
    this._screenReaderSupport = o.createInstance(w3o, this.domNode, t);
    this._register(ei(this.domNode.domNode, "copy", u => this._ensureClipboardGetsEditorSelection(u)));
    this._register(ei(this.domNode.domNode, "cut", u => {
      this._screenReaderSupport.setIgnoreSelectionChangeTime("onCut");
      this._ensureClipboardGetsEditorSelection(u);
      r.cut();
    }));
    this._register(ei(this.domNode.domNode, "keyup", u => r.emitKeyUp(new vh(u))));
    this._register(ei(this.domNode.domNode, "keydown", async u => {
      const d = new vh(u);
      if (d.keyCode === 114) {
        d.stopPropagation();
      }
      r.emitKeyDown(d);
    }));
    this._register(ei(this.domNode.domNode, "beforeinput", async u => {
      if (u.inputType === "insertParagraph" || u.inputType === "insertLineBreak") {
        this._onType(r, {
          text: `
`,
          replacePrevCharCnt: 0,
          replaceNextCharCnt: 0,
          positionDelta: 0
        });
      }
    }));
    this._register(XOn(this._editContext, "textformatupdate", u => this._handleTextFormatUpdate(u)));
    this._register(XOn(this._editContext, "characterboundsupdate", u => this._updateCharacterBounds(u)));
    this._register(XOn(this._editContext, "textupdate", u => {
      this._emitTypeEvent(r, u);
    }));
    this._register(XOn(this._editContext, "compositionstart", u => {
      r.compositionStart();
      this._context.viewModel.onCompositionStart();
    }));
    this._register(XOn(this._editContext, "compositionend", u => {
      r.compositionEnd();
      this._context.viewModel.onCompositionEnd();
    }));
    this._register(ei(this._textArea.domNode, "paste", u => {
      this._screenReaderSupport.setIgnoreSelectionChangeTime("onPaste");
      u.preventDefault();
      if (!u.clipboardData) {
        return;
      }
      let [d, m] = i3t.getTextData(u.clipboardData);
      if (!d) {
        return;
      }
      m = m || n3t.INSTANCE.get(d);
      let p = false;
      let g = null;
      let f = null;
      if (m) {
        p = this._context.configuration.options.get(38) && !!m.isFromEmptySelection;
        g = typeof m.multicursorText !== "undefined" ? m.multicursorText : null;
        f = m.mode;
      }
      r.paste(d, p, g, f);
    }));
    this._register(yIc.register(e, this));
  }
  dispose() {
    this.domNode.domNode.blur();
    this.domNode.domNode.remove();
    this._textArea.domNode.remove();
    super.dispose();
  }
  setAriaOptions(e) {
    this._screenReaderSupport.setAriaOptions(e);
  }
  getLastRenderData() {
    return this._primarySelection.getPosition();
  }
  prepareRender(e) {
    this._screenReaderSupport.prepareRender(e);
    this._updateEditContext();
    this._updateSelectionAndControlBounds(e);
  }
  render(e) {
    this._screenReaderSupport.render(e);
  }
  onCursorStateChanged(e) {
    this._primarySelection = e.modelSelections[0] ?? new Vl(1, 1, 1, 1);
    this._screenReaderSupport.onCursorStateChanged(e);
    this._updateEditContext();
    return true;
  }
  onConfigurationChanged(e) {
    this._screenReaderSupport.onConfigurationChanged(e);
    this._updateDomAttributes();
    return true;
  }
  onDecorationsChanged(e) {
    return true;
  }
  onFlushed(e) {
    return true;
  }
  onLinesChanged(e) {
    return true;
  }
  onLinesDeleted(e) {
    return true;
  }
  onLinesInserted(e) {
    return true;
  }
  onScrollChanged(e) {
    this._scrollLeft = e.scrollLeft;
    this._scrollTop = e.scrollTop;
    return true;
  }
  onZonesChanged(e) {
    return true;
  }
  executePaste() {
    this._onWillPaste();
    try {
      this._focusTracker.pause();
      this._textArea.focus();
      const e = this._textArea.domNode.ownerDocument.execCommand("paste");
      this._textArea.domNode.textContent = "";
      this.domNode.focus();
      return e;
    } finally {
      this._focusTracker.resume();
    }
  }
  _onWillPaste() {
    this._screenReaderSupport.setIgnoreSelectionChangeTime("onWillPaste");
  }
  writeScreenReaderContent() {
    this._screenReaderSupport.writeScreenReaderContent();
  }
  isFocused() {
    return this._focusTracker.isFocused;
  }
  focus() {
    this._focusTracker.focus();
    this.refreshFocusState();
  }
  refreshFocusState() {
    this._focusTracker.refreshFocusState();
  }
  setEditContextOnDomNode() {
    const e = As(this.domNode.domNode);
    const t = RH(e);
    if (this._targetWindowId !== t) {
      this.domNode.domNode.editContext = this._editContext;
      this._targetWindowId = t;
    }
  }
  _updateDomAttributes() {
    const e = this._context.configuration.options;
    this.domNode.domNode.setAttribute("tabindex", String(e.get(129)));
  }
  _updateEditContext() {
    const e = this._getNewEditContextState();
    if (e) {
      this._editContext.updateText(0, Number.MAX_SAFE_INTEGER, e.text ?? " ");
      this._editContext.updateSelection(e.selectionStartOffset, e.selectionEndOffset);
      this._editContextPrimarySelection = e.editContextPrimarySelection;
    }
  }
  _emitTypeEvent(e, t) {
    if (!this._editContext || !this._editContextPrimarySelection.equalsSelection(this._primarySelection)) {
      return;
    }
    const i = this._context.viewModel.model;
    const r = this._editContextStartPosition();
    const s = i.getOffsetAt(r);
    const o = i.getOffsetAt(this._primarySelection.getEndPosition());
    const a = i.getOffsetAt(this._primarySelection.getStartPosition());
    const l = o - s;
    const u = a - s;
    let d = 0;
    let m = 0;
    if (t.updateRangeEnd > l) {
      d = t.updateRangeEnd - l;
    }
    if (t.updateRangeStart < u) {
      m = u - t.updateRangeStart;
    }
    let p = "";
    if (u < t.updateRangeStart) {
      p += this._editContext.text.substring(u, t.updateRangeStart);
    }
    p += t.text;
    if (l > t.updateRangeEnd) {
      p += this._editContext.text.substring(t.updateRangeEnd, l);
    }
    let g = 0;
    if (t.selectionStart === t.selectionEnd && u === l) {
      g = t.selectionStart - (t.updateRangeStart + t.text.length);
    }
    const f = {
      text: p,
      replacePrevCharCnt: m,
      replaceNextCharCnt: d,
      positionDelta: g
    };
    this._onType(e, f);
    this._updateEditContext();
  }
  _onType(e, t) {
    if (t.replacePrevCharCnt || t.replaceNextCharCnt || t.positionDelta) {
      e.compositionType(t.text, t.replacePrevCharCnt, t.replaceNextCharCnt, t.positionDelta);
    } else {
      e.type(t.text);
    }
  }
  _getNewEditContextState() {
    const e = this._primarySelection;
    const t = this._context.viewModel.model;
    if (!t.isValidRange(e)) {
      return;
    }
    const i = e.startLineNumber;
    const r = e.endLineNumber;
    const s = t.getLineMaxColumn(r);
    const o = new Zt(i, 1, r, s);
    const a = t.getValueInRange(o, 0);
    const l = e.startColumn - 1;
    const u = a.length + e.endColumn - s;
    return {
      text: a,
      selectionStartOffset: l,
      selectionEndOffset: u,
      editContextPrimarySelection: e
    };
  }
  _editContextStartPosition() {
    return new ar(this._editContextPrimarySelection.startLineNumber, 1);
  }
  _handleTextFormatUpdate(e) {
    if (!this._editContext) {
      return;
    }
    const t = e.getTextFormats();
    const i = this._editContextStartPosition();
    const r = [];
    t.forEach(s => {
      const o = this._context.viewModel.model;
      const a = o.getOffsetAt(i);
      const l = o.getPositionAt(a + s.rangeStart);
      const u = o.getPositionAt(a + s.rangeEnd);
      const d = Zt.fromPositions(l, u);
      const m = s.underlineThickness.toLowerCase();
      let p = e3n.NONE;
      switch (m) {
        case "thin":
          p = e3n.SECONDARY;
          break;
        case "thick":
          p = e3n.PRIMARY;
          break;
      }
      r.push({
        range: d,
        options: {
          description: "textFormatDecoration",
          inlineClassName: p
        }
      });
    });
    this._decorations = this._context.viewModel.model.deltaDecorations(this._decorations, r);
  }
  _updateSelectionAndControlBounds(e) {
    if (!this._parent) {
      return;
    }
    const t = this._context.configuration.options;
    const i = t.get(68);
    const r = t.get(151).contentLeft;
    const s = this._parent.getBoundingClientRect();
    const o = this._primarySelection.getStartPosition();
    const a = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(o);
    const l = this._context.viewLayout.getVerticalOffsetForLineNumber(a.lineNumber);
    const u = s.top + l - this._scrollTop;
    const d = (this._primarySelection.endLineNumber - this._primarySelection.startLineNumber + 1) * i;
    let m = s.left + r - this._scrollLeft;
    let p;
    if (this._primarySelection.isEmpty()) {
      const f = e.visibleRangeForPosition(a);
      if (f) {
        m += f.left;
      }
      p = 0;
    } else {
      p = s.width - r;
    }
    const g = new DOMRect(m, u, p, d);
    this._editContext.updateSelectionBounds(g);
    this._editContext.updateControlBounds(g);
  }
  _updateCharacterBounds(e) {
    if (!this._parent) {
      return;
    }
    const t = this._context.configuration.options;
    const i = t.get(52).typicalHalfwidthCharacterWidth;
    const r = t.get(68);
    const s = t.get(151).contentLeft;
    const o = this._parent.getBoundingClientRect();
    const a = [];
    const l = new h3t(this._editContext.text);
    for (let u = e.rangeStart; u < e.rangeEnd; u++) {
      const d = l.getPosition(u);
      const m = this._editContextPrimarySelection.startLineNumber - 1;
      const p = new ar(m + d.lineNumber, d.column);
      const g = p.delta(0, 1);
      const f = Zt.fromPositions(p, g);
      const A = this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(f);
      const w = this._visibleRangeProvider.linesVisibleRangesForRange(A, true) ?? [];
      const C = this._context.viewLayout.getVerticalOffsetForLineNumber(A.startLineNumber);
      const x = o.top + C - this._scrollTop;
      let I = 0;
      let B = i;
      if (w.length > 0) {
        for (const R of w[0].ranges) {
          I = R.left;
          B = R.width;
          break;
        }
      }
      a.push(new DOMRect(o.left + s + I - this._scrollLeft, x, B, r));
    }
    this._editContext.updateCharacterBounds(e.rangeStart, a);
  }
  _ensureClipboardGetsEditorSelection(e) {
    const t = this._context.configuration.options;
    const i = t.get(38);
    const r = t.get(25);
    const s = this._context.viewModel.getCursorStates().map(l => l.modelState.selection);
    const o = iAh(this._context.viewModel, s, i, r);
    const a = {
      version: 1,
      isFromEmptySelection: o.isFromEmptySelection,
      multicursorText: o.multicursorText,
      mode: o.mode
    };
    n3t.INSTANCE.set(u3 ? o.text.replace(/\r\n/g, `
`) : o.text, a);
    e.preventDefault();
    if (e.clipboardData) {
      i3t.setTextData(e.clipboardData, o.text, o.html, a);
    }
  }
  _setSelectionChangeListener(e) {
    let t = 0;
    return ei(this.domNode.domNode.ownerDocument, "selectionchange", () => {
      const i = this._accessibilityService.isScreenReaderOptimized();
      if (!this.isFocused() || !i) {
        return;
      }
      const r = this._screenReaderSupport.screenReaderContentState;
      if (!r) {
        return;
      }
      const s = Date.now();
      const o = s - t;
      t = s;
      if (o < 5) {
        return;
      }
      const a = s - this._screenReaderSupport.getIgnoreSelectionChangeTime();
      this._screenReaderSupport.resetSelectionChangeTime();
      if (a < 100) {
        return;
      }
      const u = $c().document.getSelection();
      if (!u || u.rangeCount === 0) {
        return;
      }
      const m = u.getRangeAt(0);
      const p = this._context.viewModel;
      const g = p.model;
      const A = p.coordinatesConverter.convertViewPositionToModelPosition(r.startPositionWithinEditor);
      const w = g.getOffsetAt(A);
      let C = m.startOffset + w;
      let x = m.endOffset + w;
      if (g.getEndOfLineSequence() === 1) {
        const M = r.value;
        const O = new h3t(M);
        const $ = O.getPosition(m.startOffset);
        const H = O.getPosition(m.endOffset);
        C += $.lineNumber - 1;
        x += H.lineNumber - 1;
      }
      const B = g.getPositionAt(C);
      const R = g.getPositionAt(x);
      const N = Vl.fromPositions(B, R);
      e.setSelection(N);
    });
  }
};
t3n = __decorate([__param(5, ln), __param(6, Cf)], t3n);
