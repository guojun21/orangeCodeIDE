// Module: out-build/vs/workbench/contrib/composer/browser/composerCheckpointStorageService.js
// Offset: 26649093 (bundle byte offset)
// Size: 4453 bytes

Wt(), rt(), Er(), jk(), kr(), Bc(), VA(), rMg=!1, Ahn=rMg?console.log:()=>{
  
}, Ctt=xi("composerCheckpointStorageService"), Stt="checkpointId", ktt=class extends at{
  constructor(e){
    super(), this._storageService=e
  }
  async storeCheckpoint(e, t){
    if(!e)throw new Error("[composer] composerId is undefined");
    const i=Wr();
    return Ahn("[composer] storing checkpoint", `${Stt}:${e.slice(0,4)}:${i.slice(0,4)}`), this._storageService.cursorDiskKVSet(`${Stt}:${e}:${i}`, JSON.stringify(t)), i
  }
  async updateCheckpoint(e, t, i){
    if(!t||!e)throw new Error("[composer] checkpointId or composerId is undefined"+JSON.stringify({
      checkpointId:t,composerId:e
    }));
    Ahn("[composer] updating checkpoint", `${Stt}:${e.slice(0,4)}:${t.slice(0,4)}`);
    const r=await this.retrieveCheckpoint(e, t);
    r?(i(r), this._storageService.cursorDiskKVSet(`${Stt}:${e}:${t}`, JSON.stringify(r))):console.error("[composer] No checkpoint found for id", t)
  }
  async retrieveCheckpoint(e, t){
    if(!t||!e)throw new Error("[composer] checkpointId or composerId is undefined"+JSON.stringify({
      checkpointId:t,composerId:e
    }));
    Ahn("[composer] retrieving checkpoint", `${Stt}:${e.slice(0,4)}:${t.slice(0,4)}`);
    const i=await this._storageService.cursorDiskKVGet(`${Stt}:${e}:${t}`);
    if(!i)return;
    let r=Kjl(JSON.parse(i));
    return r&&(r=Kjl(r)), Ahn("[composer] retrieved checkpoint", {
      checkpoint:r
    }), r
  }
  async clearComposerCheckpoints(e){
    if(!e)throw new Error("[composer] composerId is undefined");
    return Ahn("[composer] clearing all checkpoints for composer", e), this._storageService.cursorDiskKVClearPrefix(`${Stt}:${e}:`).catch(t=>{
      console.error(`[composer] Error clearing checkpoints for composer ${e}:`,t)
    })
  }
}, __decorate([Gs("ComposerCheckpointStorageService.storeCheckpoint")], ktt.prototype, "storeCheckpoint", null), __decorate([Gs("ComposerCheckpointStorageService.updateCheckpoint")], ktt.prototype, "updateCheckpoint", null), __decorate([Gs("ComposerCheckpointStorageService.retrieveCheckpoint")], ktt.prototype, "retrieveCheckpoint", null), __decorate([Gs("ComposerCheckpointStorageService.clearComposerCheckpoints")], ktt.prototype, "clearComposerCheckpoints", null), ktt=__decorate([__param(0, Hi)], ktt), Vi(Ctt, ktt, 1)
}
});
function sMg(n){
  return whn.includes(n)
}
function uSt(n){
  if(n===!0)return"true";
  if(n===!1)return"false";
  if(n===void 0)return"implicit-false";
  {
    let e=n;
    return e=e, "true"
  }
}
function _NA(n){
  let e=165;
  for(let t=0;
  t<n.length;
  t++)n[t]=(n[t]^e)+t%256, e=n[t];
  return n
}
function CNA({
  req:n, machineId:e, macMachineId:t, base64Fn:i, cursorVersion:r, privacyMode:s, eligibleForSnippetLearning:o, backupRequestId:a, clientKey:l, sessionId:u, configVersion:d, isAnysphereUser:m, clientOs:p, clientArch:g, clientOsVersion:f
}){
  try{
    const A=Math.floor(Date.now()/1e6), w=new Uint8Array([A>>40&255, A>>32&255, A>>24&255, A>>16&255, A>>8&255, A&255]), C=_NA(w), x=i(C);
    n.header.set("x-cursor-checksum", t===void 0?`${x}${e}`:`${x}${e}/${t}`)
  }
  catch{
    
  }
  n.header.set(_hn, r), n.header.set("x-cursor-client-type", "ide"), p!==void 0&&n.header.set("x-cursor-client-os", p), g!==void 0&&n.header.set("x-cursor-client-arch", g), f!==void 0&&n.header.set("x-cursor-client-os-version", f), n.header.set("x-cursor-client-device-type", "desktop"), m&&n.header.set("x-cursor-canary", "true"), d!==void 0&&d!==""&&n.header.set("x-cursor-config-version", d), u!==void 0&&n.header.set(bMg, u), n.header.set(hSt, o&&s===!1?"true":"false"), n.header.set(dSt, uSt(s)), l!==void 0&&n.header.set(fMg, l);
  try{
    const A=Intl.DateTimeFormat().resolvedOptions().timeZone;
    n.header.set("x-cursor-timezone", A)
  }
  catch{
    
  }
  try{
    a&&(n.header.has("x-request-id")||n.header.set("x-request-id", a), n.header.has("x-amzn-trace-id")||n.header.set("x-amzn-trace-id", `Root=${a}`))
  }
  catch{
    
  }
}
function oMg(n){
  return n===ra.ULTRA||n===ra.PRO||n===ra.PRO_PLUS||n===ra.ENTERPRISE||n===ra.FREE_TRIAL
}
function SNA(n, e, t){
  return n===void 0||n.isOn===!1?!1:!(e===!1||t===!1&&!n.shouldLetUserEnableCppEvenIfNotPro)
}
function kNA(n, e, t){
  if(e!==void 0){
    const i=[".env", ".env.local", ".env.development", ".env.production", ".env.test", ".env.testing", ".env.development.local", ".env.production.local", ".env.test.local", ".env.testing.local"];
    if(e.languageId==="plaintext"&&i.some(r=>e.fsPath.endsWith(r))||aMg(e.languageId, t))return!1
  }
  return n===!0
}
function aMg(n, e){
  return!!(Array.isArray(e)&&e.includes(n))
}
var cMg, whn, lMg, uMg, dMg, Xne, hMg, mMg, pMg, gMg, xpa, fMg, dSt, hSt, bMg, _hn, gtu, _me, ftu, Chn, vMg, btu, AMg, Tpa, Shn, yMg, wMg, khn, tO, vtu, Ck, ra, b$e, Ehn, Atu, _Mg, CMg, Dbi, xhn, ENA, nA=