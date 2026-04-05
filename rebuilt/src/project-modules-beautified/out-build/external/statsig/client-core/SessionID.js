"use strict";

// Module: out-build/external/statsig/client-core/SessionID.js
// Offset: 26698741 (bundle byte offset)
// Size: 311 bytes
Ttt();
Fpa();
eie();
Btt();
ztu();
onu = 1800000;
anu = 14400000;
Wbi = {};
cnu = {
  get: n => rga.get(n).data.sessionID
};
rga = {
  get: n => {
    if (Wbi[n] == null) {
      Wbi[n] = yMA(n);
    }
    const e = Wbi[n];
    return _MA(e);
  },
  overrideInitialSessionID: (n, e) => {
    Wbi[e] = wMA(n, e);
  }
};
