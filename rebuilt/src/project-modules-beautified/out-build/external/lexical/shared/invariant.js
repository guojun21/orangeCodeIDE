"use strict";

// Module: out-build/external/lexical/shared/invariant.js
// Offset: 4034120 (bundle byte offset)
// Size: 57583 bytes
Ae({
    "out-build/external/lexical/shared/invariant.js"() {
        "use strict";
    }
});

function dqh(n, e, t, i) {
    const r = n._keyToDOMMap;
    r.clear();
    n._editorState = ZOc();
    n._pendingEditorState = i;
    n._compositionKey = null;
    n._dirtyType = fYe;
    n._cloneNotNeeded.clear();
    n._dirtyLeaves = new Set();
    n._dirtyElements.clear();
    n._normalizedNodes = new Set();
    n._updateTags = new Set();
    n._updates = [];
    n._blockCursorElement = null;
    const s = n._observer;
    if (s !== null) {
        s.disconnect();
        n._observer = null;
    }
    if (e !== null) {
        e.textContent = "";
    }
    if (t !== null) {
        t.textContent = "";
        r.set("root", t);
    }
}

function afA(n) {
    const e = new Map();
    const t = new Set();
    n.forEach(i => {
        const r = i.klass.importDOM != null ? i.klass.importDOM.bind(i.klass) : null;
        if (r == null || t.has(r)) {
            return;
        }
        t.add(r);
        const s = r();
        if (s !== null) {
            Object.keys(s).forEach(o => {
                let a = e.get(o);
                if (a === undefined) {
                    a = [];
                    e.set(o, a);
                }
                a.push(s[o]);
            });
        }
    });
    return e;
}

function hqh(n) {
    const e = n || {};
    const t = zqh();
    const i = e.theme || {};
    const r = n === undefined ? t : e.parentEditor || null;
    const s = e.disableEvents || false;
    const o = ZOc();
    const a = e.namespace || (r !== null ? r._config.namespace : u7h());
    const l = e.editorState;
    const u = [VUo, s8e, G6n, J6n, o8e, ...(e.nodes || [])];
    const d = e.onError;
    const m = e.editable !== undefined ? e.editable : true;
    let p;
    if (n === undefined && t !== null) {
        p = t._nodes;
    } else {
        p = new Map();
        for (let f = 0; f < u.length; f++) {
            let A = u[f];
            let w = null;
            let C = null;
            if (typeof A != "function") {
                const R = A;
                A = R.replace;
                w = R.with;
                C = R.withKlass ? R.withKlass : null;
            }
            const x = A.getType();
            const I = A.transform();
            const B = new Set();
            if (I !== null) {
                B.add(I);
            }
            p.set(x, {
                klass: A,
                replace: w,
                replaceWithKlass: C,
                transforms: B
            });
        }
    }
    const g = new C7h(o, r, p, {
        disableEvents: s,
        namespace: a,
        theme: i
    }, d || console.error, afA(p), m);
    if (l !== undefined) {
        g._pendingEditorState = l;
        g._dirtyType = Evt;
    }
    return g;
}

function cfA(n, e) {
    const t = e.getEditorState()._selection;
    const i = n._selection;
    if (i !== null) {
        if (i.dirty || !i.is(t)) {
            return true;
        }
    } else if (t !== null) {
        return true;
    }
    return false;
}

function lfA(n) {
    return new B3c(new Map(n._nodeMap));
}

function ZOc() {
    return new B3c(new Map([
        ["root", nvA()]
    ]));
}

function mqh(n) {
    const e = n.exportJSON();
    const t = n.constructor;
    if (e.type !== t.getType()) {
        Yg(false, "LexicalNode: Node %s does not implement .exportJSON().", t.name);
    }
    const i = e.children;
    if (kd(n)) {
        if (!Array.isArray(i)) {
            Yg(false, "LexicalNode: Node %s is an element but .exportJSON() does not have a children array.", t.name);
        }
        const r = n.getChildren();
        for (let s = 0; s < r.length; s++) {
            const o = r[s];
            const a = mqh(o);
            i.push(a);
        }
    }
    return e;
}

function pqh(n, e, t, i, r) {
    const s = n.anchor;
    const o = n.focus;
    const a = s.getNode();
    const l = G6();
    const u = Y9e(l);
    const d = u !== null ? u.anchorNode : null;
    const m = s.key;
    const p = l.getElementByKey(m);
    const g = t.length;
    return m !== o.key || !jd(a) || (!r && (!hvt || P3c < i + 50) || a.isDirty() && g < 2 || l7h(t)) && s.offset !== o.offset && !a.isComposing() || p3c(a) || a.isDirty() && g > 1 || (r || !hvt) && p !== null && !a.isComposing() && d !== pUo(p) || u !== null && e !== null && (!e.collapsed || e.startContainer !== u.anchorNode || e.startOffset !== u.anchorOffset) || a.getFormat() !== n.format || a.getStyle() !== n.style || pbA(n, a);
}

function gqh(n, e) {
    return n !== null && n.nodeValue !== null && n.nodeType === XRe && e !== 0 && e !== n.nodeValue.length;
}

function fqh(n, e, t) {
    const {
        anchorNode: i,
        anchorOffset: r,
        focusNode: s,
        focusOffset: o
    } = n;
    if (!CUo || !(CUo = false, gqh(i, r) && gqh(s, o))) {
        ahe(e, () => {
            if (!t) {
                cae(null);
                return;
            }
            if (!v6n(e, i, s)) {
                return;
            }
            const a = Wd();
            if (dd(a)) {
                const l = a.anchor;
                const u = l.getNode();
                if (a.isCollapsed()) {
                    if (n.type === "Range" && n.anchorNode === n.focusNode) {
                        a.dirty = true;
                    }
                    const d = S6n(e).event;
                    const m = d ? d.timeStamp : performance.now();
                    const [p, g, f, A, w] = L3c;
                    if (m < w + 200 && l.offset === f && l.key === A) {
                        a.format = p;
                        a.style = g;
                    } else if (l.type === "text") {
                        a.format = u.getFormat();
                        a.style = u.getStyle();
                    } else if (l.type === "element") {
                        a.format = 0;
                        a.style = "";
                    }
                } else {
                    let d = IHh;
                    let m = false;
                    const p = a.getNodes();
                    const g = p.length;
                    for (let f = 0; f < g; f++) {
                        const A = p[f];
                        if (jd(A) && (m = true, d &= A.getFormat(), d === 0)) {
                            break;
                        }
                    }
                    a.format = m ? d : 0;
                }
            }
            Fd(e, B6n, undefined);
        });
    }
}

function ufA(n, e) {
    ahe(e, () => {
        const t = Wd();
        const i = Y9e(e);
        const r = dUo();
        if (i) {
            if (dd(t)) {
                const s = t.anchor;
                const o = s.getNode();
                if (s.type === "element" && s.offset === 0 && t.isCollapsed() && !ZY(o) && lf().getChildrenSize() === 1 && o.getTopLevelElementOrThrow().isEmpty() && r !== null && t.is(r)) {
                    i.removeAllRanges();
                    t.dirty = true;
                } else if (n.detail !== 2) {
                    if (n.detail >= 3 && !t.isCollapsed()) {
                        const l = t.focus.getNode();
                        let u = o;
                        let d = o;
                        let m = o.getPreviousSibling();
                        while (m !== null && !x3(m)) {
                            u = m;
                            m = m.getPreviousSibling();
                        }
                        let p = o.getNextSibling();
                        while (p !== null && !x3(p)) {
                            d = p;
                            p = p.getNextSibling();
                        }
                        if (u !== o || d !== o) {
                            const g = o.getParentOrThrow();
                            if (kd(g)) {
                                const f = u.getIndexWithinParent();
                                const A = d.getIndexWithinParent();
                                if (jd(d)) {
                                    t.anchor.set(g.__key, f, "element");
                                    t.focus.set(d.__key, d.getTextContentSize(), "text");
                                } else {
                                    t.anchor.set(g.__key, f, "element");
                                    t.focus.set(g.__key, A + 1, "element");
                                }
                            } else {
                                o.select(0);
                            }
                        } else if (o !== l) {
                            if (kd(o)) {
                                o.select(0);
                            } else {
                                o.getParentOrThrow().select(0);
                            }
                        }
                    }
                }
            } else if (n.pointerType === "touch") {
                const s = i.anchorNode;
                if (s !== null) {
                    const o = s.nodeType;
                    if (o === D9t || o === XRe) {
                        const a = d3c(r, i, e);
                        cae(a);
                    }
                }
            }
        }
        Fd(e, DUo, n);
    });
}

function dfA(n, e) {
    const t = n.target;
    const i = n.pointerType;
    if (t instanceof Node && i !== "touch") {
        ahe(e, () => {
            if (!sbA(t)) {
                SUo = true;
            }
        });
    }
}

function bqh(n) {
    if (!n.getTargetRanges) {
        return null;
    }
    const e = n.getTargetRanges();
    if (e.length === 0) {
        return null;
    } else {
        return e[0];
    }
}

function hfA(n, e) {
    return n !== e || kd(n) || kd(e) || !n.isToken() || !e.isToken();
}

function mfA(n) {
    return R3c === 229 && n < w9t + yUo;
}

function pfA(n, e) {
    const t = n.inputType;
    const i = bqh(n);
    if (t !== "deleteCompositionText" && (!rYe || !g7h(e))) {
        if (t !== "insertCompositionText") {
            ahe(e, () => {
                const r = Wd();
                if (t === "deleteContentBackward") {
                    if (r === null) {
                        const d = dUo();
                        if (!dd(d)) {
                            return;
                        }
                        cae(d.clone());
                    }
                    if (dd(r)) {
                        if (mfA(n.timeStamp) && e.isComposing() && r.anchor.key === r.focus.key) {
                            YY(null);
                            w9t = 0;
                            setTimeout(() => {
                                ahe(e, () => {
                                    YY(null);
                                });
                            }, yUo);
                            if (dd(r)) {
                                const d = r.anchor.getNode();
                                d.markDirty();
                                r.format = d.getFormat();
                                r.style = d.getStyle();
                            }
                        } else {
                            n.preventDefault();
                            Fd(e, Sve, true);
                        }
                        return;
                    }
                }
                if (!dd(r)) {
                    return;
                }
                const s = n.data;
                if (vvt !== null) {
                    b3c(false, e, vvt);
                }
                if ((!r.dirty || vvt !== null) && r.isCollapsed() && !ZY(r.anchor.getNode()) && i !== null) {
                    r.applyDOMRange(i);
                }
                vvt = null;
                const o = r.anchor;
                const a = r.focus;
                const l = o.getNode();
                const u = a.getNode();
                if (t === "insertText" || t === "insertTranspose") {
                    if (s === `
`) {
                        n.preventDefault();
                        Fd(e, X9e, false);
                    } else if (s === ePe) {
                        n.preventDefault();
                        Fd(e, wvt, undefined);
                    } else if (s == null && n.dataTransfer) {
                        const d = n.dataTransfer.getData("text/plain");
                        n.preventDefault();
                        r.insertRawText(d);
                    } else if (s != null && pqh(r, i, s, n.timeStamp, true)) {
                        n.preventDefault();
                        Fd(e, dYe, s);
                    } else {
                        vvt = s;
                    }
                    P3c = n.timeStamp;
                    return;
                }
                n.preventDefault();
                switch (t) {
                    case "insertFromYank":
                    case "insertFromDrop":
                    case "insertReplacementText": {
                        Fd(e, dYe, n);
                        break;
                    }
                    case "insertFromComposition": {
                        YY(null);
                        Fd(e, dYe, n);
                        break;
                    }
                    case "insertLineBreak": {
                        YY(null);
                        Fd(e, X9e, false);
                        break;
                    }
                    case "insertParagraph": {
                        YY(null);
                        if (C9t) {
                            C9t = false;
                            Fd(e, X9e, false);
                        } else {
                            Fd(e, wvt, undefined);
                        }
                        break;
                    }
                    case "insertFromPaste":
                    case "insertFromPasteAsQuotation": {
                        Fd(e, hYe, n);
                        break;
                    }
                    case "deleteByComposition": {
                        if (hfA(l, u)) {
                            Fd(e, R6n, undefined);
                        }
                        break;
                    }
                    case "deleteByDrag":
                    case "deleteByCut": {
                        Fd(e, R6n, undefined);
                        break;
                    }
                    case "deleteContent": {
                        Fd(e, Sve, false);
                        break;
                    }
                    case "deleteWordBackward": {
                        Fd(e, e8e, true);
                        break;
                    }
                    case "deleteWordForward": {
                        Fd(e, e8e, false);
                        break;
                    }
                    case "deleteHardLineBackward":
                    case "deleteSoftLineBackward": {
                        Fd(e, mYe, true);
                        break;
                    }
                    case "deleteContentForward":
                    case "deleteHardLineForward":
                    case "deleteSoftLineForward": {
                        Fd(e, mYe, false);
                        break;
                    }
                    case "formatStrikeThrough": {
                        Fd(e, t8e, "strikethrough");
                        break;
                    }
                    case "formatBold": {
                        Fd(e, t8e, "bold");
                        break;
                    }
                    case "formatItalic": {
                        Fd(e, t8e, "italic");
                        break;
                    }
                    case "formatUnderline": {
                        Fd(e, t8e, "underline");
                        break;
                    }
                    case "historyUndo": {
                        Fd(e, E9t, undefined);
                        break;
                    }
                    case "historyRedo": {
                        Fd(e, x9t, undefined);
                        break;
                    }
                    default:
                }
            });
        }
    }
}

