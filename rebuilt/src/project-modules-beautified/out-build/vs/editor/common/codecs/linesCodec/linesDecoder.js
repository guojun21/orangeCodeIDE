"use strict";

// Module: out-build/vs/editor/common/codecs/linesCodec/linesDecoder.js
// Offset: 31077930 (bundle byte offset)
// Size: 1501 bytes
gsy();
ts();
ySa();
Lv();
wSa();
Ql();
Js();
pSa();
kIf = class extends V_i {
  constructor() {
    super(...arguments);
    this.buffer = Ms.alloc(0);
  }
  onStreamData(n) {
    this.buffer = Ms.concat([this.buffer, n]);
    this.processData(false);
  }
  processData(n) {
    while (this.buffer.byteLength > 0) {
      const e = this.lastEmittedLine ? this.lastEmittedLine.range.startLineNumber + 1 : 1;
      const t = this.findEndOfLineTokens(e);
      const i = t[0];
      if (!i) {
        if (n) {
          this.emitLine(e, this.buffer.slice(0));
        }
        break;
      }
      this.emitLine(e, this.buffer.slice(0, i.range.startColumn - 1));
      egt(this.lastEmittedLine, "No last emitted line found.");
      let r = this.lastEmittedLine.range.endColumn;
      for (const s of t) {
        const o = r + s.byte.byteLength;
        this._onData.fire(s.withRange({
          startColumn: r,
          endColumn: o
        }));
        this.buffer = this.buffer.slice(s.byte.byteLength);
        r = o;
      }
    }
    if (n) {
      Qb(this.buffer.byteLength === 0, "Expected the input data buffer to be empty when the stream ends.");
    }
  }
  findEndOfLineTokens(n) {
    const e = [];
    const t = this.buffer.indexOf(I1t.byte);
    const i = this.buffer.indexOf(Mqe.byte);
    if (t >= 0 && (t < i || i === -1)) {
      e.push(new I1t(new Zt(n, t + 1, n, t + 1 + I1t.byte.byteLength)));
      if (i === t + 1) {
        e.push(new Mqe(new Zt(n, i + 1, n, i + 1 + Mqe.byte.byteLength)));
      }
      if (this.buffer.byteLength > t + 1) {
        return e;
      } else {
        return [];
      }
    } else {
      if (i >= 0) {
        e.push(new Mqe(new Zt(n, i + 1, n, i + 1 + Mqe.byte.byteLength)));
      }
      return e;
    }
  }
  emitLine(n, e) {
    const t = new SIf(n, e.toString());
    this._onData.fire(t);
    this.lastEmittedLine = t;
    this.buffer = this.buffer.slice(e.byteLength);
  }
  onStreamEnd() {
    if (this.buffer.byteLength > 0) {
      this.processData(true);
    }
    super.onStreamEnd();
  }
};
