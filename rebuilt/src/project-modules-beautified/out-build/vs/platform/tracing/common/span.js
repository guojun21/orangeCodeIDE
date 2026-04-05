"use strict";

// Module: out-build/vs/platform/tracing/common/span.js
// Offset: 564672 (bundle byte offset)
// Size: 4309 bytes
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.INTERNAL = 1] = "INTERNAL";
  n[n.SERVER = 2] = "SERVER";
  n[n.CLIENT = 3] = "CLIENT";
  n[n.PRODUCER = 4] = "PRODUCER";
  n[n.CONSUMER = 5] = "CONSUMER";
})(t4n ||= {});
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.OK = 1] = "OK";
  n[n.ERROR = 2] = "ERROR";
})(n4n ||= {});
pFo = new Array(256);
for (let n = 0; n < 256; n++) {
  pFo[n] = (n < 16 ? "0" : "") + n.toString(16);
}
gFo = 4096;
fFo = gFo * 2;
skc = "";
k4t = fFo;
bFo = class cJb {
  constructor(e) {
    this._attributes = {};
    this._kind = t4n.INTERNAL;
    this._links = [];
    this._traceFlags = 1;
    this._ended = false;
    this._name = e.name;
    this._traceId = e.traceId || this._generateTraceId();
    this._spanId = e.spanId || this._generateSpanId();
    this._parentSpanId = e.parentSpanId;
    this._kind = e.kind || t4n.INTERNAL;
    this._startTime = e.startTime || Date.now();
    this._traceFlags = e.traceFlags || 1;
  }
  spanContext() {
    return {
      traceId: this._traceId,
      spanId: this._spanId,
      traceFlags: this._traceFlags,
      traceState: this._traceState,
      isRemote: false
    };
  }
  end(e) {
    if (!this._ended) {
      this._endTime = e || Date.now();
      this._ended = true;
    }
  }
  setAttribute(e, t) {
    if (t === undefined) {
      delete this._attributes[e];
    } else {
      this._attributes[e] = String(t);
    }
    return this;
  }
  setAttributes(e) {
    for (const [t, i] of Object.entries(e)) {
      this.setAttribute(t, i);
    }
    return this;
  }
  setStatus(e) {
    this._status = e;
    return this;
  }
  updateName(e) {
    this._name = e;
    return this;
  }
  isRecording() {
    return !this._ended;
  }
  addLink(e) {
    this._links.push(e);
    return this;
  }
  createChild(e, t) {
    return new cJb({
      name: e,
      traceId: this._traceId,
      parentSpanId: this._spanId,
      kind: t || t4n.INTERNAL
    });
  }
  get name() {
    return this._name;
  }
  get traceId() {
    return this._traceId;
  }
  get spanId() {
    return this._spanId;
  }
  get parentSpanId() {
    return this._parentSpanId;
  }
  get startTime() {
    return this._startTime;
  }
  get endTime() {
    return this._endTime;
  }
  get attributes() {
    return {
      ...this._attributes
    };
  }
  get status() {
    return this._status;
  }
  get kind() {
    return this._kind;
  }
  get links() {
    return [...this._links];
  }
  get traceState() {
    return this._traceState;
  }
  get traceFlags() {
    return this._traceFlags;
  }
  get ended() {
    return this._ended;
  }
  _generateTraceId() {
    return lah(32);
  }
  _generateSpanId() {
    return lah(16);
  }
  addEvent(e) {
    return this;
  }
  addLinks(e) {
    return this;
  }
  recordException(e, t) {}
};
