// Module: out-build/vs/platform/actions/common/menuService.js
// Offset: 2286440 (bundle byte offset)
// Size: 9201 bytes

nl(), Vs(), vr(), yn(), rt(), Ht(), hs(), si(), ka(), kr(), Ei(), ml(), dr(), B5o=class{
  constructor(e, t, i, r){
    this._commandService=e, this._keybindingService=t, this._hiddenStates=new R5o(i, r)
  }
  createMenu(e, t, i){
    return new P3n(e, this._hiddenStates, {
      emitEventsForSubmenuChanges:!1,eventDebounceDelay:50,...i
    }, this._commandService, this._keybindingService, t)
  }
  getMenuActions(e, t, i){
    const r=new P3n(e, this._hiddenStates, {
      emitEventsForSubmenuChanges:!1,eventDebounceDelay:50,...i
    }, this._commandService, this._keybindingService, t), s=r.getActions(i);
    return r.dispose(), s
  }
  getMenuContexts(e){
    const t=new VDc(e, !1);
    return new Set([...t.structureContextKeys, ...t.preconditionContextKeys, ...t.toggledContextKeys])
  }
  resetHiddenStates(e){
    this._hiddenStates.reset(e)
  }
  setShowAllEditorTitleIcons(e){
    this._hiddenStates.setShowAllEditorTitleIcons(e)
  }
}, B5o=__decorate([__param(0, fr), __param(1, mo), __param(2, Hi), __param(3, Fn)], B5o), R5o=class{
  static{
    _Re=this
  }
  static{
    this._key="menu.hiddenCommands"
  }
  static{
    this._visibleCommandsKey="menu.visibleCommands"
  }
  constructor(e, t){
    this._storageService=e, this._configurationService=t, this._disposables=new Ut, this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._ignoreChangeEvent=!1, this._hiddenByDefaultCache=new Map, this._showAllEditorTitleIcons=!1;
    try{
      const o=e.get(_Re._key,0,"{}");
      this._data=JSON.parse(o)
    }
    catch{
      this._data=Object.create(null)
    }
    this._disposables.add(e.onDidChangeValue(0, _Re._key, this._disposables)(()=>{
      if(!this._ignoreChangeEvent)try{
        const o=e.get(_Re._key,0,"{}");
        this._data=JSON.parse(o)
      }
      catch(o){
        console.log("FAILED to read storage after UPDATE",o)
      }
      this._onDidChange.fire()
    }));
    try{
      const o=e.get(_Re._visibleCommandsKey,0,"{}");
      this._visibleData=JSON.parse(o)
    }
    catch{
      this._visibleData=Object.create(null)
    }
    let i=this._visibleData;
    const r=JSON.stringify(i), s=["{}", this.defaultVisibleDataStringV0, this.defaultVisibleDataStringV1];
    (!i||s.includes(r))&&(i=this.defaultVisibleData), this._visibleData=i, this._disposables.add(e.onDidChangeValue(0, _Re._visibleCommandsKey, this._disposables)(()=>{
      if(!this._ignoreChangeEvent)try{
        const o=e.get(_Re._visibleCommandsKey,0,"{}");
        this._visibleData=JSON.parse(o)
      }
      catch(o){
        console.log("FAILED to read storage after UPDATE",o)
      }
      this._onDidChange.fire()
    }))
  }
  get defaultVisibleDataStringV0(){
    return JSON.stringify({
      [st.EditorTitle.id]:["workbench.action.splitEditor"]
    })
  }
  get defaultVisibleDataStringV1(){
    return JSON.stringify({
      [st.EditorTitle.id]:["workbench.action.splitEditor","workbench.action.unlockEditorGroup","workbench.action.compareEditor.nextChange","workbench.action.compareEditor.previousChange"]
    })
  }
  get defaultVisibleData(){
    return{
      [st.EditorTitle.id]:["workbench.action.splitEditor","workbench.action.unlockEditorGroup","workbench.action.compareEditor.nextChange","workbench.action.compareEditor.previousChange","EditorTitleRun","git.openChange","git.openFile","markdown.showPreviewToSide"]
    }
  }
  isEditorTitle(e){
    return e.id===st.EditorTitle.id
  }
  dispose(){
    this._onDidChange.dispose(), this._disposables.dispose()
  }
  _isHiddenByDefault(e, t){
    return this._hiddenByDefaultCache.get(`${e.id}/${t}`)??!1
  }
  setDefaultState(e, t, i){
    this._hiddenByDefaultCache.set(`${e.id}/${t}`, i)
  }
  setShowAllEditorTitleIcons(e){
    this._showAllEditorTitleIcons!==e&&(this._showAllEditorTitleIcons=e, this._onDidChange.fire())
  }
  isHidden(e, t){
    if(this.isEditorTitle(e))return this._showAllEditorTitleIcons||(this._configurationService.getValue(gSc)??[]).includes(t)?!1:!((this._visibleData[e.id]?.includes(t)??!1)||t.startsWith("composer."));
    const i=this._isHiddenByDefault(e, t), r=this._data[e.id]?.includes(t)??!1;
    return i?!r:r
  }
  updateHidden(e, t, i){
    if(this.isEditorTitle(e)){
      this.updateVisible(e,t,!i);
      return
    }
    this._isHiddenByDefault(e, t)&&(i=!i);
    const s=this._data[e.id];
    if(i)s?s.indexOf(t)<0&&s.push(t):this._data[e.id]=[t];
    else if(s){
      const o=s.indexOf(t);
      o>=0&&Snh(s,o),s.length===0&&delete this._data[e.id]
    }
    this._persist()
  }
  updateVisible(e, t, i){
    const r=this._visibleData[e.id];
    if(i)r?r.indexOf(t)<0&&r.push(t):this._visibleData[e.id]=[t];
    else if(r){
      const s=r.indexOf(t);
      s>=0&&Snh(r,s)
    }
    this._persist()
  }
  reset(e){
    if(e===void 0)this._data=Object.create(null), this._visibleData=this.defaultVisibleData, this._persist();
    else{
      for(const{
        id:t
      }
      of e)this._data[t]&&delete this._data[t],this._visibleData[t]&&delete this._visibleData[t],t===st.EditorTitle.id&&(this._visibleData[t]=this.defaultVisibleData[t]);
      this._persist()
    }
  }
  _persist(){
    try{
      this._ignoreChangeEvent=!0;
      const e=JSON.stringify(this._data);
      this._storageService.store(_Re._key,e,0,0);
      const t=JSON.stringify(this._visibleData);
      this._storageService.store(_Re._visibleCommandsKey,t,0,0)
    }
    finally{
      this._ignoreChangeEvent=!1
    }
  }
}, R5o=_Re=__decorate([__param(0, Hi), __param(1, Fn)], R5o), VDc=class oWa{
  constructor(e, t){
    this._id=e, this._collectContextKeysForSubmenus=t, this._menuGroups=[], this._allMenuIds=new Set, this._structureContextKeys=new Set, this._preconditionContextKeys=new Set, this._toggledContextKeys=new Set, this.refresh()
  }
  get allMenuIds(){
    return this._allMenuIds
  }
  get structureContextKeys(){
    return this._structureContextKeys
  }
  get preconditionContextKeys(){
    return this._preconditionContextKeys
  }
  get toggledContextKeys(){
    return this._toggledContextKeys
  }
  refresh(){
    this._menuGroups.length=0, this._allMenuIds.clear(), this._structureContextKeys.clear(), this._preconditionContextKeys.clear(), this._toggledContextKeys.clear();
    const e=this._sort(or.getMenuItems(this._id));
    let t;
    for(const i of e){
      const r=i.group||"";
      (!t||t[0]!==r)&&(t=[r,[]],this._menuGroups.push(t)),t[1].push(i),this._collectContextKeysAndSubmenuIds(i)
    }
    this._allMenuIds.add(this._id)
  }
  _sort(e){
    return e
  }
  _collectContextKeysAndSubmenuIds(e){
    if(oWa._fillInKbExprKeys(e.when, this._structureContextKeys), JBe(e)){
      if(e.command.precondition&&oWa._fillInKbExprKeys(e.command.precondition,this._preconditionContextKeys),e.command.toggled){
        const t=e.command.toggled.condition||e.command.toggled;
        oWa._fillInKbExprKeys(t,this._toggledContextKeys)
      }
    }
    else this._collectContextKeysForSubmenus&&(or.getMenuItems(e.submenu).forEach(this._collectContextKeysAndSubmenuIds, this), this._allMenuIds.add(e.submenu))
  }
  static _fillInKbExprKeys(e, t){
    if(e)for(const i of e.keys())t.add(i)
  }
}, P5o=R3n=class extends VDc{
  constructor(e, t, i, r, s, o){
    super(e, i), this._hiddenStates=t, this._commandService=r, this._keybindingService=s, this._contextKeyService=o, this.refresh()
  }
  createActionGroups(e){
    const t=[];
    for(const i of this._menuGroups){
      const[r,s]=i;
      let o;
      for(const a of s)if(this._contextKeyService.contextMatchesRules(a.when)){
        const l=JBe(a);
        l&&this._hiddenStates.setDefaultState(this._id,a.command.id,!!a.isHiddenByDefault);
        const u=ohA(this._id,l?a.command:a,this._hiddenStates);
        if(l){
          const d=zDc(this._commandService,this._keybindingService,a.command.id,a.when);
          (o??=[]).push(new Ub(a.command,a.alt,e,u,d,this._contextKeyService,this._commandService))
        }
        else{
          const d=new R3n(a.submenu,this._hiddenStates,this._collectContextKeysForSubmenus,this._commandService,this._keybindingService,this._contextKeyService).createActionGroups(e),m=id.join(...d.map(p=>p[1]));
          m.length>0&&(o??=[]).push(new h2(a,u,m))
        }
      }
      o&&o.length>0&&t.push([r,o])
    }
    return t
  }
  _sort(e){
    return e.sort(R3n._compareMenuItems)
  }
  static _compareMenuItems(e, t){
    const i=e.group, r=t.group;
    if(i!==r){
      if(i){
        if(!r)return-1
      }
      else return 1;
      if(i==="navigation")return-1;
      if(r==="navigation")return 1;
      const a=i.localeCompare(r);
      if(a!==0)return a
    }
    const s=e.order||0, o=t.order||0;
    return s<o?-1:s>o?1:R3n._compareTitles(JBe(e)?e.command.title:e.title, JBe(t)?t.command.title:t.title)
  }
  static _compareTitles(e, t){
    const i=typeof e=="string"?e:e.original, r=typeof t=="string"?t:t.original;
    return i.localeCompare(r)
  }
}, P5o=R3n=__decorate([__param(3, fr), __param(4, mo), __param(5, wi)], P5o), P3n=class{
  constructor(e, t, i, r, s, o){
    this._disposables=new Ut, this._menuInfo=new P5o(e, t, i.emitEventsForSubmenuChanges, r, s, o);
    const a=new Hu(()=>{
      this._menuInfo.refresh(),this._onDidChange.fire({
        menu:this,isStructuralChange:!0,isEnablementChange:!0,isToggleChange:!0
      })
    }, i.eventDebounceDelay);
    this._disposables.add(a), this._disposables.add(or.onDidChangeMenu(m=>{
      for(const p of this._menuInfo.allMenuIds)if(m.has(p)){
        a.schedule();
        break
      }
    }));
    const l=this._disposables.add(new Ut), u=m=>{
      let p=!1,g=!1,f=!1;
      for(const A of m)if(p=p||A.isStructuralChange,g=g||A.isEnablementChange,f=f||A.isToggleChange,p&&g&&f)break;
      return{
        menu:this,isStructuralChange:p,isEnablementChange:g,isToggleChange:f
      }
    }, d=()=>{
      l.add(o.onDidChangeContext(m=>{
        const p=m.affectsSome(this._menuInfo.structureContextKeys),g=m.affectsSome(this._menuInfo.preconditionContextKeys),f=m.affectsSome(this._menuInfo.toggledContextKeys);
        (p||g||f)&&this._onDidChange.fire({
          menu:this,isStructuralChange:p,isEnablementChange:g,isToggleChange:f
        })
      })),l.add(t.onDidChange(m=>{
        this._onDidChange.fire({
          menu:this,isStructuralChange:!0,isEnablementChange:!1,isToggleChange:!1
        })
      }))
    };
    this._onDidChange=new $Mo({
      onWillAddFirstListener:d,onDidRemoveLastListener:l.clear.bind(l),delay:i.eventDebounceDelay,merge:u
    }), this.onDidChange=this._onDidChange.event
  }
  getActions(e){
    return this._menuInfo.createActionGroups(e)
  }
  dispose(){
    this._disposables.dispose(), this._onDidChange.dispose()
  }
}, P3n=__decorate([__param(3, fr), __param(4, mo), __param(5, wi)], P3n)
}
}), O3t, $Ch, L5o=