"use strict";

// Module: out-build/vs/editor/common/core/lineRange.js
// Offset: 1055171 (bundle byte offset)
// Size: 6033 bytes
_s();
$I();
ts();
GD();
rh = class vre {
  static fromRange(e) {
    return new vre(e.startLineNumber, e.endLineNumber);
  }
  static fromRangeInclusive(e) {
    return new vre(e.startLineNumber, e.endLineNumber + 1);
  }
  static subtract(e, t) {
    if (t) {
      if (e.startLineNumber < t.startLineNumber && t.endLineNumberExclusive < e.endLineNumberExclusive) {
        return [new vre(e.startLineNumber, t.startLineNumber), new vre(t.endLineNumberExclusive, e.endLineNumberExclusive)];
      } else if (t.startLineNumber <= e.startLineNumber && e.endLineNumberExclusive <= t.endLineNumberExclusive) {
        return [];
      } else if (t.endLineNumberExclusive < e.endLineNumberExclusive) {
        return [new vre(Math.max(t.endLineNumberExclusive, e.startLineNumber), e.endLineNumberExclusive)];
      } else {
        return [new vre(e.startLineNumber, Math.min(t.startLineNumber, e.endLineNumberExclusive))];
      }
    } else {
      return [e];
    }
  }
  static joinMany(e) {
    if (e.length === 0) {
      return [];
    }
    let t = new xVe(e[0].slice());
    for (let i = 1; i < e.length; i++) {
      t = t.getUnion(new xVe(e[i].slice()));
    }
    return t.ranges;
  }
  static join(e) {
    if (e.length === 0) {
      throw new _m("lineRanges cannot be empty");
    }
    let t = e[0].startLineNumber;
    let i = e[0].endLineNumberExclusive;
    for (let r = 1; r < e.length; r++) {
      t = Math.min(t, e[r].startLineNumber);
      i = Math.max(i, e[r].endLineNumberExclusive);
    }
    return new vre(t, i);
  }
  static ofLength(e, t) {
    return new vre(e, e + t);
  }
  static deserialize(e) {
    return new vre(e[0], e[1]);
  }
  constructor(e, t) {
    if (e > t) {
      throw new _m(`startLineNumber ${e} cannot be after endLineNumberExclusive ${t}`);
    }
    this.startLineNumber = e;
    this.endLineNumberExclusive = t;
  }
  contains(e) {
    return this.startLineNumber <= e && e < this.endLineNumberExclusive;
  }
  get isEmpty() {
    return this.startLineNumber === this.endLineNumberExclusive;
  }
  delta(e) {
    return new vre(this.startLineNumber + e, this.endLineNumberExclusive + e);
  }
  deltaLength(e) {
    return new vre(this.startLineNumber, this.endLineNumberExclusive + e);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(e) {
    return new vre(Math.min(this.startLineNumber, e.startLineNumber), Math.max(this.endLineNumberExclusive, e.endLineNumberExclusive));
  }
  toString() {
    return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
  }
  intersect(e) {
    const t = Math.max(this.startLineNumber, e.startLineNumber);
    const i = Math.min(this.endLineNumberExclusive, e.endLineNumberExclusive);
    if (t <= i) {
      return new vre(t, i);
    }
  }
  intersectsStrict(e) {
    return this.startLineNumber < e.endLineNumberExclusive && e.startLineNumber < this.endLineNumberExclusive;
  }
  overlapOrTouch(e) {
    return this.startLineNumber <= e.endLineNumberExclusive && e.startLineNumber <= this.endLineNumberExclusive;
  }
  equals(e) {
    return this.startLineNumber === e.startLineNumber && this.endLineNumberExclusive === e.endLineNumberExclusive;
  }
  toInclusiveRange() {
    if (this.isEmpty) {
      return null;
    } else {
      return new Zt(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
    }
  }
  toExclusiveRange() {
    return new Zt(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
  }
  mapToLineArray(e) {
    const t = [];
    for (let i = this.startLineNumber; i < this.endLineNumberExclusive; i++) {
      t.push(e(i));
    }
    return t;
  }
  forEach(e) {
    for (let t = this.startLineNumber; t < this.endLineNumberExclusive; t++) {
      e(t);
    }
  }
  serialize() {
    return [this.startLineNumber, this.endLineNumberExclusive];
  }
  includes(e) {
    return this.startLineNumber <= e && e < this.endLineNumberExclusive;
  }
  toOffsetRange() {
    return new dm(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
  distanceToRange(e) {
    if (this.endLineNumberExclusive <= e.startLineNumber) {
      return e.startLineNumber - this.endLineNumberExclusive;
    } else if (e.endLineNumberExclusive <= this.startLineNumber) {
      return this.startLineNumber - e.endLineNumberExclusive;
    } else {
      return 0;
    }
  }
  distanceToLine(e) {
    if (this.contains(e)) {
      return 0;
    } else if (e < this.startLineNumber) {
      return this.startLineNumber - e;
    } else {
      return e - this.endLineNumberExclusive;
    }
  }
  addMargin(e, t) {
    return new vre(this.startLineNumber - e, this.endLineNumberExclusive + t);
  }
};
xVe = class NCn {
  constructor(e = []) {
    this._normalizedRanges = e;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(e) {
    if (e.length === 0) {
      return;
    }
    const t = Sbe(this._normalizedRanges, r => r.endLineNumberExclusive >= e.startLineNumber);
    const i = xFt(this._normalizedRanges, r => r.startLineNumber <= e.endLineNumberExclusive) + 1;
    if (t === i) {
      this._normalizedRanges.splice(t, 0, e);
    } else if (t === i - 1) {
      const r = this._normalizedRanges[t];
      this._normalizedRanges[t] = r.join(e);
    } else {
      const r = this._normalizedRanges[t].join(this._normalizedRanges[i - 1]).join(e);
      this._normalizedRanges.splice(t, i - t, r);
    }
  }
  contains(e) {
    const t = EFt(this._normalizedRanges, i => i.startLineNumber <= e);
    return !!t && t.endLineNumberExclusive > e;
  }
  intersects(e) {
    const t = EFt(this._normalizedRanges, i => i.startLineNumber < e.endLineNumberExclusive);
    return !!t && t.endLineNumberExclusive > e.startLineNumber;
  }
  getUnion(e) {
    if (this._normalizedRanges.length === 0) {
      return e;
    }
    if (e._normalizedRanges.length === 0) {
      return this;
    }
    const t = [];
    let i = 0;
    let r = 0;
    let s = null;
    while (i < this._normalizedRanges.length || r < e._normalizedRanges.length) {
      let o = null;
      if (i < this._normalizedRanges.length && r < e._normalizedRanges.length) {
        const a = this._normalizedRanges[i];
        const l = e._normalizedRanges[r];
        if (a.startLineNumber < l.startLineNumber) {
          o = a;
          i++;
        } else {
          o = l;
          r++;
        }
      } else if (i < this._normalizedRanges.length) {
        o = this._normalizedRanges[i];
        i++;
      } else {
        o = e._normalizedRanges[r];
        r++;
      }
      if (s === null) {
        s = o;
      } else if (s.endLineNumberExclusive >= o.startLineNumber) {
        s = new rh(s.startLineNumber, Math.max(s.endLineNumberExclusive, o.endLineNumberExclusive));
      } else {
        t.push(s);
        s = o;
      }
    }
    if (s !== null) {
      t.push(s);
    }
    return new NCn(t);
  }
  subtractFrom(e) {
    const t = Sbe(this._normalizedRanges, o => o.endLineNumberExclusive >= e.startLineNumber);
    const i = xFt(this._normalizedRanges, o => o.startLineNumber <= e.endLineNumberExclusive) + 1;
    if (t === i) {
      return new NCn([e]);
    }
    const r = [];
    let s = e.startLineNumber;
    for (let o = t; o < i; o++) {
      const a = this._normalizedRanges[o];
      if (a.startLineNumber > s) {
        r.push(new rh(s, a.startLineNumber));
      }
      s = a.endLineNumberExclusive;
    }
    if (s < e.endLineNumberExclusive) {
      r.push(new rh(s, e.endLineNumberExclusive));
    }
    return new NCn(r);
  }
  toString() {
    return this._normalizedRanges.map(e => e.toString()).join(", ");
  }
  getIntersection(e) {
    const t = [];
    let i = 0;
    let r = 0;
    while (i < this._normalizedRanges.length && r < e._normalizedRanges.length) {
      const s = this._normalizedRanges[i];
      const o = e._normalizedRanges[r];
      const a = s.intersect(o);
      if (a && !a.isEmpty) {
        t.push(a);
      }
      if (s.endLineNumberExclusive < o.endLineNumberExclusive) {
        i++;
      } else {
        r++;
      }
    }
    return new NCn(t);
  }
  getWithDelta(e) {
    return new NCn(this._normalizedRanges.map(t => t.delta(e)));
  }
};
