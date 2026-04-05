"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/suggestAlternatives.js
// Offset: 25360845 (bundle byte offset)
// Size: 1208 bytes
si();
TCt = class {
    static {
        Mgi = this;
    }
    static {
        this.OtherSuggestions = new Sn("hasOtherSuggestions", false);
    }
    constructor(e, t) {
        this._editor = e;
        this._index = 0;
        this._ckOtherSuggestions = Mgi.OtherSuggestions.bindTo(t);
    }
    dispose() {
        this.reset();
    }
    reset() {
        this._ckOtherSuggestions.reset();
        this._listener?.dispose();
        this._model = undefined;
        this._acceptNext = undefined;
        this._ignore = false;
    }
    set({
        model: e,
        index: t
    }, i) {
        if (e.items.length === 0) {
            this.reset();
            return;
        }
        if (Mgi._moveIndex(true, e, t) === t) {
            this.reset();
            return;
        }
        this._acceptNext = i;
        this._model = e;
        this._index = t;
        this._listener = this._editor.onDidChangeCursorPosition(() => {
            if (!this._ignore) {
                this.reset();
            }
        });
        this._ckOtherSuggestions.set(true);
    }
    static _moveIndex(e, t, i) {
        let r = i;
        for (let s = t.items.length; s > 0 && (r = (r + t.items.length + (e ? 1 : -1)) % t.items.length, r !== i && !!t.items[r].completion.additionalTextEdits); s--);
        return r;
    }
    next() {
        this._move(true);
    }
    prev() {
        this._move(false);
    }
    _move(e) {
        if (this._model) {
            try {
                this._ignore = true;
                this._index = Mgi._moveIndex(e, this._model, this._index);
                this._acceptNext({
                    index: this._index,
                    item: this._model.items[this._index],
                    model: this._model
                });
            } finally {
                this._ignore = false;
            }
        }
    }
};
TCt = Mgi = __decorate([__param(1, wi)], TCt);
