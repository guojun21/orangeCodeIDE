// Module: out-build/vs/editor/contrib/find/browser/findModel.js
// Offset: 25146350 (bundle byte offset)
// Size: 10342 bytes

GD(), vr(), rt(), M4t(), tl(), ts(), db(), i9e(), aQl(), BCA(), avg(), si(), hNe=new Sn("findWidgetVisible", !1), cvg=hNe.toNegated(), hgi=new Sn("findInputFocussed", !1), Ala=new Sn("replaceInputFocussed", !1), yCt={
  primary:545, mac:{
    primary:2593
  }
}, wCt={
  primary:565, mac:{
    primary:2613
  }
}, _Ct={
  primary:560, mac:{
    primary:2608
  }
}, mgi={
  primary:554, mac:{
    primary:2602
  }
}, tdn={
  primary:558, mac:{
    primary:2606
  }
}, bE={
  StartFindAction:"actions.find", StartFindWithSelection:"actions.findWithSelection", StartFindWithArgs:"editor.actions.findWithArgs", NextMatchFindAction:"editor.action.nextMatchFindAction", PreviousMatchFindAction:"editor.action.previousMatchFindAction", GoToMatchFindAction:"editor.action.goToMatchFindAction", NextSelectionMatchFindAction:"editor.action.nextSelectionMatchFindAction", PreviousSelectionMatchFindAction:"editor.action.previousSelectionMatchFindAction", StartFindReplaceAction:"editor.action.startFindReplaceAction", CloseFindWidgetCommand:"closeFindWidget", ToggleCaseSensitiveCommand:"toggleFindCaseSensitive", ToggleWholeWordCommand:"toggleFindWholeWord", ToggleRegexCommand:"toggleFindRegex", ToggleSearchScopeCommand:"toggleFindInSelection", TogglePreserveCaseCommand:"togglePreserveCase", ReplaceOneAction:"editor.action.replaceOne", ReplaceAllAction:"editor.action.replaceAll", SelectAllMatchesAction:"editor.action.selectAllMatches", StartAiInstantSearchAction:"editor.action.startAiInstantSearch"
}, mNe=19999, lvg=240, uvg=class yWa{
  constructor(e, t){
    this._toDispose=new Ut, this._editor=e, this._state=t, this._isDisposed=!1, this._startSearchingTimer=new O$, this._decorations=new edn(e), this._toDispose.add(this._decorations), this._updateDecorationsScheduler=new Hu(()=>{
      if(this._editor.hasModel())return this.research(!1)
    }, 100), this._toDispose.add(this._updateDecorationsScheduler), this._toDispose.add(this._editor.onDidChangeCursorPosition(i=>{
      (i.reason===3||i.reason===5||i.reason===6)&&this._decorations.setStartPosition(this._editor.getPosition())
    })), this._ignoreModelContentChanged=!1, this._toDispose.add(this._editor.onDidChangeModelContent(i=>{
      this._ignoreModelContentChanged||(i.isFlush&&this._decorations.reset(),this._decorations.setStartPosition(this._editor.getPosition()),this._updateDecorationsScheduler.schedule())
    })), this._toDispose.add(this._state.onFindReplaceStateChange(i=>this._onStateChanged(i))), this.research(!1, this._state.searchScope)
  }
  dispose(){
    this._isDisposed=!0, Bo(this._startSearchingTimer), this._toDispose.dispose()
  }
  _onStateChanged(e){
    this._isDisposed||this._editor.hasModel()&&(e.searchString||e.isReplaceRevealed||e.isRegex||e.wholeWord||e.matchCase||e.searchScope)&&(this._editor.getModel().isTooLargeForSyncing()?(this._startSearchingTimer.cancel(), this._startSearchingTimer.setIfNotSet(()=>{
      e.searchScope?this.research(e.moveCursor,this._state.searchScope):this.research(e.moveCursor)
    }, lvg)):e.searchScope?this.research(e.moveCursor, this._state.searchScope):this.research(e.moveCursor))
  }
  static _getSearchRange(e, t){
    return t||e.getFullModelRange()
  }
  research(e, t){
    let i=null;
    typeof t<"u"?t!==null&&(Array.isArray(t)?i=t:i=[t]):i=this._decorations.getFindScopes(), i!==null&&(i=i.map(a=>{
      if(a.startLineNumber!==a.endLineNumber){
        let l=a.endLineNumber;
        return a.endColumn===1&&(l=l-1),new Zt(a.startLineNumber,1,l,this._editor.getModel().getLineMaxColumn(l))
      }
      return a
    }));
    const r=this._findMatches(i, !1, mNe);
    this._decorations.set(r, i);
    const s=this._editor.getSelection();
    let o=this._decorations.getCurrentMatchesPosition(s);
    if(o===0&&r.length>0){
      const a=Sbe(r.map(l=>l.range),l=>Zt.compareRangesUsingStarts(l,s)>=0);
      o=a>0?a-1+1:o
    }
    this._state.changeMatchInfo(o, this._decorations.getCount(), void 0), e&&this._editor.getOption(43).cursorMoveOnType&&this._moveToNextMatch(this._decorations.getStartPosition())
  }
  _hasMatches(){
    return this._state.matchesCount>0
  }
  _cannotFind(){
    if(!this._hasMatches()){
      const e=this._decorations.getFindScope();
      return e&&this._editor.revealRangeInCenterIfOutsideViewport(e,0),!0
    }
    return!1
  }
  _setCurrentFindMatch(e){
    const t=this._decorations.setCurrentFindMatch(e);
    this._state.changeMatchInfo(t, this._decorations.getCount(), e), this._editor.setSelection(e), this._editor.revealRangeInCenterIfOutsideViewport(e, 0)
  }
  _prevSearchPosition(e){
    const t=this._state.isRegex&&(this._state.searchString.indexOf("^")>=0||this._state.searchString.indexOf("$")>=0);
    let{
      lineNumber:i,column:r
    }
    =e;
    const s=this._editor.getModel();
    return t||r===1?(i===1?i=s.getLineCount():i--, r=s.getLineMaxColumn(i)):r--, new ar(i, r)
  }
  _moveToPrevMatch(e, t=!1){
    if(!this._state.canNavigateBack()){
      const d=this._decorations.matchAfterPosition(e);
      d&&this._setCurrentFindMatch(d);
      return
    }
    if(this._decorations.getCount()<mNe){
      let d=this._decorations.matchBeforePosition(e);
      d&&d.isEmpty()&&d.getStartPosition().equals(e)&&(e=this._prevSearchPosition(e),d=this._decorations.matchBeforePosition(e)),d&&this._setCurrentFindMatch(d);
      return
    }
    if(this._cannotFind())return;
    const i=this._decorations.getFindScope(), r=yWa._getSearchRange(this._editor.getModel(), i);
    r.getEndPosition().isBefore(e)&&(e=r.getEndPosition()), e.isBefore(r.getStartPosition())&&(e=r.getEndPosition());
    const{
      lineNumber:s,column:o
    }
    =e, a=this._editor.getModel();
    let l=new ar(s, o), u=a.findPreviousMatch(this._state.searchString, l, this._state.isRegex, this._state.matchCase, this._state.wholeWord?this._editor.getOption(136):null, !1);
    if(u&&u.range.isEmpty()&&u.range.getStartPosition().equals(l)&&(l=this._prevSearchPosition(l), u=a.findPreviousMatch(this._state.searchString, l, this._state.isRegex, this._state.matchCase, this._state.wholeWord?this._editor.getOption(136):null, !1)), !!u){
      if(!t&&!r.containsRange(u.range))return this._moveToPrevMatch(u.range.getStartPosition(),!0);
      this._setCurrentFindMatch(u.range)
    }
  }
  moveToPrevMatch(){
    this._moveToPrevMatch(this._editor.getSelection().getStartPosition())
  }
  _nextSearchPosition(e){
    const t=this._state.isRegex&&(this._state.searchString.indexOf("^")>=0||this._state.searchString.indexOf("$")>=0);
    let{
      lineNumber:i,column:r
    }
    =e;
    const s=this._editor.getModel();
    return t||r===s.getLineMaxColumn(i)?(i===s.getLineCount()?i=1:i++, r=1):r++, new ar(i, r)
  }
  _moveToNextMatch(e){
    if(!this._state.canNavigateForward()){
      const i=this._decorations.matchBeforePosition(e);
      i&&this._setCurrentFindMatch(i);
      return
    }
    if(this._decorations.getCount()<mNe){
      let i=this._decorations.matchAfterPosition(e);
      i&&i.isEmpty()&&i.getStartPosition().equals(e)&&(e=this._nextSearchPosition(e),i=this._decorations.matchAfterPosition(e)),i&&this._setCurrentFindMatch(i);
      return
    }
    const t=this._getNextMatch(e, !1, !0);
    t&&this._setCurrentFindMatch(t.range)
  }
  _getNextMatch(e, t, i, r=!1){
    if(this._cannotFind())return null;
    const s=this._decorations.getFindScope(), o=yWa._getSearchRange(this._editor.getModel(), s);
    o.getEndPosition().isBefore(e)&&(e=o.getStartPosition()), e.isBefore(o.getStartPosition())&&(e=o.getStartPosition());
    const{
      lineNumber:a,column:l
    }
    =e, u=this._editor.getModel();
    let d=new ar(a, l), m=u.findNextMatch(this._state.searchString, d, this._state.isRegex, this._state.matchCase, this._state.wholeWord?this._editor.getOption(136):null, t);
    return i&&m&&m.range.isEmpty()&&m.range.getStartPosition().equals(d)&&(d=this._nextSearchPosition(d), m=u.findNextMatch(this._state.searchString, d, this._state.isRegex, this._state.matchCase, this._state.wholeWord?this._editor.getOption(136):null, t)), m?!r&&!o.containsRange(m.range)?this._getNextMatch(m.range.getEndPosition(), t, i, !0):m:null
  }
  moveToNextMatch(){
    this._moveToNextMatch(this._editor.getSelection().getEndPosition())
  }
  _moveToMatch(e){
    const t=this._decorations.getDecorationRangeAt(e);
    t&&this._setCurrentFindMatch(t)
  }
  moveToMatch(e){
    this._moveToMatch(e)
  }
  _getReplacePattern(){
    return this._state.isRegex?ivg(this._state.replaceString):ugi.fromStaticValue(this._state.replaceString)
  }
  replace(){
    if(!this._hasMatches())return;
    const e=this._getReplacePattern(), t=this._editor.getSelection(), i=this._getNextMatch(t.getStartPosition(), !0, !1);
    if(i)if(t.equalsRange(i.range)){
      const r=e.buildReplaceString(i.matches,this._state.preserveCase),s=new D6(t,r);
      this._executeEditorCommand("replace",s),this._decorations.setStartPosition(new ar(t.startLineNumber,t.startColumn+r.length)),this.research(!0)
    }
    else this._decorations.setStartPosition(this._editor.getPosition()), this._setCurrentFindMatch(i.range)
  }
  _findMatches(e, t, i){
    const r=(e||[null]).map(s=>yWa._getSearchRange(this._editor.getModel(), s));
    return this._editor.getModel().findMatches(this._state.searchString, r, this._state.isRegex, this._state.matchCase, this._state.wholeWord?this._editor.getOption(136):null, t, i)
  }
  replaceAll(){
    if(!this._hasMatches())return;
    const e=this._decorations.getFindScopes();
    e===null&&this._state.matchesCount>=mNe?this._largeReplaceAll():this._regularReplaceAll(e), this.research(!1)
  }
  _largeReplaceAll(){
    const t=new Nde(this._state.searchString, this._state.isRegex, this._state.matchCase, this._state.wholeWord?this._editor.getOption(136):null).parseSearchRequest();
    if(!t)return;
    let i=t.regex;
    if(!i.multiline){
      let m="mu";
      i.ignoreCase&&(m+="i"),i.global&&(m+="g"),i=new RegExp(i.source,m)
    }
    const r=this._editor.getModel(), s=r.getValue(1), o=r.getFullModelRange(), a=this._getReplacePattern();
    let l;
    const u=this._state.preserveCase;
    a.hasReplacementPatterns||u?l=s.replace(i, function(){
      return a.buildReplaceString(arguments,u)
    }):l=s.replace(i, a.buildReplaceString(null, u));
    const d=new HFo(o, l, this._editor.getSelection());
    this._executeEditorCommand("replaceAll", d)
  }
  _regularReplaceAll(e){
    const t=this._getReplacePattern(), i=this._findMatches(e, t.hasReplacementPatterns||this._state.preserveCase, 1073741824), r=[];
    for(let o=0, a=i.length;
    o<a;
    o++)r[o]=t.buildReplaceString(i[o].matches, this._state.preserveCase);
    const s=new Xbg(this._editor.getSelection(), i.map(o=>o.range), r);
    this._executeEditorCommand("replaceAll", s)
  }
  selectAllMatches(){
    if(!this._hasMatches())return;
    const e=this._decorations.getFindScopes();
    let i=this._findMatches(e, !1, 1073741824).map(s=>new Vl(s.range.startLineNumber, s.range.startColumn, s.range.endLineNumber, s.range.endColumn));
    const r=this._editor.getSelection();
    for(let s=0, o=i.length;
    s<o;
    s++)if(i[s].equalsRange(r)){
      i=[r].concat(i.slice(0,s)).concat(i.slice(s+1));
      break
    }
    this._editor.setSelections(i)
  }
  _executeEditorCommand(e, t){
    try{
      this._ignoreModelContentChanged=!0,this._editor.pushUndoStop(),this._editor.executeCommand(e,t),this._editor.pushUndoStop()
    }
    finally{
      this._ignoreModelContentChanged=!1
    }
  }
}
}
}), RCA=