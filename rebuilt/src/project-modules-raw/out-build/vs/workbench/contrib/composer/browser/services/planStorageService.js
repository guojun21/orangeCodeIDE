// Module: out-build/vs/workbench/contrib/composer/browser/services/planStorageService.js
// Offset: 28000298 (bundle byte offset)
// Size: 17947 bytes

Wt(), Er(), Yn(), ns(), Ql(), kr(), ps(), _g(), eu(), ss(), Yr(), yn(), rt(), zr(), Bc(), f4A(), tYg(), td(), Ff(), TAi=xi("planStorageService"), (function(n){
  n.PENDING="pending", n.IN_PROGRESS="in_progress", n.COMPLETE="complete"
})(j$e||(j$e={
  
})), nYg=/^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/, Uba=class extends at{
  constructor(e, t, i, r, s, o, a, l){
    super(), this.fileService=e, this.storageService=t, this.workspaceContextService=i, this.pathService=r, this.environmentService=s, this.editorService=o, this.textModelService=a, this.textFileService=l, this._onDidChangePlan=this._register(new Qe), this.onDidChangePlan=this._onDidChangePlan.event, this.registryKey="composer.planRegistry", this.registry=new Map, this.registryLoaded=!1, this.redirectsKey="composer.planRedirects", this.redirects=new Map, this.migrationKey="composer.planMigrationToHomeDirCompleted", this.composerToPlans=new Map, this.loadRegistry().then(()=>{
      this.migrateFromUserDataDir(),this.initializeWatchers()
    })
  }
  async initializeWatchers(){
    this.fileService.watch(await this.getUserPlansDir()), this.fileService.onDidFilesChange(e=>{
      for(const{
        uri:t,id:i
      }
      of this.registry.values())e.contains(t)&&this._onDidChangePlan.fire({
        planId:i,uri:t
      })
    })
  }
  async loadRegistry(){
    if(!this.registryLoaded){
      try{
        const e=this.storageService.get(this.registryKey,0,"{}"),t=JSON.parse(e);
        for(const[i,r]of Object.entries(t)){
          let s={
            
          };
          if(r.builtBy)if(Array.isArray(r.builtBy))for(const o of r.builtBy)s[o]=[];
          else s=r.builtBy;
          this.registry.set(i,{
            ...r,uri:je.revive(r.uri),editedBy:r.editedBy||[],referencedBy:r.referencedBy||[],builtBy:s
          })
        }
      }
      catch(e){
        console.error("[PlanStorageService] Failed to load registry:",e)
      }
      try{
        const e=this.storageService.get(this.redirectsKey,0,"{}"),t=JSON.parse(e);
        this.redirects=new Map(Object.entries(t))
      }
      catch(e){
        console.error("[PlanStorageService] Failed to load redirects:",e)
      }
      this.registryLoaded=!0,this.rebuildInvertedIndex()
    }
  }
  async saveRegistry(){
    const e={
      
    };
    for(const[i, r]of this.registry.entries())e[i]=r;
    this.storageService.store(this.registryKey, JSON.stringify(e), 0, 0);
    const t=Object.fromEntries(this.redirects);
    this.storageService.store(this.redirectsKey, JSON.stringify(t), 0, 0)
  }
  async migrateFromUserDataDir(){
    if(!this.storageService.getBoolean(this.migrationKey, 0, !1))try{
      const t=Wo(this.environmentService.userRoamingDataHome,"plans"),i=await this.getUserPlansDir();
      if(!await this.fileService.exists(t)){
        this.storageService.store(this.migrationKey,!0,0,0);
        return
      }
      await this.fileService.createFolder(i);
      const s=await this.fileService.resolve(t);
      if(!s.children){
        this.storageService.store(this.migrationKey,!0,0,0);
        return
      }
      console.log(`[PlanStorageService] Migrating ${s.children.length} plan files from user data dir to ~/.cursor/plans`);
      const o=[];
      for(const a of s.children){
        if(!a.isFile||!a.name.endsWith(".plan.md"))continue;
        const l=a.resource,u=Wo(i,a.name);
        try{
          if(await this.fileService.exists(u)){
            console.log(`[PlanStorageService] Plan file already exists at new location, skipping: ${a.name}`),o.push({
              oldUri:l,newUri:u
            }),await this.fileService.del(l);
            continue
          }
          const m=await this.fileService.readFile(l);
          await this.fileService.writeFile(u,m.value);
          for(const[p,g]of this.registry.entries())if(Iu.isEqual(g.uri,l)){
            g.uri=u,console.log(`[PlanStorageService] Updated registry entry for plan: ${p}`);
            break
          }
          o.push({
            oldUri:l,newUri:u
          }),await this.fileService.del(l),console.log(`[PlanStorageService] Migrated plan file: ${a.name}`)
        }
        catch(d){
          console.error(`[PlanStorageService] Failed to migrate plan file ${a.name}:`,d)
        }
      }
      await this.saveRegistry(),await this.replaceEditorsForMigratedPlans(o);
      try{
        const a=await this.fileService.resolve(t);
        (!a.children||a.children.length===0)&&(await this.fileService.del(t),console.log("[PlanStorageService] Removed empty old plans directory"))
      }
      catch{
        
      }
      this.storageService.store(this.migrationKey,!0,0,0),console.log("[PlanStorageService] Plan migration completed successfully")
    }
    catch(t){
      console.error("[PlanStorageService] Failed to migrate plans:",t)
    }
  }
  async replaceEditorsForMigratedPlans(e){
    if(e.length===0)return;
    const t=new Map;
    for(const{
      oldUri:i,newUri:r
    }
    of e){
      const s=this.editorService.findEditors(i);
      if(s.length!==0)for(const{
        groupId:o,editor:a
      }
      of s){
        const l=t.get(o)??[];
        l.push({
          editor:a,replacement:{
            resource:r,options:{
              preserveFocus:!0
            }
          }
        }),t.set(o,l)
      }
    }
    for(const[i, r]of t)try{
      await this.editorService.replaceEditors(r.map(s=>({
        editor:s.editor,replacement:s.replacement
      })),i),console.log(`[PlanStorageService] Replaced ${r.length} editor(s) in group ${i}`)
    }
    catch(s){
      console.error(`[PlanStorageService] Failed to replace editors in group ${i}:`,s)
    }
  }
  recordRedirect(e, t){
    if(e!==t){
      this.redirects.set(e,t);
      for(const[i,r]of this.redirects.entries())r===e&&this.redirects.set(i,t)
    }
  }
  resolveRedirects(e){
    let t=e, i=0;
    const r=10;
    for(;
    this.redirects.has(t)&&i<r;
    )t=this.redirects.get(t), i++;
    return t
  }
  async getUserPlansDir(){
    const e=await this.pathService.userHome();
    return Wo(e, ".cursor", "plans")
  }
  getWorkspacePlansDir(){
    const e=this.workspaceContextService.getWorkspace();
    if(e.folders.length)return Wo(e.folders[0].uri, ".cursor", "plans")
  }
  async writePlanFileWithFallback(e, t){
    const i=await this.getUserPlansDir();
    try{
      try{
        await this.fileService.createFolder(i)
      }
      catch(a){
        if(this.isPermissionError(a))throw a
      }
      const o=Wo(i,e);
      return await this.fileService.writeFile(o,Ms.fromString(t)),o
    }
    catch(o){
      if(!this.isPermissionError(o))throw o;
      console.warn("[PlanStorageService] Permission denied writing to user plans directory, falling back to workspace .cursor/plans:",o)
    }
    const r=this.getWorkspacePlansDir();
    if(!r)throw new Error("Cannot write plan file: permission denied for user home directory and no workspace folder is available");
    try{
      await this.fileService.createFolder(r)
    }
    catch{
      
    }
    const s=Wo(r, e);
    return await this.fileService.writeFile(s, Ms.fromString(t)), s
  }
  isPermissionError(e){
    return e instanceof Error?tRe(e)===Qm.NoPermissions:!1
  }
  sanitizeFileName(e){
    return e.toLowerCase().replace(/[<>:"/\\|?*]/g,"_").replace(/\s+/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"").slice(0,100)}computeUniqueFileName(e,t){const i=this.sanitizeFileName(e),r=t.slice(0,8);return`${i}-${r}.plan.md`}async createPlanForComposer(e){await this.loadRegistry();const t=Wr().slice(0,8),r=`${this.sanitizeFileName(e.name)}_${t}`,s=`${r}.plan.md`,o=this.getVirtualUri(r),a={name:e.name,overview:e.overview,todos:e.todos,isProject:e.isProject,phases:e.phases},l=pnt(a)+`

`+e.body,u=await this.writePlanFileWithFallback(s,l),d=Date.now(),m={id:r,name:e.name,uri:u,createdBy:e.composerId,editedBy:[e.composerId],referencedBy:[e.composerId],builtBy:{},lastUpdatedAt:d,createdAt:d};return this.registry.set(r,m),await this.saveRegistry(),this._onDidChangePlan.fire({planId:r,uri:u}),{planId:r,fileUri:u,virtualUri:o}}async loadPlanByUri(e){if(e.scheme===_n.cursorPlan){const o=await this.resolveVirtualUri(e);if(!o)throw new Error(`Plan not found for virtual URI: ${e.toString()}`);e=o.uri}let t=e;try{if(!await this.fileService.exists(e)){const a=await this.getRegistryEntry(e);a&&(t=a.uri)}}catch{const o=await this.getRegistryEntry(e);o&&(t=o.uri)}const r=(await this.fileService.readFile(t)).value.toString(),s=tkt(r);return s?{metadata:s.frontmatter,body:s.body}:this.parseLegacyFormat(r)}parseLegacyFormat(e){const t=xAi(e);return{metadata:t.frontmatter,body:t.body}}async loadPlanById(e){await this.loadRegistry();const t=this.resolveRedirects(e),i=this.registry.get(t);if(i)return this.loadPlanByUri(i.uri)}async updatePlanContent(e,t,i){await this.loadRegistry();const r=await this.getRegistryEntry(e);if(!r)throw new Error(`Plan not found: ${e}`);const s=await this.loadPlanByUri(r.uri),o=pnt(s.metadata)+`

`+t,a=await this.textModelService.createModelReference(r.uri);try{a.object.textEditorModel.setValue(o),await this.textFileService.save(r.uri,{force:!0})}finally{a.dispose()}r.lastUpdatedAt=Date.now(),i&&!r.editedBy.includes(i)&&r.editedBy.push(i),this.registry.set(r.id,r),await this.saveRegistry(),this._onDidChangePlan.fire({planId:r.id,uri:r.uri})}async updatePlanMetadata(e,t,i){await this.loadRegistry();const r=await this.getRegistryEntry(e);if(!r)throw new Error(`Plan not found: ${e}`);const s=await this.loadPlanByUri(r.uri),o={name:t.name??s.metadata.name,overview:t.overview??s.metadata.overview,todos:t.todos??s.metadata.todos,isProject:t.isProject??s.metadata.isProject??!1,phases:t.phases??s.metadata.phases},a=pnt(o)+`

`+s.body,l=await this.textModelService.createModelReference(r.uri);try{l.object.textEditorModel.setValue(a),await this.textFileService.save(r.uri,{force:!0})}finally{l.dispose()}o.name!==r.name&&(r.name=o.name),r.lastUpdatedAt=Date.now(),i&&!r.editedBy.includes(i)&&r.editedBy.push(i),this.registry.set(r.id,r),await this.saveRegistry(),this._onDidChangePlan.fire({planId:r.id,uri:r.uri})}async updatePlanMetadataWithBody(e,t,i,r){await this.loadRegistry();const s=await this.getRegistryEntry(e);if(!s)throw new Error(`Plan not found: ${e}`);const o=await this.loadPlanByUri(s.uri),a={name:t.name??o.metadata.name,overview:t.overview??o.metadata.overview,todos:t.todos??o.metadata.todos,isProject:t.isProject??o.metadata.isProject??!1,phases:t.phases??o.metadata.phases},l=pnt(a)+`

`+i,u=await this.textModelService.createModelReference(s.uri);try{u.object.textEditorModel.setValue(l),await this.textFileService.save(s.uri,{force:!0})}finally{u.dispose()}a.name!==s.name&&(s.name=a.name),s.lastUpdatedAt=Date.now(),r&&!s.editedBy.includes(r)&&s.editedBy.push(r),this.registry.set(s.id,s),await this.saveRegistry(),this._onDidChangePlan.fire({planId:s.id,uri:s.uri})}async movePlanToWorkspace(e,t){await this.loadRegistry();const i=await this.getRegistryEntry(e);if(!i)throw new Error(`Plan not found: ${e}`);const r=Wo(t,".cursor","plans");try{await this.fileService.createFolder(r)}catch{}const s=`${i.id}.plan.md`,o=Wo(r,s);return await this.fileService.move(i.uri,o,!0),i.uri=o,i.lastUpdatedAt=Date.now(),this.registry.set(i.id,i),await this.saveRegistry(),this._onDidChangePlan.fire({planId:i.id,uri:o}),o}async getRegistryEntry(e){if(await this.loadRegistry(),typeof e=="string"){const i=this.resolveRedirects(e);return this.registry.get(i)}if(e.scheme===_n.cursorPlan)return this.resolveVirtualUri(e);for(const i of this.registry.values())if(i.uri.fsPath===e.fsPath)return i;const t=this.extractPlanIdFromUri(e);if(t){const i=this.resolveRedirects(t),r=this.registry.get(i);if(r)return r}}extractPlanIdFromUri(e){const i=e.path.match(/\/([^/]+)\.plan\.md$/);return i?i[1]:void 0}getVirtualUri(e){return je.from({scheme:_n.cursorPlan,authority:"plan",path:`/${e}.plan.md`})}async resolveVirtualUri(e){await this.loadRegistry();const t=e.path.match(/\/([^/]+)\.plan\.md$/);if(t){const r=t[1],s=this.resolveRedirects(r);return this.registry.get(s)}const i=e.authority;if(i&&i!=="plan"){for(const r of this.registry.values())if(r.createdBy===i)return r}}async registerExistingPlan(e,t){await this.loadRegistry();const i=await this.getRegistryEntry(e);if(i)return t&&!i.editedBy.includes(t)&&(i.editedBy.push(t),i.lastUpdatedAt=Date.now(),await this.saveRegistry()),i;const r=await this.loadPlanByUri(e),s=e.path.split("/").pop()||"";let o;if(s.endsWith(".plan.md"))o=s.slice(0,-8);else{const u=Wr().slice(0,8);o=`${this.sanitizeFileName(r.metadata.name||"plan")}_${u}`}const a=Date.now(),l={id:o,name:r.metadata.name||"Untitled Plan",uri:e,createdBy:t??"",editedBy:t?[t]:[],referencedBy:t?[t]:[],builtBy:{},lastUpdatedAt:a,createdAt:a};return this.registry.set(o,l),await this.saveRegistry(),console.log("[PlanStorageService] Registered existing plan:",o,"for composer:",t??"(manual)"),l}async getPlanForComposer(e){await this.loadRegistry();let t;for(const i of this.registry.values())i.createdBy===e&&i.referencedBy.includes(e)&&(!t||i.lastUpdatedAt>t.lastUpdatedAt)&&(t=i);if(!t)for(const i of this.registry.values())e in i.builtBy&&i.referencedBy.includes(e)&&(!t||i.lastUpdatedAt>t.lastUpdatedAt)&&(t=i);return t}async adoptPlan(e,t){await this.loadRegistry();const i=await this.getRegistryEntry(e);if(i)return i.createdBy=t,i.lastUpdatedAt=Date.now(),i.editedBy.includes(t)||i.editedBy.push(t),i.referencedBy.includes(t)||i.referencedBy.push(t),this.registry.set(i.id,i),await this.saveRegistry(),i}async registerBuild(e,t,i){await this.loadRegistry();const r=await this.getRegistryEntry(e);if(!r)throw new Error(`Plan not found: ${e}`);const s=r.builtBy[t];(!s||JSON.stringify(s)!==JSON.stringify(i))&&(r.builtBy[t]=i,r.lastUpdatedAt=Date.now(),this.registry.set(r.id,r),await this.saveRegistry(),this._onDidChangePlan.fire({planId:r.id,uri:r.uri}))}getPlanStatus(e,t){return Object.keys(e.builtBy).length===0?j$e.PENDING:t.some(r=>r.status==="pending"||r.status==="in_progress")?j$e.IN_PROGRESS:j$e.COMPLETE}getRegistryEntrySync(e){if(!this.registryLoaded)return;if(typeof e=="string"){const i=this.resolveRedirects(e);return this.registry.get(i)}if(e.scheme===_n.cursorPlan){const i=e.path.match(/\/([^/]+)\.plan\.md$/);if(i){const r=i[1],s=this.resolveRedirects(r);return this.registry.get(s)}}for(const i of this.registry.values())if(i.uri.fsPath===e.fsPath)return i;const t=this.extractPlanIdFromUri(e);if(t){const i=this.resolveRedirects(t),r=this.registry.get(i);if(r)return r}}async getPlanEntriesBuiltBy(e){await this.loadRegistry();const t=[];for(const i of this.registry.values())e in i.builtBy&&t.push({planId:i.id,uri:i.uri});return t}rebuildInvertedIndex(){this.composerToPlans.clear();for(const e of this.registry.values())for(const t of e.referencedBy)this.composerToPlans.has(t)||this.composerToPlans.set(t,new Set),this.composerToPlans.get(t).add(e.id)}async updateComposerReferences(e,t){const i=new Set;for(const o of t){const a=je.parse(o),l=this.getRegistryEntrySync(a);l&&i.add(l.id)}const r=this.composerToPlans.get(e)??new Set,s=[];for(const o of r)if(!i.has(o)){const a=this.registry.get(o);a&&(a.referencedBy=a.referencedBy.filter(l=>l!==e),s.push(a))}for(const o of i){const a=this.registry.get(o);a&&!a.referencedBy.includes(e)&&(a.referencedBy.push(e),s.push(a))}if(i.size>0?this.composerToPlans.set(e,i):this.composerToPlans.delete(e),s.length>0){await this.saveRegistry();for(const o of s)this._onDidChangePlan.fire({planId:o.id,uri:o.uri})}}async dereferencePlansCreatedByComposer(e,t){if(await this.loadRegistry(),t.length===0)return[];const i=new Set(t.map(l=>l.fsPath)),r=[],s=new Set,o=this.composerToPlans.get(e);let a=!1;for(const l of this.registry.values())if(l.createdBy===e&&i.has(l.uri.fsPath)&&l.referencedBy.includes(e))if(r.push({planId:l.id,uri:l.uri}),l.referencedBy=l.referencedBy.filter(u=>u!==e),o?.delete(l.id),a=!0,l.referencedBy.length===0){this.registry.delete(l.id),s.add(l.id);for(const[u,d]of this.redirects.entries())(u===l.id||d===l.id)&&s.add(u);for(const u of this.composerToPlans.values())u.delete(l.id)}else this.registry.set(l.id,l);o&&o.size===0&&this.composerToPlans.delete(e);for(const[l,u]of this.composerToPlans.entries())u.size===0&&this.composerToPlans.delete(l);for(const l of s)this.redirects.delete(l);(a||s.size>0)&&await this.saveRegistry();for(const l of r)this._onDidChangePlan.fire({planId:l.planId,uri:l.uri});return r}async updatePlanFull(e,t,i){await this.loadRegistry();const r=await this.getRegistryEntry(e);if(!r)throw new Error(`Plan not found: ${e}`);const s=await this.loadPlanByUri(r.uri),o={name:s.metadata.name,overview:s.metadata.overview,todos:s.metadata.todos,body:s.body,isProject:s.metadata.isProject,phases:s.metadata.phases},a=PVg(o,{name:t.name,overview:t.overview,todos:t.todos,plan:t.body}),l=a.name!==o.name,u={name:a.name,overview:a.overview,todos:a.todos,isProject:t.isProject??o.isProject,phases:t.phases??o.phases},d=a.body;let m=r.uri,p=r.id;if(l&&t.name){const A=r.id.lastIndexOf("_"),w=A!==-1?r.id.slice(A+1):Wr().slice(0,8);p=`${this.sanitizeFileName(t.name)}_${w}`;const x=`${p}.plan.md`,I=r.uri.path,B=I.lastIndexOf("/"),R=B!==-1?I.slice(0,B):"";m=r.uri.with({path:`${R}/${x}`})}const g=pnt(u)+`

`+d,f=await this.textModelService.createModelReference(m);try{f.object.textEditorModel.setValue(g),await this.textFileService.save(m,{force:!0})}finally{f.dispose()}if(l&&m.toString()!==r.uri.toString()){const A=r.id;try{await this.fileService.del(r.uri)}catch(w){console.warn("[PlanStorageService] Failed to delete old plan file:",w)}this.registry.delete(r.id),r.id=p,r.uri=m,this.recordRedirect(A,p)}r.name=u.name,r.lastUpdatedAt=Date.now(),r.editedBy.includes(i)||r.editedBy.push(i),this.registry.set(r.id,r),await this.saveRegistry(),this._onDidChangePlan.fire({planId:r.id,uri:r.uri})}async updatePlanModelDirty(e,t,i){await this.loadRegistry();const r=await this.textModelService.createModelReference(e),s=r.object.textEditorModel;let o;const a=s.getValue();if(a.trim()==="")o={name:"",overview:"",todos:[],body:"",isProject:!1,phases:void 0};else{const p=tkt(a);if(p)o={name:p.frontmatter.name??"",overview:p.frontmatter.overview??"",todos:p.frontmatter.todos??[],body:p.body,isProject:p.frontmatter.isProject??!1,phases:p.frontmatter.phases};else{const g=xAi(a);o={name:g.frontmatter.name??"",overview:g.frontmatter.overview??"",todos:g.frontmatter.todos??[],body:g.body,isProject:!1,phases:void 0}}}const l=PVg(o,{name:t.name,overview:t.overview,todos:t.todos,plan:t.body}),u={name:l.name,overview:l.overview,todos:l.todos,isProject:t.isProject??o.isProject,phases:t.phases??o.phases},d=pnt(u)+`

`+l.body;s.setValue(d);const m=await this.getRegistryEntry(e);return m&&(m.name=l.name,m.lastUpdatedAt=Date.now(),m.editedBy.includes(i)||m.editedBy.push(i),this.registry.set(m.id,m),await this.saveRegistry()),r}async savePlanModel(e){await this.textFileService.save(e,{force:!0});const t=await this.getRegistryEntry(e);t&&this._onDidChangePlan.fire({planId:t.id,uri:t.uri})}async resolveCurrentUri(e){const t=await this.getRegistryEntry(e);return t?t.uri:e}},Uba=__decorate([__param(0,Gr),__param(1,Hi),__param(2,Lr),__param(3,kp),__param(4,Cc),__param(5,yi),__param(6,El),__param(7,Gg)],Uba),Vi(TAi,Uba,1)}}),jNe,ikt,$ba=