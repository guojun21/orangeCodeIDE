// Module: out-build/vs/platform/keybinding/common/keybindingsRegistry.js
// Offset: 637736 (bundle byte offset)
// Size: 3207 bytes

hde(), _r(), hs(), Ws(), rt(), l2(), (function(n){
  n[n.EditorCore=0]="EditorCore", n[n.EditorContrib=100]="EditorContrib", n[n.WorkbenchContrib=200]="WorkbenchContrib", n[n.BuiltinExtension=300]="BuiltinExtension", n[n.ExternalExtension=400]="ExternalExtension", n[n.CursorDefaultPriority=500]="CursorDefaultPriority", n[n.CursorMaxPriority=600]="CursorMaxPriority"
})(Oah||(Oah={
  
})), Uah=class SJb{
  constructor(){
    this._coreKeybindings=new WD, this._extensionKeybindings=[], this._cachedMergedKeybindings=null
  }
  static bindToCurrentPlatform(e){
    if(cf===1){
      if(e&&e.win)return e.win
    }
    else if(cf===2){
      if(e&&e.mac)return e.mac
    }
    else if(e&&e.linux)return e.linux;
    return e
  }
  registerKeybindingRule(e){
    const t=SJb.bindToCurrentPlatform(e), i=new Ut;
    if(t&&t.primary){
      const r=eFn(t.primary,cf);
      r&&i.add(this._registerDefaultKeybinding(r,e.id,e.args,e.weight,0,e.when))
    }
    if(t&&Array.isArray(t.secondary))for(let r=0, s=t.secondary.length;
    r<s;
    r++){
      const o=t.secondary[r],a=eFn(o,cf);
      a&&i.add(this._registerDefaultKeybinding(a,e.id,e.args,e.weight,-r-1,e.when))
    }
    return i
  }
  setExtensionKeybindings(e){
    const t=[];
    let i=0;
    for(const r of e)r.keybinding&&(t[i++]={
      keybinding:r.keybinding,command:r.id,commandArgs:r.args,when:r.when,weight1:r.weight,weight2:0,extensionId:r.extensionId||null,isBuiltinExtension:r.isBuiltinExtension||!1
    });
    this._extensionKeybindings=t, this._cachedMergedKeybindings=null
  }
  registerCommandAndKeybindingRule(e){
    return H_(this.registerKeybindingRule(e), Ss.registerCommand(e))
  }
  _registerDefaultKeybinding(e, t, i, r, s, o){
    const a=this._coreKeybindings.push({
      keybinding:e,command:t,commandArgs:i,when:o,weight1:r,weight2:s,extensionId:null,isBuiltinExtension:!1
    });
    return this._cachedMergedKeybindings=null, $i(()=>{
      a(),this._cachedMergedKeybindings=null
    })
  }
  getDefaultKeybindings(){
    return this._cachedMergedKeybindings||(this._cachedMergedKeybindings=Array.from(this._coreKeybindings).concat(this._extensionKeybindings), this._cachedMergedKeybindings.sort(KiA)), this._cachedMergedKeybindings.slice(0)
  }
}, qo=new Uah, $ah={
  EditorModes:"platform.keybindingsRegistry"
}, Di.add($ah.EditorModes, qo)
}
});
function JBe(n){
  return n.command!==void 0
}
function YiA(n){
  return n.submenu!==void 0
}
function Dt(n){
  const e=[], t=new n, {
    f1:i, menu:r, keybinding:s, ...o
  }
  =t.desc;
  if(Ss.getCommand(o.id))throw new Error(`Cannot register two commands with the same id: ${o.id}`);
  if(e.push(Ss.registerCommand({
    id:o.id, handler:(a, ...l)=>t.run(a, ...l), metadata:o.metadata??{
      description:t.desc.title
    }
  })), Array.isArray(r))for(const a of r)e.push(or.appendMenuItem(a.id, {
    command:{
      ...o,precondition:a.precondition===null?void 0:o.precondition
    }, ...a
  }));
  else r&&e.push(or.appendMenuItem(r.id, {
    command:{
      ...o,precondition:r.precondition===null?void 0:o.precondition
    }, ...r
  }));
  if(i&&(e.push(or.appendMenuItem(st.CommandPalette, {
    command:o, when:o.precondition
  })), e.push(or.addCommand(o))), Array.isArray(s))for(const a of s)e.push(qo.registerKeybindingRule({
    ...a, id:o.id, when:o.precondition?Ee.and(o.precondition, a.when):a.when
  }));
  else s&&e.push(qo.registerKeybindingRule({
    ...s, id:o.id, when:o.precondition?Ee.and(o.precondition, s.when):s.when
  }));
  return{
    dispose(){
      Bo(e)
    }
  }
}
var LFo, st, xd, jze, or, h2, Ub, rn, dr=