// Module: out-build/external/sentry/core/utils/syncpromise.js
// Offset: 66328 (bundle byte offset)
// Size: 1239 bytes

h9(), yNo=0, Tyc=1, Iyc=2, wNo=class Zod{
  constructor(e){
    this._state=yNo, this._handlers=[], this._runExecutor(e)
  }
  then(e, t){
    return new Zod((i, r)=>{
      this._handlers.push([!1,s=>{
        if(!e)i(s);
        else try{
          i(e(s))
        }
        catch(o){
          r(o)
        }
      },s=>{
        if(!t)r(s);
        else try{
          i(t(s))
        }
        catch(o){
          r(o)
        }
      }
      ]),this._executeHandlers()
    })
  }
  catch(e){
    return this.then(t=>t, e)
  }
  finally(e){
    return new Zod((t, i)=>{
      let r,s;
      return this.then(o=>{
        s=!1,r=o,e&&e()
      },o=>{
        s=!0,r=o,e&&e()
      }).then(()=>{
        if(s){
          i(r);
          return
        }
        t(r)
      })
    })
  }
  _executeHandlers(){
    if(this._state===yNo)return;
    const e=this._handlers.slice();
    this._handlers=[], e.forEach(t=>{
      t[0]||(this._state===Tyc&&t[1](this._value),this._state===Iyc&&t[2](this._value),t[0]=!0)
    })
  }
  _runExecutor(e){
    const t=(s, o)=>{
      if(this._state===yNo){
        if(Zje(o)){
          o.then(i,r);
          return
        }
        this._state=s,this._value=o,this._executeHandlers()
      }
    }, i=s=>{
      t(Tyc,s)
    }, r=s=>{
      t(Iyc,s)
    };
    try{
      e(i,r)
    }
    catch(s){
      r(s)
    }
  }
}
}
});
function sYd(n, e, t, i=0){
  try{
    const r=Dyc(e, t, n, i);
    return Zje(r)?r:e5e(r)
  }
  catch(r){
    return ANo(r)
  }
}
function Dyc(n, e, t, i){
  const r=t[i];
  if(!n||!r)return n;
  const s=r({
    ...n
  }, e);
  return Lg&&s===null&&Jo.log(`Event processor "${r.id||"?"}" dropped event`), Zje(s)?s.then(o=>Dyc(o, e, t, i+1)):Dyc(s, e, t, i+1)
}
var oYd=