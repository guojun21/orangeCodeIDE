// Module: out-build/vs/workbench/services/commands/common/workbenchCommandRegistry.js
// Offset: 27666564 (bundle byte offset)
// Size: 2917 bytes

yn(), Ef(), l2(), rt(), Js(), dr(), hs(), si(), Er(), Wt(), Hw(), cie=xi("workbenchCommandRegistry"), uGg=class QDt{
  constructor(){
    this.commands=new Map, this._onDidRegisterCommand=new Qe, this.onDidRegisterCommand=this._onDidRegisterCommand.event
  }
  static{
    this.globalActionRegistrations=new Map
  }
  registerCommand(e, t){
    if(!e)throw new Error("invalid command");
    if(typeof e=="string"){
      if(!t)throw new Error("invalid command");
      return this.registerCommand({
        id:e,handler:t
      })
    }
    if(e.metadata&&Array.isArray(e.metadata.args)){
      const a=[];
      for(const u of e.metadata.args)a.push(u.constraint);
      const l=e.handler;
      e.handler=function(u,...d){
        return qnh(d,a),l(u,...d)
      }
    }
    const{
      id:i
    }
    =e;
    let r=this.commands.get(i);
    r||(r=new WD, this.commands.set(i, r));
    const s=r.unshift(e), o=$i(()=>{
      s(),this.commands.get(i)?.isEmpty()&&this.commands.delete(i)
    });
    return this._onDidRegisterCommand.fire(i), Cte(o)
  }
  registerCommandAlias(e, t){
    return this.registerCommand(e, (i, ...r)=>i.get(fr).executeCommand(t, ...r))
  }
  getCommand(e){
    const t=this.commands.get(e);
    return!t||t.isEmpty()?Ss.getCommand(e):bl.first(t)
  }
  getCommands(){
    const e=new Map;
    for(const[t, i]of Ss.getCommands())e.set(t, i);
    for(const t of this.commands.keys()){
      const i=this.commands.get(t);
      i&&!i.isEmpty()&&e.set(t,bl.first(i))
    }
    return e
  }
  registerAction2(e){
    const t=new e, {
      f1:i,menu:r,keybinding:s,...o
    }
    =t.desc, a=[];
    if(this.commands.get(o.id))throw new Error(`Cannot register two commands with the same id: ${o.id}`);
    return a.push(this.registerCommand({
      id:o.id,handler:(l,...u)=>t.run(l,...u),metadata:o.metadata??{
        description:t.desc.title
      }
    })), a.push(QDt.acquireGlobalAction(o.id, ()=>{
      const l=[];
      if(Array.isArray(r))for(const u of r)l.push(or.appendMenuItem(u.id,{
        command:{
          ...o,precondition:u.precondition===null?void 0:o.precondition
        },...u
      }));
      else r&&l.push(or.appendMenuItem(r.id,{
        command:{
          ...o,precondition:r.precondition===null?void 0:o.precondition
        },...r
      }));
      if(i&&(l.push(or.appendMenuItem(st.CommandPalette,{
        command:o,when:o.precondition
      })),l.push(or.addCommand(o))),Array.isArray(s))for(const u of s)l.push(qo.registerKeybindingRule({
        ...u,id:o.id,when:o.precondition?Ee.and(o.precondition,u.when):u.when
      }));
      else s&&l.push(qo.registerKeybindingRule({
        ...s,id:o.id,when:o.precondition?Ee.and(o.precondition,s.when):s.when
      }));
      return $i(()=>{
        Bo(l)
      })
    })), $i(()=>{
      Bo(a)
    })
  }
  static acquireGlobalAction(e, t){
    const i=QDt.globalActionRegistrations.get(e);
    if(i)return i.refCount+=1, $i(()=>{
      i.refCount-=1,i.refCount===0&&(i.disposable.dispose(),QDt.globalActionRegistrations.delete(e))
    });
    const r=t();
    return QDt.globalActionRegistrations.set(e, {
      disposable:r,refCount:1
    }), $i(()=>{
      const s=QDt.globalActionRegistrations.get(e);
      s&&(s.refCount-=1,s.refCount===0&&(s.disposable.dispose(),QDt.globalActionRegistrations.delete(e)))
    })
  }
}, Vi(cie, uGg, 1)
}
}), H$e, pba, gba, fba, J$e, zvi, tsu, VFA, dGg, hGg, mGg, pGg, gGg, KFA, fGg, bGg, vGg, nsu, AGg, yGg, wGg, isu=