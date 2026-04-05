"use strict";

// Module: out-build/vs/editor/browser/coreCommands.js
// Offset: 829383 (bundle byte offset)
// Size: 27502 bytes
Ht();
Ay();
Js();
Ew();
Cu();
Oh();
trA();
Eoe();
WFo();
Ukc();
A4o();
tl();
ts();
Qh();
si();
Hw();
ri();
v4o();
O0 = 0;
qR = class extends dF {
    runEditorCommand(n, e, t) {
        const i = e._getViewModel();
        if (i) {
            this.runCoreEditorCommand(i, t || {});
        }
    }
};
(function(n) {
    const e = function(s) {
        if (!$g(s)) {
            return false;
        }
        const o = s;
        return !!Qo(o.to) && (!!Df(o.by) || !!Qo(o.by)) && (!!Df(o.value) || !!_1(o.value)) && (!!Df(o.revealCursor) || !!uT(o.revealCursor));
    };
    n.metadata = {
        description: "Scroll editor in the given direction",
        args: [{
            name: "Editor scroll argument object",
            description: "Property-value pairs that can be passed through this argument:\n\t\t\t\t\t* 'to': A mandatory direction value.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'up', 'down'\n\t\t\t\t\t\t```\n\t\t\t\t\t* 'by': Unit to move. Default is computed based on 'to' value.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'line', 'wrappedLine', 'page', 'halfPage', 'editor'\n\t\t\t\t\t\t```\n\t\t\t\t\t* 'value': Number of units to move. Default is '1'.\n\t\t\t\t\t* 'revealCursor': If 'true' reveals the cursor if it is outside view port.\n\t\t\t\t",
            constraint: e,
            schema: {
                type: "object",
                required: ["to"],
                properties: {
                    to: {
                        type: "string",
                        enum: ["up", "down"]
                    },
                    by: {
                        type: "string",
                        enum: ["line", "wrappedLine", "page", "halfPage", "editor"]
                    },
                    value: {
                        type: "number",
                        default: 1
                    },
                    revealCursor: {
                        type: "boolean"
                    }
                }
            }
        }]
    };
    n.RawDirection = {
        Up: "up",
        Right: "right",
        Down: "down",
        Left: "left"
    };
    n.RawUnit = {
        Line: "line",
        WrappedLine: "wrappedLine",
        Page: "page",
        HalfPage: "halfPage",
        Editor: "editor",
        Column: "column"
    };

    function t(s) {
        let o;
        switch (s.to) {
            case n.RawDirection.Up:
                o = 1;
                break;
            case n.RawDirection.Right:
                o = 2;
                break;
            case n.RawDirection.Down:
                o = 3;
                break;
            case n.RawDirection.Left:
                o = 4;
                break;
            default:
                return null;
        }
        let a;
        switch (s.by) {
            case n.RawUnit.Line:
                a = 1;
                break;
            case n.RawUnit.WrappedLine:
                a = 2;
                break;
            case n.RawUnit.Page:
                a = 3;
                break;
            case n.RawUnit.HalfPage:
                a = 4;
                break;
            case n.RawUnit.Editor:
                a = 5;
                break;
            case n.RawUnit.Column:
                a = 6;
                break;
            default:
                a = 2;
        }
        const l = Math.floor(s.value || 1);
        const u = !!s.revealCursor;
        return {
            direction: o,
            unit: a,
            value: l,
            revealCursor: u,
            select: !!s.select
        };
    }
    n.parse = t;
    let i;
    (function(s) {
        s[s.Up = 1] = "Up";
        s[s.Right = 2] = "Right";
        s[s.Down = 3] = "Down";
        s[s.Left = 4] = "Left";
    })(i = n.Direction ||= {});
    let r;
    (function(s) {
        s[s.Line = 1] = "Line";
        s[s.WrappedLine = 2] = "WrappedLine";
        s[s.Page = 3] = "Page";
        s[s.HalfPage = 4] = "HalfPage";
        s[s.Editor = 5] = "Editor";
        s[s.Column = 6] = "Column";
    })(r = n.Unit ||= {});
})(q$ ||= {});
(function(n) {
    const e = function(t) {
        if (!$g(t)) {
            return false;
        }
        const i = t;
        return (!!_1(i.lineNumber) || !!Qo(i.lineNumber)) && (!!Df(i.at) || !!Qo(i.at));
    };
    n.metadata = {
        description: "Reveal the given line at the given logical position",
        args: [{
            name: "Reveal line argument object",
            description: "Property-value pairs that can be passed through this argument:\n\t\t\t\t\t* 'lineNumber': A mandatory line number value.\n\t\t\t\t\t* 'at': Logical position at which line has to be revealed.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'top', 'center', 'bottom'\n\t\t\t\t\t\t```\n\t\t\t\t",
            constraint: e,
            schema: {
                type: "object",
                required: ["lineNumber"],
                properties: {
                    lineNumber: {
                        type: ["number", "string"]
                    },
                    at: {
                        type: "string",
                        enum: ["top", "center", "bottom"]
                    }
                }
            }
        }]
    };
    n.RawAtArgument = {
        Top: "top",
        Center: "center",
        Bottom: "bottom"
    };
})(V4t ||= {});
y4o = class {
    constructor(n) {
        n.addImplementation(10000, "code-editor", (e, t) => {
            const i = e.get(fl).getFocusedCodeEditor();
            if (i && i.hasTextFocus()) {
                return this._runEditorCommand(e, i, t);
            } else {
                return false;
            }
        });
        n.addImplementation(1000, "generic-dom-input-textarea", (e, t) => {
            const i = _C();
            if (i && dW(i)) {
                this.runDOMCommand(i);
                return true;
            } else {
                return false;
            }
        });
        n.addImplementation(0, "generic-dom", (e, t) => {
            const i = e.get(fl).getActiveCodeEditor();
            if (i) {
                i.focus();
                return this._runEditorCommand(e, i, t);
            } else {
                return false;
            }
        });
    }
    _runEditorCommand(n, e, t) {
        const i = this.runEditorCommand(n, e, t);
        return i || true;
    }
};
(function(n) {
    n[n.Regular = 0] = "Regular";
    n[n.Minimal = 1] = "Minimal";
    n[n.None = 2] = "None";
})(zlh ||= {});
(function(n) {
    class e extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            if (!B.position) {
                return;
            }
            I.model.pushStackElement();
            if (I.setCursorStates(B.source, 3, [y9.moveTo(I, I.getPrimaryCursorState(), this._inSelectionMode, B.position, B.viewPosition)]) && B.revealType !== 2) {
                I.revealAllCursors(B.source, true, true);
            }
        }
    }
    n.MoveTo = ld(new e({
        id: "_moveTo",
        inSelectionMode: false,
        precondition: undefined
    }));
    n.MoveToSelect = ld(new e({
        id: "_moveToSelect",
        inSelectionMode: true,
        precondition: undefined
    }));
    class t extends qR {
        runCoreEditorCommand(I, B) {
            I.model.pushStackElement();
            const R = this._getColumnSelectResult(I, I.getPrimaryCursorState(), I.getCursorColumnSelectData(), B);
            if (R !== null) {
                I.setCursorStates(B.source, 3, R.viewStates.map(N => s_.fromViewState(N)));
                I.setCursorColumnSelectData({
                    isReal: true,
                    fromViewLineNumber: R.fromLineNumber,
                    fromViewVisualColumn: R.fromVisualColumn,
                    toViewLineNumber: R.toLineNumber,
                    toViewVisualColumn: R.toVisualColumn
                });
                if (R.reversed) {
                    I.revealTopMostCursor(B.source);
                } else {
                    I.revealBottomMostCursor(B.source);
                }
            }
        }
    }
    n.ColumnSelect = ld(new class extends t {
        constructor() {
            super({
                id: "columnSelect",
                precondition: undefined
            });
        }
        _getColumnSelectResult(x, I, B, R) {
            if (typeof R.position === "undefined" || typeof R.viewPosition === "undefined" || typeof R.mouseColumn === "undefined") {
                return null;
            }
            const N = x.model.validatePosition(R.position);
            const M = x.coordinatesConverter.validateViewPosition(new ar(R.viewPosition.lineNumber, R.viewPosition.column), N);
            const O = R.doColumnSelect ? B.fromViewLineNumber : M.lineNumber;
            const $ = R.doColumnSelect ? B.fromViewVisualColumn : R.mouseColumn - 1;
            return N4t.columnSelect(x.cursorConfig, x, O, $, M.lineNumber, R.mouseColumn - 1);
        }
    }());
    n.CursorColumnSelectLeft = ld(new class extends t {
        constructor() {
            super({
                id: "cursorColumnSelectLeft",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 3599,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
        _getColumnSelectResult(x, I, B, R) {
            return N4t.columnSelectLeft(x.cursorConfig, x, B);
        }
    }());
    n.CursorColumnSelectRight = ld(new class extends t {
        constructor() {
            super({
                id: "cursorColumnSelectRight",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 3601,
                    linux: {
                        primary: 0
                    }
                }
            });
        }
        _getColumnSelectResult(x, I, B, R) {
            return N4t.columnSelectRight(x.cursorConfig, x, B);
        }
    }());
    class i extends t {
        constructor(I) {
            super(I);
            this._isPaged = I.isPaged;
        }
        _getColumnSelectResult(I, B, R, N) {
            return N4t.columnSelectUp(I.cursorConfig, I, R, this._isPaged);
        }
    }
    n.CursorColumnSelectUp = ld(new i({
        isPaged: false,
        id: "cursorColumnSelectUp",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 3600,
            linux: {
                primary: 0
            }
        }
    }));
    n.CursorColumnSelectPageUp = ld(new i({
        isPaged: true,
        id: "cursorColumnSelectPageUp",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 3595,
            linux: {
                primary: 0
            }
        }
    }));
    class r extends t {
        constructor(I) {
            super(I);
            this._isPaged = I.isPaged;
        }
        _getColumnSelectResult(I, B, R, N) {
            return N4t.columnSelectDown(I.cursorConfig, I, R, this._isPaged);
        }
    }
    n.CursorColumnSelectDown = ld(new r({
        isPaged: false,
        id: "cursorColumnSelectDown",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 3602,
            linux: {
                primary: 0
            }
        }
    }));
    n.CursorColumnSelectPageDown = ld(new r({
        isPaged: true,
        id: "cursorColumnSelectPageDown",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 3596,
            linux: {
                primary: 0
            }
        }
    }));
    class s extends qR {
        constructor() {
            super({
                id: "cursorMove",
                precondition: undefined,
                metadata: KFo.metadata
            });
        }
        runCoreEditorCommand(I, B) {
            const R = KFo.parse(B);
            if (R) {
                this._runCursorMove(I, B.source, R);
            }
        }
        _runCursorMove(I, B, R) {
            I.model.pushStackElement();
            I.setCursorStates(B, 3, s._move(I, I.getCursorStates(), R));
            I.revealAllCursors(B, true);
        }
        static _move(I, B, R) {
            const N = R.select;
            const M = R.value;
            switch (R.direction) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    return y9.simpleMove(I, B, R.direction, N, M, R.unit);
                case 11:
                case 13:
                case 12:
                case 14:
                    return y9.viewportMove(I, B, R.direction, N, M);
                default:
                    return null;
            }
        }
    }
    n.CursorMoveImpl = s;
    n.CursorMove = ld(new s());
    let o;
    (function(x) {
        x[x.PAGE_SIZE_MARKER = -1] = "PAGE_SIZE_MARKER";
    })(o ||= {});
    class a extends qR {
        constructor(I) {
            super(I);
            this._staticArgs = I.args;
        }
        runCoreEditorCommand(I, B) {
            let R = this._staticArgs;
            if (this._staticArgs.value === -1) {
                R = {
                    direction: this._staticArgs.direction,
                    unit: this._staticArgs.unit,
                    select: this._staticArgs.select,
                    value: B.pageSize || I.cursorConfig.pageSize
                };
            }
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, y9.simpleMove(I, I.getCursorStates(), R.direction, R.select, R.value, R.unit));
            I.revealAllCursors(B.source, true);
        }
    }
    n.CursorLeft = ld(new a({
        args: {
            direction: 0,
            unit: 0,
            select: false,
            value: 1
        },
        id: "cursorLeft",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 15,
            mac: {
                primary: 15,
                secondary: [288]
            }
        }
    }));
    n.CursorLeftSelect = ld(new a({
        args: {
            direction: 0,
            unit: 0,
            select: true,
            value: 1
        },
        id: "cursorLeftSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1039
        }
    }));
    n.CursorRight = ld(new a({
        args: {
            direction: 1,
            unit: 0,
            select: false,
            value: 1
        },
        id: "cursorRight",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 17,
            mac: {
                primary: 17,
                secondary: [292]
            }
        }
    }));
    n.CursorRightSelect = ld(new a({
        args: {
            direction: 1,
            unit: 0,
            select: true,
            value: 1
        },
        id: "cursorRightSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1041
        }
    }));
    n.CursorUp = ld(new a({
        args: {
            direction: 2,
            unit: 2,
            select: false,
            value: 1
        },
        id: "cursorUp",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 16,
            mac: {
                primary: 16,
                secondary: [302]
            }
        }
    }));
    n.CursorUpSelect = ld(new a({
        args: {
            direction: 2,
            unit: 2,
            select: true,
            value: 1
        },
        id: "cursorUpSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1040,
            secondary: [3088],
            mac: {
                primary: 1040
            },
            linux: {
                primary: 1040
            }
        }
    }));
    n.CursorPageUp = ld(new a({
        args: {
            direction: 2,
            unit: 2,
            select: false,
            value: -1
        },
        id: "cursorPageUp",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 11
        }
    }));
    n.CursorPageUpSelect = ld(new a({
        args: {
            direction: 2,
            unit: 2,
            select: true,
            value: -1
        },
        id: "cursorPageUpSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1035
        }
    }));
    n.CursorDown = ld(new a({
        args: {
            direction: 3,
            unit: 2,
            select: false,
            value: 1
        },
        id: "cursorDown",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 18,
            mac: {
                primary: 18,
                secondary: [300]
            }
        }
    }));
    n.CursorDownSelect = ld(new a({
        args: {
            direction: 3,
            unit: 2,
            select: true,
            value: 1
        },
        id: "cursorDownSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1042,
            secondary: [3090],
            mac: {
                primary: 1042
            },
            linux: {
                primary: 1042
            }
        }
    }));
    n.CursorPageDown = ld(new a({
        args: {
            direction: 3,
            unit: 2,
            select: false,
            value: -1
        },
        id: "cursorPageDown",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 12
        }
    }));
    n.CursorPageDownSelect = ld(new a({
        args: {
            direction: 3,
            unit: 2,
            select: true,
            value: -1
        },
        id: "cursorPageDownSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1036
        }
    }));
    n.CreateCursor = ld(new class extends qR {
        constructor() {
            super({
                id: "createCursor",
                precondition: undefined
            });
        }
        runCoreEditorCommand(x, I) {
            if (!I.position) {
                return;
            }
            let B;
            if (I.wholeLine) {
                B = y9.line(x, x.getPrimaryCursorState(), false, I.position, I.viewPosition);
            } else {
                B = y9.moveTo(x, x.getPrimaryCursorState(), false, I.position, I.viewPosition);
            }
            const R = x.getCursorStates();
            if (R.length > 1) {
                const N = B.modelState ? B.modelState.position : null;
                const M = B.viewState ? B.viewState.position : null;
                for (let O = 0, $ = R.length; O < $; O++) {
                    const H = R[O];
                    if ((!N || !!H.modelState.selection.containsPosition(N)) && (!M || !!H.viewState.selection.containsPosition(M))) {
                        R.splice(O, 1);
                        x.model.pushStackElement();
                        x.setCursorStates(I.source, 3, R);
                        return;
                    }
                }
            }
            R.push(B);
            x.model.pushStackElement();
            x.setCursorStates(I.source, 3, R);
        }
    }());
    n.LastCursorMoveToSelect = ld(new class extends qR {
        constructor() {
            super({
                id: "_lastCursorMoveToSelect",
                precondition: undefined
            });
        }
        runCoreEditorCommand(x, I) {
            if (!I.position) {
                return;
            }
            const B = x.getLastAddedCursorIndex();
            const R = x.getCursorStates();
            const N = R.slice(0);
            N[B] = y9.moveTo(x, R[B], true, I.position, I.viewPosition);
            x.model.pushStackElement();
            x.setCursorStates(I.source, 3, N);
        }
    }());
    class l extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, y9.moveToBeginningOfLine(I, I.getCursorStates(), this._inSelectionMode));
            I.revealAllCursors(B.source, true);
        }
    }
    n.CursorHome = ld(new l({
        inSelectionMode: false,
        id: "cursorHome",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 14,
            mac: {
                primary: 14,
                secondary: [2063]
            }
        }
    }));
    n.CursorHomeSelect = ld(new l({
        inSelectionMode: true,
        id: "cursorHomeSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1038,
            mac: {
                primary: 1038,
                secondary: [3087]
            }
        }
    }));
    class u extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, this._exec(I.getCursorStates()));
            I.revealAllCursors(B.source, true);
        }
        _exec(I) {
            const B = [];
            for (let R = 0, N = I.length; R < N; R++) {
                const M = I[R];
                const O = M.modelState.position.lineNumber;
                B[R] = s_.fromModelState(M.modelState.move(this._inSelectionMode, O, 1, 0));
            }
            return B;
        }
    }
    n.CursorLineStart = ld(new u({
        inSelectionMode: false,
        id: "cursorLineStart",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 0,
            mac: {
                primary: 287
            }
        }
    }));
    n.CursorLineStartSelect = ld(new u({
        inSelectionMode: true,
        id: "cursorLineStartSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 0,
            mac: {
                primary: 1311
            }
        }
    }));
    class d extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, y9.moveToEndOfLine(I, I.getCursorStates(), this._inSelectionMode, B.sticky || false));
            I.revealAllCursors(B.source, true);
        }
    }
    n.CursorEnd = ld(new d({
        inSelectionMode: false,
        id: "cursorEnd",
        precondition: undefined,
        kbOpts: {
            args: {
                sticky: false
            },
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 13,
            mac: {
                primary: 13,
                secondary: [2065]
            }
        },
        metadata: {
            description: "Go to End",
            args: [{
                name: "args",
                schema: {
                    type: "object",
                    properties: {
                        sticky: {
                            description: _(186, null),
                            type: "boolean",
                            default: false
                        }
                    }
                }
            }]
        }
    }));
    n.CursorEndSelect = ld(new d({
        inSelectionMode: true,
        id: "cursorEndSelect",
        precondition: undefined,
        kbOpts: {
            args: {
                sticky: false
            },
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 1037,
            mac: {
                primary: 1037,
                secondary: [3089]
            }
        },
        metadata: {
            description: "Select to End",
            args: [{
                name: "args",
                schema: {
                    type: "object",
                    properties: {
                        sticky: {
                            description: _(187, null),
                            type: "boolean",
                            default: false
                        }
                    }
                }
            }]
        }
    }));
    class m extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, this._exec(I, I.getCursorStates()));
            I.revealAllCursors(B.source, true);
        }
        _exec(I, B) {
            const R = [];
            for (let N = 0, M = B.length; N < M; N++) {
                const O = B[N];
                const $ = O.modelState.position.lineNumber;
                const H = I.model.getLineMaxColumn($);
                R[N] = s_.fromModelState(O.modelState.move(this._inSelectionMode, $, H, 0));
            }
            return R;
        }
    }
    n.CursorLineEnd = ld(new m({
        inSelectionMode: false,
        id: "cursorLineEnd",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 0,
            mac: {
                primary: 291
            }
        }
    }));
    n.CursorLineEndSelect = ld(new m({
        inSelectionMode: true,
        id: "cursorLineEndSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 0,
            mac: {
                primary: 1315
            }
        }
    }));
    class p extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, y9.moveToBeginningOfBuffer(I, I.getCursorStates(), this._inSelectionMode));
            I.revealAllCursors(B.source, true);
        }
    }
    n.CursorTop = ld(new p({
        inSelectionMode: false,
        id: "cursorTop",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 2062,
            mac: {
                primary: 2064
            }
        }
    }));
    n.CursorTopSelect = ld(new p({
        inSelectionMode: true,
        id: "cursorTopSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 3086,
            mac: {
                primary: 3088
            }
        }
    }));
    class g extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, y9.moveToEndOfBuffer(I, I.getCursorStates(), this._inSelectionMode));
            I.revealAllCursors(B.source, true);
        }
    }
    n.CursorBottom = ld(new g({
        inSelectionMode: false,
        id: "cursorBottom",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 2061,
            mac: {
                primary: 2066
            }
        }
    }));
    n.CursorBottomSelect = ld(new g({
        inSelectionMode: true,
        id: "cursorBottomSelect",
        precondition: undefined,
        kbOpts: {
            weight: O0,
            kbExpr: Ci.textInputFocus,
            primary: 3085,
            mac: {
                primary: 3090
            }
        }
    }));
    class f extends qR {
        constructor() {
            super({
                id: "editorScroll",
                precondition: undefined,
                metadata: q$.metadata
            });
        }
        determineScrollMethod(I) {
            const B = [6];
            const R = [1, 2, 3, 4, 5, 6];
            const N = [4, 2];
            const M = [1, 3];
            if (B.includes(I.unit) && N.includes(I.direction)) {
                return this._runHorizontalEditorScroll.bind(this);
            } else if (R.includes(I.unit) && M.includes(I.direction)) {
                return this._runVerticalEditorScroll.bind(this);
            } else {
                return null;
            }
        }
        runCoreEditorCommand(I, B) {
            const R = q$.parse(B);
            if (!R) {
                return;
            }
            const N = this.determineScrollMethod(R);
            if (N) {
                N(I, B.source, R);
            }
        }
        _runVerticalEditorScroll(I, B, R) {
            const N = this._computeDesiredScrollTop(I, R);
            if (R.revealCursor) {
                const M = I.getCompletelyVisibleViewRangeAtScrollTop(N);
                I.setCursorStates(B, 3, [y9.findPositionInViewportIfOutside(I, I.getPrimaryCursorState(), M, R.select)]);
            }
            I.viewLayout.setScrollPosition({
                scrollTop: N
            }, 0);
        }
        _computeDesiredScrollTop(I, B) {
            if (B.unit === 1) {
                const M = I.viewLayout.getFutureViewport();
                const O = I.getCompletelyVisibleViewRangeAtScrollTop(M.top);
                const $ = I.coordinatesConverter.convertViewRangeToModelRange(O);
                let H;
                if (B.direction === 1) {
                    H = Math.max(1, $.startLineNumber - B.value);
                } else {
                    H = Math.min(I.model.getLineCount(), $.startLineNumber + B.value);
                }
                const W = I.coordinatesConverter.convertModelPositionToViewPosition(new ar(H, 1));
                return I.viewLayout.getVerticalOffsetForLineNumber(W.lineNumber);
            }
            if (B.unit === 5) {
                let M = 0;
                if (B.direction === 3) {
                    M = I.model.getLineCount() - I.cursorConfig.pageSize;
                }
                return I.viewLayout.getVerticalOffsetForLineNumber(M);
            }
            let R;
            if (B.unit === 3) {
                R = I.cursorConfig.pageSize * B.value;
            } else if (B.unit === 4) {
                R = Math.round(I.cursorConfig.pageSize / 2) * B.value;
            } else {
                R = B.value;
            }
            const N = (B.direction === 1 ? -1 : 1) * R;
            return I.viewLayout.getCurrentScrollTop() + N * I.cursorConfig.lineHeight;
        }
        _runHorizontalEditorScroll(I, B, R) {
            const N = this._computeDesiredScrollLeft(I, R);
            I.viewLayout.setScrollPosition({
                scrollLeft: N
            }, 0);
        }
        _computeDesiredScrollLeft(I, B) {
            const R = (B.direction === 4 ? -1 : 1) * B.value;
            return I.viewLayout.getCurrentScrollLeft() + R * I.cursorConfig.typicalHalfwidthCharacterWidth;
        }
    }
    n.EditorScrollImpl = f;
    n.EditorScroll = ld(new f());
    n.ScrollLineUp = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollLineUp",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 2064,
                    mac: {
                        primary: 267
                    }
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Up,
                by: q$.RawUnit.WrappedLine,
                value: 1,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    n.ScrollPageUp = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollPageUp",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 2059,
                    win: {
                        primary: 523
                    },
                    linux: {
                        primary: 523
                    }
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Up,
                by: q$.RawUnit.Page,
                value: 1,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    n.ScrollEditorTop = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollEditorTop",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Up,
                by: q$.RawUnit.Editor,
                value: 1,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    n.ScrollLineDown = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollLineDown",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 2066,
                    mac: {
                        primary: 268
                    }
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Down,
                by: q$.RawUnit.WrappedLine,
                value: 1,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    n.ScrollPageDown = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollPageDown",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 2060,
                    win: {
                        primary: 524
                    },
                    linux: {
                        primary: 524
                    }
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Down,
                by: q$.RawUnit.Page,
                value: 1,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    n.ScrollEditorBottom = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollEditorBottom",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Down,
                by: q$.RawUnit.Editor,
                value: 1,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    n.ScrollLeft = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollLeft",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Left,
                by: q$.RawUnit.Column,
                value: 2,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    n.ScrollRight = ld(new class extends qR {
        constructor() {
            super({
                id: "scrollRight",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus
                }
            });
        }
        runCoreEditorCommand(x, I) {
            n.EditorScroll.runCoreEditorCommand(x, {
                to: q$.RawDirection.Right,
                by: q$.RawUnit.Column,
                value: 2,
                revealCursor: false,
                select: false,
                source: I.source
            });
        }
    }());
    class A extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            if (B.position) {
                I.model.pushStackElement();
                I.setCursorStates(B.source, 3, [y9.word(I, I.getPrimaryCursorState(), this._inSelectionMode, B.position)]);
                if (B.revealType !== 2) {
                    I.revealAllCursors(B.source, true, true);
                }
            }
        }
    }
    n.WordSelect = ld(new A({
        inSelectionMode: false,
        id: "_wordSelect",
        precondition: undefined
    }));
    n.WordSelectDrag = ld(new A({
        inSelectionMode: true,
        id: "_wordSelectDrag",
        precondition: undefined
    }));
    n.LastCursorWordSelect = ld(new class extends qR {
        constructor() {
            super({
                id: "lastCursorWordSelect",
                precondition: undefined
            });
        }
        runCoreEditorCommand(x, I) {
            if (!I.position) {
                return;
            }
            const B = x.getLastAddedCursorIndex();
            const R = x.getCursorStates();
            const N = R.slice(0);
            const M = R[B];
            N[B] = y9.word(x, M, M.modelState.hasSelection(), I.position);
            x.model.pushStackElement();
            x.setCursorStates(I.source, 3, N);
        }
    }());
    class w extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            if (B.position) {
                I.model.pushStackElement();
                I.setCursorStates(B.source, 3, [y9.line(I, I.getPrimaryCursorState(), this._inSelectionMode, B.position, B.viewPosition)]);
                if (B.revealType !== 2) {
                    I.revealAllCursors(B.source, false, true);
                }
            }
        }
    }
    n.LineSelect = ld(new w({
        inSelectionMode: false,
        id: "_lineSelect",
        precondition: undefined
    }));
    n.LineSelectDrag = ld(new w({
        inSelectionMode: true,
        id: "_lineSelectDrag",
        precondition: undefined
    }));
    class C extends qR {
        constructor(I) {
            super(I);
            this._inSelectionMode = I.inSelectionMode;
        }
        runCoreEditorCommand(I, B) {
            if (!B.position) {
                return;
            }
            const R = I.getLastAddedCursorIndex();
            const N = I.getCursorStates();
            const M = N.slice(0);
            M[R] = y9.line(I, N[R], this._inSelectionMode, B.position, B.viewPosition);
            I.model.pushStackElement();
            I.setCursorStates(B.source, 3, M);
        }
    }
    n.LastCursorLineSelect = ld(new C({
        inSelectionMode: false,
        id: "lastCursorLineSelect",
        precondition: undefined
    }));
    n.LastCursorLineSelectDrag = ld(new C({
        inSelectionMode: true,
        id: "lastCursorLineSelectDrag",
        precondition: undefined
    }));
    n.CancelSelection = ld(new class extends qR {
        constructor() {
            super({
                id: "cancelSelection",
                precondition: Ci.hasNonEmptySelection,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 9,
                    secondary: [1033]
                }
            });
        }
        runCoreEditorCommand(x, I) {
            x.model.pushStackElement();
            x.setCursorStates(I.source, 3, [y9.cancelSelection(x, x.getPrimaryCursorState())]);
            x.revealAllCursors(I.source, true);
        }
    }());
    n.RemoveSecondaryCursors = ld(new class extends qR {
        constructor() {
            super({
                id: "removeSecondaryCursors",
                precondition: Ci.hasMultipleSelections,
                kbOpts: {
                    weight: O0 + 1,
                    kbExpr: Ci.textInputFocus,
                    primary: 9,
                    secondary: [1033]
                }
            });
        }
        runCoreEditorCommand(x, I) {
            x.model.pushStackElement();
            x.setCursorStates(I.source, 3, [x.getPrimaryCursorState()]);
            x.revealAllCursors(I.source, true);
            Ex(_(188, null));
        }
    }());
    n.RevealLine = ld(new class extends qR {
        constructor() {
            super({
                id: "revealLine",
                precondition: undefined,
                metadata: V4t.metadata
            });
        }
        runCoreEditorCommand(x, I) {
            const B = I;
            const R = B.lineNumber || 0;
            let N = typeof R == "number" ? R + 1 : parseInt(R) + 1;
            if (N < 1) {
                N = 1;
            }
            const M = x.model.getLineCount();
            if (N > M) {
                N = M;
            }
            const O = new Zt(N, 1, N, x.model.getLineMaxColumn(N));
            let $ = 0;
            if (B.at) {
                switch (B.at) {
                    case V4t.RawAtArgument.Top:
                        $ = 3;
                        break;
                    case V4t.RawAtArgument.Center:
                        $ = 1;
                        break;
                    case V4t.RawAtArgument.Bottom:
                        $ = 4;
                        break;
                    default:
                        break;
                }
            }
            const H = x.coordinatesConverter.convertModelRangeToViewRange(O);
            x.revealRange(I.source, false, H, $, 0);
        }
    }());
    n.SelectAll = new class extends y4o {
        constructor() {
            super(Bkc);
        }
        runDOMCommand(x) {
            if (u3) {
                x.focus();
                x.select();
            }
            x.ownerDocument.execCommand("selectAll");
        }
        runEditorCommand(x, I, B) {
            const R = I._getViewModel();
            if (R) {
                this.runCoreEditorCommand(R, B);
            }
        }
        runCoreEditorCommand(x, I) {
            x.model.pushStackElement();
            x.setCursorStates("keyboard", 3, [y9.selectAll(x, x.getPrimaryCursorState())]);
        }
    }();
    n.SetSelection = ld(new class extends qR {
        constructor() {
            super({
                id: "setSelection",
                precondition: undefined
            });
        }
        runCoreEditorCommand(x, I) {
            if (I.selection) {
                x.model.pushStackElement();
                x.setCursorStates(I.source, 3, [s_.fromModelSelection(I.selection)]);
            }
        }
    }());
})(F4 ||= {});
Vlh = Ee.and(Ci.textInputFocus, Ci.columnSelection);
z4t(F4.CursorColumnSelectLeft.id, 1039);
z4t(F4.CursorColumnSelectRight.id, 1041);
z4t(F4.CursorColumnSelectUp.id, 1040);
z4t(F4.CursorColumnSelectPageUp.id, 1035);
z4t(F4.CursorColumnSelectDown.id, 1042);
z4t(F4.CursorColumnSelectPageDown.id, 1036);
(function(n) {
    class e extends dF {
        runEditorCommand(i, r, s) {
            const o = r._getViewModel();
            if (o) {
                this.runCoreEditingCommand(r, o, s || {});
            }
        }
    }
    n.CoreEditingCommand = e;
    n.LineBreakInsert = ld(new class extends e {
        constructor() {
            super({
                id: "lineBreakInsert",
                precondition: Ci.writable,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 0,
                    mac: {
                        primary: 301
                    }
                }
            });
        }
        runCoreEditingCommand(t, i, r) {
            t.pushUndoStop();
            t.executeCommands(this.id, T4n.lineBreakInsert(i.cursorConfig, i.model, i.getCursorStates().map(s => s.modelState.selection)));
        }
    }());
    n.Outdent = ld(new class extends e {
        constructor() {
            super({
                id: "outdent",
                precondition: Ci.writable,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ee.and(Ci.editorTextFocus, Ci.tabDoesNotMoveFocus),
                    primary: 1026
                }
            });
        }
        runCoreEditingCommand(t, i, r) {
            t.pushUndoStop();
            t.executeCommands(this.id, VBe.outdent(i.cursorConfig, i.model, i.getCursorStates().map(s => s.modelState.selection)));
            t.pushUndoStop();
        }
    }());
    n.Tab = ld(new class extends e {
        constructor() {
            super({
                id: "tab",
                precondition: Ci.writable,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ee.and(Ci.editorTextFocus, Ci.tabDoesNotMoveFocus),
                    primary: 2
                }
            });
        }
        runCoreEditingCommand(t, i, r) {
            t.pushUndoStop();
            t.executeCommands(this.id, VBe.tab(i.cursorConfig, i.model, i.getCursorStates().map(s => s.modelState.selection)));
            t.pushUndoStop();
        }
    }());
    n.DeleteLeft = ld(new class extends e {
        constructor() {
            super({
                id: "deleteLeft",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 1,
                    secondary: [1025],
                    mac: {
                        primary: 1,
                        secondary: [1025, 294, 257]
                    }
                }
            });
        }
        runCoreEditingCommand(t, i, r) {
            const [s, o] = Xgt.deleteLeft(i.getPrevEditOperationType(), i.cursorConfig, i.model, i.getCursorStates().map(a => a.modelState.selection), i.getCursorAutoClosedCharacters());
            if (s) {
                t.pushUndoStop();
            }
            t.executeCommands(this.id, o);
            i.setPrevEditOperationType(2);
        }
    }());
    n.DeleteRight = ld(new class extends e {
        constructor() {
            super({
                id: "deleteRight",
                precondition: undefined,
                kbOpts: {
                    weight: O0,
                    kbExpr: Ci.textInputFocus,
                    primary: 20,
                    mac: {
                        primary: 20,
                        secondary: [290, 276]
                    }
                }
            });
        }
        runCoreEditingCommand(t, i, r) {
            const [s, o] = Xgt.deleteRight(i.getPrevEditOperationType(), i.cursorConfig, i.model, i.getCursorStates().map(a => a.modelState.selection));
            if (s) {
                t.pushUndoStop();
            }
            t.executeCommands(this.id, o);
            i.setPrevEditOperationType(3);
        }
    }());
    n.Undo = new class extends y4o {
        constructor() {
            super(M5e);
        }
        runDOMCommand(t) {
            t.ownerDocument.execCommand("undo");
        }
        runEditorCommand(t, i, r) {
            if (!!i.hasModel() && i.getOption(96) !== true) {
                return i.getModel().undo();
            }
        }
    }();
    n.Redo = new class extends y4o {
        constructor() {
            super(F5e);
        }
        runDOMCommand(t) {
            t.ownerDocument.execCommand("redo");
        }
        runEditorCommand(t, i, r) {
            if (!!i.hasModel() && i.getOption(96) !== true) {
                return i.getModel().redo();
            }
        }
    }();
})(KBe ||= {});
l1c = class extends l4n {
    constructor(n, e, t) {
        super({
            id: n,
            precondition: undefined,
            metadata: t
        });
        this._handlerId = e;
    }
    runCommand(n, e) {
        const t = n.get(fl).getFocusedCodeEditor();
        if (t) {
            t.trigger("keyboard", this._handlerId, e);
        }
    }
};
sft("type", {
    description: "Type",
    args: [{
        name: "args",
        schema: {
            type: "object",
            required: ["text"],
            properties: {
                text: {
                    type: "string"
                }
            }
        }
    }]
});
sft("replacePreviousChar");
sft("compositionType");
sft("compositionStart");
sft("compositionEnd");
sft("paste");
sft("cut");
