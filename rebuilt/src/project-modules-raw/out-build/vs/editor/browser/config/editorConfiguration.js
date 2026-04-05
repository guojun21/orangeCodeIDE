// Module: out-build/vs/editor/browser/config/editorConfiguration.js
// Offset: 1459063 (bundle byte offset)
// Size: 5179 bytes

Ay(), Vs(), yn(), rt(), np(), _r(), Ybh(), qft(), avh(), qOn(), pk(), ZOo(), MSe(), zg(), ri(), Nte(), $Fo(), HOn=class extends at{
  constructor(e, t, i, r, s, o=!1, a=void 0){
    super(), this._accessibilityService=s, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._onDidChangeFast=this._register(new Qe), this.onDidChangeFast=this._onDidChangeFast.event, this._isDominatedByLongLines=!1, this._viewLineCount=1, this._lineNumbersDigitCount=1, this._reservedHeight=0, this._glyphMarginDecorationLaneCount=1, this._computeOptionsMemory=new cEc, this.isSimpleWidget=e, this.isChatCodeblock=o, this.cursorCodeBlockType=a, this.contextMenuId=t, this._containerObserver=this._register(new cTc(r, i.dimension)), this._targetWindowId=As(r).vscodeWindowId, this._rawOptions=lvh(i), this._validatedOptions=KOt.validateOptions(this._rawOptions), this.options=this._computeOptions(), (this.options.get(13)||this.options.get(156))&&this._containerObserver.startObserving(this.options.get(156)), this._register(Ude.onDidChangeZoomLevel(()=>this._recomputeOptions())), this._register(OSe.onDidChangeTabFocus(()=>this._recomputeOptions())), this._register(this._containerObserver.onDidChange(()=>this._recomputeOptions())), this._register(FSe.onDidChange(()=>this._recomputeOptions())), this._register(M6.getInstance(As(r)).onDidChange(()=>this._recomputeOptions())), this._register(this._accessibilityService.onDidChangeScreenReaderOptimized(()=>this._recomputeOptions())), this._register(Vze.onDidChangeInputMode(()=>this._recomputeOptions()))
  }
  _recomputeOptions(){
    const e=this._computeOptions(), t=KOt.checkEquals(this.options, e);
    t!==null&&(this.options=e, this._onDidChangeFast.fire(t), this._onDidChange.fire(t))
  }
  _computeOptions(){
    const e=this._readEnvConfiguration(), t=Xbe.createFromValidatedSettings(this._validatedOptions, e.pixelRatio, this.isSimpleWidget&&this.cursorCodeBlockType!=="cppPreviewBox"), i=this._readFontInfo(t), r={
      memory:this._computeOptionsMemory,outerWidth:e.outerWidth,outerHeight:e.outerHeight-this._reservedHeight,fontInfo:i,extraEditorClassName:e.extraEditorClassName,isDominatedByLongLines:this._isDominatedByLongLines,viewLineCount:this._viewLineCount,lineNumbersDigitCount:this._lineNumbersDigitCount,emptySelectionClipboard:e.emptySelectionClipboard,pixelRatio:e.pixelRatio,tabFocusMode:OSe.getTabFocusMode(),inputMode:Vze.getInputMode(),accessibilitySupport:e.accessibilitySupport,glyphMarginDecorationLaneCount:this._glyphMarginDecorationLaneCount
    };
    return KOt.computeOptions(this._validatedOptions, r)
  }
  _readEnvConfiguration(){
    return{
      extraEditorClassName:icA(),outerWidth:this._containerObserver.getWidth(),outerHeight:this._containerObserver.getHeight(),emptySelectionClipboard:wze||u3,pixelRatio:M6.getInstance(Coe(this._targetWindowId,!0).window).value,accessibilitySupport:this._accessibilityService.isScreenReaderOptimized()?2:this._accessibilityService.getAccessibilitySupport()
    }
  }
  _readFontInfo(e){
    return FSe.readFontInfo(Coe(this._targetWindowId, !0).window, e)
  }
  getRawOptions(){
    return this._rawOptions
  }
  updateOptions(e){
    const t=lvh(e);
    KOt.applyUpdate(this._rawOptions, t)&&(this._validatedOptions=KOt.validateOptions(this._rawOptions), this._recomputeOptions())
  }
  observeContainer(e){
    this._containerObserver.observe(e)
  }
  setIsDominatedByLongLines(e){
    this._isDominatedByLongLines!==e&&(this._isDominatedByLongLines=e, this._recomputeOptions())
  }
  setModelLineCount(e){
    const t=ncA(e);
    this._lineNumbersDigitCount!==t&&(this._lineNumbersDigitCount=t, this._recomputeOptions())
  }
  setViewLineCount(e){
    this._viewLineCount!==e&&(this._viewLineCount=e, this._recomputeOptions())
  }
  setReservedHeight(e){
    this._reservedHeight!==e&&(this._reservedHeight=e, this._recomputeOptions())
  }
  setGlyphMarginDecorationLaneCount(e){
    this._glyphMarginDecorationLaneCount!==e&&(this._glyphMarginDecorationLaneCount=e, this._recomputeOptions())
  }
}, HOn=__decorate([__param(4, Cf)], HOn), uvh=class{
  constructor(){
    this._values=[]
  }
  _read(n){
    return this._values[n]
  }
  get(n){
    return this._values[n]
  }
  _write(n, e){
    this._values[n]=e
  }
}, dvh=class{
  constructor(){
    this._values=[]
  }
  _read(n){
    if(n>=this._values.length)throw new Error("Cannot read uninitialized value");
    return this._values[n]
  }
  get(n){
    return this._read(n)
  }
  _write(n, e){
    this._values[n]=e
  }
}, KOt=class kad{
  static validateOptions(e){
    const t=new uvh;
    for(const i of CVe){
      const r=i.name==="_never_"?void 0:e[i.name];
      t._write(i.id,i.validate(r))
    }
    return t
  }
  static computeOptions(e, t){
    const i=new dvh;
    for(const r of CVe)i._write(r.id, r.compute(t, i, e._read(r.id)));
    return i
  }
  static _deepEquals(e, t){
    if(typeof e!="object"||typeof t!="object"||!e||!t)return e===t;
    if(Array.isArray(e)||Array.isArray(t))return Array.isArray(e)&&Array.isArray(t)?cg(e, t):!1;
    if(Object.keys(e).length!==Object.keys(t).length)return!1;
    for(const i in e)if(!kad._deepEquals(e[i], t[i]))return!1;
    return!0
  }
  static checkEquals(e, t){
    const i=[];
    let r=!1;
    for(const s of CVe){
      const o=!kad._deepEquals(e._read(s.id),t._read(s.id));
      i[s.id]=o,o&&(r=!0)
    }
    return r?new vhh(i):null
  }
  static applyUpdate(e, t){
    let i=!1;
    for(const r of CVe)if(t.hasOwnProperty(r.name)){
      const s=r.applyUpdate(e[r.name],t[r.name]);
      e[r.name]=s.newValue,i=i||s.didChange
    }
    return i
  }
}
}
}), Hft, YOt=