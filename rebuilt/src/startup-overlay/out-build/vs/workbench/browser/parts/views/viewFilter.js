"use strict";

// Module: out-build/vs/workbench/browser/parts/views/viewFilter.js
// Offset: 30851839 (bundle byte offset)
// Size: 4660 bytes
vr();
ri();
pl();
rt();
Nl();
Ht();
Wt();
WAe();
si();
qi();
ka();
odn();
dr();
vT();
dg();
$4();
yn();
$b();
Ipu = new st("menu.view.filter");
Hme = new st("submenu.view.filter");
or.appendMenuItem(Ipu, {
  submenu: Hme,
  title: _(4054, null),
  group: "navigation",
  icon: Be.filter
});
kxf = class extends CRe {
  constructor() {
    super(...arguments);
    this._checked = false;
  }
  set checked(n) {
    if (this._checked !== n) {
      this._checked = n;
      this.updateChecked();
    }
  }
  updateChecked() {
    if (this.element) {
      this.element.classList.toggle("checked", this._checked);
    }
  }
  render(n) {
    super.render(n);
    this.updateChecked();
  }
};
cCa = class extends HR {
  get onDidFocus() {
    return this.focusTracker.onDidFocus;
  }
  get onDidBlur() {
    return this.focusTracker.onDidBlur;
  }
  constructor(e, t, i, r, s) {
    super();
    this.options = e;
    this.instantiationService = t;
    this.contextViewService = i;
    this.keybindingService = s;
    this._onDidChangeFilterText = this._register(new Qe());
    this.onDidChangeFilterText = this._onDidChangeFilterText.event;
    this.isMoreFiltersChecked = false;
    this.delayedFilterUpdate = new Nv(300);
    this._register($i(() => this.delayedFilterUpdate.cancel()));
    if (e.focusContextKey) {
      this.focusContextKey = new Sn(e.focusContextKey, false).bindTo(r);
    }
    this.element = Ct(".viewpane-filter");
    [this.filterInputBox, this.focusTracker] = this.createInput(this.element);
    this._register(this.filterInputBox);
    this._register(this.focusTracker);
    const o = Rt(this.element, Ct(".viewpane-filter-controls"));
    this.filterBadge = this.createBadge(o);
    this.toolbar = this._register(this.createToolBar(o));
    this.adjustInputBox();
  }
  hasFocus() {
    return this.filterInputBox.hasFocus();
  }
  focus() {
    this.filterInputBox.focus();
  }
  blur() {
    this.filterInputBox.blur();
  }
  updateBadge(e) {
    this.filterBadge.classList.toggle("hidden", !e);
    this.filterBadge.textContent = e || "";
    this.adjustInputBox();
  }
  setFilterText(e) {
    this.filterInputBox.value = e;
  }
  getFilterText() {
    return this.filterInputBox.value;
  }
  getHistory() {
    return this.filterInputBox.getHistory();
  }
  layout(e) {
    this.element.parentElement?.classList.toggle("grow", e > 700);
    this.element.classList.toggle("small", e < 400);
    this.adjustInputBox();
    this.lastWidth = e;
  }
  relayout() {
    if (this.lastWidth) {
      this.layout(this.lastWidth);
    }
  }
  checkMoreFilters(e) {
    this.isMoreFiltersChecked = e;
    if (this.moreFiltersActionViewItem) {
      this.moreFiltersActionViewItem.checked = e;
    }
  }
  createInput(e) {
    const t = this.options.history || [];
    const i = this._register(this.instantiationService.createInstance(idn, e, this.contextViewService, {
      placeholder: this.options.placeholder,
      ariaLabel: this.options.ariaLabel,
      history: new Set(t),
      showHistoryHint: () => qet(this.keybindingService),
      inputBoxStyles: g2
    }));
    if (this.options.text) {
      i.value = this.options.text;
    }
    this._register(i.onDidChange(s => this.delayedFilterUpdate.trigger(() => this.onDidInputChange(i))));
    this._register(_f(i.inputElement, ir.KEY_DOWN, s => this.onInputKeyDown(s, i)));
    this._register(_f(e, ir.KEY_DOWN, this.handleKeyboardEvent));
    this._register(_f(e, ir.KEY_UP, this.handleKeyboardEvent));
    this._register(_f(i.inputElement, ir.CLICK, s => {
      s.stopPropagation();
      s.preventDefault();
    }));
    const r = this._register(CC(i.inputElement));
    if (this.focusContextKey) {
      this._register(r.onDidFocus(() => this.focusContextKey.set(true)));
      this._register(r.onDidBlur(() => this.focusContextKey.set(false)));
      this._register($i(() => this.focusContextKey.reset()));
    }
    return [i, r];
  }
  createBadge(e) {
    const t = Rt(e, Ct(".viewpane-filter-badge.hidden"));
    t.style.backgroundColor = zo(Bte);
    t.style.color = zo(ESe);
    t.style.border = `1px solid ${zo(Du)}`;
    return t;
  }
  createToolBar(e) {
    return this.instantiationService.createInstance(nL, e, Ipu, {
      hiddenItemStrategy: -1,
      actionViewItemProvider: (t, i) => {
        if (t instanceof h2 && t.item.submenu.id === Hme.id) {
          this.moreFiltersActionViewItem = this.instantiationService.createInstance(kxf, t, i);
          this.moreFiltersActionViewItem.checked = this.isMoreFiltersChecked;
          return this.moreFiltersActionViewItem;
        }
      }
    });
  }
  onDidInputChange(e) {
    e.addToHistory();
    this._onDidChangeFilterText.fire(e.value);
  }
  adjustInputBox() {
    this.filterInputBox.inputElement.style.paddingRight = this.element.classList.contains("small") || this.filterBadge.classList.contains("hidden") ? "25px" : "150px";
  }
  handleKeyboardEvent(e) {
    if (e.equals(10) || e.equals(15) || e.equals(17) || e.equals(14) || e.equals(13)) {
      e.stopPropagation();
    }
  }
  onInputKeyDown(e, t) {
    let i = false;
    if (e.equals(2) && !this.toolbar.isEmpty()) {
      this.toolbar.focus();
      i = true;
    }
    if (i) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
};
cCa = __decorate([__param(1, ln), __param(2, sy), __param(3, wi), __param(4, mo)], cCa);
