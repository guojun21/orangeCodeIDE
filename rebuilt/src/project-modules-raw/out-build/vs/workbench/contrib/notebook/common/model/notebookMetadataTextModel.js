// Module: out-build/vs/workbench/contrib/notebook/common/model/notebookMetadataTextModel.js
// Offset: 33531081 (bundle byte offset)
// Size: 2603 bytes

ant(), ph(), iw(), rt(), yn(), ts(), bv(), N_u=class extends at{
  get metadata(){
    return this.notebookModel.metadata
  }
  get textBuffer(){
    if(this._textBuffer)return this._textBuffer;
    const n=L_u(this.notebookModel.transientOptions.transientDocumentMetadata, this.metadata);
    return this._textBuffer=this._register(POn(n, 1).textBuffer), this._register(this._textBuffer.onDidChangeContent(()=>{
      this._onDidChange.fire()
    })), this._textBuffer
  }
  constructor(n){
    super(), this.notebookModel=n, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._textBufferHash=null, this.uri=Qca.generate(this.notebookModel.uri), this._register(this.notebookModel.onDidChangeContent(e=>{
      e.rawEvents.some(t=>t.kind===sb.ChangeDocumentMetadata||t.kind===sb.ModelChange)&&(this._textBuffer?.dispose(),this._textBuffer=void 0,this._textBufferHash=null,this._onDidChange.fire())
    }))
  }
  getHash(){
    if(this._textBufferHash!==null)return this._textBufferHash;
    const n=new yde, e=this.textBuffer.createSnapshot(!1);
    let t;
    for(;
    t=e.read();
    )n.update(t);
    return this._textBufferHash=n.digest(), this._textBufferHash
  }
  getValue(){
    const n=this.getFullModelRange();
    return this.textBuffer.getEOL()===`
`?this.textBuffer.getValueInRange(n, 1):this.textBuffer.getValueInRange(n, 2)
  }
  getFullModelRange(){
    const n=this.textBuffer.getLineCount();
    return new Zt(1, 1, n, this.textBuffer.getLineLength(n)+1)
  }
}
}
});
function mhy(n, e){
  if(VC(n.metadata)===VC(e.metadata))return 2;
  for(let t=0;
  t<n.outputs.length;
  t++){
    const i=n.outputs[t], r=e.outputs[t];
    if(i.mime!==r.mime||i.data.buffer.length!==r.data.buffer.length)return 2;
    for(let s=0;
    s<i.data.buffer.length;
    s++)if(i.data.buffer[s]!==r.data.buffer[s])return 2
  }
  return 1
}
function phy(n, e){
  if(n.length!==e.length)return 2;
  const t=n.length;
  for(let i=0;
  i<t;
  i++){
    const r=n[i], s=e[i];
    if(VC(r.metadata)!==VC(s.metadata))return 1;
    if(r.outputs.length!==s.outputs.length)return 2;
    for(let o=0;
    o<r.outputs.length;
    o++){
      const a=r.outputs[o],l=s.outputs[o];
      if(a.mime!==l.mime||a.data.buffer.length!==l.data.buffer.length)return 2;
      for(let u=0;
      u<a.data.buffer.length;
      u++)if(a.data.buffer[u]!==l.data.buffer[u])return 2
    }
  }
  return 0
}
function v6f(n){
  if(!n.length)return null;
  const t=n[0].mime;
  return n.find(r=>r.mime!==t)?null:n.map(r=>r.data.toString()).join("")
}
function $bn(n){
  if(n.length===1){
    const e=v6f(n[0].outputs);
    if(e)return e
  }
  return JSON.stringify(n.map(e=>({
    metadata:e.metadata, outputItems:e.outputs.map(t=>({
      mimeType:t.mime,data:t.data.toString()
    }))
  })), void 0, "	")
}
var Bki, A6f, y6f, kD, Rki, pIa, w6f, M_u, F_u, mwe, O_u, _6f, Prt=