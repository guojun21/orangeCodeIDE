"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/glyphHoverComputer.js
// Offset: 30881532 (bundle byte offset)
// Size: 517 bytes
Vs();
tg();
xw();
Lxf = class {
    constructor(n) {
        this._editor = n;
    }
    computeSync(n) {
        const e = s => ({
            value: s
        });
        const t = this._editor.getLineDecorations(n.lineNumber);
        const i = [];
        const r = n.laneOrLine === "lineNo";
        if (!t) {
            return i;
        }
        for (const s of t) {
            const o = s.options.glyphMargin?.position ?? G$.Center;
            if (!r && o !== n.laneOrLine) {
                continue;
            }
            const a = r ? s.options.lineNumberHoverMessage : s.options.glyphMarginHoverMessage;
            if (!!a && !y3t(a)) {
                i.push(...aW(a).map(e));
            }
        }
        return i;
    }
};
