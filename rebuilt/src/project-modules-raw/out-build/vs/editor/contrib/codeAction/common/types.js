// Module: out-build/vs/editor/contrib/codeAction/common/types.js
// Offset: 2473564 (bundle byte offset)
// Size: 4867 bytes

_s(), QY(), FA=new class{
  constructor(){
    this.QuickFix=new p0("quickfix"), this.Refactor=new p0("refactor"), this.RefactorExtract=this.Refactor.append("extract"), this.RefactorInline=this.Refactor.append("inline"), this.RefactorMove=this.Refactor.append("move"), this.RefactorRewrite=this.Refactor.append("rewrite"), this.Notebook=new p0("notebook"), this.Source=new p0("source"), this.SourceOrganizeImports=this.Source.append("organizeImports"), this.SourceFixAll=this.Source.append("fixAll"), this.SurroundWith=this.Refactor.append("surround")
  }
}, (function(n){
  n.IfSingle="ifSingle", n.First="first", n.Never="never"
})(rkh||(rkh={
  
})), (function(n){
  n.Refactor="refactor", n.RefactorPreview="refactor preview", n.Lightbulb="lightbulb", n.Default="other (default)", n.SourceAction="source action", n.QuickFix="quick fix action", n.FixAll="fix all", n.OrganizeImports="organize imports", n.AutoFix="auto fix", n.QuickFixHover="quick fix hover window", n.OnSave="save participants", n.ProblemsView="problems view"
})(E9||(E9={
  
})), e5n=class GCn{
  static fromUser(e, t){
    return!e||typeof e!="object"?new GCn(t.kind, t.apply, !1):new GCn(GCn.getKindFromUser(e, t.kind), GCn.getApplyFromUser(e, t.apply), GCn.getPreferredUser(e))
  }
  static getApplyFromUser(e, t){
    switch(typeof e.apply=="string"?e.apply.toLowerCase():""){
      case"first":return"first";
      case"never":return"never";
      case"ifsingle":return"ifSingle";
      default:return t
    }
  }
  static getKindFromUser(e, t){
    return typeof e.kind=="string"?new p0(e.kind):t
  }
  static getPreferredUser(e){
    return typeof e.preferred=="boolean"?e.preferred:!1
  }
  constructor(e, t, i){
    this.kind=e, this.apply=t, this.preferred=i
  }
}, skh=class{
  constructor(n, e, t){
    this.action=n, this.provider=e, this.highlightRange=t
  }
  async resolve(n){
    if(this.provider?.resolveCodeAction&&!this.action.edit){
      let e;
      try{
        e=await this.provider.resolveCodeAction(this.action,n)
      }
      catch(t){
        JE(t)
      }
      e&&(this.action.edit=e.edit)
    }
    return this
  }
}
}
});
async function hve(n, e, t, i, r, s={
  
}){
  const o=i.filter||{
    
  }, a={
    ...o, excludes:[...o.excludes||[], FA.Notebook]
  }, l={
    only:o.include?.value, trigger:i.type
  }, u=i.type===2, d=qhA(n, e, u?a:o), m=new Wc(r), p=s.wrapper??((w, C, x)=>x(qde.None)), g=new Ut, f=d.map(async w=>{
    const C=new V3n(e, m.token);
    return g.add(C), p(w, C, I=>$hA({
      provider:w,model:e,rangeOrSelection:t,codeActionContext:l,filter:o,cts:C,disposables:g,progress:I
    }))
  }), A=n.onDidChange(()=>{
    const w=n.all(e);
    cg(w, d)||m.cancel()
  });
  try{
    const w=(await Promise.all(f)).filter(B=>!!B), C=w.map(B=>B.actions).flat(), x=[...lh(w.map(B=>B.documentation).filter(B=>!!B)), ...HhA(n, e, i, C)], I=new okh(C, x, g);
    return g.add(I), I
  }
  catch(w){
    throw g.dispose(), w
  }
  finally{
    A.dispose(), m.dispose()
  }
}
async function $hA(n){
  const{
    provider:e, model:t, rangeOrSelection:i, codeActionContext:r, filter:s, cts:o, progress:a, disposables:l
  }
  =n, u=setTimeout(()=>{
    e.displayName&&a.report({
      message:_(967,null,e.displayName,"command:workbench.action.openSettings?%5B%22editor.codeActionsOnSave%22%5D")
    })
  }, 1250);
  try{
    const d=await e.provideCodeActions(t, i, r, o.token);
    if(d&&l.add(d), o.token.isCancellationRequested)return HBc;
    const m=(d?.actions||[]).filter(g=>g&&UhA(s, g)), p=JhA(e, m, s.include);
    return{
      actions:m.map(g=>new skh(g,e)),documentation:p
    }
  }
  catch(d){
    if(bf(d))throw d;
    return JE(d), HBc
  }
  finally{
    clearTimeout(u)
  }
}
function qhA(n, e, t){
  return n.all(e).filter(i=>i.providedCodeActionKinds?i.providedCodeActionKinds.some(r=>OhA(t, new p0(r))):!0)
}
function*HhA(n, e, t, i){
  if(e&&i.length)for(const r of n.all(e))r._getAdditionalMenuItems&&(yield*r._getAdditionalMenuItems?.({
    trigger:t.type, only:t.filter?.include?.value
  }, i.map(s=>s.action)))
}
function JhA(n, e, t){
  if(!n.documentation)return;
  const i=n.documentation.map(r=>({
    kind:new p0(r.kind), command:r.command
  }));
  if(t){
    let r;
    for(const s of i)s.kind.contains(t)&&(r?r.kind.contains(s.kind)&&(r=s):r=s);
    if(r)return r?.command
  }
  for(const r of e)if(r.kind){
    for(const s of i)if(s.kind.contains(new p0(r.kind)))return s.command
  }
}
async function Sbt(n, e, t, i, r=Cs.None){
  const s=n.get(rL), o=n.get(fr), a=n.get(ea), l=n.get(ms), u=n.get(fS);
  if(a.publicLog2("codeAction.applyCodeAction", {
    codeActionTitle:e.action.title, codeActionKind:e.action.kind, codeActionIsPreferred:!!e.action.isPreferred, reason:t
  }), u.playSignal(rb.codeActionTriggered), await e.resolve(r), !r.isCancellationRequested&&!(e.action.edit?.edits.length&&!(await s.apply(e.action.edit, {
    editor:i?.editor, label:e.action.title, quotableLabel:e.action.title, code:"undoredo.codeAction", respectAutoSaveConfig:t!==eae.OnSave, showPreview:i?.preview
  })).isApplied)){
    if(e.action.command)try{
      await o.executeCommand(e.action.command.id,...e.action.command.arguments||[])
    }
    catch(d){
      const m=GhA(d);
      l.error(typeof m=="string"?m:_(968,null))
    }
    setTimeout(()=>u.playSignal(rb.codeActionApplied), 100)
  }
}
function GhA(n){
  return typeof n=="string"?n:n instanceof Error&&typeof n.message=="string"?n.message:void 0
}
var a9o, c9o, qBc, l9o, u9o, d9o, h9o, okh, HBc, eae, mve=