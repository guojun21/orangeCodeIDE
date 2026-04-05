"use strict";

// Module: out-build/vs/editor/contrib/cHover/browser/hoverWidget.js
// Offset: 34004492 (bundle byte offset)
// Size: 4837 bytes
ri();
Dx();
yn();
rt();
Wmy();
bvn();
hs();
ka();
Dd();
of();
Ud();
eu();
si();
TV();
(function (n) {
  let e;
  (function (i) {
    i[i.Hidden = 0] = "Hidden";
    i[i.Showing = 1] = "Showing";
  })(e = n.Type ||= {});
  n.Hidden = {
    type: 0
  };
  class t {
    constructor(r, s) {
      this.editorPosition = r;
      this.widgetPosition = s;
      this.type = 1;
    }
  }
  n.Showing = t;
})(vvn ||= {});
zDa = class extends at {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._editor = e;
    this.keybindingService = t;
    this.reactiveStorageService = r;
    this.cppService = s;
    this.contextKeyService = o;
    this.workbenchEnvironmentService = a;
    this._onClick = this._register(new Qe());
    this.onClick = this._onClick.event;
    this._state = vvn.Hidden;
    this.isWordWrap = false;
    this._domNode = Ct("div.cursorHoverWidget");
    this._buttonContainer = Rt(this._domNode, Ct("div.buttonContainer"));
    this._addToChatButton = this._createButton(this._buttonContainer, UUe, "Add to Chat");
    if (!e.getIsMultiDiffEditor?.()) {
      this._quickEditButton = this._createButton(this._buttonContainer, ppe, "Quick Edit");
    }
    this._register(E1.ignoreTarget(this._domNode));
    this._editor.addContentWidget(this);
    this.reactiveStorageRoot = this._register(this.reactiveStorageService.createScoped(this));
    this._register(this.cppService.suggestion.event(() => {
      this.update();
    }));
    this.update();
    this._register(this.contextKeyService.onDidChangeContext(l => {
      if (l.affectsSome(new Set([Ykt.key]))) {
        if (Ykt.getValue(this.contextKeyService)) {
          this.hide();
        } else {
          this.update();
        }
      }
    }));
    this._register(this._editor.onDidChangeModelContent(l => {
      const u = this._editor.getModel();
      if (this.state.type !== 1 || !u || this.state.editorPosition.lineNumber >= u.getLineCount()) {
        this.hide();
      }
    }));
    if (this._quickEditButton) {
      this._register($Be(this._quickEditButton, l => {
        if (this.state.type !== 1) {
          return;
        }
        l.stopPropagation();
        this._editor.focus();
        const u = this._editor.getSelection();
        i.executeCommand(ppe, u ? {
          overrideRange: u
        } : undefined).then(() => {});
      }));
    }
    this._register($Be(this._addToChatButton, l => {
      if (this.state.type === 1) {
        l.stopPropagation();
        this._editor.focus();
        i.executeCommand(UUe);
      }
    }));
    this._register(ei(this._domNode, "mouseenter", l => {
      if ((l.buttons & 1) === 1) {
        this.hide();
      }
    }));
    this._register(this._editor.onDidBlurEditorText(() => this.hide()));
  }
  _createButton(e, t, i, r) {
    const s = Rt(e, Ct("button.hoverButton"));
    const o = Rt(s, Ct("span.text"));
    o.textContent = i;
    const a = Rt(s, Ct("span.commandHelpText"));
    r = r ?? this.keybindingService.lookupKeybinding(t);
    const l = r?.getLabel() || "";
    a.textContent = l;
    return s;
  }
  dispose() {
    super.dispose();
    this._editor.removeContentWidget(this);
  }
  getId() {
    return "HoverWidget";
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    if (this._state.type === 1) {
      return this._state.widgetPosition;
    } else {
      return null;
    }
  }
  updateShowingElements() {
    const e = this._editor.getModel();
    if (!e) {
      return;
    }
    const t = this.cppService.suggestion.value;
    if (t === undefined || t?.uri.toString() !== e.uri.toString()) {
      this._buttonContainer.style.display = "flex";
    } else {
      this._buttonContainer.style.display = "none";
    }
    if (this._quickEditButton) {
      const i = this._editor.getOption(96);
      const r = this.workbenchEnvironmentService.isGlass === true;
      this._quickEditButton.style.display = i || r ? "none" : "";
    }
  }
  update() {
    const e = this._editor.getModel();
    if (!e) {
      return this.hide();
    }
    if (Ykt.getValue(this.contextKeyService)) {
      return this.hide();
    }
    let i = Number.MAX_VALUE;
    const r = this._editor.getSelection();
    if ((r === null || r.isEmpty()) && this.cppService.suggestion.value?.uri.toString() !== e.uri.toString()) {
      return this.hide();
    }
    if (!this._editor.hasTextFocus() && !this._editor.hasWidgetFocus()) {
      return this.hide();
    }
    this.updateShowingElements();
    const s = this._editor.getPosition();
    if (!s) {
      return this.hide();
    }
    const {
      lineNumber: o
    } = e.validatePosition(s);
    const a = r === null ? o : r.endLineNumber;
    let l = Math.max(1, Math.min(e.getLineCount(), s.lineNumber < 4 ? a + 3 : s.lineNumber - 2));
    let u = s.column;
    const d = 25;
    const m = r === null ? s.lineNumber - 1 : Math.max(s.lineNumber - 2, Math.floor(r.endLineNumber + r.startLineNumber) / 2 - 1);
    const p = this.isWordWrap ? 3 : 2;
    const g = Math.max(1, s.lineNumber - p);
    const f = Math.min(e.getLineCount() - 1, s.lineNumber + p);
    let A = 1;
    const w = Vmy(this._editor) - 10;
    const C = (x, I, B, R) => {
      if (B !== x || e.getLineLength(Math.max(1, B)) >= w) {
        return;
      }
      const N = Math.abs(I - 5) + Math.abs(x - m) * d;
      if (N < i) {
        i = N;
        l = B;
        u = I;
        A = R;
      }
    };
    for (let x = g; x <= f; x++) {
      let I = 0;
      let B = 0;
      for (let R = x - 2; R <= x; R++) {
        const N = e.getLineLength(Math.max(1, R));
        if (N > I) {
          I = N;
          B = R;
        }
      }
      C(x, I, B, 1);
      I = 0;
      B = 0;
      for (let R = x; R <= x + 2; R++) {
        const N = e.getLineLength(Math.min(e.getLineCount(), R));
        if (N > I) {
          I = N;
          B = R;
        }
      }
      C(x, I, B, 2);
      I = 0;
      B = 0;
      for (let R = x - 1; R <= x + 1; R++) {
        const N = e.getLineLength(Math.max(1, Math.min(e.getLineCount(), R)));
        if (N > I) {
          I = N;
          B = R;
        }
      }
      C(x, I, B, 0);
    }
    this.state = new vvn.Showing(s, {
      position: {
        lineNumber: l,
        column: u + 2
      },
      preference: [A]
    });
    this._editor.layoutContentWidget(this);
  }
  hide() {
    if (this.state !== vvn.Hidden) {
      this.state = vvn.Hidden;
      this._editor.layoutContentWidget(this);
    }
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e;
    this._updateHoverTitleAndIcon();
  }
  _updateHoverTitleAndIcon() {}
  set title(e) {
    this._domNode.title = e;
  }
};
zDa = __decorate([__param(1, mo), __param(2, fr), __param(3, ku), __param(4, gM), __param(5, wi), __param(6, Cc)], zDa);