function gfA(n, e) {
    n.stopPropagation();
    ahe(e, () => {
        const t = Wd();
        const i = n.data;
        const r = bqh(n);
        if (i != null && dd(t) && pqh(t, r, i, n.timeStamp, false)) {
            if (S9t) {
                XOc(e, i);
                S9t = false;
            }
            const s = t.anchor;
            const o = s.getNode();
            const a = Y9e(e);
            if (a === null) {
                return;
            }
            const l = s.offset;
            if (!hvt || t.isCollapsed() || !jd(o) || a.anchorNode === null || o.getTextContent().slice(0, l) + i + o.getTextContent().slice(l + t.focus.offset) !== d7h(a.anchorNode)) {
                Fd(e, dYe, i);
            }
            const u = i.length;
            if (rYe && u > 1 && n.inputType === "insertCompositionText" && !e.isComposing()) {
                t.anchor.offset -= u;
            }
            if (!g9t && !f9t && !b9t && e.isComposing()) {
                w9t = 0;
                YY(null);
            }
        } else {
            b3c(false, e, i !== null ? i : undefined);
            if (S9t) {
                XOc(e, i || undefined);
                S9t = false;
            }
        }
        dbA();
    });
    vvt = null;
}

function ffA(n, e) {
    ahe(e, () => {
        const t = Wd();
        if (dd(t) && !e.isComposing()) {
            const i = t.anchor;
            const r = t.anchor.getNode();
            YY(i.key);
            if (n.timeStamp < w9t + yUo || i.type === "element" || !t.isCollapsed() || r.getFormat() !== t.format || r.getStyle() !== t.style) {
                Fd(e, dYe, BHh);
            }
        }
    });
}

function XOc(n, e) {
    const t = n._compositionKey;
    YY(null);
    if (t !== null && e != null) {
        if (e === "") {
            const i = jB(t);
            const r = pUo(n.getElementByKey(t));
            if (r !== null && r.nodeValue !== null && jd(i)) {
                v3c(i, r.nodeValue, null, null, true);
            }
            return;
        }
        if (e[e.length - 1] === `
`) {
            const i = Wd();
            if (dd(i)) {
                const r = i.focus;
                i.anchor.set(r.key, r.offset, r.type);
                Fd(n, KRe, null);
                return;
            }
        }
    }
    b3c(true, n, e);
}

function bfA(n, e) {
    if (rYe) {
        S9t = true;
    } else {
        ahe(e, () => {
            XOc(e, n.data);
        });
    }
}

function vfA(n, e) {
    const {
        keyCode: t,
        ctrlKey: i,
        metaKey: r,
        altKey: s
    } = n;
    if (t === 18 && !s) {
        n.preventDefault();
        Fd(e, Y3c, n);
    } else if (Fs ? t === 91 && !r : t === 17 && !i) {
        Fd(e, vHh, n);
    } else if (t === 16) {
        Fd(e, kHh, n);
    }
}

function AfA(n, e) {
    w9t = n.timeStamp;
    R3c = n.keyCode;
    if (e.isComposing()) {
        return;
    }
    const {
        keyCode: t,
        shiftKey: i,
        ctrlKey: r,
        metaKey: s,
        altKey: o
    } = n;
    if (Fd(e, pYe, n)) {
        return;
    }
    const a = () => {
        n.stopPropagation();
        n.preventDefault();
    };
    if (t === 90 && !r && !s && !i) {
        n.stopPropagation();
    } else if (t === 13 && (r || s)) {
        if (Fd(e, YRe, n)) {
            a();
        }
    } else if (t === 8 && (r || s) && !i) {
        n.stopPropagation();
        if (Fd(e, M6n, n)) {
            n.preventDefault();
        }
    } else if (Fs && t === 67 && r) {
        if (Fd(e, O7h, n)) {
            a();
        }
    } else if (t === 67 && r) {
        if (Fd(e, P7h, n)) {
            a();
        }
    } else if (t === 87 && (r || s)) {
        if (Fd(e, dHh, n)) {
            a();
        }
    } else if (t === 190 && (r || s)) {
        if (Fd(e, K3c, n)) {
            a();
        }
    } else if (t === 191 && (r || s) && !i) {
        if (Fd(e, hHh, n)) {
            a();
        }
    } else if (t === 191 && (r || s) && i) {
        if (Fd(e, mHh, n)) {
            a();
        }
    } else if (t === 16) {
        if (Fd(e, SHh, n)) {
            a();
        }
    } else if (t === 75 && (r || s) && i) {
        if (Fd(e, K7h, n)) {
            a();
        }
    } else if (t === 68 && (r || s) && i) {
        if (Fd(e, Y7h, n)) {
            a();
        }
    } else if (t === 83 && (r || s) && i) {
        if (Fd(e, Z7h, n)) {
            a();
        }
    } else if (t === 83 && (r || s)) {
        if (Fd(e, X7h, n)) {
            a();
        }
    } else if (t === 75 && (r || s)) {
        if (Fd(e, L7h, n)) {
            a();
        }
    } else if (t === 89 && (r || s)) {
        if (Fd(e, N7h, n)) {
            a();
        }
    } else if (t === 68 && (r || s)) {
        if (Fd(e, M7h, n)) {
            a();
        }
    } else if (t === 69 && (r || s)) {
        if (Fd(e, F7h, n)) {
            a();
        }
    } else if (t === 72 && (r || s)) {
        if (Fd(e, U7h, n)) {
            a();
        }
    } else if (t === 49 && (r || s)) {
        if (Fd(e, $7h, n)) {
            a();
        }
    } else if (t === 50 && (r || s)) {
        if (Fd(e, q7h, n)) {
            a();
        }
    } else if (t === 51 && (r || s)) {
        if (Fd(e, H7h, n)) {
            a();
        }
    } else if (t === 52 && (r || s)) {
        if (Fd(e, J7h, n)) {
            a();
        }
    } else if (t === 53 && (r || s)) {
        if (Fd(e, G7h, n)) {
            a();
        }
    } else if (t === 54 && (r || s)) {
        if (Fd(e, W7h, n)) {
            a();
        }
    } else if (t === 55 && (r || s)) {
        if (Fd(e, Q7h, n)) {
            a();
        }
    } else if (t === 56 && (r || s)) {
        if (Fd(e, j7h, n)) {
            a();
        }
    } else if (t === 57 && (r || s)) {
        if (Fd(e, z7h, n)) {
            a();
        }
    } else if (t === 48 && (r || s)) {
        if (Fd(e, V7h, n)) {
            a();
        }
    } else if (t === 74 && (r || s)) {
        if (Fd(e, eHh, n)) {
            a();
        }
    } else if (t === 76 && (r || s)) {
        if (Fd(e, rHh, n)) {
            a();
        }
    } else if (t === 89 && (r && i || s)) {
        if (Fd(e, tHh, n)) {
            a();
        }
    } else if (t === 85 && (r || s)) {
        if (Fd(e, nHh, n)) {
            a();
        }
    } else if (t === 84 && (r || s)) {
        if (Fd(e, sHh, n)) {
            a();
        }
    } else if (t === 80 && (r || s)) {
        if (Fd(e, oHh, n)) {
            a();
        }
    } else if (t === 66 && (r || s)) {
        if (Fd(e, aHh, n)) {
            a();
        }
    } else if (t === 65 && (r || s)) {
        if (Fd(e, cHh, n)) {
            a();
        }
    } else if (t === 73 && (r || s)) {
        if (Fd(e, iHh, n)) {
            a();
        }
    } else if (t === 78 && (r || s)) {
        if (Fd(e, j3c, n)) {
            a();
        }
    } else if (t === 82 && (r || s)) {
        if (Fd(e, z3c, n)) {
            a();
        }
    } else if (t === 77 && (r || s)) {
        if (Fd(e, lHh, n)) {
            a();
        }
    } else if (t === 86 && (r || s)) {
        if (Fd(e, V3c, n)) {
            a();
        }
    } else if (t === 71 && (r || s)) {
        if (Fd(e, uHh, n)) {
            a();
        }
    } else if (t === 219 && (r || s)) {
        if (Fd(e, pHh, n)) {
            a();
        }
    } else if (t === 221 && (r || s)) {
        if (Fd(e, gHh, n)) {
            a();
        }
    } else if (w3c(t) && o) {
        n.stopPropagation();
        Fd(e, W3c, n);
    } else if (_3c(t) && o) {
        n.stopPropagation();
        Fd(e, Q3c, n);
    } else if (PbA(t, r, o, s)) {
        n.stopPropagation();
        Fd(e, P6n, n);
    } else if (LbA(t, r, i, o, s)) {
        n.stopPropagation();
        Fd(e, H3c, n);
    } else if (BbA(t, r, o, s)) {
        n.stopPropagation();
        Fd(e, L6n, n);
    } else if (RbA(t, r, i, o, s)) {
        n.stopPropagation();
        Fd(e, J3c, n);
    } else if (NbA(t, r, s)) {
        n.stopPropagation();
        Fd(e, n8e, n);
    } else if (_3c(t) && (r || s)) {
        n.stopPropagation();
        Fd(e, I7h, n);
    } else if (w3c(t) && (r || s)) {
        n.stopPropagation();
        Fd(e, D7h, n);
    } else if (A3c(t) && (r || s)) {
        n.stopPropagation();
        Fd(e, B7h, n);
    } else if (y3c(t) && (r || s)) {
        n.stopPropagation();
        Fd(e, R7h, n);
    } else if (MbA(t, r, s)) {
        n.stopPropagation();
        Fd(e, i8e, n);
    } else if (ybA(t, i)) {
        n.stopPropagation();
        C9t = true;
        Fd(e, KRe, n);
    } else if (ObA(t)) {
        n.stopPropagation();
        Fd(e, G3c, n);
    } else if (wbA(t, r)) {
        a();
        C9t = true;
        Fd(e, X9e, true);
    } else if (AbA(t, i)) {
        n.stopPropagation();
        C9t = false;
        Fd(e, KRe, n);
    } else if (EbA(t, o, s, r)) {
        if (y6n(t)) {
            n.stopPropagation();
            Fd(e, T9t, n);
        } else {
            a();
            Fd(e, Sve, true);
        }
    } else if (UbA(t)) {
        n.stopPropagation();
        Fd(e, kve, n);
    } else if (xbA(t, r, i, o, s)) {
        if (w6n(t)) {
            n.stopPropagation();
            Fd(e, N6n, n);
        } else {
            a();
            Fd(e, Sve, false);
        }
    } else if (_bA(t, o, r)) {
        a();
        Fd(e, e8e, true);
    } else if (CbA(t, o, r)) {
        a();
        Fd(e, e8e, false);
    } else if (SbA(t, s)) {
        n.preventDefault();
        Fd(e, mYe, true);
    } else if (kbA(t, s)) {
        a();
        Fd(e, mYe, false);
    } else if (fbA(t, o, s, r)) {
        a();
        Fd(e, t8e, "bold");
    } else if (vbA(t, o, s, r)) {
        a();
        Fd(e, t8e, "underline");
    } else if (bbA(t, o, s, r)) {
        a();
        Fd(e, t8e, "italic");
    } else if (gbA(t, o, r, s)) {
        Fd(e, ZRe, n);
    } else if (TbA(t, i, s, r)) {
        a();
        Fd(e, E9t, undefined);
    } else if (IbA(t, i, s, r)) {
        a();
        Fd(e, x9t, undefined);
    } else if (t === 49 && o) {
        if (Fd(e, AHh, n)) {
            a();
        }
    } else if (t === 50 && o) {
        if (Fd(e, yHh, n)) {
            a();
        }
    } else if (t === 51 && o) {
        if (Fd(e, wHh, n)) {
            a();
        }
    } else if (t === 52 && o) {
        if (Fd(e, _Hh, n)) {
            a();
        }
    } else if (t === 53 && o) {
        if (Fd(e, CHh, n)) {
            a();
        }
    } else if (t === 18 && o) {
        if (Fd(e, fHh, n)) {
            a();
        }
    } else if (Fs ? t === 91 && s : t === 17 && r) {
        if (Fd(e, bHh, n)) {
            a();
        }
    } else if (h7h(t, i, s, r)) {
        if (Fd(e, Cvt, n)) {
            n.stopPropagation();
        }
    } else {
        const l = e._editorState._selection;
        if (jte(l)) {
            if (DbA(t, i, s, r)) {
                a();
                Fd(e, _vt, n);
            } else if (h7h(t, i, s, r)) {
                a();
                Fd(e, Cvt, n);
            } else if ($bA(t, s, r)) {
                a();
                e.update(() => {
                    const u = lf();
                    u.select(0, u.getChildrenSize());
                });
            }
        }
    }
    if (FbA(r, i, o, s)) {
        Fd(e, THh, n);
    }
}

function vqh(n) {
    let e = n.__lexicalEventHandles;
    if (e === undefined) {
        e = [];
        n.__lexicalEventHandles = e;
    }
    return e;
}

function Aqh(n) {
    const e = $c();
    const t = T3c(e);
    if (t === null) {
        return;
    }
    const i = t7h(t.anchorNode);
    if (i === null) {
        return;
    }
    if (SUo) {
        SUo = false;
        ahe(i, () => {
            const u = dUo();
            const d = t.anchorNode;
            if (d === null) {
                return;
            }
            const m = d.nodeType;
            if (m !== D9t && m !== XRe) {
                return;
            }
            const p = d3c(u, t, i);
            cae(p);
        });
    }
    const r = f3c(i);
    const s = r[r.length - 1];
    const o = s._key;
    const a = Avt.get(o);
    const l = a || s;
    if (l !== i) {
        fqh(t, l, false);
    }
    fqh(t, i, true);
    if (i !== s) {
        Avt.set(o, i);
    } else if (a) {
        Avt.delete(o);
    }
}

function yqh(n) {
    n._lexicalHandled = true;
}

