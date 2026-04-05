"use strict";

// Module: out-build/vs/editor/common/viewModel/viewContext.js
// Offset: 1758626 (bundle byte offset)
// Size: 862 bytes
ClA();
Ayh = class {
  constructor(n, e, t) {
    this.configuration = n;
    this.theme = new vyh(e);
    this.viewModel = t;
    this.viewLayout = t.viewLayout;
  }
  addEventHandler(n) {
    this.viewModel.addViewEventHandler(n);
  }
  removeEventHandler(n) {
    this.viewModel.removeViewEventHandler(n);
  }
};
