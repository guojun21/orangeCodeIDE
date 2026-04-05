// Module: out-build/vs/workbench/services/editor/common/editorService.js
// Offset: 25041934 (bundle byte offset)
// Size: 1369 bytes

Wt(), od(), yi=xi("editorService"), B1=-1, Aw=-2, nla=-3
}
});
function Met(n, e){
  switch(n){
    case"fileSelections":case"terminalFiles":return je.revive(e.uri).toString();
    case"selections":case"terminalSelections":return xbg(e);
    case"selectedDocs":return e.docId;
    case"composers":return e.composerId;
    case"cursorRules":return e.filename;
    case"cursorCommands":return e.filename;
    case"selectedImages":return e.path;
    case"externalLinks":return e.url;
    case"gitPRDiffSelections":return e.uuid||JSON.stringify({
      prUrl:e.prUrl,filePath:e.filePath,startLine:e.startLine,endLine:e.endLine
    });
    case"selectedPullRequests":{
      const t=e;
      return t.url||`pr-${t.number??t.id}`
    }
    case"uiElementSelections":return e.xpath;
    case"consoleLogs":return e.uuid||JSON.stringify({
      message:e.message,timestamp:e.timestamp
    });
    case"subagentSelections":return e.name;
    case"browserSelections":return e.browserId;
    default:{
      const{
        uuid:t,...i
      }
      =e;
      return JSON.stringify(i)
    }
  }
}
function Fet(n, e, t){
  return!e&&!t?!0:!e||!t?!1:Met(n, e)===Met(n, t)
}
function sR(){
  const n={
    
  };
  return Oet.forEach(e=>{
    rV(e)?n[e]=[]:n[e]=void 0
  }), {
    ...n, mentions:kbg()
  }
}
function kbg(){
  const n={
    
  };
  return Oet.forEach(e=>{
    rV(e)?n[e]={
      
    }
    :n[e]=[]
  }), n
}
function wCA(n){
  if(!n)return!1;
  const e=Tbg.some(i=>(n[i]?.length??0)>0), t=Ibg.some(i=>n[i]===!0);
  return e||t
}
var Ebg, Oet, rV, xbg, Tbg, Ibg, Q9=