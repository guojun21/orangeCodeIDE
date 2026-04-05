"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/notebookBrowser.js
// Offset: 33682345 (bundle byte offset)
// Size: 1941 bytes
ph();
mX();
W1e();
NIa();
MIa = "notebook.cell.expandCellInput";
H6f = "notebook.cell.execute";
FIa = "notebook.cell.detectLanguage";
X_u = "notebook.cell.changeLanguage";
e0u = "notebook.cell.quitEdit";
t0u = "notebook.cell.expandCellOutput";
OIa = "jupyter-notebook";
Wki = "ms-toolsai.jupyter";
J6f = new Map([[OIa, Wki]]);
UIa = new Map();
UIa.set(OIa, new Map());
UIa.get(OIa)?.set("python", {
  extensionIds: ["ms-python.python", Wki],
  displayName: "Python + Jupyter"
});
(function (n) {
  n[n.Html = 0] = "Html";
  n[n.Extension = 1] = "Extension";
})(G6f ||= {});
(function (n) {
  n[n.fullCell = 0] = "fullCell";
  n[n.firstLine = 1] = "firstLine";
})(zbn ||= {});
(function (n) {
  n[n.Uninitialized = 0] = "Uninitialized";
  n[n.Estimated = 1] = "Estimated";
  n[n.FromCache = 2] = "FromCache";
  n[n.Measured = 3] = "Measured";
})(p5 ||= {});
(function (n) {
  n[n.Fold = 0] = "Fold";
})(n0u ||= {});
(function (n) {
  n[n.Left = 1] = "Left";
  n[n.Center = 2] = "Center";
  n[n.Right = 4] = "Right";
  n[n.Full = 7] = "Full";
})(HU ||= {});
(function (n) {
  n[n.Default = 1] = "Default";
  n[n.Top = 2] = "Top";
  n[n.Center = 3] = "Center";
  n[n.CenterIfOutsideViewport = 4] = "CenterIfOutsideViewport";
  n[n.NearTopIfOutsideViewport = 5] = "NearTopIfOutsideViewport";
  n[n.FirstLineIfOutsideViewport = 6] = "FirstLineIfOutsideViewport";
})(W6f ||= {});
(function (n) {
  n[n.Default = 1] = "Default";
  n[n.Center = 2] = "Center";
  n[n.CenterIfOutsideViewport = 3] = "CenterIfOutsideViewport";
})(Axe ||= {});
(function (n) {
  n[n.Preview = 0] = "Preview";
  n[n.Editing = 1] = "Editing";
})(aw ||= {});
(function (n) {
  n[n.Container = 0] = "Container";
  n[n.Editor = 1] = "Editor";
  n[n.Output = 2] = "Output";
  n[n.ChatInput = 3] = "ChatInput";
})(Tk ||= {});
(function (n) {
  n[n.None = 0] = "None";
  n[n.Top = 1] = "Top";
  n[n.Bottom = 2] = "Bottom";
  n[n.Both = 3] = "Both";
})(gwe ||= {});
(function (n) {
  n[n.None = 0] = "None";
  n[n.Start = 1] = "Start";
  n[n.End = 2] = "End";
  n[n.Both = 3] = "Both";
})(yxe ||= {});
(function (n) {
  n[n.None = 0] = "None";
  n[n.Expanded = 1] = "Expanded";
  n[n.Collapsed = 2] = "Collapsed";
})(Q6f ||= {});
