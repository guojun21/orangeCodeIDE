"use strict";

// Module: out-build/proto/agent/v1/mcp_resource_tool_pb.js
// Offset: 3161664 (bundle byte offset)
// Size: 1137 bytes
Ka();
o8n();
e2c = class ZHi extends ie {
    constructor(e) {
        super();
        v.util.initPartial(e, this);
    }
    static {
        this.runtime = v;
    }
    static {
        this.typeName = "agent.v1.ListMcpResourcesToolCall";
    }
    static {
        this.fields = v.util.newFieldList(() => [{
            no: 1,
            name: "args",
            kind: "message",
            T: d6o
        }, {
            no: 2,
            name: "result",
            kind: "message",
            T: h6o
        }]);
    }
    static fromBinary(e, t) {
        return new ZHi().fromBinary(e, t);
    }
    static fromJson(e, t) {
        return new ZHi().fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return new ZHi().fromJsonString(e, t);
    }
    static equals(e, t) {
        return v.util.equals(ZHi, e, t);
    }
};
t2c = class XHi extends ie {
    constructor(e) {
        super();
        v.util.initPartial(e, this);
    }
    static {
        this.runtime = v;
    }
    static {
        this.typeName = "agent.v1.ReadMcpResourceToolCall";
    }
    static {
        this.fields = v.util.newFieldList(() => [{
            no: 1,
            name: "args",
            kind: "message",
            T: m6o
        }, {
            no: 2,
            name: "result",
            kind: "message",
            T: JMc
        }]);
    }
    static fromBinary(e, t) {
        return new XHi().fromBinary(e, t);
    }
    static fromJson(e, t) {
        return new XHi().fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return new XHi().fromJsonString(e, t);
    }
    static equals(e, t) {
        return v.util.equals(XHi, e, t);
    }
};
