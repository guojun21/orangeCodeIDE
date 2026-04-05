"use strict";

// Module: out-build/vs/editor/contrib/links/browser/getLinks.js
// Offset: 30889278 (bundle byte offset)
// Size: 2109 bytes
Vs();
Po();
_s();
rt();
Js();
Yn();
ts();
hd();
hs();
Cm();
Mxf = class {
  constructor(n, e) {
    this._link = n;
    this._provider = e;
  }
  toJSON() {
    return {
      range: this.range,
      url: this.url,
      tooltip: this.tooltip
    };
  }
  get range() {
    return this._link.range;
  }
  get url() {
    return this._link.url;
  }
  get tooltip() {
    return this._link.tooltip;
  }
  async resolve(n) {
    if (this._link.url) {
      return this._link.url;
    } else if (typeof this._provider.resolveLink == "function") {
      return Promise.resolve(this._provider.resolveLink(this._link, n)).then(e => {
        this._link = e || this._link;
        if (this._link.url) {
          return this.resolve(n);
        } else {
          return Promise.reject(new Error("missing"));
        }
      });
    } else {
      return Promise.reject(new Error("missing"));
    }
  }
};
Fpu = class bcd {
  static {
    this.Empty = new bcd([]);
  }
  constructor(e) {
    this._disposables = new Ut();
    let t = [];
    for (const [i, r] of e) {
      const s = i.links.map(o => new Mxf(o, r));
      t = bcd._union(t, s);
      if (Ste(i)) {
        this._disposables ??= new Ut();
        this._disposables.add(i);
      }
    }
    this.links = t;
  }
  dispose() {
    this._disposables?.dispose();
    this.links.length = 0;
  }
  static _union(e, t) {
    const i = [];
    let r;
    let s;
    let o;
    let a;
    r = 0;
    o = 0;
    s = e.length;
    a = t.length;
    while (r < s && o < a) {
      const l = e[r];
      const u = t[o];
      if (Zt.areIntersectingOrTouching(l.range, u.range)) {
        r++;
        continue;
      }
      if (Zt.compareRangesUsingStarts(l.range, u.range) < 0) {
        i.push(l);
        r++;
      } else {
        i.push(u);
        o++;
      }
    }
    for (; r < s; r++) {
      i.push(e[r]);
    }
    for (; o < a; o++) {
      i.push(t[o]);
    }
    return i;
  }
};
Ss.registerCommand("_executeLinkProvider", async (n, ...e) => {
  let [t, i] = e;
  Kd(t instanceof je);
  if (typeof i != "number") {
    i = 0;
  }
  const {
    linkProvider: r
  } = n.get($u);
  const s = n.get(Il).getModel(t);
  if (!s) {
    return [];
  }
  const o = await Nxf(r, s, Cs.None);
  if (!o) {
    return [];
  }
  for (let l = 0; l < Math.min(i, o.links.length); l++) {
    await o.links[l].resolve(Cs.None);
  }
  const a = o.links.slice(0);
  o.dispose();
  return a;
});
