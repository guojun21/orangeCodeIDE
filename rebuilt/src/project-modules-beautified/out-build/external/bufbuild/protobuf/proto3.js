"use strict";

// Module: out-build/external/bufbuild/protobuf/proto3.js
// Offset: 2529757 (bundle byte offset)
// Size: 429 bytes
Xkh();
e1h();
IKe();
u1h();
v = Zkh("proto3", n => new lRc(n, e => l1h(e, true)), n => {
  for (const e of n.getType().fields.byMember()) {
    if (e.opt) {
      continue;
    }
    const t = e.localName;
    const i = n;
    if (e.repeated) {
      i[t] = [];
      continue;
    }
    switch (e.kind) {
      case "oneof":
        i[t] = {
          case: undefined
        };
        break;
      case "enum":
        i[t] = 0;
        break;
      case "map":
        i[t] = {};
        break;
      case "scalar":
        i[t] = t5t(e.T, e.L);
        break;
      case "message":
        break;
    }
  }
});
