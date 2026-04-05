// Module: out-build/vs/editor/contrib/contextmenu/browser/contextmenu.js
// Offset: 25125780 (bundle byte offset)
// Size: 5482 bytes

ri(), Rx(), nl(), rt(), _r(), Cu(), Qh(), Ht(), dr(), si(), pl(), ka(), Ei(), ps(), j9=class{
  static{
    sQl=this
  }
  static{
    this.ID="editor.contrib.contextmenu"
  }
  static get(e){
    return e.getContribution(sQl.ID)
  }
  constructor(e, t, i, r, s, o, a, l){
    this._contextMenuService=t, this._contextViewService=i, this._contextKeyService=r, this._keybindingService=s, this._menuService=o, this._configurationService=a, this._workspaceContextService=l, this._toDispose=new Ut, this._contextMenuIsBeingShownCount=0, this._editor=e, this._toDispose.add(this._editor.onContextMenu(u=>this._onContextMenu(u))), this._toDispose.add(this._editor.onMouseWheel(u=>{
      if(this._contextMenuIsBeingShownCount>0){
        const d=this._contextViewService.getContextViewElement(),m=u.srcElement;
        m.shadowRoot&&Qze(d)===m.shadowRoot||this._contextViewService.hideContextView()
      }
    })), this._toDispose.add(this._editor.onKeyDown(u=>{
      this._editor.getOption(24)&&u.keyCode===58&&(u.preventDefault(),u.stopPropagation(),this.showContextMenu())
    }))
  }
  _onContextMenu(e){
    if(!this._editor.hasModel())return;
    if(!this._editor.getOption(24)){
      this._editor.focus(),e.target.position&&!this._editor.getSelection().containsPosition(e.target.position)&&this._editor.setPosition(e.target.position);
      return
    }
    if(e.target.type===12||e.target.type===6&&e.target.detail.injectedText)return;
    if(e.event.preventDefault(), e.event.stopPropagation(), e.target.type===11)return this._showScrollbarContextMenu(e.event);
    if(e.target.type!==6&&e.target.type!==7&&e.target.type!==1)return;
    if(this._editor.focus(), e.target.position){
      let i=!1;
      for(const r of this._editor.getSelections())if(r.containsPosition(e.target.position)){
        i=!0;
        break
      }
      i||this._editor.setPosition(e.target.position)
    }
    let t=null;
    e.target.type!==1&&(t=e.event), this.showContextMenu(t)
  }
  showContextMenu(e){
    if(!this._editor.getOption(24)||!this._editor.hasModel())return;
    const t=this._getMenuActions(this._editor.getModel(), this._editor.contextMenuId);
    t.length>0&&this._doShowContextMenu(t, e)
  }
  _getMenuActions(e, t){
    const i=[], r=this._menuService.getMenuActions(t, this._contextKeyService, {
      arg:e.uri
    });
    for(const s of r){
      const[,o]=s;
      let a=0;
      for(const l of o)if(l instanceof h2){
        const u=this._getMenuActions(e,l.item.submenu);
        u.length>0&&(i.push(new KP(l.id,l.label,u)),a++)
      }
      else i.push(l),a++;
      a&&i.push(new id)
    }
    return i.length&&i.pop(), i
  }
  _doShowContextMenu(e, t=null){
    if(!this._editor.hasModel())return;
    const i=this._editor.getOption(62);
    this._editor.updateOptions({
      hover:{
        enabled:!1
      }
    });
    let r=t;
    if(!r){
      this._editor.revealPosition(this._editor.getPosition(),1),this._editor.render();
      const o=this._editor.getScrolledVisiblePosition(this._editor.getPosition()),a=qS(this._editor.getDomNode()),l=a.left+o.left,u=a.top+o.top+o.height;
      r={
        x:l,y:u
      }
    }
    const s=this._editor.getOption(132)&&!ZL;
    this._contextMenuIsBeingShownCount++, this._contextMenuService.showContextMenu({
      domForShadowRoot:s?this._editor.getOverflowWidgetsDomNode()??this._editor.getDomNode():void 0,getAnchor:()=>r,getActions:()=>e,getActionViewItem:o=>{
        const a=this._keybindingFor(o);
        if(a)return new aI(o,o,{
          label:!0,keybinding:a.getLabel(),isMenu:!0
        });
        const l=o;
        return typeof l.getActionViewItem=="function"?l.getActionViewItem():new aI(o,o,{
          icon:!0,label:!0,isMenu:!0
        })
      },getKeyBinding:o=>this._keybindingFor(o),onHide:o=>{
        this._contextMenuIsBeingShownCount--,this._editor.updateOptions({
          hover:i
        })
      }
    })
  }
  _showScrollbarContextMenu(e){
    if(!this._editor.hasModel()||ZsA(this._workspaceContextService.getWorkspace()))return;
    const t=this._editor.getOption(74);
    let i=0;
    const r=u=>({
      id:`menu-action-${++i}`,label:u.label,tooltip:"",class:void 0,enabled:typeof u.enabled>"u"?!0:u.enabled,checked:u.checked,run:u.run
    }), s=(u, d)=>new KP(`menu-action-${++i}`, u, d, void 0), o=(u, d, m, p, g)=>{
      if(!d)return r({
        label:u,enabled:d,run:()=>{
          
        }
      });
      const f=w=>()=>{
        this._configurationService.updateValue(m,w)
      },A=[];
      for(const w of g)A.push(r({
        label:w.label,checked:p===w.value,run:f(w.value)
      }));
      return s(u,A)
    }, a=[];
    a.push(r({
      label:_(1039,null),checked:t.enabled,run:()=>{
        this._configurationService.updateValue("editor.minimap.enabled",!t.enabled)
      }
    })), a.push(new id), a.push(r({
      label:_(1040,null),enabled:t.enabled,checked:t.renderCharacters,run:()=>{
        this._configurationService.updateValue("editor.minimap.renderCharacters",!t.renderCharacters)
      }
    })), a.push(o(_(1041, null), t.enabled, "editor.minimap.size", t.size, [{
      label:_(1042,null),value:"proportional"
    }, {
      label:_(1043,null),value:"fill"
    }, {
      label:_(1044,null),value:"fit"
    }
    ])), a.push(o(_(1045, null), t.enabled, "editor.minimap.showSlider", t.showSlider, [{
      label:_(1046,null),value:"mouseover"
    }, {
      label:_(1047,null),value:"always"
    }
    ]));
    const l=this._editor.getOption(132)&&!ZL;
    this._contextMenuIsBeingShownCount++, this._contextMenuService.showContextMenu({
      domForShadowRoot:l?this._editor.getDomNode():void 0,getAnchor:()=>e,getActions:()=>a,onHide:u=>{
        this._contextMenuIsBeingShownCount--,this._editor.focus()
      }
    })
  }
  _keybindingFor(e){
    return this._keybindingService.lookupKeybinding(e.id)
  }
  dispose(){
    this._contextMenuIsBeingShownCount>0&&this._contextViewService.hideContextView(), this._toDispose.dispose()
  }
}, j9=sQl=__decorate([__param(1, kc), __param(2, sy), __param(3, wi), __param(4, mo), __param(5, xd), __param(6, Fn), __param(7, Lr)], j9), Ybg=class extends vu{
  constructor(){
    super({
      id:"editor.action.showContextMenu",label:dt(1048,"Show Editor Context Menu"),precondition:void 0,kbOpts:{
        kbExpr:Ci.textInputFocus,primary:1092,weight:100
      }
    })
  }
  run(n, e){
    j9.get(e)?.showContextMenu()
  }
}, Mg(j9.ID, j9, 2), ac(Ybg)
}
}), Zbg, hme, lgi=