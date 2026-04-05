"use strict";

// Module: out-build/vs/workbench/browser/codeeditor.js
// Offset: 33428058 (bundle byte offset)
// Size: 3631 bytes
yn();
rt();
Yr();
lv();
yq();
bv();
r6f();
dr();
si();
Wt();
ka();
ss();
Rbn = class extends at {
  static {
    nIa = this;
  }
  constructor(e) {
    super();
    this.editorService = e;
    this._onHighlightRemoved = this._register(new Qe());
    this.onHighlightRemoved = this._onHighlightRemoved.event;
    this.rangeHighlightDecorationId = null;
    this.editor = null;
    this.editorDisposables = this._register(new Ut());
  }
  removeHighlightRange() {
    if (this.editor && this.rangeHighlightDecorationId) {
      const e = this.rangeHighlightDecorationId;
      this.editor.changeDecorations(t => {
        t.removeDecoration(e);
      });
      this._onHighlightRemoved.fire();
    }
    this.rangeHighlightDecorationId = null;
  }
  highlightRange(e, t) {
    t = t ?? this.getEditor(e);
    if (Ig(t)) {
      this.doHighlightRange(t, e);
    } else if (tCt(t) && Ig(t.activeCodeEditor)) {
      this.doHighlightRange(t.activeCodeEditor, e);
    }
  }
  doHighlightRange(e, t) {
    this.removeHighlightRange();
    e.changeDecorations(i => {
      this.rangeHighlightDecorationId = i.addDecoration(t.range, this.createRangeHighlightDecoration(t.isWholeLine));
    });
    this.setEditor(e);
  }
  getEditor(e) {
    const t = this.editorService.activeEditor?.resource;
    if (t && Zc(t, e.resource) && Ig(this.editorService.activeTextEditorControl)) {
      return this.editorService.activeTextEditorControl;
    }
  }
  setEditor(e) {
    if (this.editor !== e) {
      this.editorDisposables.clear();
      this.editor = e;
      this.editorDisposables.add(this.editor.onDidChangeCursorPosition(t => {
        if (t.reason === 0 || t.reason === 3 || t.reason === 5 || t.reason === 6) {
          this.removeHighlightRange();
        }
      }));
      this.editorDisposables.add(this.editor.onDidChangeModel(() => {
        this.removeHighlightRange();
      }));
      this.editorDisposables.add(this.editor.onDidDispose(() => {
        this.removeHighlightRange();
        this.editor = null;
      }));
    }
  }
  static {
    this._WHOLE_LINE_RANGE_HIGHLIGHT = Zh.register({
      description: "codeeditor-range-highlight-whole",
      stickiness: 1,
      className: "rangeHighlight",
      isWholeLine: true
    });
  }
  static {
    this._RANGE_HIGHLIGHT = Zh.register({
      description: "codeeditor-range-highlight",
      stickiness: 1,
      className: "rangeHighlight"
    });
  }
  createRangeHighlightDecoration(e = true) {
    if (e) {
      return nIa._WHOLE_LINE_RANGE_HIGHLIGHT;
    } else {
      return nIa._RANGE_HIGHLIGHT;
    }
  }
  dispose() {
    super.dispose();
    if (this.editor?.getModel()) {
      this.removeHighlightRange();
      this.editor = null;
    }
  }
};
Rbn = nIa = __decorate([__param(0, yi)], Rbn);
Ski = class extends __u {
  constructor(e, t, i, r) {
    super(i && r.lookupKeybinding(i) ? `${t} (${r.lookupKeybinding(i).getLabel()})` : t);
    this.editor = e;
  }
  getId() {
    return "editor.overlayWidget.floatingClickWidget";
  }
  getPosition() {
    return {
      preference: 1
    };
  }
  render() {
    super.render();
    this.editor.addOverlayWidget(this);
  }
  dispose() {
    this.editor.removeOverlayWidget(this);
    super.dispose();
  }
};
Ski = __decorate([__param(3, mo)], Ski);
iIa = class extends C_u {
  constructor(e, t, i) {
    const r = t.map(s => ({
      ...s,
      label: s.action.id && i.lookupKeybinding(s.action.id) ? `${s.label} (${i.lookupKeybinding(s.action.id).getLabel()})` : s.label
    }));
    super(r);
    this.editor = e;
  }
  getId() {
    return "editor.overlayWidget.multiButtonFloatingWidget";
  }
  getPosition() {
    return {
      preference: 1
    };
  }
  render() {
    super.render();
    this.editor.addOverlayWidget(this);
  }
  dispose() {
    this.editor.removeOverlayWidget(this);
    super.dispose();
  }
};
iIa = __decorate([__param(2, mo)], iIa);
Pbn = class extends Cki {
  static {
    this.ID = "editor.contrib.floatingClickMenu";
  }
  constructor(e, t, i, r) {
    super(st.EditorContent, i, r);
    this.editor = e;
    this.instantiationService = t;
    this.render();
  }
  createWidget(e) {
    return this.instantiationService.createInstance(Ski, this.editor, e.label, e.id);
  }
  createMultiWidget(e) {
    const t = e.map(i => ({
      label: i.label,
      action: i
    }));
    return this.instantiationService.createInstance(iIa, this.editor, t);
  }
  isVisible() {
    return !(this.editor instanceof q3) && this.editor?.hasModel() && !this.editor.getOption(63);
  }
  getActionArg() {
    return this.editor.getModel()?.uri;
  }
};
Pbn = __decorate([__param(1, ln), __param(2, xd), __param(3, wi)], Pbn);
