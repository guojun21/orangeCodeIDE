// Module: out-build/proto/aiserver/v1/bidi_pb.js
// Offset: 28157014 (bundle byte offset)
// Size: 2646 bytes

Ka(), kye=class cws extends ie{
  constructor(e){
    super(), this.requestId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BidiRequestId"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new cws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cws, e, t)
  }
}, xXg=class lws extends ie{
  constructor(e){
    super(), this.data="", this.appendSeqno=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BidiAppendRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"data",kind:"scalar",T:9
    }, {
      no:2,name:"request_id",kind:"message",T:kye
    }, {
      no:3,name:"append_seqno",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new lws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lws, e, t)
  }
}, TXg=class uws extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BidiAppendResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new uws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uws, e, t)
  }
}, K$e=class dws extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BidiPollRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_id",kind:"message",T:kye
    }, {
      no:2,name:"start_request",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dws, e, t)
  }
}, Y$e=class hws extends ie{
  constructor(e){
    super(), this.seqno=Eo.zero, this.data="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BidiPollResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"seqno",kind:"scalar",T:3
    }, {
      no:2,name:"data",kind:"scalar",T:9
    }, {
      no:3,name:"eof",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hws, e, t)
  }
}
}
}), qAi, eau, rva=