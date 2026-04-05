"use strict";

// Module: out-build/vs/workbench/contrib/ui/browser/loadingSpinner/loadingSpinner.js
// Offset: 31368934 (bundle byte offset)
// Size: 973 bytes
Ie();
Ie();
Ie();
Foy();
Lbu = qe("<div>");
M0i = n => (() => {
    var e = Lbu();
    $6(e, hb({
        get class() {
            return "cursorLoadingBackground" + (n.onInputBackground ? " cursorLoadingInputBackground" : "") + (n.speed === "slow" ? " cursorLoadingBackgroundSlow" : "") + (n.speed === "medium" ? " cursorLoadingBackgroundMedium" : "") + (n.class ? ` ${n.class}` : "");
        }
    }, () => n.extras), false, false);
    return e;
})();
y8 = n => (() => {
    var e = Lbu();
    $6(e, hb({
        get class() {
            return "cursorLoadingBackground cursorLoadingBackgroundSubtle" + (n.onInputBackground ? " cursorLoadingInputBackground cursorLoadingInputBackgroundSubtle" : "") + (n.onPrimaryButton ? " cursorLoadingBackgroundLight cursorLoadingBackgroundSubtleLight" : "") + (n.small ? " cursorLoadingBackgroundSmall" : "") + (n.speed === "slow" ? " cursorLoadingBackgroundSlow" : "") + (n.speed === "medium" ? " cursorLoadingBackgroundMedium" : "") + (n.class ? ` ${n.class}` : "") + " shrink-0";
        }
    }, () => n.extras), false, false);
    return e;
})();
