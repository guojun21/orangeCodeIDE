// Module: out-build/vs/editor/common/languages/modesRegistry.js
// Offset: 769759 (bundle byte offset)
// Size: 1170 bytes

Ht(), yn(), Ws(), rt(), hF(), Mp(), alh={
  ModesRegistry:"editor.modesRegistry"
}, clh=class extends at{
  constructor(){
    super(), this._onDidChangeLanguages=this._register(new Qe), this.onDidChangeLanguages=this._onDidChangeLanguages.event, this._languages=[]
  }
  registerLanguage(n){
    return this._languages.push(n), this._onDidChangeLanguages.fire(void 0), {
      dispose:()=>{
        for(let e=0,t=this._languages.length;
        e<t;
        e++)if(this._languages[e]===n){
          this._languages.splice(e,1);
          return
        }
      }
    }
  }
  getLanguages(){
    return this._languages
  }
}, zBe=new clh, Di.add(alh.ModesRegistry, zBe), o_="plaintext", r4o=".txt", zBe.registerLanguage({
  id:o_, extensions:[r4o], aliases:[_(884, null), "text"], mimetypes:[NA.text]
}), Di.as(Dh.Configuration).registerDefaultConfigurations([{
  overrides:{
    "[plaintext]":{
      "editor.unicodeHighlight.ambiguousCharacters":!1,"editor.unicodeHighlight.invisibleCharacters":!1
    }, "[go]":{
      "editor.insertSpaces":!1
    }, "[makefile]":{
      "editor.insertSpaces":!1
    }, "[shellscript]":{
      "files.eol":`
`
    }, "[yaml]":{
      "editor.insertSpaces":!0,"editor.tabSize":2
    }
  }
}
])
}
});
function llh(n){
  return n.filter(([e, t])=>e!==""&&t!=="")
}
var ulh, Xkc, dlh, hlh, BrA=