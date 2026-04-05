"use strict";

// Module: out-build/vs/base/common/buffer.js
// Offset: 407273 (bundle byte offset)
// Size: 5916 bytes
L0();
gde();
lFn = typeof Buffer !== "undefined";
vrh = new Ob(() => new Uint8Array(256));
Ms = class w_e {
  static alloc(e) {
    if (lFn) {
      return new w_e(Buffer.allocUnsafe(e));
    } else {
      return new w_e(new Uint8Array(e));
    }
  }
  static wrap(e) {
    if (lFn && !Buffer.isBuffer(e)) {
      e = Buffer.from(e.buffer, e.byteOffset, e.byteLength);
    }
    return new w_e(e);
  }
  static fromString(e, t) {
    if (!t?.dontUseNodeBuffer && !false && lFn) {
      return new w_e(Buffer.from(e));
    } else {
      lCc ||= new TextEncoder();
      return new w_e(lCc.encode(e));
    }
  }
  static fromByteArray(e) {
    const t = w_e.alloc(e.length);
    for (let i = 0, r = e.length; i < r; i++) {
      t.buffer[i] = e[i];
    }
    return t;
  }
  static concat(e, t) {
    if (typeof t === "undefined") {
      t = 0;
      for (let s = 0, o = e.length; s < o; s++) {
        t += e[s].byteLength;
      }
    }
    const i = w_e.alloc(t);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      i.set(a, r);
      r += a.byteLength;
    }
    return i;
  }
  constructor(e) {
    this.buffer = e;
    this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const e = w_e.alloc(this.byteLength);
    e.set(this);
    return e;
  }
  toString() {
    if (lFn) {
      return this.buffer.toString();
    } else {
      uCc ||= new TextDecoder();
      return uCc.decode(this.buffer);
    }
  }
  slice(e, t) {
    return new w_e(this.buffer.subarray(e, t));
  }
  set(e, t) {
    if (e instanceof w_e) {
      this.buffer.set(e.buffer, t);
    } else if (e instanceof Uint8Array) {
      this.buffer.set(e, t);
    } else if (e instanceof ArrayBuffer) {
      this.buffer.set(new Uint8Array(e), t);
    } else if (ArrayBuffer.isView(e)) {
      this.buffer.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t);
    } else {
      throw new Error("Unknown argument 'array'");
    }
  }
  readUInt32BE(e) {
    return CY(this.buffer, e);
  }
  writeUInt32BE(e, t) {
    SY(this.buffer, e, t);
  }
  readUInt32LE(e) {
    return snA(this.buffer, e);
  }
  writeUInt32LE(e, t) {
    onA(this.buffer, e, t);
  }
  readUInt8(e) {
    return sCc(this.buffer, e);
  }
  writeUInt8(e, t) {
    oCc(this.buffer, e, t);
  }
  indexOf(e, t = 0) {
    return nnA(this.buffer, e instanceof w_e ? e.buffer : e, t);
  }
  equals(e) {
    if (this === e) {
      return true;
    } else if (this.byteLength !== e.byteLength) {
      return false;
    } else {
      return this.buffer.every((t, i) => t === e.buffer[i]);
    }
  }
};
Arh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
yrh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
