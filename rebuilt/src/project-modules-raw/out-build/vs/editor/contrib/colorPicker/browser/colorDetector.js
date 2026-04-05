// Module: out-build/vs/editor/contrib/colorPicker/browser/colorDetector.js
// Offset: 4202260 (bundle byte offset)
// Size: 5332 bytes

vr(), xf(), _s(), yn(), rt(), Sx(), oa(), XOt(), ts(), bv(), xve(), Cm(), l$o(), Ei(), k5c=Object.create({
  
}), iPe=class extends at{
  static{
    S5c=this
  }
  static{
    this.ID="editor.contrib.colorDetector"
  }
  static{
    this.RECOMPUTE_TIME=1e3
  }
  constructor(e, t, i, r){
    super(), this._editor=e, this._configurationService=t, this._languageFeaturesService=i, this._localToDispose=this._register(new Ut), this._decorationsIds=[], this._colorDatas=new Map, this._decoratorLimitReporter=this._register(new _Jh), this._colorDecorationClassRefs=this._register(new Ut), this._colorDecoratorIds=this._editor.createDecorationsCollection(), this._ruleFactory=new gTc(this._editor), this._debounceInformation=r.for(i.colorProvider, "Document Colors", {
      min:S5c.RECOMPUTE_TIME
    }), this._register(e.onDidChangeModel(()=>{
      this._isColorDecoratorsEnabled=this.isEnabled(),this.updateColors()
    })), this._register(e.onDidChangeModelLanguage(()=>this.updateColors())), this._register(i.colorProvider.onDidChange(()=>this.updateColors())), this._register(e.onDidChangeConfiguration(s=>{
      const o=this._isColorDecoratorsEnabled;
      this._isColorDecoratorsEnabled=this.isEnabled(),this._defaultColorDecoratorsEnablement=this._editor.getOption(153);
      const a=o!==this._isColorDecoratorsEnabled||s.hasChanged(21),l=s.hasChanged(153);
      (a||l)&&(this._isColorDecoratorsEnabled?this.updateColors():this.removeAllDecorations())
    })), this._timeoutTimer=null, this._computePromise=null, this._isColorDecoratorsEnabled=this.isEnabled(), this._defaultColorDecoratorsEnablement=this._editor.getOption(153), this.updateColors()
  }
  isEnabled(){
    const e=this._editor.getModel();
    if(!e)return!1;
    const t=e.getLanguageId(), i=this._configurationService.getValue(t);
    if(i&&typeof i=="object"){
      const r=i.colorDecorators;
      if(r&&r.enable!==void 0&&!r.enable)return r.enable
    }
    return this._editor.getOption(20)
  }
  get limitReporter(){
    return this._decoratorLimitReporter
  }
  static get(e){
    return e.getContribution(this.ID)
  }
  dispose(){
    this.stop(), this.removeAllDecorations(), super.dispose()
  }
  updateColors(){
    if(this.stop(), !this._isColorDecoratorsEnabled)return;
    const e=this._editor.getModel();
    !e||!this._languageFeaturesService.colorProvider.has(e)||(this._localToDispose.add(this._editor.onDidChangeModelContent(()=>{
      this._timeoutTimer||(this._timeoutTimer=new O$,this._timeoutTimer.cancelAndSet(()=>{
        this._timeoutTimer=null,this.beginCompute()
      },this._debounceInformation.get(e)))
    })), this.beginCompute())
  }
  async beginCompute(){
    this._computePromise=dw(async e=>{
      const t=this._editor.getModel();
      if(!t)return[];
      const i=new J_(!1),r=await fJh(this._languageFeaturesService.colorProvider,t,e,this._defaultColorDecoratorsEnablement);
      return this._debounceInformation.update(t,i.elapsed()),r
    });
    try{
      const e=await this._computePromise;
      this.updateDecorations(e),this.updateColorDecorators(e),this._computePromise=null
    }
    catch(e){
      Gc(e)
    }
  }
  stop(){
    this._timeoutTimer&&(this._timeoutTimer.cancel(), this._timeoutTimer=null), this._computePromise&&(this._computePromise.cancel(), this._computePromise=null), this._localToDispose.clear()
  }
  updateDecorations(e){
    const t=e.map(i=>({
      range:{
        startLineNumber:i.colorInfo.range.startLineNumber,startColumn:i.colorInfo.range.startColumn,endLineNumber:i.colorInfo.range.endLineNumber,endColumn:i.colorInfo.range.endColumn
      },options:Zh.EMPTY
    }));
    this._editor.changeDecorations(i=>{
      this._decorationsIds=i.deltaDecorations(this._decorationsIds,t),this._colorDatas=new Map,this._decorationsIds.forEach((r,s)=>this._colorDatas.set(r,e[s]))
    })
  }
  updateColorDecorators(e){
    this._colorDecorationClassRefs.clear();
    const t=[], i=this._editor.getOption(21);
    for(let s=0;
    s<e.length&&t.length<i;
    s++){
      const{
        red:o,green:a,blue:l,alpha:u
      }
      =e[s].colorInfo.color,d=new Sa(Math.round(o*255),Math.round(a*255),Math.round(l*255),u),m=`rgba(${d.r}, ${d.g}, ${d.b}, ${d.a})`,p=this._colorDecorationClassRefs.add(this._ruleFactory.createClassNameRef({
        backgroundColor:m
      }));
      t.push({
        range:{
          startLineNumber:e[s].colorInfo.range.startLineNumber,startColumn:e[s].colorInfo.range.startColumn,endLineNumber:e[s].colorInfo.range.endLineNumber,endColumn:e[s].colorInfo.range.endColumn
        },options:{
          description:"colorDetector",before:{
            content:Dze,inlineClassName:`${p.className} colorpicker-color-decoration`,inlineClassNameAffectsLetterSpacing:!0,attachedData:k5c
          }
        }
      })
    }
    const r=i<e.length?i:!1;
    this._decoratorLimitReporter.update(e.length, r), this._colorDecoratorIds.set(t)
  }
  removeAllDecorations(){
    this._editor.removeDecorations(this._decorationsIds), this._decorationsIds=[], this._colorDecoratorIds.clear(), this._colorDecorationClassRefs.clear()
  }
  getColorData(e){
    const t=this._editor.getModel();
    if(!t)return null;
    const i=t.getDecorationsInRange(Zt.fromPositions(e, e)).filter(r=>this._colorDatas.has(r.id));
    return i.length===0?null:this._colorDatas.get(i[0].id)
  }
  isColorDecoration(e){
    return this._colorDecoratorIds.has(e)
  }
}, iPe=S5c=__decorate([__param(1, Fn), __param(2, $u), __param(3, ene)], iPe), _Jh=class extends at{
  constructor(){
    super(...arguments), this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._computed=0, this._limited=!1
  }
  get computed(){
    return this._computed
  }
  get limited(){
    return this._limited
  }
  update(n, e){
    (n!==this._computed||e!==this._limited)&&(this._computed=n, this._limited=e, this._onDidChange.fire())
  }
}
}
}), E5c, CJh, SJh, kJh, EJh, xJh, TJh, IJh, DJh, BJh, RJh, Lvt, PJh, LJh, Nvt, NJh, MJh, u$o=