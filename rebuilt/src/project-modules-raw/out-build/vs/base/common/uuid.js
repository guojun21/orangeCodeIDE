// Module: out-build/vs/base/common/uuid.js
// Offset: 933909 (bundle byte offset)
// Size: 2614 bytes

ihh=/^[0-9a-f]{
  8
}
-[0-9a-f]{
  4
}
-[0-9a-f]{
  4
}
-[0-9a-f]{
  4
}
-[0-9a-f]{
  12
}
$/i, rhh="00000000-0000-0000-0000-000000000000", OH=[];
for(let n=0;
n<256;
n++)OH.push(n.toString(16).padStart(2, "0"));
Wr=(function(){
  if(typeof crypto.randomUUID=="function")return crypto.randomUUID.bind(crypto);
  const n=new Uint8Array(16);
  return function(){
    crypto.getRandomValues(n), n[6]=n[6]&15|64, n[8]=n[8]&63|128;
    let t=0, i="";
    return i+=OH[n[t++]], i+=OH[n[t++]], i+=OH[n[t++]], i+=OH[n[t++]], i+="-", i+=OH[n[t++]], i+=OH[n[t++]], i+="-", i+=OH[n[t++]], i+=OH[n[t++]], i+="-", i+=OH[n[t++]], i+=OH[n[t++]], i+="-", i+=OH[n[t++]], i+=OH[n[t++]], i+=OH[n[t++]], i+=OH[n[t++]], i+=OH[n[t++]], i+=OH[n[t++]], i
  }
})()
}
});
function K5e(n){
  const e=n;
  return!!(e&&typeof e=="object"&&typeof e.id=="string"&&typeof e.isDefault=="boolean"&&typeof e.name=="string"&&je.isUri(e.location)&&je.isUri(e.globalStorageHome)&&je.isUri(e.settingsResource)&&je.isUri(e.keybindingsResource)&&je.isUri(e.tasksResource)&&je.isUri(e.snippetsHome)&&je.isUri(e.promptsHome)&&je.isUri(e.extensionsResource))
}
function Moe(n, e){
  return{
    id:n.id, isDefault:n.isDefault, name:n.name, icon:n.icon, location:je.revive(n.location).with({
      scheme:e
    }), globalStorageHome:je.revive(n.globalStorageHome).with({
      scheme:e
    }), settingsResource:je.revive(n.settingsResource).with({
      scheme:e
    }), keybindingsResource:je.revive(n.keybindingsResource).with({
      scheme:e
    }), tasksResource:je.revive(n.tasksResource).with({
      scheme:e
    }), snippetsHome:je.revive(n.snippetsHome).with({
      scheme:e
    }), promptsHome:je.revive(n.promptsHome).with({
      scheme:e
    }), extensionsResource:je.revive(n.extensionsResource).with({
      scheme:e
    }), cacheHome:je.revive(n.cacheHome).with({
      scheme:e
    }), useDefaultFlags:n.useDefaultFlags, isTransient:n.isTransient, workspaces:n.workspaces?.map(t=>je.revive(t))
  }
}
function AOt(n, e, t, i, r, s){
  return{
    id:n, name:e, location:t, isDefault:!1, icon:r?.icon, globalStorageHome:s&&r?.useDefaultFlags?.globalState?s.globalStorageHome:Wo(t, "globalStorage"), settingsResource:s&&r?.useDefaultFlags?.settings?s.settingsResource:Wo(t, "settings.json"), keybindingsResource:s&&r?.useDefaultFlags?.keybindings?s.keybindingsResource:Wo(t, "keybindings.json"), tasksResource:s&&r?.useDefaultFlags?.tasks?s.tasksResource:Wo(t, "tasks.json"), snippetsHome:s&&r?.useDefaultFlags?.snippets?s.snippetsHome:Wo(t, "snippets"), promptsHome:s&&r?.useDefaultFlags?.prompts?s.promptsHome:Wo(t, "prompts"), extensionsResource:s&&r?.useDefaultFlags?.extensions?s.extensionsResource:Wo(t, "extensions.json"), cacheHome:Wo(i, n), useDefaultFlags:r?.useDefaultFlags, isTransient:r?.transient, workspaces:r?.workspaces
  }
}
var shh, KA, eEc, m0=