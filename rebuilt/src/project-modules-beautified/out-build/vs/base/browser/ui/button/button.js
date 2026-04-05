"use strict";

// Module: out-build/vs/base/browser/ui/button/button.js
// Offset: 2432259 (bundle byte offset)
// Size: 10590 bytes
ri();
i4t();
Tb();
y3();
Dx();
mb();
bS();
nl();
qi();
xf();
yn();
tg();
rt();
Jr();
PhA();
Ht();
O6();
WSh = {
  buttonBackground: "#0E639C",
  buttonHoverBackground: "#006BB3",
  buttonSeparator: Xr.white.toString(),
  buttonForeground: Xr.white.toString(),
  buttonBorder: undefined,
  buttonSecondaryBackground: undefined,
  buttonSecondaryForeground: undefined,
  buttonSecondaryHoverBackground: undefined
};
pw = class extends at {
  get onDidClick() {
    return this._onDidClick.event;
  }
  get onDidEscape() {
    return this._onDidEscape.event;
  }
  constructor(n, e) {
    super();
    this._label = "";
    this._onDidClick = this._register(new Qe());
    this._onDidEscape = this._register(new Qe());
    this.options = e;
    this._element = document.createElement("a");
    this._element.classList.add("monaco-button");
    this._element.tabIndex = 0;
    this._element.setAttribute("role", "button");
    this._element.classList.toggle("secondary", !!e.secondary);
    const t = e.secondary ? e.buttonSecondaryBackground : e.buttonBackground;
    const i = e.secondary ? e.buttonSecondaryForeground : e.buttonForeground;
    this._element.style.color = i || "";
    this._element.style.backgroundColor = t || "";
    if (e.supportShortLabel) {
      this._labelShortElement = document.createElement("div");
      this._labelShortElement.classList.add("monaco-button-label-short");
      this._element.appendChild(this._labelShortElement);
      this._labelElement = document.createElement("div");
      this._labelElement.classList.add("monaco-button-label");
      this._element.appendChild(this._labelElement);
      this._element.classList.add("monaco-text-button-with-short-label");
    }
    if (typeof e.title == "string") {
      this.setTitle(e.title);
    }
    if (typeof e.ariaLabel == "string") {
      this._element.setAttribute("aria-label", e.ariaLabel);
    }
    n.appendChild(this._element);
    this._register(E1.addTarget(this._element));
    [ir.CLICK, MA.Tap].forEach(r => {
      this._register(ei(this._element, r, s => {
        if (!this.enabled) {
          zu.stop(s);
          return;
        }
        this._onDidClick.fire(s);
      }));
    });
    this._register(ei(this._element, ir.KEY_DOWN, r => {
      const s = new vh(r);
      let o = false;
      if (this.enabled && (s.equals(3) || s.equals(10))) {
        this._onDidClick.fire(r);
        o = true;
      } else if (s.equals(9)) {
        this._onDidEscape.fire(r);
        this._element.blur();
        o = true;
      }
      if (o) {
        zu.stop(s, true);
      }
    }));
    this._register(ei(this._element, ir.MOUSE_OVER, r => {
      if (!this._element.classList.contains("disabled")) {
        this.updateBackground(true);
      }
    }));
    this._register(ei(this._element, ir.MOUSE_OUT, r => {
      this.updateBackground(false);
    }));
    this.focusTracker = this._register(CC(this._element));
    this._register(this.focusTracker.onDidFocus(() => {
      if (this.enabled) {
        this.updateBackground(true);
      }
    }));
    this._register(this.focusTracker.onDidBlur(() => {
      if (this.enabled) {
        this.updateBackground(false);
      }
    }));
  }
  dispose() {
    super.dispose();
    this._element.remove();
  }
  getContentElements(n) {
    const e = [];
    for (let t of a_(n)) {
      if (typeof t == "string") {
        t = t.trim();
        if (t === "") {
          continue;
        }
        const i = document.createElement("span");
        i.textContent = t;
        e.push(i);
      } else {
        e.push(t);
      }
    }
    return e;
  }
  updateBackground(n) {
    let e;
    if (this.options.secondary) {
      e = n ? this.options.buttonSecondaryHoverBackground : this.options.buttonSecondaryBackground;
    } else {
      e = n ? this.options.buttonHoverBackground : this.options.buttonBackground;
    }
    if (e) {
      this._element.style.backgroundColor = e;
    }
  }
  get element() {
    return this._element;
  }
  set label(n) {
    if (this._label === n || bT(this._label) && bT(n) && XIc(this._label, n)) {
      return;
    }
    this._element.classList.add("monaco-text-button");
    const e = this.options.supportShortLabel ? this._labelElement : this._element;
    if (bT(n)) {
      const i = Jde(n, {
        inline: true
      });
      i.dispose();
      const r = i.element.querySelector("p")?.innerHTML;
      if (r) {
        const s = Rbe.sanitize(r, {
          ADD_TAGS: ["b", "i", "u", "code", "span"],
          ALLOWED_ATTR: ["class"],
          RETURN_TRUSTED_TYPE: true
        });
        e.innerHTML = s;
      } else {
        um(e);
      }
    } else if (this.options.supportIcons) {
      um(e, ...this.getContentElements(n));
    } else {
      e.textContent = n;
    }
    let t = "";
    if (typeof this.options.title == "string") {
      t = this.options.title;
    } else if (this.options.title) {
      t = rKe(n);
    }
    this.setTitle(t);
    this._setAriaLabel();
    this._label = n;
  }
  get label() {
    return this._label;
  }
  set labelShort(n) {
    if (!!this.options.supportShortLabel && !!this._labelShortElement) {
      if (this.options.supportIcons) {
        um(this._labelShortElement, ...this.getContentElements(n));
      } else {
        this._labelShortElement.textContent = n;
      }
    }
  }
  _setAriaLabel() {
    if (typeof this.options.ariaLabel == "string") {
      this._element.setAttribute("aria-label", this.options.ariaLabel);
    } else if (typeof this.options.title == "string") {
      this._element.setAttribute("aria-label", this.options.title);
    }
  }
  set icon(n) {
    this._setAriaLabel();
    const e = Array.from(this._element.classList).filter(t => t.startsWith("codicon-"));
    this._element.classList.remove(...e);
    this._element.classList.add(...Qt.asClassNameArray(n));
  }
  set enabled(n) {
    if (n) {
      this._element.classList.remove("disabled");
      this._element.setAttribute("aria-disabled", String(false));
      this._element.tabIndex = 0;
    } else {
      this._element.classList.add("disabled");
      this._element.setAttribute("aria-disabled", String(true));
    }
  }
  get enabled() {
    return !this._element.classList.contains("disabled");
  }
  set checked(n) {
    if (n) {
      this._element.classList.add("checked");
      this._element.setAttribute("aria-checked", "true");
    } else {
      this._element.classList.remove("checked");
      this._element.setAttribute("aria-checked", "false");
    }
  }
  get checked() {
    return this._element.classList.contains("checked");
  }
  setTitle(n) {
    if (!this._hover && n !== "") {
      this._hover = this._register(q4().setupManagedHover(this.options.hoverDelegate ?? Sm("element"), this._element, n));
    } else if (this._hover) {
      this._hover.update(n);
    }
  }
  focus() {
    this._element.focus();
  }
  hasFocus() {
    return zP(this._element);
  }
};
Cbt = class extends at {
  constructor(n, e) {
    super();
    this._onDidClick = this._register(new Qe());
    this.onDidClick = this._onDidClick.event;
    this.element = document.createElement("div");
    this.element.classList.add("monaco-button-dropdown");
    n.appendChild(this.element);
    if (!e.hoverDelegate) {
      e = {
        ...e,
        hoverDelegate: this._register(F6())
      };
    }
    this.primaryButton = this._register(new pw(this.element, e));
    this._register(this.primaryButton.onDidClick(r => this._onDidClick.fire(r)));
    this.action = this._register(new Hs("primaryAction", rKe(this.primaryButton.label), undefined, true, async () => this._onDidClick.fire(undefined)));
    this.separatorContainer = document.createElement("div");
    this.separatorContainer.classList.add("monaco-button-dropdown-separator");
    this.separator = document.createElement("div");
    this.separatorContainer.appendChild(this.separator);
    this.element.appendChild(this.separatorContainer);
    const t = e.buttonBorder;
    if (t) {
      this.separatorContainer.style.borderTop = "1px solid " + t;
      this.separatorContainer.style.borderBottom = "1px solid " + t;
    }
    const i = e.secondary ? e.buttonSecondaryBackground : e.buttonBackground;
    this.separatorContainer.style.backgroundColor = i ?? "";
    this.separator.style.backgroundColor = e.buttonSeparator ?? "";
    this.dropdownButton = this._register(new pw(this.element, {
      ...e,
      title: _(1, null),
      supportIcons: true
    }));
    this.dropdownButton.element.setAttribute("aria-haspopup", "true");
    this.dropdownButton.element.setAttribute("aria-expanded", "false");
    this.dropdownButton.element.classList.add("monaco-dropdown-button");
    this.dropdownButton.icon = Be.dropDownButton;
    this._register(this.dropdownButton.onDidClick(r => {
      const s = Array.isArray(e.actions) ? e.actions : e.actions.getActions();
      e.contextMenuProvider.showContextMenu({
        getAnchor: () => this.dropdownButton.element,
        getActions: () => e.addPrimaryActionToDropdown === false ? [...s] : [this.action, ...s],
        actionRunner: e.actionRunner,
        onHide: () => this.dropdownButton.element.setAttribute("aria-expanded", "false"),
        layer: e.dropdownLayer
      });
      this.dropdownButton.element.setAttribute("aria-expanded", "true");
    }));
  }
  dispose() {
    super.dispose();
    this.element.remove();
  }
  set label(n) {
    this.primaryButton.label = n;
    this.action.label = n;
  }
  set icon(n) {
    this.primaryButton.icon = n;
  }
  set enabled(n) {
    this.primaryButton.enabled = n;
    this.dropdownButton.enabled = n;
    this.element.classList.toggle("disabled", !n);
  }
  get enabled() {
    return this.primaryButton.enabled;
  }
  set checked(n) {
    this.primaryButton.checked = n;
  }
  get checked() {
    return this.primaryButton.checked;
  }
  focus() {
    this.primaryButton.focus();
  }
  hasFocus() {
    return this.primaryButton.hasFocus() || this.dropdownButton.hasFocus();
  }
};
BBc = class {
  constructor(n, e) {
    this.options = e;
    this._element = document.createElement("div");
    this._element.classList.add("monaco-description-button");
    this._button = new pw(this._element, e);
    this._descriptionElement = document.createElement("div");
    this._descriptionElement.classList.add("monaco-button-description");
    this._element.appendChild(this._descriptionElement);
    n.appendChild(this._element);
  }
  get onDidClick() {
    return this._button.onDidClick;
  }
  get element() {
    return this._element;
  }
  set label(n) {
    this._button.label = n;
  }
  set icon(n) {
    this._button.icon = n;
  }
  get enabled() {
    return this._button.enabled;
  }
  set enabled(n) {
    this._button.enabled = n;
  }
  set checked(n) {
    this._button.checked = n;
  }
  get checked() {
    return this._button.checked;
  }
  focus() {
    this._button.focus();
  }
  hasFocus() {
    return this._button.hasFocus();
  }
  dispose() {
    this._button.dispose();
  }
  set description(n) {
    if (this.options.supportIcons) {
      um(this._descriptionElement, ...a_(n));
    } else {
      this._descriptionElement.textContent = n;
    }
  }
};
D9e = class {
  constructor(n) {
    this.container = n;
    this._buttons = [];
    this._buttonStore = new Ut();
  }
  dispose() {
    this._buttonStore.dispose();
  }
  get buttons() {
    return this._buttons;
  }
  clear() {
    this._buttonStore.clear();
    this._buttons.length = 0;
  }
  addButton(n) {
    const e = this._buttonStore.add(new pw(this.container, n));
    this.pushButton(e);
    return e;
  }
  addButtonWithDescription(n) {
    const e = this._buttonStore.add(new BBc(this.container, n));
    this.pushButton(e);
    return e;
  }
  addButtonWithDropdown(n) {
    const e = this._buttonStore.add(new Cbt(this.container, n));
    this.pushButton(e);
    return e;
  }
  pushButton(n) {
    this._buttons.push(n);
    const e = this._buttons.length - 1;
    this._buttonStore.add(ei(n.element, ir.KEY_DOWN, t => {
      const i = new vh(t);
      let r = true;
      let s;
      if (i.equals(15)) {
        s = e > 0 ? e - 1 : this._buttons.length - 1;
      } else if (i.equals(17)) {
        s = e === this._buttons.length - 1 ? 0 : e + 1;
      } else {
        r = false;
      }
      if (r && typeof s == "number") {
        this._buttons[s].focus();
        zu.stop(t, true);
      }
    }));
  }
};
QSh = class extends pw {
  constructor(n, e) {
    super(n, e);
    if (e.supportShortLabel) {
      throw new Error("ButtonWithIcon does not support short labels");
    }
    this._element.classList.add("monaco-icon-button");
    this._iconElement = Ct("");
    this._mdlabelElement = Ct(".monaco-button-mdlabel");
    this._element.append(this._iconElement, this._mdlabelElement);
  }
  set label(n) {
    if (this._label === n || bT(this._label) && bT(n) && XIc(this._label, n)) {
      return;
    }
    this._element.classList.add("monaco-text-button");
    if (bT(n)) {
      const t = Jde(n, {
        inline: true
      });
      t.dispose();
      const i = t.element.querySelector("p")?.innerHTML;
      if (i) {
        const r = Rbe.sanitize(i, {
          ADD_TAGS: ["b", "i", "u", "code", "span"],
          ALLOWED_ATTR: ["class"],
          RETURN_TRUSTED_TYPE: true
        });
        this._mdlabelElement.innerHTML = r;
      } else {
        um(this._mdlabelElement);
      }
    } else if (this.options.supportIcons) {
      um(this._mdlabelElement, ...this.getContentElements(n));
    } else {
      this._mdlabelElement.textContent = n;
    }
    let e = "";
    if (typeof this.options.title == "string") {
      e = this.options.title;
    } else if (this.options.title) {
      e = rKe(n);
    }
    this.setTitle(e);
    this._setAriaLabel();
    this._label = n;
  }
  set icon(n) {
    this._iconElement.classList.value = "";
    this._iconElement.classList.add(...Qt.asClassNameArray(n));
    this._setAriaLabel();
  }
};
