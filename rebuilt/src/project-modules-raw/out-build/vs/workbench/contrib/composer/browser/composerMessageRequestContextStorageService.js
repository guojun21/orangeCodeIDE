// Module: out-build/vs/workbench/contrib/composer/browser/composerMessageRequestContextStorageService.js
// Offset: 26930391 (bundle byte offset)
// Size: 2561 bytes

Wt(), rt(), Er(), kr(), VA(), cv(), Xbt(), qp(), Vg(), vhn(), XFg=!1, Jhn=XFg?console.log:()=>{
  
}, Ghn=xi("composerMessageRequestContextStorageService"), T$e="messageRequestContext", I$e=class extends at{
  constructor(e){
    super(), this._storageService=e
  }
  async storeContext(e, t, i){
    if(!e||!t)throw new Error("[composer] composerId or messageId is undefined");
    await this._storageService.cursorDiskKVSet(`${T$e}:${e}:${t}`, Ibi(i))
  }
  async updateContext(e, t, i){
    if(!t||!e)throw new Error("[composer] messageId or composerId is undefined"+JSON.stringify({
      messageId:t,composerId:e
    }));
    Jhn("[composer] updating context", `${T$e}:${e.slice(0,4)}:${t.slice(0,4)}`);
    const r=await this.retrieveContext(e, t);
    r?(i(r), await this._storageService.cursorDiskKVSet(`${T$e}:${e}:${t}`, Ibi(r))):console.error("[composer] No context found for message id", t)
  }
  async retrieveContext(e, t){
    if(!t||!e)throw new Error("[composer] messageId or composerId is undefined"+JSON.stringify({
      messageId:t,composerId:e
    }));
    Jhn("[composer] retrieving context", `${T$e}:${e.slice(0,4)}:${t.slice(0,4)}`);
    const i=await this._storageService.cursorDiskKVGet(`${T$e}:${e}:${t}`);
    if(!i)return;
    const r=k2A(JSON.parse(i));
    return Jhn("[composer] retrieved context", {
      context:r
    }), r
  }
  async deleteContext(e, t){
    if(!t||!e)throw new Error("[composer] messageId or composerId is undefined"+JSON.stringify({
      messageId:t,composerId:e
    }));
    Jhn("[composer] deleting context", `${T$e}:${e.slice(0,4)}:${t.slice(0,4)}`), await this._storageService.cursorDiskKVSet(`${T$e}:${e}:${t}`, void 0)
  }
  async clearComposerContexts(e){
    if(!e)throw new Error("[composer] composerId is undefined");
    return Jhn("[composer] clearing all contexts for composer", e), this._storageService.cursorDiskKVClearPrefix(`${T$e}:${e}:`).catch(t=>{
      console.error(`[composer] Error clearing contexts for composer ${e}:`,t)
    })
  }
}, __decorate([Gs("ComposerMessageRequestContextStorageService.storeContext")], I$e.prototype, "storeContext", null), __decorate([Gs("ComposerMessageRequestContextStorageService.updateContext")], I$e.prototype, "updateContext", null), __decorate([Gs("ComposerMessageRequestContextStorageService.retrieveContext")], I$e.prototype, "retrieveContext", null), __decorate([Gs("ComposerMessageRequestContextStorageService.deleteContext")], I$e.prototype, "deleteContext", null), __decorate([Gs("ComposerMessageRequestContextStorageService.clearComposerContexts")], I$e.prototype, "clearComposerContexts", null), I$e=__decorate([__param(0, Hi)], I$e), Vi(Ghn, I$e, 1)
}
}), iie, Wga, vEe=