"use strict";

// Module: out-build/vs/base/browser/ui/list/listWidget.js
// Offset: 2004217 (bundle byte offset)
// Size: 32964 bytes
ri();
KC();
yF();
z$();
Tb();
Dx();
Ew();
uuA();
Vs();
vr();
xf();
U0();
yn();
Q_();
rt();
sE();
_r();
Js();
Zwh();
a3n();
ZVe();
h0();
Uc();
l_h = class {
  constructor(n) {
    this.trait = n;
    this.renderedElements = [];
  }
  get templateId() {
    return `template:${this.trait.name}`;
  }
  renderTemplate(n) {
    return n;
  }
  renderElement(n, e, t) {
    const i = this.renderedElements.findIndex(r => r.templateData === t);
    if (i >= 0) {
      const r = this.renderedElements[i];
      this.trait.unrender(t);
      r.index = e;
    } else {
      const r = {
        index: e,
        templateData: t
      };
      this.renderedElements.push(r);
    }
    this.trait.renderIndex(e, t);
  }
  splice(n, e, t) {
    const i = [];
    for (const r of this.renderedElements) {
      if (r.index < n) {
        i.push(r);
      } else if (r.index >= n + e) {
        i.push({
          index: r.index + t - e,
          templateData: r.templateData
        });
      }
    }
    this.renderedElements = i;
  }
  renderIndexes(n) {
    for (const {
      index: e,
      templateData: t
    } of this.renderedElements) {
      if (n.indexOf(e) > -1) {
        this.trait.renderIndex(e, t);
      }
    }
  }
  disposeTemplate(n) {
    const e = this.renderedElements.findIndex(t => t.templateData === n);
    if (!(e < 0)) {
      this.renderedElements.splice(e, 1);
    }
  }
};
d3n = class {
  get name() {
    return this._trait;
  }
  get renderer() {
    return new l_h(this);
  }
  constructor(n) {
    this._trait = n;
    this.indexes = [];
    this.sortedIndexes = [];
    this._onChange = new Qe();
    this.onChange = this._onChange.event;
  }
  splice(n, e, t) {
    const i = t.length - e;
    const r = n + e;
    const s = [];
    let o = 0;
    while (o < this.sortedIndexes.length && this.sortedIndexes[o] < n) {
      s.push(this.sortedIndexes[o++]);
    }
    for (let a = 0; a < t.length; a++) {
      if (t[a]) {
        s.push(a + n);
      }
    }
    while (o < this.sortedIndexes.length && this.sortedIndexes[o] >= r) {
      s.push(this.sortedIndexes[o++] + i);
    }
    this.renderer.splice(n, e, t.length);
    this._set(s, s);
  }
  renderIndex(n, e) {
    e.classList.toggle(this._trait, this.contains(n));
  }
  unrender(n) {
    n.classList.remove(this._trait);
  }
  set(n, e) {
    return this._set(n, [...n].sort(YIc), e);
  }
  _set(n, e, t) {
    const i = this.indexes;
    const r = this.sortedIndexes;
    this.indexes = n;
    this.sortedIndexes = e;
    const s = QIc(r, n);
    this.renderer.renderIndexes(s);
    this._onChange.fire({
      indexes: n,
      browserEvent: t
    });
    return i;
  }
  get() {
    return this.indexes;
  }
  contains(n) {
    return s5e(this.sortedIndexes, n, YIc) >= 0;
  }
  dispose() {
    Bo(this._onChange);
  }
};
__decorate([cl], d3n.prototype, "renderer", null);
u_h = class extends d3n {
  constructor(n) {
    super("selected");
    this.setAriaSelected = n;
  }
  renderIndex(n, e) {
    super.renderIndex(n, e);
    if (this.setAriaSelected) {
      if (this.contains(n)) {
        e.setAttribute("aria-selected", "true");
      } else {
        e.setAttribute("aria-selected", "false");
      }
    }
  }
};
F3o = class {
  constructor(n, e, t) {
    this.trait = n;
    this.view = e;
    this.identityProvider = t;
  }
  splice(n, e, t) {
    if (!this.identityProvider) {
      return this.trait.splice(n, e, new Array(t.length).fill(false));
    }
    const i = this.trait.get().map(o => this.identityProvider.getId(this.view.element(o)).toString());
    if (i.length === 0) {
      return this.trait.splice(n, e, new Array(t.length).fill(false));
    }
    const r = new Set(i);
    const s = t.map(o => r.has(this.identityProvider.getId(o).toString()));
    this.trait.splice(n, e, s);
  }
};
jIc = class {
  get onKeyDown() {
    return In.chain(this.disposables.add(new Hg(this.view.domNode, "keydown")).event, n => n.filter(e => !dW(e.target)).map(e => new vh(e)));
  }
  constructor(n, e, t) {
    this.list = n;
    this.view = e;
    this.disposables = new Ut();
    this.multipleSelectionDisposables = new Ut();
    this.multipleSelectionSupport = t.multipleSelectionSupport;
    this.disposables.add(this.onKeyDown(i => {
      switch (i.keyCode) {
        case 3:
          return this.onEnter(i);
        case 16:
          return this.onUpArrow(i);
        case 18:
          return this.onDownArrow(i);
        case 11:
          return this.onPageUpArrow(i);
        case 12:
          return this.onPageDownArrow(i);
        case 9:
          return this.onEscape(i);
        case 31:
          if (this.multipleSelectionSupport && (Fs ? i.metaKey : i.ctrlKey)) {
            this.onCtrlA(i);
          }
      }
    }));
  }
  updateOptions(n) {
    if (n.multipleSelectionSupport !== undefined) {
      this.multipleSelectionSupport = n.multipleSelectionSupport;
    }
  }
  onEnter(n) {
    n.preventDefault();
    n.stopPropagation();
    this.list.setSelection(this.list.getFocus(), n.browserEvent);
  }
  onUpArrow(n) {
    n.preventDefault();
    n.stopPropagation();
    this.list.focusPrevious(1, false, n.browserEvent);
    const e = this.list.getFocus()[0];
    this.list.setAnchor(e);
    this.list.reveal(e);
    this.view.domNode.focus();
  }
  onDownArrow(n) {
    n.preventDefault();
    n.stopPropagation();
    this.list.focusNext(1, false, n.browserEvent);
    const e = this.list.getFocus()[0];
    this.list.setAnchor(e);
    this.list.reveal(e);
    this.view.domNode.focus();
  }
  onPageUpArrow(n) {
    n.preventDefault();
    n.stopPropagation();
    this.list.focusPreviousPage(n.browserEvent);
    const e = this.list.getFocus()[0];
    this.list.setAnchor(e);
    this.list.reveal(e);
    this.view.domNode.focus();
  }
  onPageDownArrow(n) {
    n.preventDefault();
    n.stopPropagation();
    this.list.focusNextPage(n.browserEvent);
    const e = this.list.getFocus()[0];
    this.list.setAnchor(e);
    this.list.reveal(e);
    this.view.domNode.focus();
  }
  onCtrlA(n) {
    n.preventDefault();
    n.stopPropagation();
    this.list.setSelection(_H(this.list.length), n.browserEvent);
    this.list.setAnchor(undefined);
    this.view.domNode.focus();
  }
  onEscape(n) {
    if (this.list.getSelection().length) {
      n.preventDefault();
      n.stopPropagation();
      this.list.setSelection([], n.browserEvent);
      this.list.setAnchor(undefined);
      this.view.domNode.focus();
    }
  }
  dispose() {
    this.disposables.dispose();
    this.multipleSelectionDisposables.dispose();
  }
};
__decorate([cl], jIc.prototype, "onKeyDown", null);
(function (n) {
  n[n.Automatic = 0] = "Automatic";
  n[n.Trigger = 1] = "Trigger";
})(bRe ||= {});
(function (n) {
  n[n.Idle = 0] = "Idle";
  n[n.Typing = 1] = "Typing";
})(v3t ||= {});
zIc = new class {
  mightProducePrintableCharacter(n) {
    if (n.ctrlKey || n.metaKey || n.altKey) {
      return false;
    } else {
      return n.keyCode >= 31 && n.keyCode <= 56 || n.keyCode >= 21 && n.keyCode <= 30 || n.keyCode >= 98 && n.keyCode <= 107 || n.keyCode >= 85 && n.keyCode <= 95;
    }
  }
}();
d_h = class {
  constructor(n, e, t, i, r) {
    this.list = n;
    this.view = e;
    this.keyboardNavigationLabelProvider = t;
    this.keyboardNavigationEventFilter = i;
    this.delegate = r;
    this.enabled = false;
    this.state = v3t.Idle;
    this.mode = bRe.Automatic;
    this.triggered = false;
    this.previouslyFocused = -1;
    this.enabledDisposables = new Ut();
    this.disposables = new Ut();
    this.updateOptions(n.options);
  }
  updateOptions(n) {
    if (n.typeNavigationEnabled ?? true) {
      this.enable();
    } else {
      this.disable();
    }
    this.mode = n.typeNavigationMode ?? bRe.Automatic;
  }
  trigger() {
    this.triggered = !this.triggered;
  }
  enable() {
    if (this.enabled) {
      return;
    }
    let n = false;
    const e = In.chain(this.enabledDisposables.add(new Hg(this.view.domNode, "keydown")).event, r => r.filter(s => !dW(s.target)).filter(() => this.mode === bRe.Automatic || this.triggered).map(s => new vh(s)).filter(s => n || this.keyboardNavigationEventFilter(s)).filter(s => this.delegate.mightProducePrintableCharacter(s)).forEach(s => zu.stop(s, true)).map(s => s.browserEvent.key));
    const t = In.debounce(e, () => null, 800, undefined, undefined, undefined, this.enabledDisposables);
    In.reduce(In.any(e, t), (r, s) => s === null ? null : (r || "") + s, undefined, this.enabledDisposables)(this.onInput, this, this.enabledDisposables);
    t(this.onClear, this, this.enabledDisposables);
    e(() => n = true, undefined, this.enabledDisposables);
    t(() => n = false, undefined, this.enabledDisposables);
    this.enabled = true;
    this.triggered = false;
  }
  disable() {
    if (this.enabled) {
      this.enabledDisposables.clear();
      this.enabled = false;
      this.triggered = false;
    }
  }
  onClear() {
    const n = this.list.getFocus();
    if (n.length > 0 && n[0] === this.previouslyFocused) {
      const e = this.list.options.accessibilityProvider?.getAriaLabel(this.list.element(n[0]));
      if (typeof e == "string") {
        W_(e);
      } else if (e) {
        W_(e.get());
      }
    }
    this.previouslyFocused = -1;
  }
  onInput(n) {
    if (!n) {
      this.state = v3t.Idle;
      this.triggered = false;
      return;
    }
    const e = this.list.getFocus();
    const t = e.length > 0 ? e[0] : 0;
    const i = this.state === v3t.Idle ? 1 : 0;
    this.state = v3t.Typing;
    for (let r = 0; r < this.list.length; r++) {
      const s = (t + r + i) % this.list.length;
      const o = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(s));
      const a = o && o.toString();
      if (this.list.options.typeNavigationEnabled) {
        if (typeof a !== "undefined") {
          if (KVe(n, a)) {
            this.previouslyFocused = t;
            this.list.setFocus([s]);
            this.list.reveal(s);
            return;
          }
          const l = FIc(n, a);
          if (l && l[0].end - l[0].start > 1 && l.length === 1) {
            this.previouslyFocused = t;
            this.list.setFocus([s]);
            this.list.reveal(s);
            return;
          }
        }
      } else if (typeof a === "undefined" || KVe(n, a)) {
        this.previouslyFocused = t;
        this.list.setFocus([s]);
        this.list.reveal(s);
        return;
      }
    }
  }
  dispose() {
    this.disable();
    this.enabledDisposables.dispose();
    this.disposables.dispose();
  }
};
h_h = class {
  constructor(n, e) {
    this.list = n;
    this.view = e;
    this.disposables = new Ut();
    const t = In.chain(this.disposables.add(new Hg(e.domNode, "keydown")).event, r => r.filter(s => !dW(s.target)).map(s => new vh(s)));
    In.chain(t, r => r.filter(s => s.keyCode === 2 && !s.ctrlKey && !s.metaKey && !s.shiftKey && !s.altKey))(this.onTab, this, this.disposables);
  }
  onTab(n) {
    if (n.target !== this.view.domNode) {
      return;
    }
    const e = this.list.getFocus();
    if (e.length === 0) {
      return;
    }
    const t = this.view.domElement(e[0]);
    if (!t) {
      return;
    }
    const i = t.querySelector("[tabIndex]");
    if (!i || !wf(i) || i.tabIndex === -1) {
      return;
    }
    const r = As(i).getComputedStyle(i);
    if (r.visibility !== "hidden" && r.display !== "none") {
      n.preventDefault();
      n.stopPropagation();
      i.focus();
    }
  }
  dispose() {
    this.disposables.dispose();
  }
};
VIc = {
  isSelectionSingleChangeEvent: a_h,
  isSelectionRangeChangeEvent: c_h
};
O3o = class {
  constructor(n) {
    this.list = n;
    this.disposables = new Ut();
    this._onPointer = new Qe();
    this.onPointer = this._onPointer.event;
    if (n.options.multipleSelectionSupport !== false) {
      this.multipleSelectionController = this.list.options.multipleSelectionController || VIc;
    }
    this.mouseSupport = typeof n.options.mouseSupport === "undefined" || !!n.options.mouseSupport;
    if (this.mouseSupport) {
      n.onMouseDown(this.onMouseDown, this, this.disposables);
      n.onContextMenu(this.onContextMenu, this, this.disposables);
      n.onMouseDblClick(this.onDoubleClick, this, this.disposables);
      n.onTouchStart(this.onMouseDown, this, this.disposables);
      this.disposables.add(E1.addTarget(n.getHTMLElement()));
    }
    In.any(n.onMouseClick, n.onMouseMiddleClick, n.onTap)(this.onViewPointer, this, this.disposables);
  }
  updateOptions(n) {
    if (n.multipleSelectionSupport !== undefined) {
      this.multipleSelectionController = undefined;
      if (n.multipleSelectionSupport) {
        this.multipleSelectionController = this.list.options.multipleSelectionController || VIc;
      }
    }
  }
  isSelectionSingleChangeEvent(n) {
    if (this.multipleSelectionController) {
      return this.multipleSelectionController.isSelectionSingleChangeEvent(n);
    } else {
      return false;
    }
  }
  isSelectionRangeChangeEvent(n) {
    if (this.multipleSelectionController) {
      return this.multipleSelectionController.isSelectionRangeChangeEvent(n);
    } else {
      return false;
    }
  }
  isSelectionChangeEvent(n) {
    return this.isSelectionSingleChangeEvent(n) || this.isSelectionRangeChangeEvent(n);
  }
  onMouseDown(n) {
    if (!b3t(n.browserEvent.target)) {
      if (_C() !== n.browserEvent.target) {
        this.list.domFocus();
      }
    }
  }
  onContextMenu(n) {
    if (dW(n.browserEvent.target) || b3t(n.browserEvent.target)) {
      return;
    }
    const e = typeof n.index === "undefined" ? [] : [n.index];
    this.list.setFocus(e, n.browserEvent);
  }
  onViewPointer(n) {
    if (!this.mouseSupport || dW(n.browserEvent.target) || b3t(n.browserEvent.target) || n.browserEvent.isHandledByList) {
      return;
    }
    n.browserEvent.isHandledByList = true;
    const e = n.index;
    if (typeof e === "undefined") {
      this.list.setFocus([], n.browserEvent);
      this.list.setSelection([], n.browserEvent);
      this.list.setAnchor(undefined);
      return;
    }
    if (this.isSelectionChangeEvent(n)) {
      return this.changeSelection(n);
    }
    this.list.setFocus([e], n.browserEvent);
    this.list.setAnchor(e);
    if (!LuA(n.browserEvent)) {
      this.list.setSelection([e], n.browserEvent);
    }
    this._onPointer.fire(n);
  }
  onDoubleClick(n) {
    if (dW(n.browserEvent.target) || b3t(n.browserEvent.target) || this.isSelectionChangeEvent(n) || n.browserEvent.isHandledByList) {
      return;
    }
    n.browserEvent.isHandledByList = true;
    const e = this.list.getFocus();
    this.list.setSelection(e, n.browserEvent);
  }
  changeSelection(n) {
    const e = n.index;
    let t = this.list.getAnchor();
    if (this.isSelectionRangeChangeEvent(n)) {
      if (typeof t === "undefined") {
        t = this.list.getFocus()[0] ?? e;
        this.list.setAnchor(t);
      }
      const i = Math.min(t, e);
      const r = Math.max(t, e);
      const s = _H(i, r + 1);
      const o = this.list.getSelection();
      const a = NuA(QIc(o, [t]), t);
      if (a.length === 0) {
        return;
      }
      const l = QIc(s, MuA(o, a));
      this.list.setSelection(l, n.browserEvent);
      this.list.setFocus([e], n.browserEvent);
    } else if (this.isSelectionSingleChangeEvent(n)) {
      const i = this.list.getSelection();
      const r = i.filter(s => s !== e);
      this.list.setFocus([e]);
      this.list.setAnchor(e);
      if (i.length === r.length) {
        this.list.setSelection([...r, e], n.browserEvent);
      } else {
        this.list.setSelection(r, n.browserEvent);
      }
    }
  }
  dispose() {
    this.disposables.dispose();
  }
};
U3o = class {
  constructor(n, e) {
    this.styleElement = n;
    this.selectorSuffix = e;
  }
  style(n) {
    const e = this.selectorSuffix && `.${this.selectorSuffix}`;
    const t = [];
    if (n.listBackground) {
      t.push(`.monaco-list${e} .monaco-list-rows { background: ${n.listBackground}; }`);
    }
    if (n.listFocusBackground) {
      t.push(`.monaco-list${e}:focus .monaco-list-row.focused { background-color: ${n.listFocusBackground}; }`);
      t.push(`.monaco-list${e}:focus .monaco-list-row.focused:hover { background-color: ${n.listFocusBackground}; }`);
    }
    if (n.listFocusForeground) {
      t.push(`.monaco-list${e}:focus .monaco-list-row.focused { color: ${n.listFocusForeground}; }`);
    }
    if (n.listActiveSelectionBackground) {
      t.push(`.monaco-list${e}:focus .monaco-list-row.selected { background-color: ${n.listActiveSelectionBackground}; }`);
      t.push(`.monaco-list${e}:focus .monaco-list-row.selected:hover { background-color: ${n.listActiveSelectionBackground}; }`);
    }
    if (n.listActiveSelectionForeground) {
      t.push(`.monaco-list${e}:focus .monaco-list-row.selected { color: ${n.listActiveSelectionForeground}; }`);
    }
    if (n.listActiveSelectionIconForeground) {
      t.push(`.monaco-list${e}:focus .monaco-list-row.selected .codicon { color: ${n.listActiveSelectionIconForeground}; }`);
    }
    if (n.listFocusAndSelectionBackground) {
      t.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.selected.focused { background-color: ${n.listFocusAndSelectionBackground}; }
			`);
    }
    if (n.listFocusAndSelectionForeground) {
      t.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.selected.focused { color: ${n.listFocusAndSelectionForeground}; }
			`);
    }
    if (n.listInactiveFocusForeground) {
      t.push(`.monaco-list${e} .monaco-list-row.focused { color:  ${n.listInactiveFocusForeground}; }`);
      t.push(`.monaco-list${e} .monaco-list-row.focused:hover { color:  ${n.listInactiveFocusForeground}; }`);
    }
    if (n.listInactiveSelectionIconForeground) {
      t.push(`.monaco-list${e} .monaco-list-row.focused .codicon { color:  ${n.listInactiveSelectionIconForeground}; }`);
    }
    if (n.listInactiveFocusBackground) {
      t.push(`.monaco-list${e} .monaco-list-row.focused { background-color:  ${n.listInactiveFocusBackground}; }`);
      t.push(`.monaco-list${e} .monaco-list-row.focused:hover { background-color:  ${n.listInactiveFocusBackground}; }`);
    }
    if (n.listInactiveSelectionBackground) {
      t.push(`.monaco-list${e} .monaco-list-row.selected { background-color:  ${n.listInactiveSelectionBackground}; }`);
      t.push(`.monaco-list${e} .monaco-list-row.selected:hover { background-color:  ${n.listInactiveSelectionBackground}; }`);
    }
    if (n.listInactiveSelectionForeground) {
      t.push(`.monaco-list${e} .monaco-list-row.selected { color: ${n.listInactiveSelectionForeground}; }`);
    }
    if (n.listHoverBackground) {
      t.push(`.monaco-list${e}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${n.listHoverBackground}; }`);
    }
    if (n.listHoverForeground) {
      t.push(`.monaco-list${e}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${n.listHoverForeground}; }`);
    }
    const i = pRe(n.listFocusAndSelectionOutline, pRe(n.listSelectionOutline, n.listFocusOutline ?? ""));
    if (i) {
      t.push(`.monaco-list${e}:focus .monaco-list-row.focused.selected { outline: 1px solid ${i}; outline-offset: -1px;}`);
    }
    if (n.listFocusOutline) {
      t.push(`
				.monaco-drag-image${e},
				.monaco-list${e}:focus .monaco-list-row.focused,
				.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused .monaco-list-row.focused { outline: 1px solid ${n.listFocusOutline}; outline-offset: -1px; }
			`);
    }
    const r = pRe(n.listSelectionOutline, n.listInactiveFocusOutline ?? "");
    if (r) {
      t.push(`.monaco-list${e} .monaco-list-row.focused.selected { outline: 1px dotted ${r}; outline-offset: -1px; }`);
    }
    if (n.listSelectionOutline) {
      t.push(`.monaco-list${e} .monaco-list-row.selected { outline: 1px dotted ${n.listSelectionOutline}; outline-offset: -1px; }`);
    }
    if (n.listInactiveFocusOutline) {
      t.push(`.monaco-list${e} .monaco-list-row.focused { outline: 1px dotted ${n.listInactiveFocusOutline}; outline-offset: -1px; }`);
    }
    if (n.listHoverOutline) {
      t.push(`.monaco-list${e} .monaco-list-row:hover { outline: 1px dashed ${n.listHoverOutline}; outline-offset: -1px; }`);
    }
    if (n.listDropOverBackground) {
      t.push(`
				.monaco-list${e}.drop-target,
				.monaco-list${e} .monaco-list-rows.drop-target,
				.monaco-list${e} .monaco-list-row.drop-target { background-color: ${n.listDropOverBackground} !important; color: inherit !important; }
			`);
    }
    if (n.listDropBetweenBackground) {
      t.push(`
			.monaco-list${e} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${e} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${n.listDropBetweenBackground};
			}`);
      t.push(`
			.monaco-list${e} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${e} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${n.listDropBetweenBackground};
			}`);
    }
    if (n.tableColumnsBorder) {
      t.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${n.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`);
    }
    if (n.tableOddRowsBackgroundColor) {
      t.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${n.tableOddRowsBackgroundColor};
				}
			`);
    }
    this.styleElement.textContent = t.join(`
`);
  }
};
KIc = {
  listFocusBackground: "#7FB0D0",
  listActiveSelectionBackground: "#0E639C",
  listActiveSelectionForeground: "#FFFFFF",
  listActiveSelectionIconForeground: "#FFFFFF",
  listFocusAndSelectionOutline: "#90C2F9",
  listFocusAndSelectionBackground: "#094771",
  listFocusAndSelectionForeground: "#FFFFFF",
  listInactiveSelectionBackground: "#3F3F46",
  listInactiveSelectionIconForeground: "#FFFFFF",
  listHoverBackground: "#2A2D2E",
  listDropOverBackground: "#383B3D",
  listDropBetweenBackground: "#EEEEEE",
  treeIndentGuidesStroke: "#a9a9a9",
  treeInactiveIndentGuidesStroke: Xr.fromHex("#a9a9a9").transparent(0.4).toString(),
  tableColumnsBorder: Xr.fromHex("#cccccc").transparent(0.2).toString(),
  tableOddRowsBackgroundColor: Xr.fromHex("#cccccc").transparent(0.04).toString(),
  listBackground: undefined,
  listFocusForeground: undefined,
  listInactiveSelectionForeground: undefined,
  listInactiveFocusForeground: undefined,
  listInactiveFocusBackground: undefined,
  listHoverForeground: undefined,
  listFocusOutline: undefined,
  listInactiveFocusOutline: undefined,
  listSelectionOutline: undefined,
  listHoverOutline: undefined,
  treeStickyScrollBackground: undefined,
  treeStickyScrollBorder: undefined,
  treeStickyScrollShadow: undefined
};
m_h = {
  keyboardSupport: true,
  mouseSupport: true,
  multipleSelectionSupport: true,
  dnd: {
    getDragURI() {
      return null;
    },
    onDragStart() {},
    onDragOver() {
      return false;
    },
    drop() {},
    dispose() {}
  }
};
YIc = (n, e) => n - e;
p_h = class {
  constructor(n, e) {
    this._templateId = n;
    this.renderers = e;
  }
  get templateId() {
    return this._templateId;
  }
  renderTemplate(n) {
    return this.renderers.map(e => e.renderTemplate(n));
  }
  renderElement(n, e, t, i) {
    let r = 0;
    for (const s of this.renderers) {
      s.renderElement(n, e, t[r++], i);
    }
  }
  disposeElement(n, e, t, i) {
    let r = 0;
    for (const s of this.renderers) {
      s.disposeElement?.(n, e, t[r], i);
      r += 1;
    }
  }
  disposeTemplate(n) {
    let e = 0;
    for (const t of this.renderers) {
      t.disposeTemplate(n[e++]);
    }
  }
};
g_h = class {
  constructor(n) {
    this.accessibilityProvider = n;
    this.templateId = "a18n";
  }
  renderTemplate(n) {
    return {
      container: n,
      disposables: new Ut()
    };
  }
  renderElement(n, e, t) {
    const i = this.accessibilityProvider.getAriaLabel(n);
    const r = i && typeof i != "string" ? i : F0(i);
    t.disposables.add(Oc(o => {
      this.setAriaLabel(o.readObservable(r), t.container);
    }));
    const s = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(n);
    if (typeof s == "number") {
      t.container.setAttribute("aria-level", `${s}`);
    } else {
      t.container.removeAttribute("aria-level");
    }
  }
  setAriaLabel(n, e) {
    if (n) {
      e.setAttribute("aria-label", n);
    } else {
      e.removeAttribute("aria-label");
    }
  }
  disposeElement(n, e, t, i) {
    t.disposables.clear();
  }
  disposeTemplate(n) {
    n.disposables.dispose();
  }
};
f_h = class {
  constructor(n, e) {
    this.list = n;
    this.dnd = e;
  }
  getDragElements(n) {
    const e = this.list.getSelectedElements();
    if (e.indexOf(n) > -1) {
      return e;
    } else {
      return [n];
    }
  }
  getDragURI(n) {
    return this.dnd.getDragURI(n);
  }
  getDragLabel(n, e) {
    if (this.dnd.getDragLabel) {
      return this.dnd.getDragLabel(n, e);
    }
  }
  onDragStart(n, e) {
    this.dnd.onDragStart?.(n, e);
  }
  onDragOver(n, e, t, i, r) {
    return this.dnd.onDragOver(n, e, t, i, r);
  }
  onDragLeave(n, e, t, i) {
    this.dnd.onDragLeave?.(n, e, t, i);
  }
  onDragEnd(n) {
    this.dnd.onDragEnd?.(n);
  }
  drop(n, e, t, i, r) {
    this.dnd.drop(n, e, t, i, r);
  }
  dispose() {
    this.dnd.dispose();
  }
};
JR = class {
  get onDidChangeFocus() {
    return In.map(this.eventBufferer.wrapEvent(this.focus.onChange), n => this.toListEvent(n), this.disposables);
  }
  get onDidChangeSelection() {
    return In.map(this.eventBufferer.wrapEvent(this.selection.onChange), n => this.toListEvent(n), this.disposables);
  }
  get domId() {
    return this.view.domId;
  }
  get onDidScroll() {
    return this.view.onDidScroll;
  }
  get onMouseClick() {
    return this.view.onMouseClick;
  }
  get onMouseDblClick() {
    return this.view.onMouseDblClick;
  }
  get onMouseMiddleClick() {
    return this.view.onMouseMiddleClick;
  }
  get onPointer() {
    return this.mouseController.onPointer;
  }
  get onMouseUp() {
    return this.view.onMouseUp;
  }
  get onMouseDown() {
    return this.view.onMouseDown;
  }
  get onMouseOver() {
    return this.view.onMouseOver;
  }
  get onMouseMove() {
    return this.view.onMouseMove;
  }
  get onMouseOut() {
    return this.view.onMouseOut;
  }
  get onTouchStart() {
    return this.view.onTouchStart;
  }
  get onTap() {
    return this.view.onTap;
  }
  get onContextMenu() {
    let n = false;
    const e = In.chain(this.disposables.add(new Hg(this.view.domNode, "keydown")).event, r => r.map(s => new vh(s)).filter(s => n = s.keyCode === 58 || s.shiftKey && s.keyCode === 68).map(s => zu.stop(s, true)).filter(() => false));
    const t = In.chain(this.disposables.add(new Hg(this.view.domNode, "keyup")).event, r => r.forEach(() => n = false).map(s => new vh(s)).filter(s => s.keyCode === 58 || s.shiftKey && s.keyCode === 68).map(s => zu.stop(s, true)).map(({
      browserEvent: s
    }) => {
      const o = this.getFocus();
      const a = o.length ? o[0] : undefined;
      const l = typeof a !== "undefined" ? this.view.element(a) : undefined;
      const u = typeof a !== "undefined" ? this.view.domElement(a) : this.view.domNode;
      return {
        index: a,
        element: l,
        anchor: u,
        browserEvent: s
      };
    }));
    const i = In.chain(this.view.onContextMenu, r => r.filter(s => !n).map(({
      element: s,
      index: o,
      browserEvent: a
    }) => ({
      element: s,
      index: o,
      anchor: new yy(As(this.view.domNode), a),
      browserEvent: a
    })));
    return In.any(e, t, i);
  }
  get onKeyDown() {
    return this.disposables.add(new Hg(this.view.domNode, "keydown")).event;
  }
  get onKeyUp() {
    return this.disposables.add(new Hg(this.view.domNode, "keyup")).event;
  }
  get onKeyPress() {
    return this.disposables.add(new Hg(this.view.domNode, "keypress")).event;
  }
  get onDidFocus() {
    return In.signal(this.disposables.add(new Hg(this.view.domNode, "focus", true)).event);
  }
  get onDidBlur() {
    return In.signal(this.disposables.add(new Hg(this.view.domNode, "blur", true)).event);
  }
  constructor(n, e, t, i, r = m_h) {
    this.user = n;
    this._options = r;
    this.focus = new d3n("focused");
    this.anchor = new d3n("anchor");
    this.eventBufferer = new LFt();
    this._ariaLabel = "";
    this.disposables = new Ut();
    this._onDidDispose = new Qe();
    this.onDidDispose = this._onDidDispose.event;
    const s = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? this._options.accessibilityProvider?.getWidgetRole() : "list";
    this.selection = new u_h(s !== "listbox");
    const o = [this.focus.renderer, this.selection.renderer];
    this.accessibilityProvider = r.accessibilityProvider;
    if (this.accessibilityProvider) {
      o.push(new g_h(this.accessibilityProvider));
      this.accessibilityProvider.onDidChangeActiveDescendant?.(this.onDidChangeActiveDescendant, this, this.disposables);
    }
    i = i.map(l => new p_h(l.templateId, [...o, l]));
    const a = {
      ...r,
      dnd: r.dnd && new f_h(this, r.dnd)
    };
    this.view = this.createListView(e, t, i, a);
    this.view.domNode.setAttribute("role", s);
    if (r.styleController) {
      this.styleController = r.styleController(this.view.domId);
    } else {
      const l = wC(this.view.domNode);
      this.styleController = new U3o(l, this.view.domId);
    }
    this.spliceable = new Lwh([new F3o(this.focus, this.view, r.identityProvider), new F3o(this.selection, this.view, r.identityProvider), new F3o(this.anchor, this.view, r.identityProvider), this.view]);
    this.disposables.add(this.focus);
    this.disposables.add(this.selection);
    this.disposables.add(this.anchor);
    this.disposables.add(this.view);
    this.disposables.add(this._onDidDispose);
    this.disposables.add(new h_h(this, this.view));
    if (typeof r.keyboardSupport != "boolean" || r.keyboardSupport) {
      this.keyboardController = new jIc(this, this.view, r);
      this.disposables.add(this.keyboardController);
    }
    if (r.keyboardNavigationLabelProvider) {
      const l = r.keyboardNavigationDelegate || zIc;
      this.typeNavigationController = new d_h(this, this.view, r.keyboardNavigationLabelProvider, r.keyboardNavigationEventFilter ?? (() => true), l);
      this.disposables.add(this.typeNavigationController);
    }
    this.mouseController = this.createMouseController(r);
    this.disposables.add(this.mouseController);
    this.onDidChangeFocus(this._onFocusChange, this, this.disposables);
    this.onDidChangeSelection(this._onSelectionChange, this, this.disposables);
    if (this.accessibilityProvider) {
      this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel();
    }
    if (this._options.multipleSelectionSupport !== false) {
      this.view.domNode.setAttribute("aria-multiselectable", "true");
    }
  }
  createListView(n, e, t, i) {
    return new joe(n, e, t, i);
  }
  createMouseController(n) {
    return new O3o(this);
  }
  updateOptions(n = {}) {
    this._options = {
      ...this._options,
      ...n
    };
    this.typeNavigationController?.updateOptions(this._options);
    if (this._options.multipleSelectionController !== undefined) {
      if (this._options.multipleSelectionSupport) {
        this.view.domNode.setAttribute("aria-multiselectable", "true");
      } else {
        this.view.domNode.removeAttribute("aria-multiselectable");
      }
    }
    this.mouseController.updateOptions(n);
    this.keyboardController?.updateOptions(n);
    this.view.updateOptions(n);
  }
  get options() {
    return this._options;
  }
  splice(n, e, t = []) {
    if (n < 0 || n > this.view.length) {
      throw new HSe(this.user, `Invalid start index: ${n}`);
    }
    if (e < 0) {
      throw new HSe(this.user, `Invalid delete count: ${e}`);
    }
    if (e !== 0 || t.length !== 0) {
      this.eventBufferer.bufferEvents(() => this.spliceable.splice(n, e, t));
    }
  }
  updateWidth(n) {
    this.view.updateWidth(n);
  }
  updateElementHeight(n, e) {
    this.view.updateElementHeight(n, e, null);
  }
  rerender() {
    this.view.rerender();
  }
  element(n) {
    return this.view.element(n);
  }
  indexOf(n) {
    return this.view.indexOf(n);
  }
  indexAt(n) {
    return this.view.indexAt(n);
  }
  get length() {
    return this.view.length;
  }
  get contentHeight() {
    return this.view.contentHeight;
  }
  get contentWidth() {
    return this.view.contentWidth;
  }
  get onDidChangeContentHeight() {
    return this.view.onDidChangeContentHeight;
  }
  get onDidChangeContentWidth() {
    return this.view.onDidChangeContentWidth;
  }
  get scrollTop() {
    return this.view.getScrollTop();
  }
  set scrollTop(n) {
    this.view.setScrollTop(n);
  }
  get scrollLeft() {
    return this.view.getScrollLeft();
  }
  set scrollLeft(n) {
    this.view.setScrollLeft(n);
  }
  get scrollHeight() {
    return this.view.scrollHeight;
  }
  get renderHeight() {
    return this.view.renderHeight;
  }
  get firstVisibleIndex() {
    return this.view.firstVisibleIndex;
  }
  get firstMostlyVisibleIndex() {
    return this.view.firstMostlyVisibleIndex;
  }
  get lastVisibleIndex() {
    return this.view.lastVisibleIndex;
  }
  get ariaLabel() {
    return this._ariaLabel;
  }
  set ariaLabel(n) {
    this._ariaLabel = n;
    this.view.domNode.setAttribute("aria-label", n);
  }
  domFocus() {
    this.view.domNode.focus({
      preventScroll: true
    });
  }
  layout(n, e) {
    this.view.layout(n, e);
  }
  triggerTypeNavigation() {
    this.typeNavigationController?.trigger();
  }
  setSelection(n, e) {
    for (const t of n) {
      if (t < 0 || t >= this.length) {
        throw new HSe(this.user, `Invalid index ${t}`);
      }
    }
    this.selection.set(n, e);
  }
  getSelection() {
    return this.selection.get();
  }
  getSelectedElements() {
    return this.getSelection().map(n => this.view.element(n));
  }
  setAnchor(n) {
    if (typeof n === "undefined") {
      this.anchor.set([]);
      return;
    }
    if (n < 0 || n >= this.length) {
      throw new HSe(this.user, `Invalid index ${n}`);
    }
    this.anchor.set([n]);
  }
  getAnchor() {
    return this.anchor.get().at(0);
  }
  getAnchorElement() {
    const n = this.getAnchor();
    if (typeof n === "undefined") {
      return undefined;
    } else {
      return this.element(n);
    }
  }
  setFocus(n, e) {
    for (const t of n) {
      if (t < 0 || t >= this.length) {
        throw new HSe(this.user, `Invalid index ${t}`);
      }
    }
    this.focus.set(n, e);
  }
  focusNext(n = 1, e = false, t, i) {
    if (this.length === 0) {
      return;
    }
    const r = this.focus.get();
    const s = this.findNextIndex(r.length > 0 ? r[0] + n : 0, e, i);
    if (s > -1) {
      this.setFocus([s], t);
    }
  }
  focusPrevious(n = 1, e = false, t, i) {
    if (this.length === 0) {
      return;
    }
    const r = this.focus.get();
    const s = this.findPreviousIndex(r.length > 0 ? r[0] - n : 0, e, i);
    if (s > -1) {
      this.setFocus([s], t);
    }
  }
  async focusNextPage(n, e) {
    let t = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
    t = t === 0 ? 0 : t - 1;
    const i = this.getFocus()[0];
    if (i !== t && (i === undefined || t > i)) {
      const r = this.findPreviousIndex(t, false, e);
      if (r > -1 && i !== r) {
        this.setFocus([r], n);
      } else {
        this.setFocus([t], n);
      }
    } else {
      const r = this.view.getScrollTop();
      let s = r + this.view.renderHeight;
      if (t > i) {
        s -= this.view.elementHeight(t);
      }
      this.view.setScrollTop(s);
      if (this.view.getScrollTop() !== r) {
        this.setFocus([]);
        await Af(0);
        await this.focusNextPage(n, e);
      }
    }
  }
  async focusPreviousPage(n, e, t = () => 0) {
    let i;
    const r = t();
    const s = this.view.getScrollTop() + r;
    if (s === 0) {
      i = this.view.indexAt(s);
    } else {
      i = this.view.indexAfter(s - 1);
    }
    const o = this.getFocus()[0];
    if (o !== i && (o === undefined || o >= i)) {
      const a = this.findNextIndex(i, false, e);
      if (a > -1 && o !== a) {
        this.setFocus([a], n);
      } else {
        this.setFocus([i], n);
      }
    } else {
      const a = s;
      this.view.setScrollTop(s - this.view.renderHeight - r);
      if (this.view.getScrollTop() + t() !== a) {
        this.setFocus([]);
        await Af(0);
        await this.focusPreviousPage(n, e, t);
      }
    }
  }
  focusLast(n, e) {
    if (this.length === 0) {
      return;
    }
    const t = this.findPreviousIndex(this.length - 1, false, e);
    if (t > -1) {
      this.setFocus([t], n);
    }
  }
  focusFirst(n, e) {
    this.focusNth(0, n, e);
  }
  focusNth(n, e, t) {
    if (this.length === 0) {
      return;
    }
    const i = this.findNextIndex(n, false, t);
    if (i > -1) {
      this.setFocus([i], e);
    }
  }
  findNextIndex(n, e = false, t) {
    for (let i = 0; i < this.length; i++) {
      if (n >= this.length && !e) {
        return -1;
      }
      n = n % this.length;
      if (!t || t(this.element(n))) {
        return n;
      }
      n++;
    }
    return -1;
  }
  findPreviousIndex(n, e = false, t) {
    for (let i = 0; i < this.length; i++) {
      if (n < 0 && !e) {
        return -1;
      }
      n = (this.length + n % this.length) % this.length;
      if (!t || t(this.element(n))) {
        return n;
      }
      n--;
    }
    return -1;
  }
  getFocus() {
    return this.focus.get();
  }
  getFocusedElements() {
    return this.getFocus().map(n => this.view.element(n));
  }
  reveal(n, e, t = 0) {
    if (n < 0 || n >= this.length) {
      throw new HSe(this.user, `Invalid index ${n}`);
    }
    const i = this.view.getScrollTop();
    const r = this.view.elementTop(n);
    const s = this.view.elementHeight(n);
    if (_1(e)) {
      const o = s - this.view.renderHeight + t;
      this.view.setScrollTop(o * zA(e, 0, 1) + r - t);
    } else {
      const o = r + s;
      const a = i + this.view.renderHeight;
      if (!(r < i + t) || !(o >= a)) {
        if (r < i + t || o >= a && s >= this.view.renderHeight) {
          this.view.setScrollTop(r - t);
        } else if (o >= a) {
          this.view.setScrollTop(o - this.view.renderHeight);
        }
      }
    }
  }
  getRelativeTop(n, e = 0) {
    if (n < 0 || n >= this.length) {
      throw new HSe(this.user, `Invalid index ${n}`);
    }
    const t = this.view.getScrollTop();
    const i = this.view.elementTop(n);
    const r = this.view.elementHeight(n);
    if (i < t + e || i + r > t + this.view.renderHeight) {
      return null;
    }
    const s = r - this.view.renderHeight + e;
    return Math.abs((t + e - i) / s);
  }
  isDOMFocused() {
    return zP(this.view.domNode);
  }
  getHTMLElement() {
    return this.view.domNode;
  }
  getScrollableElement() {
    return this.view.scrollableElementDomNode;
  }
  getElementID(n) {
    return this.view.getElementDomId(n);
  }
  getElementTop(n) {
    return this.view.elementTop(n);
  }
  style(n) {
    this.styleController.style(n);
  }
  toListEvent({
    indexes: n,
    browserEvent: e
  }) {
    return {
      indexes: n,
      elements: n.map(t => this.view.element(t)),
      browserEvent: e
    };
  }
  _onFocusChange() {
    const n = this.focus.get();
    this.view.domNode.classList.toggle("element-focused", n.length > 0);
    this.onDidChangeActiveDescendant();
  }
  onDidChangeActiveDescendant() {
    const n = this.focus.get();
    if (n.length > 0) {
      let e;
      if (this.accessibilityProvider?.getActiveDescendantId) {
        e = this.accessibilityProvider.getActiveDescendantId(this.view.element(n[0]));
      }
      this.view.domNode.setAttribute("aria-activedescendant", e || this.view.getElementDomId(n[0]));
    } else {
      this.view.domNode.removeAttribute("aria-activedescendant");
    }
  }
  _onSelectionChange() {
    const n = this.selection.get();
    this.view.domNode.classList.toggle("selection-none", n.length === 0);
    this.view.domNode.classList.toggle("selection-single", n.length === 1);
    this.view.domNode.classList.toggle("selection-multiple", n.length > 1);
  }
  dispose() {
    this._onDidDispose.fire();
    this.disposables.dispose();
    this._onDidDispose.dispose();
  }
};
__decorate([cl], JR.prototype, "onDidChangeFocus", null);
__decorate([cl], JR.prototype, "onDidChangeSelection", null);
__decorate([cl], JR.prototype, "onContextMenu", null);
__decorate([cl], JR.prototype, "onKeyDown", null);
__decorate([cl], JR.prototype, "onKeyUp", null);
__decorate([cl], JR.prototype, "onKeyPress", null);
__decorate([cl], JR.prototype, "onDidFocus", null);
__decorate([cl], JR.prototype, "onDidBlur", null);
