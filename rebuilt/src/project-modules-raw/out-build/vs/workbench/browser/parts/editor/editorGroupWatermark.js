// Module: out-build/vs/workbench/browser/parts/editor/editorGroupWatermark.js
// Offset: 31399236 (bundle byte offset)
// Size: 5061 bytes

ri(), ri(), Kde(), Vs(), rt(), _r(), Ht(), hs(), xme(), Ei(), si(), ka(), kr(), $b(), Nl(), ps(), vL(), Mm(), V3(), of(), gD(), Rn("editorWatermark.foreground", {
  dark:rl(jE, .6), light:rl(jE, .68), hcDark:jE, hcLight:jE
}, _(3733, null)), Jbu={
  text:_(3734, null), id:"workbench.action.quickOpen"
}, Gbu={
  text:_(3735, null), id:"composer.openBrowserTab"
}, Wbu={
  text:_(3736, null), id:M1e
}, Vka={
  text:_(3737, null), id:"workbench.action.togglePanel"
}, Qbu={
  text:_(3738, null), id:"workbench.action.togglePanel"
}, jbu={
  text:_(3739, null), id:"workbench.view.explorer"
}, NLf={
  text:_(3740, null), id:"workbench.action.toggleSidebarVisibility"
}, Kka={
  text:_(3741, null), id:"workbench.action.maximizeChatSize", when:{
    native:s8, web:s8
  }
}, MLf=lh([Wbu, Vka, jbu, Jbu, Gbu]), FLf=[], zbu=[Wbu, Vka, Qbu, jbu, NLf, Jbu, Gbu, Kka], Vbu=[], Yka=class extends at{
  static{
    zka=this
  }
  static{
    this.CACHED_WHEN="editorGroupWatermark.whenConditions"
  }
  constructor(e, t, i, r, s, o, a, l, u){
    super(), this.keybindingService=t, this.contextService=i, this.contextKeyService=r, this.configurationService=s, this.storageService=o, this.workspacesService=a, this.commandService=l, this.workbenchCommandRegistry=u, this.transientDisposables=this._register(new Ut), this.keybindingLabels=this._register(new Ut), this.enabled=!1, this.isInEmbeddedAuxBarEditor=!!e.closest(".embedded-aux-bar-editor"), this.cachedWhen=this.storageService.getObject(zka.CACHED_WHEN, 0, Object.create(null)), this.workbenchState=this.contextService.getWorkbenchState(), this.watermark=Rt(e, Ct(".editor-group-watermark")), this.registerListeners(), this.render()
  }
  renderLegacyUI(e, t){
    this.watermark.classList.remove("new-watermark-ui"), Rt(this.watermark, Ct(".letterpress"));
    const i=Rt(this.watermark, Ct(".shortcuts")), r=[...e, ...t];
    let s=i.querySelector(".watermark-box");
    s||(s=Rt(i, Ct(".watermark-box")));
    const o=()=>{
      th(s),this.keybindingLabels.clear();
      const a=Tce.getValue(this.contextKeyService)??!1,l=Pnt.getValue(this.contextKeyService)??!1,u=WCa.getValue(this.contextKeyService)??!1;
      for(const d of r){
        if(d.id==="workbench.view.explorer"&&u||d.id==="workbench.action.toggleSidebarVisibility"&&(!a||!u)||d.id==="workbench.action.togglePanel"&&(l&&d===Vka||!l&&d===Qbu))continue;
        const m=this.keybindingService.lookupKeybinding(d.id);
        if(!m)continue;
        const p=Rt(s,Ct("dl.watermark-item")),g=Rt(p,Ct("dt"));
        g.textContent=d.text;
        const f=Rt(p,Ct("dd"));
        this.keybindingLabels.add(new Xoe(f,cf,{
          renderUnboundKeybindings:!0,...fKe
        })).set(m),p.style.cursor="pointer",this.transientDisposables.add(ei(p,ir.CLICK,()=>{
          this.commandService.executeCommand(d.id).catch(w=>{
            console.error(`Failed to execute command ${d.id}:`,w)
          })
        }))
      }
    };
    o(), this.transientDisposables.add(this.keybindingService.onDidUpdateKeybindings(o))
  }
  filterEntries(e, t){
    const i=e.filter(r=>{
      const s=Eu?r.when?.web:r.when?.native;
      return s?this.cachedWhen[r.id]!==void 0?this.cachedWhen[r.id]:this.contextKeyService.contextMatchesRules(s):!0
    }).filter(r=>!!this.workbenchCommandRegistry.getCommand(r.id)).filter(r=>!!this.keybindingService.lookupKeybinding(r.id));
    return t&&q2n(i), i
  }
  registerListeners(){
    this._register(this.configurationService.onDidChangeConfiguration(e=>{
      e.affectsConfiguration("workbench.tips.enabled")&&this.enabled!==this.configurationService.getValue("workbench.tips.enabled")&&this.render()
    })), this._register(this.contextService.onDidChangeWorkbenchState(e=>{
      this.workbenchState!==e&&(this.workbenchState=e,this.render())
    })), this._register(this.storageService.onWillSaveState(e=>{
      if(e.reason===bW.SHUTDOWN){
        const t=[...MLf,...FLf,...zbu,...Vbu];
        for(const i of t){
          const r=Eu?i.when?.web:i.when?.native;
          r&&(this.cachedWhen[i.id]=this.contextKeyService.contextMatchesRules(r))
        }
        this.storageService.store(zka.CACHED_WHEN,JSON.stringify(this.cachedWhen),0,1)
      }
    })), this._register(this.workspacesService.onDidChangeRecentlyOpened(()=>{
      this.render()
    })), this._register(this.contextService.onDidChangeWorkspaceFolders(()=>{
      this.render()
    })), this._register(this.contextKeyService.onDidChangeContext(e=>{
      e.affectsSome(new Set([Tce.key,Pnt.key,$F,WCa.key]))&&(e.affectsSome(new Set([$F]))&&delete this.cachedWhen[Kka.id],this.render())
    })), this._register(this.storageService.onDidChangeValue(-1, "cursor/unifiedAppLayout", this._register(new Ut))(()=>{
      delete this.cachedWhen[Kka.id],this.render()
    }))
  }
  async render(){
    if(this.enabled=this.configurationService.getValue("workbench.tips.enabled"), th(this.watermark), this.transientDisposables.clear(), this.isInEmbeddedAuxBarEditor){
      this.watermark.style.display="none";
      return
    }
    if(!this.enabled){
      this.watermark.style.display="none";
      return
    }
    if(this.workbenchState===1){
      this.watermark.style.display="none";
      return
    }
    this.watermark.style.display="";
    const e=this.filterEntries(zbu, !1), t=this.filterEntries(Vbu, !0).slice(0, Math.max(0, 5-e.length));
    this.renderLegacyUI(e, t)
  }
}, Yka=zka=__decorate([__param(1, mo), __param(2, Lr), __param(3, wi), __param(4, Fn), __param(5, Hi), __param(6, CM), __param(7, fr), __param(8, cie)], Yka), Rn("editorWatermark.foreground", {
  dark:rl(jE, .6), light:rl(jE, .68), hcDark:jE, hcLight:jE
}, _(3742, null))
}
}), OLf, t7e, Wx, ULf, yX, EE=