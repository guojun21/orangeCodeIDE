// Module: out-build/external/sentry/core/utils/anthropic-ai/constants.js
// Offset: 176769 (bundle byte offset)
// Size: 462 bytes

Ueh="Anthropic_AI", $eh=["messages.create", "messages.stream", "messages.countTokens", "models.get", "completions.create", "models.retrieve", "beta.messages.create"]
}
});
function HZv(n){
  return $eh.includes(n)
}
function JZv(n, e){
  e.error&&(n.setStatus({
    code:nE, message:e.error.type||"internal_error"
  }), Sw(e.error, {
    mechanism:{
      handled:!1,type:"auto.ai.anthropic.anthropic_error"
    }
  }))
}
var GZv=