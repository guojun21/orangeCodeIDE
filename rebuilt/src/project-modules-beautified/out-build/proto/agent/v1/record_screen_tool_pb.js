"use strict";

// Module: out-build/proto/agent/v1/record_screen_tool_pb.js
// Offset: 3176582 (bundle byte offset)
// Size: 594 bytes
Ka();
Mbt();
h2c = class kJi extends ie {
    constructor(e) {
        super();
        v.util.initPartial(e, this);
    }
    static {
        this.runtime = v;
    }
    static {
        this.typeName = "agent.v1.RecordScreenToolCall";
    }
    static {
        this.fields = v.util.newFieldList(() => [{
            no: 1,
            name: "args",
            kind: "message",
            T: LKe
        }, {
            no: 2,
            name: "result",
            kind: "message",
            T: c5t
        }]);
    }
    static fromBinary(e, t) {
        return new kJi().fromBinary(e, t);
    }
    static fromJson(e, t) {
        return new kJi().fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return new kJi().fromJsonString(e, t);
    }
    static equals(e, t) {
        return v.util.equals(kJi, e, t);
    }
};
