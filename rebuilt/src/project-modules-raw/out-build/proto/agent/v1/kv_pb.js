// Module: out-build/proto/agent/v1/kv_pb.js
// Offset: 3476038 (bundle byte offset)
// Size: 3913 bytes

Ka(), o9t(), pMh=class gYi extends ie{
  constructor(e){
    super(), this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.Error"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new gYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gYi, e, t)
  }
}, gMh=class fYi extends ie{
  constructor(e){
    super(), this.blobId=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GetBlobArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"blob_id",kind:"scalar",T:12
    }
    ])
  }
  static fromBinary(e, t){
    return new fYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fYi, e, t)
  }
}, fMh=class bYi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.GetBlobResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"blob_data",kind:"scalar",T:12,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bYi, e, t)
  }
}, bMh=class vYi extends ie{
  constructor(e){
    super(), this.blobId=new Uint8Array(0), this.blobData=new Uint8Array(0), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SetBlobArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"blob_id",kind:"scalar",T:12
    }, {
      no:2,name:"blob_data",kind:"scalar",T:12
    }
    ])
  }
  static fromBinary(e, t){
    return new vYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vYi, e, t)
  }
}, vMh=class AYi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.SetBlobResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"message",T:pMh,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new AYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AYi, e, t)
  }
}, AMh=class yYi extends ie{
  constructor(e){
    super(), this.id=0, this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.KvServerMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:13
    }, {
      no:2,name:"get_blob_args",kind:"message",T:gMh,oneof:"message"
    }, {
      no:3,name:"set_blob_args",kind:"message",T:bMh,oneof:"message"
    }, {
      no:4,name:"span_context",kind:"message",T:e4c,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yYi, e, t)
  }
}, yMh=class wYi extends ie{
  constructor(e){
    super(), this.id=0, this.message={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.KvClientMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:13
    }, {
      no:2,name:"get_blob_result",kind:"message",T:fMh,oneof:"message"
    }, {
      no:3,name:"set_blob_result",kind:"message",T:vMh,oneof:"message"
    }
    ])
  }
  static fromBinary(e, t){
    return new wYi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wYi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wYi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wYi, e, t)
  }
}
}
}), wMh, t4c, _Mh, O6o, U6o, Jte, n4c, i4c, r4c, CMh, s4c, o4c, a4c, c4c, SMh, kMh, l4c, u4c, d4c, h4c, EMh, m4c, xMh, p4c, TMh, g4c, f4c, b4c, IMh, v4c, DMh, BMh, KKe=