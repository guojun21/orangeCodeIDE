// Module: out-build/vs/platform/product/common/product.js
// Offset: 550124 (bundle byte offset)
// Size: 1183 bytes

if(S6(), hFo=globalThis.vscode, typeof hFo<"u"&&typeof hFo.context<"u"){
  const n=hFo.context.configuration();
  if(n)Soe=n.product;
  else throw new Error("Sandbox: unable to resolve product configuration from preload script.")
}
else if(globalThis._VSCODE_PRODUCT_JSON&&globalThis._VSCODE_PACKAGE_JSON){
  if(Soe=globalThis._VSCODE_PRODUCT_JSON, u2.VSCODE_DEV, u2.VSCODE_DEV_ONBOARDING&&Object.assign(Soe, {
    nameShort:`${Soe.nameShort} Onboarding`, nameLong:`${Soe.nameLong} Onboarding`, dataFolderName:`${Soe.dataFolderName}-onboarding`, serverDataFolderName:Soe.serverDataFolderName?`${Soe.serverDataFolderName}-onboarding`:void 0
  }), !Soe.version){
    const n=globalThis._VSCODE_PACKAGE_JSON;
    Object.assign(Soe, {
      version:n.version
    })
  }
}
else Soe={
  
}, Object.keys(Soe).length===0&&Object.assign(Soe, {
  version:"1.94.0-dev", nameShort:"Cursor Dev", nameLong:"Cursor Dev", applicationName:"cursor", dataFolderName:".cursor", urlProtocol:"cursor", reportIssueUrl:"https://github.com/getcursor/cursor/issues/new", licenseName:"MIT", licenseUrl:"https://github.com/getcursor/cursor/", serverLicenseUrl:"https://github.com/getcursor/cursor/"
});
av=Soe
}
}), Ube, C4t=