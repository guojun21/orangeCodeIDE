// Module: out-build/vs/platform/actions/browser/actionViewItemService.js
// Offset: 2295641 (bundle byte offset)
// Size: 954 bytes

yn(), rt(), Er(), Wt(), dr(), O3t=xi("IActionViewItemService"), $Ch=class{
  constructor(){
    this._providers=new Map, this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event
  }
  dispose(){
    this._onDidChange.dispose()
  }
  register(n, e, t, i){
    const r=this._makeKey(n, e);
    if(this._providers.has(r))throw new Error(`A provider for the command ${e} and menu ${n} is already registered.`);
    this._providers.set(r, t);
    const s=i?.(()=>{
      this._onDidChange.fire(n)
    });
    return $i(()=>{
      s?.dispose(),this._providers.delete(r)
    })
  }
  lookUp(n, e){
    return this._providers.get(this._makeKey(n, e))
  }
  _makeKey(n, e){
    return`${n.id}/${e instanceof st?e.id:e}`
  }
}, Vi(O3t, $Ch, 1)
}
});
function ahA(n, e, t){
  if(e===null)return"";
  const i=[];
  return n.ctrlKey&&i.push(t.ctrlKey), n.shiftKey&&i.push(t.shiftKey), n.altKey&&i.push(t.altKey), n.metaKey&&i.push(t.metaKey), e!==""&&i.push(e), i.join(t.separator)
}
var L3n, mKe, YDc, qCh, N5o, pKe=