"use strict";

// Module: out-build/vs/editor/common/cursor/cursorAtomicMoveOperations.js
// Offset: 697100 (bundle byte offset)
// Size: 1097 bytes
koe();
(function(n) {
    n[n.Left = 0] = "Left";
    n[n.Right = 1] = "Right";
    n[n.Nearest = 2] = "Nearest";
})(ych ||= {});
JFo = class IJb {
    static whitespaceVisibleColumn(e, t, i) {
        const r = e.length;
        let s = 0;
        let o = -1;
        let a = -1;
        for (let l = 0; l < r; l++) {
            if (l === t) {
                return [o, a, s];
            }
            if (s % i === 0) {
                o = l;
                a = s;
            }
            switch (e.charCodeAt(l)) {
                case 32:
                    s += 1;
                    break;
                case 9:
                    s = ZP.nextRenderTabStop(s, i);
                    break;
                default:
                    return [-1, -1, -1];
            }
        }
        if (t === r) {
            return [o, a, s];
        } else {
            return [-1, -1, -1];
        }
    }
    static atomicPosition(e, t, i, r) {
        const s = e.length;
        const [o, a, l] = IJb.whitespaceVisibleColumn(e, t, i);
        if (l === -1) {
            return -1;
        }
        let u;
        switch (r) {
            case 0:
                u = true;
                break;
            case 1:
                u = false;
                break;
            case 2:
                if (l % i === 0) {
                    return t;
                }
                u = l % i <= i / 2;
                break;
        }
        if (u) {
            if (o === -1) {
                return -1;
            }
            let p = a;
            for (let g = o; g < s; ++g) {
                if (p === a + i) {
                    return o;
                }
                switch (e.charCodeAt(g)) {
                    case 32:
                        p += 1;
                        break;
                    case 9:
                        p = ZP.nextRenderTabStop(p, i);
                        break;
                    default:
                        return -1;
                }
            }
            if (p === a + i) {
                return o;
            } else {
                return -1;
            }
        }
        const d = ZP.nextRenderTabStop(l, i);
        let m = l;
        for (let p = t; p < s; p++) {
            if (m === d) {
                return p;
            }
            switch (e.charCodeAt(p)) {
                case 32:
                    m += 1;
                    break;
                case 9:
                    m = ZP.nextRenderTabStop(m, i);
                    break;
                default:
                    return -1;
            }
        }
        if (m === d) {
            return s;
        } else {
            return -1;
        }
    }
};
