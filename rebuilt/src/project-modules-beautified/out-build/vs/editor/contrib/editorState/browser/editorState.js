"use strict";

// Module: out-build/vs/editor/contrib/editorState/browser/editorState.js
// Offset: 2422273 (bundle byte offset)
// Size: 1878 bytes
oa();
ts();
Po();
rt();
ThA();
(function(n) {
    n[n.Value = 1] = "Value";
    n[n.Selection = 2] = "Selection";
    n[n.Position = 4] = "Position";
    n[n.Scroll = 8] = "Scroll";
})(qSh ||= {});
z3n = class Jad {
    constructor(e, t) {
        this.flags = t;
        if ((this.flags & 1) !== 0) {
            const i = e.getModel();
            this.modelVersionId = i ? B4("{0}#{1}", i.uri.toString(), i.getVersionId()) : null;
        } else {
            this.modelVersionId = null;
        }
        if ((this.flags & 4) !== 0) {
            this.position = e.getPosition();
        } else {
            this.position = null;
        }
        if ((this.flags & 2) !== 0) {
            this.selection = e.getSelection();
        } else {
            this.selection = null;
        }
        if ((this.flags & 8) !== 0) {
            this.scrollLeft = e.getScrollLeft();
            this.scrollTop = e.getScrollTop();
        } else {
            this.scrollLeft = -1;
            this.scrollTop = -1;
        }
    }
    _equals(e) {
        if (!(e instanceof Jad)) {
            return false;
        }
        const t = e;
        return this.modelVersionId === t.modelVersionId && this.scrollLeft === t.scrollLeft && this.scrollTop === t.scrollTop && (!!this.position || !t.position) && (!this.position || !!t.position) && (!this.position || !t.position || !!this.position.equals(t.position)) && (!!this.selection || !t.selection) && (!this.selection || !!t.selection) && (!this.selection || !t.selection || !!this.selection.equalsRange(t.selection));
    }
    validate(e) {
        return this._equals(new Jad(e, this.flags));
    }
};
ERe = class extends $Sh {
    constructor(n, e, t, i) {
        super(n, i);
        this._listener = new Ut();
        if (e & 4) {
            this._listener.add(n.onDidChangeCursorPosition(r => {
                if (!t || !Zt.containsPosition(t, r.position)) {
                    this.cancel();
                }
            }));
        }
        if (e & 2) {
            this._listener.add(n.onDidChangeCursorSelection(r => {
                if (!t || !Zt.containsRange(t, r.selection)) {
                    this.cancel();
                }
            }));
        }
        if (e & 8) {
            this._listener.add(n.onDidScrollChange(r => this.cancel()));
        }
        if (e & 1) {
            this._listener.add(n.onDidChangeModel(r => this.cancel()));
            this._listener.add(n.onDidChangeModelContent(r => this.cancel()));
        }
    }
    dispose() {
        this._listener.dispose();
        super.dispose();
    }
};
V3n = class extends Wc {
    constructor(n, e) {
        super(e);
        this._listener = n.onDidChangeContent(() => this.cancel());
    }
    dispose() {
        this._listener.dispose();
        super.dispose();
    }
};
