"use strict";

// Module: out-build/vs/editor/contrib/colorPicker/browser/hoverColorPicker/hoverColorPickerParticipant.js
// Offset: 24740565 (bundle byte offset)
// Size: 2387 bytes
vr();
ts();
Pvt();
Ymg();
mhe();
Io();
Ht();
npg();
ri();
rt();
wGl = class IWb {
    constructor(e, t, i, r) {
        this.owner = e;
        this.range = t;
        this.model = i;
        this.provider = r;
        this.forceShowAtRange = true;
    }
    isValidForHoverAnchor(e) {
        return e.type === 1 && this.range.startColumn <= e.range.startColumn && this.range.endColumn >= e.range.endColumn;
    }
    static fromBaseColor(e, t) {
        return new IWb(e, t.range, t.model, t.provider);
    }
};
bpi = class {
    constructor(e, t) {
        this._editor = e;
        this._themeService = t;
        this.hoverOrdinal = 2;
    }
    computeSync(e, t, i) {
        return [];
    }
    computeAsync(e, t, i, r) {
        return IH.fromPromise(this._computeAsync(e, t, i));
    }
    async _computeAsync(e, t, i) {
        if (!this._editor.hasModel()) {
            return [];
        }
        if (!this._isValidRequest(i)) {
            return [];
        }
        const r = iPe.get(this._editor);
        if (!r) {
            return [];
        }
        for (const s of t) {
            if (!r.isColorDecoration(s)) {
                continue;
            }
            const o = r.getColorData(s.range.getStartPosition());
            if (o) {
                return [wGl.fromBaseColor(this, await Xmg(this._editor.getModel(), o.colorInfo, o.provider))];
            }
        }
        return [];
    }
    _isValidRequest(e) {
        const t = this._editor.getOption(154);
        switch (e) {
            case 0:
                return t === "hover" || t === "clickAndHover";
            case 1:
                return t === "click" || t === "clickAndHover";
            case 2:
                return true;
        }
    }
    renderHoverParts(e, t) {
        const i = this._editor;
        if (t.length === 0 || !i.hasModel()) {
            return new nPe([]);
        }
        const r = i.getOption(68) + 8;
        e.setMinimumDimensions(new Lu(302, r));
        const s = new Ut();
        const o = t[0];
        const a = i.getModel();
        const l = o.model;
        this._colorPicker = s.add(new yGl(e.fragment, l, i.getOption(149), this._themeService, "hover"));
        let u = false;
        let d = new Zt(o.range.startLineNumber, o.range.startColumn, o.range.endLineNumber, o.range.endColumn);
        s.add(l.onColorFlushed(async p => {
            await fpi(a, l, p, d, o);
            u = true;
            d = epg(i, d, l);
        }));
        s.add(l.onDidChangeColor(p => {
            fpi(a, l, p, d, o);
        }));
        s.add(i.onDidChangeModelContent(p => {
            if (u) {
                u = false;
            } else {
                e.hide();
                i.focus();
            }
        }));
        const m = {
            hoverPart: wGl.fromBaseColor(this, o),
            hoverElement: this._colorPicker.domNode,
            dispose() {
                s.dispose();
            }
        };
        return new nPe([m]);
    }
    getAccessibleContent(e) {
        return _(1025, null);
    }
    handleResize() {
        this._colorPicker?.layout();
    }
    handleHide() {
        this._colorPicker?.dispose();
        this._colorPicker = undefined;
    }
    isColorPickerVisible() {
        return !!this._colorPicker;
    }
};
bpi = __decorate([__param(1, bo)], bpi);
