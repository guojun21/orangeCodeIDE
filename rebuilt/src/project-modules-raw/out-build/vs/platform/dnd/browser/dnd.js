// Module: out-build/vs/platform/dnd/browser/dnd.js
// Offset: 2401054 (bundle byte offset)
// Size: 1735 bytes

dz(), iu(), Vs(), vr(), Ql(), cu(), UB(), zr(), _r(), Yn(), Ht(), ru(), yhA(), H3n(), ns(), Wt(), Fc(), Ws(), nM={
  EDITORS:"CodeEditors", FILES:"CodeFiles", SYMBOLS:"application/vnd.code.symbols", MARKERS:"application/vnd.code.diagnostics"
}, ISh=class{
  constructor(){
    this._contributions=new Map
  }
  register(n){
    if(this._contributions.has(n.dataFormatKey))throw new Error(`A drag and drop contributiont with key '${n.dataFormatKey}' was already registered.`);
    this._contributions.set(n.dataFormatKey, n)
  }
  getAll(){
    return this._contributions.values()
  }
}, V3t={
  DragAndDropContribution:"workbench.contributions.dragAndDrop"
}, Di.add(V3t.DragAndDropContribution, new ISh), GB=class qad{
  static{
    this.INSTANCE=new qad
  }
  constructor(){
    
  }
  static getInstance(){
    return qad.INSTANCE
  }
  hasData(e){
    return e&&e===this.proto
  }
  clearData(e){
    this.hasData(e)&&(this.proto=void 0, this.data=void 0)
  }
  getData(e){
    if(this.hasData(e))return this.data
  }
  setData(e, t){
    t&&(this.data=e, this.proto=t)
  }
}
}
});
function DSh(n){
  const e=new wbt;
  for(const t of n.items){
    const i=t.type;
    if(t.kind==="string"){
      const r=new Promise(s=>t.getAsString(s));
      e.append(i,W3t(r))
    }
    else if(t.kind==="file"){
      const r=t.getAsFile();
      r&&e.append(i,xhA(r))
    }
  }
  return e
}
function xhA(n){
  const e=XSe(n), t=e?je.parse(e):void 0;
  return bhA(n.name, t, async()=>new Uint8Array(await n.arrayBuffer()))
}
function V5o(n, e=!1){
  const t=DSh(n), i=t.get(fT.INTERNAL_URI_LIST);
  if(i)t.replace(NA.uriList, i);
  else if(e||!t.has(NA.uriList)){
    const r=[];
    for(const s of n.items){
      const o=s.getAsFile();
      if(o){
        const a=XSe(o);
        try{
          a?r.push(je.file(a).toString()):r.push(je.parse(o.name,!0).toString())
        }
        catch{
          
        }
      }
    }
    r.length&&t.replace(NA.uriList, W3t(YSe.create(r)))
  }
  for(const r of BSh)t.delete(r);
  return t
}
var BSh, wBc=