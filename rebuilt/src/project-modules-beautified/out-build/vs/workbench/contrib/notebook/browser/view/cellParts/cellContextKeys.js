"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellContextKeys.js
// Offset: 33016160 (bundle byte offset)
// Size: 5755 bytes
rt();
Uc();
si();
Wt();
pwu();
Sb();
LQ();
l2e();
VSi();
ph();
i1();
uD();
KSi = class extends JV {
  constructor(e, t) {
    super();
    this.instantiationService = t;
    this.cellContextKeyManager = this._register(this.instantiationService.createInstance(YSi, e, undefined));
  }
  didRenderCell(e) {
    this.cellContextKeyManager.updateForElement(e);
  }
};
KSi = __decorate([__param(1, ln)], KSi);
YSi = class extends at {
  constructor(e, t, i, r) {
    super();
    this.notebookEditor = e;
    this.element = t;
    this._contextKeyService = i;
    this._notebookExecutionStateService = r;
    this.elementDisposables = this._register(new Ut());
    this._contextKeyService.bufferChangeEvents(() => {
      this.cellType = LV.bindTo(this._contextKeyService);
      this.cellEditable = pX.bindTo(this._contextKeyService);
      this.cellFocused = Sgn.bindTo(this._contextKeyService);
      this.cellEditorFocused = Yq.bindTo(this._contextKeyService);
      this.markdownEditMode = kgn.bindTo(this._contextKeyService);
      this.cellRunState = A_i.bindTo(this._contextKeyService);
      this.cellExecuting = vpu.bindTo(this._contextKeyService);
      this.cellHasOutputs = zEe.bindTo(this._contextKeyService);
      this.cellContentCollapsed = y_i.bindTo(this._contextKeyService);
      this.cellOutputCollapsed = X0a.bindTo(this._contextKeyService);
      this.cellLineNumbers = Z0a.bindTo(this._contextKeyService);
      this.cellGeneratedByChat = _pu.bindTo(this._contextKeyService);
      this.cellResource = pxf.bindTo(this._contextKeyService);
      this.cellHasErrorDiagnostics = Egn.bindTo(this._contextKeyService);
      if (t) {
        this.updateForElement(t);
      }
    });
    this._register(this._notebookExecutionStateService.onDidChangeExecution(s => {
      if (s.type === vJ.cell && this.element && s.affectsCell(this.element.uri)) {
        this.updateForExecutionState();
      }
    }));
  }
  updateForElement(e) {
    this.elementDisposables.clear();
    this.element = e;
    if (!e) {
      return;
    }
    this.elementDisposables.add(e.onDidChangeState(i => this.onDidChangeState(i)));
    if (e instanceof jJ) {
      this.elementDisposables.add(e.onDidChangeOutputs(() => this.updateForOutputs()));
      this.elementDisposables.add(Oc(i => {
        this.cellHasErrorDiagnostics.set(!!i.readObservable(e.executionErrorDiagnostic));
      }));
    }
    this.elementDisposables.add(this.notebookEditor.onDidChangeActiveCell(() => this.updateForFocusState()));
    if (this.element instanceof GV) {
      this.cellType.set("markup");
    } else if (this.element instanceof jJ) {
      this.cellType.set("code");
    }
    this._contextKeyService.bufferChangeEvents(() => {
      this.updateForFocusState();
      this.updateForExecutionState();
      this.updateForEditState();
      this.updateForCollapseState();
      this.updateForOutputs();
      this.updateForChat();
      this.cellLineNumbers.set(this.element.lineNumbers);
      this.cellResource.set(this.element.uri.toString());
    });
    const t = C8.get(this.notebookEditor);
    if (t) {
      this.elementDisposables.add(t.onDidChangePromptCache(i => {
        if (i.cell.toString() === this.element.uri.toString()) {
          this.updateForChat();
        }
      }));
    }
  }
  onDidChangeState(e) {
    this._contextKeyService.bufferChangeEvents(() => {
      if (e.internalMetadataChanged) {
        this.updateForExecutionState();
      }
      if (e.editStateChanged) {
        this.updateForEditState();
      }
      if (e.focusModeChanged) {
        this.updateForFocusState();
      }
      if (e.cellLineNumberChanged) {
        this.cellLineNumbers.set(this.element.lineNumbers);
      }
      if (e.inputCollapsedChanged || e.outputCollapsedChanged) {
        this.updateForCollapseState();
      }
    });
  }
  updateForFocusState() {
    if (!this.element) {
      return;
    }
    const e = this.notebookEditor.getActiveCell();
    this.cellFocused.set(this.notebookEditor.getActiveCell() === this.element);
    if (e === this.element) {
      this.cellEditorFocused.set(this.element.focusMode === Tk.Editor);
    } else {
      this.cellEditorFocused.set(false);
    }
  }
  updateForExecutionState() {
    if (!this.element) {
      return;
    }
    const e = this.element.internalMetadata;
    this.cellEditable.set(!this.notebookEditor.isReadOnly);
    const t = this._notebookExecutionStateService.getCellExecution(this.element.uri);
    if (this.element instanceof GV) {
      this.cellRunState.reset();
      this.cellExecuting.reset();
    } else if (t?.state === XE.Executing) {
      this.cellRunState.set("executing");
      this.cellExecuting.set(true);
    } else if (t?.state === XE.Pending || t?.state === XE.Unconfirmed) {
      this.cellRunState.set("pending");
      this.cellExecuting.set(true);
    } else if (e.lastRunSuccess === true) {
      this.cellRunState.set("succeeded");
      this.cellExecuting.set(false);
    } else if (e.lastRunSuccess === false) {
      this.cellRunState.set("failed");
      this.cellExecuting.set(false);
    } else {
      this.cellRunState.set("idle");
      this.cellExecuting.set(false);
    }
  }
  updateForEditState() {
    if (this.element) {
      if (this.element instanceof GV) {
        this.markdownEditMode.set(this.element.getEditState() === aw.Editing);
      } else {
        this.markdownEditMode.set(false);
      }
    }
  }
  updateForCollapseState() {
    if (this.element) {
      this.cellContentCollapsed.set(!!this.element.isInputCollapsed);
      this.cellOutputCollapsed.set(!!this.element.isOutputCollapsed);
    }
  }
  updateForOutputs() {
    if (this.element instanceof jJ) {
      this.cellHasOutputs.set(this.element.outputsViewModels.length > 0);
    } else {
      this.cellHasOutputs.set(false);
    }
  }
  updateForChat() {
    const e = C8.get(this.notebookEditor);
    if (!e || !this.element) {
      this.cellGeneratedByChat.set(false);
      return;
    }
    this.cellGeneratedByChat.set(e.isCellGeneratedByChat(this.element));
  }
};
YSi = __decorate([__param(2, wi), __param(3, pE)], YSi);
