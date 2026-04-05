// Module: out-build/external/sentry/core/utils/handleCallbackErrors.js
// Offset: 57871 (bundle byte offset)
// Size: 1078 bytes

h9()
}
});
function YKd(n, e, t){
  if(!yH(n))return[!1];
  let i, r;
  typeof n.tracesSampler=="function"?(r=n.tracesSampler({
    ...e, inheritOrSampleWith:a=>typeof e.parentSampleRate=="number"?e.parentSampleRate:typeof e.parentSampled=="boolean"?Number(e.parentSampled):a
  }), i=!0):e.parentSampled!==void 0?r=e.parentSampled:typeof n.tracesSampleRate<"u"&&(r=n.tracesSampleRate, i=!0);
  const s=sze(r);
  if(s===void 0)return Lg&&Jo.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), [!1];
  if(!s)return Lg&&Jo.log(`[Tracing] Discarding transaction because ${typeof n.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), [!1, s, i];
  const o=t<s;
  return o||Lg&&Jo.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`), [o, s, i]
}
var ZKd=