function wqh(n) {
    return n._lexicalHandled === true;
}

function yfA(n, e) {
    const t = n.ownerDocument;
    _Uo.set(n, t);
    const i = _9t.get(t) ?? 0;
    if (i === 0) {
        t.addEventListener("selectionchange", Aqh);
    }
    _9t.set(t, i + 1);
    n.__lexicalEditor = e;
    const r = vqh(n);
    for (let s = 0; s < wUo.length; s++) {
        const [o, a] = wUo[s];
        const l = typeof a == "function" ? u => {
            if (!wqh(u)) {
                yqh(u);
                if (e.isEditable()) {
                    a(u, e);
                }
            }
        } : u => {
            if (!wqh(u) && (yqh(u), e.isEditable())) {
                switch (o) {
                    case "cut":
                        return Fd(e, Cvt, u);
                    case "copy":
                        return Fd(e, _vt, u);
                    case "paste":
                        return Fd(e, hYe, u);
                    case "dragstart":
                        return Fd(e, BUo, u);
                    case "dragover":
                        return Fd(e, RUo, u);
                    case "dragend":
                        return Fd(e, xHh, u);
                    case "focus":
                        return Fd(e, O6n, u);
                    case "blur":
                        return Fd(e, PUo, u);
                    case "drop":
                        return Fd(e, I9t, u);
                }
            }
        };
        n.addEventListener(o, l);
        r.push(() => {
            n.removeEventListener(o, l);
        });
    }
}

function wfA(n) {
    const e = _Uo.get(n) ?? n.ownerDocument;
    _Uo.delete(n);
    const t = _9t.get(e);
    if (t !== undefined) {
        const s = t - 1;
        if (s <= 0) {
            e.removeEventListener("selectionchange", Aqh);
            _9t.delete(e);
        } else {
            _9t.set(e, s);
        }
    }
    const i = n.__lexicalEditor;
    if (i != null) {
        _fA(i);
        n.__lexicalEditor = null;
    }
    const r = vqh(n);
    for (let s = 0; s < r.length; s++) {
        r[s]();
    }
    n.__lexicalEventHandles = [];
}

function _fA(n) {
    if (n._parentEditor !== null) {
        const e = f3c(n);
        const i = e[e.length - 1]._key;
        if (Avt.get(i) === n) {
            Avt.delete(i);
        }
    } else {
        Avt.delete(n._key);
    }
}

function CfA() {
    CUo = true;
}

function SfA(n, e, t, i, r) {
    L3c = [n, e, t, i, r];
}

function kfA(n, e) {
    const t = n._decorators;
    let r = n._pendingDecorators || t;
    const s = e._nodeMap;
    let o;
    for (o in r) {
        if (!s.has(o)) {
            if (r === t) {
                r = s7h(n);
            }
            delete r[o];
        }
    }
}

function _qh(n, e, t, i, r, s) {
    let o = n.getFirstChild();
    while (o !== null) {
        const a = o.__key;
        if (o.__parent === e) {
            if (kd(o)) {
                _qh(o, a, t, i, r, s);
            }
            if (!t.has(a)) {
                s.delete(a);
            }
            r.push(a);
        }
        o = o.getNextSibling();
    }
}

function EfA(n, e, t, i) {
    const r = n._nodeMap;
    const s = e._nodeMap;
    const o = [];
    for (const [a] of i) {
        const l = s.get(a);
        if (l !== undefined) {
            if (!l.isAttached()) {
                if (kd(l)) {
                    _qh(l, a, r, s, o, i);
                }
                if (!r.has(a)) {
                    i.delete(a);
                }
                o.push(a);
            }
        }
    }
    for (const a of o) {
        s.delete(a);
    }
    for (const a of t) {
        const l = s.get(a);
        if (l !== undefined && !l.isAttached()) {
            if (!r.has(a)) {
                t.delete(a);
            }
            s.delete(a);
        }
    }
}

function xfA() {
    return kUo;
}

function TfA(n) {
    EUo = n.timeStamp;
}

function IfA(n) {
    if (EUo === 0) {
        S6n(n).addEventListener("textInput", TfA, true);
    }
}

function e3c(n, e, t) {
    return e.__lexicalLineBreak === n || n[`__lexicalKey_${t._key}`] !== undefined;
}

function DfA(n) {
    return n.getEditorState().read(() => {
        const e = Wd();
        if (e !== null) {
            return e.clone();
        } else {
            return null;
        }
    });
}

function BfA(n, e, t) {
    const i = Y9e(t);
    let r = null;
    let s = null;
    if (i !== null && i.anchorNode === n) {
        r = i.anchorOffset;
        s = i.focusOffset;
    }
    const o = n.nodeValue;
    if (o !== null) {
        v3c(e, o, r, s, false);
    }
}

function RfA(n, e, t) {
    if (dd(n)) {
        const i = n.anchor.getNode();
        if (i.is(t) && n.format !== i.getFormat()) {
            return false;
        }
    }
    return e.nodeType === XRe && t.isAttached();
}

function Cqh(n, e, t) {
    kUo = true;
    const i = performance.now() - EUo > S7h;
    try {
        ahe(n, () => {
            const r = Wd() || DfA(n);
            const s = new Map();
            const o = n.getRootElement();
            const a = n._editorState;
            const l = n._blockCursorElement;
            let u = false;
            let d = "";
            for (let p = 0; p < e.length; p++) {
                const g = e[p];
                const f = g.type;
                const A = g.target;
                let w = jRe(A, a);
                if ((w !== null || A === o) && !ZD(w)) {
                    if (f === "characterData") {
                        if (i && jd(w) && RfA(r, A, w)) {
                            BfA(A, w, n);
                        }
                    } else if (f === "childList") {
                        u = true;
                        const C = g.addedNodes;
                        for (let B = 0; B < C.length; B++) {
                            const R = C[B];
                            const N = r7h(R);
                            const M = R.parentNode;
                            if (M != null && R !== l && N === null && (R.nodeName !== "BR" || !e3c(R, M, n))) {
                                if (rYe) {
                                    const O = R.innerText || R.nodeValue;
                                    if (O) {
                                        d += O;
                                    }
                                }
                                M.removeChild(R);
                            }
                        }
                        const x = g.removedNodes;
                        const I = x.length;
                        if (I > 0) {
                            let B = 0;
                            for (let R = 0; R < I; R++) {
                                const N = x[R];
                                if (N.nodeName === "BR" && e3c(N, A, n) || l === N) {
                                    A.appendChild(N);
                                    B++;
                                }
                            }
                            if (I !== B) {
                                if (A === o) {
                                    w = a7h(a);
                                }
                                s.set(A, w);
                            }
                        }
                    }
                }
            }
            if (s.size > 0) {
                for (const [p, g] of s) {
                    if (kd(g)) {
                        const f = g.getChildrenKeys();
                        let A = p.firstChild;
                        for (let w = 0; w < f.length; w++) {
                            const C = f[w];
                            const x = n.getElementByKey(C);
                            if (x !== null) {
                                if (A == null) {
                                    p.appendChild(x);
                                    A = x;
                                } else if (A !== x) {
                                    p.replaceChild(x, A);
                                }
                                A = A.nextSibling;
                            }
                        }
                    } else if (jd(g)) {
                        g.markDirty();
                    }
                }
            }
            const m = t.takeRecords();
            if (m.length > 0) {
                for (let p = 0; p < m.length; p++) {
                    const g = m[p];
                    const f = g.addedNodes;
                    const A = g.target;
                    for (let w = 0; w < f.length; w++) {
                        const C = f[w];
                        const x = C.parentNode;
                        if (x != null && C.nodeName === "BR" && !e3c(C, A, n)) {
                            x.removeChild(C);
                        }
                    }
                }
                t.takeRecords();
            }
            if (r !== null) {
                if (u) {
                    r.dirty = true;
                    cae(r);
                }
                if (rYe && g7h(n)) {
                    r.insertRawText(d);
                }
            }
        });
    } finally {
        kUo = false;
    }
}

function Sqh(n) {
    const e = n._observer;
    if (e !== null) {
        const t = e.takeRecords();
        Cqh(n, t, e);
    }
}

function kqh(n) {
    IfA(n);
    n._observer = new MutationObserver((e, t) => {
        Cqh(n, e, t);
    });
}

function t3c(n, e, t) {
    aae();
    const i = n.__key;
    const r = n.getParent();
    if (r === null) {
        return;
    }
    const s = HbA(n);
    let o = false;
    if (dd(s) && e) {
        const a = s.anchor;
        const l = s.focus;
        if (a.key === i) {
            mUo(a, n, r, n.getPreviousSibling(), n.getNextSibling());
            o = true;
        }
        if (l.key === i) {
            mUo(l, n, r, n.getPreviousSibling(), n.getNextSibling());
            o = true;
        }
    }
    if (dd(s) && e && !o) {
        const a = n.getIndexWithinParent();
        fvt(n);
        hUo(s, r, a, -1);
    } else {
        fvt(n);
    }
    if (!t && !zte(r) && !r.canBeEmpty() && r.isEmpty()) {
        t3c(r, e);
    }
    if (e && ZY(r) && r.isEmpty()) {
        r.selectEnd();
    }
}

function Eqh(n, e) {
    const t = n.__mode;
    const i = n.__format;
    const r = n.__style;
    const s = e.__mode;
    const o = e.__format;
    const a = e.__style;
    return (t === null || t === s) && (i === null || i === o) && (r === null || r === a);
}

function xqh(n, e) {
    const t = n.mergeWithSibling(e);
    const i = G6()._normalizedNodes;
    i.add(n.__key);
    i.add(e.__key);
    return t;
}

function Tqh(n) {
    let e = n;
    if (e.__text === "" && e.isSimpleText() && !e.isUnmergeable()) {
        e.remove();
        return;
    }
    let t;
    while ((t = e.getPreviousSibling()) !== null && jd(t) && t.isSimpleText() && !t.isUnmergeable()) {
        if (t.__text === "") {
            t.remove();
        } else if (Eqh(t, e)) {
            e = xqh(t, e);
            break;
        } else {
            break;
        }
    }
    let i;
    while ((i = e.getNextSibling()) !== null && jd(i) && i.isSimpleText() && !i.isUnmergeable()) {
        if (i.__text === "") {
            i.remove();
        } else if (Eqh(e, i)) {
            e = xqh(e, i);
            break;
        } else {
            break;
        }
    }
}

function n3c(n) {
    Iqh(n.anchor);
    Iqh(n.focus);
    return n;
}

function Iqh(n) {
    while (n.type === "element") {
        const e = n.getNode();
        const t = n.offset;
        let i;
        let r;
        if (t === e.getChildrenSize()) {
            i = e.getChildAtIndex(t - 1);
            r = true;
        } else {
            i = e.getChildAtIndex(t);
            r = false;
        }
        if (jd(i)) {
            n.set(i.__key, r ? i.getTextContentSize() : 0, "text");
            break;
        } else if (!kd(i)) {
            break;
        }
        n.set(i.__key, r ? i.getChildrenSize() : 0, "element");
    }
}

function aUo(n, e) {
    const t = yvt.get(n);
    if (e !== null) {
        const i = o3c(n);
        if (i.parentNode === e) {
            e.removeChild(i);
        }
    }
    if (!uYe.has(n)) {
        Kte._keyToDOMMap.delete(n);
    }
    if (kd(t)) {
        const i = lUo(t, yvt);
        i3c(i, 0, i.length - 1, null);
    }
    if (t !== undefined) {
        C3c(I6n, x6n, TUo, t, "destroyed");
    }
}

function i3c(n, e, t, i) {
    let r = e;
    for (; r <= t; ++r) {
        const s = n[r];
        if (s !== undefined) {
            aUo(s, i);
        }
    }
}

function mvt(n, e) {
    n.setProperty("text-align", e);
}

function Dqh(n, e) {
    const t = lYe.theme.indent;
    if (typeof t == "string") {
        const r = n.classList.contains(t);
        if (e > 0 && !r) {
            n.classList.add(t);
        } else if (e < 1 && r) {
            n.classList.remove(t);
        }
    }
    const i = getComputedStyle(n).getPropertyValue("--lexical-indent-base-value") || k7h;
    n.style.setProperty("padding-inline-start", e === 0 ? "" : `calc(${e} * ${i})`);
}

function Bqh(n, e) {
    const t = n.style;
    if (e === 0) {
        mvt(t, "");
    } else if (e === JUo) {
        mvt(t, "left");
    } else if (e === GUo) {
        mvt(t, "center");
    } else if (e === WUo) {
        mvt(t, "right");
    } else if (e === QUo) {
        mvt(t, "justify");
    } else if (e === jUo) {
        mvt(t, "start");
    } else if (e === zUo) {
        mvt(t, "end");
    }
}

function cUo(n, e, t) {
    const i = uYe.get(n);
    if (i === undefined) {
        Yg(false, "createNode: node does not exist in nodeMap");
    }
    const r = i.createDOM(lYe, Kte);
    UfA(n, r, Kte);
    if (jd(i)) {
        r.setAttribute("data-lexical-text", "true");
    } else if (ZD(i)) {
        r.setAttribute("data-lexical-decorator", "true");
    }
    if (kd(i)) {
        const s = i.__indent;
        const o = i.__size;
        if (s !== 0) {
            Dqh(r, s);
        }
        if (o !== 0) {
            const l = o - 1;
            const u = lUo(i, uYe);
            PfA(u, l, i, r);
        }
        const a = i.__format;
        if (a !== 0) {
            Bqh(r, a);
        }
        if (!i.isInline()) {
            Pqh(null, i, r);
        }
        if (fUo(i)) {
            Y$ += ePe;
            VRe += ePe;
        }
    } else {
        const s = i.getTextContent();
        if (ZD(i)) {
            const o = i.decorate(Kte, lYe);
            if (o !== null) {
                Nqh(n, o);
            }
            r.contentEditable = "false";
        } else if (jd(i)) {
            if (!i.isDirectionless()) {
                XY += s;
            }
        }
        Y$ += s;
        VRe += s;
    }
    if (e !== null) {
        if (t != null) {
            e.insertBefore(r, t);
        } else {
            const s = e.__lexicalLineBreak;
            if (s != null) {
                e.insertBefore(r, s);
            } else {
                e.appendChild(r);
            }
        }
    }
    C3c(I6n, x6n, TUo, i, "created");
    return r;
}

