"use strict";

// Module: out-build/vs/base/browser/canIUse.js
// Offset: 288822 (bundle byte offset)
// Size: 743 bytes
Ay();
iu();
_r();
(function (n) {
  n[n.Always = 0] = "Always";
  n[n.FullScreen = 1] = "FullScreen";
  n[n.None = 2] = "None";
})(_ih ||= {});
cW = {
  clipboard: {
    writeText: kw || document.queryCommandSupported && document.queryCommandSupported("copy") || !!navigator && !!navigator.clipboard && !!navigator.clipboard.writeText,
    readText: kw || !!navigator && !!navigator.clipboard && !!navigator.clipboard.readText
  },
  keyboard: kw || m0c() ? 0 : navigator.keyboard || kte ? 1 : 2,
  touch: "ontouchstart" in bi || navigator.maxTouchPoints > 0,
  pointerEvents: bi.PointerEvent && ("ontouchstart" in bi || navigator.maxTouchPoints > 0)
};
