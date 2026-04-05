"use strict";

// Module: out-build/vs/platform/tracing/common/tracing.js
// Offset: 568981 (bundle byte offset)
// Size: 2179 bytes
vr();
_s();
Cde();
UiA();
M4();
cah();
qiA();
if (typeof Symbol.dispose != "symbol") {
  Object.defineProperty(Symbol, "dispose", {
    value: Symbol("Symbol.dispose")
  });
}
if (typeof Symbol.asyncDispose != "symbol") {
  Object.defineProperty(Symbol, "asyncDispose", {
    value: Symbol("Symbol.asyncDispose")
  });
}
jgt = "traceparent";
ukc = "__tracingCtx";
mah = class lJb {
  constructor() {
    this[dah] = true;
  }
  spanContext() {}
  setAttribute(e, t) {}
  setError(e) {}
  end() {}
  startSpan(e) {
    return new lJb();
  }
  startSpanClosure(e, t) {
    return t();
  }
  reportEvent(e, t) {}
  reportException(e, t) {}
  [(dah = ukc, Symbol.dispose)]() {}
};
L5e = new mah();
x4t = class {
  constructor(n, e = false) {
    this[hah] = true;
    this._ended = false;
    this._doNotReport = false;
    this._span = n;
    this._doNotReport = e;
  }
  end() {
    if (!this._ended) {
      this._span?.end();
      if (!this._doNotReport) {
        B5e.collect(this._span);
      }
      this._ended = true;
    }
  }
  spanContext() {
    const n = this._span?.spanContext();
    if (n) {
      return {
        traceId: n.traceId,
        spanId: n.spanId,
        traceFlags: n.traceFlags
      };
    }
  }
  setAttribute(n, e) {
    this._span?.setAttribute(n, e);
  }
  setError(n) {
    if (!this._span) {
      return;
    }
    let e = "internal_error";
    if (n instanceof Error) {
      e = n.message || e;
      this._span.setAttribute("error.stack", n.stack ?? "");
      this._span.setAttribute("error.type", n.name ?? n.constructor?.name ?? "Error");
    } else if (typeof n == "string") {
      e = n;
    } else if (n != null) {
      e = String(n);
    }
    this._span.setAttribute("error.message", e);
    this._span.setStatus({
      code: n4n.ERROR,
      message: e
    });
  }
  startSpan(n) {
    return okc(n, this._span);
  }
  startSpanClosure(n, e) {
    const t = {
      stack: [],
      error: undefined,
      hasError: false
    };
    try {
      const i = __addDisposableResource(t, okc(n, this._span), false);
      return e();
    } catch (i) {
      t.error = i;
      t.hasError = true;
    } finally {
      __disposeResources(t);
    }
  }
  reportEvent(n, e) {
    if (R5e()) {
      return;
    }
    const t = this._span ? mFo(this._span, n) : S4t(n);
    vFo(t, "event", e);
    t.end();
    B5e.collect(t);
  }
  reportException(n, e) {
    if (R5e()) {
      return;
    }
    const t = this._span ? mFo(this._span, "exception") : S4t("exception");
    let i = "internal_error";
    let r = "";
    let s = "Error";
    if (n instanceof Error) {
      i = n.message || i;
      r = n.stack ?? "";
      s = n.name ?? n.constructor?.name ?? s;
    } else {
      i = String(n);
      s = "StringError";
    }
    vFo(t, "error", e);
    t.setAttribute("error.message", i);
    t.setAttribute("error.stack", r);
    t.setAttribute("error.type", s);
    t.setStatus({
      code: n4n.ERROR,
      message: i
    });
    t.end();
    B5e.collect(t);
  }
  [(hah = ukc, Symbol.dispose)]() {
    this.end();
  }
};
