"use strict";

// Module: out-build/vs/workbench/contrib/controlCommon/browser/react-bridge.js
// Offset: 31664339 (bundle byte offset)
// Size: 930 bytes
Ie();
Ie();
Ie();
Ie();
Ie();
Ie();
Od();
gs();
gke();
avu();
Ti();
Tfn();
hNf = qe("<div>");
Y0i();
d1a = false;
i7 = n => {
  let e;
  let t;
  let i;
  let r;
  const s = () => {
    if (!e) {
      return;
    }
    const a = e;
    const l = Cd.createElement(n.reactComponent, n.reactProps);
    const u = n.portalRoot !== undefined ? Cd.createElement(P6t, {
      root: n.portalRoot,
      children: l
    }) : l;
    Aay(() => {
      a.render(u);
    });
  };
  const o = a => {
    e = u1a.createRoot(a);
    sc(() => {
      s();
      t = n.reactProps;
      i = n.reactComponent;
      r = n.portalRoot;
    });
  };
  An(Bf(() => [n.reactComponent, n.reactProps, n.portalRoot], () => {
    const a = n.reactComponent !== i;
    const l = !yay(n.reactProps, t);
    const u = n.portalRoot !== r;
    if (a || l || u) {
      i = n.reactComponent;
      t = n.reactProps;
      r = n.portalRoot;
      s();
    }
  }, {
    defer: true
  }));
  Ai(() => {
    if (e) {
      e.unmount();
      e = undefined;
    }
    t = undefined;
    i = undefined;
    r = undefined;
  });
  return (() => {
    var a = hNf();
    Bs(o, a);
    tn(l => {
      var u = n.class;
      var d = {
        display: "contents",
        ...n.style
      };
      if (u !== l.e) {
        Un(a, l.e = u);
      }
      l.t = La(a, d, l.t);
      return l;
    }, {
      e: undefined,
      t: undefined
    });
    return a;
  })();
};
