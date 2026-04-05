"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/controller/chat/notebookChatController.js
// Offset: 32963659 (bundle byte offset)
// Size: 15165 bytes
ri();
vr();
Po();
yn();
rt();
cu();
zr();
sE();
Yr();
Sx();
Js();
Yn();
VI();
db();
Tg();
Ku();
Hk();
hd();
Ht();
si();
Wt();
kr();
SS();
xS();
Ayi();
dwu();
S9f();
hbn();
JSi();
PU();
ph();
uD();
R9f = class extends at {
  set afterModelPosition(n) {
    this.notebookViewZone.afterModelPosition = n;
  }
  get afterModelPosition() {
    return this.notebookViewZone.afterModelPosition;
  }
  set heightInPx(n) {
    this.notebookViewZone.heightInPx = n;
  }
  get heightInPx() {
    return this.notebookViewZone.heightInPx;
  }
  get editingCell() {
    return this._editingCell;
  }
  constructor(n, e, t, i, r, s, o, a) {
    super();
    this._notebookEditor = n;
    this.id = e;
    this.notebookViewZone = t;
    this.domNode = i;
    this.widgetContainer = r;
    this.inlineChatWidget = s;
    this.parentEditor = o;
    this._languageService = a;
    this._editingCell = null;
    const l = () => {
      if (this.heightInPx !== s.contentHeight) {
        this.heightInPx = s.contentHeight;
        this._notebookEditor.changeViewZones(u => {
          u.layoutZone(e);
        });
        this._layoutWidget(s, r);
      }
    };
    this._register(s.onDidChangeHeight(() => {
      l();
    }));
    this._register(s.chatWidget.onDidChangeHeight(() => {
      l();
    }));
    this.heightInPx = s.contentHeight;
    this._layoutWidget(s, r);
  }
  layout() {
    this._layoutWidget(this.inlineChatWidget, this.widgetContainer);
  }
  restoreEditingCell(n) {
    this._editingCell = n;
    const e = this._notebookEditor.deltaCellDecorations([], [{
      handle: this._editingCell.handle,
      options: {
        className: "nb-chatGenerationHighlight",
        outputClassName: "nb-chatGenerationHighlight"
      }
    }]);
    this._register($i(() => {
      this._notebookEditor.deltaCellDecorations(e, []);
    }));
  }
  hasFocus() {
    return this.inlineChatWidget.hasFocus();
  }
  focus() {
    this.updateNotebookEditorFocusNSelections();
    this.inlineChatWidget.focus();
  }
  updateNotebookEditorFocusNSelections() {
    this._notebookEditor.focusContainer(true);
    this._notebookEditor.setFocus({
      start: this.afterModelPosition,
      end: this.afterModelPosition
    });
    this._notebookEditor.setSelections([{
      start: this.afterModelPosition,
      end: this.afterModelPosition
    }]);
  }
  getEditingCell() {
    return this._editingCell;
  }
  async getOrCreateEditingCell() {
    if (this._editingCell) {
      const i = this._notebookEditor.codeEditors.find(r => r[0] === this._editingCell)?.[1];
      if (i?.hasModel()) {
        return {
          cell: this._editingCell,
          editor: i
        };
      } else {
        return undefined;
      }
    }
    if (!this._notebookEditor.hasModel()) {
      return;
    }
    const n = this.inlineChatWidget.hasFocus();
    this._editingCell = a2e(this._languageService, this._notebookEditor, this.afterModelPosition, zd.Code, "above");
    if (!this._editingCell) {
      return;
    }
    await this._notebookEditor.revealFirstLineIfOutsideViewport(this._editingCell);
    const e = this._notebookEditor.deltaCellDecorations([], [{
      handle: this._editingCell.handle,
      options: {
        className: "nb-chatGenerationHighlight",
        outputClassName: "nb-chatGenerationHighlight"
      }
    }]);
    this._register($i(() => {
      this._notebookEditor.deltaCellDecorations(e, []);
    }));
    if (n) {
      this.focus();
    }
    const t = this._notebookEditor.codeEditors.find(i => i[0] === this._editingCell)?.[1];
    if (t?.hasModel()) {
      return {
        cell: this._editingCell,
        editor: t
      };
    }
  }
  async discardChange() {
    if (this._notebookEditor.hasModel() && this._editingCell) {
      E9f(this._notebookEditor, this._editingCell);
    }
  }
  _layoutWidget(n, e) {
    const i = this._notebookEditor.notebookOptions.getLayoutConfiguration().cellRightMargin;
    const r = this._notebookEditor.notebookOptions.getCellEditorContainerLeftMargin();
    const o = Math.min(640, this._notebookEditor.getLayoutInfo().width - r - i);
    n.layout(new Lu(o, this.heightInPx));
    n.domNode.style.width = `${o}px`;
    e.style.left = `${r}px`;
  }
  dispose() {
    this._notebookEditor.changeViewZones(n => {
      n.removeZone(this.id);
    });
    this.domNode.remove();
    super.dispose();
  }
};
Xxa = class {
  static str(n) {
    return `${n.viewType}/${n.uri.toString()}`;
  }
  static obj(n) {
    const e = n.indexOf("/");
    return {
      viewType: n.substring(0, e),
      uri: je.parse(n.substring(e + 1))
    };
  }
};
C8 = class extends at {
  static {
    cpe = this;
  }
  static {
    this.id = "workbench.notebook.chatController";
  }
  static {
    this.counter = 0;
  }
  static get(e) {
    return e.getContribution(cpe.id);
  }
  static {
    this._storageKey = "inline-chat-history";
  }
  static {
    this._promptHistory = [];
  }
  constructor(e, t, i, r, s, o, a, l, u) {
    super();
    this._notebookEditor = e;
    this._instantiationService = t;
    this._contextKeyService = i;
    this._editorWorkerService = r;
    this._modelService = s;
    this._languageService = o;
    this._executionStateService = a;
    this._storageService = l;
    this._chatService = u;
    this._historyOffset = -1;
    this._historyCandidate = "";
    this._promptCache = new Fb(1000, 0.7);
    this._onDidChangePromptCache = this._register(new Qe());
    this.onDidChangePromptCache = this._onDidChangePromptCache.event;
    this._userEditingDisposables = this._register(new Ut());
    this._widgetDisposableStore = this._register(new Ut());
    this._model = this._register(new uo());
    this._ctxHasActiveRequest = Kxa.bindTo(this._contextKeyService);
    this._ctxCellWidgetFocused = Yce.bindTo(this._contextKeyService);
    this._ctxUserDidEdit = Yxa.bindTo(this._contextKeyService);
    this._ctxOuterFocusPosition = _rt.bindTo(this._contextKeyService);
    this._registerFocusTracker();
    cpe._promptHistory = JSON.parse(this._storageService.get(cpe._storageKey, 0, "[]"));
    this._historyUpdate = d => {
      const m = cpe._promptHistory.indexOf(d);
      if (m >= 0) {
        cpe._promptHistory.splice(m, 1);
      }
      cpe._promptHistory.unshift(d);
      this._historyOffset = -1;
      this._historyCandidate = "";
      this._storageService.store(cpe._storageKey, JSON.stringify(cpe._promptHistory), 0, 0);
    };
  }
  _registerFocusTracker() {
    this._register(this._notebookEditor.onDidChangeFocus(() => {
      if (!this._widget) {
        this._ctxOuterFocusPosition.set("");
        return;
      }
      const e = this._widget.afterModelPosition;
      const t = this._notebookEditor.getFocus().start;
      if (t + 1 === e) {
        this._ctxOuterFocusPosition.set("above");
      } else if (t === e) {
        this._ctxOuterFocusPosition.set("below");
      } else {
        this._ctxOuterFocusPosition.set("");
      }
    }));
  }
  run(e, t, i) {
    if (this._widget) {
      if (this._widget.afterModelPosition !== e) {
        const r = As(this._widget.domNode);
        this._disposeWidget();
        r_(r, () => {
          this._createWidget(e, t, i, undefined);
        });
      }
      return;
    }
    this._createWidget(e, t, i, undefined);
  }
  restore(e, t) {
    if (!this._notebookEditor.hasModel()) {
      return;
    }
    const i = this._notebookEditor.textModel.cells.indexOf(e.model);
    if (!(i < 0)) {
      if (this._widget) {
        if (this._widget.afterModelPosition !== i) {
          this._disposeWidget();
          const r = As(this._widget.domNode);
          r_(r, () => {
            this._createWidget(i, t, false, e);
          });
        }
        return;
      }
      this._createWidget(i, t, false, e);
    }
  }
  _disposeWidget() {
    this._widget?.dispose();
    this._widget = undefined;
    this._widgetDisposableStore.clear();
    this._historyOffset = -1;
    this._historyCandidate = "";
  }
  _createWidget(e, t, i, r) {
    if (!this._notebookEditor.hasModel()) {
      return;
    }
    this._widgetDisposableStore.clear();
    const s = document.createElement("div");
    s.classList.add("monaco-editor");
    const o = document.createElement("div");
    o.style.position = "absolute";
    s.appendChild(o);
    this._focusTracker = this._widgetDisposableStore.add(CC(s));
    this._widgetDisposableStore.add(this._focusTracker.onDidFocus(() => {
      this._updateNotebookEditorFocusNSelections();
    }));
    const a = document.createElement("div");
    const l = this._widgetDisposableStore.add(this._instantiationService.createInstance(WS, a, {}, {
      isSimpleWidget: true
    }));
    const u = `notebook-chat-input-${cpe.counter++}`;
    const m = this._notebookEditor.textModel.uri.with({
      scheme: _n.untitled,
      fragment: u
    });
    const p = this._modelService.createModel("", null, m, false);
    l.setModel(p);
    const g = this._widgetDisposableStore.add(this._instantiationService.createInstance(dbn, {
      location: zh.Notebook,
      resolveData: () => {
        const f = this.getSessionInputUri();
        if (f) {
          return {
            type: zh.Notebook,
            sessionInputUri: f
          };
        }
      }
    }, {
      statusMenuId: Zxa,
      chatWidgetViewOptions: {
        rendererOptions: {
          renderTextEditsAsSummary: f => Zc(f, this._widget?.parentEditor.getModel()?.uri) || Zc(f, this._notebookEditor.textModel?.uri)
        },
        menus: {
          telemetrySource: "notebook-generate-cell"
        }
      }
    }));
    g.placeholder = _(9136, null);
    g.updateInfo(_(9137, null));
    o.appendChild(g.domNode);
    this._notebookEditor.changeViewZones(f => {
      const A = {
        afterModelPosition: e,
        heightInPx: 80,
        domNode: s
      };
      const w = f.addZone(A);
      this._scrollWidgetIntoView(e);
      this._widget = new R9f(this._notebookEditor, w, A, s, o, g, l, this._languageService);
      if (r) {
        this._widget.restoreEditingCell(r);
        this._updateUserEditingState();
      }
      this._ctxCellWidgetFocused.set(true);
      nC(() => {
        this._focusWidget();
      }, 0, this._store);
      this._sessionCtor = dw(async C => {
        await this._startSession(C);
        Kd(this._model.value);
        const x = this._model.value;
        this._widget?.inlineChatWidget.setChatModel(x);
        if (l.hasModel()) {
          if (this._widget) {
            this._focusWidget();
          }
          if (this._widget && t) {
            this._widget.inlineChatWidget.value = t;
            if (i) {
              this.acceptInput();
            }
          }
        }
      });
    });
  }
  async _startSession(e) {
    if (!this._model.value && (this._model.value = this._chatService.startSession(zh.Editor, e), !this._model.value)) {
      throw new Error("Failed to start chat session");
    }
    this._strategy = new P9f();
  }
  _scrollWidgetIntoView(e) {
    if (e === 0 || this._notebookEditor.getLength() === 0) {
      this._notebookEditor.revealOffsetInCenterIfOutsideViewport(0);
    } else {
      const t = this._notebookEditor.cellAt(Math.min(e - 1, this._notebookEditor.getLength() - 1));
      if (t) {
        const i = this._notebookEditor.getAbsoluteTopOfElement(t);
        const r = this._notebookEditor.getHeightOfElement(t);
        this._notebookEditor.revealOffsetInCenterIfOutsideViewport(i + r + 48);
      }
    }
  }
  _focusWidget() {
    if (this._widget) {
      this._updateNotebookEditorFocusNSelections();
      this._widget.focus();
    }
  }
  _updateNotebookEditorFocusNSelections() {
    if (this._widget) {
      this._widget.updateNotebookEditorFocusNSelections();
    }
  }
  hasSession(e) {
    return this._model.value === e;
  }
  getSessionInputUri() {
    return this._widget?.parentEditor.getModel()?.uri;
  }
  async acceptInput() {
    Kd(this._widget);
    await this._sessionCtor;
    Kd(this._model.value);
    Kd(this._strategy);
    const e = this._widget.inlineChatWidget.value;
    this._historyUpdate(e);
    const t = this._widget.parentEditor;
    const i = t.getModel();
    if (!t.hasModel() || !i) {
      return;
    }
    if (this._widget.editingCell && this._widget.editingCell.textBuffer.getLength() > 0) {
      (await this._widget.editingCell.resolveTextModel()).setValue("");
    }
    const r = this._widget.editingCell ? this._notebookEditor.getCellIndex(this._widget.editingCell) : undefined;
    if (r !== undefined) {
      this._notebookEditor.setSelections([{
        start: r,
        end: r + 1
      }]);
    } else {
      this._notebookEditor.setSelections([{
        start: this._widget.afterModelPosition,
        end: this._widget.afterModelPosition
      }]);
    }
    this._ctxHasActiveRequest.set(true);
    this._activeRequestCts?.cancel();
    this._activeRequestCts = new Wc();
    const s = new Ut();
    try {
      this._ctxHasActiveRequest.set(true);
      const o = new yoe();
      const a = J_.create();
      const l = new _Fn();
      const u = new Wc(this._activeRequestCts.token);
      const d = new wy();
      const m = await this._widget.inlineChatWidget.chatWidget.acceptInput();
      if (m) {
        let g = 0;
        s.add(m.onDidChange(f => {
          if (m.isCanceled) {
            u.cancel();
            d.complete();
            return;
          }
          if (m.isComplete) {
            d.complete();
            return;
          }
          const A = m.response.value.map(C => C.kind === "textEditGroup" ? C.edits : []).flat();
          const w = A.slice(g);
          if (w.length !== 0) {
            g = A.length;
            l.update(a.elapsed());
            a.reset();
            o.queue(async () => {
              for (const C of w) {
                await this._makeChanges(C, {
                  duration: l.value,
                  token: u.token
                });
              }
            });
          }
        }));
      }
      await d.p;
      await o.whenIdle();
      this._userEditingDisposables.clear();
      const p = this._widget.getEditingCell();
      if (p) {
        this._userEditingDisposables.add(p.model.onDidChangeContent(() => this._updateUserEditingState()));
        this._userEditingDisposables.add(p.model.onDidChangeLanguage(() => this._updateUserEditingState()));
        this._userEditingDisposables.add(p.model.onDidChangeMetadata(() => this._updateUserEditingState()));
        this._userEditingDisposables.add(p.model.onDidChangeInternalMetadata(() => this._updateUserEditingState()));
        this._userEditingDisposables.add(p.model.onDidChangeOutputs(() => this._updateUserEditingState()));
        this._userEditingDisposables.add(this._executionStateService.onDidChangeExecution(g => {
          if (g.type === vJ.cell && g.affectsCell(p.uri)) {
            this._updateUserEditingState();
          }
        }));
      }
    } catch {} finally {
      s.dispose();
      this._ctxHasActiveRequest.set(false);
      this._widget.inlineChatWidget.updateInfo("");
      this._widget.inlineChatWidget.updateToolbar(true);
    }
  }
  async _makeChanges(e, t) {
    Kd(this._strategy);
    Kd(this._widget);
    const i = await this._widget.getOrCreateEditingCell();
    if (!i) {
      return;
    }
    const r = i.editor;
    const s = await this._editorWorkerService.computeMoreMinimalEdits(r.getModel().uri, e);
    if (s?.length === 0) {
      return;
    }
    const a = (!t && s ? s : e).map(Zbe.asEditOperation);
    try {
      if (t) {
        await this._strategy.makeProgressiveChanges(r, a, t);
      } else {
        await this._strategy.makeChanges(r, a);
      }
    } finally {}
  }
  _updateUserEditingState() {
    this._ctxUserDidEdit.set(true);
  }
  async acceptSession() {
    Kd(this._model);
    Kd(this._strategy);
    if (!this._widget?.parentEditor?.hasModel()) {
      return;
    }
    const t = this._widget?.getEditingCell();
    if (t && this._notebookEditor.hasModel()) {
      const i = Xxa.str({
        uri: t.uri,
        viewType: this._notebookEditor.textModel.viewType
      });
      if (this._widget?.inlineChatWidget.value) {
        this._promptCache.set(i, this._widget.inlineChatWidget.value);
      }
      this._onDidChangePromptCache.fire({
        cell: t.uri
      });
    }
    try {
      this._model.clear();
    } catch {}
    this.dismiss(false);
  }
  async focusAbove() {
    if (!this._widget) {
      return;
    }
    const t = this._widget.afterModelPosition - 1;
    if (t < 0) {
      return;
    }
    const i = this._notebookEditor.cellAt(t);
    if (i) {
      await this._notebookEditor.focusNotebookCell(i, "editor");
    }
  }
  async focusNext() {
    if (!this._widget) {
      return;
    }
    const e = this._widget.afterModelPosition;
    const t = this._notebookEditor.cellAt(e);
    if (t) {
      await this._notebookEditor.focusNotebookCell(t, "editor");
    }
  }
  hasFocus() {
    return this._widget?.hasFocus() ?? false;
  }
  focus() {
    this._focusWidget();
  }
  focusNearestWidget(e, t) {
    switch (t) {
      case "above":
        if (this._widget?.afterModelPosition === e) {
          this._focusWidget();
        }
        break;
      case "below":
        if (this._widget?.afterModelPosition === e + 1) {
          this._focusWidget();
        }
        break;
      default:
        break;
    }
  }
  populateHistory(e) {
    if (!this._widget) {
      return;
    }
    const t = cpe._promptHistory.length;
    if (t === 0) {
      return;
    }
    if (this._historyOffset === -1) {
      this._historyCandidate = this._widget.inlineChatWidget.value;
    }
    const i = this._historyOffset + (e ? 1 : -1);
    if (i >= t) {
      return;
    }
    let r;
    if (i < 0) {
      r = this._historyCandidate;
      this._historyOffset = -1;
    } else {
      r = cpe._promptHistory[i];
      this._historyOffset = i;
    }
    this._widget.inlineChatWidget.value = r;
    this._widget.inlineChatWidget.selectAll();
  }
  async cancelCurrentRequest(e) {
    this._activeRequestCts?.cancel();
  }
  getEditingCell() {
    return this._widget?.getEditingCell();
  }
  discard() {
    this._activeRequestCts?.cancel();
    this._widget?.discardChange();
    this.dismiss(true);
  }
  dismiss(e) {
    const t = this._widget;
    const i = t?.afterModelPosition;
    const r = this._notebookEditor.getFocus();
    const s = r.start === i && r.end === i;
    if (t && s) {
      const o = t.getEditingCell();
      const a = o && !e;
      const l = i === 0 && this._notebookEditor.getLength() > 0;
      const u = i !== 0 && this._notebookEditor.cellAt(i - 1);
      if (a) {
        this._notebookEditor.focusNotebookCell(o, "container");
      } else if (l) {
        this._notebookEditor.focusNotebookCell(this._notebookEditor.cellAt(0), "container");
      } else if (u) {
        this._notebookEditor.focusNotebookCell(this._notebookEditor.cellAt(i - 1), "container");
      }
    }
    this._ctxCellWidgetFocused.set(false);
    this._ctxUserDidEdit.set(false);
    this._sessionCtor?.cancel();
    this._sessionCtor = undefined;
    this._model.clear();
    this._widget?.dispose();
    this._widget = undefined;
    this._widgetDisposableStore.clear();
  }
  isCellGeneratedByChat(e) {
    if (!this._notebookEditor.hasModel()) {
      return false;
    }
    const t = Xxa.str({
      uri: e.uri,
      viewType: this._notebookEditor.textModel.viewType
    });
    return this._promptCache.has(t);
  }
  getPromptFromCache(e) {
    if (!this._notebookEditor.hasModel()) {
      return;
    }
    const t = Xxa.str({
      uri: e.uri,
      viewType: this._notebookEditor.textModel.viewType
    });
    return this._promptCache.get(t);
  }
  dispose() {
    this.dismiss(false);
    super.dispose();
  }
};
C8 = cpe = __decorate([__param(1, ln), __param(2, wi), __param(3, c_), __param(4, Il), __param(5, Jl), __param(6, pE), __param(7, Hi), __param(8, ES)], C8);
P9f = class {
  constructor() {
    this._editCount = 0;
  }
  async makeProgressiveChanges(n, e, t) {
    if (++this._editCount === 1) {
      n.pushUndoStop();
    }
    const i = t.duration / 1000;
    for (const r of e) {
      const o = acu(r.text ?? "") / i;
      await _9f(n.getModel(), C9f(new D5e(), r, o, t.token));
    }
  }
  async makeChanges(n, e) {
    const t = i => {
      let r = null;
      for (const s of i) {
        r = !r || r.isBefore(s.range.getEndPosition()) ? s.range.getEndPosition() : r;
      }
      return r && [Vl.fromPositions(r)];
    };
    if (++this._editCount === 1) {
      n.pushUndoStop();
    }
    n.executeEdits("inline-chat-live", e, t);
  }
};
HJ(C8.id, C8);
