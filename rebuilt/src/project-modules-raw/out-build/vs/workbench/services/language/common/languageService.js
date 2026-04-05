// Module: out-build/vs/workbench/services/language/common/languageService.js
// Offset: 30961861 (bundle byte offset)
// Size: 4353 bytes

Ht(), R_i(), Yr(), Ku(), Fry(), Ei(), qg(), ns(), _u(), xI(), Er(), jr(), rt(), aO(), Ws(), Mf(), Vs(), tg(), Js(), v1t=K0.registerExtensionPoint({
  extensionPoint:"languages", jsonSchema:{
    description:_(14343, null), type:"array", items:{
      type:"object",defaultSnippets:[{
        body:{
          id:"${1:languageId}",aliases:["${2:label}"],extensions:["${3:extension}"],configuration:"./language-configuration.json"
        }
      }
      ],properties:{
        id:{
          description:_(14344,null),type:"string"
        },aliases:{
          description:_(14345,null),type:"array",items:{
            type:"string"
          }
        },extensions:{
          description:_(14346,null),default:[".foo"],type:"array",items:{
            type:"string"
          }
        },filenames:{
          description:_(14347,null),type:"array",items:{
            type:"string"
          }
        },filenamePatterns:{
          description:_(14348,null),type:"array",items:{
            type:"string"
          }
        },mimetypes:{
          description:_(14349,null),type:"array",items:{
            type:"string"
          }
        },firstLine:{
          description:_(14350,null),type:"string"
        },configuration:{
          description:_(14351,null),type:"string",default:"./language-configuration.json"
        },icon:{
          type:"object",description:_(14352,null),properties:{
            light:{
              description:_(14353,null),type:"string"
            },dark:{
              description:_(14354,null),type:"string"
            }
          }
        }
      }
    }
  }, activationEventsGenerator:(n, e)=>{
    for(const t of n)t.id&&t.configuration&&e.push(`onLanguage:${t.id}`)
  }
}), lTf=class extends at{
  constructor(){
    super(...arguments), this.type="table"
  }
  shouldRender(n){
    return!!n.contributes?.languages
  }
  render(n){
    const e=n.contributes, t=e?.languages||[], i=[];
    for(const u of t)cTf(u)&&i.push({
      id:u.id,name:(u.aliases||[])[0]||u.id,extensions:u.extensions||[],hasGrammar:!1,hasSnippets:!1
    });
    const r=U2n(i, u=>u.id);
    if((e?.grammars||[]).forEach(u=>{
      if(!Qo(u.language))return;
      let d=r[u.language];
      d?d.hasGrammar=!0:(d={
        id:u.language,name:u.language,extensions:[],hasGrammar:!0,hasSnippets:!1
      },r[d.id]=d,i.push(d))
    }), (e?.snippets||[]).forEach(u=>{
      if(!Qo(u.language))return;
      let d=r[u.language];
      d?d.hasSnippets=!0:(d={
        id:u.language,name:u.language,extensions:[],hasGrammar:!1,hasSnippets:!0
      },r[d.id]=d,i.push(d))
    }), !i.length)return{
      data:{
        headers:[],rows:[]
      },dispose:()=>{
        
      }
    };
    const a=[_(14355, null), _(14356, null), _(14357, null), _(14358, null), _(14359, null)], l=i.sort((u, d)=>u.id.localeCompare(d.id)).map(u=>[u.id, u.name, new _c().appendMarkdown(`${u.extensions.map(d=>`\`${d}\``).join("&nbsp;")
  }
  `),u.hasGrammar?"\u2714\uFE0E":"\u2014",u.hasSnippets?"\u2714\uFE0E":"\u2014"]);return{data:{headers:a,rows:l},dispose:()=>{}}}},Di.as(hP.ExtensionFeaturesRegistry).registerExtensionFeature({id:"languages",label:_(14360,null),access:{canToggle:!1},renderer:new Xl(lTf)}),ICa=class extends aTf{constructor(e,t,i,r){super(i.verbose||i.isExtensionDevelopment||!i.isBuilt),this.logService=r,this._configurationService=t,this._extensionService=e,v1t.setHandler(s=>{const o=[];for(let a=0,l=s.length;a<l;a++){const u=s[a];if(!Array.isArray(u.value)){u.collector.error(_(14361,null,v1t.name));continue}for(let d=0,m=u.value.length;d<m;d++){const p=u.value[d];if(cTf(p,u.collector)){let g;p.configuration&&(g=Wo(u.description.extensionLocation,p.configuration)),o.push({id:p.id,extensions:p.extensions,filenames:p.filenames,filenamePatterns:p.filenamePatterns,firstLine:p.firstLine,aliases:p.aliases,mimetypes:p.mimetypes,configuration:g,icon:p.icon&&{light:Wo(u.description.extensionLocation,p.icon.light),dark:Wo(u.description.extensionLocation,p.icon.dark)}})}}}this._registry.setDynamicLanguages(o)}),this.updateMime(),this._register(this._configurationService.onDidChangeConfiguration(s=>{s.affectsConfiguration(gOt)&&this.updateMime()})),this._extensionService.whenInstalledExtensionsRegistered().then(()=>{this.updateMime()}),this._register(this.onDidRequestRichLanguageFeatures(s=>{this._extensionService.activateByEvent(`onLanguage:${
    s
  }
  `),this._extensionService.activateByEvent("onLanguage")}))}updateMime(){const e=this._configurationService.getValue();Pry(),e.files?.associations&&Object.keys(e.files.associations).forEach(t=>{const i=e.files.associations[t];if(typeof i!="string"){this.logService.warn(`Ignoring configured 'files.associations' for '${t}' because its type is not a string but '${typeof i}'`);return}const r=this.getMimeType(i)||`text/x-${
    i
  }
  `;Dry({id:i,mime:r,filepattern:t})}),this._onDidChange.fire()}},ICa=__decorate([__param(0,su),__param(1,Fn),__param(2,lg),__param(3,Rr)],ICa),Vi(Jl,ICa,0)}}),zpu,Ign,BCa,uTf=