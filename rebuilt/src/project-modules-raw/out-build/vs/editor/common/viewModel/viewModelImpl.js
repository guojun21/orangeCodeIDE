// Module: out-build/vs/editor/common/viewModel/viewModelImpl.js
// Offset: 1413440 (bundle byte offset)
// Size: 23557 bytes

Vs(), vr(), xf(), rt(), _r(), oa(), pk(), Jxc(), Eoe(), tl(), ts(), Tft(), Tg(), WE(), LSe(), Uxc(), WaA(), Pbh(), Lte(), Mbh(), QOo(), VaA(), KaA(), Qbh=!0, jbh=class extends at{
  constructor(n, e, t, i, r, s, o, a, l, u){
    if(super(), this.languageConfigurationService=o, this._themeService=a, this._attachedView=l, this._transactionalTarget=u, this.hiddenAreasModel=new Kbh, this.previousHiddenAreas=[], this._editorId=n, this._configuration=e, this.model=t, this._eventDispatcher=new nbh, this.onEvent=this._eventDispatcher.onEvent, this.cursorConfig=new Yze(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._updateConfigurationViewLineCount=this._register(new Hu(()=>this._updateConfigurationViewLineCountNow(), 0)), this._hasFocus=!1, this._viewportStart=zbh.create(this.model), this.glyphLanes=new Gbh(0), Qbh&&this.model.isTooLargeForTokenization())this._lines=new Hbh(this.model);
    else{
      const d=this._configuration.options,m=d.get(52),p=d.get(144),g=d.get(152),f=d.get(143),A=d.get(134);
      this._lines=new Ubh(this._editorId,this.model,i,r,m,this.model.getOptions().tabSize,p,g.wrappingColumn,f,A)
    }
    this.coordinatesConverter=this._lines.createCoordinatesConverter(), this._cursor=this._register(new qxc(t, this, this.coordinatesConverter, this.cursorConfig)), this.viewLayout=this._register(new Bbh(this._configuration, this.getLineCount(), s)), this._register(this.viewLayout.onDidScroll(d=>{
      d.scrollTopChanged&&this._handleVisibleLinesChanged(),d.scrollTopChanged&&this._viewportStart.invalidate(),this._eventDispatcher.emitSingleViewEvent(new Yfh(d)),this._eventDispatcher.emitOutgoingEvent(new obh(d.oldScrollWidth,d.oldScrollLeft,d.oldScrollHeight,d.oldScrollTop,d.scrollWidth,d.scrollLeft,d.scrollHeight,d.scrollTop))
    })), this._register(this.viewLayout.onDidContentSizeChange(d=>{
      this._eventDispatcher.emitOutgoingEvent(d)
    })), this._decorations=new Nbh(this._editorId, this.model, this._configuration, this._lines, this.coordinatesConverter), this._registerModelEvents(), this._register(this._configuration.onDidChangeFast(d=>{
      try{
        const m=this._eventDispatcher.beginEmitViewEvents();
        this._onConfigurationChanged(m,d)
      }
      finally{
        this._eventDispatcher.endEmitViewEvents()
      }
    })), this._register(Kxc.getInstance().onDidChange(()=>{
      this._eventDispatcher.emitSingleViewEvent(new ebh)
    })), this._register(this._themeService.onDidColorThemeChange(d=>{
      this._invalidateDecorationsColorCache(),this._eventDispatcher.emitSingleViewEvent(new Zfh(d))
    })), this._updateConfigurationViewLineCountNow()
  }
  dispose(){
    super.dispose(), this._decorations.dispose(), this._lines.dispose(), this._viewportStart.dispose(), this._eventDispatcher.dispose()
  }
  createLineBreaksComputer(){
    return this._lines.createLineBreaksComputer()
  }
  addViewEventHandler(n){
    this._eventDispatcher.addViewEventHandler(n)
  }
  removeViewEventHandler(n){
    this._eventDispatcher.removeViewEventHandler(n)
  }
  _updateConfigurationViewLineCountNow(){
    this._configuration.setViewLineCount(this._lines.getViewLineCount())
  }
  getModelVisibleRanges(){
    const n=this.viewLayout.getLinesViewportData(), e=new Zt(n.startLineNumber, this.getLineMinColumn(n.startLineNumber), n.endLineNumber, this.getLineMaxColumn(n.endLineNumber));
    return this._toModelVisibleRanges(e)
  }
  visibleLinesStabilized(){
    const n=this.getModelVisibleRanges();
    this._attachedView.setVisibleLines(n, !0)
  }
  _handleVisibleLinesChanged(){
    const n=this.getModelVisibleRanges();
    this._attachedView.setVisibleLines(n, !1)
  }
  setHasFocus(n){
    this._hasFocus=n, this._cursor.setHasFocus(n), this._eventDispatcher.emitSingleViewEvent(new zfh(n)), this._eventDispatcher.emitOutgoingEvent(new $xc(!n, n))
  }
  setHasWidgetFocus(n){
    this._eventDispatcher.emitOutgoingEvent(new sbh(!n, n))
  }
  onCompositionStart(){
    this._eventDispatcher.emitSingleViewEvent(new Gfh)
  }
  onCompositionEnd(){
    this._eventDispatcher.emitSingleViewEvent(new Wfh)
  }
  _captureStableViewport(){
    if(this._viewportStart.isValid&&this.viewLayout.getCurrentScrollTop()>0){
      const n=new ar(this._viewportStart.viewLineNumber,this.getLineMinColumn(this._viewportStart.viewLineNumber)),e=this.coordinatesConverter.convertViewPositionToModelPosition(n);
      return new aTc(e,this._viewportStart.startLineDelta)
    }
    return new aTc(null, 0)
  }
  _onConfigurationChanged(n, e){
    const t=this._captureStableViewport(), i=this._configuration.options, r=i.get(52), s=i.get(144), o=i.get(152), a=i.get(143), l=i.get(134);
    this._lines.setWrappingSettings(r, s, o.wrappingColumn, a, l)&&(n.emitViewEvent(new FOn), n.emitViewEvent(new OOn), n.emitViewEvent(new FVe(null)), this._cursor.onLineMappingChanged(n), this._decorations.onLineMappingChanged(), this.viewLayout.onFlushed(this.getLineCount()), this._updateConfigurationViewLineCount.schedule()), e.hasChanged(96)&&(this._decorations.reset(), n.emitViewEvent(new FVe(null))), e.hasChanged(103)&&(this._decorations.reset(), n.emitViewEvent(new FVe(null))), n.emitViewEvent(new Qfh(e)), this.viewLayout.onConfigurationChanged(e), t.recoverViewportStart(this.coordinatesConverter, this.viewLayout), Yze.shouldRecreate(e)&&(this.cursorConfig=new Yze(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService), this._cursor.updateConfiguration(this.cursorConfig))
  }
  _registerModelEvents(){
    this._register(this.model.onDidChangeContentOrInjectedText(n=>{
      try{
        const t=this._eventDispatcher.beginEmitViewEvents();
        let i=!1,r=!1;
        const s=n instanceof COn?n.rawContentChangedEvent.changes:n.changes,o=n instanceof COn?n.rawContentChangedEvent.versionId:null,a=this._lines.createLineBreaksComputer();
        for(const d of s)switch(d.changeType){
          case 4:{
            for(let m=0;
            m<d.detail.length;
            m++){
              const p=d.detail[m];
              let g=d.injectedTexts[m];
              g&&(g=g.filter(f=>!f.ownerId||f.ownerId===this._editorId)),a.addRequest(p,g,null)
            }
            break
          }
          case 2:{
            let m=null;
            d.injectedText&&(m=d.injectedText.filter(p=>!p.ownerId||p.ownerId===this._editorId)),a.addRequest(d.detail,m,null);
            break
          }
        }
        const l=a.finalize(),u=new Ebe(l);
        for(const d of s)switch(d.changeType){
          case 1:{
            this._lines.onModelFlushed(),t.emitViewEvent(new FOn),this._decorations.reset(),this.viewLayout.onFlushed(this.getLineCount()),i=!0;
            break
          }
          case 3:{
            const m=this._lines.onModelLinesDeleted(o,d.fromLineNumber,d.toLineNumber);
            m!==null&&(t.emitViewEvent(m),this.viewLayout.onLinesDeleted(m.fromLineNumber,m.toLineNumber)),i=!0;
            break
          }
          case 4:{
            const m=u.takeCount(d.detail.length),p=this._lines.onModelLinesInserted(o,d.fromLineNumber,d.toLineNumber,m);
            p!==null&&(t.emitViewEvent(p),this.viewLayout.onLinesInserted(p.fromLineNumber,p.toLineNumber)),i=!0;
            break
          }
          case 2:{
            const m=u.dequeue(),[p,g,f,A]=this._lines.onModelLineChanged(o,d.lineNumber,m);
            r=p,g&&t.emitViewEvent(g),f&&(t.emitViewEvent(f),this.viewLayout.onLinesInserted(f.fromLineNumber,f.toLineNumber)),A&&(t.emitViewEvent(A),this.viewLayout.onLinesDeleted(A.fromLineNumber,A.toLineNumber));
            break
          }
          case 5:break
        }
        o!==null&&this._lines.acceptVersionId(o),this.viewLayout.onHeightMaybeChanged(),!i&&r&&(t.emitViewEvent(new OOn),t.emitViewEvent(new FVe(null)),this._cursor.onLineMappingChanged(t),this._decorations.onLineMappingChanged())
      }
      finally{
        this._eventDispatcher.endEmitViewEvents()
      }
      const e=this._viewportStart.isValid;
      if(this._viewportStart.invalidate(),this._configuration.setModelLineCount(this.model.getLineCount()),this._updateConfigurationViewLineCountNow(),!this._hasFocus&&this.model.getAttachedEditorCount()>=2&&e){
        const t=this.model._getTrackedRange(this._viewportStart.modelTrackedRange);
        if(t){
          const i=this.coordinatesConverter.convertModelPositionToViewPosition(t.getStartPosition()),r=this.viewLayout.getVerticalOffsetForLineNumber(i.lineNumber);
          this.viewLayout.setScrollPosition({
            scrollTop:r+this._viewportStart.startLineDelta
          },1)
        }
      }
      try{
        const t=this._eventDispatcher.beginEmitViewEvents();
        n instanceof COn&&t.emitOutgoingEvent(new pbh(n.contentChangedEvent)),this._cursor.onModelContentChanged(t,n)
      }
      finally{
        this._eventDispatcher.endEmitViewEvents()
      }
      this._handleVisibleLinesChanged()
    })), this._register(this.model.onDidChangeTokens(n=>{
      const e=[];
      for(let t=0,i=n.ranges.length;
      t<i;
      t++){
        const r=n.ranges[t],s=this.coordinatesConverter.convertModelPositionToViewPosition(new ar(r.fromLineNumber,1)).lineNumber,o=this.coordinatesConverter.convertModelPositionToViewPosition(new ar(r.toLineNumber,this.model.getLineMaxColumn(r.toLineNumber))).lineNumber;
        e[t]={
          fromLineNumber:s,toLineNumber:o
        }
      }
      this._eventDispatcher.emitSingleViewEvent(new Xfh(e)),this._eventDispatcher.emitOutgoingEvent(new fbh(n))
    })), this._register(this.model.onDidChangeLanguageConfiguration(n=>{
      this._eventDispatcher.emitSingleViewEvent(new Vfh),this.cursorConfig=new Yze(this.model.getLanguageId(),this.model.getOptions(),this._configuration,this.languageConfigurationService),this._cursor.updateConfiguration(this.cursorConfig),this._eventDispatcher.emitOutgoingEvent(new mbh(n))
    })), this._register(this.model.onDidChangeLanguage(n=>{
      this.cursorConfig=new Yze(this.model.getLanguageId(),this.model.getOptions(),this._configuration,this.languageConfigurationService),this._cursor.updateConfiguration(this.cursorConfig),this._eventDispatcher.emitOutgoingEvent(new hbh(n))
    })), this._register(this.model.onDidChangeOptions(n=>{
      if(this._lines.setTabSize(this.model.getOptions().tabSize)){
        try{
          const e=this._eventDispatcher.beginEmitViewEvents();
          e.emitViewEvent(new FOn),e.emitViewEvent(new OOn),e.emitViewEvent(new FVe(null)),this._cursor.onLineMappingChanged(e),this._decorations.onLineMappingChanged(),this.viewLayout.onFlushed(this.getLineCount())
        }
        finally{
          this._eventDispatcher.endEmitViewEvents()
        }
        this._updateConfigurationViewLineCount.schedule()
      }
      this.cursorConfig=new Yze(this.model.getLanguageId(),this.model.getOptions(),this._configuration,this.languageConfigurationService),this._cursor.updateConfiguration(this.cursorConfig),this._eventDispatcher.emitOutgoingEvent(new gbh(n))
    })), this._register(this.model.onDidChangeDecorations(n=>{
      this._decorations.onModelDecorationsChanged(),this._eventDispatcher.emitSingleViewEvent(new FVe(n)),this._eventDispatcher.emitOutgoingEvent(new dbh(n))
    }))
  }
  setHiddenAreas(n, e, t){
    this.hiddenAreasModel.setHiddenAreas(e, n);
    const i=this.hiddenAreasModel.getMergedRanges();
    if(i===this.previousHiddenAreas&&!t)return;
    this.previousHiddenAreas=i;
    const r=this._captureStableViewport();
    let s=!1;
    try{
      const o=this._eventDispatcher.beginEmitViewEvents();
      s=this._lines.setHiddenAreas(i),s&&(o.emitViewEvent(new FOn),o.emitViewEvent(new OOn),o.emitViewEvent(new FVe(null)),this._cursor.onLineMappingChanged(o),this._decorations.onLineMappingChanged(),this.viewLayout.onFlushed(this.getLineCount()),this.viewLayout.onHeightMaybeChanged());
      const a=r.viewportStartModelPosition?.lineNumber;
      a&&i.some(u=>u.startLineNumber<=a&&a<=u.endLineNumber)||r.recoverViewportStart(this.coordinatesConverter,this.viewLayout)
    }
    finally{
      this._eventDispatcher.endEmitViewEvents()
    }
    this._updateConfigurationViewLineCount.schedule(), s&&this._eventDispatcher.emitOutgoingEvent(new cbh)
  }
  getVisibleRangesPlusViewportAboveBelow(){
    const n=this._configuration.options.get(151), e=this._configuration.options.get(68), t=Math.max(20, Math.round(n.height/e)), i=this.viewLayout.getLinesViewportData(), r=Math.max(1, i.completelyVisibleStartLineNumber-t), s=Math.min(this.getLineCount(), i.completelyVisibleEndLineNumber+t);
    return this._toModelVisibleRanges(new Zt(r, this.getLineMinColumn(r), s, this.getLineMaxColumn(s)))
  }
  getVisibleRanges(){
    const n=this.getCompletelyVisibleViewRange();
    return this._toModelVisibleRanges(n)
  }
  getHiddenAreas(){
    return this._lines.getHiddenAreas()
  }
  _toModelVisibleRanges(n){
    const e=this.coordinatesConverter.convertViewRangeToModelRange(n), t=this._lines.getHiddenAreas();
    if(t.length===0)return[e];
    const i=[];
    let r=0, s=e.startLineNumber, o=e.startColumn;
    const a=e.endLineNumber, l=e.endColumn;
    for(let u=0, d=t.length;
    u<d;
    u++){
      const m=t[u].startLineNumber,p=t[u].endLineNumber;
      p<s||m>a||(s<m&&(i[r++]=new Zt(s,o,m-1,this.model.getLineMaxColumn(m-1))),s=p+1,o=1)
    }
    return(s<a||s===a&&o<l)&&(i[r++]=new Zt(s, o, a, l)), i
  }
  getCompletelyVisibleViewRange(){
    const n=this.viewLayout.getLinesViewportData(), e=n.completelyVisibleStartLineNumber, t=n.completelyVisibleEndLineNumber;
    return new Zt(e, this.getLineMinColumn(e), t, this.getLineMaxColumn(t))
  }
  getCompletelyVisibleViewRangeAtScrollTop(n){
    const e=this.viewLayout.getLinesViewportDataAtScrollTop(n), t=e.completelyVisibleStartLineNumber, i=e.completelyVisibleEndLineNumber;
    return new Zt(t, this.getLineMinColumn(t), i, this.getLineMaxColumn(i))
  }
  saveState(){
    const n=this.viewLayout.saveState(), e=n.scrollTop, t=this.viewLayout.getLineNumberAtVerticalOffset(e), i=this.coordinatesConverter.convertViewPositionToModelPosition(new ar(t, this.getLineMinColumn(t))), r=this.viewLayout.getVerticalOffsetForLineNumber(t)-e;
    return{
      scrollLeft:n.scrollLeft,firstPosition:i,firstPositionDeltaTop:r
    }
  }
  reduceRestoreState(n){
    if(typeof n.firstPosition>"u")return this._reduceRestoreStateCompatibility(n);
    const e=this.model.validatePosition(n.firstPosition), t=this.coordinatesConverter.convertModelPositionToViewPosition(e), i=this.viewLayout.getVerticalOffsetForLineNumber(t.lineNumber)-n.firstPositionDeltaTop;
    return{
      scrollLeft:n.scrollLeft,scrollTop:i
    }
  }
  _reduceRestoreStateCompatibility(n){
    return{
      scrollLeft:n.scrollLeft,scrollTop:n.scrollTopWithoutViewZones
    }
  }
  getTabSize(){
    return this.model.getOptions().tabSize
  }
  getLineCount(){
    return this._lines.getViewLineCount()
  }
  setViewport(n, e, t){
    this._viewportStart.update(this, n)
  }
  getActiveIndentGuide(n, e, t){
    return this._lines.getActiveIndentGuide(n, e, t)
  }
  getLinesIndentGuides(n, e){
    return this._lines.getViewLinesIndentGuides(n, e)
  }
  getBracketGuidesInRangeByLine(n, e, t, i){
    return this._lines.getViewLinesBracketGuides(n, e, t, i)
  }
  getLineContent(n){
    return this._lines.getViewLineContent(n)
  }
  getLineLength(n){
    return this._lines.getViewLineLength(n)
  }
  getLineMinColumn(n){
    return this._lines.getViewLineMinColumn(n)
  }
  getLineMaxColumn(n){
    return this._lines.getViewLineMaxColumn(n)
  }
  getLineFirstNonWhitespaceColumn(n){
    const e=TH(this.getLineContent(n));
    return e===-1?0:e+1
  }
  getLineLastNonWhitespaceColumn(n){
    const e=mde(this.getLineContent(n));
    return e===-1?0:e+2
  }
  getMinimapDecorationsInRange(n){
    return this._decorations.getMinimapDecorationsInRange(n)
  }
  getDecorationsInViewport(n){
    return this._decorations.getDecorationsViewportData(n).decorations
  }
  getInjectedTextAt(n){
    return this._lines.getInjectedTextAt(n)
  }
  getViewportViewLineRenderingData(n, e){
    const i=this._decorations.getDecorationsViewportData(n).inlineDecorations[e-n.startLineNumber];
    return this._getViewLineRenderingData(e, i)
  }
  getViewLineRenderingData(n){
    const e=this._decorations.getInlineDecorationsOnLine(n);
    return this._getViewLineRenderingData(n, e)
  }
  _getViewLineRenderingData(n, e){
    const t=this.model.mightContainRTL(), i=this.model.mightContainNonBasicASCII(), r=this.getTabSize(), s=this._lines.getViewLineData(n);
    return s.inlineDecorations&&(e=[...e, ...s.inlineDecorations.map(o=>o.toInlineDecoration(n))]), new zOt(s.minColumn, s.maxColumn, s.content, s.continuesWithWrappedLine, t, i, s.tokens, e, r, s.startVisibleColumn)
  }
  getViewLineData(n){
    return this._lines.getViewLineData(n)
  }
  getMinimapLinesRenderingData(n, e, t){
    const i=this._lines.getViewLinesData(n, e, t);
    return new Ebh(this.getTabSize(), i)
  }
  getAllOverviewRulerDecorations(n){
    const e=this.model.getOverviewRulerDecorations(this._editorId, K4o(this._configuration.options)), t=new Vbh;
    for(const i of e){
      const r=i.options,s=r.overviewRuler;
      if(!s)continue;
      const o=s.position;
      if(o===0)continue;
      const a=s.getColor(n.value),l=this.coordinatesConverter.getViewLineNumberOfModelPosition(i.range.startLineNumber,i.range.startColumn),u=this.coordinatesConverter.getViewLineNumberOfModelPosition(i.range.endLineNumber,i.range.endColumn);
      t.accept(a,r.zIndex,l,u,o)
    }
    return t.asArray
  }
  _invalidateDecorationsColorCache(){
    const n=this.model.getOverviewRulerDecorations();
    for(const e of n)e.options.overviewRuler?.invalidateCachedColor(), e.options.minimap?.invalidateCachedColor()
  }
  getValueInRange(n, e){
    const t=this.coordinatesConverter.convertViewRangeToModelRange(n);
    return this.model.getValueInRange(t, e)
  }
  getValueLengthInRange(n, e){
    const t=this.coordinatesConverter.convertViewRangeToModelRange(n);
    return this.model.getValueLengthInRange(t, e)
  }
  modifyPosition(n, e){
    const t=this.coordinatesConverter.convertViewPositionToModelPosition(n), i=this.model.modifyPosition(t, e);
    return this.coordinatesConverter.convertModelPositionToViewPosition(i)
  }
  deduceModelPositionRelativeToViewPosition(n, e, t){
    const i=this.coordinatesConverter.convertViewPositionToModelPosition(n);
    this.model.getEOL().length===2&&(e<0?e-=t:e+=t);
    const s=this.model.getOffsetAt(i)+e;
    return this.model.getPositionAt(s)
  }
  getPlainTextToCopy(n, e, t){
    const i=t?`\r
`:this.model.getEOL();
    n=n.slice(0), n.sort(Zt.compareRangesUsingStarts);
    let r=!1, s=!1;
    for(const a of n)a.isEmpty()?r=!0:s=!0;
    if(!s){
      if(!e)return"";
      const a=n.map(u=>u.startLineNumber);
      let l="";
      for(let u=0;
      u<a.length;
      u++)u>0&&a[u-1]===a[u]||(l+=this.model.getLineContent(a[u])+i);
      return l
    }
    if(r&&e){
      const a=[];
      let l=0;
      for(const u of n){
        const d=u.startLineNumber;
        u.isEmpty()?d!==l&&a.push(this.model.getLineContent(d)):a.push(this.model.getValueInRange(u,t?2:0)),l=d
      }
      return a.length===1?a[0]:a
    }
    const o=[];
    for(const a of n)a.isEmpty()||o.push(this.model.getValueInRange(a, t?2:0));
    return o.length===1?o[0]:o
  }
  getRichTextToCopy(n, e){
    const t=this.model.getLanguageId();
    if(t===o_||n.length!==1)return null;
    let i=n[0];
    if(i.isEmpty()){
      if(!e)return null;
      const u=i.startLineNumber;
      i=new Zt(u,this.model.getLineMinColumn(u),u,this.model.getLineMaxColumn(u))
    }
    const r=this._configuration.options.get(52), s=this._getColorMap(), a=/[:;
    \\\/<>]/.test(r.fontFamily)||r.fontFamily===jI.fontFamily;
    let l;
    return a?l=jI.fontFamily:(l=r.fontFamily, l=l.replace(/"/g,"'"),/[,']/.test(l)||/[+ ]/.test(l)&&(l=`'${l}'`), l=`${l}, ${jI.fontFamily}`), {
      mode:t,html:`<div style="color: ${s[1]};background-color: ${s[2]};font-family: ${l};font-weight: ${r.fontWeight};font-size: ${r.fontSize}px;line-height: ${r.lineHeight}px;white-space: pre;">`+this._getHTMLToCopy(i,s)+"</div>"
    }
  }
  _getHTMLToCopy(n, e){
    const t=n.startLineNumber, i=n.startColumn, r=n.endLineNumber, s=n.endColumn, o=this.getTabSize();
    let a="";
    for(let l=t;
    l<=r;
    l++){
      const u=this.model.tokenization.getLineTokens(l),d=u.getLineContent(),m=l===t?i-1:0,p=l===r?s-1:d.length;
      d===""?a+="<br>":a+=ybh(d,u.inflate(),e,m,p,o,Sc)
    }
    return a
  }
  _getColorMap(){
    const n=pT.getColorMap(), e=["#000000"];
    if(n)for(let t=1, i=n.length;
    t<i;
    t++)e[t]=Xr.Format.CSS.formatHex(n[t]);
    return e
  }
  getPrimaryCursorState(){
    return this._cursor.getPrimaryCursorState()
  }
  getLastAddedCursorIndex(){
    return this._cursor.getLastAddedCursorIndex()
  }
  getCursorStates(){
    return this._cursor.getCursorStates()
  }
  setCursorStates(n, e, t){
    return this._withViewEventsCollector(i=>this._cursor.setStates(i, n, e, t))
  }
  getCursorColumnSelectData(){
    return this._cursor.getCursorColumnSelectData()
  }
  getCursorAutoClosedCharacters(){
    return this._cursor.getAutoClosedCharacters()
  }
  setCursorColumnSelectData(n){
    this._cursor.setCursorColumnSelectData(n)
  }
  getPrevEditOperationType(){
    return this._cursor.getPrevEditOperationType()
  }
  setPrevEditOperationType(n){
    this._cursor.setPrevEditOperationType(n)
  }
  getSelection(){
    return this._cursor.getSelection()
  }
  getSelections(){
    return this._cursor.getSelections()
  }
  getPosition(){
    return this._cursor.getPrimaryCursorState().modelState.position
  }
  setSelections(n, e, t=0){
    this._withViewEventsCollector(i=>this._cursor.setSelections(i, n, e, t))
  }
  saveCursorState(){
    return this._cursor.saveState()
  }
  restoreCursorState(n){
    this._withViewEventsCollector(e=>this._cursor.restoreState(e, n))
  }
  _executeCursorEdit(n){
    if(this._cursor.context.cursorConfig.readOnly){
      this._eventDispatcher.emitOutgoingEvent(new ubh);
      return
    }
    this._withViewEventsCollector(n)
  }
  executeEdits(n, e, t){
    this._executeCursorEdit(i=>this._cursor.executeEdits(i, n, e, t))
  }
  startComposition(){
    this._executeCursorEdit(n=>this._cursor.startComposition(n))
  }
  endComposition(n){
    this._executeCursorEdit(e=>this._cursor.endComposition(e, n))
  }
  type(n, e){
    this._executeCursorEdit(t=>this._cursor.type(t, n, e))
  }
  compositionType(n, e, t, i, r){
    this._executeCursorEdit(s=>this._cursor.compositionType(s, n, e, t, i, r))
  }
  paste(n, e, t, i){
    this._executeCursorEdit(r=>this._cursor.paste(r, n, e, t, i))
  }
  cut(n){
    this._executeCursorEdit(e=>this._cursor.cut(e, n))
  }
  executeCommand(n, e){
    this._executeCursorEdit(t=>this._cursor.executeCommand(t, n, e))
  }
  executeCommands(n, e){
    this._executeCursorEdit(t=>this._cursor.executeCommands(t, n, e))
  }
  revealAllCursors(n, e, t=!1){
    this._withViewEventsCollector(i=>this._cursor.revealAll(i, n, t, 0, e, 0))
  }
  revealPrimaryCursor(n, e, t=!1){
    this._withViewEventsCollector(i=>this._cursor.revealPrimary(i, n, t, 0, e, 0))
  }
  revealTopMostCursor(n){
    const e=this._cursor.getTopMostViewPosition(), t=new Zt(e.lineNumber, e.column, e.lineNumber, e.column);
    this._withViewEventsCollector(i=>i.emitViewEvent(new jOt(n, !1, t, null, 0, !0, 0)))
  }
  revealBottomMostCursor(n){
    const e=this._cursor.getBottomMostViewPosition(), t=new Zt(e.lineNumber, e.column, e.lineNumber, e.column);
    this._withViewEventsCollector(i=>i.emitViewEvent(new jOt(n, !1, t, null, 0, !0, 0)))
  }
  revealRange(n, e, t, i, r){
    this._withViewEventsCollector(s=>s.emitViewEvent(new jOt(n, !1, t, null, i, e, r)))
  }
  changeWhitespace(n){
    this.viewLayout.changeWhitespace(n)&&(this._eventDispatcher.emitSingleViewEvent(new tbh), this._eventDispatcher.emitOutgoingEvent(new abh))
  }
  _withViewEventsCollector(n){
    return this._transactionalTarget.batchChanges(()=>{
      try{
        const e=this._eventDispatcher.beginEmitViewEvents();
        return n(e)
      }
      finally{
        this._eventDispatcher.endEmitViewEvents()
      }
    })
  }
  batchEvents(n){
    this._withViewEventsCollector(()=>{
      n()
    })
  }
  normalizePosition(n, e){
    return this._lines.normalizePosition(n, e)
  }
  getLineIndentColumn(n){
    return this._lines.getLineIndentColumn(n)
  }
}, zbh=class dGb{
  static create(e){
    const t=e._setTrackedRange(null, new Zt(1, 1, 1, 1), 1);
    return new dGb(e, 1, !1, t, 0)
  }
  get viewLineNumber(){
    return this._viewLineNumber
  }
  get isValid(){
    return this._isValid
  }
  get modelTrackedRange(){
    return this._modelTrackedRange
  }
  get startLineDelta(){
    return this._startLineDelta
  }
  constructor(e, t, i, r, s){
    this._model=e, this._viewLineNumber=t, this._isValid=i, this._modelTrackedRange=r, this._startLineDelta=s
  }
  dispose(){
    this._model._setTrackedRange(this._modelTrackedRange, null, 1)
  }
  update(e, t){
    const i=e.coordinatesConverter.convertViewPositionToModelPosition(new ar(t, e.getLineMinColumn(t))), r=e.model._setTrackedRange(this._modelTrackedRange, new Zt(i.lineNumber, i.column, i.lineNumber, i.column), 1), s=e.viewLayout.getVerticalOffsetForLineNumber(t), o=e.viewLayout.getCurrentScrollTop();
    this._viewLineNumber=t, this._isValid=!0, this._modelTrackedRange=r, this._startLineDelta=o-s
  }
  invalidate(){
    this._isValid=!1
  }
}, Vbh=class{
  constructor(){
    this._asMap=Object.create(null), this.asArray=[]
  }
  accept(n, e, t, i, r){
    const s=this._asMap[n];
    if(s){
      const o=s.data,a=o[o.length-3],l=o[o.length-1];
      if(a===r&&l+1>=t){
        i>l&&(o[o.length-1]=i);
        return
      }
      o.push(r,t,i)
    }
    else{
      const o=new KOo(n,e,[r,t,i]);
      this._asMap[n]=o,this.asArray.push(o)
    }
  }
}, Kbh=class{
  constructor(){
    this.hiddenAreas=new Map, this.shouldRecompute=!1, this.ranges=[]
  }
  setHiddenAreas(n, e){
    const t=this.hiddenAreas.get(n);
    t&&Wbh(t, e)||(this.hiddenAreas.set(n, e), this.shouldRecompute=!0)
  }
  getMergedRanges(){
    if(!this.shouldRecompute)return this.ranges;
    this.shouldRecompute=!1;
    const n=Array.from(this.hiddenAreas.values()).reduce((e, t)=>YaA(e, t), []);
    return Wbh(this.ranges, n)?this.ranges:(this.ranges=n, this.ranges)
  }
}, aTc=class{
  constructor(n, e){
    this.viewportStartModelPosition=n, this.startLineDelta=e
  }
  recoverViewportStart(n, e){
    if(!this.viewportStartModelPosition)return;
    const t=n.convertModelPositionToViewPosition(this.viewportStartModelPosition), i=e.getVerticalOffsetForLineNumber(t.lineNumber);
    e.setScrollPosition({
      scrollTop:i+this.startLineDelta
    }, 1)
  }
}
}
});
function Woe(n){
  return typeof n=="number"?`${n}px`:n
}
function mw(n){
  return new qH(n)
}
var qH, sI=