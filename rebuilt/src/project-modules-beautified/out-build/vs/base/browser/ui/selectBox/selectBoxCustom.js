"use strict";

// Module: out-build/vs/base/browser/ui/selectBox/selectBoxCustom.js
// Offset: 2090376 (bundle byte offset)
// Size: 20575 bytes
ri();
KC();
yF();
z$();
Tb();
y3();
O6();
mb();
SW();
Vs();
yn();
G_();
rt();
_r();
pdA();
Ht();
oKe = Ct;
yDc = "selectOption.entry.template";
w0h = class {
  get templateId() {
    return yDc;
  }
  renderTemplate(n) {
    const e = Object.create(null);
    e.root = n;
    e.text = Rt(n, oKe(".option-text"));
    e.detail = Rt(n, oKe(".option-detail"));
    e.decoratorRight = Rt(n, oKe(".option-decorator-right"));
    return e;
  }
  renderElement(n, e, t) {
    const i = t;
    const r = n.text;
    const s = n.detail;
    const o = n.decoratorRight;
    const a = n.isDisabled;
    i.text.textContent = r;
    i.detail.textContent = s || "";
    i.decoratorRight.innerText = o || "";
    if (a) {
      i.root.classList.add("option-disabled");
    } else {
      i.root.classList.remove("option-disabled");
    }
  }
  disposeTemplate(n) {}
};
_0h = class OCn extends at {
  static {
    this.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN = 32;
  }
  static {
    this.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN = 2;
  }
  static {
    this.DEFAULT_MINIMUM_VISIBLE_OPTIONS = 3;
  }
  constructor(e, t, i, r, s) {
    super();
    this.options = [];
    this._currentSelection = 0;
    this._hasDetails = false;
    this._skipLayout = false;
    this._sticky = false;
    this._isVisible = false;
    this.styles = r;
    this.selectBoxOptions = s || Object.create(null);
    if (typeof this.selectBoxOptions.minBottomMargin != "number") {
      this.selectBoxOptions.minBottomMargin = OCn.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN;
    } else if (this.selectBoxOptions.minBottomMargin < 0) {
      this.selectBoxOptions.minBottomMargin = 0;
    }
    this.selectElement = document.createElement("select");
    this.selectElement.className = "monaco-select-box monaco-select-box-dropdown-padding";
    if (typeof this.selectBoxOptions.ariaLabel == "string") {
      this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel);
    }
    if (typeof this.selectBoxOptions.ariaDescription == "string") {
      this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription);
    }
    this._onDidSelect = new Qe();
    this._register(this._onDidSelect);
    this.registerListeners();
    this.constructSelectDropDown(i);
    this.selected = t || 0;
    if (e) {
      this.setOptions(e, t);
    }
    this.initStyleSheet();
  }
  setTitle(e) {
    if (!this._hover && e) {
      this._hover = this._register(q4().setupManagedHover(Sm("mouse"), this.selectElement, e));
    } else if (this._hover) {
      this._hover.update(e);
    }
  }
  getHeight() {
    return 22;
  }
  getTemplateId() {
    return yDc;
  }
  constructSelectDropDown(e) {
    this.contextViewProvider = e;
    this.selectDropDownContainer = Ct(".monaco-select-box-dropdown-container");
    this.selectDropDownContainer.classList.add("monaco-select-box-dropdown-padding");
    this.selectionDetailsPane = Rt(this.selectDropDownContainer, oKe(".select-box-details-pane"));
    const t = Rt(this.selectDropDownContainer, oKe(".select-box-dropdown-container-width-control"));
    const i = Rt(t, oKe(".width-control-div"));
    this.widthControlElement = document.createElement("span");
    this.widthControlElement.className = "option-text-width-control";
    Rt(i, this.widthControlElement);
    this._dropDownPosition = 0;
    this.styleElement = wC(this.selectDropDownContainer);
    this.selectDropDownContainer.setAttribute("draggable", "true");
    this._register(ei(this.selectDropDownContainer, ir.DRAG_START, r => {
      zu.stop(r, true);
    }));
  }
  registerListeners() {
    this._register(_f(this.selectElement, "change", t => {
      this.selected = t.target.selectedIndex;
      this._onDidSelect.fire({
        index: t.target.selectedIndex,
        selected: t.target.value
      });
      if (this.options[this.selected] && this.options[this.selected].text) {
        this.setTitle(this.options[this.selected].text);
      }
    }));
    this._register(ei(this.selectElement, ir.CLICK, t => {
      zu.stop(t);
      if (this._isVisible) {
        this.hideSelectDropDown(true);
      } else {
        this.showSelectDropDown();
      }
    }));
    this._register(ei(this.selectElement, ir.MOUSE_DOWN, t => {
      zu.stop(t);
    }));
    let e;
    this._register(ei(this.selectElement, "touchstart", t => {
      e = this._isVisible;
    }));
    this._register(ei(this.selectElement, "touchend", t => {
      zu.stop(t);
      if (e) {
        this.hideSelectDropDown(true);
      } else {
        this.showSelectDropDown();
      }
    }));
    this._register(ei(this.selectElement, ir.KEY_DOWN, t => {
      const i = new vh(t);
      let r = false;
      if (Fs) {
        if (i.keyCode === 18 || i.keyCode === 16 || i.keyCode === 10 || i.keyCode === 3) {
          r = true;
        }
      } else if (i.keyCode === 18 && i.altKey || i.keyCode === 16 && i.altKey || i.keyCode === 10 || i.keyCode === 3) {
        r = true;
      }
      if (r) {
        this.showSelectDropDown();
        zu.stop(t, true);
      }
    }));
  }
  get onDidSelect() {
    return this._onDidSelect.event;
  }
  setOptions(e, t) {
    if (!cg(this.options, e)) {
      this.options = e;
      this.selectElement.options.length = 0;
      this._hasDetails = false;
      this._cachedMaxDetailsHeight = undefined;
      this.options.forEach((i, r) => {
        this.selectElement.add(this.createOption(i.text, r, i.isDisabled));
        if (typeof i.description == "string") {
          this._hasDetails = true;
        }
      });
    }
    if (t !== undefined) {
      this.select(t);
      this._currentSelection = this.selected;
    }
  }
  setEnabled(e) {
    this.selectElement.disabled = !e;
  }
  setOptionsList() {
    this.selectList?.splice(0, this.selectList.length, this.options);
  }
  select(e) {
    if (e >= 0 && e < this.options.length) {
      this.selected = e;
    } else if (e > this.options.length - 1) {
      this.select(this.options.length - 1);
    } else if (this.selected < 0) {
      this.selected = 0;
    }
    this.selectElement.selectedIndex = this.selected;
    if (this.options[this.selected] && this.options[this.selected].text) {
      this.setTitle(this.options[this.selected].text);
    }
  }
  setAriaLabel(e) {
    this.selectBoxOptions.ariaLabel = e;
    this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel);
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
  setFocusable(e) {
    this.selectElement.tabIndex = e ? 0 : -1;
  }
  render(e) {
    this.container = e;
    e.classList.add("select-container");
    e.appendChild(this.selectElement);
    this.styleSelectElement();
  }
  initStyleSheet() {
    const e = [];
    if (this.styles.listFocusBackground) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.styles.listFocusBackground} !important; }`);
    }
    if (this.styles.listFocusForeground) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.styles.listFocusForeground} !important; }`);
    }
    if (this.styles.decoratorRightForeground) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.styles.decoratorRightForeground}; }`);
    }
    if (this.styles.selectBackground && this.styles.selectBorder && this.styles.selectBorder !== this.styles.selectBackground) {
      e.push(`.monaco-select-box-dropdown-container { border: 1px solid ${this.styles.selectBorder} } `);
      e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectBorder} } `);
      e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectBorder} } `);
    } else if (this.styles.selectListBorder) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectListBorder} } `);
      e.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectListBorder} } `);
    }
    if (this.styles.listHoverForeground) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.styles.listHoverForeground} !important; }`);
    }
    if (this.styles.listHoverBackground) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.styles.listHoverBackground} !important; }`);
    }
    if (this.styles.listFocusOutline) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.styles.listFocusOutline} !important; outline-offset: -1.6px !important; }`);
    }
    if (this.styles.listHoverOutline) {
      e.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.styles.listHoverOutline} !important; outline-offset: -1.6px !important; }`);
    }
    e.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }");
    e.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }");
    this.styleElement.textContent = e.join(`
