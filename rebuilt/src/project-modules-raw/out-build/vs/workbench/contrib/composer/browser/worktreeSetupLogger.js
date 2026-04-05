// Module: out-build/vs/workbench/contrib/composer/browser/worktreeSetupLogger.js
// Offset: 30439462 (bundle byte offset)
// Size: 2989 bytes

mR(), Ws(), h0a=class kto{
  static{
    this.CHANNEL_ID="cursor.worktreesSetup"
  }
  static{
    this.CHANNEL_LABEL="Worktrees Setup"
  }
  constructor(e){
    this.outputService=e, this.outputChannelRegistered=!1
  }
  ensureOutputChannel(){
    if(!this.outputChannelRegistered){
      const e=Di.as(TU.OutputChannels);
      e.getChannel(kto.CHANNEL_ID)||e.registerChannel({
        id:kto.CHANNEL_ID,label:kto.CHANNEL_LABEL,log:!1
      }),this.outputChannelRegistered=!0
    }
    this.outputChannel||(this.outputChannel=this.outputService.getChannel(kto.CHANNEL_ID))
  }
  info(e, t){
    if(this.ensureOutputChannel(), !this.outputChannel)return;
    const i=new Date().toISOString();
    if(this.outputChannel.append(`[${i}] ${e}
`), t!==void 0)try{
      const r=JSON.stringify(t);
      this.outputChannel.append(`${r}
`)
    }
    catch{
      
    }
  }
  error(e, t){
    if(this.ensureOutputChannel(), !this.outputChannel)return;
    const i=new Date().toISOString();
    if(this.outputChannel.append(`[${i}] ERROR: ${e}
`), t!==void 0)try{
      const r=typeof t=="string"?t:t instanceof Error?`${t.name}: ${t.message}`:JSON.stringify(t);
      this.outputChannel.append(`${r}
`)
    }
    catch{
      
    }
  }
  append(e){
    this.ensureOutputChannel(), this.outputChannel&&(this.outputChannel.append(e), e.endsWith(`
`)||this.outputChannel.append(`
`))
  }
}
}
});
function rgn(n){
  return n.replace(/'/g,"'\\''")}function sgn(n){return n.replace(/`/g,"``").replace(/"/g, '`"')
}
function bty(n){
  const{
    worktreePath:e, rootWorkspacePath:t, commands:i
  }
  =n, r=rgn(e), s=rgn(t), o=i.map((a, l)=>{
    const u=rgn(a);
    return`printf '%s\\n' '[worktree-setup] [${l}] $ ${u}' && ${a} && printf '%s\\n' '[worktree-setup] [${l}] done'`
  }).join(" && ");
  return`cd '${r}' || { printf '%s\\n' '[worktree-setup] ERROR: Failed to cd to worktree directory'; exit 1; } && export ROOT_WORKTREE_PATH='${s}' && set -- '${r}' && printf '%s\\n' '[worktree-setup] Working directory: '$(pwd) && ${o}`
}
function vty(n){
  const{
    worktreePath:e, rootWorkspacePath:t, commands:i
  }
  =n, r=sgn(e), s=sgn(t), o=i.map((a, l)=>{
    const u=sgn(a);
    return`Write-Host "[worktree-setup] [${l}] $ ${u}"; ${a}; if ($LASTEXITCODE -ne $null -and $LASTEXITCODE -ne 0) { Write-Host "[worktree-setup] [${l}] failed with exit code $LASTEXITCODE"; exit $LASTEXITCODE } else { Write-Host "[worktree-setup] [${l}] done" }`
  }).join("; ");
  return`$ErrorActionPreference = 'Stop'; Set-Location -LiteralPath "${r}"; $env:ROOT_WORKTREE_PATH = "${s}"; Write-Host '[worktree-setup] Working directory: ' (Get-Location); ${o}`
}
function Aty(n){
  const{
    worktreePath:e, rootWorkspacePath:t, scriptPath:i
  }
  =n, r=rgn(e), s=rgn(t), o=rgn(i);
  return`cd '${r}' || { printf '%s\\n' '[worktree-setup] ERROR: Failed to cd to worktree directory'; exit 1; } && export ROOT_WORKTREE_PATH='${s}' && printf '%s\\n' '[worktree-setup] Executing setup script: ${o}' && bash '${o}' '${r}'`
}
function yty(n){
  const{
    worktreePath:e, rootWorkspacePath:t, scriptPath:i
  }
  =n, r=sgn(e), s=sgn(t), o=sgn(i);
  return`$ErrorActionPreference = 'Stop'; Set-Location -LiteralPath "${r}"; $env:ROOT_WORKTREE_PATH = "${s}"; & "${o}" "${r}"`
}
var wty=