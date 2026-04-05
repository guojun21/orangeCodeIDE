// Module: out-build/proto/agent/v1/web_search_tool_pb.js
// Offset: 3155984 (bundle byte offset)
// Size: 5680 bytes

Ka(), p6o=class qHi extends ie{
  constructor(e){
    super(), this.searchTerm="", this.toolCallId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"search_term",kind:"scalar",T:9
    }, {
      no:2,name:"tool_call_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new qHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qHi, e, t)
  }
}, YMc=class HHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:hBh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:mBh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:pBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new HHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new HHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new HHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(HHi, e, t)
  }
}, hBh=class JHi extends ie{
  constructor(e){
    super(), this.references=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"references",kind:"message",T:ZMc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new JHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JHi, e, t)
  }
}, mBh=class GHi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new GHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GHi, e, t)
  }
}, pBh=class WHi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new WHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WHi, e, t)
  }
}, ZMc=class QHi extends ie{
  constructor(e){
    super(), this.title="", this.url="", this.chunk="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchReference"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9
    }, {
      no:2,name:"url",kind:"scalar",T:9
    }, {
      no:3,name:"chunk",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new QHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QHi, e, t)
  }
}, XMc=class jHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:p6o
    }, {
      no:2,name:"result",kind:"message",T:YMc
    }
    ])
  }
  static fromBinary(e, t){
    return new jHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jHi, e, t)
  }
}, gBh=class zHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchRequestQuery"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:p6o
    }
    ])
  }
  static fromBinary(e, t){
    return new zHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zHi, e, t)
  }
}, fBh=class VHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchRequestResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"approved",kind:"message",T:bBh,oneof:"result"
    }, {
      no:2,name:"rejected",kind:"message",T:vBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new VHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new VHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new VHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(VHi, e, t)
  }
}, bBh=class KHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchRequestResponse.Approved"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new KHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new KHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new KHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(KHi, e, t)
  }
}, vBh=class YHi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.WebSearchRequestResponse.Rejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new YHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YHi, e, t)
  }
}
}
}), e2c, t2c, yBh=