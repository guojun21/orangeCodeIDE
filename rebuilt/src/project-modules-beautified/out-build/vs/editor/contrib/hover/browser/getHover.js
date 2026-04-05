"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/getHover.js
// Offset: 4241107 (bundle byte offset)
// Size: 1396 bytes
vr();
Po();
_s();
Cu();
Cm();
nGh = class {
    constructor(n, e, t) {
        this.provider = n;
        this.hover = e;
        this.ordinal = t;
    }
};
RY("_executeHoverProvider", (n, e, t) => {
    const i = n.get($u);
    return tGh(i.hoverProvider, e, t, Cs.None);
});
RY("_executeHoverProvider_recursive", (n, e, t) => {
    const i = n.get($u);
    return tGh(i.hoverProvider, e, t, Cs.None, true);
});
