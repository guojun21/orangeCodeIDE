"use strict";

// Module: out-build/vs/base/browser/ui/findinput/findInput.js
// Offset: 24818078 (bundle byte offset)
// Size: 6657 bytes
ri();
Dpg();
JZ();
$4();
yn();
Lpg();
Ht();
rt();
mb();
Npg = _(9, null);
_pi = class extends HR {
  static {
    this.OPTION_CHANGE = "optionChange";
  }
  constructor(n, e, t) {
    super();
    this.fixFocusOnOptionClickEnabled = true;
    this.imeSessionInProgress = false;
    this.additionalTogglesDisposables = this._register(new uo());
    this.additionalToggles = [];
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
    this._onCaseSensitiveKeyDown = this._register(new Qe());
    this.onCaseSensitiveKeyDown = this._onCaseSensitiveKeyDown.event;
    this._onRegexKeyDown = this._register(new Qe());
    this.onRegexKeyDown = this._onRegexKeyDown.event;
    this._lastHighlightFindOptions = 0;
    this.placeholder = t.placeholder || "";
    this.validation = t.validation;
    this.label = t.label || Npg;
    this.showCommonFindToggles = !!t.showCommonFindToggles;
    const i = t.appendCaseSensitiveLabel || "";
    const r = t.appendWholeWordsLabel || "";
    const s = t.appendRegexLabel || "";
    const o = !!t.flexibleHeight;
    const a = !!t.flexibleWidth;
    const l = t.flexibleMaxHeight;
    this.domNode = document.createElement("div");
    this.domNode.classList.add("monaco-findInput");
    this.inputBox = this._register(new vca(this.domNode, e, {
      placeholder: this.placeholder || "",
      ariaLabel: this.label || "",
      validationOptions: {
        validation: this.validation
      },
      showHistoryHint: t.showHistoryHint,
      flexibleHeight: o,
      flexibleWidth: a,
      flexibleMaxHeight: l,
      inputBoxStyles: t.inputBoxStyles,
      history: t.history
    }));
    const u = this._register(F6());
    if (this.showCommonFindToggles) {
      this.regex = this._register(new MGl({
        appendTitle: s,
        isChecked: false,
        hoverDelegate: u,
        ...t.toggleStyles
      }));
      this._register(this.regex.onChange(m => {
        this._onDidOptionChange.fire(m);
        if (!m && this.fixFocusOnOptionClickEnabled) {
          this.inputBox.focus();
        }
        this.validate();
      }));
      this._register(this.regex.onKeyDown(m => {
        this._onRegexKeyDown.fire(m);
      }));
      this.wholeWords = this._register(new NGl({
        appendTitle: r,
        isChecked: false,
        hoverDelegate: u,
        ...t.toggleStyles
      }));
      this._register(this.wholeWords.onChange(m => {
        this._onDidOptionChange.fire(m);
        if (!m && this.fixFocusOnOptionClickEnabled) {
          this.inputBox.focus();
        }
        this.validate();
      }));
      this.caseSensitive = this._register(new LGl({
        appendTitle: i,
        isChecked: false,
        hoverDelegate: u,
        ...t.toggleStyles
      }));
      this._register(this.caseSensitive.onChange(m => {
        this._onDidOptionChange.fire(m);
        if (!m && this.fixFocusOnOptionClickEnabled) {
          this.inputBox.focus();
        }
        this.validate();
      }));
      this._register(this.caseSensitive.onKeyDown(m => {
        this._onCaseSensitiveKeyDown.fire(m);
      }));
      const d = [this.caseSensitive.domNode, this.wholeWords.domNode, this.regex.domNode];
      this.onkeydown(this.domNode, m => {
        if (m.equals(15) || m.equals(17) || m.equals(9)) {
          const p = d.indexOf(this.domNode.ownerDocument.activeElement);
          if (p >= 0) {
            let g = -1;
            if (m.equals(17)) {
              g = (p + 1) % d.length;
            } else if (m.equals(15)) {
              if (p === 0) {
                g = d.length - 1;
              } else {
                g = p - 1;
              }
            }
            if (m.equals(9)) {
              d[p].blur();
              this.inputBox.focus();
            } else if (g >= 0) {
              d[g].focus();
            }
            zu.stop(m, true);
          }
        }
      });
    }
    this.controls = document.createElement("div");
    this.controls.className = "controls";
    this.controls.style.display = this.showCommonFindToggles ? "" : "none";
    if (this.caseSensitive) {
      this.controls.append(this.caseSensitive.domNode);
    }
    if (this.wholeWords) {
      this.controls.appendChild(this.wholeWords.domNode);
    }
    if (this.regex) {
      this.controls.appendChild(this.regex.domNode);
    }
    this.setAdditionalToggles(t?.additionalToggles);
    if (this.controls) {
      this.domNode.appendChild(this.controls);
    }
    n?.appendChild(this.domNode);
    this._register(ei(this.inputBox.inputElement, "compositionstart", d => {
      this.imeSessionInProgress = true;
    }));
    this._register(ei(this.inputBox.inputElement, "compositionend", d => {
      this.imeSessionInProgress = false;
      this._onInput.fire();
    }));
    this.onkeydown(this.inputBox.inputElement, d => this._onKeyDown.fire(d));
    this.onkeyup(this.inputBox.inputElement, d => this._onKeyUp.fire(d));
    this.oninput(this.inputBox.inputElement, d => this._onInput.fire());
    this.onmousedown(this.inputBox.inputElement, d => this._onMouseDown.fire(d));
  }
  get isImeSessionInProgress() {
    return this.imeSessionInProgress;
  }
  get onDidChange() {
    return this.inputBox.onDidChange;
  }
  layout(n) {
    this.inputBox.layout();
    this.updateInputBoxPadding(n.collapsedFindWidget);
  }
  enable() {
    this.domNode.classList.remove("disabled");
    this.inputBox.enable();
    this.regex?.enable();
    this.wholeWords?.enable();
    this.caseSensitive?.enable();
    for (const n of this.additionalToggles) {
      n.enable();
    }
  }
  disable() {
    this.domNode.classList.add("disabled");
    this.inputBox.disable();
    this.regex?.disable();
    this.wholeWords?.disable();
    this.caseSensitive?.disable();
    for (const n of this.additionalToggles) {
      n.disable();
    }
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
  setAdditionalToggles(n) {
    for (const e of this.additionalToggles) {
      e.domNode.remove();
    }
    this.additionalToggles = [];
    this.additionalTogglesDisposables.value = new Ut();
    for (const e of n ?? []) {
      this.additionalTogglesDisposables.value.add(e);
      this.controls.appendChild(e.domNode);
      this.additionalTogglesDisposables.value.add(e.onChange(t => {
        this._onDidOptionChange.fire(t);
        if (!t && this.fixFocusOnOptionClickEnabled) {
          this.inputBox.focus();
        }
      }));
      this.additionalToggles.push(e);
    }
    if (this.additionalToggles.length > 0) {
      this.controls.style.display = "";
    }
    this.updateInputBoxPadding();
  }
  updateInputBoxPadding(n = false) {
    if (n) {
      this.inputBox.paddingRight = 0;
    } else {
      this.inputBox.paddingRight = (this.caseSensitive?.width() ?? 0) + (this.wholeWords?.width() ?? 0) + (this.regex?.width() ?? 0) + this.additionalToggles.reduce((e, t) => e + t.width(), 0);
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
  select() {
    this.inputBox.select();
  }
  focus() {
    this.inputBox.focus();
  }
  getCaseSensitive() {
    return this.caseSensitive?.checked ?? false;
  }
  setCaseSensitive(n) {
    if (this.caseSensitive) {
      this.caseSensitive.checked = n;
    }
  }
  getWholeWords() {
    return this.wholeWords?.checked ?? false;
  }
  setWholeWords(n) {
    if (this.wholeWords) {
      this.wholeWords.checked = n;
    }
  }
  getRegex() {
    return this.regex?.checked ?? false;
  }
  setRegex(n) {
    if (this.regex) {
      this.regex.checked = n;
      this.validate();
    }
  }
  focusOnCaseSensitive() {
    this.caseSensitive?.focus();
  }
  focusOnRegex() {
    this.regex?.focus();
  }
  highlightFindOptions() {
    this.domNode.classList.remove("highlight-" + this._lastHighlightFindOptions);
    this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions;
    this.domNode.classList.add("highlight-" + this._lastHighlightFindOptions);
  }
  validate() {
    this.inputBox.validate();
  }
  showMessage(n) {
    this.inputBox.showMessage(n);
  }
  clearMessage() {
    this.inputBox.hideMessage();
  }
  clearValidation() {
    this.inputBox.hideMessage();
  }
};
