"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/contrib/chatImplicitContext.js
// Offset: 32556242 (bundle byte offset)
// Size: 4506 bytes
Po();
yn();
rt();
zr();
Uc();
Yr();
Yn();
lv();
Oh();
Ei();
ss();
Sb();
Hq();
xS();
SS();
EEa();
kk();
TCi = class extends at {
  static {
    this.ID = "chat.implicitContext";
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.codeEditorService = e;
    this.editorService = t;
    this.chatWidgetService = i;
    this.chatService = r;
    this.chatEditingService = s;
    this.configurationService = o;
    this.ignoredFilesService = a;
    this._currentCancelTokenSource = this._register(new uo());
    this._implicitContextEnablement = this.configurationService.getValue("chat.implicitContext.enabled");
    const l = this._register(new Ut());
    this._register(In.runAndSubscribe(t.onDidActiveEditorChange, () => {
      l.clear();
      const u = this.findActiveCodeEditor();
      if (u) {
        l.add(In.debounce(In.any(u.onDidChangeModel, u.onDidChangeCursorSelection, u.onDidScrollChange), () => {}, 500)(() => this.updateImplicitContext()));
      }
      const d = this.findActiveNotebookEditor();
      if (d) {
        l.add(In.debounce(In.any(d.onDidChangeModel, d.onDidChangeActiveCell), () => {}, 500)(() => this.updateImplicitContext()));
      }
      this.updateImplicitContext();
    }));
    this._register(Oc(u => {
      this.chatEditingService.editingSessionsObs.read(u);
      this.updateImplicitContext();
    }));
    this._register(this.configurationService.onDidChangeConfiguration(u => {
      if (u.affectsConfiguration("chat.implicitContext.enabled")) {
        this._implicitContextEnablement = this.configurationService.getValue("chat.implicitContext.enabled");
        this.updateImplicitContext();
      }
    }));
    this._register(this.chatService.onDidSubmitRequest(({
      chatSessionId: u
    }) => {
      const d = this.chatWidgetService.getWidgetBySessionId(u);
      if (d?.input.implicitContext && this._implicitContextEnablement[d.location] === "first" && d.viewModel?.getItems().length !== 0) {
        d.input.implicitContext.setValue(undefined, false);
      }
    }));
    this._register(this.chatWidgetService.onDidAddWidget(async u => {
      await this.updateImplicitContext(u);
    }));
  }
  findActiveCodeEditor() {
    const e = this.codeEditorService.getActiveCodeEditor();
    if (e) {
      const t = e.getModel();
      if (t?.uri.scheme === _n.vscodeNotebookCell) {
        return;
      }
      if (t) {
        return e;
      }
    }
    for (const t of this.editorService.getVisibleTextEditorControls(0)) {
      let i;
      if (iB(t)) {
        i = t.getModifiedEditor();
      } else if (Ig(t)) {
        i = t;
      } else {
        continue;
      }
      if (i.getModel()) {
        return i;
      }
    }
  }
  findActiveNotebookEditor() {
    return sA(this.editorService.activeEditorPane);
  }
  async updateImplicitContext(e) {
    const t = this._currentCancelTokenSource.value = new Wc();
    const i = this.findActiveCodeEditor();
    const r = i?.getModel();
    const s = i?.getSelection();
    let o;
    let a = false;
    if (r) {
      if (s && !s.isEmpty()) {
        o = {
          uri: r.uri,
          range: s
        };
        a = true;
      } else {
        const m = i?.getVisibleRanges();
        if (m && m.length > 0) {
          let p = m[0];
          m.slice(1).forEach(g => {
            p = p.plusRange(g);
          });
          o = {
            uri: r.uri,
            range: p
          };
        } else {
          o = r.uri;
        }
      }
    }
    const l = this.findActiveNotebookEditor();
    if (l) {
      const m = l.getActiveCell();
      if (m) {
        o = m.uri;
      } else {
        o = l.textModel?.uri;
      }
    }
    const u = o instanceof je ? o : o?.uri;
    if (u && (await this.ignoredFilesService.fileIsIgnored(u, t.token))) {
      o = undefined;
    }
    if (t.token.isCancellationRequested) {
      return;
    }
    const d = e ? [e] : [...this.chatWidgetService.getWidgetsByLocations(zh.Panel), ...this.chatWidgetService.getWidgetsByLocations(zh.EditingSession), ...this.chatWidgetService.getWidgetsByLocations(zh.Editor)];
    for (const m of d) {
      if (!m.input.implicitContext) {
        continue;
      }
      const p = this._implicitContextEnablement[m.location];
      const g = m.viewModel?.getItems().length === 0;
      if (p === "first" && !g) {
        m.input.implicitContext.setValue(undefined, false);
      } else if (p === "always" || p === "first" && g) {
        m.input.implicitContext.setValue(o, a);
      } else if (p === "never") {
        m.input.implicitContext.setValue(undefined, false);
      }
    }
  }
};
TCi = __decorate([__param(0, fl), __param(1, yi), __param(2, M1), __param(3, ES), __param(4, kV), __param(5, Fn), __param(6, xCi)], TCi);
o3f = class extends at {
  get id() {
    if (je.isUri(this.value)) {
      return "vscode.implicit.file";
    } else if (this.value) {
      if (this._isSelection) {
        return "vscode.implicit.selection";
      } else {
        return "vscode.implicit.viewport";
      }
    } else {
      return "vscode.implicit";
    }
  }
  get name() {
    if (je.isUri(this.value)) {
      return `file:${ca(this.value)}`;
    } else if (this.value) {
      return `file:${ca(this.value.uri)}`;
    } else {
      return "implicit";
    }
  }
  get modelDescription() {
    if (je.isUri(this.value)) {
      return "User's active file";
    } else if (this._isSelection) {
      return "User's active selection";
    } else {
      return "User's current visible code";
    }
  }
  get isSelection() {
    return this._isSelection;
  }
  get value() {
    return this._value;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(n) {
    this._enabled = n;
    this._onDidChangeValue.fire();
  }
  constructor(n) {
    super();
    this.kind = "implicit";
    this.isFile = true;
    this._isSelection = false;
    this._onDidChangeValue = new Qe();
    this.onDidChangeValue = this._onDidChangeValue.event;
    this._enabled = true;
    this._value = n;
  }
  setValue(n, e) {
    this._value = n;
    this._isSelection = e;
    this._onDidChangeValue.fire();
  }
  toBaseEntry() {
    return {
      id: this.id,
      name: this.name,
      value: this.value,
      isFile: true,
      modelDescription: this.modelDescription
    };
  }
};
