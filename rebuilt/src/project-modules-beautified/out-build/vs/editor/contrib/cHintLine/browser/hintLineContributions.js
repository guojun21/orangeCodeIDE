"use strict";

// Module: out-build/vs/editor/contrib/cHintLine/browser/hintLineContributions.js
// Offset: 34012511 (bundle byte offset)
// Size: 3598 bytes
Cu();
rt();
si();
Wt();
L0();
bvn();
Dd();
pdn();
Yr();
ml();
Ud();
_M();
mce();
eu();
X$f = class extends vu {
  constructor() {
    super({
      id: Fsh,
      label: "Update Hint Line",
      alias: "Update Hint Line",
      precondition: undefined
    });
  }
  run(n, e, t) {
    const i = qrt.get(e);
    if (i) {
      i.update();
    }
  }
};
ac(X$f);
qrt = class extends at {
  static {
    oCu = this;
  }
  static {
    this.ID = "editor.contrib.hintLineController";
  }
  static get(e) {
    return e.getContribution(oCu.ID);
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this._instantiationService = i;
    this.reactiveStorageService = r;
    this.cppService = s;
    this.inlineDiffService = o;
    this.cmdKStateService = a;
    this.workbenchEnvironmentService = l;
    this._editor = e;
    this.contextKeyService = t;
    setTimeout(() => {
      this.update();
    }, 200);
    this._register(this._editor.onDidChangeModel(() => this.update()));
    this._register(this._editor.onDidChangeModelContent(() => this.update()));
    this._register(this._editor.onDidChangeModelLanguage(() => this.update()));
    this._register(this._editor.onDidChangeCursorPosition(() => this.update()));
    this._register(this._editor.onDidFocusEditorText(() => this.update()));
    this._register(this._editor.onDidBlurEditorText(() => this.update()));
    this._widget = new Ob(() => this._register(this._instantiationService.createInstance(jDa, this._editor)));
    this._register(t.onDidChangeContext(u => {
      if (u.affectsSome(new Set([VS.inlineSuggestionVisible.key]))) {
        this.update();
      }
    }));
    this.reactiveStorageRoot = this._register(this.reactiveStorageService.createScoped(this));
    this._register(this.cppService.suggestion.event(() => {
      this.update();
    }));
    this._register(this.cmdKStateService.onDiffAttachmentChanged(() => {
      this.update();
    }));
    this.reactiveStorageRoot.onChangeEffect({
      deps: [() => this.reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip],
      onChange: () => {
        this.update();
      }
    });
  }
  _getRangeOfSelectionUnlessWhitespaceEnclosed() {
    if (!this._editor.hasModel()) {
      return;
    }
    const e = this._editor.getModel();
    const t = this._editor.getSelection();
    if (t.isEmpty()) {
      const {
        lineNumber: i,
        column: r
      } = t.getPosition();
      const s = e.getLineContent(i);
      if (s.length === 0) {
        return;
      }
      if (r === 1) {
        if (/\s/.test(s[0])) {
          return;
        }
      } else if (r === e.getLineMaxColumn(i)) {
        if (/\s/.test(s[s.length - 1])) {
          return;
        }
      } else if (/\s/.test(s[r - 2]) && /\s/.test(s[r - 1])) {
        return;
      }
    }
    return t;
  }
  _inCmdKSelection() {
    if (!this._editor.hasModel()) {
      return false;
    }
    const e = this._editor.getModel();
    const t = this._editor.getSelection();
    const i = this.cmdKStateService.getPromptBars();
    for (const r of i) {
      if (!Iu.isEqual(r.uri, e.uri)) {
        continue;
      }
      const s = this.inlineDiffService.getPromptBarCurrentRange(r, e);
      if (s !== undefined && !(s.startLineNumber > t.endLineNumber) && !(s.endLineNumberExclusive <= t.startLineNumber)) {
        return true;
      }
    }
    return false;
  }
  update() {
    if (this.workbenchEnvironmentService.isGlass === true) {
      if (this._widget.hasValue) {
        this._widget.value.hide();
      }
      return;
    }
    if (this.reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip === true) {
      this._widget.value.hide();
      return;
    }
    const e = this._editor.getModel();
    if (e && !this._editor.getOption(96)) {
      const t = this._getRangeOfSelectionUnlessWhitespaceEnclosed();
      const i = t ? t.getStartPosition() : this._editor.getPosition();
      const r = e.getLineFirstNonWhitespaceColumn(i.lineNumber) === 0;
      const s = this.contextKeyService.getContextKeyValue(VS.inlineSuggestionVisible.key);
      const o = Z$f(this.reactiveStorageService, this.cppService);
      if (r && !s && (t == null || t.startLineNumber == t.endLineNumber && t.startColumn == t.endColumn) && !o) {
        this._widget.value.update(i);
        const a = this._inCmdKSelection();
        this._widget.value.updateCmdKShortcut(a);
      } else {
        this._widget.value.hide();
      }
    } else {
      this._widget.value.hide();
    }
  }
};
qrt = oCu = __decorate([__param(1, wi), __param(2, ln), __param(3, ku), __param(4, gM), __param(5, fL), __param(6, I2), __param(7, Cc)], qrt);
Mg(qrt.ID, qrt, 3);
