"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsImpl.js
// Offset: 1095434 (bundle byte offset)
// Size: 11767 bytes
Vs();
yn();
rt();
ts();
u4n();
e4o();
NoA();
Nph = class extends at {
    get canBuildAST() {
        return this.textModel.getValueLength() <= 5000000;
    }
    constructor(n, e) {
        super();
        this.textModel = n;
        this.languageConfigurationService = e;
        this.bracketPairsTree = this._register(new uo());
        this.onDidChangeEmitter = new Qe();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.bracketsRequested = false;
    }
    handleLanguageConfigurationServiceChange(n) {
        if (!n.languageId || this.bracketPairsTree.value?.object.didLanguageChange(n.languageId)) {
            this.bracketPairsTree.clear();
            this.updateBracketPairsTree();
        }
    }
    handleDidChangeOptions(n) {
        this.bracketPairsTree.clear();
        this.updateBracketPairsTree();
    }
    handleDidChangeLanguage(n) {
        this.bracketPairsTree.clear();
        this.updateBracketPairsTree();
    }
    handleDidChangeContent(n) {
        this.bracketPairsTree.value?.object.handleContentChanged(n);
    }
    handleDidChangeBackgroundTokenizationState() {
        this.bracketPairsTree.value?.object.handleDidChangeBackgroundTokenizationState();
    }
    handleDidChangeTokens(n) {
        this.bracketPairsTree.value?.object.handleDidChangeTokens(n);
    }
    updateBracketPairsTree() {
        if (this.bracketsRequested && this.canBuildAST) {
            if (!this.bracketPairsTree.value) {
                const n = new Ut();
                this.bracketPairsTree.value = MoA(n.add(new Pph(this.textModel, e => this.languageConfigurationService.getLanguageConfiguration(e))), n);
                n.add(this.bracketPairsTree.value.object.onDidChange(e => this.onDidChangeEmitter.fire(e)));
                this.onDidChangeEmitter.fire();
            }
        } else if (this.bracketPairsTree.value) {
            this.bracketPairsTree.clear();
            this.onDidChangeEmitter.fire();
        }
    }
    getBracketPairsInRange(n) {
        this.bracketsRequested = true;
        this.updateBracketPairsTree();
        return this.bracketPairsTree.value?.object.getBracketPairsInRange(n, false) || DFt.empty;
    }
    getBracketPairsInRangeWithMinIndentation(n) {
        this.bracketsRequested = true;
        this.updateBracketPairsTree();
        return this.bracketPairsTree.value?.object.getBracketPairsInRange(n, true) || DFt.empty;
    }
    getBracketsInRange(n, e = false) {
        this.bracketsRequested = true;
        this.updateBracketPairsTree();
        return this.bracketPairsTree.value?.object.getBracketsInRange(n, e) || DFt.empty;
    }
    findMatchingBracketUp(n, e, t) {
        const i = this.textModel.validatePosition(e);
        const r = this.textModel.getLanguageIdAtPosition(i.lineNumber, i.column);
        if (this.canBuildAST) {
            const s = this.languageConfigurationService.getLanguageConfiguration(r).bracketsNew.getClosingBracketInfo(n);
            if (!s) {
                return null;
            }
            const o = this.getBracketPairsInRange(Zt.fromPositions(e, e)).findLast(a => s.closes(a.openingBracketInfo));
            if (o) {
                return o.openingBracketRange;
            } else {
                return null;
            }
        } else {
            const s = n.toLowerCase();
            const o = this.languageConfigurationService.getLanguageConfiguration(r).brackets;
            if (!o) {
                return null;
            }
            const a = o.textIsBracket[s];
            if (a) {
                return dOo(this._findMatchingBracketUp(a, i, UEc(t)));
            } else {
                return null;
            }
        }
    }
    matchBracket(n, e) {
        if (this.canBuildAST) {
            const t = this.getBracketPairsInRange(Zt.fromPositions(n, n)).filter(i => i.closingBracketRange !== undefined && (i.openingBracketRange.containsPosition(n) || i.closingBracketRange.containsPosition(n))).findLastMaxBy(JP(i => i.openingBracketRange.containsPosition(n) ? i.openingBracketRange : i.closingBracketRange, Zt.compareRangesUsingStarts));
            if (t) {
                return [t.openingBracketRange, t.closingBracketRange];
            } else {
                return null;
            }
        } else {
            const t = UEc(e);
            return this._matchBracket(this.textModel.validatePosition(n), t);
        }
    }
    _establishBracketSearchOffsets(n, e, t, i) {
        const r = e.getCount();
        const s = e.getLanguageId(i);
        let o = Math.max(0, n.column - 1 - t.maxBracketLength);
        for (let l = i - 1; l >= 0; l--) {
            const u = e.getEndOffset(l);
            if (u <= o) {
                break;
            }
            if (GBe(e.getStandardTokenType(l)) || e.getLanguageId(l) !== s) {
                o = u;
                break;
            }
        }
        let a = Math.min(e.getLineContent().length, n.column - 1 + t.maxBracketLength);
        for (let l = i + 1; l < r; l++) {
            const u = e.getStartOffset(l);
            if (u >= a) {
                break;
            }
            if (GBe(e.getStandardTokenType(l)) || e.getLanguageId(l) !== s) {
                a = u;
                break;
            }
        }
        return {
            searchStartOffset: o,
            searchEndOffset: a
        };
    }
    _matchBracket(n, e) {
        const t = n.lineNumber;
        const i = this.textModel.tokenization.getLineTokens(t);
        const r = this.textModel.getLineContent(t);
        const s = i.findTokenIndexAtOffset(n.column - 1);
        if (s < 0) {
            return null;
        }
        const o = this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(s)).brackets;
        if (o && !GBe(i.getStandardTokenType(s))) {
            let {
                searchStartOffset: a,
                searchEndOffset: l
            } = this._establishBracketSearchOffsets(n, i, o, s);
            let u = null;
            while (true) {
                const d = Ede.findNextBracketInRange(o.forwardRegex, t, r, a, l);
                if (!d) {
                    break;
                }
                if (d.startColumn <= n.column && n.column <= d.endColumn) {
                    const m = r.substring(d.startColumn - 1, d.endColumn - 1).toLowerCase();
                    const p = this._matchFoundBracket(d, o.textIsBracket[m], o.textIsOpenBracket[m], e);
                    if (p) {
                        if (p instanceof DVe) {
                            return null;
                        }
                        u = p;
                    }
                }
                a = d.endColumn - 1;
            }
            if (u) {
                return u;
            }
        }
        if (s > 0 && i.getStartOffset(s) === n.column - 1) {
            const a = s - 1;
            const l = this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(a)).brackets;
            if (l && !GBe(i.getStandardTokenType(a))) {
                const {
                    searchStartOffset: u,
                    searchEndOffset: d
                } = this._establishBracketSearchOffsets(n, i, l, a);
                const m = Ede.findPrevBracketInRange(l.reversedRegex, t, r, u, d);
                if (m && m.startColumn <= n.column && n.column <= m.endColumn) {
                    const p = r.substring(m.startColumn - 1, m.endColumn - 1).toLowerCase();
                    const g = this._matchFoundBracket(m, l.textIsBracket[p], l.textIsOpenBracket[p], e);
                    if (g) {
                        if (g instanceof DVe) {
                            return null;
                        } else {
                            return g;
                        }
                    }
                }
            }
        }
        return null;
    }
    _matchFoundBracket(n, e, t, i) {
        if (!e) {
            return null;
        }
        const r = t ? this._findMatchingBracketDown(e, n.getEndPosition(), i) : this._findMatchingBracketUp(e, n.getStartPosition(), i);
        if (r) {
            if (r instanceof DVe) {
                return r;
            } else {
                return [n, r];
            }
        } else {
            return null;
        }
    }
    _findMatchingBracketUp(n, e, t) {
        const i = n.languageId;
        const r = n.reversedRegex;
        let s = -1;
        let o = 0;
        const a = (l, u, d, m) => {
            while (true) {
                if (t && ++o % 100 === 0 && !t()) {
                    return DVe.INSTANCE;
                }
                const p = Ede.findPrevBracketInRange(r, l, u, d, m);
                if (!p) {
                    break;
                }
                const g = u.substring(p.startColumn - 1, p.endColumn - 1).toLowerCase();
                if (n.isOpen(g)) {
                    s++;
                } else if (n.isClose(g)) {
                    s--;
                }
                if (s === 0) {
                    return p;
                }
                m = p.startColumn - 1;
            }
            return null;
        };
        for (let l = e.lineNumber; l >= 1; l--) {
            const u = this.textModel.tokenization.getLineTokens(l);
            const d = u.getCount();
            const m = this.textModel.getLineContent(l);
            let p = d - 1;
            let g = m.length;
            let f = m.length;
            if (l === e.lineNumber) {
                p = u.findTokenIndexAtOffset(e.column - 1);
                g = e.column - 1;
                f = e.column - 1;
            }
            let A = true;
            for (; p >= 0; p--) {
                const w = u.getLanguageId(p) === i && !GBe(u.getStandardTokenType(p));
                if (w) {
                    if (A) {
                        g = u.getStartOffset(p);
                    } else {
                        g = u.getStartOffset(p);
                        f = u.getEndOffset(p);
                    }
                } else if (A && g !== f) {
                    const C = a(l, m, g, f);
                    if (C) {
                        return C;
                    }
                }
                A = w;
            }
            if (A && g !== f) {
                const w = a(l, m, g, f);
                if (w) {
                    return w;
                }
            }
        }
        return null;
    }
    _findMatchingBracketDown(n, e, t) {
        const i = n.languageId;
        const r = n.forwardRegex;
        let s = 1;
        let o = 0;
        const a = (u, d, m, p) => {
            while (true) {
                if (t && ++o % 100 === 0 && !t()) {
                    return DVe.INSTANCE;
                }
                const g = Ede.findNextBracketInRange(r, u, d, m, p);
                if (!g) {
                    break;
                }
                const f = d.substring(g.startColumn - 1, g.endColumn - 1).toLowerCase();
                if (n.isOpen(f)) {
                    s++;
                } else if (n.isClose(f)) {
                    s--;
                }
                if (s === 0) {
                    return g;
                }
                m = g.endColumn - 1;
            }
            return null;
        };
        const l = this.textModel.getLineCount();
        for (let u = e.lineNumber; u <= l; u++) {
            const d = this.textModel.tokenization.getLineTokens(u);
            const m = d.getCount();
            const p = this.textModel.getLineContent(u);
            let g = 0;
            let f = 0;
            let A = 0;
            if (u === e.lineNumber) {
                g = d.findTokenIndexAtOffset(e.column - 1);
                f = e.column - 1;
                A = e.column - 1;
            }
            let w = true;
            for (; g < m; g++) {
                const C = d.getLanguageId(g) === i && !GBe(d.getStandardTokenType(g));
                if (C) {
                    if (!w) {
                        f = d.getStartOffset(g);
                    }
                    A = d.getEndOffset(g);
                } else if (w && f !== A) {
                    const x = a(u, p, f, A);
                    if (x) {
                        return x;
                    }
                }
                w = C;
            }
            if (w && f !== A) {
                const C = a(u, p, f, A);
                if (C) {
                    return C;
                }
            }
        }
        return null;
    }
    findPrevBracket(n) {
        const e = this.textModel.validatePosition(n);
        if (this.canBuildAST) {
            this.bracketsRequested = true;
            this.updateBracketPairsTree();
            return this.bracketPairsTree.value?.object.getFirstBracketBefore(e) || null;
        }
        let t = null;
        let i = null;
        let r = null;
        for (let s = e.lineNumber; s >= 1; s--) {
            const o = this.textModel.tokenization.getLineTokens(s);
            const a = o.getCount();
            const l = this.textModel.getLineContent(s);
            let u = a - 1;
            let d = l.length;
            let m = l.length;
            if (s === e.lineNumber) {
                u = o.findTokenIndexAtOffset(e.column - 1);
                d = e.column - 1;
                m = e.column - 1;
                const g = o.getLanguageId(u);
                if (t !== g) {
                    t = g;
                    i = this.languageConfigurationService.getLanguageConfiguration(t).brackets;
                    r = this.languageConfigurationService.getLanguageConfiguration(t).bracketsNew;
                }
            }
            let p = true;
            for (; u >= 0; u--) {
                const g = o.getLanguageId(u);
                if (t !== g) {
                    if (i && r && p && d !== m) {
                        const A = Ede.findPrevBracketInRange(i.reversedRegex, s, l, d, m);
                        if (A) {
                            return this._toFoundBracket(r, A);
                        }
                        p = false;
                    }
                    t = g;
                    i = this.languageConfigurationService.getLanguageConfiguration(t).brackets;
                    r = this.languageConfigurationService.getLanguageConfiguration(t).bracketsNew;
                }
                const f = !!i && !GBe(o.getStandardTokenType(u));
                if (f) {
                    if (p) {
                        d = o.getStartOffset(u);
                    } else {
                        d = o.getStartOffset(u);
                        m = o.getEndOffset(u);
                    }
                } else if (r && i && p && d !== m) {
                    const A = Ede.findPrevBracketInRange(i.reversedRegex, s, l, d, m);
                    if (A) {
                        return this._toFoundBracket(r, A);
                    }
                }
                p = f;
            }
            if (r && i && p && d !== m) {
                const g = Ede.findPrevBracketInRange(i.reversedRegex, s, l, d, m);
                if (g) {
                    return this._toFoundBracket(r, g);
                }
            }
        }
        return null;
    }
    findNextBracket(n) {
        const e = this.textModel.validatePosition(n);
        if (this.canBuildAST) {
            this.bracketsRequested = true;
            this.updateBracketPairsTree();
            return this.bracketPairsTree.value?.object.getFirstBracketAfter(e) || null;
        }
        const t = this.textModel.getLineCount();
        let i = null;
        let r = null;
        let s = null;
        for (let o = e.lineNumber; o <= t; o++) {
            const a = this.textModel.tokenization.getLineTokens(o);
            const l = a.getCount();
            const u = this.textModel.getLineContent(o);
            let d = 0;
            let m = 0;
            let p = 0;
            if (o === e.lineNumber) {
                d = a.findTokenIndexAtOffset(e.column - 1);
                m = e.column - 1;
                p = e.column - 1;
                const f = a.getLanguageId(d);
                if (i !== f) {
                    i = f;
                    r = this.languageConfigurationService.getLanguageConfiguration(i).brackets;
                    s = this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew;
                }
            }
            let g = true;
            for (; d < l; d++) {
                const f = a.getLanguageId(d);
                if (i !== f) {
                    if (s && r && g && m !== p) {
                        const w = Ede.findNextBracketInRange(r.forwardRegex, o, u, m, p);
                        if (w) {
                            return this._toFoundBracket(s, w);
                        }
                        g = false;
                    }
                    i = f;
                    r = this.languageConfigurationService.getLanguageConfiguration(i).brackets;
                    s = this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew;
                }
                const A = !!r && !GBe(a.getStandardTokenType(d));
                if (A) {
                    if (!g) {
                        m = a.getStartOffset(d);
                    }
                    p = a.getEndOffset(d);
                } else if (s && r && g && m !== p) {
                    const w = Ede.findNextBracketInRange(r.forwardRegex, o, u, m, p);
                    if (w) {
                        return this._toFoundBracket(s, w);
                    }
                }
                g = A;
            }
            if (s && r && g && m !== p) {
                const f = Ede.findNextBracketInRange(r.forwardRegex, o, u, m, p);
                if (f) {
                    return this._toFoundBracket(s, f);
                }
            }
        }
        return null;
    }
    findEnclosingBrackets(n, e) {
        const t = this.textModel.validatePosition(n);
        if (this.canBuildAST) {
            const p = Zt.fromPositions(t);
            const g = this.getBracketPairsInRange(Zt.fromPositions(t, t)).findLast(f => f.closingBracketRange !== undefined && f.range.strictContainsRange(p));
            if (g) {
                return [g.openingBracketRange, g.closingBracketRange];
            } else {
                return null;
            }
        }
        const i = UEc(e);
        const r = this.textModel.getLineCount();
        const s = new Map();
        let o = [];
        const a = (p, g) => {
            if (!s.has(p)) {
                const f = [];
                for (let A = 0, w = g ? g.brackets.length : 0; A < w; A++) {
                    f[A] = 0;
                }
                s.set(p, f);
            }
            o = s.get(p);
        };
        let l = 0;
        const u = (p, g, f, A, w) => {
            while (true) {
                if (i && ++l % 100 === 0 && !i()) {
                    return DVe.INSTANCE;
                }
                const C = Ede.findNextBracketInRange(p.forwardRegex, g, f, A, w);
                if (!C) {
                    break;
                }
                const x = f.substring(C.startColumn - 1, C.endColumn - 1).toLowerCase();
                const I = p.textIsBracket[x];
                if (I && (I.isOpen(x) ? o[I.index]++ : I.isClose(x) && o[I.index]--, o[I.index] === -1)) {
                    return this._matchFoundBracket(C, I, false, i);
                }
                A = C.endColumn - 1;
            }
            return null;
        };
        let d = null;
        let m = null;
        for (let p = t.lineNumber; p <= r; p++) {
            const g = this.textModel.tokenization.getLineTokens(p);
            const f = g.getCount();
            const A = this.textModel.getLineContent(p);
            let w = 0;
            let C = 0;
            let x = 0;
            if (p === t.lineNumber) {
                w = g.findTokenIndexAtOffset(t.column - 1);
                C = t.column - 1;
                x = t.column - 1;
                const B = g.getLanguageId(w);
                if (d !== B) {
                    d = B;
                    m = this.languageConfigurationService.getLanguageConfiguration(d).brackets;
                    a(d, m);
                }
            }
            let I = true;
            for (; w < f; w++) {
                const B = g.getLanguageId(w);
                if (d !== B) {
                    if (m && I && C !== x) {
                        const N = u(m, p, A, C, x);
                        if (N) {
                            return dOo(N);
                        }
                        I = false;
                    }
                    d = B;
                    m = this.languageConfigurationService.getLanguageConfiguration(d).brackets;
                    a(d, m);
                }
                const R = !!m && !GBe(g.getStandardTokenType(w));
                if (R) {
                    if (!I) {
                        C = g.getStartOffset(w);
                    }
                    x = g.getEndOffset(w);
                } else if (m && I && C !== x) {
                    const N = u(m, p, A, C, x);
                    if (N) {
                        return dOo(N);
                    }
                }
                I = R;
            }
            if (m && I && C !== x) {
                const B = u(m, p, A, C, x);
                if (B) {
                    return dOo(B);
                }
            }
        }
        return null;
    }
    _toFoundBracket(n, e) {
        if (!e) {
            return null;
        }
        let t = this.textModel.getValueInRange(e);
        t = t.toLowerCase();
        const i = n.getBracketInfo(t);
        if (i) {
            return {
                range: e,
                bracketInfo: i
            };
        } else {
            return null;
        }
    }
};
DVe = class zJb {
    static {
        this.INSTANCE = new zJb();
    }
    constructor() {
        this._searchCanceledBrand = undefined;
    }
};