function PfA(n, e, t, i) {
    const r = XY;
    XY = "";
    r3c(n, t, 0, e, i, null);
    Lqh(t, i);
    XY = r;
}

function r3c(n, e, t, i, r, s) {
    const o = Y$;
    Y$ = "";
    let a = t;
    for (; a <= i; ++a) {
        cUo(n[a], r, s);
    }
    if (fUo(e)) {
        Y$ += ePe;
    }
    r.__lexicalTextContent = Y$;
    Y$ = o + Y$;
}

function Rqh(n, e) {
    const t = e.get(n);
    return x3(t) || ZD(t) && t.isInline();
}

function Pqh(n, e, t) {
    const i = n !== null && (n.__size === 0 || Rqh(n.__last, yvt));
    const r = e.__size === 0 || Rqh(e.__last, uYe);
    if (i) {
        if (!r) {
            const s = t.__lexicalLineBreak;
            if (s != null) {
                t.removeChild(s);
            }
            t.__lexicalLineBreak = null;
        }
    } else if (r) {
        const s = bi.document.createElement("br");
        t.__lexicalLineBreak = s;
        t.appendChild(s);
    }
}

function Lqh(n, e) {
    const t = e.__lexicalDirTextContent;
    const i = e.__lexicalDir;
    if (t !== XY || i !== T6n) {
        const r = XY === "";
        const s = r ? T6n : obA(XY);
        if (s !== i) {
            const o = e.classList;
            const a = lYe.theme;
            let l = i !== null ? a[i] : undefined;
            let u = s !== null ? a[s] : undefined;
            if (l !== undefined) {
                if (typeof l == "string") {
                    const d = l.split(" ");
                    l = a[i] = d;
                }
                o.remove(...l);
            }
            if (s === null || r && s === "ltr") {
                e.removeAttribute("dir");
            } else {
                if (u !== undefined) {
                    if (typeof u == "string") {
                        const d = u.split(" ");
                        u = a[s] = d;
                    }
                    if (u !== undefined) {
                        o.add(...u);
                    }
                }
                e.dir = s;
            }
            if (!xUo) {
                const d = n.getWritable();
                d.__dir = s;
            }
        }
        T6n = s;
        e.__lexicalDirTextContent = XY;
        e.__lexicalDir = s;
    }
}

function LfA(n, e, t) {
    const i = XY;
    XY = "";
    NfA(n, e, t);
    Lqh(e, t);
    XY = i;
}

function lUo(n, e) {
    const t = [];
    let i = n.__first;
    while (i !== null) {
        const r = e.get(i);
        if (r === undefined) {
            Yg(false, "createChildrenArray: node does not exist in nodeMap");
        }
        t.push(i);
        i = r.__next;
    }
    return t;
}

function NfA(n, e, t) {
    const i = Y$;
    const r = n.__size;
    const s = e.__size;
    Y$ = "";
    if (r === 1 && s === 1) {
        const o = n.__first;
        const a = e.__first;
        if (o === a) {
            f6n(o, t);
        } else {
            const l = o3c(o);
            const u = cUo(a, null, null);
            t.replaceChild(u, l);
            aUo(o, null);
        }
    } else {
        const o = lUo(n, yvt);
        const a = lUo(e, uYe);
        if (r === 0) {
            if (s !== 0) {
                r3c(a, e, 0, s - 1, t, null);
            }
        } else if (s === 0) {
            if (r !== 0) {
                const u = t.__lexicalLineBreak == null;
                i3c(o, 0, r - 1, u ? null : t);
                if (u) {
                    t.textContent = "";
                }
            }
        } else {
            FfA(e, o, a, r, s, t);
        }
    }
    if (fUo(e)) {
        Y$ += ePe;
    }
    t.__lexicalTextContent = Y$;
    Y$ = i + Y$;
}

function f6n(n, e) {
    const t = yvt.get(n);
    let i = uYe.get(n);
    if (t === undefined || i === undefined) {
        Yg(false, "reconcileNode: prevNode or nextNode does not exist in nodeMap");
    }
    const r = N3c || F3c.has(n) || M3c.has(n);
    const s = bUo(Kte, n);
    if (t === i && !r) {
        if (kd(t)) {
            const o = s.__lexicalTextContent;
            if (o !== undefined) {
                Y$ += o;
                VRe += o;
            }
            const a = s.__lexicalDirTextContent;
            if (a !== undefined) {
                XY += a;
            }
        } else {
            const o = t.getTextContent();
            if (jd(t) && !t.isDirectionless()) {
                XY += o;
            }
            VRe += o;
            Y$ += o;
        }
        return s;
    }
    if (t !== i && r) {
        C3c(I6n, x6n, TUo, i, "updated");
    }
    if (i.updateDOM(t, s, lYe)) {
        const o = cUo(n, null, null);
        if (e === null) {
            Yg(false, "reconcileNode: parentDOM is null");
        }
        e.replaceChild(o, s);
        aUo(n, null);
        return o;
    }
    if (kd(t) && kd(i)) {
        const o = i.__indent;
        if (o !== t.__indent) {
            Dqh(s, o);
        }
        const a = i.__format;
        if (a !== t.__format) {
            Bqh(s, a);
        }
        if (r) {
            LfA(t, i, s);
            if (!ZY(i) && !i.isInline()) {
                Pqh(t, i, s);
            }
        }
        if (fUo(i)) {
            Y$ += ePe;
            VRe += ePe;
        }
    } else {
        const o = i.getTextContent();
        if (ZD(i)) {
            const a = i.decorate(Kte, lYe);
            if (a !== null) {
                Nqh(n, a);
            }
        } else if (jd(i) && !i.isDirectionless()) {
            XY += o;
        }
        Y$ += o;
        VRe += o;
    }
    if (!xUo && ZY(i) && i.__cachedText !== VRe) {
        i = i.getWritable();
        i.__cachedText = VRe;
    }
    return s;
}

function Nqh(n, e) {
    let t = Kte._pendingDecorators;
    const i = Kte._decorators;
    if (t === null) {
        if (i[n] === e) {
            return;
        }
        t = s7h(Kte);
    }
    t[n] = e;
}

function MfA(n) {
    return n.firstChild;
}

function s3c(n) {
    let e = n.nextSibling;
    if (e !== null && e === Kte._blockCursorElement) {
        e = e.nextSibling;
    }
    return e;
}

function FfA(n, e, t, i, r, s) {
    const o = i - 1;
    const a = r - 1;
    let l;
    let u;
    let d = MfA(s);
    let m = 0;
    let p = 0;
    while (m <= o && p <= a) {
        const A = e[m];
        const w = t[p];
        if (A === w) {
            d = s3c(f6n(w, s));
            m++;
            p++;
        } else {
            if (l === undefined) {
                l = new Set(e);
            }
            if (u === undefined) {
                u = new Set(t);
            }
            const C = u.has(A);
            const x = l.has(w);
            if (!C) {
                d = s3c(o3c(A));
                aUo(A, s);
                m++;
            } else if (!x) {
                cUo(w, s, d);
                p++;
            } else {
                const I = bUo(Kte, w);
                if (I === d) {
                    d = s3c(f6n(w, s));
                } else {
                    if (d != null) {
                        s.insertBefore(I, d);
                    } else {
                        s.appendChild(I);
                    }
                    f6n(w, s);
                }
                m++;
                p++;
            }
        }
    }
    const g = m > o;
    const f = p > a;
    if (g && !f) {
        const A = t[a + 1];
        const w = A === undefined ? null : Kte.getElementByKey(A);
        r3c(t, n, p, a, s, w);
    } else if (f && !g) {
        i3c(e, m, o, s);
    }
}

function OfA(n, e, t, i, r, s) {
    Y$ = "";
    VRe = "";
    XY = "";
    N3c = i === Evt;
    T6n = null;
    Kte = t;
    lYe = t._config;
    x6n = t._nodes;
    TUo = Kte._listeners.mutation;
    M3c = r;
    F3c = s;
    yvt = n._nodeMap;
    uYe = e._nodeMap;
    xUo = e._readOnly;
    O3c = new Map(t._keyToDOMMap);
    const o = new Map();
    I6n = o;
    f6n("root", null);
    Kte = undefined;
    x6n = undefined;
    M3c = undefined;
    F3c = undefined;
    yvt = undefined;
    uYe = undefined;
    lYe = undefined;
    O3c = undefined;
    I6n = undefined;
    return o;
}

function UfA(n, e, t) {
    const i = t._keyToDOMMap;
    e["__lexicalKey_" + t._key] = n;
    i.set(n, e);
}

function o3c(n) {
    const e = O3c.get(n);
    if (e === undefined) {
        Yg(false, "Reconciliation: could not find DOM element for node key %s", n);
    }
    return e;
}

function QRe(n, e, t) {
    return new E7h(n, e, t);
}

function a3c(n, e) {
    let t = e.__key;
    let i = n.offset;
    let r = "element";
    if (jd(e)) {
        r = "text";
        const s = e.getTextContentSize();
        if (i > s) {
            i = s;
        }
    } else if (!kd(e)) {
        const s = e.getNextSibling();
        if (jd(s)) {
            t = s.__key;
            i = 0;
            r = "text";
        } else {
            const o = e.getParent();
            if (o) {
                t = o.__key;
                i = e.getIndexWithinParent() + 1;
            }
        }
    }
    n.set(t, i, r);
}

function Mqh(n, e) {
    if (kd(e)) {
        const t = e.getLastDescendant();
        if (kd(t) || jd(t)) {
            a3c(n, t);
        } else {
            a3c(n, e);
        }
    } else {
        a3c(n, e);
    }
}

function Fqh(n, e, t, i) {
    const r = n.getNode();
    const s = r.getChildAtIndex(n.offset);
    const o = OA();
    const a = ZY(r) ? Lx().append(o) : o;
    o.setFormat(t);
    o.setStyle(i);
    if (s === null) {
        r.append(a);
    } else {
        s.insertBefore(a);
    }
    if (n.is(e)) {
        e.set(o.__key, 0, "text");
    }
    n.set(o.__key, 0, "text");
}

function sYe(n, e, t, i) {
    n.key = e;
    n.offset = t;
    n.type = i;
}

function dd(n) {
    return n instanceof k9t;
}

function pvt(n) {
    return n instanceof $3c;
}

function jte(n) {
    return n instanceof U3c;
}

function Oqh(n) {
    const e = n.offset;
    if (n.type === "text") {
        return e;
    }
    const t = n.getNode();
    if (e === t.getChildrenSize()) {
        return t.getTextContent().length;
    } else {
        return 0;
    }
}

function uUo(n) {
    const e = n.anchor;
    const t = n.focus;
    if (e.type === "element" && t.type === "element" && e.key === t.key && e.offset === t.offset) {
        return [0, 0];
    } else {
        return [Oqh(e), Oqh(t)];
    }
}

function $fA(n) {
    const e = n.focus;
    const t = n.anchor;
    const i = t.key;
    const r = t.offset;
    const s = t.type;
    sYe(t, e.key, e.offset, e.type);
    sYe(e, i, r, s);
    n._cachedNodes = null;
}

function qfA(n, e, t, i) {
    n.modify(e, t, i);
}

function HfA(n, e) {
    const t = n.anchor;
    const i = n.focus;
    const r = t.getNode();
    const s = i.getNode();
    if (r === s && t.type === "text" && i.type === "text") {
        const o = t.offset;
        const a = i.offset;
        const l = o < a;
        const u = l ? o : a;
        const d = l ? a : o;
        const m = d - 1;
        if (u !== m) {
            const p = r.getTextContent().slice(u, d);
            if (!l7h(p)) {
                if (e) {
                    i.offset = m;
                } else {
                    t.offset = m;
                }
            }
        }
    }
}

function Uqh(n, e, t) {
    const i = n;
    const s = i.getTextContent().split(/(?=\s)/g);
    const o = s.length;
    let a = 0;
    let l = 0;
    for (let d = 0; d < o; d++) {
        const m = s[d];
        const p = d === o - 1;
        l = a;
        a += m.length;
        if (e && a === t || a > t || p) {
            s.splice(d, 1);
            if (p) {
                l = undefined;
            }
            break;
        }
    }
    const u = s.join("").trim();
    if (u === "") {
        i.remove();
    } else {
        i.setTextContent(u);
        i.select(l, l);
    }
}

function JfA(n, e, t) {
    const i = n.getParent();
    return t === null || i === null || !i.canBeEmpty() || i !== t.getNode();
}

