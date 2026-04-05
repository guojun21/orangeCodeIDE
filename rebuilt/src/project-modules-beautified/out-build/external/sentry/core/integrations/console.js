"use strict";

// Module: out-build/external/sentry/core/integrations/console.js
// Offset: 132288 (bundle byte offset)
// Size: 1099 bytes
Awc();
aT();
UNo();
sW();
US();
kwc();
mBe();
c3();
iXd = "Console";
rXd = (n = {}) => {
  const e = new Set(n.levels || F2t);
  return {
    name: iXd,
    setup(t) {
      sFt(({
        args: i,
        level: r
      }) => {
        if (sm() === t && !!e.has(r)) {
          vKv(r, i);
        }
      });
    }
  };
};
