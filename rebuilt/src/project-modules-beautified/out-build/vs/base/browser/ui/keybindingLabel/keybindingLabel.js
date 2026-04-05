"use strict";

// Module: out-build/vs/base/browser/ui/keybindingLabel/keybindingLabel.js
// Offset: 2443018 (bundle byte offset)
// Size: 2703 bytes
ri();
O6();
mb();
pKe();
rt();
np();
LhA();
Ht();
Y3n = Ct;
RBc = {
  keybindingLabelBackground: undefined,
  keybindingLabelForeground: undefined,
  keybindingLabelBorder: undefined,
  keybindingLabelBottomBorder: undefined,
  keybindingLabelShadow: undefined
};
Xoe = class zGb extends at {
  constructor(e, t, i) {
    super();
    this.os = t;
    this.keyElements = new Set();
    this.options = i || Object.create(null);
    const r = this.options.keybindingLabelForeground;
    this.domNode = Rt(e, Y3n(".monaco-keybinding"));
    if (r) {
      this.domNode.style.color = r;
    }
    this.hover = this._register(q4().setupManagedHover(Sm("mouse"), this.domNode, ""));
    this.didEverRender = false;
    e.appendChild(this.domNode);
  }
  get element() {
    return this.domNode;
  }
  set(e, t) {
    if (!this.didEverRender || this.keybinding !== e || !zGb.areSame(this.matches, t)) {
      this.keybinding = e;
      this.matches = t;
      this.render();
    }
  }
  render() {
    this.clear();
    if (this.keybinding) {
      const e = this.keybinding.getChords();
      if (e[0]) {
        this.renderChord(this.domNode, e[0], this.matches ? this.matches.firstPart : null);
      }
      for (let i = 1; i < e.length; i++) {
        Rt(this.domNode, Y3n("span.monaco-keybinding-key-chord-separator", undefined, " "));
        this.renderChord(this.domNode, e[i], this.matches ? this.matches.chordPart : null);
      }
      const t = this.options.disableTitle ?? false ? undefined : this.keybinding.getAriaLabel() || undefined;
      this.hover.update(t);
      this.domNode.setAttribute("aria-label", t || "");
    } else if (this.options && this.options.renderUnboundKeybindings) {
      this.renderUnbound(this.domNode);
    }
    this.didEverRender = true;
  }
  clear() {
    th(this.domNode);
    this.keyElements.clear();
  }
  renderChord(e, t, i) {
    const r = mKe.modifierLabels[this.os];
    if (t.ctrlKey) {
      this.renderKey(e, r.ctrlKey, !!i?.ctrlKey, r.separator);
    }
    if (t.shiftKey) {
      this.renderKey(e, r.shiftKey, !!i?.shiftKey, r.separator);
    }
    if (t.altKey) {
      this.renderKey(e, r.altKey, !!i?.altKey, r.separator);
    }
    if (t.metaKey) {
      this.renderKey(e, r.metaKey, !!i?.metaKey, r.separator);
    }
    const s = t.keyLabel;
    if (s) {
      this.renderKey(e, s, !!i?.keyCode, "");
    }
  }
  renderKey(e, t, i, r) {
    Rt(e, this.createKeyElement(t, i ? ".highlight" : ""));
    if (r) {
      Rt(e, Y3n("span.monaco-keybinding-key-separator", undefined, r));
    }
  }
  renderUnbound(e) {
    Rt(e, this.createKeyElement(_(25, null)));
  }
  createKeyElement(e, t = "") {
    const i = Y3n("span.monaco-keybinding-key" + t, undefined, e);
    this.keyElements.add(i);
    if (this.options.keybindingLabelBackground) {
      i.style.backgroundColor = this.options.keybindingLabelBackground;
    }
    if (this.options.keybindingLabelBorder) {
      i.style.borderColor = this.options.keybindingLabelBorder;
    }
    if (this.options.keybindingLabelBottomBorder) {
      i.style.borderBottomColor = this.options.keybindingLabelBottomBorder;
    }
    if (this.options.keybindingLabelShadow) {
      i.style.boxShadow = `inset 0 -1px 0 ${this.options.keybindingLabelShadow}`;
    }
    return i;
  }
  static areSame(e, t) {
    if (e === t || !e && !t) {
      return true;
    } else {
      return !!e && !!t && fv(e.firstPart, t.firstPart) && fv(e.chordPart, t.chordPart);
    }
  }
};
