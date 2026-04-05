"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/source_context_pb.js
// Offset: 2588898 (bundle byte offset)
// Size: 624 bytes
$te();
pve();
L9o = class oMi extends ie {
    constructor(e) {
        super();
        this.fileName = "";
        v.util.initPartial(e, this);
    }
    static {
        this.runtime = v;
    }
    static {
        this.typeName = "google.protobuf.SourceContext";
    }
    static {
        this.fields = v.util.newFieldList(() => [{
            no: 1,
            name: "file_name",
            kind: "scalar",
            T: 9
        }]);
    }
    static fromBinary(e, t) {
        return new oMi().fromBinary(e, t);
    }
    static fromJson(e, t) {
        return new oMi().fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return new oMi().fromJsonString(e, t);
    }
    static equals(e, t) {
        return v.util.equals(oMi, e, t);
    }
};
