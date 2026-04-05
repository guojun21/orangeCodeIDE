// Module: out-build/vs/workbench/contrib/aiApplyToFileActionsService/browser/aiApplyToFileActionsService.js
// Offset: 33804095 (bundle byte offset)
// Size: 1756 bytes

Po(), rt(), td(), eV(), Er(), Wt(), nA(), dQ(), ns(), T0u=xi("aiApplyToFileActionsService"), aDa=class extends at{
  constructor(e, t, i, r){
    super(), this._outlineModelService=e, this._textModelService=t, this._everythingProviderService=i, this._fileService=r
  }
  async _getTieredSymbols(e){
    const t=await this._textModelService.createModelReference(e);
    try{
      const i=await this._outlineModelService.getOrCreate(t.object.textEditorModel,Cs.None),r=i.getAllSymbols(),s=i.getTopLevelSymbols();
      return[r.filter(l=>l.kind===5),s.filter(l=>l.kind===11),s.filter(l=>l.kind===13),s.filter(l=>l.kind===12),r.filter(l=>l.kind===11&&l.range.endLineNumber-l.range.startLineNumber>3),r.filter(l=>l.kind===4&&l.range.endLineNumber-l.range.startLineNumber>3),r.filter(l=>l.kind===13&&l.range.endLineNumber-l.range.startLineNumber>3)].map(l=>l.map(u=>({
        ...u,text:t.object.textEditorModel.getValueInRange(u.range)
      })))
    }
    finally{
      t.dispose()
    }
  }
  async getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(e, t){
    if(!await this._fileService.exists(e))return[];
    const i=await hmy(this._textModelService, e), r=[];
    let s;
    try{
      s=await this._everythingProviderService.provider?.runCommand(btu.GetImportantDefinitionNames,{
        fileContent:t,languageId:i
      })
    }
    catch(l){
      console.error("[aiApplyToFileActions] TreeSitterActions.GetImportantDefinitionNames failed",l)
    }
    r.push(...s?.items?.map(l=>l.symbolName)??[]);
    const o=(await this._getTieredSymbols(e)).flat(), a=[];
    for(const l of o){
      const u=r.find(d=>d===l.name);
      u!==void 0&&(r.splice(r.indexOf(u),1),a.push(l))
    }
    return a
  }
}, aDa=__decorate([__param(0, Gne), __param(1, El), __param(2, AU), __param(3, Gr)], aDa), Vi(T0u, aDa, 1)
}
}), cDa, tvn, Ort, GUf=