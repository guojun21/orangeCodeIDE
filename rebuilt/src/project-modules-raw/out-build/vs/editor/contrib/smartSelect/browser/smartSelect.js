// Module: out-build/vs/editor/contrib/smartSelect/browser/smartSelect.js
// Offset: 32758593 (bundle byte offset)
// Size: 3636 bytes

Vs(), Po(), _s(), Cu(), tl(), ts(), db(), Qh(), _yg(), qly(), Ht(), dr(), hs(), Cm(), td(), Js(), Yn(), m5f=class gzb{
  constructor(e, t){
    this.index=e, this.ranges=t
  }
  mov(e){
    const t=this.index+(e?1:-1);
    if(t<0||t>=this.ranges.length)return this;
    const i=new gzb(t, this.ranges);
    return i.ranges[t].equalsRange(this.ranges[this.index])?i.mov(e):i
  }
}, Art=class{
  static{
    Lyu=this
  }
  static{
    this.ID="editor.contrib.smartSelectController"
  }
  static get(e){
    return e.getContribution(Lyu.ID)
  }
  constructor(e, t){
    this._editor=e, this._languageFeaturesService=t, this._ignoreSelection=!1
  }
  dispose(){
    this._selectionListener?.dispose()
  }
  async run(e){
    if(!this._editor.hasModel())return;
    const t=this._editor.getSelections(), i=this._editor.getModel();
    if(this._state||await h5f(this._languageFeaturesService.selectionRangeProvider, i, t.map(s=>s.getPosition()), this._editor.getOption(118), Cs.None).then(s=>{
      if(!(!q_(s)||s.length!==t.length)&&!(!this._editor.hasModel()||!cg(this._editor.getSelections(),t,(o,a)=>o.equalsSelection(a)))){
        for(let o=0;
        o<s.length;
        o++)s[o]=s[o].filter(a=>a.containsPosition(t[o].getStartPosition())&&a.containsPosition(t[o].getEndPosition())),s[o].unshift(t[o]);
        this._state=s.map(o=>new m5f(0,o)),this._selectionListener?.dispose(),this._selectionListener=this._editor.onDidChangeCursorPosition(()=>{
          this._ignoreSelection||(this._selectionListener?.dispose(),this._state=void 0)
        })
      }
    }), !this._state)return;
    this._state=this._state.map(s=>s.mov(e));
    const r=this._state.map(s=>Vl.fromPositions(s.ranges[s.index].getStartPosition(), s.ranges[s.index].getEndPosition()));
    this._ignoreSelection=!0;
    try{
      this._editor.setSelections(r)
    }
    finally{
      this._ignoreSelection=!1
    }
  }
}, Art=Lyu=__decorate([__param(1, $u)], Art), Nyu=class extends vu{
  constructor(n, e){
    super(e), this._forward=n
  }
  async run(n, e){
    const t=Art.get(e);
    t&&await t.run(this._forward)
  }
}, p5f=class extends Nyu{
  constructor(){
    super(!0, {
      id:"editor.action.smartSelect.expand",label:dt(1540,"Expand Selection"),precondition:void 0,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:1553,mac:{
          primary:3345,secondary:[1297]
        },weight:100
      },menuOpts:{
        menuId:st.MenubarSelectionMenu,group:"1_basic",title:_(1538,null),order:2
      }
    })
  }
}, Ss.registerCommandAlias("editor.action.smartSelect.grow", "editor.action.smartSelect.expand"), g5f=class extends Nyu{
  constructor(){
    super(!1, {
      id:"editor.action.smartSelect.shrink",label:dt(1541,"Shrink Selection"),precondition:void 0,kbOpts:{
        kbExpr:Ci.editorTextFocus,primary:1551,mac:{
          primary:3343,secondary:[1295]
        },weight:100
      },menuOpts:{
        menuId:st.MenubarSelectionMenu,group:"1_basic",title:_(1539,null),order:3
      }
    })
  }
}, Mg(Art.ID, Art, 4), ac(p5f), ac(g5f), Ss.registerCommand("_executeSelectionRangeProvider", async function(n, ...e){
  const[t, i]=e;
  Kd(je.isUri(t));
  const r=n.get($u).selectionRangeProvider, s=await n.get(El).createModelReference(t);
  try{
    return h5f(r, s.object.textEditorModel, i, {
      selectLeadingAndTrailingWhitespace:!0,selectSubwords:!0
    }, Cs.None)
  }
  finally{
    s.dispose()
  }
})
}
});
function ASi(n, e, t, i, r, s){
  if(Array.isArray(n)){
    let o=0;
    for(const a of n){
      const l=ASi(a,e,t,i,r,s);
      if(l===10)return l;
      l>o&&(o=l)
    }
    return o
  }
  else{
    if(typeof n=="string")return i?n==="*"?5:n===t?10:0:0;
    if(n){
      const{
        language:o,pattern:a,scheme:l,hasAccessToAllModels:u,notebookType:d
      }
      =n;
      if(!i&&!u)return 0;
      d&&r&&(e=r);
      let m=0;
      if(l)if(l===e.scheme)m=10;
      else if(l==="*")m=5;
      else return 0;
      if(o)if(o===t)m=10;
      else if(o==="*")m=Math.max(m,5);
      else return 0;
      if(d)if(d===s)m=10;
      else if(d==="*"&&s!==void 0)m=Math.max(m,5);
      else return 0;
      if(a){
        let p;
        if(typeof a=="string"?p=a:p={
          ...a,base:k6(a.base)
        },p===e.fsPath||nP(p,e.fsPath))m=10;
        else return 0
      }
      return m
    }
    else return 0
  }
}
var bxa=