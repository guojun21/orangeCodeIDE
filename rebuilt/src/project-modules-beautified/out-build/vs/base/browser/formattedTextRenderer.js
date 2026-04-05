"use strict";

// Module: out-build/vs/base/browser/formattedTextRenderer.js
// Offset: 2077898 (bundle byte offset)
// Size: 903 bytes
ri();
o0h = class {
  constructor(n) {
    this.source = n;
    this.index = 0;
  }
  eos() {
    return this.index >= this.source.length;
  }
  next() {
    const n = this.peek();
    this.advance();
    return n;
  }
  peek() {
    return this.source[this.index];
  }
  advance() {
    this.index++;
  }
};
(function (n) {
  n[n.Invalid = 0] = "Invalid";
  n[n.Root = 1] = "Root";
  n[n.Text = 2] = "Text";
  n[n.Bold = 3] = "Bold";
  n[n.Italics = 4] = "Italics";
  n[n.Action = 5] = "Action";
  n[n.ActionClose = 6] = "ActionClose";
  n[n.Code = 7] = "Code";
  n[n.NewLine = 8] = "NewLine";
})(a0h ||= {});
