"use strict";

// Module: out-build/vs/base/browser/ui/inputbox/inputBox.js
// Offset: 24805915 (bundle byte offset)
// Size: 12086 bytes
ri();
yF();
z$();
iKe();
Ov();
Ew();
O6();
zI();
$4();
yn();
Tun();
np();
w0A();
Ht();
rt();
Iun = Ct;
(function (n) {
  n[n.INFO = 1] = "INFO";
  n[n.WARNING = 2] = "WARNING";
  n[n.ERROR = 3] = "ERROR";
})(Rpg ||= {});
Ppg = {
  inputBackground: "#3C3C3C",
  inputForeground: "#CCCCCC",
  inputValidationInfoBorder: "#55AAFF",
  inputValidationInfoBackground: "#063B49",
  inputValidationWarningBorder: "#B89500",
  inputValidationWarningBackground: "#352A05",
  inputValidationErrorBorder: "#BE1100",
  inputValidationErrorBackground: "#5A1D1D",
  inputBorder: undefined,
  inputValidationErrorForeground: undefined,
  inputValidationInfoForeground: undefined,
  inputValidationWarningForeground: undefined
};
J9 = class extends HR {
  constructor(n, e, t) {
    super();
    this.state = "idle";
    this.maxHeight = Number.POSITIVE_INFINITY;
    this.hover = this._register(new uo());
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._onDidHeightChange = this._register(new Qe());
    this.onDidHeightChange = this._onDidHeightChange.event;
    this.contextViewProvider = e;
    this.options = t;
    this.message = null;
    this.placeholder = this.options.placeholder || "";
    this.tooltip = this.options.tooltip ?? (this.placeholder || "");
    this.ariaLabel = this.options.ariaLabel || "";
    if (this.options.validationOptions) {
      this.validation = this.options.validationOptions.validation;
    }
    this.element = Rt(n, Iun(".monaco-inputbox.idle"));
    const i = this.options.flexibleHeight ? "textarea" : "input";
    const r = Rt(this.element, Iun(".ibwrapper"));
    this.input = Rt(r, Iun(i + ".input.empty"));
    this.input.setAttribute("autocorrect", "off");
    this.input.setAttribute("autocapitalize", "off");
    this.input.setAttribute("spellcheck", "false");
    this.onfocus(this.input, () => this.element.classList.add("synthetic-focus"));
    this.onblur(this.input, () => this.element.classList.remove("synthetic-focus"));
    if (this.options.flexibleHeight) {
      this.maxHeight = typeof this.options.flexibleMaxHeight == "number" ? this.options.flexibleMaxHeight : Number.POSITIVE_INFINITY;
      this.mirror = Rt(r, Iun("div.mirror"));
      this.mirror.innerText = "\xA0";
      this.scrollableElement = new a3o(this.element, {
        vertical: 1
      });
      if (this.options.flexibleWidth) {
        this.input.setAttribute("wrap", "off");
        this.mirror.style.whiteSpace = "pre";
        this.mirror.style.wordWrap = "initial";
      }
      Rt(n, this.scrollableElement.getDomNode());
      this._register(this.scrollableElement);
      this._register(this.scrollableElement.onScroll(a => this.input.scrollTop = a.scrollTop));
      const s = this._register(new Hg(n.ownerDocument, "selectionchange"));
      const o = In.filter(s.event, () => n.ownerDocument.getSelection()?.anchorNode === r);
      this._register(o(this.updateScrollDimensions, this));
      this._register(this.onDidHeightChange(this.updateScrollDimensions, this));
    } else {
      this.input.type = this.options.type || "text";
      this.input.setAttribute("wrap", "off");
    }
    if (this.ariaLabel) {
      this.input.setAttribute("aria-label", this.ariaLabel);
    }
    if (this.placeholder && !this.options.showPlaceholderOnFocus) {
      this.setPlaceHolder(this.placeholder);
    }
    if (this.tooltip) {
      this.setTooltip(this.tooltip);
    }
    this.oninput(this.input, () => this.onValueChange());
    this.onblur(this.input, () => this.onBlur());
    this.onfocus(this.input, () => this.onFocus());
    this._register(this.ignoreGesture(this.input));
    setTimeout(() => this.updateMirror(), 0);
    if (this.options.actions) {
      this.actionbar = this._register(new Gf(this.element));
      this.actionbar.push(this.options.actions, {
        icon: true,
        label: false
      });
    }
    this.applyStyles();
  }
  onBlur() {
    this._hideMessage();
    if (this.options.showPlaceholderOnFocus) {
      this.input.setAttribute("placeholder", "");
    }
  }
  onFocus() {
    this._showMessage();
    if (this.options.showPlaceholderOnFocus) {
      this.input.setAttribute("placeholder", this.placeholder || "");
    }
  }
  setPlaceHolder(n) {
    this.placeholder = n;
    this.input.setAttribute("placeholder", n);
  }
  setTooltip(n) {
    this.tooltip = n;
    if (!this.hover.value && n) {
      this.hover.value = this._register(q4().setupDelayedHoverAtMouse(this.input, () => ({
        content: this.tooltip,
        appearance: {
          compact: true
        }
      })));
    }
  }
  setAriaLabel(n) {
    this.ariaLabel = n;
    if (n) {
      this.input.setAttribute("aria-label", this.ariaLabel);
    } else {
      this.input.removeAttribute("aria-label");
    }
  }
  getAriaLabel() {
    return this.ariaLabel;
  }
  get mirrorElement() {
    return this.mirror;
  }
  get inputElement() {
    return this.input;
  }
  get value() {
    return this.input.value;
  }
  set value(n) {
    if (this.input.value !== n) {
      this.input.value = n;
      this.onValueChange();
    }
  }
  get step() {
    return this.input.step;
  }
  set step(n) {
    this.input.step = n;
  }
  get height() {
    if (typeof this.cachedHeight == "number") {
      return this.cachedHeight;
    } else {
      return DH(this.element);
    }
  }
  focus() {
    this.input.focus();
  }
  blur() {
    this.input.blur();
  }
  hasFocus() {
    return zP(this.input);
  }
  select(n = null) {
    this.input.select();
    if (n) {
      this.input.setSelectionRange(n.start, n.end);
      if (n.end === this.input.value.length) {
        this.input.scrollLeft = this.input.scrollWidth;
      }
    }
  }
  isSelectionAtEnd() {
    return this.input.selectionEnd === this.input.value.length && this.input.selectionStart === this.input.selectionEnd;
  }
  getSelection() {
    const n = this.input.selectionStart;
    if (n === null) {
      return null;
    }
    const e = this.input.selectionEnd ?? n;
    return {
      start: n,
      end: e
    };
  }
  enable() {
    this.input.removeAttribute("disabled");
  }
  disable() {
    this.blur();
    this.input.disabled = true;
    this._hideMessage();
  }
  setEnabled(n) {
    if (n) {
      this.enable();
    } else {
      this.disable();
    }
  }
  get width() {
    return jP(this.input);
  }
  set width(n) {
    if (this.options.flexibleHeight && this.options.flexibleWidth) {
      let e = 0;
      if (this.mirror) {
        const t = parseFloat(this.mirror.style.paddingLeft || "") || 0;
        const i = parseFloat(this.mirror.style.paddingRight || "") || 0;
        e = t + i;
      }
      this.input.style.width = n - e + "px";
    } else {
      this.input.style.width = n + "px";
    }
    if (this.mirror) {
      this.mirror.style.width = n + "px";
    }
  }
  set paddingRight(n) {
    this.input.style.width = `calc(100% - ${n}px)`;
    if (this.mirror) {
      this.mirror.style.paddingRight = n + "px";
    }
  }
  updateScrollDimensions() {
    if (typeof this.cachedContentHeight != "number" || typeof this.cachedHeight != "number" || !this.scrollableElement) {
      return;
    }
    const n = this.cachedContentHeight;
    const e = this.cachedHeight;
    const t = this.input.scrollTop;
    this.scrollableElement.setScrollDimensions({
      scrollHeight: n,
      height: e
    });
    this.scrollableElement.setScrollPosition({
      scrollTop: t
    });
  }
  showMessage(n, e) {
    if (this.state === "open" && fv(this.message, n)) {
      return;
    }
    this.message = n;
    this.element.classList.remove("idle");
    this.element.classList.remove("info");
    this.element.classList.remove("warning");
    this.element.classList.remove("error");
    this.element.classList.add(this.classForType(n.type));
    const t = this.stylesForType(this.message.type);
    this.element.style.border = `1px solid ${pRe(t.border, "transparent")}`;
    if (this.message.content && (this.hasFocus() || e)) {
      this._showMessage();
    }
  }
  hideMessage() {
    this.message = null;
    this.element.classList.remove("info");
    this.element.classList.remove("warning");
    this.element.classList.remove("error");
    this.element.classList.add("idle");
    this._hideMessage();
    this.applyStyles();
  }
  isInputValid() {
    return !!this.validation && !this.validation(this.value);
  }
  validate() {
    let n = null;
    if (this.validation) {
      n = this.validation(this.value);
      if (n) {
        this.inputElement.setAttribute("aria-invalid", "true");
        this.showMessage(n);
      } else if (this.inputElement.hasAttribute("aria-invalid")) {
        this.inputElement.removeAttribute("aria-invalid");
        this.hideMessage();
      }
    }
    return n?.type;
  }
  stylesForType(n) {
    const e = this.options.inputBoxStyles;
    switch (n) {
      case 1:
        return {
          border: e.inputValidationInfoBorder,
          background: e.inputValidationInfoBackground,
          foreground: e.inputValidationInfoForeground
        };
      case 2:
        return {
          border: e.inputValidationWarningBorder,
          background: e.inputValidationWarningBackground,
          foreground: e.inputValidationWarningForeground
        };
      default:
        return {
          border: e.inputValidationErrorBorder,
          background: e.inputValidationErrorBackground,
          foreground: e.inputValidationErrorForeground
        };
    }
  }
  classForType(n) {
    switch (n) {
      case 1:
        return "info";
      case 2:
        return "warning";
      default:
        return "error";
    }
  }
  _showMessage() {
    if (!this.contextViewProvider || !this.message) {
      return;
    }
    let n;
    const e = () => n.style.width = jP(this.element) + "px";
    this.contextViewProvider.showContextView({
      getAnchor: () => this.element,
      anchorAlignment: 1,
      render: i => {
        if (!this.message) {
          return null;
        }
        n = Rt(i, Iun(".monaco-inputbox-container"));
        e();
        const r = {
          inline: true,
          className: "monaco-inputbox-message"
        };
        const s = this.message.formatContent ? nKe(this.message.content, r) : QuA(this.message.content, r);
        s.classList.add(this.classForType(this.message.type));
        const o = this.stylesForType(this.message.type);
        s.style.backgroundColor = o.background ?? "";
        s.style.color = o.foreground ?? "";
        s.style.border = o.border ? `1px solid ${o.border}` : "";
        Rt(n, s);
        return null;
      },
      onHide: () => {
        this.state = "closed";
      },
      layout: e
    });
    let t;
    if (this.message.type === 3) {
      t = _(19, null, this.message.content);
    } else if (this.message.type === 2) {
      t = _(20, null, this.message.content);
    } else {
      t = _(21, null, this.message.content);
    }
    W_(t);
    this.state = "open";
  }
  _hideMessage() {
    if (this.contextViewProvider) {
      if (this.state === "open") {
        this.contextViewProvider.hideContextView();
      }
      this.state = "idle";
    }
  }
  onValueChange() {
    this._onDidChange.fire(this.value);
    this.validate();
    this.updateMirror();
    this.input.classList.toggle("empty", !this.value);
    if (this.state === "open" && this.contextViewProvider) {
      this.contextViewProvider.layout();
    }
  }
  updateMirror() {
    if (!this.mirror) {
      return;
    }
    const n = this.value;
    const t = n.charCodeAt(n.length - 1) === 10 ? " " : "";
    if ((n + t).replace(/\u000c/g, "")) {
      this.mirror.textContent = n + t;
    } else {
      this.mirror.innerText = "\xA0";
    }
    this.layout();
  }
  applyStyles() {
    const n = this.options.inputBoxStyles;
    const e = n.inputBackground ?? "";
    const t = n.inputForeground ?? "";
    const i = n.inputBorder ?? "";
    this.element.style.backgroundColor = e;
    this.element.style.color = t;
    this.input.style.backgroundColor = "inherit";
    this.input.style.color = t;
    this.element.style.border = `1px solid ${pRe(i, "transparent")}`;
  }
  layout() {
    if (!this.mirror) {
      return;
    }
    const n = this.cachedContentHeight;
    this.cachedContentHeight = DH(this.mirror);
    if (n !== this.cachedContentHeight) {
      this.cachedHeight = Math.min(this.cachedContentHeight, this.maxHeight);
      this.input.style.height = this.cachedHeight + "px";
      this._onDidHeightChange.fire(this.cachedContentHeight);
    }
  }
  insertAtCursor(n) {
    const e = this.inputElement;
    const t = e.selectionStart;
    const i = e.selectionEnd;
    const r = e.value;
    if (t !== null && i !== null) {
      this.value = r.substr(0, t) + n + r.substr(i);
      e.setSelectionRange(t + 1, t + 1);
      this.layout();
    }
  }
  dispose() {
    this._hideMessage();
    this.message = null;
    this.actionbar?.dispose();
    super.dispose();
  }
};
vca = class extends J9 {
  constructor(n, e, t) {
    const i = _(22, null, "⇅");
    const r = _(23, null, "⇅");
    super(n, e, t);
    this._onDidFocus = this._register(new Qe());
    this.onDidFocus = this._onDidFocus.event;
    this._onDidBlur = this._register(new Qe());
    this.onDidBlur = this._onDidBlur.event;
    this.history = this._register(new bca(t.history, 100));
    const s = () => {
      if (t.showHistoryHint && t.showHistoryHint() && !this.placeholder.endsWith(i) && !this.placeholder.endsWith(r) && this.history.getHistory().length) {
        const o = this.placeholder.endsWith(")") ? i : r;
        const a = this.placeholder + o;
        if (t.showPlaceholderOnFocus && !zP(this.input)) {
          this.placeholder = a;
        } else {
          this.setPlaceHolder(a);
        }
      }
    };
    this.observer = new MutationObserver((o, a) => {
      o.forEach(l => {
        if (!l.target.textContent) {
          s();
        }
      });
    });
    this.observer.observe(this.input, {
      attributeFilter: ["class"]
    });
    this.onfocus(this.input, () => s());
    this.onblur(this.input, () => {
      const o = a => {
        if (this.placeholder.endsWith(a)) {
          const l = this.placeholder.slice(0, this.placeholder.length - a.length);
          if (t.showPlaceholderOnFocus) {
            this.placeholder = l;
          } else {
            this.setPlaceHolder(l);
          }
          return true;
        } else {
          return false;
        }
      };
      if (!o(r)) {
        o(i);
      }
    });
  }
  dispose() {
    super.dispose();
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
  addToHistory(n) {
    if (this.value && (n || this.value !== this.getCurrentValue())) {
      this.history.add(this.value);
    }
  }
  prependHistory(n) {
    const e = this.getHistory();
    this.clearHistory();
    n.forEach(t => {
      this.history.add(t);
    });
    e.forEach(t => {
      this.history.add(t);
    });
  }
  getHistory() {
    return this.history.getHistory();
  }
  isAtFirstInHistory() {
    return this.history.isFirst();
  }
  isAtLastInHistory() {
    return this.history.isLast();
  }
  isNowhereInHistory() {
    return this.history.isNowhere();
  }
  showNextValue() {
    if (!this.history.has(this.value)) {
      this.addToHistory();
    }
    let n = this.getNextValue();
    n &&= n === this.value ? this.getNextValue() : n;
    this.value = n ?? "";
    Ex(this.value ? this.value : _(24, null));
  }
  showPreviousValue() {
    if (!this.history.has(this.value)) {
      this.addToHistory();
    }
    let n = this.getPreviousValue();
    n &&= n === this.value ? this.getPreviousValue() : n;
    if (n) {
      this.value = n;
      Ex(this.value);
    }
  }
  clearHistory() {
    this.history.clear();
  }
  setPlaceHolder(n) {
    super.setPlaceHolder(n);
    this.setTooltip(n);
  }
  onBlur() {
    super.onBlur();
    this._onDidBlur.fire();
  }
  onFocus() {
    super.onFocus();
    this._onDidFocus.fire();
  }
  getCurrentValue() {
    let n = this.history.current();
    if (!n) {
      n = this.history.last();
      this.history.next();
    }
    return n;
  }
  getPreviousValue() {
    return this.history.previous() || this.history.first();
  }
  getNextValue() {
    return this.history.next();
  }
};