function $qh(n, e, t, i) {
    let r = e;
    let s;
    if (n.nodeType === D9t) {
        let o = false;
        const a = n.childNodes;
        const l = a.length;
        if (r === l) {
            o = true;
            r = l - 1;
        }
        let u = a[r];
        let d = false;
        if (u === i._blockCursorElement) {
            u = a[r + 1];
            d = true;
        } else if (i._blockCursorElement !== null) {
            r--;
        }
        s = y9t(u);
        if (jd(s)) {
            r = c7h(s, o);
        } else {
            let m = y9t(n);
            if (m === null) {
                return null;
            }
            if (kd(m)) {
                let p = m.getChildAtIndex(r);
                if (kd(p) && JfA(p, r, t)) {
                    const g = o ? p.getLastDescendant() : p.getFirstDescendant();
                    if (g === null) {
                        m = p;
                        r = 0;
                    } else {
                        p = g;
                        m = kd(p) ? p : p.getParentOrThrow();
                    }
                }
                if (jd(p)) {
                    s = p;
                    m = null;
                    r = c7h(p, o);
                } else if (p !== m && o && !d) {
                    r++;
                }
            } else {
                const p = m.getIndexWithinParent();
                if (e === 0 && ZD(m) && y9t(n) === m) {
                    r = p;
                } else {
                    r = p + 1;
                }
                m = m.getParentOrThrow();
            }
            if (kd(m)) {
                return QRe(m.__key, r, "element");
            }
        }
    } else {
        s = y9t(n);
    }
    if (jd(s)) {
        return QRe(s.__key, r, "text");
    } else {
        return null;
    }
}

function qqh(n, e, t) {
    const i = n.offset;
    const r = n.getNode();
    if (i === 0) {
        const s = r.getPreviousSibling();
        const o = r.getParent();
        if (!e) {
            if (kd(s) && !t && s.isInline()) {
                n.key = s.__key;
                n.offset = s.getChildrenSize();
                n.type = "element";
            } else if (jd(s)) {
                n.key = s.__key;
                n.offset = s.getTextContent().length;
            }
        } else if ((t || !e) && s === null && kd(o) && o.isInline()) {
            const a = o.getPreviousSibling();
            if (jd(a)) {
                n.key = a.__key;
                n.offset = a.getTextContent().length;
            }
        }
    } else if (i === r.getTextContent().length) {
        const s = r.getNextSibling();
        const o = r.getParent();
        if (e && kd(s) && s.isInline()) {
            n.key = s.__key;
            n.offset = 0;
            n.type = "element";
        } else if ((t || e) && s === null && kd(o) && o.isInline() && !o.canInsertTextAfter()) {
            const a = o.getNextSibling();
            if (jd(a)) {
                n.key = a.__key;
                n.offset = 0;
            }
        }
    }
}

function Hqh(n, e, t) {
    if (n.type === "text" && e.type === "text") {
        const i = n.isBefore(e);
        const r = n.is(e);
        qqh(n, i, r);
        qqh(e, !i, r);
        if (r) {
            e.key = n.key;
            e.offset = n.offset;
            e.type = n.type;
        }
        const s = G6();
        if (s.isComposing() && s._compositionKey !== n.key && dd(t)) {
            const o = t.anchor;
            const a = t.focus;
            sYe(n, o.key, o.offset, o.type);
            sYe(e, a.key, a.offset, a.type);
        }
    }
}

function Jqh(n, e, t, i, r, s) {
    if (n === null || t === null || !v6n(r, n, t)) {
        return null;
    }
    const o = $qh(n, e, dd(s) ? s.anchor : null, r);
    if (o === null) {
        return null;
    }
    const a = $qh(t, i, dd(s) ? s.focus : null, r);
    if (a === null) {
        return null;
    }
    if (o.type === "element" && a.type === "element") {
        const l = y9t(n);
        const u = y9t(t);
        if (ZD(l) && ZD(u)) {
            return null;
        }
    }
    Hqh(o, a, s);
    return [o, a];
}

function c3c(n) {
    return kd(n) && !n.isInline();
}

function Gqh(n, e, t, i, r, s) {
    const o = K9e();
    const a = new k9t(QRe(n, e, r), QRe(t, i, s), 0, "");
    a.dirty = true;
    o._selection = a;
    return a;
}

function l3c() {
    const n = QRe("root", 0, "element");
    const e = QRe("root", 0, "element");
    return new k9t(n, e, 0, "");
}

function u3c() {
    return new U3c(new Set());
}

function GfA() {
    const n = QRe("root", 0, "element");
    const e = QRe("root", 0, "element");
    return new $3c("root", n, e);
}

function WfA(n) {
    const t = n.getEditorState()._selection;
    const i = Y9e(n);
    if (jte(t) || pvt(t)) {
        return t.clone();
    } else {
        return d3c(t, i, n);
    }
}

function d3c(n, e, t) {
    const i = t._window;
    if (i === null) {
        return null;
    }
    const r = i.event;
    const s = r ? r.type : undefined;
    const o = s === "selectionchange";
    const a = !xfA() && (o || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && r && r.detail === 3 || s === "drop" || s === undefined);
    let l;
    let u;
    let d;
    let m;
    if (!dd(n) || a) {
        if (e === null) {
            return null;
        }
        l = e.anchorNode;
        u = e.focusNode;
        d = e.anchorOffset;
        m = e.focusOffset;
        if (o && dd(n) && !v6n(t, l, u)) {
            return n.clone();
        }
    } else {
        return n.clone();
    }
    const p = Jqh(l, d, u, m, t, n);
    if (p === null) {
        return null;
    }
    const [g, f] = p;
    return new k9t(g, f, dd(n) ? n.format : 0, dd(n) ? n.style : "");
}

function Wd() {
    return K9e()._selection;
}

function dUo() {
    return G6()._editorState._selection;
}

function hUo(n, e, t, i = 1) {
    const r = n.anchor;
    const s = n.focus;
    const o = r.getNode();
    const a = s.getNode();
    if (!e.is(o) && !e.is(a)) {
        return;
    }
    const l = e.__key;
    if (n.isCollapsed()) {
        const u = r.offset;
        if (t <= u && i > 0 || t < u && i < 0) {
            const d = Math.max(0, u + i);
            r.set(l, d, "element");
            s.set(l, d, "element");
            Wqh(n);
        }
    } else {
        const u = n.isBackward();
        const d = u ? s : r;
        const m = d.getNode();
        const p = u ? r : s;
        const g = p.getNode();
        if (e.is(m)) {
            const f = d.offset;
            if (t <= f && i > 0 || t < f && i < 0) {
                d.set(l, Math.max(0, f + i), "element");
            }
        }
        if (e.is(g)) {
            const f = p.offset;
            if (t <= f && i > 0 || t < f && i < 0) {
                p.set(l, Math.max(0, f + i), "element");
            }
        }
    }
    Wqh(n);
}

function Wqh(n) {
    const e = n.anchor;
    const t = e.offset;
    const i = n.focus;
    const r = i.offset;
    const s = e.getNode();
    const o = i.getNode();
    if (n.isCollapsed()) {
        if (!kd(s)) {
            return;
        }
        const a = s.getChildrenSize();
        const l = t >= a;
        const u = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(t);
        if (jd(u)) {
            let d = 0;
            if (l) {
                d = u.getTextContentSize();
            }
            e.set(u.__key, d, "text");
            i.set(u.__key, d, "text");
        }
        return;
    }
    if (kd(s)) {
        const a = s.getChildrenSize();
        const l = t >= a;
        const u = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(t);
        if (jd(u)) {
            let d = 0;
            if (l) {
                d = u.getTextContentSize();
            }
            e.set(u.__key, d, "text");
        }
    }
    if (kd(o)) {
        const a = o.getChildrenSize();
        const l = r >= a;
        const u = l ? o.getChildAtIndex(a - 1) : o.getChildAtIndex(r);
        if (jd(u)) {
            let d = 0;
            if (l) {
                d = u.getTextContentSize();
            }
            i.set(u.__key, d, "text");
        }
    }
}

function QfA(n, e) {
    const i = e.getEditorState()._selection;
    const r = n._selection;
    if (dd(r)) {
        const s = r.anchor;
        const o = r.focus;
        let a;
        if (s.type === "text") {
            a = s.getNode();
            a.selectionTransform(i, r);
        }
        if (o.type === "text") {
            const l = o.getNode();
            if (a !== l) {
                l.selectionTransform(i, r);
            }
        }
    }
}

function mUo(n, e, t, i, r) {
    let s = null;
    let o = 0;
    let a = null;
    if (i !== null) {
        s = i.__key;
        if (jd(i)) {
            o = i.getTextContentSize();
            a = "text";
        } else if (kd(i)) {
            o = i.getChildrenSize();
            a = "element";
        }
    } else if (r !== null) {
        s = r.__key;
        if (jd(r)) {
            a = "text";
        } else if (kd(r)) {
            a = "element";
        }
    }
    if (s !== null && a !== null) {
        n.set(s, o, a);
    } else {
        o = e.getIndexWithinParent();
        if (o === -1) {
            o = t.getChildrenSize();
        }
        n.set(t.__key, o, "element");
    }
}

function Qqh(n, e, t, i, r) {
    if (n.type === "text") {
        n.key = t;
        if (!e) {
            n.offset += r;
        }
    } else if (n.offset > i.getIndexWithinParent()) {
        n.offset -= 1;
    }
}

function jfA(n, e, t, i, r, s, o) {
    const a = i.anchorNode;
    const l = i.focusNode;
    const u = i.anchorOffset;
    const d = i.focusOffset;
    const m = document.activeElement;
    if (r.has("collaboration") && m !== s || m !== null && m3c(m) || r.has("preserve-focus") || m !== null && !s.contains(m) && (m.tagName === "INPUT" || m.tagName === "TEXTAREA" || m.isContentEditable === true || m.closest("[contenteditable=\"true\"]") !== null)) {
        return;
    }
    if (!dd(e)) {
        if (n !== null && v6n(t, a, l)) {
            i.removeAllRanges();
        }
        return;
    }
    const p = e.anchor;
    const g = e.focus;
    const f = p.key;
    const A = g.key;
    const w = bUo(t, f);
    const C = bUo(t, A);
    const x = p.offset;
    const I = g.offset;
    const B = e.format;
    const R = e.style;
    const N = e.isCollapsed();
    let M = w;
    let O = C;
    let $ = false;
    if (p.type === "text") {
        M = pUo(w);
        const H = p.getNode();
        $ = H.getFormat() !== B || H.getStyle() !== R;
    } else if (dd(n) && n.anchor.type === "text") {
        $ = true;
    }
    if (g.type === "text") {
        O = pUo(C);
    }
    if (M !== null && O !== null && (N && (n === null || $ || dd(n) && (n.format !== B || n.style !== R)) && SfA(B, R, x, f, performance.now()), u !== x || d !== I || a !== M || l !== O || i.type === "Range" && !!N || !((m === null || !s.contains(m)) && s.focus({
            preventScroll: true
        }), p.type !== "element"))) {
        try {
            i.setBaseAndExtent(M, x, O, I);
        } catch {}
        if (!r.has("skip-scroll-into-view") && e.isCollapsed() && s !== null && s === document.activeElement) {
            const H = e instanceof k9t && e.anchor.type === "element" ? M.childNodes[x] || null : i.rangeCount > 0 ? i.getRangeAt(0) : null;
            if (H !== null) {
                let W;
                if (H instanceof Text) {
                    const z = document.createRange();
                    z.selectNode(H);
                    W = z.getBoundingClientRect();
                } else {
                    W = H.getBoundingClientRect();
                }
                qbA(t, W, s);
            }
        }
        CfA();
    }
}

function v9t(n, e) {
    let t = Wd();
    if (t === null) {
        t = lf().selectEnd();
    }
    return t.insertNodes(n, e);
}

function zfA(n, e, t) {
    const i = [];
    let r = null;
    let s = null;

    function o(u, d, m) {
        const p = {
            cell: m,
            startColumn: d,
            startRow: u
        };
        const g = m.__rowSpan;
        const f = m.__colSpan;
        for (let A = 0; A < g; A++) {
            if (i[u + A] === undefined) {
                i[u + A] = [];
            }
            for (let w = 0; w < f; w++) {
                i[u + A][d + w] = p;
            }
        }
        if (e.is(m)) {
            r = p;
        }
        if (t.is(m)) {
            s = p;
        }
    }

    function a(u, d) {
        return i[u] === undefined || i[u][d] === undefined;
    }
    const l = n.getChildren();
    for (let u = 0; u < l.length; u++) {
        const d = l[u];
        Yg(bvt(d), "Expected GridNode children to be GridRowNode");
        const m = d.getChildren();
        let p = 0;
        for (const g of m) {
            for (Yg(_ve(g), "Expected GridRowNode children to be GridCellNode"); !a(u, p);) {
                p++;
            }
            o(u, p, g);
            p += g.__colSpan;
        }
    }
    Yg(r !== null, "Anchor not found in Grid");
    Yg(s !== null, "Focus not found in Grid");
    return [i, r, s];
}

function A9t() {
    return Yte || tJ !== null && tJ._readOnly;
}

function aae() {
    if (Yte) {
        Yg(false, "Cannot use method in read-only mode.");
    }
}

function jqh() {
    if (D6n > 99) {
        Yg(false, "One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.");
    }
}

function K9e() {
    if (tJ === null) {
        Yg(false, "Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update() or editorState.read().");
    }
    return tJ;
}

function G6() {
    if (nJ === null) {
        Yg(false, "Unable to find an active editor. This method can only be used synchronously during the callback of editor.update().");
    }
    return nJ;
}

function zqh() {
    return nJ;
}

function Vqh(n, e, t) {
    const i = e.__type;
    const r = rbA(n, i);
    let s = t.get(i);
    if (s === undefined) {
        s = Array.from(r.transforms);
        t.set(i, s);
    }
    const o = s.length;
    for (let a = 0; a < o && (s[a](e), !!e.isAttached()); a++);
}

function Kqh(n, e) {
    return n !== undefined && n.__key !== e && n.isAttached();
}

function VfA(n, e) {
    const t = e._dirtyLeaves;
    const i = n._nodeMap;
    for (const r of t) {
        const s = i.get(r);
        if (jd(s) && s.isAttached() && s.isSimpleText() && !s.isUnmergeable()) {
            Tqh(s);
        }
    }
}

