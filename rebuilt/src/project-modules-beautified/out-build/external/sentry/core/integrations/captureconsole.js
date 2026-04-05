"use strict";

// Module: out-build/external/sentry/core/integrations/captureconsole.js
// Offset: 119203 (bundle byte offset)
// Size: 1100 bytes
aT();
bte();
UNo();
sW();
US();
loe();
kwc();
mBe();
c3();
xZd = "CaptureConsole";
TZd = (n = {}) => {
  const e = n.levels || F2t;
  const t = n.handled ?? true;
  return {
    name: xZd,
    setup(i) {
      if ("console" in Ev) {
        sFt(({
          args: r,
          level: s
        }) => {
          if (sm() === i && !!e.includes(s)) {
            WVv(r, s, t);
          }
        });
      }
    }
  };
};
$No = TZd;
