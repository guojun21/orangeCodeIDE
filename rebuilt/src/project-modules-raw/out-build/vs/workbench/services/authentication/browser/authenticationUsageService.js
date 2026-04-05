// Module: out-build/vs/workbench/services/authentication/browser/authenticationUsageService.js
// Offset: 32642982 (bundle byte offset)
// Size: 5749 bytes

vr(), rt(), Er(), Wt(), jr(), Rl(), kr(), SU(), h7e=xi("IAuthenticationUsageService"), HEa=class extends at{
  constructor(e, t, i, r){
    super(), this._storageService=e, this._authenticationService=t, this._logService=i, this._queue=new yoe, this._extensionsUsingAuth=new Set;
    const s=r.trustedExtensionAuthAccess;
    if(Array.isArray(s))for(const o of s)this._extensionsUsingAuth.add(o);
    else if(s)for(const o of Object.values(s))for(const a of o)this._extensionsUsingAuth.add(a);
    this._register(this._authenticationService.onDidRegisterAuthenticationProvider(o=>this._queue.queue(()=>this._addExtensionsToCache(o.id))))
  }
  async initializeExtensionUsageCache(){
    await this._queue.queue(()=>Promise.all(this._authenticationService.getProviderIds().map(e=>this._addExtensionsToCache(e))))
  }
  async extensionUsesAuth(e){
    return await this._queue.whenIdle(), this._extensionsUsingAuth.has(e)
  }
  readAccountUsages(e, t){
    const i=`${e}-${t}-usages`, r=this._storageService.get(i, -1);
    let s=[];
    if(r)try{
      s=JSON.parse(r)
    }
    catch{
      
    }
    return s
  }
  removeAccountUsage(e, t){
    const i=`${e}-${t}-usages`;
    this._storageService.remove(i, -1)
  }
  addAccountUsage(e, t, i, r, s){
    const o=`${e}-${t}-usages`, a=this.readAccountUsages(e, t), l=a.findIndex(u=>u.extensionId===r);
    l>-1?a.splice(l, 1, {
      extensionId:r,extensionName:s,scopes:i,lastUsed:Date.now()
    }):a.push({
      extensionId:r,extensionName:s,scopes:i,lastUsed:Date.now()
    }), this._storageService.store(o, JSON.stringify(a), -1, 1), this._extensionsUsingAuth.add(r)
  }
  async _addExtensionsToCache(e){
    try{
      const t=await this._authenticationService.getAccounts(e);
      for(const i of t){
        const r=this.readAccountUsages(e,i.label);
        for(const s of r)this._extensionsUsingAuth.add(s.extensionId)
      }
    }
    catch(t){
      this._logService.error(t)
    }
  }
}, HEa=__decorate([__param(0, Hi), __param(1, WF), __param(2, Rr), __param(3, za)], HEa), Vi(h7e, HEa, 1)
}
});
async function Y3f(n, e, t){
  return t.invokeFunction(async i=>{
    const r=i.get(Em), s=i.get(nS), o=i.get(xd), a=i.get(XMe), l=i.get(pxe), u=i.get(d5), d=i.get(h7e), m=i.get(yU), p=[];
    if(n){
      switch(p.push(["extension",n.identifier.id]),p.push(["isBuiltinExtension",n.isBuiltin]),p.push(["isDefaultApplicationScopedExtension",n.local&&ygi(n.local.manifest)]),p.push(["isApplicationScopedExtension",n.local&&n.local.isApplicationScoped]),p.push(["isWorkspaceScopedExtension",n.isWorkspaceScoped]),p.push(["isGalleryExtension",!!n.identifier.uuid]),n.local&&p.push(["extensionSource",n.local.source]),p.push(["extensionHasConfiguration",n.local&&!!n.local.manifest.contributes&&!!n.local.manifest.contributes.configuration]),p.push(["extensionHasKeybindings",n.local&&!!n.local.manifest.contributes&&!!n.local.manifest.contributes.keybindings]),p.push(["extensionHasCommands",n.local&&!!n.local.manifest.contributes&&!!n.local.manifest.contributes?.commands]),p.push(["isExtensionRecommended",!!a.getAllRecommendationsWithReason()[n.identifier.id.toLowerCase()]]),p.push(["isExtensionWorkspaceRecommended",a.getAllRecommendationsWithReason()[n.identifier.id.toLowerCase()]?.reasonId===0]),p.push(["isUserIgnoredRecommendation",l.globalIgnoredRecommendations.some(x=>x===n.identifier.id.toLowerCase())]),p.push(["isExtensionPinned",n.pinned]),p.push(["isExtensionEnabled",s.isEnabledEnablementState(n.enablementState)]),n.state){
        case 0:p.push(["extensionStatus","installing"]);
        break;
        case 1:p.push(["extensionStatus","installed"]);
        break;
        case 2:p.push(["extensionStatus","uninstalling"]);
        break;
        case 3:p.push(["extensionStatus","uninstalled"]);
        break
      }
      p.push(["installedExtensionIsPreReleaseVersion",!!n.local?.isPreReleaseVersion]),p.push(["installedExtensionIsOptedToPreRelease",!!n.local?.preRelease]),p.push(["galleryExtensionIsPreReleaseVersion",!!n.gallery?.properties.isPreReleaseVersion]),p.push(["galleryExtensionHasPreReleaseVersion",n.gallery?.hasPreReleaseVersion]),p.push(["extensionHasPreReleaseVersion",n.hasPreReleaseVersion]),p.push(["extensionHasReleaseVersion",n.hasReleaseVersion]),p.push(["extensionDisallowInstall",n.isMalicious||n.deprecationInfo?.disallowInstall]),p.push(["isExtensionAllowed",m.isAllowed({
        id:n.identifier.id,publisherDisplayName:n.publisherDisplayName
      })===!0]),p.push(["isPreReleaseExtensionAllowed",m.isAllowed({
        id:n.identifier.id,publisherDisplayName:n.publisherDisplayName,prerelease:!0
      })===!0]),p.push(["extensionIsUnsigned",n.gallery&&!n.gallery.isSigned]);
      const[f,A,w,C]=await Promise.all([u.getColorThemes(),u.getFileIconThemes(),u.getProductIconThemes(),d.extensionUsesAuth(n.identifier.id.toLowerCase())]);
      p.push(["extensionHasColorThemes",f.some(x=>i2e(x,n))]),p.push(["extensionHasFileIconThemes",A.some(x=>i2e(x,n))]),p.push(["extensionHasProductIconThemes",w.some(x=>i2e(x,n))]),p.push(["extensionHasAccountPreferences",C]),p.push(["canSetLanguage",r.canSetLanguage(n)]),p.push(["isActiveLanguagePackExtension",n.gallery&&yC===zfn(n.gallery)])
    }
    return o.getMenuActions(st.ExtensionContext, e.createOverlay(p), {
      shouldForwardArgs:!0
    })
  })
}
function JCi(n, e){
  const t=[];
  for(const[, i]of n)t.push(i.map(r=>r instanceof KP?r:e.createInstance(txa, r)));
  return t
}
async function Z3f(n, e, t){
  const i=await Y3f(n, e, t);
  return JCi(i, t)
}
function i2e(n, e){
  return!!(e&&n.extensionData&&$h.equals(n.extensionData.extensionId, e.identifier.id))
}
function wyu(n, e, t, i){
  const r=[];
  for(const s of n)i2e(s, t)&&!(i&&s===e)&&r.push({
    label:s.label, id:s.id
  });
  return i&&(r.push({
    type:"separator", label:_(7360, null)
  }), r.push({
    label:e.label, id:e.id
  })), r
}
var GCi, nEt, m7e, Zfn, iEt, JEa, WCi, Xfn, rEt, GEa, WEa, QEa, jEa, zEa, QCi, sEt, oEt, aEt, cEt, lEt, VEa, KEa, YEa, ZEa, jCi, zCi, lrt, XEa, uEt, jy, dEt, _yu, swe, VCi, Cyu, hEt, ebn, KCi, YCi, tbn, ZCi, p7e, mEt, XCi, urt, exa, eSi, X3f, txa, nbn, r2e, tSi, nSi, iSi, rSi, nxa, ixa, sSi, drt, hrt, mrt, oSi, prt, Syu, pEt, kyu, Eyu, aSi, grt, frt, cSi, xyu, lSi, brt, uSi, rxa, sxa, dSi, e5f, owe=