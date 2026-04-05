"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/vsMarkdown.js
// Offset: 34020550 (bundle byte offset)
// Size: 984 bytes
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ti();
oN();
es();
epy();
sqf = qe("<div>");
YDa = n => {
  const e = wr();
  let t;
  let i = null;
  const [r, s] = lt(false);
  const o = () => {
    if (!t) {
      return;
    }
    s(true);
    if (i) {
      i.dispose();
      i = null;
    }
    t.replaceChildren();
    const a = typeof n.content == "string" ? {
      value: n.content,
      supportThemeIcons: n.supportThemeIcons ?? true,
      supportHtml: n.supportHtml ?? false,
      isTrusted: n.isTrusted ?? false
    } : n.content;
    const u = e.instantiationService.createInstance(sL, n.rendererOptions ?? {}).render(a);
    i = u;
    t.appendChild(u.element);
    n.onRenderComplete?.(u.element);
    s(false);
  };
  An(() => {
    n.content;
    n.rendererOptions;
    n.isTrusted;
    n.supportThemeIcons;
    n.supportHtml;
    o();
  });
  Ai(() => {
    if (i) {
      i.dispose();
      i = null;
    }
  });
  return (() => {
    var a = sqf();
    var l = t;
    if (typeof l == "function") {
      Bs(l, a);
    } else {
      t = a;
    }
    tn(u => {
      var d = `vs-markdown-container ${n.class ?? ""}`;
      var m = n.style;
      var p = r();
      if (d !== u.e) {
        Un(a, u.e = d);
      }
      u.t = La(a, m, u.t);
      if (p !== u.a) {
        Zr(a, "data-rendering", u.a = p);
      }
      return u;
    }, {
      e: undefined,
      t: undefined,
      a: undefined
    });
    return a;
  })();
};
