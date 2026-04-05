// Module: out-build/vs/platform/tooltipService/common/tooltipService.js
// Offset: 956158 (bundle byte offset)
// Size: 10947 bytes

Er(), Wt(), rt(), kr(), ioA(), iw(), hs(), ml(), dr(), W4o="tooltipServicePipelines", nEc="lastShownTooltipTime", uhh=14400*1e3, dhh=336*60*60*1e3, hhh=3600*1e3, iEc=!1, rRe=!1, vft=!1, mhh=!1, tOn=[], FY=xi("tooltipService"), Q4o=class extends at{
  constructor(e, t){
    super(), this._storageService=e, this._commandService=t, this._sequenceConfigToSequenceHashMap=new Map, this._initializedState=!1, this._numActivePromises=0, this._pipelineConfigs=lhh, this._loadEventPipelineStates()
  }
  _initializeEmptyStates(){
    const e={
      state:[]
    };
    this._pipelineConfigs.forEach(t=>{
      e.state.push({
        name:t.name,disableStatus:void 0,createdAt:Date.now()
      })
    }), this.pipelinesState_persistent=e, this._initializeEmptySequenceState()
  }
  _initializeEmptySequenceState(){
    const e={
      sequences:[]
    };
    this._pipelineConfigs.forEach(t=>{
      t.showOn.sequences.forEach(i=>{
        e.sequences.push({
          activeEventIndices:[],sequenceHash:this._getSequenceConfigHash(i)
        })
      }),t.disableOn.sequences.forEach(i=>{
        e.sequences.push({
          activeEventIndices:[],sequenceHash:this._getSequenceConfigHash(i)
        })
      })
    }), this._sequenceStates_nonPersistent=e
  }
  _getSavedEventPipelineStateByName(e){
    if(vft)return;
    const t=this._storageService.get(W4o, -1);
    if(!t||t===""){
      rRe&&console.log("[Tooltip][Initializing Empty Pipeline State]"),this._initializeEmptyStates();
      return
    }
    return JSON.parse(t).state.find(s=>s.name===e)
  }
  _updatePipelineStateIfDisabledInBackgroundIsHigher(e){
    if(vft)return this.pipelinesState_persistent?.state.find(o=>o.name===e);
    if(this.pipelinesState_persistent===void 0)return;
    const t=this.pipelinesState_persistent.state.findIndex(o=>o.name===e);
    if(t===-1)return;
    const i=this._getSavedEventPipelineStateByName(e), r=i?.disableStatus?.disabledUntil, s=this.pipelinesState_persistent.state[t].disableStatus?.disabledUntil;
    return i===void 0||r===void 0?this.pipelinesState_persistent.state[t]:s!==void 0&&s>=r?this.pipelinesState_persistent.state[t]:(this.pipelinesState_persistent.state[t]=i, i)
  }
  _loadEventPipelineStates(){
    try{
      const e=this._storageService.get(W4o,-1);
      if(vft||!e||e===""){
        rRe&&console.log("[Tooltip][Initializing Empty Pipeline State]"),this._initializeEmptyStates();
        return
      }
      rRe&&console.log("[Tooltip][Loading Pipeline State]");
      const t=JSON.parse(e);
      rRe&&console.log("[Tooltip][Current Pipelines State]",t);
      const i={
        state:[]
      };
      for(let r of this._pipelineConfigs){
        const s=t.state.find(o=>o.name===r.name);
        s?i.state.push(s):i.state.push({
          name:r.name,disableStatus:void 0,createdAt:Date.now()
        })
      }
      this.pipelinesState_persistent=i
    }
    catch(e){
      rRe&&console.log("[Tooltip][Error Loading Pipeline State]",e),this._initializeEmptyStates()
    }
    finally{
      this._initializeEmptySequenceState(),this._initializedState=!0
    }
  }
  _getSequenceConfigHash(e){
    const t={
      ...e
    };
    return"debug"in t&&delete t.debug, VC(JSON.stringify(t))
  }
  _getSequenceState(e){
    const t={
      ...e
    };
    "debug"in t&&delete t.debug;
    let i=this._sequenceConfigToSequenceHashMap.get(t);
    return i===void 0&&(i=this._getSequenceConfigHash(e), this._sequenceConfigToSequenceHashMap.set(e, i)), this._sequenceStates_nonPersistent.sequences.find(r=>r.sequenceHash===i)
  }
  _resetSequence(e){
    const t=this._getSequenceState(e);
    t&&(t.activeEventIndices=[])
  }
  _savePipelineState(){
    vft||(rRe&&console.log("[Tooltip][Saving Pipeline State]", this.pipelinesState_persistent), this._storageService.store(W4o, JSON.stringify(this.pipelinesState_persistent), -1, 1), this._lastStateSaveTime=Date.now())
  }
  _maybeSavePipelineState(){
    this._lastStateSaveTime&&Date.now()-this._lastStateSaveTime<hhh||this._savePipelineState()
  }
  _triggerPipeline(e){
    if(this.pipelinesState_persistent===void 0)return;
    e.showOn.sequences.forEach(i=>this._resetSequence(i));
    const t=this.pipelinesState_persistent.state.find(i=>i.name===e.name);
    t&&(t.disableStatus={
      disabledUntil:Date.now()+e.showOn.gracePeriod_ms
    }, this._commandService.executeCommand(qCc, {
      location:e.popup.location,header:e.popup.header,subheader:e.popup.subheader,name:e.name
    }), console.log(`[Tooltip][Show Tooltip]
${e.popup.header}
---
${e.popup.subheader}`), iEc||this._storageService.store(nEc, new Date().getTime().toString(), -1, 1), vft||this._savePipelineState())
  }
  _disablePipeline(e){
    if(this.pipelinesState_persistent===void 0)return;
    const t=this._pipelineConfigs.find(s=>s.name===e);
    let i=this.pipelinesState_persistent.state.find(s=>s.name===e);
    if(!t||!i||(rRe&&console.log(`[Tooltip][Disable Tooltip]
${t.name}`), i=this._updatePipelineStateIfDisabledInBackgroundIsHigher(e), !i))return;
    const r=Date.now()+t.disableOn.gracePeriod_ms;
    i?.disableStatus!==void 0&&i.disableStatus.disabledUntil>r||(t.showOn.sequences.forEach(s=>this._resetSequence(s)), t.disableOn.sequences.forEach(s=>this._resetSequence(s)), i.disableStatus={
      disabledUntil:r
    }, this._savePipelineState())
  }
  _processEventInSequenceEvent(e, t){
    if(typeof t=="string")return{
      isEventAccepted:e.startsWith(t),shouldAllowMultipleOfCurrentEvent:!1,isSkippingAllowed:!1
    };
    if(t.length==2&&t[0]==="*"&&t[1]==="*")return{
      isEventAccepted:!0,shouldAllowMultipleOfCurrentEvent:!0,isSkippingAllowed:!1
    };
    if(t.length===3&&t.filter(a=>a==="*").length===2&&t.filter(a=>a==="_").length===1)return{
      isEventAccepted:!0,shouldAllowMultipleOfCurrentEvent:!0,isSkippingAllowed:!0
    };
    if(t.length===1&&t[0]==="*")return{
      isEventAccepted:!0,shouldAllowMultipleOfCurrentEvent:!1,isSkippingAllowed:!1
    };
    if(t.length==2&&t.filter(a=>a==="*").length===1&&t.filter(a=>a==="_").length===1)return{
      isEventAccepted:!0,shouldAllowMultipleOfCurrentEvent:!1,isSkippingAllowed:!0
    };
    const i=t.includes("!"), r=t.includes("*"), s=t.includes("_");
    return{
      isEventAccepted:i?!t.some(a=>e.startsWith(a)):t.some(a=>e.startsWith(a)),shouldAllowMultipleOfCurrentEvent:r,isSkippingAllowed:s
    }
  }
  _processEventInSequence(e, t, i, r, s){
    const o=this._getSequenceState(t);
    if(!o)return;
    o.activeEventIndices.length===0&&o.activeEventIndices.push(0), o.startTime&&Date.now()-o.startTime>t.timeout_ms&&this._resetSequence(t);
    const a=o.activeEventIndices;
    let l=!1, u=!1, d=[], m=[];
    for(let p=0;
    p<a.length;
    p++){
      const g=a[p],f=t.events[g],{
        shouldAllowMultipleOfCurrentEvent:A,isEventAccepted:w,isSkippingAllowed:C
      }
      =this._processEventInSequenceEvent(i,f);
      if(C){
        if(g+1===t.events.length){
          u=!0,r();
          break
        }
        a.includes(g+1)||a.push(g+1)
      }
      if(w&&(l=!0,o.startTime===void 0&&(o.activeEventIndices.length===1&&o.activeEventIndices[0]===0&&!A||o.activeEventIndices.some(x=>x>0))&&(o.startTime=Date.now()),o.activeEventIndices.includes(g+1)||(tOn.includes(e)&&t.debug&&console.log(`[Accepted Event ${i} as Event ${f}. Adding index ${g+1}]`),d.push(g+1)),A||m.push(p),g+1===t.events.length)){
        u=!0,r();
        break
      }
    }
    if(!u){
      m.sort((p,g)=>g-p);
      for(const p of m)o.activeEventIndices.splice(p,1),tOn.includes(e)&&t.debug&&console.log("[Finished Removing]",o.activeEventIndices);
      for(const p of d)o.activeEventIndices.includes(p)||o.activeEventIndices.push(p),tOn.includes(e)&&t.debug&&console.log("[Finished Adding]",o.activeEventIndices);
      l||(tOn.includes(e)&&t.debug&&console.log(`[Failed Sequence], ${JSON.stringify(t)}`),s())
    }
  }
  async _registerEvent(e){
    if(!(!this._initializedState||this.pipelinesState_persistent===void 0)){
      rRe&&console.log("[Tooltip][Registering event]",e);
      for(const t of this._pipelineConfigs){
        let i=this.pipelinesState_persistent.state.find(o=>o.name===t.name);
        if(i===void 0)continue;
        for(const o of t.disableOn.sequences)this._processEventInSequence(t.name,o,e,()=>{
          this._disablePipeline(t.name)
        },()=>{
          this._resetSequence(o)
        });
        if(i.disableStatus)if(i.disableStatus.disabledUntil<Date.now())i.disableStatus=void 0,t.showOn.sequences.forEach(o=>this._resetSequence(o));
        else continue;
        const r=i.createdAt?Date.now()-i.createdAt:0,s=t.initialDisabledPeriod_ms??dhh;
        if(!mhh&&r<=s){
          rRe&&console.log("[Tooltip][Initial Disable Period]",t.name,r,s);
          continue
        }
        for(const o of t.showOn.sequences)this._processEventInSequence(t.name,o,e,()=>{
          if(i=this._updatePipelineStateIfDisabledInBackgroundIsHigher(t.name),i?.disableStatus!==void 0&&i.disableStatus.disabledUntil>Date.now())return;
          const a=Number(this._storageService.get(nEc,-1)),l=Date.now()-a;
          (iEc||l>uhh||isNaN(l)||isNaN(a))&&this._triggerPipeline(t)
        },()=>{
          this._resetSequence(o)
        })
      }
      vft||this._maybeSavePipelineState()
    }
  }
  async registerEvent(e){
    if(this._numActivePromises>1e3){
      console.error("Too many active promises from tooltipservice. Possible leak");
      return
    }
    Promise.resolve().then(async()=>{
      const t=new Promise((i,r)=>setTimeout(()=>r(new Error("Timeout")),1));
      this._numActivePromises++,Promise.race([t,new Promise(i=>{
        this._registerEvent(e).then(()=>{
          i(!0)
        })
      })]).then(()=>{
        this._numActivePromises--
      }).catch(i=>{
        console.error(i),this._numActivePromises--
      })
    }).catch(t=>{
      console.error("tooltipservice timeout!")
    })
  }
  async registerUserCloseTooltip(e){
    if(this.pipelinesState_persistent===void 0)return;
    const t=this.pipelinesState_persistent.state.find(i=>i.name===e);
    t!==void 0&&(t.disableStatus={
      disabledUntil:Date.now()+10*365*24*60*60*1e3
    }, this._savePipelineState())
  }
}, Q4o=__decorate([__param(0, Hi), __param(1, fr)], Q4o), Vi(FY, Q4o, 1), Dt(class extends rn{
  constructor(){
    super({
      id:HCc,title:"Register Close Tooltip",category:"Tooltip",f1:!1
    })
  }
  run(n, e){
    const{
      tooltipName:t
    }
    =e;
    n.get(FY).registerUserCloseTooltip(t)
  }
})
}
});
function mh(n){
  if(!n||typeof n!="object"||n instanceof RegExp)return n;
  const e=Array.isArray(n)?[]:{
    
  };
  return Object.entries(n).forEach(([t, i])=>{
    e[t]=i&&typeof i=="object"?mh(i):i
  }), e
}
function roA(n){
  if(!n||typeof n!="object")return n;
  const e=[n];
  for(;
  e.length>0;
  ){
    const t=e.shift();
    Object.freeze(t);
    for(const i in t)if(oEc.call(t, i)){
      const r=t[i];
      typeof r=="object"&&!Object.isFrozen(r)&&!stA(r)&&e.push(r)
    }
  }
  return n
}
function yOt(n, e){
  return rEc(n, e, new Set)
}
function rEc(n, e, t){
  if(gA(n))return n;
  const i=e(n);
  if(typeof i<"u")return i;
  if(Array.isArray(n)){
    const r=[];
    for(const s of n)r.push(rEc(s, e, t));
    return r
  }
  if($g(n)){
    if(t.has(n))throw new Error("Cannot clone recursive data-structure");
    t.add(n);
    const r={
      
    };
    for(const s in n)oEc.call(n, s)&&(r[s]=rEc(n[s], e, t));
    return t.delete(n), r
  }
  return n
}
function f3(n, e, t=!0){
  return $g(n)?($g(e)&&Object.keys(e).forEach(i=>{
    i in n?t&&($g(n[i])&&$g(e[i])?f3(n[i], e[i], t):n[i]=e[i]):n[i]=e[i]
  }), n):e
}
function fv(n, e){
  if(n===e)return!0;
  if(n==null||e===null||e===void 0||typeof n!=typeof e||typeof n!="object"||Array.isArray(n)!==Array.isArray(e))return!1;
  let t, i;
  if(Array.isArray(n)){
    if(n.length!==e.length)return!1;
    for(t=0;
    t<n.length;
    t++)if(!fv(n[t], e[t]))return!1
  }
  else{
    const r=[];
    for(i in n)r.push(i);
    r.sort();
    const s=[];
    for(i in e)s.push(i);
    if(s.sort(), !fv(r, s))return!1;
    for(t=0;
    t<r.length;
    t++)if(!fv(n[r[t]], e[r[t]]))return!1
  }
  return!0
}
function j4o(n){
  const e=new Set;
  return JSON.stringify(n, (t, i)=>{
    if($g(i)||Array.isArray(i)){
      if(e.has(i))return"[Circular]";
      e.add(i)
    }
    return typeof i=="bigint"?`[BigInt ${i.toString()}]`:i
  })
}
function sEc(n, e){
  const t=Object.create(null);
  return!n||!e||Object.keys(e).forEach(r=>{
    const s=n[r], o=e[r];
    fv(s, o)||(t[r]=o)
  }), t
}
function wVe(n, e){
  const t=Object.create(null);
  for(const[i, r]of Object.entries(n))e(i, r)&&(t[i]=r);
  return t
}
function phh(n, e){
  const t={
    
  };
  for(const[i, r]of Object.entries(n))t[i]=e(r, i);
  return t
}
var oEc, np=