"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/notebookViewEvents.js
// Offset: 30816393 (bundle byte offset)
// Size: 609 bytes
(function (n) {
  n[n.LayoutChanged = 1] = "LayoutChanged";
  n[n.MetadataChanged = 2] = "MetadataChanged";
  n[n.CellStateChanged = 3] = "CellStateChanged";
})(dit ||= {});
lpu = class {
  constructor(n, e) {
    this.source = n;
    this.value = e;
    this.type = dit.LayoutChanged;
  }
};
qEf = class {
  constructor(n) {
    this.source = n;
    this.type = dit.MetadataChanged;
  }
};
HEf = class {
  constructor(n, e) {
    this.source = n;
    this.cell = e;
    this.type = dit.CellStateChanged;
  }
};
