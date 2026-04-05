// Module: out-build/vs/workbench/contrib/notebook/common/model/notebookCellOutputTextModel.js
// Offset: 32942285 (bundle byte offset)
// Size: 2550 bytes

yn(), rt(), ph(), qSi=class extends at{
  get outputs(){
    return this._rawOutput.outputs||[]
  }
  get metadata(){
    return this._rawOutput.metadata
  }
  get outputId(){
    return this._rawOutput.outputId
  }
  get alternativeOutputId(){
    return this._alternativeOutputId
  }
  get versionId(){
    return this._versionId
  }
  constructor(n){
    super(), this._rawOutput=n, this._onDidChangeData=this._register(new Qe), this.onDidChangeData=this._onDidChangeData.event, this._versionId=0, this.versionedBufferLengths={
      
    }, this._alternativeOutputId=this._rawOutput.outputId
  }
  replaceData(n){
    this.versionedBufferLengths={
      
    }, this._rawOutput=n, this.optimizeOutputItems(), this._versionId=this._versionId+1, this._onDidChangeData.fire()
  }
  appendData(n){
    this.trackBufferLengths(), this._rawOutput.outputs.push(...n), this.optimizeOutputItems(), this._versionId=this._versionId+1, this._onDidChangeData.fire()
  }
  trackBufferLengths(){
    this.outputs.forEach(n=>{
      Let(n.mime)&&(this.versionedBufferLengths[n.mime]||(this.versionedBufferLengths[n.mime]={
        
      }),this.versionedBufferLengths[n.mime][this.versionId]=n.data.byteLength)
    })
  }
  appendedSinceVersion(n, e){
    const t=this.versionedBufferLengths[e]?.[n], i=this.outputs.find(r=>r.mime===e);
    if(t&&i)return i.data.slice(t)
  }
  optimizeOutputItems(){
    if(this.outputs.length>1&&this.outputs.every(n=>Let(n.mime))){
      const n=new Map,e=[];
      this.outputs.forEach(t=>{
        let i;
        n.has(t.mime)?i=n.get(t.mime):(i=[],n.set(t.mime,i),e.push(t.mime)),i.push(t.data.buffer)
      }),this.outputs.length=0,e.forEach(t=>{
        const i=nCA(n.get(t));
        this.outputs.push({
          mime:t,data:i.data
        }),i.didCompression&&(this.versionedBufferLengths={
          
        })
      })
    }
  }
  asDto(){
    return{
      metadata:this._rawOutput.metadata,outputs:this._rawOutput.outputs,outputId:this._rawOutput.outputId
    }
  }
  bumpVersion(){
    this._versionId=this._versionId+1
  }
}
}
});
function _Et(n){
  return{
    source:n.getValue(), language:n.language, mime:n.mime, cellKind:n.cellKind, outputs:n.outputs.map(e=>({
      outputs:e.outputs,outputId:Wr()
    })), metadata:{
      
    }
  }
}
function vuy(n, e){
  if(n.runStartTime!==e.runStartTime&&typeof e.runStartTime=="number"){
    const t=Date.now()-e.runStartTime;
    return t<0?Math.abs(t):0
  }
  else return e.runStartTimeAdjustment
}
function CEt(n, e, t, i){
  let r={
    
  };
  if(n){
    const a=new Set([...Object.keys(e)]);
    for(const l of a)n[l]||(r[l]=e[l])
  }
  else r=e;
  const s={
    language:t, ...r
  };
  return t&&(s.language=t), wmn(i?hwu(s):s, {
    
  })
}
function hwu(n){
  return Array.isArray(n)?n.map(hwu):n!=null&&typeof n=="object"&&Object.keys(n).length>0?Object.keys(n).sort().reduce((e, t)=>(e[t]=hwu(n[t]), e), {
    
  }):n
}
var HSi, f7e=