"use strict";

// Module: out-build/vs/workbench/contrib/scm/common/quickDiff.js
// Offset: 33641665 (bundle byte offset)
// Size: 1166 bytes
Ht();
Wt();
xf();
Nl();
Gbn = xi("quickDiff");
SIa = Rn("editorGutter.modifiedBackground", {
  dark: "#1B81A8",
  light: "#2090D3",
  hcDark: "#1B81A8",
  hcLight: "#2090D3"
}, _(10498, null));
kIa = Rn("editorGutter.addedBackground", {
  dark: "#487E02",
  light: "#48985D",
  hcDark: "#487E02",
  hcLight: "#48985D"
}, _(10499, null));
EIa = Rn("editorGutter.deletedBackground", Ioe, _(10500, null));
Uki = Rn("minimapGutter.modifiedBackground", SIa, _(10501, null));
$ki = Rn("minimapGutter.addedBackground", kIa, _(10502, null));
xIa = Rn("minimapGutter.deletedBackground", EIa, _(10503, null));
Wbn = Rn("editorOverviewRuler.modifiedForeground", rl(SIa, 0.6), _(10504, null));
Qbn = Rn("editorOverviewRuler.addedForeground", rl(kIa, 0.6), _(10505, null));
qki = Rn("editorOverviewRuler.deletedForeground", rl(EIa, 0.6), _(10506, null));
Ihy = Rn("editorGutter.itemGlyphForeground", {
  dark: jE,
  light: jE,
  hcDark: Xr.black,
  hcLight: Xr.white
}, _(10507, null));
Dhy = Rn("editorGutter.itemBackground", {
  dark: K4t(pW, Wm),
  light: gF(K4t(pW, Wm), 0.05),
  hcDark: Xr.white,
  hcLight: Xr.black
}, _(10508, null));
(function (n) {
  n[n.Modify = 0] = "Modify";
  n[n.Add = 1] = "Add";
  n[n.Delete = 2] = "Delete";
})(Xce ||= {});
