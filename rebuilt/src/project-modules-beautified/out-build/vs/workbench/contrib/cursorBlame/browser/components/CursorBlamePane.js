"use strict";

// Module: out-build/vs/workbench/contrib/cursorBlame/browser/components/CursorBlamePane.js
// Offset: 34197009 (bundle byte offset)
// Size: 1095 bytes
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ti();
fwe();
gCu();
pCu();
O6();
qi();
tg();
rt();
Jr();
Yn();
ts();
xw();
$Et();
oB();
Mrt();
Jrt();
es();
rgy();
Avn();
vCu();
t0();
Ek();
hBa();
sgy();
nHf = qe("<div class=\"smart-review-panel__meta-section smart-review-panel__agent-contribution-section\"><span class=smart-review-panel__changes-label>Contributions</span><div class=\"smart-review-panel__meta-section-content smart-review-panel__agent-content\"><div class=smart-review-panel__agent-bar>");
iHf = qe("<div>");
rHf = qe("<div class=cursor-blame-large-commit-banner><span></span><span>Large commit (<!> files). Diffs load when expanded.");
sHf = qe("<div class=review-pr-branch-name-container><span class=review-pr-commit-ref><span></span><span>");
oHf = qe("<button class=cursor-blame-open-github-button><span>Open in GitHub</span><span>");
aHf = 3;
Wrt = new Map();
cHf = n => {
  const e = Wrt.get(n);
  if (e) {
    Wrt.delete(n);
    Wrt.set(n, e);
    return e;
  }
};
lHf = (n, e) => {
  Wrt.set(n, e);
  if (Wrt.size > aHf) {
    const t = Wrt.keys().next();
    if (!t.done) {
      Wrt.delete(t.value);
    }
  }
};
