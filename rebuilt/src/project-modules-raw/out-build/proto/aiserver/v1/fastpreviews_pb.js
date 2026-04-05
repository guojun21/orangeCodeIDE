// Module: out-build/proto/aiserver/v1/fastpreviews_pb.js
// Offset: 28358086 (bundle byte offset)
// Size: 2153 bytes

Ka(), qp(), enf=class fws extends ie{
  constructor(e){
    super(), this.mainSymbolsToAnalyzeFromGoToDef=[], this.relatedSymbols=[], this.mainSymbolsToAnalyzeFromImplementations=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiPreviewsIntent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"main_symbols_to_analyze_from_go_to_def",kind:"message",T:k5n,repeated:!0
    }, {
      no:4,name:"main_symbol_hover_details",kind:"message",T:kRc
    }, {
      no:3,name:"related_symbols",kind:"message",T:k5n,repeated:!0
    }, {
      no:6,name:"main_symbols_to_analyze_from_implementations",kind:"message",T:k5n,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fws, e, t)
  }
}, tnf=class bws extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiPreviewsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_file",kind:"message",T:AS
    }, {
      no:2,name:"intent",kind:"message",T:enf
    }, {
      no:14,name:"model_details",kind:"message",T:Yf
    }, {
      no:15,name:"is_detailed",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bws, e, t)
  }
}, nnf=class vws extends ie{
  constructor(e){
    super(), this.text="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StreamAiPreviewsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"text",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vws().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vws().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vws().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vws, e, t)
  }
}
}
}), Cyi, FEe, Ont, vAa, inf, rnf, Syi, snf, onf, kyi, anf, cnf, lnf, unf, dnf, Dcu, Bcu, Rcu, Pcu, hnf, Lcu, mnf, pnf, Ncu, gnf, Eyi, fnf, Mcu, bnf, vnf, Anf, ynf, wnf, _nf, Cnf, xyi=