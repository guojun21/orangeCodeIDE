// Module: out-build/vs/workbench/contrib/ui/browser/widgets/codeBlock.js
// Offset: 25590615 (bundle byte offset)
// Size: 6022 bytes

Cu(), Oh(), si(), Wt(), hs(), X1e(), dme(), Io(), So(), zg(), QE(), Cm(), Ei(), Rde(), IRe(), VI(), _ua(), ri(), NkA=new Sn("commentEditorFocused", !1), Vwg=10, V9=class extends WS{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    const A={
      isSimpleWidget:i.overwriteIsSimpleWidget??!0,isChatCodeblock:!0,cursorCodeBlockType:"chatCodeblock",contributions:SC.getSomeEditorContributions([jZ.ID,j9.ID,ZH.ID,...i.enableSemanticSyntaxHighlighting?[i$e.ID]:[],...i.customContributions??[]])
    };
    super(e, t, A, r, s, o, a, l, u, d, m, p, g), this.configurationService=f, this.placeholderWidget=null, this.currentModel=null, this.currentModelListener=null, i.placeholder&&(this.createPlaceholderWidget(i.placeholder), this._register(this.onDidChangeModel(()=>{
      this.handleModelChange()
    })), this.updatePlaceholderVisibility())
  }
  _getActions(){
    return SC.getEditorActions()
  }
  createPlaceholderWidget(e){
    if(!e)return;
    const t=Ct(".simple-editor-placeholder");
    t.textContent=e, t.className="simple-editor-placeholder", t.style.position="absolute", t.style.pointerEvents="none", t.style.overflow="hidden", t.style.textOverflow="ellipsis", t.style.whiteSpace="nowrap", t.style.top="0", t.style.left="0", t.style.color="var(--vscode-input-placeholderForeground)", t.style.fontFamily=this.configurationService.getValue("editor.fontFamily"), t.style.fontSize=`${this.configurationService.getValue("editor.fontSize")}px`, t.style.opacity="0.5", this.placeholderWidget={
      getId:()=>"simple.editor.placeholder",getDomNode:()=>t,getPosition:()=>({
        position:{
          lineNumber:1,column:1
        },preference:[0]
      })
    }
  }
  handleModelChange(){
    this.currentModelListener&&(this.currentModelListener.dispose(), this.currentModelListener=null), this.currentModel=this.getModel(), this.currentModel&&(this.currentModelListener=this.currentModel.onDidChangeContent(()=>{
      this.updatePlaceholderVisibility()
    }), this.updatePlaceholderVisibility())
  }
  updatePlaceholderVisibility(){
    if(!this.placeholderWidget)return;
    const e=this.getModel(), t=this.placeholderWidget.getDomNode().style;
    e&&e.getValueLength()===0&&t.display!=="block"?(this.addContentWidget(this.placeholderWidget), this.placeholderWidget.getDomNode().style.display="block"):e&&e.getValueLength()>0&&t.display==="block"&&(this.removeContentWidget(this.placeholderWidget), this.placeholderWidget.getDomNode().style.display="none")
  }
  dispose(){
    this.placeholderWidget&&this.removeContentWidget(this.placeholderWidget), this.currentModelListener&&this.currentModelListener.dispose(), super.dispose()
  }
  static getEditorOptions(e){
    return{
      readOnly:!0,wordWrap:"off",wordWrapOverride1:"off",wordWrapOverride2:"off",glyphMargin:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,lineNumbers:"off",folding:!1,fontFamily:e.getValue("editor.fontFamily"),fontLigatures:e.getValue("editor.fontLigatures"),fontSize:e.getValue("editor.fontSize"),lineHeight:e.getValue("editor.lineHeight"),scrollbar:{
        vertical:"hidden",horizontal:"auto",verticalScrollbarSize:0,handleMouseWheel:!0,alwaysConsumeMouseWheel:!1,useShadows:!0,verticalHasArrows:!1,horizontalHasArrows:!1,horizontalScrollbarSize:Vwg
      },scrollBeyondLastLine:!1,renderLineHighlight:"none",renderWhitespace:"none",minimap:{
        enabled:!1
      },quickSuggestions:!1,automaticLayout:!1,automaticLayoutIgnoreHeight:!0,guides:{
        indentation:!1
      }
    }
  }
}, V9=__decorate([__param(3, ln), __param(4, fl), __param(5, fr), __param(6, wi), __param(7, bo), __param(8, ms), __param(9, Cf), __param(10, JS), __param(11, $u), __param(12, FY), __param(13, Fn)], V9)
}
});
function Gjl(n){
  if(MkA(n))return FkA(n);
  const e=5, t=60, i=n.fullConversationHeadersOnly??[], r=[];
  try{
    sc(()=>{
      for(let o=i.length-1;
      o>=0&&r.length<e;
      o--){
        const a=i[o].bubbleId,u=n.conversationMap?.[a]?.toolFormerData;
        if(u){
          if(u.tool===an.EDIT_FILE){
            const d=u?.params?.relativeWorkspacePath;
            d&&Ddn(r,d)
          }
          else if(u.tool===an.EDIT_FILE_V2){
            const d=u?.params?.relativeWorkspacePath;
            d&&Ddn(r,d)
          }
        }
      }
    })
  }
  catch{
    
  }
  if(r.length===0)try{
    if(n.isNAL){
      const o=n.conversationState.fileStatesV2;
      for(const a in o){
        if(r.length>=e)break;
        Ddn(r,a)
      }
    }
    else{
      const o=Object.keys(n.codeBlockData||{
        
      });
      for(const a of o){
        if(r.length>=e)break;
        const l=n.codeBlockData[a];
        l&&Object.keys(l).length>0&&Ddn(r,a)
      }
    }
  }
  catch{
    
  }
  if(r.length>0)return"Edited "+Kwg(r).join(", ");
  const s=[];
  try{
    sc(()=>{
      for(let o=i.length-1;
      o>=0&&s.length<e;
      o--){
        const a=i[o].bubbleId,u=n.conversationMap?.[a]?.toolFormerData;
        if(u){
          if(u.tool===an.READ_FILE){
            const d=u?.params?.relativeWorkspacePath;
            d&&Ddn(s,d)
          }
          else if(u.tool===an.READ_FILE_V2){
            const d=u?.params?.targetFile;
            d&&Ddn(s,d)
          }
        }
      }
    })
  }
  catch{
    
  }
  if(s.length>0)return"Read "+Kwg(s).join(", ");
  try{
    const o=n.context?.fileSelections??[];
    if(o.length>0){
      const a=[];
      for(const l of o){
        const u=l?.uri?.path;
        if(u&&a.push(fd(u)),a.length>=e)break
      }
      if(a.length>0)return"Read "+a.join(", ")
    }
  }
  catch{
    
  }
  return sc(()=>{
    for(let o=i.length-1;
    o>=0;
    o--){
      const a=i[o];
      if(a.type===ul.AI){
        const u=n.conversationMap[a.bubbleId]?.text||"";
        if(u&&u.trim().length>0){
          const d=jjl(Wjl(u));
          return Qjl(d,t)
        }
      }
    }
    for(let o=i.length-1;
    o>=0;
    o--){
      const a=i[o];
      if(a.type===ul.HUMAN){
        const u=n.conversationMap[a.bubbleId]?.text||"";
        if(u&&u.trim().length>0){
          const d=jjl(Wjl(u));
          return Qjl(d,t)
        }
      }
    }
    return bNe
  })
}
function MkA(n){
  return"bcId"in n&&typeof n.bcId=="string"
}
function FkA(n){
  if(n.summary&&n.summary.trim()){
    const t=jjl(Wjl(n.summary));
    return Qjl(t, 60)
  }
  return bNe
}
function Ddn(n, e){
  n.includes(e)||n.push(e)
}
function Kwg(n){
  return n.map(e=>fd(e))
}
function Wjl(n){
  const e=n||"", t=e.indexOf(`
`);
  return t===-1?e.trim():e.slice(0, t).trim()
}
function Qjl(n, e){
  return n.length<=e?n:n.slice(0, e)+"\u2026"
}
function jjl(n){
  try{
    let e=n||"";
    return e=e.replace(/<think>(.*?)<\/think>/gs, "$1"), e=e.replace(/<think>(.*)$/gs, "$1"), e=e.replace(/```+/g,""),e=e.replace(/`+/g, ""), e=e.replace(/!\[([^\]]*)\]\([^\)]+\)/g, "$1"), e=e.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1"), e=e.replace(/(^|\n)\s{
      0,3
    }
    #{
      1,6
    }
    \s*/g, "$1"), e=e.replace(/(^|\n)\s{
      0,3
    }
    >\s?/g, "$1"), e=e.replace(/(^|\n)\s{
      0,3
    }
    ([\-*+]|\d+\.)\s+/g, "$1"), e=e.replace(/(\*\*|__|~~|\*|_)/g, ""), e=e.replace(/\|/g, " "), e=e.replace(/\s+/g, " ").trim(), e
  }
  catch{
    return(n||"").toString().trim()
  }
}
var bNe, zjl=