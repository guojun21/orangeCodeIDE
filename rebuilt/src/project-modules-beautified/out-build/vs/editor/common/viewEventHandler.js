"use strict";

// Module: out-build/vs/editor/common/viewEventHandler.js
// Offset: 1472090 (bundle byte offset)
// Size: 1903 bytes
rt();
qVe = class extends at {
  constructor() {
    super();
    this._shouldRender = true;
  }
  shouldRender() {
    return this._shouldRender;
  }
  forceShouldRender() {
    this._shouldRender = true;
  }
  setShouldRender() {
    this._shouldRender = true;
  }
  onDidRender() {
    this._shouldRender = false;
  }
  onCompositionStart(n) {
    return false;
  }
  onCompositionEnd(n) {
    return false;
  }
  onConfigurationChanged(n) {
    return false;
  }
  onCursorStateChanged(n) {
    return false;
  }
  onDecorationsChanged(n) {
    return false;
  }
  onFlushed(n) {
    return false;
  }
  onFocusChanged(n) {
    return false;
  }
  onLanguageConfigurationChanged(n) {
    return false;
  }
  onLineMappingChanged(n) {
    return false;
  }
  onLinesChanged(n) {
    return false;
  }
  onLinesDeleted(n) {
    return false;
  }
  onLinesInserted(n) {
    return false;
  }
  onRevealRangeRequest(n) {
    return false;
  }
  onScrollChanged(n) {
    return false;
  }
  onThemeChanged(n) {
    return false;
  }
  onTokensChanged(n) {
    return false;
  }
  onTokensColorsChanged(n) {
    return false;
  }
  onZonesChanged(n) {
    return false;
  }
  handleEvents(n) {
    let e = false;
    for (let t = 0, i = n.length; t < i; t++) {
      const r = n[t];
      switch (r.type) {
        case 0:
          if (this.onCompositionStart(r)) {
            e = true;
          }
          break;
        case 1:
          if (this.onCompositionEnd(r)) {
            e = true;
          }
          break;
        case 2:
          if (this.onConfigurationChanged(r)) {
            e = true;
          }
          break;
        case 3:
          if (this.onCursorStateChanged(r)) {
            e = true;
          }
          break;
        case 4:
          if (this.onDecorationsChanged(r)) {
            e = true;
          }
          break;
        case 5:
          if (this.onFlushed(r)) {
            e = true;
          }
          break;
        case 6:
          if (this.onFocusChanged(r)) {
            e = true;
          }
          break;
        case 7:
          if (this.onLanguageConfigurationChanged(r)) {
            e = true;
          }
          break;
        case 8:
          if (this.onLineMappingChanged(r)) {
            e = true;
          }
          break;
        case 9:
          if (this.onLinesChanged(r)) {
            e = true;
          }
          break;
        case 10:
          if (this.onLinesDeleted(r)) {
            e = true;
          }
          break;
        case 11:
          if (this.onLinesInserted(r)) {
            e = true;
          }
          break;
        case 12:
          if (this.onRevealRangeRequest(r)) {
            e = true;
          }
          break;
        case 13:
          if (this.onScrollChanged(r)) {
            e = true;
          }
          break;
        case 15:
          if (this.onTokensChanged(r)) {
            e = true;
          }
          break;
        case 14:
          if (this.onThemeChanged(r)) {
            e = true;
          }
          break;
        case 16:
          if (this.onTokensColorsChanged(r)) {
            e = true;
          }
          break;
        case 17:
          if (this.onZonesChanged(r)) {
            e = true;
          }
          break;
        default:
          console.info("View received unknown event: ");
          console.info(r);
      }
    }
    if (e) {
      this._shouldRender = true;
    }
  }
};
