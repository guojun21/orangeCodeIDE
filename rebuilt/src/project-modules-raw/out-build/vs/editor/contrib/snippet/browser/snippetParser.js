// Module: out-build/vs/editor/contrib/snippet/browser/snippetParser.js
// Offset: 2407546 (bundle byte offset)
// Size: 13606 bytes

(function(n){
  n[n.Dollar=0]="Dollar", n[n.Colon=1]="Colon", n[n.Comma=2]="Comma", n[n.CurlyOpen=3]="CurlyOpen", n[n.CurlyClose=4]="CurlyClose", n[n.Backslash=5]="Backslash", n[n.Forwardslash=6]="Forwardslash", n[n.Pipe=7]="Pipe", n[n.Int=8]="Int", n[n.VariableName=9]="VariableName", n[n.Format=10]="Format", n[n.Plus=11]="Plus", n[n.Dash=12]="Dash", n[n.QuestionMark=13]="QuestionMark", n[n.EOF=14]="EOF"
})(NSh||(NSh={
  
})), MSh=class WFe{
  constructor(){
    this.value="", this.pos=0
  }
  static{
    this._table={
      36:0,58:1,44:2,123:3,125:4,92:5,47:6,124:7,43:11,45:12,63:13
    }
  }
  static isDigitCharacter(e){
    return e>=48&&e<=57
  }
  static isVariableCharacter(e){
    return e===95||e>=97&&e<=122||e>=65&&e<=90
  }
  text(e){
    this.value=e, this.pos=0
  }
  tokenText(e){
    return this.value.substr(e.pos, e.len)
  }
  next(){
    if(this.pos>=this.value.length)return{
      type:14,pos:this.pos,len:0
    };
    const e=this.pos;
    let t=0, i=this.value.charCodeAt(e), r;
    if(r=WFe._table[i], typeof r=="number")return this.pos+=1, {
      type:r,pos:e,len:1
    };
    if(WFe.isDigitCharacter(i)){
      r=8;
      do t+=1,i=this.value.charCodeAt(e+t);
      while(WFe.isDigitCharacter(i));
      return this.pos+=t,{
        type:r,pos:e,len:t
      }
    }
    if(WFe.isVariableCharacter(i)){
      r=9;
      do i=this.value.charCodeAt(e+ ++t);
      while(WFe.isVariableCharacter(i)||WFe.isDigitCharacter(i));
      return this.pos+=t,{
        type:r,pos:e,len:t
      }
    }
    r=10;
    do t+=1, i=this.value.charCodeAt(e+t);
    while(!isNaN(i)&&typeof WFe._table[i]>"u"&&!WFe.isDigitCharacter(i)&&!WFe.isVariableCharacter(i));
    return this.pos+=t, {
      type:r,pos:e,len:t
    }
  }
}, _bt=class{
  constructor(){
    this._children=[]
  }
  appendChild(n){
    return n instanceof gz&&this._children[this._children.length-1]instanceof gz?this._children[this._children.length-1].value+=n.value:(n.parent=this, this._children.push(n)), this
  }
  replace(n, e){
    const{
      parent:t
    }
    =n, i=t.children.indexOf(n), r=t.children.slice(0);
    r.splice(i, 1, ...e), t._children=r, (function s(o, a){
      for(const l of o)l.parent=a,s(l.children,l)
    })(e, t)
  }
  get children(){
    return this._children
  }
  get rightMostDescendant(){
    return this._children.length>0?this._children[this._children.length-1].rightMostDescendant:this
  }
  get snippet(){
    let n=this;
    for(;
    ;
    ){
      if(!n)return;
      if(n instanceof Z5o)return n;
      n=n.parent
    }
  }
  toString(){
    return this.children.reduce((n, e)=>n+e.toString(), "")
  }
  len(){
    return 0
  }
}, gz=class Had extends _bt{
  static escape(e){
    return e.replace(/\$|
  }
  |\\/g, "\\$&")
}
constructor(e){
  super(), this.value=e
}
toString(){
  return this.value
}
toTextmateString(){
  return Had.escape(this.value)
}
len(){
  return this.value.length
}
clone(){
  return new Had(this.value)
}
}, kBc=class extends _bt{
  
}, Zoe=class $Gb extends kBc{
  static compareByIndex(e, t){
    return e.index===t.index?0:e.isFinalTabstop?1:t.isFinalTabstop||e.index<t.index?-1:e.index>t.index?1:0
  }
  constructor(e){
    super(), this.index=e
  }
  get isFinalTabstop(){
    return this.index===0
  }
  get choice(){
    return this._children.length===1&&this._children[0]instanceof Q3n?this._children[0]:void 0
  }
  toTextmateString(){
    let e="";
    return this.transform&&(e=this.transform.toTextmateString()), this.children.length===0&&!this.transform?`$${this.index}`:this.children.length===0?`\${${this.index}${e}}`:this.choice?`\${${this.index}|${this.choice.toTextmateString()}|${e}}`:`\${${this.index}:${this.children.map(t=>t.toTextmateString()).join("")}${e}}`
  }
  clone(){
    const e=new $Gb(this.index);
    return this.transform&&(e.transform=this.transform.clone()), e._children=this.children.map(t=>t.clone()), e
  }
}, Q3n=class qGb extends _bt{
  constructor(){
    super(...arguments), this.options=[]
  }
  appendChild(e){
    return e instanceof gz&&(e.parent=this, this.options.push(e)), this
  }
  toString(){
    return this.options[0].value
  }
  toTextmateString(){
    return this.options.map(e=>e.value.replace(/\||, |\\/g, "\\$&")).join(",")
  }
  len(){
    return this.options[0].len()
  }
  clone(){
    const e=new qGb;
    return this.options.forEach(e.appendChild, e), e
  }
}, FSh=class HGb extends _bt{
  constructor(){
    super(...arguments), this.regexp=new RegExp("")
  }
  resolve(e){
    const t=this;
    let i=!1, r=e.replace(this.regexp, function(){
      return i=!0,t._replace(Array.prototype.slice.call(arguments,0,-2))
    });
    return!i&&this._children.some(s=>s instanceof kRe&&!!s.elseValue)&&(r=this._replace([])), r
  }
  _replace(e){
    let t="";
    for(const i of this._children)if(i instanceof kRe){
      let r=e[i.index]||"";
      r=i.resolve(r),t+=r
    }
    else t+=i.toString();
    return t
  }
  toString(){
    return""
  }
  toTextmateString(){
    return`/${this.regexp.source}/${this.children.map(e=>e.toTextmateString())}/${(this.regexp.ignoreCase?"i":"")+(this.regexp.global?"g":"")}`
  }
  clone(){
    const e=new HGb;
    return e.regexp=new RegExp(this.regexp.source, (this.regexp.ignoreCase?"i":"")+(this.regexp.global?"g":"")), e._children=this.children.map(t=>t.clone()), e
  }
}, kRe=class JGb extends _bt{
  constructor(e, t, i, r){
    super(), this.index=e, this.shorthandName=t, this.ifValue=i, this.elseValue=r
  }
  resolve(e){
    return this.shorthandName==="upcase"?e?e.toLocaleUpperCase():"":this.shorthandName==="downcase"?e?e.toLocaleLowerCase():"":this.shorthandName==="capitalize"?e?e[0].toLocaleUpperCase()+e.substr(1):"":this.shorthandName==="pascalcase"?e?this._toPascalCase(e):"":this.shorthandName==="camelcase"?e?this._toCamelCase(e):"":e&&typeof this.ifValue=="string"?this.ifValue:!e&&typeof this.elseValue=="string"?this.elseValue:e||""
  }
  _toPascalCase(e){
    const t=e.match(/[a-z0-9]+/gi);
    return t?t.map(i=>i.charAt(0).toUpperCase()+i.substr(1)).join(""):e
  }
  _toCamelCase(e){
    const t=e.match(/[a-z0-9]+/gi);
    return t?t.map((i, r)=>r===0?i.charAt(0).toLowerCase()+i.substr(1):i.charAt(0).toUpperCase()+i.substr(1)).join(""):e
  }
  toTextmateString(){
    let e="${";
    return e+=this.index, this.shorthandName?e+=`:/${this.shorthandName}`:this.ifValue&&this.elseValue?e+=`:?${this.ifValue}:${this.elseValue}`:this.ifValue?e+=`:+${this.ifValue}`:this.elseValue&&(e+=`:-${this.elseValue}`), e+="}", e
  }
  clone(){
    return new JGb(this.index, this.shorthandName, this.ifValue, this.elseValue)
  }
}, j3n=class GGb extends kBc{
  constructor(e){
    super(), this.name=e
  }
  resolve(e){
    let t=e.resolve(this);
    return this.transform&&(t=this.transform.resolve(t||"")), t!==void 0?(this._children=[new gz(t)], !0):!1
  }
  toTextmateString(){
    let e="";
    return this.transform&&(e=this.transform.toTextmateString()), this.children.length===0?`\${${this.name}${e}}`:`\${${this.name}:${this.children.map(t=>t.toTextmateString()).join("")}${e}}`
  }
  clone(){
    const e=new GGb(this.name);
    return this.transform&&(e.transform=this.transform.clone()), e._children=this.children.map(t=>t.clone()), e
  }
}, Z5o=class WGb extends _bt{
  get placeholderInfo(){
    if(!this._placeholders){
      const e=[];
      let t;
      this.walk(function(i){
        return i instanceof Zoe&&(e.push(i),t=!t||t.index<i.index?i:t),!0
      }),this._placeholders={
        all:e,last:t
      }
    }
    return this._placeholders
  }
  get placeholders(){
    const{
      all:e
    }
    =this.placeholderInfo;
    return e
  }
  offset(e){
    let t=0, i=!1;
    return this.walk(r=>r===e?(i=!0, !1):(t+=r.len(), !0)), i?t:-1
  }
  fullLen(e){
    let t=0;
    return LSh([e], i=>(t+=i.len(), !0)), t
  }
  enclosingPlaceholders(e){
    const t=[];
    let{
      parent:i
    }
    =e;
    for(;
    i;
    )i instanceof Zoe&&t.push(i), i=i.parent;
    return t
  }
  resolveVariables(e){
    return this.walk(t=>(t instanceof j3n&&t.resolve(e)&&(this._placeholders=void 0), !0)), this
  }
  appendChild(e){
    return this._placeholders=void 0, super.appendChild(e)
  }
  replace(e, t){
    return this._placeholders=void 0, super.replace(e, t)
  }
  toTextmateString(){
    return this.children.reduce((e, t)=>e+t.toTextmateString(), "")
  }
  clone(){
    const e=new WGb;
    return this._children=this.children.map(t=>t.clone()), e
  }
  walk(e){
    LSh(this.children, e)
  }
}, Ute=class QGb{
  constructor(){
    this._scanner=new MSh, this._token={
      type:14,pos:0,len:0
    }
  }
  static escape(e){
    return e.replace(/\$|
  }
  |\\/g, "\\$&")
}
static asInsertText(e){
  return new QGb().parse(e).toString()
}
static guessNeedsClipboard(e){
  return/\${
    ?CLIPBOARD/.test(e)
  }
  parse(e, t, i){
    const r=new Z5o;
    return this.parseFragment(e, r), this.ensureFinalTabstop(r, i??!1, t??!1), r
  }
  parseFragment(e, t){
    const i=t.children.length;
    for(this._scanner.text(e), this._token=this._scanner.next();
    this._parse(t);
    );
    const r=new Map, s=[];
    t.walk(l=>(l instanceof Zoe&&(l.isFinalTabstop?r.set(0, void 0):!r.has(l.index)&&l.children.length>0?r.set(l.index, l.children):s.push(l)), !0));
    const o=(l, u)=>{
      const d=r.get(l.index);
      if(!d)return;
      const m=new Zoe(l.index);
      m.transform=l.transform;
      for(const p of d){
        const g=p.clone();
        m.appendChild(g),g instanceof Zoe&&r.has(g.index)&&!u.has(g.index)&&(u.add(g.index),o(g,u),u.delete(g.index))
      }
      t.replace(l,[m])
    }, a=new Set;
    for(const l of s)o(l, a);
    return t.children.slice(i)
  }
  ensureFinalTabstop(e, t, i){
    (t||i&&e.placeholders.length>0)&&(e.placeholders.find(s=>s.index===0)||e.appendChild(new Zoe(0)))
  }
  _accept(e, t){
    if(e===void 0||this._token.type===e){
      const i=t?this._scanner.tokenText(this._token):!0;
      return this._token=this._scanner.next(),i
    }
    return!1
  }
  _backTo(e){
    return this._scanner.pos=e.pos+e.len, this._token=e, !1
  }
  _until(e){
    const t=this._token;
    for(;
    this._token.type!==e;
    ){
      if(this._token.type===14)return!1;
      if(this._token.type===5){
        const r=this._scanner.next();
        if(r.type!==0&&r.type!==4&&r.type!==5)return!1
      }
      this._token=this._scanner.next()
    }
    const i=this._scanner.value.substring(t.pos, this._token.pos).replace(/\\(\$|
  }
  |\\)/g, "$1");
  return this._token=this._scanner.next(), i
}
_parse(e){
  return this._parseEscaped(e)||this._parseTabstopOrVariableName(e)||this._parseComplexPlaceholder(e)||this._parseComplexVariable(e)||this._parseAnything(e)
}
_parseEscaped(e){
  let t;
  return(t=this._accept(5, !0))?(t=this._accept(0, !0)||this._accept(4, !0)||this._accept(5, !0)||t, e.appendChild(new gz(t)), !0):!1
}
_parseTabstopOrVariableName(e){
  let t;
  const i=this._token;
  return this._accept(0)&&(t=this._accept(9, !0)||this._accept(8, !0))?(e.appendChild(/^\d+$/.test(t)?new Zoe(Number(t)):new j3n(t)), !0):this._backTo(i)
}
_parseComplexPlaceholder(e){
  let t;
  const i=this._token;
  if(!(this._accept(0)&&this._accept(3)&&(t=this._accept(8, !0))))return this._backTo(i);
  const s=new Zoe(Number(t));
  if(this._accept(1))for(;
  ;
  ){
    if(this._accept(4))return e.appendChild(s), !0;
    if(!this._parse(s))return e.appendChild(new gz("${"+t+":")), s.children.forEach(e.appendChild, e), !0
  }
  else if(s.index>0&&this._accept(7)){
    const o=new Q3n;
    for(;
    ;
    ){
      if(this._parseChoiceElement(o)){
        if(this._accept(2))continue;
        if(this._accept(7)&&(s.appendChild(o),this._accept(4)))return e.appendChild(s),!0
      }
      return this._backTo(i),!1
    }
  }
  else return this._accept(6)?this._parseTransform(s)?(e.appendChild(s), !0):(this._backTo(i), !1):this._accept(4)?(e.appendChild(s), !0):this._backTo(i)
}
_parseChoiceElement(e){
  const t=this._token, i=[];
  for(;
  !(this._token.type===2||this._token.type===7);
  ){
    let r;
    if((r=this._accept(5, !0))?r=this._accept(2, !0)||this._accept(7, !0)||this._accept(5, !0)||r:r=this._accept(void 0, !0), !r)return this._backTo(t), !1;
    i.push(r)
  }
  return i.length===0?(this._backTo(t), !1):(e.appendChild(new gz(i.join(""))), !0)
}
_parseComplexVariable(e){
  let t;
  const i=this._token;
  if(!(this._accept(0)&&this._accept(3)&&(t=this._accept(9, !0))))return this._backTo(i);
  const s=new j3n(t);
  if(this._accept(1))for(;
  ;
  ){
    if(this._accept(4))return e.appendChild(s), !0;
    if(!this._parse(s))return e.appendChild(new gz("${"+t+":")), s.children.forEach(e.appendChild, e), !0
  }
  else return this._accept(6)?this._parseTransform(s)?(e.appendChild(s), !0):(this._backTo(i), !1):this._accept(4)?(e.appendChild(s), !0):this._backTo(i)
}
_parseTransform(e){
  const t=new FSh;
  let i="", r="";
  for(;
  !this._accept(6);
  ){
    let s;
    if(s=this._accept(5, !0)){
      s=this._accept(6,!0)||s,i+=s;
      continue
    }
    if(this._token.type!==14){
      i+=this._accept(void 0,!0);
      continue
    }
    return!1
  }
  for(;
  !this._accept(6);
  ){
    let s;
    if(s=this._accept(5, !0)){
      s=this._accept(5,!0)||this._accept(6,!0)||s,t.appendChild(new gz(s));
      continue
    }
    if(!(this._parseFormatString(t)||this._parseAnything(t)))return!1
  }
  for(;
  !this._accept(4);
  ){
    if(this._token.type!==14){
      r+=this._accept(void 0,!0);
      continue
    }
    return!1
  }
  try{
    t.regexp=new RegExp(i, r)
  }
  catch{
    return!1
  }
  return e.transform=t, !0
}
_parseFormatString(e){
  const t=this._token;
  if(!this._accept(0))return!1;
  let i=!1;
  this._accept(3)&&(i=!0);
  const r=this._accept(8, !0);
  if(r)if(i){
    if(this._accept(4))return e.appendChild(new kRe(Number(r))), !0;
    if(!this._accept(1))return this._backTo(t), !1
  }
  else return e.appendChild(new kRe(Number(r))), !0;
  else return this._backTo(t), !1;
  if(this._accept(6)){
    const s=this._accept(9, !0);
    return!s||!this._accept(4)?(this._backTo(t), !1):(e.appendChild(new kRe(Number(r), s)), !0)
  }
  else if(this._accept(11)){
    const s=this._until(4);
    if(s)return e.appendChild(new kRe(Number(r), void 0, s, void 0)), !0
  }
  else if(this._accept(12)){
    const s=this._until(4);
    if(s)return e.appendChild(new kRe(Number(r), void 0, void 0, s)), !0
  }
  else if(this._accept(13)){
    const s=this._until(1);
    if(s){
      const o=this._until(4);
      if(o)return e.appendChild(new kRe(Number(r),void 0,s,o)),!0
    }
  }
  else{
    const s=this._until(4);
    if(s)return e.appendChild(new kRe(Number(r), void 0, void 0, s)), !0
  }
  return this._backTo(t), !1
}
_parseAnything(e){
  return this._token.type!==14?(e.appendChild(new gz(this._scanner.tokenText(this._token))), this._accept(void 0), !0):!1
}
}
}
});
function OSh(n, e, t){
  return(typeof t.insertText=="string"?t.insertText==="":t.insertText.snippet==="")?{
    edits:t.additionalEdit?.edits??[]
  }
  :{
    edits:[...e.map(i=>new WR(n, {
      range:i,text:typeof t.insertText=="string"?Ute.escape(t.insertText)+"$0":t.insertText.snippet,insertAsSnippet:!0
    })), ...t.additionalEdit?.edits??[]]
  }
}
function USh(n){
  function e(o, a){
    return"mimeType"in o?o.mimeType===a.handledMimeType:!!a.kind&&o.kind.contains(a.kind)
  }
  const t=new Map;
  for(const o of n)for(const a of o.yieldTo??[])for(const l of n)if(l!==o&&e(a, l)){
    let u=t.get(o);
    u||(u=[], t.set(o, u)), u.push(l)
  }
  if(!t.size)return Array.from(n);
  const i=new Set, r=[];
  function s(o){
    if(!o.length)return[];
    const a=o[0];
    if(r.includes(a))return console.warn("Yield to cycle detected", a), o;
    if(i.has(a))return s(o.slice(1));
    let l=[];
    const u=t.get(a);
    return u&&(r.push(a), l=s(u), r.pop()), i.add(a), [...l, a, ...s(o.slice(1))]
  }
  return s(Array.from(n))
}
var EBc=