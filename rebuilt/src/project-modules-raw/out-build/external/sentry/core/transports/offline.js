// Module: out-build/external/sentry/core/transports/offline.js
// Offset: 101829 (bundle byte offset)
// Size: 1096 bytes

ZT(), US(), lde(), mwc(), DNo=100, BNo=5e3, jYd=36e5
}
});
function zYd(n, e){
  let t;
  return bBe(n, (i, r)=>(e.includes(r)&&(t=Array.isArray(i)?i[1]:void 0), !!t)), t
}
function nVv(n, e){
  return t=>{
    const i=n(t);
    return{
      ...i,send:async r=>{
        const s=zYd(r,["event","transaction","profile","replay_event"]);
        return s&&(s.release=e),i.send(r)
      }
    }
  }
}
function iVv(n, e){
  return fte(e?{
    ...n[0], dsn:e
  }
  :n[0], n[1])
}
function VYd(n, e){
  return t=>{
    const i=n(t), r=new Map;
    function s(l, u){
      const d=u?`${l}:${u}`:l;
      let m=r.get(d);
      if(!m){
        const p=KAc(l);
        if(!p)return;
        const g=Hyc(p,t.tunnel);
        m=u?nVv(n,u)({
          ...t,url:g
        }):n({
          ...t,url:g
        }),r.set(d,m)
      }
      return[l,m]
    }
    async function o(l){
      function u(g){
        const f=g?.length?g:["event"];
        return zYd(l,f)
      }
      const d=e({
        envelope:l,getEvent:u
      }).map(g=>typeof g=="string"?s(g,void 0):s(g.dsn,g.release)).filter(g=>!!g),m=d.length?d:[["",i]];
      return(await Promise.all(m.map(([g,f])=>f.send(iVv(l,g)))))[0]
    }
    async function a(l){
      const u=[...r.values(),i];
      return(await Promise.all(u.map(m=>m.flush(l)))).every(m=>m)
    }
    return{
      send:o,flush:a
    }
  }
}
var rVv=