"use strict";

// Module: out-build/vs/platform/request/common/request.js
// Offset: 28266549 (bundle byte offset)
// Size: 1073 bytes
Ql();
_s();
rt();
Ht();
Mp();
Wt();
Ws();
u8 = xi("requestService");
Qef = class {
  constructor(n) {
    this.original = n;
  }
  toJSON() {
    if (!this.headers) {
      const n = Object.create(null);
      for (const e in this.original) {
        if (e.toLowerCase() === "authorization" || e.toLowerCase() === "proxy-authorization") {
          n[e] = "*****";
        } else {
          n[e] = this.original[e];
        }
      }
      this.headers = n;
    }
    return this.headers;
  }
};
jef = class extends at {
  constructor(n) {
    super();
    this.logService = n;
    this.counter = 0;
  }
  async logAndRequest(n, e) {
    const t = `#${++this.counter}: ${n.url}`;
    this.logService.trace(`${t} - begin`, n.type, new Qef(n.headers ?? {}));
    try {
      const i = await e();
      this.logService.trace(`${t} - end`, n.type, i.res.statusCode, i.res.headers);
      return i;
    } catch (i) {
      this.logService.error(`${t} - error`, n.type, ov(i));
      throw i;
    }
  }
};
zau = ["http.proxy", "http.proxyStrictSSL", "http.proxyKerberosServicePrincipal", "http.noProxy", "http.proxyAuthorization", "http.proxySupport", "http.systemCertificates", "http.experimental.systemCertificatesV2", "http.fetchAdditionalSupport"];
Wva = [];
Vau = undefined;
Kau = undefined;
Wef();
