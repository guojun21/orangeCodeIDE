"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/native/nativeEditContextUtils.js
// Offset: 1841024 (bundle byte offset)
// Size: 829 bytes
ri();
rt();
ewh = class extends at {
  constructor(n, e) {
    super();
    this._domNode = n;
    this._onFocusChange = e;
    this._isFocused = false;
    this._isPaused = false;
    this._register(ei(this._domNode, "focus", () => {
      if (!this._isPaused) {
        this.refreshFocusState();
      }
    }));
    this._register(ei(this._domNode, "blur", () => {
      if (!this._isPaused) {
        this._handleFocusedChanged(false);
      }
    }));
  }
  pause() {
    this._isPaused = true;
  }
  resume() {
    this._isPaused = false;
    this.refreshFocusState();
  }
  _handleFocusedChanged(n) {
    if (this._isFocused !== n) {
      this._isFocused = n;
      this._onFocusChange(this._isFocused);
    }
  }
  focus() {
    this._domNode.focus();
    this.refreshFocusState();
  }
  refreshFocusState() {
    const n = Qze(this._domNode);
    const e = n ? n.activeElement : _C();
    const t = this._domNode === e;
    this._handleFocusedChanged(t);
  }
  get isFocused() {
    return this._isFocused;
  }
};
