"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/inlineEditWithChanges.js
// Offset: 25454798 (bundle byte offset)
// Size: 693 bytes
zyg();
wjl = class {
  constructor(n, e, t, i, r) {
    this.originalText = n;
    this.edit = e;
    this.cursorPosition = t;
    this.commands = i;
    this.inlineCompletion = r;
    this.lineEdit = Ugi.fromSingleTextEdit(this.edit.toSingle(this.originalText), this.originalText);
    this.originalLineRange = this.lineEdit.lineRange;
    this.modifiedLineRange = this.lineEdit.toLineEdit().getNewLineRanges()[0];
  }
  equals(n) {
    return this.originalText.getValue() === n.originalText.getValue() && this.edit.equals(n.edit) && this.cursorPosition.equals(n.cursorPosition) && this.commands === n.commands && this.inlineCompletion === n.inlineCompletion;
  }
};
