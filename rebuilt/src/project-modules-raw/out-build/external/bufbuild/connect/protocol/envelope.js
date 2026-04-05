// Module: out-build/external/bufbuild/connect/protocol/envelope.js
// Offset: 26662376 (bundle byte offset)
// Size: 1089 bytes

yM(), pL(), Bbi(), Rbi()
}
});
function INA(){
  const n=[], e=[];
  let t, i, r, s=new Promise((l, u)=>{
    i=l, r=u
  }), o=!1;
  function a(){
    for(const l of n.splice(0, n.length))l({
      done:!0,value:void 0
    })
  }
  return{
    close(){
      o=!0,a()
    }, async write(l){
      if(o)throw t??new Error("cannot write, WritableIterable already closed");
      const u=n.shift();
      if(u===void 0)e.push(l);
      else if(u({
        done:!1,value:l
      }),n.length>0)return;
      const d=e.length+1;
      for(let m=0;
      m<d;
      m++)await s
    }, [Symbol.asyncIterator](){
      return{
        next(){
          i(),s=new Promise((m,p)=>{
            i=m,r=p
          });
          const l=e.shift();
          if(l!==void 0)return Promise.resolve({
            done:!1,value:l
          });
          if(o)return Promise.resolve({
            done:!0,value:void 0
          });
          let u;
          const d=new Promise(m=>u=m);
          return n.push(u),d
        },throw(l){
          return t=l,o=!0,e.splice(0,e.length),s.catch(()=>{
            
          }),r(t),a(),Promise.resolve({
            done:!0,value:void 0
          })
        },return(){
          return o=!0,e.splice(0,e.length),i(),s=Promise.reject(new Error("cannot write, consumer called return")),s.catch(()=>{
            
          }),a(),Promise.resolve({
            done:!0,value:void 0
          })
        }
      }
    }
  }
}
async function*DNA(n){
  yield*n
}
var Ett=