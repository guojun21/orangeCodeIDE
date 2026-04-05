"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/hooks/useKeyboardShortcut.js
// Offset: 33883271 (bundle byte offset)
// Size: 474 bytes
Ti();
es();
pP = (n, e) => {
  const t = wr();
  const [i, r] = lt(undefined);
  const s = () => e?.useDefaultKeybindingEvenIfNotActive ? t.keybindingService.lookupDefaultKeybindings(n) : t.keybindingService.lookupKeybindings(n);
  An(() => {
    const o = s().at(0)?.getLabel() ?? undefined;
    r(o);
    const a = t.keybindingService.onDidUpdateKeybindings(() => {
      const l = s().at(0)?.getLabel() ?? undefined;
      r(l);
    });
    Ai(() => {
      a.dispose();
    });
  });
  return i;
};
