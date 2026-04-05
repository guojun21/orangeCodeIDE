"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/notebookLogger.js
// Offset: 30816048 (bundle byte offset)
// Size: 345 bytes
UEf = class {
    constructor() {
        this._frameId = 0;
        this._domFrameLog();
    }
    _domFrameLog() {}
    debug(...n) {
        const e = new Date();
        console.log(`${e.getSeconds()}:${e.getMilliseconds().toString().padStart(3, "0")}`, `frame #${this._frameId}: `, ...n);
    }
};
$Ef = new UEf();
