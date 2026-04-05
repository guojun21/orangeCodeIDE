"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/empty_pb.js
// Offset: 2571917 (bundle byte offset)
// Size: 520 bytes
$te();
pve();
ZI = class YNi extends ie {
    constructor(e) {
        super();
        v.util.initPartial(e, this);
    }
    static {
        this.runtime = v;
    }
    static {
        this.typeName = "google.protobuf.Empty";
    }
    static {
        this.fields = v.util.newFieldList(() => []);
    }
    static fromBinary(e, t) {
        return new YNi().fromBinary(e, t);
    }
    static fromJson(e, t) {
        return new YNi().fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return new YNi().fromJsonString(e, t);
    }
    static equals(e, t) {
        return v.util.equals(YNi, e, t);
    }
};
