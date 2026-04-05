"use strict";

// Module: out-build/vs/base/common/comparers.js
// Offset: 27641531 (bundle byte offset)
// Size: 6427 bytes
L0();
Hl();
WSt = new Ob(() => {
  const n = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base"
  });
  return {
    collator: n,
    collatorIsNumeric: n.resolvedOptions().numeric
  };
});
QSt = new Ob(() => ({
  collator: new Intl.Collator(undefined, {
    numeric: true
  })
}));
Xfa = new Ob(() => ({
  collator: new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "accent"
  })
}));
Lru = /^(.*?)(\.([^.]*))?$/;
