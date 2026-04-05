"use strict";

// Module: out-build/vs/editor/common/modelLineProjectionData.js
// Offset: 1310054 (bundle byte offset)
// Size: 6782 bytes
Lv();
tl();
xw();
QOt = class {
    constructor(n, e, t, i, r) {
        this.injectionOffsets = n;
        this.injectionOptions = e;
        this.breakOffsets = t;
        this.breakOffsetsVisibleColumn = i;
        this.wrappedTextIndentLength = r;
    }
    getOutputLineCount() {
        return this.breakOffsets.length;
    }
    getMinOutputOffset(n) {
        if (n > 0) {
            return this.wrappedTextIndentLength;
        } else {
            return 0;
        }
    }
    getLineLength(n) {
        const e = n > 0 ? this.breakOffsets[n - 1] : 0;
        let i = this.breakOffsets[n] - e;
        if (n > 0) {
            i += this.wrappedTextIndentLength;
        }
        return i;
    }
    getMaxOutputOffset(n) {
        return this.getLineLength(n);
    }
    translateToInputOffset(n, e) {
        if (n > 0) {
            e = Math.max(0, e - this.wrappedTextIndentLength);
        }
        let i = n === 0 ? e : this.breakOffsets[n - 1] + e;
        if (this.injectionOffsets !== null) {
            for (let r = 0; r < this.injectionOffsets.length && i > this.injectionOffsets[r]; r++) {
                if (i < this.injectionOffsets[r] + this.injectionOptions[r].content.length) {
                    i = this.injectionOffsets[r];
                } else {
                    i -= this.injectionOptions[r].content.length;
                }
            }
        }
        return i;
    }
    translateToOutputPosition(n, e = 2) {
        let t = n;
        if (this.injectionOffsets !== null) {
            for (let i = 0; i < this.injectionOffsets.length && !(n < this.injectionOffsets[i]) && (e === 1 || n !== this.injectionOffsets[i]); i++) {
                t += this.injectionOptions[i].content.length;
            }
        }
        return this.offsetInInputWithInjectionsToOutputPosition(t, e);
    }
    offsetInInputWithInjectionsToOutputPosition(n, e = 2) {
        let t = 0;
        let i = this.breakOffsets.length - 1;
        let r = 0;
        let s = 0;
        while (t <= i) {
            r = t + (i - t) / 2 | 0;
            const a = this.breakOffsets[r];
            s = r > 0 ? this.breakOffsets[r - 1] : 0;
            if (e === 0) {
                if (n <= s) {
                    i = r - 1;
                } else if (n > a) {
                    t = r + 1;
                } else {
                    break;
                }
            } else if (n < s) {
                i = r - 1;
            } else if (n >= a) {
                t = r + 1;
            } else {
                break;
            }
        }
        let o = n - s;
        if (r > 0) {
            o += this.wrappedTextIndentLength;
        }
        return new NOn(r, o);
    }
    normalizeOutputPosition(n, e, t) {
        if (this.injectionOffsets !== null) {
            const i = this.outputPositionToOffsetInInputWithInjections(n, e);
            const r = this.normalizeOffsetInInputWithInjectionsAroundInjections(i, t);
            if (r !== i) {
                return this.offsetInInputWithInjectionsToOutputPosition(r, t);
            }
        }
        if (t === 0) {
            if (n > 0 && e === this.getMinOutputOffset(n)) {
                return new NOn(n - 1, this.getMaxOutputOffset(n - 1));
            }
        } else if (t === 1) {
            const i = this.getOutputLineCount() - 1;
            if (n < i && e === this.getMaxOutputOffset(n)) {
                return new NOn(n + 1, this.getMinOutputOffset(n + 1));
            }
        }
        return new NOn(n, e);
    }
    outputPositionToOffsetInInputWithInjections(n, e) {
        if (n > 0) {
            e = Math.max(0, e - this.wrappedTextIndentLength);
        }
        return (n > 0 ? this.breakOffsets[n - 1] : 0) + e;
    }
    normalizeOffsetInInputWithInjectionsAroundInjections(n, e) {
        const t = this.getInjectedTextAtOffset(n);
        if (!t) {
            return n;
        }
        if (e === 2) {
            if (n === t.offsetInInputWithInjections + t.length && Nfh(this.injectionOptions[t.injectedTextIndex].cursorStops)) {
                return t.offsetInInputWithInjections + t.length;
            } {
                let i = t.offsetInInputWithInjections;
                if (Mfh(this.injectionOptions[t.injectedTextIndex].cursorStops)) {
                    return i;
                }
                let r = t.injectedTextIndex - 1;
                while (r >= 0 && this.injectionOffsets[r] === this.injectionOffsets[t.injectedTextIndex] && !Nfh(this.injectionOptions[r].cursorStops) && !(i -= this.injectionOptions[r].content.length, Mfh(this.injectionOptions[r].cursorStops))) {
                    r--;
                }
                return i;
            }
        } else if (e === 1 || e === 4) {
            let i = t.offsetInInputWithInjections + t.length;
            let r = t.injectedTextIndex;
            while (r + 1 < this.injectionOffsets.length && this.injectionOffsets[r + 1] === this.injectionOffsets[r]) {
                i += this.injectionOptions[r + 1].content.length;
                r++;
            }
            return i;
        } else if (e === 0 || e === 3) {
            let i = t.offsetInInputWithInjections;
            let r = t.injectedTextIndex;
            while (r - 1 >= 0 && this.injectionOffsets[r - 1] === this.injectionOffsets[r]) {
                i -= this.injectionOptions[r - 1].content.length;
                r--;
            }
            return i;
        }
        QN(e);
    }
    getInjectedText(n, e) {
        const t = this.outputPositionToOffsetInInputWithInjections(n, e);
        const i = this.getInjectedTextAtOffset(t);
        if (i) {
            return {
                options: this.injectionOptions[i.injectedTextIndex]
            };
        } else {
            return null;
        }
    }
    getInjectedTextAtOffset(n) {
        const e = this.injectionOffsets;
        const t = this.injectionOptions;
        if (e !== null) {
            let i = 0;
            for (let r = 0; r < e.length; r++) {
                const s = t[r].content.length;
                const o = e[r] + i;
                const a = e[r] + i + s;
                if (o > n) {
                    break;
                }
                if (n <= a) {
                    return {
                        injectedTextIndex: r,
                        offsetInInputWithInjections: o,
                        length: s
                    };
                }
                i += s;
            }
        }
    }
};
NOn = class {
    constructor(n, e) {
        this.outputLineIndex = n;
        this.outputOffset = e;
    }
    toString() {
        return `${this.outputLineIndex}:${this.outputOffset}`;
    }
    toPosition(n) {
        return new ar(n + this.outputLineIndex, this.outputOffset + 1);
    }
};
