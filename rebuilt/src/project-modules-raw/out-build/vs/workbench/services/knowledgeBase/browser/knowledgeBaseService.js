// Module: out-build/vs/workbench/services/knowledgeBase/browser/knowledgeBaseService.js
// Offset: 30366480 (bundle byte offset)
// Size: 6465 bytes

Wt(), rt(), Er(), Vw(), gT(), sB(), Dd(), Rb(), t0a(), yn(), jkt=xi("knowledgeBaseService"), n0a=class extends at{
  constructor(e, t, i, r, s){
    super(), this.gitContextService=e, this.cursorAuthenticationService=t, this.reactiveStorageService=i, this.aiClientService=r, this.aiService=s, this._onDidChangeItems=this._register(new Qe), this.onDidChangeItems=this._onDidChangeItems.event, this._cachedGitUpstreamURL=void 0, [this.state, this.setState]=v3({
      items:[],isLoading:!1
    }), this.cursorAuthenticationService.addLoginChangedListener(async()=>{
      this._cachedGitUpstreamURL=void 0,await this.refresh(!0)
    }), this.refresh(!0), this.maybeAddOldUserRules()
  }
  get items(){
    return this.state.items
  }
  get isLoading(){
    return this.state.isLoading
  }
  dispose(){
    super.dispose()
  }
  async getGitUpstreamUrl(){
    if(this._cachedGitUpstreamURL===void 0)try{
      const e=await this.gitContextService.getGitUpstreamURL();
      this._cachedGitUpstreamURL=e
    }
    catch(e){
      console.error("[KnowledgeBaseService] Error fetching git upstream URL:",e),this._cachedGitUpstreamURL=void 0
    }
    return this._cachedGitUpstreamURL??void 0
  }
  async refresh(e=!1){
    this.setState("isLoading", !0);
    try{
      const t=await this.aiClientService.aiClient(),i=await this.getGitUpstreamUrl(),s=(await t.knowledgeBaseList({
        gitOrigin:i,limit:100
      })).allResults.map(o=>({
        id:o.id??"",title:o.title??"",knowledge:o.knowledge??"",createdAt:o.createdAt??void 0,isGenerated:o.isGenerated??!1
      }));
      this.setState({
        items:s,isLoading:!1
      }),this.notifyItemsChanged(),console.log("[KnowledgeBaseService] Successfully refreshed knowledge base:",s.length,"items")
    }
    catch(t){
      console.error("[KnowledgeBaseService] Failed to fetch knowledge:",t),this.setState("isLoading",!1)
    }
  }
  async addItem(e, t, i){
    try{
      const r=await this.aiClientService.aiClient(),s=await this.getGitUpstreamUrl(),o=await r.knowledgeBaseAdd({
        title:e.trim()||"[Untitled]",knowledge:t,gitOrigin:s,composerId:i
      }),a={
        id:o.id??"",title:e.trim()||"[Untitled]",knowledge:t,createdAt:new Date().toISOString(),isGenerated:!!i
      };
      return this.setState("items",l=>[a,...l]),this.notifyItemsChanged(),console.log("[KnowledgeBaseService] Successfully added knowledge item:",o.id),o.id
    }
    catch(r){
      throw console.error("[KnowledgeBaseService] Failed to add knowledge:",r),r
    }
  }
  async updateItem(e, t, i){
    const r=this.state.items.find(o=>o.id===e);
    if(!r)throw new Error("Knowledge item not found");
    const s={
      ...r
    };
    this.setState("items", o=>o.map(a=>a.id===e?{
      ...a,title:t.trim()||"[Untitled]",knowledge:i
    }
    :a)), this.notifyItemsChanged();
    try{
      if(!(await(await this.aiClientService.aiClient()).knowledgeBaseUpdate({
        id:e,title:t.trim()||"[Untitled]",knowledge:i
      })).success)throw new Error("Failed to update knowledge item");
      console.log("[KnowledgeBaseService] Successfully updated knowledge item:",e)
    }
    catch(o){
      throw console.error("[KnowledgeBaseService] Failed to update knowledge:",o),this.setState("items",a=>a.map(l=>l.id===e?s:l)),this.notifyItemsChanged(),o
    }
  }
  async removeItem(e){
    const t=this.state.items.find(i=>i.id===e);
    if(t){
      this.setState("items",i=>i.filter(r=>r.id!==e)),this.notifyItemsChanged();
      try{
        await(await this.aiClientService.aiClient()).knowledgeBaseRemove({
          id:e
        }),console.log("[KnowledgeBaseService] Successfully removed knowledge item:",e)
      }
      catch(i){
        throw console.error("[KnowledgeBaseService] Failed to delete knowledge:",i),this.setState("items",r=>[...r,t].sort((s,o)=>(s.createdAt??"")<(o.createdAt??"")?1:-1)),this.notifyItemsChanged(),i
      }
    }
  }
  async removeAll(){
    const e=[...this.state.items];
    if(e.length!==0){
      this.setState("items",[]),this.notifyItemsChanged();
      try{
        const t=await this.aiClientService.aiClient();
        await Promise.all(e.map(i=>t.knowledgeBaseRemove({
          id:i.id
        }))),console.log("[KnowledgeBaseService] Successfully removed all knowledge items")
      }
      catch(t){
        throw console.error("[KnowledgeBaseService] Failed to delete all knowledge:",t),this.setState("items",e),this.notifyItemsChanged(),t
      }
    }
  }
  addOptimisticMemory(e, t){
    const r={
      id:`temp-memory-${Date.now()}`,title:"Generated Memory",knowledge:e,createdAt:new Date().toISOString(),isGenerated:!0
    };
    this.setState("items", s=>[r, ...s]), this.notifyItemsChanged()
  }
  notifyItemsChanged(){
    this._onDidChangeItems.fire(this.state.items.map(e=>({
      ...e
    })))
  }
  async maybeAddOldUserRules(){
    const e=this.aiService.getPersonalContext();
    if(!(!e||e.trim()===""))try{
      const t=await this.aiClientService.aiClient(),i=await this.getGitUpstreamUrl();
      await t.knowledgeBaseAdd({
        title:"Migrated User Rules",knowledge:e,gitOrigin:i
      }),console.log("[KnowledgeBaseService Migration] Successfully migrated old user rules")
    }
    catch(t){
      console.error("[KnowledgeBaseService Migration] Failed to migrate old user rules:",t)
    }
  }
}, n0a=__decorate([__param(0, AE), __param(1, wg), __param(2, ku), __param(3, Rwi), __param(4, Jv)], n0a), Vi(jkt, n0a, 1)
}
});
function sty(n){
  try{
    return sYg(n), !0
  }
  catch{
    return!1
  }
}
async function oty(n, e, t, i={
  
}){
  const r=je.file(n.path), s=i.maxDimension??pSf;
  let o;
  try{
    o=(await t(r)).value.buffer
  }
  catch(l){
    throw console.error("[generateImageProtos] Image file not found or could not be read:", n.path, l), e.forEach(u=>u()), new Error(`Image selected in conversation was not found on disk: ${n.path}`)
  }
  const a=document.createElement("canvas");
  try{
    const l=new Image, u=async(p, g=1)=>new Promise((f, A)=>{
      l.src=og.uriToBrowserUri(r).toString(!0),l.onload=function(){
        let w=Math.floor(l.width*g),C=Math.floor(l.height*g);
        const x=Math.max(w/s,C/s);
        if(x>1&&(w=Math.floor(w/x),C=Math.floor(C/x)),g===1&&x<=1&&p.length<=i0a&&sty(p)){
          f({
            bytes:p,width:l.width,height:l.height
          });
          return
        }
        a.width=w,a.height=C,a.getContext("2d")?.drawImage(l,0,0,w,C);
        const R=a.toDataURL("image/jpeg",.9).split(",")[1],N=atob(R);
        let M=new Uint8Array(N.length);
        for(let O=0;
        O<N.length;
        O++)M[O]=N.charCodeAt(O);
        f({
          bytes:M,width:w,height:C
        })
      },l.onerror=A
    });
    let d=await u(o);
    if(d.bytes.length>i0a){
      let p=.9;
      for(;
      d.bytes.length>i0a&&p>.1;
      )d=await u(o,p),p*=.8
    }
    return l.remove(), new ehe({
      data:d.bytes,dimension:{
        width:d.width,height:d.height
      },uuid:n.uuid,taskSpecificDescription:n.taskSpecificDescription
    })
  }
  finally{
    a.remove()
  }
}
async function Lwi(n, e, t, i){
  const r=amu.get(n);
  if(r){
    const l=r.removeCallbacks;
    return l.add(e), (async function(){
      try{
        const d=await r.data;
        return n.taskSpecificDescription&&(d.taskSpecificDescription=n.taskSpecificDescription),d
      }
      finally{
        l.delete(e)
      }
    })()
  }
  const s=new Set([e]), o={
    data:oty(n, s, t, {
      maxDimension:i
    }), removeCallbacks:s
  };
  return amu.set(n, o), (async function(){
    try{
      return await o.data
    }
    finally{
      o.removeCallbacks.delete(e)
    }
  })()
}
var i0a, pSf, amu, Nwi=