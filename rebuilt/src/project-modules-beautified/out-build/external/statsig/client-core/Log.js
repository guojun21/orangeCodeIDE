"use strict";

// Module: out-build/external/statsig/client-core/Log.js
// Offset: 26670548 (bundle byte offset)
// Size: 521 bytes
UMg = " DEBUG ";
$Mg = "  INFO ";
qMg = "  WARN ";
HMg = " ERROR ";
Dhn = {
  None: 0,
  Error: 1,
  Warn: 2,
  Info: 3,
  Debug: 4
};
CI = class KXr {
  static {
    this.level = Dhn.Warn;
  }
  static info(...e) {
    if (KXr.level >= Dhn.Info) {
      console.info($Mg, ...Ppa(e));
    }
  }
  static debug(...e) {
    if (KXr.level >= Dhn.Debug) {
      console.debug(UMg, ...Ppa(e));
    }
  }
  static warn(...e) {
    if (KXr.level >= Dhn.Warn) {
      console.warn(qMg, ...Ppa(e));
    }
  }
  static error(...e) {
    if (KXr.level >= Dhn.Error) {
      console.error(HMg, ...Ppa(e));
    }
  }
};
