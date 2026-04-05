"use strict";

// Module: out-build/external/sentry/core/integrations/dedupe.js
// Offset: 120303 (bundle byte offset)
// Size: 1283 bytes
ZT();
sW();
US();
bpt();
RZd = "Dedupe";
PZd = () => {
  let n;
  return {
    name: RZd,
    processEvent(e) {
      if (e.type) {
        return e;
      }
      try {
        if (jVv(e, n)) {
          if (Lg) {
            Jo.warn("Event dropped due to being a duplicate of previously captured event.");
          }
          return null;
        }
      } catch {}
      return n = e;
    }
  };
};
Mpt = PZd;
