"use strict";

// Module: out-build/external/sentry/core/tracing/trace.js
// Offset: 62732 (bundle byte offset)
// Size: 3042 bytes
NMn();
gbe();
aT();
ZT();
y6();
Q2t();
US();
vNo();
j2t();
WMn();
tze();
wpt();
iW();
cNo();
cze();
byc();
ZKd();
fNo();
wyc();
W2t();
JMn();
KMn = "__SENTRY_SUPPRESS_TRACING__";
xyc = (n, e) => {
  const t = lSe();
  const i = nze(t);
  if (i.continueTrace) {
    return i.continueTrace(n, e);
  }
  const {
    sentryTrace: r,
    baggage: s
  } = n;
  const o = sm();
  const a = sNo(s);
  if (o && !NKd(o, a?.org_id)) {
    return Cyc(e);
  } else {
    return AH(l => {
      const u = oNo(r, s);
      l.setPropagationContext(u);
      return e();
    });
  }
};
