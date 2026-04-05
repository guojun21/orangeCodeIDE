// Module: out-build/vs/editor/common/model/textModel.js
// Offset: 1268316 (bundle byte offset)
// Size: 41484 bytes

Vs(), xf(), _s(), yn(), rt(), gde(), oa(), Yn(), EVe(), Pkc(), tl(), ts(), db(), z4o(), Ku(), QE(), xw(), FoA(), OoA(), DOt(), Hph(), qoA(), sgh(), exc(), bgh(), i9e(), gaA(), pxc(), Tft(), Wt(), VD(), gT(), Rde(), hd(), hs(), LOn=0, kfh=999, Efh=1e4, xfh=class{
  constructor(n){
    this._source=n, this._eos=!1
  }
  read(){
    if(this._eos)return null;
    const n=[];
    let e=0, t=0;
    do{
      const i=this._source.read();
      if(i===null)return this._eos=!0,e===0?null:n.join("");
      if(i.length>0&&(n[e++]=i,t+=i.length),t>=64*1024)return n.join("")
    }
    while(!0)
  }
}, GOt=()=>{
  throw new Error("Invalid change accessor")
}, (function(n){
  n[n.Relaxed=0]="Relaxed", n[n.SurrogatePairs=1]="SurrogatePairs"
})(Tfh||(Tfh={
  
})), N6=class extends at{
  static{
    Fft=this
  }
  static{
    this._MODEL_SYNC_LIMIT=50*1024*1024
  }
  static{
    this.LARGE_FILE_SIZE_THRESHOLD=20*1024*1024
  }
  static{
    this.LARGE_FILE_LINE_COUNT_THRESHOLD=300*1e3
  }
  static{
    this.LARGE_FILE_HEAP_OPERATION_THRESHOLD=256*1024*1024
  }
  static{
    this.DEFAULT_CREATION_OPTIONS={
      isForSimpleWidget:!1,tabSize:J$.tabSize,indentSize:J$.indentSize,insertSpaces:J$.insertSpaces,detectIndentation:!1,defaultEOL:1,trimAutoWhitespace:J$.trimAutoWhitespace,largeFileOptimizations:J$.largeFileOptimizations,bracketPairColorizationOptions:J$.bracketPairColorizationOptions
    }
  }
  static resolveOptions(e, t){
    if(t.detectIndentation){
      const i=Jph(e,t.tabSize,t.insertSpaces);
      return new nOo({
        tabSize:i.tabSize,indentSize:"tabSize",insertSpaces:i.insertSpaces,trimAutoWhitespace:t.trimAutoWhitespace,defaultEOL:t.defaultEOL,bracketPairColorizationOptions:t.bracketPairColorizationOptions
      })
    }
    return new nOo(t)
  }
  get onDidChangeLanguage(){
    return this._tokenizationTextModelPart.onDidChangeLanguage
  }
  get onDidChangeLanguageConfiguration(){
    return this._tokenizationTextModelPart.onDidChangeLanguageConfiguration
  }
  get onDidChangeTokens(){
    return this._tokenizationTextModelPart.onDidChangeTokens
  }
  onDidChangeContent(e){
    return this._eventEmitter.slowEvent(t=>e(t.contentChangedEvent))
  }
  onDidChangeContentOrInjectedText(e){
    return H_(this._eventEmitter.fastEvent(t=>e(t)), this._onDidChangeInjectedText.event(t=>e(t)))
  }
  _isDisposing(){
    return this.__isDisposing
  }
  get tokenization(){
    return this._tokenizationTextModelPart
  }
  get bracketPairs(){
    return this._bracketPairs
  }
  get guides(){
    return this._guidesTextModelPart
  }
  constructor(e, t, i, r=null, s=!1, o=!1, a, l, u, d, m, p, g){
    super(), this.skipLSPSync=s, this.skipLSPRegistration=o, this._undoRedoService=a, this._languageService=l, this._languageConfigurationService=u, this._tooltipService=d, this.instantiationService=m, this._modelService=p, this._commandService=g, this._onWillDispose=this._register(new Qe), this.onWillDispose=this._onWillDispose.event, this._onDidChangeDecorations=this._register(new Rfh(I=>this.handleBeforeFireDecorationsChangedEvent(I))), this.onDidChangeDecorations=this._onDidChangeDecorations.event, this._onDidChangeOptions=this._register(new Qe), this.onDidChangeOptions=this._onDidChangeOptions.event, this._onDidChangeAttached=this._register(new Qe), this.onDidChangeAttached=this._onDidChangeAttached.event, this._onDidChangeInjectedText=this._register(new Qe), this._eventEmitter=this._register(new Pfh), this._languageSelectionListener=this._register(new uo), this.syncedWithLSP=!1, this._deltaDecorationCallCnt=0, this._attachedViews=new $gh, LOn++, this.id="$model"+LOn, this.isForSimpleWidget=i.isForSimpleWidget, typeof r>"u"||r===null?this._associatedResource=je.parse("inmemory://model/"+LOn):this._associatedResource=r, this._attachedEditorCount=0;
    const{
      textBuffer:f,disposable:A
    }
    =POn(e, i.defaultEOL);
    this._buffer=f, this._bufferDisposable=A;
    const w=this._buffer.getLineCount(), C=this._buffer.getValueLengthInRange(new Zt(1, 1, w, this._buffer.getLineLength(w)+1), 0);
    i.largeFileOptimizations?(this._isTooLargeForTokenization=C>Fft.LARGE_FILE_SIZE_THRESHOLD||w>Fft.LARGE_FILE_LINE_COUNT_THRESHOLD, this._isTooLargeForHeapOperation=C>Fft.LARGE_FILE_HEAP_OPERATION_THRESHOLD):(this._isTooLargeForTokenization=!1, this._isTooLargeForHeapOperation=!1), this._options=Fft.resolveOptions(this._buffer, i);
    const x=typeof t=="string"?t:t.languageId;
    typeof t!="string"&&(this._languageSelectionListener.value=t.onDidChange(()=>this._setLanguage(t.languageId))), this._bracketPairs=this._register(new Nph(this, this._languageConfigurationService)), this._guidesTextModelPart=this._register(new qph(this, this._languageConfigurationService)), this._decorationProvider=this._register(new Mph(this)), this._tokenizationTextModelPart=this.instantiationService.createInstance(xOo, this, this._bracketPairs, x, this._attachedViews), this._isTooLargeForSyncing=C>Fft._MODEL_SYNC_LIMIT, this._versionId=1, this._alternativeVersionId=1, this._initialUndoRedoSnapshot=null, this._isDisposed=!1, this.__isDisposing=!1, this._instanceId=V0c(LOn), this._lastDecorationId=0, this._decorations=Object.create(null), this._decorationsTree=new Bxc, this._commandManager=new Uph(this, this._undoRedoService), this._isUndoing=!1, this._isRedoing=!1, this._trimAutoWhitespaceLines=null, this._register(this._decorationProvider.onDidChange(()=>{
      this._onDidChangeDecorations.beginDeferredEmit(),this._onDidChangeDecorations.fire(),this._onDidChangeDecorations.endDeferredEmit()
    })), o||this._languageService.requestRichLanguageFeatures(x), this._register(this._languageConfigurationService.onDidChange(I=>{
      this._bracketPairs.handleLanguageConfigurationServiceChange(I),this._tokenizationTextModelPart.handleLanguageConfigurationServiceChange(I)
    })), this.reactiveStorageReducers=new Lfh(this), [this.nonPersistentReactiveStorage, this.setNonPersistentReactiveStorage]=this.createEmptyNonPersistentStorage()
  }
  createEmptyNonPersistentStorage(){
    return v3(sph(), void 0)
  }
  dispose(){
    this.__isDisposing=!0, this._onWillDispose.fire(), this._tokenizationTextModelPart.dispose(), this._isDisposed=!0, super.dispose(), this._bufferDisposable.dispose(), this.__isDisposing=!1;
    const e=new bOo([], "", `
`, !1, !1, !0, !0);
    e.dispose(), this._buffer=e, this._bufferDisposable=at.None
  }
  _hasListeners(){
    return this._onWillDispose.hasListeners()||this._onDidChangeDecorations.hasListeners()||this._tokenizationTextModelPart._hasListeners()||this._onDidChangeOptions.hasListeners()||this._onDidChangeAttached.hasListeners()||this._onDidChangeInjectedText.hasListeners()||this._eventEmitter.hasListeners()
  }
  _assertNotDisposed(){
    if(this._isDisposed)throw new _m("Model is disposed!")
  }
  equalsTextBuffer(e){
    return this._assertNotDisposed(), this._buffer.equals(e)
  }
  getTextBuffer(){
    return this._assertNotDisposed(), this._buffer
  }
  _emitContentChangedEvent(e, t){
    this.__isDisposing||(this._tokenizationTextModelPart.handleDidChangeContent(t), this._bracketPairs.handleDidChangeContent(t), this._eventEmitter.fire(new COn(e, t)))
  }
  setValue(e){
    if(this._assertNotDisposed(), e==null)throw uw();
    const{
      textBuffer:t,disposable:i
    }
    =POn(e, this._options.defaultEOL);
    this._setValueFromTextBuffer(t, i)
  }
  _createContentChanged2(e, t, i, r, s, o, a, l, u){
    return{
      changes:[{
        range:e,rangeOffset:t,rangeLength:i,text:s
      }
      ],eol:this._buffer.getEOL(),isEolChange:u,versionId:this.getVersionId(),isUndoing:o,isRedoing:a,isFlush:l
    }
  }
  _setValueFromTextBuffer(e, t){
    this._assertNotDisposed();
    const i=this.getFullModelRange(), r=this.getValueLengthInRange(i), s=this.getLineCount(), o=this.getLineMaxColumn(s);
    this._buffer=e, this._bufferDisposable.dispose(), this._bufferDisposable=t, this._increaseVersionId(), this._decorations=Object.create(null), this._decorationsTree=new Bxc, this._commandManager.clear(), this._trimAutoWhitespaceLines=null, this._emitContentChangedEvent(new _On([new Ygh], this._versionId, !1, !1), this._createContentChanged2(new Zt(1, 1, s, o), 0, r, new ar(s, o), this.getValue(), !1, !1, !0, !1))
  }
  setEOL(e){
    this._assertNotDisposed();
    const t=e===1?`\r
`:`
`;
    if(this._buffer.getEOL()===t)return;
    const i=this.getFullModelRange(), r=this.getValueLengthInRange(i), s=this.getLineCount(), o=this.getLineMaxColumn(s);
    this._onBeforeEOLChange(), this._buffer.setEOL(t), this._increaseVersionId(), this._onAfterEOLChange(), this._emitContentChangedEvent(new _On([new efh], this._versionId, !1, !1), this._createContentChanged2(new Zt(1, 1, s, o), 0, r, new ar(s, o), this.getValue(), !1, !1, !1, !0))
  }
  _onBeforeEOLChange(){
    this._decorationsTree.ensureAllNodesHaveRanges(this)
  }
  _onAfterEOLChange(){
    const e=this.getVersionId(), t=this._decorationsTree.collectNodesPostOrder();
    for(let i=0, r=t.length;
    i<r;
    i++){
      const s=t[i],o=s.range,a=s.cachedAbsoluteStart-s.start,l=this._buffer.getOffsetAt(o.startLineNumber,o.startColumn),u=this._buffer.getOffsetAt(o.endLineNumber,o.endColumn);
      s.cachedAbsoluteStart=l,s.cachedAbsoluteEnd=u,s.cachedVersionId=e,s.start=l-a,s.end=u-a,RVe(s)
    }
  }
  onBeforeAttached(){
    return this._attachedEditorCount++, this._attachedEditorCount===1&&(this._tokenizationTextModelPart.handleDidChangeAttached(), this._onDidChangeAttached.fire(void 0)), this._attachedViews.attachView()
  }
  onBeforeDetached(e){
    this._attachedEditorCount--, this._attachedEditorCount===0&&(this._tokenizationTextModelPart.handleDidChangeAttached(), this._onDidChangeAttached.fire(void 0)), this._attachedViews.detachView(e)
  }
  isAttachedToEditor(){
    return this._attachedEditorCount>0
  }
  getAttachedEditorCount(){
    return this._attachedEditorCount
  }
  isTooLargeForSyncing(){
    return this._isTooLargeForSyncing
  }
  isTooLargeForTokenization(){
    return this._isTooLargeForTokenization
  }
  isTooLargeForHeapOperation(){
    return this._isTooLargeForHeapOperation
  }
  isDisposed(){
    return this._isDisposed
  }
  isDominatedByLongLines(){
    if(this._assertNotDisposed(), this.isTooLargeForTokenization())return!1;
    let e=0, t=0;
    const i=this._buffer.getLineCount();
    for(let r=1;
    r<=i;
    r++){
      const s=this._buffer.getLineLength(r);
      s>=Efh?t+=s:e+=s
    }
    return t>e
  }
  get uri(){
    return this._associatedResource
  }
  getOptions(){
    return this._assertNotDisposed(), this._options
  }
  getFormattingOptions(){
    return{
      tabSize:this._options.indentSize,insertSpaces:this._options.insertSpaces
    }
  }
  updateOptions(e){
    this._assertNotDisposed();
    const t=typeof e.tabSize<"u"?e.tabSize:this._options.tabSize, i=typeof e.indentSize<"u"?e.indentSize:this._options.originalIndentSize, r=typeof e.insertSpaces<"u"?e.insertSpaces:this._options.insertSpaces, s=typeof e.trimAutoWhitespace<"u"?e.trimAutoWhitespace:this._options.trimAutoWhitespace, o=typeof e.bracketColorizationOptions<"u"?e.bracketColorizationOptions:this._options.bracketPairColorizationOptions, a=new nOo({
      tabSize:t,indentSize:i,insertSpaces:r,defaultEOL:this._options.defaultEOL,trimAutoWhitespace:s,bracketPairColorizationOptions:o
    });
    if(this._options.equals(a))return;
    const l=this._options.createChangeEvent(a);
    this._options=a, this._bracketPairs.handleDidChangeOptions(l), this._decorationProvider.handleDidChangeOptions(l), this._onDidChangeOptions.fire(l)
  }
  detectIndentation(e, t){
    this._assertNotDisposed();
    const i=Jph(this._buffer, t, e);
    this.updateOptions({
      insertSpaces:i.insertSpaces,tabSize:i.tabSize,indentSize:i.tabSize
    })
  }
  normalizeIndentation(e){
    return this._assertNotDisposed(), Rkc(e, this._options.indentSize, this._options.insertSpaces)
  }
  getVersionId(){
    return this._assertNotDisposed(), this._versionId
  }
  mightContainRTL(){
    return this._buffer.mightContainRTL()
  }
  mightContainUnusualLineTerminators(){
    return this._buffer.mightContainUnusualLineTerminators()
  }
  removeUnusualLineTerminators(e=null){
    const t=this.findMatches(K0c.source, !1, !0, !1, null, !1, 1073741824);
    this._buffer.resetMightContainUnusualLineTerminators(), this.pushEditOperations(e, t.map(i=>({
      range:i.range,text:null
    })), ()=>null)
  }
  mightContainNonBasicASCII(){
    return this._buffer.mightContainNonBasicASCII()
  }
  getAlternativeVersionId(){
    return this._assertNotDisposed(), this._alternativeVersionId
  }
  getInitialUndoRedoSnapshot(){
    return this._assertNotDisposed(), this._initialUndoRedoSnapshot
  }
  getOffsetAt(e){
    this._assertNotDisposed();
    const t=this._validatePosition(e.lineNumber, e.column, 0);
    return this._buffer.getOffsetAt(t.lineNumber, t.column)
  }
  getPositionAt(e){
    this._assertNotDisposed();
    const t=Math.min(this._buffer.getLength(), Math.max(0, e));
    return this._buffer.getPositionAt(t)
  }
  _increaseVersionId(){
    this._versionId=this._versionId+1, this._alternativeVersionId=this._versionId
  }
  _overwriteVersionId(e){
    this._versionId=e
  }
  _overwriteAlternativeVersionId(e){
    this._alternativeVersionId=e
  }
  _overwriteInitialUndoRedoSnapshot(e){
    this._initialUndoRedoSnapshot=e
  }
  getValue(e, t=!1){
    if(this._assertNotDisposed(), this.isTooLargeForHeapOperation())throw new _m("Operation would exceed heap memory limits");
    const i=this.getFullModelRange(), r=this.getValueInRange(i, e);
    return t?this._buffer.getBOM()+r:r
  }
  createSnapshot(e=!1){
    return new xfh(this._buffer.createSnapshot(e))
  }
  getValueLength(e, t=!1){
    this._assertNotDisposed();
    const i=this.getFullModelRange(), r=this.getValueLengthInRange(i, e);
    return t?this._buffer.getBOM().length+r:r
  }
  getValueInRange(e, t=0){
    return this._assertNotDisposed(), this._buffer.getValueInRange(this.validateRange(e), t)
  }
  getValueLengthInRange(e, t=0){
    return this._assertNotDisposed(), this._buffer.getValueLengthInRange(this.validateRange(e), t)
  }
  getCharacterCountInRange(e, t=0){
    return this._assertNotDisposed(), this._buffer.getCharacterCountInRange(this.validateRange(e), t)
  }
  getLineCount(){
    return this._assertNotDisposed(), this._buffer.getLineCount()
  }
  getLineContent(e){
    if(this._assertNotDisposed(), e<1||e>this.getLineCount())throw new _m("Illegal value for lineNumber");
    return this._buffer.getLineContent(e)
  }
  getLineLength(e){
    if(this._assertNotDisposed(), e<1||e>this.getLineCount())throw new _m("Illegal value for lineNumber");
    return this._buffer.getLineLength(e)
  }
  getLinesContent(){
    if(this._assertNotDisposed(), this.isTooLargeForHeapOperation())throw new _m("Operation would exceed heap memory limits");
    return this._buffer.getLinesContent()
  }
  getEOL(){
    return this._assertNotDisposed(), this._buffer.getEOL()
  }
  getEndOfLineSequence(){
    return this._assertNotDisposed(), this._buffer.getEOL()===`
`?0:1
  }
  getLineMinColumn(e){
    return this._assertNotDisposed(), 1
  }
  getLineMaxColumn(e){
    if(this._assertNotDisposed(), e<1||e>this.getLineCount())throw new _m("Illegal value for lineNumber");
    return this._buffer.getLineLength(e)+1
  }
  getLineFirstNonWhitespaceColumn(e){
    if(this._assertNotDisposed(), e<1||e>this.getLineCount())throw new _m("Illegal value for lineNumber");
    return this._buffer.getLineFirstNonWhitespaceColumn(e)
  }
  getLineLastNonWhitespaceColumn(e){
    if(this._assertNotDisposed(), e<1||e>this.getLineCount())throw new _m("Illegal value for lineNumber");
    return this._buffer.getLineLastNonWhitespaceColumn(e)
  }
  _validateRangeRelaxedNoAllocations(e){
    const t=this._buffer.getLineCount(), i=e.startLineNumber, r=e.startColumn;
    let s=Math.floor(typeof i=="number"&&!isNaN(i)?i:1), o=Math.floor(typeof r=="number"&&!isNaN(r)?r:1);
    if(s<1)s=1, o=1;
    else if(s>t)s=t, o=this.getLineMaxColumn(s);
    else if(o<=1)o=1;
    else{
      const m=this.getLineMaxColumn(s);
      o>=m&&(o=m)
    }
    const a=e.endLineNumber, l=e.endColumn;
    let u=Math.floor(typeof a=="number"&&!isNaN(a)?a:1), d=Math.floor(typeof l=="number"&&!isNaN(l)?l:1);
    if(u<1)u=1, d=1;
    else if(u>t)u=t, d=this.getLineMaxColumn(u);
    else if(d<=1)d=1;
    else{
      const m=this.getLineMaxColumn(u);
      d>=m&&(d=m)
    }
    return i===s&&r===o&&a===u&&l===d&&e instanceof Zt&&!(e instanceof Vl)?e:new Zt(s, o, u, d)
  }
  _isValidPosition(e, t, i){
    if(typeof e!="number"||typeof t!="number"||isNaN(e)||isNaN(t)||e<1||t<1||(e|0)!==e||(t|0)!==t)return!1;
    const r=this._buffer.getLineCount();
    if(e>r)return!1;
    if(t===1)return!0;
    const s=this.getLineMaxColumn(e);
    if(t>s)return!1;
    if(i===1){
      const o=this._buffer.getLineCharCode(e,t-2);
      if(d3(o))return!1
    }
    return!0
  }
  _validatePosition(e, t, i){
    const r=Math.floor(typeof e=="number"&&!isNaN(e)?e:1), s=Math.floor(typeof t=="number"&&!isNaN(t)?t:1), o=this._buffer.getLineCount();
    if(r<1)return new ar(1, 1);
    if(r>o)return new ar(o, this.getLineMaxColumn(o));
    if(s<=1)return new ar(r, 1);
    const a=this.getLineMaxColumn(r);
    if(s>=a)return new ar(r, a);
    if(i===1){
      const l=this._buffer.getLineCharCode(r,s-2);
      if(d3(l))return new ar(r,s-1)
    }
    return new ar(r, s)
  }
  validatePosition(e){
    return this._assertNotDisposed(), e instanceof ar&&this._isValidPosition(e.lineNumber, e.column, 1)?e:this._validatePosition(e.lineNumber, e.column, 1)
  }
  isValidRange(e){
    return this._isValidRange(e, 1)
  }
  _isValidRange(e, t){
    const i=e.startLineNumber, r=e.startColumn, s=e.endLineNumber, o=e.endColumn;
    if(!this._isValidPosition(i, r, 0)||!this._isValidPosition(s, o, 0))return!1;
    if(t===1){
      const a=r>1?this._buffer.getLineCharCode(i,r-2):0,l=o>1&&o<=this._buffer.getLineLength(s)?this._buffer.getLineCharCode(s,o-2):0,u=d3(a),d=d3(l);
      return!u&&!d
    }
    return!0
  }
  validateRange(e){
    if(this._assertNotDisposed(), e instanceof Zt&&!(e instanceof Vl)&&this._isValidRange(e, 1))return e;
    const i=this._validatePosition(e.startLineNumber, e.startColumn, 0), r=this._validatePosition(e.endLineNumber, e.endColumn, 0), s=i.lineNumber, o=i.column, a=r.lineNumber, l=r.column;
    {
      const u=o>1?this._buffer.getLineCharCode(s,o-2):0,d=l>1&&l<=this._buffer.getLineLength(a)?this._buffer.getLineCharCode(a,l-2):0,m=d3(u),p=d3(d);
      return!m&&!p?new Zt(s,o,a,l):s===a&&o===l?new Zt(s,o-1,a,l-1):m&&p?new Zt(s,o-1,a,l+1):m?new Zt(s,o-1,a,l):new Zt(s,o,a,l+1)
    }
    return new Zt(s, o, a, l)
  }
  modifyPosition(e, t){
    this._assertNotDisposed();
    const i=this.getOffsetAt(e)+t;
    return this.getPositionAt(Math.min(this._buffer.getLength(), Math.max(0, i)))
  }
  getFullModelRange(){
    this._assertNotDisposed();
    const e=this.getLineCount();
    return new Zt(1, 1, e, this.getLineMaxColumn(e))
  }
  findMatchesLineByLine(e, t, i, r){
    return this._buffer.findMatchesLineByLine(e, t, i, r)
  }
  findMatches(e, t, i, r, s, o, a=kfh){
    this._assertNotDisposed();
    let l=null;
    t!==null&&(Array.isArray(t)||(t=[t]), t.every(m=>Zt.isIRange(m))&&(l=t.map(m=>this.validateRange(m)))), l===null&&(l=[this.getFullModelRange()]), l=l.sort((m, p)=>m.startLineNumber-p.startLineNumber||m.startColumn-p.startColumn);
    const u=[];
    u.push(l.reduce((m, p)=>Zt.areIntersecting(m, p)?m.plusRange(p):(u.push(m), p)));
    let d;
    if(!i&&e.indexOf(`
`)<0){
      const p=new Nde(e,i,r,s).parseSearchRequest();
      if(!p)return[];
      d=g=>this.findMatchesLineByLine(g,p,o,a)
    }
    else d=m=>bOn.findMatches(this, new Nde(e, i, r, s), m, o, a);
    return u.map(d).reduce((m, p)=>m.concat(p), [])
  }
  findNextMatch(e, t, i, r, s, o){
    this._assertNotDisposed();
    const a=this.validatePosition(t);
    if(!i&&e.indexOf(`
`)<0){
      const u=new Nde(e,i,r,s).parseSearchRequest();
      if(!u)return null;
      const d=this.getLineCount();
      let m=new Zt(a.lineNumber,a.column,d,this.getLineMaxColumn(d)),p=this.findMatchesLineByLine(m,u,o,1);
      return bOn.findNextMatch(this,new Nde(e,i,r,s),a,o),p.length>0||(m=new Zt(1,1,a.lineNumber,this.getLineMaxColumn(a.lineNumber)),p=this.findMatchesLineByLine(m,u,o,1),p.length>0)?p[0]:null
    }
    return bOn.findNextMatch(this, new Nde(e, i, r, s), a, o)
  }
  findPreviousMatch(e, t, i, r, s, o){
    this._assertNotDisposed();
    const a=this.validatePosition(t);
    return bOn.findPreviousMatch(this, new Nde(e, i, r, s), a, o)
  }
  pushStackElement(){
    this._commandManager.pushStackElement()
  }
  popStackElement(){
    this._commandManager.popStackElement()
  }
  pushEOL(e){
    if((this.getEOL()===`
`?0:1)!==e)try{
      this._onDidChangeDecorations.beginDeferredEmit(),this._eventEmitter.beginDeferredEmit(),this._initialUndoRedoSnapshot===null&&(this._initialUndoRedoSnapshot=this._undoRedoService.createSnapshot(this.uri)),this._commandManager.pushEOL(e)
    }
    finally{
      this._eventEmitter.endDeferredEmit(),this._onDidChangeDecorations.endDeferredEmit()
    }
  }
  _validateEditOperation(e){
    return e instanceof sOn?e:new sOn(e.identifier||null, this.validateRange(e.range), e.text, e.forceMoveMarkers||!1, e.isAutoWhitespaceEdit||!1, e._isTracked||!1)
  }
  _validateEditOperations(e){
    const t=[];
    for(let i=0, r=e.length;
    i<r;
    i++)t[i]=this._validateEditOperation(e[i]);
    return t
  }
  pushEditOperations(e, t, i, r, s){
    try{
      return this._onDidChangeDecorations.beginDeferredEmit(),this._eventEmitter.beginDeferredEmit(),this._pushEditOperations(e,this._validateEditOperations(t),i,r,s)
    }
    finally{
      this._eventEmitter.endDeferredEmit(),this._onDidChangeDecorations.endDeferredEmit()
    }
  }
  _pushEditOperations(e, t, i, r, s){
    if(this._tooltipService.registerEvent("editor.type.push_edit_operation"), this._options.trimAutoWhitespace&&this._trimAutoWhitespaceLines){
      const o=t.map(l=>({
        range:this.validateRange(l.range),text:l.text
      }));
      let a=!0;
      if(e)for(let l=0,u=e.length;
      l<u;
      l++){
        const d=e[l];
        let m=!1;
        for(let p=0,g=o.length;
        p<g;
        p++){
          const f=o[p].range,A=f.startLineNumber>d.endLineNumber,w=d.startLineNumber>f.endLineNumber;
          if(!A&&!w){
            m=!0;
            break
          }
        }
        if(!m){
          a=!1;
          break
        }
      }
      if(a)for(let l=0,u=this._trimAutoWhitespaceLines.length;
      l<u;
      l++){
        const d=this._trimAutoWhitespaceLines[l],m=this.getLineMaxColumn(d);
        let p=!0;
        for(let g=0,f=o.length;
        g<f;
        g++){
          const A=o[g].range,w=o[g].text;
          if(!(d<A.startLineNumber||d>A.endLineNumber)&&!(d===A.startLineNumber&&A.startColumn===m&&A.isEmpty()&&w&&w.length>0&&w.charAt(0)===`
`)&&!(d===A.startLineNumber&&A.startColumn===1&&A.isEmpty()&&w&&w.length>0&&w.charAt(w.length-1)===`
`)){
            p=!1;
            break
          }
        }
        if(p){
          const g=new Zt(d,1,d,m);
          t.push(new sOn(null,g,null,!1,!1,!1))
        }
      }
      this._trimAutoWhitespaceLines=null
    }
    return this._initialUndoRedoSnapshot===null&&(this._initialUndoRedoSnapshot=this._undoRedoService.createSnapshot(this.uri)), this._commandManager.pushEditOperation(e, t, i, r, s)
  }
  _applyUndo(e, t, i, r){
    this._tooltipService.registerEvent("editor.type.undo");
    const s=e.map(o=>{
      const a=this.getPositionAt(o.newPosition),l=this.getPositionAt(o.newEnd);
      return{
        range:new Zt(a.lineNumber,a.column,l.lineNumber,l.column),text:o.oldText
      }
    });
    this._applyUndoRedoEdits(s, t, !0, !1, i, r)
  }
  _applyRedo(e, t, i, r){
    this._tooltipService.registerEvent("editor.type.redo");
    const s=e.map(o=>{
      const a=this.getPositionAt(o.oldPosition),l=this.getPositionAt(o.oldEnd);
      return{
        range:new Zt(a.lineNumber,a.column,l.lineNumber,l.column),text:o.newText
      }
    });
    this._applyUndoRedoEdits(s, t, !1, !0, i, r)
  }
  _applyUndoRedoEdits(e, t, i, r, s, o){
    try{
      this._onDidChangeDecorations.beginDeferredEmit(),this._eventEmitter.beginDeferredEmit(),this._isUndoing=i,this._isRedoing=r,this.applyEdits(e,!1),this.setEOL(t),this._overwriteAlternativeVersionId(s)
    }
    finally{
      this._isUndoing=!1,this._isRedoing=!1,this._eventEmitter.endDeferredEmit(o),this._onDidChangeDecorations.endDeferredEmit()
    }
  }
  applyEdits(e, t=!1, i=!1){
    try{
      this._onDidChangeDecorations.beginDeferredEmit(),this._eventEmitter.beginDeferredEmit();
      const r=this._validateEditOperations(e),s=this._doApplyEdits(r,t);
      if(i)for(const o of r)this._undoRedoService.rebaseStack(this.uri,this._buffer.getOffsetAt(o.range.startLineNumber,o.range.startColumn),this._buffer.getOffsetAt(o.range.endLineNumber,o.range.endColumn),o.text?.length??0,o.range.endLineNumber,o.range.endColumn,(o.text?.split(this.getEOL()).length??1)-Math.max(1,o.range.endLineNumber-o.range.startLineNumber),o.text?.split(this.getEOL())[o.text.split(this.getEOL()).length-1].length??0-o.range.endColumn+(o.range.startLineNumber===o.range.endLineNumber?o.range.startColumn:0));
      return s
    }
    finally{
      this._eventEmitter.endDeferredEmit(),this._onDidChangeDecorations.endDeferredEmit()
    }
  }
  _doApplyEdits(e, t){
    const i=this._buffer.getLineCount(), r=this._buffer.applyEdits(e, this._options.trimAutoWhitespace, t), s=this._buffer.getLineCount(), o=r.changes;
    if(this._trimAutoWhitespaceLines=r.trimAutoWhitespaceLineNumbers, o.length!==0){
      for(let u=0,d=o.length;
      u<d;
      u++){
        const m=o[u];
        this._decorationsTree.acceptReplace(m.rangeOffset,m.rangeLength,m.text.length,m.forceMoveMarkers)
      }
      const a=[];
      this._increaseVersionId();
      let l=i;
      for(let u=0,d=o.length;
      u<d;
      u++){
        const m=o[u],[p]=Vbe(m.text);
        this._onDidChangeDecorations.fire();
        const g=m.range.startLineNumber,f=m.range.endLineNumber,A=f-g,w=p,C=Math.min(A,w),x=w-A,I=s-l-x+g,B=I,R=I+w,N=this._decorationsTree.getInjectedTextInInterval(this,this.getOffsetAt(new ar(B,1)),this.getOffsetAt(new ar(R,this.getLineMaxColumn(R))),0),M=o9e.fromDecorations(N),O=new Ebe(M);
        for(let $=C;
        $>=0;
        $--){
          const H=g+$,W=I+$;
          O.takeFromEndWhile(Y=>Y.lineNumber>W);
          const z=O.takeFromEndWhile(Y=>Y.lineNumber===W);
          a.push(new bxc(H,this.getLineContent(W),z))
        }
        if(C<A){
          const $=g+C;
          a.push(new Zgh($+1,f))
        }
        if(C<w){
          const $=new Ebe(M),H=g+C,W=w-C,z=s-l-W+H+1,Y=[],j=[];
          for(let X=0;
          X<W;
          X++){
            const ee=z+X;
            j[X]=this.getLineContent(ee),$.takeWhile(re=>re.lineNumber<ee),Y[X]=$.takeWhile(re=>re.lineNumber===ee)
          }
          a.push(new Xgh(H+1,g+w,j,Y))
        }
        l+=x
      }
      this._emitContentChangedEvent(new _On(a,this.getVersionId(),this._isUndoing,this._isRedoing),{
        changes:o,eol:this._buffer.getEOL(),isEolChange:!1,versionId:this.getVersionId(),isUndoing:this._isUndoing,isRedoing:this._isRedoing,isFlush:!1
      })
    }
    return r.reverseEdits===null?void 0:r.reverseEdits
  }
  undo(){
    return this._undoRedoService.undo(this.uri)
  }
  canUndo(){
    return this._undoRedoService.canUndo(this.uri)
  }
  redo(){
    return this._undoRedoService.redo(this.uri)
  }
  canRedo(){
    return this._undoRedoService.canRedo(this.uri)
  }
  handleBeforeFireDecorationsChangedEvent(e){
    if(e===null||e.size===0)return;
    const i=Array.from(e).map(r=>new bxc(r, this.getLineContent(r), this._getInjectedTextInLine(r)));
    this._onDidChangeInjectedText.fire(new vxc(i))
  }
  changeDecorations(e, t=0){
    this._assertNotDisposed();
    try{
      return this._onDidChangeDecorations.beginDeferredEmit(),this._changeDecorations(t,e)
    }
    finally{
      this._onDidChangeDecorations.endDeferredEmit()
    }
  }
  _changeDecorations(e, t){
    const i={
      addDecoration:(s,o)=>this._deltaDecorationsImpl(e,[],[{
        range:s,options:o
      }
      ])[0],changeDecoration:(s,o)=>{
        this._changeDecorationImpl(s,o)
      },changeDecorationOptions:(s,o)=>{
        this._changeDecorationOptionsImpl(s,Sfh(o))
      },removeDecoration:s=>{
        this._deltaDecorationsImpl(e,[s],[])
      },deltaDecorations:(s,o)=>s.length===0&&o.length===0?[]:this._deltaDecorationsImpl(e,s,o)
    };
    let r=null;
    try{
      r=t(i)
    }
    catch(s){
      Gc(s)
    }
    return i.addDecoration=GOt, i.changeDecoration=GOt, i.changeDecorationOptions=GOt, i.removeDecoration=GOt, i.deltaDecorations=GOt, r
  }
  deltaDecorations(e, t, i=0){
    if(this._assertNotDisposed(), e||(e=[]), e.length===0&&t.length===0)return[];
    try{
      return this._deltaDecorationCallCnt++,this._deltaDecorationCallCnt>1&&(console.warn("Invoking deltaDecorations recursively could lead to leaking decorations."),Gc(new Error("Invoking deltaDecorations recursively could lead to leaking decorations."))),this._onDidChangeDecorations.beginDeferredEmit(),this._deltaDecorationsImpl(i,e,t)
    }
    finally{
      this._onDidChangeDecorations.endDeferredEmit(),this._deltaDecorationCallCnt--
    }
  }
  _getTrackedRange(e){
    return this.getDecorationRange(e)
  }
  _setTrackedRange(e, t, i){
    const r=e?this._decorations[e]:null;
    if(!r)return t?this._deltaDecorationsImpl(0, [], [{
      range:t,options:Pxc[i]
    }
    ], !0)[0]:null;
    if(!t)return this._decorationsTree.delete(r), delete this._decorations[r.id], null;
    const s=this._validateRangeRelaxedNoAllocations(t), o=this._buffer.getOffsetAt(s.startLineNumber, s.startColumn), a=this._buffer.getOffsetAt(s.endLineNumber, s.endColumn);
    return this._decorationsTree.delete(r), r.reset(this.getVersionId(), o, a, s), r.setOptions(Pxc[i]), this._decorationsTree.insert(r), r.id
  }
  removeAllDecorationsWithOwnerId(e){
    if(this._isDisposed)return;
    const t=this._decorationsTree.collectNodesFromOwner(e);
    for(let i=0, r=t.length;
    i<r;
    i++){
      const s=t[i];
      this._decorationsTree.delete(s),delete this._decorations[s.id]
    }
  }
  getDecorationOptions(e){
    const t=this._decorations[e];
    return t?t.options:null
  }
  getDecorationRange(e){
    const t=this._decorations[e];
    return t?this._decorationsTree.getNodeRange(this, t):null
  }
  getLineDecorations(e, t=0, i=!1){
    return e<1||e>this.getLineCount()?[]:this.getLinesDecorations(e, e, t, i)
  }
  getLinesDecorations(e, t, i=0, r=!1, s=!1){
    const o=this.getLineCount(), a=Math.min(o, Math.max(1, e)), l=Math.min(o, Math.max(1, t)), u=this.getLineMaxColumn(l), d=new Zt(a, 1, l, u), m=this._getDecorationsInRange(d, i, r, s);
    return n0c(m, this._decorationProvider.getDecorationsInRange(d, i, r)), m
  }
  getDecorationsInRange(e, t=0, i=!1, r=!1, s=!1){
    const o=this.validateRange(e), a=this._getDecorationsInRange(o, t, i, s);
    return n0c(a, this._decorationProvider.getDecorationsInRange(o, t, i, r)), a
  }
  getOverviewRulerDecorations(e=0, t=!1){
    return this._decorationsTree.getAll(this, e, t, !0, !1)
  }
  getInjectedTextDecorations(e=0){
    return this._decorationsTree.getAllInjectedText(this, e)
  }
  _getInjectedTextInLine(e){
    const t=this._buffer.getOffsetAt(e, 1), i=t+this._buffer.getLineLength(e), r=this._decorationsTree.getInjectedTextInInterval(this, t, i, 0);
    return o9e.fromDecorations(r).filter(s=>s.lineNumber===e)
  }
  getAllDecorations(e=0, t=!1){
    let i=this._decorationsTree.getAll(this, e, t, !1, !1);
    return i=i.concat(this._decorationProvider.getAllDecorations(e, t)), i
  }
  getAllMarginDecorations(e=0){
    return this._decorationsTree.getAll(this, e, !1, !1, !0)
  }
  _getDecorationsInRange(e, t, i, r){
    const s=this._buffer.getOffsetAt(e.startLineNumber, e.startColumn), o=this._buffer.getOffsetAt(e.endLineNumber, e.endColumn);
    return this._decorationsTree.getAllInInterval(this, s, o, t, i, r)
  }
  getRangeAt(e, t){
    return this._buffer.getRangeAt(e, t-e)
  }
  _changeDecorationImpl(e, t){
    const i=this._decorations[e];
    if(!i)return;
    if(i.options.after){
      const a=this.getDecorationRange(e);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.endLineNumber)
    }
    if(i.options.before){
      const a=this.getDecorationRange(e);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(a.startLineNumber)
    }
    const r=this._validateRangeRelaxedNoAllocations(t), s=this._buffer.getOffsetAt(r.startLineNumber, r.startColumn), o=this._buffer.getOffsetAt(r.endLineNumber, r.endColumn);
    this._decorationsTree.delete(i), i.reset(this.getVersionId(), s, o, r), this._decorationsTree.insert(i), this._onDidChangeDecorations.checkAffectedAndFire(i.options), i.options.after&&this._onDidChangeDecorations.recordLineAffectedByInjectedText(r.endLineNumber), i.options.before&&this._onDidChangeDecorations.recordLineAffectedByInjectedText(r.startLineNumber)
  }
  _changeDecorationOptionsImpl(e, t){
    const i=this._decorations[e];
    if(!i)return;
    const r=!!(i.options.overviewRuler&&i.options.overviewRuler.color), s=!!(t.overviewRuler&&t.overviewRuler.color);
    if(this._onDidChangeDecorations.checkAffectedAndFire(i.options), this._onDidChangeDecorations.checkAffectedAndFire(t), i.options.after||t.after){
      const l=this._decorationsTree.getNodeRange(this,i);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(l.endLineNumber)
    }
    if(i.options.before||t.before){
      const l=this._decorationsTree.getNodeRange(this,i);
      this._onDidChangeDecorations.recordLineAffectedByInjectedText(l.startLineNumber)
    }
    const o=r!==s, a=LaA(t)!==qOo(i);
    o||a?(this._decorationsTree.delete(i), i.setOptions(t), this._decorationsTree.insert(i)):i.setOptions(t)
  }
  _deltaDecorationsImpl(e, t, i, r=!1){
    const s=this.getVersionId(), o=t.length;
    let a=0;
    const l=i.length;
    let u=0;
    this._onDidChangeDecorations.beginDeferredEmit();
    try{
      const d=new Array(l);
      for(;
      a<o||u<l;
      ){
        let m=null;
        if(a<o){
          do m=this._decorations[t[a++]];
          while(!m&&a<o);
          if(m){
            if(m.options.after){
              const p=this._decorationsTree.getNodeRange(this,m);
              this._onDidChangeDecorations.recordLineAffectedByInjectedText(p.endLineNumber)
            }
            if(m.options.before){
              const p=this._decorationsTree.getNodeRange(this,m);
              this._onDidChangeDecorations.recordLineAffectedByInjectedText(p.startLineNumber)
            }
            this._decorationsTree.delete(m),r||this._onDidChangeDecorations.checkAffectedAndFire(m.options)
          }
        }
        if(u<l){
          if(!m){
            const C=++this._lastDecorationId,x=`${this._instanceId};${C}`;
            m=new pOo(x,0,0),this._decorations[x]=m
          }
          const p=i[u],g=this._validateRangeRelaxedNoAllocations(p.range),f=Sfh(p.options),A=this._buffer.getOffsetAt(g.startLineNumber,g.startColumn),w=this._buffer.getOffsetAt(g.endLineNumber,g.endColumn);
          m.ownerId=e,m.reset(s,A,w,g),m.setOptions(f),m.options.after&&this._onDidChangeDecorations.recordLineAffectedByInjectedText(g.endLineNumber),m.options.before&&this._onDidChangeDecorations.recordLineAffectedByInjectedText(g.startLineNumber),r||this._onDidChangeDecorations.checkAffectedAndFire(f),this._decorationsTree.insert(m),d[u]=m.id,u++
        }
        else m&&delete this._decorations[m.id]
      }
      return d
    }
    finally{
      this._onDidChangeDecorations.endDeferredEmit()
    }
  }
  getLanguageId(){
    return this.tokenization.getLanguageId()
  }
  setLanguage(e, t){
    typeof e=="string"?(this._languageSelectionListener.clear(), this._setLanguage(e, t)):(this._languageSelectionListener.value=e.onDidChange(()=>this._setLanguage(e.languageId, t)), this._setLanguage(e.languageId, t))
  }
  _setLanguage(e, t){
    this.tokenization.setLanguageId(e, t), this._languageService.requestRichLanguageFeatures(e)
  }
  getLanguageIdAtPosition(e, t){
    return this.tokenization.getLanguageIdAtPosition(e, t)
  }
  getWordAtPosition(e){
    return this._tokenizationTextModelPart.getWordAtPosition(e)
  }
  getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(e){
    const t=this._tokenizationTextModelPart.getLineTokens(e.lineNumber), i=t.findTokenIndexAtOffset(e.column-1);
    return t.getStandardTokenType(i)
  }
  getWordUntilPosition(e){
    return this._tokenizationTextModelPart.getWordUntilPosition(e)
  }
  getWordsUntilPosition(e){
    return this._tokenizationTextModelPart.getWordsUntilPosition(e)
  }
  normalizePosition(e, t){
    return e
  }
  getLineIndentColumn(e){
    return $Oo(this.getLineContent(e))+1
  }
  toString(){
    return`TextModel(${this.uri.toString()})`
  }
}, N6=Fft=__decorate([__param(6, qB), __param(7, Jl), __param(8, JS), __param(9, FY), __param(10, ln), __param(11, Il), __param(12, fr)], N6), Bxc=class{
  constructor(){
    this._decorationsTree0=new mOn, this._decorationsTree1=new mOn, this._injectedTextDecorationsTree=new mOn
  }
  ensureAllNodesHaveRanges(n){
    this.getAll(n, 0, !1, !1, !1)
  }
  _ensureNodesHaveRanges(n, e){
    for(const t of e)t.range===null&&(t.range=n.getRangeAt(t.cachedAbsoluteStart, t.cachedAbsoluteEnd));
    return e
  }
  getAllInInterval(n, e, t, i, r, s){
    const o=n.getVersionId(), a=this._intervalSearch(e, t, i, r, o, s);
    return this._ensureNodesHaveRanges(n, a)
  }
  _intervalSearch(n, e, t, i, r, s){
    const o=this._decorationsTree0.intervalSearch(n, e, t, i, r, s), a=this._decorationsTree1.intervalSearch(n, e, t, i, r, s), l=this._injectedTextDecorationsTree.intervalSearch(n, e, t, i, r, s);
    return o.concat(a).concat(l)
  }
  getInjectedTextInInterval(n, e, t, i){
    const r=n.getVersionId(), s=this._injectedTextDecorationsTree.intervalSearch(e, t, i, !1, r, !1);
    return this._ensureNodesHaveRanges(n, s).filter(o=>o.options.showIfCollapsed||!o.range.isEmpty())
  }
  getAllInjectedText(n, e){
    const t=n.getVersionId(), i=this._injectedTextDecorationsTree.search(e, !1, t, !1);
    return this._ensureNodesHaveRanges(n, i).filter(r=>r.options.showIfCollapsed||!r.range.isEmpty())
  }
  getAll(n, e, t, i, r){
    const s=n.getVersionId(), o=this._search(e, t, i, s, r);
    return this._ensureNodesHaveRanges(n, o)
  }
  _search(n, e, t, i, r){
    if(t)return this._decorationsTree1.search(n, e, i, r);
    {
      const s=this._decorationsTree0.search(n,e,i,r),o=this._decorationsTree1.search(n,e,i,r),a=this._injectedTextDecorationsTree.search(n,e,i,r);
      return s.concat(o).concat(a)
    }
  }
  collectNodesFromOwner(n){
    const e=this._decorationsTree0.collectNodesFromOwner(n), t=this._decorationsTree1.collectNodesFromOwner(n), i=this._injectedTextDecorationsTree.collectNodesFromOwner(n);
    return e.concat(t).concat(i)
  }
  collectNodesPostOrder(){
    const n=this._decorationsTree0.collectNodesPostOrder(), e=this._decorationsTree1.collectNodesPostOrder(), t=this._injectedTextDecorationsTree.collectNodesPostOrder();
    return n.concat(e).concat(t)
  }
  insert(n){
    qOo(n)?this._injectedTextDecorationsTree.insert(n):Dxc(n)?this._decorationsTree1.insert(n):this._decorationsTree0.insert(n)
  }
  delete(n){
    qOo(n)?this._injectedTextDecorationsTree.delete(n):Dxc(n)?this._decorationsTree1.delete(n):this._decorationsTree0.delete(n)
  }
  getNodeRange(n, e){
    const t=n.getVersionId();
    return e.cachedVersionId!==t&&this._resolveNode(e, t), e.range===null&&(e.range=n.getRangeAt(e.cachedAbsoluteStart, e.cachedAbsoluteEnd)), e.range
  }
  _resolveNode(n, e){
    qOo(n)?this._injectedTextDecorationsTree.resolveNode(n, e):Dxc(n)?this._decorationsTree1.resolveNode(n, e):this._decorationsTree0.resolveNode(n, e)
  }
  acceptReplace(n, e, t, i){
    this._decorationsTree0.acceptReplace(n, e, t, i), this._decorationsTree1.acceptReplace(n, e, t, i), this._injectedTextDecorationsTree.acceptReplace(n, e, t, i)
  }
}, Rxc=class{
  constructor(n){
    this.color=n.color||"", this.darkColor=n.darkColor||""
  }
}, Ifh=class extends Rxc{
  constructor(n){
    super(n), this._resolvedColor=null, this.position=typeof n.position=="number"?n.position:Tx.Center
  }
  getColor(n){
    return this._resolvedColor||(n.type!=="light"&&this.darkColor?this._resolvedColor=this._resolveColor(this.darkColor, n):this._resolvedColor=this._resolveColor(this.color, n)), this._resolvedColor
  }
  invalidateCachedColor(){
    this._resolvedColor=null
  }
  _resolveColor(n, e){
    if(typeof n=="string")return n;
    const t=n?e.getColor(n.id):null;
    return t?t.toString():""
  }
}, Dfh=class{
  constructor(n){
    this.position=n?.position??G$.Center, this.persistLane=n?.persistLane
  }
}, Bfh=class extends Rxc{
  constructor(n){
    super(n), this.position=n.position, this.sectionHeaderStyle=n.sectionHeaderStyle??null, this.sectionHeaderText=n.sectionHeaderText??null
  }
  getColor(n){
    return this._resolvedColor||(n.type!=="light"&&this.darkColor?this._resolvedColor=this._resolveColor(this.darkColor, n):this._resolvedColor=this._resolveColor(this.color, n)), this._resolvedColor
  }
  invalidateCachedColor(){
    this._resolvedColor=void 0
  }
  _resolveColor(n, e){
    return typeof n=="string"?Xr.fromHex(n):e.getColor(n.id)
  }
}, WOt=class vad{
  static from(e){
    return e instanceof vad?e:new vad(e)
  }
  constructor(e){
    this.content=e.content||"", this.tokens=e.tokens??null, this.inlineClassName=e.inlineClassName||null, this.inlineClassNameAffectsLetterSpacing=e.inlineClassNameAffectsLetterSpacing||!1, this.attachedData=e.attachedData||null, this.cursorStops=e.cursorStops||null, this.order=e.order
  }
}, Zh=class Aad{
  static register(e){
    return new Aad(e)
  }
  static createDynamic(e){
    return new Aad(e)
  }
  constructor(e){
    this.description=e.description, this.blockClassName=e.blockClassName?hRe(e.blockClassName):null, this.blockDoesNotCollapse=e.blockDoesNotCollapse??null, this.blockIsAfterEnd=e.blockIsAfterEnd??null, this.blockPadding=e.blockPadding??null, this.stickiness=e.stickiness||0, this.zIndex=e.zIndex||0, this.className=e.className?hRe(e.className):null, this.shouldFillLineOnLineBreak=e.shouldFillLineOnLineBreak??null, this.hoverMessage=e.hoverMessage||null, this.glyphMarginHoverMessage=e.glyphMarginHoverMessage||null, this.lineNumberHoverMessage=e.lineNumberHoverMessage||null, this.isWholeLine=e.isWholeLine||!1, this.showIfCollapsed=e.showIfCollapsed||!1, this.collapseOnReplaceEdit=e.collapseOnReplaceEdit||!1, this.overviewRuler=e.overviewRuler?new Ifh(e.overviewRuler):null, this.minimap=e.minimap?new Bfh(e.minimap):null, this.glyphMargin=e.glyphMarginClassName?new Dfh(e.glyphMargin):null, this.glyphMarginClassName=e.glyphMarginClassName?hRe(e.glyphMarginClassName):null, this.linesDecorationsClassName=e.linesDecorationsClassName?hRe(e.linesDecorationsClassName):null, this.lineNumberClassName=e.lineNumberClassName?hRe(e.lineNumberClassName):null, this.linesDecorationsTooltip=e.linesDecorationsTooltip?xtA(e.linesDecorationsTooltip):null, this.firstLineDecorationClassName=e.firstLineDecorationClassName?hRe(e.firstLineDecorationClassName):null, this.marginClassName=e.marginClassName?hRe(e.marginClassName):null, this.inlineClassName=e.inlineClassName?hRe(e.inlineClassName):null, this.inlineClassNameAffectsLetterSpacing=e.inlineClassNameAffectsLetterSpacing||!1, this.beforeContentClassName=e.beforeContentClassName?hRe(e.beforeContentClassName):null, this.afterContentClassName=e.afterContentClassName?hRe(e.afterContentClassName):null, this.after=e.after?WOt.from(e.after):null, this.before=e.before?WOt.from(e.before):null, this.hideInCommentTokens=e.hideInCommentTokens??!1, this.hideInStringTokens=e.hideInStringTokens??!1
  }
}, Zh.EMPTY=Zh.register({
  description:"empty"
}), Pxc=[Zh.register({
  description:"tracked-range-always-grows-when-typing-at-edges", stickiness:0
}), Zh.register({
  description:"tracked-range-never-grows-when-typing-at-edges", stickiness:1
}), Zh.register({
  description:"tracked-range-grows-only-when-typing-before", stickiness:2
}), Zh.register({
  description:"tracked-range-grows-only-when-typing-after", stickiness:3
})], Rfh=class extends at{
  constructor(n){
    super(), this.handleBeforeFire=n, this._actual=this._register(new Qe), this.event=this._actual.event, this._affectedInjectedTextLines=null, this._deferredCnt=0, this._shouldFireDeferred=!1, this._affectsMinimap=!1, this._affectsOverviewRuler=!1, this._affectsGlyphMargin=!1, this._affectsLineNumber=!1
  }
  hasListeners(){
    return this._actual.hasListeners()
  }
  beginDeferredEmit(){
    this._deferredCnt++
  }
  endDeferredEmit(){
    this._deferredCnt--, this._deferredCnt===0&&(this._shouldFireDeferred&&this.doFire(), this._affectedInjectedTextLines?.clear(), this._affectedInjectedTextLines=null)
  }
  recordLineAffectedByInjectedText(n){
    this._affectedInjectedTextLines||(this._affectedInjectedTextLines=new Set), this._affectedInjectedTextLines.add(n)
  }
  checkAffectedAndFire(n){
    this._affectsMinimap||=!!n.minimap?.position, this._affectsOverviewRuler||=!!n.overviewRuler?.color, this._affectsGlyphMargin||=!!n.glyphMarginClassName, this._affectsLineNumber||=!!n.lineNumberClassName, this.tryFire()
  }
  fire(){
    this._affectsMinimap=!0, this._affectsOverviewRuler=!0, this._affectsGlyphMargin=!0, this.tryFire()
  }
  tryFire(){
    this._deferredCnt===0?this.doFire():this._shouldFireDeferred=!0
  }
  doFire(){
    this.handleBeforeFire(this._affectedInjectedTextLines);
    const n={
      affectsMinimap:this._affectsMinimap,affectsOverviewRuler:this._affectsOverviewRuler,affectsGlyphMargin:this._affectsGlyphMargin,affectsLineNumber:this._affectsLineNumber
    };
    this._shouldFireDeferred=!1, this._affectsMinimap=!1, this._affectsOverviewRuler=!1, this._affectsGlyphMargin=!1, this._actual.fire(n)
  }
}, Pfh=class extends at{
  constructor(){
    super(), this._fastEmitter=this._register(new Qe), this.fastEvent=this._fastEmitter.event, this._slowEmitter=this._register(new Qe), this.slowEvent=this._slowEmitter.event, this._deferredCnt=0, this._deferredEvent=null
  }
  hasListeners(){
    return this._fastEmitter.hasListeners()||this._slowEmitter.hasListeners()
  }
  beginDeferredEmit(){
    this._deferredCnt++
  }
  endDeferredEmit(n=null){
    if(this._deferredCnt--, this._deferredCnt===0&&this._deferredEvent!==null){
      this._deferredEvent.rawContentChangedEvent.resultingSelection=n;
      const e=this._deferredEvent;
      this._deferredEvent=null,this._fastEmitter.fire(e),this._slowEmitter.fire(e)
    }
  }
  fire(n){
    if(this._deferredCnt>0){
      this._deferredEvent?this._deferredEvent=this._deferredEvent.merge(n):this._deferredEvent=n;
      return
    }
    this._fastEmitter.fire(n), this._slowEmitter.fire(n)
  }
}, Lfh=class{
  constructor(n){
    this.model=n
  }
}
}
}), $u, Cm=