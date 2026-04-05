// Module: out-build/vs/workbench/browser/actions/workspaceActions.js
// Offset: 31276888 (bundle byte offset)
// Size: 5500 bytes

Ht(), ps(), Uye(), ss(), hs(), M1t(), ru(), dr(), Mm(), wm(), G_(), si(), eu(), vL(), Av(), ip(), F1t=dt(3248, "Workspaces"), Fka=class vjb extends rn{
  static{
    this.ID="workbench.action.files.openFile"
  }
  constructor(){
    super({
      id:vjb.ID,title:dt(3249,"Open File..."),category:Br.File,f1:!0,keybinding:{
        when:MAe.toNegated(),weight:200,primary:2093
      }
    })
  }
  async run(e, t){
    return e.get(oy).pickFileAndOpen({
      forceNewWindow:!1,telemetryExtraData:t
    })
  }
}, O1t=class Ajb extends rn{
  static{
    this.ID="workbench.action.files.openFolder"
  }
  constructor(){
    super({
      id:Ajb.ID,title:dt(3250,"Open Folder..."),category:Br.File,f1:!0,precondition:XNe,keybinding:{
        weight:200,primary:void 0,linux:{
          primary:Ma(Gm,2093)
        },win:{
          primary:Ma(Gm,2093)
        }
      }
    })
  }
  async run(e, t){
    return e.get(oy).pickFolderAndOpen({
      forceNewWindow:!1,telemetryExtraData:t
    })
  }
}, T0i=class yjb extends rn{
  static{
    this.ID="workbench.action.files.openFolderViaWorkspace"
  }
  constructor(){
    super({
      id:yjb.ID,title:dt(3251,"Open Folder..."),category:Br.File,f1:!0,precondition:Ee.and(XNe.toNegated(),m_.isEqualTo("workspace")),keybinding:{
        weight:200,primary:2093
      }
    })
  }
  run(e){
    return e.get(fr).executeCommand(obu)
  }
}, Uit=class Qcd extends rn{
  static{
    this.ID="workbench.action.files.openFileFolder"
  }
  static{
    this.LABEL=dt(3252, "Open...")
  }
  constructor(){
    super({
      id:Qcd.ID,title:Qcd.LABEL,category:Br.File,f1:!0,precondition:Ee.and(MAe,XNe),keybinding:{
        weight:200,primary:2093
      }
    })
  }
  async run(e, t){
    return e.get(oy).pickFileFolderAndOpen({
      forceNewWindow:!1,telemetryExtraData:t
    })
  }
}, abu=class wjb extends rn{
  static{
    this.ID="workbench.action.openWorkspace"
  }
  constructor(){
    super({
      id:wjb.ID,title:dt(3253,"Open Workspace from File..."),category:Br.File,f1:!0,precondition:Pme
    })
  }
  async run(e, t){
    return e.get(oy).pickWorkspaceAndOpen({
      telemetryExtraData:t
    })
  }
}, Oka=class _jb extends rn{
  static{
    this.ID="workbench.action.closeFolder"
  }
  constructor(){
    super({
      id:_jb.ID,title:dt(3254,"Close Workspace"),category:F1t,f1:!0,precondition:Ee.and(m_.notEqualsTo("empty"),npn),keybinding:{
        weight:200,primary:Ma(Gm,36),mac:{
          primary:Ma(Np,36)
        }
      }
    })
  }
  async run(e){
    const t=e.get(wd), i=e.get(Cc);
    return t.openWindow({
      forceReuseWindow:!0,remoteAuthority:i.remoteAuthority
    })
  }
}, DBf=class Cjb extends rn{
  static{
    this.ID="workbench.action.openWorkspaceConfigFile"
  }
  constructor(){
    super({
      id:Cjb.ID,title:dt(3255,"Open Workspace Configuration File"),category:F1t,f1:!0,precondition:m_.isEqualTo("workspace")
    })
  }
  async run(e){
    const t=e.get(Lr), i=e.get(yi), r=t.getWorkspace().configuration;
    r&&await i.openEditor({
      resource:r,options:{
        pinned:!0
      }
    })
  }
}, Uka=class Sjb extends rn{
  static{
    this.ID="workbench.action.addRootFolder"
  }
  constructor(){
    super({
      id:Sjb.ID,title:sbu,category:F1t,f1:!0,precondition:Ee.or(Pme,m_.isEqualTo("workspace"))
    })
  }
  run(e){
    return e.get(fr).executeCommand(x0i)
  }
}, cbu=class kjb extends rn{
  static{
    this.ID="workbench.action.removeRootFolder"
  }
  constructor(){
    super({
      id:kjb.ID,title:dt(3256,"Remove Folder from Workspace..."),category:F1t,f1:!0,precondition:Ee.and(Tnt.notEqualsTo("0"),Ee.or(Pme,m_.isEqualTo("workspace")))
    })
  }
  async run(e){
    const t=e.get(fr), i=e.get(uX), r=await t.executeCommand(zqe);
    r&&await i.removeFolders([r.uri])
  }
}, lbu=class Ejb extends rn{
  static{
    this.ID="workbench.action.saveWorkspaceAs"
  }
  constructor(){
    super({
      id:Ejb.ID,title:dt(3257,"Save Workspace As..."),category:F1t,f1:!0,precondition:Pme
    })
  }
  async run(e){
    const t=e.get(uX), i=e.get(Lr), r=await t.pickNewWorkspacePath();
    if(r&&vOt(r))switch(i.getWorkbenchState()){
      case 1:case 2:{
        const s=i.getWorkspace().folders.map(o=>({
          uri:o.uri
        }));
        return t.createAndEnterWorkspace(s,r)
      }
      case 3:return t.saveAndEnterWorkspace(r)
    }
  }
}, ubu=class xjb extends rn{
  static{
    this.ID="workbench.action.duplicateWorkspaceInNewWindow"
  }
  constructor(){
    super({
      id:xjb.ID,title:dt(3258,"Duplicate As Workspace in New Window"),category:F1t,f1:!0,precondition:Pme
    })
  }
  async run(e){
    const t=e.get(Lr), i=e.get(uX), r=e.get(wd), s=e.get(CM), o=e.get(Cc), a=t.getWorkspace().folders, l=o.remoteAuthority, u=await s.createUntitledWorkspace(a, l);
    return await i.copyWorkspaceSettings(u), r.openWindow([{
      workspaceUri:u.configPath
    }
    ], {
      forceNewWindow:!0,remoteAuthority:l
    })
  }
}, Dt(Uka), Dt(cbu), Dt(Fka), Dt(O1t), Dt(T0i), Dt(Uit), Dt(abu), Dt(DBf), Dt(Oka), Dt(lbu), Dt(ubu), or.appendMenuItem(st.MenubarFileMenu, {
  group:"2_open", command:{
    id:Fka.ID, title:_(3238, null)
  }, order:1, when:MAe.toNegated()
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"2_open", command:{
    id:O1t.ID, title:_(3239, null)
  }, order:2, when:XNe
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"2_open", command:{
    id:T0i.ID, title:_(3240, null)
  }, order:2, when:Ee.and(XNe.toNegated(), m_.isEqualTo("workspace"))
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"2_open", command:{
    id:Uit.ID, title:_(3241, null)
  }, order:1, when:Ee.and(MAe, XNe)
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"2_open", command:{
    id:abu.ID, title:_(3242, null)
  }, order:3, when:Pme
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"3_workspace", command:{
    id:x0i, title:_(3243, null)
  }, when:Ee.or(Pme, m_.isEqualTo("workspace")), order:1
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"3_workspace", command:{
    id:lbu.ID, title:_(3244, null)
  }, order:2, when:Pme
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"3_workspace", command:{
    id:ubu.ID, title:_(3245, null)
  }, order:3, when:Pme
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"6_close", command:{
    id:Oka.ID, title:_(3246, null)
  }, order:3, when:Ee.and(m_.isEqualTo("folder"), npn)
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"6_close", command:{
    id:Oka.ID, title:_(3247, null)
  }, order:3, when:Ee.and(m_.isEqualTo("workspace"), npn)
})
}
}), _oy=