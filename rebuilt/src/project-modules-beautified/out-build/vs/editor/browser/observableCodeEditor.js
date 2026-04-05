"use strict";

// Module: out-build/vs/editor/browser/observableCodeEditor.js
// Offset: 2238996 (bundle byte offset)
// Size: 7315 bytes
Nbe();
rt();
Uc();
$I();
tl();
db();
F3t();
SCh = class HCn extends at {
  static {
    this._map = new Map();
  }
  static get(e) {
    let t = HCn._map.get(e);
    if (!t) {
      t = new HCn(e);
      HCn._map.set(e, t);
      const i = e.onDidDispose(() => {
        const r = HCn._map.get(e);
        if (r) {
          HCn._map.delete(e);
          r.dispose();
          i.dispose();
        }
      });
    }
    return t;
  }
  _beginUpdate() {
    this._updateCounter++;
    if (this._updateCounter === 1) {
      this._currentTransaction = new Ugt(() => {});
    }
  }
  _endUpdate() {
    this._updateCounter--;
    if (this._updateCounter === 0) {
      const e = this._currentTransaction;
      this._currentTransaction = undefined;
      e.finish();
    }
  }
  constructor(e) {
    super();
    this.editor = e;
    this._updateCounter = 0;
    this._currentTransaction = undefined;
    this._model = Ua(this, this.editor.getModel());
    this.model = this._model;
    this.isReadonly = tp(this, this.editor.onDidChangeConfiguration, () => this.editor.getOption(96));
    this._versionId = Wze({
      owner: this,
      lazy: true
    }, this.editor.getModel()?.getVersionId() ?? null);
    this.versionId = this._versionId;
    this._selections = Wze({
      owner: this,
      equalsFn: Ngt(Y2o(Vl.selectionsEqual)),
      lazy: true
    }, this.editor.getSelections() ?? null);
    this.selections = this._selections;
    this.positions = uF({
      owner: this,
      equalsFn: Ngt(Y2o(ar.equals))
    }, t => this.selections.read(t)?.map(i => i.getStartPosition()) ?? null);
    this.isFocused = tp(this, t => {
      const i = this.editor.onDidFocusEditorWidget(t);
      const r = this.editor.onDidBlurEditorWidget(t);
      return {
        dispose() {
          i.dispose();
          r.dispose();
        }
      };
    }, () => this.editor.hasWidgetFocus());
    this.isTextFocused = tp(this, t => {
      const i = this.editor.onDidFocusEditorText(t);
      const r = this.editor.onDidBlurEditorText(t);
      return {
        dispose() {
          i.dispose();
          r.dispose();
        }
      };
    }, () => this.editor.hasTextFocus());
    this.inComposition = tp(this, t => {
      const i = this.editor.onDidCompositionStart(() => {
        t(undefined);
      });
      const r = this.editor.onDidCompositionEnd(() => {
        t(undefined);
      });
      return {
        dispose() {
          i.dispose();
          r.dispose();
        }
      };
    }, () => this.editor.inComposition);
    this.value = MSc(this, t => {
      this.versionId.read(t);
      return this.model.read(t)?.getValue() ?? "";
    }, (t, i) => {
      const r = this.model.get();
      if (r !== null && t !== r.getValue()) {
        r.setValue(t);
      }
    });
    this.valueIsEmpty = Ro(this, t => {
      this.versionId.read(t);
      return this.editor.getModel()?.getValueLength() === 0;
    });
    this.cursorSelection = uF({
      owner: this,
      equalsFn: Ngt(Vl.selectionsEqual)
    }, t => this.selections.read(t)?.[0] ?? null);
    this.cursorPosition = uF({
      owner: this,
      equalsFn: ar.equals
    }, t => this.selections.read(t)?.[0]?.getPosition() ?? null);
    this.cursorLineNumber = Ro(this, t => this.cursorPosition.read(t)?.lineNumber ?? null);
    this.onDidType = IY(this);
    this.onDidPaste = IY(this);
    this.scrollTop = tp(this.editor.onDidScrollChange, () => this.editor.getScrollTop());
    this.scrollLeft = tp(this.editor.onDidScrollChange, () => this.editor.getScrollLeft());
    this.layoutInfo = tp(this.editor.onDidLayoutChange, () => this.editor.getLayoutInfo());
    this.layoutInfoContentLeft = this.layoutInfo.map(t => t.contentLeft);
    this.layoutInfoDecorationsLeft = this.layoutInfo.map(t => t.decorationsLeft);
    this.layoutInfoWidth = this.layoutInfo.map(t => t.width);
    this.layoutInfoMinimap = this.layoutInfo.map(t => t.minimap);
    this.layoutInfoVerticalScrollbarWidth = this.layoutInfo.map(t => t.verticalScrollbarWidth);
    this.contentWidth = tp(this.editor.onDidContentSizeChange, () => this.editor.getContentWidth());
    this._widgetCounter = 0;
    this.openedPeekWidgets = Ua(this, 0);
    this._register(this.editor.onBeginUpdate(() => this._beginUpdate()));
    this._register(this.editor.onEndUpdate(() => this._endUpdate()));
    this._register(this.editor.onDidChangeModel(() => {
      this._beginUpdate();
      try {
        this._model.set(this.editor.getModel(), this._currentTransaction);
        this._forceUpdate();
      } finally {
        this._endUpdate();
      }
    }));
    this._register(this.editor.onDidType(t => {
      this._beginUpdate();
      try {
        this._forceUpdate();
        this.onDidType.trigger(this._currentTransaction, t);
      } finally {
        this._endUpdate();
      }
    }));
    this._register(this.editor.onDidPaste(t => {
      this._beginUpdate();
      try {
        this._forceUpdate();
        this.onDidPaste.trigger(this._currentTransaction, t);
      } finally {
        this._endUpdate();
      }
    }));
    this._register(this.editor.onDidChangeModelContent(t => {
      this._beginUpdate();
      try {
        this._versionId.set(this.editor.getModel()?.getVersionId() ?? null, this._currentTransaction, t);
        this._forceUpdate();
      } finally {
        this._endUpdate();
      }
    }));
    this._register(this.editor.onDidChangeCursorSelection(t => {
      this._beginUpdate();
      try {
        this._selections.set(this.editor.getSelections(), this._currentTransaction, t);
        this._forceUpdate();
      } finally {
        this._endUpdate();
      }
    }));
  }
  forceUpdate(e) {
    this._beginUpdate();
    try {
      this._forceUpdate();
      if (e) {
        return e(this._currentTransaction);
      } else {
        return undefined;
      }
    } finally {
      this._endUpdate();
    }
  }
  _forceUpdate() {
    this._beginUpdate();
    try {
      this._model.set(this.editor.getModel(), this._currentTransaction);
      this._versionId.set(this.editor.getModel()?.getVersionId() ?? null, this._currentTransaction, undefined);
      this._selections.set(this.editor.getSelections(), this._currentTransaction, undefined);
    } finally {
      this._endUpdate();
    }
  }
  getOption(e) {
    return tp(this, t => this.editor.onDidChangeConfiguration(i => {
      if (i.hasChanged(e)) {
        t(undefined);
      }
    }), () => this.editor.getOption(e));
  }
  setDecorations(e) {
    const t = new Ut();
    const i = this.editor.createDecorationsCollection();
    t.add(_5e({
      owner: this,
      debugName: () => `Apply decorations from ${e.debugName}`
    }, r => {
      const s = e.read(r);
      i.set(s);
    }));
    t.add({
      dispose: () => {
        i.clear();
      }
    });
    return t;
  }
  createOverlayWidget(e) {
    const t = "observableOverlayWidget" + this._widgetCounter++;
    const i = {
      getDomNode: () => e.domNode,
      getPosition: () => e.position.get(),
      getId: () => t,
      allowEditorOverflow: e.allowEditorOverflow,
      getMinContentWidthInPx: () => e.minContentWidthInPx.get()
    };
    this.editor.addOverlayWidget(i);
    const r = Oc(s => {
      e.position.read(s);
      e.minContentWidthInPx.read(s);
      this.editor.layoutOverlayWidget(i);
    });
    return $i(() => {
      r.dispose();
      this.editor.removeOverlayWidget(i);
    });
  }
  createContentWidget(e) {
    const t = "observableContentWidget" + this._widgetCounter++;
    const i = {
      getDomNode: () => e.domNode,
      getPosition: () => e.position.get(),
      getId: () => t,
      allowEditorOverflow: e.allowEditorOverflow
    };
    this.editor.addContentWidget(i);
    const r = Oc(s => {
      e.position.read(s);
      this.editor.layoutContentWidget(i);
    });
    return $i(() => {
      r.dispose();
      this.editor.removeContentWidget(i);
    });
  }
  observeLineOffsetRange(e, t) {
    const i = this.observePosition(e.map(s => new ar(s.startLineNumber, 1)), t);
    const r = this.observePosition(e.map(s => new ar(s.endLineNumberExclusive + 1, 1)), t);
    return Ro(s => {
      i.read(s);
      r.read(s);
      const o = e.read(s);
      const a = this.model.read(s)?.getLineCount();
      const l = (typeof a !== "undefined" && o.startLineNumber > a ? this.editor.getBottomForLineNumber(a) : this.editor.getTopForLineNumber(o.startLineNumber)) - this.scrollTop.read(s);
      const u = o.isEmpty ? l : this.editor.getBottomForLineNumber(o.endLineNumberExclusive - 1) - this.scrollTop.read(s);
      return new dm(l, u);
    });
  }
  observePosition(e, t) {
    let i = e.get();
    const r = Wze({
      owner: this,
      debugName: () => `topLeftOfPosition${i?.toString()}`,
      equalsFn: Ngt(Koe.equals)
    }, new Koe(0, 0));
    const s = "observablePositionWidget" + this._widgetCounter++;
    const o = document.createElement("div");
    const a = {
      getDomNode: () => o,
      getPosition: () => i ? {
        preference: [0],
        position: e.get()
      } : null,
      getId: () => s,
      allowEditorOverflow: false,
      afterRender: (l, u) => {
        const d = this._model.get();
        if (d && i && i.lineNumber > d.getLineCount()) {
          r.set(new Koe(0, this.editor.getBottomForLineNumber(d.getLineCount()) - this.scrollTop.get()), undefined);
        } else {
          r.set(u ? new Koe(u.left, u.top) : null, undefined);
        }
      }
    };
    this.editor.addContentWidget(a);
    t.add(Oc(l => {
      i = e.read(l);
      this.editor.layoutContentWidget(a);
    }));
    t.add($i(() => {
      this.editor.removeContentWidget(a);
    }));
    return r;
  }
  isTargetHovered(e, t) {
    const i = Ua("isInjectedTextHovered", false);
    t.add(this.editor.onMouseMove(r => {
      const s = e(r);
      i.set(s, undefined);
    }));
    t.add(this.editor.onMouseLeave(r => {
      i.set(false, undefined);
    }));
    return i;
  }
};
