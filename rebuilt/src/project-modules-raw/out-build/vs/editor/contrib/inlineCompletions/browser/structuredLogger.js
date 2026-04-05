// Module: out-build/vs/editor/contrib/inlineCompletions/browser/structuredLogger.js
// Offset: 25265325 (bundle byte offset)
// Size: 596 bytes

rt(), Uc(), hs(), si(), Cgi=MAg=class extends at{
  static cast(){
    return this
  }
  constructor(e, t, i){
    super(), this._contextKey=e, this._contextKeyService=t, this._commandService=i, this._contextKeyValue=oSA(this._contextKey, this._contextKeyService).recomputeInitiallyAndOnChange(this._store), this.isEnabled=this._contextKeyValue.map(r=>r!==void 0)
  }
  log(e){
    const t=this._contextKeyValue.get();
    return t?(this._commandService.executeCommand(t, e), !0):!1
  }
}, Cgi=MAg=__decorate([__param(1, wi), __param(2, fr)], Cgi)
}
}), Nla, aSA=