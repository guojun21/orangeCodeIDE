"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/checkbox/checkbox.js
// Offset: 31680077 (bundle byte offset)
// Size: 1625 bytes
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ti();
kay();
vNf = qe("<div role=checkbox>");
uxe = n => {
  const e = xe(() => n.size || "medium");
  const t = i => {
    if (i.key === " " || i.key === "Enter") {
      i.preventDefault();
      n.onChange(!n.value);
    }
  };
  return (() => {
    var i = vNf();
    Bs(r => {
      if (n.elementRef) {
        n.elementRef(r);
      }
    }, i);
    i.addEventListener("keydown", r => {
      if (n.tabFocusable) {
        t(r);
      }
    });
    i.addEventListener("click", r => {
      r.stopPropagation();
      n.onChange(!n.value);
    });
    tn(r => {
      var s = `cursor-setting-value-checkbox codicon codicon-check${n.value ? " checked" : ""} ${e()} ${n.highlightedBorder ? "highlighted-border" : ""} ${n.noBackground ? "no-background" : ""} ${n.filled ? "filled" : ""} outline-hidden`;
      var o = n.value;
      var a = n.ariaLabel;
      var l = n.ariaLabelledBy;
      var u = n.ariaDescribedBy;
      var d = n.style;
      var m = n.tabFocusable ? 0 : undefined;
      if (s !== r.e) {
        Un(i, r.e = s);
      }
      if (o !== r.t) {
        Zr(i, "aria-checked", r.t = o);
      }
      if (a !== r.a) {
        Zr(i, "aria-label", r.a = a);
      }
      if (l !== r.o) {
        Zr(i, "aria-labelledby", r.o = l);
      }
      if (u !== r.i) {
        Zr(i, "aria-describedby", r.i = u);
      }
      r.n = La(i, d, r.n);
      if (m !== r.s) {
        Zr(i, "tabindex", r.s = m);
      }
      return r;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined
    });
    return i;
  })();
};
