"use strict";

// Module: out-build/vs/base/common/uri.js
// Offset: 413189 (bundle byte offset)
// Size: 3242 bytes
Hl();
_r();
zr();
Ql();
Srh = /^\w[\w\d+.-]*$/;
krh = /^\//;
Erh = /^\/\//;
XL = "";
Dbe = "/";
xrh = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
je = class $Ga {
  static isUri(e) {
    if (e instanceof $Ga) {
      return true;
    } else if (e) {
      return typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function";
    } else {
      return false;
    }
  }
  constructor(e, t, i, r, s, o = false) {
    if (typeof e == "object") {
      this.scheme = e.scheme || XL;
      this.authority = e.authority || XL;
      this.path = e.path || XL;
      this.query = e.query || XL;
      this.fragment = e.fragment || XL;
    } else {
      this.scheme = unA(e, o);
      this.authority = t || XL;
      this.path = dnA(this.scheme, i || XL);
      this.query = r || XL;
      this.fragment = s || XL;
      lnA(this, o);
    }
  }
  get fsPath() {
    return ygt(this, false);
  }
  with(e) {
    if (!e) {
      return this;
    }
    let {
      scheme: t,
      authority: i,
      path: r,
      query: s,
      fragment: o
    } = e;
    if (t === undefined) {
      t = this.scheme;
    } else if (t === null) {
      t = XL;
    }
    if (i === undefined) {
      i = this.authority;
    } else if (i === null) {
      i = XL;
    }
    if (r === undefined) {
      r = this.path;
    } else if (r === null) {
      r = XL;
    }
    if (s === undefined) {
      s = this.query;
    } else if (s === null) {
      s = XL;
    }
    if (o === undefined) {
      o = this.fragment;
    } else if (o === null) {
      o = XL;
    }
    if (t === this.scheme && i === this.authority && r === this.path && s === this.query && o === this.fragment) {
      return this;
    } else {
      return new _gt(t, i, r, s, o);
    }
  }
  static parse(e, t = false) {
    const i = xrh.exec(e);
    if (i) {
      return new _gt(i[2] || XL, p2o(i[4] || XL), p2o(i[5] || XL), p2o(i[7] || XL), p2o(i[9] || XL), t);
    } else {
      return new _gt(XL, XL, XL, XL, XL);
    }
  }
  static file(e) {
    let t = XL;
    if (Sc) {
      e = e.replace(/\\/g, Dbe);
    }
    if (e[0] === Dbe && e[1] === Dbe) {
      const i = e.indexOf(Dbe, 2);
      if (i === -1) {
        t = e.substring(2);
        e = Dbe;
      } else {
        t = e.substring(2, i);
        e = e.substring(i) || Dbe;
      }
    }
    return new _gt("file", t, e, XL, XL);
  }
  static from(e, t) {
    return new _gt(e.scheme, e.authority, e.path, e.query, e.fragment, t);
  }
  static joinPath(e, ...t) {
    if (!e.path) {
      throw new Error("[UriError]: cannot call joinPath on URI without path");
    }
    let i;
    if (Sc && e.scheme === "file") {
      i = $Ga.file(iE.join(ygt(e, true), ...t)).path;
    } else {
      i = Rm.join(e.path, ...t);
    }
    return e.with({
      path: i
    });
  }
  toString(e = false) {
    return dCc(this, e);
  }
  toJSON() {
    return this;
  }
  static revive(e) {
    if (e) {
      if (e instanceof $Ga) {
        return e;
      }
      {
        const t = new _gt(e);
        t._formatted = e.external ?? null;
        t._fsPath = e._sep === hCc ? e.fsPath ?? null : null;
        return t;
      }
    } else {
      return e;
    }
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
hCc = Sc ? 1 : undefined;
_gt = class extends je {
  constructor() {
    super(...arguments);
    this._formatted = null;
    this._fsPath = null;
  }
  get fsPath() {
    this._fsPath ||= ygt(this, false);
    return this._fsPath;
  }
  toString(n = false) {
    if (n) {
      return dCc(this, true);
    } else {
      this._formatted ||= dCc(this, false);
      return this._formatted;
    }
  }
  toJSON() {
    const n = {
      $mid: 1
    };
    if (this._fsPath) {
      n.fsPath = this._fsPath;
      n._sep = hCc;
    }
    if (this._formatted) {
      n.external = this._formatted;
    }
    if (this.path) {
      n.path = this.path;
    }
    if (this.scheme) {
      n.scheme = this.scheme;
    }
    if (this.authority) {
      n.authority = this.authority;
    }
    if (this.query) {
      n.query = this.query;
    }
    if (this.fragment) {
      n.fragment = this.fragment;
    }
    return n;
  }
};
mCc = {
  58: "%3A",
  47: "%2F",
  63: "%3F",
  35: "%23",
  91: "%5B",
  93: "%5D",
  64: "%40",
  33: "%21",
  36: "%24",
  38: "%26",
  39: "%27",
  40: "%28",
  41: "%29",
  42: "%2A",
  43: "%2B",
  44: "%2C",
  59: "%3B",
  61: "%3D",
  32: "%20"
};
pCc = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
