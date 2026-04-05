// Module: out-build/vs/workbench/contrib/composer/browser/services/planUpdateMerger.js
// Offset: 27956281 (bundle byte offset)
// Size: 34326 bytes

Fsu=class extends Error{
  constructor(n, e){
    const t=e==="not_found"?`The old_str "${n}" was not found in the current plan. Please ensure you're using an exact substring from the plan.`:"Cannot provide an empty string as an old_str if the plan is not empty";
    super(t), this.oldStr=n, this.reason=e, this.name="PlanSearchReplaceError"
  }
}
}
});
function LVg(n){
  return typeof n>"u"||n===null
}
function b4A(n){
  return typeof n=="object"&&n!==null
}
function v4A(n){
  return Array.isArray(n)?n:LVg(n)?[]:[n]
}
function A4A(n, e){
  var t, i, r, s;
  if(e)for(s=Object.keys(e), t=0, i=s.length;
  t<i;
  t+=1)r=s[t], n[r]=e[r];
  return n
}
function y4A(n, e){
  var t="", i;
  for(i=0;
  i<e;
  i+=1)t+=n;
  return t
}
function w4A(n){
  return n===0&&Number.NEGATIVE_INFINITY===1/n
}
function NVg(n, e){
  var t="", i=n.reason||"(unknown reason)";
  return n.mark?(n.mark.name&&(t+='in "'+n.mark.name+'" '), t+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")", !e&&n.mark.snippet&&(t+=`

`+n.mark.snippet), i+" "+t):i
}
function yAi(n, e){
  Error.call(this), this.name="YAMLException", this.reason=n, this.mark=e, this.message=NVg(this, !1), Error.captureStackTrace?Error.captureStackTrace(this, this.constructor):this.stack=new Error().stack||""
}
function Osu(n, e, t, i, r){
  var s="", o="", a=Math.floor(r/2)-1;
  return i-e>a&&(s=" ... ", e=i-a+s.length), t-i>a&&(o=" ...", t=i+a-o.length), {
    str:s+n.slice(e, t).replace(/\t/g, "\u2192")+o, pos:i-e+s.length
  }
}
function Usu(n, e){
  return Oq.repeat(" ", e-n.length)+n
}
function _4A(n, e){
  if(e=Object.create(e||null), !n.buffer)return null;
  e.maxLength||(e.maxLength=79), typeof e.indent!="number"&&(e.indent=1), typeof e.linesBefore!="number"&&(e.linesBefore=3), typeof e.linesAfter!="number"&&(e.linesAfter=2);
  for(var t=/\r?\n|\r|\0/g, i=[0], r=[], s, o=-1;
  s=t.exec(n.buffer);
  )r.push(s.index), i.push(s.index+s[0].length), n.position<=s.index&&o<0&&(o=i.length-2);
  o<0&&(o=i.length-1);
  var a="", l, u, d=Math.min(n.line+e.linesAfter, r.length).toString().length, m=e.maxLength-(e.indent+d+3);
  for(l=1;
  l<=e.linesBefore&&!(o-l<0);
  l++)u=Osu(n.buffer, i[o-l], r[o-l], n.position-(i[o]-i[o-l]), m), a=Oq.repeat(" ", e.indent)+Usu((n.line-l+1).toString(), d)+" | "+u.str+`
`+a;
  for(u=Osu(n.buffer, i[o], r[o], n.position, m), a+=Oq.repeat(" ", e.indent)+Usu((n.line+1).toString(), d)+" | "+u.str+`
`, a+=Oq.repeat("-", e.indent+d+3+u.pos)+`^
`, l=1;
  l<=e.linesAfter&&!(o+l>=r.length);
  l++)u=Osu(n.buffer, i[o+l], r[o+l], n.position-(i[o]-i[o+l]), m), a+=Oq.repeat(" ", e.indent)+Usu((n.line+l+1).toString(), d)+" | "+u.str+`
`;
  return a.replace(/\n$/, "")
}
function C4A(n){
  var e={
    
  };
  return n!==null&&Object.keys(n).forEach(function(t){
    n[t].forEach(function(i){
      e[String(i)]=t
    })
  }), e
}
function S4A(n, e){
  if(e=e||{
    
  }, Object.keys(e).forEach(function(t){
    if(sKg.indexOf(t)===-1)throw new sX('Unknown option "'+t+'" is met in definition of "'+n+'" YAML type.')
  }), this.options=e, this.tag=n, this.kind=e.kind||null, this.resolve=e.resolve||function(){
    return!0
  }, this.construct=e.construct||function(t){
    return t
  }, this.instanceOf=e.instanceOf||null, this.predicate=e.predicate||null, this.represent=e.represent||null, this.representName=e.representName||null, this.defaultStyle=e.defaultStyle||null, this.multi=e.multi||!1, this.styleAliases=C4A(e.styleAliases||null), oKg.indexOf(this.kind)===-1)throw new sX('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')
}
function MVg(n, e){
  var t=[];
  return n[e].forEach(function(i){
    var r=t.length;
    t.forEach(function(s, o){
      s.tag===i.tag&&s.kind===i.kind&&s.multi===i.multi&&(r=o)
    }), t[r]=i
  }), t
}
function k4A(){
  var n={
    scalar:{
      
    }, sequence:{
      
    }, mapping:{
      
    }, fallback:{
      
    }, multi:{
      scalar:[],sequence:[],mapping:[],fallback:[]
    }
  }, e, t;
  function i(r){
    r.multi?(n.multi[r.kind].push(r), n.multi.fallback.push(r)):n[r.kind][r.tag]=n.fallback[r.tag]=r
  }
  for(e=0, t=arguments.length;
  e<t;
  e+=1)arguments[e].forEach(i);
  return n
}
function $su(n){
  return this.extend(n)
}
function E4A(n){
  if(n===null)return!0;
  var e=n.length;
  return e===1&&n==="~"||e===4&&(n==="null"||n==="Null"||n==="NULL")
}
function x4A(){
  return null
}
function T4A(n){
  return n===null
}
function I4A(n){
  if(n===null)return!1;
  var e=n.length;
  return e===4&&(n==="true"||n==="True"||n==="TRUE")||e===5&&(n==="false"||n==="False"||n==="FALSE")
}
function D4A(n){
  return n==="true"||n==="True"||n==="TRUE"
}
function B4A(n){
  return Object.prototype.toString.call(n)==="[object Boolean]"
}
function R4A(n){
  return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102
}
function P4A(n){
  return 48<=n&&n<=55
}
function L4A(n){
  return 48<=n&&n<=57
}
function N4A(n){
  if(n===null)return!1;
  var e=n.length, t=0, i=!1, r;
  if(!e)return!1;
  if(r=n[t], (r==="-"||r==="+")&&(r=n[++t]), r==="0"){
    if(t+1===e)return!0;
    if(r=n[++t], r==="b"){
      for(t++;
      t<e;
      t++)if(r=n[t],r!=="_"){
        if(r!=="0"&&r!=="1")return!1;
        i=!0
      }
      return i&&r!=="_"
    }
    if(r==="x"){
      for(t++;
      t<e;
      t++)if(r=n[t],r!=="_"){
        if(!R4A(n.charCodeAt(t)))return!1;
        i=!0
      }
      return i&&r!=="_"
    }
    if(r==="o"){
      for(t++;
      t<e;
      t++)if(r=n[t],r!=="_"){
        if(!P4A(n.charCodeAt(t)))return!1;
        i=!0
      }
      return i&&r!=="_"
    }
  }
  if(r==="_")return!1;
  for(;
  t<e;
  t++)if(r=n[t], r!=="_"){
    if(!L4A(n.charCodeAt(t)))return!1;
    i=!0
  }
  return!(!i||r==="_")
}
function M4A(n){
  var e=n, t=1, i;
  if(e.indexOf("_")!==-1&&(e=e.replace(/_/g, "")), i=e[0], (i==="-"||i==="+")&&(i==="-"&&(t=-1), e=e.slice(1), i=e[0]), e==="0")return 0;
  if(i==="0"){
    if(e[1]==="b")return t*parseInt(e.slice(2), 2);
    if(e[1]==="x")return t*parseInt(e.slice(2), 16);
    if(e[1]==="o")return t*parseInt(e.slice(2), 8)
  }
  return t*parseInt(e, 10)
}
function F4A(n){
  return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Oq.isNegativeZero(n)
}
function O4A(n){
  return!(n===null||!aKg.test(n)||n[n.length-1]==="_")
}
function U4A(n){
  var e, t;
  return e=n.replace(/_/g, "").toLowerCase(), t=e[0]==="-"?-1:1, "+-".indexOf(e[0])>=0&&(e=e.slice(1)), e===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:e===".nan"?NaN:t*parseFloat(e, 10)
}
function $4A(n, e){
  var t;
  if(isNaN(n))switch(e){
    case"lowercase":return".nan";
    case"uppercase":return".NAN";
    case"camelcase":return".NaN"
  }
  else if(Number.POSITIVE_INFINITY===n)switch(e){
    case"lowercase":return".inf";
    case"uppercase":return".INF";
    case"camelcase":return".Inf"
  }
  else if(Number.NEGATIVE_INFINITY===n)switch(e){
    case"lowercase":return"-.inf";
    case"uppercase":return"-.INF";
    case"camelcase":return"-.Inf"
  }
  else if(Oq.isNegativeZero(n))return"-0.0";
  return t=n.toString(10), cKg.test(t)?t.replace("e", ".e"):t
}
function q4A(n){
  return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Oq.isNegativeZero(n))
}
function H4A(n){
  return n===null?!1:iou.exec(n)!==null||rou.exec(n)!==null
}
function J4A(n){
  var e, t, i, r, s, o, a, l=0, u=null, d, m, p;
  if(e=iou.exec(n), e===null&&(e=rou.exec(n)), e===null)throw new Error("Date resolve error");
  if(t=+e[1], i=+e[2]-1, r=+e[3], !e[4])return new Date(Date.UTC(t, i, r));
  if(s=+e[4], o=+e[5], a=+e[6], e[7]){
    for(l=e[7].slice(0, 3);
    l.length<3;
    )l+="0";
    l=+l
  }
  return e[9]&&(d=+e[10], m=+(e[11]||0), u=(d*60+m)*6e4, e[9]==="-"&&(u=-u)), p=new Date(Date.UTC(t, i, r, s, o, a, l)), u&&p.setTime(p.getTime()-u), p
}
function G4A(n){
  return n.toISOString()
}
function W4A(n){
  return n==="<<"||n===null
}
function Q4A(n){
  if(n===null)return!1;
  var e, t, i=0, r=n.length, s=Pba;
  for(t=0;
  t<r;
  t++)if(e=s.indexOf(n.charAt(t)), !(e>64)){
    if(e<0)return!1;
    i+=6
  }
  return i%8===0
}
function j4A(n){
  var e, t, i=n.replace(/[\r\n=]/g, ""), r=i.length, s=Pba, o=0, a=[];
  for(e=0;
  e<r;
  e++)e%4===0&&e&&(a.push(o>>16&255), a.push(o>>8&255), a.push(o&255)), o=o<<6|s.indexOf(i.charAt(e));
  return t=r%4*6, t===0?(a.push(o>>16&255), a.push(o>>8&255), a.push(o&255)):t===18?(a.push(o>>10&255), a.push(o>>2&255)):t===12&&a.push(o>>4&255), new Uint8Array(a)
}
function z4A(n){
  var e="", t=0, i, r, s=n.length, o=Pba;
  for(i=0;
  i<s;
  i++)i%3===0&&i&&(e+=o[t>>18&63], e+=o[t>>12&63], e+=o[t>>6&63], e+=o[t&63]), t=(t<<8)+n[i];
  return r=s%3, r===0?(e+=o[t>>18&63], e+=o[t>>12&63], e+=o[t>>6&63], e+=o[t&63]):r===2?(e+=o[t>>10&63], e+=o[t>>4&63], e+=o[t<<2&63], e+=o[64]):r===1&&(e+=o[t>>2&63], e+=o[t<<4&63], e+=o[64], e+=o[64]), e
}
function V4A(n){
  return Object.prototype.toString.call(n)==="[object Uint8Array]"
}
function K4A(n){
  if(n===null)return!0;
  var e=[], t, i, r, s, o, a=n;
  for(t=0, i=a.length;
  t<i;
  t+=1){
    if(r=a[t], o=!1, uKg.call(r)!=="[object Object]")return!1;
    for(s in r)if(lKg.call(r, s))if(!o)o=!0;
    else return!1;
    if(!o)return!1;
    if(e.indexOf(s)===-1)e.push(s);
    else return!1
  }
  return!0
}
function Y4A(n){
  return n!==null?n:[]
}
function Z4A(n){
  if(n===null)return!0;
  var e, t, i, r, s, o=n;
  for(s=new Array(o.length), e=0, t=o.length;
  e<t;
  e+=1){
    if(i=o[e], dKg.call(i)!=="[object Object]"||(r=Object.keys(i), r.length!==1))return!1;
    s[e]=[r[0], i[r[0]]]
  }
  return!0
}
function X4A(n){
  if(n===null)return[];
  var e, t, i, r, s, o=n;
  for(s=new Array(o.length), e=0, t=o.length;
  e<t;
  e+=1)i=o[e], r=Object.keys(i), s[e]=[r[0], i[r[0]]];
  return s
}
function eOA(n){
  if(n===null)return!0;
  var e, t=n;
  for(e in t)if(hKg.call(t, e)&&t[e]!==null)return!1;
  return!0
}
function tOA(n){
  return n!==null?n:{
    
  }
}
function FVg(n){
  return Object.prototype.toString.call(n)
}
function QNe(n){
  return n===10||n===13
}
function XSt(n){
  return n===9||n===32
}
function Ace(n){
  return n===9||n===32||n===10||n===13
}
function Nmn(n){
  return n===44||n===91||n===93||n===123||n===125
}
function nOA(n){
  var e;
  return 48<=n&&n<=57?n-48:(e=n|32, 97<=e&&e<=102?e-97+10:-1)
}
function iOA(n){
  return n===120?2:n===117?4:n===85?8:0
}
function rOA(n){
  return 48<=n&&n<=57?n-48:-1
}
function OVg(n){
  return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"\x85":n===95?"\xA0":n===76?"\u2028":n===80?"\u2029":""
}
function sOA(n){
  return n<=65535?String.fromCharCode(n):String.fromCharCode((n-65536>>10)+55296, (n-65536&1023)+56320)
}
function oOA(n, e){
  this.input=n, this.filename=e.filename||null, this.schema=e.schema||Lba, this.onWarning=e.onWarning||null, this.legacy=e.legacy||!1, this.json=e.json||!1, this.listener=e.listener||null, this.implicitTypes=this.schema.compiledImplicit, this.typeMap=this.schema.compiledTypeMap, this.length=n.length, this.position=0, this.line=0, this.lineStart=0, this.lineIndent=0, this.firstTabInLine=-1, this.documents=[]
}
function UVg(n, e){
  var t={
    name:n.filename, buffer:n.input.slice(0, -1), position:n.position, line:n.line, column:n.position-n.lineStart
  };
  return t.snippet=rKg(t), new sX(e, t)
}
function Qy(n, e){
  throw UVg(n, e)
}
function Dba(n, e){
  n.onWarning&&n.onWarning.call(null, UVg(n, e))
}
function mnt(n, e, t, i){
  var r, s, o, a;
  if(e<t){
    if(a=n.input.slice(e, t), i)for(r=0, s=a.length;
    r<s;
    r+=1)o=a.charCodeAt(r), o===9||32<=o&&o<=1114111||Qy(n, "expected valid JSON character");
    else pKg.test(a)&&Qy(n, "the stream contains non-printable characters");
    n.result+=a
  }
}
function $Vg(n, e, t, i){
  var r, s, o, a;
  for(Oq.isObject(t)||Qy(n, "cannot merge mappings; the provided source object is unacceptable"), r=Object.keys(t), o=0, a=r.length;
  o<a;
  o+=1)s=r[o], Q$e.call(e, s)||(e[s]=t[s], i[s]=!0)
}
function Mmn(n, e, t, i, r, s, o, a, l){
  var u, d;
  if(Array.isArray(r))for(r=Array.prototype.slice.call(r), u=0, d=r.length;
  u<d;
  u+=1)Array.isArray(r[u])&&Qy(n, "nested arrays are not supported inside keys"), typeof r=="object"&&FVg(r[u])==="[object Object]"&&(r[u]="[object Object]");
  if(typeof r=="object"&&FVg(r)==="[object Object]"&&(r="[object Object]"), r=String(r), e===null&&(e={
    
  }), i==="tag:yaml.org,2002:merge")if(Array.isArray(s))for(u=0, d=s.length;
  u<d;
  u+=1)$Vg(n, e, s[u], t);
  else $Vg(n, e, s, t);
  else!n.json&&!Q$e.call(t, r)&&Q$e.call(e, r)&&(n.line=o||n.line, n.lineStart=a||n.lineStart, n.position=l||n.position, Qy(n, "duplicated mapping key")), r==="__proto__"?Object.defineProperty(e, r, {
    configurable:!0, enumerable:!0, writable:!0, value:s
  }):e[r]=s, delete t[r];
  return e
}
function qsu(n){
  var e;
  e=n.input.charCodeAt(n.position), e===10?n.position++:e===13?(n.position++, n.input.charCodeAt(n.position)===10&&n.position++):Qy(n, "a line break is expected"), n.line+=1, n.lineStart=n.position, n.firstTabInLine=-1
}
function Fq(n, e, t){
  for(var i=0, r=n.input.charCodeAt(n.position);
  r!==0;
  ){
    for(;
    XSt(r);
    )r===9&&n.firstTabInLine===-1&&(n.firstTabInLine=n.position), r=n.input.charCodeAt(++n.position);
    if(e&&r===35)do r=n.input.charCodeAt(++n.position);
    while(r!==10&&r!==13&&r!==0);
    if(QNe(r))for(qsu(n), r=n.input.charCodeAt(n.position), i++, n.lineIndent=0;
    r===32;
    )n.lineIndent++, r=n.input.charCodeAt(++n.position);
    else break
  }
  return t!==-1&&i!==0&&n.lineIndent<t&&Dba(n, "deficient indentation"), i
}
function Bba(n){
  var e=n.position, t;
  return t=n.input.charCodeAt(e), !!((t===45||t===46)&&t===n.input.charCodeAt(e+1)&&t===n.input.charCodeAt(e+2)&&(e+=3, t=n.input.charCodeAt(e), t===0||Ace(t)))
}
function Hsu(n, e){
  e===1?n.result+=" ":e>1&&(n.result+=Oq.repeat(`
`, e-1))
}
function aOA(n, e, t){
  var i, r, s, o, a, l, u, d, m=n.kind, p=n.result, g;
  if(g=n.input.charCodeAt(n.position), Ace(g)||Nmn(g)||g===35||g===38||g===42||g===33||g===124||g===62||g===39||g===34||g===37||g===64||g===96||(g===63||g===45)&&(r=n.input.charCodeAt(n.position+1), Ace(r)||t&&Nmn(r)))return!1;
  for(n.kind="scalar", n.result="", s=o=n.position, a=!1;
  g!==0;
  ){
    if(g===58){
      if(r=n.input.charCodeAt(n.position+1),Ace(r)||t&&Nmn(r))break
    }
    else if(g===35){
      if(i=n.input.charCodeAt(n.position-1),Ace(i))break
    }
    else{
      if(n.position===n.lineStart&&Bba(n)||t&&Nmn(g))break;
      if(QNe(g))if(l=n.line,u=n.lineStart,d=n.lineIndent,Fq(n,!1,-1),n.lineIndent>=e){
        a=!0,g=n.input.charCodeAt(n.position);
        continue
      }
      else{
        n.position=o,n.line=l,n.lineStart=u,n.lineIndent=d;
        break
      }
    }
    a&&(mnt(n, s, o, !1), Hsu(n, n.line-l), s=o=n.position, a=!1), XSt(g)||(o=n.position+1), g=n.input.charCodeAt(++n.position)
  }
  return mnt(n, s, o, !1), n.result?!0:(n.kind=m, n.result=p, !1)
}
function cOA(n, e){
  var t, i, r;
  if(t=n.input.charCodeAt(n.position), t!==39)return!1;
  for(n.kind="scalar", n.result="", n.position++, i=r=n.position;
  (t=n.input.charCodeAt(n.position))!==0;
  )if(t===39)if(mnt(n, i, n.position, !0), t=n.input.charCodeAt(++n.position), t===39)i=n.position, n.position++, r=n.position;
  else return!0;
  else QNe(t)?(mnt(n, i, r, !0), Hsu(n, Fq(n, !1, e)), i=r=n.position):n.position===n.lineStart&&Bba(n)?Qy(n, "unexpected end of the document within a single quoted scalar"):(n.position++, r=n.position);
  Qy(n, "unexpected end of the stream within a single quoted scalar")
}
function lOA(n, e){
  var t, i, r, s, o, a;
  if(a=n.input.charCodeAt(n.position), a!==34)return!1;
  for(n.kind="scalar", n.result="", n.position++, t=i=n.position;
  (a=n.input.charCodeAt(n.position))!==0;
  ){
    if(a===34)return mnt(n, t, n.position, !0), n.position++, !0;
    if(a===92){
      if(mnt(n,t,n.position,!0),a=n.input.charCodeAt(++n.position),QNe(a))Fq(n,!1,e);
      else if(a<256&&fou[a])n.result+=bou[a],n.position++;
      else if((o=iOA(a))>0){
        for(r=o,s=0;
        r>0;
        r--)a=n.input.charCodeAt(++n.position),(o=nOA(a))>=0?s=(s<<4)+o:Qy(n,"expected hexadecimal character");
        n.result+=sOA(s),n.position++
      }
      else Qy(n,"unknown escape sequence");
      t=i=n.position
    }
    else QNe(a)?(mnt(n, t, i, !0), Hsu(n, Fq(n, !1, e)), t=i=n.position):n.position===n.lineStart&&Bba(n)?Qy(n, "unexpected end of the document within a double quoted scalar"):(n.position++, i=n.position)
  }
  Qy(n, "unexpected end of the stream within a double quoted scalar")
}
function uOA(n, e){
  var t=!0, i, r, s, o=n.tag, a, l=n.anchor, u, d, m, p, g, f=Object.create(null), A, w, C, x;
  if(x=n.input.charCodeAt(n.position), x===91)d=93, g=!1, a=[];
  else if(x===123)d=125, g=!0, a={
    
  };
  else return!1;
  for(n.anchor!==null&&(n.anchorMap[n.anchor]=a), x=n.input.charCodeAt(++n.position);
  x!==0;
  ){
    if(Fq(n, !0, e), x=n.input.charCodeAt(n.position), x===d)return n.position++, n.tag=o, n.anchor=l, n.kind=g?"mapping":"sequence", n.result=a, !0;
    t?x===44&&Qy(n, "expected the node content, but found ','"):Qy(n, "missed comma between flow collection entries"), w=A=C=null, m=p=!1, x===63&&(u=n.input.charCodeAt(n.position+1), Ace(u)&&(m=p=!0, n.position++, Fq(n, !0, e))), i=n.line, r=n.lineStart, s=n.position, Fmn(n, e, CAi, !1, !0), w=n.tag, A=n.result, Fq(n, !0, e), x=n.input.charCodeAt(n.position), (p||n.line===i)&&x===58&&(m=!0, x=n.input.charCodeAt(++n.position), Fq(n, !0, e), Fmn(n, e, CAi, !1, !0), C=n.result), g?Mmn(n, a, f, w, A, C, i, r, s):m?a.push(Mmn(n, null, f, w, A, C, i, r, s)):a.push(A), Fq(n, !0, e), x=n.input.charCodeAt(n.position), x===44?(t=!0, x=n.input.charCodeAt(++n.position)):t=!1
  }
  Qy(n, "unexpected end of the stream within a flow collection")
}
function dOA(n, e){
  var t, i, r=Nba, s=!1, o=!1, a=e, l=0, u=!1, d, m;
  if(m=n.input.charCodeAt(n.position), m===124)i=!1;
  else if(m===62)i=!0;
  else return!1;
  for(n.kind="scalar", n.result="";
  m!==0;
  )if(m=n.input.charCodeAt(++n.position), m===43||m===45)Nba===r?r=m===43?mou:mKg:Qy(n, "repeat of a chomping mode identifier");
  else if((d=rOA(m))>=0)d===0?Qy(n, "bad explicit indentation width of a block scalar; it cannot be less than one"):o?Qy(n, "repeat of an indentation width identifier"):(a=e+d-1, o=!0);
  else break;
  if(XSt(m)){
    do m=n.input.charCodeAt(++n.position);
    while(XSt(m));
    if(m===35)do m=n.input.charCodeAt(++n.position);
    while(!QNe(m)&&m!==0)
  }
  for(;
  m!==0;
  ){
    for(qsu(n), n.lineIndent=0, m=n.input.charCodeAt(n.position);
    (!o||n.lineIndent<a)&&m===32;
    )n.lineIndent++, m=n.input.charCodeAt(++n.position);
    if(!o&&n.lineIndent>a&&(a=n.lineIndent), QNe(m)){
      l++;
      continue
    }
    if(n.lineIndent<a){
      r===mou?n.result+=Oq.repeat(`
`,s?1+l:l):r===Nba&&s&&(n.result+=`
`);
      break
    }
    for(i?XSt(m)?(u=!0, n.result+=Oq.repeat(`
`, s?1+l:l)):u?(u=!1, n.result+=Oq.repeat(`
`, l+1)):l===0?s&&(n.result+=" "):n.result+=Oq.repeat(`
`, l):n.result+=Oq.repeat(`
`, s?1+l:l), s=!0, o=!0, l=0, t=n.position;
    !QNe(m)&&m!==0;
    )m=n.input.charCodeAt(++n.position);
    mnt(n, t, n.position, !1)
  }
  return!0
}
function qVg(n, e){
  var t, i=n.tag, r=n.anchor, s=[], o, a=!1, l;
  if(n.firstTabInLine!==-1)return!1;
  for(n.anchor!==null&&(n.anchorMap[n.anchor]=s), l=n.input.charCodeAt(n.position);
  l!==0&&(n.firstTabInLine!==-1&&(n.position=n.firstTabInLine, Qy(n, "tab characters must not be used in indentation")), !(l!==45||(o=n.input.charCodeAt(n.position+1), !Ace(o))));
  ){
    if(a=!0, n.position++, Fq(n, !0, -1)&&n.lineIndent<=e){
      s.push(null),l=n.input.charCodeAt(n.position);
      continue
    }
    if(t=n.line, Fmn(n, e, hou, !1, !0), s.push(n.result), Fq(n, !0, -1), l=n.input.charCodeAt(n.position), (n.line===t||n.lineIndent>e)&&l!==0)Qy(n, "bad indentation of a sequence entry");
    else if(n.lineIndent<e)break
  }
  return a?(n.tag=i, n.anchor=r, n.kind="sequence", n.result=s, !0):!1
}
function hOA(n, e, t){
  var i, r, s, o, a, l, u=n.tag, d=n.anchor, m={
    
  }, p=Object.create(null), g=null, f=null, A=null, w=!1, C=!1, x;
  if(n.firstTabInLine!==-1)return!1;
  for(n.anchor!==null&&(n.anchorMap[n.anchor]=m), x=n.input.charCodeAt(n.position);
  x!==0;
  ){
    if(!w&&n.firstTabInLine!==-1&&(n.position=n.firstTabInLine, Qy(n, "tab characters must not be used in indentation")), i=n.input.charCodeAt(n.position+1), s=n.line, (x===63||x===58)&&Ace(i))x===63?(w&&(Mmn(n, m, p, g, f, null, o, a, l), g=f=A=null), C=!0, w=!0, r=!0):w?(w=!1, r=!0):Qy(n, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), n.position+=1, x=i;
    else{
      if(o=n.line,a=n.lineStart,l=n.position,!Fmn(n,t,dou,!1,!0))break;
      if(n.line===s){
        for(x=n.input.charCodeAt(n.position);
        XSt(x);
        )x=n.input.charCodeAt(++n.position);
        if(x===58)x=n.input.charCodeAt(++n.position),Ace(x)||Qy(n,"a whitespace character is expected after the key-value separator within a block mapping"),w&&(Mmn(n,m,p,g,f,null,o,a,l),g=f=A=null),C=!0,w=!1,r=!1,g=n.tag,f=n.result;
        else if(C)Qy(n,"can not read an implicit mapping pair; a colon is missed");
        else return n.tag=u,n.anchor=d,!0
      }
      else if(C)Qy(n,"can not read a block mapping entry; a multiline key may not be an implicit key");
      else return n.tag=u,n.anchor=d,!0
    }
    if((n.line===s||n.lineIndent>e)&&(w&&(o=n.line, a=n.lineStart, l=n.position), Fmn(n, e, SAi, !0, r)&&(w?f=n.result:A=n.result), w||(Mmn(n, m, p, g, f, A, o, a, l), g=f=A=null), Fq(n, !0, -1), x=n.input.charCodeAt(n.position)), (n.line===s||n.lineIndent>e)&&x!==0)Qy(n, "bad indentation of a mapping entry");
    else if(n.lineIndent<e)break
  }
  return w&&Mmn(n, m, p, g, f, null, o, a, l), C&&(n.tag=u, n.anchor=d, n.kind="mapping", n.result=m), C
}
function mOA(n){
  var e, t=!1, i=!1, r, s, o;
  if(o=n.input.charCodeAt(n.position), o!==33)return!1;
  if(n.tag!==null&&Qy(n, "duplication of a tag property"), o=n.input.charCodeAt(++n.position), o===60?(t=!0, o=n.input.charCodeAt(++n.position)):o===33?(i=!0, r="!!", o=n.input.charCodeAt(++n.position)):r="!", e=n.position, t){
    do o=n.input.charCodeAt(++n.position);
    while(o!==0&&o!==62);
    n.position<n.length?(s=n.input.slice(e, n.position), o=n.input.charCodeAt(++n.position)):Qy(n, "unexpected end of the stream within a verbatim tag")
  }
  else{
    for(;
    o!==0&&!Ace(o);
    )o===33&&(i?Qy(n, "tag suffix cannot contain exclamation marks"):(r=n.input.slice(e-1, n.position+1), pou.test(r)||Qy(n, "named tag handle cannot contain such characters"), i=!0, e=n.position+1)), o=n.input.charCodeAt(++n.position);
    s=n.input.slice(e, n.position), fKg.test(s)&&Qy(n, "tag suffix cannot contain flow indicator characters")
  }
  s&&!gou.test(s)&&Qy(n, "tag name cannot contain such characters: "+s);
  try{
    s=decodeURIComponent(s)
  }
  catch{
    Qy(n, "tag name is malformed: "+s)
  }
  return t?n.tag=s:Q$e.call(n.tagMap, r)?n.tag=n.tagMap[r]+s:r==="!"?n.tag="!"+s:r==="!!"?n.tag="tag:yaml.org,2002:"+s:Qy(n, 'undeclared tag handle "'+r+'"'), !0
}
function pOA(n){
  var e, t;
  if(t=n.input.charCodeAt(n.position), t!==38)return!1;
  for(n.anchor!==null&&Qy(n, "duplication of an anchor property"), t=n.input.charCodeAt(++n.position), e=n.position;
  t!==0&&!Ace(t)&&!Nmn(t);
  )t=n.input.charCodeAt(++n.position);
  return n.position===e&&Qy(n, "name of an anchor node must contain at least one character"), n.anchor=n.input.slice(e, n.position), !0
}
function gOA(n){
  var e, t, i;
  if(i=n.input.charCodeAt(n.position), i!==42)return!1;
  for(i=n.input.charCodeAt(++n.position), e=n.position;
  i!==0&&!Ace(i)&&!Nmn(i);
  )i=n.input.charCodeAt(++n.position);
  return n.position===e&&Qy(n, "name of an alias node must contain at least one character"), t=n.input.slice(e, n.position), Q$e.call(n.anchorMap, t)||Qy(n, 'unidentified alias "'+t+'"'), n.result=n.anchorMap[t], Fq(n, !0, -1), !0
}
function Fmn(n, e, t, i, r){
  var s, o, a, l=1, u=!1, d=!1, m, p, g, f, A, w;
  if(n.listener!==null&&n.listener("open", n), n.tag=null, n.anchor=null, n.kind=null, n.result=null, s=o=a=SAi===t||hou===t, i&&Fq(n, !0, -1)&&(u=!0, n.lineIndent>e?l=1:n.lineIndent===e?l=0:n.lineIndent<e&&(l=-1)), l===1)for(;
  mOA(n)||pOA(n);
  )Fq(n, !0, -1)?(u=!0, a=s, n.lineIndent>e?l=1:n.lineIndent===e?l=0:n.lineIndent<e&&(l=-1)):a=!1;
  if(a&&(a=u||r), (l===1||SAi===t)&&(CAi===t||dou===t?A=e:A=e+1, w=n.position-n.lineStart, l===1?a&&(qVg(n, w)||hOA(n, w, A))||uOA(n, A)?d=!0:(o&&dOA(n, A)||cOA(n, A)||lOA(n, A)?d=!0:gOA(n)?(d=!0, (n.tag!==null||n.anchor!==null)&&Qy(n, "alias node should not have any properties")):aOA(n, A, CAi===t)&&(d=!0, n.tag===null&&(n.tag="?")), n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):l===0&&(d=a&&qVg(n, w))), n.tag===null)n.anchor!==null&&(n.anchorMap[n.anchor]=n.result);
  else if(n.tag==="?"){
    for(n.result!==null&&n.kind!=="scalar"&&Qy(n, 'unacceptable node kind for !<?> tag; it should be "scalar", not "'+n.kind+'"'), m=0, p=n.implicitTypes.length;
    m<p;
    m+=1)if(f=n.implicitTypes[m], f.resolve(n.result)){
      n.result=f.construct(n.result),n.tag=f.tag,n.anchor!==null&&(n.anchorMap[n.anchor]=n.result);
      break
    }
  }
  else if(n.tag!=="!"){
    if(Q$e.call(n.typeMap[n.kind||"fallback"], n.tag))f=n.typeMap[n.kind||"fallback"][n.tag];
    else for(f=null, g=n.typeMap.multi[n.kind||"fallback"], m=0, p=g.length;
    m<p;
    m+=1)if(n.tag.slice(0, g[m].tag.length)===g[m].tag){
      f=g[m];
      break
    }
    f||Qy(n, "unknown tag !<"+n.tag+">"), n.result!==null&&f.kind!==n.kind&&Qy(n, "unacceptable node kind for !<"+n.tag+'> tag; it should be "'+f.kind+'", not "'+n.kind+'"'), f.resolve(n.result, n.tag)?(n.result=f.construct(n.result, n.tag), n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):Qy(n, "cannot resolve a node with !<"+n.tag+"> explicit tag")
  }
  return n.listener!==null&&n.listener("close", n), n.tag!==null||n.anchor!==null||d
}
function fOA(n){
  var e=n.position, t, i, r, s=!1, o;
  for(n.version=null, n.checkLineBreaks=n.legacy, n.tagMap=Object.create(null), n.anchorMap=Object.create(null);
  (o=n.input.charCodeAt(n.position))!==0&&(Fq(n, !0, -1), o=n.input.charCodeAt(n.position), !(n.lineIndent>0||o!==37));
  ){
    for(s=!0, o=n.input.charCodeAt(++n.position), t=n.position;
    o!==0&&!Ace(o);
    )o=n.input.charCodeAt(++n.position);
    for(i=n.input.slice(t, n.position), r=[], i.length<1&&Qy(n, "directive name must not be less than one character in length");
    o!==0;
    ){
      for(;
      XSt(o);
      )o=n.input.charCodeAt(++n.position);
      if(o===35){
        do o=n.input.charCodeAt(++n.position);
        while(o!==0&&!QNe(o));
        break
      }
      if(QNe(o))break;
      for(t=n.position;
      o!==0&&!Ace(o);
      )o=n.input.charCodeAt(++n.position);
      r.push(n.input.slice(t,n.position))
    }
    o!==0&&qsu(n), Q$e.call(vou, i)?vou[i](n, i, r):Dba(n, 'unknown document directive "'+i+'"')
  }
  if(Fq(n, !0, -1), n.lineIndent===0&&n.input.charCodeAt(n.position)===45&&n.input.charCodeAt(n.position+1)===45&&n.input.charCodeAt(n.position+2)===45?(n.position+=3, Fq(n, !0, -1)):s&&Qy(n, "directives end mark is expected"), Fmn(n, n.lineIndent-1, SAi, !1, !0), Fq(n, !0, -1), n.checkLineBreaks&&gKg.test(n.input.slice(e, n.position))&&Dba(n, "non-ASCII line breaks are interpreted as content"), n.documents.push(n.result), n.position===n.lineStart&&Bba(n)){
    n.input.charCodeAt(n.position)===46&&(n.position+=3, Fq(n, !0, -1));
    return
  }
  if(n.position<n.length-1)Qy(n, "end of the stream or a document separator is expected");
  else return
}
function HVg(n, e){
  n=String(n), e=e||{
    
  }, n.length!==0&&(n.charCodeAt(n.length-1)!==10&&n.charCodeAt(n.length-1)!==13&&(n+=`
`), n.charCodeAt(0)===65279&&(n=n.slice(1)));
  var t=new oOA(n, e), i=n.indexOf("\0");
  for(i!==-1&&(t.position=i, Qy(t, "null byte is not allowed in input")), t.input+="\0";
  t.input.charCodeAt(t.position)===32;
  )t.lineIndent+=1, t.position+=1;
  for(;
  t.position<t.length-1;
  )fOA(t);
  return t.documents
}
function bOA(n, e, t){
  e!==null&&typeof e=="object"&&typeof t>"u"&&(t=e, e=null);
  var i=HVg(n, t);
  if(typeof e!="function")return i;
  for(var r=0, s=i.length;
  r<s;
  r+=1)e(i[r])
}
function vOA(n, e){
  var t=HVg(n, e);
  if(t.length!==0){
    if(t.length===1)return t[0];
    throw new sX("expected a single document in the stream, but found more")
  }
}
function AOA(n, e){
  var t, i, r, s, o, a, l;
  if(e===null)return{
    
  };
  for(t={
    
  }, i=Object.keys(e), r=0, s=i.length;
  r<s;
  r+=1)o=i[r], a=String(e[o]), o.slice(0, 2)==="!!"&&(o="tag:yaml.org,2002:"+o.slice(2)), l=n.compiledTypeMap.fallback[o], l&&wou.call(l.styleAliases, a)&&(a=l.styleAliases[a]), t[o]=a;
  return t
}
function yOA(n){
  var e, t, i;
  if(e=n.toString(16).toUpperCase(), n<=255)t="x", i=2;
  else if(n<=65535)t="u", i=4;
  else if(n<=4294967295)t="U", i=8;
  else throw new sX("code point within a string may not be greater than 0xFFFFFFFF");
  return"\\"+t+Oq.repeat("0", i-e.length)+e
}
function wOA(n){
  this.schema=n.schema||Lba, this.indent=Math.max(1, n.indent||2), this.noArrayIndent=n.noArrayIndent||!1, this.skipInvalid=n.skipInvalid||!1, this.flowLevel=Oq.isNothing(n.flowLevel)?-1:n.flowLevel, this.styleMap=AOA(this.schema, n.styles||null), this.sortKeys=n.sortKeys||!1, this.lineWidth=n.lineWidth||80, this.noRefs=n.noRefs||!1, this.noCompatMode=n.noCompatMode||!1, this.condenseFlow=n.condenseFlow||!1, this.quotingType=n.quotingType==='"'?Umn:FKg, this.forceQuotes=n.forceQuotes||!1, this.replacer=typeof n.replacer=="function"?n.replacer:null, this.implicitTypes=this.schema.compiledImplicit, this.explicitTypes=this.schema.compiledExplicit, this.tag=null, this.result="", this.duplicates=[], this.usedDuplicates=null
}
function JVg(n, e){
  for(var t=Oq.repeat(" ", e), i=0, r=-1, s="", o, a=n.length;
  i<a;
  )r=n.indexOf(`
`, i), r===-1?(o=n.slice(i), i=a):(o=n.slice(i, r+1), i=r+1), o.length&&o!==`
`&&(s+=t), s+=o;
  return s
}
function Jsu(n, e){
  return`
`+Oq.repeat(" ", n.indent*e)
}
function _OA(n, e){
  var t, i, r;
  for(t=0, i=n.implicitTypes.length;
  t<i;
  t+=1)if(r=n.implicitTypes[t], r.resolve(e))return!0;
  return!1
}
function Rba(n){
  return n===wKg||n===AKg
}
function wAi(n){
  return 32<=n&&n<=126||161<=n&&n<=55295&&n!==8232&&n!==8233||57344<=n&&n<=65533&&n!==Mba||65536<=n&&n<=1114111
}
function GVg(n){
  return wAi(n)&&n!==Mba&&n!==yKg&&n!==Omn
}
function WVg(n, e, t){
  var i=GVg(n), r=i&&!Rba(n);
  return(t?i:i&&n!==_ou&&n!==Cou&&n!==Sou&&n!==kou&&n!==Eou)&&n!==Fba&&!(e===kAi&&!r)||GVg(e)&&!Rba(e)&&n===Fba||e===kAi&&r
}
function COA(n){
  return wAi(n)&&n!==Mba&&!Rba(n)&&n!==TKg&&n!==BKg&&n!==kAi&&n!==_ou&&n!==Cou&&n!==Sou&&n!==kou&&n!==Eou&&n!==Fba&&n!==kKg&&n!==xKg&&n!==_Kg&&n!==LKg&&n!==IKg&&n!==DKg&&n!==EKg&&n!==CKg&&n!==SKg&&n!==RKg&&n!==PKg
}
function SOA(n){
  return!Rba(n)&&n!==kAi
}
function _Ai(n, e){
  var t=n.charCodeAt(e), i;
  return t>=55296&&t<=56319&&e+1<n.length&&(i=n.charCodeAt(e+1), i>=56320&&i<=57343)?(t-55296)*1024+i-56320+65536:t
}
function QVg(n){
  var e=/^\n* /;
  return e.test(n)
}
function kOA(n, e, t, i, r, s, o, a){
  var l, u=0, d=null, m=!1, p=!1, g=i!==-1, f=-1, A=COA(_Ai(n, 0))&&SOA(_Ai(n, n.length-1));
  if(e||o)for(l=0;
  l<n.length;
  u>=65536?l+=2:l++){
    if(u=_Ai(n, l), !wAi(u))return ekt;
    A=A&&WVg(u, d, a), d=u
  }
  else{
    for(l=0;
    l<n.length;
    u>=65536?l+=2:l++){
      if(u=_Ai(n,l),u===Omn)m=!0,g&&(p=p||l-f-1>i&&n[f+1]!==" ",f=l);
      else if(!wAi(u))return ekt;
      A=A&&WVg(u,d,a),d=u
    }
    p=p||g&&l-f-1>i&&n[f+1]!==" "
  }
  return!m&&!p?A&&!o&&!r(n)?xou:s===Umn?ekt:Oba:t>9&&QVg(n)?ekt:o?s===Umn?ekt:Oba:p?Iou:Tou
}
function EOA(n, e, t, i, r){
  n.dump=(function(){
    if(e.length===0)return n.quotingType===Umn?'""':"''";
    if(!n.noCompatMode&&(NKg.indexOf(e)!==-1||MKg.test(e)))return n.quotingType===Umn?'"'+e+'"':"'"+e+"'";
    var s=n.indent*Math.max(1, t), o=n.lineWidth===-1?-1:Math.max(Math.min(n.lineWidth, 40), n.lineWidth-s), a=i||n.flowLevel>-1&&t>=n.flowLevel;
    function l(u){
      return _OA(n,u)
    }
    switch(kOA(e, a, n.indent, o, l, n.quotingType, n.forceQuotes&&!i, r)){
      case xou:return e;
      case Oba:return"'"+e.replace(/'/g,"''")+"'";case Tou:return"|"+jVg(e,n.indent)+zVg(JVg(e,s));case Iou:return">"+jVg(e,n.indent)+zVg(JVg(xOA(e,o),s));case ekt:return'"'+TOA(e)+'"';default:throw new sX("impossible error: invalid scalar style")}})()}function jVg(n,e){var t=QVg(n)?String(e):"",i=n[n.length-1]===`
`,r=i&&(n[n.length-2]===`
`||n===`
`),s=r?"+":i?"":"-";return t+s+`
`}function zVg(n){return n[n.length-1]===`
`?n.slice(0,-1):n}function xOA(n,e){for(var t=/(\n+)([^\n]*)/g,i=(function(){var u=n.indexOf(`
`);return u=u!==-1?u:n.length,t.lastIndex=u,VVg(n.slice(0,u),e)})(),r=n[0]===`
`||n[0]===" ",s,o;o=t.exec(n);){var a=o[1],l=o[2];s=l[0]===" ",i+=a+(!r&&!s&&l!==""?`
`:"")+VVg(l,e),r=s}return i}function VVg(n,e){if(n===""||n[0]===" ")return n;for(var t=/ [^ ]/g,i,r=0,s,o=0,a=0,l="";i=t.exec(n);)a=i.index,a-r>e&&(s=o>r?o:a,l+=`
`+n.slice(r,s),r=s+1),o=a;return l+=`
`,n.length-r>e&&o>r?l+=n.slice(r,o)+`
`+n.slice(o+1):l+=n.slice(r),l.slice(1)}function TOA(n){for(var e="",t=0,i,r=0;r<n.length;t>=65536?r+=2:r++)t=_Ai(n,r),i=mV[t],!i&&wAi(t)?(e+=n[r],t>=65536&&(e+=n[r+1])):e+=i||yOA(t);return e}function IOA(n,e,t){var i="",r=n.tag,s,o,a;for(s=0,o=t.length;s<o;s+=1)a=t[s],n.replacer&&(a=n.replacer.call(t,String(s),a)),(W$e(n,e,a,!1,!1)||typeof a>"u"&&W$e(n,e,null,!1,!1))&&(i!==""&&(i+=","+(n.condenseFlow?"":" ")),i+=n.dump);n.tag=r,n.dump="["+i+"]"}function KVg(n,e,t,i){var r="",s=n.tag,o,a,l;for(o=0,a=t.length;o<a;o+=1)l=t[o],n.replacer&&(l=n.replacer.call(t,String(o),l)),(W$e(n,e+1,l,!0,!0,!1,!0)||typeof l>"u"&&W$e(n,e+1,null,!0,!0,!1,!0))&&((!i||r!=="")&&(r+=Jsu(n,e)),n.dump&&Omn===n.dump.charCodeAt(0)?r+="-":r+="- ",r+=n.dump);n.tag=s,n.dump=r||"[]"}function DOA(n,e,t){var i="",r=n.tag,s=Object.keys(t),o,a,l,u,d;for(o=0,a=s.length;o<a;o+=1)d="",i!==""&&(d+=", "),n.condenseFlow&&(d+='"'),l=s[o],u=t[l],n.replacer&&(u=n.replacer.call(t,l,u)),W$e(n,e,l,!1,!1)&&(n.dump.length>1024&&(d+="? "),d+=n.dump+(n.condenseFlow?'"':"")+":"+(n.condenseFlow?"":" "),W$e(n,e,u,!1,!1)&&(d+=n.dump,i+=d));n.tag=r,n.dump="{
        "+i+"
      }
      "}function BOA(n,e,t,i){var r="",s=n.tag,o=Object.keys(t),a,l,u,d,m,p;if(n.sortKeys===!0)o.sort();else if(typeof n.sortKeys=="function")o.sort(n.sortKeys);else if(n.sortKeys)throw new sX("sortKeys must be a boolean or a function");for(a=0,l=o.length;a<l;a+=1)p="",(!i||r!=="")&&(p+=Jsu(n,e)),u=o[a],d=t[u],n.replacer&&(d=n.replacer.call(t,u,d)),W$e(n,e+1,u,!0,!0,!0)&&(m=n.tag!==null&&n.tag!=="?"||n.dump&&n.dump.length>1024,m&&(n.dump&&Omn===n.dump.charCodeAt(0)?p+="?":p+="? "),p+=n.dump,m&&(p+=Jsu(n,e)),W$e(n,e+1,d,!0,m)&&(n.dump&&Omn===n.dump.charCodeAt(0)?p+=":":p+=": ",p+=n.dump,r+=p));n.tag=s,n.dump=r||"{
        
      }
      "}function YVg(n,e,t){var i,r,s,o,a,l;for(r=t?n.explicitTypes:n.implicitTypes,s=0,o=r.length;s<o;s+=1)if(a=r[s],(a.instanceOf||a.predicate)&&(!a.instanceOf||typeof e=="object"&&e instanceof a.instanceOf)&&(!a.predicate||a.predicate(e))){if(t?a.multi&&a.representName?n.tag=a.representName(e):n.tag=a.tag:n.tag="?",a.represent){if(l=n.styleMap[a.tag]||a.defaultStyle,you.call(a.represent)==="[object Function]")i=a.represent(e,l);else if(wou.call(a.represent,l))i=a.represent[l](e,l);else throw new sX("!<"+a.tag+'> tag resolver accepts not "'+l+'" style');n.dump=i}return!0}return!1}function W$e(n,e,t,i,r,s,o){n.tag=null,n.dump=t,YVg(n,t,!1)||YVg(n,t,!0);var a=you.call(n.dump),l=i,u;i&&(i=n.flowLevel<0||n.flowLevel>e);var d=a==="[object Object]"||a==="[object Array]",m,p;if(d&&(m=n.duplicates.indexOf(t),p=m!==-1),(n.tag!==null&&n.tag!=="?"||p||n.indent!==2&&e>0)&&(r=!1),p&&n.usedDuplicates[m])n.dump="*ref_"+m;else{if(d&&p&&!n.usedDuplicates[m]&&(n.usedDuplicates[m]=!0),a==="[object Object]")i&&Object.keys(n.dump).length!==0?(BOA(n,e,n.dump,r),p&&(n.dump="&ref_"+m+n.dump)):(DOA(n,e,n.dump),p&&(n.dump="&ref_"+m+" "+n.dump));else if(a==="[object Array]")i&&n.dump.length!==0?(n.noArrayIndent&&!o&&e>0?KVg(n,e-1,n.dump,r):KVg(n,e,n.dump,r),p&&(n.dump="&ref_"+m+n.dump)):(IOA(n,e,n.dump),p&&(n.dump="&ref_"+m+" "+n.dump));else if(a==="[object String]")n.tag!=="?"&&EOA(n,n.dump,e,s,l);else{if(a==="[object Undefined]")return!1;if(n.skipInvalid)return!1;throw new sX("unacceptable kind of an object to dump "+a)}n.tag!==null&&n.tag!=="?"&&(u=encodeURI(n.tag[0]==="!"?n.tag.slice(1):n.tag).replace(/!/g,"%21"),n.tag[0]==="!"?u="!"+u:u.slice(0,18)==="tag:yaml.org,2002:"?u="!!"+u.slice(18):u="!<"+u+">",n.dump=u+" "+n.dump)}return!0}function ROA(n,e){var t=[],i=[],r,s;for(Gsu(n,t,i),r=0,s=i.length;r<s;r+=1)e.duplicates.push(t[i[r]]);e.usedDuplicates=new Array(s)}function Gsu(n,e,t){var i,r,s;if(n!==null&&typeof n=="object")if(r=e.indexOf(n),r!==-1)t.indexOf(r)===-1&&t.push(r);else if(e.push(n),Array.isArray(n))for(r=0,s=n.length;r<s;r+=1)Gsu(n[r],e,t);else for(i=Object.keys(n),r=0,s=i.length;r<s;r+=1)Gsu(n[i[r]],e,t)}function POA(n,e){e=e||{};var t=new wOA(e);t.noRefs||ROA(n,t);var i=n;return t.replacer&&(i=t.replacer.call({"":i},"",i)),W$e(t,0,i,!0,!0)?t.dump+`
`:""}function Wsu(n,e){return function(){throw new Error("Function yaml."+n+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var ZVg,XVg,eKg,tKg,nKg,iKg,Oq,sX,rKg,sKg,oKg,gQ,Qsu,jsu,zsu,Vsu,Ksu,Ysu,Zsu,Xsu,aKg,cKg,eou,tou,nou,iou,rou,sou,oou,Pba,aou,lKg,uKg,cou,dKg,lou,hKg,uou,Lba,Q$e,CAi,dou,hou,SAi,Nba,mKg,mou,pKg,gKg,fKg,pou,gou,fou,bou,E_e,vou,bKg,vKg,Aou,you,wou,Mba,AKg,Omn,yKg,wKg,_Kg,CKg,Fba,SKg,kKg,EKg,xKg,_ou,TKg,kAi,IKg,DKg,BKg,RKg,Cou,Sou,PKg,kou,LKg,Eou,mV,NKg,MKg,FKg,Umn,xou,Oba,Tou,Iou,ekt,OKg,UKg,$Kg,qKg,HKg,JKg,GKg,WKg,QKg,jKg,zKg,VKg,KKg,YKg,ZKg,XKg,eYg,EAi,tYg=