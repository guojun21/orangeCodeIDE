// Module: out-build/vs/workbench/services/configurationResolver/common/configurationResolverExpression.js
// Offset: 30163564 (bundle byte offset)
// Size: 2414 bytes

Ef(), _r(), Oye=class pcd{
  static{
    this.VARIABLE_LHS="${"
  }
  constructor(e){
    this.locations=new Map, typeof e=="string"?(this.stringRoot=!0, this.root={
      value:e
    }):(this.stringRoot=!1, this.root=structuredClone(e))
  }
  static parse(e){
    if(e instanceof pcd)return e;
    const t=new pcd(e);
    return t.applyPlatformSpecificKeys(), t.parseObject(t.root), t
  }
  applyPlatformSpecificKeys(){
    const e=this.root, t=Sc?"windows":Fs?"osx":xv?"linux":void 0;
    t===void 0||!e||typeof e!="object"||!e.hasOwnProperty(t)||(Object.keys(e[t]).forEach(i=>e[i]=e[t][i]), delete e.windows, delete e.osx, delete e.linux)
  }
  parseVariable(e, t){
    if(e[t]!=="$"||e[t+1]!=="{")return;
    let i=t+2, r=1;
    for(;
    i<e.length;
    ){
      if(e[i]==="{")r++;
      else if(e[i]==="}"&&(r--,r===0))break;
      i++
    }
    if(r!==0)return;
    const s=e.slice(t, i+1), o=e.substring(t+2, i), a=o.indexOf(":");
    return a===-1?{
      replacement:{
        id:s,name:o,inner:o
      },end:i
    }
    :{
      replacement:{
        id:s,inner:o,name:o.slice(0,a),arg:o.slice(a+1)
      },end:i
    }
  }
  parseObject(e){
    if(!(typeof e!="object"||e===null)){
      if(Array.isArray(e)){
        for(let t=0;
        t<e.length;
        t++){
          const i=e[t];
          typeof i=="string"?this.parseString(e,t,i):this.parseObject(i)
        }
        return
      }
      for(const[t,i]of Object.entries(e))typeof i=="string"?this.parseString(e,t,i):this.parseObject(i)
    }
  }
  parseString(e, t, i){
    let r=0;
    for(;
    r<i.length;
    ){
      const s=i.indexOf("${",r);
      if(s===-1)break;
      const o=this.parseVariable(i,s);
      if(o){
        const a=this.locations.get(o.replacement.id)||{
          locations:[],replacement:o.replacement
        };
        a.locations.push({
          object:e,propertyName:t
        }),this.locations.set(o.replacement.id,a),r=o.end+1
      }
      else r=s+2
    }
  }
  unresolved(){
    return bl.map(bl.filter(this.locations.values(), e=>e.resolved===void 0), e=>e.replacement)
  }
  resolved(){
    return bl.map(bl.filter(this.locations.values(), e=>!!e.resolved), e=>[e.replacement, e.resolved])
  }
  resolve(e, t){
    typeof t!="object"&&(t={
      value:String(t)
    });
    const i=this.locations.get(e.id);
    if(i){
      if(t.value!==void 0)for(const{
        object:r,propertyName:s
      }
      of i.locations||[]){
        const o=r[s].replaceAll(e.id,t.value);
        r[s]=o
      }
      i.resolved=t
    }
  }
  toObject(){
    return this.stringRoot?this.root.value:this.root
  }
}
}
});
function Iey(n, e){
  return Dey(n["inspect-extensions"], n["inspect-brk-extensions"], 5870, e, n.debugId, n.extensionEnvironment)
}
function Dey(n, e, t, i, r, s){
  const a=Number(e||n)||(i?null:t), l=a?!!e:!1;
  let u;
  if(s)try{
    u=JSON.parse(s)
  }
  catch{
    
  }
  return{
    port:a, break:l, debugId:r, env:u
  }
}
var Kpn, uB, qhu=