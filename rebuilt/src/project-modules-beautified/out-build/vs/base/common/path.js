"use strict";

// Module: out-build/vs/base/common/path.js
// Offset: 321895 (bundle byte offset)
// Size: 10503 bytes
S6();
Nih = 65;
Mih = 97;
Fih = 90;
Oih = 122;
kze = 46;
EH = 47;
xte = 92;
IBe = 58;
Uih = 63;
q0c = class extends Error {
  constructor(n, e, t) {
    let i;
    if (typeof e == "string" && e.indexOf("not ") === 0) {
      i = "must not be";
      e = e.replace(/^not /, "");
    } else {
      i = "must be";
    }
    const r = n.indexOf(".") !== -1 ? "property" : "argument";
    let s = `The "${n}" ${r} ${i} of type ${e}`;
    s += `. Received type ${typeof t}`;
    super(s);
    this.code = "ERR_INVALID_ARG_TYPE";
  }
};
Tte = h5e === "win32";
iE = {
  resolve(...n) {
    let e = "";
    let t = "";
    let i = false;
    for (let r = n.length - 1; r >= -1; r--) {
      let s;
      if (r >= 0) {
        s = n[r];
        g9(s, `paths[${r}]`);
        if (s.length === 0) {
          continue;
        }
      } else if (e.length === 0) {
        s = UFt();
      } else {
        s = u2[`=${e}`] || UFt();
        if (s === undefined || s.slice(0, 2).toLowerCase() !== e.toLowerCase() && s.charCodeAt(2) === xte) {
          s = `${e}\\`;
        }
      }
      const o = s.length;
      let a = 0;
      let l = "";
      let u = false;
      const d = s.charCodeAt(0);
      if (o === 1) {
        if ($S(d)) {
          a = 1;
          u = true;
        }
      } else if ($S(d)) {
        u = true;
        if ($S(s.charCodeAt(1))) {
          let m = 2;
          let p = m;
          while (m < o && !$S(s.charCodeAt(m))) {
            m++;
          }
          if (m < o && m !== p) {
            const g = s.slice(p, m);
            for (p = m; m < o && $S(s.charCodeAt(m));) {
              m++;
            }
            if (m < o && m !== p) {
              for (p = m; m < o && !$S(s.charCodeAt(m));) {
                m++;
              }
              if (m === o || m !== p) {
                l = `\\\\${g}\\${s.slice(p, m)}`;
                a = m;
              }
            }
          }
        } else {
          a = 1;
        }
      } else if (m5e(d) && s.charCodeAt(1) === IBe) {
        l = s.slice(0, 2);
        a = 2;
        if (o > 2 && $S(s.charCodeAt(2))) {
          u = true;
          a = 3;
        }
      }
      if (l.length > 0) {
        if (e.length > 0) {
          if (l.toLowerCase() !== e.toLowerCase()) {
            continue;
          }
        } else {
          e = l;
        }
      }
      if (i) {
        if (e.length > 0) {
          break;
        }
      } else {
        t = `${s.slice(a)}\\${t}`;
        i = u;
        if (u && e.length > 0) {
          break;
        }
      }
    }
    t = s2o(t, !i, "\\", $S);
    if (i) {
      return `${e}\\${t}`;
    } else {
      return `${e}${t}` || ".";
    }
  },
  normalize(n) {
    g9(n, "path");
    const e = n.length;
    if (e === 0) {
      return ".";
    }
    let t = 0;
    let i;
    let r = false;
    const s = n.charCodeAt(0);
    if (e === 1) {
      if ($0c(s)) {
        return "\\";
      } else {
        return n;
      }
    }
    if ($S(s)) {
      r = true;
      if ($S(n.charCodeAt(1))) {
        let a = 2;
        let l = a;
        while (a < e && !$S(n.charCodeAt(a))) {
          a++;
        }
        if (a < e && a !== l) {
          const u = n.slice(l, a);
          for (l = a; a < e && $S(n.charCodeAt(a));) {
            a++;
          }
          if (a < e && a !== l) {
            for (l = a; a < e && !$S(n.charCodeAt(a));) {
              a++;
            }
            if (a === e) {
              return `\\\\${u}\\${n.slice(l)}\\`;
            }
            if (a !== l) {
              i = `\\\\${u}\\${n.slice(l, a)}`;
              t = a;
            }
          }
        }
      } else {
        t = 1;
      }
    } else if (m5e(s) && n.charCodeAt(1) === IBe) {
      i = n.slice(0, 2);
      t = 2;
      if (e > 2 && $S(n.charCodeAt(2))) {
        r = true;
        t = 3;
      }
    }
    let o = t < e ? s2o(n.slice(t), !r, "\\", $S) : "";
    if (o.length === 0 && !r) {
      o = ".";
    }
    if (o.length > 0 && $S(n.charCodeAt(e - 1))) {
      o += "\\";
    }
    if (!r && i === undefined && n.includes(":")) {
      if (o.length >= 2 && m5e(o.charCodeAt(0)) && o.charCodeAt(1) === IBe) {
        return `.\\${o}`;
      }
      let a = n.indexOf(":");
      do {
        if (a === e - 1 || $S(n.charCodeAt(a + 1))) {
          return `.\\${o}`;
        }
      } while ((a = n.indexOf(":", a + 1)) !== -1);
    }
    if (i === undefined) {
      if (r) {
        return `\\${o}`;
      } else {
        return o;
      }
    } else if (r) {
      return `${i}\\${o}`;
    } else {
      return `${i}${o}`;
    }
  },
  isAbsolute(n) {
    g9(n, "path");
    const e = n.length;
    if (e === 0) {
      return false;
    }
    const t = n.charCodeAt(0);
    return $S(t) || e > 2 && m5e(t) && n.charCodeAt(1) === IBe && $S(n.charCodeAt(2));
  },
  join(...n) {
    if (n.length === 0) {
      return ".";
    }
    let e;
    let t;
    for (let s = 0; s < n.length; ++s) {
      const o = n[s];
      g9(o, "path");
      if (o.length > 0) {
        if (e === undefined) {
          e = t = o;
        } else {
          e += `\\${o}`;
        }
      }
    }
    if (e === undefined) {
      return ".";
    }
    let i = true;
    let r = 0;
    if (typeof t == "string" && $S(t.charCodeAt(0))) {
      ++r;
      const s = t.length;
      if (s > 1 && $S(t.charCodeAt(1))) {
        ++r;
        if (s > 2) {
          if ($S(t.charCodeAt(2))) {
            ++r;
          } else {
            i = false;
          }
        }
      }
    }
    if (i) {
      while (r < e.length && $S(e.charCodeAt(r))) {
        r++;
      }
      if (r >= 2) {
        e = `\\${e.slice(r)}`;
      }
    }
    return iE.normalize(e);
  },
  relative(n, e) {
    g9(n, "from");
    g9(e, "to");
    if (n === e) {
      return "";
    }
    const t = iE.resolve(n);
    const i = iE.resolve(e);
    if (t === i || (n = t.toLowerCase(), e = i.toLowerCase(), n === e)) {
      return "";
    }
    if (t.length !== n.length || i.length !== e.length) {
      const f = t.split("\\");
      const A = i.split("\\");
      if (f[f.length - 1] === "") {
        f.pop();
      }
      if (A[A.length - 1] === "") {
        A.pop();
      }
      const w = f.length;
      const C = A.length;
      const x = w < C ? w : C;
      let I;
      for (I = 0; I < x && f[I].toLowerCase() === A[I].toLowerCase(); I++);
      if (I === 0) {
        return i;
      } else if (I === x) {
        if (C > x) {
          return A.slice(I).join("\\");
        } else if (w > x) {
          return "..\\".repeat(w - 1 - I) + "..";
        } else {
          return "";
        }
      } else {
        return "..\\".repeat(w - I) + A.slice(I).join("\\");
      }
    }
    let r = 0;
    while (r < n.length && n.charCodeAt(r) === xte) {
      r++;
    }
    let s = n.length;
    while (s - 1 > r && n.charCodeAt(s - 1) === xte) {
      s--;
    }
    const o = s - r;
    let a = 0;
    while (a < e.length && e.charCodeAt(a) === xte) {
      a++;
    }
    let l = e.length;
    while (l - 1 > a && e.charCodeAt(l - 1) === xte) {
      l--;
    }
    const u = l - a;
    const d = o < u ? o : u;
    let m = -1;
    let p = 0;
    for (; p < d; p++) {
      const f = n.charCodeAt(r + p);
      if (f !== e.charCodeAt(a + p)) {
        break;
      }
      if (f === xte) {
        m = p;
      }
    }
    if (p !== d) {
      if (m === -1) {
        return i;
      }
    } else {
      if (u > d) {
        if (e.charCodeAt(a + p) === xte) {
          return i.slice(a + p + 1);
        }
        if (p === 2) {
          return i.slice(a + p);
        }
      }
      if (o > d) {
        if (n.charCodeAt(r + p) === xte) {
          m = p;
        } else if (p === 2) {
          m = 3;
        }
      }
      if (m === -1) {
        m = 0;
      }
    }
    let g = "";
    for (p = r + m + 1; p <= s; ++p) {
      if (p === s || n.charCodeAt(p) === xte) {
        g += g.length === 0 ? ".." : "\\..";
      }
    }
    a += m;
    if (g.length > 0) {
      return `${g}${i.slice(a, l)}`;
    } else {
      if (i.charCodeAt(a) === xte) {
        ++a;
      }
      return i.slice(a, l);
    }
  },
  toNamespacedPath(n) {
    if (typeof n != "string" || n.length === 0) {
      return n;
    }
    const e = iE.resolve(n);
    if (e.length <= 2) {
      return n;
    }
    if (e.charCodeAt(0) === xte) {
      if (e.charCodeAt(1) === xte) {
        const t = e.charCodeAt(2);
        if (t !== Uih && t !== kze) {
          return `\\\\?\\UNC\\${e.slice(2)}`;
        }
      }
    } else if (m5e(e.charCodeAt(0)) && e.charCodeAt(1) === IBe && e.charCodeAt(2) === xte) {
      return `\\\\?\\${e}`;
    }
    return e;
  },
  dirname(n) {
    g9(n, "path");
    const e = n.length;
    if (e === 0) {
      return ".";
    }
    let t = -1;
    let i = 0;
    const r = n.charCodeAt(0);
    if (e === 1) {
      if ($S(r)) {
        return n;
      } else {
        return ".";
      }
    }
    if ($S(r)) {
      t = i = 1;
      if ($S(n.charCodeAt(1))) {
        let a = 2;
        let l = a;
        while (a < e && !$S(n.charCodeAt(a))) {
          a++;
        }
        if (a < e && a !== l) {
          for (l = a; a < e && $S(n.charCodeAt(a));) {
            a++;
          }
          if (a < e && a !== l) {
            for (l = a; a < e && !$S(n.charCodeAt(a));) {
              a++;
            }
            if (a === e) {
              return n;
            }
            if (a !== l) {
              t = i = a + 1;
            }
          }
        }
      }
    } else if (m5e(r) && n.charCodeAt(1) === IBe) {
      t = e > 2 && $S(n.charCodeAt(2)) ? 3 : 2;
      i = t;
    }
    let s = -1;
    let o = true;
    for (let a = e - 1; a >= i; --a) {
      if ($S(n.charCodeAt(a))) {
        if (!o) {
          s = a;
          break;
        }
      } else {
        o = false;
      }
    }
    if (s === -1) {
      if (t === -1) {
        return ".";
      }
      s = t;
    }
    return n.slice(0, s);
  },
  basename(n, e) {
    if (e !== undefined) {
      g9(e, "suffix");
    }
    g9(n, "path");
    let t = 0;
    let i = -1;
    let r = true;
    let s;
    if (n.length >= 2 && m5e(n.charCodeAt(0)) && n.charCodeAt(1) === IBe) {
      t = 2;
    }
    if (e !== undefined && e.length > 0 && e.length <= n.length) {
      if (e === n) {
        return "";
      }
      let o = e.length - 1;
      let a = -1;
      for (s = n.length - 1; s >= t; --s) {
        const l = n.charCodeAt(s);
        if ($S(l)) {
          if (!r) {
            t = s + 1;
            break;
          }
        } else {
          if (a === -1) {
            r = false;
            a = s + 1;
          }
          if (o >= 0) {
            if (l === e.charCodeAt(o)) {
              if (--o === -1) {
                i = s;
              }
            } else {
              o = -1;
              i = a;
            }
          }
        }
      }
      if (t === i) {
        i = a;
      } else if (i === -1) {
        i = n.length;
      }
      return n.slice(t, i);
    }
    for (s = n.length - 1; s >= t; --s) {
      if ($S(n.charCodeAt(s))) {
        if (!r) {
          t = s + 1;
          break;
        }
      } else if (i === -1) {
        r = false;
        i = s + 1;
      }
    }
    if (i === -1) {
      return "";
    } else {
      return n.slice(t, i);
    }
  },
  extname(n) {
    g9(n, "path");
    let e = 0;
    let t = -1;
    let i = 0;
    let r = -1;
    let s = true;
    let o = 0;
    if (n.length >= 2 && n.charCodeAt(1) === IBe && m5e(n.charCodeAt(0))) {
      e = i = 2;
    }
    for (let a = n.length - 1; a >= e; --a) {
      const l = n.charCodeAt(a);
      if ($S(l)) {
        if (!s) {
          i = a + 1;
          break;
        }
        continue;
      }
      if (r === -1) {
        s = false;
        r = a + 1;
      }
      if (l === kze) {
        if (t === -1) {
          t = a;
        } else if (o !== 1) {
          o = 1;
        }
      } else if (t !== -1) {
        o = -1;
      }
    }
    if (t === -1 || r === -1 || o === 0 || o === 1 && t === r - 1 && t === i + 1) {
      return "";
    } else {
      return n.slice(t, r);
    }
  },
  format: Lih.bind(null, "\\"),
  parse(n) {
    g9(n, "path");
    const e = {
      root: "",
      dir: "",
      base: "",
      ext: "",
      name: ""
    };
    if (n.length === 0) {
      return e;
    }
    const t = n.length;
    let i = 0;
    let r = n.charCodeAt(0);
    if (t === 1) {
      if ($S(r)) {
        e.root = e.dir = n;
        return e;
      } else {
        e.base = e.name = n;
        return e;
      }
    }
    if ($S(r)) {
      i = 1;
      if ($S(n.charCodeAt(1))) {
        let m = 2;
        let p = m;
        while (m < t && !$S(n.charCodeAt(m))) {
          m++;
        }
        if (m < t && m !== p) {
          for (p = m; m < t && $S(n.charCodeAt(m));) {
            m++;
          }
          if (m < t && m !== p) {
            for (p = m; m < t && !$S(n.charCodeAt(m));) {
              m++;
            }
            if (m === t) {
              i = m;
            } else if (m !== p) {
              i = m + 1;
            }
          }
        }
      }
    } else if (m5e(r) && n.charCodeAt(1) === IBe) {
      if (t <= 2) {
        e.root = e.dir = n;
        return e;
      }
      i = 2;
      if ($S(n.charCodeAt(2))) {
        if (t === 3) {
          e.root = e.dir = n;
          return e;
        }
        i = 3;
      }
    }
    if (i > 0) {
      e.root = n.slice(0, i);
    }
    let s = -1;
    let o = i;
    let a = -1;
    let l = true;
    let u = n.length - 1;
    let d = 0;
    for (; u >= i; --u) {
      r = n.charCodeAt(u);
      if ($S(r)) {
        if (!l) {
          o = u + 1;
          break;
        }
        continue;
      }
      if (a === -1) {
        l = false;
        a = u + 1;
      }
      if (r === kze) {
        if (s === -1) {
          s = u;
        } else if (d !== 1) {
          d = 1;
        }
      } else if (s !== -1) {
        d = -1;
      }
    }
    if (a !== -1) {
      if (s === -1 || d === 0 || d === 1 && s === a - 1 && s === o + 1) {
        e.base = e.name = n.slice(o, a);
      } else {
        e.name = n.slice(o, s);
        e.base = n.slice(o, a);
        e.ext = n.slice(s, a);
      }
    }
    if (o > 0 && o !== i) {
      e.dir = n.slice(0, o - 1);
    } else {
      e.dir = e.root;
    }
    return e;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
};
$ih = (() => {
  if (Tte) {
    const n = /\\/g;
    return () => {
      const e = UFt().replace(n, "/");
      return e.slice(e.indexOf("/"));
    };
  }
  return () => UFt();
})();
Rm = {
  resolve(...n) {
    let e = "";
    let t = false;
    for (let i = n.length - 1; i >= 0 && !t; i--) {
      const r = n[i];
      g9(r, `paths[${i}]`);
      if (r.length !== 0) {
        e = `${r}/${e}`;
        t = r.charCodeAt(0) === EH;
      }
    }
    if (!t) {
      const i = $ih();
      e = `${i}/${e}`;
      t = i.charCodeAt(0) === EH;
    }
    e = s2o(e, !t, "/", $0c);
    if (t) {
      return `/${e}`;
    } else if (e.length > 0) {
      return e;
    } else {
      return ".";
    }
  },
  normalize(n) {
    g9(n, "path");
    if (n.length === 0) {
      return ".";
    }
    const e = n.charCodeAt(0) === EH;
    const t = n.charCodeAt(n.length - 1) === EH;
    n = s2o(n, !e, "/", $0c);
    if (n.length === 0) {
      if (e) {
        return "/";
      } else if (t) {
        return "./";
      } else {
        return ".";
      }
    } else {
      if (t) {
        n += "/";
      }
      if (e) {
        return `/${n}`;
      } else {
        return n;
      }
    }
  },
  isAbsolute(n) {
    g9(n, "path");
    return n.length > 0 && n.charCodeAt(0) === EH;
  },
  join(...n) {
    if (n.length === 0) {
      return ".";
    }
    const e = [];
    for (let t = 0; t < n.length; ++t) {
      const i = n[t];
      g9(i, "path");
      if (i.length > 0) {
        e.push(i);
      }
    }
    if (e.length === 0) {
      return ".";
    } else {
      return Rm.normalize(e.join("/"));
    }
  },
  relative(n, e) {
    g9(n, "from");
    g9(e, "to");
    if (n === e || (n = Rm.resolve(n), e = Rm.resolve(e), n === e)) {
      return "";
    }
    const t = 1;
    const i = n.length;
    const r = i - t;
    const s = 1;
    const o = e.length - s;
    const a = r < o ? r : o;
    let l = -1;
    let u = 0;
    for (; u < a; u++) {
      const m = n.charCodeAt(t + u);
      if (m !== e.charCodeAt(s + u)) {
        break;
      }
      if (m === EH) {
        l = u;
      }
    }
    if (u === a) {
      if (o > a) {
        if (e.charCodeAt(s + u) === EH) {
          return e.slice(s + u + 1);
        }
        if (u === 0) {
          return e.slice(s + u);
        }
      } else if (r > a) {
        if (n.charCodeAt(t + u) === EH) {
          l = u;
        } else if (u === 0) {
          l = 0;
        }
      }
    }
    let d = "";
    for (u = t + l + 1; u <= i; ++u) {
      if (u === i || n.charCodeAt(u) === EH) {
        d += d.length === 0 ? ".." : "/..";
      }
    }
    return `${d}${e.slice(s + l)}`;
  },
  toNamespacedPath(n) {
    return n;
  },
  dirname(n) {
    g9(n, "path");
    if (n.length === 0) {
      return ".";
    }
    const e = n.charCodeAt(0) === EH;
    let t = -1;
    let i = true;
    for (let r = n.length - 1; r >= 1; --r) {
      if (n.charCodeAt(r) === EH) {
        if (!i) {
          t = r;
          break;
        }
      } else {
        i = false;
      }
    }
    if (t === -1) {
      if (e) {
        return "/";
      } else {
        return ".";
      }
    } else if (e && t === 1) {
      return "//";
    } else {
      return n.slice(0, t);
    }
  },
  basename(n, e) {
    if (e !== undefined) {
      g9(e, "suffix");
    }
    g9(n, "path");
    let t = 0;
    let i = -1;
    let r = true;
    let s;
    if (e !== undefined && e.length > 0 && e.length <= n.length) {
      if (e === n) {
        return "";
      }
      let o = e.length - 1;
      let a = -1;
      for (s = n.length - 1; s >= 0; --s) {
        const l = n.charCodeAt(s);
        if (l === EH) {
          if (!r) {
            t = s + 1;
            break;
          }
        } else {
          if (a === -1) {
            r = false;
            a = s + 1;
          }
          if (o >= 0) {
            if (l === e.charCodeAt(o)) {
              if (--o === -1) {
                i = s;
              }
            } else {
              o = -1;
              i = a;
            }
          }
        }
      }
      if (t === i) {
        i = a;
      } else if (i === -1) {
        i = n.length;
      }
      return n.slice(t, i);
    }
    for (s = n.length - 1; s >= 0; --s) {
      if (n.charCodeAt(s) === EH) {
        if (!r) {
          t = s + 1;
          break;
        }
      } else if (i === -1) {
        r = false;
        i = s + 1;
      }
    }
    if (i === -1) {
      return "";
    } else {
      return n.slice(t, i);
    }
  },
  extname(n) {
    g9(n, "path");
    let e = -1;
    let t = 0;
    let i = -1;
    let r = true;
    let s = 0;
    for (let o = n.length - 1; o >= 0; --o) {
      const a = n[o];
      if (a === "/") {
        if (!r) {
          t = o + 1;
          break;
        }
        continue;
      }
      if (i === -1) {
        r = false;
        i = o + 1;
      }
      if (a === ".") {
        if (e === -1) {
          e = o;
        } else if (s !== 1) {
          s = 1;
        }
      } else if (e !== -1) {
        s = -1;
      }
    }
    if (e === -1 || i === -1 || s === 0 || s === 1 && e === i - 1 && e === t + 1) {
      return "";
    } else {
      return n.slice(e, i);
    }
  },
  format: Lih.bind(null, "/"),
  parse(n) {
    g9(n, "path");
    const e = {
      root: "",
      dir: "",
      base: "",
      ext: "",
      name: ""
    };
    if (n.length === 0) {
      return e;
    }
    const t = n.charCodeAt(0) === EH;
    let i;
    if (t) {
      e.root = "/";
      i = 1;
    } else {
      i = 0;
    }
    let r = -1;
    let s = 0;
    let o = -1;
    let a = true;
    let l = n.length - 1;
    let u = 0;
    for (; l >= i; --l) {
      const d = n.charCodeAt(l);
      if (d === EH) {
        if (!a) {
          s = l + 1;
          break;
        }
        continue;
      }
      if (o === -1) {
        a = false;
        o = l + 1;
      }
      if (d === kze) {
        if (r === -1) {
          r = l;
        } else if (u !== 1) {
          u = 1;
        }
      } else if (r !== -1) {
        u = -1;
      }
    }
    if (o !== -1) {
      const d = s === 0 && t ? 1 : s;
      if (r === -1 || u === 0 || u === 1 && r === o - 1 && r === s + 1) {
        e.base = e.name = n.slice(d, o);
      } else {
        e.name = n.slice(d, r);
        e.base = n.slice(d, o);
        e.ext = n.slice(r, o);
      }
    }
    if (s > 0) {
      e.dir = n.slice(0, s - 1);
    } else if (t) {
      e.dir = "/";
    }
    return e;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Rm.win32 = iE.win32 = iE;
Rm.posix = iE.posix = Rm;
k6 = Tte ? iE.normalize : Rm.normalize;
FR = Tte ? iE.isAbsolute : Rm.isAbsolute;
gS = Tte ? iE.join : Rm.join;
dgt = Tte ? iE.resolve : Rm.resolve;
DBe = Tte ? iE.relative : Rm.relative;
zN = Tte ? iE.dirname : Rm.dirname;
fd = Tte ? iE.basename : Rm.basename;
QD = Tte ? iE.extname : Rm.extname;
StA = Tte ? iE.format : Rm.format;
hgt = Tte ? iE.parse : Rm.parse;
ktA = Tte ? iE.toNamespacedPath : Rm.toNamespacedPath;
C1 = Tte ? iE.sep : Rm.sep;
EtA = Tte ? iE.delimiter : Rm.delimiter;
