// Module: out-build/vs/editor/common/cursor/cursor.js
// Offset: 1334256 (bundle byte offset)
// Size: 16999 bytes

_s(), oa(), UaA(), Eoe(), $aA(), WFo(), A4o(), v4o(), ts(), db(), Tft(), Uxc(), rt(), QOo(), qxc=class extends at{
  constructor(n, e, t, i){
    super(), this._model=n, this._knownModelVersionId=this._model.getVersionId(), this._viewModel=e, this._coordinatesConverter=t, this.context=new Fxc(this._model, this._viewModel, this._coordinatesConverter, i), this._cursors=new Mxc(this.context), this._hasFocus=!1, this._isHandling=!1, this._compositionState=null, this._columnSelectData=null, this._autoClosedActions=[], this._prevEditOperationType=0
  }
  dispose(){
    this._cursors.dispose(), this._autoClosedActions=Bo(this._autoClosedActions), super.dispose()
  }
  updateConfiguration(n){
    this.context=new Fxc(this._model, this._viewModel, this._coordinatesConverter, n), this._cursors.updateContext(this.context)
  }
  onLineMappingChanged(n){
    this._knownModelVersionId===this._model.getVersionId()&&this.setStates(n, "viewModel", 0, this.getCursorStates())
  }
  setHasFocus(n){
    this._hasFocus=n
  }
  _validateAutoClosedActions(){
    if(this._autoClosedActions.length>0){
      const n=this._cursors.getSelections();
      for(let e=0;
      e<this._autoClosedActions.length;
      e++){
        const t=this._autoClosedActions[e];
        t.isValid(n)||(t.dispose(),this._autoClosedActions.splice(e,1),e--)
      }
    }
  }
  getPrimaryCursorState(){
    return this._cursors.getPrimaryCursor()
  }
  getLastAddedCursorIndex(){
    return this._cursors.getLastAddedCursorIndex()
  }
  getCursorStates(){
    return this._cursors.getAll()
  }
  setStates(n, e, t, i){
    let r=!1;
    const s=this.context.cursorConfig.multiCursorLimit;
    i!==null&&i.length>s&&(i=i.slice(0, s), r=!0);
    const o=jOo.from(this._model, this);
    return this._cursors.setStates(i), this._cursors.normalize(), this._columnSelectData=null, this._validateAutoClosedActions(), this._emitStateChangedIfNecessary(n, e, t, o, r)
  }
  setCursorColumnSelectData(n){
    this._columnSelectData=n
  }
  revealAll(n, e, t, i, r, s){
    const o=this._cursors.getViewPositions();
    let a=null, l=null;
    o.length>1?l=this._cursors.getViewSelections():a=Zt.fromPositions(o[0], o[0]), n.emitViewEvent(new jOt(e, t, a, l, i, r, s))
  }
  revealPrimary(n, e, t, i, r, s){
    const a=[this._cursors.getPrimaryCursor().viewState.selection];
    n.emitViewEvent(new jOt(e, t, null, a, i, r, s))
  }
  saveState(){
    const n=[], e=this._cursors.getSelections();
    for(let t=0, i=e.length;
    t<i;
    t++){
      const r=e[t];
      n.push({
        inSelectionMode:!r.isEmpty(),selectionStart:{
          lineNumber:r.selectionStartLineNumber,column:r.selectionStartColumn
        },position:{
          lineNumber:r.positionLineNumber,column:r.positionColumn
        }
      })
    }
    return n
  }
  restoreState(n, e){
    const t=[];
    for(let i=0, r=e.length;
    i<r;
    i++){
      const s=e[i];
      let o=1,a=1;
      s.position&&s.position.lineNumber&&(o=s.position.lineNumber),s.position&&s.position.column&&(a=s.position.column);
      let l=o,u=a;
      s.selectionStart&&s.selectionStart.lineNumber&&(l=s.selectionStart.lineNumber),s.selectionStart&&s.selectionStart.column&&(u=s.selectionStart.column),t.push({
        selectionStartLineNumber:l,selectionStartColumn:u,positionLineNumber:o,positionColumn:a
      })
    }
    this.setStates(n, "restoreState", 0, s_.fromModelSelections(t)), this.revealAll(n, "restoreState", !1, 0, !0, 1)
  }
  onModelContentChanged(n, e){
    if(e instanceof vxc){
      if(this._isHandling)return;
      this._isHandling=!0;
      try{
        this.setStates(n,"modelChange",0,this.getCursorStates())
      }
      finally{
        this._isHandling=!1
      }
    }
    else{
      const t=e.rawContentChangedEvent;
      if(this._knownModelVersionId=t.versionId,this._isHandling)return;
      const i=t.containsEvent(1);
      if(this._prevEditOperationType=0,i)this._cursors.dispose(),this._cursors=new Mxc(this.context),this._validateAutoClosedActions(),this._emitStateChangedIfNecessary(n,"model",1,null,!1);
      else if(this._hasFocus&&t.resultingSelection&&t.resultingSelection.length>0){
        const r=s_.fromModelSelections(t.resultingSelection);
        this.setStates(n,"modelChange",t.isUndoing?5:t.isRedoing?6:2,r)&&this.revealAll(n,"modelChange",!1,0,!0,0)
      }
      else{
        const r=this._cursors.readSelectionFromMarkers();
        this.setStates(n,"modelChange",2,s_.fromModelSelections(r))
      }
    }
  }
  getSelection(){
    return this._cursors.getPrimaryCursor().modelState.selection
  }
  getTopMostViewPosition(){
    return this._cursors.getTopMostViewPosition()
  }
  getBottomMostViewPosition(){
    return this._cursors.getBottomMostViewPosition()
  }
  getCursorColumnSelectData(){
    if(this._columnSelectData)return this._columnSelectData;
    const n=this._cursors.getPrimaryCursor(), e=n.viewState.selectionStart.getStartPosition(), t=n.viewState.position;
    return{
      isReal:!1,fromViewLineNumber:e.lineNumber,fromViewVisualColumn:this.context.cursorConfig.visibleColumnFromColumn(this._viewModel,e),toViewLineNumber:t.lineNumber,toViewVisualColumn:this.context.cursorConfig.visibleColumnFromColumn(this._viewModel,t)
    }
  }
  getSelections(){
    return this._cursors.getSelections()
  }
  getPosition(){
    return this._cursors.getPrimaryCursor().modelState.position
  }
  setSelections(n, e, t, i){
    this.setStates(n, e, i, s_.fromModelSelections(t))
  }
  getPrevEditOperationType(){
    return this._prevEditOperationType
  }
  setPrevEditOperationType(n){
    this._prevEditOperationType=n
  }
  _pushAutoClosedAction(n, e){
    const t=[], i=[];
    for(let o=0, a=n.length;
    o<a;
    o++)t.push({
      range:n[o],options:{
        description:"auto-closed-character",inlineClassName:"auto-closed-character",stickiness:1
      }
    }), i.push({
      range:e[o],options:{
        description:"auto-closed-enclosing",stickiness:1
      }
    });
    const r=this._model.deltaDecorations([], t), s=this._model.deltaDecorations([], i);
    this._autoClosedActions.push(new Hxc(this._model, r, s))
  }
  _executeEditOperation(n){
    if(!n)return;
    n.shouldPushStackElementBefore&&this._model.pushStackElement();
    const e=UOn.executeCommands(this._model, this._cursors.getSelections(), n.commands);
    if(e){
      this._interpretCommandResult(e);
      const t=[],i=[];
      for(let r=0;
      r<n.commands.length;
      r++){
        const s=n.commands[r];
        s instanceof b4o&&s.enclosingRange&&s.closeCharacterRange&&(t.push(s.closeCharacterRange),i.push(s.enclosingRange))
      }
      t.length>0&&this._pushAutoClosedAction(t,i),this._prevEditOperationType=n.type
    }
    n.shouldPushStackElementAfter&&this._model.pushStackElement()
  }
  _interpretCommandResult(n){
    (!n||n.length===0)&&(n=this._cursors.readSelectionFromMarkers()), this._columnSelectData=null, this._cursors.setSelections(n), this._cursors.normalize()
  }
  _emitStateChangedIfNecessary(n, e, t, i, r){
    const s=jOo.from(this._model, this);
    if(s.equals(i))return!1;
    const o=this._cursors.getSelections(), a=this._cursors.getViewSelections();
    if(n.emitViewEvent(new jfh(a, o, t)), !i||i.cursorState.length!==s.cursorState.length||s.cursorState.some((l, u)=>!l.modelState.equals(i.cursorState[u].modelState))){
      const l=i?i.cursorState.map(d=>d.modelState.selection):null,u=i?i.modelVersionId:0;
      n.emitOutgoingEvent(new lbh(l,o,u,s.modelVersionId,e||"keyboard",t,r))
    }
    return!0
  }
  _findAutoClosingPairs(n){
    if(!n.length)return null;
    const e=[];
    for(let t=0, i=n.length;
    t<i;
    t++){
      const r=n[t];
      if(!r.text||r.text.indexOf(`
`)>=0)return null;
      const s=r.text.match(/([)\]
    }
    >'"`])([^)\]}>'"`]*)$/);if(!s)return null;const o=s[1],a=this.context.cursorConfig.autoClosingPairs.autoClosingPairsCloseSingleChar.get(o);if(!a||a.length!==1)return null;const l=a[0].open,u=r.text.length-s[2].length-1,d=r.text.lastIndexOf(l,u-1);if(d===-1)return null;e.push([d,u])}return e}executeEdits(n,e,t,i){let r=null;e==="snippet"&&(r=this._findAutoClosingPairs(t)),r&&(t[0]._isTracked=!0);const s=[],o=[],a=this._model.pushEditOperations(this.getSelections(),t,l=>{if(r)for(let d=0,m=r.length;d<m;d++){const[p,g]=r[d],f=l[d],A=f.range.startLineNumber,w=f.range.startColumn-1+p,C=f.range.startColumn-1+g;s.push(new Zt(A,C+1,A,C+2)),o.push(new Zt(A,w+1,A,C+2))}const u=i(l);return u&&(this._isHandling=!0),u});a&&(this._isHandling=!1,this.setSelections(n,e,a,0)),s.length>0&&this._pushAutoClosedAction(s,o)}_executeEdit(n,e,t,i=0){if(this.context.cursorConfig.readOnly)return;const r=jOo.from(this._model,this);this._cursors.stopTrackingSelections(),this._isHandling=!0;try{this._cursors.ensureValidState(),n()}catch(s){Gc(s)}this._isHandling=!1,this._cursors.startTrackingSelections(),this._validateAutoClosedActions(),this._emitStateChangedIfNecessary(e,t,i,r,!1)&&this.revealAll(e,t,!1,0,!0,0)}getAutoClosedCharacters(){return Hxc.getAllAutoClosedCharacters(this._autoClosedActions)}startComposition(n){this._compositionState=new vbh(this._model,this.getSelections())}endComposition(n,e){const t=this._compositionState?this._compositionState.deduceOutcome(this._model,this.getSelections()):null;this._compositionState=null,this._executeEdit(()=>{e==="keyboard"&&this._executeEditOperation(VBe.compositionEndWithInterceptors(this._prevEditOperationType,this.context.cursorConfig,this._model,t,this.getSelections(),this.getAutoClosedCharacters()))},n,e)}type(n,e,t){this._executeEdit(()=>{if(t==="keyboard"){const i=e.length;let r=0;for(;r<i;){const s=G0c(e,r),o=e.substr(r,s);this._executeEditOperation(VBe.typeWithInterceptors(!!this._compositionState,this._prevEditOperationType,this.context.cursorConfig,this._model,this.getSelections(),this.getAutoClosedCharacters(),o)),r+=s}}else this._executeEditOperation(VBe.typeWithoutInterceptors(this._prevEditOperationType,this.context.cursorConfig,this._model,this.getSelections(),e))},n,t)}compositionType(n,e,t,i,r,s){if(e.length===0&&t===0&&i===0){if(r!==0){const o=this.getSelections().map(a=>{const l=a.getPosition();return new Vl(l.lineNumber,l.column+r,l.lineNumber,l.column+r)});this.setSelections(n,s,o,0)}return}this._executeEdit(()=>{this._executeEditOperation(VBe.compositionType(this._prevEditOperationType,this.context.cursorConfig,this._model,this.getSelections(),e,t,i,r))},n,s)}paste(n,e,t,i,r){this._executeEdit(()=>{this._executeEditOperation(VBe.paste(this.context.cursorConfig,this._model,this.getSelections(),e,t,i||[]))},n,r,4)}cut(n,e){this._executeEdit(()=>{this._executeEditOperation(Xgt.cut(this.context.cursorConfig,this._model,this.getSelections()))},n,e)}executeCommand(n,e,t){this._executeEdit(()=>{this._cursors.killSecondaryCursors(),this._executeEditOperation(new mW(0,[e],{shouldPushStackElementBefore:!1,shouldPushStackElementAfter:!1}))},n,t)}executeCommands(n,e,t){this._executeEdit(()=>{this._executeEditOperation(new mW(0,e,{shouldPushStackElementBefore:!1,shouldPushStackElementAfter:!1}))},n,t)}},jOo=class oGb{static from(e,t){return new oGb(e.getVersionId(),t.getCursorStates())}constructor(e,t){this.modelVersionId=e,this.cursorState=t}equals(e){if(!e||this.modelVersionId!==e.modelVersionId||this.cursorState.length!==e.cursorState.length)return!1;for(let t=0,i=this.cursorState.length;t<i;t++)if(!this.cursorState[t].equals(e.cursorState[t]))return!1;return!0}},Hxc=class{static getAllAutoClosedCharacters(n){let e=[];for(const t of n)e=e.concat(t.getAutoClosedCharactersRanges());return e}constructor(n,e,t){this._model=n,this._autoClosedCharactersDecorations=e,this._autoClosedEnclosingDecorations=t}dispose(){this._autoClosedCharactersDecorations=this._model.deltaDecorations(this._autoClosedCharactersDecorations,[]),this._autoClosedEnclosingDecorations=this._model.deltaDecorations(this._autoClosedEnclosingDecorations,[])}getAutoClosedCharactersRanges(){const n=[];for(let e=0;e<this._autoClosedCharactersDecorations.length;e++){const t=this._model.getDecorationRange(this._autoClosedCharactersDecorations[e]);t&&n.push(t)}return n}isValid(n){const e=[];for(let t=0;t<this._autoClosedEnclosingDecorations.length;t++){const i=this._model.getDecorationRange(this._autoClosedEnclosingDecorations[t]);if(i&&(e.push(i),i.startLineNumber!==i.endLineNumber))return!1}e.sort(Zt.compareRangesUsingStarts),n.sort(Zt.compareRangesUsingStarts);for(let t=0;t<n.length;t++)if(t>=e.length||!e[t].strictContainsRange(n[t]))return!1;return!0}},UOn=class{static executeCommands(n,e,t){const i={model:n,selectionsBefore:e,trackedRanges:[],trackedRangesDirection:[]},r=this._innerExecuteCommands(i,t);for(let s=0,o=i.trackedRanges.length;s<o;s++)i.model._setTrackedRange(i.trackedRanges[s],null,0);return r}static _innerExecuteCommands(n,e){if(this._arrayIsEmpty(e))return null;const t=this._getEditOperations(n,e);if(t.operations.length===0)return null;const i=t.operations,r=this._getLoserCursorMap(i);if(r.hasOwnProperty("0"))return console.warn("Ignoring commands"),null;const s=[];for(let l=0,u=i.length;l<u;l++)r.hasOwnProperty(i[l].identifier.major.toString())||s.push(i[l]);t.hadTrackedEditOperation&&s.length>0&&(s[0]._isTracked=!0);let o=n.model.pushEditOperations(n.selectionsBefore,s,l=>{const u=[];for(let p=0;p<n.selectionsBefore.length;p++)u[p]=[];for(const p of l)p.identifier&&u[p.identifier.major].push(p);const d=(p,g)=>p.identifier.minor-g.identifier.minor,m=[];for(let p=0;p<n.selectionsBefore.length;p++)u[p].length>0?(u[p].sort(d),m[p]=e[p].computeCursorState(n.model,{getInverseEditOperations:()=>u[p],getTrackedSelection:g=>{const f=parseInt(g,10),A=n.model._getTrackedRange(n.trackedRanges[f]);return n.trackedRangesDirection[f]===0?new Vl(A.startLineNumber,A.startColumn,A.endLineNumber,A.endColumn):new Vl(A.endLineNumber,A.endColumn,A.startLineNumber,A.startColumn)}})):m[p]=n.selectionsBefore[p];return m});o||(o=n.selectionsBefore);const a=[];for(const l in r)r.hasOwnProperty(l)&&a.push(parseInt(l,10));a.sort((l,u)=>u-l);for(const l of a)o.splice(l,1);return o}static _arrayIsEmpty(n){for(let e=0,t=n.length;e<t;e++)if(n[e])return!1;return!0}static _getEditOperations(n,e){let t=[],i=!1;for(let r=0,s=e.length;r<s;r++){const o=e[r];if(o){const a=this._getEditOperationsFromCommand(n,r,o);t=t.concat(a.operations),i=i||a.hadTrackedEditOperation}}return{operations:t,hadTrackedEditOperation:i}}static _getEditOperationsFromCommand(n,e,t){const i=[];let r=0;const s=(d,m,p=!1)=>{Zt.isEmpty(d)&&m===""||i.push({identifier:{major:e,minor:r++},range:d,text:m,forceMoveMarkers:p,isAutoWhitespaceEdit:t.insertsAutoWhitespace})};let o=!1;const u={addEditOperation:s,addTrackedEditOperation:(d,m,p)=>{o=!0,s(d,m,p)},trackSelection:(d,m)=>{const p=Vl.liftSelection(d);let g;if(p.isEmpty())if(typeof m=="boolean")m?g=2:g=3;else{const w=n.model.getLineMaxColumn(p.startLineNumber);p.startColumn===w?g=2:g=3}else g=1;const f=n.trackedRanges.length,A=n.model._setTrackedRange(null,p,g);return n.trackedRanges[f]=A,n.trackedRangesDirection[f]=p.getDirection(),f.toString()}};try{t.getEditOperations(n.model,u)}catch(d){return Gc(d),{operations:[],hadTrackedEditOperation:!1}}return{operations:i,hadTrackedEditOperation:o}}static _getLoserCursorMap(n){n=n.slice(0),n.sort((t,i)=>-Zt.compareRangesUsingEnds(t.range,i.range));const e={};for(let t=1;t<n.length;t++){const i=n[t-1],r=n[t];if(Zt.getStartPosition(i.range).isBefore(Zt.getEndPosition(r.range))){let s;i.identifier.major>r.identifier.major?s=i.identifier.major:s=r.identifier.major,e[s.toString()]=!0;for(let o=0;o<n.length;o++)n[o].identifier.major===s&&(n.splice(o,1),o<t&&t--,o--);t>0&&t--}}return e}},bbh=class{constructor(n,e,t,i){this.text=n,this.lineNumber=e,this.startSelectionOffset=t,this.endSelectionOffset=i}},vbh=class KGa{static _capture(e,t){const i=[];for(const r of t){if(r.startLineNumber!==r.endLineNumber)return null;const s=r.startLineNumber;i.push(new bbh(e.getLineContent(s),s,r.startColumn-1,r.endColumn-1))}return i}constructor(e,t){this._original=KGa._capture(e,t)}deduceOutcome(e,t){if(!this._original)return null;const i=KGa._capture(e,t);if(!i||this._original.length!==i.length)return null;const r=[];for(let s=0,o=this._original.length;s<o;s++)r.push(KGa._deduceOutcome(this._original[s],i[s]));return r}static _deduceOutcome(e,t){const i=Math.min(e.startSelectionOffset,t.startSelectionOffset,voe(e.text,t.text)),r=Math.min(e.text.length-e.endSelectionOffset,t.text.length-t.endSelectionOffset,xze(e.text,t.text)),s=e.text.substring(i,e.text.length-r),o=i,a=t.text.length-r,l=t.text.substring(o,a),u=new Zt(t.lineNumber,o+1,t.lineNumber,a+1);return new Qlh(s,e.startSelectionOffset-i,e.endSelectionOffset-i,l,t.startSelectionOffset-i,t.endSelectionOffset-i,u)}}}});function Abh(n,e,t){return Gxc(e,n.languageIdCodec,pT.get(t)||zOo)}async function Oft(n,e,t){if(!t)return Gxc(e,n.languageIdCodec,zOo);const i=await pT.getOrCreate(t);return Gxc(e,n.languageIdCodec,i||zOo)}function ybh(n,e,t,i,r,s,o){let a="<div>",l=i,u=0,d=!0;for(let m=0,p=e.getCount();m<p;m++){const g=e.getEndOffset(m);if(g<=i)continue;let f="";for(;l<g&&l<r;l++){const A=n.charCodeAt(l);switch(A){case 9:{let w=s-(l+u)%s;for(u+=w-1;w>0;)o&&d?(f+="&#160;
    ",d=!1):(f+=" ",d=!0),w--;break}case 60:f+="&lt;
    ",d=!1;break;case 62:f+="&gt;
    ",d=!1;break;case 38:f+="&amp;
    ",d=!1;break;case 0:f+="&#00;
    ",d=!1;break;case 65279:case 8232:case 8233:case 133:f+="\uFFFD",d=!1;break;case 13:f+="&#8203",d=!1;break;case 32:o&&d?(f+="&#160;
    ",d=!1):(f+=" ",d=!0);break;default:f+=String.fromCharCode(A),d=!1}}if(a+=`<span style="${
      e.getInlineStyle(m,t)
    }
    ">${f}</span>`,g>r||l>=r)break}return a+="</div>",a}function Gxc(n,e,t){let i='<div class="monaco-tokenized-source">';const r=Zv(n);let s=t.getInitialState();for(let o=0,a=r.length;o<a;o++){const l=r[o];o>0&&(i+="<br/>");const u=t.tokenizeEncoded(l,!0,s);OB.convertToEndOffset(u.tokens,l.length);const m=new OB(u.tokens,l,e).inflate();let p=0;for(let g=0,f=m.getCount();g<f;g++){const A=m.getClassName(g),w=m.getEndOffset(g);i+=`<span class="${
      A
    }
    ">${LA(l.substring(p,w))}</span>`,p=w}s=u.endState}return i+="</div>",i}var zOo,LSe=