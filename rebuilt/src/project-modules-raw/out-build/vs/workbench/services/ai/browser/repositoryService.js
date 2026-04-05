// Module: out-build/vs/workbench/services/ai/browser/repositoryService.js
// Offset: 28418200 (bundle byte offset)
// Size: 20146 bytes

Icu(), jY(), oMe(), H6(), yn(), iR(), Yn(), Er(), Wt(), ns(), nA(), Cie(), Rb(), mD(), qp(), rt(), Bc(), hd(), td(), dr(), ps(), oB(), aP(), w8A(), mie(), wE(), ml(), hD(), Ei(), Hl(), d2(), Pa(), Tw(), rf(), vE(), kr(), zk(), (function(n){
  n[n.INDEX_MODIFIED=0]="INDEX_MODIFIED", n[n.INDEX_ADDED=1]="INDEX_ADDED", n[n.INDEX_DELETED=2]="INDEX_DELETED", n[n.INDEX_RENAMED=3]="INDEX_RENAMED", n[n.INDEX_COPIED=4]="INDEX_COPIED", n[n.MODIFIED=5]="MODIFIED", n[n.DELETED=6]="DELETED", n[n.UNTRACKED=7]="UNTRACKED", n[n.IGNORED=8]="IGNORED", n[n.INTENT_TO_ADD=9]="INTENT_TO_ADD", n[n.ADDED_BY_US=10]="ADDED_BY_US", n[n.ADDED_BY_THEM=11]="ADDED_BY_THEM", n[n.DELETED_BY_US=12]="DELETED_BY_US", n[n.DELETED_BY_THEM=13]="DELETED_BY_THEM", n[n.BOTH_ADDED=14]="BOTH_ADDED", n[n.BOTH_DELETED=15]="BOTH_DELETED", n[n.BOTH_MODIFIED=16]="BOTH_MODIFIED"
})(Inf||(Inf={
  
})), oX=xi("repositoryService"), CAa=class extends at{
  get indexingGrepEnabled(){
    return this._indexingGrepEnabled.get()
  }
  get primaryQueryOnlyIndex(){
    return this._primaryQueryOnlyIndex
  }
  setQueryOnlyIndex(e){
    this._primaryQueryOnlyIndex=e
  }
  get suppressFileExtensionRecommendations(){
    return Date.now()-(this._suppressFileExtensionRecommendationsStart??0)<2e3
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    super(), this._cursorAuthenticationService=e, this.cursorCredsService=t, this.fileService=i, this.telemetryService=r, this.textModelService=s, this.workspaceContextService=o, this.serverConfigService=a, this.instantiationService=l, this.modelService=u, this.configurationService=d, this.storageService=m, this.structuredLogService=p, this.clearPollingIntervalFunction=()=>{
      
    }, this.clearRepositoryIntervalFunction=()=>{
      
    }, this.diffProvider=null, this.indexingProvider=void 0, this.grepProvider=void 0, this._onDidRequestRepoIndex=this._register(new Qe), this.onDidRequestRepoIndex=this._onDidRequestRepoIndex.event, this._onDidRequestRepoInterrupt=this._register(new Qe), this.onDidRequestRepoInterrupt=this._onDidRequestRepoInterrupt.event, this._onDidChangeIndexingStatus=this._register(new Qe), this.onDidChangeIndexingStatus=this._onDidChangeIndexingStatus.event, this.isUriCursorIgnored=()=>!1, this.repositoryIndexingError=this._register(new j_(void 0)), this.repositoryIndexingStatus=this._register(new j_({
      case:"loading"
    })), this.repositoryIndexingJobs=this._register(new j_({
      
    })), this.repositoryIndexingProgress=this._register(new j_(void 0)), this.indexingData=this._register(hm(this.storageService, "indexingData")), this._indexingGrepEnabled=this._register(hm(this.storageService, "indexingGrepEnabled")), this.onDidChangeIndexingGrepEnabled=In.fromObservable(this._indexingGrepEnabled), this.queryBuilder=this.instantiationService.createInstance(yV), this.repositoryClientPromise=this.instantiationService.createInstance(YS, {
      service:bAa
    }), this.aiServerClientPromise=this.instantiationService.createInstance(YS, {
      service:Bce
    }), In.fromObservableLight(this.indexingData)(()=>{
      this.indexMainLocalRepository()
    }), this.onDidChangeIndexingStatus(async()=>{
      const g=await this.indexingProvider?.getGlobalStatus();
      if(g!==void 0)switch(g.case==="synced"&&(this.repositoryLastSyncedTime=Date.now()),this.repositoryIndexingStatus.change(g),g.case){
        case"not-indexed":break;
        case"not-auto-indexing":break;
        case"error":{
          this.repositoryIndexingError.change(g.error);
          break
        }
        case"indexing-setup":{
          if(await this.getNewRepoInfo()===void 0){
            this.repositoryIndexingError.change(void 0);
            return
          }
          break
        }
        case"indexing-init-from-similar-codebase":{
          if(await this.getNewRepoInfo()===void 0){
            this.repositoryIndexingError.change(void 0);
            return
          }
          break
        }
        case"indexing":{
          const f=await this.getNewRepoInfo();
          if(f===void 0){
            this.repositoryIndexingError.change(void 0);
            return
          }
          const A=f.repoName,w=await this.indexingProvider?.getCodebases();
          if(w===void 0)return;
          const C={
            
          };
          let x=0;
          for(const I of w){
            const B=await this.indexingProvider?.getIndexingProgress(I);
            if(B===void 0)continue;
            const R=await this.indexingProvider?.getCurrentJobs(I);
            R!==void 0&&(B>x&&(x=B),C[I]=R)
          }
          this.repositoryIndexingProgress.change({
            progress:x
          }),this.repositoryIndexingJobs.change(C);
          break
        }
        case"synced":break;
        case"paused":break;
        case"loading":break;
        default:return g
      }
    })
  }
  async getEmbeddableFilesPath(){
    const e=await this.indexingProvider?.getEmbeddableFilesPath();
    return e?je.from(e):void 0
  }
  setIsUriCursorIgnored(e){
    this.isUriCursorIgnored=e
  }
  registerIndexingProvider(e){
    this.indexingProvider=e
  }
  unregisterIndexingProvider(){
    this.indexingProvider=void 0
  }
  registerGrepProvider(e){
    this.grepProvider=e
  }
  unregisterGrepProvider(){
    this.grepProvider=void 0
  }
  fireOnDidChangeIndexingStatus(){
    this._onDidChangeIndexingStatus.fire()
  }
  unregisterOnDidChangeIndexingStatus(){
    
  }
  async getNewRepoInfo(){
    const e=Date.now();
    for(;
    !this.indexingProvider&&Date.now()-e<500;
    )await new Promise(o=>setTimeout(o, 100));
    if(!this.isIndexedMainLocalRepository()){
      if(this.primaryQueryOnlyIndex)return this.primaryQueryOnlyIndex.repositoryInfo;
      const o=this.indexingProvider?.getQueryOnlyRepoInfo(),a=5e3;
      let l;
      const u=o?new Promise(d=>{
        l=setTimeout(()=>{
          this.structuredLogService.warn("composer","IndexingProvider.getQueryOnlyRepoInfo timed out",{
            operation:"IndexingProvider.getQueryOnlyRepoInfo",timeoutMs:a,indexingProviderRegistered:this.indexingProvider!==void 0
          }),d(void 0)
        },a)
      }):void 0;
      if(this.queryOnlyIndexFromIndexProvider=o?await(async()=>{
        try{
          return await Promise.race([o,u])
        }
        finally{
          l!==void 0&&clearTimeout(l)
        }
      })():void 0,this.queryOnlyIndexFromIndexProvider)return this.queryOnlyIndexFromIndexProvider.repositoryInfo
    }
    const t=this.indexingProvider?.getRepoInfo(), i=5e3;
    let r;
    const s=t?new Promise(o=>{
      r=setTimeout(()=>{
        this.structuredLogService.warn("composer","IndexingProvider.getRepoInfo timed out",{
          operation:"IndexingProvider.getRepoInfo",timeoutMs:i,indexingProviderRegistered:this.indexingProvider!==void 0
        }),o(void 0)
      },i)
    }):void 0;
    return t?await(async()=>{
      try{
        return await Promise.race([t,s])
      }
      finally{
        r!==void 0&&clearTimeout(r)
      }
    })():void 0
  }
  async getPathEncryptionKey(){
    const e=Date.now();
    for(;
    !this.indexingProvider&&Date.now()-e<5e3;
    )await new Promise(t=>setTimeout(t, 100));
    return await this.indexingProvider?.getPathEncryptionKey()
  }
  isIndexedRepository(){
    return this.isIndexedMainLocalRepository()||this.primaryQueryOnlyIndex!==void 0||this.queryOnlyIndexFromIndexProvider!==void 0
  }
  getQueryOnlyIndex(){
    let e=this.primaryQueryOnlyIndex;
    return e===void 0&&(e=this.queryOnlyIndexFromIndexProvider), e
  }
  getOverridePathEncryptionKey(e){
    const t=this.getQueryOnlyIndex();
    if(t!==void 0&&e.repoName===t.repositoryInfo.repoName&&e.repoOwner===t.repositoryInfo.repoOwner)return t.pathEncryptionKey
  }
  maybeGetQueryOnlyRepoAccess(e){
    const t=this.getQueryOnlyIndex();
    if(!(t===void 0||e===void 0)&&e.repoName===t.repositoryInfo.repoName&&e.repoOwner===t.repositoryInfo.repoOwner)return t.queryOnlyRepoAccess
  }
  getIndexingProgress(){
    return this.repositoryIndexingStatus.value?.case==="synced"?1:this.repositoryIndexingProgress.value?.progress??0
  }
  getIndexingPhase(){
    return this.repositoryIndexingStatus.value?.case
  }
  getNumFilesInUnindexedRepo(){
    return this.repositoryIndexingStatus.value?.case==="not-auto-indexing"?this.repositoryIndexingStatus.value?.numFiles:void 0
  }
  isIndexedMainLocalRepository(e){
    const t=e?.indexingProgressThreshold??.8;
    if(this.getIndexingProgress()>=t)return!0;
    {
      const i=this.repositoryIndexingStatus.value?.case;
      if(["indexing-setup","indexing","indexing-init-from-similar-codebase","loading","out-of-sync","creating-index","error"].includes(i)){
        if(i==="indexing"&&(this.repositoryIndexingProgress.value?.progress??0)<.5)return!1;
        const s=this.repositoryLastSyncedTime;
        if(s!==void 0&&Date.now()-s<1e3*60*60)return!0
      }
      return!1
    }
  }
  async indexMainRepository(e=!1){
    if(!this._cursorAuthenticationService.isAuthenticated()){
      this.repositoryIndexingStatus.change({
        case:"error",error:"Not authenticated"
      });
      return
    }
    return this.indexMainLocalRepository()
  }
  async deleteMainLocalRepository(){
    const e=await this.getNewRepoInfo();
    if(e===void 0)return;
    await(await this.repositoryClientPromise.get()).removeRepositoryV2(new YRc({
      repository:e
    }), {
      headers:Kb(Wr())
    }), this._onDidRequestRepoInterrupt.fire(!1), this.repositoryIndexingStatus.change({
      case:"not-indexed"
    }), this.repositoryIndexingProgress.change({
      progress:0
    }), this.repositoryIndexingJobs.change({
      
    })
  }
  async pauseIndexingJob(){
    this._onDidRequestRepoInterrupt.fire(!0)
  }
  registerDiffProvider(e){
    this.diffProvider=e
  }
  dispose(){
    super.dispose(), this.clearPollingIntervalFunction(), this.clearRepositoryIntervalFunction()
  }
  repositoryToInfo(e){
    const t=e.provider.remotes;
    if(t===void 0)return null;
    if(t.length===0)throw new Error("No remotes found");
    const r=t[0].fetchUrl?.split(/\/|\:/);
    if(r===void 0)throw new Error("Could not parse origin url");
    const s=r[r.length-2], o=r[r.length-1].split(".")[0];
    if(s===void 0||o===void 0)throw new Error("Could not parse repo owner and name");
    return{
      id:e.id,repoName:o,repoOwner:s,relativeWorkspacePath:C8A(e)
    }
  }
  async codeBlockFromRemote(e){
    const t=e.relativeWorkspacePath, i=this.workspaceContextService.resolveRelativePath(t);
    let r, s=null;
    try{
      this._suppressFileExtensionRecommendationsStart=Date.now(),r=await this.textModelService.createModelReference(i,!0);
      const o=e.range;
      if(o===void 0||o.startPosition===void 0||o.endPosition===void 0)return console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it has an invalid range`),null;
      let a,l=[],u;
      const d=[];
      u=r.object.textEditorModel.getValueInRange({
        startLineNumber:o.startPosition.line,startColumn:o.startPosition.column,endLineNumber:o.endPosition.line,endColumn:o.endPosition.column
      }),a=u;
      for(const[p,g]of u.split(`
`).entries())d.push({
        lineNumber:p+(o.startPosition?.line-1)+1,text:g,isSignature:!1
      });
      const m=e.signatures?.ranges;
      if(m){
        m.sort((g,f)=>!g.startPosition||!f.startPosition?0:g.startPosition.line!==f.startPosition.line?g.startPosition.line-f.startPosition.line:(g.startPosition.column??0)-(f.startPosition.column??0));
        const p=_8A(m);
        for(const g of p){
          if(g===void 0||g.startPosition===void 0||g.endPosition===void 0){
            l.push("");
            continue
          }
          if(g.endPosition.line>=o.startPosition.line){
            l.push("");
            continue
          }
          l.push(r.object.textEditorModel.getValueInRange({
            startLineNumber:g.startPosition.line,startColumn:g.startPosition.column,endLineNumber:g.endPosition.line,endColumn:Math.min(r.object.textEditorModel.getLineLength(g.endPosition.line)+1,g.endPosition.column)
          }).trimEnd())
        }
        if(l.length!==0){
          let g="",f=0;
          for(const[A,w]of[...l,a].entries()){
            if(A<l.length&&w==="")continue;
            let C;
            if(A<l.length){
              for(const[B,R]of w.split(`
`).entries())d.push({
                lineNumber:B+(p[A]?.startPosition?.line??1),text:R,isSignature:!0
              });
              C=p[A]?.startPosition?.line??1
            }
            else C=o.startPosition?.line??1;
            if(A===0){
              g+=w;
              continue
            }
            const x=w.match(/^\s*/);
            let I;
            x?I=x[0]:I="",g+=`
`+I+`...
`+w,d.push({
              lineNumber:C-.5,text:I+"...",isSignature:!0
            })
          }
          a=g
        }
      }
      d.sort((p,g)=>p.lineNumber-g.lineNumber),s={
        detailedLines:d,contents:a,originalContents:u,relativeWorkspacePath:this.workspaceContextService.asRelativePath(i),range:o
      }
    }
    catch(o){
      console.error("Error in codeBlockFromRemote:",o)
    }
    finally{
      r&&r.dispose()
    }
    return s
  }
  async semanticSearch(e, t, i){
    function r(u){
      return{
        startLineNumber:(u.startPosition?.line||1)-1,startColumn:(u.startPosition?.column||1)-1,endLineNumber:(u.endPosition?.line||1)-1,endColumn:(u.endPosition?.column||1)-1
      }
    }
    const o=(await this.parallelSearch(e.contentPattern.pattern, 100)).flatMap((u, d)=>{
      if(u.codeBlock===void 0||u.codeBlock.range===void 0)return[];
      const m=r(u.codeBlock.range);
      return[{
        uri:this.workspaceContextService.resolveRelativePath(u.codeBlock.relativeWorkspacePath),previewText:u.codeBlock.contents,rangeLocations:[{
          source:m,preview:{
            startLineNumber:0,startColumn:0,endLineNumber:m.endLineNumber-m.startLineNumber,endColumn:m.endColumn
          }
        }
        ]
      }
      ]
    }), a={
      
    };
    for(const u of o)u.uri&&(a[u.uri.toString()]===void 0&&(a[u.uri.toString()]=[]), a[u.uri.toString()].push(u));
    const l=[];
    for(const u in a){
      const d=je.parse(u);
      if(WAi(e,d.fsPath)&&Object.prototype.hasOwnProperty.call(a,u)){
        const m=a[u];
        l.push({
          resource:d,results:m
        })
      }
    }
    for(const u of l)i?.(u);
    return{
      results:l,messages:[]
    }
  }
  async getRepoAuthId(){
    const e=await(async()=>{
      if(this.cursorCredsService.getRepoBackendUrl().includes("cursor.sh")&&!this.cursorCredsService.getBackendUrl().includes("cursor.sh")){
        const i=this.serverConfigService.cachedServerConfig;
        if(i.indexingConfig?.repo42AuthToken)return i.indexingConfig.repo42AuthToken
      }
      return await this._cursorAuthenticationService.getAccessToken()
    })();
    return e?this._cursorAuthenticationService.getAuthIdFromToken(e):void 0
  }
  async parallelSearchGetContents(e, t=10, i, r){
    return(await this.parallelSearch(e, t, i, r)).map(o=>{
      const a=o.codeBlock;
      if(a===void 0)return o;
      const l=this.workspaceContextService.resolveRelativePath(a.relativeWorkspacePath),u=this.modelService.getModel(l);
      return!u||a.range===void 0?o:new zR({
        ...o,codeBlock:{
          ...o.codeBlock,contents:u.getValueInRange({
            startColumn:a.range.startPosition?.column??1,startLineNumber:a.range.startPosition?.line??1,endColumn:a.range.endPosition?.column??1,endLineNumber:a.range.endPosition?.line??1
          })
        }
      })
    })
  }
  async searchMultipleQueries(e, {
    topK:t, minK:i, finalK:r
  }, s){
    const a=e.map(l=>({
      text:l.text,newGlob:Z0A({
        globsNewLineSeparated:l.globsNewLineSeparated,properGlob:s?.newlineSepGlobFilter
      })
    })).map(l=>this.parallelSearch(l.text, t, t, {
      includePattern:s?.includePattern,excludePattern:s?.excludePattern,globFilter:l.newGlob
    }));
    return await y8A(a, {
      minK:i,finalK:r
    })
  }
  async parallelSearch(e, t=10, i, r){
    try{
      const s=await this.searchNewLocal(e,t,r);
      return this.filterResults(s,t,i)
    }
    catch{
      return[]
    }
  }
  filterResults(e, t=10, i){
    return e.filter(r=>r.codeBlock!==void 0&&r.codeBlock.contents.length<2e4).sort((r, s)=>s.score-r.score).slice(0, i??t)
  }
  async compileGlobFilterFromPattern(e){
    if(this.indexingProvider===void 0)throw new Error("Indexing provider not found");
    const t={
      globFilter:e?.globFilter??await this.compilePatternIntoGlobFilter(e?.includePattern),notGlobFilter:await this.compilePatternIntoGlobFilter(e?.excludePattern),overridePathEncryptionKey:e.overridePathEncryptionKey??this.getOverridePathEncryptionKey(e.repoInfo)
    };
    return await this.indexingProvider.compileGlobFilter(t)
  }
  async searchNewLocal(e, t=10, i){
    const r=await this.repositoryClientPromise.get(), s=await this.getNewRepoInfo();
    if(s===void 0)throw new Error("No repository info found");
    if(this.indexingProvider===void 0)throw new Error("Indexing provider not found");
    const o={
      ...s,id:xpa.id
    };
    let a;
    try{
      const l=await this.compileGlobFilterFromPattern({
        includePattern:i?.includePattern,excludePattern:i?.excludePattern,globFilter:i?.globFilter,repoInfo:s
      }),u={
        query:e,repository:s,topK:t,contextCacheRequest:i?.contextCacheRequest,globFilter:l.globFilter,notGlobFilter:l.notGlobFilter,queryOnlyRepoAccess:this.maybeGetQueryOnlyRepoAccess(s)
      },d=Wr(),m={
        headers:Kb(d),signal:i?.abortSignal
      };
      if(i?.abortSignal?.aborted)throw new Error("Aborted");
      a=await r.searchRepositoryV2(u,m)
    }
    catch(l){
      if(l instanceof fA)return i?.silent||console.error("searchRepositoryV2 failed",l),[];
      throw l
    }
    return await this.getFinalCodeResults(o, a.codeResults, {
      ...i,topK:t
    })
  }
  async refreshTabContext(e){
    const t=await this.getNewRepoInfo(), i=await this.aiServerClientPromise.get();
    if(t===void 0)throw new Error("No repository info found");
    const r={
      ...e,repositoryInfo:t
    }, s=await i.refreshTabContext(r, {
      headers:Kb(Wr())
    }), o=await this.getFinalCodeResults(t, s.codeResults);
    return new I4c({
      codeResults:o
    })
  }
  syncIndexWithGivenRepositoryInfo(e){
    this._onDidRequestRepoInterrupt.fire(!0), this._onDidRequestRepoIndex.fire({
      forceOverrideRepoInfo:e
    })
  }
  indexMainLocalRepository(){
    this._cursorAuthenticationService.isAuthenticated()&&(this._onDidRequestRepoInterrupt.fire(!0), this._onDidRequestRepoIndex.fire(void 0))
  }
  interruptLocalRepository(e){
    e.id===xpa.id&&this._onDidRequestRepoInterrupt.fire(!1)
  }
  async getEmbeddings(...e){
    return(await(await this.repositoryClientPromise.get()).getEmbeddings({
      texts:e
    }, {
      headers:Kb(Wr())
    })).embeddings.map(r=>r.embedding)
  }
  async*getLineNumberClassifications(e, t, i){
    const r=u=>JSON.stringify({
      relativeWorkspacePath:u.codeBlock?.relativeWorkspacePath,range:u.codeBlock?.range
    }), s=new Map(e.map((u, d)=>[r(u.ogCodeResult), {
      ogCodeResult:u.ogCodeResult,idx:d
    }
    ])), o={
      query:t,codeResults:e.map(u=>u.localCodeResult).filter(u=>u!==null)
    }, l=await(await this.repositoryClientPromise.get()).getLineNumberClassifications(o, {
      signal:i
    });
    for await(const u of l){
      const d=u.classifiedResult;
      if(d?.codeResult!==void 0){
        const m=s.get(r(d.codeResult));
        m!==void 0&&(yield{
          withClassificationInfo:d,idx:m.idx
        })
      }
    }
  }
  async convertToLocalBlock(e){
    try{
      const t=await this.codeBlockFromRemote(e);
      return t?t.contents!==void 0&&t.contents.length>2e4?(console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it's too big`),null):t:(console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it couldn't be converted to a local block`),null)
    }
    catch(t){
      return console.error("Failed to convert code block to local block:",t),null
    }
  }
  async getFinalCodeResults(e, t, i){
    if(!this.indexingProvider)throw new Error("Indexing provider not found");
    const r=t.map(d=>d.codeBlock?.relativeWorkspacePath).filter(d=>d!==void 0), s=await this.indexingProvider.decryptPaths({
      paths:r,overridePathEncryptionKey:this.getOverridePathEncryptionKey(e)
    }), o=new Map;
    for(let d=0;
    d<r.length;
    d++)o.set(r[d], s[d]);
    const u=(await mDg(t, async d=>{
      if(d.codeBlock===void 0)throw console.log("[Cpp] Skipping because it's undefined"),new Error("Code block undefined");
      const m=o.get(d.codeBlock.relativeWorkspacePath);
      if(m===void 0)throw new Error("Path not found");
      if(d.codeBlock.relativeWorkspacePath=m,(d.codeBlock.relativeWorkspacePath.startsWith("./")||d.codeBlock.relativeWorkspacePath.startsWith(".\\"))&&(d.codeBlock.relativeWorkspacePath=d.codeBlock.relativeWorkspacePath.substring(2)),!T8A(d.codeBlock.relativeWorkspacePath,this.queryBuilder,i))return console.log(`[Cpp] Skipping ${d.codeBlock.relativeWorkspacePath} because it doesn't match the include/exclude patterns`),null;
      const p=await this.convertToLocalBlock(d.codeBlock);
      return p===null?(console.log(`[Cpp] Skipping ${d.codeBlock.relativeWorkspacePath} because it couldn't be converted to a local block`),null):new zR({
        score:d.score,codeBlock:p
      })
    }, {
      max:8
    })).map(d=>{
      if(d.status==="rejected")return console.error(d.reason),null;
      if(i?.excludeCursorIgnored&&d.value?.codeBlock?.relativeWorkspacePath){
        const m=this.workspaceContextService.resolveRelativePath(d.value.codeBlock.relativeWorkspacePath);
        if(this.isUriCursorIgnored(m))return null
      }
      return d.value
    }).filter(d=>d!==null).sort((d, m)=>m.score-d.score);
    return i?.topK?u.slice(0, i.topK):u
  }
  async compilePatternIntoGlobFilter(e){
    if(e===void 0)return;
    const t=k8A(e);
    this.telemetryService.publicLogCapture("SimpleGlobPattern.Attempted");
    const i=await this.generateSimpleGlobPattern(t);
    if(i!==void 0)return this.telemetryService.publicLogCapture("SimpleGlobPattern.Success"), i;
    this.telemetryService.publicLogCapture("SimpleGlobPattern.Fallback");
    const r=this.queryBuilder.parseSearchPaths(t);
    if(r.pattern!==void 0)return x8A(r.pattern)
  }
  async generateSimpleGlobPattern(e){
    return S8A(e, this.fileService, this.workspaceContextService)
  }
}, CAa=__decorate([__param(0, wg), __param(1, MJ), __param(2, Gr), __param(3, ea), __param(4, El), __param(5, Lr), __param(6, Vk), __param(7, ln), __param(8, Il), __param(9, Fn), __param(10, Hi), __param(11, Kk)], CAa), Vi(oX, CAa, 1), Dnf=class extends rn{
  constructor(){
    super({
      id:UCc,title:{
        value:"Set Query Only Index",original:"Set Query Only Index"
      },f1:!1
    })
  }
  run(n, {
    queryOnlyRepositoryInfo:e
  }){
    n.get(oX).setQueryOnlyIndex(e)
  }
}, Dt(Dnf)
}
});
async function Bnf(n, e, t, i, r, s){
  const{
    depth:o=0, maxDepth:a, dirsToSkip:l, maxConcurrent:u
  }
  =s;
  if(t.length===0||o>a)return;
  const d=t.filter(m=>{
    const p=ca(m);
    return!l.has(p)
  });
  for(let m=0;
  m<d.length;
  m+=u){
    const p=d.slice(m, m+u);
    await Promise.all(p.map(async g=>{
      const f=g.scheme===_n.vscodeRemote?g.path:g.fsPath;
      if(i.has(f))return;
      i.add(f);
      let A=!1;
      try{
        if(A=(await n.stat(g)).isSymbolicLink,A)return
      }
      catch{
        
      }
      const w=je.joinPath(g,".git");
      try{
        await n.stat(w)&&(r.includes(f)||r.push(f))
      }
      catch{
        
      }
      try{
        const C=await n.resolve(g,{
          resolveMetadata:!1
        }),x=[];
        if(C&&C.children)for(const I of C.children)I.isDirectory&&(I.name===".git"||l.has(I.name)||x.push(I.resource));
        x.length>0&&await Bnf(n,e,x,i,r,{
          ...s,depth:o+1
        })
      }
      catch(C){
        C?.code!=="EACCES"&&e.warn(`Error reading directory ${f}:`,C)
      }
    }))
  }
}
var I8A=