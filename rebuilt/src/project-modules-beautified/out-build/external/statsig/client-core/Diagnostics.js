"use strict";

// Module: out-build/external/statsig/client-core/Diagnostics.js
// Offset: 26672056 (bundle byte offset)
// Size: 1470 bytes
Obi = new Map();
Lpa = "start";
Npa = "end";
GMg = "statsig::diagnostics";
lye = {
  _getMarkers: n => Obi.get(n),
  _markInitOverallStart: n => {
    Phn(n, Rhn({}, Lpa, "overall"));
  },
  _markInitOverallEnd: (n, e, t) => {
    Phn(n, Rhn({
      success: e,
      error: e ? undefined : {
        name: "InitializeError",
        message: "Failed to initialize"
      },
      evaluationDetails: t
    }, Npa, "overall"));
  },
  _markInitNetworkReqStart: (n, e) => {
    Phn(n, Rhn(e, Lpa, "initialize", "network_request"));
  },
  _markInitNetworkReqEnd: (n, e) => {
    Phn(n, Rhn(e, Npa, "initialize", "network_request"));
  },
  _markInitProcessStart: n => {
    Phn(n, Rhn({}, Lpa, "initialize", "process"));
  },
  _markInitProcessEnd: (n, e) => {
    Phn(n, Rhn(e, Npa, "initialize", "process"));
  },
  _clearMarkers: n => {
    Obi.delete(n);
  },
  _formatError(n) {
    if (n && typeof n == "object") {
      return {
        code: Dtu(n, "code"),
        name: Dtu(n, "name"),
        message: Dtu(n, "message")
      };
    }
  },
  _getDiagnosticsData(n, e, t, i) {
    return {
      success: n?.ok === true,
      statusCode: n?.status,
      sdkRegion: n?.headers?.get("x-statsig-region"),
      isDelta: t.includes("\"is_delta\":true") === true ? true : undefined,
      attempt: e,
      error: lye._formatError(i)
    };
  },
  _enqueueDiagnosticsEvent(n, e, t, i) {
    const r = lye._getMarkers(t);
    if (r == null || r.length <= 0) {
      return -1;
    }
    const s = r[r.length - 1].timestamp - r[0].timestamp;
    lye._clearMarkers(t);
    const o = eMA(n, {
      context: "initialize",
      markers: r.slice(),
      statsigOptions: i
    });
    e.enqueue(o);
    return s;
  }
};
