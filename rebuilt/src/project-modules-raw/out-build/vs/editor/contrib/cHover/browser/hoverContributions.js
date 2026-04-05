// Module: out-build/vs/editor/contrib/cHover/browser/hoverContributions.js
// Offset: 34009329 (bundle byte offset)
// Size: 3182 bytes

Cu(), L0(), rt(), Ei(), si(), Wt(), ay(), Dd(), TV(), Qh(), Cm(), Ymy(), x7e=class extends at{
  static{
    sCu=this
  }
  static{
    this.ID="editor.contrib.hoverController"
  }
  static get(e){
    return e.getContribution(sCu.ID)
  }
  constructor(e, t, i, r, s, o, a){
    super(), this.contextKeyService=i, this._instantiationService=r, this._reactiveStorageService=o, this.configurationService=a, this.deactivated=!1, this._isMouseDown=!1, this._editor=e, this._register(this._editor.onDidChangeModel(()=>this.update())), this._register(this._editor.onDidChangeModelLanguage(()=>this.update())), this._register(this._editor.onDidBlurEditorText(()=>this.update())), this._register(this._editor.onDidBlurEditorWidget(()=>this.update())), this._register(this._editor.onDidChangeCursorPosition(()=>this.update())), this._register(this._editor.onMouseDown(()=>{
      this._isMouseDown=!0,this.update()
    })), this._register(this._editor.onMouseUp(()=>{
      this._isMouseDown=!1,this.update()
    })), this._widget=new Ob(()=>{
      const u=this._register(r.createInstance(zDa,this._editor));
      return this._register(u.onClick(d=>{
        
      })),u
    }), this._register(i.onDidChangeContext(u=>{
      u.affectsSome(new Set([Ci.hasActivelyGeneratingDiff.key]))&&Ci.hasActivelyGeneratingDiff.getValue(i)&&this._widget.value.hide(),u.affectsSome(new Set([Ykt.key]))&&this.update()
    })), this.reactiveStorageRoot=this._register(this._reactiveStorageService.createScoped(this)), this.reactiveStorageRoot.onChangeEffect({
      deps:[()=>this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip],onChange:()=>{
        this.update()
      }
    });
    const l=()=>{
      const u=this._editor.getOptions(),d=u.get(142),m=d==="inherit"?u.get(141):d,g=(m==="inherit"?u.get(137):m)!=="off";
      this._widget.value.isWordWrap=g
    };
    if(l(), this._register(this._editor.onDidChangeConfiguration(u=>{
      l()
    })), this.update(), !e.shouldShowHover){
      this.deactivated=!0;
      return
    }
  }
  _getRangeOfSelectionUnlessWhitespaceEnclosed(){
    if(!this._editor.hasModel())return;
    const e=this._editor.getModel(), t=this._editor.getSelection();
    if(t.isEmpty()){
      const{
        lineNumber:i,column:r
      }
      =t.getPosition(),s=e.getLineContent(i);
      if(s.length===0)return;
      if(r===1){
        if(/\s/.test(s[0]))return
      }
      else if(r===e.getLineMaxColumn(i)){
        if(/\s/.test(s[s.length-1]))return
      }
      else if(/\s/.test(s[r-2])&&/\s/.test(s[r-1]))return
    }
    return t
  }
  isMultiline(e){
    return e.startLineNumber!==e.endLineNumber
  }
  update(){
    if(!this._editor.shouldShowHover||this.deactivated)return;
    const e=this._editor.getModel();
    if(e){
      const t=this._getRangeOfSelectionUnlessWhitespaceEnclosed(),i=t&&(t.endLineNumber-t.startLineNumber>0||t.endColumn-t.startColumn>e.getLineMaxColumn(t.startLineNumber)/2),r=Ykt.getValue(this.contextKeyService);
      !this._isMouseDown&&i&&this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip!==!0&&!r?this._widget.value.update():this._widget.value.hide()
    }
  }
  hideHoverWidget(){
    this.deactivated||this._widget.value.hide()
  }
}, x7e=sCu=__decorate([__param(1, bk), __param(2, wi), __param(3, ln), __param(4, $u), __param(5, ku), __param(6, Fn)], x7e), Mg(x7e.ID, x7e, 3)
}
});
function Z$f(n, e){
  return e.suggestion.value!==void 0&&n.applicationUserPersistentStorage.cppConfig?.isGhostText===!0
}
var oCu, X$f, qrt, KDa=