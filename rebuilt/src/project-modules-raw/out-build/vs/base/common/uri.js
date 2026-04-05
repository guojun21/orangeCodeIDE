// Module: out-build/vs/base/common/uri.js
// Offset: 413189 (bundle byte offset)
// Size: 3242 bytes

Hl(), _r(), zr(), Ql(), Srh=/^\w[\w\d+.-]*$/, krh=/^\//, Erh=/^\/\//, XL="", Dbe="/", xrh=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, je=class $Ga{
  static isUri(e){
    return e instanceof $Ga?!0:e?typeof e.authority=="string"&&typeof e.fragment=="string"&&typeof e.path=="string"&&typeof e.query=="string"&&typeof e.scheme=="string"&&typeof e.fsPath=="string"&&typeof e.with=="function"&&typeof e.toString=="function":!1
  }
  constructor(e, t, i, r, s, o=!1){
    typeof e=="object"?(this.scheme=e.scheme||XL, this.authority=e.authority||XL, this.path=e.path||XL, this.query=e.query||XL, this.fragment=e.fragment||XL):(this.scheme=unA(e, o), this.authority=t||XL, this.path=dnA(this.scheme, i||XL), this.query=r||XL, this.fragment=s||XL, lnA(this, o))
  }
  get fsPath(){
    return ygt(this, !1)
  }
  with(e){
    if(!e)return this;
    let{
      scheme:t,authority:i,path:r,query:s,fragment:o
    }
    =e;
    return t===void 0?t=this.scheme:t===null&&(t=XL), i===void 0?i=this.authority:i===null&&(i=XL), r===void 0?r=this.path:r===null&&(r=XL), s===void 0?s=this.query:s===null&&(s=XL), o===void 0?o=this.fragment:o===null&&(o=XL), t===this.scheme&&i===this.authority&&r===this.path&&s===this.query&&o===this.fragment?this:new _gt(t, i, r, s, o)
  }
  static parse(e, t=!1){
    const i=xrh.exec(e);
    return i?new _gt(i[2]||XL, p2o(i[4]||XL), p2o(i[5]||XL), p2o(i[7]||XL), p2o(i[9]||XL), t):new _gt(XL, XL, XL, XL, XL)
  }
  static file(e){
    let t=XL;
    if(Sc&&(e=e.replace(/\\/g, Dbe)), e[0]===Dbe&&e[1]===Dbe){
      const i=e.indexOf(Dbe,2);
      i===-1?(t=e.substring(2),e=Dbe):(t=e.substring(2,i),e=e.substring(i)||Dbe)
    }
    return new _gt("file", t, e, XL, XL)
  }
  static from(e, t){
    return new _gt(e.scheme, e.authority, e.path, e.query, e.fragment, t)
  }
  static joinPath(e, ...t){
    if(!e.path)throw new Error("[UriError]: cannot call joinPath on URI without path");
    let i;
    return Sc&&e.scheme==="file"?i=$Ga.file(iE.join(ygt(e, !0), ...t)).path:i=Rm.join(e.path, ...t), e.with({
      path:i
    })
  }
  toString(e=!1){
    return dCc(this, e)
  }
  toJSON(){
    return this
  }
  static revive(e){
    if(e){
      if(e instanceof $Ga)return e;
      {
        const t=new _gt(e);
        return t._formatted=e.external??null,t._fsPath=e._sep===hCc?e.fsPath??null:null,t
      }
    }
    else return e
  }
  [Symbol.for("debug.description")](){
    return`URI(${this.toString()})`
  }
}, hCc=Sc?1:void 0, _gt=class extends je{
  constructor(){
    super(...arguments), this._formatted=null, this._fsPath=null
  }
  get fsPath(){
    return this._fsPath||(this._fsPath=ygt(this, !1)), this._fsPath
  }
  toString(n=!1){
    return n?dCc(this, !0):(this._formatted||(this._formatted=dCc(this, !1)), this._formatted)
  }
  toJSON(){
    const n={
      $mid:1
    };
    return this._fsPath&&(n.fsPath=this._fsPath, n._sep=hCc), this._formatted&&(n.external=this._formatted), this.path&&(n.path=this.path), this.scheme&&(n.scheme=this.scheme), this.authority&&(n.authority=this.authority), this.query&&(n.query=this.query), this.fragment&&(n.fragment=this.fragment), n
  }
}, mCc={
  58:"%3A", 47:"%2F", 63:"%3F", 35:"%23", 91:"%5B", 93:"%5D", 64:"%40", 33:"%21", 36:"%24", 38:"%26", 39:"%27", 40:"%28", 41:"%29", 42:"%2A", 43:"%2B", 44:"%2C", 59:"%3B", 61:"%3D", 32:"%20"
}, pCc=/(%[0-9A-Za-z][0-9A-Za-z])+/g
}
});
function OR(n, e){
  return je.isUri(n)?k_(n.scheme, e):pgt(n, e+":")
}
function Cgt(n, ...e){
  return e.some(t=>OR(n, t))
}
function mnA(n){
  return`${n.quality??"oss"}-${n.commit??"dev"}`
}
var _n, Trh, Irh, ASe, gCc, Pze, jFt, fCc, bCc, Drh, og, pnA, gnA, uFn, zr=