// Module: out-build/proto/agent/v1/read_exec_pb.js
// Offset: 3457123 (bundle byte offset)
// Size: 4890 bytes

Ka(), XFc=class JKi extends ie{
  constructor(e){
    super(), this.path="", this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:4,name:"offset",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"limit",kind:"scalar",T:13,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new JKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JKi, e, t)
  }
}, zNh=class GKi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:VNh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:KNh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:YNh,oneof:"result"
    }, {
      no:4,name:"file_not_found",kind:"message",T:ZNh,oneof:"result"
    }, {
      no:5,name:"permission_denied",kind:"message",T:XNh,oneof:"result"
    }, {
      no:6,name:"invalid_file",kind:"message",T:eMh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new GKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GKi, e, t)
  }
}, VNh=class WKi extends ie{
  constructor(e){
    super(), this.path="", this.output={
      case:void 0
    }, this.totalLines=0, this.fileSize=Eo.zero, this.truncated=!1, this.rangeApplied=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9,oneof:"output"
    }, {
      no:5,name:"data",kind:"scalar",T:12,oneof:"output"
    }, {
      no:3,name:"total_lines",kind:"scalar",T:5
    }, {
      no:4,name:"file_size",kind:"scalar",T:3
    }, {
      no:6,name:"truncated",kind:"scalar",T:8
    }, {
      no:7,name:"output_blob_id",kind:"scalar",T:12,opt:!0
    }, {
      no:8,name:"range_applied",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new WKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WKi, e, t)
  }
}, KNh=class QKi extends ie{
  constructor(e){
    super(), this.path="", this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new QKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QKi, e, t)
  }
}, YNh=class jKi extends ie{
  constructor(e){
    super(), this.path="", this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jKi, e, t)
  }
}, ZNh=class zKi extends ie{
  constructor(e){
    super(), this.path="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadFileNotFound"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zKi, e, t)
  }
}, XNh=class VKi extends ie{
  constructor(e){
    super(), this.path="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadPermissionDenied"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new VKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VKi, e, t)
  }
}, eMh=class KKi extends ie{
  constructor(e){
    super(), this.path="", this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadInvalidFile"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"path",kind:"scalar",T:9
    }, {
      no:2,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new KKi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KKi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KKi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KKi, e, t)
  }
}
}
}), nMh, iMh, rMh, sMh, oMh, _gA=