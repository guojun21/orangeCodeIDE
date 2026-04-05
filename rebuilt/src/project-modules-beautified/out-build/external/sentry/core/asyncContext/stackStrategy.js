"use strict";

// Module: out-build/external/sentry/core/asyncContext/stackStrategy.js
// Offset: 32755 (bundle byte offset)
// Size: 887 bytes
AKd();
LMn();
h9();
gbe();
wKd = class {
    constructor(n, e) {
        let t;
        if (n) {
            t = n;
        } else {
            t = new dSe();
        }
        let i;
        if (e) {
            i = e;
        } else {
            i = new dSe();
        }
        this._stack = [{
            scope: t
        }];
        this._isolationScope = i;
    }
    withScope(n) {
        const e = this._pushScope();
        let t;
        try {
            t = n(e);
        } catch (i) {
            this._popScope();
            throw i;
        }
        if (Zje(t)) {
            return t.then(i => {
                this._popScope();
                return i;
            }, i => {
                this._popScope();
                throw i;
            });
        } else {
            this._popScope();
            return t;
        }
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getIsolationScope() {
        return this._isolationScope;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    _pushScope() {
        const n = this.getScope().clone();
        this._stack.push({
            client: this.getClient(),
            scope: n
        });
        return n;
    }
    _popScope() {
        if (this._stack.length <= 1) {
            return false;
        } else {
            return !!this._stack.pop();
        }
    }
};
