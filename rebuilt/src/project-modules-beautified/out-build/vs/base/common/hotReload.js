"use strict";

// Module: out-build/vs/base/common/hotReload.js
// Offset: 1932583 (bundle byte offset)
// Size: 1008 bytes
S6();
n3n = undefined;
if (nbt()) {
  _wh(({
    oldExports: n,
    newSrc: e,
    config: t
  }) => {
    if (t.mode === "patch-prototype") {
      return i => {
        for (const r in i) {
          const s = i[r];
          console.log(`[hot-reload] Patching prototype methods of '${r}'`, {
            exportedItem: s
          });
          if (typeof s == "function" && s.prototype) {
            const o = n[r];
            if (o) {
              for (const a of Object.getOwnPropertyNames(s.prototype)) {
                const l = Object.getOwnPropertyDescriptor(s.prototype, a);
                const u = Object.getOwnPropertyDescriptor(o.prototype, a);
                if (l?.value?.toString() !== u?.value?.toString()) {
                  console.log(`[hot-reload] Patching prototype method '${r}.${a}'`);
                }
                Object.defineProperty(o.prototype, a, l);
              }
              i[r] = o;
            }
          }
        }
        return true;
      };
    }
  });
}
