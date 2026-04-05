// Module: out-build/vs/platform/languagePacks/common/languagePacks.js
// Offset: 32640264 (bundle byte offset)
// Size: 1115 bytes

Po(), rt(), _r(), Ht(), Gv(), Wt(), Vfn=xi("languagePackService"), vyu=class extends at{
  constructor(e){
    super(), this.extensionGalleryService=e
  }
  async getAvailableLanguages(){
    const e=new Wc;
    setTimeout(()=>e.cancel(), 1e3);
    let t;
    try{
      t=await this.extensionGalleryService.query({
        text:'category:"language packs"',pageSize:20
      },e.token)
    }
    catch{
      return[]
    }
    const r=t.firstPage.filter(s=>s.properties.localizedLanguages?.length&&s.tags.some(o=>o.startsWith("lp-"))).map(s=>{
      const o=s.properties.localizedLanguages?.[0],a=zfn(s);
      return{
        ...this.createQuickPickItem(a,o,s),extensionId:s.identifier.id,galleryExtension:s
      }
    });
    return r.push(this.createQuickPickItem("en", "English")), r
  }
  createQuickPickItem(e, t, i){
    const r=t??e;
    let s;
    if(r!==e&&(s=`(${e})`), e.toLowerCase()===yC.toLowerCase()&&(s??="", s+=_(2084, null)), i?.installCount){
      s??="";
      const o=i.installCount;
      let a;
      o>1e6?a=`${Math.floor(o/1e5)/10}M`:o>1e3?a=`${Math.floor(o/1e3)}K`:a=String(o),s+=` $(cloud-download) ${a}`
    }
    return{
      id:e,label:r,description:s
    }
  }
}, vyu=__decorate([__param(0, yE)], vyu)
}
}), tEt, Ayu, Yfn=