"use strict";

// Module: out-build/external/bufbuild/protobuf/binary-encoding.js
// Offset: 2514831 (bundle byte offset)
// Size: 8686 bytes
Lkh();
BRe();
EKe();
(function (n) {
  n[n.Varint = 0] = "Varint";
  n[n.Bit64 = 1] = "Bit64";
  n[n.LengthDelimited = 2] = "LengthDelimited";
  n[n.StartGroup = 3] = "StartGroup";
  n[n.EndGroup = 4] = "EndGroup";
  n[n.Bit32 = 5] = "Bit32";
})(q6 ||= {});
Qkh = class {
  constructor(n) {
    this.stack = [];
    this.textEncoder = n ?? new TextEncoder();
    this.chunks = [];
    this.buf = [];
  }
  finish() {
    if (this.buf.length) {
      this.chunks.push(new Uint8Array(this.buf));
      this.buf = [];
    }
    let n = 0;
    for (let i = 0; i < this.chunks.length; i++) {
      n += this.chunks[i].length;
    }
    let e = new Uint8Array(n);
    let t = 0;
    for (let i = 0; i < this.chunks.length; i++) {
      e.set(this.chunks[i], t);
      t += this.chunks[i].length;
    }
    this.chunks = [];
    return e;
  }
  fork() {
    this.stack.push({
      chunks: this.chunks,
      buf: this.buf
    });
    this.chunks = [];
    this.buf = [];
    return this;
  }
  join() {
    let n = this.finish();
    let e = this.stack.pop();
    if (!e) {
      throw new Error("invalid state, fork stack empty");
    }
    this.chunks = e.chunks;
    this.buf = e.buf;
    this.uint32(n.byteLength);
    return this.raw(n);
  }
  tag(n, e) {
    return this.uint32((n << 3 | e) >>> 0);
  }
  raw(n) {
    if (this.buf.length) {
      this.chunks.push(new Uint8Array(this.buf));
      this.buf = [];
    }
    this.chunks.push(n);
    return this;
  }
  uint32(n) {
    for (zBc(n); n > 127;) {
      this.buf.push(n & 127 | 128);
      n = n >>> 7;
    }
    this.buf.push(n);
    return this;
  }
  int32(n) {
    p9o(n);
    Pkh(n, this.buf);
    return this;
  }
  bool(n) {
    this.buf.push(n ? 1 : 0);
    return this;
  }
  bytes(n) {
    this.uint32(n.byteLength);
    return this.raw(n);
  }
  string(n) {
    let e = this.textEncoder.encode(n);
    this.uint32(e.byteLength);
    return this.raw(e);
  }
  float(n) {
    ykh(n);
    let e = new Uint8Array(4);
    new DataView(e.buffer).setFloat32(0, n, true);
    return this.raw(e);
  }
  double(n) {
    let e = new Uint8Array(8);
    new DataView(e.buffer).setFloat64(0, n, true);
    return this.raw(e);
  }
  fixed32(n) {
    zBc(n);
    let e = new Uint8Array(4);
    new DataView(e.buffer).setUint32(0, n, true);
    return this.raw(e);
  }
  sfixed32(n) {
    p9o(n);
    let e = new Uint8Array(4);
    new DataView(e.buffer).setInt32(0, n, true);
    return this.raw(e);
  }
  sint32(n) {
    p9o(n);
    n = (n << 1 ^ n >> 31) >>> 0;
    Pkh(n, this.buf);
    return this;
  }
  sfixed64(n) {
    let e = new Uint8Array(8);
    let t = new DataView(e.buffer);
    let i = Eo.enc(n);
    t.setInt32(0, i.lo, true);
    t.setInt32(4, i.hi, true);
    return this.raw(e);
  }
  fixed64(n) {
    let e = new Uint8Array(8);
    let t = new DataView(e.buffer);
    let i = Eo.uEnc(n);
    t.setInt32(0, i.lo, true);
    t.setInt32(4, i.hi, true);
    return this.raw(e);
  }
  int64(n) {
    let e = Eo.enc(n);
    YBc(e.lo, e.hi, this.buf);
    return this;
  }
  sint64(n) {
    let e = Eo.enc(n);
    let t = e.hi >> 31;
    let i = e.lo << 1 ^ t;
    let r = (e.hi << 1 | e.lo >>> 31) ^ t;
    YBc(i, r, this.buf);
    return this;
  }
  uint64(n) {
    let e = Eo.uEnc(n);
    YBc(e.lo, e.hi, this.buf);
    return this;
  }
};
jkh = class {
  constructor(n, e) {
    this.varint64 = omA;
    this.uint32 = lmA;
    this.buf = n;
    this.len = n.length;
    this.pos = 0;
    this.view = new DataView(n.buffer, n.byteOffset, n.byteLength);
    this.textDecoder = e ?? new TextDecoder();
  }
  tag() {
    let n = this.uint32();
    let e = n >>> 3;
    let t = n & 7;
    if (e <= 0 || t < 0 || t > 5) {
      throw new Error("illegal tag: field no " + e + " wire type " + t);
    }
    return [e, t];
  }
  skip(n, e) {
    let t = this.pos;
    switch (n) {
      case q6.Varint:
        while (this.buf[this.pos++] & 128);
        break;
      case q6.Bit64:
        this.pos += 4;
      case q6.Bit32:
        this.pos += 4;
        break;
      case q6.LengthDelimited:
        let i = this.uint32();
        this.pos += i;
        break;
      case q6.StartGroup:
        while (true) {
          const [r, s] = this.tag();
          if (s === q6.EndGroup) {
            if (e !== undefined && r !== e) {
              throw new Error("invalid end group tag");
            }
            break;
          }
          this.skip(s, r);
        }
        break;
      default:
        throw new Error("cant skip wire type " + n);
    }
    this.assertBounds();
    return this.buf.subarray(t, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) {
      throw new RangeError("premature EOF");
    }
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let n = this.uint32();
    return n >>> 1 ^ -(n & 1);
  }
  int64() {
    return Eo.dec(...this.varint64());
  }
  uint64() {
    return Eo.uDec(...this.varint64());
  }
  sint64() {
    let [n, e] = this.varint64();
    let t = -(n & 1);
    n = (n >>> 1 | (e & 1) << 31) ^ t;
    e = e >>> 1 ^ t;
    return Eo.dec(n, e);
  }
  bool() {
    let [n, e] = this.varint64();
    return n !== 0 || e !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true);
  }
  fixed64() {
    return Eo.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return Eo.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true);
  }
  bytes() {
    let n = this.uint32();
    let e = this.pos;
    this.pos += n;
    this.assertBounds();
    return this.buf.subarray(e, e + n);
  }
  string() {
    return this.textDecoder.decode(this.bytes());
  }
};
