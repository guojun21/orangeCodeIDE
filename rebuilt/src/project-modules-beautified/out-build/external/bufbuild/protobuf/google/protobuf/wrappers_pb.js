"use strict";

// Module: out-build/external/bufbuild/protobuf/google/protobuf/wrappers_pb.js
// Offset: 2577494 (bundle byte offset)
// Size: 7854 bytes
$te();
pve();
tke();
EKe();
jmA = class jCn extends ie {
  constructor(e) {
    super();
    this.value = 0;
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.DOUBLE, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.DOUBLE, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.DoubleValue from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.DoubleValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 1
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new jCn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new jCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(jCn, e, t);
  }
};
zmA = class zCn extends ie {
  constructor(e) {
    super();
    this.value = 0;
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.FLOAT, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.FLOAT, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.FloatValue from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.FloatValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 2
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new zCn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new zCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(zCn, e, t);
  }
};
VmA = class VCn extends ie {
  constructor(e) {
    super();
    this.value = Eo.zero;
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.INT64, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.INT64, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.Int64Value from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Int64Value";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 3
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new VCn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new VCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new VCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new VCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(VCn, e, t);
  }
};
KmA = class KCn extends ie {
  constructor(e) {
    super();
    this.value = Eo.zero;
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.UINT64, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.UINT64, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.UInt64Value from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.UInt64Value";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 4
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new KCn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new KCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new KCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new KCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(KCn, e, t);
  }
};
YmA = class YCn extends ie {
  constructor(e) {
    super();
    this.value = 0;
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.INT32, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.INT32, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.Int32Value from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.Int32Value";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 5
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new YCn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new YCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new YCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new YCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(YCn, e, t);
  }
};
ZmA = class ZCn extends ie {
  constructor(e) {
    super();
    this.value = 0;
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.UINT32, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.UINT32, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.UInt32Value from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.UInt32Value";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 13
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new ZCn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new ZCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ZCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ZCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(ZCn, e, t);
  }
};
XmA = class XCn extends ie {
  constructor(e) {
    super();
    this.value = false;
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.BOOL, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.BOOL, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.BoolValue from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.BoolValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 8
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new XCn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new XCn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new XCn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new XCn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(XCn, e, t);
  }
};
epA = class eSn extends ie {
  constructor(e) {
    super();
    this.value = "";
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.STRING, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.STRING, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.StringValue from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.StringValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 9
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new eSn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new eSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new eSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new eSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(eSn, e, t);
  }
};
tpA = class tSn extends ie {
  constructor(e) {
    super();
    this.value = new Uint8Array(0);
    v.util.initPartial(e, this);
  }
  toJson(e) {
    return v.json.writeScalar(ud.BYTES, this.value, true);
  }
  fromJson(e, t) {
    try {
      this.value = v.json.readScalar(ud.BYTES, e);
    } catch (i) {
      let r = "cannot decode message google.protobuf.BytesValue from JSON\"";
      if (i instanceof Error && i.message.length > 0) {
        r += `: ${i.message}`;
      }
      throw new Error(r);
    }
    return this;
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "google.protobuf.BytesValue";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "value",
      kind: "scalar",
      T: 12
    }]);
  }
  static {
    this.fieldWrapper = {
      wrapField(e) {
        return new tSn({
          value: e
        });
      },
      unwrapField(e) {
        return e.value;
      }
    };
  }
  static fromBinary(e, t) {
    return new tSn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tSn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tSn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(tSn, e, t);
  }
};
