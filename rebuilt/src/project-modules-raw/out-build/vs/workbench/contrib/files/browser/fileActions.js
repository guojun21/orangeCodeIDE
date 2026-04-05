// Module: out-build/vs/workbench/contrib/files/browser/fileActions.js
// Offset: 31241210 (bundle byte offset)
// Size: 13629 bytes

Ht(), _r(), Hl(), Yr(), Yn(), mk(), nl(), rt(), gD(), ns(), Nu(), Kl(), Wt(), wm(), UMe(), td(), Ei(), Kf(), Ku(), hd(), hs(), si(), zr(), ru(), So(), ss(), l5(), Vs(), hfn(), _s(), ri(), N1(), lP(), vr(), Uie(), qi(), Jr(), Bp(), oa(), _d(), YI(), $ie(), HDf(), ET(), Wf(), _g(), dr(), Mm(), G_(), ip(), Ql(), sN(), pfn="explorer.newFile", jfu=dt(7894, "New File..."), C0i="explorer.newFolder", zfu=dt(7895, "New Folder..."), QDf=_(7814, null), jDf=_(7815, null), zDf=_(7816, null), VDf=_(7817, null), Vfu=new Sn("fileCopied", !1), Kfu="explorer.download", KDf=_(7818, null), Yfu="explorer.upload", YDf=_(7819, null), Zfu="explorer.confirmDelete", ZDf=5e6, XDf=class Fcd extends rn{
  static{
    this.ID="workbench.files.action.compareFileWith"
  }
  static{
    this.LABEL=dt(7896, "Compare Active File With...")
  }
  constructor(){
    super({
      id:Fcd.ID,title:Fcd.LABEL,f1:!0,category:Br.File,precondition:ow,metadata:{
        description:dt(7897,"Opens a picker to select a file to diff with the active editor.")
      }
    })
  }
  async run(e){
    const t=e.get(yi), i=e.get(El), r=e.get(ha), s=t.activeEditor, o=gp.getOriginalUri(s);
    if(o&&i.canHandleResource(o)){
      const a=await r.quickAccess.pick("",{
        itemActivation:IW.SECOND
      });
      if(a?.length===1){
        const l=a[0].resource;
        je.isUri(l)&&i.canHandleResource(l)&&t.openEditor({
          original:{
            resource:o
          },modified:{
            resource:l
          },options:{
            pinned:!0
          }
        })
      }
    }
  }
}, Xfu=class bjb extends rn{
  static{
    this.ID="workbench.action.toggleAutoSave"
  }
  constructor(){
    super({
      id:bjb.ID,title:dt(7898,"Toggle Auto Save"),f1:!0,category:Br.File,metadata:{
        description:dt(7899,"Toggle the ability to save files automatically after typing")
      }
    })
  }
  run(e){
    return e.get(IC).toggleAutoSave()
  }
}, kka=class extends Hs{
  constructor(e, t, i, r, s){
    super(e, t), this.commandService=i, this.notificationService=r, this.workingCopyService=s, this.lastDirtyState=this.workingCopyService.hasDirty, this.enabled=this.lastDirtyState, this.registerListeners()
  }
  registerListeners(){
    this._register(this.workingCopyService.onDidChangeDirty(e=>this.updateEnablement(e)))
  }
  updateEnablement(e){
    const t=e.isDirty()||this.workingCopyService.hasDirty;
    this.lastDirtyState!==t&&(this.enabled=t, this.lastDirtyState=this.enabled)
  }
  async run(e){
    try{
      await this.doRun(e)
    }
    catch(t){
      JDf(this.notificationService,t)
    }
  }
}, kka=__decorate([__param(2, fr), __param(3, ms), __param(4, cB)], kka), Eka=class extends kka{
  static{
    this.ID="workbench.files.action.saveAllInGroup"
  }
  static{
    this.LABEL=_(7861, null)
  }
  get class(){
    return"explorer-action "+Qt.asClassName(Be.saveAll)
  }
  doRun(n){
    return this.commandService.executeCommand(u0i, {
      
    }, n)
  }
}, gfn=class extends Hs{
  static{
    this.ID="workbench.files.action.closeGroup"
  }
  static{
    this.LABEL=_(7862, null)
  }
  constructor(e, t, i){
    super(e, t, Qt.asClassName(Be.closeAll)), this.commandService=i
  }
  run(e){
    return this.commandService.executeCommand(oka, {
      
    }, e)
  }
}, gfn=__decorate([__param(2, fr)], gfn), eBf=class Ocd extends rn{
  static{
    this.ID="workbench.files.action.focusFilesExplorer"
  }
  static{
    this.LABEL=dt(7900, "Focus on Files Explorer")
  }
  constructor(){
    super({
      id:Ocd.ID,title:Ocd.LABEL,f1:!0,category:Br.File,metadata:{
        description:dt(7901,"Moves focus to the file explorer view container.")
      }
    })
  }
  async run(e){
    await e.get(b0).openPaneComposite(BQ, 0, !0)
  }
}, tBf=class Ucd extends rn{
  static{
    this.ID="workbench.files.action.showActiveFileInExplorer"
  }
  static{
    this.LABEL=dt(7902, "Reveal Active File in Explorer View")
  }
  constructor(){
    super({
      id:Ucd.ID,title:Ucd.LABEL,f1:!0,category:Br.File,metadata:{
        description:dt(7903,"Reveals and selects the active file within the explorer view.")
      }
    })
  }
  async run(e){
    const t=e.get(fr), i=e.get(yi), r=gp.getOriginalUri(i.activeEditor, {
      supportSideBySide:op.PRIMARY
    });
    r&&t.executeCommand(Vgn, r)
  }
}, nBf=class $cd extends rn{
  static{
    this.ID="workbench.action.files.showOpenedFileInNewWindow"
  }
  static{
    this.LABEL=dt(7904, "Open Active File in New Empty Workspace")
  }
  constructor(){
    super({
      id:$cd.ID,title:$cd.LABEL,f1:!0,category:Br.File,precondition:npn,metadata:{
        description:dt(7905,"Opens the active file in a new window with no folders open.")
      }
    })
  }
  async run(e){
    const t=e.get(yi), i=e.get(wd), r=e.get(Ml), s=e.get(Gr), o=gp.getOriginalUri(t.activeEditor, {
      supportSideBySide:op.PRIMARY
    });
    o&&(s.hasProvider(o)?i.openWindow([{
      fileUri:o
    }
    ], {
      forceNewWindow:!0
    }):r.error(_(7863, null)))
  }
}, iBf=class qcd extends rn{
  static{
    this.ID="workbench.files.action.compareNewUntitledTextFiles"
  }
  static{
    this.LABEL=dt(7906, "Compare New Untitled Text Files")
  }
  constructor(){
    super({
      id:qcd.ID,title:qcd.LABEL,f1:!0,category:Br.File,metadata:{
        description:dt(7907,"Opens a new diff editor with two untitled files.")
      }
    })
  }
  async run(e){
    await e.get(yi).openEditor({
      original:{
        resource:void 0
      },modified:{
        resource:void 0
      },options:{
        pinned:!0
      }
    })
  }
}, rBf=class PWa extends rn{
  static{
    this.ID="workbench.files.action.compareWithClipboard"
  }
  static{
    this.LABEL=dt(7908, "Compare Active File with Clipboard")
  }
  static{
    this.SCHEME_COUNTER=0
  }
  constructor(){
    super({
      id:PWa.ID,title:PWa.LABEL,f1:!0,category:Br.File,keybinding:{
        primary:Ma(Gm,33),mac:{
          primary:Ma(Np,33)
        },weight:200
      },metadata:{
        description:dt(7909,"Opens a new diff editor to compare the active file with the contents of the clipboard.")
      }
    })
  }
  async run(e){
    const t=e.get(yi), i=e.get(ln), r=e.get(El), s=e.get(Gr), o=gp.getOriginalUri(t.activeEditor, {
      supportSideBySide:op.PRIMARY
    }), a=`clipboardCompare${PWa.SCHEME_COUNTER++}`;
    if(o&&(s.hasProvider(o)||o.scheme===_n.untitled)){
      if(!this.registrationDisposal){
        const d=i.createInstance(xka);
        this.registrationDisposal=r.registerTextModelContentProvider(a,d)
      }
      const l=ca(o),u=_(7869,null,l);
      await t.openEditor({
        original:{
          resource:o.with({
            scheme:a
          })
        },modified:{
          resource:o
        },label:u,options:{
          pinned:!0
        }
      }).finally(()=>{
        Bo(this.registrationDisposal),this.registrationDisposal=void 0
      })
    }
  }
  dispose(){
    Bo(this.registrationDisposal), this.registrationDisposal=void 0
  }
}, xka=class{
  constructor(e, t, i){
    this.clipboardService=e, this.languageService=t, this.modelService=i
  }
  async provideTextContent(e){
    const t=await this.clipboardService.readText();
    return this.modelService.createModel(t, this.languageService.createByFilepathOrFirstLine(e), e)
  }
}, xka=__decorate([__param(0, jm), __param(1, Jl), __param(2, Il)], xka), Ss.registerCommand({
  id:pfn, handler:async n=>{
    await WDf(n, !1)
  }
}), Ss.registerCommand({
  id:C0i, handler:async n=>{
    await WDf(n, !0)
  }
}), sBf=async n=>{
  const e=n.get(DC), t=n.get(ms), i=n.get(Vp), r=n.get(kp), s=n.get(Fn), o=e.getContext(!1), a=o.length>0?o[0]:void 0;
  if(!a)return;
  const l=(await i.getEnvironment())?.os??cf;
  await e.setEditable(a, {
    validationMessage:u=>Ska(r, a, u, l), onFinish:async(u, d)=>{
      if(d){
        const m=a.parent.resource,p=Wo(m,u);
        if(a.resource.toString()!==p.toString())try{
          await e.applyBulkEdit([new QR(a.resource,p)],{
            confirmBeforeUndo:s.getValue().explorer.confirmUndo==="verbose",undoLabel:_(7873,null,a.name,u),progressLabel:_(7874,null,a.name,u)
          }),await Cka(u,e)
        }
        catch(g){
          t.error(g)
        }
      }
      await e.setEditable(a,null)
    }
  })
}, oBf=async(n, e)=>{
  const t=n.get(DC), i=n.get(Gr), r=n.get(ms), s=n.get(Vp), o=n.get(kp), a=n.get(Fn), l=n.get(yu), u=n.get(yi);
  await l.openView(GJ, !0);
  const d=t.getContext(!1), m=d.length>0?d[0]:void 0;
  let p;
  if(m?p=m.isDirectory?m:m.parent||t.roots[0]:p=t.roots[0], p.isReadonly){
    r.error(_(7875, null));
    return
  }
  const f=Wo(p.resource, "Untitled");
  try{
    await i.writeFile(f, Ms.fromString(e)), await t.refresh(), await t.select(f, !0), await Af(150);
    const A=t.findClosest(f);
    if(A){
      await u.openEditor({
        resource:f,options:{
          pinned:!0,preserveFocus:!0
        }
      });
      const w=(await s.getEnvironment())?.os??cf;
      await t.setEditable(A,{
        validationMessage:C=>Ska(o,A,C,w),onFinish:async(C,x)=>{
          if(x){
            const I=A.parent.resource,B=Wo(I,C);
            if(A.resource.toString()!==B.toString())try{
              await t.applyBulkEdit([new QR(A.resource,B)],{
                confirmBeforeUndo:a.getValue().explorer.confirmUndo==="verbose",undoLabel:_(7876,null,A.name,C),progressLabel:_(7877,null,A.name,C)
              }),await Cka(C,t)
            }
            catch(R){
              r.error(R)
            }
          }
          await t.setEditable(A,null)
        }
      })
    }
  }
  catch(A){
    if(A.code==="EEXIST"||A.message?.includes("already exists")){
      let w=1,C=f;
      for(;
      ;
      ){
        const x=`Untitled ${w}`;
        C=Wo(p.resource,x);
        try{
          await i.writeFile(C,Ms.fromString(e)),await t.refresh(),await t.select(C,!0),await Af(150);
          const I=t.findClosest(C);
          if(I){
            await u.openEditor({
              resource:C,options:{
                pinned:!0,preserveFocus:!0
              }
            });
            const B=(await s.getEnvironment())?.os??cf;
            await t.setEditable(I,{
              validationMessage:R=>Ska(o,I,R,B),onFinish:async(R,N)=>{
                if(N){
                  const M=I.parent.resource,O=Wo(M,R);
                  if(I.resource.toString()!==O.toString())try{
                    await t.applyBulkEdit([new QR(I.resource,O)],{
                      confirmBeforeUndo:a.getValue().explorer.confirmUndo==="verbose",undoLabel:_(7878,null,I.name,R),progressLabel:_(7879,null,I.name,R)
                    }),await Cka(R,t)
                  }
                  catch($){
                    r.error($)
                  }
                }
                await t.setEditable(I,null)
              }
            })
          }
          break
        }
        catch(I){
          if(I.code==="EEXIST"||I.message?.includes("already exists")){
            w++;
            continue
          }
          throw I
        }
      }
    }
    else r.error(Jw(A, !1))
  }
}, Ss.registerCommand({
  id:"explorer.createFileFromPaste", handler:oBf
}), aBf=async n=>{
  const t=n.get(DC).getContext(!0).filter(i=>!i.isRoot);
  t.length&&await Wfu(n.get(DC), n.get(t7), n.get(Ml), n.get(Fn), n.get(IC), t, !0)
}, ebu=async n=>{
  const t=n.get(DC).getContext(!0).filter(i=>!i.isRoot);
  t.length&&await Wfu(n.get(DC), n.get(t7), n.get(Ml), n.get(Fn), n.get(IC), t, !1)
}, Oit=!1, cBf=async n=>{
  const e=n.get(DC), t=e.getContext(!0);
  t.length>0&&(await e.setToCopy(t, !1), Oit=!1)
}, lBf=async n=>{
  const e=n.get(DC), t=e.getContext(!0);
  t.length>0&&(await e.setToCopy(t, !0), Oit=!0)
}, uBf=async n=>{
  const e=n.get(DC), t=n.get(ms), i=n.get(ln), r=e.getContext(!0), s=r.length?r:e.roots, o=i.createInstance(_ka);
  try{
    await o.download(s)
  }
  catch(a){
    throw t.error(a), a
  }
}, Ss.registerCommand({
  id:Kfu, handler:uBf
}), dBf=async n=>{
  const e=n.get(DC), t=n.get(ms), i=n.get(ln), r=e.getContext(!1), s=r.length?r[0]:e.roots[0];
  try{
    const o=await IiA();
    o&&await i.createInstance(_0i).upload(s, o)
  }
  catch(o){
    throw t.error(o), o
  }
}, Ss.registerCommand({
  id:Yfu, handler:dBf
}), hBf=async(n, e)=>{
  const t=n.get(jm), i=n.get(DC), r=n.get(Gr), s=n.get(ms), o=n.get(yi), a=n.get(Fn), l=n.get(xl), u=n.get(Ml), d=n.get(wd), m=i.getContext(!1), g=e&&e.length>0&&a.getValue("explorer.confirmPasteNative"), f=await yoy(e, t, d);
  if(g&&f.files.length>=1){
    const I=f.files.length>1?_(7880, null, f.files.length):_(7881, null, fd(f.type==="paths"?f.files[0].fsPath:f.files[0].name)), B=f.files.length>1?uve(f.files.map(N=>{
      if(je.isUri(N))return N.fsPath;
      if(f.type==="paths"){
        const M=XSe(N);
        if(M)return M
      }
      return N.name
    })):void 0, R=await u.confirm({
      message:I,detail:B,checkbox:{
        label:_(7882,null)
      },primaryButton:_(7883,null)
    });
    if(!R.confirmed)return;
    R.checkboxChecked===!0&&await a.updateValue("explorer.confirmPasteNative", !1)
  }
  const A=m.length?m[0]:i.roots[0], w=a.getValue().explorer.incrementalNaming;
  if(i.getEditable())return;
  try{
    let I=[];
    if(f.type==="paths"){
      const B=lh(await Promise.all(f.files.map(async R=>{
        if(A.resource.toString()!==R.toString()&&f9(A.resource,R))throw new Error(_(7884,null));
        const N=await r.stat(R);
        let M;
        l.extUri.isEqual(A.resource,R)?M=A.parent:M=A.isDirectory?A:A.parent;
        const O=await Qfu(i,r,u,M,{
          resource:R,isDirectory:N.isDirectory,allowOverwrite:Oit||w==="disabled"
        },w);
        if(O)return{
          source:R,target:O
        }
      })));
      if(B.length>=1)if(Oit){
        const R=B.map(M=>new QR(M.source,M.target,{
          overwrite:w==="disabled"
        })),N={
          confirmBeforeUndo:a.getValue().explorer.confirmUndo==="verbose",progressLabel:B.length>1?_(7885,null,B.length):_(7886,null,GP(B[0].target)),undoLabel:B.length>1?_(7887,null,B.length):_(7888,null,GP(B[0].target))
        };
        await i.applyBulkEdit(R,N)
      }
      else{
        const R=B.map(N=>new QR(N.source,N.target,{
          copy:!0,overwrite:w==="disabled"
        }));
        await x(B.map(N=>N.target),R)
      }
      I=B.map(R=>R.target)
    }
    else{
      const B=lh(await Promise.all(f.files.map(async R=>{
        const N=A.isDirectory?A:A.parent,M=await Qfu(i,r,u,N,{
          resource:R.name,isDirectory:!1,allowOverwrite:Oit||w==="disabled"
        },w);
        if(M)return{
          target:M,edit:new QR(void 0,M,{
            overwrite:w==="disabled",contents:(async()=>Ms.wrap(new Uint8Array(await R.arrayBuffer())))()
          })
        }
      })));
      await x(B.map(R=>R.target),B.map(R=>R.edit)),I=B.map(R=>R.target)
    }
    if(I.length){
      const B=I[0];
      if(await i.select(B),I.length===1){
        const R=i.findClosest(B);
        R&&!R.isDirectory&&await o.openEditor({
          resource:R.resource,options:{
            pinned:!0,preserveFocus:!0
          }
        })
      }
    }
  }
  catch(I){
    JDf(s, new Error(_(7889, null, ov(I))))
  }
  finally{
    Oit&&(await i.setToCopy([], !1), Oit=!1)
  }
  async function x(I, B){
    const R=a.getValue().explorer.confirmUndo, N={
      confirmBeforeUndo:R==="default"||R==="verbose",progressLabel:I.length>1?_(7890,null,I.length):_(7891,null,GP(I[0])),undoLabel:I.length>1?_(7892,null,I.length):_(7893,null,GP(I[0]))
    };
    await i.applyBulkEdit(B, N)
  }
}, mBf=async n=>{
  const e=n.get(yi), i=n.get(DC).getContext(!0);
  await e.openEditors(i.filter(r=>!r.isDirectory).map(r=>({
    resource:r.resource, options:{
      preserveFocus:!0
    }
  })))
}, S0i=class extends rn{
  constructor(n, e, t){
    super({
      id:n,title:e,f1:!0,category:Br.File,precondition:Oau
    }), this.newReadonlyState=t
  }
  async run(n){
    const e=n.get(yi), t=n.get(IC), i=gp.getOriginalUri(e.activeEditor, {
      supportSideBySide:op.PRIMARY
    });
    i&&await t.updateReadonly(i, this.newReadonlyState)
  }
}, pBf=class Hcd extends S0i{
  static{
    this.ID="workbench.action.files.setActiveEditorReadonlyInSession"
  }
  static{
    this.LABEL=dt(7910, "Set Active Editor Read-only in Session")
  }
  constructor(){
    super(Hcd.ID, Hcd.LABEL, !0)
  }
}, gBf=class Jcd extends S0i{
  static{
    this.ID="workbench.action.files.setActiveEditorWriteableInSession"
  }
  static{
    this.LABEL=dt(7911, "Set Active Editor Writeable in Session")
  }
  constructor(){
    super(Jcd.ID, Jcd.LABEL, !1)
  }
}, fBf=class Gcd extends S0i{
  static{
    this.ID="workbench.action.files.toggleActiveEditorReadonlyInSession"
  }
  static{
    this.LABEL=dt(7912, "Toggle Active Editor Read-only in Session")
  }
  constructor(){
    super(Gcd.ID, Gcd.LABEL, "toggle")
  }
}, bBf=class Wcd extends S0i{
  static{
    this.ID="workbench.action.files.resetActiveEditorReadonlyInSession"
  }
  static{
    this.LABEL=dt(7913, "Reset Active Editor Read-only in Session")
  }
  constructor(){
    super(Wcd.ID, Wcd.LABEL, "reset")
  }
}
}
}), ffn, vBf=