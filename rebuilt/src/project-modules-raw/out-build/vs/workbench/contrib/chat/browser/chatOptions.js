// Module: out-build/vs/workbench/contrib/chat/browser/chatOptions.js
// Offset: 32882247 (bundle byte offset)
// Size: 2255 bytes

yn(), rt(), Ei(), Io(), jh(), Jxa=class extends at{
  static{
    Hxa=this
  }
  static{
    this.lineHeightEm=1.4
  }
  get configuration(){
    return this._config
  }
  static{
    this.relevantSettingIds=["chat.editor.lineHeight", "chat.editor.fontSize", "chat.editor.fontFamily", "chat.editor.fontWeight", "chat.editor.wordWrap", "editor.cursorBlinking", "editor.fontLigatures", "editor.accessibilitySupport", "editor.bracketPairColorization.enabled", "editor.bracketPairColorization.independentColorPoolPerBracketType"]
  }
  constructor(e, t, i, r, s, o, a){
    super(), this.foreground=t, this.inputEditorBackgroundColor=i, this.resultEditorBackgroundColor=r, this.configurationService=s, this.themeService=o, this.viewDescriptorService=a, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._register(this.themeService.onDidColorThemeChange(l=>this.update())), this._register(this.viewDescriptorService.onDidChangeLocation(l=>{
      l.views.some(u=>u.id===e)&&this.update()
    })), this._register(this.configurationService.onDidChangeConfiguration(l=>{
      Hxa.relevantSettingIds.some(u=>l.affectsConfiguration(u))&&this.update()
    })), this.update()
  }
  update(){
    const e=this.configurationService.getValue("editor"), t=this.configurationService.getValue("chat")?.editor, i=this.configurationService.getValue("editor.accessibilitySupport");
    this._config={
      foreground:this.themeService.getColorTheme().getColor(this.foreground),inputEditor:{
        backgroundColor:this.themeService.getColorTheme().getColor(this.inputEditorBackgroundColor),accessibilitySupport:i
      },resultEditor:{
        backgroundColor:this.themeService.getColorTheme().getColor(this.resultEditorBackgroundColor),fontSize:t.fontSize,fontFamily:t.fontFamily==="default"?e.fontFamily:t.fontFamily,fontWeight:t.fontWeight,lineHeight:t.lineHeight?t.lineHeight:Hxa.lineHeightEm*t.fontSize,bracketPairColorization:{
          enabled:this.configurationService.getValue("editor.bracketPairColorization.enabled"),independentColorPoolPerBracketType:this.configurationService.getValue("editor.bracketPairColorization.independentColorPoolPerBracketType")
        },wordWrap:t.wordWrap,fontLigatures:e.fontLigatures
      }
    }, this._onDidChange.fire()
  }
}, Jxa=Hxa=__decorate([__param(4, Fn), __param(5, bo), __param(6, fp)], Jxa)
}
}), huy=