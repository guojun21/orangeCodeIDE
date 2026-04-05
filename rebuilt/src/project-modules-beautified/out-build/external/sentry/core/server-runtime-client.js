"use strict";

// Module: out-build/external/sentry/core/server-runtime-client.js
// Offset: 96338 (bundle byte offset)
// Size: 1932 bytes
UYd();
FYd();
aT();
ZT();
rW();
jzv();
US();
owc();
loe();
ZMn();
zyc();
JYd = class extends s2n {
  constructor(n) {
    QMn();
    Qzv(n);
    super(n);
  }
  eventFromException(n, e) {
    const t = $Yd(this, this._options.stackParser, n, e);
    t.level = "error";
    return e5e(t);
  }
  eventFromMessage(n, e = "info", t) {
    return e5e(qYd(this._options.stackParser, n, e, t, this._options.attachStacktrace));
  }
  captureException(n, e, t) {
    HYd(e);
    return super.captureException(n, e, t);
  }
  captureEvent(n, e, t) {
    if (!n.type && n.exception?.values && n.exception.values.length > 0) {
      HYd(e);
    }
    return super.captureEvent(n, e, t);
  }
  captureCheckIn(n, e, t) {
    const i = "checkInId" in n && n.checkInId ? n.checkInId : NB();
    if (!this._isEnabled()) {
      if (Lg) {
        Jo.warn("SDK not enabled, will not capture check-in.");
      }
      return i;
    }
    const r = this.getOptions();
    const {
      release: s,
      environment: o,
      tunnel: a
    } = r;
    const l = {
      check_in_id: i,
      monitor_slug: n.monitorSlug,
      status: n.status,
      release: s,
      environment: o
    };
    if ("duration" in n) {
      l.duration = n.duration;
    }
    if (e) {
      l.monitor_config = {
        schedule: e.schedule,
        checkin_margin: e.checkinMargin,
        max_runtime: e.maxRuntime,
        timezone: e.timezone,
        failure_issue_threshold: e.failureIssueThreshold,
        recovery_threshold: e.recoveryThreshold
      };
    }
    const [u, d] = jyc(this, t);
    if (d) {
      l.contexts = {
        trace: d
      };
    }
    const m = OYd(l, u, this.getSdkMetadata(), a, this.getDsn());
    if (Lg) {
      Jo.log("Sending checkin:", n.monitorSlug, n.status);
    }
    this.sendEnvelope(m);
    return i;
  }
  _prepareEvent(n, e, t, i) {
    if (this._options.platform) {
      n.platform = n.platform || this._options.platform;
    }
    if (this._options.runtime) {
      n.contexts = {
        ...n.contexts,
        runtime: n.contexts?.runtime || this._options.runtime
      };
    }
    if (this._options.serverName) {
      n.server_name = n.server_name || this._options.serverName;
    }
    return super._prepareEvent(n, e, t, i);
  }
};
