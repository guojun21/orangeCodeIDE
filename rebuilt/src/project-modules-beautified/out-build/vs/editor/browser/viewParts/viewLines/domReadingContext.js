"use strict";

// Module: out-build/vs/editor/browser/viewParts/viewLines/domReadingContext.js
// Offset: 1652627 (bundle byte offset)
// Size: 770 bytes
m3o = class {
  get didDomLayout() {
    return this._didDomLayout;
  }
  readClientRect() {
    if (!this._clientRectRead) {
      this._clientRectRead = true;
      const n = this._domNode.getBoundingClientRect();
      this.markDidDomLayout();
      this._clientRectDeltaLeft = n.left;
      this._clientRectScale = n.width / this._domNode.offsetWidth;
    }
  }
  get clientRectDeltaLeft() {
    if (!this._clientRectRead) {
      this.readClientRect();
    }
    return this._clientRectDeltaLeft;
  }
  get clientRectScale() {
    if (!this._clientRectRead) {
      this.readClientRect();
    }
    return this._clientRectScale;
  }
  constructor(n, e) {
    this._domNode = n;
    this.endNode = e;
    this._didDomLayout = false;
    this._clientRectDeltaLeft = 0;
    this._clientRectScale = 1;
    this._clientRectRead = false;
  }
  markDidDomLayout() {
    this._didDomLayout = true;
  }
};
