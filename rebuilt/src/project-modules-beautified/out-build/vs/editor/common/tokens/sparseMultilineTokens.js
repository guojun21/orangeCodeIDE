"use strict";

// Module: out-build/vs/editor/common/tokens/sparseMultilineTokens.js
// Offset: 25577092 (bundle byte offset)
// Size: 6105 bytes
tl();
ts();
EVe();
Hwg = class SWa {
  static create(e, t) {
    return new SWa(e, new Jwg(t));
  }
  get startLineNumber() {
    return this._startLineNumber;
  }
  get endLineNumber() {
    return this._endLineNumber;
  }
  constructor(e, t) {
    this._startLineNumber = e;
    this._tokens = t;
    this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
  }
  toString() {
    return this._tokens.toString(this._startLineNumber);
  }
  _updateEndLineNumber() {
    this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
  }
  isEmpty() {
    return this._tokens.isEmpty();
  }
  getLineTokens(e) {
    if (this._startLineNumber <= e && e <= this._endLineNumber) {
      return this._tokens.getLineTokens(e - this._startLineNumber);
    } else {
      return null;
    }
  }
  getRange() {
    const e = this._tokens.getRange();
    return e && new Zt(this._startLineNumber + e.startLineNumber, e.startColumn, this._startLineNumber + e.endLineNumber, e.endColumn);
  }
  removeTokens(e) {
    const t = e.startLineNumber - this._startLineNumber;
    const i = e.endLineNumber - this._startLineNumber;
    this._startLineNumber += this._tokens.removeTokens(t, e.startColumn - 1, i, e.endColumn - 1);
    this._updateEndLineNumber();
  }
  split(e) {
    const t = e.startLineNumber - this._startLineNumber;
    const i = e.endLineNumber - this._startLineNumber;
    const [r, s, o] = this._tokens.split(t, e.startColumn - 1, i, e.endColumn - 1);
    return [new SWa(this._startLineNumber, r), new SWa(this._startLineNumber + o, s)];
  }
  applyEdit(e, t) {
    const [i, r, s] = Vbe(t);
    this.acceptEdit(e, i, r, s, t.length > 0 ? t.charCodeAt(0) : 0);
  }
  acceptEdit(e, t, i, r, s) {
    this._acceptDeleteRange(e);
    this._acceptInsertText(new ar(e.startLineNumber, e.startColumn), t, i, r, s);
    this._updateEndLineNumber();
  }
  _acceptDeleteRange(e) {
    if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) {
      return;
    }
    const t = e.startLineNumber - this._startLineNumber;
    const i = e.endLineNumber - this._startLineNumber;
    if (i < 0) {
      const s = i - t;
      this._startLineNumber -= s;
      return;
    }
    const r = this._tokens.getMaxDeltaLine();
    if (!(t >= r + 1)) {
      if (t < 0 && i >= r + 1) {
        this._startLineNumber = 0;
        this._tokens.clear();
        return;
      }
      if (t < 0) {
        const s = -t;
        this._startLineNumber -= s;
        this._tokens.acceptDeleteRange(e.startColumn - 1, 0, 0, i, e.endColumn - 1);
      } else {
        this._tokens.acceptDeleteRange(0, t, e.startColumn - 1, i, e.endColumn - 1);
      }
    }
  }
  _acceptInsertText(e, t, i, r, s) {
    if (t === 0 && i === 0) {
      return;
    }
    const o = e.lineNumber - this._startLineNumber;
    if (o < 0) {
      this._startLineNumber += t;
      return;
    }
    const a = this._tokens.getMaxDeltaLine();
    if (!(o >= a + 1)) {
      this._tokens.acceptInsertText(o, e.column - 1, t, i, r, s);
    }
  }
};
Jwg = class dcd {
  constructor(e) {
    this._tokens = e;
    this._tokenCount = e.length / 4;
  }
  toString(e) {
    const t = [];
    for (let i = 0; i < this._tokenCount; i++) {
      t.push(`(${this._getDeltaLine(i) + e},${this._getStartCharacter(i)}-${this._getEndCharacter(i)})`);
    }
    return `[${t.join(",")}]`;
  }
  getMaxDeltaLine() {
    const e = this._getTokenCount();
    if (e === 0) {
      return -1;
    } else {
      return this._getDeltaLine(e - 1);
    }
  }
  getRange() {
    const e = this._getTokenCount();
    if (e === 0) {
      return null;
    }
    const t = this._getStartCharacter(0);
    const i = this._getDeltaLine(e - 1);
    const r = this._getEndCharacter(e - 1);
    return new Zt(0, t + 1, i, r + 1);
  }
  _getTokenCount() {
    return this._tokenCount;
  }
  _getDeltaLine(e) {
    return this._tokens[e * 4];
  }
  _getStartCharacter(e) {
    return this._tokens[e * 4 + 1];
  }
  _getEndCharacter(e) {
    return this._tokens[e * 4 + 2];
  }
  isEmpty() {
    return this._getTokenCount() === 0;
  }
  getLineTokens(e) {
    let t = 0;
    let i = this._getTokenCount() - 1;
    while (t < i) {
      const r = t + Math.floor((i - t) / 2);
      const s = this._getDeltaLine(r);
      if (s < e) {
        t = r + 1;
      } else if (s > e) {
        i = r - 1;
      } else {
        let o = r;
        while (o > t && this._getDeltaLine(o - 1) === e) {
          o--;
        }
        let a = r;
        while (a < i && this._getDeltaLine(a + 1) === e) {
          a++;
        }
        return new $jl(this._tokens.subarray(o * 4, a * 4 + 4));
      }
    }
    if (this._getDeltaLine(t) === e) {
      return new $jl(this._tokens.subarray(t * 4, t * 4 + 4));
    } else {
      return null;
    }
  }
  clear() {
    this._tokenCount = 0;
  }
  removeTokens(e, t, i, r) {
    const s = this._tokens;
    const o = this._tokenCount;
    let a = 0;
    let l = false;
    let u = 0;
    for (let d = 0; d < o; d++) {
      const m = d * 4;
      const p = s[m];
      const g = s[m + 1];
      const f = s[m + 2];
      const A = s[m + 3];
      if ((p > e || p === e && f >= t) && (p < i || p === i && g <= r)) {
        l = true;
      } else {
        if (a === 0) {
          u = p;
        }
        if (l) {
          const w = a * 4;
          s[w] = p - u;
          s[w + 1] = g;
          s[w + 2] = f;
          s[w + 3] = A;
        }
        a++;
      }
    }
    this._tokenCount = a;
    return u;
  }
  split(e, t, i, r) {
    const s = this._tokens;
    const o = this._tokenCount;
    const a = [];
    const l = [];
    let u = a;
    let d = 0;
    let m = 0;
    for (let p = 0; p < o; p++) {
      const g = p * 4;
      const f = s[g];
      const A = s[g + 1];
      const w = s[g + 2];
      const C = s[g + 3];
      if (f > e || f === e && w >= t) {
        if (f < i || f === i && A <= r) {
          continue;
        }
        if (u !== l) {
          u = l;
          d = 0;
          m = f;
        }
      }
      u[d++] = f - m;
      u[d++] = A;
      u[d++] = w;
      u[d++] = C;
    }
    return [new dcd(new Uint32Array(a)), new dcd(new Uint32Array(l)), m];
  }
  acceptDeleteRange(e, t, i, r, s) {
    const o = this._tokens;
    const a = this._tokenCount;
    const l = r - t;
    let u = 0;
    let d = false;
    for (let m = 0; m < a; m++) {
      const p = m * 4;
      let g = o[p];
      let f = o[p + 1];
      let A = o[p + 2];
      const w = o[p + 3];
      if (g < t || g === t && A <= i) {
        u++;
        continue;
      } else if (g === t && f < i) {
        if (g === r && A > s) {
          A -= s - i;
        } else {
          A = i;
        }
      } else if (g === t && f === i) {
        if (g === r && A > s) {
          A -= s - i;
        } else {
          d = true;
          continue;
        }
      } else if (g < r || g === r && f < s) {
        if (g === r && A > s) {
          g = t;
          f = i;
          A = f + (A - s);
        } else {
          d = true;
          continue;
        }
      } else if (g > r) {
        if (l === 0 && !d) {
          u = a;
          break;
        }
        g -= l;
      } else if (g === r && f >= s) {
        if (e && g === 0) {
          f += e;
          A += e;
        }
        g -= l;
        f -= s - i;
        A -= s - i;
      } else {
        throw new Error("Not possible!");
      }
      const C = u * 4;
      o[C] = g;
      o[C + 1] = f;
      o[C + 2] = A;
      o[C + 3] = w;
      u++;
    }
    this._tokenCount = u;
  }
  acceptInsertText(e, t, i, r, s, o) {
    const a = i === 0 && r === 1 && (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122);
    const l = this._tokens;
    const u = this._tokenCount;
    for (let d = 0; d < u; d++) {
      const m = d * 4;
      let p = l[m];
      let g = l[m + 1];
      let f = l[m + 2];
      if (!(p < e) && (p !== e || !(f < t))) {
        if (p === e && f === t) {
          if (a) {
            f += 1;
          } else {
            continue;
          }
        } else if (p === e && g < t && t < f) {
          if (i === 0) {
            f += r;
          } else {
            f = t;
          }
        } else {
          if (p === e && g === t && a) {
            continue;
          }
          if (p === e) {
            p += i;
            if (i === 0) {
              g += r;
              f += r;
            } else {
              const A = f - g;
              g = s + (g - t);
              f = g + A;
            }
          } else {
            p += i;
          }
        }
        l[m] = p;
        l[m + 1] = g;
        l[m + 2] = f;
      }
    }
  }
};
$jl = class {
  constructor(n) {
    this._tokens = n;
  }
  getCount() {
    return this._tokens.length / 4;
  }
  getStartCharacter(n) {
    return this._tokens[n * 4 + 1];
  }
  getEndCharacter(n) {
    return this._tokens[n * 4 + 2];
  }
  getMetadata(n) {
    return this._tokens[n * 4 + 3];
  }
};
