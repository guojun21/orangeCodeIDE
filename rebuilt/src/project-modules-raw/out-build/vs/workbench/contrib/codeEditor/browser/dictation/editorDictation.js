// Module: out-build/vs/workbench/contrib/codeEditor/browser/dictation/editorDictation.js
// Offset: 33172255 (bundle byte offset)
// Size: 4031 bytes

Wuy(), Ht(), Po(), rt(), si(), ZNe(), qi(), Cu(), Qh(), ka(), nI(), db(), tl(), ts(), dr(), Js(), Ov(), nl(), Jr(), _r(), Mwu=new Sn("editorDictation.inProgress", !1), Fwu=dt(5741, "Voice"), c8f=class extends xx{
  constructor(){
    super({
      id:"workbench.action.editorDictation.start",title:dt(5742,"Start Dictation in Editor"),category:Fwu,precondition:Ee.and(ukt,Sva.toNegated(),Ci.readOnly.toNegated()),f1:!0,keybinding:{
        primary:2612,weight:200,secondary:Sc?[603]:void 0
      }
    })
  }
  runEditorCommand(n, e){
    const i=n.get(mo).enableKeybindingHoldMode(this.desc.id);
    if(i){
      let r=!1;
      const s=setTimeout(()=>{
        r=!0
      },500);
      i.finally(()=>{
        clearTimeout(s),r&&lwe.get(e)?.stop()
      })
    }
    lwe.get(e)?.start()
  }
}, pTa=class yzb extends xx{
  static{
    this.ID="workbench.action.editorDictation.stop"
  }
  constructor(){
    super({
      id:yzb.ID,title:dt(5743,"Stop Dictation in Editor"),category:Fwu,precondition:Mwu,f1:!0,keybinding:{
        primary:9,weight:300
      }
    })
  }
  runEditorCommand(e, t){
    lwe.get(t)?.stop()
  }
}, l8f=class extends at{
  constructor(n, e){
    super(), this.editor=n, this.suppressMouseDown=!0, this.allowEditorOverflow=!0, this.domNode=document.createElement("div");
    const t=this._register(new Gf(this.domNode)), i=e.lookupKeybinding(pTa.ID)?.getLabel();
    t.push(Sh({
      id:pTa.ID,label:i?_(5739,null,i):_(5740,null),class:Qt.asClassName(Be.micFilled),run:()=>lwe.get(n)?.stop()
    }), {
      icon:!0,label:!1,keybinding:i
    }), this.domNode.classList.add("editor-dictation-widget"), this.domNode.appendChild(t.domNode)
  }
  getId(){
    return"editorDictation"
  }
  getDomNode(){
    return this.domNode
  }
  getPosition(){
    if(!this.editor.hasModel())return null;
    const n=this.editor.getSelection();
    return{
      position:n.getPosition(),preference:[n.getPosition().equals(n.getStartPosition())?1:2,0]
    }
  }
  beforeRender(){
    const n=this.editor.getOption(68), e=this.editor.getLayoutInfo().contentWidth*.7;
    return this.domNode.style.setProperty("--vscode-editor-dictation-widget-height", `${n}px`), this.domNode.style.setProperty("--vscode-editor-dictation-widget-width", `${e}px`), null
  }
  show(){
    this.editor.addContentWidget(this)
  }
  layout(){
    this.editor.layoutContentWidget(this)
  }
  active(){
    this.domNode.classList.add("recording")
  }
  hide(){
    this.domNode.classList.remove("recording"), this.editor.removeContentWidget(this)
  }
}, lwe=class extends at{
  static{
    mTa=this
  }
  static{
    this.ID="editorDictation"
  }
  static get(e){
    return e.getContribution(mTa.ID)
  }
  constructor(e, t, i, r){
    super(), this.editor=e, this.speechService=t, this.sessionDisposables=this._register(new uo), this.widget=this._register(new l8f(this.editor, r)), this.editorDictationInProgress=Mwu.bindTo(i)
  }
  async start(){
    const e=new Ut;
    this.sessionDisposables.value=e, this.widget.show(), e.add($i(()=>this.widget.hide())), this.editorDictationInProgress.set(!0), e.add($i(()=>this.editorDictationInProgress.reset()));
    const t=this.editor.createDecorationsCollection();
    e.add($i(()=>t.clear())), e.add(this.editor.onDidChangeCursorPosition(()=>this.widget.layout()));
    let i, r=0;
    const s=(l, u)=>{
      i||(i=ed(this.editor.getPosition()));
      const d=new ar(i.lineNumber,i.column+l.length);
      this.editor.executeEdits(mTa.ID,[zb.replace(Zt.fromPositions(i,i.with(void 0,i.column+r)),l)],[Vl.fromPositions(d)]),u?t.set([{
        range:Zt.fromPositions(i,i.with(void 0,i.column+l.length)),options:{
          description:"editor-dictation-preview",inlineClassName:"ghost-text-decoration-preview"
        }
      }
      ]):t.clear(),r=l.length,u||(i=void 0,r=0),this.editor.revealPositionInCenterIfOutsideViewport(d)
    }, o=new Wc;
    e.add($i(()=>o.dispose(!0)));
    const a=await this.speechService.createSpeechToTextSession(o.token, "editor");
    e.add(a.onDidChange(l=>{
      if(!o.token.isCancellationRequested)switch(l.status){
        case n5.Started:this.widget.active();
        break;
        case n5.Stopped:e.dispose();
        break;
        case n5.Recognizing:{
          if(!l.text)return;
          s(l.text,!0);
          break
        }
        case n5.Recognized:{
          if(!l.text)return;
          s(`${l.text} `,!1);
          break
        }
      }
    }))
  }
  stop(){
    this.sessionDisposables.clear()
  }
}, lwe=mTa=__decorate([__param(1, IEe), __param(2, wi), __param(3, mo)], lwe), Mg(lwe.ID, lwe, 4), Dt(c8f), Dt(pTa)
}
});
function Quy(n, e){
  return C5e(n, (t, i)=>i===!0?!0:e(t))
}
var nki, Uwu=