"use strict";

// Module: out-build/vs/editor/contrib/cHintLine/browser/hintLineWidget.js
// Offset: 33999920 (bundle byte offset)
// Size: 4572 bytes
ri();
Dx();
yn();
rt();
Qmy();
Qh();
si();
ka();
Ws();
Nl();
Io();
Ei();
Zk();
of();
Wu();
ppe = "aipopup.action.modal.generate";
jmy = Di.as(Y4t.ColorContribution);
zmy = Di.as(j4n.ThemingContribution);
rCu = "editor.lineHighlightBackground";
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
})(FEt ||= {});
jDa = class extends at {
  static {
    iCu = this;
  }
  static {
    this._posPref = [0];
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this._editor = e;
    this.keybindingService = t;
    this.contextKeyService = r;
    this.configurationService = s;
    this.composerEventService = o;
    this.experimentService = a;
    this._onClick = this._register(new Qe());
    this.onClick = this._onClick.event;
    this._state = FEt.Hidden;
    const l = i.getColorTheme().getColor(rCu);
    const u = i.getColorTheme().getColor(Wm);
    this._domNode = Ct("div.cursorHintLineWidgetBackground");
    const d = Ct("div.cursorHintLineWidget");
    const m = g => {
      if (g) {
        this._domNode.style.backgroundColor = g.toString();
        this._domNode.style.zIndex = "4";
        this._domNode.style.width = "5000px";
        this._domNode.style.marginLeft = "2px";
        this._domNode.style.whiteSpace = "nowrap";
      }
    };
    this._register(i.onDidColorThemeChange(g => {
      const f = this._domNode.children;
      if (f.length > 0) {
        const w = f[0];
        const C = g.getColor(rCu);
        if (C) {
          w.style.backgroundColor = C.toString();
        } else {
          w.style.backgroundColor = "";
        }
      }
      const A = g.getColor(Wm);
      m(A);
    }));
    m(u);
    d.style.paddingLeft = "12px";
    if (l) {
      d.style.backgroundColor = l.toString();
    }
    const p = Ct("div.cursorHintLineWidgetText");
    this.setText(p);
    Rt(d, p);
    Rt(this._domNode, d);
    this._register(r.onDidChangeContext(g => {
      if (g.affectsSome(new Set([Ci.hasDisplayedDiff.key]))) {
        const f = r.getContextKeyValue(Ci.hasDisplayedDiff.key);
        const A = r.getContextKeyValue(Ci.editorHasPromptBar.key);
        if (f || A) {
          this._domNode.style.display = "none";
          this._domNode.style.opacity = "0";
        } else {
          this._domNode.style.display = "block";
          this._domNode.style.opacity = "1";
        }
      }
    }));
    this._register(t.onDidUpdateKeybindings(() => {
      this.setText(p);
    }));
    this._register(this.composerEventService.onDidChangeUnifiedMode(g => {
      this.setText(p);
    }));
    this._register(E1.ignoreTarget(this._domNode));
    this._editor.addContentWidget(this);
    this._register(this._editor.onDidChangeModelContent(g => {
      const f = this._editor.getModel();
      if (this.state.type !== 1 || !f || this.state.editorPosition.lineNumber >= f.getLineCount()) {
        this.hide();
      }
    }));
    this.updateFontSize();
    this._register(this.configurationService.onDidChangeConfiguration(g => {
      if (g.affectsConfiguration("editor.fontSize")) {
        setTimeout(() => {
          this.updateFontSize();
        }, 0);
      }
    }));
  }
  setText(e, t = true) {
    const i = this.keybindingService.lookupKeybinding(UUe);
    let r;
    const s = i?.getLabel();
    if (s) {
      r = s + " to chat";
    } else {
      r = "No shortcut for chat";
    }
    let o;
    if (t) {
      const a = this.keybindingService.lookupKeybindings(ppe).at(-1);
      o = a ? a.getLabel() + " to toggle" : "No shortcut for toggle";
    } else {
      const a = this.keybindingService.lookupKeybinding(ppe);
      o = a ? a.getLabel() + " to generate" : "No shortcut for generate";
    }
    e.textContent = r + ", " + o;
  }
  updateCmdKShortcut(e) {
    const t = this._domNode.querySelector("div.cursorHintLineWidgetText");
    if (t) {
      this.setText(t, e);
    }
  }
  dispose() {
    super.dispose();
    this._editor.removeContentWidget(this);
  }
  getId() {
    return "HintLineWidget";
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    if (this.state === FEt.Hidden) {
      return null;
    } else if (this._state.type === 1) {
      return this._state.widgetPosition;
    } else {
      return null;
    }
  }
  update(e) {
    if (!this._editor.hasTextFocus()) {
      return this.hide();
    }
    const t = this._editor.getModel();
    if (!t) {
      return this.hide();
    }
    if (t.getLineCount() === 1 && t.getValue() === "") {
      return this.hide();
    }
    this.state = new FEt.Showing(e, {
      position: {
        lineNumber: e.lineNumber,
        column: e.column
      },
      preference: iCu._posPref
    });
    this._editor.layoutContentWidget(this);
  }
  hide() {
    if (this.state !== FEt.Hidden) {
      this.state = FEt.Hidden;
      this._editor.layoutContentWidget(this);
    }
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e;
  }
  set title(e) {
    this._domNode.title = e;
  }
  updateFontSize() {
    const e = this.configurationService.getValue("editor.fontSize");
    const t = e * 1.5;
    this._domNode.style.fontSize = `${e}px`;
    this._domNode.style.lineHeight = `${t}px`;
    const i = this._domNode.querySelector(".cursorHintLineWidget");
    if (i) {
      i.style.fontSize = `${e}px`;
      i.style.lineHeight = `${t}px`;
    }
    const r = this._domNode.querySelector(".cursorHintLineWidgetText");
    if (r) {
      r.style.fontSize = `${e}px`;
      r.style.lineHeight = `${t}px`;
    }
  }
};
jDa = iCu = __decorate([__param(1, mo), __param(2, bo), __param(3, wi), __param(4, Fn), __param(5, BA), __param(6, Tl)], jDa);
