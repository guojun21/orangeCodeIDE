// Module: out-build/vs/workbench/contrib/composer/browser/composerCodeBlockPartialInlineDiffFatesStorageService.js
// Offset: 26910266 (bundle byte offset)
// Size: 3084 bytes

rt(), Bc(), Er(), Wt(), kr(), VA(), WFg=!1, xSt=WFg?console.log:()=>{
  
}, Hga=xi("composerCodeBlockPartialInlineDiffFatesStorageService"), NNe="codeBlockPartialInlineDiffFates", E$e=class extends at{
  constructor(e){
    super(), this._storageService=e
  }
  async storePartialInlineDiffFates(e, t){
    if(!e)throw new Error("[composer] composerId is undefined");
    const i=Wr(), r={
      fates:t
    };
    return xSt("[composer] storing partial inline diff fates", `${NNe}:${e.slice(0,4)}:${i.slice(0,4)}`), await this._storageService.cursorDiskKVSet(`${NNe}:${e}:${i}`, JSON.stringify(r)), i
  }
  async updatePartialInlineDiffFates(e, t, i){
    if(!t||!e)throw new Error("[composer] fatesId or composerId is undefined"+JSON.stringify({
      fatesId:t,composerId:e
    }));
    xSt("[composer] updating partial inline diff fates", `${NNe}:${e.slice(0,4)}:${t.slice(0,4)}`);
    const r=await this.retrievePartialInlineDiffFates(e, t);
    r?(i(r), await this._storageService.cursorDiskKVSet(`${NNe}:${e}:${t}`, JSON.stringify(r))):console.error("[composer] No partial inline diff fates found for id", t)
  }
  async retrievePartialInlineDiffFates(e, t){
    if(!t||!e)throw new Error("[composer] fatesId or composerId is undefined"+JSON.stringify({
      fatesId:t,composerId:e
    }));
    xSt("[composer] retrieving partial inline diff fates", `${NNe}:${e.slice(0,4)}:${t.slice(0,4)}`);
    const i=await this._storageService.cursorDiskKVGet(`${NNe}:${e}:${t}`);
    if(!i)return;
    const r=JSON.parse(i);
    return xSt("[composer] retrieved partial inline diff fates", {
      data:r
    }), r
  }
  async deletePartialInlineDiffFates(e, t){
    if(!t||!e)throw new Error("[composer] fatesId or composerId is undefined"+JSON.stringify({
      fatesId:t,composerId:e
    }));
    xSt("[composer] deleting partial inline diff fates", `${NNe}:${e.slice(0,4)}:${t.slice(0,4)}`), await this._storageService.cursorDiskKVSet(`${NNe}:${e}:${t}`, void 0)
  }
  async clearComposerPartialInlineDiffFates(e){
    if(!e)throw new Error("[composer] composerId is undefined");
    return xSt("[composer] clearing all partial inline diff fates for composer", e), this._storageService.cursorDiskKVClearPrefix(`${NNe}:${e}:`).catch(t=>{
      console.error(`[composer] Error clearing partial inline diff fates for composer ${e}:`,t)
    })
  }
}, __decorate([Gs("ComposerCodeBlockPartialInlineDiffFatesStorageService.storePartialInlineDiffFates")], E$e.prototype, "storePartialInlineDiffFates", null), __decorate([Gs("ComposerCodeBlockPartialInlineDiffFatesStorageService.updatePartialInlineDiffFates")], E$e.prototype, "updatePartialInlineDiffFates", null), __decorate([Gs("ComposerCodeBlockPartialInlineDiffFatesStorageService.retrievePartialInlineDiffFates")], E$e.prototype, "retrievePartialInlineDiffFates", null), __decorate([Gs("ComposerCodeBlockPartialInlineDiffFatesStorageService.deletePartialInlineDiffFates")], E$e.prototype, "deletePartialInlineDiffFates", null), __decorate([Gs("ComposerCodeBlockPartialInlineDiffFatesStorageService.clearComposerPartialInlineDiffFates")], E$e.prototype, "clearComposerPartialInlineDiffFates", null), E$e=__decorate([__param(0, Hi)], E$e), Vi(Hga, E$e, 1)
}
}), qnu, BA, Jga, Zk=