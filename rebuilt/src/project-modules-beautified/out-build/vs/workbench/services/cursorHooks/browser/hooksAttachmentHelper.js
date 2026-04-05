"use strict";

// Module: out-build/vs/workbench/services/cursorHooks/browser/hooksAttachmentHelper.js
// Offset: 30364469 (bundle byte offset)
// Size: 996 bytes
Ae({
  "out-build/vs/workbench/services/cursorHooks/browser/hooksAttachmentHelper.js"() {
    "use strict";
  }
});
function Vq(n) {
  if (n === null) {
    return "None";
  }
  switch (n) {
    case 1:
      return "LocalProcess";
    case 2:
      return "LocalWebWorker";
    case 3:
      return "Remote";
  }
}
function ity(n) {
  switch (n) {
    case 0:
      return "None";
    case 1:
      return "Local";
    case 2:
      return "Remote";
  }
}
function rty(n, e, t, i) {
  const r = cSf(n, t);
  const s = cSf(e, t);
  const o = new Map();
  const a = u => {
    if (o.has(u.key)) {
      return;
    }
    const d = r.get(u.key) || null;
    const m = s.get(u.key) || null;
    const p = new hSf(d, m);
    o.set(p.key, p);
  };
  r.forEach(u => a(u));
  s.forEach(u => a(u));
  const l = new Map();
  o.forEach(u => {
    const d = !!u.local;
    const m = !!u.remote;
    const p = !!u.local && !!u.local.isUnderDevelopment;
    const g = !!u.remote && !!u.remote.isUnderDevelopment;
    let f = 0;
    if (p && !g) {
      f = 1;
    } else if (g && !p) {
      f = 2;
    }
    l.set(u.key, i(u.identifier, u.kind, d, m, f));
  });
  return l;
}
function cSf(n, e) {
  const t = new Map();
  n.forEach(i => {
    const r = new dSf(i, e(i));
    t.set(r.key, r);
  });
  return t;
}
function Xnt(n) {
  switch (n) {
    case 1:
      return "retrieval-always-local";
    case 2:
      return "agent-exec";
    case 3:
      return "user";
  }
}
