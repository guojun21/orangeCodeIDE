"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/cellEditorOptions.js
// Offset: 33423174 (bundle byte offset)
// Size: 2039 bytes
yn();
rt();
np();
i6f = class kzb extends at {
  static {
    this.fixedEditorOptions = {
      scrollBeyondLastLine: false,
      scrollbar: {
        verticalScrollbarSize: 14,
        horizontal: "auto",
        useShadows: true,
        verticalHasArrows: false,
        horizontalHasArrows: false,
        alwaysConsumeMouseWheel: false
      },
      renderLineHighlightOnlyWhenFocus: true,
      overviewRulerLanes: 0,
      lineDecorationsWidth: 0,
      folding: true,
      fixedOverflowWidgets: true,
      minimap: {
        enabled: false
      },
      renderValidationDecorations: "on",
      lineNumbersMinChars: 3
    };
  }
  get value() {
    return this._value;
  }
  constructor(e, t, i, r) {
    super();
    this.notebookEditor = e;
    this.notebookOptions = t;
    this.configurationService = i;
    this.language = r;
    this._localDisposableStore = this._register(new Ut());
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._register(i.onDidChangeConfiguration(s => {
      if (s.affectsConfiguration("editor") || s.affectsConfiguration("notebook")) {
        this._recomputeOptions();
      }
    }));
    this._register(t.onDidChangeOptions(s => {
      if (s.cellStatusBarVisibility || s.editorTopPadding || s.editorOptionsCustomizations) {
        this._recomputeOptions();
      }
    }));
    this._register(this.notebookEditor.onDidChangeModel(() => {
      this._localDisposableStore.clear();
      if (this.notebookEditor.hasModel()) {
        this._localDisposableStore.add(this.notebookEditor.onDidChangeOptions(() => {
          this._recomputeOptions();
        }));
        this._recomputeOptions();
      }
    }));
    if (this.notebookEditor.hasModel()) {
      this._localDisposableStore.add(this.notebookEditor.onDidChangeOptions(() => {
        this._recomputeOptions();
      }));
    }
    this._value = this._computeEditorOptions();
  }
  _recomputeOptions() {
    this._value = this._computeEditorOptions();
    this._onDidChange.fire();
  }
  _computeEditorOptions() {
    const e = mh(this.configurationService.getValue("editor", {
      overrideIdentifier: this.language
    }));
    const t = this.notebookOptions.getDisplayOptions().editorOptionsCustomizations;
    const i = {};
    if (t) {
      for (const s in t) {
        if (s.indexOf("editor.") === 0) {
          i[s.substring(7)] = t[s];
        }
      }
    }
    return Object.freeze({
      ...e,
      ...kzb.fixedEditorOptions,
      ...i,
      padding: {
        top: 12,
        bottom: 12
      },
      readOnly: this.notebookEditor.isReadOnly
    });
  }
};
