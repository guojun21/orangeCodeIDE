"use strict";

// Module: out-build/proto/aiserver/v1/inline_gpt4_pb.js
// Offset: 28355820 (bundle byte offset)
// Size: 2266 bytes
Ka();
qp();
jY();
h8A = class mws extends ie {
  constructor(e) {
    super();
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.InlineGPT4PromptProtoV1";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "current_file",
      kind: "message",
      T: AS
    }]);
  }
  static fromBinary(e, t) {
    return new mws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(mws, e, t);
  }
};
Ztf = class pws extends ie {
  constructor(e) {
    super();
    this.repositories = [];
    this.contextBlocks = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamInlineLongCompletionRequest";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "current_file",
      kind: "message",
      T: AS
    }, {
      no: 6,
      name: "repositories",
      kind: "message",
      T: z_,
      repeated: true
    }, {
      no: 7,
      name: "context_blocks",
      kind: "message",
      T: Xtf,
      repeated: true
    }, {
      no: 13,
      name: "explicit_context",
      kind: "message",
      T: _F
    }, {
      no: 14,
      name: "model_details",
      kind: "message",
      T: Yf
    }, {
      no: 15,
      name: "linter_errors",
      kind: "message",
      T: aN
    }]);
  }
  static fromBinary(e, t) {
    return new pws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(pws, e, t);
  }
};
Xtf = class gws extends ie {
  constructor(e) {
    super();
    this.contextType = _yi.UNSPECIFIED;
    this.blocks = [];
    v.util.initPartial(e, this);
  }
  static {
    this.runtime = v;
  }
  static {
    this.typeName = "aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock";
  }
  static {
    this.fields = v.util.newFieldList(() => [{
      no: 1,
      name: "context_type",
      kind: "enum",
      T: v.getEnumType(_yi)
    }, {
      no: 2,
      name: "blocks",
      kind: "message",
      T: WB,
      repeated: true
    }]);
  }
  static fromBinary(e, t) {
    return new gws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return v.util.equals(gws, e, t);
  }
};
(function (n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED";
  n[n.RECENT_LOCATIONS = 1] = "RECENT_LOCATIONS";
})(_yi ||= {});
v.util.setEnumType(_yi, "aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock.ContextType", [{
  no: 0,
  name: "CONTEXT_TYPE_UNSPECIFIED"
}, {
  no: 1,
  name: "CONTEXT_TYPE_RECENT_LOCATIONS"
}]);
