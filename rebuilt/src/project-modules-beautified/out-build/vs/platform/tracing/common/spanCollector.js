"use strict";

// Module: out-build/vs/platform/tracing/common/spanCollector.js
// Offset: 563154 (bundle byte offset)
// Size: 1518 bytes
oah = 1000;
aah = class {
  constructor() {
    this._buffer = [];
    this._dropped = 0;
    this._maxBuffer = oah;
  }
  configure(n) {
    if (n.maxBuffer !== undefined) {
      this._maxBuffer = n.maxBuffer;
    }
  }
  collect(n) {
    if (!n) {
      return;
    }
    const e = "traceId" in n && typeof n.traceId == "string" && !("createChild" in n) ? n : this._convert(n);
    if (this._buffer.length < this._maxBuffer) {
      this._buffer.push(e);
    } else {
      this._dropped++;
    }
  }
  takeAll() {
    const n = this._buffer;
    const e = this._dropped;
    this._buffer = [];
    this._dropped = 0;
    return {
      spans: n,
      dropped: e
    };
  }
  _convert(n) {
    return {
      traceId: n.traceId,
      spanId: n.spanId,
      parentSpanId: n.parentSpanId,
      name: n.name,
      startTime: n.startTime,
      endTime: n.endTime ?? Date.now(),
      attributes: n.attributes,
      error: n.status?.code === 2,
      traceState: n.traceState,
      flags: n.traceFlags,
      kind: n.kind,
      statusCode: n.status?.code,
      statusMessage: n.status?.message,
      links: n.links.map(e => ({
        traceId: e.traceId,
        spanId: e.spanId,
        attributes: e.attributes,
        traceState: e.traceState,
        flags: e.flags
      }))
    };
  }
  _convertAttributes(n) {
    const e = {};
    for (const [t, i] of Object.entries(n)) {
      e[t] = String(i);
    }
    return e;
  }
};
B5e = new aah();
