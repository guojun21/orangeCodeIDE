// Module: out-build/vs/workbench/contrib/notebook/browser/notebookAccessibilityProvider.js
// Offset: 33445367 (bundle byte offset)
// Size: 2406 bytes

yn(), rt(), Uc(), Ht(), Ei(), ka(), ph(), uD(), fki(), zg(), Ew(), cIa=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this.viewModel=e, this.isReplHistory=t, this.notebookExecutionStateService=i, this.keybindingService=r, this.configurationService=s, this.accessibilityService=o, this._onDidAriaLabelChange=new Qe, this.onDidAriaLabelChange=this._onDidAriaLabelChange.event, this._register(In.debounce(this.notebookExecutionStateService.onDidChangeExecution, (a, l)=>this.mergeEvents(a, l), 100)(a=>{
      if(!a.length)return;
      const l=this.viewModel();
      if(l){
        for(const d of a){
          const m=l.getCellByHandle(d.cellHandle);
          m&&this._onDidAriaLabelChange.fire(m)
        }
        const u=a[a.length-1];
        if(this.shouldReadCellOutputs(u.state)){
          const d=l.getCellByHandle(u.cellHandle);
          if(d&&d.outputsViewModels.length){
            const m=t_u(l.notebookDocument,d,!0);
            W_(m)
          }
        }
      }
    }, this))
  }
  shouldReadCellOutputs(e){
    return e===void 0&&this.isReplHistory&&this.accessibilityService.isScreenReaderOptimized()&&this.configurationService.getValue("accessibility.replEditor.readLastExecutionOutput")
  }
  get verbositySettingId(){
    return this.isReplHistory?"accessibility.verbosity.replEditor":"accessibility.verbosity.notebook"
  }
  getAriaLabel(e){
    const t=In.filter(this.onDidAriaLabelChange, i=>i===e);
    return tp(this, t, ()=>{
      const i=this.viewModel();
      return i&&i.getCellIndex(e)>=0?this.getLabel(e):""
    })
  }
  createItemLabel(e, t){
    return this.isReplHistory?`cell${e}`:`${t===zd.Markup?"markdown":"code"} cell${e}`
  }
  getLabel(e){
    const t=this.notebookExecutionStateService.getCellExecution(e.uri)?.state, i=t===XE.Executing?", executing":t===XE.Pending?", pending":"";
    return this.createItemLabel(i, e.cellKind)
  }
  get widgetAriaLabelName(){
    return this.isReplHistory?_(9366, null):_(9367, null)
  }
  getWidgetAriaLabel(){
    const e=this.keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel();
    return this.configurationService.getValue(this.verbositySettingId)?e?_(9368, null, this.widgetAriaLabelName, e):_(9369, null, this.widgetAriaLabelName):this.widgetAriaLabelName
  }
  mergeEvents(e, t){
    const i=this.viewModel(), r=e||[];
    if(i&&t.type===vJ.cell&&t.affectsNotebook(i.uri)){
      const s=r.findIndex(o=>o.cellHandle===t.cellHandle);
      s>=0&&r.splice(s,1),r.push({
        cellHandle:t.cellHandle,state:t.changed?.state
      })
    }
    return r
  }
}, cIa=__decorate([__param(2, pE), __param(3, mo), __param(4, Fn), __param(5, Cf)], cIa)
}
}), c6f, Qdy=