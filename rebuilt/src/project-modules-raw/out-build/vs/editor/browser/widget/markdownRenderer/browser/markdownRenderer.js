// Module: out-build/vs/editor/browser/widget/markdownRenderer/browser/markdownRenderer.js
// Offset: 2427070 (bundle byte offset)
// Size: 1413 bytes

y3(), ive(), _s(), rt(), Fc(), Ku(), WE(), LSe(), HY(), BhA(), sL=class{
  static{
    IBc=this
  }
  static{
    this._ttpTokenizer=nve("tokenizeToString", {
      createHTML(e){
        return e
      }
    })
  }
  constructor(e, t, i){
    this._options=e, this._languageService=t, this._openerService=i
  }
  render(e, t, i){
    if(!e)return{
      element:document.createElement("span"),dispose:()=>{
        
      }
    };
    const r=new Ut, s=r.add(Jde(e, {
      ...this._getRenderOptions(e,r),...t
    }, i));
    return s.element.classList.add("rendered-markdown"), {
      element:s.element,dispose:()=>r.dispose()
    }
  }
  _getRenderOptions(e, t){
    return{
      codeBlockRenderer:async(i,r)=>{
        let s;
        i?s=this._languageService.getLanguageIdByLanguageName(i):this._options.editor&&(s=this._options.editor.getModel()?.getLanguageId()),s||(s=o_);
        const o=await Oft(this._languageService,r,s),a=document.createElement("span");
        if(a.innerHTML=IBc._ttpTokenizer?.createHTML(o)??o,this._options.editor){
          const l=this._options.editor.getOption(52);
          bF(a,l)
        }
        else this._options.codeBlockFontFamily&&(a.style.fontFamily=this._options.codeBlockFontFamily);
        return this._options.codeBlockFontSize!==void 0&&(a.style.fontSize=this._options.codeBlockFontSize),a
      },actionHandler:{
        callback:i=>this.openMarkdownLink(i,e),disposables:t
      }
    }
  }
  async openMarkdownLink(e, t){
    await Y3t(this._openerService, e, t.isTrusted)
  }
}, sL=IBc=__decorate([__param(1, Jl), __param(2, Ja)], sL)
}
}), e9o, C3, GSh, DBc, xRe=