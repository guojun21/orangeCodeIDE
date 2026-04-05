"use strict";

// Module: out-build/external/sentry/core/integrations/rewriteframes.js
// Offset: 123839 (bundle byte offset)
// Size: 4097 bytes
sW();
WZd();
c3();
QZd = "RewriteFrames";
xwc = (n = {}) => {
  const e = n.root;
  const t = n.prefix || "app:///";
  const i = "window" in Ev && !!Ev.window;
  const r = n.iteratee || tKv({
    isBrowser: i,
    root: e,
    prefix: t
  });
  function s(a) {
    try {
      return {
        ...a,
        exception: {
          ...a.exception,
          values: a.exception.values.map(l => ({
            ...l,
            ...(l.stacktrace && {
              stacktrace: o(l.stacktrace)
            })
          }))
        }
      };
    } catch {
      return a;
    }
  }
  function o(a) {
    return {
      ...a,
      frames: a?.frames?.map(l => r(l))
    };
  }
  return {
    name: QZd,
    processEvent(a) {
      let l = a;
      if (a.exception && Array.isArray(a.exception.values)) {
        l = s(l);
      }
      return l;
    }
  };
};
