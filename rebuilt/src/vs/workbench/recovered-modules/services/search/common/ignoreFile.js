"use strict";

// Module: out-build/vs/workbench/services/search/common/ignoreFile.js
// Offset: 32467898 (bundle byte offset)
// Size: 1863 bytes
iR();
OOf = class {
  constructor(n, e, t) {
    this.location = e;
    this.parent = t;
    if (e[e.length - 1] === "\\") {
      throw Error("Unexpected path format, do not use trailing backslashes");
    }
    if (e[e.length - 1] !== "/") {
      e += "/";
    }
    this.isPathIgnored = this.parseIgnoreFile(n, this.location, this.parent);
  }
  updateContents(n) {
    this.isPathIgnored = this.parseIgnoreFile(n, this.location, this.parent);
  }
  isPathIncludedInTraversal(n, e) {
    if (n[0] !== "/" || n[n.length - 1] === "/") {
      throw Error("Unexpected path format, expectred to begin with slash and end without. got:" + n);
    }
    return !this.isPathIgnored(n, e);
  }
  isArbitraryPathIgnored(n, e) {
    if (n[0] !== "/" || n[n.length - 1] === "/") {
      throw Error("Unexpected path format, expectred to begin with slash and end without. got:" + n);
    }
    const t = n.split("/").filter(s => s);
    let i = false;
    let r = "";
    for (let s = 0; s < t.length; s++) {
      const o = s === t.length - 1;
      const a = t[s];
      r = r + "/" + a;
      if (!this.isPathIncludedInTraversal(r, o ? e : true)) {
        i = true;
        break;
      }
    }
    return i;
  }
  gitignoreLinesToExpression(n, e, t) {
    const i = n.map(s => this.gitignoreLineToGlob(s, e));
    const r = Object.create(null);
    for (const s of i) {
      r[s] = true;
    }
    return jae(r, {
      trimForExclusions: t
    });
  }
  parseIgnoreFile(n, e, t) {
    const i = n.split(`
`).map(f => f.trim()).filter(f => f && f[0] !== "#");
    const r = i.filter(f => !f.endsWith("/"));
    const s = r.filter(f => !f.includes("!"));
    const o = this.gitignoreLinesToExpression(s, e, true);
    const a = r.filter(f => f.includes("!")).map(f => f.replace(/!/g, ""));
    const l = this.gitignoreLinesToExpression(a, e, false);
    const u = i.filter(f => !f.includes("!"));
    const d = this.gitignoreLinesToExpression(u, e, true);
    const m = i.filter(f => f.includes("!")).map(f => f.replace(/!/g, ""));
    const p = this.gitignoreLinesToExpression(m, e, false);
    return (f, A) => f.startsWith(e) ? A && d(f) && !p(f) || o(f) && !l(f) ? true : t ? t.isPathIgnored(f, A) : false : false;
  }
  gitignoreLineToGlob(n, e) {
    const t = n.indexOf("/");
    if (t === -1 || t === n.length - 1) {
      n = "**/" + n;
    } else {
      if (t === 0) {
        if (e.slice(-1) === "/") {
          n = n.slice(1);
        }
      } else if (e.slice(-1) !== "/") {
        n = "/" + n;
      }
      n = e + n;
    }
    return n;
  }
};
