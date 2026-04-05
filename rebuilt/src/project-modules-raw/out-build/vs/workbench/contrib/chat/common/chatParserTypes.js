// Module: out-build/vs/workbench/contrib/chat/common/chatParserTypes.js
// Offset: 28318873 (bundle byte offset)
// Size: 4977 bytes

UB(), Jr(), $I(), hR(), Nme(), Aie=class CQb{
  static{
    this.Kind="text"
  }
  constructor(e, t, i){
    this.range=e, this.editorRange=t, this.text=i, this.kind=CQb.Kind
  }
  get promptText(){
    return this.text
  }
}, Sk="#", Jq="@", EU="/", rcu=class SQb{
  static{
    this.Kind="var"
  }
  constructor(e, t, i, r, s){
    this.range=e, this.editorRange=t, this.variableName=i, this.variableArg=r, this.variableId=s, this.kind=SQb.Kind
  }
  get text(){
    const e=this.variableArg?`:${this.variableArg}`:"";
    return`${Sk}${this.variableName}${e}`
  }
  get promptText(){
    return this.text
  }
}, nqe=class kQb{
  static{
    this.Kind="tool"
  }
  constructor(e, t, i, r, s, o){
    this.range=e, this.editorRange=t, this.toolName=i, this.toolId=r, this.displayName=s, this.icon=o, this.kind=kQb.Kind
  }
  get text(){
    return`${Sk}${this.toolName}`
  }
  get promptText(){
    return this.text
  }
  toVariableEntry(){
    return{
      id:this.toolId,name:this.toolName,range:this.range,value:void 0,isTool:!0,icon:Qt.isThemeIcon(this.icon)?this.icon:void 0,fullName:this.displayName
    }
  }
}, wQ=class EQb{
  static{
    this.Kind="agent"
  }
  constructor(e, t, i){
    this.range=e, this.editorRange=t, this.agent=i, this.kind=EQb.Kind
  }
  get text(){
    return`${Jq}${this.agent.name}`
  }
  get promptText(){
    return""
  }
}, Lye=class xQb{
  static{
    this.Kind="subcommand"
  }
  constructor(e, t, i){
    this.range=e, this.editorRange=t, this.command=i, this.kind=xQb.Kind
  }
  get text(){
    return`${EU}${this.command.name}`
  }
  get promptText(){
    return""
  }
}, Fnt=class TQb{
  static{
    this.Kind="slash"
  }
  constructor(e, t, i){
    this.range=e, this.editorRange=t, this.slashCommand=i, this.kind=TQb.Kind
  }
  get text(){
    return`${EU}${this.slashCommand.command}`
  }
  get promptText(){
    return`${EU}${this.slashCommand.command}`
  }
}, dpn=class IQb{
  static{
    this.Kind="dynamic"
  }
  constructor(e, t, i, r, s, o, a, l, u, d){
    this.range=e, this.editorRange=t, this.text=i, this.id=r, this.modelDescription=s, this.data=o, this.fullName=a, this.icon=l, this.isFile=u, this.isDirectory=d, this.kind=IQb.Kind
  }
  get referenceText(){
    return this.text.replace(Sk, "")
  }
  get promptText(){
    return this.text
  }
  toVariableEntry(){
    return this.id==="vscode.problems"?wkt.toEntry(this.data.filter):{
      id:this.id,name:this.referenceText,range:this.range,value:this.data,fullName:this.fullName,icon:this.icon,isFile:this.isFile,isDirectory:this.isDirectory
    }
  }
}
}
});
function ptf(n){
  let e=0;
  const t=[];
  for(const i of n){
    const r=t.filter(o=>o.kind!=="textEditGroup").at(-1), s=t.findIndex(o=>o===r);
    if(i.kind==="inlineReference"){
      let o=i.name;
      o||(je.isUri(i.inlineReference)?o=ca(i.inlineReference):"name"in i.inlineReference?o=i.inlineReference.name:o=ca(i.inlineReference.uri));
      const a=e++,l=je.parse(scu).with({
        path:String(a)
      }),u=`[${o}](${l.toString()})`,d={
        [a]:i
      };
      if(r?.kind==="markdownContent"){
        const m=byi(r.content,new _c(u));
        t[s]={
          ...r,content:m,inlineReferences:{
            ...d,...r.inlineReferences||{
              
            }
          }
        }
      }
      else t.push({
        content:new _c(u),inlineReferences:d,kind:"markdownContent"
      })
    }
    else if(i.kind==="markdownContent"&&r?.kind==="markdownContent"&&atf(r.content, i.content)){
      const o=byi(r.content,i.content);
      t[s]={
        ...r,content:o
      }
    }
    else if(i.kind==="markdownVuln"){
      const a=`<vscode_annotation details='${encodeURIComponent(JSON.stringify(i.vulnerabilities))}'>${i.content.value}</vscode_annotation>`;
      if(r?.kind==="markdownContent"){
        const l=byi(r.content,new _c(a));
        t[s]={
          ...r,content:l
        }
      }
      else t.push({
        content:new _c(a),kind:"markdownContent"
      })
    }
    else if(i.kind==="codeblockUri"){
      if(r?.kind==="markdownContent"){
        const a=`<vscode_codeblock_uri${i.isEdit?" isEdit":""}>${i.uri.toString()}</vscode_codeblock_uri>`,l=byi(r.content,new _c(a));
        t[s]={
          ...r,content:l
        }
      }
    }
    else t.push(i)
  }
  return t
}
function e8A(n){
  const e=[];
  for(const t of n){
    const i=e[e.length-1];
    if(t.kind==="markdownContent")i?.kind==="markdownContent"?e[e.length-1]={
      content:new _c(i.content.value+t.content.value,{
        isTrusted:i.content.isTrusted
      }),kind:"markdownContent"
    }
    :e.push(t);
    else if(t.kind==="markdownVuln"){
      const s=`<vscode_annotation details='${encodeURIComponent(JSON.stringify(t.vulnerabilities))}'>${t.content.value}</vscode_annotation>`;
      i?.kind==="markdownContent"?e[e.length-1]={
        content:new _c(i.content.value+s,{
          isTrusted:i.content.isTrusted
        }),kind:"markdownContent"
      }
      :e.push({
        content:new _c(s),kind:"markdownContent"
      })
    }
  }
  return e
}
function gtf(n){
  const e=/<vscode_codeblock_uri( isEdit)?>(.*?)<\/vscode_codeblock_uri>/ms.exec(n);
  if(e){
    const[t, i, r]=e;
    if(r){
      const s=je.parse(r),o=n.substring(0,e.index)+n.substring(e.index+t.length);
      return{
        uri:s,textWithoutResult:o,isEdit:!!i
      }
    }
  }
}
function ftf(n){
  const e=[];
  let t=n, i;
  for(;
  (i=/<vscode_annotation details='(.*?)'>(.*?)<\/vscode_annotation>/ms.exec(t))!==null;
  ){
    const[r, s, o]=i, a=i.index, l=t.substring(0, a), u=l.split(`
`).length-1, d=o.split(`
`).length-1, m=l.lastIndexOf(`
`), p=a-(m+1)+1, g=(l+o).lastIndexOf(`
`), f=a+o.length-(g+1)+1;
    try{
      JSON.parse(decodeURIComponent(s)).forEach(({
        title:w,description:C
      })=>e.push({
        title:w,description:C,range:{
          startLineNumber:u+1,startColumn:p,endLineNumber:u+d+1,endColumn:f
        }
      }))
    }
    catch{
      
    }
    t=t.substring(0, a)+o+t.substring(a+r.length)
  }
  return{
    newText:t, vulnerabilities:e
  }
}
var scu, iAa=