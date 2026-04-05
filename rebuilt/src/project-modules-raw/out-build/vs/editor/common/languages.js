// Module: out-build/vs/editor/common/languages.js
// Offset: 1187646 (bundle byte offset)
// Size: 9127 bytes

qi(), Yn(), nI(), ts(), raA(), Ht(), wgh=class{
  constructor(n, e, t){
    this.offset=n, this.type=e, this.language=t, this._tokenBrand=void 0
  }
  toString(){
    return"("+this.offset+", "+this.type+")"
  }
}, vOo=class{
  constructor(n, e){
    this.tokens=n, this.endState=e, this._encodedTokenizationResultBrand=void 0
  }
}, (function(n){
  n[n.Increase=0]="Increase", n[n.Decrease=1]="Decrease"
})(b3||(b3={
  
})), (function(n){
  n[n.Method=0]="Method", n[n.Function=1]="Function", n[n.Constructor=2]="Constructor", n[n.Field=3]="Field", n[n.Variable=4]="Variable", n[n.Class=5]="Class", n[n.Struct=6]="Struct", n[n.Interface=7]="Interface", n[n.Module=8]="Module", n[n.Property=9]="Property", n[n.Event=10]="Event", n[n.Operator=11]="Operator", n[n.Unit=12]="Unit", n[n.Value=13]="Value", n[n.Constant=14]="Constant", n[n.Enum=15]="Enum", n[n.EnumMember=16]="EnumMember", n[n.Keyword=17]="Keyword", n[n.Text=18]="Text", n[n.Color=19]="Color", n[n.File=20]="File", n[n.Reference=21]="Reference", n[n.Customcolor=22]="Customcolor", n[n.Folder=23]="Folder", n[n.TypeParameter=24]="TypeParameter", n[n.User=25]="User", n[n.Issue=26]="Issue", n[n.Snippet=27]="Snippet"
})(_gh||(_gh={
  
})), (function(n){
  const e=new Map;
  e.set(0, Be.symbolMethod), e.set(1, Be.symbolFunction), e.set(2, Be.symbolConstructor), e.set(3, Be.symbolField), e.set(4, Be.symbolVariable), e.set(5, Be.symbolClass), e.set(6, Be.symbolStruct), e.set(7, Be.symbolInterface), e.set(8, Be.symbolModule), e.set(9, Be.symbolProperty), e.set(10, Be.symbolEvent), e.set(11, Be.symbolOperator), e.set(12, Be.symbolUnit), e.set(13, Be.symbolValue), e.set(15, Be.symbolEnum), e.set(14, Be.symbolConstant), e.set(15, Be.symbolEnum), e.set(16, Be.symbolEnumMember), e.set(17, Be.symbolKeyword), e.set(27, Be.symbolSnippet), e.set(18, Be.symbolText), e.set(19, Be.symbolColor), e.set(20, Be.symbolFile), e.set(21, Be.symbolReference), e.set(22, Be.symbolCustomColor), e.set(23, Be.symbolFolder), e.set(24, Be.symbolTypeParameter), e.set(25, Be.account), e.set(26, Be.issues);
  function t(o){
    let a=e.get(o);
    return a||(console.info("No codicon found for CompletionItemKind "+o), a=Be.symbolProperty), a
  }
  n.toIcon=t;
  function i(o){
    switch(o){
      case 0:return _(829,null);
      case 1:return _(830,null);
      case 2:return _(831,null);
      case 3:return _(832,null);
      case 4:return _(833,null);
      case 5:return _(834,null);
      case 6:return _(835,null);
      case 7:return _(836,null);
      case 8:return _(837,null);
      case 9:return _(838,null);
      case 10:return _(839,null);
      case 11:return _(840,null);
      case 12:return _(841,null);
      case 13:return _(842,null);
      case 14:return _(843,null);
      case 15:return _(844,null);
      case 16:return _(845,null);
      case 17:return _(846,null);
      case 18:return _(847,null);
      case 19:return _(848,null);
      case 20:return _(849,null);
      case 21:return _(850,null);
      case 22:return _(851,null);
      case 23:return _(852,null);
      case 24:return _(853,null);
      case 25:return _(854,null);
      case 26:return _(855,null);
      case 27:return _(856,null);
      default:return""
    }
  }
  n.toLabel=i;
  const r=new Map;
  r.set("method", 0), r.set("function", 1), r.set("constructor", 2), r.set("field", 3), r.set("variable", 4), r.set("class", 5), r.set("struct", 6), r.set("interface", 7), r.set("module", 8), r.set("property", 9), r.set("event", 10), r.set("operator", 11), r.set("unit", 12), r.set("value", 13), r.set("constant", 14), r.set("enum", 15), r.set("enum-member", 16), r.set("enumMember", 16), r.set("keyword", 17), r.set("snippet", 27), r.set("text", 18), r.set("color", 19), r.set("file", 20), r.set("reference", 21), r.set("customcolor", 22), r.set("folder", 23), r.set("type-parameter", 24), r.set("typeParameter", 24), r.set("account", 25), r.set("issue", 26);
  function s(o, a){
    let l=r.get(o);
    return typeof l>"u"&&!a&&(l=9), l
  }
  n.fromString=s
})(Eft||(Eft={
  
})), (function(n){
  n[n.Deprecated=1]="Deprecated"
})(Cgh||(Cgh={
  
})), (function(n){
  n[n.None=0]="None", n[n.KeepWhitespace=1]="KeepWhitespace", n[n.InsertAsSnippet=4]="InsertAsSnippet"
})(Sgh||(Sgh={
  
})), (function(n){
  n[n.Word=0]="Word", n[n.Line=1]="Line", n[n.Suggest=2]="Suggest"
})(kgh||(kgh={
  
})), (function(n){
  n[n.Invoke=0]="Invoke", n[n.TriggerCharacter=1]="TriggerCharacter", n[n.TriggerForIncompleteCompletions=2]="TriggerForIncompleteCompletions"
})(Egh||(Egh={
  
})), (function(n){
  n[n.Automatic=0]="Automatic", n[n.Explicit=1]="Explicit"
})(Ybe||(Ybe={
  
})), xgh=class{
  constructor(n, e, t, i){
    this.range=n, this.text=e, this.completionKind=t, this.isSnippetText=i
  }
  equals(n){
    return Zt.lift(this.range).equalsRange(n.range)&&this.text===n.text&&this.completionKind===n.completionKind&&this.isSnippetText===n.isSnippetText
  }
}, (function(n){
  n[n.Invoke=1]="Invoke", n[n.Auto=2]="Auto"
})(Tgh||(Tgh={
  
})), (function(n){
  n[n.Automatic=0]="Automatic", n[n.PasteAs=1]="PasteAs"
})(vOn||(vOn={
  
})), (function(n){
  n[n.Invoke=1]="Invoke", n[n.TriggerCharacter=2]="TriggerCharacter", n[n.ContentChange=3]="ContentChange"
})(cRe||(cRe={
  
})), (function(n){
  n[n.Text=0]="Text", n[n.Read=1]="Read", n[n.Write=2]="Write"
})(LOt||(LOt={
  
})), (function(n){
  n[n.File=0]="File", n[n.Module=1]="Module", n[n.Namespace=2]="Namespace", n[n.Package=3]="Package", n[n.Class=4]="Class", n[n.Method=5]="Method", n[n.Property=6]="Property", n[n.Field=7]="Field", n[n.Constructor=8]="Constructor", n[n.Enum=9]="Enum", n[n.Interface=10]="Interface", n[n.Function=11]="Function", n[n.Variable=12]="Variable", n[n.Constant=13]="Constant", n[n.String=14]="String", n[n.Number=15]="Number", n[n.Boolean=16]="Boolean", n[n.Array=17]="Array", n[n.Object=18]="Object", n[n.Key=19]="Key", n[n.Null=20]="Null", n[n.EnumMember=21]="EnumMember", n[n.Struct=22]="Struct", n[n.Event=23]="Event", n[n.Operator=24]="Operator", n[n.TypeParameter=25]="TypeParameter"
})(Igh||(Igh={
  
})), nxc={
  17:_(857, null), 16:_(858, null), 4:_(859, null), 13:_(860, null), 8:_(861, null), 9:_(862, null), 21:_(863, null), 23:_(864, null), 7:_(865, null), 0:_(866, null), 11:_(867, null), 10:_(868, null), 19:_(869, null), 5:_(870, null), 1:_(871, null), 2:_(872, null), 20:_(873, null), 15:_(874, null), 18:_(875, null), 24:_(876, null), 3:_(877, null), 6:_(878, null), 14:_(879, null), 22:_(880, null), 25:_(881, null), 12:_(882, null)
}, (function(n){
  n[n.Deprecated=1]="Deprecated"
})(Dgh||(Dgh={
  
})), (function(n){
  const e=new Map;
  e.set(0, Be.symbolFile), e.set(1, Be.symbolModule), e.set(2, Be.symbolNamespace), e.set(3, Be.symbolPackage), e.set(4, Be.symbolClass), e.set(5, Be.symbolMethod), e.set(6, Be.symbolProperty), e.set(7, Be.symbolField), e.set(8, Be.symbolConstructor), e.set(9, Be.symbolEnum), e.set(10, Be.symbolInterface), e.set(11, Be.symbolFunction), e.set(12, Be.symbolVariable), e.set(13, Be.symbolConstant), e.set(14, Be.symbolString), e.set(15, Be.symbolNumber), e.set(16, Be.symbolBoolean), e.set(17, Be.symbolArray), e.set(18, Be.symbolObject), e.set(19, Be.symbolKey), e.set(20, Be.symbolNull), e.set(21, Be.symbolEnumMember), e.set(22, Be.symbolStruct), e.set(23, Be.symbolEvent), e.set(24, Be.symbolOperator), e.set(25, Be.symbolTypeParameter);
  function t(s){
    let o=e.get(s);
    return o||(console.info("No codicon found for SymbolKind "+s), o=Be.symbolProperty), o
  }
  n.toIcon=t;
  const i=new Map;
  i.set(0, 20), i.set(1, 8), i.set(2, 8), i.set(3, 8), i.set(4, 5), i.set(5, 0), i.set(6, 9), i.set(7, 3), i.set(8, 2), i.set(9, 15), i.set(10, 7), i.set(11, 1), i.set(12, 4), i.set(13, 14), i.set(14, 18), i.set(15, 13), i.set(16, 13), i.set(17, 13), i.set(18, 13), i.set(19, 17), i.set(20, 13), i.set(21, 16), i.set(22, 6), i.set(23, 10), i.set(24, 11), i.set(25, 24);
  function r(s){
    let o=i.get(s);
    return o===void 0&&(console.info("No completion kind found for SymbolKind "+s), o=20), o
  }
  n.toCompletionKind=r
})($oe||($oe={
  
})), Zbe=class{
  static asEditOperation(n){
    return zb.replace(Zt.lift(n.range), n.text)
  }
  static isTextEdit(n){
    const e=n;
    return typeof e.text=="string"&&Zt.isIRange(e.range)
  }
}, qY=class Nat{
  static{
    this.Comment=new Nat("comment")
  }
  static{
    this.Imports=new Nat("imports")
  }
  static{
    this.Region=new Nat("region")
  }
  static fromValue(e){
    switch(e){
      case"comment":return Nat.Comment;
      case"imports":return Nat.Imports;
      case"region":return Nat.Region
    }
    return new Nat(e)
  }
  constructor(e){
    this.value=e
  }
}, (function(n){
  n[n.AIGenerated=1]="AIGenerated"
})(ixc||(ixc={
  
})), (function(n){
  n[n.Invoke=0]="Invoke", n[n.Automatic=1]="Automatic"
})(AOn||(AOn={
  
})), (function(n){
  function e(t){
    return!t||typeof t!="object"?!1:typeof t.id=="string"&&typeof t.title=="string"
  }
  n.is=e
})(AOo||(AOo={
  
})), (function(n){
  n[n.Collapsed=0]="Collapsed", n[n.Expanded=1]="Expanded"
})(Q$||(Q$={
  
})), (function(n){
  n[n.Unresolved=0]="Unresolved", n[n.Resolved=1]="Resolved"
})(AW||(AW={
  
})), (function(n){
  n[n.Current=0]="Current", n[n.Outdated=1]="Outdated"
})(yOo||(yOo={
  
})), (function(n){
  n[n.Editing=0]="Editing", n[n.Preview=1]="Preview"
})(NOt||(NOt={
  
})), (function(n){
  n[n.Published=0]="Published", n[n.Draft=1]="Draft"
})(Bgh||(Bgh={
  
})), (function(n){
  n[n.Type=1]="Type", n[n.Parameter=2]="Parameter"
})(wOo||(wOo={
  
})), rxc=class{
  constructor(n){
    this.createSupport=n, this._tokenizationSupport=null
  }
  dispose(){
    this._tokenizationSupport&&this._tokenizationSupport.then(n=>{
      n&&n.dispose()
    })
  }
  get tokenizationSupport(){
    return this._tokenizationSupport||(this._tokenizationSupport=this.createSupport()), this._tokenizationSupport
  }
}, pT=new txc, RSe=new txc, (function(n){
  n[n.None=0]="None", n[n.Option=1]="Option", n[n.Default=2]="Default", n[n.Preferred=3]="Preferred"
})(xft||(xft={
  
})), (function(n){
  n[n.Invoke=0]="Invoke", n[n.Automatic=1]="Automatic"
})(sxc||(sxc={
  
}))
}
});
function oxc(n, e){
  const t=new Uint32Array(2);
  return t[0]=0, t[1]=(n<<0|0|0|32768|2<<24)>>>0, new vOo(t, e===null?axc:e)
}
var axc, cxc=