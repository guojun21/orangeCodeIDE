"use strict";

// Module: out-build/vs/editor/contrib/gotoSymbol/browser/symbolNavigation.js
// Offset: 25072957 (bundle byte offset)
// Size: 3073 bytes
yn();
rt();
Yr();
Cu();
Oh();
ts();
Ht();
si();
Er();
Wt();
ka();
Hw();
So();
cla = new Sn("hasSymbols", false, _(1237, null));
sgi = xi("ISymbolNavigationService");
lla = class {
  constructor(e, t, i, r) {
    this._editorService = t;
    this._notificationService = i;
    this._keybindingService = r;
    this._currentModel = undefined;
    this._currentIdx = -1;
    this._ignoreEditorChange = false;
    this._ctxHasSymbols = cla.bindTo(e);
  }
  reset() {
    this._ctxHasSymbols.reset();
    this._currentState?.dispose();
    this._currentMessage?.close();
    this._currentModel = undefined;
    this._currentIdx = -1;
  }
  put(e) {
    const t = e.parent.parent;
    if (t.references.length <= 1) {
      this.reset();
      return;
    }
    this._currentModel = t;
    this._currentIdx = t.references.indexOf(e);
    this._ctxHasSymbols.set(true);
    this._showMessage();
    const i = new ula(this._editorService);
    const r = i.onDidChange(s => {
      if (this._ignoreEditorChange) {
        return;
      }
      const o = this._editorService.getActiveCodeEditor();
      if (!o) {
        return;
      }
      const a = o.getModel();
      const l = o.getPosition();
      if (!a || !l) {
        return;
      }
      let u = false;
      let d = false;
      for (const m of t.references) {
        if (Zc(m.uri, a.uri)) {
          u = true;
          d = d || Zt.containsPosition(m.range, l);
        } else if (u) {
          break;
        }
      }
      if (!u || !d) {
        this.reset();
      }
    });
    this._currentState = H_(i, r);
  }
  revealNext(e) {
    if (!this._currentModel) {
      return Promise.resolve();
    }
    this._currentIdx += 1;
    this._currentIdx %= this._currentModel.references.length;
    const t = this._currentModel.references[this._currentIdx];
    this._showMessage();
    this._ignoreEditorChange = true;
    return this._editorService.openCodeEditor({
      resource: t.uri,
      options: {
        selection: Zt.collapseToStart(t.range),
        selectionRevealType: 3
      }
    }, e).finally(() => {
      this._ignoreEditorChange = false;
    });
  }
  _showMessage() {
    this._currentMessage?.close();
    const e = this._keybindingService.lookupKeybinding("editor.gotoNextSymbolFromResult");
    const t = e ? _(1238, null, this._currentIdx + 1, this._currentModel.references.length, e.getLabel()) : _(1239, null, this._currentIdx + 1, this._currentModel.references.length);
    this._currentMessage = this._notificationService.status(t);
  }
};
lla = __decorate([__param(0, wi), __param(1, fl), __param(2, ms), __param(3, mo)], lla);
Vi(sgi, lla, 1);
ld(new class extends dF {
  constructor() {
    super({
      id: "editor.gotoNextSymbolFromResult",
      precondition: cla,
      kbOpts: {
        weight: 100,
        primary: 70
      }
    });
  }
  runEditorCommand(n, e) {
    return n.get(sgi).revealNext(e);
  }
}());
qo.registerCommandAndKeybindingRule({
  id: "editor.gotoNextSymbolFromResult.cancel",
  weight: 100,
  when: cla,
  primary: 9,
  handler(n) {
    n.get(sgi).reset();
  }
});
ula = class {
  constructor(e) {
    this._listener = new Map();
    this._disposables = new Ut();
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
    this._disposables.add(e.onCodeEditorRemove(this._onDidRemoveEditor, this));
    this._disposables.add(e.onCodeEditorAdd(this._onDidAddEditor, this));
    e.listCodeEditors().forEach(this._onDidAddEditor, this);
  }
  dispose() {
    this._disposables.dispose();
    this._onDidChange.dispose();
    Bo(this._listener.values());
  }
  _onDidAddEditor(e) {
    this._listener.set(e, H_(e.onDidChangeCursorPosition(t => this._onDidChange.fire({
      editor: e
    })), e.onDidChangeModelContent(t => this._onDidChange.fire({
      editor: e
    }))));
  }
  _onDidRemoveEditor(e) {
    this._listener.get(e)?.dispose();
    this._listener.delete(e);
  }
};
ula = __decorate([__param(0, fl)], ula);
