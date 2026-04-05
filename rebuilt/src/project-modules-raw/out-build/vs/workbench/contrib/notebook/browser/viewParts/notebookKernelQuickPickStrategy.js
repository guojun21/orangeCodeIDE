// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookKernelQuickPickStrategy.js
// Offset: 33365012 (bundle byte offset)
// Size: 12142 bytes

Vs(), vr(), Po(), qi(), yn(), rt(), oa(), Ht(), hs(), Pd(), jr(), Rl(), Kl(), Jr(), v0(), Sb(), bJ(), bO(), _u(), Yn(), Fc(), AN(), kS(), Xk(), f_u=200, V8f=class{
  constructor(n, e, t, i, r, s, o, a, l){
    this._notebookKernelService=n, this._productService=e, this._quickInputService=t, this._labelService=i, this._logService=r, this._extensionWorkbenchService=s, this._extensionService=o, this._commandService=a, this._extensionManagementServerService=l
  }
  async showQuickPick(n, e, t){
    const i=n.textModel, r=n.scopedContextKeyService, s=this._getMatchingResult(i), {
      selected:o,all:a
    }
    =s;
    let l;
    if(e){
      for(const w of a)if(w.id===e){
        l=w;
        break
      }
      if(!l)return this._logService.warn(`wanted kernel DOES NOT EXIST, wanted: ${e}, all: ${a.map(w=>w.id)}`),!1
    }
    if(l)return this._selecteKernel(i, l), !0;
    const u=new Ut, d=u.add(this._quickInputService.createQuickPick({
      useSeparators:!0
    })), m=this._getKernelPickerQuickPickItems(i, s, this._notebookKernelService, r);
    if(m.length===1&&Ndy(m[0])&&!t){
      const w=await this._handleQuickPick(n,m[0],m);
      return u.dispose(),w
    }
    d.items=m, d.canSelectMany=!1, d.placeholder=o?_(9505, null, this._labelService.getUriLabel(i.uri, {
      relative:!0
    })):_(9506, null, this._labelService.getUriLabel(i.uri, {
      relative:!0
    })), d.busy=this._notebookKernelService.getKernelDetectionTasks(i).length>0;
    const p=this._notebookKernelService.onDidChangeKernelDetectionTasks(()=>{
      d.busy=this._notebookKernelService.getKernelDetectionTasks(i).length>0
    }), g=m.length===0?dw(w=>this._showInstallKernelExtensionRecommendation(i, d, this._extensionWorkbenchService, w)):void 0, f=In.debounce(In.any(this._notebookKernelService.onDidChangeSourceActions, this._notebookKernelService.onDidAddKernel, this._notebookKernelService.onDidRemoveKernel, this._notebookKernelService.onDidChangeNotebookAffinity), (w, C)=>w, f_u)(async()=>{
      d.busy=!1,g?.cancel();
      const w=d.activeItems,C=this._getMatchingResult(i),x=this._getKernelPickerQuickPickItems(i,C,this._notebookKernelService,r);
      d.keepScrollPosition=!0;
      const I=[];
      for(const B of w)if(yki(B)){
        const R=B.kernel.id,N=x.find(M=>yki(M)&&M.kernel.id===R);
        N&&I.push(N)
      }
      else if(QTa(B)){
        const R=x.find(N=>QTa(N)&&N.action.action.id===B.action.action.id);
        R&&I.push(R)
      }
      d.items=x,d.activeItems=I
    }, this), A=await new Promise((w, C)=>{
      u.add(d.onDidAccept(()=>{
        const x=d.selectedItems[0];
        w(x?{
          selected:x,items:d.items
        }
        :{
          selected:void 0,items:d.items
        }),d.hide()
      })),u.add(d.onDidHide(()=>{
        p.dispose(),f.dispose(),d.dispose(),w({
          selected:void 0,items:d.items
        })
      })),d.show()
    });
    return u.dispose(), A.selected?await this._handleQuickPick(n, A.selected, A.items):!1
  }
  _getMatchingResult(n){
    return this._notebookKernelService.getMatchingKernel(n)
  }
  async _handleQuickPick(n, e, t){
    if(yki(e)){
      const i=e.kernel;
      return this._selecteKernel(n.textModel,i),!0
    }
    return j8f(e)?await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, n.textModel.viewType, []):jTa(e)?await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, n.textModel.viewType, e.extensionIds, this._productService.quality!=="stable"):QTa(e)&&e.action.runAction(), !0
  }
  _selecteKernel(n, e){
    this._notebookKernelService.selectKernelForNotebook(e, n)
  }
  async _showKernelExtension(n, e, t, i, r, s){
    const o=[], a=[], l=[];
    for(const d of r){
      const m=(await n.getExtensions([{
        id:d
      }
      ],Cs.None))[0];
      if(m.enablementState===9||m.enablementState===10||m.enablementState===2)l.push(m);
      else if(!n.installed.some(p=>ic(p.identifier,m.identifier)))await n.canInstall(m)===!0&&o.push(m);
      else if(t.remoteExtensionManagementServer){
        if(n.installed.some(p=>ic(p.identifier,m.identifier)&&p.server===t.remoteExtensionManagementServer))continue;
        await n.canInstall(m)&&a.push(m)
      }
    }
    if(o.length||l.length||a.length)return await Promise.all([...o.map(async d=>{
      await n.install(d,{
        installPreReleaseVersion:s??!1,context:{
          skipWalkthrough:!0
        }
      },15)
    }), ...l.map(async d=>{
      switch(d.enablementState){
        case 10:await n.setEnablement([d],12);
        return;
        case 9:await n.setEnablement([d],11);
        return;
        case 2:await n.setEnablement([d],3);
        return;
        default:break
      }
    }), ...a.map(async d=>{
      await n.installInServer(d,this._extensionManagementServerService.remoteExtensionManagementServer)
    })]), await e.activateByEvent(`onNotebook:${i}`), !0;
    const u=i.split(/[^a-z0-9]/ig).map(zih).join("");
    return await n.openSearch(`@tag:notebookKernel${u}`), !1
  }
  async _showInstallKernelExtensionRecommendation(n, e, t, i){
    e.busy=!0;
    const r=await this._getKernelRecommendationsQuickPickItems(n, t);
    e.busy=!1, !i.isCancellationRequested&&r&&e.items.length===0&&(e.items=r)
  }
  async _getKernelRecommendationsQuickPickItems(n, e){
    const t=[], i=this.getSuggestedLanguage(n), r=i?this.getSuggestedKernelFromLanguage(n.viewType, i):void 0;
    if(r){
      if(await e.queryLocal(),e.installed.filter(o=>(o.enablementState===3||o.enablementState===11||o.enablementState===12)&&r.extensionIds.includes(o.identifier.id)).length===r.extensionIds.length)return;
      t.push({
        id:"installSuggested",description:r.displayName??r.extensionIds.join(", "),label:`$(${Be.lightbulb.id}) `+_(9507,null),extensionIds:r.extensionIds
      })
    }
    return t.push({
      id:"install",label:_(9508,null)
    }), t
  }
  getSuggestedLanguage(n){
    let t=n.metadata?.metadata?.language_info?.name;
    if(!t){
      const i=n.cells.map(r=>r.language).filter(r=>r!=="markdown");
      if(i.length>1){
        const r=i[0];
        i.every(s=>s===r)&&(t=r)
      }
    }
    return t
  }
  getSuggestedKernelFromLanguage(n, e){
    return UIa.get(n)?.get(e)
  }
}, Dbn=class extends V8f{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(e, t, i, r, s, o, a, u, l), this._notebookKernelHistoryService=d, this._openerService=m
  }
  _getKernelPickerQuickPickItems(e, t, i, r){
    const s=[];
    if(t.selected){
      const a=g_u(t.selected,t.selected);
      s.push(a)
    }
    t.suggestions.filter(a=>a.id!==t.selected?.id).map(a=>g_u(a, t.selected)).forEach(a=>{
      s.push(a)
    });
    const o=s.length===0;
    return s.length>0&&s.push({
      type:"separator"
    }), s.push({
      id:"selectAnother",label:_(9509,null),autoRun:o
    }), s
  }
  _selecteKernel(e, t){
    const i=this._notebookKernelService.getMatchingKernel(e);
    i.selected&&this._notebookKernelHistoryService.addMostRecentKernel(i.selected), super._selecteKernel(e, t), this._notebookKernelHistoryService.addMostRecentKernel(t)
  }
  _getMatchingResult(e){
    const{
      selected:t,all:i
    }
    =this._notebookKernelHistoryService.getKernels(e), r=this._notebookKernelService.getMatchingKernel(e);
    return{
      selected:t,all:r.all,suggestions:i,hidden:[]
    }
  }
  async _handleQuickPick(e, t, i){
    return t.id==="selectAnother"?this.displaySelectAnotherQuickPick(e, i.length===1&&i[0]===t):super._handleQuickPick(e, t, i)
  }
  async displaySelectAnotherQuickPick(e, t){
    const i=e.textModel, s=(await this._calculdateKernelSources(e)).find(u=>jTa(u));
    if(s&&jTa(s)&&await this._showKernelExtension(this._extensionWorkbenchService, this._extensionService, this._extensionManagementServerService, e.textModel.viewType, s.extensionIds, this._productService.quality!=="stable"))return this.displaySelectAnotherQuickPick(e, !1);
    const o=new Ut, a=o.add(this._quickInputService.createQuickPick({
      useSeparators:!0
    })), l=await new Promise(u=>{
      a.title=_(t?9510:9511,null),a.placeholder=_(9512,null),a.busy=!0,a.buttons=[this._quickInputService.backButton],a.show(),o.add(a.onDidTriggerButton(d=>{
        d===this._quickInputService.backButton&&u(d)
      })),o.add(a.onDidTriggerItemButton(async d=>{
        if(z8f(d.item)&&d.item.documentation!==void 0){
          const m=je.isUri(d.item.documentation)?je.parse(d.item.documentation):await this._commandService.executeCommand(d.item.documentation);
          this._openerService.open(m,{
            openExternal:!0
          })
        }
      })),o.add(a.onDidAccept(async()=>{
        u(a.selectedItems[0])
      })),o.add(a.onDidHide(()=>{
        u(void 0)
      })),this._calculdateKernelSources(e).then(d=>{
        a.items=d,a.items.length>0&&(a.busy=!1)
      }),o.add(In.debounce(In.any(this._notebookKernelService.onDidChangeSourceActions,this._notebookKernelService.onDidAddKernel,this._notebookKernelService.onDidRemoveKernel),(d,m)=>d,f_u)(async()=>{
        a.busy=!0;
        const d=await this._calculdateKernelSources(e);
        a.items=d,a.busy=!1
      }))
    });
    if(a.hide(), o.dispose(), l===this._quickInputService.backButton)return this.showQuickPick(e, void 0, !0);
    if(l){
      const u=l;
      if(z8f(u))try{
        const d=await this._executeCommand(i,u.command);
        if(d){
          const{
            all:m
          }
          =await this._getMatchingResult(i),p=m.find(g=>g.id===`ms-toolsai.jupyter/${d}`);
          return p&&await this._selecteKernel(i,p),!0
        }
        else return this.displaySelectAnotherQuickPick(e,!1)
      }
      catch{
        return!1
      }
      else{
        if(yki(u))return await this._selecteKernel(i,u.kernel),!0;
        if(Ldy(u))return await this._selectOneKernel(i,u.label,u.kernels),!0;
        if(QTa(u))try{
          return await u.action.runAction(),!0
        }
        catch{
          return!1
        }
        else{
          if(j8f(u))return await this._showKernelExtension(this._extensionWorkbenchService,this._extensionService,this._extensionManagementServerService,e.textModel.viewType,[]),!0;
          if(jTa(u))return await this._showKernelExtension(this._extensionWorkbenchService,this._extensionService,this._extensionManagementServerService,e.textModel.viewType,u.extensionIds,this._productService.quality!=="stable"),this.displaySelectAnotherQuickPick(e,!1)
        }
      }
    }
    return!1
  }
  async _calculdateKernelSources(e){
    const t=e.textModel, i=this._notebookKernelService.getSourceActions(t, e.scopedContextKeyService), r=await this._notebookKernelService.getKernelSourceActions2(t), s=this._getMatchingResult(t);
    if(i.length===0&&s.all.length===0&&r.length===0)return await this._getKernelRecommendationsQuickPickItems(t, this._extensionWorkbenchService)??[];
    const o=s.all.filter(u=>u.extension.value!==Wki), a=[];
    for(const u of yte(o, (d, m)=>d.extension.value===m.extension.value?0:1)){
      const d=this._extensionService.extensions.find(p=>p.identifier.value===u[0].extension.value),m=d?.displayName??d?.description??u[0].extension.value;
      u.length>1?a.push({
        label:m,kernels:u
      }):a.push({
        label:u[0].label,kernel:u[0]
      })
    }
    const l=r.filter(u=>u.command);
    a.push(...l.map(u=>{
      const d=u.documentation?[{
        iconClass:Qt.asClassName(Be.info),tooltip:_(9513,null)
      }
      ]:[];
      return{
        id:typeof u.command=="string"?u.command:u.command.id,label:u.label,description:u.description,command:u.command,documentation:u.documentation,buttons:d
      }
    }));
    for(const u of i){
      const d={
        action:u,picked:!1,label:u.action.label,tooltip:u.action.tooltip
      };
      a.push(d)
    }
    return a
  }
  async _selectOneKernel(e, t, i){
    const r=i.map(a=>g_u(a, void 0)), s=new Ut, o=s.add(this._quickInputService.createQuickPick({
      useSeparators:!0
    }));
    o.items=r, o.canSelectMany=!1, o.title=_(9514, null, t), s.add(o.onDidAccept(async()=>{
      o.selectedItems&&o.selectedItems.length>0&&yki(o.selectedItems[0])&&await this._selecteKernel(e,o.selectedItems[0].kernel),o.hide(),o.dispose()
    })), s.add(o.onDidHide(()=>{
      s.dispose()
    })), o.show()
  }
  async _executeCommand(e, t){
    const i=typeof t=="string"?t:t.id, r=typeof t=="string"?[]:t.arguments??[];
    return(typeof t=="string"||!t.arguments||!Array.isArray(t.arguments)||t.arguments.length===0)&&r.unshift({
      uri:e.uri,$mid:14
    }), typeof t=="string"?this._commandService.executeCommand(i):this._commandService.executeCommand(i, ...r)
  }
  static updateKernelStatusAction(e, t, i, r){
    if(i.getKernelDetectionTasks(e).length){
      const u=i.getMatchingKernel(e);
      if(t.enabled=!0,t.class=Qt.asClassName(Qt.modify(lNe,"spin")),u.selected){
        t.label=u.selected.label;
        const d=u.selected.description??u.selected.detail;
        t.tooltip=d?_(9515,null,d):_(9516,null)
      }
      else t.label=_(9517,null);
      return
    }
    const o=i.getRunningSourceActions(e), a=(u, d)=>{
      const m=u.action;
      t.class=d?Qt.asClassName(Qt.modify(lNe,"spin")):Qt.asClassName(zca),t.label=m.label,t.enabled=!0
    };
    if(o.length)return a(o[0], !0);
    const{
      selected:l
    }
    =r.getKernels(e);
    l?(t.label=l.label, t.class=Qt.asClassName(zca), t.tooltip=l.description??l.detail??""):(t.label=_(9518, null), t.class=Qt.asClassName(zca), t.tooltip="")
  }
  static async resolveKernel(e, t, i, r){
    const s=i.getKernels(e);
    if(s.selected)return s.selected;
    await r.executeCommand(uwe);
    const{
      selected:o
    }
    =i.getKernels(e);
    return o
  }
}, Dbn=__decorate([__param(0, NM), __param(1, za), __param(2, ha), __param(3, Ol), __param(4, Rr), __param(5, Em), __param(6, su), __param(7, dP), __param(8, fr), __param(9, v7e), __param(10, Ja)], Dbn)
}
});
function Mdy(n, e){
  let t;
  if(e!==void 0&&"notebookEditorId"in e){
    const i=e.notebookEditorId, r=n.visibleEditorPanes.find(s=>sA(s)?.getId()===i);
    t=sA(r)
  }
  else e!==void 0&&"notebookEditor"in e?t=e?.notebookEditor:t=sA(n.activeEditorPane);
  return t
}
var xrt, Y8f=