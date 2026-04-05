// Module: out-build/vs/workbench/services/search/common/queryBuilder.js
// Offset: 28180293 (bundle byte offset)
// Size: 9605 bytes

Vs(), Ate(), iR(), iL(), cu(), zr(), Hl(), Yr(), oa(), Js(), Yn(), i9e(), Ht(), Ei(), jr(), _d(), ps(), od(), _g(), wE(), yV=class{
  constructor(e, t, i, r, s, o){
    this.configurationService=e, this.workspaceContextService=t, this.editorGroupsService=i, this.logService=r, this.pathService=s, this.uriIdentityService=o
  }
  aiText(e, t, i={
    
  }){
    return{
      ...this.commonQuery(t?.map(K4n),i),type:3,contentPattern:e
    }
  }
  text(e, t, i={
    
  }){
    e=this.getContentPattern(e, i);
    const r=this.configurationService.getValue(), s=t&&t.some(a=>!this.configurationService.getValue({
      resource:a
    }).search.useRipgrep);
    return{
      ...this.commonQuery(t?.map(K4n),i),type:2,contentPattern:e,previewOptions:i.previewOptions,maxFileSize:i.maxFileSize,usePCRE2:r.search.usePCRE2||s||!1,surroundingContext:i.surroundingContext,userDisabledExcludesAndIgnoreFiles:i.disregardExcludeSettings&&i.disregardIgnoreFiles,useIndex:i.useIndex
    }
  }
  getContentPattern(e, t){
    const i=this.configurationService.getValue();
    e.isRegExp&&(e.pattern=e.pattern.replace(/\r?\n/g, "\\n"));
    const r={
      ...e,wordSeparators:i.editor.wordSeparators
    };
    return this.isCaseSensitive(e, t)&&(r.isCaseSensitive=!0), this.isMultiline(e)&&(r.isMultiline=!0), t.notebookSearchConfig?.includeMarkupInput&&(r.notebookInfo||(r.notebookInfo={
      
    }), r.notebookInfo.isInNotebookMarkdownInput=t.notebookSearchConfig.includeMarkupInput), t.notebookSearchConfig?.includeMarkupPreview&&(r.notebookInfo||(r.notebookInfo={
      
    }), r.notebookInfo.isInNotebookMarkdownPreview=t.notebookSearchConfig.includeMarkupPreview), t.notebookSearchConfig?.includeCodeInput&&(r.notebookInfo||(r.notebookInfo={
      
    }), r.notebookInfo.isInNotebookCellInput=t.notebookSearchConfig.includeCodeInput), t.notebookSearchConfig?.includeOutput&&(r.notebookInfo||(r.notebookInfo={
      
    }), r.notebookInfo.isInNotebookCellOutput=t.notebookSearchConfig.includeOutput), r
  }
  file(e, t={
    
  }){
    return{
      ...this.commonQuery(e,t),type:1,filePattern:t.filePattern?t.filePattern.trim():t.filePattern,exists:t.exists,sortByScore:t.sortByScore,cacheKey:t.cacheKey,shouldGlobMatchFilePattern:t.shouldGlobSearch
    }
  }
  handleIncludeExclude(e, t){
    if(!e)return{
      
    };
    if(Array.isArray(e)){
      if(e=e.filter(i=>i.length>0).map(gva),!e.length)return{
        
      }
    }
    else e=gva(e);
    return t?this.parseSearchPaths(e):{
      pattern:cau(...Array.isArray(e)?e:[e])
    }
  }
  commonQuery(e=[], t={
    
  }){
    let i=Array.isArray(t.excludePattern)?t.excludePattern.map(d=>d.pattern).flat():t.excludePattern;
    i=i?.length===1?i[0]:i;
    const r=this.handleIncludeExclude(t.includePattern, t.expandPatterns), s=this.handleIncludeExclude(i, t.expandPatterns), o=e.length>1, a=(r.searchPaths&&r.searchPaths.length?r.searchPaths.map(d=>this.getFolderQueryForSearchPath(d, t, s)):e.map(d=>this.getFolderQueryForRoot(d, t, s, o))).filter(d=>!!d), l={
      _reason:t._reason,folderQueries:a,usingSearchPaths:!!(r.searchPaths&&r.searchPaths.length),extraFileResources:t.extraFileResources,excludePattern:s.pattern,includePattern:r.pattern,onlyOpenEditors:t.onlyOpenEditors,maxResults:t.maxResults,onlyFileScheme:t.onlyFileScheme
    };
    if(t.onlyOpenEditors){
      const d=lh(this.editorGroupsService.groups.flatMap(g=>g.editors.map(f=>f.resource)));
      this.logService.trace("QueryBuilder#commonQuery - openEditor URIs",JSON.stringify(d));
      const m=d.filter(g=>WAi(l,g.fsPath)),p=this.commonQueryFromFileList(m);
      return this.logService.trace("QueryBuilder#commonQuery - openEditor Query",JSON.stringify(p)),{
        ...l,...p
      }
    }
    const u=t.extraFileResources&&t.extraFileResources.filter(d=>WAi(l, d.fsPath));
    return l.extraFileResources=u&&u.length?u:void 0, l
  }
  commonQueryFromFileList(e){
    const t=[], i=new fu, r={
      
    };
    let s=!1;
    return e.forEach(o=>{
      if(o.scheme===_n.walkThrough)return;
      if(yCc(o)){
        const l=this.workspaceContextService.getWorkspaceFolder(o)?.uri??this.uriIdentityService.extUri.dirname(o);
        let u=i.get(l);
        u||(s=!0,u={
          folder:l,includePattern:{
            
          }
        },t.push(u),i.set(l,u));
        const d=DBe(l.fsPath,o.fsPath);
        ed(u.includePattern)[d.replace(/\\/g,"/")]=!0
      }
      else o.fsPath&&(s=!0,r[o.fsPath]=!0)
    }), {
      folderQueries:t,includePattern:r,usingSearchPaths:!0,excludePattern:s?void 0:{
        "**/*":!0
      }
    }
  }
  isCaseSensitive(e, t){
    if(t.isSmartCase){
      if(e.isRegExp){
        if(z0c(e.pattern,!0))return!0
      }
      else if(z0c(e.pattern))return!0
    }
    return!!e.isCaseSensitive
  }
  isMultiline(e){
    return e.isMultiline||e.isRegExp&&YEc(e.pattern)||e.pattern.indexOf(`
`)>=0?!0:!!e.isMultiline
  }
  parseSearchPaths(e){
    const t=m=>FR(m)||/^\.\.?([\/\\]|$)/.test(m), r=(Array.isArray(e)?e:E9A(e)).map(m=>{
      const p=this.pathService.resolvedUserHome;
      return p?mBc(m,p.scheme===_n.file?p.fsPath:p.path):m
    }), s=vze(r, m=>t(m)?"searchPaths":"exprSegments"), o=(s.exprSegments||[]).map(m=>xH(m, "/")).map(m=>xH(m, "\\")).map(m=>(m[0]==="."&&(m="*"+m), x9A(m))), a={
      
    }, l=this.expandSearchPathPatterns(s.searchPaths||[]);
    l&&l.length&&(a.searchPaths=l);
    const u=o.flat(), d=cau(...u);
    return d&&(a.pattern=d), a
  }
  getExcludesForFolder(e, t){
    return t.disregardExcludeSettings?void 0:GAi(e, !t.disregardSearchExcludeSettings)
  }
  expandSearchPathPatterns(e){
    if(!e||!e.length)return[];
    const t=e.flatMap(r=>{
      let{
        pathPortion:s,globPortion:o
      }
      =k9A(r);
      return o&&(o=lau(o)),this.expandOneSearchPath(s).flatMap(l=>this.resolveOneSearchPathPattern(l,o))
    }), i=new Map;
    return t.forEach(r=>{
      const s=r.searchPath.toString(),o=i.get(s);
      o?r.pattern&&(o.pattern=o.pattern||{
        
      },o.pattern[r.pattern]=!0):i.set(s,{
        searchPath:r.searchPath,pattern:r.pattern?cau(r.pattern):void 0
      })
    }), Array.from(i.values())
  }
  expandOneSearchPath(e){
    if(FR(e)){
      const t=this.workspaceContextService.getWorkspace().folders;
      return t[0]&&t[0].uri.scheme!==_n.file?[{
        searchPath:t[0].uri.with({
          path:e
        })
      }
      ]:[{
        searchPath:je.file(k6(e))
      }
      ]
    }
    if(this.workspaceContextService.getWorkbenchState()===2){
      const t=this.workspaceContextService.getWorkspace().folders[0].uri;
      if(e=gva(e),e.startsWith("../")||e===".."){
        const r=Rm.resolve(t.path,e);
        return[{
          searchPath:t.with({
            path:r
          })
        }
        ]
      }
      const i=lau(e);
      return[{
        searchPath:t,pattern:i
      }
      ]
    }
    else{
      if(e==="./"||e===".\\")return[];
      {
        const t=e.replace(/^\.[\/\\]/,""),r=this.workspaceContextService.getWorkspace().folders.map(s=>{
          const o=t.match(new RegExp(`^${UI(s.name)}(?:/(.*)|$)`));
          return o?{
            match:o,folder:s
          }
          :null
        }).filter(Ch);
        if(r.length)return r.map(s=>{
          const o=s.match[1];
          return{
            searchPath:s.folder.uri,pattern:o&&lau(o)
          }
        });
        {
          const s=e.match(/\.[\/\\](.+)[\/\\]?/),o=s?s[1]:e,a=_(14465,null,o);
          throw new Error(a)
        }
      }
    }
  }
  resolveOneSearchPathPattern(e, t){
    const i=e.pattern&&t?`${e.pattern}/${t}`:e.pattern||t, r=[{
      searchPath:e.searchPath,pattern:i
    }
    ];
    return i&&!i.endsWith("**")&&r.push({
      searchPath:e.searchPath,pattern:i+"/**"
    }), r
  }
  getFolderQueryForSearchPath(e, t, i){
    const r=this.getFolderQueryForRoot(K4n(e.searchPath), t, i, !1);
    return r?{
      ...r,includePattern:e.pattern
    }
    :null
  }
  getFolderQueryForRoot(e, t, i, r){
    let s;
    const o=je.isUri(e)?e:e.uri;
    let a=t.excludePattern?.map(g=>{
      const f=t.excludePattern&&S9A(g)?g.uri:void 0;
      return!f||!(je.isUri(e)&&this.uriIdentityService.extUri.isEqual(e,f))?f:void 0
    });
    if(a?.length||(a=[void 0]), i.searchPaths){
      const g=i.searchPaths.filter(f=>Zc(f.searchPath,o))[0];
      if(g&&!g.pattern)return null;
      g&&(s=g.pattern)
    }
    const l=this.configurationService.getValue({
      resource:o
    }), d={
      ...this.getExcludesForFolder(l,t)||{
        
      },...s||{
        
      }
    }, m=je.isUri(e)?ca(e):e.name, p=a.map(g=>Object.keys(d).length>0?{
      folder:g,pattern:d
    }
    :void 0).filter(g=>g);
    return{
      folder:o,folderName:r?m:void 0,excludePattern:p,fileEncoding:l.files&&l.files.encoding,disregardIgnoreFiles:typeof t.disregardIgnoreFiles=="boolean"?t.disregardIgnoreFiles:!l.search.useIgnoreFiles,disregardGlobalIgnoreFiles:typeof t.disregardGlobalIgnoreFiles=="boolean"?t.disregardGlobalIgnoreFiles:!l.search.useGlobalIgnoreFiles,disregardParentIgnoreFiles:typeof t.disregardParentIgnoreFiles=="boolean"?t.disregardParentIgnoreFiles:!l.search.useParentIgnoreFiles,ignoreSymlinks:typeof t.ignoreSymlinks=="boolean"?t.ignoreSymlinks:!l.search.followSymlinks
    }
  }
}, yV=__decorate([__param(0, Fn), __param(1, Lr), __param(2, da), __param(3, Rr), __param(4, kp), __param(5, xl)], yV)
}
});
async function KXg(n, e=new Set, t=Cs.None){
  const i=bva.all().filter(a=>!e.has(a.extensionID.toLowerCase())), r=[], s=i.map(async a=>{
    try{
      const l=await a.provideWorkspaceSymbols(n,t);
      if(!l)return;
      let u=0;
      for(const d of l){
        if(u++,u>100)break;
        r.push(new YXg(d,a))
      }
    }
    catch(l){
      JE(l)
    }
  });
  if(await Promise.all(s), t.isCancellationRequested)return[];
  function o(a, l){
    let u=R4(a.symbol.name, l.symbol.name);
    return u===0&&(u=a.symbol.kind-l.symbol.kind), u===0&&(u=R4(a.symbol.location.uri.toString(), l.symbol.location.uri.toString())), u===0&&(a.symbol.location.range&&l.symbol.location.range?Zt.areIntersecting(a.symbol.location.range, l.symbol.location.range)||(u=Zt.compareRangesUsingStarts(a.symbol.location.range, l.symbol.location.range)):a.provider.resolveWorkspaceSymbol&&!l.provider.resolveWorkspaceSymbol?u=-1:!a.provider.resolveWorkspaceSymbol&&l.provider.resolveWorkspaceSymbol&&(u=1)), u===0&&(u=R4(a.symbol.containerName??"", l.symbol.containerName??"")), u
  }
  return yte(r, o).map(a=>a[0]).flat()
}
function fva(n){
  const e=n.get(yi), t=n.get(Lr), i=n.get(Gr);
  return e.editors.map(s=>gp.getOriginalUri(s, {
    supportSideBySide:op.PRIMARY
  })).filter(s=>!!s&&!t.isInsideWorkspace(s)&&i.hasProvider(s)).filter(s=>s&&!s.path.includes("/.cursor/worktrees/"))
}
function D9A(n, e){
  if(!n||e?.some(r=>{
    const s=n.indexOf(r);
    return s===0||s>0&&!uau.test(n.substring(s+1))
  }))return;
  let t;
  const i=uau.exec(n);
  if(i){
    const r=parseInt(i[1]??"", 10);
    if(_1(r)){
      t={
        startLineNumber:r,startColumn:1,endLineNumber:r,endColumn:1
      };
      const s=parseInt(i[2]??"",10);
      _1(s)&&(t={
        startLineNumber:t.startLineNumber,startColumn:s,endLineNumber:t.endLineNumber,endColumn:s
      })
    }
    else i[1]===""&&(t={
      startLineNumber:1,startColumn:1,endLineNumber:1,endColumn:1
    })
  }
  if(i&&t)return{
    filter:n.substr(0, i.index), range:t
  }
}
var bva, YXg, uau, pie, jAi, ynt=