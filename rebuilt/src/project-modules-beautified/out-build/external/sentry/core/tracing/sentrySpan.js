"use strict";

// Module: out-build/external/sentry/core/tracing/sentrySpan.js
// Offset: 54129 (bundle byte offset)
// Size: 3742 bytes
aT();
ZT();
fyc();
y6();
US();
tze();
iW();
ide();
cze();
byc();
zKd();
JMn();
yyc = 1000;
K2t = class {
  constructor(n = {}) {
    this._traceId = n.traceId || rde();
    this._spanId = n.spanId || sde();
    this._startTime = n.startTimestamp || MR();
    this._links = n.links;
    this._attributes = {};
    this.setAttributes({
      [w1]: "manual",
      [HE]: n.op,
      ...n.attributes
    });
    this._name = n.name;
    if (n.parentSpanId) {
      this._parentSpanId = n.parentSpanId;
    }
    if ("sampled" in n) {
      this._sampled = n.sampled;
    }
    if (n.endTimestamp) {
      this._endTime = n.endTimestamp;
    }
    this._events = [];
    this._isStandaloneSpan = n.isStandalone;
    if (this._endTime) {
      this._onSpanEnded();
    }
  }
  addLink(n) {
    if (this._links) {
      this._links.push(n);
    } else {
      this._links = [n];
    }
    return this;
  }
  addLinks(n) {
    if (this._links) {
      this._links.push(...n);
    } else {
      this._links = n;
    }
    return this;
  }
  recordException(n, e) {}
  spanContext() {
    const {
      _spanId: n,
      _traceId: e,
      _sampled: t
    } = this;
    return {
      spanId: n,
      traceId: e,
      traceFlags: t ? uNo : syc
    };
  }
  setAttribute(n, e) {
    if (e === undefined) {
      delete this._attributes[n];
    } else {
      this._attributes[n] = e;
    }
    return this;
  }
  setAttributes(n) {
    Object.keys(n).forEach(e => this.setAttribute(e, n[e]));
    return this;
  }
  updateStartTime(n) {
    this._startTime = oze(n);
  }
  setStatus(n) {
    this._status = n;
    return this;
  }
  updateName(n) {
    this._name = n;
    this.setAttribute(c2, "custom");
    return this;
  }
  end(n) {
    if (!this._endTime) {
      this._endTime = oze(n);
      jKd(this);
      this._onSpanEnded();
    }
  }
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[HE],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: tyc(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[w1],
      profile_id: this._attributes[OMn],
      exclusive_time: this._attributes[rze],
      measurements: Ayc(this._events),
      is_segment: this._isStandaloneSpan && qP(this) === this || undefined,
      segment_id: this._isStandaloneSpan ? qP(this).spanContext().spanId : undefined,
      links: eyc(this._links)
    };
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  addEvent(n, e, t) {
    if (Lg) {
      Jo.log("[Tracing] Adding an event to span:", n);
    }
    const i = VKd(e) ? e : t || MR();
    const r = VKd(e) ? {} : e || {};
    const s = {
      name: n,
      time: oze(i),
      attributes: r
    };
    this._events.push(s);
    return this;
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  _onSpanEnded() {
    const n = sm();
    if (n) {
      n.emit("spanEnd", this);
    }
    if (!this._isStandaloneSpan && this !== qP(this)) {
      return;
    }
    if (this._isStandaloneSpan) {
      if (this._sampled) {
        ezv(WKd([this], n));
      } else {
        if (Lg) {
          Jo.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
        }
        if (n) {
          n.recordDroppedEvent("sample_rate", "span");
        }
      }
      return;
    }
    const t = this._convertSpanToTransaction();
    if (t) {
      (HMn(this).scope || ry()).captureEvent(t);
    }
  }
  _convertSpanToTransaction() {
    if (!KKd(jA(this))) {
      return;
    }
    if (!this._name) {
      if (Lg) {
        Jo.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      }
      this._name = "<unlabeled transaction>";
    }
    const {
      scope: n,
      isolationScope: e
    } = HMn(this);
    const t = n?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
    if (this._sampled !== true) {
      return;
    }
    const r = kpt(this).filter(u => u !== this && !Xjv(u)).map(u => jA(u)).filter(KKd);
    const s = this._attributes[c2];
    delete this._attributes[FMn];
    r.forEach(u => {
      delete u.data[FMn];
    });
    const o = {
      contexts: {
        trace: Mjv(this)
      },
      spans: r.length > yyc ? r.sort((u, d) => u.start_timestamp - d.start_timestamp).slice(0, yyc) : r,
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: {
        capturedSpanScope: n,
        capturedSpanIsolationScope: e,
        dynamicSamplingContext: cde(this)
      },
      request: t,
      ...(s && {
        transaction_info: {
          source: s
        }
      })
    };
    const a = Ayc(this._events);
    if (a && Object.keys(a).length) {
      if (Lg) {
        Jo.log("[Measurements] Adding measurements to transaction event", JSON.stringify(a, undefined, 2));
      }
      o.measurements = a;
    }
    return o;
  }
};
