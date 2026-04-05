// Module: out-build/vs/workbench/contrib/notebook/common/model/notebookCellTextModel.js
// Offset: 32944835 (bundle byte offset)
// Size: 18023 bytes

yn(), iw(), rt(), Bc(), ts(), exc(), bv(), WE(), k9f(), vr(), ant(), oa(), HSi=class Ycd extends at{
  get outputs(){
    return this._outputs
  }
  get metadata(){
    return this._metadata
  }
  set metadata(e){
    this._metadata=e, this._hash=null, this._onDidChangeMetadata.fire()
  }
  get internalMetadata(){
    return this._internalMetadata
  }
  set internalMetadata(e){
    const t=this._internalMetadata.lastRunSuccess!==e.lastRunSuccess;
    e={
      ...e,runStartTimeAdjustment:vuy(this._internalMetadata,e)
    }, this._internalMetadata=e, this._hash=null, this._onDidChangeInternalMetadata.fire({
      lastRunSuccessChanged:t
    })
  }
  get language(){
    return this._language
  }
  set language(e){
    this._textModel&&this._textModel.getLanguageId()===this._languageService.getLanguageIdByLanguageName(e)&&this._textModel.getLanguageId()===this._languageService.getLanguageIdByLanguageName(this.language)||(this._hasLanguageSetExplicitly=!0, this._setLanguageInternal(e))
  }
  get mime(){
    return this._mime
  }
  set mime(e){
    this._mime!==e&&(this._mime=e, this._hash=null, this._onDidChangeContent.fire("mime"))
  }
  get textBuffer(){
    return this._textBuffer?this._textBuffer:(this._textBuffer=this._register(POn(this._source, 1).textBuffer), this._register(this._textBuffer.onDidChangeContent(()=>{
      this._hash=null,this._textModel||this._onDidChangeContent.fire("content"),this.autoDetectLanguage()
    })), this._textBuffer)
  }
  get alternativeId(){
    return this._alternativeId
  }
  get textModel(){
    return this._textModel
  }
  set textModel(e){
    this._textModel!==e&&(this._textModelDisposables.clear(), this._textModel=e, this._textModel&&(this.setRegisteredLanguage(this._languageService, this._textModel.getLanguageId(), this.language), this._textModelDisposables.add(this._textModel.onDidChangeLanguage(t=>this.setRegisteredLanguage(this._languageService, t.newLanguage, this.language))), this._textModelDisposables.add(this._textModel.onWillDispose(()=>this.textModel=void 0)), this._textModelDisposables.add(this._textModel.onDidChangeContent(t=>{
      this._textModel&&(this._versionId=this._textModel.getVersionId(),this._alternativeId=this._textModel.getAlternativeVersionId()),this._textBufferHash=null,this._onDidChangeContent.fire("content"),this._onDidChangeContent.fire({
        type:"model",event:t
      })
    })), this._textModel._overwriteVersionId(this._versionId), this._textModel._overwriteAlternativeVersionId(this._versionId), this._onDidChangeTextModel.fire()))
  }
  setRegisteredLanguage(e, t, i){
    const r=t===o_||t==="jupyter";
    !e.isRegisteredLanguageId(i)&&r?this._onDidChangeLanguage.fire(i):this.language=t
  }
  static{
    this.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY=600
  }
  get hasLanguageSetExplicitly(){
    return this._hasLanguageSetExplicitly
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g=void 0){
    super(), this.uri=e, this.handle=t, this._source=i, this._language=r, this._mime=s, this.cellKind=o, this.collapseState=d, this.transientOptions=m, this._languageService=p, this._languageDetectionService=g, this._onDidChangeTextModel=this._register(new Qe), this.onDidChangeTextModel=this._onDidChangeTextModel.event, this._onDidChangeOutputs=this._register(new Qe), this.onDidChangeOutputs=this._onDidChangeOutputs.event, this._onDidChangeOutputItems=this._register(new Qe), this.onDidChangeOutputItems=this._onDidChangeOutputItems.event, this._onDidChangeContent=this._register(new Qe), this.onDidChangeContent=this._onDidChangeContent.event, this._onDidChangeMetadata=this._register(new Qe), this.onDidChangeMetadata=this._onDidChangeMetadata.event, this._onDidChangeInternalMetadata=this._register(new Qe), this.onDidChangeInternalMetadata=this._onDidChangeInternalMetadata.event, this._onDidChangeLanguage=this._register(new Qe), this.onDidChangeLanguage=this._onDidChangeLanguage.event, this._textBufferHash=null, this._hash=null, this._versionId=1, this._alternativeId=1, this._textModelDisposables=this._register(new Ut), this._textModel=void 0, this.autoDetectLanguageThrottler=this._register(new L4(Ycd.AUTO_DETECT_LANGUAGE_THROTTLE_DELAY)), this._autoLanguageDetectionEnabled=!1, this._hasLanguageSetExplicitly=!1, this._outputs=a.map(f=>new qSi(f)), this._metadata=l??{
      
    }, this._internalMetadata=u??{
      
    }
  }
  enableAutoLanguageDetection(){
    this._autoLanguageDetectionEnabled=!0, this.autoDetectLanguage()
  }
  async autoDetectLanguage(){
    this._autoLanguageDetectionEnabled&&this.autoDetectLanguageThrottler.trigger(()=>this._doAutoDetectLanguage())
  }
  async _doAutoDetectLanguage(){
    if(this.hasLanguageSetExplicitly)return;
    const e=await this._languageDetectionService?.detectLanguage(this.uri);
    e&&(this._textModel&&this._textModel.getLanguageId()===this._languageService.getLanguageIdByLanguageName(e)&&this._textModel.getLanguageId()===this._languageService.getLanguageIdByLanguageName(this.language)||this._setLanguageInternal(e))
  }
  _setLanguageInternal(e){
    const t=this._languageService.getLanguageIdByLanguageName(e);
    if(t!==null){
      if(this._textModel){
        const i=this._languageService.createById(t);
        this._textModel.setLanguage(i.languageId)
      }
      this._language!==e&&(this._language=e,this._hash=null,this._onDidChangeLanguage.fire(e),this._onDidChangeContent.fire("language"))
    }
  }
  resetTextBuffer(e){
    this._textBuffer=e
  }
  getValue(){
    const e=this.getFullModelRange();
    return this.textBuffer.getEOL()===`
`?this.textBuffer.getValueInRange(e, 1):this.textBuffer.getValueInRange(e, 2)
  }
  getTextBufferHash(){
    if(this._textBufferHash!==null)return this._textBufferHash;
    const e=new yde, t=this.textBuffer.createSnapshot(!1);
    let i;
    for(;
    i=t.read();
    )e.update(i);
    return this._textBufferHash=e.digest(), this._textBufferHash
  }
  getHashValue(){
    return this._hash!==null?this._hash:(this._hash=VC([VC(this.language), this.getTextBufferHash(), this._getPersisentMetadata(), this.transientOptions.transientOutputs?[]:this._outputs.map(e=>({
      outputs:e.outputs.map(t=>({
        mime:t.mime,data:Array.from(t.data.buffer)
      })),metadata:e.metadata
    }))]), this._hash)
  }
  _getPersisentMetadata(){
    return CEt(this.transientOptions.transientCellMetadata, this.metadata, this.language)
  }
  getTextLength(){
    return this.textBuffer.getLength()
  }
  getFullModelRange(){
    const e=this.textBuffer.getLineCount();
    return new Zt(1, 1, e, this.textBuffer.getLineLength(e)+1)
  }
  spliceNotebookCellOutputs(e){
    if(e.deleteCount>0&&e.newOutputs.length>0){
      const t=Math.min(e.deleteCount,e.newOutputs.length);
      for(let r=0;
      r<t;
      r++){
        const s=this.outputs[e.start+r],o=e.newOutputs[r];
        this.replaceOutput(s.outputId,o)
      }
      this.outputs.splice(e.start+t,e.deleteCount-t,...e.newOutputs.slice(t)).forEach(r=>r.dispose()),this._onDidChangeOutputs.fire({
        start:e.start+t,deleteCount:e.deleteCount-t,newOutputs:e.newOutputs.slice(t)
      })
    }
    else this.outputs.splice(e.start, e.deleteCount, ...e.newOutputs).forEach(i=>i.dispose()), this._onDidChangeOutputs.fire(e)
  }
  replaceOutput(e, t){
    const i=this.outputs.findIndex(s=>s.outputId===e);
    return i<0?!1:(this.outputs[i].replaceData({
      outputs:t.outputs,outputId:t.outputId,metadata:t.metadata
    }), t.dispose(), this._onDidChangeOutputItems.fire(), !0)
  }
  changeOutputItems(e, t, i){
    const r=this.outputs.findIndex(o=>o.outputId===e);
    if(r<0)return!1;
    const s=this.outputs[r];
    return t?s.appendData(i):s.replaceData({
      outputId:e,outputs:i,metadata:s.metadata
    }), this._onDidChangeOutputItems.fire(), !0
  }
  _outputNotEqualFastCheck(e, t){
    if(e.length!==t.length)return!1;
    for(let i=0;
    i<this.outputs.length;
    i++){
      const r=e[i],s=t[i];
      if(r.outputs.length!==s.outputs.length)return!1;
      for(let o=0;
      o<r.outputs.length;
      o++)if(r.outputs[o].mime!==s.outputs[o].mime||r.outputs[o].data.byteLength!==s.outputs[o].data.byteLength)return!1
    }
    return!0
  }
  equal(e){
    return this.language!==e.language||this.outputs.length!==e.outputs.length||this.getTextLength()!==e.getTextLength()||!this.transientOptions.transientOutputs&&!this._outputNotEqualFastCheck(this.outputs, e.outputs)?!1:this.getHashValue()===e.getHashValue()
  }
  fastEqual(e, t){
    if(this.language!==e.language||this.mime!==e.mime||this.cellKind!==e.cellKind||!t&&(this.internalMetadata?.executionOrder!==e.internalMetadata?.executionOrder||this.internalMetadata?.lastRunSuccess!==e.internalMetadata?.lastRunSuccess||this.internalMetadata?.runStartTime!==e.internalMetadata?.runStartTime||this.internalMetadata?.runStartTimeAdjustment!==e.internalMetadata?.runStartTimeAdjustment||this.internalMetadata?.runEndTime!==e.internalMetadata?.runEndTime))return!1;
    if(this._textBuffer){
      if(!Ycd.linesAreEqual(this.textBuffer.getLinesContent(),e.source))return!1
    }
    else if(this._source!==e.source)return!1;
    return!0
  }
  static linesAreEqual(e, t){
    const i=Zv(t);
    if(e.length!==i.length)return!1;
    for(let r=0;
    r<e.length;
    r++)if(e[r]!==i[r])return!1;
    return!0
  }
  dispose(){
    Bo(this._outputs);
    const e=new bOo([], "", `
`, !1, !1, !0, !0);
    e.dispose(), this._textBuffer=e, super.dispose()
  }
}
}
});
async function Vxa(n, e, t, i){
  const{
    notebookEditor:r
  }
  =e;
  if(r.hasModel()&&!r.isReadOnly){
    if(e.ui&&e.cell){
      const{
        cell:s
      }
      =e;
      if(s.cellKind===n)return;
      const o=s.getText(),a=r.getCellIndex(s);
      t===void 0&&(t=(r.activeKernel?.supportedLanguages??[])[0]??o_),r.textModel.applyEdits([{
        editType:1,index:a,count:1,cells:[{
          cellKind:n,source:o,language:t,mime:i??s.mime,outputs:s.model.outputs,metadata:s.metadata
        }
        ]
      }
      ],!0,{
        kind:Wy.Index,focus:r.getFocus(),selections:r.getSelections()
      },()=>({
        kind:Wy.Index,focus:r.getFocus(),selections:r.getSelections()
      }),void 0,!0);
      const l=r.cellAt(a);
      await r.focusNotebookCell(l,s.getEditState()===aw.Editing?"editor":"container")
    }
    else if(e.selectedCells){
      const s=e.selectedCells,o=[];
      s.forEach(a=>{
        if(a.cellKind===n)return;
        const l=a.getText(),u=r.getCellIndex(a);
        t===void 0&&(t=(r.activeKernel?.supportedLanguages??[])[0]??o_),o.push({
          editType:1,index:u,count:1,cells:[{
            cellKind:n,source:l,language:t,mime:i??a.mime,outputs:a.model.outputs,metadata:a.metadata
          }
          ]
        })
      }),r.textModel.applyEdits(o,!0,{
        kind:Wy.Index,focus:r.getFocus(),selections:r.getSelections()
      },()=>({
        kind:Wy.Index,focus:r.getFocus(),selections:r.getSelections()
      }),void 0,!0)
    }
  }
}
function E9f(n, e){
  const t=n.textModel, i=n.getSelections(), r=n.getCellIndex(e), s=i.find(a=>a.start<=r&&r<a.end), o=!n.isReadOnly||t.viewType==="interactive";
  if(s){
    const a=i.reverse().map(u=>({
      editType:1,index:u.start,count:u.end-u.start,cells:[]
    })), l=s.end>=n.getLength()?void 0:n.cellAt(s.end);
    t.applyEdits(a, !0, {
      kind:Wy.Index,focus:n.getFocus(),selections:n.getSelections()
    }, ()=>{
      if(l){
        const u=t.cells.findIndex(d=>d.handle===l.handle);
        return{
          kind:Wy.Index,focus:{
            start:u,end:u+1
          },selections:[{
            start:u,end:u+1
          }
          ]
        }
      }
      else if(t.length){
        const u=t.length-1;
        return{
          kind:Wy.Index,focus:{
            start:u,end:u+1
          },selections:[{
            start:u,end:u+1
          }
          ]
        }
      }
      else return{
        kind:Wy.Index,focus:{
          start:0,end:0
        },selections:[{
          start:0,end:0
        }
        ]
      }
    }, void 0, o)
  }
  else{
    const a=n.getFocus(), l=[{
      editType:1,index:r,count:1,cells:[]
    }
    ], u=[];
    for(let d=0;
    d<i.length;
    d++){
      const m=i[d];
      m.end<=r?u.push(m):m.start>r?u.push({
        start:m.start-1,end:m.end-1
      }):u.push({
        start:r,end:r+1
      })
    }
    if(n.cellAt(a.start)===e){
      const d=a.end===t.length?{
        start:a.start-1,end:a.end-1
      }
      :a;
      t.applyEdits(l,!0,{
        kind:Wy.Index,focus:n.getFocus(),selections:n.getSelections()
      },()=>({
        kind:Wy.Index,focus:d,selections:u
      }),void 0,o)
    }
    else{
      const d=a.start>r?{
        start:a.start-1,end:a.end-1
      }
      :a;
      t.applyEdits(l,!0,{
        kind:Wy.Index,focus:n.getFocus(),selections:n.getSelections()
      },()=>({
        kind:Wy.Index,focus:d,selections:u
      }),void 0,o)
    }
  }
}
async function x9f(n, e){
  if(!n.notebookEditor.hasModel())return;
  const t=n.notebookEditor, i=t.textModel;
  if(t.isReadOnly)return;
  let r;
  if(n.cell){
    const s=t.getCellIndex(n.cell);
    r={
      start:s,end:s+1
    }
  }
  else{
    const s=t.getSelections();
    r=Gki(t, s)[0]
  }
  if(!(!r||r.start===r.end))if(e==="up"){
    if(r.start===0)return;
    const s=r.start-1, o={
      start:r.start-1,end:r.end-1
    }, a=n.notebookEditor.getFocus(), l=EWl(r, a)?{
      start:a.start-1,end:a.end-1
    }
    :{
      start:r.start-1,end:r.start
    };
    i.applyEdits([{
      editType:6,index:s,length:1,newIdx:r.end-1
    }
    ], !0, {
      kind:Wy.Index,focus:t.getFocus(),selections:t.getSelections()
    }, ()=>({
      kind:Wy.Index,focus:l,selections:[o]
    }), void 0, !0);
    const u=t.getSelections()[0]??t.getFocus();
    t.revealCellRangeInView(u)
  }
  else{
    if(r.end>=i.length)return;
    const s=r.end, o={
      start:r.start+1,end:r.end+1
    }, a=t.getFocus(), l=EWl(r, a)?{
      start:a.start+1,end:a.end+1
    }
    :{
      start:r.start+1,end:r.start+2
    };
    i.applyEdits([{
      editType:6,index:s,length:1,newIdx:r.start
    }
    ], !0, {
      kind:Wy.Index,focus:t.getFocus(),selections:t.getSelections()
    }, ()=>({
      kind:Wy.Index,focus:l,selections:[o]
    }), void 0, !0);
    const u=t.getSelections()[0]??t.getFocus();
    t.revealCellRangeInView(u)
  }
}
async function T9f(n, e){
  const t=n.notebookEditor;
  if(!t.hasModel())return;
  const i=t.textModel;
  if(t.isReadOnly)return;
  let r;
  if(n.ui){
    const s=n.cell, o=t.getCellIndex(s);
    r={
      start:o,end:o+1
    }
  }
  else{
    const s=t.getSelections();
    r=Gki(t, s)[0]
  }
  if(!(!r||r.start===r.end))if(e==="up"){
    const s=t.getFocus(), o=t.getSelections();
    i.applyEdits([{
      editType:1,index:r.end,count:0,cells:Qne([r]).map(a=>_Et(t.cellAt(a).model))
    }
    ], !0, {
      kind:Wy.Index,focus:s,selections:o
    }, ()=>({
      kind:Wy.Index,focus:s,selections:o
    }), void 0, !0)
  }
  else{
    const s=t.getFocus(), o=t.getSelections(), l=Qne([r]).map(p=>_Et(t.cellAt(p).model)).length, u=n.ui?s:{
      start:s.start+l,end:s.end+l
    }, d=n.ui?o:[{
      start:r.start+l,end:r.end+l
    }
    ];
    i.applyEdits([{
      editType:1,index:r.end,count:0,cells:Qne([r]).map(p=>_Et(t.cellAt(p).model))
    }
    ], !0, {
      kind:Wy.Index,focus:s,selections:o
    }, ()=>({
      kind:Wy.Index,focus:u,selections:d
    }), void 0, !0);
    const m=t.getSelections()[0]??t.getFocus();
    t.revealCellRangeInView(m)
  }
}
async function Auy(n, e, t){
  const i=t.notebookEditor;
  if(i.isReadOnly)return;
  const r=[], s=[];
  for(const m of i.getSelections())s.push(...i.getCellsInRange(m));
  if(s.length<=1)return;
  const o=s[0].cellKind;
  if(!s.every(m=>m.cellKind===o)){
    const m=_(9097, null);
    return e.warn(m)
  }
  const l=s[0], u=s.map(m=>m.getText()).join(l.textBuffer.getEOL()), d=i.getSelections()[0];
  r.push(new Mce(i.textModel.uri, {
    editType:1, index:d.start, count:d.end-d.start, cells:[{
      cellKind:l.cellKind,source:u,language:l.language,mime:l.mime,outputs:l.model.outputs,metadata:l.metadata
    }
    ]
  }));
  for(const m of i.getSelections().slice(1))r.push(new Mce(i.textModel.uri, {
    editType:1, index:m.start, count:m.end-m.start, cells:[]
  }));
  r.length&&await n.apply(r, {
    quotableLabel:_(9098, null)
  })
}
async function I9f(n, e, t, i){
  if(n.isReadOnly)return null;
  const r=n.textModel, s=n.getCellsInRange(e);
  if(!s.length||e.start===0&&t==="above"||e.end===r.length&&t==="below")return null;
  for(let o=0;
  o<s.length;
  o++){
    const a=s[o];
    if(i&&a.cellKind!==i)return null
  }
  if(t==="above"){
    const o=n.cellAt(e.start-1);
    if(i&&o.cellKind!==i)return null;
    const a=s.map(d=>(d.textBuffer.getEOL()??"")+d.getText()).join(""), l=o.textBuffer.getLineCount(), u=o.textBuffer.getLineLength(l);
    return{
      edits:[new WR(o.uri,{
        range:new Zt(l,u+1,l,u+1),text:a
      }),new Mce(r.uri,{
        editType:1,index:e.start,count:e.end-e.start,cells:[]
      })],cell:o,endFocus:{
        start:e.start-1,end:e.start
      },endSelections:[{
        start:e.start-1,end:e.start
      }
      ]
    }
  }
  else{
    const o=n.cellAt(e.end);
    if(i&&o.cellKind!==i)return null;
    const a=s[0], u=[...s.slice(1), o].map(p=>(p.textBuffer.getEOL()??"")+p.getText()).join(""), d=a.textBuffer.getLineCount(), m=a.textBuffer.getLineLength(d);
    return{
      edits:[new WR(a.uri,{
        range:new Zt(d,m+1,d,m+1),text:u
      }),new Mce(r.uri,{
        editType:1,index:e.start+1,count:e.end-e.start,cells:[]
      })],cell:a,endFocus:{
        start:e.start,end:e.start+1
      },endSelections:[{
        start:e.start,end:e.start+1
      }
      ]
    }
  }
}
async function D9f(n, e, t){
  const i=e.notebookEditor, r=i.textModel, s=i.getViewModel();
  let o=null;
  if(e.ui){
    const a=e.cell.focusMode, l=i.getCellIndex(e.cell);
    if(o=await I9f(i, {
      start:l,end:l+1
    }, t), !o)return;
    await n.apply(o?.edits, {
      quotableLabel:"Join Notebook Cells"
    }), s.updateSelectionsState({
      kind:Wy.Index,focus:o.endFocus,selections:o.endSelections
    }), o.cell.updateEditState(aw.Editing, "joinCellsWithSurrounds"), i.revealCellRangeInView(i.getFocus()), a===Tk.Editor&&(o.cell.focusMode=Tk.Editor)
  }
  else{
    const a=i.getSelections();
    if(!a.length)return;
    const l=i.getFocus(), u=i.cellAt(l.start)?.focusMode, d=[];
    let m=null;
    const p=[];
    for(let f=a.length-1;
    f>=0;
    f--){
      const A=a[f],w=EWl(A,l);
      if(A.end>=r.length&&t==="below"||A.start===0&&t==="above"){
        w&&(m=i.cellAt(l.start)),p.push(...i.getCellsInRange(A));
        continue
      }
      const C=await I9f(i,A,t);
      if(!C)return;
      d.push(...C.edits),p.push(C.cell),w&&(m=C.cell)
    }
    if(!d.length||!m||!p.length)return;
    await n.apply(d, {
      quotableLabel:"Join Notebook Cells"
    }), p.forEach(f=>{
      f.updateEditState(aw.Editing,"joinCellsWithSurrounds")
    }), s.updateSelectionsState({
      kind:Wy.Handle,primary:m.handle,selections:p.map(f=>f.handle)
    }), i.revealCellRangeInView(i.getFocus());
    const g=i.cellAt(i.getFocus().start);
    u===Tk.Editor&&g&&(g.focusMode=Tk.Editor)
  }
}
function yuy(n, e){
  const t=[], i=e.getLineCount(), r=a=>e.getLineLength(a);
  n=n.sort((a, l)=>{
    const u=a.lineNumber-l.lineNumber, d=a.column-l.column;
    return u!==0?u:d
  });
  for(let a of n)r(a.lineNumber)+1===a.column&&a.column!==1&&a.lineNumber<i&&(a=new ar(a.lineNumber+1, 1)), wuy(t, a);
  if(t.length===0)return null;
  const s=new ar(1, 1), o=new ar(i, r(i)+1);
  return[s, ...t, o]
}
function wuy(n, e){
  const t=n.length>0?n[n.length-1]:void 0;
  (!t||t.lineNumber!==e.lineNumber||t.column!==e.column)&&n.push(e)
}
function _uy(n, e){
  const t=yuy(e, n.textBuffer);
  if(!t)return null;
  const i=[];
  for(let r=1;
  r<t.length;
  r++){
    const s=t[r-1], o=t[r];
    i.push(n.textBuffer.getValueInRange(new Zt(s.lineNumber, s.column, o.lineNumber, o.column), 0))
  }
  return i
}
function a2e(n, e, t, i, r="above", s="", o=!1, a){
  const l=e.getViewModel(), u=e.activeKernel;
  if(l.options.isReadOnly)return null;
  const d=e.cellAt(t), m=o?l.getNextVisibleCellIndex(t):t+1;
  let p;
  if(i===zd.Code){
    const f=u?.supportedLanguages??n.getRegisteredLanguageIds(), A=f[0]||o_;
    if(d?.cellKind===zd.Code)p=d.language;
    else if(d?.cellKind===zd.Markup){
      const w=l.nearestCodeCellIndex(t);
      w>-1?p=l.cellAt(w).language:p=A
    }
    else if(!d&&l.length===0){
      const w=a?.getKernels(l.notebookDocument);
      w?.all.length?p=w.all[0].supportedLanguages[0]||A:p=A
    }
    else d===void 0&&r==="above"?p=l.viewCells.find(w=>w.cellKind===zd.Code)?.language||A:p=A;
    f.includes(p)||(p=A)
  }
  else p="markdown";
  return Cuy(l, d?r==="above"?t:m:t, s, p, i, void 0, [], !0, !0)
}
function Cuy(n, e, t, i, r, s, o, a, l){
  const u={
    kind:Wy.Index, focus:{
      start:e,end:e+1
    }, selections:[{
      start:e,end:e+1
    }
    ]
  };
  return n.notebookDocument.applyEdits([{
    editType:1, index:e, count:0, cells:[{
      cellKind:r,language:i,mime:void 0,outputs:o,metadata:s,source:t
    }
    ]
  }
  ], a, {
    kind:Wy.Index, focus:n.getFocus(), selections:n.getSelections()
  }, ()=>u, void 0, l&&!n.options.isReadOnly), n.cellAt(e)
}
var hbn=