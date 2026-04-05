"use strict";

// Module: out-build/vs/platform/userDataSync/common/userDataSync.js
// Offset: 32612769 (bundle byte offset)
// Size: 3344 bytes
Vs();
Js();
Ht();
Mp();
Gv();
Wt();
mF();
Ws();
_3f = "settingsSync";
C3f = "settingsSync.keybindingsPerPlatform";
(function (n) {
  n.Settings = "settings";
  n.Keybindings = "keybindings";
  n.Snippets = "snippets";
  n.Prompts = "prompts";
  n.Tasks = "tasks";
  n.Extensions = "extensions";
  n.GlobalState = "globalState";
  n.Profiles = "profiles";
  n.WorkspaceState = "workspaceState";
})(S3f ||= {});
PCi = ["settings", "keybindings", "snippets", "prompts", "tasks", "extensions", "globalState", "profiles"];
rrt = xi("IUserDataSyncStoreManagementService");
srt = xi("IUserDataSyncStoreService");
jfn = xi("IUserDataSyncLocalStoreService");
t2e = "x-operation-id";
cyu = "X-Execution-Id";
(function (n) {
  n.Unauthorized = "Unauthorized";
  n.Forbidden = "Forbidden";
  n.NotFound = "NotFound";
  n.MethodNotFound = "MethodNotFound";
  n.Conflict = "Conflict";
  n.Gone = "Gone";
  n.PreconditionFailed = "PreconditionFailed";
  n.TooLarge = "TooLarge";
  n.UpgradeRequired = "UpgradeRequired";
  n.PreconditionRequired = "PreconditionRequired";
  n.TooManyRequests = "RemoteTooManyRequests";
  n.TooManyRequestsAndRetryAfter = "TooManyRequestsAndRetryAfter";
  n.RequestFailed = "RequestFailed";
  n.RequestCanceled = "RequestCanceled";
  n.RequestTimeout = "RequestTimeout";
  n.RequestProtocolNotSupported = "RequestProtocolNotSupported";
  n.RequestPathNotEscaped = "RequestPathNotEscaped";
  n.RequestHeadersNotObject = "RequestHeadersNotObject";
  n.NoCollection = "NoCollection";
  n.NoRef = "NoRef";
  n.EmptyResponse = "EmptyResponse";
  n.TurnedOff = "TurnedOff";
  n.SessionExpired = "SessionExpired";
  n.ServiceChanged = "ServiceChanged";
  n.DefaultServiceChanged = "DefaultServiceChanged";
  n.LocalTooManyProfiles = "LocalTooManyProfiles";
  n.LocalTooManyRequests = "LocalTooManyRequests";
  n.LocalPreconditionFailed = "LocalPreconditionFailed";
  n.LocalInvalidContent = "LocalInvalidContent";
  n.LocalError = "LocalError";
  n.IncompatibleLocalContent = "IncompatibleLocalContent";
  n.IncompatibleRemoteContent = "IncompatibleRemoteContent";
  n.Unknown = "Unknown";
})(k3f ||= {});
s7 = class extends Error {
  constructor(n, e, t, i) {
    super(n);
    this.code = e;
    this.resource = t;
    this.operationId = i;
    this.name = `${this.code} (UserDataSyncError) syncResource:${this.resource || "unknown"} operationId:${this.operationId || "unknown"}`;
  }
};
BM = class extends s7 {
  constructor(n, e, t, i, r) {
    super(n, t, undefined, r);
    this.url = e;
    this.serverCode = i;
  }
};
(function (n) {
  function e(t) {
    if (t instanceof n) {
      return t;
    }
    const i = /^(.+) \(UserDataSyncError\) syncResource:(.+) operationId:(.+)$/.exec(t.name);
    if (i && i[1]) {
      const r = i[2] === "unknown" ? undefined : i[2];
      const s = i[3] === "unknown" ? undefined : i[3];
      return new n(t.message, i[1], r, s);
    }
    return new n(t.message, "Unknown");
  }
  n.toUserDataSyncError = e;
})(s7 ||= {});
(function (n) {
  n.Uninitialized = "uninitialized";
  n.Idle = "idle";
  n.Syncing = "syncing";
  n.HasConflicts = "hasConflicts";
})(E3f ||= {});
(function (n) {
  n[n.None = 0] = "None";
  n[n.Added = 1] = "Added";
  n[n.Modified = 2] = "Modified";
  n[n.Deleted = 3] = "Deleted";
})(x3f ||= {});
(function (n) {
  n.Preview = "preview";
  n.Conflict = "conflict";
  n.Accepted = "accepted";
})(T3f ||= {});
u7e = "sync.store.url.type";
RM = xi("IUserDataSyncEnablementService");
Wce = xi("IUserDataSyncService");
LCi = xi("IUserDataSyncResourceProviderService");
n2e = xi("IUserDataAutoSyncService");
NCi = xi("IUserDataSyncUtilService");
Qce = xi("IUserDataSyncLogService");
MCi = "userDataSync";
jce = "vscode-userdata-sync";
I3f = "preview";
