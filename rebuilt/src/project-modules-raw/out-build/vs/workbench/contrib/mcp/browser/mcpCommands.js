// Module: out-build/vs/workbench/contrib/mcp/browser/mcpCommands.js
// Offset: 31035560 (bundle byte offset)
// Size: 7427 bytes

ri(), Lv(), qi(), Ate(), yn(), rt(), Uc(), Jr(), Yn(), Ht(), L5o(), dg(), dr(), hs(), si(), Wt(), Kl(), Pm(), ps(), Mm(), ss(), _E(), SS(), gD(), jry(), _it(), Rqe(), sIf(), Yry(), jme={
  original:"MCP", value:"MCP"
}, Igu=class jQb extends rn{
  static{
    this.id="workbench.mcp.listServer"
  }
  constructor(){
    super({
      id:jQb.id,title:dt(8674,"List Servers"),icon:Be.server,category:jme,f1:!0,menu:{
        when:Ee.and(Ee.or(FMe.hasUnknownTools,FMe.hasServersWithErrors),qa.chatMode.isEqualTo(iA.Agent)),id:st.ChatInputAttachmentToolbar,group:"navigation",order:0
      }
    })
  }
  async run(e){
    const t=e.get(Vye), i=e.get(fr), r=e.get(ha), s=new Ut, o=r.createQuickPick({
      useSeparators:!0
    });
    o.placeholder=_(8662, null), s.add(o), s.add(Oc(l=>{
      const u=vze(t.servers.read(l).slice().sort((m,p)=>(m.collection.presentation?.order||0)-(p.collection.presentation?.order||0)),m=>m.collection.id),d=o.items.length===0;
      o.items=[{
        id:"$add",label:_(8663,null),description:_(8664,null),alwaysShow:!0,iconClass:Qt.asClassName(Be.add)
      },...Object.values(u).filter(m=>m.length).flatMap(m=>[{
        type:"separator",label:m[0].collection.label,id:m[0].collection.id
      },...m.map(p=>({
        id:p.definition.id,label:p.definition.label,description:Gme.toString(p.connectionState.read(l))
      }))])],d&&o.items.length>3&&(o.activeItems=o.items.slice(2,3))
    }));
    const a=await new Promise(l=>{
      s.add(o.onDidAccept(()=>{
        l(o.activeItems[0])
      })),s.add(o.onDidHide(()=>{
        l(void 0)
      })),o.show()
    });
    s.dispose(), a&&(a.id==="$add"?i.executeCommand(Bgu.ID):i.executeCommand(rSa.id, a.id))
  }
}, rSa=class zQb extends rn{
  static{
    this.id="workbench.mcp.serverOptions"
  }
  constructor(){
    super({
      id:zQb.id,title:dt(8675,"Server Options"),category:jme,f1:!1
    })
  }
  async run(e, t){
    const i=e.get(Vye), r=e.get(ha), s=e.get(Wme), o=e.get(yi), a=i.servers.get().find(f=>f.definition.id===t);
    if(!a)return;
    const l=s.collections.get().find(f=>f.id===a.collection.id), u=l?.serverDefinitions.get().find(f=>f.id===a.definition.id), d=[], m=a.connectionState.get();
    Gme.canBeStarted(m.state)?d.push({
      label:_(8665,null),action:"start"
    }):(d.push({
      label:_(8666,null),action:"stop"
    }), d.push({
      label:_(8667,null),action:"restart"
    })), d.push({
      label:_(8668,null),action:"showOutput"
    });
    const p=u?.presentation?.origin||l?.presentation?.origin;
    p&&d.push({
      label:_(8669,null),action:"config"
    });
    const g=await r.pick(d, {
      title:a.definition.label,placeHolder:_(8670,null)
    });
    if(g)switch(g.action){
      case"start":await a.start(!0),a.showOutput();
      break;
      case"stop":await a.stop();
      break;
      case"restart":await a.stop(),await a.start(!0);
      break;
      case"showOutput":a.showOutput();
      break;
      case"config":o.openEditor({
        resource:je.isUri(p)?p:p.uri,options:{
          selection:je.isUri(p)?void 0:p.range
        }
      });
      break;
      default:QN(g.action)
    }
  }
}, Dgu=class extends at{
  static{
    this.ID="workbench.contrib.mcp.discovery"
  }
  constructor(e, t, i, r){
    super();
    let s;
    (function(a){
      a[a.None=0]="None",a[a.NewTools=1]="NewTools",a[a.Error=2]="Error",a[a.Refreshing=3]="Refreshing"
    })(s||(s={
      
    }));
    const o=Ro(a=>{
      const l=t.servers.read(a),u=[];
      for(const p of l){
        let g=0;
        switch(p.toolsState.read(a)){
          case 0:p.trusted.read(a)===!1?g=0:g=p.connectionState.read(a).state===3?2:1;
          break;
          case 2:g=3;
          break;
          default:g=p.connectionState.read(a).state===3?2:0;
          break
        }
        u[g]??=[],u[g].push(p)
      }
      const d=t.lazyCollectionState.read(a);
      d===1?u[3]??=[]:d===0&&(u[1]??=[]);
      const m=u.length-1;
      return{
        state:m,servers:u[m]||[]
      }
    });
    this._store.add(e.register(st.ChatInputAttachmentToolbar, Igu.id, (a, l)=>{
      if(a instanceof Ub)return i.createInstance(class extends f2{
        render(u){
          super.render(u),u.classList.add("chat-mcp");
          const d=kl("button.chat-mcp-action",[kl("span@icon")]);
          this._register(Oc(m=>{
            const{
              state:p
            }
            =o.read(m),{
              root:g,icon:f
            }
            =d;
            this.updateTooltip(),u.classList.toggle("chat-mcp-has-action",p!==0),g.parentElement||u.appendChild(g),g.ariaLabel=this.getLabelForState(o.read(m)),g.className="chat-mcp-action",f.className="",p===1?(g.classList.add("chat-mcp-action-new"),f.classList.add(...Qt.asClassNameArray(Be.refresh))):p===2?(g.classList.add("chat-mcp-action-error"),f.classList.add(...Qt.asClassNameArray(Be.warning))):p===3?(g.classList.add("chat-mcp-action-refreshing"),f.classList.add(...Qt.asClassNameArray(ARe))):g.remove()
          }))
        }
        async onClick(u){
          u.preventDefault(),u.stopPropagation();
          const{
            state:d,servers:m
          }
          =o.get();
          if(d===1)m.forEach(p=>p.start()),t.activateCollections();
          else if(d===3)m.at(-1)?.showOutput();
          else if(d===2){
            const p=m.at(-1);
            p&&r.executeCommand(rSa.id,p.definition.id)
          }
          else r.executeCommand(Igu.id)
        }
        getTooltip(){
          return this.getLabelForState()||super.getTooltip()
        }
        getLabelForState({
          state:u,servers:d
        }
        =o.get()){
          return u===1?_(8671,null,d.length||1):u===2?_(8672,null,d.length||1):u===3?_(8673,null):null
        }
      },a,{
        ...l,keybindingNotRenderedWithLabel:!0
      })
    }, In.fromObservable(o)))
  }
}, Dgu=__decorate([__param(0, O3t), __param(1, Vye), __param(2, ln), __param(3, fr)], Dgu), Zry=class VQb extends rn{
  static{
    this.ID="workbench.mcp.resetTrust"
  }
  constructor(){
    super({
      id:VQb.ID,title:dt(8676,"Reset Trust"),category:jme,f1:!0,precondition:FMe.toolsCount.greater(0)
    })
  }
  run(e){
    e.get(Wme).resetTrust()
  }
}, Xry=class KQb extends rn{
  static{
    this.ID="workbench.mcp.resetCachedTools"
  }
  constructor(){
    super({
      id:KQb.ID,title:dt(8677,"Reset Cached Tools"),category:jme,f1:!0,precondition:FMe.toolsCount.greater(0)
    })
  }
  run(e){
    e.get(Vye).resetCaches()
  }
}, Bgu=class YQb extends rn{
  static{
    this.ID="workbench.mcp.addConfiguration"
  }
  constructor(){
    super({
      id:YQb.ID,title:dt(8678,"Add Server..."),metadata:{
        description:dt(8679,"Installs a new Model Context protocol to the mcp.json settings")
      },category:jme,f1:!0,menu:{
        id:st.EditorContent,when:Ee.and(Ee.regex(Ep.Path.key,/\.vscode[/\\]mcp\.json$/),ow.isEqualTo(_1t))
      }
    })
  }
  async run(e, t){
    return e.get(ln).createInstance($gn, t).run()
  }
}, esy=class ZQb extends rn{
  static{
    this.ID="workbench.mcp.removeStoredInput"
  }
  constructor(){
    super({
      id:ZQb.ID,title:dt(8680,"Reset Cached Tools"),category:jme,f1:!1
    })
  }
  run(e, t, i){
    e.get(Wme).clearSavedInputs(t, i)
  }
}, tsy=class XQb extends rn{
  static{
    this.ID="workbench.mcp.editStoredInput"
  }
  constructor(){
    super({
      id:XQb.ID,title:dt(8681,"Edit Stored Input"),category:jme,f1:!1
    })
  }
  run(e, t, i, r, s){
    const o=i&&e.get(Lr).getWorkspaceFolder(i);
    e.get(Wme).editSavedInput(t, o||void 0, r, s)
  }
}, nsy=class ejb extends rn{
  static{
    this.ID="workbench.mcp.showOutput"
  }
  constructor(){
    super({
      id:ejb.ID,title:dt(8682,"Show Output"),category:jme,f1:!1
    })
  }
  run(e, t){
    e.get(Vye).servers.get().find(i=>i.definition.id===t)?.showOutput()
  }
}, isy=class tjb extends rn{
  static{
    this.ID="workbench.mcp.restartServer"
  }
  constructor(){
    super({
      id:tjb.ID,title:dt(8683,"Restart Server"),category:jme,f1:!1
    })
  }
  async run(e, t){
    const i=e.get(Vye).servers.get().find(r=>r.definition.id===t);
    i?.showOutput(), await i?.stop(), await i?.start()
  }
}, rsy=class njb extends rn{
  static{
    this.ID="workbench.mcp.startServer"
  }
  constructor(){
    super({
      id:njb.ID,title:dt(8684,"Start Server"),category:jme,f1:!1
    })
  }
  async run(e, t){
    await e.get(Vye).servers.get().find(r=>r.definition.id===t)?.start()
  }
}, ssy=class ijb extends rn{
  static{
    this.ID="workbench.mcp.stopServer"
  }
  constructor(){
    super({
      id:ijb.ID,title:dt(8685,"Stop Server"),category:jme,f1:!1
    })
  }
  async run(e, t){
    await e.get(Vye).servers.get().find(r=>r.definition.id===t)?.stop()
  }
}, osy=class rjb extends rn{
  static{
    this.ID="workbench.mcp.installFromActivation"
  }
  constructor(){
    super({
      id:rjb.ID,title:dt(8686,"Install..."),category:jme,f1:!1,menu:{
        id:st.EditorContent,when:Ee.equals("resourceScheme",iSa.scheme)
      }
    })
  }
  async run(e, t){
    e.get(ln).createInstance($gn, void 0).pickForUrlHandler(t)
  }
}
}
}), Rgu, aIf, cIf=