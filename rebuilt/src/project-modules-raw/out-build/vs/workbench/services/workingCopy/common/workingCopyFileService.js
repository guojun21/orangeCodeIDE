// Module: out-build/vs/workbench/services/workingCopy/common/workingCopyFileService.js
// Offset: 31216382 (bundle byte offset)
// Size: 6112 bytes

Wt(), Er(), yn(), vr(), Vs(), rt(), ns(), Po(), lP(), _d(), loy(), uoy(), t7=xi("workingCopyFileService"), vka=class extends at{
  constructor(e, t, i, r){
    super(), this.fileService=e, this.workingCopyService=t, this.uriIdentityService=r, this._onWillRunWorkingCopyFileOperation=this._register(new j2n), this.onWillRunWorkingCopyFileOperation=this._onWillRunWorkingCopyFileOperation.event, this._onDidFailWorkingCopyFileOperation=this._register(new j2n), this.onDidFailWorkingCopyFileOperation=this._onDidFailWorkingCopyFileOperation.event, this._onDidRunWorkingCopyFileOperation=this._register(new j2n), this.onDidRunWorkingCopyFileOperation=this._onDidRunWorkingCopyFileOperation.event, this.correlationIds=0, this.workingCopyProviders=[], this.fileOperationParticipants=this._register(i.createInstance(fka)), this.saveParticipants=this._register(i.createInstance(bka)), this._register(this.registerWorkingCopyProvider(s=>this.workingCopyService.workingCopies.filter(o=>this.fileService.hasProvider(s)?this.uriIdentityService.extUri.isEqualOrParent(o.resource, s):this.uriIdentityService.extUri.isEqual(o.resource, s))))
  }
  create(e, t, i){
    return this.doCreateFileOrFolder(e, !0, t, i)
  }
  createFolder(e, t, i){
    return this.doCreateFileOrFolder(e, !1, t, i)
  }
  async doCreateFileOrFolder(e, t, i, r){
    if(e.length===0)return[];
    if(t){
      const u=(await ib.settled(e.map(d=>this.fileService.canCreateFile(d.resource,{
        overwrite:d.overwrite
      })))).find(d=>d instanceof Error);
      if(u instanceof Error)throw u
    }
    const s=e.map(l=>({
      target:l.resource
    }));
    await this.runFileOperationParticipants(s, 0, r, i);
    const o={
      correlationId:this.correlationIds++,operation:0,files:s
    };
    await this._onWillRunWorkingCopyFileOperation.fireAsync(o, Cs.None);
    let a;
    try{
      t?a=await ib.settled(e.map(l=>this.fileService.createFile(l.resource,l.contents,{
        overwrite:l.overwrite
      }))):a=await ib.settled(e.map(l=>this.fileService.createFolder(l.resource)))
    }
    catch(l){
      throw await this._onDidFailWorkingCopyFileOperation.fireAsync(o,Cs.None),l
    }
    return await this._onDidRunWorkingCopyFileOperation.fireAsync(o, Cs.None), a
  }
  async move(e, t, i){
    return this.doMoveOrCopy(e, !0, t, i)
  }
  async copy(e, t, i){
    return this.doMoveOrCopy(e, !1, t, i)
  }
  async doMoveOrCopy(e, t, i, r){
    const s=[];
    for(const{
      file:{
        source:l,target:u
      },overwrite:d
    }
    of e){
      const m=await(t?this.fileService.canMove(l,u,d):this.fileService.canCopy(l,u,d));
      if(m instanceof Error)throw m
    }
    const o=e.map(l=>l.file);
    await this.runFileOperationParticipants(o, t?2:3, r, i);
    const a={
      correlationId:this.correlationIds++,operation:t?2:3,files:o
    };
    await this._onWillRunWorkingCopyFileOperation.fireAsync(a, Cs.None);
    try{
      for(const{
        file:{
          source:l,target:u
        },overwrite:d
      }
      of e){
        if(!this.uriIdentityService.extUri.isEqual(l,u)){
          const m=t?[...this.getDirty(l),...this.getDirty(u)]:this.getDirty(u);
          await ib.settled(m.map(p=>p.revert({
            soft:!0
          })))
        }
        t?s.push(await this.fileService.move(l,u,d)):s.push(await this.fileService.copy(l,u,d))
      }
    }
    catch(l){
      throw await this._onDidFailWorkingCopyFileOperation.fireAsync(a,Cs.None),l
    }
    return await this._onDidRunWorkingCopyFileOperation.fireAsync(a, Cs.None), s
  }
  async delete(e, t, i){
    for(const o of e){
      const a=await this.fileService.canDelete(o.resource,{
        recursive:o.recursive,useTrash:o.useTrash
      });
      if(a instanceof Error)throw a
    }
    const r=e.map(o=>({
      target:o.resource
    }));
    await this.runFileOperationParticipants(r, 1, i, t);
    const s={
      correlationId:this.correlationIds++,operation:1,files:r
    };
    await this._onWillRunWorkingCopyFileOperation.fireAsync(s, Cs.None);
    for(const o of e){
      const a=this.getDirty(o.resource);
      await ib.settled(a.map(l=>l.revert({
        soft:!0
      })))
    }
    try{
      for(const o of e)await this.fileService.del(o.resource,{
        recursive:o.recursive,useTrash:o.useTrash
      })
    }
    catch(o){
      throw await this._onDidFailWorkingCopyFileOperation.fireAsync(s,Cs.None),o
    }
    await this._onDidRunWorkingCopyFileOperation.fireAsync(s, Cs.None)
  }
  addFileOperationParticipant(e){
    return this.fileOperationParticipants.addFileOperationParticipant(e)
  }
  runFileOperationParticipants(e, t, i, r){
    return this.fileOperationParticipants.participate(e, t, i, r)
  }
  get hasSaveParticipants(){
    return this.saveParticipants.length>0
  }
  addSaveParticipant(e){
    return this.saveParticipants.addSaveParticipant(e)
  }
  runSaveParticipants(e, t, i, r){
    return this.saveParticipants.participate(e, t, i, r)
  }
  registerWorkingCopyProvider(e){
    const t=kbe(this.workingCopyProviders, e);
    return $i(t)
  }
  getDirty(e){
    const t=new Set;
    for(const i of this.workingCopyProviders)for(const r of i(e))r.isDirty()&&t.add(r);
    return Array.from(t)
  }
}, vka=__decorate([__param(0, Gr), __param(1, cB), __param(2, ln), __param(3, xl)], vka), Vi(t7, vka, 1)
}
});
function doy(n){
  const e=n.lastFocusedList, t=e?.getHTMLElement();
  if(t&&zP(t)){
    let i;
    if(e instanceof JR){
      const r=e.getFocusedElements();
      r.length&&(i=r[0])
    }
    else if(e instanceof kq){
      const r=e.getFocus();
      r.length&&(i=r[0])
    }
    return i
  }
}
function mfn(n, e, t){
  if(je.isUri(n))return n;
  const i=doy(t);
  return i instanceof v8?i.resource:i instanceof N2?i.getResource():gp.getOriginalUri(e.activeEditor, {
    supportSideBySide:op.PRIMARY
  })
}
function Wqe(n, e, t, i, r){
  const s=e.lastFocusedList, o=s?.getHTMLElement();
  if(o&&zP(o)){
    if(s instanceof kq&&s.getFocus().every(d=>d instanceof v8)){
      const d=r.getContext(!0,!0);
      if(d.length)return d.map(m=>m.resource)
    }
    if(s instanceof JR){
      const d=lh(s.getSelectedElements().filter(A=>A instanceof N2).map(A=>A.getResource())),m=s.getFocusedElements(),p=m.length?m[0]:void 0;
      let g;
      if(je.isUri(n))g=n.toString();
      else if(p instanceof N2){
        const A=p.getResource();
        g=A?A.toString():void 0
      }
      const f=d.findIndex(A=>A.toString()===g);
      if(f!==-1){
        const A=d[f];
        return d.splice(f,1),d.unshift(A),d
      }
    }
  }
  const l=i.activeGroup.selectedEditors;
  if(l.length>1&&je.isUri(n)){
    const d=l.findIndex(m=>m.matches({
      resource:n
    }));
    if(d!==-1){
      const m=l[d];
      return l.splice(d,1),l.unshift(m),l.map(p=>gp.getOriginalUri(p)).filter(p=>!!p)
    }
  }
  const u=mfn(n, t, e);
  return u?[u]:[]
}
function qDf(n){
  const e=n.get(Nh).lastFocusedList, t=e?.getHTMLElement();
  if(t&&zP(t)&&e instanceof JR){
    const i=lh(e.getSelectedElements().filter(a=>a instanceof N2)), r=e.getFocusedElements(), s=r.length?r[0]:void 0;
    let o;
    return s instanceof N2&&(o=s), i.some(a=>a===o)?i:o?[o]:void 0
  }
}
var DC, $ie=