"use strict";

// Module: out-build/vs/workbench/contrib/codeEditor/browser/menuPreventer.js
// Offset: 25571644 (bundle byte offset)
// Size: 1970 bytes
rt();
Cu();
jZ = class extends at {
  static {
    this.ID = "editor.contrib.menuPreventer";
  }
  constructor(n) {
    super();
    this._editor = n;
    this._altListeningMouse = false;
    this._altMouseTriggered = false;
    this._register(this._editor.onMouseDown(e => {
      if (this._altListeningMouse) {
        this._altMouseTriggered = true;
      }
    }));
    this._register(this._editor.onKeyDown(e => {
      if (e.equals(512)) {
        if (!this._altListeningMouse) {
          this._altMouseTriggered = false;
        }
        this._altListeningMouse = true;
      }
    }));
    this._register(this._editor.onKeyUp(e => {
      if (e.equals(512)) {
        if (this._altMouseTriggered) {
          e.preventDefault();
        }
        this._altListeningMouse = false;
        this._altMouseTriggered = false;
      }
    }));
  }
};
Mg(jZ.ID, jZ, 2);
