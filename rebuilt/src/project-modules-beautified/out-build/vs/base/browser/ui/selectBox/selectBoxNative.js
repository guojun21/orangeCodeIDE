"use strict";

// Module: out-build/vs/base/browser/ui/selectBox/selectBoxNative.js
// Offset: 2110951 (bundle byte offset)
// Size: 2917 bytes
ri();
Dx();
Vs();
yn();
rt();
_r();
C0h = class extends at {
  constructor(n, e, t, i) {
    super();
    this.selected = 0;
    this.selectBoxOptions = i || Object.create(null);
    this.options = [];
    this.selectElement = document.createElement("select");
    this.selectElement.className = "monaco-select-box";
    if (typeof this.selectBoxOptions.ariaLabel == "string") {
      this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel);
    }
    if (typeof this.selectBoxOptions.ariaDescription == "string") {
      this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription);
    }
    this._onDidSelect = this._register(new Qe());
    this.styles = t;
    this.registerListeners();
    this.setOptions(n, e);
  }
  registerListeners() {
    this._register(E1.addTarget(this.selectElement));
    [MA.Tap].forEach(n => {
      this._register(ei(this.selectElement, n, e => {
        this.selectElement.focus();
      }));
    });
    this._register(_f(this.selectElement, "click", n => {
      zu.stop(n, true);
    }));
    this._register(_f(this.selectElement, "change", n => {
      this.selectElement.title = n.target.value;
      this._onDidSelect.fire({
        index: n.target.selectedIndex,
        selected: n.target.value
      });
    }));
    this._register(_f(this.selectElement, "keydown", n => {
      let e = false;
      if (Fs) {
        if (n.keyCode === 18 || n.keyCode === 16 || n.keyCode === 10) {
          e = true;
        }
      } else if (n.keyCode === 18 && n.altKey || n.keyCode === 10 || n.keyCode === 3) {
        e = true;
      }
      if (e) {
        n.stopPropagation();
      }
    }));
  }
  get onDidSelect() {
    return this._onDidSelect.event;
  }
  setOptions(n, e) {
    if (!this.options || !cg(this.options, n)) {
      this.options = n;
      this.selectElement.options.length = 0;
      this.options.forEach((t, i) => {
        this.selectElement.add(this.createOption(t.text, i, t.isDisabled));
      });
    }
    if (e !== undefined) {
      this.select(e);
    }
  }
  select(n) {
    if (this.options.length === 0) {
      this.selected = 0;
    } else if (n >= 0 && n < this.options.length) {
      this.selected = n;
    } else if (n > this.options.length - 1) {
      this.select(this.options.length - 1);
    } else if (this.selected < 0) {
      this.selected = 0;
    }
    this.selectElement.selectedIndex = this.selected;
    if (this.selected < this.options.length && typeof this.options[this.selected].text == "string") {
      this.selectElement.title = this.options[this.selected].text;
    } else {
      this.selectElement.title = "";
    }
  }
  setAriaLabel(n) {
    this.selectBoxOptions.ariaLabel = n;
    this.selectElement.setAttribute("aria-label", n);
  }
  focus() {
    if (this.selectElement) {
      this.selectElement.tabIndex = 0;
      this.selectElement.focus();
    }
  }
  blur() {
    if (this.selectElement) {
      this.selectElement.tabIndex = -1;
      this.selectElement.blur();
    }
  }
  setEnabled(n) {
    this.selectElement.disabled = !n;
  }
  setFocusable(n) {
    this.selectElement.tabIndex = n ? 0 : -1;
  }
  render(n) {
    n.classList.add("select-container");
    n.appendChild(this.selectElement);
    this.setOptions(this.options, this.selected);
    this.applyStyles();
  }
  style(n) {
    this.styles = n;
    this.applyStyles();
  }
  applyStyles() {
    if (this.selectElement) {
      this.selectElement.style.backgroundColor = this.styles.selectBackground ?? "";
      this.selectElement.style.color = this.styles.selectForeground ?? "";
      this.selectElement.style.borderColor = this.styles.selectBorder ?? "";
    }
  }
  createOption(n, e, t) {
    const i = document.createElement("option");
    i.value = n;
    i.text = n;
    i.disabled = !!t;
    return i;
  }
};
