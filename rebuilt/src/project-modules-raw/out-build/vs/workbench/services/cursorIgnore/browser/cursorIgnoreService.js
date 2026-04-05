// Module: out-build/vs/workbench/services/cursorIgnore/browser/cursorIgnoreService.js
// Offset: 28440525 (bundle byte offset)
// Size: 23302 bytes

Er(), Wt(), Yn(), ps(), ns(), rt(), yn(), Yr(), jr(), Ytf(), zr(), iR(), wE(), Dd(), mie(), Fme(), sB(), Ei(), ml(), cu(), d2(), _r(), I8A(), _d(), Po(), RNe(), fE(), rce(), vr(), mR(), _g(), s5=xi("cursorIgnoreService"), Zcu="hierarchical allow file list is still loading, please retry the tool call", EAa=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    super(), this.workspaceContextService=e, this.fileService=t, this.logService=i, this.searchService=r, this.reactiveStorageService=s, this.instantiationService=o, this.repositoryService=a, this.gitContextService=l, this.configurationService=u, this.uriIdentityService=d, this.worktreeManagerService=m, this.metricsService=p, this.clientDebugLogService=g, this.outputService=f, this.pathService=A, this._ignoreMapping={
      
    }, this._ignorePatternsMapping={
      
    }, this._pendingIgnorePaths=new Set, this._globalIgnorePatterns=[], this._ignoreLoadedCallbacks=[], this._ignoreLoaded=!1, this._gitRepoLocations=[], this._gitRepoUpstreamUrls=new Map, this._didStartGitRepoScanning=!1, this._gitReposInitialized=!1, this._onDidCursorIgnoreChange=this._register(new Qe), this.onDidCursorIgnoreChange=this._onDidCursorIgnoreChange.event, this._cache=new Fb(2e3, .5), this._scannedOutOfWorkspaceRoots=new Set, this._scannedOutOfWorkspaceAncestorRoots=new Set, this._realPathCache=new Map, this._log=B=>this.clientDebugLogService.log("cursorIgnoreService", `${Date.now()} ${B}`), this._uploadLog=async()=>{
      this.clientDebugLogService.upload("cursorIgnoreService")
    }, this._initTimeout=this._register(new O$);
    const w=this.pathService.userHome({
      preferLocal:!0
    }), C=je.joinPath(w, ".cursor");
    this._cursorDataDirPath=this.normalizePathForComparison(C.scheme===_n.vscodeRemote?C.path:C.fsPath);
    const x=je.joinPath(w, ".cursor", "worktrees");
    this._worktreesDirPath=this.normalizePathForComparison(x.scheme===_n.vscodeRemote?x.path:x.fsPath), this._cancellationTokenSource=new Wc, this._cancellationToken=this._cancellationTokenSource.token, this._register({
      dispose:()=>{
        this._cancellationTokenSource.dispose(!0)
      }
    }), this._register(this._onDidCursorIgnoreChange.event(()=>{
      this._cache.clear()
    })), this._register(this.fileService.onDidFilesChange(async B=>{
      if(B.gotAdded()){
        const N=B.rawAdded.filter(M=>M.path.endsWith(".cursorignore"));
        for(const M of N){
          const O=M.toString(),$=O.substring(0,O.lastIndexOf(".cursorignore"));
          try{
            const H=await this.fileService.readFile(M),W=this.parseIgnoreRules(H.value.toString());
            W.length>0?(this._ignoreMapping[$]=sMe().add(W),this._ignorePatternsMapping[$]=W):(this._ignoreMapping[$]="no-ignore",this._ignorePatternsMapping[$]="no-ignore"),this._onDidCursorIgnoreChange.fire({
              
            })
          }
          catch(H){
            console.error(`Error processing new .cursorignore file at ${M.toString()}:`,H)
          }
        }
      }
      if(B.gotDeleted()){
        const N=B.rawDeleted.filter(M=>M.path.endsWith(".cursorignore"));
        for(const M of N){
          const O=M.toString(),$=O.substring(0,O.lastIndexOf(".cursorignore"));
          delete this._ignoreMapping[$],delete this._ignorePatternsMapping[$]
        }
        N.length>0&&this._onDidCursorIgnoreChange.fire({
          
        })
      }
      const R=Object.keys(this._ignoreMapping);
      for(const N of R){
        const M=je.parse(N+".cursorignore");
        if(B.contains(M)){
          const O=await this.fileService.readFile(M),$=this.parseIgnoreRules(O.value.toString());
          $.length>0?(this._ignoreMapping[N]=sMe().add($),this._ignorePatternsMapping[N]=$):(this._ignoreMapping[N]="no-ignore",this._ignorePatternsMapping[N]="no-ignore"),this._onDidCursorIgnoreChange.fire({
            
          })
        }
      }
    }));
    const I=this.reactiveStorageService.onChangeEffectManuallyDisposed({
      onChange:({
        deps:B
      })=>{
        const[R,N,M]=B;
        (R!==void 0||N!==void 0||M!==void 0)&&(M!==void 0&&M.length>0&&!this._didStartGitRepoScanning&&(this.initializeGitRepoMapping().catch($=>{
          console.error("Error initializing git repo mapping:",$)
        }),this._didStartGitRepoScanning=!0),this.workspaceContextService.getWorkspace().folders.length>0&&this._onDidCursorIgnoreChange.fire({
          
        }))
      },deps:[()=>this.reactiveStorageService.applicationUserPersistentStorage.teamAllowlist,()=>this.reactiveStorageService.applicationUserPersistentStorage.teamBlocklist,()=>this.reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos]
    });
    this._register(I), this._register(this.configurationService.onDidChangeConfiguration(B=>{
      B.affectsConfiguration(G2o)&&(this.initializeGlobalIgnoreList(),this._onDidCursorIgnoreChange.fire({
        
      }))
    })), this._register(this.worktreeManagerService.onDidRemoveWorktree(B=>{
      this.cleanupWorktreeCursorIgnoreEntries(B)
    })), this._queryBuilder=this.instantiationService.createInstance(yV), this.initializeGlobalIgnoreList(), this.initializeIgnoreMapping(), this.repositoryService.setIsUriCursorIgnored(B=>this.shouldBlockUriFromReading(B))
  }
  uriFromFsPathUsingBase(e, t){
    if(!t)return je.file(e);
    const i=e.replace(/\\/g, "/"), r=i.startsWith("/")?i:"/"+i;
    return je.from({
      scheme:t.scheme,authority:t.authority,path:r
    })
  }
  async getRealUriAsync(e){
    if(e.scheme!==_n.file&&e.scheme!==_n.vscodeRemote)return e;
    const t=e.toString(), i=this._realPathCache.get(t);
    if(i!==void 0)return i;
    try{
      const r=await this.fileService.realpath(e);
      return this._realPathCache.set(t,r),r
    }
    catch{
      try{
        const s=Td(e),o=await this.fileService.realpath(s),a=this.uriIdentityService.extUri.relativePath(s,e)??null,l=a!==null&&a!==""?Wo(o,a):o;
        return this._realPathCache.set(t,l),l
      }
      catch{
        return this._realPathCache.set(t,e),e
      }
    }
  }
  async getRealWorkspaceFolders(){
    const e=this.workspaceContextService.getWorkspace().folders;
    if(e.length===0)return e;
    const t=[];
    for(const i of e){
      const r=await this.getRealUriAsync(i.uri);
      if(this.uriIdentityService.extUri.isEqual(r,i.uri)){
        t.push(i);
        continue
      }
      t.push({
        uri:r,name:i.name,index:i.index,toResource:s=>Wo(r,s)
      })
    }
    return t
  }
  cleanupWorktreeCursorIgnoreEntries(e){
    const t=je.file(e), i=[];
    for(const r of Object.keys(this._ignoreMapping))try{
      const s=je.parse(r);
      this.uriIdentityService.extUri.isEqualOrParent(s,t)&&i.push(r)
    }
    catch{
      
    }
    if(i.length>0){
      for(const r of i)delete this._ignoreMapping[r],delete this._ignorePatternsMapping[r];
      this.logService.info(`[CursorIgnore] Cleaned up ${i.length} .cursorignore entries for removed worktree at ${e}`),this._onDidCursorIgnoreChange.fire({
        
      })
    }
  }
  async shouldIgnoreUri(e, t){
    const i=await this.getRealUriAsync(e), r=await this.getRealWorkspaceFolders();
    return this.shouldIgnoreUriWithWorkspaceFolders(i, t, r)
  }
  initializeGlobalIgnoreList(){
    const e=this.configurationService.getValue(G2o)||[];
    this._globalIgnorePatterns=e, e.length>0?this._globalIgnore=sMe({
      allowRelativePaths:!0
    }).add(e):this._globalIgnore=void 0
  }
  addOnCursorIgnoreLoadedCallback(e){
    this._ignoreLoaded?e():this._ignoreLoadedCallbacks.push(e)
  }
  async initializeIgnoreMapping(){
    const e=Date.now();
    this._log("Initializing ignore mapping"), this._initTimeout.setIfNotSet(()=>{
      this._uploadLog()
    }, 6e4);
    const t=this.workspaceContextService.getWorkspace().folders;
    this._log(`Folders: ${t.length}`);
    const i=this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks??!1, r=this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings, o=r?.cursorIgnore?.ignoreSymlinks||i, a=this._queryBuilder.file(t, {
      _reason:"cursorIgnoreCheck",includePattern:["**/.cursorignore"],maxResults:0,ignoreSymlinks:o
    });
    a.log=this._log;
    let l;
    try{
      this._log(`Folders: ${t.length}`),l=await this.searchService.fileSearch(a,this._cancellationToken)
    }
    catch(A){
      throw this._log(`Error searching for ignores: ${A.stack}`),A
    }
    this._log(`Search results: ${l.results.length}`);
    for(const A of l.results)try{
      const w=await this.fileService.readFile(A.resource),C=this.parseIgnoreRules(w.value.toString()),x=A.resource.toString().substring(0,A.resource.toString().lastIndexOf(".cursorignore"));
      C.length>0?(this._ignoreMapping[x]=sMe().add(C),this._ignorePatternsMapping[x]=C):(this._ignoreMapping[x]="no-ignore",this._ignorePatternsMapping[x]="no-ignore")
    }
    catch(w){
      this.logService.error(`Error processing .cursorignore file at ${A.resource.toString()}:`,w)
    }
    this._log("Ignore mapping done");
    const u=this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled??!1, m=r?.cursorIgnore?.hierarchicalEnabled||u;
    let p=0;
    if(m)for(const A of t){
      const w=this.collectHierarchicalDirectories(A.uri,{
        skipWorkspace:!1
      });
      for(const C of w)try{
        await this.handleNewHierarchyCursorIgnore(C),this._ignoreMapping[C.toString()]!=="no-ignore"&&p++
      }
      catch(x){
        this.logService.error(`Error loading hierarchical .cursorignore at ${C.toString()}:`,x)
      }
    }
    this._log("Hierarchical done"), this._ignoreLoaded=!0, this._initTimeout.cancel(), this._ignoreLoadedCallbacks.forEach(A=>A()), this._ignoreLoadedCallbacks=[], this._cache.clear();
    const f=Date.now()-e;
    this.metricsService.distribution({
      stat:"cursor_ignore.initial_load_time_ms",value:f
    })
  }
  getAdminBlocklistPatterns(){
    return this.reactiveStorageService.applicationUserPersistentStorage.teamBlocklist??[]
  }
  getAdminBlockRepos(){
    return this.reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos??[]
  }
  hasAllowlistRepos(){
    return this.getAdminBlockRepos().some(t=>t.type==="ALLOW")
  }
  async handleNewHierarchyCursorIgnore(e){
    const t=je.joinPath(e, ".cursorignore");
    if(await this.fileService.exists(t)){
      const i=await this.fileService.readFile(t),r=this.parseIgnoreRules(i.value.toString());
      r.length>0?(this._ignoreMapping[e.toString()]=sMe().add(r),this._ignorePatternsMapping[e.toString()]=r):(this._ignoreMapping[e.toString()]="no-ignore",this._ignorePatternsMapping[e.toString()]="no-ignore")
    }
    else this._ignoreMapping[e.toString()]="no-ignore", this._ignorePatternsMapping[e.toString()]="no-ignore"
  }
  collectHierarchicalDirectories(e, t={
    skipWorkspace:!1
  }){
    const i=[];
    let r=e, s=0;
    const o=100;
    for(;
    Td(r)!==r;
    ){
      if(s>=o){
        console.error(`Max depth of ${o} reached while populating hierarchy cursor ignore.`);
        break
      }
      r=Td(r),r.toString().endsWith("/")||(r=je.parse(r.toString()+"/")),!(t.skipWorkspace&&this.workspaceContextService.isInsideWorkspace(r)&&this._ignoreLoaded)&&(t.skipPending&&this._pendingIgnorePaths.has(r.toString())||this._ignoreMapping[r.toString()]===void 0&&(i.push(r),s++))
    }
    return i
  }
  populatesHierarchyCursorIgnore(e){
    const t=this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled??!1;
    if(!(this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.hierarchicalEnabled||t))return!1;
    const o=this.collectHierarchicalDirectories(e, {
      skipWorkspace:!0,skipPending:!1
    });
    let a=!1;
    const l=[];
    for(const u of o)this._pendingIgnorePaths.has(u.toString())?a=!0:(l.push(u), this._pendingIgnorePaths.add(u.toString()));
    return l.length>0&&Promise.all(l.map(u=>this.handleNewHierarchyCursorIgnore(u).catch(d=>{
      this.logService.error(`Error populating hierarchy cursor ignore for ${u.toString()}:`,d)
    }).finally(()=>{
      this._pendingIgnorePaths.delete(u.toString())
    }))).finally(()=>{
      this._ignoreLoaded&&this._onDidCursorIgnoreChange.fire({
        
      })
    }), a||l.length>0
  }
  shouldIgnoreUriSync(e, t){
    e=je.revive(e);
    const i=e.toString();
    if(this._cache.has(i)){
      const o=this._cache.get(i);
      return o===null?void 0:o
    }
    const r=this.workspaceContextService.getWorkspace().folders, s=this.shouldIgnoreUriWithWorkspaceFolders(e, t, r);
    return s?.type==="cursorIgnore"&&s.source===Zcu||this._cache.set(i, s??null), s
  }
  shouldIgnoreUriWithWorkspaceFolders(e, t, i){
    if(this.isAdminBlocked(e))return{
      type:"adminBlock"
    };
    if(this.isUnderWorktreesDir(e)||e.scheme!==_n.file&&e.scheme!==_n.vscodeRemote)return;
    if(i.length===0&&!t?.gitWorktree)return{
      type:"outOfWorkspace"
    };
    const s=t?.gitWorktree?!1:this.populatesHierarchyCursorIgnore(e);
    let o=!1;
    for(const[g, f]of Object.entries(this._ignoreMapping)){
      const A=je.parse(g);
      if(!this.uriIdentityService.extUri.isEqualOrParent(e,A))continue;
      const C=this.uriIdentityService.extUri.relativePath(A,e)??"";
      if(f&&f==="no-ignore"||C===""||/^[a-zA-Z]:[\\/]/.test(C)||/^\.*\/|^\.+$/.test(C))continue;
      const x=f.test(C);
      if(x.ignored&&!x.unignored)return{
        type:"cursorIgnore",source:g
      };
      x.unignored&&(o=!0)
    }
    if(!o&&this._globalIgnore){
      let g,f=i,A;
      if(t?.gitWorktree){
        if(A=this.uriFromFsPathUsingBase(t.gitWorktree.worktreePath,e),!A)return{
          type:"outOfWorkspace"
        };
        const w=f[0]?.name??"workspace";
        f=[{
          uri:A,name:w,index:0,toResource:C=>Wo(A,C)
        }
        ]
      }
      if(f.length>0){
        const w=f.find(C=>this.uriIdentityService.extUri.isEqualOrParent(e,C.uri));
        if(w){
          if(A&&this.uriIdentityService.extUri.isEqualOrParent(e,A)?g=this.uriIdentityService.extUri.relativePath(A,e)??"":g=this.uriIdentityService.extUri.relativePath(w.uri,e)??"",g===""||/^[a-zA-Z]:[\\/]/.test(g))return
        }
        else{
          const C=e.path.split("/");
          g=C[C.length-1]
        }
      }
      else{
        const w=e.path.split("/");
        g=w[w.length-1]
      }
      if(this._globalIgnore.ignores(g))return{
        type:"cursorIgnore",source:"globalIgnore"
      }
    }
    let a=i, l;
    if(t?.gitWorktree){
      if(l=this.uriFromFsPathUsingBase(t.gitWorktree.worktreePath,e),!l)return{
        type:"outOfWorkspace"
      };
      const g=a[0]?.name??"workspace";
      a=[{
        uri:l,name:g,index:0,toResource:f=>Wo(l,f)
      }
      ]
    }
    if(a.length===0)return{
      type:"outOfWorkspace"
    };
    const u=a.find(g=>this.uriIdentityService.extUri.isEqualOrParent(e, g.uri));
    if(!u)return{
      type:"outOfWorkspace"
    };
    let d;
    if(l&&this.uriIdentityService.extUri.isEqualOrParent(e, l)){
      if(d=this.uriIdentityService.extUri.relativePath(l,e)??"",d==="")return
    }
    else d=this.uriIdentityService.extUri.relativePath(u.uri, e)??"";
    const p=(Sc?orh(d):d).split("/");
    if(s)return t&&this.metricsService.increment({
      stat:"cursor_ignore.hierarchical_blocked_still_loading",value:1
    }), {
      type:"cursorIgnore",source:Zcu
    }
  }
  shouldIgnoreUriUncached(e, t){
    const i=this.workspaceContextService.getWorkspace().folders;
    return this.shouldIgnoreUriWithWorkspaceFolders(e, t, i)
  }
  shouldBlockUriFromReading(e){
    const t=this.shouldIgnoreUriSync(e);
    return t!==void 0&&t.type!=="outOfWorkspace"
  }
  getSerializableIgnoreMapping(){
    const e={
      
    };
    for(const[t, i]of Object.entries(this._ignorePatternsMapping))Array.isArray(i)&&(e[t]=i);
    if(this._globalIgnore&&this._globalIgnorePatterns.length>0){
      const t=this.workspaceContextService.getWorkspace().folders;
      for(const i of t){
        const r=i.uri.toString(),s=e[r];
        Array.isArray(s)?e[r]=[...this._globalIgnorePatterns,...s]:e[r]=[...this._globalIgnorePatterns]
      }
    }
    return e
  }
  async filterCursorIgnoredFiles(e, t){
    return await new Promise(i=>this.addOnCursorIgnoreLoadedCallback(()=>i(void 0))), e.filter(i=>!this.shouldBlockUriFromReading(t(i)))
  }
  async reloadCursorIgnoreForDirectory(e){
    const t=await this.getRealUriAsync(e), r=je.joinPath(t, ".cursorignore").toString(), s=r.substring(0, r.lastIndexOf(".cursorignore")), a=je.joinPath(e, ".cursorignore").toString(), l=a.substring(0, a.lastIndexOf(".cursorignore"));
    l!==s&&(delete this._ignoreMapping[l], delete this._ignorePatternsMapping[l]), delete this._ignoreMapping[s], delete this._ignorePatternsMapping[s];
    const u=je.joinPath(e, ".cursorignore");
    try{
      const d=await this.fileService.readFile(u),m=this.parseIgnoreRules(d.value.toString());
      m.length>0?(this._ignoreMapping[s]=sMe().add(m),this._ignorePatternsMapping[s]=m):(this._ignoreMapping[s]="no-ignore",this._ignorePatternsMapping[s]="no-ignore")
    }
    catch{
      this._ignoreMapping[s]="no-ignore",this._ignorePatternsMapping[s]="no-ignore"
    }
    this._cache.clear(), this._onDidCursorIgnoreChange.fire({
      
    })
  }
  async initializeGitRepoMapping(){
    await this.gitContextService.waitForGitContextProvider();
    const e=this.workspaceContextService.getWorkspace().folders, t=new Set, i=e.map(l=>l.uri.scheme===_n.vscodeRemote?l.uri.path:l.uri.fsPath), r=100, s=new Set(["node_modules", ".turbo", ".next", ".cache", ".pnpm", ".yarn", "dist", "build", "out", "target", ".vscode", ".idea", "venv", "__pycache__", "logs", "tmp", "temp"]);
    await Bnf(this.fileService, this.logService, e.map(l=>l.uri), t, i, {
      maxDepth:r,dirsToSkip:s,maxConcurrent:20
    }), this._gitRepoLocations=i;
    const a=new Map;
    for(const l of this._gitRepoLocations)try{
      const u=await this.gitContextService.getGitUpstreamURL(l),d=await this.gitContextService.getGitRoot(l);
      d&&a.set(d,u)
    }
    catch(u){
      console.warn(`Failed to get Git upstream URL for ${l}: ${u}`)
    }
    this._gitRepoUpstreamUrls=a, this._gitReposInitialized=!0, this._onDidCursorIgnoreChange.fire({
      
    })
  }
  normalizePathForComparison(e){
    let t=e.replace(/\\/g, "/");
    return t.startsWith("/")&&t.length>2&&t[2]===":"&&(t=t.substring(1)), Sc&&(t=t.toLowerCase()), t
  }
  isUnderWorktreesDir(e){
    const t=e.scheme===_n.vscodeRemote?e.path:e.fsPath, i=this.normalizePathForComparison(t);
    return i===this._worktreesDirPath||i.startsWith(this._worktreesDirPath+"/")
  }
  isWildcardUrl(e){
    return e.trim()==="*"
  }
  isPathPatternUrl(e){
    return!e.includes("://")&&!e.includes("github.com")&&!e.includes("gitlab.com")&&!e.includes("bitbucket.org")&&!e.includes("@")
  }
  getRelativePathFromWorkspaceRoot(e){
    const i=this.workspaceContextService.getWorkspace().folders[0]?.uri;
    if(i){
      const r=this.normalizePathForComparison(i.fsPath);
      if(e.startsWith(r))return e.substring(r.length+1)
    }
    return e
  }
  matchesWildcardOrPathPatternBlockRepos(e, t){
    for(const i of e)if(this.isWildcardUrl(i.url)){
      if(i.patterns.some(s=>nP(s.pattern,t)))return!0
    }
    else if(this.isPathPatternUrl(i.url)&&nP(i.url, t))return!0;
    return!1
  }
  isAdminBlocked(e){
    const t=je.revive(e);
    let i, r, s=0;
    const o=t.scheme===_n.vscodeRemote?t.path:t.fsPath, a=this.normalizePathForComparison(o);
    for(const d of this._gitRepoUpstreamUrls.keys())if(this._gitRepoUpstreamUrls.get(d)!==void 0){
      const m=this.normalizePathForComparison(d);
      a.startsWith(m)&&(a.length===m.length||a[m.length]==="/")&&m.length>s&&(i=d,r=m,s=m.length)
    }
    const l=this.getAdminBlockRepos(), u=this.hasAllowlistRepos();
    if(this._gitReposInitialized&&i&&r){
      const d=this._gitRepoUpstreamUrls.get(i);
      if(d){
        const m=a.substring(r.length+1);
        if(l.length>0){
          for(const p of l)if(p.type!=="ALLOW"&&this.doesRepoUrlMatch(p.url,d)&&p.patterns.some(f=>nP(f.pattern,m)))return!0;
          if(u&&!l.some(g=>g.type==="ALLOW"&&this.doesRepoUrlMatch(g.url,d)&&g.patterns.some(f=>nP(f.pattern,m))))return!0
        }
        return!1
      }
    }
    else if(this._gitReposInitialized&&!i){
      if(l.length>0){
        const d=this.getRelativePathFromWorkspaceRoot(a),m=l.filter(p=>p.type!=="ALLOW");
        if(this.matchesWildcardOrPathPatternBlockRepos(m,d))return!0;
        if(u){
          if(this._cursorDataDirPath&&(a===this._cursorDataDirPath||a.startsWith(this._cursorDataDirPath+"/")))return!1;
          const p=l.filter(g=>g.type==="ALLOW");
          if(!this.matchesWildcardOrPathPatternBlockRepos(p,d))return!0
        }
      }
      return!1
    }
    else{
      const d=this.getAdminBlocklistPatterns();
      if(d.length!==0){
        const m=e.path;
        if(m===void 0)return!1;
        for(const p of d)if(nP(p,m))return!0
      }
      if(l.length>0){
        const m=this.getRelativePathFromWorkspaceRoot(a),p=l.filter(g=>g.type!=="ALLOW");
        if(this.matchesWildcardOrPathPatternBlockRepos(p,m))return!0
      }
    }
    return!1
  }
  getBlockedChildPatternForDirectory(e){
    const t=this.getAdminBlockRepos().filter(a=>a.type!=="ALLOW"), i=this.getAdminBlocklistPatterns(), r=e.fsPath, s=this.normalizePathForComparison(r), o=this.getRelativePathFromWorkspaceRoot(s);
    for(const a of i){
      const l=a.split("/");
      if(l.length>0){
        const u=l[0].replace(/\*+$/,"");
        if(u&&!u.includes("*")){
          const d=o?`${o}/${u}`:u;
          if(nP(a,d)||a.startsWith(u))return a
        }
      }
    }
    for(const a of t)if(this.isWildcardUrl(a.url))for(const l of a.patterns){
      const u=l.pattern,d=u.split("/");
      if(d.length>0){
        const m=d[0].replace(/\*+$/,"");
        if(m&&!m.includes("*"))return u
      }
    }
    else if(this.isPathPatternUrl(a.url)){
      const l=a.url,u=l.split("/");
      if(u.length>0){
        const d=u[0].replace(/\*+$/,""),m=!o||o==="",p=l.startsWith(o+"/"),g=o.startsWith(d);
        if(d&&!d.includes("*")&&(!o||o===""||l.startsWith(o+"/")||o.startsWith(d)))return l
      }
    }
  }
  getDirectoryBlockType(e){
    if(this.isAdminBlocked(e))return"directory";
    const t=this.getBlockedChildPatternForDirectory(e);
    if(t)return t.endsWith("/**")?"all-contents":t.endsWith("/*")?"files-only":"all-contents"
  }
  doesRepoUrlMatch(e, t){
    const i=a=>{
      a=a.toLowerCase(),a=a.replace(/^(https?:\/\/|git@)/,""),a=a.replace(/\.git$/,""),a=a.replace(":","/");
      const l=a.split("/").filter(Boolean);
      return l.length>=2?`${l[l.length-2]}/${l[l.length-1]}`:a
    }, r=i(e), s=i(t);
    return e.includes("*")?e.trim()==="*"?!0:nP(r, s):r===s
  }
  parseIgnoreRules(e){
    return e.split(`
`).map(t=>t.replace(/\r$/, "").trimStart()).filter(t=>t!==""&&!t.startsWith("#"))
  }
  async listCursorIgnoreFilesByRoot(e, t){
    const i={
      
    };
    for(const r of e)i[r.fsPath.replace(/\\/g, "/")]=[];
    if(t.isCancellationRequested)throw new Error("Cancellation requested");
    this._ignoreLoaded||await new Promise((r, s)=>{
      let o=t.onCancellationRequested(()=>{
        s(new Error("List cursor ignore files by root cancelled")),o.dispose()
      });
      this.addOnCursorIgnoreLoadedCallback(()=>{
        o.dispose(),r(void 0)
      })
    });
    for(const r of e)if(!this.workspaceContextService.isInsideWorkspace(r)){
      const s=r.fsPath.replace(/\\/g,"/");
      this._scannedOutOfWorkspaceRoots.has(s)||(await this.scanAndLoadCursorIgnoresUnderRoot(r,t),this._scannedOutOfWorkspaceRoots.add(s)),this._scannedOutOfWorkspaceAncestorRoots.has(s)||(await this.scanAndLoadAncestorCursorIgnores(r),this._scannedOutOfWorkspaceAncestorRoots.add(s))
    }
    for(const[r, s]of Object.entries(this._ignoreMapping)){
      if(s==="no-ignore")continue;
      let o;
      try{
        o=je.parse(r.endsWith(".cursorignore")?r:r+".cursorignore")
      }
      catch{
        continue
      }
      for(const a of e){
        const l=a.toString(),u=o.toString(),d=u.startsWith(l),p=!this.workspaceContextService.isInsideWorkspace(a)&&l.startsWith(r);
        if(d||p){
          const g=a.fsPath.replace(/\\/g,"/"),f=i[g];
          f.some(A=>A.toString()===u)||f.push(o)
        }
      }
    }
    return i
  }
  async scanAndLoadCursorIgnoresUnderRoot(e, t){
    try{
      const i=this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks??!1,o=this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.ignoreSymlinks||i,a=this._queryBuilder.file([e],{
        _reason:"cursorIgnoreCheck-outOfWorkspace",expandPatterns:!1,ignoreSymlinks:o
      });
      a.includePattern={
        "**/.cursorignore":!0
      };
      const l=await this.searchService.fileSearch(a,t);
      for(const u of l.results)try{
        const d=await this.fileService.readFile(u.resource),m=this.parseIgnoreRules(d.value.toString()),p=u.resource.toString().substring(0,u.resource.toString().lastIndexOf(".cursorignore"));
        m.length>0?(this._ignoreMapping[p]=sMe().add(m),this._ignorePatternsMapping[p]=m):(this._ignoreMapping[p]="no-ignore",this._ignorePatternsMapping[p]="no-ignore")
      }
      catch(d){
        console.error(`Error processing .cursorignore file at ${u.resource.toString()}:`,d)
      }
      this._onDidCursorIgnoreChange.fire({
        
      })
    }
    catch(i){
      console.warn("scanAndLoadCursorIgnoresUnderRoot failed",i)
    }
  }
  async scanAndLoadAncestorCursorIgnores(e){
    try{
      let t=Td(e);
      const i=new Set;
      let r=0;
      const s=100;
      for(;
      Td(t)!==t&&!(r++>s);
      ){
        const o=t.toString().endsWith("/")?t.toString():t.toString()+"/";
        if(i.has(o))break;
        i.add(o);
        const a=je.parse(o+".cursorignore");
        try{
          if(await this.fileService.exists(a)){
            const u=await this.fileService.readFile(a),d=this.parseIgnoreRules(u.value.toString());
            d.length>0?(this._ignoreMapping[o]=sMe().add(d),this._ignorePatternsMapping[o]=d):(this._ignoreMapping[o]="no-ignore",this._ignorePatternsMapping[o]="no-ignore")
          }
        }
        catch{
          
        }
        const l=Td(t);
        if(l.toString()===t.toString())break;
        t=l
      }
      this._onDidCursorIgnoreChange.fire({
        
      })
    }
    catch(t){
      console.warn("scanAndLoadAncestorCursorIgnores failed",t)
    }
  }
}, EAa=__decorate([__param(0, Lr), __param(1, Gr), __param(2, Rr), __param(3, bQ), __param(4, ku), __param(5, ln), __param(6, oX), __param(7, AE), __param(8, Fn), __param(9, xl), __param(10, C$e), __param(11, R1), __param(12, tie), __param(13, iS), __param(14, kp)], EAa), Vi(s5, EAa, 1)
}
});
function Lnf(n, e){
  const t=document.createElement("div");
  t.style.display="flex", t.style.height=e?"100%":"fit-content", t.style.width="100%", t.style.boxSizing="border-box";
  let i, r=!1;
  const s=()=>{
    i&&i.dispose(), i=n(t), r=!1
  };
  return{
    getDom:()=>((r||!i)&&s(), t), disposable:{
      dispose:()=>{
        if(r=!0,i)try{
          i.dispose()
        }
        catch{
          
        }
        t.remove()
      }
    }, domHeight:e
  }
}
var D8A=