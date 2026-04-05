// Module: out-build/vs/workbench/browser/parts/editor/editorQuickAccess.js
// Offset: 27648187 (bundle byte offset)
// Size: 3658 bytes

wFA(), Ht(), Kl(), bce(), od(), Nu(), ss(), hd(), Ku(), oR(), iX(), qi(), Jr(), Smn=class extends nX{
  constructor(e, t, i, r, s){
    super(e, {
      canAcceptInBackground:!0,noResultsPick:{
        label:_(3755,null),groupId:-1
      }
    }), this.editorGroupService=t, this.editorService=i, this.modelService=r, this.languageService=s, this.pickState=new class{
      constructor(){
        this.scorerCache=Object.create(null),this.isQuickNavigating=void 0
      }
      reset(o){
        o||(this.scorerCache=Object.create(null)),this.isQuickNavigating=o
      }
    }
  }
  provide(e, t){
    return this.pickState.reset(!!e.quickNavigate), super.provide(e, t)
  }
  _getPicks(e){
    const t=o8(e), i=this.doGetEditorPickItems().filter(s=>{
      if(!t.normalized)return!0;
      const o=Mq(s,t,!0,DW,this.pickState.scorerCache);
      return o.score?(s.highlights={
        label:o.labelMatch,description:o.descriptionMatch
      },!0):!1
    });
    if(t.normalized){
      const s=this.editorGroupService.getGroups(2).map(o=>o.id);
      i.sort((o,a)=>o.groupId!==a.groupId?s.indexOf(o.groupId)-s.indexOf(a.groupId):tba(o,a,t,!0,DW,this.pickState.scorerCache))
    }
    const r=[];
    if(this.editorGroupService.count>1){
      let s;
      for(const o of i){
        if(typeof s!="number"||s!==o.groupId){
          const a=this.editorGroupService.getGroup(o.groupId);
          a&&r.push({
            type:"separator",label:a.label
          }),s=o.groupId
        }
        r.push(o)
      }
    }
    else r.push(...i);
    return r
  }
  doGetEditorPickItems(){
    const e=this.doGetEditors(), t=new Map;
    for(const{
      groupId:i
    }
    of e)if(!t.has(i)){
      const r=this.editorGroupService.getGroup(i);
      r&&t.set(i,r.ariaLabel)
    }
    return this.doGetEditors().map(({
      editor:i,groupId:r
    })=>{
      const s=gp.getOriginalUri(i,{
        supportSideBySide:op.PRIMARY
      }),o=i.isDirty()&&!i.isSaving(),a=i.getDescription(),l=a?`${i.getName()} ${a}`:i.getName();
      return{
        groupId:r,resource:s,label:i.getName(),ariaLabel:t.size>1?_(o?3756:3757,null,l,t.get(r)):o?_(3758,null,l):l,description:a,iconClasses:yS(this.modelService,this.languageService,s,void 0,i.getIcon()).concat(i.getLabelExtraClasses()),italic:!this.editorGroupService.getGroup(r)?.isPinned(i),buttons:[{
          iconClass:o?"dirty-editor "+Qt.asClassName(Be.closeDirty):Qt.asClassName(Be.close),tooltip:_(3759,null),alwaysVisible:o
        }
        ],trigger:async()=>{
          const u=this.editorGroupService.getGroup(r);
          return u&&(await u.closeEditor(i,{
            preserveFocus:!0
          }),!u.contains(i))?HF.REMOVE_ITEM:HF.NO_ACTION
        },accept:(u,d)=>this.editorGroupService.getGroup(r)?.openEditor(i,{
          preserveFocus:d.inBackground
        })
      }
    })
  }
}, Smn=__decorate([__param(1, da), __param(2, yi), __param(3, Il), __param(4, Jl)], Smn), $$e=class extends Smn{
  static{
    Uru=this
  }
  static{
    this.PREFIX="edt active "
  }
  constructor(e, t, i, r){
    super(Uru.PREFIX, e, t, i, r)
  }
  doGetEditors(){
    const e=this.editorGroupService.activeGroup;
    return e.getEditors(0).map(t=>({
      editor:t,groupId:e.id
    }))
  }
}, $$e=Uru=__decorate([__param(0, da), __param(1, yi), __param(2, Il), __param(3, Jl)], $$e), kmn=class extends Smn{
  static{
    $ru=this
  }
  static{
    this.PREFIX="edt "
  }
  constructor(e, t, i, r){
    super($ru.PREFIX, e, t, i, r)
  }
  doGetEditors(){
    const e=[];
    for(const t of this.editorGroupService.getGroups(2))for(const i of t.getEditors(1))e.push({
      editor:i,groupId:t.id
    });
    return e
  }
}, kmn=$ru=__decorate([__param(0, da), __param(1, yi), __param(2, Il), __param(3, Jl)], kmn), q$e=class extends Smn{
  static{
    qru=this
  }
  static{
    this.PREFIX="edt mru "
  }
  constructor(e, t, i, r){
    super(qru.PREFIX, e, t, i, r)
  }
  doGetEditors(){
    const e=[];
    for(const t of this.editorService.getEditors(0))e.push(t);
    return e
  }
}, q$e=qru=__decorate([__param(0, da), __param(1, yi), __param(2, Il), __param(3, Jl)], q$e)
}
});
function HFA(n, e){
  return je.from({
    scheme:e.urlProtocol, authority:jvi, path:n.startsWith("/")?n:`/${n}`
  })
}
function Hru(n){
  return n.authority===jvi||new RegExp(`^${Jru}`).test(n.authority)
}
var Py, yye, jvi, Jru, Emn, eGg, Gru, JNe, Wru, oba, aba, tGg, GNe, Kw=