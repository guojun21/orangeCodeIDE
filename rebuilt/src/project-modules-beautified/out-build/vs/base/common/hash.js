"use strict";

// Module: out-build/vs/base/common/hash.js
// Offset: 465073 (bundle byte offset)
// Size: 3125 bytes
Ql();
oa();
wFn = n => {
  if (typeof n == "string" && n.length < 250) {
    const t = new yde();
    t.update(n);
    return Promise.resolve(t.digest());
  }
  let e;
  if (typeof n == "string") {
    e = new TextEncoder().encode(n);
  } else if (n instanceof Ms) {
    e = n.buffer;
  } else {
    e = n;
  }
  return crypto.subtle.digest("sha-1", e).then(Fze);
};
(function (n) {
  n[n.BLOCK_SIZE = 64] = "BLOCK_SIZE";
  n[n.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(ash ||= {});
yde = class sJb {
  static {
    this._bigBlock32 = new DataView(new ArrayBuffer(320));
  }
  constructor() {
    this._h0 = 1732584193;
    this._h1 = 4023233417;
    this._h2 = 2562383102;
    this._h3 = 271733878;
    this._h4 = 3285377520;
    this._buff = new Uint8Array(67);
    this._buffDV = new DataView(this._buff.buffer);
    this._buffLen = 0;
    this._totalLen = 0;
    this._leftoverHighSurrogate = 0;
    this._finished = false;
  }
  update(e) {
    const t = e.length;
    if (t === 0) {
      return;
    }
    const i = this._buff;
    let r = this._buffLen;
    let s = this._leftoverHighSurrogate;
    let o;
    let a;
    for (s !== 0 ? (o = s, a = -1, s = 0) : (o = e.charCodeAt(0), a = 0);;) {
      let l = o;
      if (d3(o)) {
        if (a + 1 < t) {
          const u = e.charCodeAt(a + 1);
          if (ggt(u)) {
            a++;
            l = J0c(o, u);
          } else {
            l = 65533;
          }
        } else {
          s = o;
          break;
        }
      } else if (ggt(o)) {
        l = 65533;
      }
      r = this._push(i, r, l);
      a++;
      if (a < t) {
        o = e.charCodeAt(a);
      } else {
        break;
      }
    }
    this._buffLen = r;
    this._leftoverHighSurrogate = s;
  }
  _push(e, t, i) {
    if (i < 128) {
      e[t++] = i;
    } else if (i < 2048) {
      e[t++] = (i & 1984) >>> 6 | 192;
      e[t++] = (i & 63) >>> 0 | 128;
    } else if (i < 65536) {
      e[t++] = (i & 61440) >>> 12 | 224;
      e[t++] = (i & 4032) >>> 6 | 128;
      e[t++] = (i & 63) >>> 0 | 128;
    } else {
      e[t++] = (i & 1835008) >>> 18 | 240;
      e[t++] = (i & 258048) >>> 12 | 128;
      e[t++] = (i & 4032) >>> 6 | 128;
      e[t++] = (i & 63) >>> 0 | 128;
    }
    if (t >= 64) {
      this._step();
      t -= 64;
      this._totalLen += 64;
      e[0] = e[64];
      e[1] = e[65];
      e[2] = e[66];
    }
    return t;
  }
  digest() {
    if (!this._finished) {
      this._finished = true;
      if (this._leftoverHighSurrogate) {
        this._leftoverHighSurrogate = 0;
        this._buffLen = this._push(this._buff, this._buffLen, 65533);
      }
      this._totalLen += this._buffLen;
      this._wrapUp();
    }
    return Fze(this._h0) + Fze(this._h1) + Fze(this._h2) + Fze(this._h3) + Fze(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128;
    this._buff.subarray(this._buffLen).fill(0);
    if (this._buffLen > 56) {
      this._step();
      this._buff.fill(0);
    }
    const e = this._totalLen * 8;
    this._buffDV.setUint32(56, Math.floor(e / 4294967296), false);
    this._buffDV.setUint32(60, e % 4294967296, false);
    this._step();
  }
  _step() {
    const e = sJb._bigBlock32;
    const t = this._buffDV;
    for (let m = 0; m < 64; m += 4) {
      e.setUint32(m, t.getUint32(m, false), false);
    }
    for (let m = 64; m < 320; m += 4) {
      e.setUint32(m, LCc(e.getUint32(m - 12, false) ^ e.getUint32(m - 32, false) ^ e.getUint32(m - 56, false) ^ e.getUint32(m - 64, false), 1), false);
    }
    let i = this._h0;
    let r = this._h1;
    let s = this._h2;
    let o = this._h3;
    let a = this._h4;
    let l;
    let u;
    let d;
    for (let m = 0; m < 80; m++) {
      if (m < 20) {
        l = r & s | ~r & o;
        u = 1518500249;
      } else if (m < 40) {
        l = r ^ s ^ o;
        u = 1859775393;
      } else if (m < 60) {
        l = r & s | r & o | s & o;
        u = 2400959708;
      } else {
        l = r ^ s ^ o;
        u = 3395469782;
      }
      d = LCc(i, 5) + l + a + u + e.getUint32(m * 4, false) & 4294967295;
      a = o;
      o = s;
      s = LCc(r, 30);
      r = i;
      i = d;
    }
    this._h0 = this._h0 + i & 4294967295;
    this._h1 = this._h1 + r & 4294967295;
    this._h2 = this._h2 + s & 4294967295;
    this._h3 = this._h3 + o & 4294967295;
    this._h4 = this._h4 + a & 4294967295;
  }
};
