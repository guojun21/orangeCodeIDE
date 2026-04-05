// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellEditorOptions.js
// Offset: 33242225 (bundle byte offset)
// Size: 3347 bytes

yn(), Ht(), dr(), Ei(), Mp(), si(), Ws(), Mm(), AN(), i1(), LQ(), ph(), xbn=class extends JV{
  set tabSize(n){
    this._tabSize!==n&&(this._tabSize=n, this._onDidChange.fire())
  }
  get tabSize(){
    return this._tabSize
  }
  set indentSize(n){
    this._indentSize!==n&&(this._indentSize=n, this._onDidChange.fire())
  }
  get indentSize(){
    return this._indentSize
  }
  set insertSpaces(n){
    this._insertSpaces!==n&&(this._insertSpaces=n, this._onDidChange.fire())
  }
  get insertSpaces(){
    return this._insertSpaces
  }
  constructor(n, e, t){
    super(), this.base=n, this.notebookOptions=e, this.configurationService=t, this._lineNumbers="inherit", this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._register(n.onDidChange(()=>{
      this._recomputeOptions()
    })), this._value=this._computeEditorOptions()
  }
  updateState(n, e){
    e.cellLineNumberChanged&&this.setLineNumbers(n.lineNumbers)
  }
  _recomputeOptions(){
    this._value=this._computeEditorOptions(), this._onDidChange.fire()
  }
  _computeEditorOptions(){
    const n=this.base.value, e=this.notebookOptions.getDisplayOptions().editorOptionsCustomizations, t=e?.["editor.indentSize"];
    t!==void 0&&(this.indentSize=t);
    const i=e?.["editor.insertSpaces"];
    i!==void 0&&(this.insertSpaces=i);
    const r=e?.["editor.tabSize"];
    r!==void 0&&(this.tabSize=r);
    let s=n.lineNumbers;
    switch(this._lineNumbers){
      case"inherit":this.configurationService.getValue("notebook.lineNumbers")==="on"?n.lineNumbers==="off"&&(s="on"):s="off";
      break;
      case"on":n.lineNumbers==="off"&&(s="on");
      break;
      case"off":s="off";
      break
    }
    const o={
      
    };
    return n.lineNumbers!==s&&(o.lineNumbers=s), this.notebookOptions.getLayoutConfiguration().disableRulers&&(o.rulers=[]), {
      ...n,...o
    }
  }
  getUpdatedValue(n, e){
    const t=this.getValue(n, e);
    return delete t.hover, t
  }
  getValue(n, e){
    return{
      ...this._value,padding:this.notebookOptions.computeEditorPadding(n,e)
    }
  }
  getDefaultValue(){
    return{
      ...this._value,padding:{
        top:12,bottom:12
      }
    }
  }
  setLineNumbers(n){
    this._lineNumbers=n, this._recomputeOptions()
  }
}, Di.as(Dh.Configuration).registerConfiguration({
  id:"notebook", order:100, type:"object", properties:{
    "notebook.lineNumbers":{
      type:"string",enum:["off","on"],default:"off",markdownDescription:_(9470,null)
    }
  }
}), Dt(class extends rn{
  constructor(){
    super({
      id:"notebook.toggleLineNumbers",title:dt(9473,"Toggle Notebook Line Numbers"),precondition:dv,menu:[{
        id:st.NotebookToolbar,group:"notebookLayout",order:2,when:Ee.equals("config.notebook.globalToolbar",!0)
      }
      ],category:o7,f1:!0,toggled:{
        condition:Ee.notEquals("config.notebook.lineNumbers","off"),title:_(9471,null)
      }
    })
  }
  async run(e){
    const t=e.get(Fn);
    t.getValue("notebook.lineNumbers")==="on"?t.updateValue("notebook.lineNumbers", "off"):t.updateValue("notebook.lineNumbers", "on")
  }
}), Dt(class extends $U{
  constructor(){
    super({
      id:"notebook.cell.toggleLineNumbers",title:_(9472,null),precondition:ow.isEqualTo(lCt),menu:[{
        id:st.NotebookCellTitle,group:"View",order:1
      }
      ],toggled:Ee.or(Z0a.isEqualTo("on"),Ee.and(Z0a.isEqualTo("inherit"),Ee.equals("config.notebook.lineNumbers","on")))
    })
  }
  async runWithContext(e, t){
    if(t.ui)this.updateCell(e.get(Fn), t.cell);
    else{
      const i=e.get(Fn);
      t.selectedCells.forEach(r=>{
        this.updateCell(i,r)
      })
    }
  }
  updateCell(e, t){
    const i=e.getValue("notebook.lineNumbers")==="on", r=t.lineNumbers;
    r==="on"||r==="inherit"&&i?t.lineNumbers="off":t.lineNumbers="on"
  }
})
}
}), D8f, xTa, ldy=