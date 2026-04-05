"use strict";

// Module: out-build/external/sentry/core/utils/debounce.js
// Offset: 107343 (bundle byte offset)
// Size: 1384 bytes
Ae({
  "out-build/external/sentry/core/utils/debounce.js"() {
    "use strict";
  }
});
function tZd(n) {
  const e = {};
  try {
    n.forEach((t, i) => {
      if (typeof t == "string") {
        e[i] = t;
      }
    });
  } catch {}
  return e;
}
function nZd(n) {
  const e = Object.create(null);
  try {
    Object.entries(n).forEach(([t, i]) => {
      if (typeof i == "string") {
        e[t] = i;
      }
    });
  } catch {}
  return e;
}
function vVv(n) {
  const e = tZd(n.headers);
  return {
    method: n.method,
    url: n.url,
    query_string: vwc(n.url),
    headers: e
  };
}
function AVv(n) {
  const e = n.headers || {};
  const i = (typeof e["x-forwarded-host"] == "string" ? e["x-forwarded-host"] : undefined) || (typeof e.host == "string" ? e.host : undefined);
  const s = (typeof e["x-forwarded-proto"] == "string" ? e["x-forwarded-proto"] : undefined) || n.protocol || (n.socket?.encrypted ? "https" : "http");
  const o = n.url || "";
  const a = yVv({
    url: o,
    host: i,
    protocol: s
  });
  const l = n.body || undefined;
  const u = n.cookies;
  return {
    url: a,
    method: n.method,
    query_string: vwc(o),
    headers: nZd(e),
    cookies: u,
    data: l
  };
}
function yVv({
  url: n,
  protocol: e,
  host: t
}) {
  if (n?.startsWith("http")) {
    return n;
  }
  if (n && t) {
    return `${e}://${t}${n}`;
  }
}
function wVv(n, e = false) {
  const t = {};
  try {
    Object.entries(n).forEach(([i, r]) => {
      if (r !== undefined) {
        const s = i.toLowerCase();
        if (!e && iZd.some(a => s.includes(a))) {
          return;
        }
        const o = `http.request.header.${s.replace(/-/g, "_")}`;
        if (Array.isArray(r)) {
          t[o] = r.map(a => a != null ? String(a) : a).join(";");
        } else if (typeof r == "string") {
          t[o] = r;
        }
      }
    });
  } catch {}
  return t;
}
function vwc(n) {
  if (n) {
    try {
      const e = new URL(n, "http://s.io").search.slice(1);
      if (e.length) {
        return e;
      } else {
        return undefined;
      }
    } catch {
      return;
    }
  }
}