`);
  }
  styleSelectElement() {
    const e = this.styles.selectBackground ?? "";
    const t = this.styles.selectForeground ?? "";
    const i = this.styles.selectBorder ?? "";
    this.selectElement.style.backgroundColor = e;
    this.selectElement.style.color = t;
    this.selectElement.style.borderColor = i;
  }
  styleList() {
    const e = this.styles.selectBackground ?? "";
    const t = pRe(this.styles.selectListBackground, e);
    this.selectDropDownListContainer.style.backgroundColor = t;
    this.selectionDetailsPane.style.backgroundColor = t;
    const i = this.styles.focusBorder ?? "";
    this.selectDropDownContainer.style.outlineColor = i;
    this.selectDropDownContainer.style.outlineOffset = "-1px";
    this.selectList.style(this.styles);
  }
  createOption(e, t, i) {
    const r = document.createElement("option");
    r.value = e;
    r.text = e;
    r.disabled = !!i;
    return r;
  }
  showSelectDropDown() {
    this.selectionDetailsPane.innerText = "";
    if (!!this.contextViewProvider && !this._isVisible) {
      this.createSelectList(this.selectDropDownContainer);
      this.setOptionsList();
      this.contextViewProvider.showContextView({
        getAnchor: () => this.selectElement,
        render: e => this.renderSelectDropDown(e, true),
        layout: () => {
          this.layoutSelectDropDown();
        },
        onHide: () => {
          this.selectDropDownContainer.classList.remove("visible");
          this.selectElement.classList.remove("synthetic-focus");
        },
        anchorPosition: this._dropDownPosition
      }, this.selectBoxOptions.optionsAsChildren ? this.container : undefined);
      this._isVisible = true;
      this.hideSelectDropDown(false);
      this.contextViewProvider.showContextView({
        getAnchor: () => this.selectElement,
        render: e => this.renderSelectDropDown(e),
        layout: () => this.layoutSelectDropDown(),
        onHide: () => {
          this.selectDropDownContainer.classList.remove("visible");
          this.selectElement.classList.remove("synthetic-focus");
        },
        anchorPosition: this._dropDownPosition
      }, this.selectBoxOptions.optionsAsChildren ? this.container : undefined);
      this._currentSelection = this.selected;
      this._isVisible = true;
      this.selectElement.setAttribute("aria-expanded", "true");
    }
  }
  hideSelectDropDown(e) {
    if (!!this.contextViewProvider && !!this._isVisible) {
      this._isVisible = false;
      this.selectElement.setAttribute("aria-expanded", "false");
      if (e) {
        this.selectElement.focus();
      }
      this.contextViewProvider.hideContextView();
    }
  }
  renderSelectDropDown(e, t) {
    e.appendChild(this.selectDropDownContainer);
    this.layoutSelectDropDown(t);
    return {
      dispose: () => {
        this.selectDropDownContainer.remove();
      }
    };
  }
  measureMaxDetailsHeight() {
    let e = 0;
    this.options.forEach((t, i) => {
      this.updateDetail(i);
      if (this.selectionDetailsPane.offsetHeight > e) {
        e = this.selectionDetailsPane.offsetHeight;
      }
    });
    return e;
  }
  layoutSelectDropDown(e) {
    if (this._skipLayout) {
      return false;
    }
    if (this.selectList) {
      this.selectDropDownContainer.classList.add("visible");
      const t = As(this.selectElement);
      const i = qS(this.selectElement);
      const r = As(this.selectElement).getComputedStyle(this.selectElement);
      const s = parseFloat(r.getPropertyValue("--dropdown-padding-top")) + parseFloat(r.getPropertyValue("--dropdown-padding-bottom"));
      const o = t.innerHeight - i.top - i.height - (this.selectBoxOptions.minBottomMargin || 0);
      const a = i.top - OCn.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN;
      const l = this.selectElement.offsetWidth;
      const u = this.setWidthControlElement(this.widthControlElement);
      const d = Math.max(u, Math.round(l)).toString() + "px";
      this.selectDropDownContainer.style.width = d;
      this.selectList.getHTMLElement().style.height = "";
      this.selectList.layout();
      let m = this.selectList.contentHeight;
      if (this._hasDetails && this._cachedMaxDetailsHeight === undefined) {
        this._cachedMaxDetailsHeight = this.measureMaxDetailsHeight();
      }
      const p = this._hasDetails ? this._cachedMaxDetailsHeight : 0;
      const g = m + s + p;
      const f = Math.floor((o - s - p) / this.getHeight());
      const A = Math.floor((a - s - p) / this.getHeight());
      if (e) {
        if (i.top + i.height > t.innerHeight - 22 || i.top < OCn.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || f < 1 && A < 1) {
          return false;
        } else {
          if (f < OCn.DEFAULT_MINIMUM_VISIBLE_OPTIONS && A > f && this.options.length > f) {
            this._dropDownPosition = 1;
            this.selectDropDownListContainer.remove();
            this.selectionDetailsPane.remove();
            this.selectDropDownContainer.appendChild(this.selectionDetailsPane);
            this.selectDropDownContainer.appendChild(this.selectDropDownListContainer);
            this.selectionDetailsPane.classList.remove("border-top");
            this.selectionDetailsPane.classList.add("border-bottom");
          } else {
            this._dropDownPosition = 0;
            this.selectDropDownListContainer.remove();
            this.selectionDetailsPane.remove();
            this.selectDropDownContainer.appendChild(this.selectDropDownListContainer);
            this.selectDropDownContainer.appendChild(this.selectionDetailsPane);
            this.selectionDetailsPane.classList.remove("border-bottom");
            this.selectionDetailsPane.classList.add("border-top");
          }
          return true;
        }
      }
      if (i.top + i.height > t.innerHeight - 22 || i.top < OCn.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || this._dropDownPosition === 0 && f < 1 || this._dropDownPosition === 1 && A < 1) {
        this.hideSelectDropDown(true);
        return false;
      }
      if (this._dropDownPosition === 0) {
        if (this._isVisible && f + A < 1) {
          this.hideSelectDropDown(true);
          return false;
        }
        if (g > o) {
          m = f * this.getHeight();
        }
      } else if (g > a) {
        m = A * this.getHeight();
      }
      this.selectList.layout(m);
      this.selectList.domFocus();
      if (this.selectList.length > 0) {
        this.selectList.setFocus([this.selected || 0]);
        this.selectList.reveal(this.selectList.getFocus()[0] || 0);
      }
      if (this._hasDetails) {
        this.selectList.getHTMLElement().style.height = m + s + "px";
        this.selectDropDownContainer.style.height = "";
      } else {
        this.selectDropDownContainer.style.height = m + s + "px";
      }
      this.updateDetail(this.selected);
      this.selectDropDownContainer.style.width = d;
      this.selectDropDownListContainer.setAttribute("tabindex", "0");
      this.selectElement.classList.add("synthetic-focus");
      this.selectDropDownContainer.classList.add("synthetic-focus");
      return true;
    } else {
      return false;
    }
  }
  setWidthControlElement(e) {
    let t = 0;
    if (e) {
      let i = 0;
      let r = 0;
      this.options.forEach((s, o) => {
        const a = s.detail ? s.detail.length : 0;
        const l = s.decoratorRight ? s.decoratorRight.length : 0;
        const u = s.text.length + a + l;
        if (u > r) {
          i = o;
          r = u;
        }
      });
      e.textContent = this.options[i].text + (this.options[i].decoratorRight ? this.options[i].decoratorRight + " " : "");
      t = jP(e);
    }
    return t;
  }
  createSelectList(e) {
    if (this.selectList) {
      return;
    }
    this.selectDropDownListContainer = Rt(e, oKe(".select-box-dropdown-list-container"));
    this.listRenderer = new w0h();
    this.selectList = this._register(new JR("SelectBoxCustom", this.selectDropDownListContainer, this, [this.listRenderer], {
      useShadows: false,
      verticalScrollMode: 3,
      keyboardSupport: false,
      mouseSupport: false,
      accessibilityProvider: {
        getAriaLabel: r => {
          let s = r.text;
          if (r.detail) {
            s += `. ${r.detail}`;
          }
          if (r.decoratorRight) {
            s += `. ${r.decoratorRight}`;
          }
          if (r.description) {
            s += `. ${r.description}`;
          }
          return s;
        },
        getWidgetAriaLabel: () => _(28, null),
        getRole: () => Fs ? "" : "option",
        getWidgetRole: () => "listbox"
      }
    }));
    if (this.selectBoxOptions.ariaLabel) {
      this.selectList.ariaLabel = this.selectBoxOptions.ariaLabel;
    }
    const t = this._register(new Hg(this.selectDropDownListContainer, "keydown"));
    const i = In.chain(t.event, r => r.filter(() => this.selectList.length > 0).map(s => new vh(s)));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 3))(this.onEnter, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 2))(this.onEnter, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 9))(this.onEscape, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 16))(this.onUpArrow, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 18))(this.onDownArrow, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 12))(this.onPageDown, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 11))(this.onPageUp, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 14))(this.onHome, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode === 13))(this.onEnd, this));
    this._register(In.chain(i, r => r.filter(s => s.keyCode >= 21 && s.keyCode <= 56 || s.keyCode >= 85 && s.keyCode <= 113))(this.onCharacter, this));
    this._register(ei(this.selectList.getHTMLElement(), ir.POINTER_UP, r => this.onPointerUp(r)));
    this._register(this.selectList.onMouseOver(r => typeof r.index !== "undefined" && this.selectList.setFocus([r.index])));
    this._register(this.selectList.onDidChangeFocus(r => this.onListFocus(r)));
    this._register(ei(this.selectDropDownContainer, ir.FOCUS_OUT, r => {
      if (!!this._isVisible && !HS(r.relatedTarget, this.selectDropDownContainer)) {
        this.onListBlur();
      }
    }));
    this.selectList.getHTMLElement().setAttribute("aria-label", this.selectBoxOptions.ariaLabel || "");
    this.selectList.getHTMLElement().setAttribute("aria-expanded", "true");
    this.styleList();
  }
  onPointerUp(e) {
    if (!this.selectList.length) {
      return;
    }
    zu.stop(e);
    const t = e.target;
    if (!t || t.classList.contains("slider")) {
      return;
    }
    const i = t.closest(".monaco-list-row");
    if (!i) {
      return;
    }
    const r = Number(i.getAttribute("data-index"));
    const s = i.classList.contains("option-disabled");
    if (r >= 0 && r < this.options.length && !s) {
      this.selected = r;
      this.select(this.selected);
      this.selectList.setFocus([this.selected]);
      this.selectList.reveal(this.selectList.getFocus()[0]);
      if (this.selected !== this._currentSelection) {
        this._currentSelection = this.selected;
        this._onDidSelect.fire({
          index: this.selectElement.selectedIndex,
          selected: this.options[this.selected].text
        });
        if (this.options[this.selected] && this.options[this.selected].text) {
          this.setTitle(this.options[this.selected].text);
        }
      }
      this.hideSelectDropDown(true);
    }
  }
  onListBlur() {
    if (!this._sticky) {
      if (this.selected !== this._currentSelection) {
        this.select(this._currentSelection);
      }
      this.hideSelectDropDown(false);
    }
  }
  renderDescriptionMarkdown(e, t) {
    const i = s => {
      for (let o = 0; o < s.childNodes.length; o++) {
        const a = s.childNodes.item(o);
        if ((a.tagName && a.tagName.toLowerCase()) === "img") {
          a.remove();
        } else {
          i(a);
        }
      }
    };
    const r = Jde({
      value: e,
      supportThemeIcons: true
    }, {
      actionHandler: t
    });
    r.element.classList.add("select-box-description-markdown");
    i(r.element);
    return r.element;
  }
  onListFocus(e) {
    if (!!this._isVisible && !!this._hasDetails) {
      this.updateDetail(e.indexes[0]);
    }
  }
  updateDetail(e) {
    this.selectionDetailsPane.innerText = "";
    const t = this.options[e];
    const i = t?.description ?? "";
    const r = t?.descriptionIsMarkdown ?? false;
    if (i) {
      if (r) {
        const s = t.descriptionMarkdownActionHandler;
        this.selectionDetailsPane.appendChild(this.renderDescriptionMarkdown(i, s));
      } else {
        this.selectionDetailsPane.innerText = i;
      }
      this.selectionDetailsPane.style.display = "block";
    } else {
      this.selectionDetailsPane.style.display = "none";
    }
    this._skipLayout = true;
    this.contextViewProvider.layout();
    this._skipLayout = false;
  }
  onEscape(e) {
    zu.stop(e);
    this.select(this._currentSelection);
    this.hideSelectDropDown(true);
  }
  onEnter(e) {
    zu.stop(e);
    if (this.selected !== this._currentSelection) {
      this._currentSelection = this.selected;
      this._onDidSelect.fire({
        index: this.selectElement.selectedIndex,
        selected: this.options[this.selected].text
      });
      if (this.options[this.selected] && this.options[this.selected].text) {
        this.setTitle(this.options[this.selected].text);
      }
    }
    this.hideSelectDropDown(true);
  }
  onDownArrow(e) {
    if (this.selected < this.options.length - 1) {
      zu.stop(e, true);
      const t = this.options[this.selected + 1].isDisabled;
      if (t && this.options.length > this.selected + 2) {
        this.selected += 2;
      } else {
        if (t) {
          return;
        }
        this.selected++;
      }
      this.select(this.selected);
      this.selectList.setFocus([this.selected]);
      this.selectList.reveal(this.selectList.getFocus()[0]);
    }
  }
  onUpArrow(e) {
    if (this.selected > 0) {
      zu.stop(e, true);
      if (this.options[this.selected - 1].isDisabled && this.selected > 1) {
        this.selected -= 2;
      } else {
        this.selected--;
      }
      this.select(this.selected);
      this.selectList.setFocus([this.selected]);
      this.selectList.reveal(this.selectList.getFocus()[0]);
    }
  }
  onPageUp(e) {
    zu.stop(e);
    this.selectList.focusPreviousPage();
    setTimeout(() => {
      this.selected = this.selectList.getFocus()[0];
      if (this.options[this.selected].isDisabled && this.selected < this.options.length - 1) {
        this.selected++;
        this.selectList.setFocus([this.selected]);
      }
      this.selectList.reveal(this.selected);
      this.select(this.selected);
    }, 1);
  }
  onPageDown(e) {
    zu.stop(e);
    this.selectList.focusNextPage();
    setTimeout(() => {
      this.selected = this.selectList.getFocus()[0];
      if (this.options[this.selected].isDisabled && this.selected > 0) {
        this.selected--;
        this.selectList.setFocus([this.selected]);
      }
      this.selectList.reveal(this.selected);
      this.select(this.selected);
    }, 1);
  }
  onHome(e) {
    zu.stop(e);
    if (!(this.options.length < 2)) {
      this.selected = 0;
      if (this.options[this.selected].isDisabled && this.selected > 1) {
        this.selected++;
      }
      this.selectList.setFocus([this.selected]);
      this.selectList.reveal(this.selected);
      this.select(this.selected);
    }
  }
  onEnd(e) {
    zu.stop(e);
    if (!(this.options.length < 2)) {
      this.selected = this.options.length - 1;
      if (this.options[this.selected].isDisabled && this.selected > 1) {
        this.selected--;
      }
      this.selectList.setFocus([this.selected]);
      this.selectList.reveal(this.selected);
      this.select(this.selected);
    }
  }
  onCharacter(e) {
    const t = jN.toString(e.keyCode);
    let i = -1;
    for (let r = 0; r < this.options.length - 1; r++) {
      i = (r + this.selected + 1) % this.options.length;
      if (this.options[i].text.charAt(0).toUpperCase() === t && !this.options[i].isDisabled) {
        this.select(i);
        this.selectList.setFocus([i]);
        this.selectList.reveal(this.selectList.getFocus()[0]);
        zu.stop(e);
        break;
      }
    }
  }
  dispose() {
    this.hideSelectDropDown(false);
    super.dispose();
  }
};
