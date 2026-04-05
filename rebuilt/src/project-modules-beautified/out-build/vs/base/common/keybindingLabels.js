"use strict";

// Module: out-build/vs/base/common/keybindingLabels.js
// Offset: 2296595 (bundle byte offset)
// Size: 1400 bytes
Ht();
L3n = class {
  constructor(n, e, t = e) {
    this.modifierLabels = [null];
    this.modifierLabels[2] = n;
    this.modifierLabels[1] = e;
    this.modifierLabels[3] = t;
  }
  toLabel(n, e, t) {
    if (e.length === 0) {
      return null;
    }
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = t(o);
      if (a === null) {
        return null;
      }
      i[r] = ahA(o, a, this.modifierLabels[n]);
    }
    return i.join(" ");
  }
};
mKe = new L3n({
  ctrlKey: "⌃",
  shiftKey: "⇧",
  altKey: "⌥",
  metaKey: "⌘",
  separator: ""
}, {
  ctrlKey: _(125, null),
  shiftKey: _(126, null),
  altKey: _(127, null),
  metaKey: _(128, null),
  separator: "+"
}, {
  ctrlKey: _(129, null),
  shiftKey: _(130, null),
  altKey: _(131, null),
  metaKey: _(132, null),
  separator: "+"
});
YDc = new L3n({
  ctrlKey: _(133, null),
  shiftKey: _(134, null),
  altKey: _(135, null),
  metaKey: _(136, null),
  separator: "+"
}, {
  ctrlKey: _(137, null),
  shiftKey: _(138, null),
  altKey: _(139, null),
  metaKey: _(140, null),
  separator: "+"
}, {
  ctrlKey: _(141, null),
  shiftKey: _(142, null),
  altKey: _(143, null),
  metaKey: _(144, null),
  separator: "+"
});
qCh = new L3n({
  ctrlKey: "Ctrl",
  shiftKey: "Shift",
  altKey: "Alt",
  metaKey: "Cmd",
  separator: "+"
}, {
  ctrlKey: "Ctrl",
  shiftKey: "Shift",
  altKey: "Alt",
  metaKey: "Super",
  separator: "+"
});
N5o = new L3n({
  ctrlKey: "ctrl",
  shiftKey: "shift",
  altKey: "alt",
  metaKey: "cmd",
  separator: "+"
}, {
  ctrlKey: "ctrl",
  shiftKey: "shift",
  altKey: "alt",
  metaKey: "win",
  separator: "+"
}, {
  ctrlKey: "ctrl",
  shiftKey: "shift",
  altKey: "alt",
  metaKey: "meta",
  separator: "+"
});
