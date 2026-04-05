// Module: out-build/vs/editor/contrib/codeAction/browser/codeAction.js
// Offset: 2478431 (bundle byte offset)
// Size: 2160 bytes

Vs(), Po(), _s(), QY(), rt(), Yn(), Ht(), QS(), hs(), So(), Xg(), Pa(), YI(), ts(), db(), Cm(), hd(), dve(), BW(), a9o="editor.action.codeAction", c9o="editor.action.quickFix", qBc="editor.action.autoFix", l9o="editor.action.refactor", u9o="editor.action.sourceAction", d9o="editor.action.organizeImports", h9o="editor.action.fixAll", okh=class dWa extends at{
  static codeActionsPreferredComparator(e, t){
    return e.isPreferred&&!t.isPreferred?-1:!e.isPreferred&&t.isPreferred?1:0
  }
  static codeActionsComparator({
    action:e
  }, {
    action:t
  }){
    return e.isAI&&!t.isAI?1:!e.isAI&&t.isAI?-1:q_(e.diagnostics)?q_(t.diagnostics)?dWa.codeActionsPreferredComparator(e, t):-1:q_(t.diagnostics)?1:dWa.codeActionsPreferredComparator(e, t)
  }
  constructor(e, t, i){
    super(), this.documentation=t, this._register(i), this.allActions=[...e].sort(dWa.codeActionsComparator), this.validActions=this.allActions.filter(({
      action:r
    })=>!r.disabled)
  }
  get hasAutoFix(){
    return this.validActions.some(({
      action:e
    })=>!!e.kind&&FA.QuickFix.contains(new p0(e.kind))&&!!e.isPreferred)
  }
  get hasAIFix(){
    return this.validActions.some(({
      action:e
    })=>!!e.isAI)
  }
  get allAIFixes(){
    return this.validActions.every(({
      action:e
    })=>!!e.isAI)
  }
}, HBc={
  actions:[], documentation:void 0
}, (function(n){
  n.OnSave="onSave", n.FromProblemsView="fromProblemsView", n.FromCodeActions="fromCodeActions", n.FromAILightbulb="fromAILightbulb", n.FromProblemsHover="fromProblemsHover"
})(eae||(eae={
  
})), Ss.registerCommand("_executeCodeActionProvider", async function(n, e, t, i, r){
  if(!(e instanceof je))throw uw();
  const{
    codeActionProvider:s
  }
  =n.get($u), o=n.get(Il).getModel(e);
  if(!o)throw uw();
  const a=Vl.isISelection(t)?Vl.liftSelection(t):Zt.isIRange(t)?o.validateRange(t):void 0;
  if(!a)throw uw();
  const l=typeof i=="string"?new p0(i):void 0, u=await hve(s, o, a, {
    type:1, triggerAction:E9.Default, filter:{
      includeSourceActions:!0,include:l
    }
  }, Cs.None, void 0), d=[], m=Math.min(u.validActions.length, typeof r=="number"?r:0);
  for(let p=0;
  p<m;
  p++)d.push(u.validActions[p].resolve(Cs.None));
  try{
    return await Promise.all(d), u.validActions.map(p=>p.action)
  }
  finally{
    setTimeout(()=>u.dispose(), 100)
  }
})
}
}), akh, Gl, kKe, bk, ay=