"use strict";

// Module: out-build/vs/editor/browser/config/elementSizeObserver.js
// Offset: 1441947 (bundle byte offset)
// Size: 1541 bytes
rt();
yn();
ri();
cTc = class extends at {
  constructor(n, e) {
    super();
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._referenceDomElement = n;
    this._width = -1;
    this._height = -1;
    this._resizeObserver = null;
    this.measureReferenceDomElement(false, e);
  }
  dispose() {
    this.stopObserving();
    super.dispose();
  }
  getWidth() {
    return this._width;
  }
  getHeight() {
    return this._height;
  }
  startObserving(n = false) {
    if (!this._resizeObserver && this._referenceDomElement) {
      let e = null;
      const t = () => {
        if (e) {
          this.observe({
            width: e.width,
            height: e.height
          }, n);
        } else {
          this.observe(undefined, n);
        }
      };
      let i = false;
      let r = false;
      const s = () => {
        if (i && !r) {
          try {
            i = false;
            r = true;
            t();
          } finally {
            r_(As(this._referenceDomElement), () => {
              r = false;
              s();
            });
          }
        }
      };
      const o = As(this._referenceDomElement)?.ResizeObserver;
      this._resizeObserver = new o(a => {
        if (a && a[0] && a[0].contentRect) {
          e = {
            width: a[0].contentRect.width,
            height: a[0].contentRect.height
          };
        } else {
          e = null;
        }
        i = true;
        s();
      });
      this._resizeObserver.observe(this._referenceDomElement);
    }
  }
  stopObserving() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }
  observe(n, e = false) {
    this.measureReferenceDomElement(true, n, e);
  }
  measureReferenceDomElement(n, e, t = false) {
    let i = 0;
    let r = 0;
    if (e) {
      i = e.width;
      r = e.height;
    } else if (this._referenceDomElement) {
      i = this._referenceDomElement.clientWidth;
      r = this._referenceDomElement.clientHeight;
    }
    i = Math.max(5, i);
    r = Math.max(5, r);
    if (this._width !== i || this._height !== r) {
      this._width = i;
      if (t) {
        this._height = Math.max(r, this._referenceDomElement.clientHeight);
      } else {
        this._height = r;
      }
      if (n) {
        this._onDidChange.fire();
      }
    }
  }
};
