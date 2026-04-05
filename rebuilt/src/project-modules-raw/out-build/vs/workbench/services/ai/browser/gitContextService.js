// Module: out-build/vs/workbench/services/ai/browser/gitContextService.js
// Offset: 26868698 (bundle byte offset)
// Size: 13851 bytes

Wt(), rt(), Er(), ps(), Yn(), cv(), yn(), Op(), Rga(), AE=xi("gitContextService"), Pga=class extends at{
  constructor(e, t, i){
    super(), this._workspaceContextService=e, this._lifecycleService=t, this._gitContextprovider=void 0, this._gitIgnoreProvider=void 0, this._extensionIsolationEnabled=!1, this._onDidRunGitStatus=this._register(new Qe), this.onDidRunGitStatus=this._onDidRunGitStatus.event, this._extensionIsolationEnabled=i.getCursorExtensionsIsolationEnabled()
  }
  async getSubmodules(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.getSubmodules(e)
  }
  async waitForGitContextProvider(){
    for(;
    !this._gitContextprovider;
    )await new Promise(e=>setTimeout(e, 500))
  }
  async getGitFileBlameWithAbsolutePath(e, t, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    const r=this._workspaceContextService.asRelativePath(je.file(e));
    return this.getGitFileBlameWithRelativePath(r, t, i)
  }
  hasGitContextProvider(){
    return this._gitContextprovider!==void 0
  }
  hasGitIgnoreProvider(){
    return this._gitIgnoreProvider!==void 0
  }
  hasCorrectGitIgnoreProvider(){
    return this._extensionIsolationEnabled?this.hasGitIgnoreProvider():this.hasGitContextProvider()
  }
  registerGitContextProvider(e){
    this._gitContextprovider=e
  }
  unregisterGitContextProvider(){
    this._gitContextprovider=void 0
  }
  registerGitIgnoreProvider(e){
    this._gitIgnoreProvider=e
  }
  unregisterGitIgnoreProvider(){
    this._gitIgnoreProvider=void 0
  }
  async searchAllCommits(e){
    if(!this._gitContextprovider)throw new Error("No commit search provider registered");
    return this._gitContextprovider.getCommits(e)
  }
  async getFullCommit(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return this._gitContextprovider.getFullCommit(e, t)
  }
  async getCommitMetadataOnly(e, t){
    if(!this._gitContextprovider)throw new Error("No commit metadata provider registered");
    return this._gitContextprovider.getCommitMetadataOnly?this._gitContextprovider.getCommitMetadataOnly(e, t):this._gitContextprovider.getFullCommit(e, t)
  }
  async getSingleFileDiff(e, t, i){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    if(this._gitContextprovider.getSingleFileDiff)return this._gitContextprovider.getSingleFileDiff(e, t, i)
  }
  async getFullCommitProto(e){
    const t=await this.getFullCommit(e);
    if(t)return new Q9e({
      sha:t.sha,message:t.message,description:t.description,diff:t.diff.map(i=>({
        from:i.from,to:i.to,chunks:i.chunks.map(r=>({
          content:r.content,lines:r.changes.map(s=>s.content)
        }))
      })),author:t.author,date:t.date
    })
  }
  async searchAllPrs(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getPullRequests(e, t)
  }
  async getFullPr(e, t, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider?.getFullPullRequest(e, t, i)
  }
  async getEarlyCommitHash(){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getEarlyCommitHash()
  }
  async getIssues(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getIssues(e, t)
  }
  async getFullIssue(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getFullIssue(e, t)
  }
  async getBranchDiff(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getBranchDiff({
      ...e,cwd:e?.cwd?.fsPath
    })
  }
  async getGitRoot(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getGitRoot(e)
  }
  async checkoutAndPull(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.checkoutAndPull(e, t)
  }
  async checkoutAndFastForward(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.checkoutAndFastForward(e)
  }
  async getDiffRaw(){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getDiffRaw()
  }
  async getLastCommit(){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getLastCommit()
  }
  async getLastCommits(e, t=0, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getLastCommits(e, t, void 0, i)
  }
  async getDiff(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getDiff(e)
  }
  async getGitDiff(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getCurrentDiff({
      cwd:e
    })
  }
  async getDiffFilePatch(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.getDiffFilePatch(e)
  }
  async getUntrackedFilePatch(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.getUntrackedFilePatch(e)
  }
  async getDiffFileEntries(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.getDiffFileEntries(e)
  }
  async getGitStatusRaw(){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getGitStatusRaw()
  }
  async getGitLineBlameWithRelativePath(e, t, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getGitLineBlame(e, t, i)
  }
  async getGitLineBlameWithAbsolutePath(e, t, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    const r=this._workspaceContextService.asRelativePath(je.file(e));
    return this.getGitLineBlameWithRelativePath(r, t, i)
  }
  async getGitFileBlameWithRelativePath(e, t, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getGitFileBlame(e, t, i)
  }
  async getGitFileLineBlameWithRelativePath(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getGitFileLineBlame(e, t)
  }
  async getGitFileLineBlameWithAbsolutePath(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    const i=this._workspaceContextService.asRelativePath(je.file(e));
    return this.getGitFileLineBlameWithRelativePath(i, t)
  }
  async getGitUpstreamURL(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getGitUpstreamURL(e)
  }
  async getFileContentAtRef(e, t, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getFileContentAtRef(e, t, i)
  }
  async getFileContentForDiffScope(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.getFileContentForDiffScope(e)
  }
  async getCommitRawByCommitHash(e, t, i, r, s){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getCommitRawByCommitHash(e, t, i, r, s)
  }
  async getCommitDetails(e, t, i, r){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getCommitDetails(e, t, i, r)
  }
  async createWorktree(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.createWorktree(e, t)
  }
  async createWorktreeWithBranch(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.createWorktreeWithBranch(e)
  }
  async stageFiles(e){
    if(e.filePaths.length!==0){
      if(!this._gitContextprovider)throw new Error("No git context provider registered");
      return await this._gitContextprovider.stageFiles(e)
    }
  }
  async unstageFiles(e){
    if(e.filePaths.length!==0){
      if(!this._gitContextprovider)throw new Error("No git context provider registered");
      return await this._gitContextprovider.unstageFiles(e)
    }
  }
  async unstageAllChanges(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.unstageAllChanges(e)
  }
  async restoreFiles(e){
    if(e.filePaths.length!==0){
      if(!this._gitContextprovider)throw new Error("No git context provider registered");
      return await this._gitContextprovider.restoreFiles(e)
    }
  }
  async restoreStagedAndWorkingFiles(e){
    if(e.filePaths.length!==0){
      if(!this._gitContextprovider)throw new Error("No git context provider registered");
      return await this._gitContextprovider.restoreStagedAndWorkingFiles(e)
    }
  }
  async hardReset(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.hardReset(e)
  }
  async generateWorktreePath(){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.generateUniqueWorktreePath()
  }
  async removeWorktree(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.removeWorktree(e)
  }
  async stageAllChanges(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.stageAllChanges(e)
  }
  async commitChanges(e, t){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.commitChanges(e, t)
  }
  async pushBranch(e, t, i){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.pushBranch(e, t, i)
  }
  async getFilenamesInCommit(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getFilenamesInCommit(e)
  }
  async getFilesChangedSinceCommit(e, t, i){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.getFilesChangedSinceCommit(e, t, i)
  }
  async getCurrentBranch(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getCurrentBranch(e)
  }
  async getClosestRemoteRef(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getClosestRemoteRef(e)
  }
  async getDefaultBranch(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getDefaultBranch(e)
  }
  async getGitUser(){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getGitUser()
  }
  async getAllBranchNames(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getAllBranchNames(e)
  }
  async getBranchDivergenceStatus(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getBranchDivergenceStatus(e)
  }
  async getUserCommits(e, t){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getUserCommits(e, t)
  }
  async getMergeBase(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getMergeBase(e)
  }
  async revertFile(e, t, i){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.revertFile(e, t, i)
  }
  async getUntrackedFiles(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getUntrackedFiles(e)
  }
  async areFilesCheckedInToRemote(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.areFilesCheckedInToRemote(e)
  }
  async getBranchPullRequests(e){
    if(!this._gitContextprovider)throw new Error("No full commit provider registered");
    return await this._gitContextprovider.getBranchPullRequests(e)
  }
  async gitFetch(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.gitFetch(e)
  }
  async generateAndApplyPatch(e, t, i){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.generateAndApplyPatch(e, t, i)
  }
  async executeGitCommand(e, t, i){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.executeGitCommand(e, t, i)
  }
  async createTempIndexFile(){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.createTempIndexFile()
  }
  async deleteTempIndexFile(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.deleteTempIndexFile(e)
  }
  async getGitTelemetryAttributes(e){
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.getGitTelemetryAttributes(e)
  }
  async areIgnored(e){
    if(this._extensionIsolationEnabled){
      if(!this._gitIgnoreProvider)throw new Error("No git ignore provider registered");
      return await this._gitIgnoreProvider.areIgnored(e)
    }
    if(!this._gitContextprovider)throw new Error("No git context provider registered");
    return await this._gitContextprovider.areIgnored(e)
  }
  async isGithubRepo(){
    return this._gitContextprovider?await this._gitContextprovider.isGithubRepo():!1
  }
}, Pga=__decorate([__param(0, Lr), __param(1, ap), __param(2, Uhn)], Pga), Vi(AE, Pga, 1)
}
}), Inu, LFg=