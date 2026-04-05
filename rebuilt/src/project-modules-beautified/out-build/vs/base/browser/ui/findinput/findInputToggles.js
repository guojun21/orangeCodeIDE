"use strict";

// Module: out-build/vs/base/browser/ui/findinput/findInputToggles.js
// Offset: 24801120 (bundle byte offset)
// Size: 1122 bytes
mb();
_q();
qi();
Ht();
xpg = _(10, null);
Tpg = _(11, null);
Ipg = _(12, null);
LGl = class extends H3 {
  constructor(n) {
    super({
      icon: Be.caseSensitive,
      title: xpg + n.appendTitle,
      isChecked: n.isChecked,
      hoverDelegate: n.hoverDelegate ?? Sm("element"),
      inputActiveOptionBorder: n.inputActiveOptionBorder,
      inputActiveOptionForeground: n.inputActiveOptionForeground,
      inputActiveOptionBackground: n.inputActiveOptionBackground
    });
  }
};
NGl = class extends H3 {
  constructor(n) {
    super({
      icon: Be.wholeWord,
      title: Tpg + n.appendTitle,
      isChecked: n.isChecked,
      hoverDelegate: n.hoverDelegate ?? Sm("element"),
      inputActiveOptionBorder: n.inputActiveOptionBorder,
      inputActiveOptionForeground: n.inputActiveOptionForeground,
      inputActiveOptionBackground: n.inputActiveOptionBackground
    });
  }
};
MGl = class extends H3 {
  constructor(n) {
    super({
      icon: Be.regex,
      title: Ipg + n.appendTitle,
      isChecked: n.isChecked,
      hoverDelegate: n.hoverDelegate ?? Sm("element"),
      inputActiveOptionBorder: n.inputActiveOptionBorder,
      inputActiveOptionForeground: n.inputActiveOptionForeground,
      inputActiveOptionBackground: n.inputActiveOptionBackground
    });
  }
};
