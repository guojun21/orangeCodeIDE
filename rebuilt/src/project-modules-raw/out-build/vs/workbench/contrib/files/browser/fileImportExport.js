// Module: out-build/vs/workbench/contrib/files/browser/fileImportExport.js
// Offset: 31222939 (bundle byte offset)
// Size: 18271 bytes

Ht(), Po(), ru(), ns(), So(), Xg(), $ie(), gD(), ss(), vr(), Ql(), Yr(), YI(), hfn(), Yn(), wm(), ps(), sN(), Uye(), _r(), ri(), jr(), zr(), gde(), rt(), wH(), Vs(), _s(), Ei(), H3n(), Wt(), kr(), _0i=class{
  static{
    Aka=this
  }
  static{
    this.MAX_PARALLEL_UPLOADS=20
  }
  constructor(e, t, i, r, s){
    this.progressService=e, this.dialogService=t, this.explorerService=i, this.editorService=r, this.fileService=s
  }
  upload(e, t){
    const i=new Wc, r=this.progressService.withProgress({
      location:10,delay:800,cancellable:!0,title:_(7927,null)
    }, async s=>this.doUpload(e, this.toTransfer(t), s, i.token), ()=>i.dispose(!0));
    return this.progressService.withProgress({
      location:GJ,delay:500
    }, ()=>r), r
  }
  toTransfer(e){
    if(CiA(e))return e.dataTransfer;
    const t={
      items:[]
    };
    for(const i of e)t.items.push({
      webkitGetAsEntry:()=>({
        name:i.name,isDirectory:!1,isFile:!0,createReader:()=>{
          throw new Error("Unsupported for files")
        },file:r=>r(i)
      })
    });
    return t
  }
  async doUpload(e, t, i, r){
    const s=t.items, o=[];
    for(const m of s)o.push(m.webkitGetAsEntry());
    const a=[], l={
      startTime:Date.now(),progressScheduler:new ZFt(m=>{
        i.report(m[m.length-1])
      },1e3),filesTotal:o.length,filesUploaded:0,totalBytesUploaded:0
    }, u=new wSe(Aka.MAX_PARALLEL_UPLOADS);
    await ib.settled(o.map(m=>u.queue(async()=>{
      if(r.isCancellationRequested)return;
      if(e&&m.name&&e.getChild(m.name)){
        const{
          confirmed:g
        }
        =await this.dialogService.confirm(Gfu(m.name));
        if(!g||(await this.explorerService.applyBulkEdit([new QR(Wo(e.resource,m.name),void 0,{
          recursive:!0,folder:e.getChild(m.name)?.isDirectory
        })],{
          undoLabel:_(7928,null,m.name),progressLabel:_(7929,null,m.name)
        }),r.isCancellationRequested))return
      }
      const p=await this.doUploadEntry(m,e.resource,e,i,l,r);
      p&&a.push(p)
    }))), l.progressScheduler.dispose();
    const d=a[0];
    !r.isCancellationRequested&&d?.isFile&&await this.editorService.openEditor({
      resource:d.resource,options:{
        pinned:!0
      }
    })
  }
  async doUploadEntry(e, t, i, r, s, o){
    if(o.isCancellationRequested||!e.name||!e.isFile&&!e.isDirectory)return;
    let a=0;
    const l=(d, m)=>{
      a+=m,s.totalBytesUploaded+=m;
      const p=s.totalBytesUploaded/((Date.now()-s.startTime)/1e3);
      let g;
      d<dT.MB?s.filesTotal===1?g=`${e.name}`:g=_(7930,null,s.filesUploaded,s.filesTotal,dT.formatSize(p)):g=_(7931,null,e.name,dT.formatSize(a),dT.formatSize(d),dT.formatSize(p)),s.progressScheduler.work({
        message:g
      })
    };
    s.filesUploaded++, l(0, 0);
    const u=Wo(t, e.name);
    if(e.isFile){
      const d=await new Promise((m,p)=>e.file(m,p));
      return o.isCancellationRequested?void 0:(typeof d.stream=="function"&&d.size>dT.MB?await this.doUploadFileBuffered(u,d,l,o):await this.doUploadFileUnbuffered(u,d,l),{
        isFile:!0,resource:u
      })
    }
    else{
      if(await this.fileService.createFolder(u),o.isCancellationRequested)return;
      const d=e.createReader(),m=[];
      let p=!1;
      do{
        const C=await new Promise((x,I)=>d.readEntries(x,I));
        C.length>0?m.push(...C):p=!0
      }
      while(!p&&!o.isCancellationRequested);
      s.filesTotal+=m.length;
      const g=i&&i.getChild(e.name)||void 0,f=[],A=[];
      for(const C of m)C.isFile?f.push(C):C.isDirectory&&A.push(C);
      const w=new wSe(Aka.MAX_PARALLEL_UPLOADS);
      await ib.settled(f.map(C=>w.queue(()=>this.doUploadEntry(C,u,g,r,s,o))));
      for(const C of A)await this.doUploadEntry(C,u,g,r,s,o);
      return{
        isFile:!1,resource:u
      }
    }
  }
  async doUploadFileBuffered(e, t, i, r){
    const s=cCc({
      highWaterMark:10
    }), o=this.fileService.writeFile(e, s);
    try{
      const a=t.stream().getReader();
      let l=await a.read();
      for(;
      !l.done&&!r.isCancellationRequested;
      ){
        const u=Ms.wrap(l.value);
        if(await s.write(u),r.isCancellationRequested)break;
        i(t.size,u.byteLength),l=await a.read()
      }
      s.end(void 0)
    }
    catch(a){
      s.error(a),s.end()
    }
    r.isCancellationRequested||await o
  }
  doUploadFileUnbuffered(e, t, i){
    return new Promise((r, s)=>{
      const o=new FileReader;
      o.onload=async a=>{
        try{
          if(a.target?.result instanceof ArrayBuffer){
            const l=Ms.wrap(new Uint8Array(a.target.result));
            await this.fileService.writeFile(e,l),i(t.size,l.byteLength)
          }
          else throw new Error("Could not read from dropped file.");
          r()
        }
        catch(l){
          s(l)
        }
      },o.readAsArrayBuffer(t)
    })
  }
}, _0i=Aka=__decorate([__param(0, Ib), __param(1, Ml), __param(2, DC), __param(3, yi), __param(4, Gr)], _0i), wka=class{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    this.fileService=e, this.hostService=t, this.contextService=i, this.configurationService=r, this.dialogService=s, this.workspaceEditingService=o, this.explorerService=a, this.editorService=l, this.progressService=u, this.notificationService=d, this.instantiationService=m
  }
  async import(e, t, i){
    const r=new Wc, s=this.progressService.withProgress({
      location:10,delay:800,cancellable:!0,title:_(7932,null)
    }, async()=>await this.doImport(e, t, i, r.token), ()=>r.dispose(!0));
    return this.progressService.withProgress({
      location:GJ,delay:500
    }, ()=>s), s
  }
  async doImport(e, t, i, r){
    const s=lh((await this.instantiationService.invokeFunction(u=>z5o(u, t))).map(u=>u.resource));
    await Promise.all(s.map(u=>this.fileService.activateProvider(u.scheme)));
    const o=lh(s.filter(u=>this.fileService.hasProvider(u))), a=await this.fileService.resolveAll(o.map(u=>({
      resource:u
    })));
    if(r.isCancellationRequested)return;
    this.hostService.focus(i);
    const l=a.filter(u=>u.success&&u.stat?.isDirectory).map(u=>({
      uri:u.stat.resource
    }));
    if(l.length>0&&e.isRoot){
      let u;
      (function(f){
        f[f.Copy=1]="Copy",f[f.Add=2]="Add"
      })(u||(u={
        
      }));
      const d=[{
        label:l.length>1?_(7933,null):_(7934,null),run:()=>u.Copy
      }
      ];
      let m;
      const p=this.contextService.getWorkspace().folders.map(f=>f.uri.scheme);
      l.some(f=>p.indexOf(f.uri.scheme)>=0)?(d.unshift({
        label:l.length>1?_(7935,null):_(7936,null),run:()=>u.Add
      }),m=l.length>1?_(7937,null):_(7938,null,ca(l[0].uri))):m=l.length>1?_(7939,null):_(7940,null,ca(l[0].uri));
      const{
        result:g
      }
      =await this.dialogService.prompt({
        type:Rs.Info,message:m,buttons:d,cancelButton:!0
      });
      if(g===u.Add)return this.workspaceEditingService.addFolders(l);
      if(g===u.Copy)return this.importResources(e,o,r)
    }
    else if(e instanceof v8)return this.importResources(e, o, r)
  }
  async importResources(e, t, i){
    if(t&&t.length>0){
      const r=await this.fileService.resolve(e.resource);
      if(i.isCancellationRequested)return;
      const s=new Set,o=this.fileService.hasCapability(e.resource,1024);
      r.children&&r.children.forEach(p=>{
        s.add(o?p.name:p.name.toLowerCase())
      });
      let a=0;
      const l=lh(await ib.settled(t.map(async p=>{
        if(!await this.fileService.exists(p)){
          a++;
          return
        }
        if(!(s.has(o?ca(p):ca(p).toLowerCase())&&!(await this.dialogService.confirm(Gfu(ca(p)))).confirmed))return p
      })));
      a>0&&this.notificationService.error(a>1?_(7941,null):_(7942,null));
      const u=l.map(p=>{
        const g=ca(p),f=Wo(e.resource,g);
        return new QR(p,f,{
          overwrite:!0,copy:!0
        })
      }),d=this.configurationService.getValue().explorer.confirmUndo;
      if(await this.explorerService.applyBulkEdit(u,{
        undoLabel:l.length===1?_(7943,null,ca(l[0])):_(7944,null,l.length),progressLabel:l.length===1?_(7945,null,ca(l[0])):_(7946,null,l.length),progressLocation:10,confirmBeforeUndo:d==="verbose"||d==="default"
      }),this.configurationService.getValue().explorer.autoOpenDroppedFile&&u.length===1){
        const p=this.explorerService.findClosest(u[0].newResource);
        p&&!p.isDirectory&&this.editorService.openEditor({
          resource:p.resource,options:{
            pinned:!0
          }
        })
      }
    }
  }
}, wka=__decorate([__param(0, Gr), __param(1, wd), __param(2, Lr), __param(3, Fn), __param(4, Ml), __param(5, uX), __param(6, DC), __param(7, yi), __param(8, Ib), __param(9, ms), __param(10, ln)], wka), _ka=class{
  static{
    yka=this
  }
  static{
    this.LAST_USED_DOWNLOAD_PATH_STORAGE_KEY="workbench.explorer.downloadPath"
  }
  constructor(e, t, i, r, s, o){
    this.fileService=e, this.explorerService=t, this.progressService=i, this.logService=r, this.fileDialogService=s, this.storageService=o
  }
  download(e){
    const t=new Wc, i=this.progressService.withProgress({
      location:10,delay:800,cancellable:Eu,title:_(7947,null)
    }, async r=>this.doDownload(e, r, t), ()=>t.dispose(!0));
    return this.progressService.withProgress({
      location:GJ,delay:500
    }, ()=>i), i
  }
  async doDownload(e, t, i){
    for(const r of e){
      if(i.token.isCancellationRequested)return;
      Eu?await this.doDownloadBrowser(r.resource,t,i):await this.doDownloadNative(r,t,i)
    }
  }
  async doDownloadBrowser(e, t, i){
    const r=await this.fileService.resolve(e, {
      resolveMetadata:!0
    });
    if(i.token.isCancellationRequested)return;
    const s=32*dT.MB, o=r.isDirectory||r.size>s, a=$c();
    if(o&&zde.supported(a))try{
      const l=await a.showDirectoryPicker(),u={
        startTime:Date.now(),progressScheduler:new ZFt(d=>{
          t.report(d[d.length-1])
        },1e3),filesTotal:r.isDirectory?0:1,filesDownloaded:0,totalBytesDownloaded:0,fileBytesDownloaded:0
      };
      if(r.isDirectory){
        const d=await l.getDirectoryHandle(r.name,{
          create:!0
        });
        await this.downloadFolderBrowser(r,d,u,i.token)
      }
      else await this.downloadFileBrowser(l,r,u,i.token);
      u.progressScheduler.dispose()
    }
    catch(l){
      this.logService.warn(l),i.cancel()
    }
    else if(r.isFile){
      let l;
      try{
        l=(await this.fileService.readFile(r.resource,{
          limits:{
            size:s
          }
        },i.token)).value.buffer
      }
      catch{
        l=og.uriToBrowserUri(r.resource)
      }
      i.token.isCancellationRequested||TiA(l,r.name)
    }
  }
  async downloadFileBufferedBrowser(e, t, i, r){
    const s=await this.fileService.readFileStream(e, void 0, r);
    if(r.isCancellationRequested){
      t.close();
      return
    }
    return new Promise((o, a)=>{
      const l=s.value,u=new Ut;
      u.add($i(()=>t.close())),u.add(_6(r.onCancellationRequested)(()=>{
        u.dispose(),a(_be())
      })),Agt(l,{
        onData:d=>{
          t.write(d.buffer),this.reportProgress(s.name,s.size,d.byteLength,i)
        },onError:d=>{
          u.dispose(),a(d)
        },onEnd:()=>{
          u.dispose(),o()
        }
      },r)
    })
  }
  async downloadFileUnbufferedBrowser(e, t, i, r){
    const s=await this.fileService.readFile(e, void 0, r);
    r.isCancellationRequested||(t.write(s.value.buffer), this.reportProgress(s.name, s.size, s.value.byteLength, i)), t.close()
  }
  async downloadFileBrowser(e, t, i, r){
    i.filesDownloaded++, i.fileBytesDownloaded=0, this.reportProgress(t.name, 0, 0, i);
    const o=await(await e.getFileHandle(t.name, {
      create:!0
    })).createWritable();
    return t.size>dT.MB?this.downloadFileBufferedBrowser(t.resource, o, i, r):this.downloadFileUnbufferedBrowser(t.resource, o, i, r)
  }
  async downloadFolderBrowser(e, t, i, r){
    if(e.children){
      i.filesTotal+=e.children.map(s=>s.isFile).length;
      for(const s of e.children){
        if(r.isCancellationRequested)return;
        if(s.isFile)await this.downloadFileBrowser(t,s,i,r);
        else{
          const o=await t.getDirectoryHandle(s.name,{
            create:!0
          }),a=await this.fileService.resolve(s.resource,{
            resolveMetadata:!0
          });
          await this.downloadFolderBrowser(a,o,i,r)
        }
      }
    }
  }
  reportProgress(e, t, i, r){
    r.fileBytesDownloaded+=i, r.totalBytesDownloaded+=i;
    const s=r.totalBytesDownloaded/((Date.now()-r.startTime)/1e3);
    let o;
    t<dT.MB?r.filesTotal===1?o=e:o=_(7948, null, r.filesDownloaded, r.filesTotal, dT.formatSize(s)):o=_(7949, null, e, dT.formatSize(r.fileBytesDownloaded), dT.formatSize(t), dT.formatSize(s)), r.progressScheduler.work({
      message:o
    })
  }
  async doDownloadNative(e, t, i){
    t.report({
      message:e.name
    });
    let r;
    const s=this.storageService.get(yka.LAST_USED_DOWNLOAD_PATH_STORAGE_KEY, -1);
    s?r=Wo(je.file(s), e.name):r=Wo(e.isDirectory?await this.fileDialogService.defaultFolderPath(_n.file):await this.fileDialogService.defaultFilePath(_n.file), e.name);
    const o=await this.fileDialogService.showSaveDialog({
      availableFileSystems:[_n.file],saveLabel:_(7950,null),title:_(7951,null),defaultUri:r
    });
    o?(this.storageService.store(yka.LAST_USED_DOWNLOAD_PATH_STORAGE_KEY, Td(o).fsPath, -1, 1), await this.explorerService.applyBulkEdit([new QR(e.resource, o, {
      overwrite:!0,copy:!0
    })], {
      undoLabel:_(7952,null,e.name),progressLabel:_(7953,null,e.name),progressLocation:10
    })):i.cancel()
  }
}, _ka=yka=__decorate([__param(0, Gr), __param(1, DC), __param(2, Ib), __param(3, Rr), __param(4, oy), __param(5, Hi)], _ka)
}
});
function JDf(n, e){
  e.message==="string"&&(e=e.message), n.error(Jw(e, !1))
}
async function Cka(n, e){
  n&&(n.indexOf("/")>=0||n.indexOf("\\")>=0)&&await e.refresh()
}
async function Wfu(n, e, t, i, r, s, o, a=!1, l=!1){
  let u;
  o?u=_(Sc?7820:7821, null):u=_(7822, null);
  const d=vCc(s, f=>f.resource), m=new Set;
  for(const f of d)for(const A of e.getDirty(f.resource))m.add(A);
  if(m.size){
    let f;
    if(d.length>1?f=_(7823, null):d[0].isDirectory?m.size===1?f=_(7824, null, d[0].name):f=_(7825, null, d[0].name, m.size):f=_(7826, null, d[0].name), (await t.confirm({
      type:"warning",message:f,detail:_(7827,null),primaryButton:u
    })).confirmed)a=!0;
    else return
  }
  if(!a){
    const f=d.filter(A=>r.isReadonly(A.resource));
    if(f.length){
      let A;
      if(f.length>1?A=_(7828,null):f[0].isDirectory?A=_(7829,null,d[0].name):A=_(7830,null,d[0].name),!(await t.confirm({
        type:"warning",message:A,detail:_(7831,null),primaryButton:_(7832,null)
      })).confirmed)return
    }
  }
  let p;
  const g=d.some(f=>f.isDirectory)?_(7833, null):d.length>1?_(7834, null):_(7835, null);
  if(a||o&&i.getValue(Zfu)===!1)p={
    confirmed:!0
  };
  else if(o){
    let{
      message:f,detail:A
    }
    =moy(d);
    A+=A?`
`:"", Sc?A+=d.length>1?_(7836, null):_(7837, null):A+=d.length>1?_(7838, null):_(7839, null), p=await t.confirm({
      message:f,detail:A,primaryButton:u,checkbox:{
        label:_(7840,null)
      }
    })
  }
  else{
    let{
      message:f,detail:A
    }
    =poy(d);
    A+=A?`
`:"", A+=g, p=await t.confirm({
      type:"warning",message:f,detail:A,primaryButton:u
    })
  }
  if(p.confirmed&&p.checkboxChecked===!0&&await i.updateValue(Zfu, !1), !!p.confirmed)try{
    const f=d.map(w=>new QR(w.resource, void 0, {
      recursive:!0,folder:w.isDirectory,ignoreIfNotExists:l,skipTrashBin:!o,maxSize:ZDf
    })), A={
      undoLabel:d.length>1?_(7841,null,d.length):_(7842,null,d[0].name),progressLabel:d.length>1?_(7843,null,d.length):_(7844,null,d[0].name)
    };
    await n.applyBulkEdit(f, A)
  }
  catch(f){
    let A, w, C;
    if(o?(A=_(Sc?7845:7846, null), w=g, C=_(7847, null)):(A=Jw(f, !1), C=_(7848, null)), (await t.confirm({
      type:"warning",message:A,detail:w,primaryButton:C
    })).confirmed)return o&&(o=!1), a=!0, l=!0, Wfu(n, e, t, i, r, s, o, a, l)
  }
}
function moy(n){
  return GDf(n)?{
    message:_(7849, null, n.length), detail:uve(n.map(e=>e.resource))
  }
  :n.length>1?n[0].isDirectory?{
    message:_(7850, null, n.length), detail:uve(n.map(e=>e.resource))
  }
  :{
    message:_(7851, null, n.length), detail:uve(n.map(e=>e.resource))
  }
  :n[0].isDirectory&&!n[0].isSymbolicLink?{
    message:_(7852, null, n[0].name), detail:""
  }
  :{
    message:_(7853, null, n[0].name), detail:""
  }
}
function poy(n){
  return GDf(n)?{
    message:_(7854, null, n.length), detail:uve(n.map(e=>e.resource))
  }
  :n.length>1?n[0].isDirectory?{
    message:_(7855, null, n.length), detail:uve(n.map(e=>e.resource))
  }
  :{
    message:_(7856, null, n.length), detail:uve(n.map(e=>e.resource))
  }
  :n[0].isDirectory?{
    message:_(7857, null, n[0].name), detail:""
  }
  :{
    message:_(7858, null, n[0].name), detail:""
  }
}
function GDf(n){
  const e=n.find(i=>i.isDirectory), t=n.find(i=>!i.isDirectory);
  return!!e&&!!t
}
async function Qfu(n, e, t, i, r, s){
  let o=typeof r.resource=="string"?r.resource:GP(r.resource), a=Wo(i.resource, o);
  if(!(s==="disabled"&&!await foy(e, t, a))){
    for(;
    !r.allowOverwrite&&n.findClosest(a);
    )s!=="disabled"&&(o=goy(o, !!r.isDirectory, s)), a=Wo(i.resource, o);
    return a
  }
}
function goy(n, e, t){
  if(t==="simple"){
    let m=n, p="";
    e||(p=QD(n), m=fd(n, p));
    const g=/^(.+ copy)( \d+)?$/;
    return g.test(m)?m.replace(g, (f, A, w)=>{
      const C=w?parseInt(w):1;
      return C===0?`${A}`:C<1073741824?`${A} ${C+1}`:`${A}${w} copy`
    })+p:`${m} copy${p}`
  }
  const i="[\\.\\-_]", r=1073741824, s=RegExp("(.*"+i+")(\\d+)(\\..*)$");
  if(!e&&n.match(s))return n.replace(s, (m, p, g, f)=>{
    const A=parseInt(g);
    return A<r?p+String(A+1).padStart(g.length, "0")+f:`${p}${g}.1${f}`
  });
  const o=RegExp("(\\d+)("+i+".*)(\\..*)$");
  if(!e&&n.match(o))return n.replace(o, (m, p, g, f)=>{
    const A=parseInt(p);
    return A<r?String(A+1).padStart(p.length, "0")+g+f:`${p}${g}.1${f}`
  });
  const a=RegExp("(\\d+)(\\..*)$");
  if(!e&&n.match(a))return n.replace(a, (m, p, g)=>{
    const f=parseInt(p);
    return f<r?String(f+1).padStart(p.length, "0")+g:`${p}.1${g}`
  });
  const l=n.lastIndexOf(".");
  if(!e&&l>=0)return`${n.substr(0,l)}.1${n.substr(l)}`;
  const u=RegExp("(\\d+)$");
  if(!e&&l===-1&&n.match(u))return n.replace(u, (m, p)=>{
    const g=parseInt(p);
    return g<r?String(g+1).padStart(p.length, "0"):`${p}.1`
  });
  const d=RegExp("(.*)(\\d*)$");
  return!e&&l===-1&&n.match(d)?n.replace(d, (m, p, g)=>{
    let f=parseInt(g);
    return isNaN(f)&&(f=0), f<r?p+String(f+1).padStart(g.length, "0"):`${p}${g}.1`
  }):e&&n.match(/(\d+)$/)?n.replace(/(\d+)$/, (m, ...p)=>{
    const g=parseInt(p[0]);
    return g<r?String(g+1).padStart(p[0].length, "0"):`${p[0]}.1`
  }):e&&n.match(/^(\d+)/)?n.replace(/^(\d+)(.*)$/, (m, ...p)=>{
    const g=parseInt(p[0]);
    return g<r?String(g+1).padStart(p[0].length, "0")+p[1]:`${p[0]}${p[1]}.1`
  }):`${n}.1`
}
async function foy(n, e, t){
  if(!await n.exists(t))return!0;
  const{
    confirmed:r
  }
  =await e.confirm({
    type:Rs.Warning, message:_(7859, null, fd(t.path)), primaryButton:_(7860, null)
  });
  return r
}
function Ska(n, e, t, i){
  if(t=voy(t), !t||t.length===0||/^\s+$/.test(t))return{
    content:_(7864, null), severity:Rs.Error
  };
  if(t[0]==="/"||t[0]==="\\")return{
    content:_(7865, null), severity:Rs.Error
  };
  const r=lh(t.split(/[\\/]/)), s=e.parent;
  if(t!==e.name){
    const o=s?.getChild(t);
    if(o&&o!==e)return{
      content:_(7866,null,t),severity:Rs.Error
    }
  }
  if(r.some(o=>!n.hasValidBasename(e.resource, i, o))){
    const o=t.replace(/\*/g, "\\*");
    return{
      content:_(7867,null,boy(o)),severity:Rs.Error
    }
  }
  return r.some(o=>/^\s|\s$/.test(o))?{
    content:_(7868, null), severity:Rs.Warning
  }
  :null
}
function boy(n){
  return n?.length>255?`${n.substr(0,255)}...`:n
}
function voy(n){
  return n&&(n=p5e(n, "	"), n=xH(n, "/"), n=xH(n, "\\"), n)
}
function Aoy(n, e, t){
  n.prompt(Rs.Error, Jw(e, !1), [{
    label:_(7870, null), run:()=>t()
  }
  ])
}
async function WDf(n, e){
  const t=n.get(DC), i=n.get(Gr), r=n.get(Fn), s=n.get(IC), o=n.get(yi), a=n.get(yu), l=n.get(ms), u=n.get(Vp), d=n.get(fr), m=n.get(kp), p=!a.isViewVisible(GJ), g=await a.openView(GJ, !0);
  if(p&&await Af(500), !g){
    if(e)throw new Error("Open a folder or workspace first.");
    return d.executeCommand(xit)
  }
  const f=t.getContext(!1), A=f.length>0?f[0]:void 0;
  let w;
  if(A?w=A.isDirectory?A:A.parent||t.roots[0]:w=t.roots[0], w.isReadonly)throw new Error("Parent folder is readonly.");
  const C=new w0i(i, r, s, w, e);
  w.addChild(C);
  const x=async B=>{
    try{
      const R=Wo(w.resource,B);
      B.endsWith("/")&&(e=!0),await t.applyBulkEdit([new QR(void 0,R,{
        folder:e
      })],{
        undoLabel:_(7871,null,B),progressLabel:_(7872,null,B),confirmBeforeUndo:!0
      }),await Cka(B,t),e?await t.select(R,!0):await o.openEditor({
        resource:R,options:{
          pinned:!0
        }
      })
    }
    catch(R){
      Aoy(l,R,()=>x(B))
    }
  }, I=(await u.getEnvironment())?.os??cf;
  await t.setEditable(C, {
    validationMessage:B=>Ska(m, C, B, I), onFinish:async(B, R)=>{
      w.removeChild(C),await t.setEditable(C,null),R&&x(B)
    }
  })
}
async function yoy(n, e, t){
  if(n&&n.length>0){
    const i=[...n].map(r=>XSe(r)).filter(r=>!!r&&FR(r)).map(r=>je.file(r));
    return i.length?{
      type:"paths",files:i
    }
    :{
      type:"data",files:[...n].filter(r=>!XSe(r))
    }
  }
  else return{
    type:"paths", files:vCc(await e.readResources(), i=>i)
  }
}
var pfn, jfu, C0i, zfu, QDf, jDf, zDf, VDf, Vfu, Kfu, KDf, Yfu, YDf, Zfu, ZDf, XDf, Xfu, kka, Eka, gfn, eBf, tBf, nBf, iBf, rBf, xka, sBf, oBf, aBf, ebu, Oit, cBf, lBf, uBf, dBf, hBf, mBf, S0i, pBf, gBf, fBf, bBf, Tka=