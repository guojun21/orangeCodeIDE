"use strict";

// Module: out-build/vs/base/browser/ui/findinput/replaceInput.js
// Offset: 25164375 (bundle byte offset)
// Size: 4940 bytes
ri();
_q();
JZ();
$4();
qi();
yn();
Lpg();
Ht();
mb();
mvg = _(13, null);
pvg = _(14, null);
gvg = class extends H3 {
  constructor(n) {
    super({
      icon: Be.preserveCase,
      title: pvg + n.appendTitle,
      isChecked: n.isChecked,
      hoverDelegate: n.hoverDelegate ?? Sm("element"),
      inputActiveOptionBorder: n.inputActiveOptionBorder,
      inputActiveOptionForeground: n.inputActiveOptionForeground,
      inputActiveOptionBackground: n.inputActiveOptionBackground
    });
  }
};
fvg = class extends HR {
  static {
    this.OPTION_CHANGE = "optionChange";
  }
  constructor(n, e, t, i) {
    super();
    this._showOptionButtons = t;
    this.fixFocusOnOptionClickEnabled = true;
    this.cachedOptionsWidth = 0;
    this._onDidOptionChange = this._register(new Qe());
    this.onDidOptionChange = this._onDidOptionChange.event;
    this._onKeyDown = this._register(new Qe());
    this.onKeyDown = this._onKeyDown.event;
    this._onMouseDown = this._register(new Qe());
    this.onMouseDown = this._onMouseDown.event;
    this._onInput = this._register(new Qe());
    this.onInput = this._onInput.event;
    this._onKeyUp = this._register(new Qe());
    this.onKeyUp = this._onKeyUp.event;
    this._onPreserveCaseKeyDown = this._register(new Qe());
    this.onPreserveCaseKeyDown = this._onPreserveCaseKeyDown.event;
    this._lastHighlightFindOptions = 0;
    this.contextViewProvider = e;
    this.placeholder = i.placeholder || "";
    this.validation = i.validation;
    this.label = i.label || mvg;
    const r = i.appendPreserveCaseLabel || "";
    const s = i.history || new Set([]);
    const o = !!i.flexibleHeight;
    const a = !!i.flexibleWidth;
    const l = i.flexibleMaxHeight;
    this.domNode = document.createElement("div");
    this.domNode.classList.add("monaco-findInput");
    this.inputBox = this._register(new vca(this.domNode, this.contextViewProvider, {
      ariaLabel: this.label || "",
      placeholder: this.placeholder || "",
      validationOptions: {
        validation: this.validation
      },
      history: s,
      showHistoryHint: i.showHistoryHint,
      flexibleHeight: o,
      flexibleWidth: a,
      flexibleMaxHeight: l,
      inputBoxStyles: i.inputBoxStyles
    }));
    this.preserveCase = this._register(new gvg({
      appendTitle: r,
      isChecked: false,
      ...i.toggleStyles
    }));
    this._register(this.preserveCase.onChange(m => {
      this._onDidOptionChange.fire(m);
      if (!m && this.fixFocusOnOptionClickEnabled) {
        this.inputBox.focus();
      }
      this.validate();
    }));
    this._register(this.preserveCase.onKeyDown(m => {
      this._onPreserveCaseKeyDown.fire(m);
    }));
    if (this._showOptionButtons) {
      this.cachedOptionsWidth = this.preserveCase.width();
    } else {
      this.cachedOptionsWidth = 0;
    }
    const u = [this.preserveCase.domNode];
    this.onkeydown(this.domNode, m => {
      if (m.equals(15) || m.equals(17) || m.equals(9)) {
        const p = u.indexOf(this.domNode.ownerDocument.activeElement);
        if (p >= 0) {
          let g = -1;
          if (m.equals(17)) {
            g = (p + 1) % u.length;
          } else if (m.equals(15)) {
            if (p === 0) {
              g = u.length - 1;
            } else {
              g = p - 1;
            }
          }
          if (m.equals(9)) {
            u[p].blur();
            this.inputBox.focus();
          } else if (g >= 0) {
            u[g].focus();
          }
          zu.stop(m, true);
        }
      }
    });
    const d = document.createElement("div");
    d.className = "controls";
    d.style.display = this._showOptionButtons ? "block" : "none";
    d.appendChild(this.preserveCase.domNode);
    this.domNode.appendChild(d);
    n?.appendChild(this.domNode);
    this.onkeydown(this.inputBox.inputElement, m => this._onKeyDown.fire(m));
    this.onkeyup(this.inputBox.inputElement, m => this._onKeyUp.fire(m));
    this.oninput(this.inputBox.inputElement, m => this._onInput.fire());
    this.onmousedown(this.inputBox.inputElement, m => this._onMouseDown.fire(m));
  }
  enable() {
    this.domNode.classList.remove("disabled");
    this.inputBox.enable();
    this.preserveCase.enable();
  }
  disable() {
    this.domNode.classList.add("disabled");
    this.inputBox.disable();
    this.preserveCase.disable();
  }
  setFocusInputOnOptionClick(n) {
    this.fixFocusOnOptionClickEnabled = n;
  }
  setEnabled(n) {
    if (n) {
      this.enable();
    } else {
      this.disable();
    }
  }
  clear() {
    this.clearValidation();
    this.setValue("");
    this.focus();
  }
  getValue() {
    return this.inputBox.value;
  }
  setValue(n) {
    if (this.inputBox.value !== n) {
      this.inputBox.value = n;
    }
  }
  onSearchSubmit() {
    this.inputBox.addToHistory();
  }
  applyStyles() {}
  select() {
    this.inputBox.select();
  }
  focus() {
    this.inputBox.focus();
  }
  getPreserveCase() {
    return this.preserveCase.checked;
  }
  setPreserveCase(n) {
    this.preserveCase.checked = n;
  }
  focusOnPreserve() {
    this.preserveCase.focus();
  }
  highlightFindOptions() {
    this.domNode.classList.remove("highlight-" + this._lastHighlightFindOptions);
    this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions;
    this.domNode.classList.add("highlight-" + this._lastHighlightFindOptions);
  }
  validate() {
    this.inputBox?.validate();
  }
  showMessage(n) {
    this.inputBox?.showMessage(n);
  }
  clearMessage() {
    this.inputBox?.hideMessage();
  }
  clearValidation() {
    this.inputBox?.hideMessage();
  }
  set width(n) {
    this.inputBox.paddingRight = this.cachedOptionsWidth;
    this.domNode.style.width = n + "px";
  }
  dispose() {
    super.dispose();
  }
};
