"use strict";

// Module: out-build/vs/editor/common/model/textModelPart.js
// Offset: 1119831 (bundle byte offset)
// Size: 449 bytes
rt();
HEc = class extends at {
  constructor() {
    super(...arguments);
    this._isDisposed = false;
  }
  dispose() {
    super.dispose();
    this._isDisposed = true;
  }
  assertNotDisposed() {
    if (this._isDisposed) {
      throw new Error("TextModelPart is disposed!");
    }
  }
};
