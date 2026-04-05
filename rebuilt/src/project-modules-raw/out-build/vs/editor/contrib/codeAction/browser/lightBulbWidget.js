// Module: out-build/vs/editor/contrib/codeAction/browser/lightBulbWidget.js
// Offset: 4181341 (bundle byte offset)
// Size: 8022 bytes

ri(), Dx(), qi(), yn(), rt(), Jr(), ZvA(), xw(), bv(), JEc(), mve(), Ht(), ka(), Pm(), ts(), f5c=us("gutter-lightbulb", Be.lightBulb, _(1012, null)), b5c=us("gutter-lightbulb-auto-fix", Be.lightbulbAutofix, _(1013, null)), v5c=us("gutter-lightbulb-sparkle", Be.lightbulbSparkle, _(1014, null)), A5c=us("gutter-lightbulb-aifix-auto-fix", Be.lightbulbSparkleAutofix, _(1015, null)), y5c=us("gutter-lightbulb-sparkle-filled", Be.sparkleFilled, _(1016, null)), (function(n){
  let e;
  (function(i){
    i[i.Hidden=0]="Hidden", i[i.Showing=1]="Showing"
  })(e=n.Type||(n.Type={
    
  })), n.Hidden={
    type:0
  };
  class t{
    constructor(r, s, o, a){
      this.actions=r,this.trigger=s,this.editorPosition=o,this.widgetPosition=a,this.type=1
    }
  }
  n.Showing=t
})(mke||(mke={
  
})), U9t=class extends at{
  static{
    O9t=this
  }
  static{
    this.GUTTER_DECORATION=Zh.register({
      description:"codicon-gutter-lightbulb-decoration",glyphMarginClassName:Qt.asClassName(Be.lightBulb),glyphMargin:{
        position:G$.Left
      },stickiness:1
    })
  }
  static{
    this.ID="editor.contrib.lightbulbWidget"
  }
  static{
    this._posPref=[0]
  }
  constructor(e, t){
    super(), this._editor=e, this._keybindingService=t, this._onClick=this._register(new Qe), this.onClick=this._onClick.event, this._state=mke.Hidden, this._gutterState=mke.Hidden, this._iconClasses=[], this.lightbulbClasses=["codicon-"+f5c.id, "codicon-"+A5c.id, "codicon-"+b5c.id, "codicon-"+v5c.id, "codicon-"+y5c.id], this.gutterDecoration=O9t.GUTTER_DECORATION, this._domNode=Ct("div.lightBulbWidget"), this._domNode.role="listbox", this._register(E1.ignoreTarget(this._domNode)), this._editor.addContentWidget(this), this._register(this._editor.onDidChangeModelContent(i=>{
      const r=this._editor.getModel();
      (this.state.type!==1||!r||this.state.editorPosition.lineNumber>=r.getLineCount())&&this.hide(),(this.gutterState.type!==1||!r||this.gutterState.editorPosition.lineNumber>=r.getLineCount())&&this.gutterHide()
    })), this._register($Be(this._domNode, i=>{
      if(this.state.type!==1)return;
      this._editor.focus(),i.preventDefault();
      const{
        top:r,height:s
      }
      =qS(this._domNode),o=this._editor.getOption(68);
      let a=Math.floor(o/3);
      this.state.widgetPosition.position!==null&&this.state.widgetPosition.position.lineNumber<this.state.editorPosition.lineNumber&&(a+=o),this._onClick.fire({
        x:i.posx,y:r+s+a,actions:this.state.actions,trigger:this.state.trigger
      })
    })), this._register(ei(this._domNode, "mouseenter", i=>{
      (i.buttons&1)===1&&this.hide()
    })), this._register(In.runAndSubscribe(this._keybindingService.onDidUpdateKeybindings, ()=>{
      this._preferredKbLabel=this._keybindingService.lookupKeybinding(qBc)?.getLabel()??void 0,this._quickFixKbLabel=this._keybindingService.lookupKeybinding(c9o)?.getLabel()??void 0,this._updateLightBulbTitleAndIcon()
    })), this._register(this._editor.onMouseDown(async i=>{
      if(!i.target.element||!this.lightbulbClasses.some(l=>i.target.element&&i.target.element.classList.contains(l))||this.gutterState.type!==1)return;
      this._editor.focus();
      const{
        top:r,height:s
      }
      =qS(i.target.element),o=this._editor.getOption(68);
      let a=Math.floor(o/3);
      this.gutterState.widgetPosition.position!==null&&this.gutterState.widgetPosition.position.lineNumber<this.gutterState.editorPosition.lineNumber&&(a+=o),this._onClick.fire({
        x:i.event.posx,y:r+s+a,actions:this.gutterState.actions,trigger:this.gutterState.trigger
      })
    }))
  }
  dispose(){
    super.dispose(), this._editor.removeContentWidget(this), this._gutterDecorationID&&this._removeGutterDecoration(this._gutterDecorationID)
  }
  getId(){
    return"LightBulbWidget"
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return this._state.type===1?this._state.widgetPosition:null
  }
  update(e, t, i){
    if(e.validActions.length<=0)return this.gutterHide(), this.hide();
    if(!this._editor.hasTextFocus())return this.gutterHide(), this.hide();
    if(!this._editor.getOptions().get(66).enabled)return this.gutterHide(), this.hide();
    const o=this._editor.getModel();
    if(!o)return this.gutterHide(), this.hide();
    const{
      lineNumber:a,column:l
    }
    =o.validatePosition(i), u=o.getOptions().tabSize, d=this._editor.getOptions().get(52), m=o.getLineContent(a), p=mOo(m, u), g=d.spaceWidth*p>22, f=R=>R>2&&this._editor.getTopForLineNumber(R)===this._editor.getTopForLineNumber(R-1), A=this._editor.getLineDecorations(a);
    let w=!1;
    if(A)for(const R of A){
      const N=R.options.glyphMarginClassName;
      if(N&&!this.lightbulbClasses.some(M=>N.includes(M))){
        w=!0;
        break
      }
    }
    let C=a, x=1;
    if(!g){
      const R=N=>{
        const M=o.getLineContent(N);
        return/^\s*$|^\s+/.test(M)||M.length<=x
      };
      if(a>1&&!f(a-1)){
        const N=o.getLineCount(),M=a===N,O=a>1&&R(a-1),$=!M&&R(a+1),H=R(a),W=!$&&!O;
        if(!$&&!O&&!w)return this.gutterState=new mke.Showing(e,t,i,{
          position:{
            lineNumber:C,column:x
          },preference:O9t._posPref
        }),this.renderGutterLightbub(),this.hide();
        O||M||O&&!H?C-=1:($||W&&H)&&(C+=1)
      }
      else if(a===1&&(a===o.getLineCount()||!R(a+1)&&!R(a)))if(this.gutterState=new mke.Showing(e,t,i,{
        position:{
          lineNumber:C,column:x
        },preference:O9t._posPref
      }),w)this.gutterHide();
      else return this.renderGutterLightbub(),this.hide();
      else if(a<o.getLineCount()&&!f(a+1))C+=1;
      else if(l*d.spaceWidth<22)return this.hide();
      x=/^\S\s*$/.test(o.getLineContent(C))?2:1
    }
    this.state=new mke.Showing(e, t, i, {
      position:{
        lineNumber:C,column:x
      },preference:O9t._posPref
    }), this._gutterDecorationID&&(this._removeGutterDecoration(this._gutterDecorationID), this.gutterHide());
    const I=e.validActions, B=e.validActions[0].action.kind;
    if(I.length!==1||!B){
      this._editor.layoutContentWidget(this);
      return
    }
    this._editor.layoutContentWidget(this)
  }
  hide(){
    this.state!==mke.Hidden&&(this.state=mke.Hidden, this._editor.layoutContentWidget(this))
  }
  gutterHide(){
    this.gutterState!==mke.Hidden&&(this._gutterDecorationID&&this._removeGutterDecoration(this._gutterDecorationID), this.gutterState=mke.Hidden)
  }
  get state(){
    return this._state
  }
  set state(e){
    this._state=e, this._updateLightBulbTitleAndIcon()
  }
  get gutterState(){
    return this._gutterState
  }
  set gutterState(e){
    this._gutterState=e, this._updateGutterLightBulbTitleAndIcon()
  }
  _updateLightBulbTitleAndIcon(){
    if(this._domNode.classList.remove(...this._iconClasses), this._iconClasses=[], this.state.type!==1)return;
    let e, t=!1;
    this.state.actions.allAIFixes?(e=Be.sparkleFilled, this.state.actions.validActions.length===1&&(t=!0)):this.state.actions.hasAutoFix?this.state.actions.hasAIFix?e=Be.lightbulbSparkleAutofix:e=Be.lightbulbAutofix:this.state.actions.hasAIFix?e=Be.lightbulbSparkle:e=Be.lightBulb, this._updateLightbulbTitle(this.state.actions.hasAutoFix, t), this._iconClasses=Qt.asClassNameArray(e), this._domNode.classList.add(...this._iconClasses)
  }
  _updateGutterLightBulbTitleAndIcon(){
    if(this.gutterState.type!==1)return;
    let e, t=!1;
    this.gutterState.actions.allAIFixes?(e=y5c, this.gutterState.actions.validActions.length===1&&(t=!0)):this.gutterState.actions.hasAutoFix?this.gutterState.actions.hasAIFix?e=A5c:e=b5c:this.gutterState.actions.hasAIFix?e=v5c:e=f5c, this._updateLightbulbTitle(this.gutterState.actions.hasAutoFix, t);
    const i=Zh.register({
      description:"codicon-gutter-lightbulb-decoration",glyphMarginClassName:Qt.asClassName(e),glyphMargin:{
        position:G$.Left
      },stickiness:1
    });
    this.gutterDecoration=i
  }
  renderGutterLightbub(){
    const e=this._editor.getSelection();
    e&&(this._gutterDecorationID===void 0?this._addGutterDecoration(e.startLineNumber):this._updateGutterDecoration(this._gutterDecorationID, e.startLineNumber))
  }
  _addGutterDecoration(e){
    this._editor.changeDecorations(t=>{
      this._gutterDecorationID=t.addDecoration(new Zt(e,0,e,0),this.gutterDecoration)
    })
  }
  _removeGutterDecoration(e){
    this._editor.changeDecorations(t=>{
      t.removeDecoration(e),this._gutterDecorationID=void 0
    })
  }
  _updateGutterDecoration(e, t){
    this._editor.changeDecorations(i=>{
      i.changeDecoration(e,new Zt(t,0,t,0)),i.changeDecorationOptions(e,this.gutterDecoration)
    })
  }
  _updateLightbulbTitle(e, t){
    this.state.type===1&&(t?this.title=_(1017, null, this.state.actions.validActions[0].action.title):e&&this._preferredKbLabel?this.title=_(1018, null, this._preferredKbLabel):!e&&this._quickFixKbLabel?this.title=_(1019, null, this._quickFixKbLabel):e||(this.title=_(1020, null)))
  }
  set title(e){
    this._domNode.title=e
  }
}, U9t=O9t=__decorate([__param(1, mo)], U9t)
}
}), $9t, hJh, Xte, l8e=