// Module: out-build/vs/workbench/contrib/chat/common/chatContextKeys.js
// Offset: 28259206 (bundle byte offset)
// Size: 7343 bytes

Ht(), si(), Av(), Mm(), SS(), (function(n){
  n.responseVote=new Sn("chatSessionResponseVote", "", {
    type:"string", description:_(5591, null)
  }), n.responseDetectedAgentCommand=new Sn("chatSessionResponseDetectedAgentOrCommand", !1, {
    type:"boolean", description:_(5592, null)
  }), n.responseSupportsIssueReporting=new Sn("chatResponseSupportsIssueReporting", !1, {
    type:"boolean", description:_(5593, null)
  }), n.responseIsFiltered=new Sn("chatSessionResponseFiltered", !1, {
    type:"boolean", description:_(5594, null)
  }), n.responseHasError=new Sn("chatSessionResponseError", !1, {
    type:"boolean", description:_(5595, null)
  }), n.requestInProgress=new Sn("chatSessionRequestInProgress", !1, {
    type:"boolean", description:_(5596, null)
  }), n.isRequestPaused=new Sn("chatRequestIsPaused", !1, {
    type:"boolean", description:_(5597, null)
  }), n.canRequestBePaused=new Sn("chatCanRequestBePaused", !1, {
    type:"boolean", description:_(5598, null)
  }), n.isResponse=new Sn("chatResponse", !1, {
    type:"boolean", description:_(5599, null)
  }), n.isRequest=new Sn("chatRequest", !1, {
    type:"boolean", description:_(5600, null)
  }), n.itemId=new Sn("chatItemId", "", {
    type:"string", description:_(5601, null)
  }), n.lastItemId=new Sn("chatLastItemId", [], {
    type:"string", description:_(5602, null)
  }), n.editApplied=new Sn("chatEditApplied", !1, {
    type:"boolean", description:_(5603, null)
  }), n.inputHasText=new Sn("chatInputHasText", !1, {
    type:"boolean", description:_(5604, null)
  }), n.inputHasFocus=new Sn("chatInputHasFocus", !1, {
    type:"boolean", description:_(5605, null)
  }), n.inChatInput=new Sn("inChatInput", !1, {
    type:"boolean", description:_(5606, null)
  }), n.inChatSession=new Sn("inChat", !1, {
    type:"boolean", description:_(5607, null)
  }), n.inUnifiedChat=new Sn("inUnifiedChat", !1, {
    type:"boolean", description:_(5608, null)
  }), n.instructionsAttached=new Sn("chatInstructionsAttached", !1, {
    type:"boolean", description:_(5609, null)
  }), n.chatMode=new Sn("chatMode", iA.Ask, {
    type:"string", description:_(5610, null)
  }), n.supported=Ee.or(uU.toNegated(), REe.notEqualsTo("")), n.enabled=new Sn("chatIsEnabled", !1, {
    type:"boolean", description:_(5611, null)
  }), n.panelParticipantRegistered=new Sn("chatPanelParticipantRegistered", !1, {
    type:"boolean", description:_(5612, null)
  }), n.editingParticipantRegistered=new Sn("chatEditingParticipantRegistered", !1, {
    type:"boolean", description:_(5613, null)
  }), n.chatEditingCanUndo=new Sn("chatEditingCanUndo", !1, {
    type:"boolean", description:_(5614, null)
  }), n.chatEditingCanRedo=new Sn("chatEditingCanRedo", !1, {
    type:"boolean", description:_(5615, null)
  }), n.extensionInvalid=new Sn("chatExtensionInvalid", !1, {
    type:"boolean", description:_(5616, null)
  }), n.inputCursorAtTop=new Sn("chatCursorAtTop", !1), n.inputHasAgent=new Sn("chatInputHasAgent", !1), n.location=new Sn("chatLocation", void 0), n.inQuickChat=new Sn("quickChatHasFocus", !1, {
    type:"boolean", description:_(5617, null)
  }), n.hasFileAttachments=new Sn("chatHasFileAttachments", !1, {
    type:"boolean", description:_(5618, null)
  }), n.languageModelsAreUserSelectable=new Sn("chatModelsAreUserSelectable", !1, {
    type:"boolean", description:_(5619, null)
  }), n.Setup={
    hidden:new Sn("chatSetupHidden", !1, !0), installed:new Sn("chatSetupInstalled", !1, !0), fromDialog:Ee.has("config.chat.setupFromDialog")
  }, n.Entitlement={
    signedOut:new Sn("chatSetupSignedOut", !1, !0), canSignUp:new Sn("chatPlanCanSignUp", !1, !0), limited:new Sn("chatPlanLimited", !1, !0), pro:new Sn("chatPlanPro", !1, !0)
  }, n.SetupViewKeys=new Set([n.Setup.hidden.key, n.Setup.installed.key, n.Entitlement.signedOut.key, n.Entitlement.canSignUp.key, ...n.Setup.fromDialog.keys()]), n.SetupViewCondition=Ee.and(n.Setup.fromDialog.negate(), Ee.or(Ee.and(n.Setup.hidden.negate(), n.Setup.installed.negate()), Ee.and(n.Entitlement.canSignUp, n.Setup.installed), Ee.and(n.Entitlement.signedOut, n.Setup.installed))), n.chatQuotaExceeded=new Sn("chatQuotaExceeded", !1, !0), n.completionsQuotaExceeded=new Sn("completionsQuotaExceeded", !1, !0), n.Editing={
    hasToolsAgent:new Sn("chatHasToolsAgent", !1, {
      type:"boolean",description:_(5620,null)
    }), agentModeDisallowed:new Sn("chatAgentModeDisallowed", void 0, {
      type:"boolean",description:_(5621,null)
    }), hasToolConfirmation:new Sn("chatHasToolConfirmation", !1, {
      type:"boolean",description:_(5622,null)
    })
  }, n.Tools={
    toolsCount:new Sn("toolsCount", 0, {
      type:"number",description:_(5623,null)
    })
  }
})(qa||(qa={
  
})), (function(n){
  n.unifiedChatEnabled=Ee.has(`config.${CV.UnifiedChatView}`), n.inEditsOrUnified=Ee.or(qa.location.isEqualTo(zh.EditingSession), qa.inUnifiedChat), n.inNonUnifiedPanel=Ee.and(qa.location.isEqualTo(zh.Panel), qa.inUnifiedChat.negate()), n.inEditingMode=Ee.or(qa.chatMode.isEqualTo(iA.Edit), qa.chatMode.isEqualTo(iA.Agent))
})(apn||(apn={
  
}))
}
});
function ayi(n){
  return n.res.statusCode&&n.res.statusCode>=200&&n.res.statusCode<300||n.res.statusCode===1223
}
function jau(n){
  return n.res.statusCode===204
}
async function Lnt(n){
  return jau(n)?null:(await Aoe(n.stream)).toString()
}
async function Rye(n){
  if(!ayi(n))throw new Error("Server returned "+n.res.statusCode);
  return Lnt(n)
}
async function Pye(n){
  if(!ayi(n))throw new Error("Server returned "+n.res.statusCode);
  if(jau(n))return null;
  const t=(await Aoe(n.stream)).toString();
  try{
    return JSON.parse(t)
  }
  catch(i){
    throw i.message+=`:
`+t, i
  }
}
function Gef(n, e){
  Wef(n, e)
}
function Wef(n=!0, e=!0){
  if(Vau===n&&Kau===e)return;
  Vau=n, Kau=e;
  const t=Di.as(Dh.Configuration), i=Wva;
  Wva=[{
    id:"http", order:15, title:_(2225, null), type:"object", scope:2, properties:{
      "http.useLocalProxyConfiguration":{
        type:"boolean",default:e,markdownDescription:_(2226,null),restricted:!0
      }
    }
  }, {
    id:"http", order:15, title:_(2227, null), type:"object", scope:1, properties:{
      "http.electronFetch":{
        type:"boolean",default:!1,description:_(2228,null),restricted:!0
      }
    }
  }, {
    id:"http", order:15, title:_(2229, null), type:"object", scope:n?1:2, properties:{
      "http.proxy":{
        type:"string",pattern:"^(https?|socks|socks4a?|socks5h?)://([^:]*(:[^@]*)?@)?([^:]+|\\[[:0-9a-fA-F]+\\])(:\\d+)?/?$|^$",markdownDescription:_(2230,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.proxyStrictSSL":{
        type:"boolean",default:!0,markdownDescription:_(2231,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.proxyKerberosServicePrincipal":{
        type:"string",markdownDescription:_(2232,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.noProxy":{
        type:"array",items:{
          type:"string"
        },markdownDescription:_(2233,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.proxyAuthorization":{
        type:["null","string"],default:null,markdownDescription:_(2234,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.proxySupport":{
        type:"string",enum:["off","on","fallback","override"],enumDescriptions:[_(2235,null),_(2236,null),_(2237,null),_(2238,null)],default:"override",markdownDescription:_(2239,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.systemCertificates":{
        type:"boolean",default:!0,markdownDescription:_(2240,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.experimental.systemCertificatesV2":{
        type:"boolean",tags:["experimental"],default:!1,markdownDescription:_(2241,null,"`#http.useLocalProxyConfiguration#`"),restricted:!0
      },"http.fetchAdditionalSupport":{
        type:"boolean",default:!0,markdownDescription:_(2242,null,"`#http.useLocalProxyConfiguration#`","`#http.proxySupport#`","`#http.systemCertificates#`"),restricted:!0
      }
    }
  }
  ], t.updateConfigurations({
    add:Wva, remove:i
  })
}
var u8, Qef, jef, zau, Wva, Vau, Kau, qq=