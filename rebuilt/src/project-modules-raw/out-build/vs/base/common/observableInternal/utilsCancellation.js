// Module: out-build/vs/base/common/observableInternal/utilsCancellation.js
// Offset: 499005 (bundle byte offset)
// Size: 2571 bytes

y5e(), GnA(), f4t(), d4t(), GFn()
}
});
function F0(n){
  return new aoh(n)
}
function QnA(n){
  const e=Ua("promiseValue", {
    
  });
  return n.then(t=>{
    e.set({
      value:t
    }, void 0)
  }), e
}
function tp(...n){
  let e, t, i;
  return n.length===3?[e, t, i]=n:[t, i]=n, new OBe(new N4(e, void 0, i), t, i, ()=>OBe.globalTransaction, Xj)
}
function X2o(n, e, t){
  return new OBe(new N4(n.owner, n.debugName, n.debugReferenceFn??t), e, t, ()=>OBe.globalTransaction, n.equalsFn??Xj)
}
function m3(n, e){
  return new coh(typeof n=="string"?n:new N4(n, void 0, void 0), e)
}
function IY(n){
  return typeof n=="string"?new USc(n):new USc(void 0, n)
}
function QFn(n, e){
  let t=!1, i, r;
  return tp(s=>{
    const o=Oc(a=>{
      const l=n.read(a);
      t?(r&&clearTimeout(r),r=setTimeout(()=>{
        i=l,s()
      },e)):(t=!0,i=l)
    });
    return{
      dispose(){
        o.dispose(),t=!1,i=void 0
      }
    }
  }, ()=>t?i:n.get())
}
function jnA(n, e, t){
  const i=Ua("triggeredRecently", !1);
  let r;
  return t.add(n(()=>{
    i.set(!0, void 0), r&&clearTimeout(r), r=setTimeout(()=>{
      i.set(!1,void 0)
    }, e)
  })), i
}
function b4t(n){
  const e=new $Sc(!1, void 0);
  return n.addObserver(e), $i(()=>{
    n.removeObserver(e)
  })
}
function $gt(n, e){
  const t=new $Sc(!0, e);
  n.addObserver(t);
  try{
    t.beginUpdate(n)
  }
  finally{
    t.endUpdate(n)
  }
  return $i(()=>{
    n.removeObserver(t)
  })
}
function C5e(n, e){
  let t;
  return uF({
    owner:n, debugReferenceFn:e
  }, r=>(t=e(r, t), t))
}
function soh(n, e){
  let t;
  const i=IY("derivedObservableWithWritableCache"), r=Ro(n, s=>(i.read(s), t=e(s, t), t));
  return Object.assign(r, {
    clearCache:s=>{
      t=void 0,i.trigger(s)
    }, setCache:(s, o)=>{
      t=s,i.trigger(o)
    }
  })
}
function jFn(n, e, t, i){
  let r=new qSc(t, i);
  return uF({
    debugReferenceFn:t, owner:n, onLastObserverRemoved:()=>{
      r.dispose(),r=new qSc(t)
    }
  }, o=>(r.setItems(e.read(o)), r.getItems()))
}
function OSc(n, e){
  return e instanceof qgt?e.observable:tp(n, e.onDidChange, ()=>e.value)
}
function ooh(n, e){
  if(e.length===0)throw new _m;
  let t=!1, i;
  const r=tp(n, s=>{
    const o=new Ut;
    for(const a of e)o.add(_5e({
      debugName:()=>Wsh(r,new N4(n,void 0,void 0))+".updateLastChangedValue"
    }, l=>{
      t=!0,i=a.read(l),s()
    }));
    return o.add({
      dispose(){
        t=!1,i=void 0
      }
    }), o
  }, ()=>t?i:e[e.length-1].get());
  return r
}
function znA(n, e){
  return C5e(n, (t, i)=>i??e(t))
}
function p3(n, e){
  let t;
  return $nA({
    createEmptyChangeSummary:()=>({
      deltas:[],didChange:!1
    }), handleChange:(i, r)=>{
      if(i.didChange(n)){
        const s=i.change;
        s!==void 0&&r.deltas.push(s),r.didChange=!0
      }
      return!0
    }
  }, (i, r)=>{
    const s=n.read(i), o=t;
    r.didChange&&(t=s, e(s, o, r.deltas))
  })
}
function VnA(n, e){
  const t=new Ut, i=p3(n, (r, s, o)=>{
    t.clear(), e(r, s, o, t)
  });
  return{
    dispose(){
      i.dispose(),t.dispose()
    }
  }
}
var aoh, OBe, coh, USc, $Sc, qSc, qgt, Mbe=