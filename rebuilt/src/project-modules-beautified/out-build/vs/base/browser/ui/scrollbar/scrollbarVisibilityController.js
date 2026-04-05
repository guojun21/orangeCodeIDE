"use strict";

// Module: out-build/vs/base/browser/ui/scrollbar/scrollbarVisibilityController.js
// Offset: 1534944 (bundle byte offset)
// Size: 1389 bytes
vr();
rt();
Gvh = class extends at {
  constructor(n, e, t) {
    super();
    this._visibility = n;
    this._visibleClassName = e;
    this._invisibleClassName = t;
    this._domNode = null;
    this._isVisible = false;
    this._isNeeded = false;
    this._rawShouldBeVisible = false;
    this._shouldBeVisible = false;
    this._revealTimer = this._register(new O$());
  }
  setVisibility(n) {
    if (this._visibility !== n) {
      this._visibility = n;
      this._updateShouldBeVisible();
    }
  }
  setShouldBeVisible(n) {
    this._rawShouldBeVisible = n;
    this._updateShouldBeVisible();
  }
  _applyVisibilitySetting() {
    if (this._visibility === 2) {
      return false;
    } else if (this._visibility === 3) {
      return true;
    } else {
      return this._rawShouldBeVisible;
    }
  }
  _updateShouldBeVisible() {
    const n = this._applyVisibilitySetting();
    if (this._shouldBeVisible !== n) {
      this._shouldBeVisible = n;
      this.ensureVisibility();
    }
  }
  setIsNeeded(n) {
    if (this._isNeeded !== n) {
      this._isNeeded = n;
      this.ensureVisibility();
    }
  }
  setDomNode(n) {
    this._domNode = n;
    this._domNode.setClassName(this._invisibleClassName);
    this.setShouldBeVisible(false);
  }
  ensureVisibility() {
    if (!this._isNeeded) {
      this._hide(false);
      return;
    }
    if (this._shouldBeVisible) {
      this._reveal();
    } else {
      this._hide(true);
    }
  }
  _reveal() {
    if (!this._isVisible) {
      this._isVisible = true;
      this._revealTimer.setIfNotSet(() => {
        this._domNode?.setClassName(this._visibleClassName);
      }, 0);
    }
  }
  _hide(n) {
    this._revealTimer.cancel();
    if (this._isVisible) {
      this._isVisible = false;
      this._domNode?.setClassName(this._invisibleClassName + (n ? " fade" : ""));
    }
  }
};
