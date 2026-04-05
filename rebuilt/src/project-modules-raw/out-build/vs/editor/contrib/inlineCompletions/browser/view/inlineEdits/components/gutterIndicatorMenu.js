// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/components/gutterIndicatorMenu.js
// Offset: 25499198 (bundle byte offset)
// Size: 2370 bytes

ri(), Ov(), bS(), Kde(), qi(), Uc(), _r(), Jr(), Ht(), hs(), si(), Id(), ka(), Nl(), h$o(), _dn(), sua=class{
  constructor(e, t, i, r, s, o){
    this._model=e, this._close=t, this._editorObs=i, this._contextKeyService=r, this._keybindingService=s, this._commandService=o, this._inlineEditsShowCollapsed=this._editorObs.getOption(64).map(a=>a.edits.showCollapsed)
  }
  toDisposableLiveElement(){
    return this._createHoverContent().toDisposableLiveElement()
  }
  _createHoverContent(){
    const e=Ua("active", void 0), t=m=>({
      title:m.title,icon:m.icon,keybinding:typeof m.commandId=="string"?this._getKeybinding(m.commandArgs?void 0:m.commandId):Ro(p=>typeof m.commandId=="string"?void 0:this._getKeybinding(m.commandArgs?void 0:m.commandId.read(p)).read(p)),isActive:e.map(p=>p===m.id),onHoverChange:p=>e.set(p?m.id:void 0,void 0),onAction:()=>(this._close(!0),this._commandService.executeCommand(typeof m.commandId=="string"?m.commandId:m.commandId.get(),...m.commandArgs??[]))
    }), i=lkA(this._model.displayName), r=xdn(t({
      id:"gotoAndAccept",title:`${_(1357,null)} / ${_(1358,null)}`,icon:this._model.tabAction.map(m=>m===sV.Accept?Be.check:Be.arrowRight),commandId:this._model.tabAction.map(m=>m===sV.Accept?J9t:I5c)
    })), s=xdn(t({
      id:"reject",title:_(1359,null),icon:Be.close,commandId:D5c
    })), o=this._model.extensionCommands.map((m, p)=>xdn(t({
      id:m.id+"_"+p,title:m.title,icon:Be.symbolEvent,commandId:m.id,commandArgs:m.arguments
    }))), a=this._inlineEditsShowCollapsed.map(m=>xdn(t(m?{
      id:"showExpanded",title:_(1360,null),icon:Be.expandAll,commandId:d$o
    }
    :{
      id:"showCollapsed",title:_(1361,null),icon:Be.collapseAll,commandId:d$o
    }))), l=xdn(t({
      id:"settings",title:_(1362,null),icon:Be.gear,commandId:"workbench.action.openSettings",commandArgs:["@tag:nextEditSuggestions"]
    })), u=this._model.action?[this._model.action]:[], d=u.length>0?ukA(u.map(m=>({
      id:m.id,label:m.title,enabled:!0,run:()=>this._commandService.executeCommand(m.id,...m.arguments??[]),class:void 0,tooltip:m.tooltip??m.title
    })), {
      hoverDelegate:$3t
    }):void 0;
    return ckA([i, r, s, a, l, o.length?bwg():void 0, ...o, d?bwg():void 0, d])
  }
  _getKeybinding(e){
    return e?tp(this._contextKeyService.onDidChangeContext, ()=>this._keybindingService.lookupKeybinding(e)):F0(void 0)
  }
}, sua=__decorate([__param(3, wi), __param(4, mo), __param(5, fr)], sua)
}
}), zne, oua, hkA=