function KfA(n, e) {
    const t = e._dirtyLeaves;
    const i = e._dirtyElements;
    const r = n._nodeMap;
    const s = oYe();
    const o = new Map();
    let a = t;
    let l = a.size;
    let u = i;
    let d = u.size;
    while (l > 0 || d > 0) {
        if (l > 0) {
            e._dirtyLeaves = new Set();
            for (const m of a) {
                const p = r.get(m);
                if (jd(p) && p.isAttached() && p.isSimpleText() && !p.isUnmergeable()) {
                    Tqh(p);
                }
                if (p !== undefined && Kqh(p, s)) {
                    Vqh(e, p, o);
                }
                t.add(m);
            }
            a = e._dirtyLeaves;
            l = a.size;
            if (l > 0) {
                D6n++;
                continue;
            }
        }
        e._dirtyLeaves = new Set();
        e._dirtyElements = new Map();
        for (const m of u) {
            const p = m[0];
            const g = m[1];
            if (p !== "root" && !g) {
                continue;
            }
            const f = r.get(p);
            if (f !== undefined && Kqh(f, s)) {
                Vqh(e, f, o);
            }
            i.set(p, g);
        }
        a = e._dirtyLeaves;
        l = a.size;
        u = e._dirtyElements;
        d = u.size;
        D6n++;
    }
    e._dirtyLeaves = t;
    e._dirtyElements = i;
}

function YfA(n) {
    return h3c(n, G6()._nodes);
}

function h3c(n, e) {
    const t = n.type;
    const i = e.get(t);
    if (i === undefined) {
        Yg(false, "parseEditorState: type \"%s\" + not found", t);
    }
    const r = i.klass;
    if (n.type !== r.getType()) {
        Yg(false, "LexicalNode: Node %s does not implement .importJSON().", r.name);
    }
    const s = r.importJSON(n);
    const o = n.children;
    if (kd(s) && Array.isArray(o)) {
        for (let a = 0; a < o.length; a++) {
            const l = o[a];
            const u = h3c(l, e);
            s.append(u);
        }
    }
    return s;
}

function ZfA(n, e, t) {
    const i = ZOc();
    const r = tJ;
    const s = Yte;
    const o = nJ;
    const a = e._dirtyElements;
    const l = e._dirtyLeaves;
    const u = e._cloneNotNeeded;
    const d = e._dirtyType;
    e._dirtyElements = new Map();
    e._dirtyLeaves = new Set();
    e._cloneNotNeeded = new Set();
    e._dirtyType = 0;
    tJ = i;
    Yte = false;
    nJ = e;
    try {
        const m = e._nodes;
        const p = n.root;
        h3c(p, m);
        if (t) {
            t();
        }
        i._readOnly = true;
    } catch (m) {
        if (m instanceof Error) {
            e._onError(m);
        }
    } finally {
        e._dirtyElements = a;
        e._dirtyLeaves = l;
        e._cloneNotNeeded = u;
        e._dirtyType = d;
        tJ = r;
        Yte = s;
        nJ = o;
    }
    return i;
}

function Yqh(n, e) {
    const t = tJ;
    const i = Yte;
    const r = nJ;
    tJ = n;
    Yte = true;
    nJ = null;
    try {
        return e();
    } finally {
        tJ = t;
        Yte = i;
        nJ = r;
    }
}

function gvt(n) {
    const e = n._pendingEditorState;
    const t = n._rootElement;
    const i = n._headless || t === null;
    if (e === null) {
        return;
    }
    const r = n._editorState;
    const s = r._selection;
    const o = e._selection;
    const a = n._dirtyType !== fYe;
    const l = tJ;
    const u = Yte;
    const d = nJ;
    const m = n._updating;
    const p = n._observer;
    let g = null;
    n._pendingEditorState = null;
    n._editorState = e;
    if (!i && a && p !== null) {
        nJ = n;
        tJ = e;
        Yte = false;
        n._updating = true;
        try {
            const N = n._dirtyType;
            const M = n._dirtyElements;
            const O = n._dirtyLeaves;
            p.disconnect();
            g = OfA(r, e, n, N, M, O);
        } catch (N) {
            if (N instanceof Error) {
                n._onError(N);
            }
            if (!IUo) {
                dqh(n, null, t, e);
                kqh(n);
                n._dirtyType = Evt;
                IUo = true;
                gvt(n);
                IUo = false;
            } else {
                throw N;
            }
            return;
        } finally {
            p.observe(t, q3c);
            n._updating = m;
            tJ = l;
            Yte = u;
            nJ = d;
        }
    }
    e._readOnly ||= true;
    const f = n._dirtyLeaves;
    const A = n._dirtyElements;
    const w = n._normalizedNodes;
    const C = n._updateTags;
    const x = n._deferred;
    const I = e._nodeMap.size;
    if (a) {
        n._dirtyType = fYe;
        n._cloneNotNeeded.clear();
        n._dirtyLeaves = new Set();
        n._dirtyElements = new Map();
        n._normalizedNodes = new Set();
        n._updateTags = new Set();
    }
    kfA(n, e);
    const B = i ? null : Y9e(n);
    if (n._editable && B !== null && (a || o === null || o.dirty)) {
        nJ = n;
        tJ = e;
        try {
            if (p !== null) {
                p.disconnect();
            }
            if (a || o === null || o.dirty) {
                const N = n._blockCursorElement;
                if (N !== null) {
                    x3c(N, n, t);
                }
                jfA(s, o, n, B, C, t, I);
            }
            jbA(n, t, o);
            if (p !== null) {
                p.observe(t, q3c);
            }
        } finally {
            nJ = d;
            tJ = l;
        }
    }
    if (g !== null) {
        ebA(n, r, e, g, C, f);
    }
    if (!dd(o) && o !== null && (s === null || !s.is(o))) {
        n.dispatchCommand(B6n, undefined);
    }
    const R = n._pendingDecorators;
    if (R !== null) {
        n._decorators = R;
        n._pendingDecorators = null;
        b6n("decorator", n, true, R);
    }
    XfA(n, r, e);
    b6n("update", n, true, {
        dirtyElements: A,
        dirtyLeaves: f,
        editorState: e,
        normalizedNodes: w,
        prevEditorState: r,
        tags: C
    });
    nbA(n, x);
    tbA(n);
}

function XfA(n, e, t) {
    const i = o7h(e);
    const r = o7h(t);
    if (i !== r) {
        b6n("textcontent", n, true, r);
    }
}

function ebA(n, e, t, i, r, s) {
    const o = Array.from(n._listeners.mutation);
    const a = o.length;
    for (let l = 0; l < a; l++) {
        const [u, d] = o[l];
        const m = i.get(d);
        if (m !== undefined) {
            u(m, {
                dirtyLeaves: s,
                updateTags: r
            });
        }
    }
}

function b6n(n, e, t, ...i) {
    const r = e._updating;
    e._updating = t;
    try {
        const s = Array.from(e._listeners[n]);
        for (let o = 0; o < s.length; o++) {
            s[o].apply(null, i);
        }
    } finally {
        e._updating = r;
    }
}

