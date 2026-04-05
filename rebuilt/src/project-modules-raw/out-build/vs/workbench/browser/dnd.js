// Module: out-build/vs/workbench/browser/dnd.js
// Offset: 31349966 (bundle byte offset)
// Size: 6710 bytes

dz(), ri(), Vs(), ZSe(), yn(), rt(), UB(), hF(), zr(), _r(), Yr(), Yn(), sN(), ns(), Wt(), Pd(), Fc(), Ws(), ps(), vL(), Nu(), ss(), wm(), Ff(), Uye(), iu(), Roy(), RT=class{
  constructor(n){
    this.identifier=n
  }
}, VF=class{
  constructor(n){
    this.identifier=n
  }
}, $it=class{
  constructor(e, t, i, r, s, o, a, l){
    this.options=e, this.fileService=t, this.workspacesService=i, this.editorService=r, this.workspaceEditingService=s, this.hostService=o, this.contextService=a, this.instantiationService=l
  }
  async handleDrop(e, t, i, r, s){
    const o=await this.instantiationService.invokeFunction(u=>z5o(u, e));
    if(!o.length)return;
    if(await this.hostService.focus(t), this.options.allowWorkspaceOpen){
      const u=lh(o.filter(d=>d.allowWorkspaceOpen&&d.resource?.scheme===_n.file).map(d=>d.resource));
      if(u.length>0&&await this.handleWorkspaceDrop(u))return
    }
    const a=lh(o.filter(u=>u.isExternal&&u.resource?.scheme===_n.file).map(u=>u.resource));
    a.length&&this.workspacesService.addRecentlyOpened(a.map(u=>({
      fileUri:u
    })));
    const l=i?.();
    await this.editorService.openEditors(o.map(u=>({
      ...u,resource:u.resource,options:{
        ...u.options,...s,pinned:!0
      }
    })), l, {
      validateTrust:!0
    }), r?.(l)
  }
  async handleWorkspaceDrop(e){
    const t=[], i=[];
    return await Promise.all(e.map(async r=>{
      if(vOt(r)){
        t.push({
          workspaceUri:r
        });
        return
      }
      try{
        const s=await this.fileService.stat(r);
        s.isDirectory&&(t.push({
          folderUri:s.resource
        }),i.push({
          uri:s.resource
        }))
      }
      catch{
        
      }
    })), t.length===0?!1:(t.length>i.length||i.length===1?await this.hostService.openWindow(t):iRe(this.contextService.getWorkspace())?await this.workspaceEditingService.addFolders(i):await this.workspaceEditingService.createAndEnterWorkspace(i), !0)
  }
}, $it=__decorate([__param(1, Gr), __param(2, CM), __param(3, yi), __param(4, uX), __param(5, wd), __param(6, Lr), __param(7, ln)], $it), uLf=class{
  constructor(n, e){
    this.type=n, this.id=e
  }
  update(n){
    
  }
  getData(){
    return{
      type:this.type,id:this.id
    }
  }
}, Zme=class{
  constructor(n){
    this.compositeId=n
  }
  get id(){
    return this.compositeId
  }
}, ixe=class{
  constructor(n){
    this.viewId=n
  }
  get id(){
    return this.viewId
  }
}, QMe=class WSn extends at{
  static get INSTANCE(){
    return WSn.instance||(WSn.instance=new WSn, Cte(WSn.instance)), WSn.instance
  }
  constructor(){
    super(), this.transferData=GB.getInstance(), this.onDragStart=this._register(new Qe), this.onDragEnd=this._register(new Qe), this._register(this.onDragEnd.event(e=>{
      const t=e.dragAndDropData.getData().id,i=e.dragAndDropData.getData().type;
      this.readDragData(i)?.getData().id===t&&this.transferData.clearData(i==="view"?ixe.prototype:Zme.prototype)
    }))
  }
  readDragData(e){
    if(this.transferData.hasData(e==="view"?ixe.prototype:Zme.prototype)){
      const t=this.transferData.getData(e==="view"?ixe.prototype:Zme.prototype);
      if(t&&t[0])return new uLf(e,t[0].id)
    }
  }
  writeDragData(e, t){
    this.transferData.setData([t==="view"?new ixe(e):new Zme(e)], t==="view"?ixe.prototype:Zme.prototype)
  }
  registerTarget(e, t){
    const i=new Ut;
    return i.add(new PH(e, {
      onDragEnter:r=>{
        if(r.preventDefault(),t.onDragEnter){
          const s=this.readDragData("composite")||this.readDragData("view");
          s&&t.onDragEnter({
            eventData:r,dragAndDropData:s
          })
        }
      },onDragLeave:r=>{
        const s=this.readDragData("composite")||this.readDragData("view");
        t.onDragLeave&&s&&t.onDragLeave({
          eventData:r,dragAndDropData:s
        })
      },onDrop:r=>{
        if(t.onDrop){
          const s=this.readDragData("composite")||this.readDragData("view");
          if(!s)return;
          t.onDrop({
            eventData:r,dragAndDropData:s
          }),this.onDragEnd.fire({
            eventData:r,dragAndDropData:s
          })
        }
      },onDragOver:r=>{
        if(r.preventDefault(),t.onDragOver){
          const s=this.readDragData("composite")||this.readDragData("view");
          if(!s)return;
          t.onDragOver({
            eventData:r,dragAndDropData:s
          })
        }
      }
    })), t.onDragStart&&this.onDragStart.event(r=>{
      t.onDragStart(r)
    }, this, i), t.onDragEnd&&this.onDragEnd.event(r=>{
      t.onDragEnd(r)
    }, this, i), this._register(i)
  }
  registerDraggable(e, t, i){
    e.draggable=!0;
    const r=new Ut;
    return r.add(new PH(e, {
      onDragStart:s=>{
        const{
          id:o,type:a
        }
        =t();
        this.writeDragData(o,a),s.dataTransfer?.setDragImage(e,0,0),this.onDragStart.fire({
          eventData:s,dragAndDropData:this.readDragData(a)
        })
      },onDragEnd:s=>{
        const{
          type:o
        }
        =t(),a=this.readDragData(o);
        a&&this.onDragEnd.fire({
          eventData:s,dragAndDropData:a
        })
      },onDragEnter:s=>{
        if(i.onDragEnter){
          const o=this.readDragData("composite")||this.readDragData("view");
          if(!o)return;
          o&&i.onDragEnter({
            eventData:s,dragAndDropData:o
          })
        }
      },onDragLeave:s=>{
        const o=this.readDragData("composite")||this.readDragData("view");
        o&&i.onDragLeave?.({
          eventData:s,dragAndDropData:o
        })
      },onDrop:s=>{
        if(i.onDrop){
          const o=this.readDragData("composite")||this.readDragData("view");
          if(!o)return;
          i.onDrop({
            eventData:s,dragAndDropData:o
          }),this.onDragEnd.fire({
            eventData:s,dragAndDropData:o
          })
        }
      },onDragOver:s=>{
        if(i.onDragOver){
          const o=this.readDragData("composite")||this.readDragData("view");
          if(!o)return;
          i.onDragOver({
            eventData:s,dragAndDropData:o
          })
        }
      }
    })), i.onDragStart&&this.onDragStart.event(s=>{
      i.onDragStart(s)
    }, this, r), i.onDragEnd&&this.onDragEnd.event(s=>{
      i.onDragEnd(s)
    }, this, r), this._register(r)
  }
}, _fn=class{
  constructor(e, t){
    this.toResource=e, this.instantiationService=t
  }
  getDragURI(e){
    const t=this.toResource(e);
    return t?t.toString():null
  }
  getDragLabel(e){
    const t=lh(e.map(this.toResource));
    return t.length===1?ca(t[0]):t.length>1?String(t.length):void 0
  }
  onDragStart(e, t){
    const i=[], r=e.elements;
    for(const s of r){
      const o=this.toResource(s);
      o&&i.push(o)
    }
    this.onWillDragElements(r, t), i.length&&this.instantiationService.invokeFunction(s=>Yme(s, i, t))
  }
  onWillDragElements(e, t){
    
  }
  onDragOver(e, t, i, r, s){
    return!1
  }
  drop(e, t, i, r, s){
    
  }
  dispose(){
    
  }
}, _fn=__decorate([__param(1, ln)], _fn), dLf=class Gjb extends at{
  static{
    this.CHANNEL_NAME="monaco-workbench-global-dragged-over"
  }
  constructor(){
    super(), this.broadcaster=this._register(new aLf(Gjb.CHANNEL_NAME)), this.draggedOver=!1, this.registerListeners()
  }
  registerListeners(){
    this._register(In.runAndSubscribe(ez, ({
      window:e,disposables:t
    })=>{
      t.add(ei(e,ir.DRAG_OVER,()=>this.markDraggedOver(!1),!0)),t.add(ei(e,ir.DRAG_LEAVE,()=>this.clearDraggedOver(!1),!0))
    }, {
      window:bi,disposables:this._store
    })), this._register(this.broadcaster.onDidReceiveData(e=>{
      e===!0?this.markDraggedOver(!0):this.clearDraggedOver(!0)
    }))
  }
  get isDraggedOver(){
    return this.draggedOver
  }
  markDraggedOver(e){
    this.draggedOver!==!0&&(this.draggedOver=!0, e||this.broadcaster.postData(!0))
  }
  clearDraggedOver(e){
    this.draggedOver!==!1&&(this.draggedOver=!1, e||this.broadcaster.postData(!1))
  }
}, hLf=new dLf
}
});
function Gka(n){
  const e=n;
  return!!(e&&typeof e=="object"&&Array.isArray(e.editors)&&Array.isArray(e.mru))
}
function Poy(n){
  const e=n;
  return e.kind===5&&e.editorIndex!==void 0
}
function Loy(n){
  const e=n;
  return e.kind===7&&e.editorIndex!==void 0&&e.oldEditorIndex!==void 0
}
function Noy(n){
  const e=n;
  return e.kind===6&&e.editorIndex!==void 0&&e.context!==void 0&&e.sticky!==void 0
}
var q1t, Wka, N0i, Qka=