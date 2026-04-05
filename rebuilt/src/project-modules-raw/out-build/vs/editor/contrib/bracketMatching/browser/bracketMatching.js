// Module: out-build/vs/editor/contrib/bracketMatching/browser/bracketMatching.js
// Offset: 2367591 (bundle byte offset)
// Size: 6485 bytes

vr(), rt(), fhA(), Cu(), tl(), ts(), db(), Qh(), xw(), bv(), Ht(), dr(), Nl(), Io(), lSh=Rn("editorOverviewRuler.bracketMatchForeground", "#A0A0A0", _(941, null)), uSh=class extends vu{
  constructor(){
    super({
      id:"editor.action.jumpToBracket",label:dt(943,"Go to Bracket"),precondition:void 0,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:3165,weight:100
      }
    })
  }
  run(n, e){
    vKe.get(e)?.jumpToBracket()
  }
}, dSh=class extends vu{
  constructor(){
    super({
      id:"editor.action.selectToBracket",label:dt(944,"Select to Bracket"),precondition:void 0,metadata:{
        description:dt(945,"Select the text inside and including the brackets or curly braces"),args:[{
          name:"args",schema:{
            type:"object",properties:{
              selectBrackets:{
                type:"boolean",default:!0
              }
            }
          }
        }
        ]
      }
    })
  }
  run(n, e, t){
    let i=!0;
    t&&t.selectBrackets===!1&&(i=!1), vKe.get(e)?.selectToBracket(i)
  }
}, hSh=class extends vu{
  constructor(){
    super({
      id:"editor.action.removeBrackets",label:dt(946,"Remove Brackets"),precondition:void 0,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:2561,weight:100
      }
    })
  }
  run(n, e){
    vKe.get(e)?.removeBrackets(this.id)
  }
}, mSh=class{
  constructor(n, e, t){
    this.position=n, this.brackets=e, this.options=t
  }
}, vKe=class cWa extends at{
  static{
    this.ID="editor.contrib.bracketMatchingController"
  }
  static get(e){
    return e.getContribution(cWa.ID)
  }
  constructor(e){
    super(), this._editor=e, this._lastBracketsData=[], this._lastVersionId=0, this._decorations=this._editor.createDecorationsCollection(), this._updateBracketsSoon=this._register(new Hu(()=>this._updateBrackets(), 50)), this._matchBrackets=this._editor.getOption(73), this._updateBracketsSoon.schedule(), this._register(e.onDidChangeCursorPosition(t=>{
      this._matchBrackets!=="never"&&this._updateBracketsSoon.schedule()
    })), this._register(e.onDidChangeModelContent(t=>{
      this._updateBracketsSoon.schedule()
    })), this._register(e.onDidChangeModel(t=>{
      this._lastBracketsData=[],this._updateBracketsSoon.schedule()
    })), this._register(e.onDidChangeModelLanguageConfiguration(t=>{
      this._lastBracketsData=[],this._updateBracketsSoon.schedule()
    })), this._register(e.onDidChangeConfiguration(t=>{
      t.hasChanged(73)&&(this._matchBrackets=this._editor.getOption(73),this._decorations.clear(),this._lastBracketsData=[],this._lastVersionId=0,this._updateBracketsSoon.schedule())
    })), this._register(e.onDidBlurEditorWidget(()=>{
      this._updateBracketsSoon.schedule()
    })), this._register(e.onDidFocusEditorWidget(()=>{
      this._updateBracketsSoon.schedule()
    }))
  }
  jumpToBracket(){
    if(!this._editor.hasModel())return;
    const e=this._editor.getModel(), t=this._editor.getSelections().map(i=>{
      const r=i.getStartPosition(),s=e.bracketPairs.matchBracket(r);
      let o=null;
      if(s)s[0].containsPosition(r)&&!s[1].containsPosition(r)?o=s[1].getStartPosition():s[1].containsPosition(r)&&(o=s[0].getStartPosition());
      else{
        const a=e.bracketPairs.findEnclosingBrackets(r);
        if(a)o=a[1].getStartPosition();
        else{
          const l=e.bracketPairs.findNextBracket(r);
          l&&l.range&&(o=l.range.getStartPosition())
        }
      }
      return o?new Vl(o.lineNumber,o.column,o.lineNumber,o.column):new Vl(r.lineNumber,r.column,r.lineNumber,r.column)
    });
    this._editor.setSelections(t), this._editor.revealRange(t[0])
  }
  selectToBracket(e){
    if(!this._editor.hasModel())return;
    const t=this._editor.getModel(), i=[];
    this._editor.getSelections().forEach(r=>{
      const s=r.getStartPosition();
      let o=t.bracketPairs.matchBracket(s);
      if(!o&&(o=t.bracketPairs.findEnclosingBrackets(s),!o)){
        const u=t.bracketPairs.findNextBracket(s);
        u&&u.range&&(o=t.bracketPairs.matchBracket(u.range.getStartPosition()))
      }
      let a=null,l=null;
      if(o){
        o.sort(Zt.compareRangesUsingStarts);
        const[u,d]=o;
        if(a=e?u.getStartPosition():u.getEndPosition(),l=e?d.getEndPosition():d.getStartPosition(),d.containsPosition(s)){
          const m=a;
          a=l,l=m
        }
      }
      a&&l&&i.push(new Vl(a.lineNumber,a.column,l.lineNumber,l.column))
    }), i.length>0&&(this._editor.setSelections(i), this._editor.revealRange(i[0]))
  }
  removeBrackets(e){
    if(!this._editor.hasModel())return;
    const t=this._editor.getModel();
    this._editor.getSelections().forEach(i=>{
      const r=i.getPosition();
      let s=t.bracketPairs.matchBracket(r);
      s||(s=t.bracketPairs.findEnclosingBrackets(r)),s&&(this._editor.pushUndoStop(),this._editor.executeEdits(e,[{
        range:s[0],text:""
      },{
        range:s[1],text:""
      }
      ]),this._editor.pushUndoStop())
    })
  }
  static{
    this._DECORATION_OPTIONS_WITH_OVERVIEW_RULER=Zh.register({
      description:"bracket-match-overview",stickiness:1,className:"bracket-match",overviewRuler:{
        color:kC(lSh),position:Tx.Center
      }
    })
  }
  static{
    this._DECORATION_OPTIONS_WITHOUT_OVERVIEW_RULER=Zh.register({
      description:"bracket-match-no-overview",stickiness:1,className:"bracket-match"
    })
  }
  _updateBrackets(){
    if(this._matchBrackets==="never")return;
    this._recomputeBrackets();
    const e=[];
    let t=0;
    for(const i of this._lastBracketsData){
      const r=i.brackets;
      r&&(e[t++]={
        range:r[0],options:i.options
      },e[t++]={
        range:r[1],options:i.options
      })
    }
    this._decorations.set(e)
  }
  _recomputeBrackets(){
    if(!this._editor.hasModel()||!this._editor.hasWidgetFocus()){
      this._lastBracketsData=[],this._lastVersionId=0;
      return
    }
    const e=this._editor.getSelections();
    if(e.length>100){
      this._lastBracketsData=[],this._lastVersionId=0;
      return
    }
    const t=this._editor.getModel(), i=t.getVersionId();
    let r=[];
    this._lastVersionId===i&&(r=this._lastBracketsData);
    const s=[];
    let o=0;
    for(let m=0, p=e.length;
    m<p;
    m++){
      const g=e[m];
      g.isEmpty()&&(s[o++]=g.getStartPosition())
    }
    s.length>1&&s.sort(ar.compare);
    const a=[];
    let l=0, u=0;
    const d=r.length;
    for(let m=0, p=s.length;
    m<p;
    m++){
      const g=s[m];
      for(;
      u<d&&r[u].position.isBefore(g);
      )u++;
      if(u<d&&r[u].position.equals(g))a[l++]=r[u];
      else{
        let f=t.bracketPairs.matchBracket(g,20),A=cWa._DECORATION_OPTIONS_WITH_OVERVIEW_RULER;
        !f&&this._matchBrackets==="always"&&(f=t.bracketPairs.findEnclosingBrackets(g,20),A=cWa._DECORATION_OPTIONS_WITHOUT_OVERVIEW_RULER),a[l++]=new mSh(g,f,A)
      }
    }
    this._lastBracketsData=a, this._lastVersionId=i
  }
}, Mg(vKe.ID, vKe, 1), ac(dSh), ac(uSh), ac(hSh), or.appendMenuItem(st.MenubarGoMenu, {
  group:"5_infile_nav", command:{
    id:"editor.action.jumpToBracket", title:_(942, null)
  }, order:2
})
}
});
function W3t(n, e){
  return{
    id:e, asString:async()=>n, asFile:()=>{
      
    }, value:typeof n=="string"?n:void 0
  }
}
function bhA(n, e, t, i){
  const r={
    id:Wr(), name:n, uri:e, data:t
  };
  return{
    id:i, asString:async()=>"", asFile:()=>r, value:void 0
  }
}
function W5o(n){
  return n.toLowerCase()
}
function gSh(n, e){
  return fSh(W5o(n), e.map(W5o))
}
function fSh(n, e){
  if(n==="*/*")return e.length>0;
  if(e.includes(n))return!0;
  const t=n.match(/^([a-z]+)\/([a-z]+|\*)$/i);
  if(!t)return!1;
  const[i, r, s]=t;
  return s==="*"?e.some(o=>o.startsWith(r+"/")):!1
}
var wbt, YSe, ZSe=