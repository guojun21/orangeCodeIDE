"use strict";

// Module: out-build/vs/base/common/lazy.js
// Offset: 333344 (bundle byte offset)
// Size: 37091 bytes
Ob = class {
    constructor(n) {
        this.executor = n;
        this._didRun = false;
    }
    get hasValue() {
        return this._didRun;
    }
    get value() {
        if (!this._didRun) {
            try {
                this._value = this.executor();
            } catch (n) {
                this._error = n;
            } finally {
                this._didRun = true;
            }
        }
        if (this._error) {
            throw this._error;
        }
        return this._value;
    }
    get rawValue() {
        return this._value;
    }
};
