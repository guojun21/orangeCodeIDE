// Module: out-build/vs/workbench/services/agent/browser/transcriptPaths.js
// Offset: 30568192 (bundle byte offset)
// Size: 1130 bytes

Amu(), Yn()
}
});
function ony(n){
  if(n===void 0)return{
    apiKey:void 0, openaiApiBaseUrl:void 0, azureState:void 0, bedrockState:void 0
  };
  switch(n.case){
    case"apiKeyCredentials":return{
      apiKey:n.value.apiKey,openaiApiBaseUrl:n.value.baseUrl,azureState:void 0,bedrockState:void 0
    };
    case"azureCredentials":return{
      apiKey:void 0,openaiApiBaseUrl:void 0,azureState:new wRc({
        apiKey:n.value.apiKey,baseUrl:n.value.baseUrl,deployment:n.value.deployment,useAzure:!0
      }),bedrockState:void 0
    };
    case"bedrockCredentials":return{
      apiKey:void 0,openaiApiBaseUrl:void 0,azureState:void 0,bedrockState:new _Rc({
        accessKey:n.value.accessKey,secretKey:n.value.secretKey,region:n.value.region,sessionToken:n.value.sessionToken??"",useBedrock:!0
      })
    };
    case void 0:return{
      apiKey:void 0,openaiApiBaseUrl:void 0,azureState:void 0,bedrockState:void 0
    };
    default:return{
      apiKey:void 0,openaiApiBaseUrl:void 0,azureState:void 0,bedrockState:void 0
    }
  }
}
function any(n){
  const e=n.transcriptPath;
  return e?`${Hou} You can monitor its output by reading the transcript at: ${e}`:Hou
}
var Qwi, jwi, b0a, wmu=