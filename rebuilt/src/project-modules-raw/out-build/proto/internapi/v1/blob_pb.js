// Module: out-build/proto/internapi/v1/blob_pb.js
// Offset: 27724573 (bundle byte offset)
// Size: 3822 bytes

Ka(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.IMAGE=1]="IMAGE", n[n.INVOCATION_CONTEXT=2]="INVOCATION_CONTEXT", n[n.EXTRA_CONTEXT=3]="EXTRA_CONTEXT", n[n.GIT_PR_DIFF_SELECTION=4]="GIT_PR_DIFF_SELECTION", n[n.SELECTED_PULL_REQUEST=5]="SELECTED_PULL_REQUEST", n[n.TEXT=6]="TEXT", n[n.RICH_TEXT=7]="RICH_TEXT", n[n.EXTERNAL_LINK_PDF=8]="EXTERNAL_LINK_PDF", n[n.DOCUMENT=9]="DOCUMENT"
})(eAi||(eAi={
  
})), v.util.setEnumType(eAi, "internapi.v1.BlobType", [{
  no:0, name:"BLOB_TYPE_UNSPECIFIED"
}, {
  no:1, name:"BLOB_TYPE_IMAGE"
}, {
  no:2, name:"BLOB_TYPE_INVOCATION_CONTEXT"
}, {
  no:3, name:"BLOB_TYPE_EXTRA_CONTEXT"
}, {
  no:4, name:"BLOB_TYPE_GIT_PR_DIFF_SELECTION"
}, {
  no:5, name:"BLOB_TYPE_SELECTED_PULL_REQUEST"
}, {
  no:6, name:"BLOB_TYPE_TEXT"
}, {
  no:7, name:"BLOB_TYPE_RICH_TEXT"
}, {
  no:8, name:"BLOB_TYPE_EXTERNAL_LINK_PDF"
}, {
  no:9, name:"BLOB_TYPE_DOCUMENT"
}
]), uWg=class lgs extends ie{
  constructor(e){
    super(), this.mimeType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="internapi.v1.ImageBlobData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"mime_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new lgs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lgs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lgs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lgs, e, t)
  }
}, bba=class ugs extends ie{
  constructor(e){
    super(), this.blobType=eAi.UNSPECIFIED, this.blobId=new Uint8Array(0), this.index=0, this.typeSpecificData={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="internapi.v1.BlobData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"blob_type",kind:"enum",T:v.getEnumType(eAi)
    }, {
      no:2,name:"blob_id",kind:"scalar",T:12
    }, {
      no:3,name:"index",kind:"scalar",T:5
    }, {
      no:4,name:"image_data",kind:"message",T:uWg,oneof:"type_specific_data"
    }
    ])
  }
  static fromBinary(e, t){
    return new ugs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ugs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ugs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ugs, e, t)
  }
}, dWg=class dgs extends ie{
  constructor(e){
    super(), this.blobData=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="internapi.v1.BlobDataPerMessage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"blob_data",kind:"message",T:bba,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dgs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dgs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dgs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dgs, e, t)
  }
}
}
}), sl, uv, dR, tAi, vba, nAi, Aba, iAi, dV, rAi, sAi, VSt, yba, oAi, hWg, mWg, aAi, cAi, pWg, gWg, fWg, bWg, vWg, AWg, yWg, a4A, wWg, _Wg, CWg, SWg, kWg, EWg, xWg, TWg, rX, IWg, DWg, BWg, RWg, PWg, LWg, NWg, MWg, FWg, OWg, UWg, $Wg, qWg, HWg, JWg, GWg, WWg, QWg, jWg, csu, lsu, zWg, VWg, KWg, YWg, ZWg, XWg, eQg, wba, tQg, nQg, iQg, rQg, sQg, usu, oQg, dsu, lAi, uAi, hsu, dAi, msu, hAi, c4A, _ba, aQg, cQg, lQg, uQg, dQg, hQg, mQg, pQg, gQg, fQg, bQg, mAi, vQg, AQg, yQg, wQg, _Qg, CQg, SQg, pAi, l4A, mQ, KSt, Cba, kQg, gAi, EQg, xQg, TQg, IQg, DQg, BQg, RQg, PQg, Imn, LQg, psu, NQg, MQg, FQg, OQg, fAi, UQg, gsu, $Qg, qQg, u4A, HQg, JQg, Dmn, GQg, fsu, WQg, QQg, bsu, jQg, vsu, zQg, VQg, KQg, Asu, YQg, ZQg, XQg, ejg, tjg, njg, ijg, ysu, Bmn, wsu, rjg, sjg, _su, Csu, ojg, ajg, cjg, ljg, ujg, djg, hjg, mjg, pjg, gjg, fjg, Ssu, Sba, bjg, vjg, Ajg, yjg, wjg, _jg, Cjg, Sjg, kjg, ksu, Ejg, xjg, Tjg, Ijg, Djg, Bjg, Rjg, Pjg, Esu, Ljg, Njg, Mjg, Fjg, Ojg, Ujg, $jg, bAi, qjg, Hjg, Jjg, Gjg, Wjg, Qjg, jjg, zjg, Vjg, Kjg, Yjg, Zjg, Xjg, ezg, tzg, nzg, izg, rzg, szg, ozg, azg, czg, lzg, uzg, dzg, hzg, mzg, xsu, pzg, gzg, fzg, bzg, vzg, Azg, yzg, vAi, wzg, kba, Tsu, Rmn, _zg, Czg, Eba, Szg, Isu, kzg, Ezg, xzg, Tzg, Izg, Dsu, Dzg, Bzg, Rzg, Pzg, Lzg, Nzg, Mzg, xba, Fzg, Bsu, Ozg, Uzg, $zg, qzg, Hzg, Jzg, Gzg, Wzg, Qzg, jzg, Tba, zzg, Vzg, Kzg, d4A, AAi, YSt, Yzg, Zzg, Xzg, Rsu, h4A, eVg, tVg, nVg, iVg, rVg, sVg, m4A, oVg, aVg, cVg, lVg, uVg, dVg, hVg, mVg, pVg, gVg, fVg, bVg, vVg, Psu, Lsu, AVg, yVg, wVg, _Vg, CVg, SVg, kVg, EVg, Nsu, ZS=