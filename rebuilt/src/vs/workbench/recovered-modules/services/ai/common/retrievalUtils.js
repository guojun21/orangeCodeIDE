"use strict";

// Module: out-build/vs/workbench/services/ai/common/retrievalUtils.js
// Offset: 28416583 (bundle byte offset)
// Size: 1617 bytes
Ae({
  "out-build/vs/workbench/services/ai/common/retrievalUtils.js"() {
    "use strict";
  }
});
function _8A(n) {
  if (n.length === 0) {
    return [];
  }
  const e = [];
  let t = n[0];
  for (const i of n.slice(1)) {
    if (t.endPosition?.line === i.startPosition?.line && t.endPosition?.column === i.startPosition?.column) {
      t = new fz({
        startPosition: t.startPosition,
        endPosition: i.endPosition
      });
    } else {
      e.push(t);
      t = i;
    }
  }
  e.push(t);
  return e.map(i => new fz({
    startPosition: {
      line: i.startPosition?.line ?? 1,
      column: 1
    },
    endPosition: i.endPosition
  }));
}
function C8A(n) {
  return n.provider.rootUri?.path;
}
async function S8A(n, e, t) {
  const i = Array.isArray(n) ? n : [n];
  const r = [];
  for (const s of i) {
    if (s.startsWith("~") || E8A(s)) {
      return;
    }
    const o = eCc(s);
    const a = t.resolveRelativePath(o);
    let l = false;
    let u = false;
    try {
      const m = await e.stat(a);
      l = m.isFile;
      u = m.isDirectory;
    } catch {
      return;
    }
    const d = t.asRelativePath(a);
    if (l && u) {
      r.push(_Aa(d));
      r.push(_Aa(d) + C1 + "**");
    } else if (l) {
      r.push(_Aa(d));
    } else if (u) {
      r.push(_Aa(d) + C1 + "**");
    } else {
      return;
    }
  }
  if (r.length === 1) {
    return r[0];
  } else {
    return `{${r.join(",")}}`;
  }
}
function k8A(n) {
  if (n.startsWith("{") && n.endsWith("}")) {
    return n.substring(1, n.length - 1).split(",").map(e => e.trim());
  } else {
    return n;
  }
}
function E8A(n) {
  return n.includes("*") || n.includes("?") || n.includes("[") || n.includes("{");
}
function _Aa(n) {
  let e = n.replaceAll("/", C1);
  e = eCc(e);
  e = "." + C1 + e;
  return e;
}
function x8A(n) {
  if (typeof n == "string") {
    return n;
  } else {
    return `{${Object.keys(n).filter(t => n[t] === true).join(",")}}`;
  }
}
function T8A(n, e, t) {
  if (t?.includePattern) {
    const i = e.parseSearchPaths(t.includePattern);
    if (i.pattern && !nP(i.pattern, n)) {
      return false;
    }
  }
  if (t?.excludePattern) {
    const i = e.parseSearchPaths(t.excludePattern);
    if (i.pattern && nP(i.pattern, n)) {
      return false;
    }
  }
  return !t?.globFilter || !!nP(t.globFilter, n);
}
