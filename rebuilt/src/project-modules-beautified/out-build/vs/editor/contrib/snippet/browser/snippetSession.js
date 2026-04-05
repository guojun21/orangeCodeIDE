"use strict";

// Module: out-build/vs/editor/contrib/snippet/browser/snippetSession.js
// Offset: 25273234 (bundle byte offset)
// Size: 12404 bytes
Vs();
rt();
oa();
cSA();
nI();
ts();
db();
QE();
bv();
Pd();
ps();
Vde();
UAg();
WQl = class QFe {
    static {
        this._decor = {
            active: Zh.register({
                description: "snippet-placeholder-1",
                stickiness: 0,
                className: "snippet-placeholder"
            }),
            inactive: Zh.register({
                description: "snippet-placeholder-2",
                stickiness: 1,
                className: "snippet-placeholder"
            }),
            activeFinal: Zh.register({
                description: "snippet-placeholder-3",
                stickiness: 1,
                className: "finish-snippet-placeholder"
            }),
            inactiveFinal: Zh.register({
                description: "snippet-placeholder-4",
                stickiness: 1,
                className: "finish-snippet-placeholder"
            })
        };
    }
    constructor(e, t, i) {
        this._editor = e;
        this._snippet = t;
        this._snippetLineLeadingWhitespace = i;
        this._offset = -1;
        this._nestingLevel = 1;
        this._placeholderGroups = yte(t.placeholders, Zoe.compareByIndex);
        this._placeholderGroupsIdx = -1;
    }
    initialize(e) {
        this._offset = e.newPosition;
    }
    dispose() {
        if (this._placeholderDecorations) {
            this._editor.removeDecorations([...this._placeholderDecorations.values()]);
        }
        this._placeholderGroups.length = 0;
    }
    _initDecorations() {
        if (this._offset === -1) {
            throw new Error("Snippet not initialized!");
        }
        if (this._placeholderDecorations) {
            return;
        }
        this._placeholderDecorations = new Map();
        const e = this._editor.getModel();
        this._editor.changeDecorations(t => {
            for (const i of this._snippet.placeholders) {
                const r = this._snippet.offset(i);
                const s = this._snippet.fullLen(i);
                const o = Zt.fromPositions(e.getPositionAt(this._offset + r), e.getPositionAt(this._offset + r + s));
                const a = i.isFinalTabstop ? QFe._decor.inactiveFinal : QFe._decor.inactive;
                const l = t.addDecoration(o, a);
                this._placeholderDecorations.set(i, l);
            }
        });
    }
    move(e) {
        if (!this._editor.hasModel()) {
            return [];
        }
        this._initDecorations();
        if (this._placeholderGroupsIdx >= 0) {
            const r = [];
            for (const s of this._placeholderGroups[this._placeholderGroupsIdx]) {
                if (s.transform) {
                    const o = this._placeholderDecorations.get(s);
                    const a = this._editor.getModel().getDecorationRange(o);
                    const l = this._editor.getModel().getValueInRange(a);
                    const u = s.transform.resolve(l).split(/\r\n|\r|\n/);
                    for (let d = 1; d < u.length; d++) {
                        u[d] = this._editor.getModel().normalizeIndentation(this._snippetLineLeadingWhitespace + u[d]);
                    }
                    r.push(zb.replace(a, u.join(this._editor.getModel().getEOL())));
                }
            }
            if (r.length > 0) {
                this._editor.executeEdits("snippet.placeholderTransform", r);
            }
        }
        let t = false;
        if (e === true && this._placeholderGroupsIdx < this._placeholderGroups.length - 1) {
            this._placeholderGroupsIdx += 1;
            t = true;
        } else if (e === false && this._placeholderGroupsIdx > 0) {
            this._placeholderGroupsIdx -= 1;
            t = true;
        }
        const i = this._editor.getModel().changeDecorations(r => {
            const s = new Set();
            const o = [];
            for (const a of this._placeholderGroups[this._placeholderGroupsIdx]) {
                const l = this._placeholderDecorations.get(a);
                const u = this._editor.getModel().getDecorationRange(l);
                o.push(new Vl(u.startLineNumber, u.startColumn, u.endLineNumber, u.endColumn));
                t = t && this._hasPlaceholderBeenCollapsed(a);
                r.changeDecorationOptions(l, a.isFinalTabstop ? QFe._decor.activeFinal : QFe._decor.active);
                s.add(a);
                for (const d of this._snippet.enclosingPlaceholders(a)) {
                    const m = this._placeholderDecorations.get(d);
                    r.changeDecorationOptions(m, d.isFinalTabstop ? QFe._decor.activeFinal : QFe._decor.active);
                    s.add(d);
                }
            }
            for (const [a, l] of this._placeholderDecorations) {
                if (!s.has(a)) {
                    r.changeDecorationOptions(l, a.isFinalTabstop ? QFe._decor.inactiveFinal : QFe._decor.inactive);
                }
            }
            return o;
        });
        if (t) {
            return this.move(e);
        } else {
            return i ?? [];
        }
    }
    _hasPlaceholderBeenCollapsed(e) {
        let t = e;
        while (t) {
            if (t instanceof Zoe) {
                const i = this._placeholderDecorations.get(t);
                if (this._editor.getModel().getDecorationRange(i).isEmpty() && t.toString().length > 0) {
                    return true;
                }
            }
            t = t.parent;
        }
        return false;
    }
    get isAtFirstPlaceholder() {
        return this._placeholderGroupsIdx <= 0 || this._placeholderGroups.length === 0;
    }
    get isAtLastPlaceholder() {
        return this._placeholderGroupsIdx === this._placeholderGroups.length - 1;
    }
    get hasPlaceholder() {
        return this._snippet.placeholders.length > 0;
    }
    get isTrivialSnippet() {
        if (this._snippet.placeholders.length === 0) {
            return true;
        }
        if (this._snippet.placeholders.length === 1) {
            const [e] = this._snippet.placeholders;
            if (e.isFinalTabstop && this._snippet.rightMostDescendant === e) {
                return true;
            }
        }
        return false;
    }
    computePossibleSelections() {
        const e = new Map();
        for (const t of this._placeholderGroups) {
            let i;
            for (const r of t) {
                if (r.isFinalTabstop) {
                    break;
                }
                if (!i) {
                    i = [];
                    e.set(r.index, i);
                }
                const s = this._placeholderDecorations.get(r);
                const o = this._editor.getModel().getDecorationRange(s);
                if (!o) {
                    e.delete(r.index);
                    break;
                }
                i.push(o);
            }
        }
        return e;
    }
    get activeChoice() {
        if (!this._placeholderDecorations) {
            return;
        }
        const e = this._placeholderGroups[this._placeholderGroupsIdx][0];
        if (!e?.choice) {
            return;
        }
        const t = this._placeholderDecorations.get(e);
        if (!t) {
            return;
        }
        const i = this._editor.getModel().getDecorationRange(t);
        if (i) {
            return {
                range: i,
                choice: e.choice
            };
        }
    }
    get hasChoice() {
        let e = false;
        this._snippet.walk(t => {
            e = t instanceof Q3n;
            return !e;
        });
        return e;
    }
    merge(e) {
        const t = this._editor.getModel();
        this._nestingLevel *= 10;
        this._editor.changeDecorations(i => {
            for (const r of this._placeholderGroups[this._placeholderGroupsIdx]) {
                const s = e.shift();
                console.assert(s._offset !== -1);
                console.assert(!s._placeholderDecorations);
                const o = s._snippet.placeholderInfo.last.index;
                for (const l of s._snippet.placeholderInfo.all) {
                    if (l.isFinalTabstop) {
                        l.index = r.index + (o + 1) / this._nestingLevel;
                    } else {
                        l.index = r.index + l.index / this._nestingLevel;
                    }
                }
                this._snippet.replace(r, s._snippet.children);
                const a = this._placeholderDecorations.get(r);
                i.removeDecoration(a);
                this._placeholderDecorations.delete(r);
                for (const l of s._snippet.placeholders) {
                    const u = s._snippet.offset(l);
                    const d = s._snippet.fullLen(l);
                    const m = Zt.fromPositions(t.getPositionAt(s._offset + u), t.getPositionAt(s._offset + u + d));
                    const p = i.addDecoration(m, QFe._decor.inactive);
                    this._placeholderDecorations.set(l, p);
                }
            }
            this._placeholderGroups = yte(this._snippet.placeholders, Zoe.compareByIndex);
        });
    }
    getEnclosingRange() {
        let e;
        const t = this._editor.getModel();
        for (const i of this._placeholderDecorations.values()) {
            const r = t.getDecorationRange(i) ?? undefined;
            if (e) {
                e = e.plusRange(r);
            } else {
                e = r;
            }
        }
        return e;
    }
};
QQl = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    adjustWhitespace: true,
    clipboardText: undefined,
    overtypingCapturer: undefined
};
kgi = K1e = class {
    static adjustWhitespace(e, t, i, r, s) {
        const o = e.getLineContent(t.lineNumber);
        const a = rE(o, 0, t.column - 1);
        let l;
        r.walk(u => {
            if (!(u instanceof gz) || u.parent instanceof Q3n || s && !s.has(u)) {
                return true;
            }
            const d = u.value.split(/\r\n|\r|\n/);
            if (i) {
                const p = r.offset(u);
                if (p === 0) {
                    d[0] = e.normalizeIndentation(d[0]);
                } else {
                    l = l ?? r.toString();
                    const g = l.charCodeAt(p - 1);
                    if (g === 10 || g === 13) {
                        d[0] = e.normalizeIndentation(a + d[0]);
                    }
                }
                for (let g = 1; g < d.length; g++) {
                    d[g] = e.normalizeIndentation(a + d[g]);
                }
            }
            const m = d.join(e.getEOL());
            if (m !== u.value) {
                u.parent.replace(u, [new gz(m)]);
                l = undefined;
            }
            return true;
        });
        return a;
    }
    static adjustSelection(e, t, i, r) {
        if (i !== 0 || r !== 0) {
            const {
                positionLineNumber: s,
                positionColumn: o
            } = t;
            const a = o - i;
            const l = o + r;
            const u = e.validateRange({
                startLineNumber: s,
                startColumn: a,
                endLineNumber: s,
                endColumn: l
            });
            t = Vl.createWithDirection(u.startLineNumber, u.startColumn, u.endLineNumber, u.endColumn, t.getDirection());
        }
        return t;
    }
    static createEditsAndSnippetsFromSelections(e, t, i, r, s, o, a, l, u) {
        const d = [];
        const m = [];
        if (!e.hasModel()) {
            return {
                edits: d,
                snippets: m
            };
        }
        const p = e.getModel();
        const g = e.invokeWithinContext(B => B.get(Lr));
        const f = e.invokeWithinContext(B => new $Ql(B.get(Ol), p));
        const A = () => a;
        const w = p.getValueInRange(K1e.adjustSelection(p, e.getSelection(), i, 0));
        const C = p.getValueInRange(K1e.adjustSelection(p, e.getSelection(), 0, r));
        const x = p.getLineFirstNonWhitespaceColumn(e.getSelection().positionLineNumber);
        const I = e.getSelections().map((B, R) => ({
            selection: B,
            idx: R
        })).sort((B, R) => Zt.compareRangesUsingStarts(B.selection, R.selection));
        for (const {
                selection: B,
                idx: R
            }
            of I) {
            let N = K1e.adjustSelection(p, B, i, 0);
            let M = K1e.adjustSelection(p, B, 0, r);
            if (w !== p.getValueInRange(N)) {
                N = B;
            }
            if (C !== p.getValueInRange(M)) {
                M = B;
            }
            const O = B.setStartPosition(N.startLineNumber, N.startColumn).setEndPosition(M.endLineNumber, M.endColumn);
            const $ = new Ute().parse(t, true, s);
            const H = O.getStartPosition();
            const W = K1e.adjustWhitespace(p, H, o || R > 0 && x !== p.getLineFirstNonWhitespaceColumn(B.positionLineNumber), $);
            $.resolveVariables(new OQl([f, new qQl(A, R, I.length, e.getOption(80) === "spread"), new UQl(p, B, R, l), new Sgi(p, B, u), new HQl(), new JQl(g), new GQl()]));
            d[R] = zb.replace(O, $.toString());
            d[R].identifier = {
                major: R,
                minor: 0
            };
            d[R]._isTracked = true;
            m[R] = new WQl(e, $, W);
        }
        return {
            edits: d,
            snippets: m
        };
    }
    static createEditsAndSnippetsFromEdits(e, t, i, r, s, o, a) {
        if (!e.hasModel() || t.length === 0) {
            return {
                edits: [],
                snippets: []
            };
        }
        const l = [];
        const u = e.getModel();
        const d = new Ute();
        const m = new Z5o();
        const p = new OQl([e.invokeWithinContext(f => new $Ql(f.get(Ol), u)), new qQl(() => s, 0, e.getSelections().length, e.getOption(80) === "spread"), new UQl(u, e.getSelection(), 0, o), new Sgi(u, e.getSelection(), a), new HQl(), new JQl(e.invokeWithinContext(f => f.get(Lr))), new GQl()]);
        t = t.sort((f, A) => Zt.compareRangesUsingStarts(f.range, A.range));
        let g = 0;
        for (let f = 0; f < t.length; f++) {
            const {
                range: A,
                template: w,
                keepWhitespace: C
            } = t[f];
            if (f > 0) {
                const N = t[f - 1].range;
                const M = Zt.fromPositions(N.getEndPosition(), A.getStartPosition());
                const O = new gz(u.getValueInRange(M));
                m.appendChild(O);
                g += O.value.length;
            }
            const x = d.parseFragment(w, m);
            K1e.adjustWhitespace(u, A.getStartPosition(), C !== undefined ? !C : r, m, new Set(x));
            m.resolveVariables(p);
            const I = m.toString();
            const B = I.slice(g);
            g = I.length;
            const R = zb.replace(A, B);
            R.identifier = {
                major: f,
                minor: 0
            };
            R._isTracked = true;
            l.push(R);
        }
        d.ensureFinalTabstop(m, i, true);
        return {
            edits: l,
            snippets: [new WQl(e, m, "")]
        };
    }
    constructor(e, t, i = QQl, r) {
        this._editor = e;
        this._template = t;
        this._options = i;
        this._languageConfigurationService = r;
        this._templateMerges = [];
        this._snippets = [];
    }
    dispose() {
        Bo(this._snippets);
    }
    _logInfo() {
        return `template="${this._template}", merged_templates="${this._templateMerges.join(" -> ")}"`;
    }
    insert() {
        if (!this._editor.hasModel()) {
            return;
        }
        const {
            edits: e,
            snippets: t
        } = typeof this._template == "string" ? K1e.createEditsAndSnippetsFromSelections(this._editor, this._template, this._options.overwriteBefore, this._options.overwriteAfter, false, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService) : K1e.createEditsAndSnippetsFromEdits(this._editor, this._template, false, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService);
        this._snippets = t;
        this._editor.executeEdits("snippet", e, i => {
            const r = i.filter(s => !!s.identifier);
            for (let s = 0; s < t.length; s++) {
                t[s].initialize(r[s].textChange);
            }
            if (this._snippets[0].hasPlaceholder) {
                return this._move(true);
            } else {
                return r.map(s => Vl.fromPositions(s.range.getEndPosition()));
            }
        });
        this._editor.revealRange(this._editor.getSelections()[0]);
    }
    merge(e, t = QQl) {
        if (!this._editor.hasModel()) {
            return;
        }
        this._templateMerges.push([this._snippets[0]._nestingLevel, this._snippets[0]._placeholderGroupsIdx, e]);
        const {
            edits: i,
            snippets: r
        } = K1e.createEditsAndSnippetsFromSelections(this._editor, e, t.overwriteBefore, t.overwriteAfter, true, t.adjustWhitespace, t.clipboardText, t.overtypingCapturer, this._languageConfigurationService);
        this._editor.executeEdits("snippet", i, s => {
            const o = s.filter(l => !!l.identifier);
            for (let l = 0; l < r.length; l++) {
                r[l].initialize(o[l].textChange);
            }
            const a = r[0].isTrivialSnippet;
            if (!a) {
                for (const l of this._snippets) {
                    l.merge(r);
                }
                console.assert(r.length === 0);
            }
            if (this._snippets[0].hasPlaceholder && !a) {
                return this._move(undefined);
            } else {
                return o.map(l => Vl.fromPositions(l.range.getEndPosition()));
            }
        });
    }
    next() {
        const e = this._move(true);
        this._editor.setSelections(e);
        this._editor.revealPositionInCenterIfOutsideViewport(e[0].getPosition());
    }
    prev() {
        const e = this._move(false);
        this._editor.setSelections(e);
        this._editor.revealPositionInCenterIfOutsideViewport(e[0].getPosition());
    }
    _move(e) {
        const t = [];
        for (const i of this._snippets) {
            const r = i.move(e);
            t.push(...r);
        }
        return t;
    }
    get isAtFirstPlaceholder() {
        return this._snippets[0].isAtFirstPlaceholder;
    }
    get isAtLastPlaceholder() {
        return this._snippets[0].isAtLastPlaceholder;
    }
    get hasPlaceholder() {
        return this._snippets[0].hasPlaceholder;
    }
    get hasChoice() {
        return this._snippets[0].hasChoice;
    }
    get activeChoice() {
        return this._snippets[0].activeChoice;
    }
    isSelectionWithinPlaceholders() {
        if (!this.hasPlaceholder) {
            return false;
        }
        const e = this._editor.getSelections();
        if (e.length < this._snippets.length) {
            return false;
        }
        const t = new Map();
        for (const i of this._snippets) {
            const r = i.computePossibleSelections();
            if (t.size === 0) {
                for (const [s, o] of r) {
                    o.sort(Zt.compareRangesUsingStarts);
                    for (const a of e) {
                        if (o[0].containsRange(a)) {
                            t.set(s, []);
                            break;
                        }
                    }
                }
            }
            if (t.size === 0) {
                return false;
            }
            t.forEach((s, o) => {
                s.push(...r.get(o));
            });
        }
        e.sort(Zt.compareRangesUsingStarts);
        for (const [i, r] of t) {
            if (r.length !== e.length) {
                t.delete(i);
                continue;
            }
            r.sort(Zt.compareRangesUsingStarts);
            for (let s = 0; s < r.length; s++) {
                if (!r[s].containsRange(e[s])) {
                    t.delete(i);
                    continue;
                }
            }
        }
        return t.size > 0;
    }
    getEnclosingRange() {
        let e;
        for (const t of this._snippets) {
            const i = t.getEnclosingRange();
            if (e) {
                e = e.plusRange(i);
            } else {
                e = i;
            }
        }
        return e;
    }
};
kgi = K1e = __decorate([__param(3, JS)], kgi);
