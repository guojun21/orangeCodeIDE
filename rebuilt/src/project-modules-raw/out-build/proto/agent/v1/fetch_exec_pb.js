// Module: out-build/proto/agent/v1/fetch_exec_pb.js
// Offset: 3168446 (bundle byte offset)
// Size: 2300 bytes

Ka(), o2c=class uJi extends ie{
  constructor(e){
    super(), this.url="", this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.FetchArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new uJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uJi, e, t)
  }
}, a2c=class dJi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.FetchResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:_Bh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:CBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new dJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dJi, e, t)
  }
}, _Bh=class hJi extends ie{
  constructor(e){
    super(), this.url="", this.content="", this.statusCode=0, this.contentType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.FetchSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:3,name:"status_code",kind:"scalar",T:5
    }, {
      no:4,name:"content_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new hJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hJi, e, t)
  }
}, CBh=class mJi extends ie{
  constructor(e){
    super(), this.url="", this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.FetchError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new mJi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mJi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mJi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mJi, e, t)
  }
}
}
}), kBh, tgA=