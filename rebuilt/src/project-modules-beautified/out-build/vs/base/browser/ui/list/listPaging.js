"use strict";

// Module: out-build/vs/base/browser/ui/list/listPaging.js
// Offset: 24766812 (bundle byte offset)
// Size: 3841 bytes
Vs();
Po();
yn();
rt();
Zwh();
SW();
ri();
bpg = class {
  get templateId() {
    return this.renderer.templateId;
  }
  constructor(n, e) {
    this.renderer = n;
    this.modelProvider = e;
  }
  renderTemplate(n) {
    return {
      data: this.renderer.renderTemplate(n),
      disposable: at.None
    };
  }
  renderElement(n, e, t, i) {
    t.disposable?.dispose();
    if (!t.data) {
      return;
    }
    const r = this.modelProvider();
    if (r.isResolved(n)) {
      return this.renderer.renderElement(r.get(n), n, t.data, i);
    }
    const s = new Wc();
    const o = r.resolve(n, s.token);
    t.disposable = {
      dispose: () => s.cancel()
    };
    this.renderer.renderPlaceholder(n, t.data);
    o.then(a => this.renderer.renderElement(a, n, t.data, i));
  }
  disposeTemplate(n) {
    if (n.disposable) {
      n.disposable.dispose();
      n.disposable = undefined;
    }
    if (n.data) {
      this.renderer.disposeTemplate(n.data);
      n.data = undefined;
    }
  }
};
vpg = class {
  constructor(n, e) {
    this.modelProvider = n;
    this.accessibilityProvider = e;
  }
  getWidgetAriaLabel() {
    return this.accessibilityProvider.getWidgetAriaLabel();
  }
  getAriaLabel(n) {
    const e = this.modelProvider();
    if (e.isResolved(n)) {
      return this.accessibilityProvider.getAriaLabel(e.get(n));
    } else {
      return null;
    }
  }
};
iCt = class {
  constructor(n, e, t, i, r = {}) {
    const s = () => this.model;
    const o = i.map(a => new bpg(a, s));
    this.list = new JR(n, e, t, o, g0A(s, r));
  }
  updateOptions(n) {
    this.list.updateOptions(n);
  }
  getHTMLElement() {
    return this.list.getHTMLElement();
  }
  isDOMFocused() {
    return zP(this.getHTMLElement());
  }
  domFocus() {
    this.list.domFocus();
  }
  get onDidFocus() {
    return this.list.onDidFocus;
  }
  get onDidBlur() {
    return this.list.onDidBlur;
  }
  get widget() {
    return this.list;
  }
  get onDidDispose() {
    return this.list.onDidDispose;
  }
  get onMouseClick() {
    return In.map(this.list.onMouseClick, ({
      element: n,
      index: e,
      browserEvent: t
    }) => ({
      element: n === undefined ? undefined : this._model.get(n),
      index: e,
      browserEvent: t
    }));
  }
  get onMouseDblClick() {
    return In.map(this.list.onMouseDblClick, ({
      element: n,
      index: e,
      browserEvent: t
    }) => ({
      element: n === undefined ? undefined : this._model.get(n),
      index: e,
      browserEvent: t
    }));
  }
  get onTap() {
    return In.map(this.list.onTap, ({
      element: n,
      index: e,
      browserEvent: t
    }) => ({
      element: n === undefined ? undefined : this._model.get(n),
      index: e,
      browserEvent: t
    }));
  }
  get onPointer() {
    return In.map(this.list.onPointer, ({
      element: n,
      index: e,
      browserEvent: t
    }) => ({
      element: n === undefined ? undefined : this._model.get(n),
      index: e,
      browserEvent: t
    }));
  }
  get onDidChangeFocus() {
    return In.map(this.list.onDidChangeFocus, ({
      elements: n,
      indexes: e,
      browserEvent: t
    }) => ({
      elements: n.map(i => this._model.get(i)),
      indexes: e,
      browserEvent: t
    }));
  }
  get onDidChangeSelection() {
    return In.map(this.list.onDidChangeSelection, ({
      elements: n,
      indexes: e,
      browserEvent: t
    }) => ({
      elements: n.map(i => this._model.get(i)),
      indexes: e,
      browserEvent: t
    }));
  }
  get onContextMenu() {
    return In.map(this.list.onContextMenu, ({
      element: n,
      index: e,
      anchor: t,
      browserEvent: i
    }) => typeof n === "undefined" ? {
      element: n,
      index: e,
      anchor: t,
      browserEvent: i
    } : {
      element: this._model.get(n),
      index: e,
      anchor: t,
      browserEvent: i
    });
  }
  get model() {
    return this._model;
  }
  set model(n) {
    this._model = n;
    this.list.splice(0, this.list.length, _H(n.length));
  }
  get length() {
    return this.list.length;
  }
  get scrollTop() {
    return this.list.scrollTop;
  }
  set scrollTop(n) {
    this.list.scrollTop = n;
  }
  get scrollLeft() {
    return this.list.scrollLeft;
  }
  set scrollLeft(n) {
    this.list.scrollLeft = n;
  }
  setAnchor(n) {
    this.list.setAnchor(n);
  }
  getAnchor() {
    return this.list.getAnchor();
  }
  setFocus(n) {
    this.list.setFocus(n);
  }
  focusNext(n, e) {
    this.list.focusNext(n, e);
  }
  focusPrevious(n, e) {
    this.list.focusPrevious(n, e);
  }
  focusNextPage() {
    return this.list.focusNextPage();
  }
  focusPreviousPage() {
    return this.list.focusPreviousPage();
  }
  focusLast() {
    this.list.focusLast();
  }
  focusFirst() {
    this.list.focusFirst();
  }
  getFocus() {
    return this.list.getFocus();
  }
  setSelection(n, e) {
    this.list.setSelection(n, e);
  }
  getSelection() {
    return this.list.getSelection();
  }
  getSelectedElements() {
    return this.getSelection().map(n => this.model.get(n));
  }
  layout(n, e) {
    this.list.layout(n, e);
  }
  triggerTypeNavigation() {
    this.list.triggerTypeNavigation();
  }
  reveal(n, e) {
    this.list.reveal(n, e);
  }
  style(n) {
    this.list.style(n);
  }
  dispose() {
    this.list.dispose();
  }
};
