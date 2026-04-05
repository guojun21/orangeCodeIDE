// Module: out-build/vs/workbench/browser/parts/editor/editorCommandsContext.js
// Offset: 31182976 (bundle byte offset)
// Size: 19495 bytes

ri(), SW(), Yn(), Nu(), od()
}
});
function Vsy(){
  const n={
    type:"object", required:["to"], properties:{
      to:{
        type:"string",enum:["left","right"]
      },by:{
        type:"string",enum:["tab","group"]
      },value:{
        type:"number"
      }
    }
  };
  qo.registerCommandAndKeybindingRule({
    id:twe, weight:200, when:Ci.editorTextFocus, primary:0, handler:(s, o)=>e(!0, o, s), metadata:{
      description:_(3699,null),args:[{
        name:_(3700,null),description:_(3701,null),constraint:$fu,schema:n
      }
      ]
    }
  }), qo.registerCommandAndKeybindingRule({
    id:JMe, weight:200, when:Ci.editorTextFocus, primary:0, handler:(s, o)=>e(!1, o, s), metadata:{
      description:_(3702,null),args:[{
        name:_(3703,null),description:_(3704,null),constraint:$fu,schema:n
      }
      ]
    }
  });
  function e(s, o=Object.create(null), a){
    o.to=o.to||"right", o.by=o.by||"tab", o.value=typeof o.value=="number"?o.value:1;
    const l=a.get(da).activeGroup, u=l.selectedEditors;
    if(u.length>0)switch(o.by){
      case"tab":if(s)return t(o,l,u);
      break;
      case"group":return r(s,o,l,u,a)
    }
  }
  function t(s, o, a){
    const l=s.to;
    l==="first"||l==="right"?a=[...a].reverse():l==="position"&&(s.value??1)<o.getIndexOfEditor(a[0])&&(a=[...a].reverse());
    for(const u of a)i(s, o, u)
  }
  function i(s, o, a){
    let l=o.getIndexOfEditor(a);
    switch(s.to){
      case"first":l=0;
      break;
      case"last":l=o.count-1;
      break;
      case"left":l=l-(s.value??1);
      break;
      case"right":l=l+(s.value??1);
      break;
      case"center":l=Math.round(o.count/2)-1;
      break;
      case"position":l=(s.value??1)-1;
      break
    }
    l=l<0?0:l>=o.count?o.count-1:l, o.moveEditor(a, o, {
      index:l
    })
  }
  function r(s, o, a, l, u){
    const d=u.get(da), m=u.get(Fn);
    let p;
    switch(o.to){
      case"left":p=d.findGroup({
        direction:2
      },a),p||(p=d.addGroup(a,2));
      break;
      case"right":p=d.findGroup({
        direction:3
      },a),p||(p=d.addGroup(a,3));
      break;
      case"up":p=d.findGroup({
        direction:0
      },a),p||(p=d.addGroup(a,0));
      break;
      case"down":p=d.findGroup({
        direction:1
      },a),p||(p=d.addGroup(a,1));
      break;
      case"first":p=d.findGroup({
        location:0
      },a);
      break;
      case"last":p=d.findGroup({
        location:1
      },a);
      break;
      case"previous":p=d.findGroup({
        location:3
      },a);
      break;
      case"next":p=d.findGroup({
        location:2
      },a),p||(p=d.addGroup(a,dNe(m)));
      break;
      case"center":p=d.getGroups(2)[d.count/2-1];
      break;
      case"position":p=d.getGroups(2)[(o.value??1)-1];
      break
    }
    if(p){
      const g=HSa(a,l);
      s?a.moveEditors(g,p):a.id!==p.id&&a.copyEditors(g,p),p.focus()
    }
  }
}
function Ksy(){
  function n(e, t){
    if(!t||typeof t!="object")return;
    e.get(da).applyLayout(t)
  }
  Ss.registerCommand(GMe, (e, t)=>{
    n(e, t)
  }), Ss.registerCommand({
    id:"vscode.setEditorLayout", handler:(e, t)=>n(e, t), metadata:{
      description:`Set the editor layout. Editor layout is represented as a tree of groups in which the first group is the root group of the layout.
					The orientation of the first group is 0 (horizontal) by default unless specified otherwise. The other orientations are 1 (vertical).
					The orientation of subsequent groups is the opposite of the orientation of the group that contains it.
					Here are some examples: A layout representing 1 row and 2 columns: { orientation: 0, groups: [{}, {}] }.
					A layout representing 3 rows and 1 column: { orientation: 1, groups: [{}, {}, {}] }.
					A layout representing 3 rows and 1 column in which the second row has 2 columns: { orientation: 1, groups: [{}, { groups: [{}, {}] }, {}] }
					`,args:[{
        name:"args",schema:{
          type:"object",required:["groups"],properties:{
            orientation:{
              type:"number",default:0,description:"The orientation of the root group in the layout. 0 for horizontal, 1 for vertical.",enum:[0,1],enumDescriptions:[_(3705,null),_(3706,null)]
            },groups:{
              $ref:"#/definitions/editorGroupsSchema",default:[{
                
              },{
                
              }
              ]
            }
          }
        }
      }
      ]
    }
  }), Ss.registerCommand({
    id:"vscode.getEditorLayout", handler:e=>e.get(da).getLayout(), metadata:{
      description:"Get Editor Layout",args:[],returns:"An editor layout object, in the same format as vscode.setEditorLayout"
    }
  })
}
function Ysy(){
  function n(e, t, i){
    return e?[{
      ...e.editorOptions,...t??Object.create(null)
    }, e.sideBySide?Aw:i]:[t, i]
  }
  Ss.registerCommand({
    id:"vscode.open", handler:(e, t)=>{
      e.get(fr).executeCommand(vX,t)
    }, metadata:{
      description:"Opens the provided resource in the editor.",args:[{
        name:"Uri"
      }
      ]
    }
  }), Ss.registerCommand(vX, async function(e, t, i, r, s){
    const o=e.get(yi), a=e.get(da), l=e.get(Ja), u=e.get(kp), d=e.get(Fn), m=e.get(Pit), p=typeof t=="string"?t:je.from(t, !0), [g, f]=i??[];
    if(f||typeof g=="number"||OR(p, _n.untitled)){
      const[A,w]=n(s,f,g),C=je.isUri(p)?p:je.parse(p);
      let x;
      m.isUntitledWithAssociatedResource(C)?x={
        resource:C.with({
          scheme:u.defaultUriScheme
        }),forceUntitled:!0,options:A,label:r
      }
      :x={
        resource:C,options:A,label:r
      },await o.openEditor(x,qqe(a,d,w))
    }
    else{
      if(OR(p,_n.command))return;
      await l.open(p,{
        openToSide:s?.sideBySide,editorOptions:s?.editorOptions
      })
    }
  }), Ss.registerCommand({
    id:"vscode.diff", handler:(e, t, i, r)=>{
      e.get(fr).executeCommand(Vme,t,i,r)
    }, metadata:{
      description:"Opens the provided resources in the diff editor to compare their contents.",args:[{
        name:"left",description:"Left-hand side resource of the diff editor"
      },{
        name:"right",description:"Right-hand side resource of the diff editor"
      },{
        name:"title",description:"Human readable title for the diff editor"
      }
      ]
    }
  }), Ss.registerCommand(Vme, async function(e, t, i, r, s, o){
    const a=e.get(yi), l=e.get(da), u=e.get(Fn), [d, m]=s??[], [p, g]=n(o, m, d);
    let f, A;
    typeof r=="string"?f=r:r&&(f=r.label, A=r.description), await a.openEditor({
      original:{
        resource:je.from(t,!0)
      },modified:{
        resource:je.from(i,!0)
      },label:f,description:A,options:p
    }, qqe(l, u, g))
  }), Ss.registerCommand(MDf, async(e, t, i, r)=>{
    const s=e.get(yi), o=e.get(da), a=e.get(Fn), [l, u]=r??[];
    await s.openEditor({
      resource:je.from(t,!0),options:{
        pinned:!0,...u,override:i
      }
    }, qqe(o, a, l))
  }), Ss.registerCommand({
    id:"vscode.changes", handler:(e, t, i)=>{
      e.get(fr).executeCommand("_workbench.changes",t,i)
    }, metadata:{
      description:"Opens a list of resources in the changes editor to compare their contents.",args:[{
        name:"title",description:"Human readable title for the diff editor"
      },{
        name:"resources",description:"List of resources to open in the changes editor"
      }
      ]
    }
  }), Ss.registerCommand("_workbench.changes", async(e, t, i)=>{
    const r=e.get(yi), s=[];
    for(const[o, a, l]of i)s.push({
      resource:je.revive(o),original:{
        resource:je.revive(a)
      },modified:{
        resource:je.revive(l)
      }
    });
    await r.openEditor({
      resources:s,label:t
    })
  }), Ss.registerCommand("_workbench.openMultiDiffEditor", async(e, t)=>{
    await e.get(yi).openEditor({
      multiDiffSource:t.multiDiffSourceUri?je.revive(t.multiDiffSourceUri):void 0,resources:t.resources?.map(r=>({
        original:{
          resource:je.revive(r.originalUri)
        },modified:{
          resource:je.revive(r.modifiedUri)
        }
      })),label:t.title
    })
  })
}
function Zsy(){
  const n=(t, i)=>{
    const r=t.get(yi), s=r.activeEditorPane;
    if(s){
      const o=s.group.getEditorByIndex(i);
      o&&r.openEditor(o)
    }
  };
  Ss.registerCommand({
    id:Nfu, handler:n
  });
  for(let t=0;
  t<9;
  t++){
    const i=t, r=t+1;
    qo.registerCommandAndKeybindingRule({
      id:Nfu+r,weight:200,when:void 0,primary:512|e(r),mac:{
        primary:256|e(r)
      },handler:s=>n(s,i)
    })
  }
  function e(t){
    switch(t){
      case 0:return 21;
      case 1:return 22;
      case 2:return 23;
      case 3:return 24;
      case 4:return 25;
      case 5:return 26;
      case 6:return 27;
      case 7:return 28;
      case 8:return 29;
      case 9:return 30
    }
    throw new Error("invalid index")
  }
}
function Xsy(){
  for(let t=1;
  t<8;
  t++)qo.registerCommandAndKeybindingRule({
    id:n(t), weight:200, when:void 0, primary:2048|e(t), handler:i=>{
      const r=i.get(da),s=i.get(Fn);
      if(t>r.count)return;
      const o=r.getGroups(2);
      if(o[t])return o[t].focus();
      const a=dNe(s),l=r.findGroup({
        location:1
      });
      if(!l)return;
      r.addGroup(l,a).focus()
    }
  });
  function n(t){
    switch(t){
      case 1:return"workbench.action.focusSecondEditorGroup";
      case 2:return"workbench.action.focusThirdEditorGroup";
      case 3:return"workbench.action.focusFourthEditorGroup";
      case 4:return"workbench.action.focusFifthEditorGroup";
      case 5:return"workbench.action.focusSixthEditorGroup";
      case 6:return"workbench.action.focusSeventhEditorGroup";
      case 7:return"workbench.action.focusEighthEditorGroup"
    }
    throw new Error("Invalid index")
  }
  function e(t){
    switch(t){
      case 1:return 23;
      case 2:return 24;
      case 3:return 25;
      case 4:return 26;
      case 5:return 27;
      case 6:return 28;
      case 7:return 29
    }
    throw new Error("Invalid index")
  }
}
async function ska(n, e, t){
  const i=n.get(da), r=n.get(fr);
  if(!t.groupedEditors.length)return;
  const{
    group:s, editors:o
  }
  =t.groupedEditors[0], a=t.preserveFocus;
  let l;
  for(const u of o){
    if(u?.resource?.scheme==="cursor-browser")try{
      await r.executeCommand("browser.splitEditorWithNewBrowserTabToDirection",u,s,e,a);
      continue
    }
    catch(d){
      console.warn("Failed to split browser editor with new browser tab, falling back to default behavior:",d)
    }
    u&&(u.hasCapability(32)||!u.hasCapability(8))&&(l||(l=i.addGroup(s, e)), s.copyEditor(u, l, {
      preserveFocus:a
    }))
  }
  l&&l.focus()
}
function eoy(){
  [{
    id:Mit, direction:0
  }, {
    id:Jqe, direction:1
  }, {
    id:Fit, direction:2
  }, {
    id:Gqe, direction:3
  }
  ].forEach(({
    id:n, direction:e
  })=>{
    Ss.registerCommand(n, async function(t, ...i){
      const r=gO(i,t.get(yi),t.get(da),t.get(Nh));
      if(r.groupedEditors.length>0){
        const{
          group:s,editors:o
        }
        =r.groupedEditors[0],a=o[0];
        if(a&&a.resource?.scheme===_n.composer){
          await toy(t,a,s,e,r.preserveFocus);
          return
        }
        if(a&&a.resource?.scheme==="cursor-browser")try{
          await t.get(fr).executeCommand("browser.splitEditorWithNewBrowserTabToDirection",a,s,e,r.preserveFocus);
          return
        }
        catch(l){
          console.warn("Failed to split browser editor with new browser tab, falling back to default behavior:",l)
        }
      }
      await ska(t,e,r)
    })
  })
}
async function toy(n, e, t, i, r){
  const s=n.get(da), o=n.get(fr), a=n.get(yi);
  try{
    await o.executeCommand("composer.createNewComposerTab");
    const l=a.activeEditor;
    if(l&&l.resource?.scheme===_n.composer&&l!==e){
      let u=s.findGroup({
        direction:i
      },t);
      u||(u=s.addGroup(t,i));
      const d=s.activeGroup;
      d!==u&&d.moveEditor(l,u),r||u.focus()
    }
    else console.warn("New composer editor not found or invalid after creation, falling back to default behavior"), await ska(n, i, {
      groupedEditors:[{
        group:t,editors:[e]
      }
      ],preserveFocus:r
    })
  }
  catch(l){
    console.warn("Failed to split composer editor, falling back to default behavior:", l), await ska(n, i, {
      groupedEditors:[{
        group:t,editors:[e]
      }
      ],preserveFocus:r
    })
  }
}
function noy(){
  function n(e, t, ...i){
    const r=e.get(da), s=e.get(yi);
    let o;
    if(t||i.length?o=!1:o=r.partOptions.preventPinnedEditorClose==="keyboard"||r.partOptions.preventPinnedEditorClose==="keyboardAndMouse", o){
      const u=r.activeGroup,d=u.activeEditor;
      if(d&&u.isSticky(d)){
        const m=u.getEditors(0,{
          excludeSticky:!0
        })[0];
        if(m)return u.openEditor(m);
        const p=s.getEditors(0,{
          excludeSticky:!0
        })[0];
        if(p)return Promise.resolve(r.getGroup(p.groupId)?.openEditor(p.editor))
      }
    }
    const a=gO(i, e.get(yi), e.get(da), e.get(Nh)), l=a.preserveFocus;
    return Promise.all(a.groupedEditors.map(async({
      group:u,editors:d
    })=>{
      const m=d.filter(p=>!o||!u.isSticky(p));
      await u.closeEditors(m,{
        preserveFocus:l
      })
    }))
  }
  qo.registerCommandAndKeybindingRule({
    id:$ce, weight:200, when:void 0, primary:2101, win:{
      primary:2110,secondary:[2101]
    }, handler:(e, ...t)=>n(e, !1, ...t)
  }), Ss.registerCommand(Ifu, (e, ...t)=>n(e, !0, ...t)), qo.registerCommandAndKeybindingRule({
    id:Lit, weight:200, when:void 0, primary:Ma(Gm, 53), mac:{
      primary:Ma(Np,53)
    }, handler:(e, ...t)=>{
      const i=gO(t,e.get(yi),e.get(da),e.get(Nh));
      return Promise.all(i.groupedEditors.map(async({
        group:r
      })=>{
        await r.closeAllEditors({
          excludeSticky:!0
        })
      }))
    }
  }), qo.registerCommandAndKeybindingRule({
    id:cka, weight:200, when:Ee.and(rpn, yQ), primary:2101, win:{
      primary:2110,secondary:[2101]
    }, handler:(e, ...t)=>{
      const i=e.get(da),r=gO(t,e.get(yi),i,e.get(Nh));
      r.groupedEditors.length&&i.removeGroup(r.groupedEditors[0].group)
    }
  }), qo.registerCommandAndKeybindingRule({
    id:dfn, weight:200, when:void 0, primary:Ma(Gm, 51), mac:{
      primary:Ma(Np,51)
    }, handler:(e, ...t)=>{
      const i=gO(t,e.get(yi),e.get(da),e.get(Nh));
      return Promise.all(i.groupedEditors.map(async({
        group:r
      })=>{
        await r.closeEditors({
          savedOnly:!0,excludeSticky:!0
        },{
          preserveFocus:i.preserveFocus
        })
      }))
    }
  }), qo.registerCommandAndKeybindingRule({
    id:f0i, weight:200, when:void 0, primary:void 0, mac:{
      primary:2610
    }, handler:(e, ...t)=>{
      const i=gO(t,e.get(yi),e.get(da),e.get(Nh));
      return Promise.all(i.groupedEditors.map(async({
        group:r,editors:s
      })=>{
        const o=r.getEditors(1,{
          excludeSticky:!0
        }).filter(a=>!s.includes(a));
        for(const a of s)a&&r.pinEditor(a);
        await r.closeEditors(o,{
          preserveFocus:i.preserveFocus
        })
      }))
    }
  }), qo.registerCommandAndKeybindingRule({
    id:aka, weight:200, when:void 0, primary:void 0, handler:async(e, ...t)=>{
      const i=gO(t,e.get(yi),e.get(da),e.get(Nh));
      if(i.groupedEditors.length){
        const{
          group:r,editors:s
        }
        =i.groupedEditors[0];
        r.activeEditor&&r.pinEditor(r.activeEditor),await r.closeEditors({
          direction:1,except:s[0],excludeSticky:!0
        },{
          preserveFocus:i.preserveFocus
        })
      }
    }
  }), qo.registerCommandAndKeybindingRule({
    id:b0i, weight:200, when:void 0, primary:void 0, handler:async(e, ...t)=>{
      const i=e.get(yi),r=e.get(vD),s=e.get(ea),o=gO(t,i,e.get(da),e.get(Nh)),a=new Map;
      for(const{
        group:l,editors:u
      }
      of o.groupedEditors)for(const d of u){
        const m=d.toUntyped();
        if(!m)return;
        m.options={
          ...i.activeEditorPane?.options,override:jUe.PICK
        };
        const p=await r.resolveEditor(m,l);
        if(!Wun(p))return;
        let g=a.get(l);
        g||(g=[],a.set(l,g)),g.push({
          editor:d,replacement:p.editor,forceReplaceDirty:d.resource?.scheme===_n.untitled,options:p.options
        }),s.publicLog2("workbenchEditorReopen",{
          scheme:d.resource?.scheme??"",ext:d.resource?hk(d.resource):"",from:d.editorId??"",to:p.editor.editorId??""
        })
      }
      for(const[l,u]of a)await l.replaceEditors(u),await l.openEditor(u[0].replacement)
    }
  }), Ss.registerCommand(oka, async(e, ...t)=>{
    const i=e.get(da), r=gO(t, e.get(yi), i, e.get(Nh));
    if(r.groupedEditors.length){
      const{
        group:s
      }
      =r.groupedEditors[0];
      await s.closeAllEditors(),s.count===0&&i.getGroup(s.id)&&i.removeGroup(s)
    }
  })
}
function ioy(){
  const n=[{
    id:RDf, direction:2
  }, {
    id:PDf, direction:3
  }, {
    id:LDf, direction:0
  }, {
    id:NDf, direction:1
  }
  ];
  for(const e of n)Ss.registerCommand(e.id, async t=>{
    const i=t.get(da);
    (i.findGroup({
      direction:e.direction
    }, i.activeGroup, !1)??i.activeGroup).focus()
  })
}
function roy(){
  async function n(t, i){
    const r=t.get(ln), s=t.get(fr);
    if(!i.groupedEditors.length)return;
    const{
      group:o,editors:a
    }
    =i.groupedEditors[0], l=a[0];
    if(l){
      if(l.resource?.scheme===_n.composer)try{
        await s.executeCommand("composer.splitEditorWithNewComposer",l,o);
        return
      }
      catch(u){
        console.warn("Failed to split composer editor with new composer, falling back to default behavior:",u)
      }
      if(l.resource?.scheme==="cursor-browser")try{
        await s.executeCommand("browser.splitEditorWithNewBrowserTab",l,o);
        return
      }
      catch(u){
        console.warn("Failed to split browser editor with new browser tab, falling back to default behavior:",u)
      }
      await o.replaceEditors([{
        editor:l,replacement:r.createInstance(O1,void 0,void 0,l,l),forceReplaceDirty:!0
      }
      ])
    }
  }
  Dt(class extends rn{
    constructor(){
      super({
        id:mka,title:dt(3707,"Split Editor in Group"),category:Br.View,precondition:Int,f1:!0,keybinding:{
          weight:200,when:Int,primary:Ma(Gm,3165),mac:{
            primary:Ma(Np,3165)
          }
        }
      })
    }
    run(t, ...i){
      return n(t,gO(i,t.get(yi),t.get(da),t.get(Nh)))
    }
  });
  async function e(t){
    if(!t.groupedEditors.length)return;
    const{
      group:i,editors:r
    }
    =t.groupedEditors[0], s=r[0];
    if(!s||!(s instanceof O1))return;
    let o;
    const a=i.activeEditorPane;
    if(a instanceof Oce&&i.activeEditor===s){
      for(const l of[a.getPrimaryEditorPane(),a.getSecondaryEditorPane()])if(l?.hasFocus()){
        o={
          viewState:l.getViewState()
        };
        break
      }
    }
    await i.replaceEditors([{
      editor:s,replacement:s.primary,options:o
    }
    ])
  }
  Dt(class extends rn{
    constructor(){
      super({
        id:pka,title:dt(3708,"Join Editor in Group"),category:Br.View,precondition:fie,f1:!0,keybinding:{
          weight:200,when:fie,primary:Ma(Gm,3165),mac:{
            primary:Ma(Np,3165)
          }
        }
      })
    }
    run(t, ...i){
      return e(gO(i,t.get(yi),t.get(da),t.get(Nh)))
    }
  }), Dt(class extends rn{
    constructor(){
      super({
        id:DDf,title:dt(3709,"Toggle Split Editor in Group"),category:Br.View,precondition:Ee.or(Int,fie),f1:!0
      })
    }
    async run(t, ...i){
      const r=gO(i,t.get(yi),t.get(da),t.get(Nh));
      if(!r.groupedEditors.length)return;
      const{
        editors:s
      }
      =r.groupedEditors[0];
      s[0]instanceof O1?await e(r):s[0]&&await n(t,r)
    }
  }), Dt(class extends rn{
    constructor(){
      super({
        id:Rfu,title:dt(3710,"Toggle Layout of Split Editor in Group"),category:Br.View,precondition:fie,f1:!0
      })
    }
    async run(t){
      const i=t.get(Fn),r=i.getValue(Oce.SIDE_BY_SIDE_LAYOUT_SETTING);
      let s;
      return r!=="horizontal"?s="horizontal":s="vertical",i.updateValue(Oce.SIDE_BY_SIDE_LAYOUT_SETTING,s)
    }
  })
}
function soy(){
  Dt(class extends rn{
    constructor(){
      super({
        id:Pfu,title:dt(3711,"Focus First Side in Active Editor"),category:Br.View,precondition:Ee.or(fie,AQ),f1:!0
      })
    }
    async run(n){
      const e=n.get(yi),t=n.get(fr),i=e.activeEditorPane;
      i instanceof Oce?i.getSecondaryEditorPane()?.focus():i instanceof $qe&&await t.executeCommand(kfu)
    }
  }), Dt(class extends rn{
    constructor(){
      super({
        id:Lfu,title:dt(3712,"Focus Second Side in Active Editor"),category:Br.View,precondition:Ee.or(fie,AQ),f1:!0
      })
    }
    async run(n){
      const e=n.get(yi),t=n.get(fr),i=e.activeEditorPane;
      i instanceof Oce?i.getPrimaryEditorPane()?.focus():i instanceof $qe&&await t.executeCommand(Sfu)
    }
  }), Dt(class extends rn{
    constructor(){
      super({
        id:BDf,title:dt(3713,"Focus Other Side in Active Editor"),category:Br.View,precondition:Ee.or(fie,AQ),f1:!0
      })
    }
    async run(n){
      const e=n.get(yi),t=n.get(fr),i=e.activeEditorPane;
      i instanceof Oce?i.getPrimaryEditorPane()?.hasFocus()?i.getSecondaryEditorPane()?.focus():i.getPrimaryEditorPane()?.focus():i instanceof $qe&&await t.executeCommand(Efu)
    }
  })
}
function ooy(){
  qo.registerCommandAndKeybindingRule({
    id:lka, weight:200, when:void 0, primary:Ma(Gm, 3), mac:{
      primary:Ma(Np,3)
    }, handler:async(e, ...t)=>{
      const i=gO(t,e.get(yi),e.get(da),e.get(Nh));
      for(const{
        group:r,editors:s
      }
      of i.groupedEditors)for(const o of s)r.pinEditor(o)
    }
  }), Ss.registerCommand({
    id:Dfu, handler:e=>{
      const t=e.get(Fn),r=t.getValue("workbench.editor.enablePreview")!==!0;
      t.updateValue("workbench.editor.enablePreview",r)
    }
  });
  function n(e, t, ...i){
    const s=gO(i, e.get(yi), e.get(da), e.get(Nh)).groupedEditors[0]?.group;
    s?.lock(t??!s.isLocked)
  }
  Dt(class extends rn{
    constructor(){
      super({
        id:uka,title:dt(3714,"Toggle Editor Group Lock"),category:Br.View,f1:!0
      })
    }
    async run(e, ...t){
      n(e,void 0,...t)
    }
  }), Dt(class extends rn{
    constructor(){
      super({
        id:dka,title:dt(3715,"Lock Editor Group"),category:Br.View,precondition:Dye.toNegated(),f1:!0
      })
    }
    async run(e, ...t){
      n(e,!0,...t)
    }
  }), Dt(class extends rn{
    constructor(){
      super({
        id:N1t,title:dt(3716,"Unlock Editor Group"),precondition:Dye,category:Br.View,f1:!0
      })
    }
    async run(e, ...t){
      n(e,!1,...t)
    }
  }), qo.registerCommandAndKeybindingRule({
    id:hka, weight:200, when:PEe.toNegated(), primary:Ma(Gm, 1027), mac:{
      primary:Ma(Np,1027)
    }, handler:async(e, ...t)=>{
      const i=gO(t,e.get(yi),e.get(da),e.get(Nh));
      for(const{
        group:r,editors:s
      }
      of i.groupedEditors)for(const o of s)r.stickEditor(o)
    }
  }), qo.registerCommandAndKeybindingRule({
    id:EDf, weight:200, when:Ci.inDiffEditor, primary:Ma(Gm, 1069), mac:{
      primary:Ma(Np,1069)
    }, handler:async e=>{
      const t=e.get(yi),i=e.get(da),r=t.activeEditor,s=t.activeTextEditorControl;
      if(!iB(s)||!(r instanceof kE))return;
      let o;
      return s.getOriginalEditor().hasTextFocus()?o=r.original:o=r.modified,i.activeGroup.openEditor(o)
    }
  }), qo.registerCommandAndKeybindingRule({
    id:Nit, weight:200, when:PEe, primary:Ma(Gm, 1027), mac:{
      primary:Ma(Np,1027)
    }, handler:async(e, ...t)=>{
      const i=gO(t,e.get(yi),e.get(da),e.get(Nh));
      for(const{
        group:r,editors:s
      }
      of i.groupedEditors)for(const o of s)r.unstickEditor(o)
    }
  }), qo.registerCommandAndKeybindingRule({
    id:Bfu, weight:200, when:void 0, primary:void 0, handler:(e, ...t)=>{
      const i=e.get(da),r=e.get(ha),o=gO(t,e.get(yi),i,e.get(Nh)).groupedEditors[0]?.group;
      return o&&i.activateGroup(o),r.quickAccess.show($$e.PREFIX)
    }
  })
}
function aoy(){
  Vsy(), Ksy(), Gsy(), Ysy(), Zsy(), noy(), ooy(), roy(), soy(), Xsy(), eoy(), ioy()
}
var dfn, Lit, oka, aka, $ce, Ifu, cka, f0i, twe, JMe, GMe, lka, Dfu, uka, dka, N1t, Bfu, b0i, hka, Nit, v0i, Mit, Jqe, Fit, Gqe, A0i, mka, DDf, pka, Rfu, Pfu, Lfu, BDf, RDf, PDf, LDf, NDf, Nfu, y0i, gka, Mfu, Ffu, Ofu, vX, Vme, MDf, Ufu, $fu, l5=