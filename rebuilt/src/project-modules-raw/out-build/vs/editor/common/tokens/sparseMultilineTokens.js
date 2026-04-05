// Module: out-build/vs/editor/common/tokens/sparseMultilineTokens.js
// Offset: 25577092 (bundle byte offset)
// Size: 6105 bytes

tl(), ts(), EVe(), Hwg=class SWa{
  static create(e, t){
    return new SWa(e, new Jwg(t))
  }
  get startLineNumber(){
    return this._startLineNumber
  }
  get endLineNumber(){
    return this._endLineNumber
  }
  constructor(e, t){
    this._startLineNumber=e, this._tokens=t, this._endLineNumber=this._startLineNumber+this._tokens.getMaxDeltaLine()
  }
  toString(){
    return this._tokens.toString(this._startLineNumber)
  }
  _updateEndLineNumber(){
    this._endLineNumber=this._startLineNumber+this._tokens.getMaxDeltaLine()
  }
  isEmpty(){
    return this._tokens.isEmpty()
  }
  getLineTokens(e){
    return this._startLineNumber<=e&&e<=this._endLineNumber?this._tokens.getLineTokens(e-this._startLineNumber):null
  }
  getRange(){
    const e=this._tokens.getRange();
    return e&&new Zt(this._startLineNumber+e.startLineNumber, e.startColumn, this._startLineNumber+e.endLineNumber, e.endColumn)
  }
  removeTokens(e){
    const t=e.startLineNumber-this._startLineNumber, i=e.endLineNumber-this._startLineNumber;
    this._startLineNumber+=this._tokens.removeTokens(t, e.startColumn-1, i, e.endColumn-1), this._updateEndLineNumber()
  }
  split(e){
    const t=e.startLineNumber-this._startLineNumber, i=e.endLineNumber-this._startLineNumber, [r, s, o]=this._tokens.split(t, e.startColumn-1, i, e.endColumn-1);
    return[new SWa(this._startLineNumber, r), new SWa(this._startLineNumber+o, s)]
  }
  applyEdit(e, t){
    const[i, r, s]=Vbe(t);
    this.acceptEdit(e, i, r, s, t.length>0?t.charCodeAt(0):0)
  }
  acceptEdit(e, t, i, r, s){
    this._acceptDeleteRange(e), this._acceptInsertText(new ar(e.startLineNumber, e.startColumn), t, i, r, s), this._updateEndLineNumber()
  }
  _acceptDeleteRange(e){
    if(e.startLineNumber===e.endLineNumber&&e.startColumn===e.endColumn)return;
    const t=e.startLineNumber-this._startLineNumber, i=e.endLineNumber-this._startLineNumber;
    if(i<0){
      const s=i-t;
      this._startLineNumber-=s;
      return
    }
    const r=this._tokens.getMaxDeltaLine();
    if(!(t>=r+1)){
      if(t<0&&i>=r+1){
        this._startLineNumber=0,this._tokens.clear();
        return
      }
      if(t<0){
        const s=-t;
        this._startLineNumber-=s,this._tokens.acceptDeleteRange(e.startColumn-1,0,0,i,e.endColumn-1)
      }
      else this._tokens.acceptDeleteRange(0,t,e.startColumn-1,i,e.endColumn-1)
    }
  }
  _acceptInsertText(e, t, i, r, s){
    if(t===0&&i===0)return;
    const o=e.lineNumber-this._startLineNumber;
    if(o<0){
      this._startLineNumber+=t;
      return
    }
    const a=this._tokens.getMaxDeltaLine();
    o>=a+1||this._tokens.acceptInsertText(o, e.column-1, t, i, r, s)
  }
}, Jwg=class dcd{
  constructor(e){
    this._tokens=e, this._tokenCount=e.length/4
  }
  toString(e){
    const t=[];
    for(let i=0;
    i<this._tokenCount;
    i++)t.push(`(${this._getDeltaLine(i)+e},${this._getStartCharacter(i)}-${this._getEndCharacter(i)})`);
    return`[${t.join(",")}]`
  }
  getMaxDeltaLine(){
    const e=this._getTokenCount();
    return e===0?-1:this._getDeltaLine(e-1)
  }
  getRange(){
    const e=this._getTokenCount();
    if(e===0)return null;
    const t=this._getStartCharacter(0), i=this._getDeltaLine(e-1), r=this._getEndCharacter(e-1);
    return new Zt(0, t+1, i, r+1)
  }
  _getTokenCount(){
    return this._tokenCount
  }
  _getDeltaLine(e){
    return this._tokens[4*e]
  }
  _getStartCharacter(e){
    return this._tokens[4*e+1]
  }
  _getEndCharacter(e){
    return this._tokens[4*e+2]
  }
  isEmpty(){
    return this._getTokenCount()===0
  }
  getLineTokens(e){
    let t=0, i=this._getTokenCount()-1;
    for(;
    t<i;
    ){
      const r=t+Math.floor((i-t)/2),s=this._getDeltaLine(r);
      if(s<e)t=r+1;
      else if(s>e)i=r-1;
      else{
        let o=r;
        for(;
        o>t&&this._getDeltaLine(o-1)===e;
        )o--;
        let a=r;
        for(;
        a<i&&this._getDeltaLine(a+1)===e;
        )a++;
        return new $jl(this._tokens.subarray(4*o,4*a+4))
      }
    }
    return this._getDeltaLine(t)===e?new $jl(this._tokens.subarray(4*t, 4*t+4)):null
  }
  clear(){
    this._tokenCount=0
  }
  removeTokens(e, t, i, r){
    const s=this._tokens, o=this._tokenCount;
    let a=0, l=!1, u=0;
    for(let d=0;
    d<o;
    d++){
      const m=4*d,p=s[m],g=s[m+1],f=s[m+2],A=s[m+3];
      if((p>e||p===e&&f>=t)&&(p<i||p===i&&g<=r))l=!0;
      else{
        if(a===0&&(u=p),l){
          const w=4*a;
          s[w]=p-u,s[w+1]=g,s[w+2]=f,s[w+3]=A
        }
        a++
      }
    }
    return this._tokenCount=a, u
  }
  split(e, t, i, r){
    const s=this._tokens, o=this._tokenCount, a=[], l=[];
    let u=a, d=0, m=0;
    for(let p=0;
    p<o;
    p++){
      const g=4*p,f=s[g],A=s[g+1],w=s[g+2],C=s[g+3];
      if(f>e||f===e&&w>=t){
        if(f<i||f===i&&A<=r)continue;
        u!==l&&(u=l,d=0,m=f)
      }
      u[d++]=f-m,u[d++]=A,u[d++]=w,u[d++]=C
    }
    return[new dcd(new Uint32Array(a)), new dcd(new Uint32Array(l)), m]
  }
  acceptDeleteRange(e, t, i, r, s){
    const o=this._tokens, a=this._tokenCount, l=r-t;
    let u=0, d=!1;
    for(let m=0;
    m<a;
    m++){
      const p=4*m;
      let g=o[p],f=o[p+1],A=o[p+2];
      const w=o[p+3];
      if(g<t||g===t&&A<=i){
        u++;
        continue
      }
      else if(g===t&&f<i)g===r&&A>s?A-=s-i:A=i;
      else if(g===t&&f===i)if(g===r&&A>s)A-=s-i;
      else{
        d=!0;
        continue
      }
      else if(g<r||g===r&&f<s)if(g===r&&A>s)g=t,f=i,A=f+(A-s);
      else{
        d=!0;
        continue
      }
      else if(g>r){
        if(l===0&&!d){
          u=a;
          break
        }
        g-=l
      }
      else if(g===r&&f>=s)e&&g===0&&(f+=e,A+=e),g-=l,f-=s-i,A-=s-i;
      else throw new Error("Not possible!");
      const C=4*u;
      o[C]=g,o[C+1]=f,o[C+2]=A,o[C+3]=w,u++
    }
    this._tokenCount=u
  }
  acceptInsertText(e, t, i, r, s, o){
    const a=i===0&&r===1&&(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122), l=this._tokens, u=this._tokenCount;
    for(let d=0;
    d<u;
    d++){
      const m=4*d;
      let p=l[m],g=l[m+1],f=l[m+2];
      if(!(p<e||p===e&&f<t)){
        if(p===e&&f===t)if(a)f+=1;
        else continue;
        else if(p===e&&g<t&&t<f)i===0?f+=r:f=t;
        else{
          if(p===e&&g===t&&a)continue;
          if(p===e)if(p+=i,i===0)g+=r,f+=r;
          else{
            const A=f-g;
            g=s+(g-t),f=g+A
          }
          else p+=i
        }
        l[m]=p,l[m+1]=g,l[m+2]=f
      }
    }
  }
}, $jl=class{
  constructor(n){
    this._tokens=n
  }
  getCount(){
    return this._tokens.length/4
  }
  getStartCharacter(n){
    return this._tokens[4*n+1]
  }
  getEndCharacter(n){
    return this._tokens[4*n+2]
  }
  getMetadata(n){
    return this._tokens[4*n+3]
  }
}
}
});
function Gwg(n, e, t){
  const i=n.data, r=n.data.length/5|0, s=Math.max(Math.ceil(r/1024), 400), o=[];
  let a=0, l=1, u=0;
  for(;
  a<r;
  ){
    const d=a;
    let m=Math.min(d+s, r);
    if(m<r){
      let x=m;
      for(;
      x-1>d&&i[5*x]===0;
      )x--;
      if(x-1===d){
        let I=m;
        for(;
        I+1<r&&i[5*I]===0;
        )I++;
        m=I
      }
      else m=x
    }
    let p=new Uint32Array((m-d)*4), g=0, f=0, A=0, w=0;
    for(;
    a<m;
    ){
      const x=5*a,I=i[x],B=i[x+1],R=l+I|0,N=I===0?u+B|0:B,M=i[x+2],O=N+M|0,$=i[x+3],H=i[x+4];
      if(O<=N)e.warnInvalidLengthSemanticTokens(R,N+1);
      else if(A===R&&w>N)e.warnOverlappingSemanticTokens(R,N+1);
      else{
        const W=e.getMetadata($,H,t);
        W!==2147483647&&(f===0&&(f=R),p[g]=R-f,p[g+1]=N,p[g+2]=O,p[g+3]=W,g+=4,A=R,w=O)
      }
      l=R,u=N,a++
    }
    g!==p.length&&(p=p.subarray(0, g));
    const C=Hwg.create(f, p);
    o.push(C)
  }
  return o
}
var Wwg, jgi, wua, Qwg, jwg, zwg, qjl=