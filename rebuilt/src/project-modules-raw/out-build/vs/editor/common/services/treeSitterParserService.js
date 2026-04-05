// Module: out-build/vs/editor/common/services/treeSitterParserService.js
// Offset: 32790728 (bundle byte offset)
// Size: 1149 bytes

Wt(), KEe(), kSi="editor.experimental.preferTreeSitter", _xa=["css", "typescript", "ini", "regex"], yrt=xi("treeSitterParserService"), ESi=xi("treeSitterImporter"), G5f=class{
  constructor(){
    
  }
  async _getTreeSitterImport(){
    return this._treeSitterImport||(this._treeSitterImport=await DQ("@vscode/tree-sitter-wasm", "wasm/tree-sitter.js")), this._treeSitterImport
  }
  get parserClass(){
    return this._parserClass
  }
  async getParserClass(){
    return this._parserClass||(this._parserClass=(await this._getTreeSitterImport()).Parser), this._parserClass
  }
  async getLanguageClass(){
    return this._languageClass||(this._languageClass=(await this._getTreeSitterImport()).Language), this._languageClass
  }
  async getQueryClass(){
    return this._queryClass||(this._queryClass=(await this._getTreeSitterImport()).Query), this._queryClass
  }
}
}
});
function W5f(n){
  n.length>40&&(n=n.substr(0, 20)+"\u2026"+n.substr(n.length-20));
  let e="";
  for(let t=0, i=n.length;
  t<i;
  t++){
    const r=n.charCodeAt(t);
    switch(r){
      case 9:e+="\u2192";
      break;
      case 32:e+="\xB7";
      break;
      default:e+=String.fromCharCode(r)
    }
  }
  return e
}
var zyu, Cb, wrt, Q5f, j5f, z5f=