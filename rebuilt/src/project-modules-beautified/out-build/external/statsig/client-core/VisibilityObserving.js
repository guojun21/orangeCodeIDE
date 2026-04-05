"use strict";

// Module: out-build/external/statsig/client-core/VisibilityObserving.js
// Offset: 26679448 (bundle byte offset)
// Size: 444 bytes
fSt();
jpa = "foreground";
zpa = "background";
Htu = [];
Jtu = jpa;
Vpa = false;
Gtu = () => Vpa;
o2g = n => {
  Htu.unshift(n);
};
qbi = n => {
  if (n !== Jtu) {
    Jtu = n;
    Htu.forEach(e => e(n));
  }
};
$pa("focus", () => {
  Vpa = false;
  qbi(jpa);
});
$pa("blur", () => qbi(zpa));
VMg("visibilitychange", () => {
  qbi(document.visibilityState === "visible" ? jpa : zpa);
});
$pa(YMg(), () => {
  Vpa = true;
  qbi(zpa);
});
