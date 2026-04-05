"use strict";

// Module: out-build/external/sentry/core/scope.js
// Offset: 26762 (bundle byte offset)
// Size: 5414 bytes
ZT();
nNo();
US();
h9();
qAc();
loe();
tze();
wpt();
mBe();
ide();
fKd = 100;
dSe = class Yod {
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: rde(),
      sampleRand: Math.random()
    };
  }
  clone() {
    const e = new Yod();
    e._breadcrumbs = [...this._breadcrumbs];
    e._tags = {
      ...this._tags
    };
    e._extra = {
      ...this._extra
    };
    e._contexts = {
      ...this._contexts
    };
    if (this._contexts.flags) {
      e._contexts.flags = {
        values: [...this._contexts.flags.values]
      };
    }
    e._user = this._user;
    e._level = this._level;
    e._session = this._session;
    e._transactionName = this._transactionName;
    e._fingerprint = this._fingerprint;
    e._eventProcessors = [...this._eventProcessors];
    e._attachments = [...this._attachments];
    e._sdkProcessingMetadata = {
      ...this._sdkProcessingMetadata
    };
    e._propagationContext = {
      ...this._propagationContext
    };
    e._client = this._client;
    e._lastEventId = this._lastEventId;
    fbe(e, H2t(this));
    return e;
  }
  setClient(e) {
    this._client = e;
  }
  setLastEventId(e) {
    this._lastEventId = e;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(e) {
    this._scopeListeners.push(e);
  }
  addEventProcessor(e) {
    this._eventProcessors.push(e);
    return this;
  }
  setUser(e) {
    this._user = e || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined
    };
    if (this._session) {
      ypt(this._session, {
        user: e
      });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  setTags(e) {
    this._tags = {
      ...this._tags,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(e, t) {
    this._tags = {
      ...this._tags,
      [e]: t
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtras(e) {
    this._extra = {
      ...this._extra,
      ...e
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(e, t) {
    this._extra = {
      ...this._extra,
      [e]: t
    };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(e) {
    this._fingerprint = e;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(e) {
    this._level = e;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(e) {
    this._transactionName = e;
    this._notifyScopeListeners();
    return this;
  }
  setContext(e, t) {
    if (t === null) {
      delete this._contexts[e];
    } else {
      this._contexts[e] = t;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSession(e) {
    if (e) {
      this._session = e;
    } else {
      delete this._session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(e) {
    if (!e) {
      return this;
    }
    const t = typeof e == "function" ? e(this) : e;
    const i = t instanceof Yod ? t.getScopeData() : bY(t) ? e : undefined;
    const {
      tags: r,
      extra: s,
      user: o,
      contexts: a,
      level: l,
      fingerprint: u = [],
      propagationContext: d
    } = i || {};
    this._tags = {
      ...this._tags,
      ...r
    };
    this._extra = {
      ...this._extra,
      ...s
    };
    this._contexts = {
      ...this._contexts,
      ...a
    };
    if (o && Object.keys(o).length) {
      this._user = o;
    }
    if (l) {
      this._level = l;
    }
    if (u.length) {
      this._fingerprint = u;
    }
    if (d) {
      this._propagationContext = d;
    }
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._session = undefined;
    fbe(this, undefined);
    this._attachments = [];
    this.setPropagationContext({
      traceId: rde(),
      sampleRand: Math.random()
    });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(e, t) {
    const i = typeof t == "number" ? t : fKd;
    if (i <= 0) {
      return this;
    }
    const r = {
      timestamp: pBe(),
      ...e,
      message: e.message ? BMn(e.message, 2048) : e.message
    };
    this._breadcrumbs.push(r);
    if (this._breadcrumbs.length > i) {
      this._breadcrumbs = this._breadcrumbs.slice(-i);
      this._client?.recordDroppedEvent("buffer_overflow", "log_item");
    }
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(e) {
    this._attachments.push(e);
    return this;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: H2t(this)
    };
  }
  setSDKProcessingMetadata(e) {
    this._sdkProcessingMetadata = PMn(this._sdkProcessingMetadata, e, 2);
    return this;
  }
  setPropagationContext(e) {
    this._propagationContext = e;
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(e, t) {
    const i = t?.event_id || NB();
    if (!this._client) {
      if (Lg) {
        Jo.warn("No client configured on scope - will not capture exception!");
      }
      return i;
    }
    const r = new Error("Sentry syntheticException");
    this._client.captureException(e, {
      originalException: e,
      syntheticException: r,
      ...t,
      event_id: i
    }, this);
    return i;
  }
  captureMessage(e, t, i) {
    const r = i?.event_id || NB();
    if (!this._client) {
      if (Lg) {
        Jo.warn("No client configured on scope - will not capture message!");
      }
      return r;
    }
    const s = new Error(e);
    this._client.captureMessage(e, t, {
      originalException: e,
      syntheticException: s,
      ...i,
      event_id: r
    }, this);
    return r;
  }
  captureEvent(e, t) {
    const i = t?.event_id || NB();
    if (this._client) {
      this._client.captureEvent(e, {
        ...t,
        event_id: i
      }, this);
      return i;
    } else {
      if (Lg) {
        Jo.warn("No client configured on scope - will not capture event!");
      }
      return i;
    }
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(e => {
        e(this);
      });
      this._notifyingListeners = false;
    }
  }
};
