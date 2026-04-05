"use strict";

// Module: out-build/vs/platform/history/browser/historyWidgetKeybindingHint.js
// Offset: 25170822 (bundle byte offset)
// Size: 441 bytes
Ae({
    "out-build/vs/platform/history/browser/historyWidgetKeybindingHint.js"() {
        "use strict";
    }
});

function bvg(n, e, t) {
    const i = !!e.match(/\n/);
    if (t && i && t.selectionStart > 0) {
        n.stopPropagation();
        return;
    }
}

function vvg(n, e, t) {
    const i = !!e.match(/\n/);
    if (t && i && t.selectionEnd < t.value.length) {
        n.stopPropagation();
        return;
    }
}
