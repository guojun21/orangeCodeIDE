// Module: out-build/vs/editor/contrib/suggest/browser/suggestWidgetRenderer.js
// Offset: 25393632 (bundle byte offset)
// Size: 4466 bytes

ri(), Jne(), qi(), Jr(), yn(), Q_(), rt(), Yn(), Tg(), oR(), hd(), Ku(), Ht(), ns(), Pm(), Io(), Byg(), Pyg=us("suggest-more-info", Be.chevronRight, _(1632, null)), Lyg=new class NUr{
  static{
    this._regexRelaxed=/(#([\da-fA-F]{
      3
    }){
      1,2
    }
    |(rgb|hsl)a\(\s*(\d{
      1,3
    }
    %?\s*, \s*){
      3
    }
    (1|0?\.\d+)\)|(rgb|hsl)\(\s*\d{
      1,3
    }
    %?(\s*, \s*\d{
      1,3
    }
    %?){
      2
    }
    \s*\))/
  }
  static{
    this._regexStrict=new RegExp(`^${NUr._regexRelaxed.source}$`, "i")
  }
  extract(e, t){
    if(e.textLabel.match(NUr._regexStrict))return t[0]=e.textLabel, !0;
    if(e.completion.detail&&e.completion.detail.match(NUr._regexStrict))return t[0]=e.completion.detail, !0;
    if(e.completion.documentation){
      const i=typeof e.completion.documentation=="string"?e.completion.documentation:e.completion.documentation.value,r=NUr._regexRelaxed.exec(i);
      if(r&&(r.index===0||r.index+r[0].length===i.length))return t[0]=r[0],!0
    }
    return!1
  }
}, Gla=class{
  constructor(e, t, i, r){
    this._editor=e, this._modelService=t, this._languageService=i, this._themeService=r, this._onDidToggleDetails=new Qe, this.onDidToggleDetails=this._onDidToggleDetails.event, this.templateId="suggestion"
  }
  dispose(){
    this._onDidToggleDetails.dispose()
  }
  renderTemplate(e){
    const t=new Ut, i=e;
    i.classList.add("show-file-icons");
    const r=Rt(e, Ct(".icon")), s=Rt(r, Ct("span.colorspan")), o=Rt(e, Ct(".contents")), a=Rt(o, Ct(".main")), l=Rt(a, Ct(".icon-label.codicon")), u=Rt(a, Ct("span.left")), d=Rt(a, Ct("span.right")), m=new fJ(u, {
      supportHighlights:!0,supportIcons:!0
    });
    t.add(m);
    const p=Rt(u, Ct("span.signature-label")), g=Rt(u, Ct("span.qualifier-label")), f=Rt(d, Ct("span.details-label")), A=Rt(d, Ct("span.readMore"+Qt.asCSSSelector(Pyg)));
    return A.title=_(1633, null), {
      root:i,left:u,right:d,icon:r,colorspan:s,iconLabel:m,iconContainer:l,parametersLabel:p,qualifierLabel:g,detailsLabel:f,readMore:A,disposables:t,configureFont:()=>{
        const C=this._editor.getOptions(),x=C.get(52),I=x.getMassagedFontFamily(),B=x.fontFeatureSettings,R=C.get(124)||x.fontSize,N=C.get(125)||x.lineHeight,M=x.fontWeight,O=x.letterSpacing,$=`${R}px`,H=`${N}px`,W=`${O}px`;
        i.style.fontSize=$,i.style.fontWeight=M,i.style.letterSpacing=W,a.style.fontFamily=I,a.style.fontFeatureSettings=B,a.style.lineHeight=H,r.style.height=H,r.style.width=H,A.style.height=H,A.style.width=H
      }
    }
  }
  renderElement(e, t, i){
    i.configureFont();
    const{
      completion:r
    }
    =e;
    i.colorspan.style.backgroundColor="";
    const s={
      labelEscapeNewLines:!0,matches:oI(e.score)
    }, o=[];
    if(r.kind===19&&Lyg.extract(e, o))i.icon.className="icon customcolor", i.iconContainer.className="icon hide", i.colorspan.style.backgroundColor=o[0];
    else if(r.kind===20&&this._themeService.getFileIconTheme().hasFileIcons){
      i.icon.className="icon hide",i.iconContainer.className="icon hide";
      const a=yS(this._modelService,this._languageService,je.from({
        scheme:"fake",path:e.textLabel
      }),xg.FILE),l=yS(this._modelService,this._languageService,je.from({
        scheme:"fake",path:r.detail
      }),xg.FILE);
      s.extraClasses=a.length>l.length?a:l
    }
    else r.kind===23&&this._themeService.getFileIconTheme().hasFolderIcons?(i.icon.className="icon hide", i.iconContainer.className="icon hide", s.extraClasses=[yS(this._modelService, this._languageService, je.from({
      scheme:"fake",path:e.textLabel
    }), xg.FOLDER), yS(this._modelService, this._languageService, je.from({
      scheme:"fake",path:r.detail
    }), xg.FOLDER)].flat()):(i.icon.className="icon hide", i.iconContainer.className="", i.iconContainer.classList.add("suggest-icon", ...Qt.asClassNameArray(Eft.toIcon(r.kind))));
    r.tags&&r.tags.indexOf(1)>=0&&(s.extraClasses=(s.extraClasses||[]).concat(["deprecated"]), s.matches=[]), i.iconLabel.setLabel(e.textLabel, void 0, s), typeof r.label=="string"?(i.parametersLabel.textContent="", i.detailsLabel.textContent=pjl(r.detail||""), i.root.classList.add("string-label")):(i.parametersLabel.textContent=pjl(r.label.detail||""), i.detailsLabel.textContent=pjl(r.label.description||""), i.root.classList.remove("string-label")), this._editor.getOption(123).showInlineDetails?gv(i.detailsLabel):Ng(i.detailsLabel), mjl(e)?(i.right.classList.add("can-expand-details"), gv(i.readMore), i.readMore.onmousedown=a=>{
      a.stopPropagation(),a.preventDefault()
    }, i.readMore.onclick=a=>{
      a.stopPropagation(),a.preventDefault(),this._onDidToggleDetails.fire()
    }):(i.right.classList.remove("can-expand-details"), Ng(i.readMore), i.readMore.onmousedown=null, i.readMore.onclick=null)
  }
  disposeTemplate(e){
    e.disposables.dispose()
  }
}, Gla=__decorate([__param(1, Il), __param(2, Jl), __param(3, bo)], Gla)
}
}), ydn, Nyg, gjl, Myg, Fyg, Wla, Oyg, Uyg=