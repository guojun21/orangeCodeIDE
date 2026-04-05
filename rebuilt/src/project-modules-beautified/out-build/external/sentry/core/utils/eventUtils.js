"use strict";

// Module: out-build/external/sentry/core/utils/eventUtils.js
// Offset: 83681 (bundle byte offset)
// Size: 838 bytes
Ae({
  "out-build/external/sentry/core/utils/eventUtils.js"() {
    "use strict";
  }
});
function Ozv(n) {
  const {
    trace_id: e,
    parent_span_id: t,
    span_id: i,
    status: r,
    origin: s,
    data: o,
    op: a
  } = n.contexts?.trace ?? {};
  return {
    data: o ?? {},
    description: n.transaction,
    op: a,
    parent_span_id: t,
    span_id: i ?? "",
    start_timestamp: n.start_timestamp ?? 0,
    status: r,
    timestamp: n.timestamp,
    trace_id: e ?? "",
    origin: s,
    profile_id: o?.[OMn],
    exclusive_time: o?.[rze],
    measurements: n.measurements,
    is_segment: true
  };
}
function Uzv(n) {
  return {
    type: "transaction",
    timestamp: n.timestamp,
    start_timestamp: n.start_timestamp,
    transaction: n.description,
    contexts: {
      trace: {
        trace_id: n.trace_id,
        span_id: n.span_id,
        parent_span_id: n.parent_span_id,
        op: n.op,
        status: n.status,
        origin: n.origin,
        data: {
          ...n.data,
          ...(n.profile_id && {
            [OMn]: n.profile_id
          }),
          ...(n.exclusive_time && {
            [rze]: n.exclusive_time
          })
        }
      }
    },
    measurements: n.measurements
  };
}
