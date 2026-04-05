"use strict";

// Module: out-build/vs/editor/browser/widget/diffEditor/utils.js
// Offset: 2133601 (bundle byte offset)
// Size: 3234 bytes
GD();
Po();
rt();
Uc();
Ybh();
tl();
ts();
Kbe();
wDc = class extends at {
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get automaticLayout() {
    return this._automaticLayout;
  }
  constructor(n, e) {
    super();
    this._automaticLayout = false;
    this.elementSizeObserver = this._register(new cTc(n, e));
    this._width = Ua(this, this.elementSizeObserver.getWidth());
    this._height = Ua(this, this.elementSizeObserver.getHeight());
    this._register(this.elementSizeObserver.onDidChange(t => pp(i => {
      this._width.set(this.elementSizeObserver.getWidth(), i);
      this._height.set(this.elementSizeObserver.getHeight(), i);
    })));
  }
  observe(n) {
    this.elementSizeObserver.observe(n);
  }
  setAutomaticLayout(n) {
    this._automaticLayout = n;
    if (n) {
      this.elementSizeObserver.startObserving();
    } else {
      this.elementSizeObserver.stopObserving();
    }
  }
};
i5o = class extends at {
  constructor(n, e, t) {
    super();
    this._register(new T0h(n, t));
    this._register(aKe(t, {
      height: e.actualHeight,
      top: e.actualTop
    }));
  }
};
dbt = class {
  get afterLineNumber() {
    return this._afterLineNumber.get();
  }
  constructor(n, e) {
    this._afterLineNumber = n;
    this.heightInPx = e;
    this.domNode = document.createElement("div");
    this._actualTop = Ua(this, undefined);
    this._actualHeight = Ua(this, undefined);
    this.actualTop = this._actualTop;
    this.actualHeight = this._actualHeight;
    this.showInHiddenAreas = true;
    this.onChange = this._afterLineNumber;
    this.onDomNodeTop = t => {
      this._actualTop.set(t, undefined);
    };
    this.onComputedHeight = t => {
      this._actualHeight.set(t, undefined);
    };
  }
};
T0h = class TGb {
  static {
    this._counter = 0;
  }
  constructor(e, t) {
    this._editor = e;
    this._domElement = t;
    this._overlayWidgetId = `managedOverlayWidget-${TGb._counter++}`;
    this._overlayWidget = {
      getId: () => this._overlayWidgetId,
      getDomNode: () => this._domElement,
      getPosition: () => null
    };
    this._editor.addOverlayWidget(this._overlayWidget);
  }
  dispose() {
    this._editor.removeOverlayWidget(this._overlayWidget);
  }
};
I0h = class extends Wc {
  dispose() {
    super.dispose(true);
  }
};
hbt = class {
  static create(n, e = undefined) {
    return new r5o(n, n, e);
  }
  static createWithDisposable(n, e, t = undefined) {
    const i = new Ut();
    i.add(e);
    i.add(n);
    return new r5o(n, i, t);
  }
  static createOfNonDisposable(n, e, t = undefined) {
    return new r5o(n, e, t);
  }
  [Symbol.dispose]() {
    this.dispose();
  }
};
r5o = class extends hbt {
  constructor(n, e, t) {
    super();
    this.object = n;
    this._disposable = e;
    this._debugOwner = t;
    this._refCount = 1;
    this._isDisposed = false;
    this._owners = [];
    if (t) {
      this._addOwner(t);
    }
  }
  _addOwner(n) {
    if (n) {
      this._owners.push(n);
    }
  }
  createNewRef(n) {
    this._refCount++;
    if (n) {
      this._addOwner(n);
    }
    return new D0h(this, n);
  }
  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;
      this._decreaseRefCount(this._debugOwner);
    }
  }
  _decreaseRefCount(n) {
    this._refCount--;
    if (this._refCount === 0) {
      this._disposable.dispose();
    }
    if (n) {
      const e = this._owners.indexOf(n);
      if (e !== -1) {
        this._owners.splice(e, 1);
      }
    }
  }
};
D0h = class extends hbt {
  constructor(n, e) {
    super();
    this._base = n;
    this._debugOwner = e;
    this._isDisposed = false;
  }
  get object() {
    return this._base.object;
  }
  createNewRef(n) {
    return this._base.createNewRef(n);
  }
  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;
      this._base._decreaseRefCount(this._debugOwner);
    }
  }
};
