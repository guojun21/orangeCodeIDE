"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/commentColors.js
// Offset: 33219048 (bundle byte offset)
// Size: 1181 bytes
Tg();
wq();
Ht();
Nl();
wTa = Rn("commentsView.resolvedIcon", {
  dark: h1c,
  light: h1c,
  hcDark: Du,
  hcLight: Du
}, _(5884, null));
_Ta = Rn("commentsView.unresolvedIcon", {
  dark: cOt,
  light: cOt,
  hcDark: Du,
  hcLight: Du
}, _(5885, null));
Rn("editorCommentsWidget.replyInputBackground", Cet, _(5886, null));
A8f = Rn("editorCommentsWidget.resolvedBorder", {
  dark: wTa,
  light: wTa,
  hcDark: Du,
  hcLight: Du
}, _(5887, null));
CTa = Rn("editorCommentsWidget.unresolvedBorder", {
  dark: _Ta,
  light: _Ta,
  hcDark: Du,
  hcLight: Du
}, _(5888, null));
tdy = Rn("editorCommentsWidget.rangeBackground", rl(CTa, 0.1), _(5889, null));
ndy = Rn("editorCommentsWidget.rangeActiveBackground", rl(CTa, 0.1), _(5890, null));
y8f = new Map([[AW.Unresolved, CTa], [AW.Resolved, A8f]]);
w8f = new Map([[AW.Unresolved, _Ta], [AW.Resolved, wTa]]);
Wwu = "--comment-thread-state-color";
Qwu = "--comment-view-thread-state-color";
jwu = "--comment-thread-state-background-color";
