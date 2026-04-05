// Module: out-build/proto/aiserver/v1/dashboard_pb.js
// Offset: 26986357 (bundle byte offset)
// Size: 468559 bytes

Ka(), Sme(), zOh(), cv(), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ENVIRONMENT_VARIABLE=1]="ENVIRONMENT_VARIABLE", n[n.INJECTED_SECRET=2]="INJECTED_SECRET"
})(AEe||(AEe={
  
})), v.util.setEnumType(AEe, "aiserver.v1.BackgroundComposerSecretLevel", [{
  no:0, name:"BACKGROUND_COMPOSER_SECRET_LEVEL_UNSPECIFIED"
}, {
  no:1, name:"BACKGROUND_COMPOSER_SECRET_LEVEL_ENVIRONMENT_VARIABLE"
}, {
  no:2, name:"BACKGROUND_COMPOSER_SECRET_LEVEL_INJECTED_SECRET"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.MONTH=1]="MONTH", n[n.START_TIME=2]="START_TIME"
})(Qhn||(Qhn={
  
})), v.util.setEnumType(Qhn, "aiserver.v1.CycleType", [{
  no:0, name:"CYCLE_TYPE_UNSPECIFIED"
}, {
  no:1, name:"CYCLE_TYPE_MONTH"
}, {
  no:2, name:"CYCLE_TYPE_START_TIME"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.OWNER=1]="OWNER", n[n.MEMBER=2]="MEMBER", n[n.FREE_OWNER=3]="FREE_OWNER", n[n.REMOVED=4]="REMOVED"
})(z3||(z3={
  
})), v.util.setEnumType(z3, "aiserver.v1.TeamRole", [{
  no:0, name:"TEAM_ROLE_UNSPECIFIED"
}, {
  no:1, name:"TEAM_ROLE_OWNER"
}, {
  no:2, name:"TEAM_ROLE_MEMBER"
}, {
  no:3, name:"TEAM_ROLE_FREE_OWNER"
}, {
  no:4, name:"TEAM_ROLE_REMOVED"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.GITHUB=1]="GITHUB", n[n.GITLAB=2]="GITLAB", n[n.GITHUB_ENTERPRISE=3]="GITHUB_ENTERPRISE", n[n.GITLAB_SELF_HOSTED=4]="GITLAB_SELF_HOSTED"
})(ivi||(ivi={
  
})), v.util.setEnumType(ivi, "aiserver.v1.ProtectedGitProvider", [{
  no:0, name:"PROTECTED_GIT_PROVIDER_UNSPECIFIED"
}, {
  no:1, name:"PROTECTED_GIT_PROVIDER_GITHUB"
}, {
  no:2, name:"PROTECTED_GIT_PROVIDER_GITLAB"
}, {
  no:3, name:"PROTECTED_GIT_PROVIDER_GITHUB_ENTERPRISE"
}, {
  no:4, name:"PROTECTED_GIT_PROVIDER_GITLAB_SELF_HOSTED"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ENABLE_ALL=1]="ENABLE_ALL", n[n.ALLOWLIST=2]="ALLOWLIST"
})(rvi||(rvi={
  
})), v.util.setEnumType(rvi, "aiserver.v1.FirstPartyPluginMode", [{
  no:0, name:"FIRST_PARTY_PLUGIN_MODE_UNSPECIFIED"
}, {
  no:1, name:"FIRST_PARTY_PLUGIN_MODE_ENABLE_ALL"
}, {
  no:2, name:"FIRST_PARTY_PLUGIN_MODE_ALLOWLIST"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ALWAYS=1]="ALWAYS", n[n.SINGLE=2]="SINGLE", n[n.NEVER=3]="NEVER"
})(svi||(svi={
  
})), v.util.setEnumType(svi, "aiserver.v1.AutoCreatePrMode", [{
  no:0, name:"AUTO_CREATE_PR_MODE_UNSPECIFIED"
}, {
  no:1, name:"AUTO_CREATE_PR_MODE_ALWAYS"
}, {
  no:2, name:"AUTO_CREATE_PR_MODE_SINGLE"
}, {
  no:3, name:"AUTO_CREATE_PR_MODE_NEVER"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.GITHUB=1]="GITHUB", n[n.GRAPHITE=2]="GRAPHITE"
})(ISt||(ISt={
  
})), v.util.setEnumType(ISt, "aiserver.v1.PrReviewOpenDestinationMode", [{
  no:0, name:"PR_REVIEW_OPEN_DESTINATION_MODE_UNSPECIFIED"
}, {
  no:1, name:"PR_REVIEW_OPEN_DESTINATION_MODE_GITHUB"
}, {
  no:2, name:"PR_REVIEW_OPEN_DESTINATION_MODE_GRAPHITE"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.POST_ARTIFACT=1]="POST_ARTIFACT", n[n.LINK_ONLY=2]="LINK_ONLY"
})(DSt||(DSt={
  
})), v.util.setEnumType(DSt, "aiserver.v1.GithubArtifactPostingMode", [{
  no:0, name:"GITHUB_ARTIFACT_POSTING_MODE_UNSPECIFIED"
}, {
  no:1, name:"GITHUB_ARTIFACT_POSTING_MODE_POST_ARTIFACT"
}, {
  no:2, name:"GITHUB_ARTIFACT_POSTING_MODE_LINK_ONLY"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ALLOW_ALL=1]="ALLOW_ALL", n[n.DEFAULT_WITH_NETWORK_SETTINGS=2]="DEFAULT_WITH_NETWORK_SETTINGS", n[n.NETWORK_SETTINGS_ONLY=3]="NETWORK_SETTINGS_ONLY"
})(BSt||(BSt={
  
})), v.util.setEnumType(BSt, "aiserver.v1.CloudAgentEgressProtectionMode", [{
  no:0, name:"CLOUD_AGENT_EGRESS_PROTECTION_MODE_UNSPECIFIED"
}, {
  no:1, name:"CLOUD_AGENT_EGRESS_PROTECTION_MODE_ALLOW_ALL"
}, {
  no:2, name:"CLOUD_AGENT_EGRESS_PROTECTION_MODE_DEFAULT_WITH_NETWORK_SETTINGS"
}, {
  no:3, name:"CLOUD_AGENT_EGRESS_PROTECTION_MODE_NETWORK_SETTINGS_ONLY"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DISABLED=1]="DISABLED", n[n.SERVICE_ACCOUNTS_ONLY=2]="SERVICE_ACCOUNTS_ONLY", n[n.ALL=3]="ALL"
})(Qga||(Qga={
  
})), v.util.setEnumType(Qga, "aiserver.v1.TeamFollowupEnabledMode", [{
  no:0, name:"TEAM_FOLLOWUP_ENABLED_MODE_UNSPECIFIED"
}, {
  no:1, name:"TEAM_FOLLOWUP_ENABLED_MODE_DISABLED"
}, {
  no:2, name:"TEAM_FOLLOWUP_ENABLED_MODE_SERVICE_ACCOUNTS_ONLY"
}, {
  no:3, name:"TEAM_FOLLOWUP_ENABLED_MODE_ALL"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ENABLED=1]="ENABLED", n[n.DISABLED=2]="DISABLED"
})(D$e||(D$e={
  
})), v.util.setEnumType(D$e, "aiserver.v1.SandboxingMode", [{
  no:0, name:"SANDBOXING_MODE_UNSPECIFIED"
}, {
  no:1, name:"SANDBOXING_MODE_ENABLED"
}, {
  no:2, name:"SANDBOXING_MODE_DISABLED"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.USER_CONTROLLED=1]="USER_CONTROLLED", n[n.ALWAYS_DISABLED=2]="ALWAYS_DISABLED"
})(Gtt||(Gtt={
  
})), v.util.setEnumType(Gtt, "aiserver.v1.NetworkingMode", [{
  no:0, name:"NETWORKING_MODE_UNSPECIFIED"
}, {
  no:1, name:"NETWORKING_MODE_USER_CONTROLLED"
}, {
  no:2, name:"NETWORKING_MODE_ALWAYS_DISABLED"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.USER_CONTROLLED=1]="USER_CONTROLLED", n[n.ALWAYS_DISABLED=2]="ALWAYS_DISABLED"
})(Wtt||(Wtt={
  
})), v.util.setEnumType(Wtt, "aiserver.v1.GitMode", [{
  no:0, name:"GIT_MODE_UNSPECIFIED"
}, {
  no:1, name:"GIT_MODE_USER_CONTROLLED"
}, {
  no:2, name:"GIT_MODE_ALWAYS_DISABLED"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.REQUEST=1]="REQUEST", n[n.TOKEN=2]="TOKEN"
})(jga||(jga={
  
})), v.util.setEnumType(jga, "aiserver.v1.TrialType", [{
  no:0, name:"TRIAL_TYPE_UNSPECIFIED"
}, {
  no:1, name:"TRIAL_TYPE_REQUEST"
}, {
  no:2, name:"TRIAL_TYPE_TOKEN"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ALLOWLIST=1]="ALLOWLIST", n[n.BLOCKLIST=2]="BLOCKLIST"
})(fye||(fye={
  
})), v.util.setEnumType(fye, "aiserver.v1.AllowlistConfig", [{
  no:0, name:"ALLOWLIST_CONFIG_UNSPECIFIED"
}, {
  no:1, name:"ALLOWLIST_CONFIG_ALLOWLIST"
}, {
  no:2, name:"ALLOWLIST_CONFIG_BLOCKLIST"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.OFF=1]="OFF", n[n.MANUAL=2]="MANUAL", n[n.AUTO_PR=3]="AUTO_PR", n[n.AUTO_MERGE=4]="AUTO_MERGE"
})(B$e||(B$e={
  
})), v.util.setEnumType(B$e, "aiserver.v1.BugbotAutofixMode", [{
  no:0, name:"BUGBOT_AUTOFIX_MODE_UNSPECIFIED"
}, {
  no:1, name:"BUGBOT_AUTOFIX_MODE_OFF"
}, {
  no:2, name:"BUGBOT_AUTOFIX_MODE_MANUAL"
}, {
  no:3, name:"BUGBOT_AUTOFIX_MODE_AUTO_PR"
}, {
  no:4, name:"BUGBOT_AUTOFIX_MODE_AUTO_MERGE"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.RUNNING=1]="RUNNING", n[n.COMPLETED=2]="COMPLETED", n[n.FAILED=3]="FAILED"
})(ovi||(ovi={
  
})), v.util.setEnumType(ovi, "aiserver.v1.BugbotBackfillStatus", [{
  no:0, name:"BUGBOT_BACKFILL_STATUS_UNSPECIFIED"
}, {
  no:1, name:"BUGBOT_BACKFILL_STATUS_RUNNING"
}, {
  no:2, name:"BUGBOT_BACKFILL_STATUS_COMPLETED"
}, {
  no:3, name:"BUGBOT_BACKFILL_STATUS_FAILED"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.FREE_TIER=1]="FREE_TIER", n[n.TRIAL=2]="TRIAL", n[n.PAID=3]="PAID"
})(RSt||(RSt={
  
})), v.util.setEnumType(RSt, "aiserver.v1.BugbotUsageTier", [{
  no:0, name:"BUGBOT_USAGE_TIER_UNSPECIFIED"
}, {
  no:1, name:"BUGBOT_USAGE_TIER_FREE_TIER"
}, {
  no:2, name:"BUGBOT_USAGE_TIER_TRIAL"
}, {
  no:3, name:"BUGBOT_USAGE_TIER_PAID"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.APP=1]="APP", n[n.USER=2]="USER"
})(avi||(avi={
  
})), v.util.setEnumType(avi, "aiserver.v1.LinearActor", [{
  no:0, name:"LINEAR_ACTOR_UNSPECIFIED"
}, {
  no:1, name:"LINEAR_ACTOR_APP"
}, {
  no:2, name:"LINEAR_ACTOR_USER"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.AUTOMATICALLY=1]="AUTOMATICALLY", n[n.BASED_ON_CONDITIONS=2]="BASED_ON_CONDITIONS", n[n.MANUALLY=3]="MANUALLY"
})(yEe||(yEe={
  
})), v.util.setEnumType(yEe, "aiserver.v1.LinearRunOption", [{
  no:0, name:"LINEAR_RUN_OPTION_UNSPECIFIED"
}, {
  no:1, name:"LINEAR_RUN_OPTION_AUTOMATICALLY"
}, {
  no:2, name:"LINEAR_RUN_OPTION_BASED_ON_CONDITIONS"
}, {
  no:3, name:"LINEAR_RUN_OPTION_MANUALLY"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.AND=1]="AND", n[n.OR=2]="OR"
})(PSt||(PSt={
  
})), v.util.setEnumType(PSt, "aiserver.v1.LabelFilterMode", [{
  no:0, name:"LABEL_FILTER_MODE_UNSPECIFIED"
}, {
  no:1, name:"LABEL_FILTER_MODE_AND"
}, {
  no:2, name:"LABEL_FILTER_MODE_OR"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.UPDATED_AT=1]="UPDATED_AT", n[n.CREATED_AT=2]="CREATED_AT"
})(jhn||(jhn={
  
})), v.util.setEnumType(jhn, "aiserver.v1.LinearIssuesOrderBy", [{
  no:0, name:"LINEAR_ISSUES_ORDER_BY_UNSPECIFIED"
}, {
  no:1, name:"LINEAR_ISSUES_ORDER_BY_UPDATED_AT"
}, {
  no:2, name:"LINEAR_ISSUES_ORDER_BY_CREATED_AT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.BILLING=1]="BILLING", n[n.PRODUCT=2]="PRODUCT"
})(ZZ||(ZZ={
  
})), v.util.setEnumType(ZZ, "aiserver.v1.GroupType", [{
  no:0, name:"GROUP_TYPE_UNSPECIFIED"
}, {
  no:1, name:"GROUP_TYPE_BILLING"
}, {
  no:2, name:"GROUP_TYPE_PRODUCT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.MODEL=1]="MODEL", n[n.USAGE_TYPE=2]="USAGE_TYPE"
})(cvi||(cvi={
  
})), v.util.setEnumType(cvi, "aiserver.v1.SpendGroupByCategory", [{
  no:0, name:"SPEND_GROUP_BY_CATEGORY_UNSPECIFIED"
}, {
  no:1, name:"SPEND_GROUP_BY_CATEGORY_MODEL"
}, {
  no:2, name:"SPEND_GROUP_BY_CATEGORY_USAGE_TYPE"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ON_DEMAND=1]="ON_DEMAND", n[n.INCLUDED=2]="INCLUDED", n[n.ALL=3]="ALL"
})(zga||(zga={
  
})), v.util.setEnumType(zga, "aiserver.v1.SpendType", [{
  no:0, name:"SPEND_TYPE_UNSPECIFIED"
}, {
  no:1, name:"SPEND_TYPE_ON_DEMAND"
}, {
  no:2, name:"SPEND_TYPE_INCLUDED"
}, {
  no:3, name:"SPEND_TYPE_ALL"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ADD=1]="ADD", n[n.REMOVE=2]="REMOVE"
})(lvi||(lvi={
  
})), v.util.setEnumType(lvi, "aiserver.v1.GroupMemberChangeType", [{
  no:0, name:"GROUP_MEMBER_CHANGE_TYPE_UNSPECIFIED"
}, {
  no:1, name:"GROUP_MEMBER_CHANGE_TYPE_ADD"
}, {
  no:2, name:"GROUP_MEMBER_CHANGE_TYPE_REMOVE"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.PRIVACY_MODE=1]="PRIVACY_MODE", n[n.BUGBOT=2]="BUGBOT"
})(LSt||(LSt={
  
})), v.util.setEnumType(LSt, "aiserver.v1.AdminNotificationRequestType", [{
  no:0, name:"ADMIN_NOTIFICATION_REQUEST_TYPE_UNSPECIFIED"
}, {
  no:1, name:"ADMIN_NOTIFICATION_REQUEST_TYPE_PRIVACY_MODE"
}, {
  no:2, name:"ADMIN_NOTIFICATION_REQUEST_TYPE_BUGBOT"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.PRIVATE=1]="PRIVATE", n[n.TEAM=2]="TEAM", n[n.PUBLIC=3]="PUBLIC"
})(gL||(gL={
  
})), v.util.setEnumType(gL, "aiserver.v1.SharedConversationVisibility", [{
  no:0, name:"SHARED_CONVERSATION_VISIBILITY_UNSPECIFIED"
}, {
  no:1, name:"SHARED_CONVERSATION_VISIBILITY_PRIVATE"
}, {
  no:2, name:"SHARED_CONVERSATION_VISIBILITY_TEAM"
}, {
  no:3, name:"SHARED_CONVERSATION_VISIBILITY_PUBLIC"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.SUCCESS=1]="SUCCESS", n[n.ALREADY_ALLOWED=2]="ALREADY_ALLOWED", n[n.ENTERPRISE=3]="ENTERPRISE", n[n.NOT_ADMIN=4]="NOT_ADMIN", n[n.CREATED_AFTER_CUTOFF=5]="CREATED_AFTER_CUTOFF"
})(uvi||(uvi={
  
})), v.util.setEnumType(uvi, "aiserver.v1.IndividualLimitsOptOutOutcome", [{
  no:0, name:"INDIVIDUAL_LIMITS_OPT_OUT_OUTCOME_UNSPECIFIED"
}, {
  no:1, name:"INDIVIDUAL_LIMITS_OPT_OUT_OUTCOME_SUCCESS"
}, {
  no:2, name:"INDIVIDUAL_LIMITS_OPT_OUT_OUTCOME_ALREADY_ALLOWED"
}, {
  no:3, name:"INDIVIDUAL_LIMITS_OPT_OUT_OUTCOME_ENTERPRISE"
}, {
  no:4, name:"INDIVIDUAL_LIMITS_OPT_OUT_OUTCOME_NOT_ADMIN"
}, {
  no:5, name:"INDIVIDUAL_LIMITS_OPT_OUT_OUTCOME_CREATED_AFTER_CUTOFF"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CHANNEL=1]="CHANNEL", n[n.DM=2]="DM", n[n.GROUP_DM=3]="GROUP_DM"
})(dvi||(dvi={
  
})), v.util.setEnumType(dvi, "aiserver.v1.SlackConversationType", [{
  no:0, name:"SLACK_CONVERSATION_TYPE_UNSPECIFIED"
}, {
  no:1, name:"SLACK_CONVERSATION_TYPE_CHANNEL"
}, {
  no:2, name:"SLACK_CONVERSATION_TYPE_DM"
}, {
  no:3, name:"SLACK_CONVERSATION_TYPE_GROUP_DM"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.DRAFT=1]="DRAFT", n[n.PENDING_APPROVAL=2]="PENDING_APPROVAL", n[n.APPROVED=3]="APPROVED", n[n.REJECTED=4]="REJECTED"
})(hvi||(hvi={
  
})), v.util.setEnumType(hvi, "aiserver.v1.PluginStatus", [{
  no:0, name:"PLUGIN_STATUS_UNSPECIFIED"
}, {
  no:1, name:"PLUGIN_STATUS_DRAFT"
}, {
  no:2, name:"PLUGIN_STATUS_PENDING_APPROVAL"
}, {
  no:3, name:"PLUGIN_STATUS_APPROVED"
}, {
  no:4, name:"PLUGIN_STATUS_REJECTED"
}
]), e4g=class YXr extends ie{
  constructor(e){
    super(), this.code="", this.installationId="", this.setupAction="", this.cursorCode="", this.source=mvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConnectGithubCallbackRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code",kind:"scalar",T:9
    }, {
      no:2,name:"installation_id",kind:"scalar",T:9
    }, {
      no:3,name:"setup_action",kind:"scalar",T:9
    }, {
      no:4,name:"cursor_code",kind:"scalar",T:9
    }, {
      no:5,name:"source",kind:"enum",T:v.getEnumType(mvi)
    }, {
      no:7,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new YXr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new YXr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new YXr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(YXr, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.APP=1]="APP", n[n.SLACK=2]="SLACK"
})(mvi||(mvi={
  
})), v.util.setEnumType(mvi, "aiserver.v1.ConnectGithubCallbackRequest.Source", [{
  no:0, name:"SOURCE_UNSPECIFIED"
}, {
  no:1, name:"SOURCE_APP"
}, {
  no:2, name:"SOURCE_SLACK"
}
]), t4g=class ZXr extends ie{
  constructor(e){
    super(), this.needConfirmation=!1, this.installationId="", this.confirmationCode="", this.githubLogin="", this.pendingApproval=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConnectGithubCallbackResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"need_confirmation",kind:"scalar",T:8
    }, {
      no:2,name:"installation_id",kind:"scalar",T:9
    }, {
      no:3,name:"confirmation_code",kind:"scalar",T:9
    }, {
      no:4,name:"github_login",kind:"scalar",T:9
    }, {
      no:5,name:"pending_approval",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ZXr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ZXr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ZXr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ZXr, e, t)
  }
}, n4g=class XXr extends ie{
  constructor(e){
    super(), this.hostname="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PrepareSetupGithubEnterpriseAppRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hostname",kind:"scalar",T:9
    }, {
      no:2,name:"external_host",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new XXr().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new XXr().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new XXr().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(XXr, e, t)
  }
}, i4g=class ees extends ie{
  constructor(e){
    super(), this.pendingAppUuid="", this.serializedManifest="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PrepareSetupGithubEnterpriseAppResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pending_app_uuid",kind:"scalar",T:9
    }, {
      no:2,name:"serialized_manifest",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ees().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ees().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ees().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ees, e, t)
  }
}, r4g=class tes extends ie{
  constructor(e){
    super(), this.installationCode="", this.pendingAppUuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FinishSetupGithubEnterpriseAppRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_code",kind:"scalar",T:9
    }, {
      no:2,name:"pending_app_uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tes, e, t)
  }
}, s4g=class nes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FinishSetupGithubEnterpriseAppResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new nes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nes, e, t)
  }
}, o4g=class ies extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListGithubEnterpriseAppsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ies().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ies().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ies().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ies, e, t)
  }
}, a4g=class res extends ie{
  constructor(e){
    super(), this.apps=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListGithubEnterpriseAppsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"apps",kind:"message",T:c4g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new res().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new res().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new res().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(res, e, t)
  }
}, c4g=class ses extends ie{
  constructor(e){
    super(), this.uuid="", this.slug="", this.hostname="", this.canDelete=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListGithubEnterpriseAppsResponse.GithubEnterpriseApp"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"slug",kind:"scalar",T:9
    }, {
      no:3,name:"hostname",kind:"scalar",T:9
    }, {
      no:4,name:"can_delete",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ses().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ses().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ses().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ses, e, t)
  }
}, l4g=class oes extends ie{
  constructor(e){
    super(), this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteGithubEnterpriseAppRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new oes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oes, e, t)
  }
}, u4g=class aes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteGithubEnterpriseAppResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new aes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aes, e, t)
  }
}, d4g=class ces extends ie{
  constructor(e){
    super(), this.hostname="", this.accessToken="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetupGitlabEnterpriseInstanceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hostname",kind:"scalar",T:9
    }, {
      no:2,name:"access_token",kind:"scalar",T:9
    }, {
      no:3,name:"group_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"slug",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"client_id",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"client_secret",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"external_host",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ces().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ces().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ces().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ces, e, t)
  }
}, h4g=class les extends ie{
  constructor(e){
    super(), this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetupGitlabEnterpriseInstanceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new les().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new les().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new les().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(les, e, t)
  }
}, m4g=class ues extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListGitlabEnterpriseInstancesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ues().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ues().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ues().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ues, e, t)
  }
}, p4g=class des extends ie{
  constructor(e){
    super(), this.instances=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListGitlabEnterpriseInstancesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"instances",kind:"message",T:g4g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new des().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new des().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new des().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(des, e, t)
  }
}, g4g=class hes extends ie{
  constructor(e){
    super(), this.uuid="", this.hostname="", this.username="", this.canDelete=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListGitlabEnterpriseInstancesResponse.GitlabEnterpriseInstance"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }, {
      no:2,name:"hostname",kind:"scalar",T:9
    }, {
      no:3,name:"username",kind:"scalar",T:9
    }, {
      no:4,name:"can_delete",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new hes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hes, e, t)
  }
}, f4g=class mes extends ie{
  constructor(e){
    super(), this.uuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteGitlabEnterpriseInstanceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new mes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mes, e, t)
  }
}, b4g=class pes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteGitlabEnterpriseInstanceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new pes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pes, e, t)
  }
}, v4g=class ges extends ie{
  constructor(e){
    super(), this.gitEnterpriseUuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SyncGitlabReposRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"git_enterprise_uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ges().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ges().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ges().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ges, e, t)
  }
}, A4g=class fes extends ie{
  constructor(e){
    super(), this.started=!1, this.errorMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SyncGitlabReposResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"started",kind:"scalar",T:8
    }, {
      no:2,name:"error_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new fes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fes, e, t)
  }
}, y4g=class bes extends ie{
  constructor(e){
    super(), this.installationId="", this.confirmationCode="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConfirmGithubInstallationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:9
    }, {
      no:2,name:"confirmation_code",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new bes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bes, e, t)
  }
}, w4g=class ves extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConfirmGithubInstallationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ves().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ves().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ves().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ves, e, t)
  }
}, _4g=class Aes extends ie{
  constructor(e){
    super(), this.githubRepo="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RegisterGithubCursorCodeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"github_repo",kind:"scalar",T:9
    }, {
      no:3,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Aes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aes, e, t)
  }
}, C4g=class yes extends ie{
  constructor(e){
    super(), this.cursorCode="", this.shouldInstall=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RegisterGithubCursorCodeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cursor_code",kind:"scalar",T:9
    }, {
      no:2,name:"should_install",kind:"scalar",T:8
    }, {
      no:3,name:"ghe_hostname",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"ghe_app_slug",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"ghe_client_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yes, e, t)
  }
}, S4g=class wes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DisconnectGithubRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wes, e, t)
  }
}, k4g=class _es extends ie{
  constructor(e){
    super(), this.removedConnectionsCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DisconnectGithubResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"removed_connections_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new _es().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _es().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _es().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_es, e, t)
  }
}, E4g=class Ces extends ie{
  constructor(e){
    super(), this.accessCode="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddUserToEarlyAccessListRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"access_code",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ces().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ces().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ces().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ces, e, t)
  }
}, x4g=class Ses extends ie{
  constructor(e){
    super(), this.success=!1, this.message="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddUserToEarlyAccessListResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ses().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ses().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ses().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ses, e, t)
  }
}, Gnu=class kes extends ie{
  constructor(e){
    super(), this.requestQuota=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateFastRequestsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_quota",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new kes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kes, e, t)
  }
}, T4g=class Ees extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateFastRequestsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ees().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ees().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ees().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ees, e, t)
  }
}, Wnu=class xes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetFastRequestsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new xes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xes, e, t)
  }
}, I4g=class Tes extends ie{
  constructor(e){
    super(), this.requestQuota=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetFastRequestsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"request_quota",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Tes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tes, e, t)
  }
}, D4g=class Ies extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteAccountRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ies().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ies().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ies().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ies, e, t)
  }
}, B4g=class Des extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteAccountResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Des().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Des().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Des().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Des, e, t)
  }
}, R4g=class Bes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Bes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bes, e, t)
  }
}, P4g=class Res extends ie{
  constructor(e){
    super(), this.authId="", this.userId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"auth_id",kind:"scalar",T:9
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }, {
      no:3,name:"email",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"first_name",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"last_name",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"workos_id",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"created_at",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"is_enterprise_user",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"team_name",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"email_domain_type",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"country",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Res().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Res().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Res().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Res, e, t)
  }
}, L4g=class Pes extends ie{
  constructor(e){
    super(), this.teamId=0, this.privacyModeForced=!1, this.privacyMode=pm.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SwitchTeamPrivacyModeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"privacy_mode_forced",kind:"scalar",T:8
    }, {
      no:3,name:"privacy_mode",kind:"enum",T:v.getEnumType(pm)
    }
    ])
  }
  static fromBinary(e, t){
    return new Pes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pes, e, t)
  }
}, N4g=class Les extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SwitchTeamPrivacyModeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Les().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Les().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Les().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Les, e, t)
  }
}, Qnu=class Nes extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamPrivacyModeForcedRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Nes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nes, e, t)
  }
}, M4g=class Mes extends ie{
  constructor(e){
    super(), this.privacyModeForced=!1, this.privacyMode=pm.UNSPECIFIED, this.privacyModeMigrationOptedOut=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamPrivacyModeForcedResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"privacy_mode_forced",kind:"scalar",T:8
    }, {
      no:2,name:"privacy_mode",kind:"enum",T:v.getEnumType(pm)
    }, {
      no:3,name:"privacy_mode_migration_opted_out",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Mes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mes, e, t)
  }
}, F4g=class Fes extends ie{
  constructor(e){
    super(), this.teamScope=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListBackgroundComposerSecretsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_scope",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Fes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fes, e, t)
  }
}, O4g=class Oes extends ie{
  constructor(e){
    super(), this.secrets=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListBackgroundComposerSecretsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"secrets",kind:"message",T:U4g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Oes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oes, e, t)
  }
}, U4g=class Ues extends ie{
  constructor(e){
    super(), this.name="", this.createdAt=0, this.scopedToRepos=[], this.level=AEe.UNSPECIFIED, this.id=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListBackgroundComposerSecretsResponse.Secret"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"created_at",kind:"scalar",T:1
    }, {
      no:3,name:"scoped_to_repos",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"level",kind:"enum",T:v.getEnumType(AEe)
    }, {
      no:5,name:"id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Ues().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ues().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ues().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ues, e, t)
  }
}, $4g=class $es extends ie{
  constructor(e){
    super(), this.name="", this.value="", this.teamScope=!1, this.scopedToRepos=[], this.level=AEe.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBackgroundComposerSecretRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:9
    }, {
      no:3,name:"team_scope",kind:"scalar",T:8
    }, {
      no:4,name:"scoped_to_repos",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"level",kind:"enum",T:v.getEnumType(AEe)
    }
    ])
  }
  static fromBinary(e, t){
    return new $es().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $es().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $es().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($es, e, t)
  }
}, q4g=class qes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBackgroundComposerSecretResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new qes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qes, e, t)
  }
}, H4g=class Hes extends ie{
  constructor(e){
    super(), this.secrets=[], this.teamScope=!1, this.scopedToRepos=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBackgroundComposerSecretBatchRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"secrets",kind:"message",T:J4g,repeated:!0
    }, {
      no:2,name:"team_scope",kind:"scalar",T:8
    }, {
      no:3,name:"scoped_to_repos",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hes, e, t)
  }
}, J4g=class Jes extends ie{
  constructor(e){
    super(), this.name="", this.value="", this.level=AEe.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBackgroundComposerSecretBatchRequest.Secret"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"value",kind:"scalar",T:9
    }, {
      no:3,name:"level",kind:"enum",T:v.getEnumType(AEe)
    }
    ])
  }
  static fromBinary(e, t){
    return new Jes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jes, e, t)
  }
}, G4g=class Ges extends ie{
  constructor(e){
    super(), this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBackgroundComposerSecretBatchResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"message",T:W4g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ges().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ges().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ges().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ges, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CREATED=1]="CREATED", n[n.UPDATED=2]="UPDATED", n[n.ERROR=3]="ERROR"
})(pvi||(pvi={
  
})), v.util.setEnumType(pvi, "aiserver.v1.CreateBackgroundComposerSecretBatchResponse.Status", [{
  no:0, name:"STATUS_UNSPECIFIED"
}, {
  no:1, name:"STATUS_CREATED"
}, {
  no:2, name:"STATUS_UPDATED"
}, {
  no:3, name:"STATUS_ERROR"
}
]), (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.BAD_REQUEST=1]="BAD_REQUEST", n[n.UNAUTHORIZED=2]="UNAUTHORIZED", n[n.INTERNAL=3]="INTERNAL"
})(Vga||(Vga={
  
})), v.util.setEnumType(Vga, "aiserver.v1.CreateBackgroundComposerSecretBatchResponse.ErrorType", [{
  no:0, name:"ERROR_TYPE_UNSPECIFIED"
}, {
  no:1, name:"ERROR_TYPE_BAD_REQUEST"
}, {
  no:2, name:"ERROR_TYPE_UNAUTHORIZED"
}, {
  no:3, name:"ERROR_TYPE_INTERNAL"
}
]), W4g=class Wes extends ie{
  constructor(e){
    super(), this.name="", this.status=pvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBackgroundComposerSecretBatchResponse.Result"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"status",kind:"enum",T:v.getEnumType(pvi)
    }, {
      no:3,name:"error_message",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"error_type",kind:"enum",T:v.getEnumType(Vga),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wes, e, t)
  }
}, Q4g=class Qes extends ie{
  constructor(e){
    super(), this.name="", this.teamScope=!1, this.id=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeBackgroundComposerSecretRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"team_scope",kind:"scalar",T:8
    }, {
      no:3,name:"id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Qes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qes, e, t)
  }
}, j4g=class jes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeBackgroundComposerSecretResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new jes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jes, e, t)
  }
}, z4g=class zes extends ie{
  constructor(e){
    super(), this.name="", this.teamScope=!1, this.scopedToRepos=[], this.level=AEe.UNSPECIFIED, this.id=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBackgroundComposerSecretRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"team_scope",kind:"scalar",T:8
    }, {
      no:3,name:"scoped_to_repos",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"level",kind:"enum",T:v.getEnumType(AEe)
    }, {
      no:5,name:"value",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new zes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zes, e, t)
  }
}, V4g=class Ves extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBackgroundComposerSecretResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ves().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ves().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ves().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ves, e, t)
  }
}, K4g=class Kes extends ie{
  constructor(e){
    super(), this.teamScope=!1, this.teamId=0, this.redactSecrets=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMcpConfigRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_scope",kind:"scalar",T:8
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"redact_secrets",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Kes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kes, e, t)
  }
}, Y4g=class Yes extends ie{
  constructor(e){
    super(), this.configJson="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMcpConfigResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"config_json",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Yes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yes, e, t)
  }
}, Z4g=class Zes extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAvailableMcpServersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zes, e, t)
  }
}, X4g=class Xes extends ie{
  constructor(e){
    super(), this.servers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAvailableMcpServersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"servers",kind:"message",T:eOg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xes().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xes().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xes().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xes, e, t)
  }
}, eOg=class ets extends ie{
  constructor(e){
    super(), this.id=0, this.name="", this.isTeamServer=!1, this.enabled=!1, this.type="", this.args=[], this.isUnseen=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAvailableMcpServersResponse.McpServerInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"is_team_server",kind:"scalar",T:8
    }, {
      no:4,name:"enabled",kind:"scalar",T:8
    }, {
      no:5,name:"type",kind:"scalar",T:9
    }, {
      no:6,name:"command",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"args",kind:"scalar",T:9,repeated:!0
    }, {
      no:8,name:"url",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"plugin_id",kind:"scalar",T:3,opt:!0
    }, {
      no:10,name:"is_unseen",kind:"scalar",T:8
    }, {
      no:11,name:"user_has_access_token",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ets().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ets().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ets().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ets, e, t)
  }
}, tOg=class tts extends ie{
  constructor(e){
    super(), this.teamScope=!1, this.teamId=0, this.configJson="", this.serverRenames={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetMcpConfigRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_scope",kind:"scalar",T:8
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"config_json",kind:"scalar",T:9
    }, {
      no:4,name:"server_renames",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }
    ])
  }
  static fromBinary(e, t){
    return new tts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tts, e, t)
  }
}, nOg=class nts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetMcpConfigResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new nts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nts, e, t)
  }
}, iOg=class its extends ie{
  constructor(e){
    super(), this.enabledServerIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUserDefaultMcpSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled_server_ids",kind:"scalar",T:5,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new its().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new its().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new its().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(its, e, t)
  }
}, rOg=class rts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUserDefaultMcpSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new rts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rts, e, t)
  }
}, sOg=class sts extends ie{
  constructor(e){
    super(), this.serverIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MarkMcpServersSeenRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_ids",kind:"scalar",T:5,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sts, e, t)
  }
}, oOg=class ots extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MarkMcpServersSeenResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ots().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ots().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ots().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ots, e, t)
  }
}, aOg=class ats extends ie{
  constructor(e){
    super(), this.serverUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StoreMcpOAuthTokenRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_url",kind:"scalar",T:9
    }, {
      no:2,name:"refresh_token",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"client_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"client_secret",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"redirect_uri",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"access_token",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ats().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ats().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ats().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ats, e, t)
  }
}, cOg=class cts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StoreMcpOAuthTokenResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new cts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cts, e, t)
  }
}, lOg=class lts extends ie{
  constructor(e){
    super(), this.serverUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteMcpOAuthTokenRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new lts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lts, e, t)
  }
}, uOg=class uts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteMcpOAuthTokenResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new uts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uts, e, t)
  }
}, dOg=class dts extends ie{
  constructor(e){
    super(), this.serverUrls=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ValidateMcpOAuthTokensRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_urls",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dts, e, t)
  }
}, hOg=class hts extends ie{
  constructor(e){
    super(), this.results=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ValidateMcpOAuthTokensResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"results",kind:"message",T:mOg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hts, e, t)
  }
}, mOg=class mts extends ie{
  constructor(e){
    super(), this.serverUrl="", this.hasValidToken=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ValidateMcpOAuthTokensResponse.Result"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_url",kind:"scalar",T:9
    }, {
      no:2,name:"has_valid_token",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new mts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mts, e, t)
  }
}, pOg=class pts extends ie{
  constructor(e){
    super(), this.serverIds=[], this.oauthRedirectUri="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckHttpMcpStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_ids",kind:"scalar",T:5,repeated:!0
    }, {
      no:2,name:"oauth_redirect_uri",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new pts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pts, e, t)
  }
}, gOg=class gts extends ie{
  constructor(e){
    super(), this.statuses=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckHttpMcpStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"statuses",kind:"message",T:fOg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gts, e, t)
  }
}, fOg=class fts extends ie{
  constructor(e){
    super(), this.id=0, this.isAvailable=!1, this.requiresAuth=!1, this.hasValidToken=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckHttpMcpStatusResponse.ServerStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"is_available",kind:"scalar",T:8
    }, {
      no:3,name:"requires_auth",kind:"scalar",T:8
    }, {
      no:4,name:"auth_url",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"error",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"has_valid_token",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new fts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fts, e, t)
  }
}, bOg=class bts extends ie{
  constructor(e){
    super(), this.serverUrl="", this.codeVerifier="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StoreMcpOAuthPendingStateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_url",kind:"scalar",T:9
    }, {
      no:2,name:"code_verifier",kind:"scalar",T:9
    }, {
      no:3,name:"client_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"client_secret",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"redirect_uri",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bts, e, t)
  }
}, vOg=class vts extends ie{
  constructor(e){
    super(), this.stateId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StoreMcpOAuthPendingStateResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"state_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vts, e, t)
  }
}, AOg=class Ats extends ie{
  constructor(e){
    super(), this.stateId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMcpOAuthPendingStateRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"state_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ats().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ats().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ats().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ats, e, t)
  }
}, yOg=class yts extends ie{
  constructor(e){
    super(), this.serverUrl="", this.codeVerifier="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMcpOAuthPendingStateResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"server_url",kind:"scalar",T:9
    }, {
      no:2,name:"code_verifier",kind:"scalar",T:9
    }, {
      no:3,name:"client_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"client_secret",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"redirect_uri",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yts, e, t)
  }
}, wOg=class wts extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPluginMcpConfigRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new wts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wts, e, t)
  }
}, _Og=class _ts extends ie{
  constructor(e){
    super(), this.configJson="", this.commitSha="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPluginMcpConfigResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"config_json",kind:"scalar",T:9
    }, {
      no:2,name:"commit_sha",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _ts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ts, e, t)
  }
}, COg=class Cts extends ie{
  constructor(e){
    super(), this.pluginIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BatchGetPluginMcpConfigRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_ids",kind:"scalar",T:3,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Cts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cts, e, t)
  }
}, SOg=class Sts extends ie{
  constructor(e){
    super(), this.configJson="", this.commitSha="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PluginMcpConfigEntry"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"config_json",kind:"scalar",T:9
    }, {
      no:2,name:"commit_sha",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Sts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sts, e, t)
  }
}, kOg=class kts extends ie{
  constructor(e){
    super(), this.configs={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BatchGetPluginMcpConfigResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"configs",kind:"map",K:3,V:{
        kind:"message",T:SOg
      }
    }
    ])
  }
  static fromBinary(e, t){
    return new kts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kts, e, t)
  }
}, EOg=class Ets extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, this.scope="", this.substitutions={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddMcpServersFromPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:2,name:"scope",kind:"scalar",T:9
    }, {
      no:3,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"commit_sha",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"server_name",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"substitutions",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:7,name:"oauth_redirect_uri",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ets().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ets().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ets().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ets, e, t)
  }
}, xOg=class xts extends ie{
  constructor(e){
    super(), this.addedServerIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddMcpServersFromPluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"added_server_ids",kind:"scalar",T:3,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xts, e, t)
  }
}, TOg=class Tts extends ie{
  constructor(e){
    super(), this.url="", this.headers={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ProbeMcpUrlRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"headers",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:3,name:"oauth_redirect_uri",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"auth_client_id",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"auth_client_secret",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Tts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tts, e, t)
  }
}, IOg=class Its extends ie{
  constructor(e){
    super(), this.isAvailable=!1, this.requiresAuth=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ProbeMcpUrlResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_available",kind:"scalar",T:8
    }, {
      no:2,name:"requires_auth",kind:"scalar",T:8
    }, {
      no:3,name:"auth_url",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Its().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Its().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Its().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Its, e, t)
  }
}, DOg=class Dts extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamHasValidPaymentMethodRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Dts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dts, e, t)
  }
}, BOg=class Bts extends ie{
  constructor(e){
    super(), this.hasValidPaymentMethod=!1, this.trialDaysRemaining=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamHasValidPaymentMethodResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"has_valid_payment_method",kind:"scalar",T:8
    }, {
      no:2,name:"trial_days_remaining",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Bts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bts, e, t)
  }
}, ROg=class Rts extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamWithFreeTrialRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"privacy_mode_forced",kind:"scalar",T:8,opt:!0
    }, {
      no:3,name:"free_trial_code",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rts, e, t)
  }
}, POg=class Pts extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamWithFreeTrialResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Pts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pts, e, t)
  }
}, LOg=class Lts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPricingHistoryRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Lts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lts, e, t)
  }
}, NOg=class Nts extends ie{
  constructor(e){
    super(), this.pricingHistory=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPricingHistoryResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pricing_history",kind:"message",T:MOg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Nts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nts, e, t)
  }
}, MOg=class Mts extends ie{
  constructor(e){
    super(), this.description="", this.id="", this.changelog="", this.createdAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPricingHistoryResponse.PricingDescription"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }, {
      no:2,name:"id",kind:"scalar",T:9
    }, {
      no:3,name:"changelog",kind:"scalar",T:9
    }, {
      no:4,name:"created_at",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Mts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mts, e, t)
  }
}, FOg=class Fts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListInvoiceCyclesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Fts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fts, e, t)
  }
}, OOg=class Ots extends ie{
  constructor(e){
    super(), this.startMs=Eo.zero, this.type=Qhn.UNSPECIFIED, this.endMs=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InvoiceCycle"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_ms",kind:"scalar",T:3
    }, {
      no:2,name:"type",kind:"enum",T:v.getEnumType(Qhn)
    }, {
      no:3,name:"end_ms",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Ots().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ots().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ots().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ots, e, t)
  }
}, UOg=class Uts extends ie{
  constructor(e){
    super(), this.cycles=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListInvoiceCyclesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cycles",kind:"message",T:OOg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Uts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uts, e, t)
  }
}, $Og=class $ts extends ie{
  constructor(e){
    super(), this.month=0, this.year=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMonthlyInvoiceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"month",kind:"scalar",T:5
    }, {
      no:3,name:"year",kind:"scalar",T:5
    }, {
      no:4,name:"include_usage_events",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"cycle_filter_type",kind:"enum",T:v.getEnumType(Qhn),opt:!0
    }, {
      no:6,name:"start_time_ms",kind:"scalar",T:3,opt:!0
    }, {
      no:7,name:"use_current_cycle",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $ts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ts, e, t)
  }
}, qOg=class qts extends ie{
  constructor(e){
    super(), this.items=[], this.usageEvents=[], this.isUsageEventsMaybeCutoff=!1, this.hasUnpaidMidMonthInvoice=!1, this.lastHardLimitCents=0, this.periodStartMs=Eo.zero, this.periodEndMs=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMonthlyInvoiceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"items",kind:"message",T:HOg,repeated:!0
    }, {
      no:2,name:"pricing_description",kind:"message",T:JOg
    }, {
      no:3,name:"usage_events",kind:"message",T:Y4c,repeated:!0
    }, {
      no:4,name:"is_usage_events_maybe_cutoff",kind:"scalar",T:8
    }, {
      no:5,name:"has_unpaid_mid_month_invoice",kind:"scalar",T:8
    }, {
      no:6,name:"last_hard_limit_cents",kind:"scalar",T:5
    }, {
      no:7,name:"period_start_ms",kind:"scalar",T:3
    }, {
      no:8,name:"period_end_ms",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new qts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qts, e, t)
  }
}, HOg=class Hts extends ie{
  constructor(e){
    super(), this.description="", this.cents=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMonthlyInvoiceResponse.InvoiceItem"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }, {
      no:2,name:"cents",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Hts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hts, e, t)
  }
}, JOg=class Jts extends ie{
  constructor(e){
    super(), this.description="", this.id="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMonthlyInvoiceResponse.PricingDescription"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"description",kind:"scalar",T:9
    }, {
      no:2,name:"id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Jts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jts, e, t)
  }
}, jnu=class Gts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetHardLimitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gts, e, t)
  }
}, GOg=class Wts extends ie{
  constructor(e){
    super(), this.hardLimit=0, this.noUsageBasedAllowed=!1, this.perUserMonthlyLimitDollars=0, this.isDynamicTeamLimit=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetHardLimitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hard_limit",kind:"scalar",T:5
    }, {
      no:2,name:"no_usage_based_allowed",kind:"scalar",T:8
    }, {
      no:3,name:"hard_limit_per_user",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"per_user_monthly_limit_dollars",kind:"scalar",T:5
    }, {
      no:5,name:"is_dynamic_team_limit",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Wts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wts, e, t)
  }
}, znu=class Qts extends ie{
  constructor(e){
    super(), this.hardLimit=0, this.noUsageBasedAllowed=!1, this.preserveHardLimitPerUser=!1, this.perUserMonthlyLimitDollars=0, this.clearPerUserMonthlyLimitDollars=!1, this.isDynamicTeamLimit=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetHardLimitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"hard_limit",kind:"scalar",T:5
    }, {
      no:3,name:"no_usage_based_allowed",kind:"scalar",T:8
    }, {
      no:4,name:"hard_limit_per_user",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"preserve_hard_limit_per_user",kind:"scalar",T:8
    }, {
      no:6,name:"per_user_monthly_limit_dollars",kind:"scalar",T:5
    }, {
      no:7,name:"clear_per_user_monthly_limit_dollars",kind:"scalar",T:8
    }, {
      no:8,name:"is_dynamic_team_limit",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Qts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qts, e, t)
  }
}, WOg=class jts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetHardLimitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new jts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jts, e, t)
  }
}, QOg=class zts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EnableOnDemandSpendRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new zts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zts, e, t)
  }
}, jOg=class Vts extends ie{
  constructor(e){
    super(), this.hardLimit=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EnableOnDemandSpendResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hard_limit",kind:"scalar",T:5
    }, {
      no:2,name:"hard_limit_per_user",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Vts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vts, e, t)
  }
}, zOg=class Kts extends ie{
  constructor(e){
    super(), this.name="", this.id=0, this.role=z3.UNSPECIFIED, this.seats=0, this.hasBilling=!1, this.requestQuotaPerSeat=0, this.privacyModeForced=!1, this.allowSso=!1, this.adminOnlyUsagePricing=!1, this.subscriptionStatus="", this.bedrockIamRole="", this.verified=!1, this.isEnterprise=!1, this.privacyModeMigrationOptedOut=!1, this.bedrockExternalId="", this.membershipType="", this.dataSharingDiscountEligible=!1, this.dashboardAnalyticsRequiresAdmin=!1, this.individualSpendLimitsBlocked=!1, this.allowDomainJoin=!1, this.domainJoinDomains=[], this.ssoEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Team"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"id",kind:"scalar",T:5
    }, {
      no:3,name:"role",kind:"enum",T:v.getEnumType(z3)
    }, {
      no:4,name:"seats",kind:"scalar",T:5
    }, {
      no:5,name:"has_billing",kind:"scalar",T:8
    }, {
      no:6,name:"request_quota_per_seat",kind:"scalar",T:5
    }, {
      no:7,name:"privacy_mode_forced",kind:"scalar",T:8
    }, {
      no:8,name:"allow_sso",kind:"scalar",T:8
    }, {
      no:9,name:"admin_only_usage_pricing",kind:"scalar",T:8
    }, {
      no:10,name:"subscription_status",kind:"scalar",T:9
    }, {
      no:11,name:"bedrock_iam_role",kind:"scalar",T:9
    }, {
      no:12,name:"verified",kind:"scalar",T:8
    }, {
      no:13,name:"is_enterprise",kind:"scalar",T:8
    }, {
      no:14,name:"privacy_mode_migration_opted_out",kind:"scalar",T:8
    }, {
      no:15,name:"bedrock_external_id",kind:"scalar",T:9
    }, {
      no:16,name:"membership_type",kind:"scalar",T:9
    }, {
      no:17,name:"purchased_seats",kind:"scalar",T:5,opt:!0
    }, {
      no:18,name:"billing_cycle_start",kind:"scalar",T:3,opt:!0
    }, {
      no:19,name:"billing_cycle_end",kind:"scalar",T:3,opt:!0
    }, {
      no:20,name:"pricing_strategy",kind:"scalar",T:9,opt:!0
    }, {
      no:21,name:"total_committed_dollars",kind:"scalar",T:5,opt:!0
    }, {
      no:22,name:"data_sharing_discount_eligible",kind:"scalar",T:8
    }, {
      no:23,name:"dashboard_analytics_requires_admin",kind:"scalar",T:8
    }, {
      no:24,name:"individual_spend_limits_blocked",kind:"scalar",T:8
    }, {
      no:25,name:"allow_domain_join",kind:"scalar",T:8
    }, {
      no:26,name:"domain_join_domains",kind:"scalar",T:9,repeated:!0
    }, {
      no:27,name:"sso_enabled",kind:"scalar",T:8
    }, {
      no:28,name:"customer_balance_cents",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kts, e, t)
  }
}, Vnu=class Yts extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Yts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yts, e, t)
  }
}, VOg=class Zts extends ie{
  constructor(e){
    super(), this.teams=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"teams",kind:"message",T:zOg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zts, e, t)
  }
}, KOg=class Xts extends ie{
  constructor(e){
    super(), this.teamId=0, this.seats=0, this.yearly=!1, this.requestQuotaPerSeat=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetActivationCheckoutUrlRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"seats",kind:"scalar",T:5
    }, {
      no:3,name:"yearly",kind:"scalar",T:8
    }, {
      no:4,name:"request_quota_per_seat",kind:"scalar",T:5
    }, {
      no:5,name:"code",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"radar_session_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xts().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xts().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xts().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xts, e, t)
  }
}, YOg=class ens extends ie{
  constructor(e){
    super(), this.checkoutUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetActivationCheckoutUrlResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"checkout_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ens().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ens().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ens().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ens, e, t)
  }
}, ZOg=class tns extends ie{
  constructor(e){
    super(), this.promoTypeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckPromotionEligibilityRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"promo_type_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new tns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tns, e, t)
  }
}, XOg=class nns extends ie{
  constructor(e){
    super(), this.canActivate=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckPromotionEligibilityResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"can_activate",kind:"scalar",T:8
    }, {
      no:2,name:"activation_status",kind:"message",T:e3g,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nns, e, t)
  }
}, e3g=class ins extends ie{
  constructor(e){
    super(), this.isActivated=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ActivationStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_activated",kind:"scalar",T:8
    }, {
      no:2,name:"activated_at",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ins().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ins().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ins().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ins, e, t)
  }
}, t3g=class rns extends ie{
  constructor(e){
    super(), this.promoTypeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ActivatePromotionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"promo_type_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new rns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rns, e, t)
  }
}, n3g=class sns extends ie{
  constructor(e){
    super(), this.type=gvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ActivatePromotionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"enum",T:v.getEnumType(gvi)
    }, {
      no:2,name:"checkout_url",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"success",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sns, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CHECKOUT=1]="CHECKOUT", n[n.SUBSCRIPTION=2]="SUBSCRIPTION"
})(gvi||(gvi={
  
})), v.util.setEnumType(gvi, "aiserver.v1.ActivatePromotionResponse.ActivationType", [{
  no:0, name:"ACTIVATION_TYPE_UNSPECIFIED"
}, {
  no:1, name:"ACTIVATION_TYPE_CHECKOUT"
}, {
  no:2, name:"ACTIVATION_TYPE_SUBSCRIPTION"
}
]), i3g=class ons extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamCustomerPortalUrlRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new ons().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ons().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ons().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ons, e, t)
  }
}, r3g=class ans extends ie{
  constructor(e){
    super(), this.portalUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamCustomerPortalUrlResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"portal_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ans().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ans().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ans().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ans, e, t)
  }
}, s3g=class cns extends ie{
  constructor(e){
    super(), this.slackTeamId="", this.slackUserId="", this.nonce="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetSlackAuthRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"slack_team_id",kind:"scalar",T:9
    }, {
      no:2,name:"slack_user_id",kind:"scalar",T:9
    }, {
      no:3,name:"nonce",kind:"scalar",T:9
    }, {
      no:4,name:"setup_complete",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cns, e, t)
  }
}, o3g=class lns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetSlackAuthResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new lns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lns, e, t)
  }
}, a3g=class uns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackTeamSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new uns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uns, e, t)
  }
}, Knu=class dns extends ie{
  constructor(e){
    super(), this.slackChannel="", this.repo="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlackChannelRepoMapping"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"slack_channel",kind:"scalar",T:9
    }, {
      no:2,name:"repo",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new dns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dns, e, t)
  }
}, c3g=class hns extends ie{
  constructor(e){
    super(), this.defaultRepo="", this.defaultBranch="", this.defaultModel="", this.shareSummary=!1, this.shareSummaryInExternalChannel=!1, this.channelRepoMappings=[], this.branchPrefix="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackTeamSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"default_repo",kind:"scalar",T:9
    }, {
      no:2,name:"default_branch",kind:"scalar",T:9
    }, {
      no:3,name:"default_model",kind:"scalar",T:9
    }, {
      no:4,name:"share_summary",kind:"scalar",T:8
    }, {
      no:5,name:"share_summary_in_external_channel",kind:"scalar",T:8
    }, {
      no:6,name:"channel_repo_mappings",kind:"message",T:Knu,repeated:!0
    }, {
      no:7,name:"auto_draft_enabled",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"use_github_app_for_auto_draft_prs",kind:"scalar",T:8,opt:!0
    }, {
      no:9,name:"branch_prefix",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new hns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hns, e, t)
  }
}, l3g=class mns extends ie{
  constructor(e){
    super(), this.teamId=0, this.defaultRepo="", this.defaultBranch="", this.defaultModel="", this.shareSummary=!1, this.shareSummaryInExternalChannel=!1, this.channelRepoMappings=[], this.branchPrefix="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSlackTeamSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"default_repo",kind:"scalar",T:9
    }, {
      no:3,name:"default_branch",kind:"scalar",T:9
    }, {
      no:4,name:"default_model",kind:"scalar",T:9
    }, {
      no:5,name:"share_summary",kind:"scalar",T:8
    }, {
      no:6,name:"share_summary_in_external_channel",kind:"scalar",T:8
    }, {
      no:7,name:"channel_repo_mappings",kind:"message",T:Knu,repeated:!0
    }, {
      no:8,name:"use_github_app_for_auto_draft_prs",kind:"scalar",T:8,opt:!0
    }, {
      no:9,name:"branch_prefix",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new mns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mns, e, t)
  }
}, u3g=class pns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSlackTeamSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new pns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pns, e, t)
  }
}, d3g=class gns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new gns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gns, e, t)
  }
}, h3g=class fns extends ie{
  constructor(e){
    super(), this.available=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"available",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new fns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fns, e, t)
  }
}, Ynu=class bns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackInstallUrlRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"repo_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bns, e, t)
  }
}, m3g=class vns extends ie{
  constructor(e){
    super(), this.url="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackInstallUrlResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vns, e, t)
  }
}, p3g=class Ans extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublicSlackInstallUrlRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ans().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ans().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ans().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ans, e, t)
  }
}, g3g=class yns extends ie{
  constructor(e){
    super(), this.url="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublicSlackInstallUrlResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new yns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yns, e, t)
  }
}, f3g=class wns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublicSlackInstallUrlWithUserScopesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new wns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wns, e, t)
  }
}, b3g=class _ns extends ie{
  constructor(e){
    super(), this.url="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublicSlackInstallUrlWithUserScopesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _ns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ns, e, t)
  }
}, v3g=class Cns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackModelOptionsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Cns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cns, e, t)
  }
}, A3g=class Sns extends ie{
  constructor(e){
    super(), this.modelOptions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackModelOptionsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_options",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sns, e, t)
  }
}, y3g=class kns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamMembersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new kns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kns, e, t)
  }
}, w3g=class Ens extends ie{
  constructor(e){
    super(), this.name="", this.email="", this.id=0, this.role=z3.UNSPECIFIED, this.isRemoved=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamMember"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"email",kind:"scalar",T:9
    }, {
      no:2,name:"id",kind:"scalar",T:5
    }, {
      no:3,name:"role",kind:"enum",T:v.getEnumType(z3)
    }, {
      no:5,name:"is_removed",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ens().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ens().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ens().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ens, e, t)
  }
}, _3g=class xns extends ie{
  constructor(e){
    super(), this.teamMembers=[], this.userId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamMembersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_members",kind:"message",T:w3g,repeated:!0
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new xns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xns, e, t)
  }
}, C3g=class Tns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamInviteLinkRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"valid_for_seconds",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"create_if_missing",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Tns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tns, e, t)
  }
}, S3g=class Ins extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamInviteLinkResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"invite_link",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ins().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ins().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ins().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ins, e, t)
  }
}, k3g=class Dns extends ie{
  constructor(e){
    super(), this.teamId=0, this.email="", this.role=z3.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SendTeamInviteRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"email",kind:"scalar",T:9
    }, {
      no:3,name:"role",kind:"enum",T:v.getEnumType(z3)
    }, {
      no:4,name:"message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Dns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dns, e, t)
  }
}, E3g=class Bns extends ie{
  constructor(e){
    super(), this.validUntil=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SendTeamInviteResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"valid_until",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Bns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bns, e, t)
  }
}, x3g=class Rns extends ie{
  constructor(e){
    super(), this.inviteCode="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AcceptInviteRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"invite_code",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Rns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rns, e, t)
  }
}, T3g=class Pns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AcceptInviteResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Pns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pns, e, t)
  }
}, I3g=class Lns extends ie{
  constructor(e){
    super(), this.teamId=0, this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamApiKeyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Lns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lns, e, t)
  }
}, D3g=class Nns extends ie{
  constructor(e){
    super(), this.apiKey="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamApiKeyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Nns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nns, e, t)
  }
}, B3g=class Mns extends ie{
  constructor(e){
    super(), this.teamId=0, this.id=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeTeamApiKeyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Mns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mns, e, t)
  }
}, R3g=class Fns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeTeamApiKeyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Fns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fns, e, t)
  }
}, Znu=class Ons extends ie{
  constructor(e){
    super(), this.id=0, this.maskedKey="", this.name="", this.createdAt=Eo.zero, this.scopes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ApiKey"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"masked_key",kind:"scalar",T:9
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"created_at",kind:"scalar",T:3
    }, {
      no:5,name:"service_account_name",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"scopes",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ons().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ons().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ons().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ons, e, t)
  }
}, P3g=class Uns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamApiKeysRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Uns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uns, e, t)
  }
}, L3g=class $ns extends ie{
  constructor(e){
    super(), this.apiKeys=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamApiKeysResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_keys",kind:"message",T:Znu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $ns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ns, e, t)
  }
}, N3g=class qns extends ie{
  constructor(e){
    super(), this.teamId=0, this.name="", this.initialRepoScope=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamServiceAccountRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"initial_repo_scope",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"initial_repo_scope_enabled",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qns, e, t)
  }
}, M3g=class Hns extends ie{
  constructor(e){
    super(), this.apiKey="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamServiceAccountResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"service_account",kind:"message",T:Xnu
    }, {
      no:2,name:"api_key",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Hns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hns, e, t)
  }
}, F3g=class Jns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamServiceAccountsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"include_archived",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Jns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jns, e, t)
  }
}, O3g=class Gns extends ie{
  constructor(e){
    super(), this.serviceAccounts=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamServiceAccountsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"service_accounts",kind:"message",T:Xnu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gns, e, t)
  }
}, Xnu=class Wns extends ie{
  constructor(e){
    super(), this.id="", this.serviceType="", this.name="", this.createdAt=Eo.zero, this.updatedAt=Eo.zero, this.defaultScopes=[], this.apiKeys=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ServiceAccountInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"service_type",kind:"scalar",T:9
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"created_by_user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"owning_team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"owning_user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"usage_limit_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"created_at",kind:"scalar",T:3
    }, {
      no:10,name:"updated_at",kind:"scalar",T:3
    }, {
      no:11,name:"default_scopes",kind:"scalar",T:9,repeated:!0
    }, {
      no:12,name:"api_keys",kind:"message",T:Kga,repeated:!0
    }, {
      no:13,name:"archived_at",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wns, e, t)
  }
}, Kga=class Qns extends ie{
  constructor(e){
    super(), this.apiKeyId=0, this.maskedApiKey="", this.scopes=[], this.createdAt=Eo.zero, this.repoScope=[], this.repoScopeEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ServiceAccountKeyInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key_id",kind:"scalar",T:5
    }, {
      no:2,name:"masked_api_key",kind:"scalar",T:9
    }, {
      no:3,name:"scopes",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"created_at",kind:"scalar",T:3
    }, {
      no:5,name:"repo_scope",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"repo_scope_enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Qns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qns, e, t)
  }
}, U3g=class jns extends ie{
  constructor(e){
    super(), this.teamId=0, this.serviceAccountId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamServiceAccountRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"service_account_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jns, e, t)
  }
}, $3g=class zns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamServiceAccountResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new zns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zns, e, t)
  }
}, q3g=class Vns extends ie{
  constructor(e){
    super(), this.teamId=0, this.serviceAccountId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ArchiveTeamServiceAccountRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"service_account_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Vns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vns, e, t)
  }
}, H3g=class Kns extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ArchiveTeamServiceAccountResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Kns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kns, e, t)
  }
}, J3g=class Yns extends ie{
  constructor(e){
    super(), this.teamId=0, this.serviceAccountId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RotateServiceAccountApiKeyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"service_account_id",kind:"scalar",T:9
    }, {
      no:3,name:"old_api_key_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yns, e, t)
  }
}, G3g=class Zns extends ie{
  constructor(e){
    super(), this.apiKey="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RotateServiceAccountApiKeyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"scalar",T:9
    }, {
      no:2,name:"key_info",kind:"message",T:Kga
    }
    ])
  }
  static fromBinary(e, t){
    return new Zns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zns, e, t)
  }
}, W3g=class Xns extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamRepositoriesForServiceAccountScopeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Xns().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xns().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xns().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xns, e, t)
  }
}, Q3g=class eis extends ie{
  constructor(e){
    super(), this.owner="", this.name="", this.htmlUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ServiceAccountScopeRepository"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"owner",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"html_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new eis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eis, e, t)
  }
}, j3g=class tis extends ie{
  constructor(e){
    super(), this.repositories=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamRepositoriesForServiceAccountScopeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repositories",kind:"message",T:Q3g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tis, e, t)
  }
}, z3g=class nis extends ie{
  constructor(e){
    super(), this.teamId=0, this.serviceAccountId="", this.apiKeyId=0, this.repoScope=[], this.repoScopeEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateServiceAccountRepoScopeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"service_account_id",kind:"scalar",T:9
    }, {
      no:3,name:"api_key_id",kind:"scalar",T:5
    }, {
      no:4,name:"repo_scope",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"repo_scope_enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new nis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nis, e, t)
  }
}, V3g=class iis extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateServiceAccountRepoScopeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"message",T:Kga
    }
    ])
  }
  static fromBinary(e, t){
    return new iis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iis, e, t)
  }
}, K3g=class ris extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateUserApiKeyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ris().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ris().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ris().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ris, e, t)
  }
}, Y3g=class sis extends ie{
  constructor(e){
    super(), this.apiKey="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateUserApiKeyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_key",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new sis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sis, e, t)
  }
}, Z3g=class ois extends ie{
  constructor(e){
    super(), this.id=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeUserApiKeyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new ois().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ois().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ois().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ois, e, t)
  }
}, X3g=class ais extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeUserApiKeyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ais().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ais().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ais().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ais, e, t)
  }
}, e5g=class cis extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListUserApiKeysRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new cis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cis, e, t)
  }
}, t5g=class lis extends ie{
  constructor(e){
    super(), this.apiKeys=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListUserApiKeysResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"api_keys",kind:"message",T:Znu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lis, e, t)
  }
}, n5g=class uis extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"privacy_mode_forced",kind:"scalar",T:8,opt:!0
    }, {
      no:3,name:"allow_domain_join",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uis, e, t)
  }
}, i5g=class dis extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new dis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dis, e, t)
  }
}, r5g=class his extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetJoinableTeamsByDomainRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new his().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new his().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new his().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(his, e, t)
  }
}, s5g=class mis extends ie{
  constructor(e){
    super(), this.id=0, this.name="", this.memberCount=0, this.memberNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.JoinableTeam"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"member_count",kind:"scalar",T:5
    }, {
      no:4,name:"member_names",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mis, e, t)
  }
}, o5g=class pis extends ie{
  constructor(e){
    super(), this.teams=[], this.emailDomain="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetJoinableTeamsByDomainResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"teams",kind:"message",T:s5g,repeated:!0
    }, {
      no:2,name:"email_domain",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new pis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pis, e, t)
  }
}, a5g=class gis extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.JoinTeamByDomainRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new gis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gis, e, t)
  }
}, c5g=class fis extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.JoinTeamByDomainResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new fis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fis, e, t)
  }
}, l5g=class bis extends ie{
  constructor(e){
    super(), this.teamId=0, this.allowDomainJoin=!1, this.enabledDomains=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamDomainJoinSettingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"allow_domain_join",kind:"scalar",T:8
    }, {
      no:3,name:"enabled_domains",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"enforce_invite_domain_on_accept",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bis, e, t)
  }
}, u5g=class vis extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamDomainJoinSettingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new vis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vis, e, t)
  }
}, d5g=class Ais extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamMemberDomainsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Ais().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ais().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ais().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ais, e, t)
  }
}, h5g=class yis extends ie{
  constructor(e){
    super(), this.domain="", this.memberCount=0, this.isEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamMemberDomain"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"domain",kind:"scalar",T:9
    }, {
      no:2,name:"member_count",kind:"scalar",T:5
    }, {
      no:3,name:"is_enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new yis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yis, e, t)
  }
}, m5g=class wis extends ie{
  constructor(e){
    super(), this.domains=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamMemberDomainsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"domains",kind:"message",T:h5g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wis, e, t)
  }
}, p5g=class _is extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamIdForReactivationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new _is().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _is().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _is().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_is, e, t)
  }
}, g5g=class Cis extends ie{
  constructor(e){
    super(), this.isEligible=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamIdForReactivationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"is_eligible",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Cis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cis, e, t)
  }
}, f5g=class Sis extends ie{
  constructor(e){
    super(), this.teamId=0, this.userId=0, this.role=z3.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateRoleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }, {
      no:3,name:"role",kind:"enum",T:v.getEnumType(z3)
    }
    ])
  }
  static fromBinary(e, t){
    return new Sis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sis, e, t)
  }
}, b5g=class kis extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateRoleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new kis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kis, e, t)
  }
}, v5g=class Eis extends ie{
  constructor(e){
    super(), this.teamId=0, this.userId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveMemberRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Eis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eis, e, t)
  }
}, A5g=class xis extends ie{
  constructor(e){
    super(), this.hasBillingCycleUsage=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveMemberResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"has_billing_cycle_usage",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new xis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xis, e, t)
  }
}, y5g=class Tis extends ie{
  constructor(e){
    super(), this.teamId=0, this.newSeats=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChangeSeatRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"new_seats",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Tis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tis, e, t)
  }
}, w5g=class Iis extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChangeSeatResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Iis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Iis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Iis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Iis, e, t)
  }
}, _5g=class Dis extends ie{
  constructor(e){
    super(), this.teamId=0, this.newNumSeats=0, this.newRequestQuotaPerSeat=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChangeTeamSubscriptionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"new_num_seats",kind:"scalar",T:5
    }, {
      no:3,name:"new_request_quota_per_seat",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Dis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dis, e, t)
  }
}, C5g=class Bis extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ChangeTeamSubscriptionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Bis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bis, e, t)
  }
}, S5g=class Ris extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamUsageRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Ris().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ris().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ris().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ris, e, t)
  }
}, k5g=class Pis extends ie{
  constructor(e){
    super(), this.teamMemberUsage=[], this.analyticsDegradedWarning=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamUsageResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_member_usage",kind:"message",T:E5g,repeated:!0
    }, {
      no:2,name:"analytics_degraded_warning",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Pis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pis, e, t)
  }
}, E5g=class Lis extends ie{
  constructor(e){
    super(), this.id=0, this.usageData=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamMemberUsage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"usage_data",kind:"message",T:x5g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lis, e, t)
  }
}, x5g=class Nis extends ie{
  constructor(e){
    super(), this.modelType="", this.numRequests=0, this.numTokens=0, this.maxTokenUsage=0, this.maxRequestUsage=0, this.lastUsage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamMemberUsageData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_type",kind:"scalar",T:9
    }, {
      no:2,name:"num_requests",kind:"scalar",T:5
    }, {
      no:3,name:"num_tokens",kind:"scalar",T:5
    }, {
      no:4,name:"max_token_usage",kind:"scalar",T:5
    }, {
      no:5,name:"max_request_usage",kind:"scalar",T:5
    }, {
      no:6,name:"last_usage",kind:"scalar",T:9
    }, {
      no:7,name:"copilot_usage",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"docs_count",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"copilot_accepted_usage",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Nis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nis, e, t)
  }
}, T5g=class Mis extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSignUpTypeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Mis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mis, e, t)
  }
}, I5g=class Fis extends ie{
  constructor(e){
    super(), this.signUpType=fvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSignUpTypeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sign_up_type",kind:"enum",T:v.getEnumType(fvi)
    }
    ])
  }
  static fromBinary(e, t){
    return new Fis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fis, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.AUTH_0=1]="AUTH_0", n[n.GOOGLE=2]="GOOGLE", n[n.GITHUB=3]="GITHUB", n[n.WORKOS=4]="WORKOS"
})(fvi||(fvi={
  
})), v.util.setEnumType(fvi, "aiserver.v1.GetSignUpTypeResponse.SignUpType", [{
  no:0, name:"SIGN_UP_TYPE_UNSPECIFIED"
}, {
  no:1, name:"SIGN_UP_TYPE_AUTH_0"
}, {
  no:2, name:"SIGN_UP_TYPE_GOOGLE"
}, {
  no:3, name:"SIGN_UP_TYPE_GITHUB"
}, {
  no:4, name:"SIGN_UP_TYPE_WORKOS"
}
]), D5g=class Ois extends ie{
  constructor(e){
    super(), this.platform=bvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDownloadLinkRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"platform",kind:"enum",T:v.getEnumType(bvi)
    }
    ])
  }
  static fromBinary(e, t){
    return new Ois().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ois().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ois().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ois, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.MAC_APPLE_SILICON=1]="MAC_APPLE_SILICON", n[n.MAC_INTEL=2]="MAC_INTEL", n[n.MAC_UNIVERSAL=3]="MAC_UNIVERSAL", n[n.WINDOWS=4]="WINDOWS", n[n.LINUX=5]="LINUX"
})(bvi||(bvi={
  
})), v.util.setEnumType(bvi, "aiserver.v1.GetDownloadLinkRequest.Platform", [{
  no:0, name:"PLATFORM_UNSPECIFIED"
}, {
  no:1, name:"PLATFORM_MAC_APPLE_SILICON"
}, {
  no:2, name:"PLATFORM_MAC_INTEL"
}, {
  no:3, name:"PLATFORM_MAC_UNIVERSAL"
}, {
  no:4, name:"PLATFORM_WINDOWS"
}, {
  no:5, name:"PLATFORM_LINUX"
}
]), B5g=class Uis extends ie{
  constructor(e){
    super(), this.cachedDownloadLink="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDownloadLinkResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"cached_download_link",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Uis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uis, e, t)
  }
}, R5g=class $is extends ie{
  constructor(e){
    super(), this.currentVersion="", this.channel="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCliDownloadUrlRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current_version",kind:"scalar",T:9
    }, {
      no:2,name:"channel",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new $is().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $is().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $is().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($is, e, t)
  }
}, P5g=class qis extends ie{
  constructor(e){
    super(), this.url="", this.version="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCliDownloadUrlResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"url",kind:"scalar",T:9
    }, {
      no:2,name:"version",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new qis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qis, e, t)
  }
}, L5g=class His extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSsoConfigurationLinksRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new His().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new His().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new His().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(His, e, t)
  }
}, N5g=class Jis extends ie{
  constructor(e){
    super(), this.ssoUrl="", this.domainVerificationUrl="", this.ssoStatus="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSsoConfigurationLinksResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sso_url",kind:"scalar",T:9
    }, {
      no:2,name:"domain_verification_url",kind:"scalar",T:9
    }, {
      no:3,name:"sso_status",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Jis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jis, e, t)
  }
}, M5g=class Gis extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetScimConfigurationLinksRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Gis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gis, e, t)
  }
}, F5g=class Wis extends ie{
  constructor(e){
    super(), this.scimUrl="", this.scimStatus="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetScimConfigurationLinksResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"scim_url",kind:"scalar",T:9
    }, {
      no:2,name:"scim_status",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Wis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wis, e, t)
  }
}, O5g=class Qis extends ie{
  constructor(e){
    super(), this.teamId=0, this.adminOnlyUsagePricing=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetAdminOnlyUsagePricingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"admin_only_usage_pricing",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Qis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qis, e, t)
  }
}, U5g=class jis extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetAdminOnlyUsagePricingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new jis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jis, e, t)
  }
}, $5g=class zis extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetYearlyUpgradeEligibilityRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new zis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zis, e, t)
  }
}, q5g=class Vis extends ie{
  constructor(e){
    super(), this.eligible=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetYearlyUpgradeEligibilityResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"eligible",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Vis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vis, e, t)
  }
}, H5g=class Kis extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpgradeToYearlyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Kis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kis, e, t)
  }
}, J5g=class Yis extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpgradeToYearlyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Yis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yis, e, t)
  }
}, G5g=class Zis extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEnterpriseCTAEligibilityRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Zis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zis, e, t)
  }
}, W5g=class Xis extends ie{
  constructor(e){
    super(), this.eligible=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEnterpriseCTAEligibilityResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"eligible",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Xis().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xis().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xis().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xis, e, t)
  }
}, Q5g=class ers extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUsageBasedPremiumRequestsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new ers().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ers().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ers().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ers, e, t)
  }
}, j5g=class trs extends ie{
  constructor(e){
    super(), this.usageBasedPremiumRequests=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUsageBasedPremiumRequestsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"usage_based_premium_requests",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new trs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new trs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new trs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(trs, e, t)
  }
}, z5g=class nrs extends ie{
  constructor(e){
    super(), this.teamId=0, this.usageBasedPremiumRequests=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUsageBasedPremiumRequestsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"usage_based_premium_requests",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new nrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nrs, e, t)
  }
}, V5g=class irs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUsageBasedPremiumRequestsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new irs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new irs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new irs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(irs, e, t)
  }
}, K5g=class rrs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetReferralsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new rrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rrs, e, t)
  }
}, Y5g=class srs extends ie{
  constructor(e){
    super(), this.numReferrals=0, this.referralCode="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetReferralsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"num_referrals",kind:"scalar",T:5
    }, {
      no:2,name:"referral_code",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new srs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new srs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new srs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(srs, e, t)
  }
}, Z5g=class ors extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetReferralCodesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ors().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ors().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ors().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ors, e, t)
  }
}, X5g=class ars extends ie{
  constructor(e){
    super(), this.referralCodes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetReferralCodesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"referral_codes",kind:"message",T:n9g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ars().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ars().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ars().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ars, e, t)
  }
}, e9g=class crs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckReferralAllowlistRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new crs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new crs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new crs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(crs, e, t)
  }
}, t9g=class lrs extends ie{
  constructor(e){
    super(), this.isInAllowlist=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckReferralAllowlistResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_in_allowlist",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new lrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lrs, e, t)
  }
}, n9g=class urs extends ie{
  constructor(e){
    super(), this.code="", this.createdAtMs=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReferralCodeEntry"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code",kind:"scalar",T:9
    }, {
      no:2,name:"created_at_ms",kind:"scalar",T:3
    }, {
      no:3,name:"redeemed_at_ms",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"redeemer_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new urs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new urs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new urs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(urs, e, t)
  }
}, i9g=class drs extends ie{
  constructor(e){
    super(), this.referralCode="", this.authId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckReferralCodeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"referral_code",kind:"scalar",T:9
    }, {
      no:2,name:"auth_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new drs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new drs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new drs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(drs, e, t)
  }
}, r9g=class hrs extends ie{
  constructor(e){
    super(), this.isValid=!1, this.userIsEligible=!1, this.maxRedemptions=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckReferralCodeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_valid",kind:"scalar",T:8
    }, {
      no:2,name:"user_is_eligible",kind:"scalar",T:8
    }, {
      no:3,name:"max_redemptions",kind:"scalar",T:8
    }, {
      no:4,name:"metadata",kind:"message",T:s9g,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hrs, e, t)
  }
}, s9g=class mrs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Metadata"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"title",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"discount_type",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mrs, e, t)
  }
}, Yga=class prs extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamReposRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new prs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new prs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new prs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(prs, e, t)
  }
}, eiu=class grs extends ie{
  constructor(e){
    super(), this.repos=[], this.teamRepoType="", this.allowedRepos=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamReposResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repos",kind:"message",T:tiu,repeated:!0
    }, {
      no:2,name:"team_repo_type",kind:"scalar",T:9
    }, {
      no:3,name:"allowed_repos",kind:"message",T:tiu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new grs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new grs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new grs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(grs, e, t)
  }
}, tiu=class frs extends ie{
  constructor(e){
    super(), this.id=0, this.url="", this.patterns=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamReposResponse.Repo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"url",kind:"scalar",T:9
    }, {
      no:3,name:"patterns",kind:"message",T:o9g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new frs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new frs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new frs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(frs, e, t)
  }
}, o9g=class brs extends ie{
  constructor(e){
    super(), this.id=0, this.pattern="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamReposResponse.Pattern"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"pattern",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new brs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new brs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new brs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(brs, e, t)
  }
}, a9g=class vrs extends ie{
  constructor(e){
    super(), this.teamId=0, this.repoUrl="", this.repoType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamRepoRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"repo_url",kind:"scalar",T:9
    }, {
      no:3,name:"repo_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vrs, e, t)
  }
}, c9g=class Ars extends ie{
  constructor(e){
    super(), this.repoId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamRepoResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repo_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Ars().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ars().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ars().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ars, e, t)
  }
}, l9g=class yrs extends ie{
  constructor(e){
    super(), this.teamId=0, this.repoId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamRepoRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"repo_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new yrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yrs, e, t)
  }
}, u9g=class wrs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamRepoResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new wrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wrs, e, t)
  }
}, d9g=class _rs extends ie{
  constructor(e){
    super(), this.teamId=0, this.repoId=0, this.pattern="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddRepoPatternRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"repo_id",kind:"scalar",T:5
    }, {
      no:3,name:"pattern",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new _rs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _rs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _rs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_rs, e, t)
  }
}, h9g=class Crs extends ie{
  constructor(e){
    super(), this.patternId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddRepoPatternResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pattern_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Crs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Crs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Crs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Crs, e, t)
  }
}, m9g=class Srs extends ie{
  constructor(e){
    super(), this.teamId=0, this.repoId=0, this.patternId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveRepoPatternRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"repo_id",kind:"scalar",T:5
    }, {
      no:3,name:"pattern_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Srs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Srs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Srs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Srs, e, t)
  }
}, p9g=class krs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveRepoPatternResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new krs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new krs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new krs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(krs, e, t)
  }
}, niu=class Ers extends ie{
  constructor(e){
    super(), this.id=Eo.zero, this.teamId=0, this.teamName="", this.gitOrgOwner="", this.gitProvider=ivi.UNSPECIFIED, this.createdAt=Eo.zero, this.updatedAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ProtectedGitScope"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:3
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"team_name",kind:"scalar",T:9
    }, {
      no:4,name:"git_org_owner",kind:"scalar",T:9
    }, {
      no:5,name:"git_provider",kind:"enum",T:v.getEnumType(ivi)
    }, {
      no:6,name:"git_enterprise_uuid",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"created_at",kind:"scalar",T:3
    }, {
      no:8,name:"updated_at",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Ers().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ers().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ers().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ers, e, t)
  }
}, g9g=class xrs extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetProtectedGitScopesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new xrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xrs, e, t)
  }
}, f9g=class Trs extends ie{
  constructor(e){
    super(), this.scopes=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetProtectedGitScopesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"scopes",kind:"message",T:niu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Trs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Trs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Trs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Trs, e, t)
  }
}, b9g=class Irs extends ie{
  constructor(e){
    super(), this.teamId=0, this.repoUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateProtectedGitScopeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"repo_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Irs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Irs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Irs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Irs, e, t)
  }
}, v9g=class Drs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateProtectedGitScopeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"scope",kind:"message",T:niu
    }
    ])
  }
  static fromBinary(e, t){
    return new Drs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Drs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Drs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Drs, e, t)
  }
}, A9g=class Brs extends ie{
  constructor(e){
    super(), this.teamId=0, this.scopeId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteProtectedGitScopeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"scope_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Brs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Brs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Brs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Brs, e, t)
  }
}, y9g=class Rrs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteProtectedGitScopeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Rrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rrs, e, t)
  }
}, Zga=class Prs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamAdminSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Prs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Prs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Prs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Prs, e, t)
  }
}, vvi=class Lrs extends ie{
  constructor(e){
    super(), this.enabled=!1, this.allowed=[], this.blocked=[], this.disableMcpAutoRun=!1, this.deleteFileProtection=!1, this.enableRunEverything=!1, this.mcpToolAllowlist=[], this.browserProtection=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoRunControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }, {
      no:2,name:"allowed",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"blocked",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"disable_mcp_auto_run",kind:"scalar",T:8
    }, {
      no:5,name:"delete_file_protection",kind:"scalar",T:8
    }, {
      no:6,name:"enable_run_everything",kind:"scalar",T:8
    }, {
      no:7,name:"mcp_tool_allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:8,name:"sandboxing_controls",kind:"message",T:_9g
    }, {
      no:9,name:"browser_protection",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Lrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lrs, e, t)
  }
}, iiu=class Nrs extends ie{
  constructor(e){
    super(), this.hierarchicalEnabled=!1, this.ignoreSymlinks=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorIgnoreControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hierarchical_enabled",kind:"scalar",T:8
    }, {
      no:2,name:"ignore_symlinks",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Nrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nrs, e, t)
  }
}, w9g=class Mrs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AllowedMCPServer"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"server_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Mrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mrs, e, t)
  }
}, riu=class Frs extends ie{
  constructor(e){
    super(), this.allowedMcpServers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AllowedMCPConfiguration"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"disable_all",kind:"scalar",T:8,opt:!0
    }, {
      no:2,name:"allowed_mcp_servers",kind:"message",T:w9g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Frs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Frs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Frs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Frs, e, t)
  }
}, siu=class Ors extends ie{
  constructor(e){
    super(), this.mode=rvi.UNSPECIFIED, this.allowedPluginIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FirstPartyPluginConfiguration"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"mode",kind:"enum",T:v.getEnumType(rvi)
    }, {
      no:2,name:"allowed_plugin_ids",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ors().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ors().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ors().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ors, e, t)
  }
}, Avi=class Urs extends ie{
  constructor(e){
    super(), this.allowlist=[], this.allowlistConfig=fye.UNSPECIFIED, this.teamFollowupEnabled=!1, this.autoCreatePr=svi.UNSPECIFIED, this.prReviewOpenDestination=ISt.UNSPECIFIED, this.githubArtifactPosting=DSt.UNSPECIFIED, this.egressProtectionMode=BSt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BackgroundAgentSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"allowlist_config",kind:"enum",T:v.getEnumType(fye)
    }, {
      no:3,name:"team_followup_enabled",kind:"scalar",T:8
    }, {
      no:4,name:"auto_create_pr",kind:"enum",T:v.getEnumType(svi)
    }, {
      no:5,name:"pr_review_open_destination",kind:"enum",T:v.getEnumType(ISt)
    }, {
      no:6,name:"require_private_workers",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"github_artifact_posting",kind:"enum",T:v.getEnumType(DSt)
    }, {
      no:8,name:"team_followup_enabled_v2",kind:"enum",T:v.getEnumType(Qga),opt:!0
    }, {
      no:9,name:"enable_long_running_agent_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"egress_protection_mode",kind:"enum",T:v.getEnumType(BSt)
    }, {
      no:11,name:"lock_egress_protection_mode",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"enable_cloud_agent_testing",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Urs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Urs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Urs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Urs, e, t)
  }
}, oiu=class $rs extends ie{
  constructor(e){
    super(), this.allowlist=[], this.allowlistConfig=fye.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CliSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"allowlist_config",kind:"enum",T:v.getEnumType(fye)
    }
    ])
  }
  static fromBinary(e, t){
    return new $rs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $rs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $rs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($rs, e, t)
  }
}, aiu=class qrs extends ie{
  constructor(e){
    super(), this.enabled=!1, this.allowedTools=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.MCPControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }, {
      no:2,name:"allowed_tools",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qrs, e, t)
  }
}, _9g=class Hrs extends ie{
  constructor(e){
    super(), this.sandboxing=D$e.UNSPECIFIED, this.sandboxNetworking=Gtt.UNSPECIFIED, this.sandboxGit=Wtt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AutoRunSandboxingControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"sandboxing",kind:"enum",T:v.getEnumType(D$e)
    }, {
      no:2,name:"sandbox_networking",kind:"enum",T:v.getEnumType(Gtt)
    }, {
      no:3,name:"sandbox_git",kind:"enum",T:v.getEnumType(Wtt)
    }
    ])
  }
  static fromBinary(e, t){
    return new Hrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hrs, e, t)
  }
}, ciu=class Jrs extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PromptDeeplinkControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Jrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jrs, e, t)
  }
}, liu=class Grs extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CommandDeeplinkControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Grs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Grs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Grs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Grs, e, t)
  }
}, uiu=class Wrs extends ie{
  constructor(e){
    super(), this.enabled=!1, this.allowPublicDeeplinks=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeeplinkControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }, {
      no:2,name:"allow_public_deeplinks",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Wrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wrs, e, t)
  }
}, diu=class Qrs extends ie{
  constructor(e){
    super(), this.hidden=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GithubIntegrationSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hidden",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Qrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qrs, e, t)
  }
}, hiu=class jrs extends ie{
  constructor(e){
    super(), this.hidden=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GitlabIntegrationSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hidden",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new jrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jrs, e, t)
  }
}, miu=class zrs extends ie{
  constructor(e){
    super(), this.hidden=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlackIntegrationSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hidden",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new zrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zrs, e, t)
  }
}, piu=class Vrs extends ie{
  constructor(e){
    super(), this.hidden=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinearIntegrationSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hidden",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Vrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vrs, e, t)
  }
}, giu=class Krs extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WorkspaceTrustControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Krs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Krs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Krs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Krs, e, t)
  }
}, yvi=class Yrs extends ie{
  constructor(e){
    super(), this.enabled=!1, this.allowedVisibilities=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SharedConversationSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }, {
      no:2,name:"allowed_visibilities",kind:"enum",T:v.getEnumType(gL),repeated:!0
    }, {
      no:3,name:"allow_public_indexing",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yrs, e, t)
  }
}, fiu=class Zrs extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CursorBlameSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Zrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zrs, e, t)
  }
}, biu=class Xrs extends ie{
  constructor(e){
    super(), this.verificationEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ExtensionSigningSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"verification_enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Xrs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xrs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xrs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xrs, e, t)
  }
}, viu=class ess extends ie{
  constructor(e){
    super(), this.disableAttribution=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AttributionControls"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"disable_attribution",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ess().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ess().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ess().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ess, e, t)
  }
}, zhn=class tss extends ie{
  constructor(e){
    super(), this.allowedModels=[], this.blockedModels=[], this.dotCursorProtection=!1, this.browserOriginAllowlist=[], this.networkDenylist=[], this.networkAllowlist=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamAdminSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"allowed_models",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"blocked_models",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"auto_run_controls",kind:"message",T:vvi
    }, {
      no:4,name:"cursor_ignore_controls",kind:"message",T:iiu
    }, {
      no:5,name:"dot_cursor_protection",kind:"scalar",T:8
    }, {
      no:6,name:"allowed_mcp_configuration",kind:"message",T:riu,opt:!0
    }, {
      no:7,name:"background_agent_settings",kind:"message",T:Avi,opt:!0
    }, {
      no:8,name:"cli_settings",kind:"message",T:oiu,opt:!0
    }, {
      no:9,name:"mcp_controls",kind:"message",T:aiu,opt:!0
    }, {
      no:10,name:"prompt_deeplink_controls",kind:"message",T:ciu,opt:!0
    }, {
      no:11,name:"command_deeplink_controls",kind:"message",T:liu,opt:!0
    }, {
      no:12,name:"deeplink_controls",kind:"message",T:uiu,opt:!0
    }, {
      no:13,name:"github_integration_settings",kind:"message",T:diu,opt:!0
    }, {
      no:14,name:"slack_integration_settings",kind:"message",T:miu,opt:!0
    }, {
      no:15,name:"linear_integration_settings",kind:"message",T:piu,opt:!0
    }, {
      no:16,name:"workspace_trust_controls",kind:"message",T:giu,opt:!0
    }, {
      no:17,name:"gitlab_integration_settings",kind:"message",T:hiu,opt:!0
    }, {
      no:18,name:"browser_features",kind:"scalar",T:8,opt:!0
    }, {
      no:23,name:"browser_origin_allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:19,name:"byok_disabled",kind:"scalar",T:8,opt:!0
    }, {
      no:20,name:"dashboard_analytics_requires_admin",kind:"scalar",T:8,opt:!0
    }, {
      no:21,name:"shared_conversation_settings",kind:"message",T:yvi,opt:!0
    }, {
      no:22,name:"allowed_extensions",kind:"scalar",T:9,opt:!0
    }, {
      no:24,name:"disable_conversation_insights",kind:"scalar",T:8,opt:!0
    }, {
      no:25,name:"cursor_blame_settings",kind:"message",T:fiu,opt:!0
    }, {
      no:26,name:"network_denylist",kind:"scalar",T:9,repeated:!0
    }, {
      no:27,name:"network_allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:28,name:"extension_signing_settings",kind:"message",T:biu,opt:!0
    }, {
      no:29,name:"enforce_invite_domain_on_accept",kind:"scalar",T:8,opt:!0
    }, {
      no:30,name:"first_party_plugin_configuration",kind:"message",T:siu,opt:!0
    }, {
      no:31,name:"attribution_controls",kind:"message",T:viu,opt:!0
    }, {
      no:32,name:"allow_third_party_plugin_imports",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tss, e, t)
  }
}, C9g=class nss extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBaseTeamAdminSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new nss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nss, e, t)
  }
}, S9g=class iss extends ie{
  constructor(e){
    super(), this.teamId=0, this.allowedModels=[], this.blockedModels=[], this.dotCursorProtection=!1, this.browserOriginAllowlist=[], this.networkDenylist=[], this.networkAllowlist=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamAdminSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"allowed_models",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"blocked_models",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"auto_run_controls",kind:"message",T:vvi
    }, {
      no:5,name:"cursor_ignore_controls",kind:"message",T:iiu
    }, {
      no:6,name:"dot_cursor_protection",kind:"scalar",T:8
    }, {
      no:7,name:"allowed_mcp_configuration",kind:"message",T:riu,opt:!0
    }, {
      no:8,name:"background_agent_settings",kind:"message",T:Avi,opt:!0
    }, {
      no:9,name:"cli_settings",kind:"message",T:oiu,opt:!0
    }, {
      no:10,name:"mcp_controls",kind:"message",T:aiu,opt:!0
    }, {
      no:11,name:"prompt_deeplink_controls",kind:"message",T:ciu,opt:!0
    }, {
      no:12,name:"command_deeplink_controls",kind:"message",T:liu,opt:!0
    }, {
      no:13,name:"deeplink_controls",kind:"message",T:uiu,opt:!0
    }, {
      no:14,name:"github_integration_settings",kind:"message",T:diu,opt:!0
    }, {
      no:15,name:"slack_integration_settings",kind:"message",T:miu,opt:!0
    }, {
      no:16,name:"linear_integration_settings",kind:"message",T:piu,opt:!0
    }, {
      no:17,name:"workspace_trust_controls",kind:"message",T:giu,opt:!0
    }, {
      no:18,name:"gitlab_integration_settings",kind:"message",T:hiu,opt:!0
    }, {
      no:19,name:"browser_features",kind:"scalar",T:8,opt:!0
    }, {
      no:24,name:"browser_origin_allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:20,name:"byok_disabled",kind:"scalar",T:8,opt:!0
    }, {
      no:21,name:"dashboard_analytics_requires_admin",kind:"scalar",T:8,opt:!0
    }, {
      no:22,name:"shared_conversation_settings",kind:"message",T:yvi,opt:!0
    }, {
      no:23,name:"allowed_extensions",kind:"scalar",T:9,opt:!0
    }, {
      no:25,name:"disable_conversation_insights",kind:"scalar",T:8,opt:!0
    }, {
      no:26,name:"cursor_blame_settings",kind:"message",T:fiu,opt:!0
    }, {
      no:27,name:"network_denylist",kind:"scalar",T:9,repeated:!0
    }, {
      no:28,name:"network_allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:29,name:"extension_signing_settings",kind:"message",T:biu,opt:!0
    }, {
      no:30,name:"enforce_invite_domain_on_accept",kind:"scalar",T:8,opt:!0
    }, {
      no:31,name:"first_party_plugin_configuration",kind:"message",T:siu,opt:!0
    }, {
      no:32,name:"attribution_controls",kind:"message",T:viu,opt:!0
    }, {
      no:33,name:"allow_third_party_plugin_imports",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new iss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new iss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new iss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(iss, e, t)
  }
}, k9g=class rss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamAdminSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new rss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rss, e, t)
  }
}, E9g=class sss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamFreeTrialCodeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"trial_type",kind:"enum",T:v.getEnumType(jga),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sss, e, t)
  }
}, x9g=class oss extends ie{
  constructor(e){
    super(), this.code="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamFreeTrialCodeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new oss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oss, e, t)
  }
}, T9g=class ass extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamAnalyticsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"start_date",kind:"scalar",T:3,opt:!0
    }, {
      no:3,name:"end_date",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"version",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ass().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ass().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ass().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ass, e, t)
  }
}, I9g=class css extends ie{
  constructor(e){
    super(), this.dailyMetrics=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamAnalyticsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"daily_metrics",kind:"message",T:Aiu,repeated:!0
    }, {
      no:2,name:"period",kind:"message",T:Xga
    }, {
      no:3,name:"active_users",kind:"message",T:N9g
    }
    ])
  }
  static fromBinary(e, t){
    return new css().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new css().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new css().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(css, e, t)
  }
}, D9g=class lss extends ie{
  constructor(e){
    super(), this.teamId=0, this.userId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserAnalyticsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }, {
      no:3,name:"start_date",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"end_date",kind:"scalar",T:3,opt:!0
    }, {
      no:5,name:"version",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lss, e, t)
  }
}, B9g=class uss extends ie{
  constructor(e){
    super(), this.dailyMetrics=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserAnalyticsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"daily_metrics",kind:"message",T:Aiu,repeated:!0
    }, {
      no:2,name:"period",kind:"message",T:Xga
    }, {
      no:3,name:"apply_lines_rank",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"tabs_accepted_rank",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"total_team_members",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"total_apply_lines",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"team_average_apply_lines",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"total_tabs_accepted",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"team_average_tabs_accepted",kind:"scalar",T:5,opt:!0
    }, {
      no:10,name:"total_members_in_team",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uss, e, t)
  }
}, R9g=class dss extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamRawDataRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"start_date",kind:"scalar",T:3,opt:!0
    }, {
      no:3,name:"end_date",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"version",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dss, e, t)
  }
}, P9g=class hss extends ie{
  constructor(e){
    super(), this.data=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamRawDataResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"data",kind:"message",T:L9g,repeated:!0
    }, {
      no:2,name:"period",kind:"message",T:Xga
    }
    ])
  }
  static fromBinary(e, t){
    return new hss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hss, e, t)
  }
}, L9g=class mss extends ie{
  constructor(e){
    super(), this.date=Eo.zero, this.userId=0, this.isActive=!1, this.totalLinesAdded=0, this.totalLinesDeleted=0, this.acceptedLinesAdded=0, this.acceptedLinesDeleted=0, this.totalApplies=0, this.totalAccepts=0, this.totalRejects=0, this.totalTabsShown=0, this.totalTabsAccepted=0, this.composerRequests=0, this.chatRequests=0, this.agentRequests=0, this.cmdkUsages=0, this.subscriptionIncludedReqs=0, this.apiKeyReqs=0, this.usageBasedReqs=0, this.bugbotUsages=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RawUserData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"date",kind:"scalar",T:3
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }, {
      no:3,name:"is_active",kind:"scalar",T:8
    }, {
      no:4,name:"total_lines_added",kind:"scalar",T:5
    }, {
      no:5,name:"total_lines_deleted",kind:"scalar",T:5
    }, {
      no:6,name:"accepted_lines_added",kind:"scalar",T:5
    }, {
      no:7,name:"accepted_lines_deleted",kind:"scalar",T:5
    }, {
      no:8,name:"total_applies",kind:"scalar",T:5
    }, {
      no:9,name:"total_accepts",kind:"scalar",T:5
    }, {
      no:10,name:"total_rejects",kind:"scalar",T:5
    }, {
      no:11,name:"total_tabs_shown",kind:"scalar",T:5
    }, {
      no:12,name:"total_tabs_accepted",kind:"scalar",T:5
    }, {
      no:13,name:"composer_requests",kind:"scalar",T:5
    }, {
      no:14,name:"chat_requests",kind:"scalar",T:5
    }, {
      no:15,name:"agent_requests",kind:"scalar",T:5
    }, {
      no:16,name:"cmdk_usages",kind:"scalar",T:5
    }, {
      no:17,name:"subscription_included_reqs",kind:"scalar",T:5
    }, {
      no:18,name:"api_key_reqs",kind:"scalar",T:5
    }, {
      no:19,name:"usage_based_reqs",kind:"scalar",T:5
    }, {
      no:20,name:"bugbot_usages",kind:"scalar",T:5
    }, {
      no:21,name:"most_used_model",kind:"scalar",T:9,opt:!0
    }, {
      no:22,name:"apply_most_used_extension",kind:"scalar",T:9,opt:!0
    }, {
      no:23,name:"tab_most_used_extension",kind:"scalar",T:9,opt:!0
    }, {
      no:24,name:"client_version",kind:"scalar",T:9,opt:!0
    }, {
      no:25,name:"email",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mss, e, t)
  }
}, N9g=class pss extends ie{
  constructor(e){
    super(), this.current=0, this.previous=0, this.percentChange=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ActiveUsers"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"current",kind:"scalar",T:5
    }, {
      no:2,name:"previous",kind:"scalar",T:5
    }, {
      no:3,name:"percent_change",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new pss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pss, e, t)
  }
}, Xga=class gss extends ie{
  constructor(e){
    super(), this.startDate=Eo.zero, this.endDate=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AnalyticsPeriod"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_date",kind:"scalar",T:3
    }, {
      no:2,name:"end_date",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new gss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gss, e, t)
  }
}, Aiu=class fss extends ie{
  constructor(e){
    super(), this.date=Eo.zero, this.activeUsers=0, this.linesAdded=0, this.linesDeleted=0, this.acceptedLinesAdded=0, this.acceptedLinesDeleted=0, this.totalApplies=0, this.totalAccepts=0, this.totalRejects=0, this.totalTabsShown=0, this.totalTabsAccepted=0, this.composerRequests=0, this.chatRequests=0, this.agentRequests=0, this.cmdkUsages=0, this.subscriptionIncludedReqs=0, this.apiKeyReqs=0, this.usageBasedReqs=0, this.bugbotUsages=0, this.modelUsage=[], this.extensionUsage=[], this.tabExtensionUsage=[], this.clientVersionUsage=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DailyMetrics"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"date",kind:"scalar",T:3
    }, {
      no:2,name:"active_users",kind:"scalar",T:5
    }, {
      no:3,name:"lines_added",kind:"scalar",T:5
    }, {
      no:4,name:"lines_deleted",kind:"scalar",T:5
    }, {
      no:5,name:"accepted_lines_added",kind:"scalar",T:5
    }, {
      no:6,name:"accepted_lines_deleted",kind:"scalar",T:5
    }, {
      no:7,name:"total_applies",kind:"scalar",T:5
    }, {
      no:8,name:"total_accepts",kind:"scalar",T:5
    }, {
      no:9,name:"total_rejects",kind:"scalar",T:5
    }, {
      no:10,name:"total_tabs_shown",kind:"scalar",T:5
    }, {
      no:11,name:"total_tabs_accepted",kind:"scalar",T:5
    }, {
      no:12,name:"composer_requests",kind:"scalar",T:5
    }, {
      no:13,name:"chat_requests",kind:"scalar",T:5
    }, {
      no:14,name:"agent_requests",kind:"scalar",T:5
    }, {
      no:15,name:"cmdk_usages",kind:"scalar",T:5
    }, {
      no:16,name:"subscription_included_reqs",kind:"scalar",T:5
    }, {
      no:17,name:"api_key_reqs",kind:"scalar",T:5
    }, {
      no:18,name:"usage_based_reqs",kind:"scalar",T:5
    }, {
      no:19,name:"bugbot_usages",kind:"scalar",T:5
    }, {
      no:20,name:"model_usage",kind:"message",T:wvi,repeated:!0
    }, {
      no:21,name:"extension_usage",kind:"message",T:wvi,repeated:!0
    }, {
      no:22,name:"tab_extension_usage",kind:"message",T:wvi,repeated:!0
    }, {
      no:23,name:"client_version_usage",kind:"message",T:wvi,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fss, e, t)
  }
}, wvi=class bss extends ie{
  constructor(e){
    super(), this.name="", this.count=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StringCount"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new bss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bss, e, t)
  }
}, M9g=class vss extends ie{
  constructor(e){
    super(), this.teamId=0, this.teamRepoType="", this.repoId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetTeamRepoTypeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_repo_type",kind:"scalar",T:9
    }, {
      no:3,name:"repo_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new vss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vss, e, t)
  }
}, F9g=class Ass extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetTeamRepoTypeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ass().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ass().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ass().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ass, e, t)
  }
}, O9g=class yss extends ie{
  constructor(e){
    super(), this.conversationId="", this.timestampBeforeRequest=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetClientUsageDataRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation_id",kind:"scalar",T:9
    }, {
      no:2,name:"timestamp_before_request",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new yss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yss, e, t)
  }
}, U9g=class wss extends ie{
  constructor(e){
    super(), this.itemsWithCost=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetClientUsageDataResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"items_with_cost",kind:"message",T:$9g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wss, e, t)
  }
}, $9g=class _ss extends ie{
  constructor(e){
    super(), this.name="", this.costInCents=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetClientUsageDataResponse.NameToCost"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"cost_in_cents",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new _ss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ss, e, t)
  }
}, efa=class Css extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCurrentPeriodUsageRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Css().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Css().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Css().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Css, e, t)
  }
}, q9g=class Sss extends ie{
  constructor(e){
    super(), this.billingCycleStart=Eo.zero, this.billingCycleEnd=Eo.zero, this.enabled=!1, this.displayMessage="", this.autoBucketModels=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCurrentPeriodUsageResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"billing_cycle_start",kind:"scalar",T:3
    }, {
      no:2,name:"billing_cycle_end",kind:"scalar",T:3
    }, {
      no:3,name:"plan_usage",kind:"message",T:H9g
    }, {
      no:4,name:"spend_limit_usage",kind:"message",T:J9g
    }, {
      no:5,name:"display_threshold",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"enabled",kind:"scalar",T:8
    }, {
      no:7,name:"display_message",kind:"scalar",T:9
    }, {
      no:8,name:"free_best_of_n_promotion",kind:"message",T:G9g,opt:!0
    }, {
      no:11,name:"auto_model_selected_display_message",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"named_model_selected_display_message",kind:"scalar",T:9,opt:!0
    }, {
      no:13,name:"auto_bucket_models",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sss, e, t)
  }
}, H9g=class kss extends ie{
  constructor(e){
    super(), this.totalSpend=0, this.includedSpend=0, this.bonusSpend=0, this.remaining=0, this.limit=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCurrentPeriodUsageResponse.PlanUsage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"total_spend",kind:"scalar",T:5
    }, {
      no:2,name:"included_spend",kind:"scalar",T:5
    }, {
      no:3,name:"bonus_spend",kind:"scalar",T:5
    }, {
      no:4,name:"remaining",kind:"scalar",T:5
    }, {
      no:5,name:"limit",kind:"scalar",T:5
    }, {
      no:6,name:"remaining_bonus",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"bonus_tooltip",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"auto_spend",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"api_spend",kind:"scalar",T:5,opt:!0
    }, {
      no:10,name:"auto_limit",kind:"scalar",T:5,opt:!0
    }, {
      no:11,name:"api_limit",kind:"scalar",T:5,opt:!0
    }, {
      no:12,name:"auto_percent_used",kind:"scalar",T:1,opt:!0
    }, {
      no:13,name:"api_percent_used",kind:"scalar",T:1,opt:!0
    }, {
      no:14,name:"total_percent_used",kind:"scalar",T:1,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kss, e, t)
  }
}, J9g=class Ess extends ie{
  constructor(e){
    super(), this.totalSpend=0, this.individualUsed=0, this.individualRemaining=0, this.limitType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCurrentPeriodUsageResponse.SpendLimitUsage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"total_spend",kind:"scalar",T:5
    }, {
      no:2,name:"pooled_limit",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"pooled_used",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"pooled_remaining",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"individual_limit",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"individual_used",kind:"scalar",T:5
    }, {
      no:7,name:"individual_remaining",kind:"scalar",T:5
    }, {
      no:8,name:"limit_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ess().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ess().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ess().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ess, e, t)
  }
}, G9g=class xss extends ie{
  constructor(e){
    super(), this.trialsUsed=0, this.trialsRemaining=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCurrentPeriodUsageResponse.FreeBestOfNPromotion"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"trials_used",kind:"scalar",T:5
    }, {
      no:2,name:"trials_remaining",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new xss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xss, e, t)
  }
}, yiu=class Tss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPlanInfoRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Tss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tss, e, t)
  }
}, W9g=class Iss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPlanInfoResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plan_info",kind:"message",T:Q9g,opt:!0
    }, {
      no:2,name:"next_upgrade",kind:"message",T:j9g,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Iss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Iss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Iss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Iss, e, t)
  }
}, Q9g=class Dss extends ie{
  constructor(e){
    super(), this.planName="", this.includedAmountCents=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPlanInfoResponse.PlanInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plan_name",kind:"scalar",T:9
    }, {
      no:2,name:"included_amount_cents",kind:"scalar",T:5
    }, {
      no:3,name:"price",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"billing_cycle_end",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Dss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dss, e, t)
  }
}, j9g=class Bss extends ie{
  constructor(e){
    super(), this.tier="", this.name="", this.includedAmountCents=0, this.price="", this.description="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPlanInfoResponse.NextUpgrade"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"tier",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"included_amount_cents",kind:"scalar",T:5
    }, {
      no:4,name:"price",kind:"scalar",T:9
    }, {
      no:5,name:"description",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Bss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bss, e, t)
  }
}, z9g=class Rss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUsageLimitPolicyStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Rss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rss, e, t)
  }
}, V9g=class Pss extends ie{
  constructor(e){
    super(), this.isInSlowPool=!1, this.features={
      
    }, this.canConfigureSpendLimit=!1, this.hasPendingRequest=!1, this.allowedModelIds=[], this.allowedModelTags=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUsageLimitPolicyStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_in_slow_pool",kind:"scalar",T:8
    }, {
      no:2,name:"error_title",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"error_detail",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"slowness_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"features",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:6,name:"can_configure_spend_limit",kind:"scalar",T:8
    }, {
      no:7,name:"limit_type",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"has_pending_request",kind:"scalar",T:8
    }, {
      no:9,name:"allowed_model_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:10,name:"allowed_model_tags",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Pss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pss, e, t)
  }
}, wiu=class Lss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUsageLimitStatusAndActiveGrantsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Lss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lss, e, t)
  }
}, K9g=class Nss extends ie{
  constructor(e){
    super(), this.grantId="", this.totalCents=Eo.zero, this.remainingCents=Eo.zero, this.expiresAtMs=Eo.zero, this.allowedModelIds=[], this.allowedModelTags=[], this.grantType="", this.showInClient=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ActiveCreditGrant"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"grant_id",kind:"scalar",T:9
    }, {
      no:2,name:"total_cents",kind:"scalar",T:3
    }, {
      no:3,name:"remaining_cents",kind:"scalar",T:3
    }, {
      no:4,name:"expires_at_ms",kind:"scalar",T:3
    }, {
      no:5,name:"allowed_model_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"allowed_model_tags",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"grant_type",kind:"scalar",T:9
    }, {
      no:8,name:"slowness_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"source",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"campaign_name",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"show_in_client",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Nss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nss, e, t)
  }
}, Y9g=class Mss extends ie{
  constructor(e){
    super(), this.activeGrants=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUsageLimitStatusAndActiveGrantsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"usage_limit_policy_status",kind:"message",T:Z9g
    }, {
      no:2,name:"active_grants",kind:"message",T:K9g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Mss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mss, e, t)
  }
}, Z9g=class Fss extends ie{
  constructor(e){
    super(), this.isInSlowPool=!1, this.features={
      
    }, this.canConfigureSpendLimit=!1, this.hasPendingRequest=!1, this.allowedModelIds=[], this.allowedModelTags=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUsageLimitStatusAndActiveGrantsResponse.UsageLimitPolicyStatus"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_in_slow_pool",kind:"scalar",T:8
    }, {
      no:2,name:"error_title",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"error_detail",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"slowness_ms",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"features",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }, {
      no:6,name:"can_configure_spend_limit",kind:"scalar",T:8
    }, {
      no:7,name:"limit_type",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"has_pending_request",kind:"scalar",T:8
    }, {
      no:9,name:"allowed_model_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:10,name:"allowed_model_tags",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Fss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fss, e, t)
  }
}, X9g=class Oss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCreditGrantsBalanceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Oss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oss, e, t)
  }
}, e8g=class Uss extends ie{
  constructor(e){
    super(), this.hasCreditGrants=!1, this.creditBalanceCents=Eo.zero, this.totalCents=Eo.zero, this.usedCents=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCreditGrantsBalanceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"has_credit_grants",kind:"scalar",T:8
    }, {
      no:2,name:"credit_balance_cents",kind:"scalar",T:3
    }, {
      no:3,name:"total_cents",kind:"scalar",T:3
    }, {
      no:4,name:"used_cents",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Uss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uss, e, t)
  }
}, t8g=class $ss extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAdvancedAnalyticsEnabledRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new $ss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ss, e, t)
  }
}, n8g=class qss extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAdvancedAnalyticsEnabledResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new qss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qss, e, t)
  }
}, i8g=class Hss extends ie{
  constructor(e){
    super(), this.usageUuid="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTokenUsageRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"usage_uuid",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Hss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hss, e, t)
  }
}, r8g=class Jss extends ie{
  constructor(e){
    super(), this.inputTokens=0, this.outputTokens=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTokenUsageResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"input_tokens",kind:"scalar",T:5
    }, {
      no:2,name:"output_tokens",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Jss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jss, e, t)
  }
}, s8g=class Gss extends ie{
  constructor(e){
    super(), this.teamId=0, this.bedrockIamRole="", this.region="", this.modelId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ValidateBedrockIamRoleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"bedrock_iam_role",kind:"scalar",T:9
    }, {
      no:3,name:"region",kind:"scalar",T:9
    }, {
      no:4,name:"model_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Gss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gss, e, t)
  }
}, o8g=class Wss extends ie{
  constructor(e){
    super(), this.success=!1, this.errorMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ValidateBedrockIamRoleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"error_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Wss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wss, e, t)
  }
}, a8g=class Qss extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteBedrockIamRoleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Qss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qss, e, t)
  }
}, c8g=class jss extends ie{
  constructor(e){
    super(), this.success=!1, this.errorMessage="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteBedrockIamRoleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"error_message",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jss, e, t)
  }
}, l8g=class zss extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamSpendRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"page",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"page_size",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"sort_by",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"sort_direction",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"search_term",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"directory_group_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zss, e, t)
  }
}, u8g=class Vss extends ie{
  constructor(e){
    super(), this.role=z3.UNSPECIFIED, this.count=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamRoleCount"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"role",kind:"enum",T:v.getEnumType(z3)
    }, {
      no:2,name:"count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Vss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vss, e, t)
  }
}, d8g=class Kss extends ie{
  constructor(e){
    super(), this.teamMemberSpend=[], this.subscriptionCycleStart=Eo.zero, this.totalMembers=0, this.totalPages=0, this.totalByRole=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamSpendResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_member_spend",kind:"message",T:h8g,repeated:!0
    }, {
      no:2,name:"subscription_cycle_start",kind:"scalar",T:3
    }, {
      no:3,name:"total_members",kind:"scalar",T:5
    }, {
      no:4,name:"total_pages",kind:"scalar",T:5
    }, {
      no:5,name:"total_by_role",kind:"message",T:u8g,repeated:!0
    }, {
      no:6,name:"next_cycle_start",kind:"scalar",T:3,opt:!0
    }, {
      no:7,name:"pooled_limit_dollars",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"limited_user_count",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"max_user_spend_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:10,name:"subscription_limited_users",kind:"scalar",T:5,opt:!0
    }, {
      no:11,name:"has_any_spend_limit_overrides",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"has_any_free_usage",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kss, e, t)
  }
}, h8g=class Yss extends ie{
  constructor(e){
    super(), this.userId=0, this.spendCents=0, this.fastPremiumRequests=0, this.name="", this.email="", this.role=z3.UNSPECIFIED, this.hardLimitOverrideDollars=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamSpendResponse.TeamMemberSpend"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:5
    }, {
      no:2,name:"spend_cents",kind:"scalar",T:5
    }, {
      no:3,name:"fast_premium_requests",kind:"scalar",T:5
    }, {
      no:4,name:"name",kind:"scalar",T:9
    }, {
      no:5,name:"email",kind:"scalar",T:9
    }, {
      no:6,name:"role",kind:"enum",T:v.getEnumType(z3)
    }, {
      no:7,name:"hard_limit_override_dollars",kind:"scalar",T:5
    }, {
      no:8,name:"included_spend_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"overall_spend_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:10,name:"monthly_limit_dollars",kind:"scalar",T:5,opt:!0
    }, {
      no:11,name:"removed_at",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yss, e, t)
  }
}, m8g=class Zss extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCurrentBillingCycleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zss, e, t)
  }
}, p8g=class Xss extends ie{
  constructor(e){
    super(), this.startDateEpochMillis=Eo.zero, this.endDateEpochMillis=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetCurrentBillingCycleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_date_epoch_millis",kind:"scalar",T:3
    }, {
      no:2,name:"end_date_epoch_millis",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Xss().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xss().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xss().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xss, e, t)
  }
}, g8g=class eos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMonthlyBillingCycleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new eos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eos, e, t)
  }
}, f8g=class tos extends ie{
  constructor(e){
    super(), this.startDateEpochMillis=Eo.zero, this.endDateEpochMillis=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMonthlyBillingCycleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_date_epoch_millis",kind:"scalar",T:3
    }, {
      no:2,name:"end_date_epoch_millis",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new tos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tos, e, t)
  }
}, b8g=class nos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new nos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nos, e, t)
  }
}, v8g=class ios extends ie{
  constructor(e){
    super(), this.available=!1, this.enabled=!1, this.prUrls=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"available",kind:"scalar",T:8
    }, {
      no:2,name:"enabled",kind:"scalar",T:8
    }, {
      no:3,name:"pr_urls",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ios().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ios().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ios().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ios, e, t)
  }
}, A8g=class ros extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotAnalyticsV2Request"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_date",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"end_date",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"grouping",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ros().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ros().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ros().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ros, e, t)
  }
}, y8g=class sos extends ie{
  constructor(e){
    super(), this.shouldSeeAnalytics=!1, this.prsReviewedSeries=[], this.bugsFoundSeries=[], this.numRunsSeries=[], this.bugsResolvedSeries=[], this.pctResolutionRate=0, this.uniqueUsersSeries=[], this.uniqueUsersTotal=0, this.highSevResolvedSeries=[], this.mediumSevResolvedSeries=[], this.lowSevResolvedSeries=[], this.autofixPrsMergedSeries=[], this.totalAutofixRuns=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotAnalyticsV2Response"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"should_see_analytics",kind:"scalar",T:8
    }, {
      no:2,name:"prs_reviewed_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:3,name:"bugs_found_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:4,name:"num_runs_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:5,name:"bugs_resolved_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:6,name:"pct_resolution_rate",kind:"scalar",T:1
    }, {
      no:7,name:"unique_users_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:8,name:"unique_users_total",kind:"scalar",T:5
    }, {
      no:9,name:"high_sev_resolved_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:10,name:"medium_sev_resolved_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:11,name:"low_sev_resolved_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:12,name:"autofix_prs_merged_series",kind:"message",T:MNe,repeated:!0
    }, {
      no:13,name:"total_autofix_runs",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new sos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sos, e, t)
  }
}, E2A=class oos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotPRData"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"start_date",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"end_date",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"grouping",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new oos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oos, e, t)
  }
}, MNe=class aos extends ie{
  constructor(e){
    super(), this.date=Eo.zero, this.value=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugbotAnalyticsDataPoint"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"date",kind:"scalar",T:3
    }, {
      no:2,name:"value",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new aos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aos, e, t)
  }
}, w8g=class cos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugBotPRAnalyticsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"github_repo_node_id",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"status",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"github_user_node_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"start_date",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"end_date",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"min_bugs_found",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"limit",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cos, e, t)
  }
}, _8g=class los extends ie{
  constructor(e){
    super(), this.prs=[], this.userOptions=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugBotPRAnalyticsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"prs",kind:"message",T:S8g,repeated:!0
    }, {
      no:3,name:"user_options",kind:"message",T:C8g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new los().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new los().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new los().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(los, e, t)
  }
}, C8g=class uos extends ie{
  constructor(e){
    super(), this.githubUserNodeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PRUserOption"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"github_user_node_id",kind:"scalar",T:9
    }, {
      no:2,name:"github_username",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uos, e, t)
  }
}, S8g=class dos extends ie{
  constructor(e){
    super(), this.githubRepoNodeId="", this.prNumber=0, this.requestTime=Eo.zero, this.totalRuns=0, this.totalBugs=0, this.resolvedBugs=0, this.unresolvedBugs=0, this.isMerged=!1, this.highSevResolvedBugs=0, this.mediumSevResolvedBugs=0, this.lowSevResolvedBugs=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugBotPRAnalytics"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"github_repo_node_id",kind:"scalar",T:9
    }, {
      no:2,name:"pr_number",kind:"scalar",T:5
    }, {
      no:3,name:"request_time",kind:"scalar",T:3
    }, {
      no:4,name:"total_runs",kind:"scalar",T:5
    }, {
      no:5,name:"total_bugs",kind:"scalar",T:5
    }, {
      no:6,name:"resolved_bugs",kind:"scalar",T:5
    }, {
      no:7,name:"unresolved_bugs",kind:"scalar",T:5
    }, {
      no:8,name:"is_merged",kind:"scalar",T:8
    }, {
      no:9,name:"github_username",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"high_sev_resolved_bugs",kind:"scalar",T:5
    }, {
      no:11,name:"medium_sev_resolved_bugs",kind:"scalar",T:5
    }, {
      no:12,name:"low_sev_resolved_bugs",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new dos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dos, e, t)
  }
}, _iu=class hos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGithubInstallationsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:2,name:"include_team_owned_repos",kind:"scalar",T:8,opt:!0
    }, {
      no:3,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"search",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hos, e, t)
  }
}, Ciu=class mos extends ie{
  constructor(e){
    super(), this.installations=[], this.githubConnected=!1, this.teamHasBugbotRepos=!1, this.githubUsernames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGithubInstallationsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installations",kind:"message",T:k8g,repeated:!0
    }, {
      no:2,name:"github_connected",kind:"scalar",T:8
    }, {
      no:3,name:"team_has_bugbot_repos",kind:"scalar",T:8
    }, {
      no:4,name:"github_usernames",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"ghe_hostname",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"ghe_app_slug",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mos, e, t)
  }
}, tfa=class pos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.repoNodeId="", this.owner="", this.name="", this.htmlUrl="", this.archived=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGithubInstallationsResponse.Repository"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"repo_node_id",kind:"scalar",T:9
    }, {
      no:3,name:"owner",kind:"scalar",T:9
    }, {
      no:4,name:"name",kind:"scalar",T:9
    }, {
      no:5,name:"html_url",kind:"scalar",T:9
    }, {
      no:6,name:"settings",kind:"message",T:kiu
    }, {
      no:7,name:"archived",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new pos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pos, e, t)
  }
}, k8g=class gos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.repos=[], this.canModify=!1, this.hasMoreRepos=!1, this.canModifyInstallationSettings=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGithubInstallationsResponse.Installation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"repos",kind:"message",T:tfa,repeated:!0
    }, {
      no:3,name:"settings",kind:"message",T:Siu
    }, {
      no:4,name:"can_modify",kind:"scalar",T:8
    }, {
      no:5,name:"has_more_repos",kind:"scalar",T:8
    }, {
      no:6,name:"total_pages",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"access_error",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"needs_team_scope",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"can_modify_installation_settings",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new gos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gos, e, t)
  }
}, Siu=class fos extends ie{
  constructor(e){
    super(), this.allowlist=[], this.allowlistConfig=fye.UNSPECIFIED, this.runOnlyOnce=!1, this.suppressNoBugsComments=!1, this.disableInlineReviews=!1, this.autoEnableNewRepos=!1, this.isPrSummaryEnabled=!1, this.prSummaryUseComment=!1, this.isLearningEnabled=!1, this.bugbotAutofixMode=B$e.UNSPECIFIED, this.enableDraft=!1, this.failGithubActionOnBugbotFindings=!1, this.bugbotAutofixSeverityFilter=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InstallationSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"allowlist_config",kind:"enum",T:v.getEnumType(fye)
    }, {
      no:3,name:"run_only_once",kind:"scalar",T:8
    }, {
      no:4,name:"suppress_no_bugs_comments",kind:"scalar",T:8
    }, {
      no:5,name:"disable_inline_reviews",kind:"scalar",T:8
    }, {
      no:6,name:"auto_enable_new_repos",kind:"scalar",T:8
    }, {
      no:7,name:"is_pr_summary_enabled",kind:"scalar",T:8
    }, {
      no:8,name:"pr_summary_use_comment",kind:"scalar",T:8
    }, {
      no:9,name:"is_learning_enabled",kind:"scalar",T:8
    }, {
      no:10,name:"bugbot_autofix_mode",kind:"enum",T:v.getEnumType(B$e)
    }, {
      no:11,name:"enable_draft",kind:"scalar",T:8
    }, {
      no:12,name:"fail_github_action_on_bugbot_findings",kind:"scalar",T:8
    }, {
      no:13,name:"bugbot_autofix_severity_filter",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fos, e, t)
  }
}, kiu=class bos extends ie{
  constructor(e){
    super(), this.bugBotEnabled=!1, this.bugBotManualOnly=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RepoSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_bot_enabled",kind:"scalar",T:8
    }, {
      no:2,name:"bug_bot_manual_only",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new bos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bos, e, t)
  }
}, E8g=class vos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.repoNodeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RepoIdentifier"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"repo_node_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vos, e, t)
  }
}, x8g=class Aos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGithubRepoSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repo",kind:"message",T:E8g
    }, {
      no:2,name:"settings",kind:"message",T:kiu
    }, {
      no:3,name:"skip_write_access_check",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Aos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aos, e, t)
  }
}, T8g=class yos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGithubRepoSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new yos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yos, e, t)
  }
}, I8g=class wos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGithubInstallationSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"settings",kind:"message",T:Siu
    }, {
      no:4,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wos, e, t)
  }
}, D8g=class _os extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGithubInstallationSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new _os().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _os().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _os().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_os, e, t)
  }
}, B8g=class Cos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGithubInstallationTeamScopeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Cos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cos, e, t)
  }
}, R8g=class Sos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGithubInstallationTeamScopeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Sos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sos, e, t)
  }
}, P8g=class kos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.repoNodeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StartBugbotBackfillLearningRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"repo_node_id",kind:"scalar",T:9
    }, {
      no:3,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kos, e, t)
  }
}, L8g=class Eos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.StartBugbotBackfillLearningResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Eos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eos, e, t)
  }
}, N8g=class xos extends ie{
  constructor(e){
    super(), this.workflowId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotBackfillStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"workflow_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new xos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xos, e, t)
  }
}, M8g=class Tos extends ie{
  constructor(e){
    super(), this.status=ovi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotBackfillStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"status",kind:"enum",T:v.getEnumType(ovi)
    }, {
      no:2,name:"error_message",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"rules_generated",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Tos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tos, e, t)
  }
}, F8g=class Ios extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.bugBotEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateAllGithubRepoSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"bug_bot_enabled",kind:"scalar",T:8
    }, {
      no:3,name:"total_pages",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"include_all_team_owned_repos",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ios().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ios().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ios().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ios, e, t)
  }
}, O8g=class Dos extends ie{
  constructor(e){
    super(), this.updatedCount=0, this.asyncOperationStarted=!1, this.asyncOperationAlreadyInProgress=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateAllGithubRepoSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"updated_count",kind:"scalar",T:5
    }, {
      no:2,name:"async_operation_started",kind:"scalar",T:8
    }, {
      no:3,name:"async_operation_already_in_progress",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Dos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dos, e, t)
  }
}, U8g=class Bos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.operation=_vi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSelfGithubAllowlistRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"operation",kind:"enum",T:v.getEnumType(_vi)
    }, {
      no:4,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Bos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bos, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.ADD=1]="ADD", n[n.REMOVE=2]="REMOVE"
})(_vi||(_vi={
  
})), v.util.setEnumType(_vi, "aiserver.v1.UpdateSelfGithubAllowlistRequest.Operation", [{
  no:0, name:"OPERATION_UNSPECIFIED"
}, {
  no:1, name:"OPERATION_ADD"
}, {
  no:2, name:"OPERATION_REMOVE"
}
]), $8g=class Ros extends ie{
  constructor(e){
    super(), this.allowlist=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSelfGithubAllowlistResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"allowlist",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ros().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ros().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ros().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ros, e, t)
  }
}, q8g=class Pos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.startPage=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetInstallationReposRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"start_page",kind:"scalar",T:5
    }, {
      no:4,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Pos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pos, e, t)
  }
}, H8g=class Los extends ie{
  constructor(e){
    super(), this.repos=[], this.hasMore=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetInstallationReposResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repos",kind:"message",T:tfa,repeated:!0
    }, {
      no:2,name:"has_more",kind:"scalar",T:8
    }, {
      no:3,name:"access_error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Los().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Los().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Los().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Los, e, t)
  }
}, Eiu=class Nos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FetchAllInstallationReposRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"total_pages",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"include_all_team_owned_repos",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Nos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nos, e, t)
  }
}, xiu=class Mos extends ie{
  constructor(e){
    super(), this.repos=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.FetchAllInstallationReposResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repos",kind:"message",T:tfa,repeated:!0
    }, {
      no:2,name:"access_error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Mos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mos, e, t)
  }
}, J8g=class Fos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetInstallationGithubUsersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:4,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Fos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fos, e, t)
  }
}, nfa=class Oos extends ie{
  constructor(e){
    super(), this.login="", this.nodeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GithubUser"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"login",kind:"scalar",T:9
    }, {
      no:2,name:"node_id",kind:"scalar",T:9
    }, {
      no:3,name:"hostname",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Oos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oos, e, t)
  }
}, G8g=class Uos extends ie{
  constructor(e){
    super(), this.hasPermission=!1, this.permissionSettingsUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GithubPermissionInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"has_permission",kind:"scalar",T:8
    }, {
      no:2,name:"permission_settings_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Uos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uos, e, t)
  }
}, W8g=class $os extends ie{
  constructor(e){
    super(), this.githubUsers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetInstallationGithubUsersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"github_users",kind:"message",T:nfa,repeated:!0
    }, {
      no:2,name:"permission_info",kind:"message",T:G8g,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $os().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $os().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $os().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($os, e, t)
  }
}, Q8g=class qos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserAdminOrganizationsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"ghe_application_uuid",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qos, e, t)
  }
}, j8g=class Hos extends ie{
  constructor(e){
    super(), this.organizations=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserAdminOrganizationsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"organizations",kind:"message",T:z8g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hos, e, t)
  }
}, z8g=class Jos extends ie{
  constructor(e){
    super(), this.login="", this.hostname="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserAdminOrganizationsResponse.Organization"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"login",kind:"scalar",T:9
    }, {
      no:2,name:"hostname",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Jos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jos, e, t)
  }
}, V8g=class Gos extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamGithubUsersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gos, e, t)
  }
}, K8g=class Wos extends ie{
  constructor(e){
    super(), this.users=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamGithubUsersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"users",kind:"message",T:nfa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wos, e, t)
  }
}, Y8g=class Qos extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, this.githubUsers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddGithubUsersToTeamRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"github_users",kind:"message",T:nfa,repeated:!0
    }, {
      no:4,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qos, e, t)
  }
}, Z8g=class jos extends ie{
  constructor(e){
    super(), this.addedUserCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddGithubUsersToTeamResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"added_user_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new jos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jos, e, t)
  }
}, X8g=class zos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserPullRequestsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repository_filter",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"git_application",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"page",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"page_size",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"search_query",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"author_filter",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"state_filter",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"pr_number",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zos, e, t)
  }
}, uV=class Vos extends ie{
  constructor(e){
    super(), this.pullRequests=[], this.hasMore=!1, this.hasGitConnection=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserPullRequestsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pull_requests",kind:"message",T:FNe,repeated:!0
    }, {
      no:2,name:"has_more",kind:"scalar",T:8
    }, {
      no:3,name:"total_count",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"has_git_connection",kind:"scalar",T:8
    }, {
      no:5,name:"current_user_login",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Vos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vos, e, t)
  }
}, e6g=class Kos extends ie{
  constructor(e){
    super(), this.id=Eo.zero, this.nodeId="", this.url="", this.name="", this.description="", this.color="", this.isDefault=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PullRequestLabel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:3
    }, {
      no:2,name:"node_id",kind:"scalar",T:9
    }, {
      no:3,name:"url",kind:"scalar",T:9
    }, {
      no:4,name:"name",kind:"scalar",T:9
    }, {
      no:5,name:"description",kind:"scalar",T:9
    }, {
      no:6,name:"color",kind:"scalar",T:9
    }, {
      no:7,name:"is_default",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Kos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kos, e, t)
  }
}, FNe=class Yos extends ie{
  constructor(e){
    super(), this.number=0, this.title="", this.state="", this.url="", this.repository="", this.createdAt="", this.updatedAt="", this.isDraft=!1, this.author="", this.description="", this.labels=[], this.headRef="", this.baseRef="", this.comments=0, this.reviewComments=0, this.mergedAt="", this.closedAt="", this.descriptionRaw="", this.headSha="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UserPullRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"number",kind:"scalar",T:5
    }, {
      no:2,name:"title",kind:"scalar",T:9
    }, {
      no:3,name:"state",kind:"scalar",T:9
    }, {
      no:4,name:"url",kind:"scalar",T:9
    }, {
      no:5,name:"repository",kind:"scalar",T:9
    }, {
      no:6,name:"created_at",kind:"scalar",T:9
    }, {
      no:7,name:"updated_at",kind:"scalar",T:9
    }, {
      no:8,name:"is_draft",kind:"scalar",T:8
    }, {
      no:9,name:"author",kind:"scalar",T:9
    }, {
      no:10,name:"description",kind:"scalar",T:9
    }, {
      no:11,name:"labels",kind:"message",T:e6g,repeated:!0
    }, {
      no:12,name:"head_ref",kind:"scalar",T:9
    }, {
      no:13,name:"base_ref",kind:"scalar",T:9
    }, {
      no:14,name:"comments",kind:"scalar",T:5
    }, {
      no:15,name:"review_comments",kind:"scalar",T:5
    }, {
      no:16,name:"merged_at",kind:"scalar",T:9
    }, {
      no:17,name:"closed_at",kind:"scalar",T:9
    }, {
      no:18,name:"description_raw",kind:"scalar",T:9
    }, {
      no:19,name:"head_sha",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Yos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yos, e, t)
  }
}, t6g=class Zos extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserReviewRequestsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repository_filter",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"git_application",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"page",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"page_size",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"search_query",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"state_filter",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zos, e, t)
  }
}, n6g=class Xos extends ie{
  constructor(e){
    super(), this.pullRequests=[], this.hasMore=!1, this.hasGitConnection=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserReviewRequestsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pull_requests",kind:"message",T:FNe,repeated:!0
    }, {
      no:2,name:"has_more",kind:"scalar",T:8
    }, {
      no:3,name:"total_count",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"has_git_connection",kind:"scalar",T:8
    }, {
      no:5,name:"current_user_login",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xos().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xos().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xos().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xos, e, t)
  }
}, i6g=class eas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotUserSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new eas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eas, e, t)
  }
}, r6g=class tas extends ie{
  constructor(e){
    super(), this.manualTriggerOnly=!1, this.runOnlyOnce=!1, this.suppressNoBugsComments=!1, this.bugbotAutofixMode=B$e.UNSPECIFIED, this.enableVmRun=!1, this.failGithubActionOnBugbotFindings=!1, this.bugbotAutofixSeverityFilter=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotUserSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"manual_trigger_only",kind:"scalar",T:8
    }, {
      no:2,name:"run_only_once",kind:"scalar",T:8
    }, {
      no:3,name:"suppress_no_bugs_comments",kind:"scalar",T:8
    }, {
      no:4,name:"enable_draft",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"is_pr_summary_enabled",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"bugbot_autofix_mode",kind:"enum",T:v.getEnumType(B$e)
    }, {
      no:7,name:"enable_vm_run",kind:"scalar",T:8
    }, {
      no:8,name:"fail_github_action_on_bugbot_findings",kind:"scalar",T:8
    }, {
      no:9,name:"bugbot_autofix_severity_filter",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tas, e, t)
  }
}, s6g=class nas extends ie{
  constructor(e){
    super(), this.manualTriggerOnly=!1, this.runOnlyOnce=!1, this.suppressNoBugsComments=!1, this.bugbotAutofixMode=B$e.UNSPECIFIED, this.enableVmRun=!1, this.failGithubActionOnBugbotFindings=!1, this.bugbotAutofixSeverityFilter=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugbotUserSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"manual_trigger_only",kind:"scalar",T:8
    }, {
      no:2,name:"run_only_once",kind:"scalar",T:8
    }, {
      no:3,name:"suppress_no_bugs_comments",kind:"scalar",T:8
    }, {
      no:4,name:"enable_draft",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"is_pr_summary_enabled",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"bugbot_autofix_mode",kind:"enum",T:v.getEnumType(B$e)
    }, {
      no:7,name:"enable_vm_run",kind:"scalar",T:8
    }, {
      no:8,name:"fail_github_action_on_bugbot_findings",kind:"scalar",T:8
    }, {
      no:9,name:"bugbot_autofix_severity_filter",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nas, e, t)
  }
}, o6g=class ias extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugbotUserSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ias().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ias().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ias().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ias, e, t)
  }
}, a6g=class ras extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugBotProUserSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ras().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ras().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ras().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ras, e, t)
  }
}, c6g=class sas extends ie{
  constructor(e){
    super(), this.enabled=!1, this.bugbotWasEnabledInThisBillingCycle=!1, this.bugbotUsageTier=RSt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugBotProUserSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }, {
      no:2,name:"bugbot_was_enabled_in_this_billing_cycle",kind:"scalar",T:8
    }, {
      no:3,name:"bugbot_usage_tier",kind:"enum",T:v.getEnumType(RSt)
    }
    ])
  }
  static fromBinary(e, t){
    return new sas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sas, e, t)
  }
}, l6g=class oas extends ie{
  constructor(e){
    super(), this.enabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugBotProUserSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new oas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oas, e, t)
  }
}, u6g=class aas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugBotProUserSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new aas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aas, e, t)
  }
}, ifa=class cas extends ie{
  constructor(e){
    super(), this.bugId="", this.event=wEe.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecordBugbotDeeplinkEventRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bug_id",kind:"scalar",T:9
    }, {
      no:2,name:"event",kind:"enum",T:v.getEnumType(wEe)
    }, {
      no:3,name:"comment_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cas, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.CLICKED=1]="CLICKED", n[n.HANDLED_DIALOG_SHOWN=2]="HANDLED_DIALOG_SHOWN", n[n.HANDLED_CHAT_CREATED=3]="HANDLED_CHAT_CREATED", n[n.ERROR=4]="ERROR", n[n.HANDLED_FIX_IN_WEB=5]="HANDLED_FIX_IN_WEB"
})(wEe||(wEe={
  
})), v.util.setEnumType(wEe, "aiserver.v1.RecordBugbotDeeplinkEventRequest.BugbotDeeplinkEvent", [{
  no:0, name:"BUGBOT_DEEPLINK_EVENT_UNSPECIFIED"
}, {
  no:1, name:"BUGBOT_DEEPLINK_EVENT_CLICKED"
}, {
  no:2, name:"BUGBOT_DEEPLINK_EVENT_HANDLED_DIALOG_SHOWN"
}, {
  no:3, name:"BUGBOT_DEEPLINK_EVENT_HANDLED_CHAT_CREATED"
}, {
  no:4, name:"BUGBOT_DEEPLINK_EVENT_ERROR"
}, {
  no:5, name:"BUGBOT_DEEPLINK_EVENT_HANDLED_FIX_IN_WEB"
}
]), Tiu=class las extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RecordBugbotDeeplinkEventResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new las().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new las().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new las().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(las, e, t)
  }
}, d6g=class uas extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetFilteredUsageEventsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"start_date",kind:"scalar",T:3,opt:!0
    }, {
      no:3,name:"end_date",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"model_id",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"page",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"page_size",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"service_account_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uas, e, t)
  }
}, h6g=class das extends ie{
  constructor(e){
    super(), this.usageEvents=[], this.totalUsageEventsCount=0, this.usageEventsDisplay=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetFilteredUsageEventsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"usage_events",kind:"message",T:Y4c,repeated:!0
    }, {
      no:2,name:"total_usage_events_count",kind:"scalar",T:5
    }, {
      no:3,name:"usage_events_display",kind:"message",T:jOh,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new das().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new das().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new das().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(das, e, t)
  }
}, m6g=class has extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAggregatedUsageEventsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"start_date",kind:"scalar",T:3,opt:!0
    }, {
      no:3,name:"end_date",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"user_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new has().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new has().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new has().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(has, e, t)
  }
}, p6g=class mas extends ie{
  constructor(e){
    super(), this.aggregations=[], this.totalInputTokens=Eo.zero, this.totalOutputTokens=Eo.zero, this.totalCacheWriteTokens=Eo.zero, this.totalCacheReadTokens=Eo.zero, this.totalCostCents=0, this.percentOfBurstUsed=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAggregatedUsageEventsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"aggregations",kind:"message",T:g6g,repeated:!0
    }, {
      no:2,name:"total_input_tokens",kind:"scalar",T:3
    }, {
      no:3,name:"total_output_tokens",kind:"scalar",T:3
    }, {
      no:4,name:"total_cache_write_tokens",kind:"scalar",T:3
    }, {
      no:5,name:"total_cache_read_tokens",kind:"scalar",T:3
    }, {
      no:6,name:"total_cost_cents",kind:"scalar",T:1
    }, {
      no:7,name:"percent_of_burst_used",kind:"scalar",T:1
    }, {
      no:8,name:"total_request_cost",kind:"scalar",T:1,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mas, e, t)
  }
}, g6g=class pas extends ie{
  constructor(e){
    super(), this.modelIntent="", this.inputTokens=Eo.zero, this.outputTokens=Eo.zero, this.cacheWriteTokens=Eo.zero, this.cacheReadTokens=Eo.zero, this.totalCents=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAggregatedUsageEventsResponse.ModelUsageAggregation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"model_intent",kind:"scalar",T:9
    }, {
      no:2,name:"input_tokens",kind:"scalar",T:3
    }, {
      no:3,name:"output_tokens",kind:"scalar",T:3
    }, {
      no:4,name:"cache_write_tokens",kind:"scalar",T:3
    }, {
      no:5,name:"cache_read_tokens",kind:"scalar",T:3
    }, {
      no:6,name:"total_cents",kind:"scalar",T:1
    }, {
      no:7,name:"request_cost",kind:"scalar",T:1,opt:!0
    }, {
      no:8,name:"tier",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new pas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pas, e, t)
  }
}, f6g=class gas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAuditLogsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"start_date",kind:"scalar",T:3,opt:!0
    }, {
      no:3,name:"end_date",kind:"scalar",T:3,opt:!0
    }, {
      no:4,name:"event_type",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"search",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"page",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"page_size",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gas, e, t)
  }
}, b6g=class fas extends ie{
  constructor(e){
    super(), this.events=[], this.totalCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAuditLogsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"events",kind:"message",T:v6g,repeated:!0
    }, {
      no:2,name:"total_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new fas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fas, e, t)
  }
}, v6g=class bas extends ie{
  constructor(e){
    super(), this.id=Eo.zero, this.createdAt="", this.eventId="", this.timestamp="", this.requestId="", this.authId="", this.ghostMode=!1, this.teamId="", this.ipAddress="", this.userEmail="", this.eventType="", this.eventData="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AuditLogEvent"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:3
    }, {
      no:2,name:"created_at",kind:"scalar",T:9
    }, {
      no:3,name:"event_id",kind:"scalar",T:9
    }, {
      no:4,name:"timestamp",kind:"scalar",T:9
    }, {
      no:5,name:"request_id",kind:"scalar",T:9
    }, {
      no:6,name:"auth_id",kind:"scalar",T:9
    }, {
      no:7,name:"ghost_mode",kind:"scalar",T:8
    }, {
      no:8,name:"team_id",kind:"scalar",T:9
    }, {
      no:9,name:"ip_address",kind:"scalar",T:9
    }, {
      no:10,name:"user_email",kind:"scalar",T:9
    }, {
      no:11,name:"event_type",kind:"scalar",T:9
    }, {
      no:12,name:"event_data",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new bas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bas, e, t)
  }
}, A6g=class vas extends ie{
  constructor(e){
    super(), this.inviteCode="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeTeamInviteLinkRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"invite_code",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vas, e, t)
  }
}, y6g=class Aas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeTeamInviteLinkResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Aas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aas, e, t)
  }
}, w6g=class yas extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamInviteLinksRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new yas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yas, e, t)
  }
}, _6g=class was extends ie{
  constructor(e){
    super(), this.inviteLink="", this.validUntil=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InviteLinkInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"invite_link",kind:"scalar",T:9
    }, {
      no:2,name:"valid_until",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new was().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new was().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new was().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(was, e, t)
  }
}, C6g=class _as extends ie{
  constructor(e){
    super(), this.inviteLinks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamInviteLinksResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"invite_links",kind:"message",T:_6g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _as().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _as().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _as().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_as, e, t)
  }
}, S6g=class Cas extends ie{
  constructor(e){
    super(), this.firstName="", this.lastName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUserNameRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"first_name",kind:"scalar",T:9
    }, {
      no:2,name:"last_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Cas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cas, e, t)
  }
}, k6g=class Sas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUserNameResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Sas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sas, e, t)
  }
}, E6g=class kas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListInvoicesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"page",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"page_size",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"status",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kas, e, t)
  }
}, x6g=class Eas extends ie{
  constructor(e){
    super(), this.invoiceId="", this.date=Eo.zero, this.amountCents=0, this.currency="", this.status="", this.hostedInvoiceUrl="", this.refundAmount=0, this.description="", this.isMidMonthInvoice=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InvoiceInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"invoice_id",kind:"scalar",T:9
    }, {
      no:2,name:"date",kind:"scalar",T:3
    }, {
      no:3,name:"amount_cents",kind:"scalar",T:5
    }, {
      no:4,name:"currency",kind:"scalar",T:9
    }, {
      no:5,name:"status",kind:"scalar",T:9
    }, {
      no:6,name:"hosted_invoice_url",kind:"scalar",T:9
    }, {
      no:7,name:"refund_amount",kind:"scalar",T:5
    }, {
      no:8,name:"description",kind:"scalar",T:9
    }, {
      no:9,name:"is_mid_month_invoice",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Eas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eas, e, t)
  }
}, T6g=class xas extends ie{
  constructor(e){
    super(), this.invoices=[], this.total=0, this.totalPages=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListInvoicesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"invoices",kind:"message",T:x6g,repeated:!0
    }, {
      no:2,name:"total",kind:"scalar",T:5
    }, {
      no:3,name:"total_pages",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new xas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xas, e, t)
  }
}, Iiu=class Tas extends ie{
  constructor(e){
    super(), this.inferredPrivacyMode=pm.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserPrivacyModeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"inferred_privacy_mode",kind:"enum",T:v.getEnumType(pm)
    }
    ])
  }
  static fromBinary(e, t){
    return new Tas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tas, e, t)
  }
}, I6g=class Ias extends ie{
  constructor(e){
    super(), this.privacyMode=pm.UNSPECIFIED, this.hoursRemainingInGracePeriod=0, this.isEnforcedByTeam=!1, this.isNotMigratedToServerSourceOfTruth=!1, this.partnerDataShare=!1, this.hasAcknowledgedGracePeriodDisclaimer=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetUserPrivacyModeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"privacy_mode",kind:"enum",T:v.getEnumType(pm)
    }, {
      no:2,name:"hours_remaining_in_grace_period",kind:"scalar",T:5
    }, {
      no:3,name:"is_enforced_by_team",kind:"scalar",T:8
    }, {
      no:4,name:"is_not_migrated_to_server_source_of_truth",kind:"scalar",T:8
    }, {
      no:5,name:"partner_data_share",kind:"scalar",T:8
    }, {
      no:6,name:"has_acknowledged_grace_period_disclaimer",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ias().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ias().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ias().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ias, e, t)
  }
}, Diu=class Das extends ie{
  constructor(e){
    super(), this.privacyMode=pm.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUserPrivacyModeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"privacy_mode",kind:"enum",T:v.getEnumType(pm)
    }
    ])
  }
  static fromBinary(e, t){
    return new Das().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Das().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Das().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Das, e, t)
  }
}, D6g=class Bas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUserPrivacyModeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Bas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bas, e, t)
  }
}, B6g=class Ras extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WebAcknowledgeGracePeriodDisclaimerRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ras().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ras().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ras().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ras, e, t)
  }
}, R6g=class Pas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.WebAcknowledgeGracePeriodDisclaimerResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Pas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pas, e, t)
  }
}, P6g=class Las extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SkipPrivacyModeGracePeriodRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Las().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Las().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Las().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Las, e, t)
  }
}, L6g=class Nas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SkipPrivacyModeGracePeriodResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Nas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nas, e, t)
  }
}, N6g=class Mas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.NeedsPrivacyModeMigrationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Mas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mas, e, t)
  }
}, M6g=class Fas extends ie{
  constructor(e){
    super(), this.needsMigration=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.NeedsPrivacyModeMigrationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"needs_migration",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Fas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fas, e, t)
  }
}, x2A=class Oas extends ie{
  constructor(e){
    super(), this.privacyMode=pm.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SerializablePrivacyMode"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"privacy_mode",kind:"enum",T:v.getEnumType(pm)
    }
    ])
  }
  static fromBinary(e, t){
    return new Oas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oas, e, t)
  }
}, Cvi=class Uas extends ie{
  constructor(e){
    super(), this.privacyMode=pm.UNSPECIFIED, this.isEnforcedByTeam=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PrivacyModeCacheInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"privacy_mode",kind:"enum",T:v.getEnumType(pm)
    }, {
      no:2,name:"is_enforced_by_team",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Uas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uas, e, t)
  }
}, F6g=class $as extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetRemainingRefundsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new $as().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $as().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $as().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($as, e, t)
  }
}, O6g=class qas extends ie{
  constructor(e){
    super(), this.remainingRefunds=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetRemainingRefundsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"remaining_refunds",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new qas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qas, e, t)
  }
}, U6g=class Has extends ie{
  constructor(e){
    super(), this.serviceType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetServiceAccountSpendLimitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"service_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Has().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Has().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Has().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Has, e, t)
  }
}, $6g=class Jas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetServiceAccountSpendLimitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"spend_limit_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"current_spend_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"is_in_free_trial",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"free_trial_expires_at",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Jas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jas, e, t)
  }
}, q6g=class Gas extends ie{
  constructor(e){
    super(), this.serviceType="", this.spendLimitCents=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetServiceAccountSpendLimitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"service_type",kind:"scalar",T:9
    }, {
      no:3,name:"spend_limit_cents",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Gas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gas, e, t)
  }
}, H6g=class Was extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetServiceAccountSpendLimitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Was().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Was().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Was().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Was, e, t)
  }
}, J6g=class Qas extends ie{
  constructor(e){
    super(), this.teamId=0, this.userId=0, this.hardLimitDollars=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUserHardLimitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }, {
      no:3,name:"hard_limit_dollars",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Qas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qas, e, t)
  }
}, G6g=class jas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUserHardLimitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new jas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jas, e, t)
  }
}, W6g=class zas extends ie{
  constructor(e){
    super(), this.teamId=0, this.userId=0, this.monthlyLimitDollars=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUserMonthlyLimitRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"user_id",kind:"scalar",T:5
    }, {
      no:3,name:"monthly_limit_dollars",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new zas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zas, e, t)
  }
}, Q6g=class Vas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetUserMonthlyLimitResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Vas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vas, e, t)
  }
}, j6g=class Kas extends ie{
  constructor(e){
    super(), this.optOut=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ToggleMarketingEmailOptRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"opt_out",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Kas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kas, e, t)
  }
}, z6g=class Yas extends ie{
  constructor(e){
    super(), this.optedOut=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ToggleMarketingEmailOptResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"opted_out",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Yas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yas, e, t)
  }
}, V6g=class Zas extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMarketingEmailOptRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zas, e, t)
  }
}, K6g=class Xas extends ie{
  constructor(e){
    super(), this.optedOut=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetMarketingEmailOptResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"opted_out",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Xas().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xas().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xas().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xas, e, t)
  }
}, Y6g=class ecs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGlobalLeaderboardOptInRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ecs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ecs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ecs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ecs, e, t)
  }
}, Z6g=class tcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGlobalLeaderboardOptInResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"opted_in",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tcs, e, t)
  }
}, X6g=class ncs extends ie{
  constructor(e){
    super(), this.optedIn=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetGlobalLeaderboardOptInRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"opted_in",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ncs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ncs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ncs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ncs, e, t)
  }
}, eUg=class ics extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SetGlobalLeaderboardOptInResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ics().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ics().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ics().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ics, e, t)
  }
}, tUg=class rcs extends ie{
  constructor(e){
    super(), this.teamId=0, this.newName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamNameRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"new_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new rcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rcs, e, t)
  }
}, nUg=class scs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamNameResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new scs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new scs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new scs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(scs, e, t)
  }
}, iUg=class ocs extends ie{
  constructor(e){
    super(), this.teamId=0, this.dashboardAnalyticsRequiresAdmin=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamDashboardAnalyticsSettingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"dashboard_analytics_requires_admin",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ocs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ocs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ocs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ocs, e, t)
  }
}, rUg=class acs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamDashboardAnalyticsSettingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new acs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new acs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new acs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(acs, e, t)
  }
}, sUg=class ccs extends ie{
  constructor(e){
    super(), this.actor=avi.UNSPECIFIED, this.usePortalCallback=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearAuthUrlRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"actor",kind:"enum",T:v.getEnumType(avi)
    }, {
      no:2,name:"use_portal_callback",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ccs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ccs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ccs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ccs, e, t)
  }
}, oUg=class lcs extends ie{
  constructor(e){
    super(), this.authUrl="", this.csrfToken="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearAuthUrlResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"auth_url",kind:"scalar",T:9
    }, {
      no:2,name:"csrf_token",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new lcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lcs, e, t)
  }
}, aUg=class ucs extends ie{
  constructor(e){
    super(), this.code="", this.state="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConnectLinearCallbackRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code",kind:"scalar",T:9
    }, {
      no:2,name:"state",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ucs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ucs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ucs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ucs, e, t)
  }
}, cUg=class dcs extends ie{
  constructor(e){
    super(), this.successType="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConnectLinearCallbackResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success_type",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new dcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dcs, e, t)
  }
}, lUg=class hcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new hcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hcs, e, t)
  }
}, uUg=class mcs extends ie{
  constructor(e){
    super(), this.status="", this.autodraftingEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"status",kind:"scalar",T:9
    }, {
      no:2,name:"autodrafting_enabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new mcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mcs, e, t)
  }
}, dUg=class pcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DisconnectLinearRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new pcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pcs, e, t)
  }
}, hUg=class gcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DisconnectLinearResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new gcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gcs, e, t)
  }
}, mUg=class fcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearTeamsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new fcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fcs, e, t)
  }
}, pUg=class bcs extends ie{
  constructor(e){
    super(), this.teams=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearTeamsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"teams",kind:"message",T:gUg,repeated:!0
    }, {
      no:2,name:"error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bcs, e, t)
  }
}, gUg=class vcs extends ie{
  constructor(e){
    super(), this.id="", this.key="", this.name="", this.displayName="", this.projects=[], this.labels=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinearTeam"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"key",kind:"scalar",T:9
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"display_name",kind:"scalar",T:9
    }, {
      no:5,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"projects",kind:"message",T:fUg,repeated:!0
    }, {
      no:7,name:"labels",kind:"message",T:Biu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new vcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vcs, e, t)
  }
}, fUg=class Acs extends ie{
  constructor(e){
    super(), this.id="", this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinearProject"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Acs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Acs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Acs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Acs, e, t)
  }
}, bUg=class ycs extends ie{
  constructor(e){
    super(), this.projectId="", this.runOption=yEe.UNSPECIFIED, this.conditions="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinearProjectSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"project_id",kind:"scalar",T:9
    }, {
      no:2,name:"run_option",kind:"enum",T:v.getEnumType(yEe)
    }, {
      no:3,name:"conditions",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ycs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ycs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ycs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ycs, e, t)
  }
}, vUg=class wcs extends ie{
  constructor(e){
    super(), this.linearTeamId="", this.defaultRunOption=yEe.UNSPECIFIED, this.projectSettings=[], this.defaultConditions="", this.labelFilterMode=PSt.UNSPECIFIED, this.requiredLabelIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinearTeamSettings"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"linear_team_id",kind:"scalar",T:9
    }, {
      no:2,name:"default_run_option",kind:"enum",T:v.getEnumType(yEe)
    }, {
      no:3,name:"project_settings",kind:"message",T:bUg,repeated:!0
    }, {
      no:4,name:"default_conditions",kind:"scalar",T:9
    }, {
      no:5,name:"label_filter_mode",kind:"enum",T:v.getEnumType(PSt)
    }, {
      no:6,name:"required_label_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"autorun_as_user_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wcs, e, t)
  }
}, AUg=class _cs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _cs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _cs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _cs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_cs, e, t)
  }
}, yUg=class Ccs extends ie{
  constructor(e){
    super(), this.teamSettings=[], this.isTeamSettings=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_settings",kind:"message",T:vUg,repeated:!0
    }, {
      no:2,name:"is_team_settings",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Ccs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ccs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ccs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ccs, e, t)
  }
}, wUg=class Scs extends ie{
  constructor(e){
    super(), this.linearTeamId="", this.defaultRunOption=yEe.UNSPECIFIED, this.defaultConditions="", this.labelFilterMode=PSt.UNSPECIFIED, this.requiredLabelIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateLinearTeamSettingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"linear_team_id",kind:"scalar",T:9
    }, {
      no:3,name:"default_run_option",kind:"enum",T:v.getEnumType(yEe)
    }, {
      no:4,name:"default_conditions",kind:"scalar",T:9
    }, {
      no:5,name:"label_filter_mode",kind:"enum",T:v.getEnumType(PSt)
    }, {
      no:6,name:"required_label_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:7,name:"autorun_as_user_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Scs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Scs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Scs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Scs, e, t)
  }
}, _Ug=class kcs extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateLinearTeamSettingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new kcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kcs, e, t)
  }
}, CUg=class Ecs extends ie{
  constructor(e){
    super(), this.linearTeamId="", this.projectId="", this.runOption=yEe.UNSPECIFIED, this.conditions="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateLinearProjectSettingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"linear_team_id",kind:"scalar",T:9
    }, {
      no:3,name:"project_id",kind:"scalar",T:9
    }, {
      no:4,name:"run_option",kind:"enum",T:v.getEnumType(yEe)
    }, {
      no:5,name:"conditions",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ecs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ecs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ecs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ecs, e, t)
  }
}, SUg=class xcs extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateLinearProjectSettingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new xcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xcs, e, t)
  }
}, Biu=class Tcs extends ie{
  constructor(e){
    super(), this.id="", this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinearLabel"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"color",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Tcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tcs, e, t)
  }
}, kUg=class Ics extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearLabelsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ics().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ics().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ics().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ics, e, t)
  }
}, EUg=class Dcs extends ie{
  constructor(e){
    super(), this.labels=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearLabelsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"labels",kind:"message",T:Biu,repeated:!0
    }, {
      no:2,name:"error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Dcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dcs, e, t)
  }
}, Riu=class Bcs extends ie{
  constructor(e){
    super(), this.orderBy=jhn.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearIssuesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"linear_team_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"search_query",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"include_completed",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"include_archived",kind:"scalar",T:8,opt:!0
    }, {
      no:6,name:"first",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"after",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"order_by",kind:"enum",T:v.getEnumType(jhn)
    }, {
      no:9,name:"assigned_to_me_only",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Bcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bcs, e, t)
  }
}, xUg=class Rcs extends ie{
  constructor(e){
    super(), this.issues=[], this.hasMore=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetLinearIssuesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"issues",kind:"message",T:TUg,repeated:!0
    }, {
      no:2,name:"next_cursor",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"has_more",kind:"scalar",T:8
    }, {
      no:4,name:"error",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rcs, e, t)
  }
}, TUg=class Pcs extends ie{
  constructor(e){
    super(), this.id="", this.identifier="", this.title="", this.labelIds=[], this.archived=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LinearIssue"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"identifier",kind:"scalar",T:9
    }, {
      no:3,name:"title",kind:"scalar",T:9
    }, {
      no:4,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"state_id",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"state_name",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"state_type",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"team_id",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"project_id",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"project_name",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"assignee_id",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"assignee_name",kind:"scalar",T:9,opt:!0
    }, {
      no:13,name:"label_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:14,name:"priority",kind:"scalar",T:5,opt:!0
    }, {
      no:15,name:"archived",kind:"scalar",T:8
    }, {
      no:16,name:"created_at",kind:"scalar",T:3,opt:!0
    }, {
      no:17,name:"updated_at",kind:"scalar",T:3,opt:!0
    }, {
      no:18,name:"url",kind:"scalar",T:9,opt:!0
    }, {
      no:19,name:"due_date",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Pcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pcs, e, t)
  }
}, IUg=class Lcs extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackUserSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Lcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lcs, e, t)
  }
}, DUg=class Ncs extends ie{
  constructor(e){
    super(), this.hasSlackAuth=!1, this.defaultRepo="", this.defaultBranch="", this.defaultModel="", this.canShow=!1, this.openPrByDefault=!1, this.ciFailureFollowupEnabled=!1, this.branchPrefix="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackUserSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"has_slack_auth",kind:"scalar",T:8
    }, {
      no:2,name:"default_repo",kind:"scalar",T:9
    }, {
      no:3,name:"default_branch",kind:"scalar",T:9
    }, {
      no:4,name:"default_model",kind:"scalar",T:9
    }, {
      no:5,name:"can_show",kind:"scalar",T:8
    }, {
      no:6,name:"open_pr_by_default",kind:"scalar",T:8
    }, {
      no:7,name:"use_github_app_for_auto_draft_prs",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"ci_failure_followup_enabled",kind:"scalar",T:8
    }, {
      no:9,name:"branch_prefix",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ncs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ncs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ncs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ncs, e, t)
  }
}, BUg=class Mcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UnlinkSlackAccessRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Mcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mcs, e, t)
  }
}, RUg=class Fcs extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UnlinkSlackAccessResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Fcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fcs, e, t)
  }
}, PUg=class Ocs extends ie{
  constructor(e){
    super(), this.teamId=0, this.defaultRepo="", this.defaultBranch="", this.defaultModel="", this.openPrByDefault=!1, this.ciFailureFollowupEnabled=!1, this.branchPrefix="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSlackUserSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"default_repo",kind:"scalar",T:9
    }, {
      no:3,name:"default_branch",kind:"scalar",T:9
    }, {
      no:4,name:"default_model",kind:"scalar",T:9
    }, {
      no:5,name:"open_pr_by_default",kind:"scalar",T:8
    }, {
      no:6,name:"use_github_app_for_auto_draft_prs",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"ci_failure_followup_enabled",kind:"scalar",T:8
    }, {
      no:8,name:"branch_prefix",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ocs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ocs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ocs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ocs, e, t)
  }
}, LUg=class Ucs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSlackUserSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ucs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ucs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ucs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ucs, e, t)
  }
}, rfa=class $cs extends ie{
  constructor(e){
    super(), this.id=0, this.pattern="", this.repo="", this.isTeamRule=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlackRepoRoutingRule"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"pattern",kind:"scalar",T:9
    }, {
      no:3,name:"repo",kind:"scalar",T:9
    }, {
      no:4,name:"is_team_rule",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new $cs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $cs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $cs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($cs, e, t)
  }
}, NUg=class qcs extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackRepoRoutingRulesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new qcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qcs, e, t)
  }
}, MUg=class Hcs extends ie{
  constructor(e){
    super(), this.rules=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSlackRepoRoutingRulesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rules",kind:"message",T:rfa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hcs, e, t)
  }
}, FUg=class Jcs extends ie{
  constructor(e){
    super(), this.teamId=0, this.pattern="", this.repo="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateSlackRepoRoutingRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"pattern",kind:"scalar",T:9
    }, {
      no:3,name:"repo",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Jcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jcs, e, t)
  }
}, OUg=class Gcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateSlackRepoRoutingRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule",kind:"message",T:rfa
    }
    ])
  }
  static fromBinary(e, t){
    return new Gcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gcs, e, t)
  }
}, UUg=class Wcs extends ie{
  constructor(e){
    super(), this.teamId=0, this.ruleId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteSlackRepoRoutingRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"rule_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Wcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wcs, e, t)
  }
}, $Ug=class Qcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteSlackRepoRoutingRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Qcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qcs, e, t)
  }
}, qUg=class jcs extends ie{
  constructor(e){
    super(), this.teamId=0, this.ruleId="", this.pattern="", this.repo="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSlackRepoRoutingRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"rule_id",kind:"scalar",T:9
    }, {
      no:3,name:"pattern",kind:"scalar",T:9
    }, {
      no:4,name:"repo",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new jcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jcs, e, t)
  }
}, HUg=class zcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSlackRepoRoutingRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule",kind:"message",T:rfa
    }
    ])
  }
  static fromBinary(e, t){
    return new zcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zcs, e, t)
  }
}, Piu=class Vcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsOnNewPricingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Vcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vcs, e, t)
  }
}, JUg=class Kcs extends ie{
  constructor(e){
    super(), this.isOnNewPricing=!1, this.isOptedOut=!1, this.hasAutoSpillover=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsOnNewPricingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_on_new_pricing",kind:"scalar",T:8
    }, {
      no:2,name:"is_opted_out",kind:"scalar",T:8
    }, {
      no:3,name:"has_auto_spillover",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Kcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kcs, e, t)
  }
}, GUg=class Ycs extends ie{
  constructor(e){
    super(), this.checkpoints={
      
    }, this.isTeamAdmin=!1, this.isLoading=!1, this.isPrivacyModeLoading=!1, this.isGithubLoading=!1, this.isUsagePricingLoading=!1, this.triggeredByGithubConnect=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogSlackbotAuthConversionFunnelRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"checkpoints",kind:"map",K:9,V:{
        kind:"scalar",T:8
      }
    }, {
      no:2,name:"privacy_mode",kind:"enum",T:v.getEnumType(pm),opt:!0
    }, {
      no:3,name:"is_team_admin",kind:"scalar",T:8
    }, {
      no:4,name:"is_loading",kind:"scalar",T:8
    }, {
      no:5,name:"is_privacy_mode_loading",kind:"scalar",T:8
    }, {
      no:6,name:"is_github_loading",kind:"scalar",T:8
    }, {
      no:7,name:"is_usage_pricing_loading",kind:"scalar",T:8
    }, {
      no:8,name:"triggered_by_github_connect",kind:"scalar",T:8
    }, {
      no:9,name:"scm_provider",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ycs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ycs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ycs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ycs, e, t)
  }
}, WUg=class Zcs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogSlackbotAuthConversionFunnelResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zcs, e, t)
  }
}, QUg=class Xcs extends ie{
  constructor(e){
    super(), this.origin=Svi.UNSPECIFIED, this.skipSetupFlow=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogClickedConnectSlackRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"origin",kind:"enum",T:v.getEnumType(Svi)
    }, {
      no:2,name:"skip_setup_flow",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Xcs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xcs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xcs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xcs, e, t)
  }
}, (function(n){
  n[n.UNSPECIFIED=0]="UNSPECIFIED", n[n.APP=1]="APP", n[n.WEBSITE=2]="WEBSITE", n[n.SLACK=3]="SLACK", n[n.PUBLIC_URL=4]="PUBLIC_URL"
})(Svi||(Svi={
  
})), v.util.setEnumType(Svi, "aiserver.v1.LogClickedConnectSlackRequest.Origin", [{
  no:0, name:"ORIGIN_UNSPECIFIED"
}, {
  no:1, name:"ORIGIN_APP"
}, {
  no:2, name:"ORIGIN_WEBSITE"
}, {
  no:3, name:"ORIGIN_SLACK"
}, {
  no:4, name:"ORIGIN_PUBLIC_URL"
}
]), jUg=class els extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.LogClickedConnectSlackResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new els().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new els().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new els().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(els, e, t)
  }
}, zUg=class tls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckUserApiKeyAccessRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new tls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tls, e, t)
  }
}, VUg=class nls extends ie{
  constructor(e){
    super(), this.hasAccess=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckUserApiKeyAccessResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"has_access",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new nls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nls, e, t)
  }
}, KUg=class ils extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsAllowedFreeTrialUsageRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ils().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ils().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ils().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ils, e, t)
  }
}, YUg=class rls extends ie{
  constructor(e){
    super(), this.isAllowed=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsAllowedFreeTrialUsageResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_allowed",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new rls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rls, e, t)
  }
}, ZUg=class sls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsNextSetupRunFreeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new sls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sls, e, t)
  }
}, XUg=class ols extends ie{
  constructor(e){
    super(), this.isFree=!1, this.remainingRuns=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IsNextSetupRunFreeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"is_free",kind:"scalar",T:8
    }, {
      no:2,name:"remaining_runs",kind:"scalar",T:13
    }
    ])
  }
  static fromBinary(e, t){
    return new ols().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ols().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ols().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ols, e, t)
  }
}, e$g=class als extends ie{
  constructor(e){
    super(), this.name="", this.id=0, this.memberCount=0, this.hardLimitPerUserDollars=0, this.externalId="", this.perUserMonthlyLimitDollars=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DirectoryGroup"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"id",kind:"scalar",T:5
    }, {
      no:3,name:"member_count",kind:"scalar",T:5
    }, {
      no:4,name:"hard_limit_per_user_dollars",kind:"scalar",T:5
    }, {
      no:5,name:"auto_run_controls",kind:"message",T:vvi
    }, {
      no:6,name:"external_id",kind:"scalar",T:9
    }, {
      no:7,name:"per_user_monthly_limit_dollars",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new als().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new als().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new als().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(als, e, t)
  }
}, t$g=class cls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDirectoryGroupsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new cls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cls, e, t)
  }
}, n$g=class lls extends ie{
  constructor(e){
    super(), this.directoryGroups=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDirectoryGroupsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"directory_groups",kind:"message",T:e$g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lls, e, t)
  }
}, i$g=class uls extends ie{
  constructor(e){
    super(), this.directoryGroupId=0, this.perUserMonthlyLimitDollars=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateDirectoryGroupSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"directory_group_id",kind:"scalar",T:5
    }, {
      no:2,name:"hard_limit_per_user_dollars",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"per_user_monthly_limit_dollars",kind:"scalar",T:5
    }, {
      no:3,name:"auto_run_controls",kind:"message",T:vvi
    }
    ])
  }
  static fromBinary(e, t){
    return new uls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uls, e, t)
  }
}, r$g=class dls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateDirectoryGroupSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new dls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dls, e, t)
  }
}, sfa=class hls extends ie{
  constructor(e){
    super(), this.day=Eo.zero, this.spendCents=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DailySpendPoint"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"day",kind:"scalar",T:3
    }, {
      no:2,name:"spend_cents",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new hls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hls, e, t)
  }
}, s$g=class mls extends ie{
  constructor(e){
    super(), this.periodStartMs=Eo.zero, this.periodEndMs=Eo.zero, this.groupBy=cvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDailySpendByCategoryRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"period_start_ms",kind:"scalar",T:3
    }, {
      no:4,name:"period_end_ms",kind:"scalar",T:3
    }, {
      no:5,name:"group_by",kind:"enum",T:v.getEnumType(cvi)
    }, {
      no:6,name:"spend_type",kind:"enum",T:v.getEnumType(zga),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mls, e, t)
  }
}, o$g=class pls extends ie{
  constructor(e){
    super(), this.day=Eo.zero, this.category="", this.spendCents=0, this.totalTokens=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DailySpendByCategory"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"day",kind:"scalar",T:3
    }, {
      no:2,name:"category",kind:"scalar",T:9
    }, {
      no:3,name:"spend_cents",kind:"scalar",T:5
    }, {
      no:4,name:"total_tokens",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new pls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pls, e, t)
  }
}, a$g=class gls extends ie{
  constructor(e){
    super(), this.dailySpend=[], this.categories=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetDailySpendByCategoryResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"daily_spend",kind:"message",T:o$g,repeated:!0
    }, {
      no:2,name:"categories",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gls, e, t)
  }
}, Qtt=class fls extends ie{
  constructor(e){
    super(), this.id=0, this.name="", this.teamId=0, this.memberCount=0, this.createdAt=Eo.zero, this.updatedAt=Eo.zero, this.type=ZZ.UNSPECIFIED, this.members=[], this.formerMembers=[], this.dailySpend=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Group"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"team_id",kind:"scalar",T:5
    }, {
      no:4,name:"directory_group_id",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"member_count",kind:"scalar",T:5
    }, {
      no:6,name:"created_at",kind:"scalar",T:3
    }, {
      no:7,name:"updated_at",kind:"scalar",T:3
    }, {
      no:8,name:"type",kind:"enum",T:v.getEnumType(ZZ)
    }, {
      no:9,name:"members",kind:"message",T:kvi,repeated:!0
    }, {
      no:10,name:"spend_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:11,name:"directory_group_name",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"former_members",kind:"message",T:kvi,repeated:!0
    }, {
      no:13,name:"daily_spend",kind:"message",T:sfa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fls, e, t)
  }
}, kvi=class bls extends ie{
  constructor(e){
    super(), this.userId=0, this.name="", this.email="", this.joinedAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GroupMember"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:5
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"email",kind:"scalar",T:9
    }, {
      no:4,name:"joined_at",kind:"scalar",T:3
    }, {
      no:5,name:"spend_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"left_at",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bls, e, t)
  }
}, c$g=class vls extends ie{
  constructor(e){
    super(), this.serviceAccountId="", this.name="", this.serviceType="", this.spendCents=0, this.dailySpend=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ServiceAccountSpendInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"service_account_id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"service_type",kind:"scalar",T:9
    }, {
      no:4,name:"spend_cents",kind:"scalar",T:5
    }, {
      no:5,name:"daily_spend",kind:"message",T:sfa,repeated:!0
    }, {
      no:6,name:"creator_name",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"created_at",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new vls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vls, e, t)
  }
}, l$g=class Als extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGroupsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }, {
      no:3,name:"reference_date",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Als().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Als().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Als().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Als, e, t)
  }
}, u$g=class yls extends ie{
  constructor(e){
    super(), this.groups=[], this.unassignedMembers=[], this.teamDailySpend=[], this.serviceAccounts=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGroupsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"groups",kind:"message",T:Qtt,repeated:!0
    }, {
      no:2,name:"unassigned_members",kind:"message",T:kvi,repeated:!0
    }, {
      no:3,name:"unassigned_group",kind:"message",T:Qtt,opt:!0
    }, {
      no:4,name:"cycle_start",kind:"scalar",T:3,opt:!0
    }, {
      no:5,name:"cycle_end",kind:"scalar",T:3,opt:!0
    }, {
      no:6,name:"team_daily_spend",kind:"message",T:sfa,repeated:!0
    }, {
      no:7,name:"service_accounts",kind:"message",T:c$g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yls, e, t)
  }
}, d$g=class wls extends ie{
  constructor(e){
    super(), this.groupId=0, this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGroupMembersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wls, e, t)
  }
}, h$g=class _ls extends ie{
  constructor(e){
    super(), this.members=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGroupMembersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"members",kind:"message",T:kvi,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _ls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ls, e, t)
  }
}, m$g=class Cls extends ie{
  constructor(e){
    super(), this.teamId=0, this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateGroupRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"directory_group_id",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Cls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cls, e, t)
  }
}, p$g=class Sls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateGroupResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group",kind:"message",T:Qtt
    }
    ])
  }
  static fromBinary(e, t){
    return new Sls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sls, e, t)
  }
}, g$g=class kls extends ie{
  constructor(e){
    super(), this.groupId=0, this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGroupRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"name",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }, {
      no:5,name:"directory_group_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kls, e, t)
  }
}, f$g=class Els extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateGroupResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group",kind:"message",T:Qtt
    }
    ])
  }
  static fromBinary(e, t){
    return new Els().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Els().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Els().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Els, e, t)
  }
}, b$g=class xls extends ie{
  constructor(e){
    super(), this.groupId=0, this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteGroupRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xls, e, t)
  }
}, v$g=class Tls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteGroupResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Tls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tls, e, t)
  }
}, A$g=class Ils extends ie{
  constructor(e){
    super(), this.groupId=0, this.teamId=0, this.userIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddGroupMembersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"user_ids",kind:"scalar",T:5,repeated:!0
    }, {
      no:4,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ils().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ils().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ils().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ils, e, t)
  }
}, y$g=class Dls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddGroupMembersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group",kind:"message",T:Qtt
    }
    ])
  }
  static fromBinary(e, t){
    return new Dls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dls, e, t)
  }
}, w$g=class Bls extends ie{
  constructor(e){
    super(), this.groupId=0, this.teamId=0, this.userIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveGroupMembersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"user_ids",kind:"scalar",T:5,repeated:!0
    }, {
      no:4,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Bls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bls, e, t)
  }
}, _$g=class Rls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveGroupMembersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group",kind:"message",T:Qtt
    }
    ])
  }
  static fromBinary(e, t){
    return new Rls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rls, e, t)
  }
}, C$g=class Pls extends ie{
  constructor(e){
    super(), this.email="", this.groupName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GroupAssignment"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"email",kind:"scalar",T:9
    }, {
      no:2,name:"group_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Pls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pls, e, t)
  }
}, S$g=class Lls extends ie{
  constructor(e){
    super(), this.teamId=0, this.assignments=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BulkAssignGroupMembersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"assignments",kind:"message",T:C$g,repeated:!0
    }, {
      no:3,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lls, e, t)
  }
}, k$g=class Nls extends ie{
  constructor(e){
    super(), this.email="", this.groupName="", this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AssignmentResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"email",kind:"scalar",T:9
    }, {
      no:2,name:"group_name",kind:"scalar",T:9
    }, {
      no:3,name:"success",kind:"scalar",T:8
    }, {
      no:4,name:"error_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Nls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nls, e, t)
  }
}, E$g=class Mls extends ie{
  constructor(e){
    super(), this.createdGroups=[], this.results=[], this.successCount=0, this.errorCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BulkAssignGroupMembersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"created_groups",kind:"scalar",T:9,repeated:!0
    }, {
      no:2,name:"results",kind:"message",T:k$g,repeated:!0
    }, {
      no:3,name:"success_count",kind:"scalar",T:5
    }, {
      no:4,name:"error_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Mls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mls, e, t)
  }
}, x$g=class Fls extends ie{
  constructor(e){
    super(), this.groupId=0, this.teamId=0, this.directoryGroupId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PreviewAttachGroupToDirectoryRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"directory_group_id",kind:"scalar",T:5
    }, {
      no:4,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Fls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fls, e, t)
  }
}, T$g=class Ols extends ie{
  constructor(e){
    super(), this.userId=0, this.email="", this.name="", this.changeType=lvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GroupMemberChange"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:5
    }, {
      no:2,name:"email",kind:"scalar",T:9
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"change_type",kind:"enum",T:v.getEnumType(lvi)
    }
    ])
  }
  static fromBinary(e, t){
    return new Ols().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ols().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ols().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ols, e, t)
  }
}, I$g=class Uls extends ie{
  constructor(e){
    super(), this.userId=0, this.email="", this.name="", this.currentGroupId=0, this.currentGroupName="", this.isCurrentGroupScim=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ConflictedUser"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:5
    }, {
      no:2,name:"email",kind:"scalar",T:9
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"current_group_id",kind:"scalar",T:5
    }, {
      no:5,name:"current_group_name",kind:"scalar",T:9
    }, {
      no:6,name:"is_current_group_scim",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Uls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uls, e, t)
  }
}, D$g=class $ls extends ie{
  constructor(e){
    super(), this.changes=[], this.membersToAdd=0, this.membersToRemove=0, this.directoryGroupName="", this.membersSkippedDueToConflict=0, this.conflictedUsers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PreviewAttachGroupToDirectoryResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"changes",kind:"message",T:T$g,repeated:!0
    }, {
      no:2,name:"members_to_add",kind:"scalar",T:5
    }, {
      no:3,name:"members_to_remove",kind:"scalar",T:5
    }, {
      no:4,name:"directory_group_name",kind:"scalar",T:9
    }, {
      no:5,name:"members_skipped_due_to_conflict",kind:"scalar",T:5
    }, {
      no:6,name:"conflicted_users",kind:"message",T:I$g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $ls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ls, e, t)
  }
}, B$g=class qls extends ie{
  constructor(e){
    super(), this.groupId=0, this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DetachGroupFromDirectoryRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qls, e, t)
  }
}, R$g=class Hls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DetachGroupFromDirectoryResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"group",kind:"message",T:Qtt
    }
    ])
  }
  static fromBinary(e, t){
    return new Hls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hls, e, t)
  }
}, P$g=class Jls extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetScimConflictsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"type",kind:"enum",T:v.getEnumType(ZZ),opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Jls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jls, e, t)
  }
}, L$g=class Gls extends ie{
  constructor(e){
    super(), this.directoryGroupId=0, this.directoryGroupName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ScimConflictDirectoryGroup"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"directory_group_id",kind:"scalar",T:5
    }, {
      no:2,name:"directory_group_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Gls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gls, e, t)
  }
}, N$g=class Wls extends ie{
  constructor(e){
    super(), this.userId=0, this.email="", this.name="", this.directoryGroups=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ScimConflictUser"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:5
    }, {
      no:2,name:"email",kind:"scalar",T:9
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"directory_groups",kind:"message",T:L$g,repeated:!0
    }, {
      no:5,name:"current_billing_group_id",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"current_billing_group_name",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"current_billing_group_directory_group_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wls, e, t)
  }
}, M$g=class Qls extends ie{
  constructor(e){
    super(), this.conflictedUsers=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetScimConflictsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conflicted_users",kind:"message",T:N$g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qls, e, t)
  }
}, F$g=class jls extends ie{
  constructor(e){
    super(), this.teamId=0, this.requestType=LSt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.NotifyTeamAdminsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"request_type",kind:"enum",T:v.getEnumType(LSt)
    }
    ])
  }
  static fromBinary(e, t){
    return new jls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jls, e, t)
  }
}, O$g=class zls extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.NotifyTeamAdminsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"error_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zls, e, t)
  }
}, U$g=class Vls extends ie{
  constructor(e){
    super(), this.teamId=0, this.requestType=LSt.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAdminNotificationStatusRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"request_type",kind:"enum",T:v.getEnumType(LSt)
    }
    ])
  }
  static fromBinary(e, t){
    return new Vls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vls, e, t)
  }
}, $$g=class Kls extends ie{
  constructor(e){
    super(), this.canSend=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetAdminNotificationStatusResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"can_send",kind:"scalar",T:8
    }, {
      no:2,name:"last_sent_timestamp",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kls, e, t)
  }
}, q$g=class Yls extends ie{
  constructor(e){
    super(), this.slackTeamId="", this.slackUserId="", this.setupPrerequisitesComplete=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CompletedLinkSlackAccountRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"slack_team_id",kind:"scalar",T:9
    }, {
      no:2,name:"slack_user_id",kind:"scalar",T:9
    }, {
      no:3,name:"setup_prerequisites_complete",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Yls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yls, e, t)
  }
}, H$g=class Zls extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CompletedLinkSlackAccountResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zls, e, t)
  }
}, J$g=class Xls extends ie{
  constructor(e){
    super(), this.optIn=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.OptOutNewPricingRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"opt_in",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Xls().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xls().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xls().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xls, e, t)
  }
}, G$g=class eus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.OptOutNewPricingResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new eus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eus, e, t)
  }
}, W$g=class tus extends ie{
  constructor(e){
    super(), this.teamId=0, this.optOut=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamPrivacyModeMigrationOptOutRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"opt_out",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new tus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tus, e, t)
  }
}, Q$g=class nus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamPrivacyModeMigrationOptOutResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new nus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nus, e, t)
  }
}, j$g=class ius extends ie{
  constructor(e){
    super(), this.message="", this.version="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SubmitFeedbackRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"message",kind:"scalar",T:9
    }, {
      no:2,name:"version",kind:"scalar",T:9
    }, {
      no:3,name:"last_agent_req_id",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"os",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"terminal",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"shell",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ius().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ius().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ius().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ius, e, t)
  }
}, z$g=class rus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SubmitFeedbackResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new rus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rus, e, t)
  }
}, V$g=class sus extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamBugbotSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new sus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sus, e, t)
  }
}, K$g=class ous extends ie{
  constructor(e){
    super(), this.githubUsername="", this.firstReviewTimestamp=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugbotLicenseUsage"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"github_username",kind:"scalar",T:9
    }, {
      no:2,name:"first_review_timestamp",kind:"scalar",T:3
    }, {
      no:3,name:"github_user_node_id",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ous().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ous().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ous().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ous, e, t)
  }
}, Y$g=class aus extends ie{
  constructor(e){
    super(), this.bugbotLicensesHardLimit=0, this.bugbotPlanEnabled=!1, this.allowlist=[], this.currentCycleUniqueUsers=0, this.bugbotLicenseCount=0, this.allowlistConfig=fye.UNSPECIFIED, this.bugbotWasEnabledInThisBillingCycle=!1, this.licenseUsage=[], this.bugbotUsageTier=RSt.UNSPECIFIED, this.bugbotGloballyDisabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamBugbotSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"bugbot_licenses_hard_limit",kind:"scalar",T:5
    }, {
      no:2,name:"bugbot_plan_enabled",kind:"scalar",T:8
    }, {
      no:3,name:"allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"current_cycle_unique_users",kind:"scalar",T:5
    }, {
      no:5,name:"bugbot_license_count",kind:"scalar",T:5
    }, {
      no:6,name:"allowlist_config",kind:"enum",T:v.getEnumType(fye)
    }, {
      no:7,name:"bugbot_was_enabled_in_this_billing_cycle",kind:"scalar",T:8
    }, {
      no:8,name:"license_usage",kind:"message",T:K$g,repeated:!0
    }, {
      no:9,name:"bugbot_usage_tier",kind:"enum",T:v.getEnumType(RSt)
    }, {
      no:10,name:"bugbot_globally_disabled",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new aus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new aus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new aus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(aus, e, t)
  }
}, Z$g=class cus extends ie{
  constructor(e){
    super(), this.teamId=0, this.allowlist=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamBugbotSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"bugbot_licenses_hard_limit",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"bugbot_plan_enabled",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"allowlist",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"allowlist_config",kind:"enum",T:v.getEnumType(fye),opt:!0
    }, {
      no:6,name:"bugbot_globally_disabled",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cus, e, t)
  }
}, X$g=class lus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamBugbotSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new lus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lus, e, t)
  }
}, eqg=class uus extends ie{
  constructor(e){
    super(), this.teamId=0, this.newNumLicenses=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeBugBotLicensesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"new_num_licenses",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new uus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uus, e, t)
  }
}, tqg=class dus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeBugBotLicensesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new dus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dus, e, t)
  }
}, nqg=class hus extends ie{
  constructor(e){
    super(), this.teamId=0, this.githubUserNodeId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeUserBugbotLicenseRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"github_user_node_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new hus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hus, e, t)
  }
}, iqg=class mus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RevokeUserBugbotLicenseResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new mus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mus, e, t)
  }
}, rqg=class pus extends ie{
  constructor(e){
    super(), this.code="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RedeemGiftCodeRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"code",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new pus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pus, e, t)
  }
}, sqg=class gus extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RedeemGiftCodeResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"error_message",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"credit_cents",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"currency",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gus, e, t)
  }
}, oqg=class fus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CanStudentReverifyRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new fus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fus, e, t)
  }
}, aqg=class bus extends ie{
  constructor(e){
    super(), this.canReverify=!1, this.hasReverified=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CanStudentReverifyResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"can_reverify",kind:"scalar",T:8
    }, {
      no:2,name:"verification_id",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"has_reverified",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new bus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bus, e, t)
  }
}, cqg=class vus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetActiveOffboardingBannerRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new vus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vus, e, t)
  }
}, lqg=class Aus extends ie{
  constructor(e){
    super(), this.hasBanner=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetActiveOffboardingBannerResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"has_banner",kind:"scalar",T:8
    }, {
      no:2,name:"banner",kind:"message",T:uqg,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Aus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Aus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Aus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Aus, e, t)
  }
}, uqg=class yus extends ie{
  constructor(e){
    super(), this.id="", this.severity="", this.messageKey="", this.dismissible=!1, this.flowType="", this.phaseId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.OffboardingBanner"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"severity",kind:"scalar",T:9
    }, {
      no:3,name:"message_key",kind:"scalar",T:9
    }, {
      no:4,name:"countdown_date_epoch_millis",kind:"scalar",T:3,opt:!0
    }, {
      no:5,name:"dismissible",kind:"scalar",T:8
    }, {
      no:6,name:"flow_type",kind:"scalar",T:9
    }, {
      no:7,name:"phase_id",kind:"scalar",T:9
    }, {
      no:8,name:"action_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yus, e, t)
  }
}, dqg=class wus extends ie{
  constructor(e){
    super(), this.action="", this.args={
      
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ClientActionRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"action",kind:"scalar",T:9
    }, {
      no:2,name:"args",kind:"map",K:9,V:{
        kind:"scalar",T:9
      }
    }
    ])
  }
  static fromBinary(e, t){
    return new wus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wus, e, t)
  }
}, hqg=class _us extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ClientActionResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }, {
      no:2,name:"error_message",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _us().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _us().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _us().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_us, e, t)
  }
}, ofa=class Cus extends ie{
  constructor(e){
    super(), this.id="", this.name="", this.content="", this.globs=[], this.isActive=!1, this.isRequired=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Rule"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"content",kind:"scalar",T:9
    }, {
      no:6,name:"globs",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"is_active",kind:"scalar",T:8
    }, {
      no:5,name:"is_required",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Cus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cus, e, t)
  }
}, mqg=class Sus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamRulesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"active_only",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sus, e, t)
  }
}, pqg=class kus extends ie{
  constructor(e){
    super(), this.rules=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamRulesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rules",kind:"message",T:ofa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kus, e, t)
  }
}, gqg=class Eus extends ie{
  constructor(e){
    super(), this.name="", this.content="", this.globs=[], this.isActive=!1, this.isRequired=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:5,name:"globs",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"is_active",kind:"scalar",T:8
    }, {
      no:4,name:"is_required",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Eus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eus, e, t)
  }
}, fqg=class xus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule",kind:"message",T:ofa
    }
    ])
  }
  static fromBinary(e, t){
    return new xus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xus, e, t)
  }
}, bqg=class Tus extends ie{
  constructor(e){
    super(), this.ruleId="", this.globs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"content",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"globs",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"is_active",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"is_required",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Tus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tus, e, t)
  }
}, vqg=class Ius extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule",kind:"message",T:ofa
    }
    ])
  }
  static fromBinary(e, t){
    return new Ius().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ius().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ius().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ius, e, t)
  }
}, Aqg=class Dus extends ie{
  constructor(e){
    super(), this.ruleId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Dus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dus, e, t)
  }
}, yqg=class Bus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Bus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bus, e, t)
  }
}, afa=class Rus extends ie{
  constructor(e){
    super(), this.id=0, this.hookStep="", this.scriptName="", this.operatingSystems=[], this.isActive=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamHook"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:5
    }, {
      no:2,name:"hook_step",kind:"scalar",T:9
    }, {
      no:3,name:"script_name",kind:"scalar",T:9
    }, {
      no:4,name:"operating_systems",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"is_active",kind:"scalar",T:8
    }, {
      no:6,name:"script_content",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"hook_type",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"prompt_content",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"prompt_model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rus, e, t)
  }
}, wqg=class Pus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamHooksRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"active_only",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Pus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pus, e, t)
  }
}, _qg=class Lus extends ie{
  constructor(e){
    super(), this.hooks=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamHooksResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hooks",kind:"message",T:afa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lus, e, t)
  }
}, Cqg=class Nus extends ie{
  constructor(e){
    super(), this.hookStep="", this.scriptName="", this.operatingSystems=[], this.isActive=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamHookRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hook_step",kind:"scalar",T:9
    }, {
      no:2,name:"script_name",kind:"scalar",T:9
    }, {
      no:3,name:"operating_systems",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"is_active",kind:"scalar",T:8
    }, {
      no:5,name:"script_content",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"hook_type",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"prompt_content",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"prompt_model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Nus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nus, e, t)
  }
}, Sqg=class Mus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamHookResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hook",kind:"message",T:afa
    }
    ])
  }
  static fromBinary(e, t){
    return new Mus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mus, e, t)
  }
}, kqg=class Fus extends ie{
  constructor(e){
    super(), this.hookId="", this.operatingSystems=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamHookRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hook_id",kind:"scalar",T:9
    }, {
      no:2,name:"script_name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"operating_systems",kind:"scalar",T:9,repeated:!0
    }, {
      no:4,name:"is_active",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"script_content",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"hook_type",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"prompt_content",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"prompt_model",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Fus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fus, e, t)
  }
}, Eqg=class Ous extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamHookResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hook",kind:"message",T:afa
    }
    ])
  }
  static fromBinary(e, t){
    return new Ous().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ous().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ous().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ous, e, t)
  }
}, xqg=class Uus extends ie{
  constructor(e){
    super(), this.hookId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamHookRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"hook_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Uus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uus, e, t)
  }
}, Tqg=class $us extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamHookResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new $us().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $us().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $us().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($us, e, t)
  }
}, cfa=class qus extends ie{
  constructor(e){
    super(), this.id="", this.name="", this.content="", this.isActive=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamCommand"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"content",kind:"scalar",T:9
    }, {
      no:4,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"is_active",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new qus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qus, e, t)
  }
}, Liu=class Hus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamCommandsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"active_only",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Hus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hus, e, t)
  }
}, Iqg=class Jus extends ie{
  constructor(e){
    super(), this.commands=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamCommandsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commands",kind:"message",T:cfa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Jus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jus, e, t)
  }
}, Dqg=class Gus extends ie{
  constructor(e){
    super(), this.name="", this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamCommandRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"is_active",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Gus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gus, e, t)
  }
}, Bqg=class Wus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateTeamCommandResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"message",T:cfa
    }
    ])
  }
  static fromBinary(e, t){
    return new Wus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wus, e, t)
  }
}, Rqg=class Qus extends ie{
  constructor(e){
    super(), this.commandId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamCommandRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command_id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"content",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"is_active",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qus, e, t)
  }
}, Pqg=class jus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamCommandResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command",kind:"message",T:cfa
    }
    ])
  }
  static fromBinary(e, t){
    return new jus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jus, e, t)
  }
}, Lqg=class zus extends ie{
  constructor(e){
    super(), this.commandId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamCommandRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"command_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new zus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zus, e, t)
  }
}, Nqg=class Vus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteTeamCommandResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Vus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vus, e, t)
  }
}, Mqg=class Kus extends ie{
  constructor(e){
    super(), this.name="", this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GlobalCommand"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kus, e, t)
  }
}, Niu=class Yus extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGlobalCommandsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Yus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yus, e, t)
  }
}, Fqg=class Zus extends ie{
  constructor(e){
    super(), this.commands=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetGlobalCommandsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"commands",kind:"message",T:Mqg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Zus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zus, e, t)
  }
}, Evi=class Xus extends ie{
  constructor(e){
    super(), this.id="", this.name="", this.content="", this.isActive=!1, this.isRequired=!1, this.createdAt="", this.updatedAt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugbotRule"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"content",kind:"scalar",T:9
    }, {
      no:4,name:"is_active",kind:"scalar",T:8
    }, {
      no:5,name:"is_required",kind:"scalar",T:8
    }, {
      no:6,name:"created_at",kind:"scalar",T:9
    }, {
      no:7,name:"updated_at",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Xus().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xus().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xus().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xus, e, t)
  }
}, Oqg=class eds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotTeamRulesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"active_only",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new eds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new eds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new eds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(eds, e, t)
  }
}, Uqg=class tds extends ie{
  constructor(e){
    super(), this.rules=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotTeamRulesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rules",kind:"message",T:Evi,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tds, e, t)
  }
}, $qg=class nds extends ie{
  constructor(e){
    super(), this.name="", this.content="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBugbotTeamRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"content",kind:"scalar",T:9
    }, {
      no:3,name:"is_active",kind:"scalar",T:8,opt:!0
    }, {
      no:4,name:"is_required",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nds, e, t)
  }
}, qqg=class ids extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateBugbotTeamRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule",kind:"message",T:Evi
    }
    ])
  }
  static fromBinary(e, t){
    return new ids().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ids().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ids().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ids, e, t)
  }
}, Hqg=class rds extends ie{
  constructor(e){
    super(), this.ruleId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugbotTeamRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"content",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"is_active",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"is_required",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new rds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rds, e, t)
  }
}, Jqg=class sds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugbotTeamRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule",kind:"message",T:Evi
    }
    ])
  }
  static fromBinary(e, t){
    return new sds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sds, e, t)
  }
}, Gqg=class ods extends ie{
  constructor(e){
    super(), this.ruleId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteBugbotTeamRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new ods().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ods().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ods().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ods, e, t)
  }
}, Wqg=class ads extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteBugbotTeamRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new ads().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ads().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ads().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ads, e, t)
  }
}, Qqg=class cds extends ie{
  constructor(e){
    super(), this.installationId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotLearnedRulesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installation_id",kind:"scalar",T:3
    }, {
      no:2,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"repo_node_id_filter",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new cds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cds, e, t)
  }
}, jqg=class lds extends ie{
  constructor(e){
    super(), this.rules=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotLearnedRulesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rules",kind:"message",T:lfa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lds, e, t)
  }
}, lfa=class uds extends ie{
  constructor(e){
    super(), this.id="", this.name="", this.content="", this.repoNodeId="", this.repoName="", this.status="", this.createdAt="", this.updatedAt="", this.examplePrNumbers=[], this.repoOwner="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugbotLearnedRule"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"content",kind:"scalar",T:9
    }, {
      no:4,name:"repo_node_id",kind:"scalar",T:9
    }, {
      no:5,name:"repo_name",kind:"scalar",T:9
    }, {
      no:6,name:"status",kind:"scalar",T:9
    }, {
      no:7,name:"created_at",kind:"scalar",T:9
    }, {
      no:8,name:"updated_at",kind:"scalar",T:9
    }, {
      no:9,name:"example_pr_numbers",kind:"scalar",T:5,repeated:!0
    }, {
      no:11,name:"repo_owner",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new uds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uds, e, t)
  }
}, zqg=class dds extends ie{
  constructor(e){
    super(), this.ruleId="", this.installationId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugbotLearnedRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }, {
      no:2,name:"installation_id",kind:"scalar",T:3
    }, {
      no:3,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"name",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"content",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"status",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dds, e, t)
  }
}, Vqg=class hds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateBugbotLearnedRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule",kind:"message",T:lfa
    }
    ])
  }
  static fromBinary(e, t){
    return new hds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hds, e, t)
  }
}, Kqg=class mds extends ie{
  constructor(e){
    super(), this.ruleId="", this.installationId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteBugbotLearnedRuleRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }, {
      no:2,name:"installation_id",kind:"scalar",T:3
    }, {
      no:3,name:"ghe_application",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mds, e, t)
  }
}, Yqg=class pds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteBugbotLearnedRuleResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new pds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pds, e, t)
  }
}, Zqg=class gds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotRuleAnalyticsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"date_range_start",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"date_range_end",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gds, e, t)
  }
}, Xqg=class fds extends ie{
  constructor(e){
    super(), this.rules=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotRuleAnalyticsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rules",kind:"message",T:Miu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fds, e, t)
  }
}, Miu=class bds extends ie{
  constructor(e){
    super(), this.ruleId="", this.ruleType="", this.name="", this.content="", this.repositories=[], this.issuesFound=0, this.prsReviewed=0, this.acceptedIssues=0, this.acceptanceRate=0, this.upvoteRate=0, this.downvoteRate=0, this.status="", this.createdAt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.BugbotRuleAnalytics"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }, {
      no:2,name:"rule_type",kind:"scalar",T:9
    }, {
      no:3,name:"name",kind:"scalar",T:9
    }, {
      no:4,name:"content",kind:"scalar",T:9
    }, {
      no:5,name:"repositories",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"issues_found",kind:"scalar",T:5
    }, {
      no:7,name:"prs_reviewed",kind:"scalar",T:5
    }, {
      no:8,name:"accepted_issues",kind:"scalar",T:5
    }, {
      no:9,name:"acceptance_rate",kind:"scalar",T:1
    }, {
      no:10,name:"upvote_rate",kind:"scalar",T:1
    }, {
      no:11,name:"downvote_rate",kind:"scalar",T:1
    }, {
      no:12,name:"status",kind:"scalar",T:9
    }, {
      no:13,name:"created_at",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new bds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bds, e, t)
  }
}, e7g=class vds extends ie{
  constructor(e){
    super(), this.ruleId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotRuleByIdRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"rule_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new vds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vds, e, t)
  }
}, t7g=class Ads extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetBugbotRuleByIdResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_rule",kind:"message",T:Evi,opt:!0
    }, {
      no:2,name:"learned_rule",kind:"message",T:lfa,opt:!0
    }, {
      no:3,name:"analytics",kind:"message",T:Miu
    }
    ])
  }
  static fromBinary(e, t){
    return new Ads().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ads().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ads().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ads, e, t)
  }
}, n7g=class yds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SharedConversationCreator"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"first_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new yds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yds, e, t)
  }
}, ufa=class wds extends ie{
  constructor(e){
    super(), this.id="", this.title="", this.visibility=gL.UNSPECIFIED, this.createdAt="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SharedConversationMetadata"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"title",kind:"scalar",T:9
    }, {
      no:3,name:"visibility",kind:"enum",T:v.getEnumType(gL)
    }, {
      no:4,name:"created_at",kind:"scalar",T:9
    }, {
      no:5,name:"creator",kind:"message",T:n7g
    }
    ])
  }
  static fromBinary(e, t){
    return new wds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wds, e, t)
  }
}, T2A=class _ds extends ie{
  constructor(e){
    super(), this.messages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SharedConversationSnapshot"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"messages",kind:"message",T:Qw,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new _ds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ds, e, t)
  }
}, Fiu=class Cds extends ie{
  constructor(e){
    super(), this.conversationId="", this.title="", this.visibility=gL.UNSPECIFIED, this.messages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ShareConversationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversation_id",kind:"scalar",T:9
    }, {
      no:2,name:"title",kind:"scalar",T:9
    }, {
      no:3,name:"visibility",kind:"enum",T:v.getEnumType(gL)
    }, {
      no:4,name:"messages",kind:"message",T:Qw,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Cds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cds, e, t)
  }
}, i7g=class Sds extends ie{
  constructor(e){
    super(), this.shareId="", this.shareUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ShareConversationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"share_id",kind:"scalar",T:9
    }, {
      no:2,name:"share_url",kind:"scalar",T:9
    }, {
      no:3,name:"redactions",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sds, e, t)
  }
}, Oiu=class kds extends ie{
  constructor(e){
    super(), this.shareId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSharedConversationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"share_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new kds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kds, e, t)
  }
}, r7g=class Eds extends ie{
  constructor(e){
    super(), this.messages=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetSharedConversationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"metadata",kind:"message",T:ufa
    }, {
      no:2,name:"messages",kind:"message",T:Qw,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Eds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Eds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Eds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Eds, e, t)
  }
}, s7g=class xds extends ie{
  constructor(e){
    super(), this.visibilities=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListSharedConversationsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"visibility",kind:"enum",T:v.getEnumType(gL),opt:!0
    }, {
      no:2,name:"creator_id",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"created_before",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"visibilities",kind:"enum",T:v.getEnumType(gL),repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new xds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xds, e, t)
  }
}, o7g=class Tds extends ie{
  constructor(e){
    super(), this.shares=[], this.hasMore=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListSharedConversationsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"shares",kind:"message",T:ufa,repeated:!0
    }, {
      no:2,name:"has_more",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Tds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tds, e, t)
  }
}, a7g=class Ids extends ie{
  constructor(e){
    super(), this.shareId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteSharedConversationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"share_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Ids().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ids().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ids().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ids, e, t)
  }
}, c7g=class Dds extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteSharedConversationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Dds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dds, e, t)
  }
}, l7g=class Bds extends ie{
  constructor(e){
    super(), this.shareId="", this.visibility=gL.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSharedConversationVisibilityRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"share_id",kind:"scalar",T:9
    }, {
      no:2,name:"visibility",kind:"enum",T:v.getEnumType(gL)
    }
    ])
  }
  static fromBinary(e, t){
    return new Bds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bds, e, t)
  }
}, u7g=class Rds extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateSharedConversationVisibilityResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Rds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rds, e, t)
  }
}, d7g=class Pds extends ie{
  constructor(e){
    super(), this.shareId="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublicSharedConversationRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"share_id",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Pds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pds, e, t)
  }
}, h7g=class Lds extends ie{
  constructor(e){
    super(), this.messages=[], this.allowIndexing=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublicSharedConversationResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"metadata",kind:"message",T:ufa
    }, {
      no:2,name:"messages",kind:"message",T:Qw,repeated:!0
    }, {
      no:3,name:"allow_indexing",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Lds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lds, e, t)
  }
}, m7g=class Nds extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamSharedConversationSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Nds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nds, e, t)
  }
}, p7g=class Mds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamSharedConversationSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"settings",kind:"message",T:yvi
    }
    ])
  }
  static fromBinary(e, t){
    return new Mds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mds, e, t)
  }
}, g7g=class Fds extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamSharedConversationSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"settings",kind:"message",T:yvi
    }
    ])
  }
  static fromBinary(e, t){
    return new Fds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fds, e, t)
  }
}, f7g=class Ods extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamSharedConversationSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ods().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ods().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ods().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ods, e, t)
  }
}, b7g=class Uds extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamBackgroundAgentSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Uds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uds, e, t)
  }
}, v7g=class $ds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetTeamBackgroundAgentSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"settings",kind:"message",T:Avi
    }
    ])
  }
  static fromBinary(e, t){
    return new $ds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ds, e, t)
  }
}, A7g=class qds extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamBackgroundAgentSettingsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"settings",kind:"message",T:Avi
    }
    ])
  }
  static fromBinary(e, t){
    return new qds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qds, e, t)
  }
}, y7g=class Hds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamBackgroundAgentSettingsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Hds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hds, e, t)
  }
}, Uiu=class Jds extends ie{
  constructor(e){
    super(), this.id="", this.teamId=0, this.targetType="", this.targetScope="", this.thresholdCents=0, this.notificationMode="", this.enabled=!1, this.createdAt=Eo.zero, this.notifyAdminUserIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UsageAlert"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"team_id",kind:"scalar",T:5
    }, {
      no:3,name:"target_type",kind:"scalar",T:9
    }, {
      no:4,name:"target_scope",kind:"scalar",T:9
    }, {
      no:5,name:"threshold_cents",kind:"scalar",T:5
    }, {
      no:6,name:"notification_mode",kind:"scalar",T:9
    }, {
      no:7,name:"enabled",kind:"scalar",T:8
    }, {
      no:8,name:"created_at",kind:"scalar",T:3
    }, {
      no:9,name:"notify_all_admins",kind:"scalar",T:8,opt:!0
    }, {
      no:10,name:"notify_admin_user_ids",kind:"scalar",T:5,repeated:!0
    }, {
      no:11,name:"notify_member",kind:"scalar",T:8,opt:!0
    }, {
      no:12,name:"group_id",kind:"scalar",T:5,opt:!0
    }, {
      no:13,name:"group_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Jds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jds, e, t)
  }
}, w7g=class Gds extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListUsageAlertsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Gds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Gds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Gds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Gds, e, t)
  }
}, _7g=class Wds extends ie{
  constructor(e){
    super(), this.alerts=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListUsageAlertsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"alerts",kind:"message",T:Uiu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Wds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Wds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Wds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Wds, e, t)
  }
}, C7g=class Qds extends ie{
  constructor(e){
    super(), this.teamId=0, this.targetType="", this.targetScope="", this.thresholdCents=[], this.notificationMode="", this.notifyAdminUserIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateUsageAlertsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"target_type",kind:"scalar",T:9
    }, {
      no:3,name:"target_scope",kind:"scalar",T:9
    }, {
      no:4,name:"threshold_cents",kind:"scalar",T:5,repeated:!0
    }, {
      no:5,name:"notification_mode",kind:"scalar",T:9
    }, {
      no:6,name:"notify_all_admins",kind:"scalar",T:8,opt:!0
    }, {
      no:7,name:"notify_admin_user_ids",kind:"scalar",T:5,repeated:!0
    }, {
      no:8,name:"notify_member",kind:"scalar",T:8,opt:!0
    }, {
      no:9,name:"group_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Qds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qds, e, t)
  }
}, S7g=class jds extends ie{
  constructor(e){
    super(), this.createdAlerts=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreateUsageAlertsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"created_alerts",kind:"message",T:Uiu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new jds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jds, e, t)
  }
}, k7g=class zds extends ie{
  constructor(e){
    super(), this.teamId=0, this.alertIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteUsageAlertsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"alert_ids",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zds, e, t)
  }
}, E7g=class Vds extends ie{
  constructor(e){
    super(), this.deletedCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeleteUsageAlertsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"deleted_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Vds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vds, e, t)
  }
}, x7g=class Kds extends ie{
  constructor(e){
    super(), this.teamId=0, this.alertIds=[], this.notificationMode="", this.notifyAdminUserIds=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUsageAlertsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"alert_ids",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"notification_mode",kind:"scalar",T:9
    }, {
      no:4,name:"notify_all_admins",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"notify_admin_user_ids",kind:"scalar",T:5,repeated:!0
    }, {
      no:6,name:"notify_member",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Kds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Kds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Kds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Kds, e, t)
  }
}, T7g=class Yds extends ie{
  constructor(e){
    super(), this.updatedCount=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUsageAlertsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"updated_count",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Yds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yds, e, t)
  }
}, I7g=class Zds extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RequestIndividualLimitsOptOutRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Zds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zds, e, t)
  }
}, D7g=class Xds extends ie{
  constructor(e){
    super(), this.teamResults=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RequestIndividualLimitsOptOutResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_results",kind:"message",T:B7g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Xds().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xds().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xds().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xds, e, t)
  }
}, B7g=class ehs extends ie{
  constructor(e){
    super(), this.teamId=0, this.teamName="", this.outcome=uvi.UNSPECIFIED, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.IndividualLimitsOptOutTeamResult"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"team_name",kind:"scalar",T:9
    }, {
      no:3,name:"outcome",kind:"enum",T:v.getEnumType(uvi)
    }
    ])
  }
  static fromBinary(e, t){
    return new ehs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ehs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ehs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ehs, e, t)
  }
}, R7g=class ths extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListSlackConversationsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"search",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"include_private",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ths().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ths().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ths().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ths, e, t)
  }
}, P7g=class nhs extends ie{
  constructor(e){
    super(), this.conversations=[], this.hasSlackAuth=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListSlackConversationsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"conversations",kind:"message",T:L7g,repeated:!0
    }, {
      no:2,name:"has_slack_auth",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new nhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nhs, e, t)
  }
}, L7g=class ihs extends ie{
  constructor(e){
    super(), this.id="", this.name="", this.type=dvi.UNSPECIFIED, this.isPrivate=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SlackConversation"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"type",kind:"enum",T:v.getEnumType(dvi)
    }, {
      no:4,name:"is_private",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ihs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ihs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ihs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ihs, e, t)
  }
}, N7g=class rhs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SendDownloadEmailRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new rhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rhs, e, t)
  }
}, M7g=class shs extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SendDownloadEmailResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new shs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new shs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new shs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(shs, e, t)
  }
}, Vhn=class ohs extends ie{
  constructor(e){
    super(), this.id=Eo.zero, this.name="", this.displayName="", this.isVerified=!1, this.createdAt=Eo.zero, this.updatedAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Publisher"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:3
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"display_name",kind:"scalar",T:9
    }, {
      no:4,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"owner_user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"owner_team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:7,name:"is_verified",kind:"scalar",T:8
    }, {
      no:8,name:"verified_at",kind:"scalar",T:3,opt:!0
    }, {
      no:9,name:"verified_domain",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"logo_url",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"website_url",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"support_url",kind:"scalar",T:9,opt:!0
    }, {
      no:13,name:"created_at",kind:"scalar",T:3
    }, {
      no:14,name:"updated_at",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new ohs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ohs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ohs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ohs, e, t)
  }
}, Khn=class ahs extends ie{
  constructor(e){
    super(), this.id=Eo.zero, this.name="", this.gitUrl="", this.createdAt=Eo.zero, this.updatedAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Marketplace"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:3
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"display_name",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"git_url",kind:"scalar",T:9
    }, {
      no:6,name:"git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:8,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:9,name:"logo_url",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"created_at",kind:"scalar",T:3
    }, {
      no:11,name:"updated_at",kind:"scalar",T:3
    }, {
      no:12,name:"last_indexed_at",kind:"scalar",T:3,opt:!0
    }, {
      no:13,name:"last_indexed_commit_sha",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ahs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ahs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ahs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ahs, e, t)
  }
}, Yhn=class chs extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SkillDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"source_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"source_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new chs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new chs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new chs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(chs, e, t)
  }
}, Zhn=class lhs extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SubagentDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"source_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"source_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lhs, e, t)
  }
}, Xhn=class uhs extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.HookDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"source_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"source_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new uhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new uhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new uhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(uhs, e, t)
  }
}, emn=class dhs extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RuleDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"source_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"source_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dhs, e, t)
  }
}, tmn=class hhs extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.McpDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"source_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"source_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hhs, e, t)
  }
}, nmn=class mhs extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CommandDescriptor"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"source_path",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"source_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mhs, e, t)
  }
}, iO=class phs extends ie{
  constructor(e){
    super(), this.id=Eo.zero, this.name="", this.displayName="", this.description="", this.status=hvi.UNSPECIFIED, this.tags=[], this.isPublished=!1, this.createdAt=Eo.zero, this.updatedAt=Eo.zero, this.isDeprecated=!1, this.gitUrl="", this.fullRef="", this.skills=[], this.subagents=[], this.hooks=[], this.rules=[], this.mcpServers=[], this.commands=[], this.curatedCategoryKeys=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.Plugin"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:3
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"display_name",kind:"scalar",T:9
    }, {
      no:4,name:"description",kind:"scalar",T:9
    }, {
      no:6,name:"status",kind:"enum",T:v.getEnumType(hvi)
    }, {
      no:8,name:"repository_url",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"tags",kind:"scalar",T:9,repeated:!0
    }, {
      no:10,name:"logo_url",kind:"scalar",T:9,opt:!0
    }, {
      no:11,name:"primary_color",kind:"scalar",T:9,opt:!0
    }, {
      no:12,name:"is_published",kind:"scalar",T:8
    }, {
      no:13,name:"created_at",kind:"scalar",T:3
    }, {
      no:14,name:"updated_at",kind:"scalar",T:3
    }, {
      no:16,name:"publisher_id",kind:"scalar",T:3,opt:!0
    }, {
      no:17,name:"publisher",kind:"message",T:Vhn,opt:!0
    }, {
      no:18,name:"is_deprecated",kind:"scalar",T:8
    }, {
      no:19,name:"deprecation_message",kind:"scalar",T:9,opt:!0
    }, {
      no:20,name:"deprecated_at",kind:"scalar",T:3,opt:!0
    }, {
      no:21,name:"replaced_by_plugin_id",kind:"scalar",T:3,opt:!0
    }, {
      no:22,name:"marketplace_id",kind:"scalar",T:3,opt:!0
    }, {
      no:23,name:"marketplace",kind:"message",T:Khn,opt:!0
    }, {
      no:24,name:"git_url",kind:"scalar",T:9
    }, {
      no:25,name:"git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:26,name:"git_path",kind:"scalar",T:9,opt:!0
    }, {
      no:27,name:"full_ref",kind:"scalar",T:9
    }, {
      no:28,name:"skills",kind:"message",T:Yhn,repeated:!0
    }, {
      no:29,name:"subagents",kind:"message",T:Zhn,repeated:!0
    }, {
      no:30,name:"hooks",kind:"message",T:Xhn,repeated:!0
    }, {
      no:31,name:"rules",kind:"message",T:emn,repeated:!0
    }, {
      no:32,name:"mcp_servers",kind:"message",T:tmn,repeated:!0
    }, {
      no:33,name:"commands",kind:"message",T:nmn,repeated:!0
    }, {
      no:34,name:"release_repo",kind:"scalar",T:9,opt:!0
    }, {
      no:35,name:"release_asset",kind:"scalar",T:9,opt:!0
    }, {
      no:36,name:"release_tag",kind:"scalar",T:9,opt:!0
    }, {
      no:37,name:"curated_category_keys",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new phs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new phs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new phs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(phs, e, t)
  }
}, dfa=class ghs extends ie{
  constructor(e){
    super(), this.userId=0, this.pluginId=Eo.zero, this.isEnabled=!1, this.createdAt=Eo.zero, this.updatedAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UserPluginInstall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"user_id",kind:"scalar",T:5
    }, {
      no:2,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:4,name:"is_enabled",kind:"scalar",T:8
    }, {
      no:6,name:"created_at",kind:"scalar",T:3
    }, {
      no:7,name:"updated_at",kind:"scalar",T:3
    }, {
      no:8,name:"plugin",kind:"message",T:iO
    }, {
      no:10,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ghs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ghs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ghs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ghs, e, t)
  }
}, hfa=class fhs extends ie{
  constructor(e){
    super(), this.teamId=0, this.pluginId=Eo.zero, this.isRequired=!1, this.createdAt=Eo.zero, this.updatedAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.TeamPluginInstall"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:3,name:"added_by_user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"is_required",kind:"scalar",T:8
    }, {
      no:6,name:"created_at",kind:"scalar",T:3
    }, {
      no:7,name:"updated_at",kind:"scalar",T:3
    }, {
      no:8,name:"plugin",kind:"message",T:iO
    }, {
      no:10,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new fhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fhs, e, t)
  }
}, jtt=class bhs extends ie{
  constructor(e){
    super(), this.tags=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListMarketplacePluginsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"search",kind:"scalar",T:9,opt:!0
    }, {
      no:2,name:"tags",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"page_size",kind:"scalar",T:5,opt:!0
    }, {
      no:4,name:"page_token",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"marketplace_id",kind:"scalar",T:3,opt:!0
    }, {
      no:6,name:"publisher_id",kind:"scalar",T:3,opt:!0
    }, {
      no:7,name:"skip_team_admin_filter",kind:"scalar",T:8,opt:!0
    }, {
      no:8,name:"exclude_cloud_agent_plugins",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new bhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bhs, e, t)
  }
}, F7g=class vhs extends ie{
  constructor(e){
    super(), this.plugins=[], this.hasMore=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListMarketplacePluginsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugins",kind:"message",T:iO,repeated:!0
    }, {
      no:2,name:"next_page_token",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"has_more",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new vhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vhs, e, t)
  }
}, $iu=class Ahs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Ahs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ahs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ahs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ahs, e, t)
  }
}, O7g=class yhs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }
    ])
  }
  static fromBinary(e, t){
    return new yhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yhs, e, t)
  }
}, U7g=class whs extends ie{
  constructor(e){
    super(), this.publisherId=Eo.zero, this.name="", this.displayName="", this.description="", this.tags=[], this.skills=[], this.subagents=[], this.hooks=[], this.rules=[], this.mcpServers=[], this.commands=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreatePluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher_id",kind:"scalar",T:3
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }, {
      no:3,name:"display_name",kind:"scalar",T:9
    }, {
      no:4,name:"description",kind:"scalar",T:9
    }, {
      no:5,name:"tags",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"git_url",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:8,name:"repository_url",kind:"scalar",T:9,opt:!0
    }, {
      no:9,name:"logo_url",kind:"scalar",T:9,opt:!0
    }, {
      no:10,name:"skills",kind:"message",T:Yhn,repeated:!0
    }, {
      no:11,name:"subagents",kind:"message",T:Zhn,repeated:!0
    }, {
      no:12,name:"hooks",kind:"message",T:Xhn,repeated:!0
    }, {
      no:13,name:"rules",kind:"message",T:emn,repeated:!0
    }, {
      no:14,name:"mcp_servers",kind:"message",T:tmn,repeated:!0
    }, {
      no:15,name:"commands",kind:"message",T:nmn,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new whs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new whs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new whs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(whs, e, t)
  }
}, $7g=class _hs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreatePluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }
    ])
  }
  static fromBinary(e, t){
    return new _hs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _hs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _hs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_hs, e, t)
  }
}, q7g=class Chs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, this.isPublished=!1, this.skills=[], this.subagents=[], this.hooks=[], this.rules=[], this.mcpServers=[], this.commands=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdatePluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:2,name:"is_published",kind:"scalar",T:8
    }, {
      no:3,name:"skills",kind:"message",T:Yhn,repeated:!0
    }, {
      no:4,name:"subagents",kind:"message",T:Zhn,repeated:!0
    }, {
      no:5,name:"hooks",kind:"message",T:Xhn,repeated:!0
    }, {
      no:6,name:"rules",kind:"message",T:emn,repeated:!0
    }, {
      no:7,name:"mcp_servers",kind:"message",T:tmn,repeated:!0
    }, {
      no:8,name:"commands",kind:"message",T:nmn,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Chs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Chs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Chs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Chs, e, t)
  }
}, H7g=class Shs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdatePluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }
    ])
  }
  static fromBinary(e, t){
    return new Shs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Shs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Shs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Shs, e, t)
  }
}, qiu=class khs extends ie{
  constructor(e){
    super(), this.gitUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ParseGitHubRepoForPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"git_url",kind:"scalar",T:9
    }, {
      no:2,name:"git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new khs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new khs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new khs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(khs, e, t)
  }
}, J7g=class Ehs extends ie{
  constructor(e){
    super(), this.name="", this.displayName="", this.description="", this.gitPath="", this.skills=[], this.subagents=[], this.hooks=[], this.rules=[], this.mcpServers=[], this.commands=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ParsedPluginEntry"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"display_name",kind:"scalar",T:9
    }, {
      no:3,name:"description",kind:"scalar",T:9
    }, {
      no:4,name:"git_path",kind:"scalar",T:9
    }, {
      no:5,name:"skills",kind:"message",T:Yhn,repeated:!0
    }, {
      no:6,name:"subagents",kind:"message",T:Zhn,repeated:!0
    }, {
      no:7,name:"hooks",kind:"message",T:Xhn,repeated:!0
    }, {
      no:8,name:"rules",kind:"message",T:emn,repeated:!0
    }, {
      no:9,name:"mcp_servers",kind:"message",T:tmn,repeated:!0
    }, {
      no:10,name:"commands",kind:"message",T:nmn,repeated:!0
    }, {
      no:11,name:"logo_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ehs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ehs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ehs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ehs, e, t)
  }
}, Hiu=class xhs extends ie{
  constructor(e){
    super(), this.marketplaceName="", this.marketplaceDescription="", this.defaultBranch="", this.repositoryUrl="", this.plugins=[], this.commitSha="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ParseGitHubRepoForPluginsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"marketplace_name",kind:"scalar",T:9
    }, {
      no:2,name:"marketplace_description",kind:"scalar",T:9
    }, {
      no:3,name:"default_branch",kind:"scalar",T:9
    }, {
      no:4,name:"repository_url",kind:"scalar",T:9
    }, {
      no:5,name:"plugins",kind:"message",T:J7g,repeated:!0
    }, {
      no:6,name:"commit_sha",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new xhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xhs, e, t)
  }
}, G7g=class Ths extends ie{
  constructor(e){
    super(), this.gitUrl="", this.publisherId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ImportPluginsFromGitHubRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"git_url",kind:"scalar",T:9
    }, {
      no:2,name:"git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"publisher_id",kind:"scalar",T:3
    }, {
      no:4,name:"release_tag",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"release_asset",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ths().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ths().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ths().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ths, e, t)
  }
}, W7g=class Ihs extends ie{
  constructor(e){
    super(), this.createdPlugins=[], this.skippedPluginNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ImportPluginsFromGitHubResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"created_plugins",kind:"message",T:iO,repeated:!0
    }, {
      no:2,name:"skipped_plugin_names",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ihs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ihs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ihs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ihs, e, t)
  }
}, Q7g=class Dhs extends ie{
  constructor(e){
    super(), this.publisherId=Eo.zero, this.gitUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PreviewReindexPluginRepoRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher_id",kind:"scalar",T:3
    }, {
      no:2,name:"git_url",kind:"scalar",T:9
    }, {
      no:3,name:"git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"release_tag",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Dhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dhs, e, t)
  }
}, j7g=class Bhs extends ie{
  constructor(e){
    super(), this.type="", this.added=[], this.removed=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReindexComponentDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"type",kind:"scalar",T:9
    }, {
      no:2,name:"added",kind:"scalar",T:9,repeated:!0
    }, {
      no:3,name:"removed",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Bhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bhs, e, t)
  }
}, z7g=class Rhs extends ie{
  constructor(e){
    super(), this.name="", this.displayName="", this.status="", this.componentChanges=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReindexPluginDiff"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"display_name",kind:"scalar",T:9
    }, {
      no:3,name:"status",kind:"scalar",T:9
    }, {
      no:4,name:"component_changes",kind:"message",T:j7g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rhs, e, t)
  }
}, V7g=class Phs extends ie{
  constructor(e){
    super(), this.newPlugins=0, this.removedPlugins=0, this.updatedPlugins=0, this.unchangedPlugins=0, this.totalNewComponents=0, this.totalRemovedComponents=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ReindexSummary"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"new_plugins",kind:"scalar",T:5
    }, {
      no:2,name:"removed_plugins",kind:"scalar",T:5
    }, {
      no:3,name:"updated_plugins",kind:"scalar",T:5
    }, {
      no:4,name:"unchanged_plugins",kind:"scalar",T:5
    }, {
      no:5,name:"total_new_components",kind:"scalar",T:5
    }, {
      no:6,name:"total_removed_components",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Phs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Phs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Phs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Phs, e, t)
  }
}, K7g=class Lhs extends ie{
  constructor(e){
    super(), this.publisherName="", this.gitUrl="", this.gitRef="", this.commitSha="", this.pluginDiffs=[], this.newCommitCount=0, this.conflictingNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PreviewReindexPluginRepoResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher_name",kind:"scalar",T:9
    }, {
      no:2,name:"git_url",kind:"scalar",T:9
    }, {
      no:3,name:"git_ref",kind:"scalar",T:9
    }, {
      no:4,name:"commit_sha",kind:"scalar",T:9
    }, {
      no:5,name:"plugin_diffs",kind:"message",T:z7g,repeated:!0
    }, {
      no:6,name:"summary",kind:"message",T:V7g
    }, {
      no:7,name:"new_commit_count",kind:"scalar",T:5
    }, {
      no:8,name:"conflicting_names",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Lhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lhs, e, t)
  }
}, Y7g=class Nhs extends ie{
  constructor(e){
    super(), this.publisherId=Eo.zero, this.gitUrl="", this.deprecateRemoved=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ApplyReindexPluginRepoRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher_id",kind:"scalar",T:3
    }, {
      no:2,name:"git_url",kind:"scalar",T:9
    }, {
      no:3,name:"git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"deprecate_removed",kind:"scalar",T:8
    }, {
      no:5,name:"release_tag",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Nhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nhs, e, t)
  }
}, Z7g=class Mhs extends ie{
  constructor(e){
    super(), this.createdCount=0, this.updatedCount=0, this.deprecatedCount=0, this.createdPluginNames=[], this.updatedPluginNames=[], this.deprecatedPluginNames=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ApplyReindexPluginRepoResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"created_count",kind:"scalar",T:5
    }, {
      no:2,name:"updated_count",kind:"scalar",T:5
    }, {
      no:3,name:"deprecated_count",kind:"scalar",T:5
    }, {
      no:4,name:"created_plugin_names",kind:"scalar",T:9,repeated:!0
    }, {
      no:5,name:"updated_plugin_names",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"deprecated_plugin_names",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Mhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mhs, e, t)
  }
}, X7g=class Fhs extends ie{
  constructor(e){
    super(), this.gitUrl="", this.pinnedGitRef="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PluginRepoRef"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"git_url",kind:"scalar",T:9
    }, {
      no:2,name:"pinned_git_ref",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Fhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fhs, e, t)
  }
}, eHg=class Ohs extends ie{
  constructor(e){
    super(), this.gitUrl="", this.pinnedGitRef="", this.newCommitCount=0, this.latestCommitSha="", this.refreshedAt=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PluginRepoUpdateInfo"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"git_url",kind:"scalar",T:9
    }, {
      no:2,name:"pinned_git_ref",kind:"scalar",T:9
    }, {
      no:3,name:"new_commit_count",kind:"scalar",T:5
    }, {
      no:4,name:"latest_commit_sha",kind:"scalar",T:9
    }, {
      no:5,name:"refreshed_at",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Ohs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ohs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ohs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ohs, e, t)
  }
}, tHg=class Uhs extends ie{
  constructor(e){
    super(), this.publisherId=Eo.zero, this.repos=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckPluginRepoUpdatesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher_id",kind:"scalar",T:3
    }, {
      no:2,name:"repos",kind:"message",T:X7g,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Uhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Uhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Uhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Uhs, e, t)
  }
}, nHg=class $hs extends ie{
  constructor(e){
    super(), this.updates=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CheckPluginRepoUpdatesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"updates",kind:"message",T:eHg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $hs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $hs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $hs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($hs, e, t)
  }
}, iHg=class qhs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SubmitPluginForApprovalRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new qhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qhs, e, t)
  }
}, rHg=class Hhs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.SubmitPluginForApprovalResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }
    ])
  }
  static fromBinary(e, t){
    return new Hhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Hhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Hhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Hhs, e, t)
  }
}, sHg=class Jhs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ApprovePluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Jhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Jhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Jhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Jhs, e, t)
  }
}, oHg=class Ghs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ApprovePluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }
    ])
  }
  static fromBinary(e, t){
    return new Ghs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ghs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ghs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ghs, e, t)
  }
}, aHg=class Whs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RejectPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:2,name:"reason",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Whs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Whs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Whs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Whs, e, t)
  }
}, cHg=class Qhs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RejectPluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }
    ])
  }
  static fromBinary(e, t){
    return new Qhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Qhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Qhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Qhs, e, t)
  }
}, imn=class jhs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListUserPluginInstallsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"use_replica",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new jhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new jhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new jhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(jhs, e, t)
  }
}, lHg=class zhs extends ie{
  constructor(e){
    super(), this.installs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListUserPluginInstallsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installs",kind:"message",T:dfa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new zhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new zhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new zhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(zhs, e, t)
  }
}, ztt=class Vhs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InstallUserPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:4,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Vhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Vhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Vhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Vhs, e, t)
  }
}, uHg=class Khs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InstallUserPluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"install",kind:"message",T:dfa
    }
    ])
  }
  static fromBinary(e, t){
    return new Khs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Khs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Khs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Khs, e, t)
  }
}, dHg=class Yhs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUserPluginInstallRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:3,name:"is_enabled",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Yhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Yhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Yhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Yhs, e, t)
  }
}, hHg=class Zhs extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateUserPluginInstallResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"install",kind:"message",T:dfa
    }
    ])
  }
  static fromBinary(e, t){
    return new Zhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Zhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Zhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Zhs, e, t)
  }
}, mfa=class Xhs extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UninstallUserPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Xhs().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Xhs().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Xhs().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Xhs, e, t)
  }
}, mHg=class ems extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UninstallUserPluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new ems().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ems().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ems().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ems, e, t)
  }
}, Jiu=class tms extends ie{
  constructor(e){
    super(), this.teamId=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamPluginInstallsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"use_replica",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new tms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new tms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new tms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(tms, e, t)
  }
}, pHg=class nms extends ie{
  constructor(e){
    super(), this.installs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListTeamPluginInstallsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"installs",kind:"message",T:hfa,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new nms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new nms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new nms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(nms, e, t)
  }
}, rmn=class ims extends ie{
  constructor(e){
    super(), this.teamId=0, this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InstallTeamPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:4,name:"is_required",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ims().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ims().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ims().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ims, e, t)
  }
}, gHg=class rms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.InstallTeamPluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"install",kind:"message",T:hfa
    }
    ])
  }
  static fromBinary(e, t){
    return new rms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new rms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new rms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(rms, e, t)
  }
}, fHg=class sms extends ie{
  constructor(e){
    super(), this.teamId=0, this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamPluginInstallRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:4,name:"is_required",kind:"scalar",T:8,opt:!0
    }, {
      no:5,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new sms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new sms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new sms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(sms, e, t)
  }
}, bHg=class oms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdateTeamPluginInstallResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"install",kind:"message",T:hfa
    }
    ])
  }
  static fromBinary(e, t){
    return new oms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new oms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new oms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(oms, e, t)
  }
}, pfa=class ams extends ie{
  constructor(e){
    super(), this.teamId=0, this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UninstallTeamPluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"team_id",kind:"scalar",T:5
    }, {
      no:2,name:"plugin_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new ams().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ams().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ams().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ams, e, t)
  }
}, vHg=class cms extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UninstallTeamPluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new cms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new cms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new cms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(cms, e, t)
  }
}, Giu=class lms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEffectiveUserPluginsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"use_replica",kind:"scalar",T:8,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new lms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new lms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new lms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(lms, e, t)
  }
}, AHg=class ums extends ie{
  constructor(e){
    super(), this.isTeamRequired=!1, this.isEnabled=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.EffectivePlugin"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }, {
      no:3,name:"is_team_required",kind:"scalar",T:8
    }, {
      no:4,name:"is_enabled",kind:"scalar",T:8
    }, {
      no:6,name:"pinned_git_ref",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new ums().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new ums().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new ums().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(ums, e, t)
  }
}, Wiu=class dms extends ie{
  constructor(e){
    super(), this.plugins=[], this.marketplaces=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetEffectiveUserPluginsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugins",kind:"message",T:AHg,repeated:!0
    }, {
      no:2,name:"marketplaces",kind:"message",T:Khn,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new dms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new dms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new dms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(dms, e, t)
  }
}, Qiu=class hms extends ie{
  constructor(e){
    super(), this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.PluginRef"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"marketplace_name",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new hms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new hms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new hms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(hms, e, t)
  }
}, jiu=class mms extends ie{
  constructor(e){
    super(), this.refs=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ResolvePluginsByRefRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"refs",kind:"message",T:Qiu,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new mms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new mms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new mms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(mms, e, t)
  }
}, ziu=class pms extends ie{
  constructor(e){
    super(), this.plugins=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ResolvePluginsByRefResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugins",kind:"message",T:iO,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new pms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new pms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new pms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(pms, e, t)
  }
}, yHg=class gms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListPublishersRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"owner_user_id",kind:"scalar",T:5,opt:!0
    }, {
      no:2,name:"owner_team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:3,name:"search",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"page_size",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"page_token",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new gms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new gms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new gms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(gms, e, t)
  }
}, wHg=class fms extends ie{
  constructor(e){
    super(), this.publishers=[], this.hasMore=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListPublishersResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publishers",kind:"message",T:Vhn,repeated:!0
    }, {
      no:2,name:"next_page_token",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"has_more",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new fms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new fms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new fms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(fms, e, t)
  }
}, _Hg=class bms extends ie{
  constructor(e){
    super(), this.identifier={
      case:void 0
    }, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublisherRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher_id",kind:"scalar",T:3,oneof:"identifier"
    }, {
      no:2,name:"name",kind:"scalar",T:9,oneof:"identifier"
    }
    ])
  }
  static fromBinary(e, t){
    return new bms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new bms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new bms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(bms, e, t)
  }
}, CHg=class vms extends ie{
  constructor(e){
    super(), this.canEdit=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPublisherResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher",kind:"message",T:Vhn
    }, {
      no:2,name:"can_edit",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new vms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new vms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new vms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(vms, e, t)
  }
}, SHg=class Ams extends ie{
  constructor(e){
    super(), this.name="", this.displayName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreatePublisherRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"display_name",kind:"scalar",T:9
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"owner_team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:5,name:"logo_url",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"website_url",kind:"scalar",T:9,opt:!0
    }, {
      no:7,name:"support_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Ams().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ams().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ams().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ams, e, t)
  }
}, kHg=class yms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.CreatePublisherResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher",kind:"message",T:Vhn
    }
    ])
  }
  static fromBinary(e, t){
    return new yms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new yms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new yms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(yms, e, t)
  }
}, EHg=class wms extends ie{
  constructor(e){
    super(), this.publisherId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdatePublisherRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher_id",kind:"scalar",T:3
    }, {
      no:2,name:"display_name",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"logo_url",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"website_url",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"support_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new wms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new wms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new wms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(wms, e, t)
  }
}, xHg=class _ms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.UpdatePublisherResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"publisher",kind:"message",T:Vhn
    }
    ])
  }
  static fromBinary(e, t){
    return new _ms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new _ms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new _ms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(_ms, e, t)
  }
}, xvi=class Cms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListMarketplacesRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Cms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Cms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Cms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Cms, e, t)
  }
}, THg=class Sms extends ie{
  constructor(e){
    super(), this.marketplaces=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ListMarketplacesResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"marketplaces",kind:"message",T:Khn,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Sms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Sms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Sms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Sms, e, t)
  }
}, Viu=class kms extends ie{
  constructor(e){
    super(), this.name="", this.gitUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddMarketplaceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"git_url",kind:"scalar",T:9
    }, {
      no:3,name:"git_ref",kind:"scalar",T:9,opt:!0
    }, {
      no:4,name:"display_name",kind:"scalar",T:9,opt:!0
    }, {
      no:5,name:"description",kind:"scalar",T:9,opt:!0
    }, {
      no:6,name:"team_id",kind:"scalar",T:5,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new kms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new kms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new kms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(kms, e, t)
  }
}, IHg=class Ems extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.AddMarketplaceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"marketplace",kind:"message",T:Khn
    }
    ])
  }
  static fromBinary(e, t){
    return new Ems().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ems().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ems().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ems, e, t)
  }
}, Kiu=class xms extends ie{
  constructor(e){
    super(), this.marketplaceId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveMarketplaceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"marketplace_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new xms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new xms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new xms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(xms, e, t)
  }
}, DHg=class Tms extends ie{
  constructor(e){
    super(), this.success=!1, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RemoveMarketplaceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"success",kind:"scalar",T:8
    }
    ])
  }
  static fromBinary(e, t){
    return new Tms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Tms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Tms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Tms, e, t)
  }
}, BHg=class Ims extends ie{
  constructor(e){
    super(), this.marketplaceId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RefreshMarketplaceRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"marketplace_id",kind:"scalar",T:3
    }
    ])
  }
  static fromBinary(e, t){
    return new Ims().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ims().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ims().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ims, e, t)
  }
}, RHg=class Dms extends ie{
  constructor(e){
    super(), this.pluginsIndexed=0, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RefreshMarketplaceResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"marketplace",kind:"message",T:Khn
    }, {
      no:2,name:"plugins_indexed",kind:"scalar",T:5
    }
    ])
  }
  static fromBinary(e, t){
    return new Dms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Dms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Dms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Dms, e, t)
  }
}, gfa=class Bms extends ie{
  constructor(e){
    super(), this.gitUrl="", this.gitRef="", this.marketplaceName="", this.plugins=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RegisterMarketplaceAndPluginsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"git_url",kind:"scalar",T:9
    }, {
      no:2,name:"git_ref",kind:"scalar",T:9
    }, {
      no:3,name:"marketplace_name",kind:"scalar",T:9
    }, {
      no:4,name:"plugins",kind:"message",T:Yiu,repeated:!0
    }, {
      no:5,name:"team_id",kind:"scalar",T:5,opt:!0
    }, {
      no:6,name:"commit_sha",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Bms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Bms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Bms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Bms, e, t)
  }
}, Yiu=class Rms extends ie{
  constructor(e){
    super(), this.name="", this.description="", this.version="", this.gitPath="", this.gitUrl="", this.gitRef="", this.displayName="", this.skills=[], this.subagents=[], this.hooks=[], this.rules=[], this.mcpServers=[], this.commands=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RegisterPluginEntry"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"name",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"version",kind:"scalar",T:9
    }, {
      no:4,name:"git_path",kind:"scalar",T:9
    }, {
      no:5,name:"git_url",kind:"scalar",T:9
    }, {
      no:6,name:"git_ref",kind:"scalar",T:9
    }, {
      no:7,name:"display_name",kind:"scalar",T:9
    }, {
      no:8,name:"skills",kind:"message",T:Yhn,repeated:!0
    }, {
      no:9,name:"subagents",kind:"message",T:Zhn,repeated:!0
    }, {
      no:10,name:"hooks",kind:"message",T:Xhn,repeated:!0
    }, {
      no:11,name:"rules",kind:"message",T:emn,repeated:!0
    }, {
      no:12,name:"mcp_servers",kind:"message",T:tmn,repeated:!0
    }, {
      no:13,name:"commands",kind:"message",T:nmn,repeated:!0
    }, {
      no:14,name:"logo_url",kind:"scalar",T:9,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Rms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Rms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Rms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Rms, e, t)
  }
}, PHg=class Pms extends ie{
  constructor(e){
    super(), this.marketplaceId=Eo.zero, this.plugins=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RegisterMarketplaceAndPluginsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"marketplace_id",kind:"scalar",T:3
    }, {
      no:2,name:"plugins",kind:"message",T:LHg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Pms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Pms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Pms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Pms, e, t)
  }
}, LHg=class Lms extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, this.name="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.RegisteredPlugin"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:2,name:"name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Lms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Lms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Lms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Lms, e, t)
  }
}, NHg=class Nms extends ie{
  constructor(e){
    super(), this.pluginId=Eo.zero, v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeprecatePluginRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin_id",kind:"scalar",T:3
    }, {
      no:2,name:"deprecation_message",kind:"scalar",T:9,opt:!0
    }, {
      no:3,name:"replaced_by_plugin_id",kind:"scalar",T:3,opt:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new Nms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Nms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Nms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Nms, e, t)
  }
}, MHg=class Mms extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.DeprecatePluginResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"plugin",kind:"message",T:iO
    }
    ])
  }
  static fromBinary(e, t){
    return new Mms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Mms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Mms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Mms, e, t)
  }
}, FHg=class Fms extends ie{
  constructor(e){
    super(), this.repoUrl="", this.branchName="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPullRequestForBranchRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"repo_url",kind:"scalar",T:9
    }, {
      no:2,name:"branch_name",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Fms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Fms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Fms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Fms, e, t)
  }
}, OHg=class Oms extends ie{
  constructor(e){
    super(), this.prUrl="", v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetPullRequestForBranchResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"pr_url",kind:"scalar",T:9
    }
    ])
  }
  static fromBinary(e, t){
    return new Oms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Oms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Oms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Oms, e, t)
  }
}, Ziu=class Ums extends ie{
  constructor(e){
    super(), v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetManagedSkillsRequest"
  }
  static{
    this.fields=v.util.newFieldList(()=>[])
  }
  static fromBinary(e, t){
    return new Ums().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new Ums().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new Ums().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(Ums, e, t)
  }
}, UHg=class $ms extends ie{
  constructor(e){
    super(), this.id="", this.description="", this.content="", this.disableModelInvocation=!1, this.environments=[], this.disabledEnvironments=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.ManagedSkill"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"id",kind:"scalar",T:9
    }, {
      no:2,name:"description",kind:"scalar",T:9
    }, {
      no:3,name:"content",kind:"scalar",T:9
    }, {
      no:4,name:"disable_model_invocation",kind:"scalar",T:8
    }, {
      no:5,name:"environments",kind:"scalar",T:9,repeated:!0
    }, {
      no:6,name:"disabled_environments",kind:"scalar",T:9,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new $ms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new $ms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new $ms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals($ms, e, t)
  }
}, $Hg=class qms extends ie{
  constructor(e){
    super(), this.skills=[], v.util.initPartial(e, this)
  }
  static{
    this.runtime=v
  }
  static{
    this.typeName="aiserver.v1.GetManagedSkillsResponse"
  }
  static{
    this.fields=v.util.newFieldList(()=>[{
      no:1,name:"skills",kind:"message",T:UHg,repeated:!0
    }
    ])
  }
  static fromBinary(e, t){
    return new qms().fromBinary(e, t)
  }
  static fromJson(e, t){
    return new qms().fromJson(e, t)
  }
  static fromJsonString(e, t){
    return new qms().fromJsonString(e, t)
  }
  static equals(e, t){
    return v.util.equals(qms, e, t)
  }
}
}
}), smn, ffa, bfa=