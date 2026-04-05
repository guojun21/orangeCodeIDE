// Module: out-build/vs/editor/contrib/find/browser/findState.js
// Offset: 25159676 (bundle byte offset)
// Size: 4611 bytes

yn(), rt(), ts(), YUe(), (function(n){
  n[n.NotSet=0]="NotSet", n[n.True=1]="True", n[n.False=2]="False"
})(hvg||(hvg={
  
})), pgi=class extends at{
  get searchString(){
    return this._searchString
  }
  get replaceString(){
    return this._replaceString
  }
  get isRevealed(){
    return this._isRevealed
  }
  get isReplaceRevealed(){
    return this._isReplaceRevealed
  }
  get isRegex(){
    return yla(this._isRegexOverride, this._isRegex)
  }
  get wholeWord(){
    return yla(this._wholeWordOverride, this._wholeWord)
  }
  get matchCase(){
    return yla(this._matchCaseOverride, this._matchCase)
  }
  get preserveCase(){
    return yla(this._preserveCaseOverride, this._preserveCase)
  }
  get actualIsRegex(){
    return this._isRegex
  }
  get actualWholeWord(){
    return this._wholeWord
  }
  get actualMatchCase(){
    return this._matchCase
  }
  get actualPreserveCase(){
    return this._preserveCase
  }
  get searchScope(){
    return this._searchScope
  }
  get matchesPosition(){
    return this._matchesPosition
  }
  get matchesCount(){
    return this._matchesCount
  }
  get currentMatch(){
    return this._currentMatch
  }
  get isSearching(){
    return this._isSearching
  }
  get filters(){
    return this._filters
  }
  constructor(){
    super(), this._onFindReplaceStateChange=this._register(new Qe), this.onFindReplaceStateChange=this._onFindReplaceStateChange.event, this._searchString="", this._replaceString="", this._isRevealed=!1, this._isReplaceRevealed=!1, this._isRegex=!1, this._isRegexOverride=0, this._wholeWord=!1, this._wholeWordOverride=0, this._matchCase=!1, this._matchCaseOverride=0, this._preserveCase=!1, this._preserveCaseOverride=0, this._searchScope=null, this._matchesPosition=0, this._matchesCount=0, this._currentMatch=null, this._loop=!0, this._isSearching=!1, this._filters=null
  }
  changeMatchInfo(n, e, t){
    const i={
      moveCursor:!1,updateHistory:!1,searchString:!1,replaceString:!1,isRevealed:!1,isReplaceRevealed:!1,isRegex:!1,wholeWord:!1,matchCase:!1,preserveCase:!1,searchScope:!1,matchesPosition:!1,matchesCount:!1,currentMatch:!1,loop:!1,isSearching:!1,filters:!1
    };
    let r=!1;
    e===0&&(n=0), n>e&&(n=e), this._matchesPosition!==n&&(this._matchesPosition=n, i.matchesPosition=!0, r=!0), this._matchesCount!==e&&(this._matchesCount=e, i.matchesCount=!0, r=!0), typeof t<"u"&&(Zt.equalsRange(this._currentMatch, t)||(this._currentMatch=t, i.currentMatch=!0, r=!0)), r&&this._onFindReplaceStateChange.fire(i)
  }
  change(n, e, t=!0){
    const i={
      moveCursor:e,updateHistory:t,searchString:!1,replaceString:!1,isRevealed:!1,isReplaceRevealed:!1,isRegex:!1,wholeWord:!1,matchCase:!1,preserveCase:!1,searchScope:!1,matchesPosition:!1,matchesCount:!1,currentMatch:!1,loop:!1,isSearching:!1,filters:!1
    };
    let r=!1;
    const s=this.isRegex, o=this.wholeWord, a=this.matchCase, l=this.preserveCase;
    typeof n.searchString<"u"&&this._searchString!==n.searchString&&(this._searchString=n.searchString, i.searchString=!0, r=!0), typeof n.replaceString<"u"&&this._replaceString!==n.replaceString&&(this._replaceString=n.replaceString, i.replaceString=!0, r=!0), typeof n.isRevealed<"u"&&this._isRevealed!==n.isRevealed&&(this._isRevealed=n.isRevealed, i.isRevealed=!0, r=!0), typeof n.isReplaceRevealed<"u"&&this._isReplaceRevealed!==n.isReplaceRevealed&&(this._isReplaceRevealed=n.isReplaceRevealed, i.isReplaceRevealed=!0, r=!0), typeof n.isRegex<"u"&&(this._isRegex=n.isRegex), typeof n.wholeWord<"u"&&(this._wholeWord=n.wholeWord), typeof n.matchCase<"u"&&(this._matchCase=n.matchCase), typeof n.preserveCase<"u"&&(this._preserveCase=n.preserveCase), typeof n.searchScope<"u"&&(n.searchScope?.every(u=>this._searchScope?.some(d=>!Zt.equalsRange(d, u)))||(this._searchScope=n.searchScope, i.searchScope=!0, r=!0)), typeof n.loop<"u"&&this._loop!==n.loop&&(this._loop=n.loop, i.loop=!0, r=!0), typeof n.isSearching<"u"&&this._isSearching!==n.isSearching&&(this._isSearching=n.isSearching, i.isSearching=!0, r=!0), typeof n.filters<"u"&&(this._filters?this._filters.update(n.filters):this._filters=n.filters, i.filters=!0, r=!0), this._isRegexOverride=typeof n.isRegexOverride<"u"?n.isRegexOverride:0, this._wholeWordOverride=typeof n.wholeWordOverride<"u"?n.wholeWordOverride:0, this._matchCaseOverride=typeof n.matchCaseOverride<"u"?n.matchCaseOverride:0, this._preserveCaseOverride=typeof n.preserveCaseOverride<"u"?n.preserveCaseOverride:0, s!==this.isRegex&&(r=!0, i.isRegex=!0), o!==this.wholeWord&&(r=!0, i.wholeWord=!0), a!==this.matchCase&&(r=!0, i.matchCase=!0), l!==this.preserveCase&&(r=!0, i.preserveCase=!0), r&&this._onFindReplaceStateChange.fire(i)
  }
  canNavigateBack(){
    return this.canNavigateInLoop()||this.matchesPosition!==1
  }
  canNavigateForward(){
    return this.canNavigateInLoop()||this.matchesPosition<this.matchesCount
  }
  canNavigateInLoop(){
    return this._loop||this.matchesCount>=mNe
  }
}
}
}), LCA=