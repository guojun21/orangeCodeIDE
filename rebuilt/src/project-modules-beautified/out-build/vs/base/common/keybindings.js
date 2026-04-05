"use strict";

// Module: out-build/vs/base/common/keybindings.js
// Offset: 310422 (bundle byte offset)
// Size: 3053 bytes
_s();
(function(n) {
    n[n.CtrlCmd = 2048] = "CtrlCmd";
    n[n.Shift = 1024] = "Shift";
    n[n.Alt = 512] = "Alt";
    n[n.WinCtrl = 256] = "WinCtrl";
    n[n.KeyCode = 255] = "KeyCode";
})(Eih ||= {});
_Y = class iJb {
    constructor(e, t, i, r, s) {
        this.ctrlKey = e;
        this.shiftKey = t;
        this.altKey = i;
        this.metaKey = r;
        this.keyCode = s;
    }
    equals(e) {
        return e instanceof iJb && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode;
    }
    getHashCode() {
        const e = this.ctrlKey ? "1" : "0";
        const t = this.shiftKey ? "1" : "0";
        const i = this.altKey ? "1" : "0";
        const r = this.metaKey ? "1" : "0";
        return `K${e}${t}${i}${r}${this.keyCode}`;
    }
    isModifierKey() {
        return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4;
    }
    toKeybinding() {
        return new lgt([this]);
    }
    isDuplicateModifierCase() {
        return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57;
    }
};
u5e = class rJb {
    constructor(e, t, i, r, s) {
        this.ctrlKey = e;
        this.shiftKey = t;
        this.altKey = i;
        this.metaKey = r;
        this.scanCode = s;
    }
    equals(e) {
        return e instanceof rJb && this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.scanCode === e.scanCode;
    }
    getHashCode() {
        const e = this.ctrlKey ? "1" : "0";
        const t = this.shiftKey ? "1" : "0";
        const i = this.altKey ? "1" : "0";
        const r = this.metaKey ? "1" : "0";
        return `S${e}${t}${i}${r}${this.scanCode}`;
    }
    isDuplicateModifierCase() {
        return this.ctrlKey && (this.scanCode === 157 || this.scanCode === 161) || this.shiftKey && (this.scanCode === 158 || this.scanCode === 162) || this.altKey && (this.scanCode === 159 || this.scanCode === 163) || this.metaKey && (this.scanCode === 160 || this.scanCode === 164);
    }
};
lgt = class {
    constructor(n) {
        if (n.length === 0) {
            throw uw("chords");
        }
        this.chords = n;
    }
    getHashCode() {
        let n = "";
        for (let e = 0, t = this.chords.length; e < t; e++) {
            if (e !== 0) {
                n += ";";
            }
            n += this.chords[e].getHashCode();
        }
        return n;
    }
    equals(n) {
        if (n === null || this.chords.length !== n.chords.length) {
            return false;
        }
        for (let e = 0; e < this.chords.length; e++) {
            if (!this.chords[e].equals(n.chords[e])) {
                return false;
            }
        }
        return true;
    }
};
xih = class {
    constructor(n, e, t, i, r, s) {
        this.ctrlKey = n;
        this.shiftKey = e;
        this.altKey = t;
        this.metaKey = i;
        this.keyLabel = r;
        this.keyAriaLabel = s;
    }
};
N0c = class {};
