// Module: out-build/vs/workbench/contrib/chat/common/languageModelStats.js
// Offset: 28336001 (bundle byte offset)
// Size: 976 bytes

rt(), Wt(), kr(), aO(), Ws(), Ht(), qi(), mcu=xi("ILanguageModelStatsService"), aAa=class extends at{
  constructor(e, t){
    super(), this.extensionFeaturesManagementService=e;
    for(const i in t.keys(-1, 0))(i.startsWith("languageModelStats.")||i.startsWith("languageModelAccess."))&&t.remove(i, -1)
  }
  async update(e, t, i, r){
    await this.extensionFeaturesManagementService.getAccess(t, pcu)
  }
}, aAa=__decorate([__param(0, Mme), __param(1, Hi)], aAa), pcu="copilot", Di.as(hP.ExtensionFeaturesRegistry).registerExtensionFeature({
  id:pcu, label:_(5649, null), description:_(5650, null), icon:Be.copilot, access:{
    canToggle:!1
  }, accessDataLabel:_(5651, null)
})
}
});
function t8A(n){
  const e=[];
  return Atf(n.node, e), e.join("")
}
function Atf(n, e){
  if(n.type===2)n.lineBreakBefore&&e.push(`
`), typeof n.text=="string"&&e.push(n.text);
  else if(n.ctor===3)e.push("<image>");
  else if(n.ctor===1||n.ctor===2)for(const t of n.children)Atf(t, e)
}
var n8A=