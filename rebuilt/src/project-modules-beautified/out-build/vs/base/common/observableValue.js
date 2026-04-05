"use strict";

// Module: out-build/vs/base/common/observableValue.js
// Offset: 28032639 (bundle byte offset)
// Size: 725 bytes
wye = class {
    constructor() {
        this.listeners = new Set();
        this.state = {
            state: "pending"
        };
        this.writeVersion = 0;
    }
    onChange(n) {
        this.listeners.add(n);
        return {
            dispose: () => {
                this.listeners.delete(n);
            }
        };
    }
    notifyListeners() {
        for (const n of this.listeners) {
            n(this.state);
        }
    }
    getState() {
        return this.state;
    }
    set(n) {
        const e = ++this.writeVersion;
        this.state = {
            state: "fulfilled",
            value: n
        };
        this.notifyListeners();
        return {
            dispose: () => {
                if (this.writeVersion === e) {
                    this.clear();
                }
            }
        };
    }
    error(n) {
        this.writeVersion++;
        this.state = {
            state: "rejected",
            error: n
        };
        this.notifyListeners();
    }
    clear() {
        this.writeVersion++;
        this.state = {
            state: "pending"
        };
        this.notifyListeners();
    }
};
