"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/inp.js
// Offset: 217252 (bundle byte offset)
// Size: 7938 bytes
lm();
AY();
AFt();
jpt();
CMo = [];
R2n = new Map();
zpt = new Map();
nnh = 60;
SMo = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press"
};
inh = ({
  metric: n
}) => {
  if (n.value == null) {
    return;
  }
  const e = m9(n.value);
  if (e > nnh) {
    return;
  }
  const t = n.entries.find(f => f.duration === n.value && SMo[f.name]);
  if (!t) {
    return;
  }
  const {
    interactionId: i
  } = t;
  const r = SMo[t.name];
  const s = m9(F$() + t.startTime);
  const o = HP();
  const a = o ? qP(o) : undefined;
  const l = i != null ? R2n.get(i) : undefined;
  const u = l?.span || a;
  const d = u ? jA(u).description : ry().getScopeData().transactionName;
  const m = l?.elementName || vY(t.target);
  const p = {
    [w1]: "auto.http.browser.inp",
    [HE]: `ui.interaction.${r}`,
    [rze]: t.duration
  };
  const g = $_c({
    name: m,
    transaction: d,
    attributes: p,
    startTime: s
  });
  if (g) {
    g.addEvent("inp", {
      [_pt]: "millisecond",
      [Cpt]: n.value
    });
    g.end(s + e);
  }
};
