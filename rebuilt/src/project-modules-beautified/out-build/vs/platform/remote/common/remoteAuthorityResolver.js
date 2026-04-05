"use strict";

// Module: out-build/vs/platform/remote/common/remoteAuthorityResolver.js
// Offset: 32617730 (bundle byte offset)
// Size: 1290 bytes
_s();
Wt();
fO = xi("remoteAuthorityResolverService");
(function (n) {
  n[n.WebSocket = 0] = "WebSocket";
  n[n.Managed = 1] = "Managed";
})($3f ||= {});
q3f = class {
  constructor(n) {
    this.id = n;
    this.type = 1;
  }
  toString() {
    return `Managed(${this.id})`;
  }
};
H3f = class {
  constructor(n, e) {
    this.host = n;
    this.port = e;
    this.type = 0;
  }
  toString() {
    return `WebSocket(${this.host}:${this.port})`;
  }
};
(function (n) {
  n.Unknown = "Unknown";
  n.NotAvailable = "NotAvailable";
  n.TemporarilyNotAvailable = "TemporarilyNotAvailable";
  n.NoResolverFound = "NoResolverFound";
  n.InvalidAuthority = "InvalidAuthority";
})(Jie ||= {});
zce = class jDt extends cT {
  static isNotAvailable(e) {
    return e instanceof jDt && e._code === Jie.NotAvailable;
  }
  static isTemporarilyNotAvailable(e) {
    return e instanceof jDt && e._code === Jie.TemporarilyNotAvailable;
  }
  static isNoResolverFound(e) {
    return e instanceof jDt && e._code === Jie.NoResolverFound;
  }
  static isInvalidAuthority(e) {
    return e instanceof jDt && e._code === Jie.InvalidAuthority;
  }
  static isHandled(e) {
    return e instanceof jDt && e.isHandled;
  }
  constructor(e, t = Jie.Unknown, i) {
    super(e);
    this._message = e;
    this._code = t;
    this._detail = i;
    this.isHandled = t === Jie.NotAvailable && i === true;
    Object.setPrototypeOf(this, jDt.prototype);
  }
};
