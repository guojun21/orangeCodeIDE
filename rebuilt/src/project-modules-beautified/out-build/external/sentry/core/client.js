"use strict";

// Module: out-build/external/sentry/core/client.js
// Offset: 86373 (bundle byte offset)
// Size: 7534 bytes
Gyc();
mNo();
aT();
ZT();
fyc();
sW();
i2n();
Yyc();
nNo();
cze();
xYd();
US();
hSe();
lde();
IYd();
h9();
qAc();
loe();
WMn();
Lyc();
cyc();
iW();
ZMn();
$zv();
ewc = "Not capturing exception because it's already been captured.";
twc = "Discarded session because of missing or non-string release";
nwc = Symbol.for("SentryInternalError");
iwc = Symbol.for("SentryDoNotSendEventError");
MYd = 5000;
s2n = class {
  constructor(n) {
    this._options = n;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    if (n.dsn) {
      this._dsn = YAc(n.dsn);
    } else if (Lg) {
      Jo.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const t = Hyc(this._dsn, n.tunnel, n._metadata ? n._metadata.sdk : undefined);
      this._transport = n.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...n.transportOptions,
        url: t
      });
    }
    if (this._options.enableLogs) {
      RYd(this, "afterCaptureLog", "flushLogs", Gzv, n2n);
    }
    if (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true) {
      RYd(this, "afterCaptureMetric", "flushMetrics", Jzv, r2n);
    }
  }
  captureException(n, e, t) {
    const i = NB();
    if (FAc(n)) {
      if (Lg) {
        Jo.log(ewc);
      }
      return i;
    }
    const r = {
      event_id: i,
      ...e
    };
    this._process(this.eventFromException(n, r).then(s => this._captureEvent(s, r, t)));
    return r.event_id;
  }
  captureMessage(n, e, t, i) {
    const r = {
      event_id: NB(),
      ...t
    };
    const s = Apt(n) ? n : String(n);
    const o = tde(n) ? this.eventFromMessage(s, e, r) : this.eventFromException(n, r);
    this._process(o.then(a => this._captureEvent(a, r, i)));
    return r.event_id;
  }
  captureEvent(n, e, t) {
    const i = NB();
    if (e?.originalException && FAc(e.originalException)) {
      if (Lg) {
        Jo.log(ewc);
      }
      return i;
    }
    const r = {
      event_id: i,
      ...e
    };
    const s = n.sdkProcessingMetadata || {};
    const o = s.capturedSpanScope;
    const a = s.capturedSpanIsolationScope;
    this._process(this._captureEvent(n, r, o || t, a));
    return r.event_id;
  }
  captureSession(n) {
    this.sendSession(n);
    ypt(n, {
      init: false
    });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(n) {
    const e = this._transport;
    if (!e) {
      return true;
    }
    this.emit("flush");
    const t = await this._isClientDoneProcessing(n);
    const i = await e.flush(n);
    return t && i;
  }
  async close(n) {
    const e = await this.flush(n);
    this.getOptions().enabled = false;
    this.emit("close");
    return e;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(n) {
    this._eventProcessors.push(n);
  }
  init() {
    if (this._isEnabled() || this._options.integrations.some(({
      name: n
    }) => n.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  getIntegrationByName(n) {
    return this._integrations[n];
  }
  addIntegration(n) {
    const e = this._integrations[n.name];
    bYd(this, n, this._integrations);
    if (!e) {
      fYd(this, [n]);
    }
  }
  sendEvent(n, e = {}) {
    this.emit("beforeSendEvent", n, e);
    let t = GKd(n, this._dsn, this._options._metadata, this._options.tunnel);
    for (const i of e.attachments || []) {
      t = UKd(t, qKd(i));
    }
    this.sendEnvelope(t).then(i => this.emit("afterSendEvent", n, i));
  }
  sendSession(n) {
    const {
      release: e,
      environment: t = Ept
    } = this._options;
    if ("aggregates" in n) {
      const r = n.attrs || {};
      if (!r.release && !e) {
        if (Lg) {
          Jo.warn(twc);
        }
        return;
      }
      r.release = r.release || e;
      r.environment = r.environment || t;
      n.attrs = r;
    } else {
      if (!n.release && !e) {
        if (Lg) {
          Jo.warn(twc);
        }
        return;
      }
      n.release = n.release || e;
      n.environment = n.environment || t;
    }
    this.emit("beforeSendSession", n);
    const i = JKd(n, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(i);
  }
  recordDroppedEvent(n, e, t = 1) {
    if (this._options.sendClientReports) {
      const i = `${n}:${e}`;
      if (Lg) {
        Jo.log(`Recording outcome: "${i}"${t > 1 ? ` (${t}
     times)` : ""}`);
      }
      this._outcomes[i] = (this._outcomes[i] || 0) + t;
    }
  }
  on(n, e) {
    const t = this._hooks[n] = this._hooks[n] || new Set();
    const i = (...r) => e(...r);
    t.add(i);
    return () => {
      t.delete(i);
    };
  }
  emit(n, ...e) {
    const t = this._hooks[n];
    if (t) {
      t.forEach(i => i(...e));
    }
  }
  async sendEnvelope(n) {
    this.emit("beforeEnvelope", n);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(n);
      } catch (e) {
        if (Lg) {
          Jo.error("Error while sending envelope:", e);
        }
        return {};
      }
    }
    if (Lg) {
      Jo.error("Transport disabled");
    }
    return {};
  }
  _setupIntegrations() {
    const {
      integrations: n
    } = this._options;
    this._integrations = Czv(this, n);
    fYd(this, n);
  }
  _updateSessionFromEvent(n, e) {
    let t = e.level === "fatal";
    let i = false;
    const r = e.exception?.values;
    if (r) {
      i = true;
      t = false;
      for (const a of r) {
        if (a.mechanism?.handled === false) {
          t = true;
          break;
        }
      }
    }
    const s = n.status === "ok";
    if (s && n.errors === 0 || s && t) {
      ypt(n, {
        ...(t && {
          status: "crashed"
        }),
        errors: n.errors || Number(i || t)
      });
      this.captureSession(n);
    }
  }
  async _isClientDoneProcessing(n) {
    let e = 0;
    while (!n || e < n) {
      await new Promise(t => setTimeout(t, 1));
      if (!this._numProcessing) {
        return true;
      }
      e++;
    }
    return false;
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }
  _prepareEvent(n, e, t, i) {
    const r = this.getOptions();
    const s = Object.keys(this._integrations);
    if (!e.integrations && s?.length) {
      e.integrations = s;
    }
    this.emit("preprocessEvent", n, e);
    if (!n.type) {
      i.setLastEventId(n.event_id || e.event_id);
    }
    return Pyc(r, n, e, t, this, i).then(o => {
      if (o === null) {
        return o;
      }
      this.emit("postprocessEvent", o, e);
      o.contexts = {
        trace: HAc(t),
        ...o.contexts
      };
      const a = gNo(this, t);
      o.sdkProcessingMetadata = {
        dynamicSamplingContext: a,
        ...o.sdkProcessingMetadata
      };
      return o;
    });
  }
  _captureEvent(n, e = {}, t = ry(), i = MB()) {
    if (Lg && Xyc(n)) {
      Jo.log(`Captured error event \`${TYd(n)[0] || "<unknown>"}\``);
    }
    return this._processEvent(n, e, t, i).then(r => r.event_id, r => {
      if (Lg) {
        if (BYd(r)) {
          Jo.log(r.message);
        } else if (DYd(r)) {
          Jo.warn(r.message);
        } else {
          Jo.warn(r);
        }
      }
    });
  }
  _processEvent(n, e, t, i) {
    const r = this.getOptions();
    const {
      sampleRate: s
    } = r;
    const o = PYd(n);
    const a = Xyc(n);
    const l = n.type || "error";
    const u = `before send for type \`${l}\``;
    const d = typeof s === "undefined" ? undefined : sze(s);
    if (a && typeof d == "number" && Math.random() > d) {
      this.recordDroppedEvent("sample_rate", "error");
      return ANo(Zyc(`Discarding event because it's not included in the random sample (sampling rate = ${s})`));
    }
    const m = l === "replay_event" ? "replay" : l;
    return this._prepareEvent(n, e, t, i).then(p => {
      if (p === null) {
        this.recordDroppedEvent("event_processor", m);
        throw Zyc("An event processor returned `null`, will not send event.");
      }
      if (e.data && e.data.__sentry__ === true) {
        return p;
      }
      const f = Hzv(this, r, p, e);
      return qzv(f, u);
    }).then(p => {
      if (p === null) {
        this.recordDroppedEvent("before_send", m);
        if (o) {
          const w = 1 + (n.spans || []).length;
          this.recordDroppedEvent("before_send", "span", w);
        }
        throw Zyc(`${u} returned \`null\`, will not send event.`);
      }
      const g = t.getSession() || i.getSession();
      if (a && g) {
        this._updateSessionFromEvent(g, p);
      }
      if (o) {
        const A = p.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const w = p.spans ? p.spans.length : 0;
        const C = A - w;
        if (C > 0) {
          this.recordDroppedEvent("before_send", "span", C);
        }
      }
      const f = p.transaction_info;
      if (o && f && p.transaction !== n.transaction) {
        const A = "custom";
        p.transaction_info = {
          ...f,
          source: A
        };
      }
      this.sendEvent(p, e);
      return p;
    }).then(null, p => {
      throw BYd(p) || DYd(p) ? p : (this.captureException(p, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: p
      }), xNo(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`));
    });
  }
  _process(n) {
    this._numProcessing++;
    n.then(e => {
      this._numProcessing--;
      return e;
    }, e => {
      this._numProcessing--;
      return e;
    });
  }
  _clearOutcomes() {
    const n = this._outcomes;
    this._outcomes = {};
    return Object.entries(n).map(([e, t]) => {
      const [i, r] = e.split(":");
      return {
        reason: i,
        category: r,
        quantity: t
      };
    });
  }
  _flushOutcomes() {
    if (Lg) {
      Jo.log("Flushing outcomes...");
    }
    const n = this._clearOutcomes();
    if (n.length === 0) {
      if (Lg) {
        Jo.log("No outcomes to send");
      }
      return;
    }
    if (!this._dsn) {
      if (Lg) {
        Jo.log("No dsn provided, will not send outcomes");
      }
      return;
    }
    if (Lg) {
      Jo.log("Sending outcomes:", n);
    }
    const e = EYd(n, this._options.tunnel && ade(this._dsn));
    this.sendEnvelope(e);
  }
};
