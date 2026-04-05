// Module: out-build/vs/base/common/buffer.js
// Offset: 407273 (bundle byte offset)
// Size: 5916 bytes

L0(), gde(), lFn=typeof Buffer<"u", vrh=new Ob(()=>new Uint8Array(256)), Ms=class w_e{
  static alloc(e){
    return lFn?new w_e(Buffer.allocUnsafe(e)):new w_e(new Uint8Array(e))
  }
  static wrap(e){
    return lFn&&!Buffer.isBuffer(e)&&(e=Buffer.from(e.buffer, e.byteOffset, e.byteLength)), new w_e(e)
  }
  static fromString(e, t){
    return!(t?.dontUseNodeBuffer||!1)&&lFn?new w_e(Buffer.from(e)):(lCc||(lCc=new TextEncoder), new w_e(lCc.encode(e)))
  }
  static fromByteArray(e){
    const t=w_e.alloc(e.length);
    for(let i=0, r=e.length;
    i<r;
    i++)t.buffer[i]=e[i];
    return t
  }
  static concat(e, t){
    if(typeof t>"u"){
      t=0;
      for(let s=0,o=e.length;
      s<o;
      s++)t+=e[s].byteLength
    }
    const i=w_e.alloc(t);
    let r=0;
    for(let s=0, o=e.length;
    s<o;
    s++){
      const a=e[s];
      i.set(a,r),r+=a.byteLength
    }
    return i
  }
  constructor(e){
    this.buffer=e, this.byteLength=this.buffer.byteLength
  }
  clone(){
    const e=w_e.alloc(this.byteLength);
    return e.set(this), e
  }
  toString(){
    return lFn?this.buffer.toString():(uCc||(uCc=new TextDecoder), uCc.decode(this.buffer))
  }
  slice(e, t){
    return new w_e(this.buffer.subarray(e, t))
  }
  set(e, t){
    if(e instanceof w_e)this.buffer.set(e.buffer, t);
    else if(e instanceof Uint8Array)this.buffer.set(e, t);
    else if(e instanceof ArrayBuffer)this.buffer.set(new Uint8Array(e), t);
    else if(ArrayBuffer.isView(e))this.buffer.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), t);
    else throw new Error("Unknown argument 'array'")
  }
  readUInt32BE(e){
    return CY(this.buffer, e)
  }
  writeUInt32BE(e, t){
    SY(this.buffer, e, t)
  }
  readUInt32LE(e){
    return snA(this.buffer, e)
  }
  writeUInt32LE(e, t){
    onA(this.buffer, e, t)
  }
  readUInt8(e){
    return sCc(this.buffer, e)
  }
  writeUInt8(e, t){
    oCc(this.buffer, e, t)
  }
  indexOf(e, t=0){
    return nnA(this.buffer, e instanceof w_e?e.buffer:e, t)
  }
  equals(e){
    return this===e?!0:this.byteLength!==e.byteLength?!1:this.buffer.every((t, i)=>t===e.buffer[i])
  }
}, Arh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yrh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
}
}), wrh={
  
};
WN(wrh, {
  URI:()=>je, cellUriToNotebookUri:()=>wgt, isSameFileBasedOnUri:()=>m2o, isUriComponents:()=>QFt, uriToFsPath:()=>ygt, uriToFsPathWithRemoteAwareness:()=>vSe
});
function lnA(n, e){
  if(!n.scheme&&e)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${n.authority}", path: "${n.path}", query: "${n.query}", fragment: "${n.fragment}"}`);
  if(n.scheme&&!Srh.test(n.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");
  if(n.path){
    if(n.authority){
      if(!krh.test(n.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
    }
    else if(Erh.test(n.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
  }
}
function unA(n, e){
  return!n&&!e?"file":n
}
function dnA(n, e){
  switch(n){
    case"https":case"http":case"file":e?e[0]!==Dbe&&(e=Dbe+e):e=Dbe;
    break
  }
  return e
}
function m2o(n, e){
  return n.path===e.path&&(n.scheme??"")===(e.scheme??"")&&(n.query??"")===(e.query??"")&&(n.fragment??"")===(e.fragment??"")
}
function QFt(n){
  return!n||typeof n!="object"?!1:typeof n.scheme=="string"&&(typeof n.authority=="string"||typeof n.authority>"u")&&(typeof n.path=="string"||typeof n.path>"u")&&(typeof n.query=="string"||typeof n.query>"u")&&(typeof n.fragment=="string"||typeof n.fragment>"u")
}
function _rh(n, e, t){
  let i, r=-1;
  for(let s=0;
  s<n.length;
  s++){
    const o=n.charCodeAt(s);
    if(o>=97&&o<=122||o>=65&&o<=90||o>=48&&o<=57||o===45||o===46||o===95||o===126||e&&o===47||t&&o===91||t&&o===93||t&&o===58)r!==-1&&(i+=encodeURIComponent(n.substring(r, s)), r=-1), i!==void 0&&(i+=n.charAt(s));
    else{
      i===void 0&&(i=n.substr(0,s));
      const a=mCc[o];
      a!==void 0?(r!==-1&&(i+=encodeURIComponent(n.substring(r,s)),r=-1),i+=a):r===-1&&(r=s)
    }
  }
  return r!==-1&&(i+=encodeURIComponent(n.substring(r))), i!==void 0?i:n
}
function hnA(n){
  let e;
  for(let t=0;
  t<n.length;
  t++){
    const i=n.charCodeAt(t);
    i===35||i===63?(e===void 0&&(e=n.substr(0, t)), e+=mCc[i]):e!==void 0&&(e+=n[t])
  }
  return e!==void 0?e:n
}
function ygt(n, e){
  let t;
  return n.authority&&n.path.length>1&&n.scheme==="file"?t=`//${n.authority}${n.path}`:n.path.charCodeAt(0)===47&&(n.path.charCodeAt(1)>=65&&n.path.charCodeAt(1)<=90||n.path.charCodeAt(1)>=97&&n.path.charCodeAt(1)<=122)&&n.path.charCodeAt(2)===58?e?t=n.path.substr(1):t=n.path[1].toLowerCase()+n.path.substr(2):t=n.path, Sc&&(t=t.replace(/\//g, "\\")), t
}
function vSe(n, e, t){
  try{
    let i=ygt(n, e);
    return t&&(i=i.replace(/\\/g, "/")), i
  }
  catch{
    return ygt(n, e)
  }
}
function dCc(n, e){
  const t=e?hnA:_rh;
  let i="", {
    scheme:r, authority:s, path:o, query:a, fragment:l
  }
  =n;
  if(r&&(i+=r, i+=":"), (s||r==="file")&&(i+=Dbe, i+=Dbe), s){
    let u=s.indexOf("@");
    if(u!==-1){
      const d=s.substr(0,u);
      s=s.substr(u+1),u=d.lastIndexOf(":"),u===-1?i+=t(d,!1,!1):(i+=t(d.substr(0,u),!1,!1),i+=":",i+=t(d.substr(u+1),!1,!0)),i+="@"
    }
    s=s.toLowerCase(), u=s.lastIndexOf(":"), u===-1?i+=t(s, !1, !0):(i+=t(s.substr(0, u), !1, !0), i+=s.substr(u))
  }
  if(o){
    if(o.length>=3&&o.charCodeAt(0)===47&&o.charCodeAt(2)===58){
      const u=o.charCodeAt(1);
      u>=65&&u<=90&&(o=`/${String.fromCharCode(u+32)}:${o.substr(3)}`)
    }
    else if(o.length>=2&&o.charCodeAt(1)===58){
      const u=o.charCodeAt(0);
      u>=65&&u<=90&&(o=`${String.fromCharCode(u+32)}:${o.substr(2)}`)
    }
    i+=t(o, !0, !1)
  }
  return a&&(i+="?", i+=t(a, !1, !1)), l&&(i+="#", i+=e?l:_rh(l, !1, !1)), i
}
function Crh(n){
  try{
    return decodeURIComponent(n)
  }
  catch{
    return n.length>3?n.substr(0, 3)+Crh(n.substr(3)):n
  }
}
function p2o(n){
  return n.match(pCc)?n.replace(pCc, e=>Crh(e)):n
}
function wgt(n){
  if(n.scheme!==_n.vscodeNotebookCell)throw new Error(`Expected vscode-notebook-cell scheme, got ${n.scheme}`);
  if(!n.fragment)throw new Error(`Expected notebook fragment, got ${n.fragment}`);
  const e=n.fragment.indexOf("s");
  if(e<0)throw new Error(`Expected notebook fragment, got ${n.fragment}`);
  const t=Zj(n.fragment.substring(e+1)).toString();
  return n.with({
    scheme:t, fragment:null
  })
}
var Srh, krh, Erh, XL, Dbe, xrh, je, hCc, _gt, mCc, pCc, Yn=