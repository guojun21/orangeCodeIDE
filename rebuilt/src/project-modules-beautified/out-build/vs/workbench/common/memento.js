"use strict";

// Module: out-build/vs/workbench/common/memento.js
// Offset: 28332202 (bundle byte offset)
// Size: 2050 bytes
Js();
_s();
EM = class yK {
    static {
        this.applicationMementos = new Map();
    }
    static {
        this.profileMementos = new Map();
    }
    static {
        this.workspaceMementos = new Map();
    }
    static {
        this.COMMON_PREFIX = "memento/";
    }
    constructor(e, t) {
        this.storageService = t;
        this.id = yK.COMMON_PREFIX + e;
    }
    getMemento(e, t) {
        switch (e) {
            case 1: {
                let i = yK.workspaceMementos.get(this.id);
                if (!i) {
                    i = new sAa(this.id, e, t, this.storageService);
                    yK.workspaceMementos.set(this.id, i);
                }
                return i.getMemento();
            }
            case 0: {
                let i = yK.profileMementos.get(this.id);
                if (!i) {
                    i = new sAa(this.id, e, t, this.storageService);
                    yK.profileMementos.set(this.id, i);
                }
                return i.getMemento();
            }
            case -1: {
                let i = yK.applicationMementos.get(this.id);
                if (!i) {
                    i = new sAa(this.id, e, t, this.storageService);
                    yK.applicationMementos.set(this.id, i);
                }
                return i.getMemento();
            }
        }
    }
    onDidChangeValue(e, t) {
        return this.storageService.onDidChangeValue(e, this.id, t);
    }
    saveMemento() {
        yK.workspaceMementos.get(this.id)?.save();
        yK.profileMementos.get(this.id)?.save();
        yK.applicationMementos.get(this.id)?.save();
    }
    reloadMemento(e) {
        let t;
        switch (e) {
            case -1:
                t = yK.applicationMementos.get(this.id);
                break;
            case 0:
                t = yK.profileMementos.get(this.id);
                break;
            case 1:
                t = yK.workspaceMementos.get(this.id);
                break;
        }
        t?.reload();
    }
    static clear(e) {
        switch (e) {
            case 1:
                yK.workspaceMementos.clear();
                break;
            case 0:
                yK.profileMementos.clear();
                break;
            case -1:
                yK.applicationMementos.clear();
                break;
        }
    }
};
sAa = class {
    constructor(n, e, t, i) {
        this.id = n;
        this.scope = e;
        this.target = t;
        this.storageService = i;
        this.mementoObj = this.doLoad();
    }
    doLoad() {
        try {
            return this.storageService.getObject(this.id, this.scope, {});
        } catch (n) {
            Gc(`[memento]: failed to parse contents: ${n} (id: ${this.id}, scope: ${this.scope}, contents: ${this.storageService.get(this.id, this.scope)})`);
        }
        return {};
    }
    getMemento() {
        return this.mementoObj;
    }
    reload() {
        for (const n of Object.getOwnPropertyNames(this.mementoObj)) {
            delete this.mementoObj[n];
        }
        Object.assign(this.mementoObj, this.doLoad());
    }
    save() {
        if (xbe(this.mementoObj)) {
            this.storageService.remove(this.id, this.scope);
        } else {
            this.storageService.store(this.id, this.mementoObj, this.scope, this.target);
        }
    }
};
