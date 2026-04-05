"use strict";

// Module: out-build/external/sentry/core/integrations/extraerrordata.js
// Offset: 121586 (bundle byte offset)
// Size: 1673 bytes
ZT();
sW();
US();
h9();
xpt();
Wj();
mBe();
NZd = "ExtraErrorData";
MZd = (n = {}) => {
  const {
    depth: e = 3,
    captureErrorCause: t = true
  } = n;
  return {
    name: NZd,
    processEvent(i, r, s) {
      const {
        maxValueLength: o
      } = s.getOptions();
      return YVv(i, r, e, t, o);
    }
  };
};
qNo = MZd;
