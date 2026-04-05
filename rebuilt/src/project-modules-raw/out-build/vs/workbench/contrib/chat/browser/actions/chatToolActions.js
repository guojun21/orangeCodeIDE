// Module: out-build/vs/workbench/contrib/chat/browser/actions/chatToolActions.js
// Offset: 31042987 (bundle byte offset)
// Size: 4070 bytes

Lv(), qi(), Ate(), yn(), Ef(), rt(), Jr(), Ht(), dr(), hs(), si(), HA(), Kl(), Pa(), _u(), v0(), oIf(), Rqe(), _E(), Wq(), SS(), wie(), kk(), Ice(), Rgu="workbench.action.chat.acceptTool", aIf=class sjb extends rn{
  static{
    this.id="workbench.action.chat.attachTools"
  }
  constructor(){
    super({
      id:sjb.id,title:_(5127,null),icon:Be.tools,f1:!1,category:cO,precondition:qa.chatMode.isEqualTo(iA.Agent),menu:{
        when:qa.chatMode.isEqualTo(iA.Agent),id:st.ChatInputAttachmentToolbar,group:"navigation",order:1
      },keybinding:{
        when:Ee.and(qa.inChatInput,qa.chatMode.isEqualTo(iA.Agent)),primary:3162,weight:100
      }
    })
  }
  async run(e, ...t){
    const i=e.get(ha), r=e.get(Vye), s=e.get(yie), o=e.get(su), a=e.get(M1), l=e.get(ea), u=e.get(fr), d=e.get(Em);
    let m=a.lastFocusedWidget;
    if(!m){
      let j=function(ee){
        return ee&&typeof ee=="object"&&ee.widget
      };
      var p=j;
      const X=t[0];
      j(X)&&(m=X.widget)
    }
    if(!m)return;
    const g=new Map;
    for(const j of r.servers.get())for(const X of j.tools.get())g.set(X.id, j);
    let f;
    (function(j){
      j[j.Extension=0]="Extension",j[j.Mcp=1]="Mcp",j[j.Other=2]="Other"
    })(f||(f={
      
    }));
    const A={
      type:"item",label:_(5128,null),iconClass:Qt.asClassName(Be.add),pickable:!1,run:()=>u.executeCommand(Bgu.ID)
    }, w={
      type:"item",label:_(5129,null),iconClass:Qt.asClassName(Be.add),pickable:!1,run:()=>d.openSearch("@tag:language-model-tools")
    }, C={
      type:"item",label:_(5130,null),iconClass:Qt.asClassName(Be.add),pickable:!1,run:async()=>{
        (await i.pick([A,w],{
          canPickMany:!1,title:_(5131,null)
        }))?.run()
      }
    }, x={
      type:"item",children:[],label:_(5132,null),source:{
        type:"internal"
      },ordinal:2,picked:!0
    }, I=new Set(m.input.selectedToolsModel.tools.get()), B=new Map;
    for(const j of s.getTools()){
      if(!j.supportsToolPicker)continue;
      let X;
      if(j.source.type==="mcp"){
        const re=g.get(j.id);
        if(!re)continue;
        X=B.get(re.definition.id)??{
          type:"item",label:_(5133,null,re?.definition.label),status:_(5134,null,re.collection.label,Gme.toString(re.connectionState.get())),ordinal:1,source:j.source,picked:!1,children:[]
        },B.set(re.definition.id,X)
      }
      else if(j.source.type==="extension"){
        const re=j.source.extensionId,ne=o.extensions.find(pe=>$h.equals(pe.identifier,re));
        if(!ne)continue;
        X=B.get($h.toKey(re))??{
          type:"item",label:ne.displayName??ne.name,ordinal:0,picked:!1,source:j.source,children:[]
        },B.set($h.toKey(ne.identifier),X)
      }
      else j.source.type==="internal"?X=x:QN(j.source);
      const ee=I.has(j);
      X.children.push({
        tool:j,parent:X,type:"item",label:j.displayName,description:j.userDescription,picked:ee,indented:!0
      }),ee&&(X.picked=!0)
    }
    function R(j){
      return!!j.children
    }
    function N(j){
      return!!j.tool
    }
    function M(j){
      return!!j.run
    }
    const O=new Ut, $=[];
    for(const j of Array.from(B.values()).sort((X, ee)=>X.ordinal-ee.ordinal))$.push({
      type:"separator",label:j.status
    }), $.push(j), $.push(...j.children);
    const H=O.add(i.createQuickPick({
      useSeparators:!0
    }));
    H.placeholder=_(5135, null), H.canSelectMany=!0, H.keepScrollPosition=!0, H.matchOnDescription=!0, $.length===0?(H.placeholder=_(5136, null), H.canSelectMany=!1, $.push(A, w)):$.push({
      type:"separator"
    }, C);
    let W=new Set, z=!1;
    const Y=()=>{
      z=!0;
      try{
        const j=$.filter(re=>re.type==="item"&&!!re.picked);
        W=new Set(j),H.selectedItems=j;
        const X=[],ee=[];
        for(const re of $)re.type==="item"&&!re.picked&&(R(re)?X.push(re.source):N(re)&&re.parent.picked&&ee.push(re.tool));
        m.input.selectedToolsModel.update(X,ee)
      }
      finally{
        z=!1
      }
    };
    Y(), H.items=$, H.show(), O.add(H.onDidChangeSelection(j=>{
      if(z)return;
      const X=j.find(M);
      if(X){
        X.run(),H.hide();
        return
      }
      const{
        added:ee,removed:re
      }
      =_Ft(W,new Set(j));
      for(const ne of ee)if(ne.picked=!0,R(ne))for(const pe of ne.children)pe.picked=!0;
      else N(ne)&&(ne.parent.picked=!0);
      for(const ne of re)if(ne.picked=!1,R(ne))for(const pe of ne.children)pe.picked=!1;
      else N(ne)&&ne.parent.children.every(pe=>!pe.picked)&&(ne.parent.picked=!1);
      Y()
    })), O.add(H.onDidAccept(()=>{
      H.activeItems.find(M)?.run()
    })), await Promise.race([In.toPromise(In.any(H.onDidAccept, H.onDidHide))]), l.publicLog2("chat/selectedTools", {
      enabled:m.input.selectedToolsModel.tools.get().length,total:bl.length(s.getTools())
    }), O.dispose()
  }
}
}
}), sSa, asy=