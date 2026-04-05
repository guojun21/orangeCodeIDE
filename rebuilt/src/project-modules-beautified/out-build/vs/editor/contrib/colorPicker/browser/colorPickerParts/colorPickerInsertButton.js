"use strict";

// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerParts/colorPickerInsertButton.js
// Offset: 24729729 (bundle byte offset)
// Size: 513 bytes
_et();
ri();
yn();
rt();
Hmg = class extends at {
  constructor(n) {
    super();
    this._onClicked = this._register(new Qe());
    this.onClicked = this._onClicked.event;
    this._button = Rt(n, document.createElement("button"));
    this._button.classList.add("insert-button");
    this._button.textContent = "Insert";
    this._register(ei(this._button, ir.CLICK, () => {
      this._onClicked.fire();
    }));
  }
  get button() {
    return this._button;
  }
};
