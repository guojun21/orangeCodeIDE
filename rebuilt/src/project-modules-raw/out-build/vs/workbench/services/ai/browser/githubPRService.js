// Module: out-build/vs/workbench/services/ai/browser/githubPRService.js
// Offset: 33727061 (bundle byte offset)
// Size: 62214 bytes

fwe(), GRe(), uR(), Ql(), ml(), _s(), yn(), rt(), Uc(), Yn(), ns(), Er(), Wt(), jr(), rf(), vE(), kr(), ps(), WNe(), fUf(), SU(), Wu(), wm(), _g(), OJ(), sB(), EX=xi("githubPRService"), vUf=`
fragment PullRequestFields on PullRequest {
  id
  number
  title
  url
  state
  isDraft
  body
  bodyHTML
  createdAt
  updatedAt
  author {
    login
  }
  repository {
    nameWithOwner
  }
  headRefName
  headRefOid
  baseRefName
  mergedAt
  closedAt
  mergeable
  mergeStateStatus
}
`, zIa=`
fragment PullRequestDetailsFields on PullRequest {
  id
  number
  title
  url
  state
  isDraft
  body
  bodyHTML
  createdAt
  updatedAt
  author {
    login
  }
  repository {
    nameWithOwner
  }
  headRefName
  headRefOid
  baseRefName
  mergedAt
  closedAt
  mergeable
  mergeStateStatus
  viewerCanEnableAutoMerge
  autoMergeRequest {
    enabledAt
  }

  # Check/CI status
  commits(last: 1) {
    nodes {
      commit {
        statusCheckRollup {
          state
          contexts(first: 100) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              __typename
              ... on CheckRun {
                name
                conclusion
                status
                detailsUrl
              }
              ... on StatusContext {
                context
                state
                targetUrl
                description
              }
            }
          }
        }
        deployments(first: 10) {
          nodes {
            environment
            state
            latestStatus {
              environmentUrl
              logUrl
              state
            }
          }
        }
      }
    }
  }

  # First page of review comments
  reviewThreads(first: 100) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      isResolved
      isOutdated
      path
      line
      startLine
      originalLine
      originalStartLine
      diffSide
      comments(first: 100) {
        nodes {
          id
          body
          diffHunk
          author {
            login
            avatarUrl(size: 32)
          }
          createdAt
          updatedAt
        }
      }
    }
  }

  # Top-level comments (not attached to any file)
  comments(first: 100) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      body
      author {
        login
        avatarUrl(size: 32)
      }
      createdAt
      updatedAt
    }
  }
}
`, AUf=`
${zIa}
query GetUserPullRequests($searchQuery: String!, $first: Int!, $after: String) {
  search(query: $searchQuery, type: ISSUE, first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    issueCount
    nodes {
      ...PullRequestDetailsFields
    }
  }
}
`, m0u=`
query GetUserPullRequestsLightweight($searchQuery: String!, $first: Int!, $after: String) {
  search(query: $searchQuery, type: ISSUE, first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    issueCount
    nodes {
      ... on PullRequest {
        id
        number
        title
        url
        state
        isDraft
        createdAt
        updatedAt
        author {
          login
        }
        repository {
          nameWithOwner
        }
        headRefName
        mergedAt
        closedAt
        mergeable
        mergeStateStatus
        # Just the overall CI status, not all 100 individual checks
        commits(last: 1) {
          nodes {
            commit {
              statusCheckRollup {
                state
              }
            }
          }
        }
      }
    }
  }
}
`, yUf=`
${zIa}
query GetReviewRequests($searchQuery: String!, $first: Int!, $after: String) {
  search(query: $searchQuery, type: ISSUE, first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    issueCount
    nodes {
      ...PullRequestDetailsFields
    }
  }
}
`, wUf=`
${zIa}
query GetPRsAndReviewRequests($prQuery: String!, $reviewQuery: String!, $prFirst: Int!, $reviewFirst: Int!, $prAfter: String, $reviewAfter: String) {
  userPRs: search(query: $prQuery, type: ISSUE, first: $prFirst, after: $prAfter) {
    pageInfo {
      hasNextPage
      endCursor
    }
    issueCount
    nodes {
      ...PullRequestDetailsFields
    }
  }
  reviewRequests: search(query: $reviewQuery, type: ISSUE, first: $reviewFirst, after: $reviewAfter) {
    pageInfo {
      hasNextPage
      endCursor
    }
    issueCount
    nodes {
      ...PullRequestDetailsFields
    }
  }
}
`, _Uf=`
query GetPRComments($owner: String!, $repo: String!, $prNumber: Int!, $first: Int!, $after: String) {
  repository(owner: $owner, name: $repo) {
    pullRequest(number: $prNumber) {
      reviewThreads(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          isResolved
          isOutdated
          path
          line
          startLine
          originalLine
          originalStartLine
          diffSide
          comments(first: 100) {
            nodes {
              id
              body
              diffHunk
              author {
                login
                avatarUrl(size: 32)
              }
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}
`, CUf=`
query GetPRCheckContexts($owner: String!, $repo: String!, $prNumber: Int!, $first: Int!, $after: String) {
  repository(owner: $owner, name: $repo) {
    pullRequest(number: $prNumber) {
      commits(last: 1) {
        nodes {
          commit {
            statusCheckRollup {
              contexts(first: $first, after: $after) {
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  __typename
                  ... on CheckRun {
                    databaseId
                    name
                    conclusion
                    status
                    detailsUrl
                    text
                    summary
                    annotations(first: 50) {
                      nodes {
                        path
                        location {
                          start { line }
                          end { line }
                        }
                        annotationLevel
                        message
                        title
                      }
                    }
                  }
                  ... on StatusContext {
                    context
                    state
                    targetUrl
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`, SUf=`
mutation ResolveReviewThread($threadId: ID!) {
  resolveReviewThread(input: { threadId: $threadId }) {
    thread {
      id
      isResolved
    }
  }
}
`, kUf=`
mutation AddPullRequestReviewComment($pullRequestId: ID!, $commitOID: GitObjectID!, $body: String!, $path: String!, $line: Int!, $side: DiffSide, $startLine: Int, $startSide: DiffSide) {
  addPullRequestReview(input: {
    pullRequestId: $pullRequestId
    commitOID: $commitOID
    event: COMMENT
    threads: [{
      body: $body
      path: $path
      line: $line
      side: $side
      startLine: $startLine
      startSide: $startSide
    }]
  }) {
    pullRequestReview {
      pullRequest {
        reviewThreads(last: 1) {
          nodes {
            id
            isResolved
            isOutdated
            path
            line
            startLine
            diffSide
            comments(first: 10) {
              nodes {
                id
                body
                author {
                  login
                  avatarUrl(size: 32)
                }
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
}
`, EUf=`
mutation ReplyToReviewThread($threadId: ID!, $body: String!) {
  addPullRequestReviewThreadReply(input: {
    pullRequestReviewThreadId: $threadId
    body: $body
  }) {
    comment {
      id
      body
      author {
        login
        avatarUrl(size: 32)
      }
      createdAt
      updatedAt
      pullRequestReview {
        pullRequest {
          reviewThreads(first: 100) {
            nodes {
              id
              isResolved
              isOutdated
              path
              line
              startLine
              diffSide
              comments(first: 50) {
                nodes {
                  id
                  body
                  author {
                    login
                    avatarUrl(size: 32)
                  }
                  createdAt
                  updatedAt
                }
              }
            }
          }
        }
      }
    }
  }
}
`, xUf=`
${vUf}
query GetPRDetails($owner: String!, $repo: String!, $prNumber: Int!) {
  repository(owner: $owner, name: $repo) {
    pullRequest(number: $prNumber) {
      # PR info + merge status
      ...PullRequestFields

      # Check/CI status
      commits(last: 1) {
        nodes {
          commit {
            statusCheckRollup {
              state
              contexts(first: 100) {
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  __typename
                  ... on CheckRun {
				  				  databaseId
				  				  name
				  				  conclusion
				  				  status
				  				  detailsUrl
				  				  text
				  				  summary
				  				  annotations(first: 50) {
				  				    nodes {
				  				      path
				  				      location {
				  				        start { line }
				  				        end { line }
				  				      }
				  				      annotationLevel
				  				      message
				  				      title
				  				    }
				  				  }
				  				}
                  ... on StatusContext {
                    context
                    state
                    targetUrl
                    description
                  }
                }
              }
            }
            deployments(first: 10) {
              nodes {
                environment
                state
                latestStatus {
                  environmentUrl
                  logUrl
                  state
                }
              }
            }
          }
        }
      }

      # First page of review comments
      reviewThreads(first: 100) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          isResolved
          isOutdated
          path
          line
          startLine
          diffSide
          comments(first: 100) {
            nodes {
              id
              body
              author {
                login
                avatarUrl(size: 32)
              }
              createdAt
              updatedAt
            }
          }
        }
      }

      # Top-level comments (not attached to any file)
      comments(first: 100) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          body
          author {
            login
            avatarUrl(size: 32)
          }
          createdAt
          updatedAt
        }
      }
    }
  }
}
`, TUf=`
query GetCurrentUser {
  viewer {
    login
  }
}
`, IUf=`
mutation MergePullRequest($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod!) {
  mergePullRequest(input: { pullRequestId: $pullRequestId, mergeMethod: $mergeMethod }) {
    pullRequest {
      merged
    }
  }
}
`, DUf=`
mutation MarkPRReadyForReview($pullRequestId: ID!) {
  markPullRequestReadyForReview(input: { pullRequestId: $pullRequestId }) {
    pullRequest {
      id
      isDraft
    }
  }
}
`, BUf=`
mutation ClosePullRequest($pullRequestId: ID!) {
  closePullRequest(input: { pullRequestId: $pullRequestId }) {
    pullRequest {
      id
      state
      closed
      closedAt
    }
  }
}
`, RUf=`
mutation EnableAutoMerge($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod!) {
  enablePullRequestAutoMerge(input: { pullRequestId: $pullRequestId, mergeMethod: $mergeMethod }) {
    pullRequest {
      id
      autoMergeRequest {
        enabledAt
      }
    }
  }
}
`, PUf=`
mutation DisableAutoMerge($pullRequestId: ID!) {
  disablePullRequestAutoMerge(input: { pullRequestId: $pullRequestId }) {
    pullRequest {
      id
      autoMergeRequest {
        enabledAt
      }
    }
  }
}
`, LUf=`
query GetCanonicalRepoName($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    nameWithOwner
  }
}
`, NUf=[/\.vercel\.app/i, /\.netlify\.app/i, /\.netlify\.com/i, /\.railway\.app/i, /\.onrender\.com/i, /\.herokuapp\.com/i, /\.amplifyapp\.com/i, /\.pages\.dev/i, /\.workers\.dev/i, /\.surge\.sh/i, /\.fly\.dev/i, /\.deno\.dev/i, /\.up\.railway\.app/i], MUf=[/vercel\.com\/integrations/i, /vercel\.com\/docs/i, /vercel\.com\/.*\/settings/i, /netlify\.com\/docs/i, /github\.com/i, /docs\./i], zki=["repo"], w7e="github", VIa=class extends at{
  static{
    dpe=this
  }
  static{
    this.PR_PAGE_SIZE=5
  }
  static{
    this.REVIEW_PAGE_SIZE=5
  }
  static{
    this.AUTO_REFRESH_BASE_INTERVAL_MS=30*1e3
  }
  static{
    this.AUTO_REFRESH_MAX_INTERVAL_MS=300*1e3
  }
  static{
    this.AUTO_REFRESH_MAX_CONSECUTIVE_FAILURES=10
  }
  static{
    this.WINDOW_FOCUS_DEBOUNCE_MS=5*1e3
  }
  updatePRCacheEntry(e, t){
    const i=this._prDetailCache.get(), r=i[e], o={
      ...{
        prUrl:e,pullRequest:void 0,checkStatus:void 0,isCheckStatusLoading:!1,comments:[],topLevelComments:[],isCommentsLoading:!1,mergeInfo:void 0,isMergeInfoLoading:!1,filesData:void 0,isFilesLoading:!1,hasFetched:!1,lastUpdatedAt:Date.now()
      },...r,...t,prUrl:e,lastUpdatedAt:Date.now()
    };
    this._prDetailCache.set({
      ...i,[e]:o
    }, void 0)
  }
  getPRCacheEntry(e){
    return this._prDetailCache.get()[e]
  }
  populatePRCacheFromNodes(e, t){
    for(const i of e){
      if(!i.url)continue;
      const r=this.convertToUserPullRequest(i,t),s=this.processCheckStatus(i),o=this.processMergeInfo(i),a=this.processReviewThreads(i.reviewThreads?.nodes||[]),l=i.reviewThreads?.pageInfo?.hasNextPage??!1,u=this.processTopLevelComments(i.comments?.nodes||[]),d=this.getPRCacheEntry(i.url),m=d?.pullRequest?.headSha,p=r.headSha,g=m!==void 0&&m!==p;
      console.debug(g?`[GithubPRService] PR #${i.number} headSha changed (${m?.slice(0,7)} -> ${p.slice(0,7)}), invalidating cached diffs`:`[GithubPRService] PR #${i.number} headSha did not change (${m?.slice(0,7)} -> ${p.slice(0,7)}), not invalidating cached diffs`),this.updatePRCacheEntry(i.url,{
        pullRequest:r,checkStatus:s,isCheckStatusLoading:!1,comments:a,topLevelComments:u,isCommentsLoading:!1,mergeInfo:o,isMergeInfoLoading:!1,hasFetched:!l,...g?{
          filesData:void 0
        }
        :{
          
        }
      }),g&&d?.filesData&&r.state==="open"&&this.getPullRequestFiles(i.url).catch(f=>{
        console.warn(`[GithubPRService] Failed to refetch diffs for PR #${i.number} after commit change:`,f)
      })
    }
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(), this.gitContextService=e, this.authenticationService=t, this.logService=i, this.fileService=r, this.workspaceContextService=s, this.pathService=o, this.experimentService=a, this.hostService=l, this.storageService=u, this.structuredLogService=d, this.instantiationService=m, this.cache=new Map, this.CACHE_TTL_MS=300*1e3, this.cursorCache=new Map, this.canonicalRepoNameCache=new Map, this._onDidChangeGitHubConnection=this._register(new Qe), this.onDidChangeGitHubConnection=this._onDidChangeGitHubConnection.event, this._onDidFinishGitHubLogin=this._register(new Qe), this.onDidFinishGitHubLogin=this._onDidFinishGitHubLogin.event, this._userPullRequests=Ua("githubPR.userPullRequests", []), this._userReviewRequests=Ua("githubPR.userReviewRequests", []), this._isLoadingPRs=Ua("githubPR.isLoadingPRs", !0), this._isLoadingReviewRequests=Ua("githubPR.isLoadingReviewRequests", !0), this._prHasMore=Ua("githubPR.prHasMore", !1), this._reviewRequestsHasMore=Ua("githubPR.reviewRequestsHasMore", !1), this._hasFetchedInitialData=Ua("githubPR.hasFetchedInitialData", !1), this.userPullRequests=this._userPullRequests, this.userReviewRequests=this._userReviewRequests, this.isLoadingPRs=this._isLoadingPRs, this.isLoadingReviewRequests=this._isLoadingReviewRequests, this.prHasMore=this._prHasMore, this.reviewRequestsHasMore=this._reviewRequestsHasMore, this.hasFetchedInitialData=this._hasFetchedInitialData, this.prCurrentPage=1, this.reviewCurrentPage=1, this.autoRefreshConsecutiveFailures=0, this.isBackgroundRefreshInProgress=!1, this._prDetailCache=Ua("githubPR.prDetailCache", {
      
    }), this.prDetailCache=this._prDetailCache, this.commitAvatarCache=new Map;
    const p=hm(this.storageService, "githubPullRequestBetaEnabled");
    this._register(p);
    const g=tp(this, this.experimentService.onDidChangeGates, ()=>this.experimentService.checkFeatureGate("github_prs_in_sidebar")), f=tp(this, this.workspaceContextService.onDidChangeWorkbenchState, ()=>this.workspaceContextService.getWorkbenchState()!==1);
    this.isEnabled=Ro(this, R=>{
      if(!f.read(R))return!1;
      const M=g.read(R),O=p.read(R);
      return M||O
    });
    let A=!1, w=!1, C;
    const x=async()=>{
      A=!0,w=!1;
      try{
        if(!this.isEnabled.get()){
          this.structuredLogService.debug("github_auth","Auth change ignored - feature disabled");
          return
        }
        const R=await this.hasGitHubConnection();
        if(this._store.isDisposed)return;
        this.structuredLogService.debug("github_auth","Connection state changed",{
          isConnected:R
        }),this._onDidChangeGitHubConnection.fire(R),R?await this.fetchInitialPRsAndReviews():(this.structuredLogService.debug("github_auth","Clearing PR data after disconnect"),this.clearPRData(),this.refreshCache())
      }
      finally{
        A=!1,w&&!this._store.isDisposed&&(w=!1,clearTimeout(C),C=setTimeout(()=>I(),200))
      }
    }, I=()=>{
      if(A){
        w=!0;
        return
      }
      x()
    };
    this._register($i(()=>clearTimeout(C))), this._register(this.authenticationService.onDidChangeSessions(R=>{
      (R.providerId==="github"||R.providerId==="cursor-github")&&(this.structuredLogService.debug("github_auth","Session changed event",{
        providerId:R.providerId,event:R.event.added?.length?"added":R.event.removed?.length?"removed":"changed",addedCount:R.event.added?.length??0,removedCount:R.event.removed?.length??0,changedCount:R.event.changed?.length??0
      }),I())
    })), this._register(this.authenticationService.onDidRegisterAuthenticationProvider(R=>{
      (R.id==="github"||R.id==="cursor-github")&&(this.structuredLogService.debug("github_auth","Auth provider registered",{
        providerId:R.id
      }),I())
    })), this._register(this.authenticationService.onDidUnregisterAuthenticationProvider(R=>{
      (R.id==="github"||R.id==="cursor-github")&&(this.structuredLogService.debug("github_auth","Auth provider unregistered",{
        providerId:R.id
      }),I())
    })), this._register(this.hostService.onDidChangeFocus(R=>{
      R?this.scheduleWindowFocusRefresh():this.cancelWindowFocusRefresh()
    }));
    let B=!1;
    this._register(Oc(R=>{
      const N=this.isEnabled.read(R);
      N&&!B?this.initializeDataStore():N||(this._isLoadingPRs.set(!1,void 0),this._isLoadingReviewRequests.set(!1,void 0),this._hasFetchedInitialData.set(!0,void 0)),B=N
    }))
  }
  dispose(){
    this.stopAutoRefreshTimer(), this.cancelWindowFocusRefresh(), super.dispose()
  }
  async initializeDataStore(){
    if(this.structuredLogService.debug("github_auth", "Initializing data store"), !this.isEnabled.get()){
      this.structuredLogService.debug("github_auth","Data store init skipped - feature disabled"),this._isLoadingPRs.set(!1,void 0),this._isLoadingReviewRequests.set(!1,void 0),this._hasFetchedInitialData.set(!0,void 0);
      return
    }
    await this.hasGitHubConnection()?(this.structuredLogService.debug("github_auth", "Data store init - fetching initial data"), await this.fetchInitialPRsAndReviews()):(this.structuredLogService.debug("github_auth", "Data store init - not connected, skipping fetch"), this._isLoadingPRs.set(!1, void 0), this._isLoadingReviewRequests.set(!1, void 0), this._hasFetchedInitialData.set(!0, void 0))
  }
  async fetchInitialPRsAndReviews(){
    this._isLoadingPRs.set(!0, void 0), this._isLoadingReviewRequests.set(!0, void 0), this.prCurrentPage=1, this.reviewCurrentPage=1;
    try{
      const{
        pullRequests:e,reviewRequests:t
      }
      =await this.getPullRequestsBatched(1,dpe.PR_PAGE_SIZE,1,dpe.REVIEW_PAGE_SIZE);
      this._userPullRequests.set(e.pullRequests,void 0),this._prHasMore.set(e.hasMore,void 0),this._userReviewRequests.set(t.pullRequests,void 0),this._reviewRequestsHasMore.set(t.hasMore,void 0),this._hasFetchedInitialData.set(!0,void 0),this.startAutoRefreshTimer();
      const i=[...e.pullRequests,...t.pullRequests];
      this.prefetchPRDiffs(i).then(()=>{
        this.prefetchSemanticGroups(i)
      })
    }
    catch(e){
      this.structuredLogService.error("github_auth","Failed to fetch initial PRs after auth",e),this.logService.error("[GithubPRService] Failed to fetch initial PRs and reviews:",e),this._hasFetchedInitialData.set(!0,void 0)
    }
    finally{
      this._isLoadingPRs.set(!1,void 0),this._isLoadingReviewRequests.set(!1,void 0)
    }
  }
  async prefetchPRDiffs(e){
    const t=e.filter(r=>r.state==="open");
    if(t.length===0)return;
    console.debug(`[GithubPRService] Prefetching diffs for ${t.length} open PRs in background`);
    const i=3;
    for(let r=0;
    r<t.length;
    r+=i){
      const s=t.slice(r,r+i);
      await Promise.all(s.map(async o=>{
        try{
          if(this.getPRCacheEntry(o.url)?.filesData)return;
          await this.getPullRequestFiles(o.url),console.debug(`[GithubPRService] Prefetched diffs for PR #${o.number}`)
        }
        catch(a){
          console.warn(`[GithubPRService] Failed to prefetch diffs for PR #${o.number}:`,a)
        }
      }))
    }
    console.debug(`[GithubPRService] Finished prefetching diffs for ${t.length} PRs`)
  }
  getReviewChangesService(){
    return this._reviewChangesService||(this._reviewChangesService=this.instantiationService.invokeFunction(e=>e.get(vce))), this._reviewChangesService
  }
  async prefetchSemanticGroups(e){
    const t=e.filter(r=>r.state==="open");
    if(t.length===0)return;
    console.debug(`[GithubPRService] Prefetching semantic groups for ${t.length} open PRs in background`);
    const i=this.getReviewChangesService();
    for(const r of t)try{
      await i.getResources({
        mode:yf.PR,prUrl:r.url,headRef:r.headRef,baseRef:r.baseRef,awaitSemanticGroups:!0
      }),console.debug(`[GithubPRService] Prefetched semantic groups for PR #${r.number}`)
    }
    catch(s){
      console.warn(`[GithubPRService] Failed to prefetch semantic groups for PR #${r.number}:`,s)
    }
    console.debug(`[GithubPRService] Finished prefetching semantic groups for ${t.length} PRs`)
  }
  clearPRData(){
    this._userPullRequests.set([], void 0), this._userReviewRequests.set([], void 0), this._isLoadingPRs.set(!1, void 0), this._isLoadingReviewRequests.set(!1, void 0), this._prHasMore.set(!1, void 0), this._reviewRequestsHasMore.set(!1, void 0), this._hasFetchedInitialData.set(!1, void 0), this._prDetailCache.set({
      
    }, void 0), this.prCurrentPage=1, this.reviewCurrentPage=1, this.stopAutoRefreshTimer()
  }
  startAutoRefreshTimer(){
    if(this.stopAutoRefreshTimer(), this._store.isDisposed)return;
    if(this.autoRefreshConsecutiveFailures>=dpe.AUTO_REFRESH_MAX_CONSECUTIVE_FAILURES){
      this.logService.warn("[GithubPRService] Auto-refresh stopped after too many consecutive failures. Manual refresh required.");
      return
    }
    const e=Math.pow(2, this.autoRefreshConsecutiveFailures), t=dpe.AUTO_REFRESH_BASE_INTERVAL_MS*e, i=Math.min(t, dpe.AUTO_REFRESH_MAX_INTERVAL_MS), r=i*.1*(Math.random()*2-1), s=Math.round(i+r);
    this.autoRefreshTimerHandle=setTimeout(()=>{
      this.autoRefresh()
    }, s)
  }
  stopAutoRefreshTimer(){
    this.autoRefreshTimerHandle!==void 0&&(clearTimeout(this.autoRefreshTimerHandle), this.autoRefreshTimerHandle=void 0)
  }
  scheduleWindowFocusRefresh(){
    this.cancelWindowFocusRefresh(), this.windowFocusDebounceTimerHandle=setTimeout(()=>{
      this.windowFocusDebounceTimerHandle=void 0,!this._store.isDisposed&&this.windowFocusRefresh()
    }, dpe.WINDOW_FOCUS_DEBOUNCE_MS)
  }
  cancelWindowFocusRefresh(){
    this.windowFocusDebounceTimerHandle!==void 0&&(clearTimeout(this.windowFocusDebounceTimerHandle), this.windowFocusDebounceTimerHandle=void 0)
  }
  async windowFocusRefresh(){
    if(this._store.isDisposed||!this.isEnabled.get()||!this._hasFetchedInitialData.get()||this.isBackgroundRefreshInProgress)return;
    const e=await this.hasGitHubConnection();
    if(!this._store.isDisposed&&e){
      this.isBackgroundRefreshInProgress=!0;
      try{
        (await Promise.all([this.refreshPullRequestsInternal(!1),this.refreshReviewRequestsInternal(!1)])).some(r=>!r)||(this.autoRefreshConsecutiveFailures=0,this._store.isDisposed||this.startAutoRefreshTimer())
      }
      finally{
        this.isBackgroundRefreshInProgress=!1
      }
    }
  }
  async autoRefresh(){
    if(!this.isEnabled.get()){
      this.stopAutoRefreshTimer();
      return
    }
    if(this.isBackgroundRefreshInProgress){
      this._store.isDisposed||this.startAutoRefreshTimer();
      return
    }
    if(!await this.hasGitHubConnection())return;
    this.isBackgroundRefreshInProgress=!0;
    let t=!1;
    try{
      t=(await Promise.all([this.refreshPullRequestsInternal(!1),this.refreshReviewRequestsInternal(!1)])).some(r=>!r)
    }
    catch{
      t=!0
    }
    finally{
      this.isBackgroundRefreshInProgress=!1
    }
    t?(this.autoRefreshConsecutiveFailures++, this.logService.warn(`[GithubPRService] Auto-refresh failed (attempt ${this.autoRefreshConsecutiveFailures}/${dpe.AUTO_REFRESH_MAX_CONSECUTIVE_FAILURES})`)):this.autoRefreshConsecutiveFailures=0, this._store.isDisposed||this.startAutoRefreshTimer()
  }
  async refreshPullRequestsInternal(e){
    if(this._isLoadingPRs.get())return!0;
    e&&this._isLoadingPRs.set(!0, void 0), this.prCurrentPage=1;
    try{
      const t=await this.getPullRequests("self",{
        page:1,pageSize:dpe.PR_PAGE_SIZE,bypassCache:!0
      });
      return this._userPullRequests.set(t.pullRequests,void 0),this._prHasMore.set(t.hasMore,void 0),!0
    }
    catch(t){
      return this.logService.error("[GithubPRService] Failed to refresh PRs:",t),!1
    }
    finally{
      e&&this._isLoadingPRs.set(!1,void 0)
    }
  }
  async refreshReviewRequestsInternal(e){
    if(this._isLoadingReviewRequests.get())return!0;
    e&&this._isLoadingReviewRequests.set(!0, void 0), this.reviewCurrentPage=1;
    try{
      const t=await this.getPullRequests("reviews",{
        page:1,pageSize:dpe.REVIEW_PAGE_SIZE,bypassCache:!0
      });
      return this._userReviewRequests.set(t.pullRequests,void 0),this._reviewRequestsHasMore.set(t.hasMore,void 0),!0
    }
    catch(t){
      return this.logService.error("[GithubPRService] Failed to refresh review requests:",t),!1
    }
    finally{
      e&&this._isLoadingReviewRequests.set(!1,void 0)
    }
  }
  async loadMorePullRequests(){
    if(this._isLoadingPRs.get()||!this._prHasMore.get())return;
    const e=this.prCurrentPage+1;
    this._isLoadingPRs.set(!0, void 0);
    try{
      const t=await this.getPullRequests("self",{
        page:e,pageSize:dpe.PR_PAGE_SIZE
      }),i=this._userPullRequests.get();
      this._userPullRequests.set([...i,...t.pullRequests],void 0),this._prHasMore.set(t.hasMore,void 0),this.prCurrentPage=e
    }
    catch(t){
      this.logService.error("[GithubPRService] Failed to load more PRs:",t)
    }
    finally{
      this._isLoadingPRs.set(!1,void 0)
    }
  }
  async loadMoreReviewRequests(){
    if(this._isLoadingReviewRequests.get()||!this._reviewRequestsHasMore.get())return;
    const e=this.reviewCurrentPage+1;
    this._isLoadingReviewRequests.set(!0, void 0);
    try{
      const t=await this.getPullRequests("reviews",{
        page:e,pageSize:dpe.REVIEW_PAGE_SIZE
      }),i=this._userReviewRequests.get();
      this._userReviewRequests.set([...i,...t.pullRequests],void 0),this._reviewRequestsHasMore.set(t.hasMore,void 0),this.reviewCurrentPage=e
    }
    catch(t){
      this.logService.error("[GithubPRService] Failed to load more review requests:",t)
    }
    finally{
      this._isLoadingReviewRequests.set(!1,void 0)
    }
  }
  async refreshPullRequests(){
    await this.refreshPullRequestsInternal(!0)&&(this.autoRefreshConsecutiveFailures=0), this.startAutoRefreshTimer()
  }
  async refreshReviewRequests(){
    await this.refreshReviewRequestsInternal(!0)&&(this.autoRefreshConsecutiveFailures=0), this.startAutoRefreshTimer()
  }
  async searchPullRequests(e){
    const{
      searchQuery:t,stateFilter:i="open",pageSize:r=20,after:s=null
    }
    =e, o={
      pullRequests:[],hasMore:!1,endCursor:null,ciStatus:{
        
      },totalCount:0
    };
    let a;
    try{
      await this.gitContextService.waitForGitContextProvider();
      const d=await this.gitContextService.getGitUpstreamURL();
      a=y7e(d)
    }
    catch{
      return o
    }
    if(!a)return o;
    const l=await this.getGitHubAccessToken();
    if(!l)return o;
    a=await this.resolveCanonicalRepoName(a, l);
    let u;
    i==="requests"?u=`is:pr review-requested:@me repo:${a} is:open`:(u=`is:pr author:@me repo:${a}`, i==="open"?u+=" is:open":i==="merged"&&(u+=" is:merged")), u+=" sort:updated-desc", t&&(u+=` ${t}`);
    try{
      const d=await this.graphqlRequest(m0u,{
        searchQuery:u,first:r,after:s
      },l),m=d.search.nodes.filter(f=>f!==null),p=m.map(f=>new FNe({
        number:f.number,title:f.title,url:f.url,repository:f.repository?.nameWithOwner||a,isDraft:f.isDraft,author:f.author?.login||"",headRef:f.headRefName,state:f.state.toLowerCase(),mergedAt:f.mergedAt||void 0,closedAt:f.closedAt||void 0,createdAt:f.createdAt,updatedAt:f.updatedAt
      })),g={
        
      };
      for(const f of m){
        const A=f.commits?.nodes?.[0]?.commit?.statusCheckRollup?.state;
        let w="unknown";
        if(A)switch(A.toUpperCase()){
          case"SUCCESS":w="success";
          break;
          case"FAILURE":case"ERROR":w="failure";
          break;
          case"PENDING":case"EXPECTED":w="pending";
          break
        }
        g[f.url]=w
      }
      return{
        pullRequests:p,hasMore:d.search.pageInfo.hasNextPage,endCursor:d.search.pageInfo.endCursor,ciStatus:g,totalCount:d.search.issueCount
      }
    }
    catch(d){
      return console.error("[GithubPRService.searchPullRequests] Failed:",d),o
    }
  }
  async getOrFetchPRDetails(e, t=!1){
    const i=this.getPRCacheEntry(e);
    if(i?.hasFetched&&!t)return i;
    const r=this.parsePrUrl(e);
    if(!r)throw new Error(`Invalid PR URL: ${e}`);
    const{
      owner:s,repo:o,prNumber:a
    }
    =r, l=await this.getGitHubAccessToken();
    if(!l)throw new Error("No GitHub access token available");
    this.updatePRCacheEntry(e, {
      isCheckStatusLoading:!0,isCommentsLoading:!0,isMergeInfoLoading:!0
    });
    try{
      const d=(await this.graphqlRequest(xUf,{
        owner:s,repo:o,prNumber:a
      },l)).repository?.pullRequest;
      if(!d)throw new Error(`PR not found: ${e}`);
      const m=this.convertToUserPullRequest(d,`${s}/${o}`),p=d.commits?.nodes?.[0]?.commit,g=p?.statusCheckRollup,f=p?.deployments?.nodes||[];
      let A=g?.contexts?.nodes||[];
      const w=g?.contexts?.pageInfo;
      if(w?.hasNextPage){
        const R=await this.getAllPRCheckContexts(e,w.endCursor);
        A=[...A,...R]
      }
      const C=this.processCheckStatusFromContextsAndDeployments(A,f),x=this.processMergeInfo(d);
      let I=this.processReviewThreads(d.reviewThreads?.nodes||[]);
      if(d.reviewThreads?.pageInfo?.hasNextPage){
        const R=await this.getAllPRComments(e,d.reviewThreads.pageInfo.endCursor);
        I=[...I,...R.threads]
      }
      const B=this.processTopLevelComments(d.comments?.nodes||[]);
      return this.updatePRCacheEntry(e,{
        pullRequest:m,checkStatus:C,isCheckStatusLoading:!1,comments:I,topLevelComments:B,isCommentsLoading:!1,mergeInfo:x,isMergeInfoLoading:!1,hasFetched:!0
      }),this.getPRCacheEntry(e)
    }
    catch(u){
      throw this.updatePRCacheEntry(e,{
        isCheckStatusLoading:!1,isCommentsLoading:!1,isMergeInfoLoading:!1
      }),u
    }
  }
  processCheckStatus(e){
    const t={
      overallStatus:"unknown",successCount:0,failureCount:0,pendingCount:0,neutralCount:0,skippedCount:0,totalCount:0,previewLinks:[],checks:[]
    }, i=e.commits?.nodes;
    if(!i||i.length===0)return t;
    const r=i[0].commit?.statusCheckRollup;
    if(!r)return t;
    const s=r.contexts?.nodes||[], o=i[0].commit?.deployments?.nodes||[];
    return this.processCheckStatusFromContextsAndDeployments(s, o)
  }
  processCheckStatusFromContextsAndDeployments(e, t){
    let i=0, r=0, s=0, o=0, a=0;
    const l=[];
    for(const p of e)if(p.__typename==="CheckRun"){
      let g;
      p.status==="COMPLETED"?p.conclusion==="SUCCESS"?(i++,g="success"):p.conclusion==="NEUTRAL"?(o++,g="neutral"):p.conclusion==="SKIPPED"?(a++,g="skipped"):p.conclusion==="FAILURE"||p.conclusion==="TIMED_OUT"||p.conclusion==="CANCELLED"||p.conclusion==="ACTION_REQUIRED"?(r++,g="failure"):(s++,g="pending"):(s++,g="pending");
      const f=[];
      if(p.annotations?.nodes)for(const A of p.annotations.nodes)f.push({
        path:A.path,startLine:A.location?.start?.line??0,endLine:A.location?.end?.line??0,level:A.annotationLevel,message:A.message,title:A.title||void 0
      });
      l.push({
        name:p.name,status:g,detailsUrl:p.detailsUrl||void 0,summary:p.summary||void 0,text:p.text||void 0,annotations:f.length>0?f:void 0,databaseId:p.databaseId
      })
    }
    else if(p.__typename==="StatusContext"){
      let g;
      switch(p.state){
        case"SUCCESS":i++,g="success";
        break;
        case"FAILURE":case"ERROR":r++,g="failure";
        break;
        case"PENDING":default:s++,g="pending";
        break
      }
      l.push({
        name:p.context,status:g,detailsUrl:p.targetUrl||void 0,description:p.description||void 0
      })
    }
    const u=i+r+s+o+a;
    let d;
    u===0?d="unknown":r>0?d="failure":s>0?d="pending":d="success";
    const m=smy(e, t);
    return{
      overallStatus:d,successCount:i,failureCount:r,pendingCount:s,neutralCount:o,skippedCount:a,totalCount:u,previewLinks:m,checks:l
    }
  }
  processMergeInfo(e){
    const t=e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED"&&e.state.toUpperCase()==="OPEN", i=e;
    return{
      id:e.id,mergeable:e.mergeable,mergeStateStatus:e.mergeStateStatus,canMerge:t,viewerCanEnableAutoMerge:i.viewerCanEnableAutoMerge??!1,autoMergeEnabled:i.autoMergeRequest!=null
    }
  }
  processReviewThreads(e){
    return e.filter(t=>t.path).map(t=>({
      id:t.id,path:t.path,line:t.line,startLine:t.startLine,originalLine:t.originalLine,originalStartLine:t.originalStartLine,diffSide:t.diffSide,isResolved:t.isResolved,isOutdated:t.isOutdated,comments:t.comments.nodes.map(i=>({
        id:i.id,body:i.body,diffHunk:i.diffHunk??void 0,authorLogin:i.author?.login||"unknown",avatarUrl:i.author?.avatarUrl,createdAt:i.createdAt,updatedAt:i.updatedAt
      }))
    }))
  }
  processTopLevelComments(e){
    return e.map(t=>({
      id:t.id,body:t.body,authorLogin:t.author?.login||"unknown",avatarUrl:t.author?.avatarUrl,createdAt:t.createdAt,updatedAt:t.updatedAt
    }))
  }
  async getOrFetchPRFiles(e, t=!1){
    const i=this.getPRCacheEntry(e);
    if(i?.filesData&&!t)return i.filesData;
    this.updatePRCacheEntry(e, {
      isFilesLoading:!0
    });
    try{
      const r=await this.getPullRequestFiles(e);
      return this.updatePRCacheEntry(e,{
        filesData:r,isFilesLoading:!1
      }),r
    }
    catch(r){
      this.logService.error("[GithubPRService] Failed to fetch PR files:",r),this.updatePRCacheEntry(e,{
        isFilesLoading:!1
      });
      return
    }
  }
  async getGitHubAccessToken(){
    try{
      const e=await this.authenticationService.getSessions(w7e,zki,void 0,!0);
      if(e.length>0)return this.structuredLogService.debug("github_auth","Access token retrieved successfully",{
        sessionCount:e.length
      }),e[0].accessToken;
      this.structuredLogService.debug("github_auth","No existing session found - user needs to connect");
      return
    }
    catch(e){
      this.structuredLogService.error("github_auth","Failed to get access token",e,{
        providerId:w7e
      }),this.logService.error("[GithubPRService] Failed to get GitHub access token:",e);
      return
    }
  }
  async triggerGitHubLogin(){
    this.structuredLogService.debug("github_auth", "Login flow triggered", {
      providerId:w7e,scopes:zki
    });
    try{
      this.logService.info("[GithubPRService] Triggering GitHub login flow");
      const e=await this.authenticationService.createSession(w7e,zki,{
        activateImmediate:!0
      });
      return e?.accessToken?(this.structuredLogService.debug("github_auth","Login successful",{
        providerId:w7e,hasToken:!0
      }),this.refreshCache(),this._onDidChangeGitHubConnection.fire(!0),this._onDidFinishGitHubLogin.fire("success"),!0):(this.structuredLogService.warn("github_auth","Login returned no token",{
        providerId:w7e,hasSession:!!e
      }),this._onDidFinishGitHubLogin.fire("failed"),!1)
    }
    catch(e){
      const t=bf(e)?"cancelled":"failed";
      return t==="cancelled"?(this.structuredLogService.debug("github_auth","Login cancelled by user"),this.logService.info("[GithubPRService] GitHub login was cancelled")):(this.structuredLogService.error("github_auth","Login failed",e,{
        providerId:w7e
      }),this.logService.error("[GithubPRService] Failed to authenticate with GitHub:",e)),this._onDidFinishGitHubLogin.fire(t),!1
    }
  }
  logRateLimitInfo(e, t){
    const i=e.headers.get("x-ratelimit-used"), r=e.headers.get("x-ratelimit-limit"), s=e.headers.get("x-ratelimit-reset"), o=i?parseInt(i, 10):0, a=r?parseInt(r, 10):5e3, l=s?parseInt(s, 10):0, u=Math.floor(Date.now()/1e3), d=Math.max(0, l-u), m=Math.floor(d/60), p=3600, g=p-d;
    let f="";
    if(g>60&&o>0){
      const A=o/g,w=Math.round(A*p);
      w>a&&(f=` \u26A0\uFE0F PROJECTED: ${w} (${Math.round(w/a*100)}% of limit)`)
    }
    console.debug(`[GitHub API] ${t} - Used: ${o}/${a} | Resets in ${m}m${f}`)
  }
  async getMergeBase(e, t, i, r, s){
    const o=await fetch(`https://api.github.com/repos/${e}/${t}/compare/${i}...${r}`, {
      method:"GET",headers:{
        Authorization:`Bearer ${s}`,Accept:"application/vnd.github.v3+json","User-Agent":"Cursor-IDE"
      }
    });
    if(!o.ok)throw new Error(`GitHub Compare API error: ${o.status} ${o.statusText}`);
    return(await o.json()).merge_base_commit.sha
  }
  async graphqlRequest(e, t, i, r){
    const s=await fetch("https://api.github.com/graphql", {
      method:"POST",headers:{
        Authorization:`Bearer ${i}`,"Content-Type":"application/json","User-Agent":"Cursor-IDE"
      },body:JSON.stringify({
        query:e,variables:t
      })
    }), o=r??this.extractQueryName(e);
    if(this.logRateLimitInfo(s, o), !s.ok)throw new Error(`GitHub API error: ${s.status} ${s.statusText}`);
    const a=await s.json();
    if(a.errors&&a.errors.length>0)throw new Error(`GitHub GraphQL error: ${a.errors.map(l=>l.message).join(", ")}`);
    return a.data
  }
  extractQueryName(e){
    return e.match(/(?:query|mutation)\s+(\w+)/)?.[1]??"UnknownQuery"
  }
  async resolveCanonicalRepoName(e, t){
    const i=this.canonicalRepoNameCache.get(e);
    if(i!==void 0)return i;
    const r=e.split("/");
    if(r.length!==2)return e;
    const[s, o]=r;
    try{
      const a=await this.graphqlRequest(LUf,{
        owner:s,name:o
      },t,"GetCanonicalRepoName");
      if(a.repository?.nameWithOwner){
        const l=a.repository.nameWithOwner;
        return this.canonicalRepoNameCache.set(e,l),l!==e&&(this.canonicalRepoNameCache.set(l,l),this.logService.info(`[GithubPRService] Repository "${e}" resolved to canonical name "${l}"`)),l
      }
    }
    catch(a){
      this.logService.warn(`[GithubPRService] Failed to resolve canonical repo name for "${e}":`,a)
    }
    return this.canonicalRepoNameCache.set(e, e), e
  }
  convertToUserPullRequest(e, t){
    return new FNe({
      number:e.number,title:e.title,url:e.url,repository:e.repository?.nameWithOwner||t,isDraft:e.isDraft,description:e.bodyHTML||e.body||"",descriptionRaw:e.body||"",author:e.author?.login||"",headRef:e.headRefName,headSha:e.headRefOid||"",baseRef:e.baseRefName,state:e.state.toLowerCase(),mergedAt:e.mergedAt||void 0,closedAt:e.closedAt||void 0,createdAt:e.createdAt,updatedAt:e.updatedAt
    })
  }
  async hasGitHubConnection(){
    try{
      const e=await this.authenticationService.getSessions(w7e,zki,void 0,!0),t=e.length>0;
      return this.structuredLogService.debug("github_auth","Connection check completed",{
        hasConnection:t,sessionCount:e.length
      }),t
    }
    catch(e){
      return this.structuredLogService.error("github_auth","Connection check failed",e),!1
    }
  }
  async getPullRequests(e, t){
    const{
      page:i,pageSize:r,filters:s,bypassCache:o,lightweight:a
    }
    =t??{
      
    };
    let l;
    try{
      await this.gitContextService.waitForGitContextProvider();
      const A=await this.gitContextService.getGitUpstreamURL();
      l=y7e(A)
    }
    catch(A){
      return console.error("Error detecting repository from git context",A),new uV({
        pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
      })
    }
    if(!l)return console.error("No repository filter extracted"), new uV({
      pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
    });
    const u=await this.getGitHubAccessToken();
    if(!u)return this.logService.warn("[GithubPRService] No GitHub access token available"), new uV({
      pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
    });
    l=await this.resolveCanonicalRepoName(l, u);
    const d=s?`${s.searchQuery||""}_${s.stateFilter||""}`:"", m=i||1, p=e==="self"?"prs":"review", g=`${p}_${l}_${m}_${r||5}_${d}`, f=this.cache.get(g);
    if(!o&&f&&Date.now()-f.timestamp<this.CACHE_TTL_MS&&m===1)return f.response;
    try{
      const A=r||5,w=`${p}_${l}_${d}`;
      let C=null;
      m>1&&(C=this.cursorCache.get(`${w}_page_${m-1}`)||null);
      let x;
      if(e==="self")if(x=`is:pr author:@me repo:${l}`,s?.stateFilter){
        const O=s.stateFilter.toLowerCase();
        O==="open"?x+=" is:open":O==="closed"?x+=" is:closed":O==="merged"&&(x+=" is:merged")
      }
      else x+=" is:open";
      else x=`type:pr review-requested:@me repo:${l}`,s?.stateFilter?.toLowerCase()!=="all"&&(x+=" is:open");
      s?.searchQuery&&(x+=` ${s.searchQuery}`);
      let I;
      a&&e==="self"?I=m0u:e==="self"?I=AUf:I=yUf;
      const B=await this.graphqlRequest(I,{
        searchQuery:x,first:A,after:C
      },u);
      B.search.pageInfo.endCursor&&this.cursorCache.set(`${w}_page_${m}`,B.search.pageInfo.endCursor);
      const R=B.search.nodes.filter(O=>O!==null);
      a||this.populatePRCacheFromNodes(R,l);
      const N=R.filter(O=>"number"in O).map(O=>this.convertToUserPullRequest(O,l)),M=new uV({
        pullRequests:N,hasMore:B.search.pageInfo.hasNextPage,totalCount:B.search.issueCount,hasGitConnection:!0
      });
      return m===1&&this.cache.set(g,{
        response:M,timestamp:Date.now()
      }),M
    }
    catch(A){
      return console.error(`Error fetching ${e==="self"?"pull requests":"review requests"} from GitHub API`,A),f?f.response:new uV({
        pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!0
      })
    }
  }
  async getPullRequestsBatched(e, t, i, r, s){
    let o;
    try{
      await this.gitContextService.waitForGitContextProvider();
      const w=await this.gitContextService.getGitUpstreamURL();
      o=y7e(w)
    }
    catch(w){
      return console.error("Error detecting repository from git context",w),{
        pullRequests:new uV({
          pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
        }),reviewRequests:new uV({
          pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
        })
      }
    }
    if(!o)return console.error("No repository filter extracted"), {
      pullRequests:new uV({
        pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
      }),reviewRequests:new uV({
        pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
      })
    };
    const a=await this.getGitHubAccessToken();
    if(!a)return this.logService.warn("[GithubPRService] No GitHub access token available"), {
      pullRequests:new uV({
        pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
      }),reviewRequests:new uV({
        pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!1
      })
    };
    o=await this.resolveCanonicalRepoName(o, a);
    const l=s?`${s.searchQuery||""}_${s.stateFilter||""}`:"", u=e||1, d=i||1, m=`prs_${o}_${u}_${t||5}_${l}`, p=`review_${o}_${d}_${r||5}_${l}`, g=this.cache.get(m), f=this.cache.get(p), A=Date.now();
    if(u===1&&d===1&&g&&f&&A-g.timestamp<this.CACHE_TTL_MS&&A-f.timestamp<this.CACHE_TTL_MS)return{
      pullRequests:g.response,reviewRequests:f.response
    };
    try{
      const w=t||5,C=r||5,x=`prs_${o}_${l}`,I=`review_${o}_${l}`;
      let B=null,R=null;
      u>1&&(B=this.cursorCache.get(`${x}_page_${u-1}`)||null),d>1&&(R=this.cursorCache.get(`${I}_page_${d-1}`)||null);
      let N=`is:pr author:@me repo:${o}`;
      if(s?.stateFilter){
        const j=s.stateFilter.toLowerCase();
        j==="open"?N+=" is:open":j==="closed"?N+=" is:closed":j==="merged"&&(N+=" is:merged")
      }
      else N+=" is:open";
      s?.searchQuery&&(N+=` ${s.searchQuery}`);
      let M=`type:pr review-requested:@me repo:${o}`;
      s?.stateFilter?.toLowerCase()!=="all"&&(M+=" is:open"),s?.searchQuery&&(M+=` ${s.searchQuery}`);
      const O=await this.graphqlRequest(wUf,{
        prQuery:N,reviewQuery:M,prFirst:w,reviewFirst:C,prAfter:B,reviewAfter:R
      },a,"GetPRsAndReviewRequests");
      O.userPRs.pageInfo.endCursor&&this.cursorCache.set(`${x}_page_${u}`,O.userPRs.pageInfo.endCursor),O.reviewRequests.pageInfo.endCursor&&this.cursorCache.set(`${I}_page_${d}`,O.reviewRequests.pageInfo.endCursor);
      const $=[...O.userPRs.nodes,...O.reviewRequests.nodes].filter(j=>j!==null);
      this.populatePRCacheFromNodes($,o);
      const H=O.userPRs.nodes.filter(j=>j!==null).map(j=>this.convertToUserPullRequest(j,o)),W=O.reviewRequests.nodes.filter(j=>j!==null&&"number"in j).map(j=>this.convertToUserPullRequest(j,o)),z=new uV({
        pullRequests:H,hasMore:O.userPRs.pageInfo.hasNextPage,totalCount:O.userPRs.issueCount,hasGitConnection:!0
      }),Y=new uV({
        pullRequests:W,hasMore:O.reviewRequests.pageInfo.hasNextPage,totalCount:O.reviewRequests.issueCount,hasGitConnection:!0
      });
      return u===1&&this.cache.set(m,{
        response:z,timestamp:Date.now()
      }),d===1&&this.cache.set(p,{
        response:Y,timestamp:Date.now()
      }),{
        pullRequests:z,reviewRequests:Y
      }
    }
    catch(w){
      return console.error("Error fetching PRs and review requests from GitHub API",w),{
        pullRequests:g?.response??new uV({
          pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!0
        }),reviewRequests:f?.response??new uV({
          pullRequests:[],hasMore:!1,totalCount:0,hasGitConnection:!0
        })
      }
    }
  }
  parsePrUrl(e){
    try{
      const i=new URL(e).pathname.split("/").filter(Boolean);
      if(i.length>=4&&i[2]==="pull"){
        const r=i[0],s=i[1],o=parseInt(i[3],10);
        if(r&&s&&!isNaN(o))return{
          owner:r,repo:s,prNumber:o
        }
      }
    }
    catch(t){
      this.logService.error("[GithubPRService] Failed to parse PR URL:",e,t)
    }
  }
  async getAllPRComments(e, t){
    const i={
      threads:[],hasMore:!1
    }, r=Xbn(e);
    if(!r)return this.logService.warn("[GithubPRService] Invalid PR URL for comments:", e), i;
    const{
      owner:s,repo:o,prNumber:a
    }
    =r, l=await this.getGitHubAccessToken();
    if(!l)return this.logService.warn("[GithubPRService] No GitHub access token available for fetching comments"), i;
    try{
      const u=[];
      let d=!0,m=t??null;
      for(;
      d;
      ){
        const g=(await this.graphqlRequest(_Uf,{
          owner:s,repo:o,prNumber:a,first:100,after:m
        },l)).repository?.pullRequest;
        if(!g)return this.logService.warn("[GithubPRService] PR not found for comments:",e),i;
        const f=g.reviewThreads;
        u.push(...this.processReviewThreads(f.nodes)),d=f.pageInfo.hasNextPage,m=f.pageInfo.endCursor
      }
      return{
        threads:u,hasMore:!1
      }
    }
    catch(u){
      return console.error("[GithubPRService] Error fetching PR comments:",u),i
    }
  }
  async getAllPRCheckContexts(e, t){
    const i=Xbn(e);
    if(!i)return this.logService.warn("[GithubPRService] Invalid PR URL for check contexts:", e), [];
    const{
      owner:r,repo:s,prNumber:o
    }
    =i, a=await this.getGitHubAccessToken();
    if(!a)return this.logService.warn("[GithubPRService] No GitHub access token available for fetching check contexts"), [];
    try{
      const l=[];
      let u=!0,d=t??null;
      for(;
      u;
      ){
        const p=(await this.graphqlRequest(CUf,{
          owner:r,repo:s,prNumber:o,first:100,after:d
        },a)).repository?.pullRequest;
        if(!p)return this.logService.warn("[GithubPRService] PR not found for check contexts:",e),[];
        const f=p.commits?.nodes?.[0]?.commit?.statusCheckRollup?.contexts;
        if(!f)return l;
        l.push(...f.nodes||[]),u=f.pageInfo.hasNextPage,d=f.pageInfo.endCursor
      }
      return l
    }
    catch(l){
      return console.error("[GithubPRService] Error fetching PR check contexts:",l),[]
    }
  }
  async resolveReviewThread(e){
    const t=await this.getGitHubAccessToken();
    if(!t)return this.logService.warn("[GithubPRService] No GitHub access token available for resolving thread"), !1;
    try{
      return(await this.graphqlRequest(SUf,{
        threadId:e
      },t)).resolveReviewThread?.thread?.isResolved===!0
    }
    catch(i){
      return console.error("[GithubPRService] Error resolving review thread:",i),!1
    }
  }
  async addPullRequestReviewComment(e){
    const{
      prUrl:t,path:i,body:r,line:s,startLine:o,side:a="RIGHT"
    }
    =e, l=Xbn(t);
    if(!l){
      this.logService.warn("[GithubPRService] Invalid PR URL for adding comment:",t);
      return
    }
    const{
      owner:u,repo:d,prNumber:m
    }
    =l, p=await this.getGitHubAccessToken();
    if(!p){
      this.logService.warn("[GithubPRService] No GitHub access token available for adding review comment");
      return
    }
    try{
      const f=await this.graphqlRequest(`
				query GetPRId($owner: String!, $repo: String!, $prNumber: Int!) {
					repository(owner: $owner, name: $repo) {
						pullRequest(number: $prNumber) {
							id
							headRefOid
						}
					}
				}
			`,{
        owner:u,repo:d,prNumber:m
      },p,"GetPRId"),A=f.repository?.pullRequest?.id,w=f.repository?.pullRequest?.headRefOid;
      if(!A||!w){
        this.logService.warn("[GithubPRService] Could not get PR ID or head SHA for adding comment");
        return
      }
      const C={
        pullRequestId:A,commitOID:w,body:r,path:i,line:s,side:a
      };
      o!==void 0&&o!==s&&(C.startLine=o,C.startSide=a);
      const I=(await this.graphqlRequest(kUf,C,p,"AddPullRequestReviewComment")).addPullRequestReview?.pullRequestReview?.pullRequest?.reviewThreads?.nodes,B=I?.[I.length-1];
      if(!B){
        this.logService.warn("[GithubPRService] No thread returned from add comment mutation");
        return
      }
      const R={
        id:B.id,path:B.path,line:B.line,startLine:B.startLine,originalLine:B.line,originalStartLine:B.startLine,diffSide:B.diffSide,isResolved:B.isResolved,isOutdated:B.isOutdated,comments:B.comments.nodes.map(M=>({
          id:M.id,body:M.body,authorLogin:M.author?.login??"unknown",avatarUrl:M.author?.avatarUrl,createdAt:M.createdAt,updatedAt:M.updatedAt
        }))
      },N=this.getPRCacheEntry(t);
      if(N){
        const M=[...N.comments||[],R];
        this.updatePRCacheEntry(t,{
          comments:M
        })
      }
      return R
    }
    catch(g){
      throw console.error("[GithubPRService] Error adding review comment:",g),g
    }
  }
  async replyToReviewThread(e){
    const{
      prUrl:t,threadId:i,body:r
    }
    =e, s=await this.getGitHubAccessToken();
    if(!s){
      this.logService.warn("[GithubPRService] No GitHub access token available for replying to thread");
      return
    }
    try{
      const a=(await this.graphqlRequest(EUf,{
        threadId:i,body:r
      },s,"ReplyToReviewThread")).addPullRequestReviewThreadReply?.comment;
      if(!a){
        this.logService.warn("[GithubPRService] No comment returned from reply mutation");
        return
      }
      const l=a.pullRequestReview?.pullRequest?.reviewThreads?.nodes??[],u=l.find(g=>g.id===i);
      if(!u){
        this.logService.warn("[GithubPRService] Could not find updated thread in response");
        return
      }
      const d=this.getPRCacheEntry(t),m=d?.comments?.find(g=>g.id===u.id),p={
        id:u.id,path:u.path,line:u.line,startLine:u.startLine,originalLine:m?.originalLine??u.line,originalStartLine:m?.originalStartLine??u.startLine,diffSide:u.diffSide,isResolved:u.isResolved,isOutdated:u.isOutdated,comments:u.comments.nodes.map(g=>({
          id:g.id,body:g.body,authorLogin:g.author?.login??"unknown",avatarUrl:g.author?.avatarUrl,createdAt:g.createdAt,updatedAt:g.updatedAt
        }))
      };
      if(d){
        const g=new Map((d.comments??[]).map(A=>[A.id,A])),f=l.map(A=>{
          const w=g.get(A.id);
          return{
            id:A.id,path:A.path,line:A.line,startLine:A.startLine,originalLine:w?.originalLine??A.line,originalStartLine:w?.originalStartLine??A.startLine,diffSide:A.diffSide,isResolved:A.isResolved,isOutdated:A.isOutdated,comments:A.comments.nodes.map(C=>({
              id:C.id,body:C.body,authorLogin:C.author?.login??"unknown",avatarUrl:C.author?.avatarUrl,createdAt:C.createdAt,updatedAt:C.updatedAt
            }))
          }
        });
        this.updatePRCacheEntry(t,{
          comments:f
        })
      }
      return p
    }
    catch(o){
      console.error("[GithubPRService] Error replying to review thread:",o);
      return
    }
  }
  async getPullRequestFiles(e){
    const t=this.getPRCacheEntry(e);
    if(t?.filesData)return t.filesData;
    const i=performance.now(), r={
      files:[],baseSha:"",headSha:""
    }, s=Xbn(e);
    if(!s)return this.logService.warn("[GithubPRService] Invalid PR URL for files:", e), r;
    const{
      owner:o,repo:a,prNumber:l
    }
    =s, u=await this.getGitHubAccessToken();
    if(!u)return this.logService.warn("[GithubPRService] No GitHub access token available for fetching PR files"), r;
    try{
      const d=performance.now(),g=(await this.graphqlRequest(`
				query GetPRShas($owner: String!, $repo: String!, $prNumber: Int!) {
					repository(owner: $owner, name: $repo) {
						pullRequest(number: $prNumber) {
							baseRefOid
							headRefOid
						}
					}
				}
			`,{
        owner:o,repo:a,prNumber:l
      },u,"GetPRShas")).repository?.pullRequest;
      if(!g)throw new Error(`PR #${l} not found`);
      const f=g.headRefOid,A=await this.getMergeBase(o,a,g.baseRefOid,f,u);
      A!==g.baseRefOid&&console.debug(`[PR Diff API] Using merge base ${A.slice(0,7)} instead of baseRefOid ${g.baseRefOid.slice(0,7)}`);
      const w=await this.getPullRequestFilesREST(o,a,l,u);
      if(console.debug(`[PR Diff API] Fetch PR info + file list (${w.length} files): ${(performance.now()-d).toFixed(0)}ms (1 GraphQL + REST API)`),w.length===0){
        const $=(performance.now()-i).toFixed(0);
        return console.debug(`[PR Diff API] Total: ${$}ms for 0 files (1 GraphQL query, no content fetch needed)`),{
          files:[],baseSha:A,headSha:f
        }
      }
      const C=performance.now(),x=[],I=new Map;
      for(let $=0;
      $<w.length;
      $++){
        const H=w[$],W=this.mapRESTStatus(H.status),z=`f_${$}`,Y=H.previous_filename;
        if(I.set(H.filename,{
          path:H.filename,previousPath:Y,status:W,alias:z
        }),W!=="added"){
          const j=Y??H.filename;
          x.push(`
						${z}_base: object(expression: "${A}:${j}") {
							... on Blob { text isBinary }
						}
					`)
        }
        W!=="deleted"&&x.push(`
						${z}_head: object(expression: "${f}:${H.filename}") {
							... on Blob { text isBinary }
						}
					`)
      }
      const B=`
				query GetFileContents($owner: String!, $repo: String!) {
					repository(owner: $owner, name: $repo) {
						${x.join(`
`)}
					}
				}
			`,R=await this.graphqlRequest(B,{
        owner:o,repo:a
      },u,"GetFileContents");
      console.debug(`[PR Diff API] Fetch file contents (${x.length} blobs in 1 query): ${(performance.now()-C).toFixed(0)}ms`);
      const N=[];
      for(const[$,{
        previousPath:H,status:W,alias:z
      }
      ]of I){
        const Y=R.repository[`${z}_base`],j=R.repository[`${z}_head`];
        if(Y?.isBinary||j?.isBinary)continue;
        const X=Y?.text??void 0,ee=j?.text??void 0;
        N.push({
          filename:$,previousFilename:H,status:W,originalContents:X,modifiedContents:ee
        })
      }
      const M=(performance.now()-i).toFixed(0);
      console.debug(`[PR Diff API] Total: ${M}ms for ${N.length} files (2 GraphQL + 1 REST API queries)`);
      const O={
        files:N,baseSha:A,headSha:f
      };
      return this.updatePRCacheEntry(e,{
        filesData:O,isFilesLoading:!1
      }),O
    }
    catch(d){
      return console.error("[GithubPRService] Error fetching PR files:",d),r
    }
  }
  mapRESTStatus(e){
    switch(e.toLowerCase()){
      case"added":return"added";
      case"removed":return"deleted";
      case"renamed":return"renamed";
      case"modified":case"changed":default:return"modified"
    }
  }
  async getPullRequestFilesREST(e, t, i, r){
    const s=[];
    let o=1;
    const a=100;
    for(;
    ;
    ){
      const l=await fetch(`https://api.github.com/repos/${e}/${t}/pulls/${i}/files?per_page=${a}&page=${o}`,{
        method:"GET",headers:{
          Authorization:`Bearer ${r}`,Accept:"application/vnd.github.v3+json","User-Agent":"Cursor-IDE"
        }
      });
      if(!l.ok)throw new Error(`GitHub REST API error: ${l.status} ${l.statusText}`);
      const u=await l.json();
      if(s.push(...u),u.length<a)break;
      o++
    }
    return s
  }
  async getCurrentUserLogin(){
    if(this.cachedCurrentUserLogin)return this.cachedCurrentUserLogin;
    const e=await this.getGitHubAccessToken();
    if(!e){
      this.logService.warn("[GithubPRService] No GitHub access token available for fetching current user");
      return
    }
    try{
      const t=await this.graphqlRequest(TUf,{
        
      },e);
      return this.cachedCurrentUserLogin=t.viewer.login,this.cachedCurrentUserLogin
    }
    catch(t){
      console.error("[GithubPRService] Error fetching current user:",t);
      return
    }
  }
  async getCommitAuthorAvatar(e){
    const t=this.commitAvatarCache.get(e);
    if(t!==void 0)return t??void 0;
    const i=await this.getGitHubAccessToken();
    if(i)try{
      const r=await this.gitContextService.getGitUpstreamURL();
      if(!r||!r.includes("github.com"))return;
      const s=r.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
      if(!s)return;
      const[,o,a]=s,d=(await this.graphqlRequest(`
				query GetCommitAuthor($owner: String!, $repo: String!, $sha: GitObjectID!) {
					repository(owner: $owner, name: $repo) {
						object(oid: $sha) {
							... on Commit {
								author {
									user {
										login
										avatarUrl(size: 64)
									}
								}
							}
						}
					}
				}
			`,{
        owner:o,repo:a,sha:e
      },i)).repository.object?.author?.user;
      if(d?.avatarUrl)return this.commitAvatarCache.set(e,d.avatarUrl),d.avatarUrl;
      this.commitAvatarCache.set(e,null);
      return
    }
    catch(r){
      console.warn("[GithubPRService] Error fetching commit author avatar:",r),this.commitAvatarCache.set(e,null);
      return
    }
  }
  async getJobStepInfo(e, t, i, r){
    const s=await this.getGitHubAccessToken();
    if(s)try{
      const o=await fetch(`https://api.github.com/repos/${e}/${t}/actions/jobs/${i}`,{
        headers:{
          Authorization:`Bearer ${s}`,Accept:"application/vnd.github.v3+json","User-Agent":"Cursor-IDE"
        }
      });
      if(!o.ok)return;
      const a=await o.json(),l=[];
      if(l.push(`Job: ${a.name}`),l.push(`Status: ${a.conclusion||"unknown"}`),l.push(""),l.push("Steps:"),a.steps&&a.steps.length>0)for(const C of a.steps){
        const x=C.conclusion==="success"?"\u2713":C.conclusion==="failure"?"\u2717":C.conclusion==="skipped"?"\u25CB":"?";
        l.push(`  ${x} ${C.name} (${C.conclusion||C.status})`)
      }
      else l.push("  No step information available");
      l.push(""),l.push("Note: Full logs not available (runner may have lost connection)");
      const u=l.join(`
`),d=this.workspaceContextService.getWorkspace();
      if(!d.folders||d.folders.length===0)return{
        preview:u,logsPath:""
      };
      const m=await kie(d,this.pathService),p=Ryi(m),g=je.joinPath(p,`pr-${r}`),f=je.joinPath(g,"checks");
      await this.fileService.createFolder(f);
      const A=`job-${i}-steps.log`,w=je.joinPath(f,A);
      return await this.fileService.writeFile(w,Ms.fromString(u)),{
        preview:u,logsPath:w.fsPath
      }
    }
    catch(o){
      console.error("[GithubPRService] Error fetching job step info:",o);
      return
    }
  }
  async mergePullRequest(e){
    const{
      prNodeId:t,prUrl:i,mergeMethod:r="SQUASH"
    }
    =e, s=await this.getGitHubAccessToken();
    if(!s)throw this.logService.warn("[GithubPRService] No GitHub access token available for merging PR"), new Error("No GitHub access token available");
    const a=(await this.graphqlRequest(IUf, {
      pullRequestId:t,mergeMethod:r
    }, s)).mergePullRequest?.pullRequest?.merged===!0;
    if(a){
      const l=this.getPRCacheEntry(i);
      if(l?.pullRequest){
        const m=l.pullRequest,p=new FNe({
          number:m.number,title:m.title,url:m.url,repository:m.repository,isDraft:m.isDraft,description:m.description,descriptionRaw:m.descriptionRaw,author:m.author,headRef:m.headRef,headSha:m.headSha,baseRef:m.baseRef,state:"merged",mergedAt:new Date().toISOString(),closedAt:m.closedAt,createdAt:m.createdAt,updatedAt:new Date().toISOString()
        });
        this.updatePRCacheEntry(i,{
          pullRequest:p
        })
      }
      const d=this._userPullRequests.get().map(m=>m.url===i?new FNe({
        number:m.number,title:m.title,url:m.url,repository:m.repository,isDraft:m.isDraft,description:m.description,descriptionRaw:m.descriptionRaw,author:m.author,headRef:m.headRef,headSha:m.headSha,baseRef:m.baseRef,state:"merged",mergedAt:new Date().toISOString(),closedAt:m.closedAt,createdAt:m.createdAt,updatedAt:new Date().toISOString()
      }):m);
      this._userPullRequests.set(d,void 0)
    }
    return a
  }
  async markPRReadyForReview(e){
    const{
      prNodeId:t,prUrl:i
    }
    =e, r=await this.getGitHubAccessToken();
    if(!r)throw this.logService.warn("[GithubPRService] No GitHub access token available for marking PR ready"), new Error("No GitHub access token available");
    const o=(await this.graphqlRequest(DUf, {
      pullRequestId:t
    }, r)).markPullRequestReadyForReview?.pullRequest?.isDraft===!1;
    if(o){
      const a=this.getPRCacheEntry(i);
      if(a?.pullRequest){
        const d=a.pullRequest,m=new FNe({
          number:d.number,title:d.title,url:d.url,repository:d.repository,isDraft:!1,description:d.description,descriptionRaw:d.descriptionRaw,author:d.author,headRef:d.headRef,headSha:d.headSha,baseRef:d.baseRef,state:d.state,mergedAt:d.mergedAt,closedAt:d.closedAt,createdAt:d.createdAt,updatedAt:d.updatedAt
        });
        this.updatePRCacheEntry(i,{
          pullRequest:m
        })
      }
      const u=this._userPullRequests.get().map(d=>d.url===i?new FNe({
        number:d.number,title:d.title,url:d.url,repository:d.repository,isDraft:!1,description:d.description,descriptionRaw:d.descriptionRaw,author:d.author,headRef:d.headRef,headSha:d.headSha,baseRef:d.baseRef,state:d.state,mergedAt:d.mergedAt,closedAt:d.closedAt,createdAt:d.createdAt,updatedAt:d.updatedAt
      }):d);
      this._userPullRequests.set(u,void 0)
    }
    return o
  }
  async closePullRequest(e){
    const{
      prNodeId:t,prUrl:i
    }
    =e, r=await this.getGitHubAccessToken();
    if(!r)throw this.logService.warn("[GithubPRService] No GitHub access token available for closing PR"), new Error("No GitHub access token available");
    const o=(await this.graphqlRequest(BUf, {
      pullRequestId:t
    }, r)).closePullRequest?.pullRequest?.closed===!0;
    if(o){
      const a=this.getPRCacheEntry(i);
      if(a?.pullRequest){
        const d=a.pullRequest,m=new FNe({
          number:d.number,title:d.title,url:d.url,repository:d.repository,isDraft:d.isDraft,description:d.description,descriptionRaw:d.descriptionRaw,author:d.author,headRef:d.headRef,headSha:d.headSha,baseRef:d.baseRef,state:"closed",mergedAt:d.mergedAt,closedAt:new Date().toISOString(),createdAt:d.createdAt,updatedAt:new Date().toISOString()
        });
        this.updatePRCacheEntry(i,{
          pullRequest:m
        })
      }
      const u=this._userPullRequests.get().filter(d=>d.url!==i);
      this._userPullRequests.set(u,void 0)
    }
    return o
  }
  async enableAutoMerge(e){
    const{
      prNodeId:t,prUrl:i,mergeMethod:r="SQUASH"
    }
    =e, s=await this.getGitHubAccessToken();
    if(!s)throw this.logService.warn("[GithubPRService] No GitHub access token available for enabling auto-merge"), new Error("No GitHub access token available");
    const a=(await this.graphqlRequest(RUf, {
      pullRequestId:t,mergeMethod:r
    }, s)).enablePullRequestAutoMerge?.pullRequest?.autoMergeRequest!=null;
    if(a){
      const u=this.getPRCacheEntry(i)?.mergeInfo,d={
        id:u?.id??t,mergeable:u?.mergeable??"UNKNOWN",mergeStateStatus:u?.mergeStateStatus??"UNKNOWN",canMerge:u?.canMerge??!1,autoMergeEnabled:!0,viewerCanEnableAutoMerge:!1
      };
      this.updatePRCacheEntry(i,{
        mergeInfo:d
      })
    }
    return a
  }
  async disableAutoMerge(e){
    const{
      prNodeId:t,prUrl:i
    }
    =e, r=await this.getGitHubAccessToken();
    if(!r)throw this.logService.warn("[GithubPRService] No GitHub access token available for disabling auto-merge"), new Error("No GitHub access token available");
    const o=(await this.graphqlRequest(PUf, {
      pullRequestId:t
    }, r)).disablePullRequestAutoMerge?.pullRequest, a=o!=null&&o.autoMergeRequest===null;
    if(a){
      const u=this.getPRCacheEntry(i)?.mergeInfo,d={
        id:u?.id??t,mergeable:u?.mergeable??"UNKNOWN",mergeStateStatus:u?.mergeStateStatus??"UNKNOWN",canMerge:u?.canMerge??!1,autoMergeEnabled:!1,viewerCanEnableAutoMerge:!0
      };
      this.updatePRCacheEntry(i,{
        mergeInfo:d
      })
    }
    return a
  }
  async getJobLogs(e, t, i, r){
    const s=imy(e);
    if(!s){
      this.logService.warn("[GithubPRService] Could not parse job URL:",e);
      return
    }
    const{
      owner:o,repo:a
    }
    =s, l=i??s.jobId, u=await this.getGitHubAccessToken();
    if(!u){
      this.logService.warn("[GithubPRService] No GitHub access token available for fetching job logs");
      return
    }
    try{
      const d=await fetch(`https://api.github.com/repos/${o}/${a}/actions/jobs/${l}/logs`,{
        method:"GET",headers:{
          Authorization:`Bearer ${u}`,Accept:"application/vnd.github.v3+json","User-Agent":"Cursor-IDE"
        },redirect:"follow"
      });
      if(!d.ok){
        if(d.status===404)return this.getJobStepInfo(o,a,l,t);
        throw new Error(`GitHub REST API error: ${d.status} ${d.statusText}`)
      }
      const m=await d.text(),p=rmy(m),g=this.workspaceContextService.getWorkspace();
      if(!g.folders||g.folders.length===0){
        this.logService.warn("[GithubPRService] No workspace folder available for writing logs");
        return
      }
      const f=await kie(g,this.pathService),A=Ryi(f),w=je.joinPath(A,`pr-${t}`),C=je.joinPath(w,"checks");
      await this.fileService.createFolder(C);
      const x=r?.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),I=x&&x.length>0?`${x}.log`:`job-${l}.log`,B=je.joinPath(C,I);
      await this.fileService.writeFile(B,Ms.fromString(p));
      const R=5e4;
      let N;
      if(p.length>R){
        const M=p.length-R;
        let O=p.slice(M);
        const $=O.indexOf(`
`);
        if($>0&&(O=O.slice($+1)),!O.split(`
`)[0].startsWith("\u25B6 ")){
          const W=p.slice(0,M),z=W.lastIndexOf(`
\u25B6 `);
          if(z!==-1){
            const Y=z+1,j=W.indexOf(`
`,Y);
            O=`${j!==-1?W.slice(Y,j):W.slice(Y)}
  ... (truncated) ...
${O}`
          }
        }
        N=`... (showing last ~${R} chars, full logs at ${B.fsPath}) ...

${O}`
      }
      else N=p;
      return{
        preview:N,logsPath:B.fsPath
      }
    }
    catch(d){
      console.error("[GithubPRService] Error fetching job logs:",d);
      return
    }
  }
  refreshCache(){
    this.cache.clear(), this.cursorCache.clear(), this.canonicalRepoNameCache.clear(), this.cachedCurrentUserLogin=void 0
  }
}, VIa=dpe=__decorate([__param(0, AE), __param(1, WF), __param(2, Rr), __param(3, Gr), __param(4, Lr), __param(5, kp), __param(6, Tl), __param(7, wd), __param(8, Hi), __param(9, Kk), __param(10, ln)], VIa), Vi(EX, VIa, 1)
}
}), p0u, KIa, omy=