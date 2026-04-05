// Module: out-build/vs/workbench/contrib/notebook/common/notebookCommon.js
// Offset: 25006566 (bundle byte offset)
// Size: 8872 bytes

Ql(), iR(), Ef(), hF(), zr(), Hl(), _r(), si(), Gpi(), lCt="workbench.editor.notebook", Wpi="workbench.editor.notebookTextDiffEditor", dfg="workbench.editor.notebookMultiTextDiffEditor", Uun="workbench.editor.interactive", Wca="workbench.editor.repl", (function(n){
  n[n.Markup=1]="Markup", n[n.Code=2]="Code"
})(zd||(zd={
  
})), kWl=["application/json", "application/javascript", "text/html", "image/svg+xml", NA.latex, NA.markdown, "image/png", "image/jpeg", NA.text], hfg=[NA.latex, NA.markdown, "application/json", "text/html", "image/svg+xml", "image/png", "image/jpeg", NA.text], mfg=new Map([["ms-toolsai.jupyter", new Set(["jupyter-notebook", "interactive"])], ["ms-toolsai.jupyter-renderers", new Set(["jupyter-notebook", "interactive"])]]), uCt="_notAvailable", (function(n){
  n[n.Running=1]="Running", n[n.Idle=2]="Idle"
})(pfg||(pfg={
  
})), (function(n){
  n[n.Unconfirmed=1]="Unconfirmed", n[n.Pending=2]="Pending", n[n.Executing=3]="Executing"
})(XE||(XE={
  
})), (function(n){
  n[n.Unconfirmed=1]="Unconfirmed", n[n.Pending=2]="Pending", n[n.Executing=3]="Executing"
})($un||($un={
  
})), (function(n){
  n[n.WithHardKernelDependency=0]="WithHardKernelDependency", n[n.WithOptionalKernelDependency=1]="WithOptionalKernelDependency", n[n.Pure=2]="Pure", n[n.Never=3]="Never"
})(gfg||(gfg={
  
})), (function(n){
  n.Always="always", n.Never="never", n.Optional="optional"
})(ffg||(ffg={
  
})), (function(n){
  n[n.ModelChange=1]="ModelChange", n[n.Move=2]="Move", n[n.ChangeCellLanguage=5]="ChangeCellLanguage", n[n.Initialize=6]="Initialize", n[n.ChangeCellMetadata=7]="ChangeCellMetadata", n[n.Output=8]="Output", n[n.OutputItem=9]="OutputItem", n[n.ChangeCellContent=10]="ChangeCellContent", n[n.ChangeDocumentMetadata=11]="ChangeDocumentMetadata", n[n.ChangeCellInternalMetadata=12]="ChangeCellInternalMetadata", n[n.ChangeCellMime=13]="ChangeCellMime", n[n.Unknown=100]="Unknown"
})(sb||(sb={
  
})), (function(n){
  n[n.Handle=0]="Handle", n[n.Index=1]="Index"
})(Wy||(Wy={
  
})), (function(n){
  n[n.Replace=1]="Replace", n[n.Output=2]="Output", n[n.Metadata=3]="Metadata", n[n.CellLanguage=4]="CellLanguage", n[n.DocumentMetadata=5]="DocumentMetadata", n[n.Move=6]="Move", n[n.OutputItems=7]="OutputItems", n[n.PartialMetadata=8]="PartialMetadata", n[n.PartialInternalMetadata=9]="PartialInternalMetadata"
})(bfg||(bfg={
  
})), (function(n){
  n.scheme=_n.vscodeNotebookMetadata;
  function e(i){
    return tCA(i)
  }
  n.generate=e;
  function t(i){
    return eCA(i)
  }
  n.parse=t
})(Qca||(Qca={
  
})), (function(n){
  n.scheme=_n.vscodeNotebookCell;
  function e(l, u){
    return X0A(l, u)
  }
  n.generate=e;
  function t(l){
    return wWl(l)
  }
  n.parse=t;
  function i(l, u){
    return l.with({
      scheme:_n.vscodeNotebookCellOutput,query:new URLSearchParams({
        openIn:"editor",outputId:u??"",notebookScheme:l.scheme!==_n.file?l.scheme:""
      }).toString()
    })
  }
  n.generateCellOutputUriWithId=i;
  function r(l, u, d){
    return l.with({
      scheme:_n.vscodeNotebookCellOutput,fragment:u.fragment,query:new URLSearchParams({
        openIn:"notebook",outputIndex:String(d)
      }).toString()
    })
  }
  n.generateCellOutputUriWithIndex=r;
  function s(l){
    return _Wl(l)
  }
  n.parseCellOutputUri=s;
  function o(l, u, d){
    return n.generate(l, u).with({
      scheme:d
    })
  }
  n.generateCellPropertyUri=o;
  function a(l, u){
    if(l.scheme===u)return n.parse(l.with({
      scheme:n.scheme
    }))
  }
  n.parseCellPropertyUri=a
})(Dg||(Dg={
  
})), Qpi=n=>Sc?n.replace(/\//g, "\\"):n, vfg=class{
  constructor(n=[], e=kWl){
    this.defaultOrder=e, this.order=[...new Set(n)].map(t=>({
      pattern:t,matches:jae(Qpi(t))
    }))
  }
  sort(n){
    const e=new Map(bl.map(n, i=>[i, Qpi(i)]));
    let t=[];
    for(const{
      matches:i
    }
    of this.order)for(const[r, s]of e)if(i(s)){
      t.push(r),e.delete(r);
      break
    }
    return e.size&&(t=t.concat([...e.keys()].sort((i, r)=>this.defaultOrder.indexOf(i)-this.defaultOrder.indexOf(r)))), t
  }
  prioritize(n, e){
    const t=this.findIndex(n);
    if(t===-1){
      this.order.unshift({
        pattern:n,matches:jae(Qpi(n))
      });
      return
    }
    const i=new Set(e.map(s=>this.findIndex(s, t)));
    i.delete(-1);
    const r=Array.from(i).sort();
    this.order.splice(t+1, 0, ...r.map(s=>this.order[s]));
    for(let s=r.length-1;
    s>=0;
    s--)this.order.splice(r[s], 1)
  }
  toArray(){
    return this.order.map(n=>n.pattern)
  }
  findIndex(n, e=this.order.length){
    const t=Qpi(n);
    for(let i=0;
    i<e;
    i++)if(this.order[i].matches(t))return i;
    return-1
  }
}, cNe=new Sn("notebookEditorCursorAtBoundary", "none"), Afg=new Sn("notebookEditorCursorAtLineBoundary", "none"), (function(n){
  n.default="default", n.option="option"
})(jpi||(jpi={
  
})), (function(n){
  n.Cells="cells", n.Text="text", n.None="none"
})(Wne||(Wne={
  
})), yo={
  displayOrder:"notebook.displayOrder", cellToolbarLocation:"notebook.cellToolbarLocation", cellToolbarVisibility:"notebook.cellToolbarVisibility", showCellStatusBar:"notebook.showCellStatusBar", cellExecutionTimeVerbosity:"notebook.cellExecutionTimeVerbosity", textDiffEditorPreview:"notebook.diff.enablePreview", diffOverviewRuler:"notebook.diff.overviewRuler", experimentalInsertToolbarAlignment:"notebook.experimental.insertToolbarAlignment", compactView:"notebook.compactView", focusIndicator:"notebook.cellFocusIndicator", insertToolbarLocation:"notebook.insertToolbarLocation", globalToolbar:"notebook.globalToolbar", stickyScrollEnabled:"notebook.stickyScroll.enabled", stickyScrollMode:"notebook.stickyScroll.mode", undoRedoPerCell:"notebook.undoRedoPerCell", consolidatedOutputButton:"notebook.consolidatedOutputButton", showFoldingControls:"notebook.showFoldingControls", dragAndDropEnabled:"notebook.dragAndDropEnabled", cellEditorOptionsCustomizations:"notebook.editorOptionsCustomizations", consolidatedRunButton:"notebook.consolidatedRunButton", openGettingStarted:"notebook.experimental.openGettingStarted", globalToolbarShowLabel:"notebook.globalToolbarShowLabel", markupFontSize:"notebook.markup.fontSize", markdownLineHeight:"notebook.markdown.lineHeight", interactiveWindowCollapseCodeCells:"interactiveWindow.collapseCellInputCode", outputScrollingDeprecated:"notebook.experimental.outputScrolling", outputScrolling:"notebook.output.scrolling", textOutputLineLimit:"notebook.output.textLineLimit", LinkifyOutputFilePaths:"notebook.output.linkifyFilePaths", minimalErrorRendering:"notebook.output.minimalErrorRendering", formatOnSave:"notebook.formatOnSave.enabled", insertFinalNewline:"notebook.insertFinalNewline", defaultFormatter:"notebook.defaultFormatter", formatOnCellExecution:"notebook.formatOnCellExecution", codeActionsOnSave:"notebook.codeActionsOnSave", outputWordWrap:"notebook.output.wordWrap", outputLineHeightDeprecated:"notebook.outputLineHeight", outputLineHeight:"notebook.output.lineHeight", outputFontSizeDeprecated:"notebook.outputFontSize", outputFontSize:"notebook.output.fontSize", outputFontFamilyDeprecated:"notebook.outputFontFamily", outputFontFamily:"notebook.output.fontFamily", findFilters:"notebook.find.filters", logging:"notebook.logging", confirmDeleteRunningCell:"notebook.confirmDeleteRunningCell", remoteSaving:"notebook.experimental.remoteSave", gotoSymbolsAllSymbols:"notebook.gotoSymbols.showAllSymbols", outlineShowMarkdownHeadersOnly:"notebook.outline.showMarkdownHeadersOnly", outlineShowCodeCells:"notebook.outline.showCodeCells", outlineShowCodeCellSymbols:"notebook.outline.showCodeCellSymbols", breadcrumbsShowCodeCells:"notebook.breadcrumbs.showCodeCells", scrollToRevealCell:"notebook.scrolling.revealNextCellOnExecute", cellChat:"notebook.experimental.cellChat", cellGenerate:"notebook.experimental.generate", notebookVariablesView:"notebook.variablesView", notebookInlineValues:"notebook.inlineValues", InteractiveWindowPromptToSave:"interactiveWindow.promptToSaveOnClose", cellFailureDiagnostics:"notebook.cellFailureDiagnostics", outputBackupSizeLimit:"notebook.backup.sizeLimit", multiCursor:"notebook.multiCursor.enabled", markupFontFamily:"notebook.markup.fontFamily"
}, (function(n){
  n[n.Left=1]="Left", n[n.Right=2]="Right"
})(yfg||(yfg={
  
})), qun=class vWa{
  static{
    this._prefix="notebook/"
  }
  static create(e, t){
    return`${vWa._prefix}${e}/${t??e}`
  }
  static parse(e){
    if(e.startsWith(vWa._prefix)){
      const t=e.substring(vWa._prefix.length).split("/");
      if(t.length===2)return{
        notebookType:t[0],viewType:t[1]
      }
    }
  }
}, wfg=new TextDecoder, zpi="\x1B[A", jca=zpi.split("").map(n=>n.charCodeAt(0)), _fg=10, Cfg=8, Sfg=13
}
});
function kfg(n){
  return!n||typeof n!="object"?!1:typeof n.start=="number"&&typeof n.end=="number"
}
function Vpi(n){
  n.sort((t, i)=>t-i);
  const e=n.shift();
  return e===void 0?[]:n.reduce(function(t, i){
    return i<=t[0][1]?t[0][1]=i+1:t.unshift([i, i+1]), t
  }, [[e, e+1]]).reverse().map(t=>({
    start:t[0], end:t[1]
  }))
}
function Qne(n){
  return n.reduce((t, i)=>{
    for(let r=i.start;
    r<i.end;
    r++)t.push(r);
    return t
  }, [])
}
function QUe(n){
  const e=n.sort((r, s)=>r.start-s.start), t=e[0];
  if(!t)return[];
  const i=e.reduce((r, s)=>{
    const o=r[r.length-1];
    return o.end>=s.start?o.end=Math.max(o.end, s.end):r.push(s), r
  }, [t]);
  return i.length>1?i.filter(r=>!(r.start===r.end&&r.start===0)):i
}
function aCA(n, e){
  if(n=QUe(n), e=QUe(e), n.length!==e.length)return!1;
  for(let t=0;
  t<n.length;
  t++)if(n[t].start!==e[t].start||n[t].end!==e[t].end)return!1;
  return!0
}
function EWl(n, e){
  return e.start>=n.start&&e.end<=n.end
}
var W1e=