"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/notebookCellEditorPool.js
// Offset: 33448722 (bundle byte offset)
// Size: 3450 bytes
ri();
vr();
rt();
VI();
Qh();
td();
Ei();
si();
Wt();
E_();
Sb();
uki();
lIa = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this.notebookEditor = e;
    this.contextKeyServiceProvider = t;
    this.textModelService = i;
    this._configurationService = r;
    this._instantiationService = s;
    this._editorDisposable = this._register(new uo());
    this._isInitialized = false;
    this._isDisposed = false;
    this._focusedEditorDOM = this.notebookEditor.getDomNode().appendChild(Ct(".cell-editor-part-cache"));
    this._focusedEditorDOM.style.position = "absolute";
    this._focusedEditorDOM.style.top = "-50000px";
    this._focusedEditorDOM.style.width = "1px";
    this._focusedEditorDOM.style.height = "1px";
  }
  _initializeEditor(e) {
    this._editorContextKeyService = this._register(this.contextKeyServiceProvider(this._focusedEditorDOM));
    const t = CSe(this._focusedEditorDOM, Ct(".cell-editor-container"));
    const i = this._register(this._instantiationService.createChild(new EA([wi, this._editorContextKeyService])));
    Ci.inCompositeEditor.bindTo(this._editorContextKeyService).set(true);
    const r = new xbn(this.notebookEditor.getBaseCellEditorOptions(e.language), this.notebookEditor.notebookOptions, this._configurationService);
    this._editor = this._register(i.createInstance(WS, t, {
      ...r.getDefaultValue(),
      dimension: {
        width: 0,
        height: 0
      },
      scrollbar: {
        vertical: "hidden",
        horizontal: "auto",
        handleMouseWheel: false,
        useShadows: false
      }
    }, {
      contributions: this.notebookEditor.creationOptions.cellEditorContributions
    }));
    r.dispose();
    this._isInitialized = true;
  }
  preserveFocusedEditor(e) {
    if (!this._isInitialized) {
      this._initializeEditor(e);
    }
    this._editorDisposable.clear();
    this._focusEditorCancellablePromise?.cancel();
    this._focusEditorCancellablePromise = dw(async t => {
      const i = await this.textModelService.createModelReference(e.uri);
      if (this._isDisposed || t.isCancellationRequested) {
        i.dispose();
        return;
      }
      const r = new Ut();
      r.add(i);
      this._editor.setModel(i.object.textEditorModel);
      this._editor.setSelections(e.getSelections());
      this._editor.focus();
      const s = () => {
        const o = this._editor.getSelections();
        if (o) {
          e.setSelections(o);
        }
        this.notebookEditor.revealInView(e);
        this._editor.setModel(null);
        i.dispose();
      };
      r.add(this._editor.onDidChangeModelContent(o => {
        s();
      }));
      r.add(this._editor.onDidChangeCursorSelection(o => {
        if (o.source === "keyboard" || o.source === "mouse") {
          s();
        }
      }));
      r.add(this.notebookEditor.onDidChangeActiveEditor(() => {
        const o = this.notebookEditor.getActiveCell();
        if (o !== e || o.focusMode !== Tk.Editor) {
          this._editorDisposable.clear();
          this._editor.setModel(null);
          i.dispose();
        }
      }));
      this._editorDisposable.value = r;
    });
  }
  dispose() {
    this._isDisposed = true;
    this._focusEditorCancellablePromise?.cancel();
    super.dispose();
  }
};
lIa = __decorate([__param(2, El), __param(3, Fn), __param(4, ln)], lIa);
