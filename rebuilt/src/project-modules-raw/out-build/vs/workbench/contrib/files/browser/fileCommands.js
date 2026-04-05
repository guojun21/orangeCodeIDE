// Module: out-build/vs/workbench/contrib/files/browser/fileCommands.js
// Offset: 32432927 (bundle byte offset)
// Size: 8270 bytes

Ht(), Nu(), Zq(), bU(), wm(), Wt(), ps(), gD(), Kf(), mk(), hs(), si(), ns(), Hw(), G_(), _r(), td(), $ie(), Uye(), ufn(), zr(), So(), Qh(), ss(), od(), Pd(), Yr(), rt(), qg(), Oh(), yq(), Ff(), _d(), _s(), nl(), wI(), iw(), Ei(), ET(), Bp(), UMe(), ru(), Afn(), EOf(), Rf(), TOf=(n, e, t)=>{
  if(Array.isArray(e)){
    const i=n.get(wd), r=n.get(lg);
    e=e.map(s=>Xiu(s)&&s.workspaceUri.scheme===_n.untitled?{
      workspaceUri:Wo(r.untitledWorkspacesHome,s.workspaceUri.path,thh)
    }
    :s), i.openWindow(e, t)
  }
}, IOf=(n, e)=>{
  n.get(wd).openWindow(e)
}, qo.registerCommandAndKeybindingRule({
  weight:200, when:ITf, primary:2051, mac:{
    primary:259
  }, id:Ygu, handler:async(n, e)=>{
    const t=n.get(yi), i=n.get(Gr), r=n.get(DC), s=Wqe(e, n.get(Nh), t, n.get(da), r);
    if(s.length){
      const o=s.filter(m=>m.scheme===_n.untitled),a=s.filter(m=>m.scheme!==_n.untitled),d=(await Promise.all(a.map(async m=>{
        const p=r.findClosest(m);
        return p||await i.stat(m)
      }))).filter(m=>!m.isDirectory).map(m=>({
        resource:m.resource,options:{
          pinned:!0
        }
      })).concat(...o.map(m=>({
        resource:m,options:{
          pinned:!0
        }
      })));
      await t.openEditors(d,Aw)
    }
  }
}), qo.registerCommandAndKeybindingRule({
  weight:210, when:Ee.and(fX, dB.toNegated()), primary:3, mac:{
    primary:2066
  }, id:"explorer.openAndPassFocus", handler:async(n, e)=>{
    const t=n.get(yi), r=n.get(DC).getContext(!0);
    r.length&&await t.openEditors(r.map(s=>({
      resource:s.resource,options:{
        preserveFocus:!1,pinned:!0
      }
    })))
  }
}), z1a="showModifications", c7e=[], qo.registerCommandAndKeybindingRule({
  id:MSa, when:void 0, weight:200, primary:Ma(Gm, 34), mac:{
    primary:Ma(Np, 34)
  }, handler:async(n, e)=>{
    const t=n.get(ln), i=n.get(El), r=n.get(yi), s=n.get(Gr), o=n.get(Nh);
    let a=!1;
    if(c7e.length===0){
      a=!0;
      const u=t.createInstance(S1t);
      c7e.push(u),c7e.push(i.registerTextModelContentProvider(z1a,u))
    }
    const l=mfn(e, r, o);
    if(l&&s.hasProvider(l)){
      const u=ca(l),d=_(7914,null,u,u);
      try{
        await S1t.open(l,z1a,d,r,{
          pinned:!0
        }),a&&c7e.push(r.onDidVisibleEditorsChange(()=>{
          r.editors.some(m=>!!gp.getCanonicalUri(m,{
            supportSideBySide:op.SECONDARY,filterByScheme:z1a
          }))||(c7e=Bo(c7e))
        }))
      }
      catch{
        c7e=Bo(c7e)
      }
    }
  }
}), Ss.registerCommand({
  id:Xgu, handler:(n, e)=>{
    BAu=mfn(e, n.get(yi), n.get(Nh)), RAu||(RAu=$Sa.bindTo(n.get(wi))), RAu.set(!0)
  }
}), Ss.registerCommand({
  id:efu, handler:async(n, e)=>{
    const t=n.get(yi), i=Wqe(e, n.get(Nh), t, n.get(da), n.get(DC));
    return i.length===2?t.openEditor({
      original:{
        resource:i[0]
      },modified:{
        resource:i[1]
      },options:{
        pinned:!0
      }
    }):!0
  }
}), Ss.registerCommand({
  id:tfu, handler:(n, e)=>{
    const t=n.get(yi), i=mfn(e, t, n.get(Nh));
    BAu&&i&&t.openEditor({
      original:{
        resource:BAu
      },modified:{
        resource:i
      },options:{
        pinned:!0
      }
    })
  }
}), PAu=async(n, e)=>{
  const t=Wqe(e, n.get(Nh), n.get(yi), n.get(da), n.get(DC));
  await TAu(t, !1, n.get(jm), n.get(Ol), n.get(Fn))
}, qo.registerCommandAndKeybindingRule({
  weight:200, when:Ci.focus.toNegated(), primary:2593, win:{
    primary:1569
  }, id:Kgn, handler:PAu
}), qo.registerCommandAndKeybindingRule({
  weight:200, when:Ci.focus, primary:Ma(Gm, 2593), mac:{
    primary:Ma(Np, 2593)
  }, win:{
    primary:1569
  }, id:Kgn, handler:PAu
}), LAu=async(n, e)=>{
  const t=Wqe(e, n.get(Nh), n.get(yi), n.get(da), n.get(DC));
  await TAu(t, !0, n.get(jm), n.get(Ol), n.get(Fn))
}, qo.registerCommandAndKeybindingRule({
  weight:200, when:Ci.focus.toNegated(), primary:3617, win:{
    primary:Ma(Gm, 3105)
  }, id:Ygn, handler:LAu
}), qo.registerCommandAndKeybindingRule({
  weight:200, when:Ci.focus, primary:Ma(Gm, 3617), mac:{
    primary:Ma(Np, 3617)
  }, win:{
    primary:Ma(Gm, 3105)
  }, id:Ygn, handler:LAu
}), qo.registerCommandAndKeybindingRule({
  weight:200, when:void 0, primary:Ma(Gm, 46), mac:{
    primary:Ma(Np, 46)
  }, id:"workbench.action.files.copyPathOfActiveFile", handler:async n=>{
    const t=n.get(yi).activeEditor, i=gp.getOriginalUri(t, {
      supportSideBySide:op.PRIMARY
    });
    await TAu(i?[i]:[], !1, n.get(jm), n.get(Ol), n.get(Fn))
  }
}), Ss.registerCommand({
  id:Vgn, handler:async(n, e)=>{
    const t=n.get(yu), i=n.get(Lr), r=n.get(DC), s=n.get(yi), o=n.get(Nh), a=mfn(e, s, o);
    if(a&&i.isInsideWorkspace(a)){
      const l=await t.openView(GJ,!1);
      if(l){
        const u=l.autoReveal;
        l.autoReveal=!1,l.setExpanded(!0),await r.select(a,"force"),l.focus(),l.autoReveal=u
      }
    }
    else{
      const l=t.getViewWithId(iwe.ID);
      l&&(l.setExpanded(!0),l.focus())
    }
  }
}), Ss.registerCommand({
  id:Zgu, handler:async(n, e)=>{
    const t=n.get(yi), i=n.get(Nh), r=mfn(e, t, i);
    if(r)return t.openEditor({
      resource:r,options:{
        override:jUe.PICK,source:rR.USER
      }
    })
  }
}), qo.registerCommandAndKeybindingRule({
  when:void 0, weight:200, primary:2097, id:Zgn, handler:n=>IAu(n, {
    reason:1, force:!0
  })
}), qo.registerCommandAndKeybindingRule({
  when:void 0, weight:200, primary:Ma(Gm, 49), mac:{
    primary:Ma(Np, 49)
  }, win:{
    primary:Ma(Gm, 3121)
  }, id:rfu, handler:n=>IAu(n, {
    reason:1, force:!0, skipSaveParticipants:!0
  })
}), qo.registerCommandAndKeybindingRule({
  id:FSa, weight:200, when:void 0, primary:3121, handler:n=>IAu(n, {
    reason:1, saveAs:!0
  })
}), qo.registerCommandAndKeybindingRule({
  when:void 0, weight:200, primary:void 0, mac:{
    primary:2609
  }, win:{
    primary:Ma(Gm, 49)
  }, id:OSa, handler:n=>xOf(n, n.get(da).getGroups(1), {
    reason:1
  })
}), Ss.registerCommand({
  id:u0i, handler:(n, e, t)=>{
    const i=n.get(da), r=gO([t], n.get(yi), i, n.get(Nh));
    let s;
    return r.groupedEditors.length?s=r.groupedEditors.map(({
      group:o
    })=>o):s=i.getGroups(1), xOf(n, s, {
      reason:1
    })
  }
}), Ss.registerCommand({
  id:sfu, handler:async n=>(await n.get(yi).saveAll({
    includeUntitled:!1, reason:1
  })).success
}), Ss.registerCommand({
  id:l0i, handler:async n=>{
    const e=n.get(da), t=n.get(yi);
    let i=qDf(n);
    if(!i){
      const r=e.activeGroup;
      r.activeEditor&&(i=[{
        groupId:r.id,editor:r.activeEditor
      }
      ])
    }
    if(!(!i||i.length===0))try{
      await t.revert(i.filter(({
        editor:r
      })=>!r.hasCapability(4)),{
        force:!0
      })
    }
    catch(r){
      n.get(ms).error(_(7919,null,i.map(({
        editor:o
      })=>o.getName()).join(", "),Jw(r,!1)))
    }
  }
}), Ss.registerCommand({
  id:afu, handler:(n, e)=>{
    const t=n.get(Lr), i=n.get(xl), r=t.getWorkspace(), s=Wqe(e, n.get(Nh), n.get(yi), n.get(da), n.get(DC)).filter(a=>r.folders.some(l=>i.extUri.isEqual(l.uri, a)));
    return s.length===0?n.get(fr).executeCommand(cbu.ID):n.get(uX).removeFolders(s)
  }
}), qo.registerCommandAndKeybindingRule({
  weight:210, when:Ee.and(fX, Mgn, jCa.negate()), primary:15, id:GIf, handler:n=>{
    const t=n.get(b0).getActivePaneComposite(0);
    if(t?.getId()!==BQ)return;
    t.getViewPaneContainer().getExplorerView().previousCompressedStat()
  }
}), qo.registerCommandAndKeybindingRule({
  weight:210, when:Ee.and(fX, Mgn, zCa.negate()), primary:17, id:WIf, handler:n=>{
    const t=n.get(b0).getActivePaneComposite(0);
    if(t?.getId()!==BQ)return;
    t.getViewPaneContainer().getExplorerView().nextCompressedStat()
  }
}), qo.registerCommandAndKeybindingRule({
  weight:210, when:Ee.and(fX, Mgn, jCa.negate()), primary:14, id:QIf, handler:n=>{
    const t=n.get(b0).getActivePaneComposite(0);
    if(t?.getId()!==BQ)return;
    t.getViewPaneContainer().getExplorerView().firstCompressedStat()
  }
}), qo.registerCommandAndKeybindingRule({
  weight:210, when:Ee.and(fX, Mgn, zCa.negate()), primary:13, id:jIf, handler:n=>{
    const t=n.get(b0).getActivePaneComposite(0);
    if(t?.getId()!==BQ)return;
    t.getViewPaneContainer().getExplorerView().lastCompressedStat()
  }
}), qo.registerCommandAndKeybindingRule({
  weight:200, when:null, primary:Eu?Sc?Ma(Gm, 44):2604:2092, secondary:Eu?[2092]:void 0, id:xit, metadata:{
    description:cfu, args:[{
      isOptional:!0,name:"New Untitled Text File arguments",description:"The editor view type or language ID if known",schema:{
        type:"object",properties:{
          viewType:{
            type:"string"
          },languageId:{
            type:"string"
          }
        }
      }
    }
    ]
  }, handler:async(n, e)=>{
    await n.get(yi).openEditor({
      resource:void 0,options:{
        override:e?.viewType,pinned:!0
      },languageId:e?.languageId
    })
  }
}), Ss.registerCommand({
  id:zIf, handler:async(n, e)=>{
    const t=n.get(yi), i=n.get(oy), r=n.get(Gr), s=_(7920, null), o=Wo(await i.defaultFilePath(), e?.fileName??"Untitled.txt"), a=await i.showSaveDialog({
      saveLabel:s,title:s,defaultUri:o
    });
    a&&(await r.createFile(a, void 0, {
      overwrite:!0
    }), await t.openEditor({
      resource:a,options:{
        override:e?.viewType,pinned:!0
      },languageId:e?.languageId
    }))
  }
})
}
});
function V1a(n, e, t, i, r, s){
  const o=r!==!0?pkt.negate():void 0;
  or.appendMenuItem(st.EditorTitleContext, {
    command:{
      id:n,title:e,precondition:o
    }, when:t, group:i, order:s
  })
}
function DOf(n, e, t, i, r){
  Ss.registerCommand(n, r), or.appendMenuItem(st.EditorTitle, {
    command:{
      id:n,title:e,icon:t
    }, when:Ee.equals(ibu, !0), group:"navigation", order:i
  })
}
function rpe({
  id:n, title:e, category:t, metadata:i
}, r){
  or.appendMenuItem(st.CommandPalette, {
    command:{
      id:n,title:e,category:t,metadata:i
    }, when:r
  })
}
var YMe, NAu, MAu, bCi, FAu, OAu, K1a, $fn, qfn, V1t, Y1a, vCi, UAu, $Au, Z1a, BOf, ROf, POf, LOf, X1a=