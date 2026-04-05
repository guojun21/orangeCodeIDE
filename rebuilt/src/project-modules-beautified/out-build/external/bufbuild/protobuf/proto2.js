"use strict";

// Module: out-build/external/bufbuild/protobuf/proto2.js
// Offset: 2530186 (bundle byte offset)
// Size: 370 bytes
Xkh();
e1h();
u1h();
Rc = Zkh("proto2", n => new lRc(n, e => l1h(e, false)), n => {
  for (const e of n.getType().fields.byMember()) {
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
      case "map":
        i[t] = {};
        break;
      case "scalar":
      case "enum":
      case "message":
        break;
    }
  }
});