function Zqh(n, e, t) {
    if (n._updating === false || nJ !== n) {
        let r = false;
        n.update(() => {
            r = Zqh(n, e, t);
        });
        return r;
    }
    const i = f3c(n);
    for (let r = 4; r >= 0; r--) {
        for (let s = 0; s < i.length; s++) {
            const l = i[s]._commands.get(e);
            if (l !== undefined) {
                const u = l[r];
                if (u !== undefined) {
                    const d = Array.from(u);
                    const m = d.length;
                    for (let p = 0; p < m; p++) {
                        if (d[p](t, n) === true) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}

function tbA(n) {
    const e = n._updates;
    if (e.length !== 0) {
        const t = e.shift();
        if (t) {
            const [i, r] = t;
            e7h(n, i, r);
        }
    }
}

function nbA(n, e) {
    n._deferred = [];
    if (e.length !== 0) {
        const t = n._updating;
        n._updating = true;
        try {
            for (let i = 0; i < e.length; i++) {
                e[i]();
            }
        } finally {
            n._updating = t;
        }
    }
}

function Xqh(n, e) {
    const t = n._updates;
    let i = e || false;
    while (t.length !== 0) {
        const r = t.shift();
        if (r) {
            const [s, o] = r;
            let a;
            let l;
            if (o !== undefined) {
                a = o.onUpdate;
                l = o.tag;
                if (o.skipTransforms) {
                    i = true;
                }
                if (a) {
                    n._deferred.push(a);
                }
                if (l) {
                    n._updateTags.add(l);
                }
            }
            s();
        }
    }
    return i;
}

function e7h(n, e, t) {
    const i = n._updateTags;
    let r;
    let s;
    let o = false;
    let a = false;
    if (t !== undefined) {
        r = t.onUpdate;
        s = t.tag;
        if (s != null) {
            i.add(s);
        }
        o = t.skipTransforms || false;
        a = t.discrete || false;
    }
    if (r) {
        n._deferred.push(r);
    }
    const l = n._editorState;
    let u = n._pendingEditorState;
    let d = false;
    if (u === null || u._readOnly) {
        u = n._pendingEditorState = lfA(u || l);
        d = true;
    }
    u._flushSync = a;
    const m = tJ;
    const p = Yte;
    const g = nJ;
    const f = n._updating;
    tJ = u;
    Yte = false;
    n._updating = true;
    nJ = n;
    try {
        if (d) {
            if (n._headless) {
                if (l._selection != null) {
                    u._selection = l._selection.clone();
                }
            } else {
                u._selection = WfA(n);
            }
        }
        const w = n._compositionKey;
        e();
        o = Xqh(n, o);
        QfA(u, n);
        if (n._dirtyType !== fYe) {
            if (o) {
                VfA(u, n);
            } else {
                KfA(u, n);
            }
            Xqh(n);
            EfA(l, u, n._dirtyLeaves, n._dirtyElements);
        }
        const C = n._compositionKey;
        if (w !== C) {
            u._flushSync = true;
        }
        const x = u._selection;
        if (dd(x)) {
            const I = u._nodeMap;
            const B = x.anchor.key;
            const R = x.focus.key;
            if (I.get(B) === undefined || I.get(R) === undefined) {
                Yg(false, "updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.");
            }
        } else if (jte(x) && x._nodes.size === 0) {
            u._selection = null;
        }
    } catch (w) {
        if (w instanceof Error) {
            n._onError(w);
        }
        n._pendingEditorState = l;
        n._dirtyType = Evt;
        n._cloneNotNeeded.clear();
        n._dirtyLeaves = new Set();
        n._dirtyElements.clear();
        gvt(n);
        return;
    } finally {
        tJ = m;
        Yte = p;
        nJ = g;
        n._updating = f;
        D6n = 0;
    }
    if (n._dirtyType !== fYe || cfA(u, n)) {
        if (u._flushSync) {
            u._flushSync = false;
            gvt(n);
        } else if (d) {
            T7h(() => {
                gvt(n);
            });
        }
    } else {
        u._flushSync = false;
        if (d) {
            i.clear();
            n._deferred = [];
            n._pendingEditorState = null;
        }
    }
}

function ahe(n, e, t) {
    if (n._updating) {
        n._updates.push([e, t]);
    } else {
        e7h(n, e, t);
    }
}

function ibA() {
    return "" + x7h++;
}

function rbA(n, e) {
    const t = n._nodes.get(e);
    if (t === undefined) {
        Yg(false, "registeredNode: Type %s not found", e);
    }
    return t;
}

function sbA(n) {
    return ZD(jRe(n));
}

function m3c(n) {
    const e = document.activeElement;
    if (e === null) {
        return false;
    }
    const t = e.nodeName;
    return ZD(jRe(n)) && (t === "INPUT" || t === "TEXTAREA" || e.contentEditable === "true" && e.__lexicalEditor == null);
}

function v6n(n, e, t) {
    const i = n.getRootElement();
    try {
        return i !== null && i.contains(e) && i.contains(t) && e !== null && !m3c(e) && t7h(e) === n;
    } catch {
        return false;
    }
}

function t7h(n) {
    let e = n;
    while (e != null) {
        const t = e.__lexicalEditor;
        if (t != null) {
            return t;
        }
        e = vUo(e);
    }
    return null;
}

function obA(n) {
    if (RHh.test(n)) {
        return "rtl";
    } else if (PHh.test(n)) {
        return "ltr";
    } else {
        return null;
    }
}

function p3c(n) {
    return n.isToken() || n.isSegmented();
}

function abA(n) {
    return n.nodeType === XRe;
}

function pUo(n) {
    let e = n;
    while (e != null) {
        if (abA(e)) {
            return e;
        }
        e = e.firstChild;
    }
    return null;
}

function n7h(n, e, t) {
    const i = bYe[e];
    if (n & i && (t === null || (t & i) === 0)) {
        return n ^ i;
    } else if (t === null || t & i) {
        return n | i;
    } else {
        return n;
    }
}

function g3c(n) {
    return jd(n) || x3(n) || ZD(n);
}

function i7h(n, e) {
    if (e != null) {
        n.__key = e;
        return;
    }
    aae();
    jqh();
    const t = G6();
    const i = K9e();
    const r = ibA();
    i._nodeMap.set(r, n);
    if (kd(n)) {
        t._dirtyElements.set(r, true);
    } else {
        t._dirtyLeaves.add(r);
    }
    t._cloneNotNeeded.add(r);
    t._dirtyType = e5c;
    n.__key = r;
}

function cbA(n, e, t) {
    let i = n;
    while (i !== null) {
        if (t.has(i)) {
            return;
        }
        const r = e.get(i);
        if (r === undefined) {
            break;
        }
        t.set(i, false);
        i = r.__parent;
    }
}

function fvt(n) {
    const e = n.getParent();
    if (e !== null) {
        const t = n.getWritable();
        const i = e.getWritable();
        const r = n.getPreviousSibling();
        const s = n.getNextSibling();
        if (r === null) {
            if (s !== null) {
                const o = s.getWritable();
                i.__first = s.__key;
                o.__prev = null;
            } else {
                i.__first = null;
            }
        } else {
            const o = r.getWritable();
            if (s !== null) {
                const a = s.getWritable();
                a.__prev = o.__key;
                o.__next = a.__key;
            } else {
                o.__next = null;
            }
            t.__prev = null;
        }
        if (s === null) {
            if (r !== null) {
                const o = r.getWritable();
                i.__last = r.__key;
                o.__next = null;
            } else {
                i.__last = null;
            }
        } else {
            const o = s.getWritable();
            if (r !== null) {
                const a = r.getWritable();
                a.__next = o.__key;
                o.__prev = a.__key;
            } else {
                o.__prev = null;
            }
            t.__next = null;
        }
        i.__size--;
        t.__parent = null;
    }
}

function gUo(n) {
    jqh();
    const e = n.getLatest();
    const t = e.__parent;
    const i = K9e();
    const r = G6();
    const s = i._nodeMap;
    const o = r._dirtyElements;
    if (t !== null) {
        cbA(t, s, o);
    }
    const a = e.__key;
    r._dirtyType = e5c;
    if (kd(n)) {
        o.set(a, true);
    } else {
        r._dirtyLeaves.add(a);
    }
}

function lbA(n) {
    const e = n.getPreviousSibling();
    const t = n.getNextSibling();
    if (e !== null) {
        gUo(e);
    }
    if (t !== null) {
        gUo(t);
    }
}

function YY(n) {
    aae();
    const e = G6();
    const t = e._compositionKey;
    if (n !== t) {
        e._compositionKey = n;
        if (t !== null) {
            const i = jB(t);
            if (i !== null) {
                i.getWritable();
            }
        }
        if (n !== null) {
            const i = jB(n);
            if (i !== null) {
                i.getWritable();
            }
        }
    }
}

function oYe() {
    if (A9t()) {
        return null;
    } else {
        return G6()._compositionKey;
    }
}

function jB(n, e) {
    const i = (e || K9e())._nodeMap.get(n);
    if (i === undefined) {
        return null;
    } else {
        return i;
    }
}

function r7h(n, e) {
    const t = G6();
    const i = n[`__lexicalKey_${t._key}`];
    if (i !== undefined) {
        return jB(i, e);
    } else {
        return null;
    }
}

function jRe(n, e) {
    let t = n;
    while (t != null) {
        const i = r7h(t, e);
        if (i !== null) {
            return i;
        }
        t = vUo(t);
    }
    return null;
}

function s7h(n) {
    const e = n._decorators;
    const t = Object.assign({}, e);
    n._pendingDecorators = t;
    return t;
}

function o7h(n) {
    return n.read(() => lf().getTextContent());
}

function ubA(n, e) {
    ahe(n, () => {
        const t = K9e();
        if (t.isEmpty()) {
            return;
        }
        if (e === "root") {
            lf().markDirty();
            return;
        }
        const i = t._nodeMap;
        for (const [, r] of i) {
            r.markDirty();
        }
    }, n._pendingEditorState === null ? {
        tag: "history-merge"
    } : undefined);
}

function lf() {
    return a7h(K9e());
}

function a7h(n) {
    return n._nodeMap.get("root");
}

function cae(n) {
    aae();
    const e = K9e();
    if (n !== null) {
        n.dirty = true;
        n._cachedNodes = null;
    }
    e._selection = n;
}

function dbA() {
    aae();
    const n = G6();
    Sqh(n);
}

function y9t(n) {
    const e = G6();
    const t = hbA(n, e);
    if (t === null) {
        const i = e.getRootElement();
        if (n === i) {
            return jB("root");
        } else {
            return null;
        }
    }
    return jB(t);
}

function c7h(n, e) {
    if (e) {
        return n.getTextContentSize();
    } else {
        return 0;
    }
}

function hbA(n, e) {
    let t = n;
    while (t != null) {
        const i = t[`__lexicalKey_${e._key}`];
        if (i !== undefined) {
            return i;
        }
        t = vUo(t);
    }
    return null;
}

function l7h(n) {
    return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(n);
}

function f3c(n) {
    const e = [];
    let t = n;
    while (t !== null) {
        e.push(t);
        t = t._parentEditor;
    }
    return e;
}

function u7h() {
    return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}

function d7h(n) {
    if (n.nodeType === XRe) {
        return n.nodeValue;
    } else {
        return null;
    }
}

function b3c(n, e, t) {
    const i = Y9e(e);
    if (i === null) {
        return;
    }
    const r = i.anchorNode;
    let {
        anchorOffset: s,
        focusOffset: o
    } = i;
    if (r !== null) {
        let a = d7h(r);
        const l = jRe(r);
        if (a !== null && jd(l)) {
            if (a === H6n && t) {
                const u = t.length;
                a = t;
                s = u;
                o = u;
            }
            if (a !== null) {
                v3c(l, a, s, o, n);
            }
        }
    }
}

function v3c(n, e, t, i, r) {
    let s = n;
    if (s.isAttached() && (r || !s.isDirty())) {
        const o = s.isComposing();
        let a = e;
        if ((o || r) && e[e.length - 1] === H6n) {
            a = e.slice(0, -1);
        }
        const l = s.getTextContent();
        if (r || a !== l) {
            if (a === "") {
                YY(null);
                if (!g9t && !f9t && !b9t) {
                    const A = G6();
                    setTimeout(() => {
                        A.update(() => {
                            if (s.isAttached()) {
                                s.remove();
                            }
                        });
                    }, 20);
                } else {
                    s.remove();
                }
                return;
            }
            const u = s.getParent();
            const d = dUo();
            const m = s.getTextContentSize();
            const p = oYe();
            const g = s.getKey();
            if (s.isToken() || p !== null && g === p && !o || dd(d) && (u !== null && !u.canInsertTextBefore() && d.anchor.offset === 0 || d.anchor.key === n.__key && d.anchor.offset === 0 && !s.canInsertTextBefore() || d.focus.key === n.__key && d.focus.offset === m && !s.canInsertTextAfter())) {
                s.markDirty();
                return;
            }
            const f = Wd();
            if (!dd(f) || t === null || i === null) {
                s.setTextContent(a);
                return;
            }
            f.setTextNodeRange(s, t, s, i);
            if (s.isSegmented()) {
                const A = s.getTextContent();
                const w = OA(A);
                s.replace(w);
                s = w;
            }
            s.setTextContent(a);
        }
    }
}

function mbA(n) {
    const e = n.getPreviousSibling();
    return (jd(e) || kd(e) && e.isInline()) && !e.canInsertTextAfter();
}

function pbA(n, e) {
    if (e.isSegmented()) {
        return true;
    }
    if (!n.isCollapsed()) {
        return false;
    }
    const t = n.anchor.offset;
    const i = e.getParentOrThrow();
    const r = e.isToken();
    if (t === 0) {
        return !e.canInsertTextBefore() || !i.canInsertTextBefore() || r || mbA(e);
    } else if (t === e.getTextContentSize()) {
        return !e.canInsertTextAfter() || !i.canInsertTextAfter() || r;
    } else {
        return false;
    }
}

function gbA(n, e, t, i) {
    return n === 9 && !e && !t && !i;
}

function fbA(n, e, t, i) {
    return n === 66 && !e && A6n(t, i);
}

function bbA(n, e, t, i) {
    return n === 73 && !e && A6n(t, i);
}

function vbA(n, e, t, i) {
    return n === 85 && !e && A6n(t, i);
}

function AbA(n, e) {
    return m7h(n) && !e;
}

function ybA(n, e) {
    return m7h(n) && e;
}

function wbA(n, e) {
    return oae && e && n === 79;
}

function _bA(n, e, t) {
    return y6n(n) && (oae ? e : t);
}

function CbA(n, e, t) {
    return w6n(n) && (oae ? e : t);
}

function SbA(n, e) {
    return oae && e && y6n(n);
}

function kbA(n, e) {
    return oae && e && w6n(n);
}

function EbA(n, e, t, i) {
    if (oae) {
        if (e || t) {
            return false;
        } else {
            return y6n(n) || n === 72 && i;
        }
    } else if (i || e || t) {
        return false;
    } else {
        return y6n(n);
    }
}

function xbA(n, e, t, i, r) {
    if (oae) {
        if (t || i || r) {
            return false;
        } else {
            return w6n(n) || n === 68 && e;
        }
    } else if (e || i || r) {
        return false;
    } else {
        return w6n(n);
    }
}

function TbA(n, e, t, i) {
    return n === 90 && !e && A6n(t, i);
}

function IbA(n, e, t, i) {
    if (oae) {
        return n === 90 && t && e;
    } else {
        return n === 89 && i || n === 90 && i && e;
    }
}

function DbA(n, e, t, i) {
    if (e) {
        return false;
    } else if (n === 67) {
        if (oae) {
            return t;
        } else {
            return i;
        }
    } else {
        return false;
    }
}

function h7h(n, e, t, i) {
    if (e) {
        return false;
    } else if (n === 88) {
        if (oae) {
            return t;
        } else {
            return i;
        }
    } else {
        return false;
    }
}

function A3c(n) {
    return n === 37;
}

function y3c(n) {
    return n === 39;
}

function w3c(n) {
    return n === 38;
}

function _3c(n) {
    return n === 40;
}

function BbA(n, e, t, i) {
    return A3c(n) && !e && !i && !t;
}

function RbA(n, e, t, i, r) {
    return A3c(n) && !i && !t && (e || r);
}

function PbA(n, e, t, i) {
    return y3c(n) && !e && !i && !t;
}

function LbA(n, e, t, i, r) {
    return y3c(n) && !i && !t && (e || r);
}

function NbA(n, e, t) {
    return w3c(n) && !e && !t;
}

function MbA(n, e, t) {
    return _3c(n) && !e && !t;
}

function FbA(n, e, t, i) {
    return n || e || t || i;
}

function ObA(n) {
    return n === 32;
}

function A6n(n, e) {
    if (oae) {
        return n;
    } else {
        return e;
    }
}

function m7h(n) {
    return n === 13;
}

function y6n(n) {
    return n === 8;
}

function UbA(n) {
    return n === 27;
}

function w6n(n) {
    return n === 46;
}

function $bA(n, e, t) {
    return n === 65 && A6n(e, t);
}

function _6n(n, e) {
    const t = n[e];
    if (typeof t == "string") {
        const i = t.split(" ");
        n[e] = i;
        return i;
    }
    return t;
}

function C3c(n, e, t, i, r) {
    if (t.size === 0) {
        return;
    }
    const s = i.__type;
    const o = i.__key;
    const a = e.get(s);
    if (a === undefined) {
        Yg(false, "Type %s not in registeredNodes", s);
    }
    const l = a.klass;
    let u = n.get(l);
    if (u === undefined) {
        u = new Map();
        n.set(l, u);
    }
    const d = u.get(o);
    const m = d === "destroyed" && r === "created";
    if (d === undefined || m) {
        u.set(o, m ? "updated" : r);
    }
}

function p7h(n, e, t) {
    const i = n.getParent();
    let r = t;
    let s = n;
    if (i !== null) {
        if (e && t === 0) {
            r = s.getIndexWithinParent();
            s = i;
        } else if (!e && t === s.getChildrenSize()) {
            r = s.getIndexWithinParent() + 1;
            s = i;
        }
    }
    return s.getChildAtIndex(e ? r - 1 : r);
}

function C6n(n, e) {
    const t = n.offset;
    if (n.type === "element") {
        const i = n.getNode();
        return p7h(i, e, t);
    } else {
        const i = n.getNode();
        if (e && t === 0 || !e && t === i.getTextContentSize()) {
            const r = e ? i.getPreviousSibling() : i.getNextSibling();
            if (r === null) {
                return p7h(i.getParentOrThrow(), e, i.getIndexWithinParent() + (e ? 0 : 1));
            } else {
                return r;
            }
        }
    }
    return null;
}

function g7h(n) {
    const e = S6n(n).event;
    const t = e && e.inputType;
    return t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}

function Fd(n, e, t) {
    return Zqh(n, e, t);
}

function fUo(n) {
    return !ZY(n) && !n.isLastChild() && !n.isInline();
}

function bUo(n, e) {
    const t = n._keyToDOMMap.get(e);
    if (t === undefined) {
        Yg(false, "Reconciliation: could not find DOM element for node key %s", e);
    }
    return t;
}

function vUo(n) {
    const e = n.assignedSlot || n.parentElement;
    if (e !== null && e.nodeType === 11) {
        return e.host;
    } else {
        return e;
    }
}

function qbA(n, e, t) {
    const i = Jy();
    const r = i.defaultView;
    if (r === null) {
        return;
    }
    let {
        top: s,
        bottom: o
    } = e;
    let a = 0;
    let l = 0;
    let u = t;
    while (u !== null) {
        const d = u === i.body;
        if (d) {
            a = 0;
            l = S6n(n).innerHeight;
        } else {
            const p = u.getBoundingClientRect();
            a = p.top;
            l = p.bottom;
        }
        let m = 0;
        if (s < a) {
            m = -(a - s);
        } else if (o > l) {
            m = o - l;
        }
        if (m !== 0) {
            if (d) {
                r.scrollBy(0, m);
            } else {
                const p = u.scrollTop;
                u.scrollTop += m;
                const g = u.scrollTop - p;
                s -= g;
                o -= g;
            }
        }
        if (d) {
            break;
        }
        u = vUo(u);
    }
}

function HbA(n, e = 0) {
    if (e !== 0) {
        Yg(false, "TODO");
    }
    const t = Wd();
    if (!dd(t) || !kd(n)) {
        return t;
    }
    const {
        anchor: i,
        focus: r
    } = t;
    const s = i.getNode();
    const o = r.getNode();
    if (S3c(s, n)) {
        i.set(n.__key, 0, "element");
    }
    if (S3c(o, n)) {
        r.set(n.__key, 0, "element");
    }
    return t;
}

function S3c(n, e) {
    let t = n.getParent();
    while (t !== null) {
        if (t.is(e)) {
            return true;
        }
        t = t.getParent();
    }
    return false;
}

function JbA(n) {
    return n.ownerDocument.defaultView ?? null;
}

function S6n(n) {
    const e = n._window;
    const t = n.getRootElement();
    if (e !== null) {
        if (t !== null) {
            const i = t.ownerDocument;
            if (e.document !== i) {
                const r = i.defaultView;
                if (r !== null) {
                    return r;
                }
            }
        }
        return e;
    }
    if (t !== null) {
        const i = t.ownerDocument.defaultView;
        if (i !== null) {
            return i;
        }
    }
    Yg(false, "window object not found");
}

function GbA(n) {
    let e = n.getParentOrThrow();
    while (e !== null) {
        if (zte(e)) {
            return e;
        }
        e = e.getParentOrThrow();
    }
    return e;
}

function zte(n) {
    return ZY(n) || kd(n) && n.isShadowRoot();
}

function WbA(n) {
    const e = n.constructor.clone(n);
    i7h(e, null);
    return e;
}

function che(n) {
    const e = G6();
    const t = n.constructor.getType();
    const i = e._nodes.get(t);
    if (i === undefined) {
        Yg(false, "$initializeNode failed. Ensure node has been registered to the editor. You can do this by passing the node class via the \"nodes\" array in the editor config.");
    }
    const r = i.replace;
    if (r !== null) {
        const s = r(n);
        if (!(s instanceof n.constructor)) {
            Yg(false, "$initializeNode failed. Ensure replacement node is a subclass of the original node.");
        }
        return s;
    }
    return n;
}

function k3c(n, e) {
    const t = n.getParent();
    if (ZY(t) && !kd(e) && !ZD(e)) {
        Yg(false, "Only element or decorator nodes can be inserted in to the root node");
    }
}

function QbA(n) {
    const e = n.theme;
    const t = bi.document.createElement("div");
    t.contentEditable = "false";
    t.setAttribute("data-lexical-cursor", "true");
    let i = e.blockCursor;
    if (i !== undefined) {
        if (typeof i == "string") {
            const r = i.split(" ");
            i = e.blockCursor = r;
        }
        if (i !== undefined) {
            t.classList.add(...i);
        }
    }
    return t;
}

function E3c(n) {
    return (ZD(n) || kd(n) && !n.canBeEmpty()) && !n.isInline();
}

function x3c(n, e, t) {
    t.style.removeProperty("caret-color");
    e._blockCursorElement = null;
    const i = n.parentElement;
    if (i !== null) {
        i.removeChild(n);
    }
}

function jbA(n, e, t) {
    let i = n._blockCursorElement;
    if (dd(t) && t.isCollapsed() && t.anchor.type === "element" && e.contains(document.activeElement)) {
        const r = t.anchor;
        const s = r.getNode();
        const o = r.offset;
        const a = s.getChildrenSize();
        let l = false;
        let u = null;
        if (o === a) {
            const d = s.getChildAtIndex(o - 1);
            if (E3c(d)) {
                l = true;
            }
        } else {
            const d = s.getChildAtIndex(o);
            if (E3c(d)) {
                const m = d.getPreviousSibling();
                if (m === null || E3c(m)) {
                    l = true;
                    u = n.getElementByKey(d.__key);
                }
            }
        }
        if (l) {
            const d = n.getElementByKey(s.__key);
            if (i === null) {
                n._blockCursorElement = i = QbA(n._config);
            }
            e.style.caretColor = "transparent";
            if (u === null) {
                d.appendChild(i);
            } else {
                d.insertBefore(i, u);
            }
            return;
        }
    }
    if (i !== null) {
        x3c(i, n, e);
    }
}

function T3c(n) {
    if (WRe) {
        return (n || window).getSelection();
    } else {
        return null;
    }
}

function Y9e(n) {
    const e = n._window;
    const t = n.getRootElement();
    return T3c(e === null && t === null ? null : S6n(n));
}

function f7h(n, e) {
    let t = n.getChildAtIndex(e);
    if (t == null) {
        t = n;
    }
    Yg(!zte(n), "Can not call $splitNode() on root element");
    const i = o => {
        const a = o.getParentOrThrow();
        const l = zte(a);
        const u = o === t && !l ? o : WbA(o);
        if (l) {
            o.insertAfter(u);
            return [o, u, u];
        } {
            const [d, m, p] = i(a);
            const g = o.getNextSiblings();
            p.append(u, ...g);
            return [d, m, u];
        }
    };
    const [r, s] = i(t);
    return [r, s];
}

function b7h(n, e) {
    let t = n;
    while (t !== lf() && t != null) {
        if (e(t)) {
            return t;
        }
        t = t.getParent();
    }
    return null;
}

function zbA(n) {
    const e = [];
    const t = [n];
    while (t.length > 0) {
        const i = t.pop();
        Yg(i !== undefined, "Stack.length > 0; can't be undefined");
        if (kd(i)) {
            t.unshift(...i.getChildren());
        }
        if (i !== n) {
            e.push(i);
        }
    }
    return e;
}

function Uh(n) {
    return {};
}

function I3c(n, e) {
    if (e & OUo) {
        return "code";
    } else if (e & qUo) {
        return "mark";
    } else if (e & UUo) {
        return "sub";
    } else if (e & $Uo) {
        return "sup";
    } else {
        return null;
    }
}

function D3c(n, e) {
    if (e & MUo) {
        return "strong";
    } else if (e & FUo) {
        return "em";
    } else {
        return "span";
    }
}

function v7h(n, e, t, i, r) {
    const s = i.classList;
    let o = _6n(r, "base");
    if (o !== undefined) {
        s.add(...o);
    }
    o = _6n(r, "underlineStrikethrough");
    let a = false;
    const l = e & $6n && e & U6n;
    const u = t & $6n && t & U6n;
    if (o !== undefined) {
        if (u) {
            a = true;
            if (!l) {
                s.add(...o);
            }
        } else if (l) {
            s.remove(...o);
        }
    }
    for (const d in bYe) {
        const p = bYe[d];
        o = _6n(r, d);
        if (o !== undefined) {
            if (t & p) {
                if (a && (d === "underline" || d === "strikethrough")) {
                    if (e & p) {
                        s.remove(...o);
                    }
                    continue;
                }
                if ((e & p) === 0 || l && d === "underline" || d === "strikethrough") {
                    s.add(...o);
                }
            } else if (e & p) {
                s.remove(...o);
            }
        }
    }
}

function VbA(n, e) {
    const t = n.length;
    const i = e.length;
    let r = 0;
    let s = 0;
    while (r < t && r < i && n[r] === e[r]) {
        r++;
    }
    while (s + r < t && s + r < i && n[t - s - 1] === e[i - s - 1]) {
        s++;
    }
    return [r, t - r - s, e.slice(r, i - s)];
}

function A7h(n, e, t) {
    const i = e.firstChild;
    const r = t.isComposing();
    const o = n + (r ? H6n : "");
    if (i == null) {
        e.textContent = o;
    } else {
        const a = i.nodeValue;
        if (a !== o) {
            if (r || rYe) {
                const [l, u, d] = VbA(a, o);
                if (u !== 0) {
                    i.deleteData(l, u);
                }
                i.insertData(l, d);
            } else {
                i.nodeValue = o;
            }
        }
    }
}

function y7h(n, e, t, i, r, s) {
    A7h(r, n, e);
    const a = s.theme.text;
    if (a !== undefined) {
        v7h(t, 0, i, n, a);
    }
}

function AUo(n, e) {
    const t = bi.document.createElement(e);
    t.appendChild(n);
    return t;
}

function KbA(n) {
    const e = n;
    const t = e.style.fontWeight === "700";
    const i = e.style.textDecoration === "line-through";
    const r = e.style.fontStyle === "italic";
    const s = e.style.textDecoration === "underline";
    const o = e.style.verticalAlign;
    return {
        forChild: a => {
            if (jd(a)) {
                if (t) {
                    a.toggleFormat("bold");
                }
                if (i) {
                    a.toggleFormat("strikethrough");
                }
                if (r) {
                    a.toggleFormat("italic");
                }
                if (s) {
                    a.toggleFormat("underline");
                }
                if (o === "sub") {
                    a.toggleFormat("subscript");
                }
                if (o === "super") {
                    a.toggleFormat("superscript");
                }
            }
            return a;
        },
        node: null
    };
}

function YbA(n) {
    const t = n.style.fontWeight === "normal";
    return {
        forChild: i => {
            if (jd(i) && !t) {
                i.toggleFormat("bold");
            }
            return i;
        },
        node: null
    };
}

function ZbA(n) {
    return n.nodeName === "PRE" || n.nodeType === D9t && n.style.whiteSpace.startsWith("pre");
}

function XbA(n) {
    let e;
    let t = n.parentNode;
    const i = [n];
    while (t !== null && (e = o5c.get(t)) === undefined && !ZbA(t)) {
        i.push(t);
        t = t.parentNode;
    }
    const r = e === undefined ? t : e;
    for (let s = 0; s < i.length; s++) {
        o5c.set(i[s], r);
    }
    return r;
}

function evA(n) {
    const e = n;
    const t = n.parentElement;
    Yg(t !== null, "Expected parentElement of Text not to be null");
    let i = e.textContent || "";
    if (XbA(e) !== null) {
        const r = i.split(/(\r?\n|\t)/);
        const s = [];
        const o = r.length;
        for (let a = 0; a < o; a++) {
            const l = r[a];
            if (l === `
` || l === `\r
`) {
                s.push(lhe());
            } else if (l === "\t") {
                s.push(Vte());
            } else if (l !== "") {
                s.push(OA(l));
            }
        }
        return {
            node: s
        };
    }
    i = i.replace(/\r?\n|\t/gm, " ").replace("\r", "").replace(/\s+/g, " ");
    if (i === "") {
        return {
            node: null
        };
    }
    if (i[0] === " ") {
        let r = e;
        let s = true;
        while (r !== null && (r = w7h(r, false)) !== null) {
            const o = r.textContent || "";
            if (o.length > 0) {
                if (o.match(/(?:\s|\r?\n|\t)$/)) {
                    i = i.slice(1);
                }
                s = false;
                break;
            }
        }
        if (s) {
            i = i.slice(1);
        }
    }
    if (i[i.length - 1] === " ") {
        let r = e;
        let s = true;
        while (r !== null && (r = w7h(r, true)) !== null) {
            if ((r.textContent || "").replace(/^[\s|\r?\n|\t]+/, "").length > 0) {
                s = false;
                break;
            }
        }
        if (s) {
            i = i.slice(0, i.length - 1);
        }
    }
    if (i === "") {
        return {
            node: null
        };
    } else {
        return {
            node: OA(i)
        };
    }
}

function w7h(n, e) {
    let t = n;
    while (true) {
        let i;
        while ((i = e ? t.nextSibling : t.previousSibling) === null) {
            const s = t.parentElement;
            if (s === null) {
                return null;
            }
            t = s;
        }
        t = i;
        if (t.nodeType === D9t) {
            const s = t.style.display;
            if (s === "" && t.nodeName.match(OHh) === null || s !== "" && !s.startsWith("inline")) {
                return null;
            }
        }
        let r = t;
        while ((r = e ? t.firstChild : t.lastChild) !== null) {
            t = r;
        }
        if (t.nodeType === XRe) {
            return t;
        }
        if (t.nodeName === "BR") {
            return null;
        }
    }
}

function aYe(n) {
    const e = UHh[n.nodeName.toLowerCase()];
    if (e === undefined) {
        return {
            node: null
        };
    } else {
        return {
            forChild: t => {
                if (jd(t) && !t.hasFormat(e)) {
                    t.toggleFormat(e);
                }
                return t;
            },
            node: null
        };
    }
}

function OA(n = "") {
    return che(new s8e(n));
}

function jd(n) {
    return n instanceof s8e;
}

function Vte() {
    return che(new J6n());
}

function Z9e(n) {
    return n instanceof J6n;
}

function kd(n) {
    return n instanceof Eve;
}

function _7h(n, e, t) {
    let i = n.getNode();
    while (i) {
        const r = i.__key;
        if (e.has(r) && !t.has(r)) {
            return true;
        }
        i = i.getParent();
    }
    return false;
}

function tvA(n) {
    return {
        node: lhe()
    };
}

function lhe() {
    return che(new G6n());
}

function x3(n) {
    return n instanceof G6n;
}

function bvt(n) {
    return n instanceof $Hh;
}

function _ve(n) {
    return n instanceof qHh;
}

function k6n(n) {
    return n instanceof HHh;
}

function ZD(n) {
    return n instanceof W6n;
}

function nvA() {
    return new VUo();
}

function ZY(n) {
    return n instanceof VUo;
}

function ivA(n) {
    const e = Lx();
    if (n.style) {
        e.setFormat(n.style.textAlign);
        const t = parseInt(n.style.textIndent, 10) / 20;
        if (t > 0) {
            e.setIndent(t);
        }
    }
    return {
        node: e
    };
}

function Lx() {
    return che(new o8e());
}

function cYe(n) {
    return n instanceof o8e;
}
