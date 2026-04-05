"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/scrollableDivMaxHeight.js
// Offset: 31924284 (bundle byte offset)
// Size: 1612 bytes
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Ti();
CD();
ZNf = qe("<div>");
$V = n => {
  const [e, t] = lt(null);
  const [i, r] = lt(null);
  const [s, o] = lt(-1);
  const a = () => {
    const u = i()?.getBoundingClientRect()?.height ?? 0;
    if (u !== s()) {
      o(u);
      t(u);
    }
  };
  An(() => {
    if (n.useResizeObserver) {
      const l = i();
      if (l) {
        const u = new ResizeObserver(() => {
          requestAnimationFrame(() => {
            a();
          });
        });
        u.observe(l);
        Ai(() => {
          u.disconnect();
        });
      }
    } else {
      const l = n.remeasureTrigger;
      setTimeout(a);
    }
  });
  return (() => {
    var l = ZNf();
    ge(l, K(_D, hb(n, {
      get style() {
        return {
          height: "100%",
          ...n.style,
          ...n.containerStyle
        };
      },
      get setScrollableRef() {
        return n.setScrollableRef;
      },
      get children() {
        return n.children(r);
      }
    })));
    tn(u => La(l, {
      height: n.maxHeight !== undefined ? Math.min(n.maxHeight, e() ?? n.maxHeight) + "px" : "100%",
      overflow: "hidden",
      ...n.style
    }, u));
    return l;
  })();
};
