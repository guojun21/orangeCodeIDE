"use strict";

// Module: out-build/vs/workbench/services/configurationResolver/common/configurationResolverExpression.js
// Offset: 30163564 (bundle byte offset)
// Size: 2414 bytes
Ef();
_r();
Oye = class pcd {
  static {
    this.VARIABLE_LHS = "${";
  }
  constructor(e) {
    this.locations = new Map();
    if (typeof e == "string") {
      this.stringRoot = true;
      this.root = {
        value: e
      };
    } else {
      this.stringRoot = false;
      this.root = structuredClone(e);
    }
  }
  static parse(e) {
    if (e instanceof pcd) {
      return e;
    }
    const t = new pcd(e);
    t.applyPlatformSpecificKeys();
    t.parseObject(t.root);
    return t;
  }
  applyPlatformSpecificKeys() {
    const e = this.root;
    const t = Sc ? "windows" : Fs ? "osx" : xv ? "linux" : undefined;
    if (t !== undefined && !!e && typeof e == "object" && !!e.hasOwnProperty(t)) {
      Object.keys(e[t]).forEach(i => e[i] = e[t][i]);
      delete e.windows;
      delete e.osx;
      delete e.linux;
    }
  }
  parseVariable(e, t) {
    if (e[t] !== "$" || e[t + 1] !== "{") {
      return;
    }
    let i = t + 2;
    let r = 1;
    while (i < e.length) {
      if (e[i] === "{") {
        r++;
      } else if (e[i] === "}" && (r--, r === 0)) {
        break;
      }
      i++;
    }
    if (r !== 0) {
      return;
    }
    const s = e.slice(t, i + 1);
    const o = e.substring(t + 2, i);
    const a = o.indexOf(":");
    if (a === -1) {
      return {
        replacement: {
          id: s,
          name: o,
          inner: o
        },
        end: i
      };
    } else {
      return {
        replacement: {
          id: s,
          inner: o,
          name: o.slice(0, a),
          arg: o.slice(a + 1)
        },
        end: i
      };
    }
  }
  parseObject(e) {
    if (typeof e == "object" && e !== null) {
      if (Array.isArray(e)) {
        for (let t = 0; t < e.length; t++) {
          const i = e[t];
          if (typeof i == "string") {
            this.parseString(e, t, i);
          } else {
            this.parseObject(i);
          }
        }
        return;
      }
      for (const [t, i] of Object.entries(e)) {
        if (typeof i == "string") {
          this.parseString(e, t, i);
        } else {
          this.parseObject(i);
        }
      }
    }
  }
  parseString(e, t, i) {
    let r = 0;
    while (r < i.length) {
      const s = i.indexOf("${", r);
      if (s === -1) {
        break;
      }
      const o = this.parseVariable(i, s);
      if (o) {
        const a = this.locations.get(o.replacement.id) || {
          locations: [],
          replacement: o.replacement
        };
        a.locations.push({
          object: e,
          propertyName: t
        });
        this.locations.set(o.replacement.id, a);
        r = o.end + 1;
      } else {
        r = s + 2;
      }
    }
  }
  unresolved() {
    return bl.map(bl.filter(this.locations.values(), e => e.resolved === undefined), e => e.replacement);
  }
  resolved() {
    return bl.map(bl.filter(this.locations.values(), e => !!e.resolved), e => [e.replacement, e.resolved]);
  }
  resolve(e, t) {
    if (typeof t != "object") {
      t = {
        value: String(t)
      };
    }
    const i = this.locations.get(e.id);
    if (i) {
      if (t.value !== undefined) {
        for (const {
          object: r,
          propertyName: s
        } of i.locations || []) {
          const o = r[s].replaceAll(e.id, t.value);
          r[s] = o;
        }
      }
      i.resolved = t;
    }
  }
  toObject() {
    if (this.stringRoot) {
      return this.root.value;
    } else {
      return this.root;
    }
  }
};
