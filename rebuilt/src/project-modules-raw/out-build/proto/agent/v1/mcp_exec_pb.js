// Module: out-build/proto/agent/v1/mcp_exec_pb.js
// Offset: 3134131 (bundle byte offset)
// Size: 12801 bytes

Ka(), L9e(), W5t=class iHi extends ie{
  constructor(e){
    super(), this.name="", this.args={
      
    }, this.toolCallId="", this.providerIdentifier="", this.toolName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"args",kind:"map",K:9,V:{
        kind:"message",T:Zde
      }
    }, {
      no:3,name:"tool_call_id",kind:"scalar",T:9
    }, {
      no:4,name:"provider_identifier",kind:"scalar",T:9
    }, {
      no:5,name:"tool_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new iHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iHi, e, t)
  }
}, QDh=class rHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:OMc,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:YDh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:UMc,oneof:"result"
    }, {
      no:4,name:"permission_denied",kind:"message",T:$Mc,oneof:"result"
    }, {
      no:5,name:"tool_not_found",kind:"message",T:jDh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new rHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rHi, e, t)
  }
}, jDh=class sHi extends ie{
  constructor(e){
    super(), this.name="", this.availableTools=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpToolNotFound"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"available_tools",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sHi, e, t)
  }
}, zDh=class oHi extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpTextContent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }, {
      no:2,name:"output_location",kind:"message",T:Pbt,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new oHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oHi, e, t)
  }
}, VDh=class aHi extends ie{
  constructor(e){
    super(), this.data=new Uint8Array(0), this.mimeType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpImageContent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"data",kind:"scalar",T:12
    }, {
      no:2,name:"mime_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new aHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aHi, e, t)
  }
}, KDh=class cHi extends ie{
  constructor(e){
    super(), this.content={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpToolResultContentItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"message",T:zDh,oneof:"content"
    }, {
      no:2,name:"image",kind:"message",T:VDh,oneof:"content"
    }
    ])
  }
  static fromBinary(e, t){
    return new cHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cHi, e, t)
  }
}, OMc=class lHi extends ie{
  constructor(e){
    super(), this.content=[], this.isError=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"content",kind:"message",T:KDh,repeated:!0
    }, {
      no:2,name:"is_error",kind:"scalar",T:8
    }, {
      no:3,name:"structured_content",kind:"message",T:jR
    }
    ])
  }
  static fromBinary(e, t){
    return new lHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lHi, e, t)
  }
}, YDh=class uHi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new uHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uHi, e, t)
  }
}, UMc=class dHi extends ie{
  constructor(e){
    super(), this.reason="", this.isReadonly=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }, {
      no:2,name:"is_readonly",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new dHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dHi, e, t)
  }
}, $Mc=class hHi extends ie{
  constructor(e){
    super(), this.error="", this.isReadonly=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.McpPermissionDenied"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }, {
      no:2,name:"is_readonly",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new hHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hHi, e, t)
  }
}, d6o=class mHi extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ListMcpResourcesExecArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mHi, e, t)
  }
}, h6o=class pHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ListMcpResourcesExecResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:HMc,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:ZDh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:XDh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new pHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pHi, e, t)
  }
}, qMc=class gHi extends ie{
  constructor(e){
    super(), this.uri="", this.server="", this.annotations={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ListMcpResourcesExecResult.McpResource"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"mime_type",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"server",kind:"scalar",T:9
    }, {
      no:6,name:"annotations",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }
    ])
  }
  static fromBinary(e, t){
    return new gHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gHi, e, t)
  }
}, HMc=class fHi extends ie{
  constructor(e){
    super(), this.resources=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ListMcpResourcesSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"resources",kind:"message",T:qMc,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fHi, e, t)
  }
}, ZDh=class bHi extends ie{
  constructor(e){
    super(), this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ListMcpResourcesError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new bHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bHi, e, t)
  }
}, XDh=class vHi extends ie{
  constructor(e){
    super(), this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ListMcpResourcesRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vHi, e, t)
  }
}, m6o=class AHi extends ie{
  constructor(e){
    super(), this.server="", this.uri="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadMcpResourceExecArgs"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server",kind:"scalar",T:9
    }, {
      no:2,name:"uri",kind:"scalar",T:9
    }, {
      no:3,name:"download_path",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new AHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new AHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new AHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(AHi, e, t)
  }
}, JMc=class yHi extends ie{
  constructor(e){
    super(), this.result={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadMcpResourceExecResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"message",T:eBh,oneof:"result"
    }, {
      no:2,name:"error",kind:"message",T:tBh,oneof:"result"
    }, {
      no:3,name:"rejected",kind:"message",T:nBh,oneof:"result"
    }, {
      no:4,name:"not_found",kind:"message",T:iBh,oneof:"result"
    }
    ])
  }
  static fromBinary(e, t){
    return new yHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yHi, e, t)
  }
}, eBh=class wHi extends ie{
  constructor(e){
    super(), this.uri="", this.content={
      case:void 0
    }, this.annotations={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadMcpResourceSuccess"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"mime_type",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"text",kind:"scalar",T:9,oneof:"content"
    }, {
      no:6,name:"blob",kind:"scalar",T:12,oneof:"content"
    }, {
      no:7,name:"annotations",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:8,name:"download_path",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wHi, e, t)
  }
}, tBh=class _Hi extends ie{
  constructor(e){
    super(), this.uri="", this.error="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadMcpResourceError"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9
    }, {
      no:2,name:"error",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _Hi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _Hi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _Hi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_Hi, e, t)
  }
}, nBh=class CHi extends ie{
  constructor(e){
    super(), this.uri="", this.reason="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadMcpResourceRejected"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9
    }, {
      no:2,name:"reason",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new CHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new CHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new CHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(CHi, e, t)
  }
}, iBh=class SHi extends ie{
  constructor(e){
    super(), this.uri="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="agent.v1.ReadMcpResourceNotFound"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uri",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new SHi().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new SHi().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new SHi().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(SHi, e, t)
  }
}
}
}), rBh, sBh, a8n, GMc=