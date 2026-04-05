// Module: out-build/vs/base/common/symbols.js
// Offset: 425780 (bundle byte offset)
// Size: 2490 bytes

Sgt=Symbol("MicrotaskDelay")
}
});
function kgt(n){
  return!!n&&typeof n.then=="function"
}
function dw(n){
  const e=new Wc, t=n(e.token);
  let i=!1;
  const r=new Promise((s, o)=>{
    const a=e.token.onCancellationRequested(()=>{
      i=!0,a.dispose(),o(new vf)
    });
    Promise.resolve(t).then(l=>{
      a.dispose(),e.dispose(),i?Ste(l)&&l.dispose():s(l)
    }, l=>{
      a.dispose(),e.dispose(),o(l)
    })
  });
  return new class{
    cancel(){
      e.cancel(),e.dispose()
    }
    then(s, o){
      return r.then(s,o)
    }
    catch(s){
      return this.then(void 0,s)
    }
    finally(s){
      return r.finally(s)
    }
  }
}
function WP(n, e, t){
  return new Promise((i, r)=>{
    const s=e.onCancellationRequested(()=>{
      s.dispose(),i(t)
    });
    n.then(i, r).finally(()=>s.dispose())
  })
}
function Egt(n, e){
  return new Promise((t, i)=>{
    const r=e.onCancellationRequested(()=>{
      r.dispose(),i(new vf)
    });
    n.then(t, i).finally(()=>r.dispose())
  })
}
async function Rrh(n){
  let e=-1;
  const t=n.map((i, r)=>i.then(s=>(e=r, s)));
  try{
    return await Promise.race(t)
  }
  finally{
    n.forEach((i, r)=>{
      r!==e&&i.cancel()
    })
  }
}
function lW(n, e, t){
  let i;
  const r=setTimeout(()=>{
    i?.(void 0), t?.()
  }, e);
  return Promise.race([n.finally(()=>clearTimeout(r)), new Promise(s=>i=s)])
}
function PBe(){
  let n, e;
  return{
    promise:new Promise((i, r)=>{
      n=i,e=r
    }), resolve:n, reject:e
  }
}
function Af(n, e){
  return e?new Promise((t, i)=>{
    const r=setTimeout(()=>{
      s.dispose(),t()
    }, n), s=e.onCancellationRequested(()=>{
      clearTimeout(r),s.dispose(),i(new vf)
    })
  }):dw(t=>Af(n, t))
}
function nC(n, e=0, t){
  const i=setTimeout(()=>{
    n(), t&&r.dispose()
  }, e), r=$i(()=>{
    clearTimeout(i), t?.delete(r)
  });
  return t?.add(r), r
}
function Prh(n){
  const e=[];
  let t=0;
  const i=n.length;
  function r(){
    return t<i?n[t++]():null
  }
  function s(o){
    o!=null&&e.push(o);
    const a=r();
    return a?a.then(s):Promise.resolve(e)
  }
  return Promise.resolve(null).then(s)
}
function f2o(n, e=i=>!!i, t=null){
  let i=0;
  const r=n.length, s=()=>{
    if(i>=r)return Promise.resolve(t);
    const o=n[i++];
    return Promise.resolve(o()).then(l=>e(l)?Promise.resolve(l):s())
  };
  return s()
}
async function bnA(n, e, t){
  let i;
  for(let r=0;
  r<t;
  r++)try{
    return await n()
  }
  catch(s){
    i=s, await Af(e)
  }
  throw i
}
function vnA(n){
  const e=new Wc, t=n(e.token);
  return new Hrh(e, async i=>{
    const r=e.token.onCancellationRequested(()=>{
      r.dispose(),e.dispose(),i.reject(new vf)
    });
    try{
      for await(const s of t){
        if(e.token.isCancellationRequested)return;
        i.emitOne(s)
      }
      r.dispose(),e.dispose()
    }
    catch(s){
      r.dispose(),e.dispose(),i.reject(s)
    }
  })
}
var fde, bde, KFt, Lrh, Nrh, Nv, L4, x6, mFn, wSe, yoe, Mrh, YFt, O$, woe, Hu, ZFt, Mze, pFn, wCc, gFn, b2o, Frh, Orh, wy, ib, Urh, $rh, qrh, IH, Hrh, v2o, vr=