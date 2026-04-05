"use strict";

// Module: out-build/external/bufbuild/protobuf/message.js
// Offset: 2494967 (bundle byte offset)
// Size: 1576 bytes
ie = class {
    equals(n) {
        return this.getType().runtime.util.equals(this.getType(), this, n);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(n, e) {
        const t = this.getType();
        const i = t.runtime.bin;
        const r = i.makeReadOptions(e);
        i.readMessage(this, r.readerFactory(n), n.byteLength, r);
        return this;
    }
    fromJson(n, e) {
        const t = this.getType();
        const i = t.runtime.json;
        const r = i.makeReadOptions(e);
        i.readMessage(t, n, r, this);
        return this;
    }
    fromJsonString(n, e) {
        let t;
        try {
            t = JSON.parse(n);
        } catch (i) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
        }
        return this.fromJson(t, e);
    }
    toBinary(n) {
        const e = this.getType();
        const t = e.runtime.bin;
        const i = t.makeWriteOptions(n);
        const r = i.writerFactory();
        t.writeMessage(this, r, i);
        return r.finish();
    }
    toJson(n) {
        const e = this.getType();
        const t = e.runtime.json;
        const i = t.makeWriteOptions(n);
        return t.writeMessage(this, i);
    }
    toJsonString(n) {
        const e = this.toJson(n);
        return JSON.stringify(e, null, n?.prettySpaces ?? 0);
    }
    toJSON() {
        return this.toJson({
            emitDefaultValues: true
        });
    }
    getType() {
        return Object.getPrototypeOf(this).constructor;
    }
};
