// Module: out-build/proto/aiserver/v1/chat_connectweb.js
// Offset: 28159660 (bundle byte offset)
// Size: 1772 bytes

cv(), Ka(), Qmn(), qAi={
  typeName:"aiserver.v1.ChatService", methods:{
    streamUnifiedChat:{
      name:"StreamUnifiedChat",I:URe,O:A8n,kind:vn.ServerStreaming
    }, streamUnifiedChatWithTools:{
      name:"StreamUnifiedChatWithTools",I:RFc,O:J9e,kind:vn.BiDiStreaming
    }, streamUnifiedChatWithToolsSSE:{
      name:"StreamUnifiedChatWithToolsSSE",I:kye,O:J9e,kind:vn.ServerStreaming
    }, streamUnifiedChatWithToolsPoll:{
      name:"StreamUnifiedChatWithToolsPoll",I:K$e,O:Y$e,kind:vn.ServerStreaming
    }, streamUnifiedChatWithToolsIdempotent:{
      name:"StreamUnifiedChatWithToolsIdempotent",I:pLh,O:PFc,kind:vn.BiDiStreaming
    }, streamUnifiedChatWithToolsIdempotentSSE:{
      name:"StreamUnifiedChatWithToolsIdempotentSSE",I:kye,O:PFc,kind:vn.ServerStreaming
    }, streamUnifiedChatWithToolsIdempotentPoll:{
      name:"StreamUnifiedChatWithToolsIdempotentPoll",I:K$e,O:Y$e,kind:vn.ServerStreaming
    }, getConversationSummary:{
      name:"GetConversationSummary",I:URe,O:ohe,kind:vn.Unary
    }, streamSpeculativeSummaries:{
      name:"StreamSpeculativeSummaries",I:URe,O:ohe,kind:vn.ServerStreaming
    }, warmStreamUnifiedChatWithTools:{
      name:"WarmStreamUnifiedChatWithTools",I:URe,O:WFc,kind:vn.Unary
    }, getPromptDryRun:{
      name:"GetPromptDryRun",I:URe,O:gNh,kind:vn.Unary
    }, streamFullFileCmdK:{
      name:"StreamFullFileCmdK",I:URe,O:J9e,kind:vn.ServerStreaming
    }, warmFullFileCmdK:{
      name:"WarmFullFileCmdK",I:URe,O:WFc,kind:vn.Unary
    }, convertOALToNAL:{
      name:"ConvertOALToNAL",I:DNh,O:BNh,kind:vn.Unary
    }
  }
}, eau={
  typeName:"aiserver.v1.ReplayChatService", methods:{
    streamReplayChat:{
      name:"StreamReplayChat",I:uLh,O:J9e,kind:vn.ServerStreaming
    }
  }
}
}
});
function l9A(n){
  return n==="kwallet"||n==="kwallet5"||n==="kwallet6"
}
function u9A(n){
  return n==="gnome_any"||n==="gnome_libsecret"||n==="gnome_keyring"
}
var sva, d9A, IXg, DXg, tau=