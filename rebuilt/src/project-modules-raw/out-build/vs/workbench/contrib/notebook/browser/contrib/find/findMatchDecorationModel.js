// Module: out-build/vs/workbench/contrib/notebook/browser/contrib/find/findMatchDecorationModel.js
// Offset: 33333937 (bundle byte offset)
// Size: 2966 bytes

rt(), aQl(), Nl(), Sb(), m_u=class extends at{
  constructor(n, e){
    super(), this._notebookEditor=n, this.ownerID=e, this._allMatchesDecorations=[], this._currentMatchCellDecorations=[], this._allMatchesCellDecorations=[], this._currentMatchDecorations=null
  }
  get currentMatchDecorations(){
    return this._currentMatchDecorations
  }
  clearDecorations(){
    this.clearCurrentFindMatchDecoration(), this.setAllFindMatchesDecorations([])
  }
  async highlightCurrentFindMatchDecorationInCell(n, e){
    return this.clearCurrentFindMatchDecoration(), this._notebookEditor.changeModelDecorations(t=>{
      const i=edn._CURRENT_FIND_MATCH_DECORATION,r=[{
        range:e,options:i
      }
      ],s={
        ownerId:n.handle,decorations:r
      };
      this._currentMatchDecorations={
        kind:"input",decorations:t.deltaDecorations(this._currentMatchDecorations?.kind==="input"?this._currentMatchDecorations.decorations:[],[s])
      }
    }), this._currentMatchCellDecorations=this._notebookEditor.deltaCellDecorations(this._currentMatchCellDecorations, [{
      handle:n.handle,options:{
        overviewRuler:{
          color:q4n,modelRanges:[e],includeOutput:!1,position:HU.Center
        }
      }
    }
    ]), null
  }
  async highlightCurrentFindMatchDecorationInWebview(n, e){
    this.clearCurrentFindMatchDecoration();
    const t=await this._notebookEditor.findHighlightCurrent(e, this.ownerID);
    return this._currentMatchDecorations={
      kind:"output",index:e
    }, this._currentMatchCellDecorations=this._notebookEditor.deltaCellDecorations(this._currentMatchCellDecorations, [{
      handle:n.handle,options:{
        overviewRuler:{
          color:q4n,modelRanges:[],includeOutput:!0,position:HU.Center
        }
      }
    }
    ]), t
  }
  clearCurrentFindMatchDecoration(){
    this._currentMatchDecorations?.kind==="input"?this._notebookEditor.changeModelDecorations(n=>{
      n.deltaDecorations(this._currentMatchDecorations?.kind==="input"?this._currentMatchDecorations.decorations:[],[]),this._currentMatchDecorations=null
    }):this._currentMatchDecorations?.kind==="output"&&this._notebookEditor.findUnHighlightCurrent(this._currentMatchDecorations.index, this.ownerID), this._currentMatchCellDecorations=this._notebookEditor.deltaCellDecorations(this._currentMatchCellDecorations, [])
  }
  setAllFindMatchesDecorations(n){
    this._notebookEditor.changeModelDecorations(e=>{
      const t=edn._FIND_MATCH_DECORATION,i=n.map(r=>{
        const s=new Array(r.contentMatches.length);
        for(let o=0;
        o<r.contentMatches.length;
        o++)s[o]={
          range:r.contentMatches[o].range,options:t
        };
        return{
          ownerId:r.cell.handle,decorations:s
        }
      });
      this._allMatchesDecorations=e.deltaDecorations(this._allMatchesDecorations,i)
    }), this._allMatchesCellDecorations=this._notebookEditor.deltaCellDecorations(this._allMatchesCellDecorations, n.map(e=>({
      ownerId:e.cell.handle,handle:e.cell.handle,options:{
        overviewRuler:{
          color:W5e,modelRanges:e.contentMatches.map(t=>t.range),includeOutput:e.webviewMatches.length>0,position:HU.Center
        }
      }
    })))
  }
  stopWebviewFind(){
    this._notebookEditor.findStop(this.ownerID)
  }
  dispose(){
    this.clearDecorations(), super.dispose()
  }
}
}
}), Aki, qTa, HTa=