// Module: out-build/vs/platform/opener/common/opener.js
// Offset: 2397600 (bundle byte offset)
// Size: 3454 bytes

Wt(), Ja=xi("openerService")
}
});
function ABc(n){
  const e=[];
  if(n.dataTransfer&&n.dataTransfer.types.length>0){
    const r=n.dataTransfer.getData(nM.EDITORS);
    if(r)try{
      e.push(...gW(r))
    }
    catch{
      
    }
    else try{
      const a=n.dataTransfer.getData(fT.RESOURCES);
      e.push(...ESh(a))
    }
    catch{
      
    }
    if(n.dataTransfer?.files)for(let a=0;
    a<n.dataTransfer.files.length;
    a++){
      const l=n.dataTransfer.files[a];
      if(l&&XSe(l))try{
        e.push({
          resource:je.file(XSe(l)),isExternal:!0,allowWorkspaceOpen:!0
        })
      }
      catch{
        
      }
    }
    const s=n.dataTransfer.getData(nM.FILES);
    if(s)try{
      const a=JSON.parse(s);
      for(const l of a)e.push({
        resource:je.file(l),isExternal:!0,allowWorkspaceOpen:!0
      })
    }
    catch{
      
    }
    const o=Di.as(V3t.DragAndDropContribution).getAll();
    for(const a of o){
      const l=n.dataTransfer.getData(a.dataFormatKey);
      if(l)try{
        e.push(...a.getEditorInputs(l))
      }
      catch{
        
      }
    }
  }
  const t=[], i=new fu;
  for(const r of e)r.resource?i.has(r.resource)||(t.push(r), i.set(r.resource, !0)):t.push(r);
  return t
}
async function z5o(n, e){
  const t=ABc(e);
  if(e.dataTransfer&&Eu&&k9(e, fT.FILES)&&e.dataTransfer.items){
    const s=await n.get(ln).invokeFunction(o=>whA(o, e));
    for(const o of s)t.push({
      resource:o.resource,contents:o.contents?.toString(),isExternal:!0,allowWorkspaceOpen:o.isDirectory
    })
  }
  return t
}
function ESh(n){
  const e=[];
  if(n){
    const t=JSON.parse(n);
    for(const i of t)if(i.indexOf(":")>0){
      const{
        selection:r,uri:s
      }
      =J3n(je.parse(i));
      e.push({
        resource:s,options:{
          selection:r
        }
      })
    }
  }
  return e
}
async function whA(n, e){
  if(zde.supported(bi)){
    const i=e.dataTransfer?.items;
    if(i)return _hA(n, i)
  }
  const t=e.dataTransfer?.files;
  return t?ChA(n, t):[]
}
async function _hA(n, e){
  const t=n.get(Gr).getProvider(_n.file);
  if(!(t instanceof kSh))return[];
  const i=[];
  for(let r=0;
  r<e.length;
  r++){
    const s=e[r];
    if(s){
      const o=new wy;
      i.push(o),(async()=>{
        try{
          const a=await s.getAsFileSystemHandle();
          if(!a){
            o.complete(void 0);
            return
          }
          zde.isFileSystemFileHandle(a)?o.complete({
            resource:await t.registerFileHandle(a),isDirectory:!1
          }):zde.isFileSystemDirectoryHandle(a)?o.complete({
            resource:await t.registerDirectoryHandle(a),isDirectory:!0
          }):o.complete(void 0)
        }
        catch{
          o.complete(void 0)
        }
      })()
    }
  }
  return lh(await Promise.all(i.map(r=>r.p)))
}
async function ChA(n, e){
  const t=n.get(Ml), i=[];
  for(let r=0;
  r<e.length;
  r++){
    const s=e.item(r);
    if(s){
      if(s.size>100*dT.MB){
        t.warn(_(1859,null));
        continue
      }
      const o=new wy;
      i.push(o);
      const a=new FileReader;
      a.onerror=()=>o.complete(void 0),a.onabort=()=>o.complete(void 0),a.onload=async l=>{
        const u=s.name,d=l.target?.result??void 0;
        if(typeof u!="string"||typeof d>"u"){
          o.complete(void 0);
          return
        }
        o.complete({
          resource:je.from({
            scheme:_n.untitled,path:u
          }),contents:typeof d=="string"?Ms.fromString(d):Ms.wrap(new Uint8Array(d))
        })
      },a.readAsArrayBuffer(s)
    }
  }
  return lh(await Promise.all(i.map(r=>r.p)))
}
function k9(n, ...e){
  if(!n.dataTransfer)return!1;
  const t=n.dataTransfer.types, i=[];
  for(let r=0;
  r<t.length;
  r++)i.push(t[r].toLowerCase());
  for(const r of e)if(i.indexOf(r.toLowerCase())>=0)return!0;
  return!1
}
function xSh(n, e, t){
  n.dataTransfer?.setData(e, JSON.stringify(t))
}
function TSh(n, e, t){
  const i=n.dataTransfer?.getData(e);
  if(i)try{
    return JSON.parse(i)
  }
  catch{
    
  }
  return t
}
function ShA(n){
  return TSh(n, nM.SYMBOLS, [])
}
function yBc(n, e){
  xSh(e, nM.SYMBOLS, n)
}
function khA(n){
  return TSh(n, nM.MARKERS, void 0)
}
function EhA(n, e){
  xSh(e, nM.MARKERS, n)
}
function XSe(n){
  if(kw&&typeof globalThis.vscode?.webUtils?.getPathForFile=="function")return globalThis.vscode.webUtils.getPathForFile(n)
}
var nM, ISh, V3t, GB, sN=