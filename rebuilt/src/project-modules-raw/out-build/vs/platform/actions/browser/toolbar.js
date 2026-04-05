// Module: out-build/vs/platform/actions/browser/toolbar.js
// Offset: 2315472 (bundle byte offset)
// Size: 5003 bytes

ri(), h0(), wRe(), nl(), Vs(), Ate(), _s(), yn(), Ef(), rt(), Ht(), hs(), si(), pl(), Wt(), ka(), Pa(), dr(), KDc(), L5o(), dg(), (function(n){
  n[n.NoHide=-1]="NoHide", n[n.Ignore=0]="Ignore", n[n.RenderInSecondaryGroup=1]="RenderInSecondaryGroup"
})(VCh||(VCh={
  
})), KI=class extends ave{
  constructor(e, t, i, r, s, o, a, l){
    super(e, s, {
      getKeyBinding:d=>o.lookupKeybinding(d.id)??void 0,...t,allowContextMenu:!0,skipTelemetry:typeof t?.telemetrySource=="string"
    }), this._options=t, this._menuService=i, this._contextKeyService=r, this._contextMenuService=s, this._keybindingService=o, this._commandService=a, this._sessionDisposables=this._store.add(new Ut);
    const u=t?.telemetrySource;
    u&&this._store.add(this.actionBar.onDidRun(d=>l.publicLog2("workbenchActionExecuted", {
      id:d.action.id,from:u
    })))
  }
  setActions(e, t=[], i){
    this._sessionDisposables.clear();
    const r=e.slice(), s=t.slice(), o=[];
    let a=0;
    const l=[];
    let u=!1;
    if(this._options?.hiddenItemStrategy!==-1)for(let m=0;
    m<r.length;
    m++){
      const p=r[m];
      !(p instanceof Ub)&&!(p instanceof h2)||p.hideActions&&(o.push(p.hideActions.toggle),p.hideActions.toggle.checked&&a++,p.hideActions.isHidden&&(u=!0,r[m]=void 0,this._options?.hiddenItemStrategy!==0&&(l[m]=p)))
    }
    if(this._options?.overflowBehavior!==void 0){
      const m=JeA(new Set(this._options.overflowBehavior.exempted),bl.map(r,f=>f?.id)),p=this._options.overflowBehavior.maxItems-m.size;
      let g=0;
      for(let f=0;
      f<r.length;
      f++){
        const A=r[f];
        A&&(g++,!m.has(A.id)&&g>=p&&(r[f]=void 0,l[f]=A))
      }
    }
    Ypt(r), Ypt(l);
    const d=id.join(l, s);
    if((o.length>0||r.length>0)&&this._options?.resetMenu===st.EditorTitle){
      const m=o.slice(),p=u;
      let g=i?i.slice():void 0;
      this._options?.resetMenu&&!g&&(g=[this._options.resetMenu]);
      const f=Sh({
        id:"configureIconVisibility",label:_(1789,null),run:()=>{
          const A=this.getElement(),C=A.querySelector('[data-command-id="toolbar.toggle.more"]')||A.querySelector(".monaco-action-bar .action-item:last-child")||A,x=[];
          m.length>0&&x.push(...m),x.length>0&&x.push(new id),x.push(Sh({
            id:"resetThisMenu",label:_(1790,null),run:()=>this._menuService.resetHiddenStates(g)
          })),x.length>0&&this._contextMenuService.showContextMenu({
            getAnchor:()=>C,getActions:()=>x,menuId:this._options?.contextMenu,menuActionOptions:{
              renderShortTitle:!0,...this._options?.menuOptions
            },skipTelemetry:typeof this._options?.telemetrySource=="string",contextKeyService:this._contextKeyService
          })
        }
      });
      d.length>0&&d.push(new id),d.push(f)
    }
    super.setActions(r, d), (o.length>0||r.length>0)&&this._sessionDisposables.add(ei(this.getElement(), "contextmenu", m=>{
      const p=new yy(As(this.getElement()),m),g=this.getItemAction(p.target);
      if(!g)return;
      p.preventDefault(),p.stopPropagation();
      const f=[];
      if(g instanceof Ub&&g.menuKeybinding)f.push(g.menuKeybinding);
      else if(!(g instanceof h2||g instanceof D5o)){
        const w=!!this._keybindingService.lookupKeybinding(g.id);
        f.push(zDc(this._commandService,this._keybindingService,g.id,void 0,w))
      }
      if(o.length>0){
        let w=!1;
        if(a===1&&this._options?.hiddenItemStrategy===0){
          w=!0;
          for(let C=0;
          C<o.length;
          C++)if(o[C].checked){
            o[C]=Sh({
              id:g.id,label:g.label,checked:!0,enabled:!1,run(){
                
              }
            });
            break
          }
        }
        if(!w&&(g instanceof Ub||g instanceof h2)){
          if(!g.hideActions)return;
          f.push(g.hideActions.hide)
        }
        else f.push(Sh({
          id:"label",label:_(1791,null),enabled:!1,run(){
            
          }
        }))
      }
      const A=id.join(f,o);
      this._options?.resetMenu&&!i&&(i=[this._options.resetMenu]),u&&i&&(A.push(new id),A.push(Sh({
        id:"resetThisMenu",label:_(1792,null),run:()=>this._menuService.resetHiddenStates(i)
      }))),A.length!==0&&this._contextMenuService.showContextMenu({
        getAnchor:()=>p,getActions:()=>A,menuId:this._options?.contextMenu,menuActionOptions:{
          renderShortTitle:!0,...this._options?.menuOptions
        },skipTelemetry:typeof this._options?.telemetrySource=="string",contextKeyService:this._contextKeyService
      })
    }))
  }
}, KI=__decorate([__param(2, xd), __param(3, wi), __param(4, kc), __param(5, mo), __param(6, fr), __param(7, ea)], KI), nL=class extends KI{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(e, {
      resetMenu:t,...i,actionViewItemProvider:(f,A)=>{
        let w=d.lookUp(t,f instanceof h2?f.item.submenu.id:f.id);
        w||(w=i?.actionViewItemProvider);
        const C=w?.(f,A);
        return C||GR(m,f,A)
      }
    }, r, s, o, a, l, u), this._onDidChangeMenuItems=this._store.add(new Qe), this.onDidChangeMenuItems=this._onDidChangeMenuItems.event;
    const p=this._store.add(r.createMenu(t, s, {
      emitEventsForSubmenuChanges:!0,eventDebounceDelay:i?.eventDebounceDelay
    })), g=()=>{
      const{
        primary:f,secondary:A
      }
      =tM(p.getActions(i?.menuOptions),i?.toolbarOptions?.primaryGroup,i?.toolbarOptions?.shouldInlineSubmenu,i?.toolbarOptions?.useSeparatorsInPrimaryActions);
      e.classList.toggle("has-no-actions",f.length===0&&A.length===0),super.setActions(f,A)
    };
    this._store.add(p.onDidChange(()=>{
      g(),this._onDidChangeMenuItems.fire(this)
    })), this._store.add(d.onDidChange(f=>{
      f===t&&g()
    })), g()
  }
  setActions(){
    throw new _m("This toolbar is populated from a menu.")
  }
}, nL=__decorate([__param(3, xd), __param(4, wi), __param(5, kc), __param(6, mo), __param(7, fr), __param(8, ea), __param(9, O3t), __param(10, ln)], nL)
}
}), Kc, Yoe, $3t, Id=