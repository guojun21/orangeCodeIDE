"use strict";

// Module: out-build/vs/base/common/hierarchicalKind.js
// Offset: 2374922 (bundle byte offset)
// Size: 1113 bytes
p0 = class JCn {
    static {
        this.sep = ".";
    }
    static {
        this.None = new JCn("@@none@@");
    }
    static {
        this.Empty = new JCn("");
    }
    constructor(e) {
        this.value = e;
    }
    equals(e) {
        return this.value === e.value;
    }
    contains(e) {
        return this.equals(e) || this.value === "" || e.value.startsWith(this.value + JCn.sep);
    }
    intersects(e) {
        return this.contains(e) || e.contains(this);
    }
    append(...e) {
        return new JCn((this.value ? [this.value, ...e] : e).join(JCn.sep));
    }
};
