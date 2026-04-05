// Module: out-build/vs/workbench/contrib/codeEditor/browser/inspectEditorTokens/inspectEditorTokens.js
// Offset: 32791877 (bundle byte offset)
// Size: 13010 bytes

Vly(), Ht(), ri(), xf(), rt(), Cu(), ts(), Tg(), tVe(), Ku(), So(), M5f(), wxa(), r7(), Po(), SSi(), Ei(), Ujl(), zr(), Cm(), vEt(), Cb=Ct, wrt=class extends at{
  static{
    zyu=this
  }
  static{
    this.ID="editor.contrib.inspectEditorTokens"
  }
  static get(e){
    return e.getContribution(zyu.ID)
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this._editor=e, this._textMateService=t, this._treeSitterService=i, this._themeService=s, this._languageService=r, this._notificationService=o, this._configurationService=a, this._languageFeaturesService=l, this._widget=null, this._register(this._editor.onDidChangeModel(u=>this.stop())), this._register(this._editor.onDidChangeModelLanguage(u=>this.stop())), this._register(this._editor.onKeyUp(u=>u.keyCode===9&&this.stop()))
  }
  dispose(){
    this.stop(), super.dispose()
  }
  launch(){
    this._widget||this._editor.hasModel()&&this._editor.getModel().uri.scheme!==_n.vscodeNotebookCell&&(this._widget=new j5f(this._editor, this._textMateService, this._treeSitterService, this._languageService, this._themeService, this._notificationService, this._configurationService, this._languageFeaturesService))
  }
  stop(){
    this._widget&&(this._widget.dispose(), this._widget=null)
  }
  toggle(){
    this._widget?this.stop():this.launch()
  }
}, wrt=zyu=__decorate([__param(1, obn), __param(2, yrt), __param(3, Jl), __param(4, d5), __param(5, ms), __param(6, Fn), __param(7, $u)], wrt), Q5f=class extends vu{
  constructor(){
    super({
      id:"editor.action.inspectTMScopes",label:dt(5771,"Developer: Inspect Editor Tokens and Scopes"),precondition:void 0
    })
  }
  run(n, e){
    wrt.get(e)?.toggle()
  }
}, j5f=class fzb extends at{
  static{
    this._ID="editor.contrib.inspectEditorTokensWidget"
  }
  constructor(e, t, i, r, s, o, a, l){
    super(), this.allowEditorOverflow=!0, this._isDisposed=!1, this._editor=e, this._languageService=r, this._themeService=s, this._textMateService=t, this._treeSitterService=i, this._notificationService=o, this._configurationService=a, this._languageFeaturesService=l, this._model=this._editor.getModel(), this._domNode=document.createElement("div"), this._domNode.className="token-inspect-widget", this._currentRequestCancellationTokenSource=new Wc, this._beginCompute(this._editor.getPosition()), this._register(this._editor.onDidChangeCursorPosition(u=>this._beginCompute(this._editor.getPosition()))), this._register(s.onDidColorThemeChange(u=>this._beginCompute(this._editor.getPosition()))), this._register(a.onDidChangeConfiguration(u=>u.affectsConfiguration("editor.semanticHighlighting.enabled")&&this._beginCompute(this._editor.getPosition()))), this._editor.addContentWidget(this)
  }
  dispose(){
    this._isDisposed=!0, this._editor.removeContentWidget(this), this._currentRequestCancellationTokenSource.cancel(), super.dispose()
  }
  getId(){
    return fzb._ID
  }
  _beginCompute(e){
    const t=this._textMateService.createTokenizer(this._model.getLanguageId()), i=this._computeSemanticTokens(e), r=this._treeSitterService.getParseResult(this._model);
    th(this._domNode), this._domNode.appendChild(document.createTextNode(_(5770, null))), Promise.all([t, i]).then(([s, o])=>{
      this._isDisposed||(this._compute(s,o,r,e),this._domNode.style.maxWidth=`${Math.max(this._editor.getLayoutInfo().width*.66,500)}px`,this._editor.layoutContentWidget(this))
    }, s=>{
      this._notificationService.warn(s),setTimeout(()=>{
        wrt.get(this._editor)?.stop()
      })
    })
  }
  _isSemanticColoringEnabled(){
    const e=this._configurationService.getValue(Qgi, {
      overrideIdentifier:this._model.getLanguageId(),resource:this._model.uri
    })?.enabled;
    return typeof e=="boolean"?e:this._themeService.getColorTheme().semanticHighlighting
  }
  _compute(e, t, i, r){
    const s=e&&this._getTokensAtPosition(e, r), o=t&&this._getSemanticTokenAtPosition(t, r), a=i&&this._getTreeSitterTokenAtPosition(i, r);
    if(!s&&!o&&!a){
      um(this._domNode,"No grammar or semantic tokens available.");
      return
    }
    const l=s?.metadata, u=o?.metadata, d=o&&W5f(this._model.getValueInRange(o.range)), m=s&&W5f(this._model.getLineContent(r.lineNumber).substring(s.token.startIndex, s.token.endIndex)), p=d||m||"";
    if(um(this._domNode, Cb("h2.tiw-token", void 0, p, Cb("span.tiw-token-length", void 0, `${p.length} ${p.length===1?"char":"chars"}`))), Rt(this._domNode, Cb("hr.tiw-metadata-separator", {
      style:"clear:both"
    })), Rt(this._domNode, Cb("table.tiw-metadata-table", void 0, Cb("tbody", void 0, Cb("tr", void 0, Cb("td.tiw-metadata-key", void 0, "language"), Cb("td.tiw-metadata-value", void 0, l?.languageId||"")), Cb("tr", void 0, Cb("td.tiw-metadata-key", void 0, "standard token type"), Cb("td.tiw-metadata-value", void 0, this._tokenTypeToString(l?.tokenType||0))), ...this._formatMetadata(u, l)))), o){
      Rt(this._domNode,Cb("hr.tiw-metadata-separator"));
      const g=Rt(this._domNode,Cb("table.tiw-metadata-table",void 0)),f=Rt(g,Cb("tbody",void 0,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"semantic token type"),Cb("td.tiw-metadata-value",void 0,o.type))));
      if(o.modifiers.length&&Rt(f,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"modifiers"),Cb("td.tiw-metadata-value",void 0,o.modifiers.join(" ")))),o.metadata){
        const A=["foreground","bold","italic","underline","strikethrough"],w={
          
        },C=new Array;
        for(const x of A)if(o.metadata[x]!==void 0){
          const I=o.definitions[x],B=this._renderTokenStyleDefinition(I,x),R=B.map(M=>wf(M)?M.outerHTML:M).join();
          let N=w[R];
          N||(w[R]=N=[],C.push([B,R])),N.push(x)
        }
        for(const[x,I]of C)Rt(f,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,w[I].join(", ")),Cb("td.tiw-metadata-value",void 0,...x)))
      }
    }
    if(s){
      const g=this._themeService.getColorTheme();
      Rt(this._domNode,Cb("hr.tiw-metadata-separator"));
      const f=Rt(this._domNode,Cb("table.tiw-metadata-table")),A=Rt(f,Cb("tbody"));
      m&&m!==p&&Rt(A,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"textmate token"),Cb("td.tiw-metadata-value",void 0,`${m} (${m.length})`)));
      const w=new Array;
      for(let I=s.token.scopes.length-1;
      I>=0;
      I--)w.push(s.token.scopes[I]),I>0&&w.push(Cb("br"));
      Rt(A,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"textmate scopes"),Cb("td.tiw-metadata-value.tiw-metadata-scopes",void 0,...w)));
      const C=L5f(g,s.token.scopes,!1),x=o?.metadata?.foreground;
      if(C){
        if(x!==s.metadata.foreground){
          let I=Cb("code.tiw-theme-selector",void 0,C.rawSelector,Cb("br"),JSON.stringify(C.settings,null,"	"));
          x&&(I=Cb("s",void 0,I)),Rt(A,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"foreground"),Cb("td.tiw-metadata-value",void 0,I)))
        }
      }
      else x||Rt(A,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"foreground"),Cb("td.tiw-metadata-value",void 0,"No theme selector")))
    }
    if(a){
      const g=a[a.length-1];
      Rt(this._domNode,Cb("hr.tiw-metadata-separator"));
      const f=Rt(this._domNode,Cb("table.tiw-metadata-table")),A=Rt(f,Cb("tbody"));
      Rt(A,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,`tree-sitter token ${g.id}`),Cb("td.tiw-metadata-value",void 0,`${g.text}`)));
      const w=new Array;
      let C=a.length-1,x=a[C];
      for(;
      x.parent||C>0;
      )w.push(x.type),x=x.parent??a[--C],x&&w.push(Cb("br"));
      Rt(A,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"tree-sitter tree"),Cb("td.tiw-metadata-value.tiw-metadata-scopes",void 0,...w)));
      const B=RSe.get(this._model.getLanguageId())?.captureAtPosition(r.lineNumber,r.column,this._model);
      B&&B.length>0&&Rt(A,Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"foreground"),Cb("td.tiw-metadata-value",void 0,B.map(R=>R.name).join(" "))))
    }
  }
  _formatMetadata(e, t){
    const i=new Array;
    function r(u){
      const d=e?.[u]||t?.[u];
      if(d!==void 0){
        const m=e?.[u]?"tiw-metadata-semantic":"";
        i.push(Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,u),Cb(`td.tiw-metadata-value.${m}`,void 0,d)))
      }
      return d
    }
    const s=r("foreground"), o=r("background");
    if(s&&o){
      const u=Xr.fromHex(o),d=Xr.fromHex(s);
      u.isOpaque()?i.push(Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"contrast ratio"),Cb("td.tiw-metadata-value",void 0,u.getContrastRatio(d.makeOpaque(u)).toFixed(2)))):i.push(Cb("tr",void 0,Cb("td.tiw-metadata-key",void 0,"Contrast ratio cannot be precise for background colors that use transparency"),Cb("td.tiw-metadata-value")))
    }
    const a=new Array;
    function l(u){
      let d;
      e&&e[u]?d=Cb("span.tiw-metadata-semantic",void 0,u):t&&t[u]&&(d=u),d&&(a.length&&a.push(" "),a.push(d))
    }
    return l("bold"), l("italic"), l("underline"), l("strikethrough"), a.length&&i.push(Cb("tr", void 0, Cb("td.tiw-metadata-key", void 0, "font style"), Cb("td.tiw-metadata-value", void 0, ...a))), i
  }
  _decodeMetadata(e){
    const t=this._themeService.getColorTheme().tokenColorMap, i=pF.getLanguageId(e), r=pF.getTokenType(e), s=pF.getFontStyle(e), o=pF.getForeground(e), a=pF.getBackground(e);
    return{
      languageId:this._languageService.languageIdCodec.decodeLanguageId(i),tokenType:r,bold:s&2?!0:void 0,italic:s&1?!0:void 0,underline:s&4?!0:void 0,strikethrough:s&8?!0:void 0,foreground:t[o],background:t[a]
    }
  }
  _tokenTypeToString(e){
    switch(e){
      case 0:return"Other";
      case 1:return"Comment";
      case 2:return"String";
      case 3:return"RegEx";
      default:return"??"
    }
  }
  _getTokensAtPosition(e, t){
    const i=t.lineNumber, r=this._getStateBeforeLine(e, i), s=e.tokenizeLine(this._model.getLineContent(i), r), o=e.tokenizeLine2(this._model.getLineContent(i), r);
    let a=0;
    for(let u=s.tokens.length-1;
    u>=0;
    u--){
      const d=s.tokens[u];
      if(t.column-1>=d.startIndex){
        a=u;
        break
      }
    }
    let l=0;
    for(let u=o.tokens.length>>>1;
    u>=0;
    u--)if(t.column-1>=o.tokens[u<<1]){
      l=u;
      break
    }
    return{
      token:s.tokens[a],metadata:this._decodeMetadata(o.tokens[(l<<1)+1])
    }
  }
  _getStateBeforeLine(e, t){
    let i=null;
    for(let r=1;
    r<t;
    r++)i=e.tokenizeLine(this._model.getLineContent(r), i).ruleStack;
    return i
  }
  isSemanticTokens(e){
    return e&&e.data
  }
  async _computeSemanticTokens(e){
    if(!this._isSemanticColoringEnabled())return null;
    const t=this._languageFeaturesService.documentSemanticTokensProvider.ordered(this._model);
    if(t.length){
      const r=t[0],s=await Promise.resolve(r.provideDocumentSemanticTokens(this._model,null,this._currentRequestCancellationTokenSource.token));
      if(this.isSemanticTokens(s))return{
        tokens:s,legend:r.getLegend()
      }
    }
    const i=this._languageFeaturesService.documentRangeSemanticTokensProvider.ordered(this._model);
    if(i.length){
      const r=i[0],s=e.lineNumber,o=new Zt(s,1,s,this._model.getLineMaxColumn(s)),a=await Promise.resolve(r.provideDocumentRangeSemanticTokens(this._model,o,this._currentRequestCancellationTokenSource.token));
      if(this.isSemanticTokens(a))return{
        tokens:a,legend:r.getLegend()
      }
    }
    return null
  }
  _getSemanticTokenAtPosition(e, t){
    const i=e.tokens.data, r=this._model.getLanguageId();
    let s=0, o=0;
    const a=t.lineNumber-1, l=t.column-1;
    for(let u=0;
    u<i.length;
    u+=5){
      const d=i[u],m=i[u+1],p=i[u+2],g=i[u+3],f=i[u+4],A=s+d,w=d===0?o+m:m;
      if(a===A&&w<=l&&l<w+p){
        const C=e.legend.tokenTypes[g]||"not in legend (ignored)",x=[];
        let I=f;
        for(let H=0;
        I>0&&H<e.legend.tokenModifiers.length;
        H++)I&1&&x.push(e.legend.tokenModifiers[H]),I=I>>1;
        I>0&&x.push("not in legend (ignored)");
        const B=new Zt(A+1,w+1,A+1,w+1+p),R={
          
        },N=this._themeService.getColorTheme().tokenColorMap,O=this._themeService.getColorTheme().getTokenStyleMetadata(C,x,r,!0,R);
        let $;
        return O&&($={
          languageId:void 0,tokenType:0,bold:O?.bold,italic:O?.italic,underline:O?.underline,strikethrough:O?.strikethrough,foreground:N[O?.foreground||0],background:void 0
        }),{
          type:C,modifiers:x,range:B,metadata:$,definitions:R
        }
      }
      s=A,o=w
    }
    return null
  }
  _walkTreeforPosition(e, t){
    const i=this._model.getOffsetAt(t);
    e.gotoFirstChild();
    let r=!1, s=null;
    do e.currentNode.startIndex<=i&&i<e.currentNode.endIndex?(r=!0, s=e.currentNode):r=!1;
    while(r?e.gotoFirstChild():e.gotoNextSibling());
    return s
  }
  _getTreeSitterTokenAtPosition(e, t){
    let i=e.parseResult;
    if(!i?.tree)return null;
    const r=[];
    do{
      const s=i.tree.walk(),o=this._walkTreeforPosition(s,t);
      o?(r.push(o),i=e.getInjection(o.startIndex,i.languageId)):i=void 0
    }
    while(i?.tree);
    return r.length>0?r:null
  }
  _renderTokenStyleDefinition(e, t){
    const i=new Array;
    if(e===void 0)return i;
    const r=this._themeService.getColorTheme();
    if(Array.isArray(e)){
      const s={
        
      };
      r.resolveScopes(e,s);
      const o=s[t];
      if(o&&s.scope){
        const a=Cb("ul.tiw-metadata-values"),l=Array.isArray(o.scope)?o.scope:[String(o.scope)];
        for(const u of l)a.appendChild(Cb("li.tiw-metadata-value.tiw-metadata-scopes",void 0,u));
        return i.push(s.scope.join(" "),a,Cb("code.tiw-theme-selector",void 0,JSON.stringify(o.settings,null,"	"))),i
      }
      return i
    }
    else if(wSi.is(e)){
      const s=r.getTokenStylingRuleScope(e);
      return s==="setting"?(i.push(`User settings: ${e.selector.id} - ${this._renderStyleProperty(e.style,t)}`),i):(s==="theme"&&i.push(`Color theme: ${e.selector.id} - ${this._renderStyleProperty(e.style,t)}`),i)
    }
    else{
      const s=r.resolveTokenStyleValue(e);
      return i.push(`Default: ${s?this._renderStyleProperty(s,t):""}`),i
    }
  }
  _renderStyleProperty(e, t){
    switch(t){
      case"foreground":return e.foreground?Xr.Format.CSS.formatHexA(e.foreground,!0):"";
      default:return e[t]!==void 0?String(e[t]):""
    }
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return{
      position:this._editor.getPosition(),preference:[2,1]
    }
  }
}, Mg(wrt.ID, wrt, 4), ac(Q5f)
}
});
function Zly(n){
  let e;
  try{
    e=JSON.parse(n)
  }
  catch{
    throw new Error("Could not parse code block local file data")
  }
  let t;
  try{
    t=je.revive(e?.uri)
  }
  catch{
    throw new Error("Invalid code block local file data URI")
  }
  let i;
  return e.range&&(i=new Zt(e.range.startLineNumber+1, e.range.startColumn+1, e.range.endLineNumber+1, e.range.endColumn+1)), {
    uri:t, range:i
  }
}
var ape, V5f, AEt, xSi, Cxa, Sxa, kxa, TSi=