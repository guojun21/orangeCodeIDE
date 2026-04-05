// Module: out-build/proto/aiserver/v1/lsp_subgraph_pb.js
// Offset: 3498235 (bundle byte offset)
// Size: 2723 bytes

Ka(), RMh=class eZi extends ie{
  constructor(e){
    super(), this.line=0, this.character=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LspSubgraphPosition"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"line",kind:"scalar",T:5
    }, {
      no:2,name:"character",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new eZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eZi, e, t)
  }
}, PMh=class tZi extends ie{
  constructor(e){
    super(), this.startLine=0, this.startCharacter=0, this.endLine=0, this.endCharacter=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LspSubgraphRange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_line",kind:"scalar",T:5
    }, {
      no:2,name:"start_character",kind:"scalar",T:5
    }, {
      no:3,name:"end_line",kind:"scalar",T:5
    }, {
      no:4,name:"end_character",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new tZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tZi, e, t)
  }
}, LMh=class nZi extends ie{
  constructor(e){
    super(), this.type="", this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LspSubgraphContextItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"type",kind:"scalar",T:9
    }, {
      no:3,name:"content",kind:"scalar",T:9
    }, {
      no:4,name:"range",kind:"message",T:PMh,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nZi, e, t)
  }
}, $6o=class iZi extends ie{
  constructor(e){
    super(), this.uri="", this.symbolName="", this.positions=[], this.contextItems=[], this.score=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LspSubgraphFullContext"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9
    }, {
      no:2,name:"symbol_name",kind:"scalar",T:9
    }, {
      no:3,name:"positions",kind:"message",T:RMh,repeated:!0
    }, {
      no:4,name:"context_items",kind:"message",T:LMh,repeated:!0
    }, {
      no:5,name:"score",kind:"scalar",T:2
    }
    ])
  }
  static fromBinary(e, t){
    return new iZi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iZi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iZi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iZi, e, t)
  }
}
}
}), L8n, N8n, y4c, w4c, a9t, NMh, _4c, C4c, MMh, FMh, OMh, UMh, $Mh, qMh, HMh, JMh, GMh, WMh, QMh, jMh, S4c=