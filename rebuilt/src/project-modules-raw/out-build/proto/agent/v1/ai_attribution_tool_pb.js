// Module: out-build/proto/agent/v1/ai_attribution_tool_pb.js
// Offset: 2702992 (bundle byte offset)
// Size: 3173 bytes

Ka(), L9e(), qRc=class JFi extends ie{
  constructor(e){
    super(), this.filePaths=[], this.commitHashes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AiAttributionArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:5,name:"file_paths",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"start_line",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"end_line",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"commit_hashes",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"output_mode",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"max_commits",kind:"scalar",T:5,opt:!0
    }, {
      no:10,name:"include_line_ranges",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new JFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new JFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new JFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(JFi, e, t)
  }
}, Z9o=class GFi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AiAttributionResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:exh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:txh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new GFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new GFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new GFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(GFi, e, t)
  }
}, exh=class WFi extends ie{
  constructor(e){
    super(), this.attributionText="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AiAttributionSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"attribution_text",kind:"scalar",T:9
    }, {
      no:2,name:"output_location",kind:"message",T:Pbt,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new WFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new WFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new WFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(WFi, e, t)
  }
}, txh=class QFi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AiAttributionError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new QFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new QFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new QFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(QFi, e, t)
  }
}, nxh=class jFi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.AiAttributionToolCall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"args",kind:"message",T:qRc
    }, {
      no:2,name:"result",kind:"message",T:Z9o
    }
    ])
  }
  static fromBinary(e, t){
    return new jFi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jFi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jFi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jFi, e, t)
  }
}
}
}), ixh, rxh, sxh, oxh, JRc, axh, cxh, lxh, uxh, dxh, hxh, X9o, mxh, pxh, gxh, fxh, bxh, e8o, vxh, Axh, yxh, GRc, wxh, _xh, Cxh, t8o, Sxh, kxh, Exh, n8o, xxh, WRc, QRc, Txh, jRc, Ixh, Dxh, Bxh, Rxh, Pxh, i8o, Lxh, N5n, M5n, Nxh=