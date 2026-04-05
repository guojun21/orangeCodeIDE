"use strict";

// Module: out-build/vs/editor/contrib/find/browser/findOptionsWidget.js
// Offset: 25156775 (bundle byte offset)
// Size: 2901 bytes
ri();
RCA();
Dpg();
$4();
vr();
YUe();
Nl();
mb();
dvg = class VWb extends HR {
  static {
    this.ID = "editor.contrib.findOptionsWidget";
  }
  constructor(e, t, i) {
    super();
    this._hideSoon = this._register(new Hu(() => this._hide(), 2000));
    this._isVisible = false;
    this._editor = e;
    this._state = t;
    this._keybindingService = i;
    this._domNode = document.createElement("div");
    this._domNode.className = "findOptionsWidget";
    this._domNode.style.display = "none";
    this._domNode.style.top = "10px";
    this._domNode.style.zIndex = "12";
    this._domNode.setAttribute("role", "presentation");
    this._domNode.setAttribute("aria-hidden", "true");
    const r = {
      inputActiveOptionBorder: zo(lVe),
      inputActiveOptionForeground: zo(hft),
      inputActiveOptionBackground: zo(uVe)
    };
    const s = this._register(F6());
    this.caseSensitive = this._register(new LGl({
      appendTitle: this._keybindingLabelFor(bE.ToggleCaseSensitiveCommand),
      isChecked: this._state.matchCase,
      hoverDelegate: s,
      ...r
    }));
    this._domNode.appendChild(this.caseSensitive.domNode);
    this._register(this.caseSensitive.onChange(() => {
      this._state.change({
        matchCase: this.caseSensitive.checked
      }, false);
    }));
    this.wholeWords = this._register(new NGl({
      appendTitle: this._keybindingLabelFor(bE.ToggleWholeWordCommand),
      isChecked: this._state.wholeWord,
      hoverDelegate: s,
      ...r
    }));
    this._domNode.appendChild(this.wholeWords.domNode);
    this._register(this.wholeWords.onChange(() => {
      this._state.change({
        wholeWord: this.wholeWords.checked
      }, false);
    }));
    this.regex = this._register(new MGl({
      appendTitle: this._keybindingLabelFor(bE.ToggleRegexCommand),
      isChecked: this._state.isRegex,
      hoverDelegate: s,
      ...r
    }));
    this._domNode.appendChild(this.regex.domNode);
    this._register(this.regex.onChange(() => {
      this._state.change({
        isRegex: this.regex.checked
      }, false);
    }));
    this._editor.addOverlayWidget(this);
    this._register(this._state.onFindReplaceStateChange(o => {
      let a = false;
      if (o.isRegex) {
        this.regex.checked = this._state.isRegex;
        a = true;
      }
      if (o.wholeWord) {
        this.wholeWords.checked = this._state.wholeWord;
        a = true;
      }
      if (o.matchCase) {
        this.caseSensitive.checked = this._state.matchCase;
        a = true;
      }
      if (!this._state.isRevealed && a) {
        this._revealTemporarily();
      }
    }));
    this._register(ei(this._domNode, ir.MOUSE_LEAVE, o => this._onMouseLeave()));
    this._register(ei(this._domNode, "mouseover", o => this._onMouseOver()));
  }
  _keybindingLabelFor(e) {
    const t = this._keybindingService.lookupKeybinding(e);
    if (t) {
      return ` (${t.getLabel()})`;
    } else {
      return "";
    }
  }
  dispose() {
    this._editor.removeOverlayWidget(this);
    super.dispose();
  }
  getId() {
    return VWb.ID;
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    return {
      preference: 0
    };
  }
  highlightFindOptions() {
    this._revealTemporarily();
  }
  _revealTemporarily() {
    this._show();
    this._hideSoon.schedule();
  }
  _onMouseLeave() {
    this._hideSoon.schedule();
  }
  _onMouseOver() {
    this._hideSoon.cancel();
  }
  _show() {
    if (!this._isVisible) {
      this._isVisible = true;
      this._domNode.style.display = "block";
    }
  }
  _hide() {
    if (this._isVisible) {
      this._isVisible = false;
      this._domNode.style.display = "none";
    }
  }
};
