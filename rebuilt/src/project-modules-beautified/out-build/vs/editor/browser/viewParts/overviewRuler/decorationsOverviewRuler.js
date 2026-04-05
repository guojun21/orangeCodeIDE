"use strict";

// Module: out-build/vs/editor/browser/viewParts/overviewRuler/decorationsOverviewRuler.js
// Offset: 1714192 (bundle byte offset)
// Size: 7107 bytes
sI();
xf();
j$();
tl();
Tg();
az();
Lte();
Vs();
XAh = class {
    constructor(n, e) {
        const t = n.options;
        this.lineHeight = t.get(68);
        this.pixelRatio = t.get(149);
        this.overviewRulerLanes = t.get(87);
        this.renderBorder = t.get(86);
        const i = e.getColor(gEc);
        this.borderColor = i ? i.toString() : null;
        this.hideCursor = t.get(61);
        const r = e.getColor(COt);
        this.cursorColorSingle = r ? r.transparent(0.7).toString() : null;
        const s = e.getColor(dEc);
        this.cursorColorPrimary = s ? s.transparent(0.7).toString() : null;
        const o = e.getColor(hEc);
        this.cursorColorSecondary = o ? o.transparent(0.7).toString() : null;
        this.themeType = e.type;
        const a = t.get(74);
        const l = a.enabled;
        const u = a.side;
        const d = e.getColor(Bmh);
        const m = pT.getDefaultBackground();
        if (d) {
            this.backgroundColor = d;
        } else if (l && u === "right") {
            this.backgroundColor = m;
        } else {
            this.backgroundColor = null;
        }
        const g = t.get(151).overviewRuler;
        this.top = g.top;
        this.right = g.right;
        this.domWidth = g.width;
        this.domHeight = g.height;
        if (this.overviewRulerLanes === 0) {
            this.canvasWidth = 0;
            this.canvasHeight = 0;
        } else {
            this.canvasWidth = this.domWidth * this.pixelRatio | 0;
            this.canvasHeight = this.domHeight * this.pixelRatio | 0;
        }
        const [f, A] = this._initLanes(1, this.canvasWidth, this.overviewRulerLanes);
        this.x = f;
        this.w = A;
    }
    _initLanes(n, e, t) {
        const i = e - n;
        if (t >= 3) {
            const r = Math.floor(i / 3);
            const s = Math.floor(i / 3);
            const o = i - r - s;
            const a = n;
            const l = a + r;
            const u = a + r + o;
            return [
                [0, a, l, a, u, a, l, a],
                [0, r, o, r + o, s, r + o + s, o + s, r + o + s]
            ];
        } else if (t === 2) {
            const r = Math.floor(i / 2);
            const s = i - r;
            const o = n;
            const a = o + r;
            return [
                [0, o, o, o, a, o, o, o],
                [0, r, r, r, s, r + s, r + s, r + s]
            ];
        } else {
            const r = n;
            const s = i;
            return [
                [0, r, r, r, r, r, r, r],
                [0, s, s, s, s, s, s, s]
            ];
        }
    }
    equals(n) {
        return this.lineHeight === n.lineHeight && this.pixelRatio === n.pixelRatio && this.overviewRulerLanes === n.overviewRulerLanes && this.renderBorder === n.renderBorder && this.borderColor === n.borderColor && this.hideCursor === n.hideCursor && this.cursorColorSingle === n.cursorColorSingle && this.cursorColorPrimary === n.cursorColorPrimary && this.cursorColorSecondary === n.cursorColorSecondary && this.themeType === n.themeType && Xr.equals(this.backgroundColor, n.backgroundColor) && this.top === n.top && this.right === n.right && this.domWidth === n.domWidth && this.domHeight === n.domHeight && this.canvasWidth === n.canvasWidth && this.canvasHeight === n.canvasHeight;
    }
};
(function(n) {
    n[n.MIN_DECORATION_HEIGHT = 6] = "MIN_DECORATION_HEIGHT";
})(eyh ||= {});
(function(n) {
    n[n.Left = 1] = "Left";
    n[n.Center = 2] = "Center";
    n[n.Right = 4] = "Right";
    n[n.Full = 7] = "Full";
})(tyh ||= {});
(function(n) {
    n[n.NotNeeded = 0] = "NotNeeded";
    n[n.Maybe = 1] = "Maybe";
    n[n.Needed = 2] = "Needed";
})(nyh ||= {});
iyh = class extends yW {
    constructor(n) {
        super(n);
        this._actualShouldRender = 0;
        this._renderedDecorations = [];
        this._renderedCursorPositions = [];
        this._domNode = mw(document.createElement("canvas"));
        this._domNode.setClassName("decorationsOverviewRuler");
        this._domNode.setPosition("absolute");
        this._domNode.setLayerHinting(true);
        this._domNode.setContain("strict");
        this._domNode.setAttribute("aria-hidden", "true");
        this._updateSettings(false);
        this._tokensColorTrackerListener = pT.onDidChange(e => {
            if (e.changedColorMap) {
                this._updateSettings(true);
            }
        });
        this._cursorPositions = [{
            position: new ar(1, 1),
            color: this._settings.cursorColorSingle
        }];
    }
    dispose() {
        super.dispose();
        this._tokensColorTrackerListener.dispose();
    }
    _updateSettings(n) {
        const e = new XAh(this._context.configuration, this._context.theme);
        if (this._settings && this._settings.equals(e)) {
            return false;
        } else {
            this._settings = e;
            this._domNode.setTop(this._settings.top);
            this._domNode.setRight(this._settings.right);
            this._domNode.setWidth(this._settings.domWidth);
            this._domNode.setHeight(this._settings.domHeight);
            this._domNode.domNode.width = this._settings.canvasWidth;
            this._domNode.domNode.height = this._settings.canvasHeight;
            if (n) {
                this._render();
            }
            return true;
        }
    }
    _markRenderingIsNeeded() {
        this._actualShouldRender = 2;
        return true;
    }
    _markRenderingIsMaybeNeeded() {
        this._actualShouldRender = 1;
        return true;
    }
    onConfigurationChanged(n) {
        if (this._updateSettings(false)) {
            return this._markRenderingIsNeeded();
        } else {
            return false;
        }
    }
    onCursorStateChanged(n) {
        this._cursorPositions = [];
        for (let e = 0, t = n.selections.length; e < t; e++) {
            let i = this._settings.cursorColorSingle;
            if (t > 1) {
                i = e === 0 ? this._settings.cursorColorPrimary : this._settings.cursorColorSecondary;
            }
            this._cursorPositions.push({
                position: n.selections[e].getPosition(),
                color: i
            });
        }
        this._cursorPositions.sort((e, t) => ar.compare(e.position, t.position));
        return this._markRenderingIsMaybeNeeded();
    }
    onDecorationsChanged(n) {
        if (n.affectsOverviewRuler) {
            return this._markRenderingIsMaybeNeeded();
        } else {
            return false;
        }
    }
    onFlushed(n) {
        return this._markRenderingIsNeeded();
    }
    onScrollChanged(n) {
        if (n.scrollHeightChanged) {
            return this._markRenderingIsNeeded();
        } else {
            return false;
        }
    }
    onZonesChanged(n) {
        return this._markRenderingIsNeeded();
    }
    onThemeChanged(n) {
        if (this._updateSettings(false)) {
            return this._markRenderingIsNeeded();
        } else {
            return false;
        }
    }
    getDomNode() {
        return this._domNode.domNode;
    }
    prepareRender(n) {}
    render(n) {
        this._render();
        this._actualShouldRender = 0;
    }
    _render() {
        const n = this._settings.backgroundColor;
        if (this._settings.overviewRulerLanes === 0) {
            this._domNode.setBackgroundColor(n ? Xr.Format.CSS.formatHexA(n) : "");
            this._domNode.setDisplay("none");
            return;
        }
        const e = this._context.viewModel.getAllOverviewRulerDecorations(this._context.theme);
        e.sort(KOo.compareByRenderingProps);
        if (this._actualShouldRender === 1 && !KOo.equalsArr(this._renderedDecorations, e)) {
            this._actualShouldRender = 2;
        }
        if (this._actualShouldRender === 1 && !cg(this._renderedCursorPositions, this._cursorPositions, (g, f) => g.position.lineNumber === f.position.lineNumber && g.color === f.color)) {
            this._actualShouldRender = 2;
        }
        if (this._actualShouldRender === 1) {
            return;
        }
        this._renderedDecorations = e;
        this._renderedCursorPositions = this._cursorPositions;
        this._domNode.setDisplay("block");
        const t = this._settings.canvasWidth;
        const i = this._settings.canvasHeight;
        const r = this._settings.lineHeight;
        const s = this._context.viewLayout;
        const o = this._context.viewLayout.getScrollHeight();
        const a = i / o;
        const l = this._settings.pixelRatio * 6 | 0;
        const u = l / 2 | 0;
        const d = this._domNode.domNode.getContext("2d");
        if (n) {
            if (n.isOpaque()) {
                d.fillStyle = Xr.Format.CSS.formatHexA(n);
                d.fillRect(0, 0, t, i);
            } else {
                d.clearRect(0, 0, t, i);
                d.fillStyle = Xr.Format.CSS.formatHexA(n);
                d.fillRect(0, 0, t, i);
            }
        } else {
            d.clearRect(0, 0, t, i);
        }
        const m = this._settings.x;
        const p = this._settings.w;
        for (const g of e) {
            const f = g.color;
            const A = g.data;
            d.fillStyle = f;
            let w = 0;
            let C = 0;
            let x = 0;
            for (let I = 0, B = A.length / 3; I < B; I++) {
                const R = A[I * 3];
                const N = A[I * 3 + 1];
                const M = A[I * 3 + 2];
                let O = s.getVerticalOffsetForLineNumber(N) * a | 0;
                let $ = (s.getVerticalOffsetForLineNumber(M) + r) * a | 0;
                if ($ - O < l) {
                    let W = (O + $) / 2 | 0;
                    if (W < u) {
                        W = u;
                    } else if (W + u > i) {
                        W = i - u;
                    }
                    O = W - u;
                    $ = W + u;
                }
                if (O > x + 1 || R !== w) {
                    if (I !== 0) {
                        d.fillRect(m[w], C, p[w], x - C);
                    }
                    w = R;
                    C = O;
                    x = $;
                } else if ($ > x) {
                    x = $;
                }
            }
            d.fillRect(m[w], C, p[w], x - C);
        }
        if (!this._settings.hideCursor) {
            const g = this._settings.pixelRatio * 2 | 0;
            const f = g / 2 | 0;
            const A = this._settings.x[7];
            const w = this._settings.w[7];
            let C = -100;
            let x = -100;
            let I = null;
            for (let B = 0, R = this._cursorPositions.length; B < R; B++) {
                const N = this._cursorPositions[B].color;
                if (!N) {
                    continue;
                }
                const M = this._cursorPositions[B].position;
                let O = s.getVerticalOffsetForLineNumber(M.lineNumber) * a | 0;
                if (O < f) {
                    O = f;
                } else if (O + f > i) {
                    O = i - f;
                }
                const $ = O - f;
                const H = $ + g;
                if ($ > x + 1 || N !== I) {
                    if (B !== 0 && I) {
                        d.fillRect(A, C, w, x - C);
                    }
                    C = $;
                    x = H;
                } else if (H > x) {
                    x = H;
                }
                I = N;
                d.fillStyle = N;
            }
            if (I) {
                d.fillRect(A, C, w, x - C);
            }
        }
        if (this._settings.renderBorder && this._settings.borderColor && this._settings.overviewRulerLanes > 0) {
            d.beginPath();
            d.lineWidth = 1;
            d.strokeStyle = this._settings.borderColor;
            d.moveTo(0, 0);
            d.lineTo(0, i);
            d.moveTo(1, 0);
            d.lineTo(t, 0);
            d.stroke();
        }
    }
};
