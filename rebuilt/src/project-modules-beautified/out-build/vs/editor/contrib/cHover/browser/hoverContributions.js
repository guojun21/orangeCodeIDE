"use strict";

// Module: out-build/vs/editor/contrib/cHover/browser/hoverContributions.js
// Offset: 34009329 (bundle byte offset)
// Size: 3182 bytes
Cu();
L0();
rt();
Ei();
si();
Wt();
ay();
Dd();
TV();
Qh();
Cm();
Ymy();
x7e = class extends at {
  static {
    sCu = this;
  }
  static {
    this.ID = "editor.contrib.hoverController";
  }
  static get(e) {
    return e.getContribution(sCu.ID);
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.contextKeyService = i;
    this._instantiationService = r;
    this._reactiveStorageService = o;
    this.configurationService = a;
    this.deactivated = false;
    this._isMouseDown = false;
    this._editor = e;
    this._register(this._editor.onDidChangeModel(() => this.update()));
    this._register(this._editor.onDidChangeModelLanguage(() => this.update()));
    this._register(this._editor.onDidBlurEditorText(() => this.update()));
    this._register(this._editor.onDidBlurEditorWidget(() => this.update()));
    this._register(this._editor.onDidChangeCursorPosition(() => this.update()));
    this._register(this._editor.onMouseDown(() => {
      this._isMouseDown = true;
      this.update();
    }));
    this._register(this._editor.onMouseUp(() => {
      this._isMouseDown = false;
      this.update();
    }));
    this._widget = new Ob(() => {
      const u = this._register(r.createInstance(zDa, this._editor));
      this._register(u.onClick(d => {}));
      return u;
    });
    this._register(i.onDidChangeContext(u => {
      if (u.affectsSome(new Set([Ci.hasActivelyGeneratingDiff.key])) && Ci.hasActivelyGeneratingDiff.getValue(i)) {
        this._widget.value.hide();
      }
      if (u.affectsSome(new Set([Ykt.key]))) {
        this.update();
      }
    }));
    this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this));
    this.reactiveStorageRoot.onChangeEffect({
      deps: [() => this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip],
      onChange: () => {
        this.update();
      }
    });
    const l = () => {
      const u = this._editor.getOptions();
      const d = u.get(142);
      const m = d === "inherit" ? u.get(141) : d;
      const g = (m === "inherit" ? u.get(137) : m) !== "off";
      this._widget.value.isWordWrap = g;
    };
    l();
    this._register(this._editor.onDidChangeConfiguration(u => {
      l();
    }));
    this.update();
    if (!e.shouldShowHover) {
      this.deactivated = true;
      return;
    }
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
  isMultiline(e) {
    return e.startLineNumber !== e.endLineNumber;
  }
  update() {
    if (!this._editor.shouldShowHover || this.deactivated) {
      return;
    }
    const e = this._editor.getModel();
    if (e) {
      const t = this._getRangeOfSelectionUnlessWhitespaceEnclosed();
      const i = t && (t.endLineNumber - t.startLineNumber > 0 || t.endColumn - t.startColumn > e.getLineMaxColumn(t.startLineNumber) / 2);
      const r = Ykt.getValue(this.contextKeyService);
      if (!this._isMouseDown && i && this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip !== true && !r) {
        this._widget.value.update();
      } else {
        this._widget.value.hide();
      }
    }
  }
  hideHoverWidget() {
    if (!this.deactivated) {
      this._widget.value.hide();
    }
  }
};
x7e = sCu = __decorate([__param(1, bk), __param(2, wi), __param(3, ln), __param(4, $u), __param(5, ku), __param(6, Fn)], x7e);
Mg(x7e.ID, x7e, 3);
