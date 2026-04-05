// Module: out-build/vs/editor/common/model/tokens.js
// Offset: 1210789 (bundle byte offset)
// Size: 2322 bytes

Vs(), vr(), yn(), rt(), Ix(), $gh=class{
  constructor(){
    this._onDidChangeVisibleRanges=new Qe, this.onDidChangeVisibleRanges=this._onDidChangeVisibleRanges.event, this._views=new Set
  }
  attachView(){
    const n=new qgh(e=>{
      this._onDidChangeVisibleRanges.fire({
        view:n,state:e
      })
    });
    return this._views.add(n), n
  }
  detachView(n){
    this._views.delete(n), this._onDidChangeVisibleRanges.fire({
      view:n,state:void 0
    })
  }
}, qgh=class{
  constructor(n){
    this.handleStateChange=n
  }
  setVisibleLines(n, e){
    const t=n.map(i=>new rh(i.startLineNumber, i.endLineNumber+1));
    this.handleStateChange({
      visibleLineRanges:t,stabilized:e
    })
  }
}, Hgh=class extends at{
  get lineRanges(){
    return this._lineRanges
  }
  constructor(n){
    super(), this._refreshTokens=n, this.runner=this._register(new Hu(()=>this.update(), 50)), this._computedLineRanges=[], this._lineRanges=[]
  }
  update(){
    cg(this._computedLineRanges, this._lineRanges, (n, e)=>n.equals(e))||(this._computedLineRanges=this._lineRanges, this._refreshTokens())
  }
  handleStateChange(n){
    this._lineRanges=n.visibleLineRanges, n.stabilized?(this.runner.cancel(), this.update()):this.runner.schedule()
  }
}, mxc=class extends at{
  get backgroundTokenizationState(){
    return this._backgroundTokenizationState
  }
  constructor(n, e, t){
    super(), this._languageIdCodec=n, this._textModel=e, this.getLanguageId=t, this._onDidChangeTokens=this._register(new Qe), this.onDidChangeTokens=this._onDidChangeTokens.event
  }
  tokenizeIfCheap(n){
    this.isCheapToTokenize(n)&&this.forceTokenization(n)
  }
}
}
});
function P6(n){
  return n.token!==void 0
}
function Jgh(n, e){
  let t=n;
  const i=[];
  let r;
  for(;
  ;
  ){
    if(e.height===t.height){
      r=e;
      break
    }
    if(P6(t))throw new Error("unexpected");
    i.push(t), t=t.lastChild()
  }
  for(let s=i.length-1;
  s>=0;
  s--){
    const o=i[s];
    r&&(o.children.length>=3?r=NVe.create(o.unappendChild(), r):(o.appendChild(r), r=void 0))
  }
  if(r){
    const s=new NVe(r.height+1);
    return s.appendChild(n), s.appendChild(r), s
  }
  else return n
}
function laA(n, e){
  let t=n;
  const i=[];
  for(;
  e.height!==t.height;
  ){
    if(P6(t))throw new Error("unexpected");
    i.push(t), t=t.children[0]
  }
  let r=e;
  for(let s=i.length-1;
  s>=0;
  s--){
    const o=i[s];
    r&&(o.children.length>=3?r=NVe.create(r, o.unprependChild()):(o.prependChild(r), r=void 0))
  }
  return r?NVe.create(r, n):n
}
function uaA(n, e){
  return n.height===e.height?NVe.create(n, e):n.height>e.height?Jgh(n, e):laA(e, n)
}
var NVe, qoe, Ggh, Wgh=