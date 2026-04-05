"use strict";

// Module: out-build/vs/base/common/date.js
// Offset: 708018 (bundle byte offset)
// Size: 623 bytes
Ht();
_r();
eft = 60;
tft = eft * 60;
Zze = tft * 24;
Nkc = Zze * 7;
Mkc = Zze * 30;
Fkc = Zze * 365;
F4t = {
  DateTimeFormat(n, e) {
    try {
      return new Intl.DateTimeFormat(n, e);
    } catch {
      return new Intl.DateTimeFormat(undefined, e);
    }
  },
  Collator(n, e) {
    try {
      return new Intl.Collator(n, e);
    } catch {
      return new Intl.Collator(undefined, e);
    }
  },
  Segmenter(n, e) {
    try {
      return new Intl.Segmenter(n, e);
    } catch {
      return new Intl.Segmenter(undefined, e);
    }
  },
  Locale(n, e) {
    try {
      return new Intl.Locale(n, e);
    } catch {
      return new Intl.Locale(c5e, e);
    }
  }
};
