"use strict";

// Module: out-build/external/sentry/core/utils/parseSampleRate.js
// Offset: 39458 (bundle byte offset)
// Size: 1259 bytes
Ae({
  "out-build/external/sentry/core/utils/parseSampleRate.js"() {
    "use strict";
  }
});
function PKd(n) {
  if (!n) {
    return;
  }
  const e = n.match(aNo);
  if (!e) {
    return;
  }
  let t;
  if (e[3] === "1") {
    t = true;
  } else if (e[3] === "0") {
    t = false;
  }
  return {
    traceId: e[1],
    parentSampled: t,
    parentSpanId: e[2]
  };
}
function oNo(n, e) {
  const t = PKd(n);
  const i = sNo(e);
  if (!t?.traceId) {
    return {
      traceId: rde(),
      sampleRand: Math.random()
    };
  }
  const r = Njv(t, i);
  if (i) {
    i.sample_rand = r.toString();
  }
  const {
    traceId: s,
    parentSpanId: o,
    parentSampled: a
  } = t;
  return {
    traceId: s,
    parentSpanId: o,
    sampled: a,
    dsc: i || {},
    sampleRand: r
  };
}
function ZAc(n = rde(), e = sde(), t) {
  let i = "";
  if (t !== undefined) {
    i = t ? "-1" : "-0";
  }
  return `${n}-${e}${i}`;
}
function LKd(n = rde(), e = sde(), t) {
  return `00-${n}-${e}-${t ? "01" : "00"}`;
}
function Njv(n, e) {
  const t = sze(e?.sample_rand);
  if (t !== undefined) {
    return t;
  }
  const i = sze(e?.sample_rate);
  if (i && n?.parentSampled !== undefined) {
    if (n.parentSampled) {
      return Math.random() * i;
    } else {
      return i + Math.random() * (1 - i);
    }
  } else {
    return Math.random();
  }
}
function NKd(n, e) {
  const t = DKd(n);
  if (e && t && e !== t) {
    Jo.log(`Won't continue trace because org IDs don't match (incoming baggage: ${e}, SDK options: ${t})`);
    return false;
  } else if ((n.getOptions().strictTraceContinuation || false) && (e && !t || !e && t)) {
    Jo.log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${e}, Sentry client: ${t})`);
    return false;
  } else {
    return true;
  }
}
