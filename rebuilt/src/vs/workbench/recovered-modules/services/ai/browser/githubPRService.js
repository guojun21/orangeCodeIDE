"use strict";

// Module: out-build/vs/workbench/services/ai/browser/githubPRService.js
// Offset: 33727061 (bundle byte offset)
// Size: 62214 bytes
fwe();
GRe();
uR();
Ql();
ml();
_s();
yn();
rt();
Uc();
Yn();
ns();
Er();
Wt();
jr();
rf();
vE();
kr();
ps();
WNe();
fUf();
SU();
Wu();
wm();
_g();
OJ();
sB();
EX = xi("githubPRService");
vUf = `
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
`;
zIa = `
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
`;
AUf = `
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
`;
m0u = `
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
`;
yUf = `
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
`;
wUf = `
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
`;
_Uf = `
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
`;
CUf = `
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
`;
SUf = `
mutation ResolveReviewThread($threadId: ID!) {
resolveReviewThread(input: { threadId: $threadId }) {
  thread {
    id
    isResolved
  }
}
}
`;
kUf = `
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
`;
EUf = `
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
`;
xUf = `
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
`;
TUf = `
query GetCurrentUser {
viewer {
  login
}
}
`;
IUf = `
mutation MergePullRequest($pullRequestId: ID!, $mergeMethod: PullRequestMergeMethod!) {
mergePullRequest(input: { pullRequestId: $pullRequestId, mergeMethod: $mergeMethod }) {
  pullRequest {
    merged
  }
}
}
`;
DUf = `
mutation MarkPRReadyForReview($pullRequestId: ID!) {
markPullRequestReadyForReview(input: { pullRequestId: $pullRequestId }) {
  pullRequest {
    id
    isDraft
  }
}
}
`;
BUf = `
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
`;
RUf = `
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
`;
PUf = `
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
`;
LUf = `
query GetCanonicalRepoName($owner: String!, $name: String!) {
repository(owner: $owner, name: $name) {
  nameWithOwner
}
}
`;
NUf = [/\.vercel\.app/i, /\.netlify\.app/i, /\.netlify\.com/i, /\.railway\.app/i, /\.onrender\.com/i, /\.herokuapp\.com/i, /\.amplifyapp\.com/i, /\.pages\.dev/i, /\.workers\.dev/i, /\.surge\.sh/i, /\.fly\.dev/i, /\.deno\.dev/i, /\.up\.railway\.app/i];
MUf = [/vercel\.com\/integrations/i, /vercel\.com\/docs/i, /vercel\.com\/.*\/settings/i, /netlify\.com\/docs/i, /github\.com/i, /docs\./i];
zki = ["repo"];
w7e = "github";
VIa = class extends at {
  static {
    dpe = this;
  }
  static {
    this.PR_PAGE_SIZE = 5;
  }
  static {
    this.REVIEW_PAGE_SIZE = 5;
  }
  static {
    this.AUTO_REFRESH_BASE_INTERVAL_MS = 30000;
  }
  static {
    this.AUTO_REFRESH_MAX_INTERVAL_MS = 300000;
  }
  static {
    this.AUTO_REFRESH_MAX_CONSECUTIVE_FAILURES = 10;
  }
  static {
    this.WINDOW_FOCUS_DEBOUNCE_MS = 5000;
  }
  updatePRCacheEntry(e, t) {
    const i = this._prDetailCache.get();
    const r = i[e];
    const o = {
      ...{
        prUrl: e,
        pullRequest: undefined,
        checkStatus: undefined,
        isCheckStatusLoading: false,
        comments: [],
        topLevelComments: [],
        isCommentsLoading: false,
        mergeInfo: undefined,
        isMergeInfoLoading: false,
        filesData: undefined,
        isFilesLoading: false,
        hasFetched: false,
        lastUpdatedAt: Date.now()
      },
      ...r,
      ...t,
      prUrl: e,
      lastUpdatedAt: Date.now()
    };
    this._prDetailCache.set({
      ...i,
      [e]: o
    }, undefined);
  }
  getPRCacheEntry(e) {
    return this._prDetailCache.get()[e];
  }
  populatePRCacheFromNodes(e, t) {
    for (const i of e) {
      if (!i.url) {
        continue;
      }
      const r = this.convertToUserPullRequest(i, t);
      const s = this.processCheckStatus(i);
      const o = this.processMergeInfo(i);
      const a = this.processReviewThreads(i.reviewThreads?.nodes || []);
      const l = i.reviewThreads?.pageInfo?.hasNextPage ?? false;
      const u = this.processTopLevelComments(i.comments?.nodes || []);
      const d = this.getPRCacheEntry(i.url);
      const m = d?.pullRequest?.headSha;
      const p = r.headSha;
      const g = m !== undefined && m !== p;
      console.debug(g ? `[GithubPRService] PR #${i.number} headSha changed (${m?.slice(0, 7)} -> ${p.slice(0, 7)}), invalidating cached diffs` : `[GithubPRService] PR #${i.number} headSha did not change (${m?.slice(0, 7)} -> ${p.slice(0, 7)}), not invalidating cached diffs`);
      this.updatePRCacheEntry(i.url, {
        pullRequest: r,
        checkStatus: s,
        isCheckStatusLoading: false,
        comments: a,
        topLevelComments: u,
        isCommentsLoading: false,
        mergeInfo: o,
        isMergeInfoLoading: false,
        hasFetched: !l,
        ...(g ? {
          filesData: undefined
        } : {})
      });
      if (g && d?.filesData && r.state === "open") {
        this.getPullRequestFiles(i.url).catch(f => {
          console.warn(`[GithubPRService] Failed to refetch diffs for PR #${i.number} after commit change:`, f);
        });
      }
    }
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.gitContextService = e;
    this.authenticationService = t;
    this.logService = i;
    this.fileService = r;
    this.workspaceContextService = s;
    this.pathService = o;
    this.experimentService = a;
    this.hostService = l;
    this.storageService = u;
    this.structuredLogService = d;
    this.instantiationService = m;
    this.cache = new Map();
    this.CACHE_TTL_MS = 300000;
    this.cursorCache = new Map();
    this.canonicalRepoNameCache = new Map();
    this._onDidChangeGitHubConnection = this._register(new Qe());
    this.onDidChangeGitHubConnection = this._onDidChangeGitHubConnection.event;
    this._onDidFinishGitHubLogin = this._register(new Qe());
    this.onDidFinishGitHubLogin = this._onDidFinishGitHubLogin.event;
    this._userPullRequests = Ua("githubPR.userPullRequests", []);
    this._userReviewRequests = Ua("githubPR.userReviewRequests", []);
    this._isLoadingPRs = Ua("githubPR.isLoadingPRs", true);
    this._isLoadingReviewRequests = Ua("githubPR.isLoadingReviewRequests", true);
    this._prHasMore = Ua("githubPR.prHasMore", false);
    this._reviewRequestsHasMore = Ua("githubPR.reviewRequestsHasMore", false);
    this._hasFetchedInitialData = Ua("githubPR.hasFetchedInitialData", false);
    this.userPullRequests = this._userPullRequests;
    this.userReviewRequests = this._userReviewRequests;
    this.isLoadingPRs = this._isLoadingPRs;
    this.isLoadingReviewRequests = this._isLoadingReviewRequests;
    this.prHasMore = this._prHasMore;
    this.reviewRequestsHasMore = this._reviewRequestsHasMore;
    this.hasFetchedInitialData = this._hasFetchedInitialData;
    this.prCurrentPage = 1;
    this.reviewCurrentPage = 1;
    this.autoRefreshConsecutiveFailures = 0;
    this.isBackgroundRefreshInProgress = false;
    this._prDetailCache = Ua("githubPR.prDetailCache", {});
    this.prDetailCache = this._prDetailCache;
    this.commitAvatarCache = new Map();
    const p = hm(this.storageService, "githubPullRequestBetaEnabled");
    this._register(p);
    const g = tp(this, this.experimentService.onDidChangeGates, () => this.experimentService.checkFeatureGate("github_prs_in_sidebar"));
    const f = tp(this, this.workspaceContextService.onDidChangeWorkbenchState, () => this.workspaceContextService.getWorkbenchState() !== 1);
    this.isEnabled = Ro(this, R => {
      if (!f.read(R)) {
        return false;
      }
      const M = g.read(R);
      const O = p.read(R);
      return M || O;
    });
    let A = false;
    let w = false;
    let C;
    const x = async () => {
      A = true;
      w = false;
      try {
        if (!this.isEnabled.get()) {
          this.structuredLogService.debug("github_auth", "Auth change ignored - feature disabled");
          return;
        }
        const R = await this.hasGitHubConnection();
        if (this._store.isDisposed) {
          return;
        }
        this.structuredLogService.debug("github_auth", "Connection state changed", {
          isConnected: R
        });
        this._onDidChangeGitHubConnection.fire(R);
        if (R) {
          await this.fetchInitialPRsAndReviews();
        } else {
          this.structuredLogService.debug("github_auth", "Clearing PR data after disconnect");
          this.clearPRData();
          this.refreshCache();
        }
      } finally {
        A = false;
        if (w && !this._store.isDisposed) {
          w = false;
          clearTimeout(C);
          C = setTimeout(() => I(), 200);
        }
      }
    };
    const I = () => {
      if (A) {
        w = true;
        return;
      }
      x();
    };
    this._register($i(() => clearTimeout(C)));
    this._register(this.authenticationService.onDidChangeSessions(R => {
      if (R.providerId === "github" || R.providerId === "cursor-github") {
        this.structuredLogService.debug("github_auth", "Session changed event", {
          providerId: R.providerId,
          event: R.event.added?.length ? "added" : R.event.removed?.length ? "removed" : "changed",
          addedCount: R.event.added?.length ?? 0,
          removedCount: R.event.removed?.length ?? 0,
          changedCount: R.event.changed?.length ?? 0
        });
        I();
      }
    }));
    this._register(this.authenticationService.onDidRegisterAuthenticationProvider(R => {
      if (R.id === "github" || R.id === "cursor-github") {
        this.structuredLogService.debug("github_auth", "Auth provider registered", {
          providerId: R.id
        });
        I();
      }
    }));
    this._register(this.authenticationService.onDidUnregisterAuthenticationProvider(R => {
      if (R.id === "github" || R.id === "cursor-github") {
        this.structuredLogService.debug("github_auth", "Auth provider unregistered", {
          providerId: R.id
        });
        I();
      }
    }));
    this._register(this.hostService.onDidChangeFocus(R => {
      if (R) {
        this.scheduleWindowFocusRefresh();
      } else {
        this.cancelWindowFocusRefresh();
      }
    }));
    let B = false;
    this._register(Oc(R => {
      const N = this.isEnabled.read(R);
      if (N && !B) {
        this.initializeDataStore();
      } else if (!N) {
        this._isLoadingPRs.set(false, undefined);
        this._isLoadingReviewRequests.set(false, undefined);
        this._hasFetchedInitialData.set(true, undefined);
      }
      B = N;
    }));
  }
  dispose() {
    this.stopAutoRefreshTimer();
    this.cancelWindowFocusRefresh();
    super.dispose();
  }
  async initializeDataStore() {
    this.structuredLogService.debug("github_auth", "Initializing data store");
    if (!this.isEnabled.get()) {
      this.structuredLogService.debug("github_auth", "Data store init skipped - feature disabled");
      this._isLoadingPRs.set(false, undefined);
      this._isLoadingReviewRequests.set(false, undefined);
      this._hasFetchedInitialData.set(true, undefined);
      return;
    }
    if (await this.hasGitHubConnection()) {
      this.structuredLogService.debug("github_auth", "Data store init - fetching initial data");
      await this.fetchInitialPRsAndReviews();
    } else {
      this.structuredLogService.debug("github_auth", "Data store init - not connected, skipping fetch");
      this._isLoadingPRs.set(false, undefined);
      this._isLoadingReviewRequests.set(false, undefined);
      this._hasFetchedInitialData.set(true, undefined);
    }
  }
  async fetchInitialPRsAndReviews() {
    this._isLoadingPRs.set(true, undefined);
    this._isLoadingReviewRequests.set(true, undefined);
    this.prCurrentPage = 1;
    this.reviewCurrentPage = 1;
    try {
      const {
        pullRequests: e,
        reviewRequests: t
      } = await this.getPullRequestsBatched(1, dpe.PR_PAGE_SIZE, 1, dpe.REVIEW_PAGE_SIZE);
      this._userPullRequests.set(e.pullRequests, undefined);
      this._prHasMore.set(e.hasMore, undefined);
      this._userReviewRequests.set(t.pullRequests, undefined);
      this._reviewRequestsHasMore.set(t.hasMore, undefined);
      this._hasFetchedInitialData.set(true, undefined);
      this.startAutoRefreshTimer();
      const i = [...e.pullRequests, ...t.pullRequests];
      this.prefetchPRDiffs(i).then(() => {
        this.prefetchSemanticGroups(i);
      });
    } catch (e) {
      this.structuredLogService.error("github_auth", "Failed to fetch initial PRs after auth", e);
      this.logService.error("[GithubPRService] Failed to fetch initial PRs and reviews:", e);
      this._hasFetchedInitialData.set(true, undefined);
    } finally {
      this._isLoadingPRs.set(false, undefined);
      this._isLoadingReviewRequests.set(false, undefined);
    }
  }
  async prefetchPRDiffs(e) {
    const t = e.filter(r => r.state === "open");
    if (t.length === 0) {
      return;
    }
    console.debug(`[GithubPRService] Prefetching diffs for ${t.length} open PRs in background`);
    const i = 3;
    for (let r = 0; r < t.length; r += i) {
      const s = t.slice(r, r + i);
      await Promise.all(s.map(async o => {
        try {
          if (this.getPRCacheEntry(o.url)?.filesData) {
            return;
          }
          await this.getPullRequestFiles(o.url);
          console.debug(`[GithubPRService] Prefetched diffs for PR #${o.number}`);
        } catch (a) {
          console.warn(`[GithubPRService] Failed to prefetch diffs for PR #${o.number}:`, a);
        }
      }));
    }
    console.debug(`[GithubPRService] Finished prefetching diffs for ${t.length} PRs`);
  }
  getReviewChangesService() {
    this._reviewChangesService ||= this.instantiationService.invokeFunction(e => e.get(vce));
    return this._reviewChangesService;
  }
  async prefetchSemanticGroups(e) {
    const t = e.filter(r => r.state === "open");
    if (t.length === 0) {
      return;
    }
    console.debug(`[GithubPRService] Prefetching semantic groups for ${t.length} open PRs in background`);
    const i = this.getReviewChangesService();
    for (const r of t) {
      try {
        await i.getResources({
          mode: yf.PR,
          prUrl: r.url,
          headRef: r.headRef,
          baseRef: r.baseRef,
          awaitSemanticGroups: true
        });
        console.debug(`[GithubPRService] Prefetched semantic groups for PR #${r.number}`);
      } catch (s) {
        console.warn(`[GithubPRService] Failed to prefetch semantic groups for PR #${r.number}:`, s);
      }
    }
    console.debug(`[GithubPRService] Finished prefetching semantic groups for ${t.length} PRs`);
  }
  clearPRData() {
    this._userPullRequests.set([], undefined);
    this._userReviewRequests.set([], undefined);
    this._isLoadingPRs.set(false, undefined);
    this._isLoadingReviewRequests.set(false, undefined);
    this._prHasMore.set(false, undefined);
    this._reviewRequestsHasMore.set(false, undefined);
    this._hasFetchedInitialData.set(false, undefined);
    this._prDetailCache.set({}, undefined);
    this.prCurrentPage = 1;
    this.reviewCurrentPage = 1;
    this.stopAutoRefreshTimer();
  }
  startAutoRefreshTimer() {
    this.stopAutoRefreshTimer();
    if (this._store.isDisposed) {
      return;
    }
    if (this.autoRefreshConsecutiveFailures >= dpe.AUTO_REFRESH_MAX_CONSECUTIVE_FAILURES) {
      this.logService.warn("[GithubPRService] Auto-refresh stopped after too many consecutive failures. Manual refresh required.");
      return;
    }
    const e = Math.pow(2, this.autoRefreshConsecutiveFailures);
    const t = dpe.AUTO_REFRESH_BASE_INTERVAL_MS * e;
    const i = Math.min(t, dpe.AUTO_REFRESH_MAX_INTERVAL_MS);
    const r = i * 0.1 * (Math.random() * 2 - 1);
    const s = Math.round(i + r);
    this.autoRefreshTimerHandle = setTimeout(() => {
      this.autoRefresh();
    }, s);
  }
  stopAutoRefreshTimer() {
    if (this.autoRefreshTimerHandle !== undefined) {
      clearTimeout(this.autoRefreshTimerHandle);
      this.autoRefreshTimerHandle = undefined;
    }
  }
  scheduleWindowFocusRefresh() {
    this.cancelWindowFocusRefresh();
    this.windowFocusDebounceTimerHandle = setTimeout(() => {
      this.windowFocusDebounceTimerHandle = undefined;
      if (!this._store.isDisposed) {
        this.windowFocusRefresh();
      }
    }, dpe.WINDOW_FOCUS_DEBOUNCE_MS);
  }
  cancelWindowFocusRefresh() {
    if (this.windowFocusDebounceTimerHandle !== undefined) {
      clearTimeout(this.windowFocusDebounceTimerHandle);
      this.windowFocusDebounceTimerHandle = undefined;
    }
  }
  async windowFocusRefresh() {
    if (this._store.isDisposed || !this.isEnabled.get() || !this._hasFetchedInitialData.get() || this.isBackgroundRefreshInProgress) {
      return;
    }
    const e = await this.hasGitHubConnection();
    if (!this._store.isDisposed && e) {
      this.isBackgroundRefreshInProgress = true;
      try {
        if (!(await Promise.all([this.refreshPullRequestsInternal(false), this.refreshReviewRequestsInternal(false)])).some(r => !r)) {
          this.autoRefreshConsecutiveFailures = 0;
          if (!this._store.isDisposed) {
            this.startAutoRefreshTimer();
          }
        }
      } finally {
        this.isBackgroundRefreshInProgress = false;
      }
    }
  }
  async autoRefresh() {
    if (!this.isEnabled.get()) {
      this.stopAutoRefreshTimer();
      return;
    }
    if (this.isBackgroundRefreshInProgress) {
      if (!this._store.isDisposed) {
        this.startAutoRefreshTimer();
      }
      return;
    }
    if (!(await this.hasGitHubConnection())) {
      return;
    }
    this.isBackgroundRefreshInProgress = true;
    let t = false;
    try {
      t = (await Promise.all([this.refreshPullRequestsInternal(false), this.refreshReviewRequestsInternal(false)])).some(r => !r);
    } catch {
      t = true;
    } finally {
      this.isBackgroundRefreshInProgress = false;
    }
    if (t) {
      this.autoRefreshConsecutiveFailures++;
      this.logService.warn(`[GithubPRService] Auto-refresh failed (attempt ${this.autoRefreshConsecutiveFailures}/${dpe.AUTO_REFRESH_MAX_CONSECUTIVE_FAILURES})`);
    } else {
      this.autoRefreshConsecutiveFailures = 0;
    }
    if (!this._store.isDisposed) {
      this.startAutoRefreshTimer();
    }
  }
  async refreshPullRequestsInternal(e) {
    if (this._isLoadingPRs.get()) {
      return true;
    }
    if (e) {
      this._isLoadingPRs.set(true, undefined);
    }
    this.prCurrentPage = 1;
    try {
      const t = await this.getPullRequests("self", {
        page: 1,
        pageSize: dpe.PR_PAGE_SIZE,
        bypassCache: true
      });
      this._userPullRequests.set(t.pullRequests, undefined);
      this._prHasMore.set(t.hasMore, undefined);
      return true;
    } catch (t) {
      this.logService.error("[GithubPRService] Failed to refresh PRs:", t);
      return false;
    } finally {
      if (e) {
        this._isLoadingPRs.set(false, undefined);
      }
    }
  }
  async refreshReviewRequestsInternal(e) {
    if (this._isLoadingReviewRequests.get()) {
      return true;
    }
    if (e) {
      this._isLoadingReviewRequests.set(true, undefined);
    }
    this.reviewCurrentPage = 1;
    try {
      const t = await this.getPullRequests("reviews", {
        page: 1,
        pageSize: dpe.REVIEW_PAGE_SIZE,
        bypassCache: true
      });
      this._userReviewRequests.set(t.pullRequests, undefined);
      this._reviewRequestsHasMore.set(t.hasMore, undefined);
      return true;
    } catch (t) {
      this.logService.error("[GithubPRService] Failed to refresh review requests:", t);
      return false;
    } finally {
      if (e) {
        this._isLoadingReviewRequests.set(false, undefined);
      }
    }
  }
  async loadMorePullRequests() {
    if (this._isLoadingPRs.get() || !this._prHasMore.get()) {
      return;
    }
    const e = this.prCurrentPage + 1;
    this._isLoadingPRs.set(true, undefined);
    try {
      const t = await this.getPullRequests("self", {
        page: e,
        pageSize: dpe.PR_PAGE_SIZE
      });
      const i = this._userPullRequests.get();
      this._userPullRequests.set([...i, ...t.pullRequests], undefined);
      this._prHasMore.set(t.hasMore, undefined);
      this.prCurrentPage = e;
    } catch (t) {
      this.logService.error("[GithubPRService] Failed to load more PRs:", t);
    } finally {
      this._isLoadingPRs.set(false, undefined);
    }
  }
  async loadMoreReviewRequests() {
    if (this._isLoadingReviewRequests.get() || !this._reviewRequestsHasMore.get()) {
      return;
    }
    const e = this.reviewCurrentPage + 1;
    this._isLoadingReviewRequests.set(true, undefined);
    try {
      const t = await this.getPullRequests("reviews", {
        page: e,
        pageSize: dpe.REVIEW_PAGE_SIZE
      });
      const i = this._userReviewRequests.get();
      this._userReviewRequests.set([...i, ...t.pullRequests], undefined);
      this._reviewRequestsHasMore.set(t.hasMore, undefined);
      this.reviewCurrentPage = e;
    } catch (t) {
      this.logService.error("[GithubPRService] Failed to load more review requests:", t);
    } finally {
      this._isLoadingReviewRequests.set(false, undefined);
    }
  }
  async refreshPullRequests() {
    if (await this.refreshPullRequestsInternal(true)) {
      this.autoRefreshConsecutiveFailures = 0;
    }
    this.startAutoRefreshTimer();
  }
  async refreshReviewRequests() {
    if (await this.refreshReviewRequestsInternal(true)) {
      this.autoRefreshConsecutiveFailures = 0;
    }
    this.startAutoRefreshTimer();
  }
  async searchPullRequests(e) {
    const {
      searchQuery: t,
      stateFilter: i = "open",
      pageSize: r = 20,
      after: s = null
    } = e;
    const o = {
      pullRequests: [],
      hasMore: false,
      endCursor: null,
      ciStatus: {},
      totalCount: 0
    };
    let a;
    try {
      await this.gitContextService.waitForGitContextProvider();
      const d = await this.gitContextService.getGitUpstreamURL();
      a = y7e(d);
    } catch {
      return o;
    }
    if (!a) {
      return o;
    }
    const l = await this.getGitHubAccessToken();
    if (!l) {
      return o;
    }
    a = await this.resolveCanonicalRepoName(a, l);
    let u;
    if (i === "requests") {
      u = `is:pr review-requested:@me repo:${a} is:open`;
    } else {
      u = `is:pr author:@me repo:${a}`;
      if (i === "open") {
        u += " is:open";
      } else if (i === "merged") {
        u += " is:merged";
      }
    }
    u += " sort:updated-desc";
    if (t) {
      u += ` ${t}`;
    }
    try {
      const d = await this.graphqlRequest(m0u, {
        searchQuery: u,
        first: r,
        after: s
      }, l);
      const m = d.search.nodes.filter(f => f !== null);
      const p = m.map(f => new FNe({
        number: f.number,
        title: f.title,
        url: f.url,
        repository: f.repository?.nameWithOwner || a,
        isDraft: f.isDraft,
        author: f.author?.login || "",
        headRef: f.headRefName,
        state: f.state.toLowerCase(),
        mergedAt: f.mergedAt || undefined,
        closedAt: f.closedAt || undefined,
        createdAt: f.createdAt,
        updatedAt: f.updatedAt
      }));
      const g = {};
      for (const f of m) {
        const A = f.commits?.nodes?.[0]?.commit?.statusCheckRollup?.state;
        let w = "unknown";
        if (A) {
          switch (A.toUpperCase()) {
            case "SUCCESS":
              w = "success";
              break;
            case "FAILURE":
            case "ERROR":
              w = "failure";
              break;
            case "PENDING":
            case "EXPECTED":
              w = "pending";
              break;
          }
        }
        g[f.url] = w;
      }
      return {
        pullRequests: p,
        hasMore: d.search.pageInfo.hasNextPage,
        endCursor: d.search.pageInfo.endCursor,
        ciStatus: g,
        totalCount: d.search.issueCount
      };
    } catch (d) {
      console.error("[GithubPRService.searchPullRequests] Failed:", d);
      return o;
    }
  }
  async getOrFetchPRDetails(e, t = false) {
    const i = this.getPRCacheEntry(e);
    if (i?.hasFetched && !t) {
      return i;
    }
    const r = this.parsePrUrl(e);
    if (!r) {
      throw new Error(`Invalid PR URL: ${e}`);
    }
    const {
      owner: s,
      repo: o,
      prNumber: a
    } = r;
    const l = await this.getGitHubAccessToken();
    if (!l) {
      throw new Error("No GitHub access token available");
    }
    this.updatePRCacheEntry(e, {
      isCheckStatusLoading: true,
      isCommentsLoading: true,
      isMergeInfoLoading: true
    });
    try {
      const d = (await this.graphqlRequest(xUf, {
        owner: s,
        repo: o,
        prNumber: a
      }, l)).repository?.pullRequest;
      if (!d) {
        throw new Error(`PR not found: ${e}`);
      }
      const m = this.convertToUserPullRequest(d, `${s}/${o}`);
      const p = d.commits?.nodes?.[0]?.commit;
      const g = p?.statusCheckRollup;
      const f = p?.deployments?.nodes || [];
      let A = g?.contexts?.nodes || [];
      const w = g?.contexts?.pageInfo;
      if (w?.hasNextPage) {
        const R = await this.getAllPRCheckContexts(e, w.endCursor);
        A = [...A, ...R];
      }
      const C = this.processCheckStatusFromContextsAndDeployments(A, f);
      const x = this.processMergeInfo(d);
      let I = this.processReviewThreads(d.reviewThreads?.nodes || []);
      if (d.reviewThreads?.pageInfo?.hasNextPage) {
        const R = await this.getAllPRComments(e, d.reviewThreads.pageInfo.endCursor);
        I = [...I, ...R.threads];
      }
      const B = this.processTopLevelComments(d.comments?.nodes || []);
      this.updatePRCacheEntry(e, {
        pullRequest: m,
        checkStatus: C,
        isCheckStatusLoading: false,
        comments: I,
        topLevelComments: B,
        isCommentsLoading: false,
        mergeInfo: x,
        isMergeInfoLoading: false,
        hasFetched: true
      });
      return this.getPRCacheEntry(e);
    } catch (u) {
      this.updatePRCacheEntry(e, {
        isCheckStatusLoading: false,
        isCommentsLoading: false,
        isMergeInfoLoading: false
      });
      throw u;
    }
  }
  processCheckStatus(e) {
    const t = {
      overallStatus: "unknown",
      successCount: 0,
      failureCount: 0,
      pendingCount: 0,
      neutralCount: 0,
      skippedCount: 0,
      totalCount: 0,
      previewLinks: [],
      checks: []
    };
    const i = e.commits?.nodes;
    if (!i || i.length === 0) {
      return t;
    }
    const r = i[0].commit?.statusCheckRollup;
    if (!r) {
      return t;
    }
    const s = r.contexts?.nodes || [];
    const o = i[0].commit?.deployments?.nodes || [];
    return this.processCheckStatusFromContextsAndDeployments(s, o);
  }
  processCheckStatusFromContextsAndDeployments(e, t) {
    let i = 0;
    let r = 0;
    let s = 0;
    let o = 0;
    let a = 0;
    const l = [];
    for (const p of e) {
      if (p.__typename === "CheckRun") {
        let g;
        if (p.status === "COMPLETED") {
          if (p.conclusion === "SUCCESS") {
            i++;
            g = "success";
          } else if (p.conclusion === "NEUTRAL") {
            o++;
            g = "neutral";
          } else if (p.conclusion === "SKIPPED") {
            a++;
            g = "skipped";
          } else if (p.conclusion === "FAILURE" || p.conclusion === "TIMED_OUT" || p.conclusion === "CANCELLED" || p.conclusion === "ACTION_REQUIRED") {
            r++;
            g = "failure";
          } else {
            s++;
            g = "pending";
          }
        } else {
          s++;
          g = "pending";
        }
        const f = [];
        if (p.annotations?.nodes) {
          for (const A of p.annotations.nodes) {
            f.push({
              path: A.path,
              startLine: A.location?.start?.line ?? 0,
              endLine: A.location?.end?.line ?? 0,
              level: A.annotationLevel,
              message: A.message,
              title: A.title || undefined
            });
          }
        }
        l.push({
          name: p.name,
          status: g,
          detailsUrl: p.detailsUrl || undefined,
          summary: p.summary || undefined,
          text: p.text || undefined,
          annotations: f.length > 0 ? f : undefined,
          databaseId: p.databaseId
        });
      } else if (p.__typename === "StatusContext") {
        let g;
        switch (p.state) {
          case "SUCCESS":
            i++;
            g = "success";
            break;
          case "FAILURE":
          case "ERROR":
            r++;
            g = "failure";
            break;
          case "PENDING":
          default:
            s++;
            g = "pending";
            break;
        }
        l.push({
          name: p.context,
          status: g,
          detailsUrl: p.targetUrl || undefined,
          description: p.description || undefined
        });
      }
    }
    const u = i + r + s + o + a;
    let d;
    if (u === 0) {
      d = "unknown";
    } else if (r > 0) {
      d = "failure";
    } else if (s > 0) {
      d = "pending";
    } else {
      d = "success";
    }
    const m = smy(e, t);
    return {
      overallStatus: d,
      successCount: i,
      failureCount: r,
      pendingCount: s,
      neutralCount: o,
      skippedCount: a,
      totalCount: u,
      previewLinks: m,
      checks: l
    };
  }
  processMergeInfo(e) {
    const t = e.mergeable === "MERGEABLE" && e.mergeStateStatus !== "BLOCKED" && e.state.toUpperCase() === "OPEN";
    const i = e;
    return {
      id: e.id,
      mergeable: e.mergeable,
      mergeStateStatus: e.mergeStateStatus,
      canMerge: t,
      viewerCanEnableAutoMerge: i.viewerCanEnableAutoMerge ?? false,
      autoMergeEnabled: i.autoMergeRequest != null
    };
  }
  processReviewThreads(e) {
    return e.filter(t => t.path).map(t => ({
      id: t.id,
      path: t.path,
      line: t.line,
      startLine: t.startLine,
      originalLine: t.originalLine,
      originalStartLine: t.originalStartLine,
      diffSide: t.diffSide,
      isResolved: t.isResolved,
      isOutdated: t.isOutdated,
      comments: t.comments.nodes.map(i => ({
        id: i.id,
        body: i.body,
        diffHunk: i.diffHunk ?? undefined,
        authorLogin: i.author?.login || "unknown",
        avatarUrl: i.author?.avatarUrl,
        createdAt: i.createdAt,
        updatedAt: i.updatedAt
      }))
    }));
  }
  processTopLevelComments(e) {
    return e.map(t => ({
      id: t.id,
      body: t.body,
      authorLogin: t.author?.login || "unknown",
      avatarUrl: t.author?.avatarUrl,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt
    }));
  }
  async getOrFetchPRFiles(e, t = false) {
    const i = this.getPRCacheEntry(e);
    if (i?.filesData && !t) {
      return i.filesData;
    }
    this.updatePRCacheEntry(e, {
      isFilesLoading: true
    });
    try {
      const r = await this.getPullRequestFiles(e);
      this.updatePRCacheEntry(e, {
        filesData: r,
        isFilesLoading: false
      });
      return r;
    } catch (r) {
      this.logService.error("[GithubPRService] Failed to fetch PR files:", r);
      this.updatePRCacheEntry(e, {
        isFilesLoading: false
      });
      return;
    }
  }
  async getGitHubAccessToken() {
    try {
      const e = await this.authenticationService.getSessions(w7e, zki, undefined, true);
      if (e.length > 0) {
        this.structuredLogService.debug("github_auth", "Access token retrieved successfully", {
          sessionCount: e.length
        });
        return e[0].accessToken;
      }
      this.structuredLogService.debug("github_auth", "No existing session found - user needs to connect");
      return;
    } catch (e) {
      this.structuredLogService.error("github_auth", "Failed to get access token", e, {
        providerId: w7e
      });
      this.logService.error("[GithubPRService] Failed to get GitHub access token:", e);
      return;
    }
  }
  async triggerGitHubLogin() {
    this.structuredLogService.debug("github_auth", "Login flow triggered", {
      providerId: w7e,
      scopes: zki
    });
    try {
      this.logService.info("[GithubPRService] Triggering GitHub login flow");
      const e = await this.authenticationService.createSession(w7e, zki, {
        activateImmediate: true
      });
      if (e?.accessToken) {
        this.structuredLogService.debug("github_auth", "Login successful", {
          providerId: w7e,
          hasToken: true
        });
        this.refreshCache();
        this._onDidChangeGitHubConnection.fire(true);
        this._onDidFinishGitHubLogin.fire("success");
        return true;
      } else {
        this.structuredLogService.warn("github_auth", "Login returned no token", {
          providerId: w7e,
          hasSession: !!e
        });
        this._onDidFinishGitHubLogin.fire("failed");
        return false;
      }
    } catch (e) {
      const t = bf(e) ? "cancelled" : "failed";
      if (t === "cancelled") {
        this.structuredLogService.debug("github_auth", "Login cancelled by user");
        this.logService.info("[GithubPRService] GitHub login was cancelled");
      } else {
        this.structuredLogService.error("github_auth", "Login failed", e, {
          providerId: w7e
        });
        this.logService.error("[GithubPRService] Failed to authenticate with GitHub:", e);
      }
      this._onDidFinishGitHubLogin.fire(t);
      return false;
    }
  }
  logRateLimitInfo(e, t) {
    const i = e.headers.get("x-ratelimit-used");
    const r = e.headers.get("x-ratelimit-limit");
    const s = e.headers.get("x-ratelimit-reset");
    const o = i ? parseInt(i, 10) : 0;
    const a = r ? parseInt(r, 10) : 5000;
    const l = s ? parseInt(s, 10) : 0;
    const u = Math.floor(Date.now() / 1000);
    const d = Math.max(0, l - u);
    const m = Math.floor(d / 60);
    const p = 3600;
    const g = p - d;
    let f = "";
    if (g > 60 && o > 0) {
      const A = o / g;
      const w = Math.round(A * p);
      if (w > a) {
        f = ` \u26A0\uFE0F PROJECTED: ${w} (${Math.round(w / a * 100)}% of limit)`;
      }
    }
    console.debug(`[GitHub API] ${t} - Used: ${o}/${a} | Resets in ${m}m${f}`);
  }
  async getMergeBase(e, t, i, r, s) {
    const o = await fetch(`https://api.github.com/repos/${e}/${t}/compare/${i}...${r}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${s}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Cursor-IDE"
      }
    });
    if (!o.ok) {
      throw new Error(`GitHub Compare API error: ${o.status} ${o.statusText}`);
    }
    return (await o.json()).merge_base_commit.sha;
  }
  async graphqlRequest(e, t, i, r) {
    const s = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${i}`,
        "Content-Type": "application/json",
        "User-Agent": "Cursor-IDE"
      },
      body: JSON.stringify({
        query: e,
        variables: t
      })
    });
    const o = r ?? this.extractQueryName(e);
    this.logRateLimitInfo(s, o);
    if (!s.ok) {
      throw new Error(`GitHub API error: ${s.status} ${s.statusText}`);
    }
    const a = await s.json();
    if (a.errors && a.errors.length > 0) {
      throw new Error(`GitHub GraphQL error: ${a.errors.map(l => l.message).join(", ")}`);
    }
    return a.data;
  }
  extractQueryName(e) {
    return e.match(/(?:query|mutation)\s+(\w+)/)?.[1] ?? "UnknownQuery";
  }
  async resolveCanonicalRepoName(e, t) {
    const i = this.canonicalRepoNameCache.get(e);
    if (i !== undefined) {
      return i;
    }
    const r = e.split("/");
    if (r.length !== 2) {
      return e;
    }
    const [s, o] = r;
    try {
      const a = await this.graphqlRequest(LUf, {
        owner: s,
        name: o
      }, t, "GetCanonicalRepoName");
      if (a.repository?.nameWithOwner) {
        const l = a.repository.nameWithOwner;
        this.canonicalRepoNameCache.set(e, l);
        if (l !== e) {
          this.canonicalRepoNameCache.set(l, l);
          this.logService.info(`[GithubPRService] Repository "${e}" resolved to canonical name "${l}"`);
        }
        return l;
      }
    } catch (a) {
      this.logService.warn(`[GithubPRService] Failed to resolve canonical repo name for "${e}":`, a);
    }
    this.canonicalRepoNameCache.set(e, e);
    return e;
  }
  convertToUserPullRequest(e, t) {
    return new FNe({
      number: e.number,
      title: e.title,
      url: e.url,
      repository: e.repository?.nameWithOwner || t,
      isDraft: e.isDraft,
      description: e.bodyHTML || e.body || "",
      descriptionRaw: e.body || "",
      author: e.author?.login || "",
      headRef: e.headRefName,
      headSha: e.headRefOid || "",
      baseRef: e.baseRefName,
      state: e.state.toLowerCase(),
      mergedAt: e.mergedAt || undefined,
      closedAt: e.closedAt || undefined,
      createdAt: e.createdAt,
      updatedAt: e.updatedAt
    });
  }
  async hasGitHubConnection() {
    try {
      const e = await this.authenticationService.getSessions(w7e, zki, undefined, true);
      const t = e.length > 0;
      this.structuredLogService.debug("github_auth", "Connection check completed", {
        hasConnection: t,
        sessionCount: e.length
      });
      return t;
    } catch (e) {
      this.structuredLogService.error("github_auth", "Connection check failed", e);
      return false;
    }
  }
  async getPullRequests(e, t) {
    const {
      page: i,
      pageSize: r,
      filters: s,
      bypassCache: o,
      lightweight: a
    } = t ?? {};
    let l;
    try {
      await this.gitContextService.waitForGitContextProvider();
      const A = await this.gitContextService.getGitUpstreamURL();
      l = y7e(A);
    } catch (A) {
      console.error("Error detecting repository from git context", A);
      return new uV({
        pullRequests: [],
        hasMore: false,
        totalCount: 0,
        hasGitConnection: false
      });
    }
    if (!l) {
      console.error("No repository filter extracted");
      return new uV({
        pullRequests: [],
        hasMore: false,
        totalCount: 0,
        hasGitConnection: false
      });
    }
    const u = await this.getGitHubAccessToken();
    if (!u) {
      this.logService.warn("[GithubPRService] No GitHub access token available");
      return new uV({
        pullRequests: [],
        hasMore: false,
        totalCount: 0,
        hasGitConnection: false
      });
    }
    l = await this.resolveCanonicalRepoName(l, u);
    const d = s ? `${s.searchQuery || ""}_${s.stateFilter || ""}` : "";
    const m = i || 1;
    const p = e === "self" ? "prs" : "review";
    const g = `${p}_${l}_${m}_${r || 5}_${d}`;
    const f = this.cache.get(g);
    if (!o && f && Date.now() - f.timestamp < this.CACHE_TTL_MS && m === 1) {
      return f.response;
    }
    try {
      const A = r || 5;
      const w = `${p}_${l}_${d}`;
      let C = null;
      if (m > 1) {
        C = this.cursorCache.get(`${w}_page_${m - 1}`) || null;
      }
      let x;
      if (e === "self") {
        x = `is:pr author:@me repo:${l}`;
        if (s?.stateFilter) {
          const O = s.stateFilter.toLowerCase();
          if (O === "open") {
            x += " is:open";
          } else if (O === "closed") {
            x += " is:closed";
          } else if (O === "merged") {
            x += " is:merged";
          }
        } else {
          x += " is:open";
        }
      } else {
        x = `type:pr review-requested:@me repo:${l}`;
        if (s?.stateFilter?.toLowerCase() !== "all") {
          x += " is:open";
        }
      }
      if (s?.searchQuery) {
        x += ` ${s.searchQuery}`;
      }
      let I;
      if (a && e === "self") {
        I = m0u;
      } else if (e === "self") {
        I = AUf;
      } else {
        I = yUf;
      }
      const B = await this.graphqlRequest(I, {
        searchQuery: x,
        first: A,
        after: C
      }, u);
      if (B.search.pageInfo.endCursor) {
        this.cursorCache.set(`${w}_page_${m}`, B.search.pageInfo.endCursor);
      }
      const R = B.search.nodes.filter(O => O !== null);
      if (!a) {
        this.populatePRCacheFromNodes(R, l);
      }
      const N = R.filter(O => "number" in O).map(O => this.convertToUserPullRequest(O, l));
      const M = new uV({
        pullRequests: N,
        hasMore: B.search.pageInfo.hasNextPage,
        totalCount: B.search.issueCount,
        hasGitConnection: true
      });
      if (m === 1) {
        this.cache.set(g, {
          response: M,
          timestamp: Date.now()
        });
      }
      return M;
    } catch (A) {
      console.error(`Error fetching ${e === "self" ? "pull requests" : "review requests"} from GitHub API`, A);
      if (f) {
        return f.response;
      } else {
        return new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: true
        });
      }
    }
  }
  async getPullRequestsBatched(e, t, i, r, s) {
    let o;
    try {
      await this.gitContextService.waitForGitContextProvider();
      const w = await this.gitContextService.getGitUpstreamURL();
      o = y7e(w);
    } catch (w) {
      console.error("Error detecting repository from git context", w);
      return {
        pullRequests: new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: false
        }),
        reviewRequests: new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: false
        })
      };
    }
    if (!o) {
      console.error("No repository filter extracted");
      return {
        pullRequests: new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: false
        }),
        reviewRequests: new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: false
        })
      };
    }
    const a = await this.getGitHubAccessToken();
    if (!a) {
      this.logService.warn("[GithubPRService] No GitHub access token available");
      return {
        pullRequests: new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: false
        }),
        reviewRequests: new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: false
        })
      };
    }
    o = await this.resolveCanonicalRepoName(o, a);
    const l = s ? `${s.searchQuery || ""}_${s.stateFilter || ""}` : "";
    const u = e || 1;
    const d = i || 1;
    const m = `prs_${o}_${u}_${t || 5}_${l}`;
    const p = `review_${o}_${d}_${r || 5}_${l}`;
    const g = this.cache.get(m);
    const f = this.cache.get(p);
    const A = Date.now();
    if (u === 1 && d === 1 && g && f && A - g.timestamp < this.CACHE_TTL_MS && A - f.timestamp < this.CACHE_TTL_MS) {
      return {
        pullRequests: g.response,
        reviewRequests: f.response
      };
    }
    try {
      const w = t || 5;
      const C = r || 5;
      const x = `prs_${o}_${l}`;
      const I = `review_${o}_${l}`;
      let B = null;
      let R = null;
      if (u > 1) {
        B = this.cursorCache.get(`${x}_page_${u - 1}`) || null;
      }
      if (d > 1) {
        R = this.cursorCache.get(`${I}_page_${d - 1}`) || null;
      }
      let N = `is:pr author:@me repo:${o}`;
      if (s?.stateFilter) {
        const j = s.stateFilter.toLowerCase();
        if (j === "open") {
          N += " is:open";
        } else if (j === "closed") {
          N += " is:closed";
        } else if (j === "merged") {
          N += " is:merged";
        }
      } else {
        N += " is:open";
      }
      if (s?.searchQuery) {
        N += ` ${s.searchQuery}`;
      }
      let M = `type:pr review-requested:@me repo:${o}`;
      if (s?.stateFilter?.toLowerCase() !== "all") {
        M += " is:open";
      }
      if (s?.searchQuery) {
        M += ` ${s.searchQuery}`;
      }
      const O = await this.graphqlRequest(wUf, {
        prQuery: N,
        reviewQuery: M,
        prFirst: w,
        reviewFirst: C,
        prAfter: B,
        reviewAfter: R
      }, a, "GetPRsAndReviewRequests");
      if (O.userPRs.pageInfo.endCursor) {
        this.cursorCache.set(`${x}_page_${u}`, O.userPRs.pageInfo.endCursor);
      }
      if (O.reviewRequests.pageInfo.endCursor) {
        this.cursorCache.set(`${I}_page_${d}`, O.reviewRequests.pageInfo.endCursor);
      }
      const $ = [...O.userPRs.nodes, ...O.reviewRequests.nodes].filter(j => j !== null);
      this.populatePRCacheFromNodes($, o);
      const H = O.userPRs.nodes.filter(j => j !== null).map(j => this.convertToUserPullRequest(j, o));
      const W = O.reviewRequests.nodes.filter(j => j !== null && "number" in j).map(j => this.convertToUserPullRequest(j, o));
      const z = new uV({
        pullRequests: H,
        hasMore: O.userPRs.pageInfo.hasNextPage,
        totalCount: O.userPRs.issueCount,
        hasGitConnection: true
      });
      const Y = new uV({
        pullRequests: W,
        hasMore: O.reviewRequests.pageInfo.hasNextPage,
        totalCount: O.reviewRequests.issueCount,
        hasGitConnection: true
      });
      if (u === 1) {
        this.cache.set(m, {
          response: z,
          timestamp: Date.now()
        });
      }
      if (d === 1) {
        this.cache.set(p, {
          response: Y,
          timestamp: Date.now()
        });
      }
      return {
        pullRequests: z,
        reviewRequests: Y
      };
    } catch (w) {
      console.error("Error fetching PRs and review requests from GitHub API", w);
      return {
        pullRequests: g?.response ?? new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: true
        }),
        reviewRequests: f?.response ?? new uV({
          pullRequests: [],
          hasMore: false,
          totalCount: 0,
          hasGitConnection: true
        })
      };
    }
  }
  parsePrUrl(e) {
    try {
      const i = new URL(e).pathname.split("/").filter(Boolean);
      if (i.length >= 4 && i[2] === "pull") {
        const r = i[0];
        const s = i[1];
        const o = parseInt(i[3], 10);
        if (r && s && !isNaN(o)) {
          return {
            owner: r,
            repo: s,
            prNumber: o
          };
        }
      }
    } catch (t) {
      this.logService.error("[GithubPRService] Failed to parse PR URL:", e, t);
    }
  }
  async getAllPRComments(e, t) {
    const i = {
      threads: [],
      hasMore: false
    };
    const r = Xbn(e);
    if (!r) {
      this.logService.warn("[GithubPRService] Invalid PR URL for comments:", e);
      return i;
    }
    const {
      owner: s,
      repo: o,
      prNumber: a
    } = r;
    const l = await this.getGitHubAccessToken();
    if (!l) {
      this.logService.warn("[GithubPRService] No GitHub access token available for fetching comments");
      return i;
    }
    try {
      const u = [];
      let d = true;
      let m = t ?? null;
      while (d) {
        const g = (await this.graphqlRequest(_Uf, {
          owner: s,
          repo: o,
          prNumber: a,
          first: 100,
          after: m
        }, l)).repository?.pullRequest;
        if (!g) {
          this.logService.warn("[GithubPRService] PR not found for comments:", e);
          return i;
        }
        const f = g.reviewThreads;
        u.push(...this.processReviewThreads(f.nodes));
        d = f.pageInfo.hasNextPage;
        m = f.pageInfo.endCursor;
      }
      return {
        threads: u,
        hasMore: false
      };
    } catch (u) {
      console.error("[GithubPRService] Error fetching PR comments:", u);
      return i;
    }
  }
  async getAllPRCheckContexts(e, t) {
    const i = Xbn(e);
    if (!i) {
      this.logService.warn("[GithubPRService] Invalid PR URL for check contexts:", e);
      return [];
    }
    const {
      owner: r,
      repo: s,
      prNumber: o
    } = i;
    const a = await this.getGitHubAccessToken();
    if (!a) {
      this.logService.warn("[GithubPRService] No GitHub access token available for fetching check contexts");
      return [];
    }
    try {
      const l = [];
      let u = true;
      let d = t ?? null;
      while (u) {
        const p = (await this.graphqlRequest(CUf, {
          owner: r,
          repo: s,
          prNumber: o,
          first: 100,
          after: d
        }, a)).repository?.pullRequest;
        if (!p) {
          this.logService.warn("[GithubPRService] PR not found for check contexts:", e);
          return [];
        }
        const f = p.commits?.nodes?.[0]?.commit?.statusCheckRollup?.contexts;
        if (!f) {
          return l;
        }
        l.push(...(f.nodes || []));
        u = f.pageInfo.hasNextPage;
        d = f.pageInfo.endCursor;
      }
      return l;
    } catch (l) {
      console.error("[GithubPRService] Error fetching PR check contexts:", l);
      return [];
    }
  }
  async resolveReviewThread(e) {
    const t = await this.getGitHubAccessToken();
    if (!t) {
      this.logService.warn("[GithubPRService] No GitHub access token available for resolving thread");
      return false;
    }
    try {
      return (await this.graphqlRequest(SUf, {
        threadId: e
      }, t)).resolveReviewThread?.thread?.isResolved === true;
    } catch (i) {
      console.error("[GithubPRService] Error resolving review thread:", i);
      return false;
    }
  }
  async addPullRequestReviewComment(e) {
    const {
      prUrl: t,
      path: i,
      body: r,
      line: s,
      startLine: o,
      side: a = "RIGHT"
    } = e;
    const l = Xbn(t);
    if (!l) {
      this.logService.warn("[GithubPRService] Invalid PR URL for adding comment:", t);
      return;
    }
    const {
      owner: u,
      repo: d,
      prNumber: m
    } = l;
    const p = await this.getGitHubAccessToken();
    if (!p) {
      this.logService.warn("[GithubPRService] No GitHub access token available for adding review comment");
      return;
    }
    try {
      const f = await this.graphqlRequest(`
				query GetPRId($owner: String!, $repo: String!, $prNumber: Int!) {
					repository(owner: $owner, name: $repo) {
						pullRequest(number: $prNumber) {
							id
							headRefOid
						}
					}
				}
			`, {
        owner: u,
        repo: d,
        prNumber: m
      }, p, "GetPRId");
      const A = f.repository?.pullRequest?.id;
      const w = f.repository?.pullRequest?.headRefOid;
      if (!A || !w) {
        this.logService.warn("[GithubPRService] Could not get PR ID or head SHA for adding comment");
        return;
      }
      const C = {
        pullRequestId: A,
        commitOID: w,
        body: r,
        path: i,
        line: s,
        side: a
      };
      if (o !== undefined && o !== s) {
        C.startLine = o;
        C.startSide = a;
      }
      const I = (await this.graphqlRequest(kUf, C, p, "AddPullRequestReviewComment")).addPullRequestReview?.pullRequestReview?.pullRequest?.reviewThreads?.nodes;
      const B = I?.[I.length - 1];
      if (!B) {
        this.logService.warn("[GithubPRService] No thread returned from add comment mutation");
        return;
      }
      const R = {
        id: B.id,
        path: B.path,
        line: B.line,
        startLine: B.startLine,
        originalLine: B.line,
        originalStartLine: B.startLine,
        diffSide: B.diffSide,
        isResolved: B.isResolved,
        isOutdated: B.isOutdated,
        comments: B.comments.nodes.map(M => ({
          id: M.id,
          body: M.body,
          authorLogin: M.author?.login ?? "unknown",
          avatarUrl: M.author?.avatarUrl,
          createdAt: M.createdAt,
          updatedAt: M.updatedAt
        }))
      };
      const N = this.getPRCacheEntry(t);
      if (N) {
        const M = [...(N.comments || []), R];
        this.updatePRCacheEntry(t, {
          comments: M
        });
      }
      return R;
    } catch (g) {
      console.error("[GithubPRService] Error adding review comment:", g);
      throw g;
    }
  }
  async replyToReviewThread(e) {
    const {
      prUrl: t,
      threadId: i,
      body: r
    } = e;
    const s = await this.getGitHubAccessToken();
    if (!s) {
      this.logService.warn("[GithubPRService] No GitHub access token available for replying to thread");
      return;
    }
    try {
      const a = (await this.graphqlRequest(EUf, {
        threadId: i,
        body: r
      }, s, "ReplyToReviewThread")).addPullRequestReviewThreadReply?.comment;
      if (!a) {
        this.logService.warn("[GithubPRService] No comment returned from reply mutation");
        return;
      }
      const l = a.pullRequestReview?.pullRequest?.reviewThreads?.nodes ?? [];
      const u = l.find(g => g.id === i);
      if (!u) {
        this.logService.warn("[GithubPRService] Could not find updated thread in response");
        return;
      }
      const d = this.getPRCacheEntry(t);
      const m = d?.comments?.find(g => g.id === u.id);
      const p = {
        id: u.id,
        path: u.path,
        line: u.line,
        startLine: u.startLine,
        originalLine: m?.originalLine ?? u.line,
        originalStartLine: m?.originalStartLine ?? u.startLine,
        diffSide: u.diffSide,
        isResolved: u.isResolved,
        isOutdated: u.isOutdated,
        comments: u.comments.nodes.map(g => ({
          id: g.id,
          body: g.body,
          authorLogin: g.author?.login ?? "unknown",
          avatarUrl: g.author?.avatarUrl,
          createdAt: g.createdAt,
          updatedAt: g.updatedAt
        }))
      };
      if (d) {
        const g = new Map((d.comments ?? []).map(A => [A.id, A]));
        const f = l.map(A => {
          const w = g.get(A.id);
          return {
            id: A.id,
            path: A.path,
            line: A.line,
            startLine: A.startLine,
            originalLine: w?.originalLine ?? A.line,
            originalStartLine: w?.originalStartLine ?? A.startLine,
            diffSide: A.diffSide,
            isResolved: A.isResolved,
            isOutdated: A.isOutdated,
            comments: A.comments.nodes.map(C => ({
              id: C.id,
              body: C.body,
              authorLogin: C.author?.login ?? "unknown",
              avatarUrl: C.author?.avatarUrl,
              createdAt: C.createdAt,
              updatedAt: C.updatedAt
            }))
          };
        });
        this.updatePRCacheEntry(t, {
          comments: f
        });
      }
      return p;
    } catch (o) {
      console.error("[GithubPRService] Error replying to review thread:", o);
      return;
    }
  }
  async getPullRequestFiles(e) {
    const t = this.getPRCacheEntry(e);
    if (t?.filesData) {
      return t.filesData;
    }
    const i = performance.now();
    const r = {
      files: [],
      baseSha: "",
      headSha: ""
    };
    const s = Xbn(e);
    if (!s) {
      this.logService.warn("[GithubPRService] Invalid PR URL for files:", e);
      return r;
    }
    const {
      owner: o,
      repo: a,
      prNumber: l
    } = s;
    const u = await this.getGitHubAccessToken();
    if (!u) {
      this.logService.warn("[GithubPRService] No GitHub access token available for fetching PR files");
      return r;
    }
    try {
      const d = performance.now();
      const g = (await this.graphqlRequest(`
				query GetPRShas($owner: String!, $repo: String!, $prNumber: Int!) {
					repository(owner: $owner, name: $repo) {
						pullRequest(number: $prNumber) {
							baseRefOid
							headRefOid
						}
					}
				}
			`, {
        owner: o,
        repo: a,
        prNumber: l
      }, u, "GetPRShas")).repository?.pullRequest;
      if (!g) {
        throw new Error(`PR #${l} not found`);
      }
      const f = g.headRefOid;
      const A = await this.getMergeBase(o, a, g.baseRefOid, f, u);
      if (A !== g.baseRefOid) {
        console.debug(`[PR Diff API] Using merge base ${A.slice(0, 7)} instead of baseRefOid ${g.baseRefOid.slice(0, 7)}`);
      }
      const w = await this.getPullRequestFilesREST(o, a, l, u);
      console.debug(`[PR Diff API] Fetch PR info + file list (${w.length} files): ${(performance.now() - d).toFixed(0)}ms (1 GraphQL + REST API)`);
      if (w.length === 0) {
        const $ = (performance.now() - i).toFixed(0);
        console.debug(`[PR Diff API] Total: ${$}ms for 0 files (1 GraphQL query, no content fetch needed)`);
        return {
          files: [],
          baseSha: A,
          headSha: f
        };
      }
      const C = performance.now();
      const x = [];
      const I = new Map();
      for (let $ = 0; $ < w.length; $++) {
        const H = w[$];
        const W = this.mapRESTStatus(H.status);
        const z = `f_${$}`;
        const Y = H.previous_filename;
        I.set(H.filename, {
          path: H.filename,
          previousPath: Y,
          status: W,
          alias: z
        });
        if (W !== "added") {
          const j = Y ?? H.filename;
          x.push(`
						${z}_base: object(expression: "${A}:${j}") {
							... on Blob { text isBinary }
						}
					`);
        }
        if (W !== "deleted") {
          x.push(`
						${z}_head: object(expression: "${f}:${H.filename}") {
							... on Blob { text isBinary }
						}
					`);
        }
      }
      const B = `
				query GetFileContents($owner: String!, $repo: String!) {
					repository(owner: $owner, name: $repo) {
						${x.join(`
`)}
					}
				}
			`;
      const R = await this.graphqlRequest(B, {
        owner: o,
        repo: a
      }, u, "GetFileContents");
      console.debug(`[PR Diff API] Fetch file contents (${x.length} blobs in 1 query): ${(performance.now() - C).toFixed(0)}ms`);
      const N = [];
      for (const [$, {
        previousPath: H,
        status: W,
        alias: z
      }] of I) {
        const Y = R.repository[`${z}_base`];
        const j = R.repository[`${z}_head`];
        if (Y?.isBinary || j?.isBinary) {
          continue;
        }
        const X = Y?.text ?? undefined;
        const ee = j?.text ?? undefined;
        N.push({
          filename: $,
          previousFilename: H,
          status: W,
          originalContents: X,
          modifiedContents: ee
        });
      }
      const M = (performance.now() - i).toFixed(0);
      console.debug(`[PR Diff API] Total: ${M}ms for ${N.length} files (2 GraphQL + 1 REST API queries)`);
      const O = {
        files: N,
        baseSha: A,
        headSha: f
      };
      this.updatePRCacheEntry(e, {
        filesData: O,
        isFilesLoading: false
      });
      return O;
    } catch (d) {
      console.error("[GithubPRService] Error fetching PR files:", d);
      return r;
    }
  }
  mapRESTStatus(e) {
    switch (e.toLowerCase()) {
      case "added":
        return "added";
      case "removed":
        return "deleted";
      case "renamed":
        return "renamed";
      case "modified":
      case "changed":
      default:
        return "modified";
    }
  }
  async getPullRequestFilesREST(e, t, i, r) {
    const s = [];
    let o = 1;
    const a = 100;
    while (true) {
      const l = await fetch(`https://api.github.com/repos/${e}/${t}/pulls/${i}/files?per_page=${a}&page=${o}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${r}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Cursor-IDE"
        }
      });
      if (!l.ok) {
        throw new Error(`GitHub REST API error: ${l.status} ${l.statusText}`);
      }
      const u = await l.json();
      s.push(...u);
      if (u.length < a) {
        break;
      }
      o++;
    }
    return s;
  }
  async getCurrentUserLogin() {
    if (this.cachedCurrentUserLogin) {
      return this.cachedCurrentUserLogin;
    }
    const e = await this.getGitHubAccessToken();
    if (!e) {
      this.logService.warn("[GithubPRService] No GitHub access token available for fetching current user");
      return;
    }
    try {
      const t = await this.graphqlRequest(TUf, {}, e);
      this.cachedCurrentUserLogin = t.viewer.login;
      return this.cachedCurrentUserLogin;
    } catch (t) {
      console.error("[GithubPRService] Error fetching current user:", t);
      return;
    }
  }
  async getCommitAuthorAvatar(e) {
    const t = this.commitAvatarCache.get(e);
    if (t !== undefined) {
      return t ?? undefined;
    }
    const i = await this.getGitHubAccessToken();
    if (i) {
      try {
        const r = await this.gitContextService.getGitUpstreamURL();
        if (!r || !r.includes("github.com")) {
          return;
        }
        const s = r.match(/github\.com[:/]([^/]+)\/([^/.]+)/);
        if (!s) {
          return;
        }
        const [, o, a] = s;
        const d = (await this.graphqlRequest(`
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
			`, {
          owner: o,
          repo: a,
          sha: e
        }, i)).repository.object?.author?.user;
        if (d?.avatarUrl) {
          this.commitAvatarCache.set(e, d.avatarUrl);
          return d.avatarUrl;
        }
        this.commitAvatarCache.set(e, null);
        return;
      } catch (r) {
        console.warn("[GithubPRService] Error fetching commit author avatar:", r);
        this.commitAvatarCache.set(e, null);
        return;
      }
    }
  }
  async getJobStepInfo(e, t, i, r) {
    const s = await this.getGitHubAccessToken();
    if (s) {
      try {
        const o = await fetch(`https://api.github.com/repos/${e}/${t}/actions/jobs/${i}`, {
          headers: {
            Authorization: `Bearer ${s}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Cursor-IDE"
          }
        });
        if (!o.ok) {
          return;
        }
        const a = await o.json();
        const l = [];
        l.push(`Job: ${a.name}`);
        l.push(`Status: ${a.conclusion || "unknown"}`);
        l.push("");
        l.push("Steps:");
        if (a.steps && a.steps.length > 0) {
          for (const C of a.steps) {
            const x = C.conclusion === "success" ? "✓" : C.conclusion === "failure" ? "✗" : C.conclusion === "skipped" ? "○" : "?";
            l.push(`  ${x} ${C.name} (${C.conclusion || C.status})`);
          }
        } else {
          l.push("  No step information available");
        }
        l.push("");
        l.push("Note: Full logs not available (runner may have lost connection)");
        const u = l.join(`
`);
        const d = this.workspaceContextService.getWorkspace();
        if (!d.folders || d.folders.length === 0) {
          return {
            preview: u,
            logsPath: ""
          };
        }
        const m = await kie(d, this.pathService);
        const p = Ryi(m);
        const g = je.joinPath(p, `pr-${r}`);
        const f = je.joinPath(g, "checks");
        await this.fileService.createFolder(f);
        const A = `job-${i}-steps.log`;
        const w = je.joinPath(f, A);
        await this.fileService.writeFile(w, Ms.fromString(u));
        return {
          preview: u,
          logsPath: w.fsPath
        };
      } catch (o) {
        console.error("[GithubPRService] Error fetching job step info:", o);
        return;
      }
    }
  }
  async mergePullRequest(e) {
    const {
      prNodeId: t,
      prUrl: i,
      mergeMethod: r = "SQUASH"
    } = e;
    const s = await this.getGitHubAccessToken();
    if (!s) {
      this.logService.warn("[GithubPRService] No GitHub access token available for merging PR");
      throw new Error("No GitHub access token available");
    }
    const a = (await this.graphqlRequest(IUf, {
      pullRequestId: t,
      mergeMethod: r
    }, s)).mergePullRequest?.pullRequest?.merged === true;
    if (a) {
      const l = this.getPRCacheEntry(i);
      if (l?.pullRequest) {
        const m = l.pullRequest;
        const p = new FNe({
          number: m.number,
          title: m.title,
          url: m.url,
          repository: m.repository,
          isDraft: m.isDraft,
          description: m.description,
          descriptionRaw: m.descriptionRaw,
          author: m.author,
          headRef: m.headRef,
          headSha: m.headSha,
          baseRef: m.baseRef,
          state: "merged",
          mergedAt: new Date().toISOString(),
          closedAt: m.closedAt,
          createdAt: m.createdAt,
          updatedAt: new Date().toISOString()
        });
        this.updatePRCacheEntry(i, {
          pullRequest: p
        });
      }
      const d = this._userPullRequests.get().map(m => m.url === i ? new FNe({
        number: m.number,
        title: m.title,
        url: m.url,
        repository: m.repository,
        isDraft: m.isDraft,
        description: m.description,
        descriptionRaw: m.descriptionRaw,
        author: m.author,
        headRef: m.headRef,
        headSha: m.headSha,
        baseRef: m.baseRef,
        state: "merged",
        mergedAt: new Date().toISOString(),
        closedAt: m.closedAt,
        createdAt: m.createdAt,
        updatedAt: new Date().toISOString()
      }) : m);
      this._userPullRequests.set(d, undefined);
    }
    return a;
  }
  async markPRReadyForReview(e) {
    const {
      prNodeId: t,
      prUrl: i
    } = e;
    const r = await this.getGitHubAccessToken();
    if (!r) {
      this.logService.warn("[GithubPRService] No GitHub access token available for marking PR ready");
      throw new Error("No GitHub access token available");
    }
    const o = (await this.graphqlRequest(DUf, {
      pullRequestId: t
    }, r)).markPullRequestReadyForReview?.pullRequest?.isDraft === false;
    if (o) {
      const a = this.getPRCacheEntry(i);
      if (a?.pullRequest) {
        const d = a.pullRequest;
        const m = new FNe({
          number: d.number,
          title: d.title,
          url: d.url,
          repository: d.repository,
          isDraft: false,
          description: d.description,
          descriptionRaw: d.descriptionRaw,
          author: d.author,
          headRef: d.headRef,
          headSha: d.headSha,
          baseRef: d.baseRef,
          state: d.state,
          mergedAt: d.mergedAt,
          closedAt: d.closedAt,
          createdAt: d.createdAt,
          updatedAt: d.updatedAt
        });
        this.updatePRCacheEntry(i, {
          pullRequest: m
        });
      }
      const u = this._userPullRequests.get().map(d => d.url === i ? new FNe({
        number: d.number,
        title: d.title,
        url: d.url,
        repository: d.repository,
        isDraft: false,
        description: d.description,
        descriptionRaw: d.descriptionRaw,
        author: d.author,
        headRef: d.headRef,
        headSha: d.headSha,
        baseRef: d.baseRef,
        state: d.state,
        mergedAt: d.mergedAt,
        closedAt: d.closedAt,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt
      }) : d);
      this._userPullRequests.set(u, undefined);
    }
    return o;
  }
  async closePullRequest(e) {
    const {
      prNodeId: t,
      prUrl: i
    } = e;
    const r = await this.getGitHubAccessToken();
    if (!r) {
      this.logService.warn("[GithubPRService] No GitHub access token available for closing PR");
      throw new Error("No GitHub access token available");
    }
    const o = (await this.graphqlRequest(BUf, {
      pullRequestId: t
    }, r)).closePullRequest?.pullRequest?.closed === true;
    if (o) {
      const a = this.getPRCacheEntry(i);
      if (a?.pullRequest) {
        const d = a.pullRequest;
        const m = new FNe({
          number: d.number,
          title: d.title,
          url: d.url,
          repository: d.repository,
          isDraft: d.isDraft,
          description: d.description,
          descriptionRaw: d.descriptionRaw,
          author: d.author,
          headRef: d.headRef,
          headSha: d.headSha,
          baseRef: d.baseRef,
          state: "closed",
          mergedAt: d.mergedAt,
          closedAt: new Date().toISOString(),
          createdAt: d.createdAt,
          updatedAt: new Date().toISOString()
        });
        this.updatePRCacheEntry(i, {
          pullRequest: m
        });
      }
      const u = this._userPullRequests.get().filter(d => d.url !== i);
      this._userPullRequests.set(u, undefined);
    }
    return o;
  }
  async enableAutoMerge(e) {
    const {
      prNodeId: t,
      prUrl: i,
      mergeMethod: r = "SQUASH"
    } = e;
    const s = await this.getGitHubAccessToken();
    if (!s) {
      this.logService.warn("[GithubPRService] No GitHub access token available for enabling auto-merge");
      throw new Error("No GitHub access token available");
    }
    const a = (await this.graphqlRequest(RUf, {
      pullRequestId: t,
      mergeMethod: r
    }, s)).enablePullRequestAutoMerge?.pullRequest?.autoMergeRequest != null;
    if (a) {
      const u = this.getPRCacheEntry(i)?.mergeInfo;
      const d = {
        id: u?.id ?? t,
        mergeable: u?.mergeable ?? "UNKNOWN",
        mergeStateStatus: u?.mergeStateStatus ?? "UNKNOWN",
        canMerge: u?.canMerge ?? false,
        autoMergeEnabled: true,
        viewerCanEnableAutoMerge: false
      };
      this.updatePRCacheEntry(i, {
        mergeInfo: d
      });
    }
    return a;
  }
  async disableAutoMerge(e) {
    const {
      prNodeId: t,
      prUrl: i
    } = e;
    const r = await this.getGitHubAccessToken();
    if (!r) {
      this.logService.warn("[GithubPRService] No GitHub access token available for disabling auto-merge");
      throw new Error("No GitHub access token available");
    }
    const o = (await this.graphqlRequest(PUf, {
      pullRequestId: t
    }, r)).disablePullRequestAutoMerge?.pullRequest;
    const a = o != null && o.autoMergeRequest === null;
    if (a) {
      const u = this.getPRCacheEntry(i)?.mergeInfo;
      const d = {
        id: u?.id ?? t,
        mergeable: u?.mergeable ?? "UNKNOWN",
        mergeStateStatus: u?.mergeStateStatus ?? "UNKNOWN",
        canMerge: u?.canMerge ?? false,
        autoMergeEnabled: false,
        viewerCanEnableAutoMerge: true
      };
      this.updatePRCacheEntry(i, {
        mergeInfo: d
      });
    }
    return a;
  }
  async getJobLogs(e, t, i, r) {
    const s = imy(e);
    if (!s) {
      this.logService.warn("[GithubPRService] Could not parse job URL:", e);
      return;
    }
    const {
      owner: o,
      repo: a
    } = s;
    const l = i ?? s.jobId;
    const u = await this.getGitHubAccessToken();
    if (!u) {
      this.logService.warn("[GithubPRService] No GitHub access token available for fetching job logs");
      return;
    }
    try {
      const d = await fetch(`https://api.github.com/repos/${o}/${a}/actions/jobs/${l}/logs`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${u}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Cursor-IDE"
        },
        redirect: "follow"
      });
      if (!d.ok) {
        if (d.status === 404) {
          return this.getJobStepInfo(o, a, l, t);
        }
        throw new Error(`GitHub REST API error: ${d.status} ${d.statusText}`);
      }
      const m = await d.text();
      const p = rmy(m);
      const g = this.workspaceContextService.getWorkspace();
      if (!g.folders || g.folders.length === 0) {
        this.logService.warn("[GithubPRService] No workspace folder available for writing logs");
        return;
      }
      const f = await kie(g, this.pathService);
      const A = Ryi(f);
      const w = je.joinPath(A, `pr-${t}`);
      const C = je.joinPath(w, "checks");
      await this.fileService.createFolder(C);
      const x = r?.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
      const I = x && x.length > 0 ? `${x}.log` : `job-${l}.log`;
      const B = je.joinPath(C, I);
      await this.fileService.writeFile(B, Ms.fromString(p));
      const R = 50000;
      let N;
      if (p.length > R) {
        const M = p.length - R;
        let O = p.slice(M);
        const $ = O.indexOf(`
`);
        if ($ > 0) {
          O = O.slice($ + 1);
        }
        if (!O.split(`
`)[0].startsWith("▶ ")) {
          const W = p.slice(0, M);
          const z = W.lastIndexOf(`
\u25B6 `);
          if (z !== -1) {
            const Y = z + 1;
            const j = W.indexOf(`
`, Y);
            O = `${j !== -1 ? W.slice(Y, j) : W.slice(Y)}
... (truncated) ...
${O}`;
          }
        }
        N = `... (showing last ~${R} chars, full logs at ${B.fsPath}) ...

${O}`;
      } else {
        N = p;
      }
      return {
        preview: N,
        logsPath: B.fsPath
      };
    } catch (d) {
      console.error("[GithubPRService] Error fetching job logs:", d);
      return;
    }
  }
  refreshCache() {
    this.cache.clear();
    this.cursorCache.clear();
    this.canonicalRepoNameCache.clear();
    this.cachedCurrentUserLogin = undefined;
  }
};
VIa = dpe = __decorate([__param(0, AE), __param(1, WF), __param(2, Rr), __param(3, Gr), __param(4, Lr), __param(5, kp), __param(6, Tl), __param(7, wd), __param(8, Hi), __param(9, Kk), __param(10, ln)], VIa);
Vi(EX, VIa, 1);
