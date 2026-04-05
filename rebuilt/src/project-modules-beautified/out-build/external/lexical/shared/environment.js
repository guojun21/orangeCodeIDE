"use strict";

// Module: out-build/external/lexical/shared/environment.js
// Offset: 4033340 (bundle byte offset)
// Size: 780 bytes
aqh();
cqh = WRe && "documentMode" in document ? document.documentMode : null;
oae = WRe && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
rYe = WRe && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
hvt = WRe && "InputEvent" in window && !cqh ? "getTargetRanges" in new window.InputEvent("input") : false;
g9t = WRe && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
f9t = WRe && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
lqh = WRe && /^(?=.*Chrome).*/i.test(navigator.userAgent);
b9t = WRe && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !lqh;
