// Module: out-build/vs/workbench/services/notebook/common/notebookDocumentService.js
// Offset: 25004122 (bundle byte offset)
// Size: 2444 bytes

Ql(), cu(), zr(), Er(), Wt(), Jpi=xi("notebookDocumentService"), Gca=["W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f"], cfg=new RegExp(`^[${Gca.join("")}]+`), CWl=7, lfg=class{
  constructor(){
    this._documents=new fu
  }
  getNotebook(n){
    if(n.scheme===_n.vscodeNotebookCell){
      const e=wWl(n);
      if(e){
        const t=this._documents.get(e.notebook);
        if(t)return t
      }
    }
    if(n.scheme===_n.vscodeNotebookCellOutput){
      const e=_Wl(n);
      if(e){
        const t=this._documents.get(e.notebook);
        if(t)return t
      }
    }
    return this._documents.get(n)
  }
  addNotebookDocument(n){
    this._documents.set(n.uri, n)
  }
  removeNotebookDocument(n){
    this._documents.delete(n.uri)
  }
}, Vi(Jpi, lfg, 1)
}
});
function SWl(n, e, t, i=(r, s)=>r===s){
  const r=[];
  function s(l, u, d){
    if(u===0&&d.length===0)return;
    const m=r[r.length-1];
    m&&m.start+m.deleteCount===l?(m.deleteCount+=u, m.toInsert.push(...d)):r.push({
      start:l,deleteCount:u,toInsert:d
    })
  }
  let o=0, a=0;
  for(;
  ;
  ){
    if(o===n.length){
      s(o,0,e.slice(a));
      break
    }
    if(a===e.length){
      s(o,n.length-o,[]);
      break
    }
    const l=n[o], u=e[a];
    if(i(l, u)){
      o+=1,a+=1;
      continue
    }
    t(u)?(s(o, 1, []), o+=1):(s(o, 0, [u]), a+=1)
  }
  return r
}
function ufg(n){
  const e=n;
  return!!((typeof e.include=="string"||Pet(e.include))&&(typeof e.exclude=="string"||Pet(e.exclude)))
}
function Let(n){
  return["application/vnd.code.notebook.stdout", "application/vnd.code.notebook.stderr"].includes(n)
}
function nCA(n){
  const e=[];
  let t=!1;
  for(const o of n)(e.length===0||t)&&(e.push(o), t=!0);
  let i=iCA(e);
  const r=Ms.concat(e.map(o=>Ms.wrap(o))), s=oCA(r);
  return i=i||s.byteLength!==r.byteLength, {
    data:s, didCompression:i
  }
}
function iCA(n){
  let e=!1;
  return n.forEach((t, i)=>{
    if(i===0||t.length<zpi.length)return;
    const r=n[i-1], s=t.subarray(0, zpi.length);
    if(s[0]===jca[0]&&s[1]===jca[1]&&s[2]===jca[2]){
      const o=r.lastIndexOf(_fg);
      if(o===-1)return;
      e=!0,n[i-1]=r.subarray(0,o),n[i]=t.subarray(zpi.length)
    }
  }), e
}
function rCA(n){
  let e=n;
  do n=e, e=n.replace(/[^\n]\x08/gm, "");
  while(e.length<n.length);
  return n
}
function sCA(n){
  for(n=n.replace(/\r+\n/gm, `
`);
  n.search(/\r[^$]/g)>-1;
  ){
    const e=n.match(/^(.*)\r+/m)[1];
    let t=n.match(/\r+(.*)$/m)[1];
    t=t+e.slice(t.length, e.length), n=n.replace(/\r+.*$/m, "\r").replace(/^.*\r/m, t)
  }
  return n
}
function oCA(n){
  return!n.buffer.includes(Cfg)&&!n.buffer.includes(Sfg)?n:Ms.fromString(sCA(rCA(wfg.decode(n.buffer))))
}
var lCt, Wpi, dfg, Uun, Wca, zd, kWl, hfg, mfg, uCt, pfg, XE, $un, gfg, ffg, sb, Wy, bfg, Qca, Dg, Qpi, vfg, cNe, Afg, jpi, Wne, yo, yfg, qun, wfg, zpi, jca, _fg, Cfg, Sfg, ph=