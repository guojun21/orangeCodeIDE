"use strict";

// Module: out-build/vs/editor/contrib/find/browser/replacePattern.js
// Offset: 25143787 (bundle byte offset)
// Size: 2563 bytes
nvg();
(function (n) {
  n[n.StaticValue = 0] = "StaticValue";
  n[n.DynamicPieces = 1] = "DynamicPieces";
})(rvg ||= {});
lQl = class {
  constructor(n) {
    this.staticValue = n;
    this.kind = 0;
  }
};
svg = class {
  constructor(n) {
    this.pieces = n;
    this.kind = 1;
  }
};
ugi = class lcd {
  static fromStaticValue(e) {
    return new lcd([dgi.staticValue(e)]);
  }
  get hasReplacementPatterns() {
    return this._state.kind === 1;
  }
  constructor(e) {
    if (!e || e.length === 0) {
      this._state = new lQl("");
    } else if (e.length === 1 && e[0].staticValue !== null) {
      this._state = new lQl(e[0].staticValue);
    } else {
      this._state = new svg(e);
    }
  }
  buildReplaceString(e, t) {
    if (this._state.kind === 0) {
      if (t) {
        return cQl(e, this._state.staticValue);
      } else {
        return this._state.staticValue;
      }
    }
    let i = "";
    for (let r = 0, s = this._state.pieces.length; r < s; r++) {
      const o = this._state.pieces[r];
      if (o.staticValue !== null) {
        i += o.staticValue;
        continue;
      }
      let a = lcd._substitute(o.matchIndex, e);
      if (o.caseOps !== null && o.caseOps.length > 0) {
        const l = [];
        const u = o.caseOps.length;
        let d = 0;
        for (let m = 0, p = a.length; m < p; m++) {
          if (d >= u) {
            l.push(a.slice(m));
            break;
          }
          switch (o.caseOps[d]) {
            case "U":
              l.push(a[m].toUpperCase());
              break;
            case "u":
              l.push(a[m].toUpperCase());
              d++;
              break;
            case "L":
              l.push(a[m].toLowerCase());
              break;
            case "l":
              l.push(a[m].toLowerCase());
              d++;
              break;
            default:
              l.push(a[m]);
          }
        }
        a = l.join("");
      }
      i += a;
    }
    return i;
  }
  static _substitute(e, t) {
    if (t === null) {
      return "";
    }
    if (e === 0) {
      return t[0];
    }
    let i = "";
    while (e > 0) {
      if (e < t.length) {
        return (t[e] || "") + i;
      }
      i = String(e % 10) + i;
      e = Math.floor(e / 10);
    }
    return "$" + i;
  }
};
dgi = class AWa {
  static staticValue(e) {
    return new AWa(e, -1, null);
  }
  static matchIndex(e) {
    return new AWa(null, e, null);
  }
  static caseOps(e, t) {
    return new AWa(null, e, t);
  }
  constructor(e, t, i) {
    this.staticValue = e;
    this.matchIndex = t;
    if (!i || i.length === 0) {
      this.caseOps = null;
    } else {
      this.caseOps = i.slice(0);
    }
  }
};
ovg = class {
  constructor(n) {
    this._source = n;
    this._lastCharIndex = 0;
    this._result = [];
    this._resultLen = 0;
    this._currentStaticPiece = "";
  }
  emitUnchanged(n) {
    this._emitStatic(this._source.substring(this._lastCharIndex, n));
    this._lastCharIndex = n;
  }
  emitStatic(n, e) {
    this._emitStatic(n);
    this._lastCharIndex = e;
  }
  _emitStatic(n) {
    if (n.length !== 0) {
      this._currentStaticPiece += n;
    }
  }
  emitMatchIndex(n, e, t) {
    if (this._currentStaticPiece.length !== 0) {
      this._result[this._resultLen++] = dgi.staticValue(this._currentStaticPiece);
      this._currentStaticPiece = "";
    }
    this._result[this._resultLen++] = dgi.caseOps(n, t);
    this._lastCharIndex = e;
  }
  finalize() {
    this.emitUnchanged(this._source.length);
    if (this._currentStaticPiece.length !== 0) {
      this._result[this._resultLen++] = dgi.staticValue(this._currentStaticPiece);
      this._currentStaticPiece = "";
    }
    return new ugi(this._result);
  }
};
