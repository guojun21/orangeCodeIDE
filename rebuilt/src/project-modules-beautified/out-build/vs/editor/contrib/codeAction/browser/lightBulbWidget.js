"use strict";

// Module: out-build/vs/editor/contrib/codeAction/browser/lightBulbWidget.js
// Offset: 4181341 (bundle byte offset)
// Size: 8022 bytes
ri();
Dx();
qi();
yn();
rt();
Jr();
ZvA();
xw();
bv();
JEc();
mve();
Ht();
ka();
Pm();
ts();
f5c = us("gutter-lightbulb", Be.lightBulb, _(1012, null));
b5c = us("gutter-lightbulb-auto-fix", Be.lightbulbAutofix, _(1013, null));
v5c = us("gutter-lightbulb-sparkle", Be.lightbulbSparkle, _(1014, null));
A5c = us("gutter-lightbulb-aifix-auto-fix", Be.lightbulbSparkleAutofix, _(1015, null));
y5c = us("gutter-lightbulb-sparkle-filled", Be.sparkleFilled, _(1016, null));
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
    constructor(r, s, o, a) {
      this.actions = r;
      this.trigger = s;
      this.editorPosition = o;
      this.widgetPosition = a;
      this.type = 1;
    }
  }
  n.Showing = t;
})(mke ||= {});
U9t = class extends at {
  static {
    O9t = this;
  }
  static {
    this.GUTTER_DECORATION = Zh.register({
      description: "codicon-gutter-lightbulb-decoration",
      glyphMarginClassName: Qt.asClassName(Be.lightBulb),
      glyphMargin: {
        position: G$.Left
      },
      stickiness: 1
    });
  }
  static {
    this.ID = "editor.contrib.lightbulbWidget";
  }
  static {
    this._posPref = [0];
  }
  constructor(e, t) {
    super();
    this._editor = e;
    this._keybindingService = t;
    this._onClick = this._register(new Qe());
    this.onClick = this._onClick.event;
    this._state = mke.Hidden;
    this._gutterState = mke.Hidden;
    this._iconClasses = [];
    this.lightbulbClasses = ["codicon-" + f5c.id, "codicon-" + A5c.id, "codicon-" + b5c.id, "codicon-" + v5c.id, "codicon-" + y5c.id];
    this.gutterDecoration = O9t.GUTTER_DECORATION;
    this._domNode = Ct("div.lightBulbWidget");
    this._domNode.role = "listbox";
    this._register(E1.ignoreTarget(this._domNode));
    this._editor.addContentWidget(this);
    this._register(this._editor.onDidChangeModelContent(i => {
      const r = this._editor.getModel();
      if (this.state.type !== 1 || !r || this.state.editorPosition.lineNumber >= r.getLineCount()) {
        this.hide();
      }
      if (this.gutterState.type !== 1 || !r || this.gutterState.editorPosition.lineNumber >= r.getLineCount()) {
        this.gutterHide();
      }
    }));
    this._register($Be(this._domNode, i => {
      if (this.state.type !== 1) {
        return;
      }
      this._editor.focus();
      i.preventDefault();
      const {
        top: r,
        height: s
      } = qS(this._domNode);
      const o = this._editor.getOption(68);
      let a = Math.floor(o / 3);
      if (this.state.widgetPosition.position !== null && this.state.widgetPosition.position.lineNumber < this.state.editorPosition.lineNumber) {
        a += o;
      }
      this._onClick.fire({
        x: i.posx,
        y: r + s + a,
        actions: this.state.actions,
        trigger: this.state.trigger
      });
    }));
    this._register(ei(this._domNode, "mouseenter", i => {
      if ((i.buttons & 1) === 1) {
        this.hide();
      }
    }));
    this._register(In.runAndSubscribe(this._keybindingService.onDidUpdateKeybindings, () => {
      this._preferredKbLabel = this._keybindingService.lookupKeybinding(qBc)?.getLabel() ?? undefined;
      this._quickFixKbLabel = this._keybindingService.lookupKeybinding(c9o)?.getLabel() ?? undefined;
      this._updateLightBulbTitleAndIcon();
    }));
    this._register(this._editor.onMouseDown(async i => {
      if (!i.target.element || !this.lightbulbClasses.some(l => i.target.element && i.target.element.classList.contains(l)) || this.gutterState.type !== 1) {
        return;
      }
      this._editor.focus();
      const {
        top: r,
        height: s
      } = qS(i.target.element);
      const o = this._editor.getOption(68);
      let a = Math.floor(o / 3);
      if (this.gutterState.widgetPosition.position !== null && this.gutterState.widgetPosition.position.lineNumber < this.gutterState.editorPosition.lineNumber) {
        a += o;
      }
      this._onClick.fire({
        x: i.event.posx,
        y: r + s + a,
        actions: this.gutterState.actions,
        trigger: this.gutterState.trigger
      });
    }));
  }
  dispose() {
    super.dispose();
    this._editor.removeContentWidget(this);
    if (this._gutterDecorationID) {
      this._removeGutterDecoration(this._gutterDecorationID);
    }
  }
  getId() {
    return "LightBulbWidget";
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
  update(e, t, i) {
    if (e.validActions.length <= 0) {
      this.gutterHide();
      return this.hide();
    }
    if (!this._editor.hasTextFocus()) {
      this.gutterHide();
      return this.hide();
    }
    if (!this._editor.getOptions().get(66).enabled) {
      this.gutterHide();
      return this.hide();
    }
    const o = this._editor.getModel();
    if (!o) {
      this.gutterHide();
      return this.hide();
    }
    const {
      lineNumber: a,
      column: l
    } = o.validatePosition(i);
    const u = o.getOptions().tabSize;
    const d = this._editor.getOptions().get(52);
    const m = o.getLineContent(a);
    const p = mOo(m, u);
    const g = d.spaceWidth * p > 22;
    const f = R => R > 2 && this._editor.getTopForLineNumber(R) === this._editor.getTopForLineNumber(R - 1);
    const A = this._editor.getLineDecorations(a);
    let w = false;
    if (A) {
      for (const R of A) {
        const N = R.options.glyphMarginClassName;
        if (N && !this.lightbulbClasses.some(M => N.includes(M))) {
          w = true;
          break;
        }
      }
    }
    let C = a;
    let x = 1;
    if (!g) {
      const R = N => {
        const M = o.getLineContent(N);
        return /^\s*$|^\s+/.test(M) || M.length <= x;
      };
      if (a > 1 && !f(a - 1)) {
        const N = o.getLineCount();
        const M = a === N;
        const O = a > 1 && R(a - 1);
        const $ = !M && R(a + 1);
        const H = R(a);
        const W = !$ && !O;
        if (!$ && !O && !w) {
          this.gutterState = new mke.Showing(e, t, i, {
            position: {
              lineNumber: C,
              column: x
            },
            preference: O9t._posPref
          });
          this.renderGutterLightbub();
          return this.hide();
        }
        if (O || M || O && !H) {
          C -= 1;
        } else if ($ || W && H) {
          C += 1;
        }
      } else if (a === 1 && (a === o.getLineCount() || !R(a + 1) && !R(a))) {
        this.gutterState = new mke.Showing(e, t, i, {
          position: {
            lineNumber: C,
            column: x
          },
          preference: O9t._posPref
        });
        if (w) {
          this.gutterHide();
        } else {
          this.renderGutterLightbub();
          return this.hide();
        }
      } else if (a < o.getLineCount() && !f(a + 1)) {
        C += 1;
      } else if (l * d.spaceWidth < 22) {
        return this.hide();
      }
      x = /^\S\s*$/.test(o.getLineContent(C)) ? 2 : 1;
    }
    this.state = new mke.Showing(e, t, i, {
      position: {
        lineNumber: C,
        column: x
      },
      preference: O9t._posPref
    });
    if (this._gutterDecorationID) {
      this._removeGutterDecoration(this._gutterDecorationID);
      this.gutterHide();
    }
    const I = e.validActions;
    const B = e.validActions[0].action.kind;
    if (I.length !== 1 || !B) {
      this._editor.layoutContentWidget(this);
      return;
    }
    this._editor.layoutContentWidget(this);
  }
  hide() {
    if (this.state !== mke.Hidden) {
      this.state = mke.Hidden;
      this._editor.layoutContentWidget(this);
    }
  }
  gutterHide() {
    if (this.gutterState !== mke.Hidden) {
      if (this._gutterDecorationID) {
        this._removeGutterDecoration(this._gutterDecorationID);
      }
      this.gutterState = mke.Hidden;
    }
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e;
    this._updateLightBulbTitleAndIcon();
  }
  get gutterState() {
    return this._gutterState;
  }
  set gutterState(e) {
    this._gutterState = e;
    this._updateGutterLightBulbTitleAndIcon();
  }
  _updateLightBulbTitleAndIcon() {
    this._domNode.classList.remove(...this._iconClasses);
    this._iconClasses = [];
    if (this.state.type !== 1) {
      return;
    }
    let e;
    let t = false;
    if (this.state.actions.allAIFixes) {
      e = Be.sparkleFilled;
      if (this.state.actions.validActions.length === 1) {
        t = true;
      }
    } else if (this.state.actions.hasAutoFix) {
      if (this.state.actions.hasAIFix) {
        e = Be.lightbulbSparkleAutofix;
      } else {
        e = Be.lightbulbAutofix;
      }
    } else if (this.state.actions.hasAIFix) {
      e = Be.lightbulbSparkle;
    } else {
      e = Be.lightBulb;
    }
    this._updateLightbulbTitle(this.state.actions.hasAutoFix, t);
    this._iconClasses = Qt.asClassNameArray(e);
    this._domNode.classList.add(...this._iconClasses);
  }
  _updateGutterLightBulbTitleAndIcon() {
    if (this.gutterState.type !== 1) {
      return;
    }
    let e;
    let t = false;
    if (this.gutterState.actions.allAIFixes) {
      e = y5c;
      if (this.gutterState.actions.validActions.length === 1) {
        t = true;
      }
    } else if (this.gutterState.actions.hasAutoFix) {
      if (this.gutterState.actions.hasAIFix) {
        e = A5c;
      } else {
        e = b5c;
      }
    } else if (this.gutterState.actions.hasAIFix) {
      e = v5c;
    } else {
      e = f5c;
    }
    this._updateLightbulbTitle(this.gutterState.actions.hasAutoFix, t);
    const i = Zh.register({
      description: "codicon-gutter-lightbulb-decoration",
      glyphMarginClassName: Qt.asClassName(e),
      glyphMargin: {
        position: G$.Left
      },
      stickiness: 1
    });
    this.gutterDecoration = i;
  }
  renderGutterLightbub() {
    const e = this._editor.getSelection();
    if (e) {
      if (this._gutterDecorationID === undefined) {
        this._addGutterDecoration(e.startLineNumber);
      } else {
        this._updateGutterDecoration(this._gutterDecorationID, e.startLineNumber);
      }
    }
  }
  _addGutterDecoration(e) {
    this._editor.changeDecorations(t => {
      this._gutterDecorationID = t.addDecoration(new Zt(e, 0, e, 0), this.gutterDecoration);
    });
  }
  _removeGutterDecoration(e) {
    this._editor.changeDecorations(t => {
      t.removeDecoration(e);
      this._gutterDecorationID = undefined;
    });
  }
  _updateGutterDecoration(e, t) {
    this._editor.changeDecorations(i => {
      i.changeDecoration(e, new Zt(t, 0, t, 0));
      i.changeDecorationOptions(e, this.gutterDecoration);
    });
  }
  _updateLightbulbTitle(e, t) {
    if (this.state.type === 1) {
      if (t) {
        this.title = _(1017, null, this.state.actions.validActions[0].action.title);
      } else if (e && this._preferredKbLabel) {
        this.title = _(1018, null, this._preferredKbLabel);
      } else if (!e && this._quickFixKbLabel) {
        this.title = _(1019, null, this._quickFixKbLabel);
      } else if (!e) {
        this.title = _(1020, null);
      }
    }
  }
  set title(e) {
    this._domNode.title = e;
  }
};
U9t = O9t = __decorate([__param(1, mo)], U9t);
