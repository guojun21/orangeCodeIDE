"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/ghostText.js
// Offset: 25294215 (bundle byte offset)
// Size: 2783 bytes
Vs();
oa();
tl();
ts();
EW();
HVe();
fdn = class {
    constructor(n, e) {
        this.lineNumber = n;
        this.parts = e;
    }
    equals(n) {
        return this.lineNumber === n.lineNumber && this.parts.length === n.parts.length && this.parts.every((e, t) => e.equals(n.parts[t]));
    }
    render(n, e = false) {
        return new Fte([...this.parts.map(t => new cI(Zt.fromPositions(new ar(this.lineNumber, t.column)), e ? `[${t.lines.map(i => i.line).join(`
`)}]` : t.lines.map(i => i.line).join(`
`)))]).applyToString(n);
    }
    renderForScreenReader(n) {
        if (this.parts.length === 0) {
            return "";
        }
        const e = this.parts[this.parts.length - 1];
        const t = n.substr(0, e.column - 1);
        return new Fte([...this.parts.map(r => new cI(Zt.fromPositions(new ar(1, r.column)), r.lines.map(s => s.line).join(`
`)))]).applyToString(t).substring(this.parts[0].column - 1);
    }
    isEmpty() {
        return this.parts.every(n => n.lines.length === 0);
    }
    get lineCount() {
        return 1 + this.parts.reduce((n, e) => n + e.lines.length - 1, 0);
    }
};
Igi = class {
    constructor(n, e, t, i = []) {
        this.column = n;
        this.text = e;
        this.preview = t;
        this._inlineDecorations = i;
        this.lines = Zv(this.text).map((r, s) => ({
            line: r,
            lineDecorations: lz.filter(this._inlineDecorations, s + 1, 1, r.length + 1)
        }));
    }
    equals(n) {
        return this.column === n.column && this.lines.length === n.lines.length && this.lines.every((e, t) => e.line === n.lines[t].line && lz.equalsArr(e.lineDecorations, n.lines[t].lineDecorations));
    }
};
Mla = class {
    constructor(n, e, t, i = 0) {
        this.lineNumber = n;
        this.columnRange = e;
        this.text = t;
        this.additionalReservedLineCount = i;
        this.parts = [new Igi(this.columnRange.endColumnExclusive, this.text, false)];
        this.newLines = Zv(this.text);
    }
    renderForScreenReader(n) {
        return this.newLines.join(`
`);
    }
    render(n, e = false) {
        const t = this.columnRange.toRange(this.lineNumber);
        if (e) {
            return new Fte([new cI(Zt.fromPositions(t.getStartPosition()), "("), new cI(Zt.fromPositions(t.getEndPosition()), `)[${this.newLines.join(`
`)}]`)]).applyToString(n);
        } else {
            return new Fte([new cI(t, this.newLines.join(`
`))]).applyToString(n);
        }
    }
    get lineCount() {
        return this.newLines.length;
    }
    isEmpty() {
        return this.parts.every(n => n.lines.length === 0);
    }
    equals(n) {
        return this.lineNumber === n.lineNumber && this.columnRange.equals(n.columnRange) && this.newLines.length === n.newLines.length && this.newLines.every((e, t) => e === n.newLines[t]) && this.additionalReservedLineCount === n.additionalReservedLineCount;
    }
};
