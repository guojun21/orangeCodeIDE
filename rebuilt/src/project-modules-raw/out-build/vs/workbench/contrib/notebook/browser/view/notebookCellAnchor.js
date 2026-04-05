// Module: out-build/vs/workbench/contrib/notebook/browser/view/notebookCellAnchor.js
// Offset: 33034118 (bundle byte offset)
// Size: 1159 bytes

Sb(), ph(), J9f=class{
  constructor(n, e, t){
    this.notebookExecutionStateService=n, this.configurationService=e, this.scrollEvent=t, this.stopAnchoring=!1
  }
  shouldAnchor(n, e, t, i){
    if(n.element(e).focusMode===Tk.Editor)return!0;
    if(this.stopAnchoring)return!1;
    const r=n.elementTop(e)+n.elementHeight(e)+t, o=n.renderHeight+n.getScrollTop()>r, a=this.configurationService.getValue(yo.scrollToRevealCell)!=="none", l=t>0;
    return a&&l&&!o?(this.watchAchorDuringExecution(i), !0):!1
  }
  watchAchorDuringExecution(n){
    if(!this.executionWatcher&&n.cellKind===zd.Code){
      const e=this.notebookExecutionStateService.getCellExecution(n.uri);
      e&&e.state===XE.Executing&&(this.executionWatcher=n.onDidStopExecution(()=>{
        this.executionWatcher?.dispose(),this.executionWatcher=void 0,this.scrollWatcher?.dispose(),this.stopAnchoring=!1
      }),this.scrollWatcher=this.scrollEvent(t=>{
        t.scrollTop<t.oldScrollTop&&(this.stopAnchoring=!0,this.scrollWatcher?.dispose())
      }))
    }
  }
  dispose(){
    this.executionWatcher?.dispose(), this.scrollWatcher?.dispose()
  }
}
}
});
function Iuy(n, e){
  try{
    n(e)
  }
  catch(t){
    Gc(t)
  }
}
var sTa, G9f, W9f, Duy=