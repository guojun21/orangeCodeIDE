// Module: out-build/vs/workbench/contrib/composer/browser/components/OmniboxDropdown.js
// Offset: 32195342 (bundle byte offset)
// Size: 85372 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), Jr(), mCi=qe("<i>"), d4f=qe('<img alt=""class=omnibox-item-favicon>'), h4f=qe("<div class=omnibox-dropdown>"), m4f=qe("<span class=omnibox-search-prefix>Search Google for "), p4f=qe("<div class=omnibox-item-url>"), g4f=qe('<button class=omnibox-delete-button title="Remove from history"><i>'), f4f=qe("<div><div class=omnibox-item-icon></div><div class=omnibox-item-content><div class=omnibox-item-title></div></div><div class=omnibox-item-actions>"), mAu=qe("<span>")
}
});
function v4f(n){
  if(!n)return{
    protocol:"", domain:"", port:"", path:""
  };
  try{
    const e=new URL(n), t=e.protocol+"//", i=e.hostname, r=e.port?`:${e.port}`:"", s=e.pathname+e.search+e.hash;
    return{
      protocol:t,domain:i,port:r,path:s==="/"?"":s
    }
  }
  catch{
    return{
      protocol:"",domain:n,port:"",path:""
    }
  }
}
function hxe(n){
  return n.length<=bAu?n:n.slice(0, bAu-3)+"..."
}
function N1a(n, e, t){
  if(!n)return e||"Bookmark";
  let i;
  try{
    i=new URL(n)
  }
  catch{
    return hxe(e||n)
  }
  const r=i.hostname.toLowerCase(), s=i.pathname, o=s.split("/").filter(Boolean), a=r.replace(/^www\./, "");
  if(a==="github.com"){
    const d=$cy(o, t, e);
    if(d)return hxe(d)
  }
  if(a==="stackoverflow.com"&&o.length>=3&&o[0]==="questions"){
    const d=o[2].replace(/-/g, " ");
    return hxe(`SO: ${d}`)
  }
  if(a==="youtube.com"||r==="youtu.be"){
    if(e&&e!=="YouTube"){
      const d=e.replace(/\s*-\s*YouTube$/,"").trim();
      if(d)return hxe(d)
    }
    return"YouTube"
  }
  if(a==="npmjs.com"&&o.length>=2&&o[0]==="package"){
    const d=o.slice(1).join("/");
    return hxe(`npm: ${d}`)
  }
  if(a==="google.com"&&s.startsWith("/search")){
    const d=i.searchParams.get("q");
    if(d)return hxe(`Google: ${d}`)
  }
  if(r==="developer.mozilla.org"){
    const d=o[o.length-1];
    if(d)return hxe(`MDN: ${d}`)
  }
  if((r.includes("docs.")||s.includes("/docs/")||s.includes("/documentation/"))&&e){
    const d=e.replace(/\s*[|\-]\s*.*$/, "").trim();
    if(d.length>0)return hxe(d)
  }
  if(e){
    const d=a.split(".")[0], m=e.toLowerCase();
    if(!(m===d.toLowerCase()||m.match(new RegExp(`^${d}\\s*$`, "i")))){
      const g=e.replace(/\s*[|\-]\s*[^|\-]*$/,"").trim();
      if(g.length>3)return hxe(g)
    }
  }
  if(o.length>0){
    const d=o.find(m=>m.length>2&&!/^\d+$/.test(m)&&m!=="index.html");
    if(d){
      const m=d.replace(/[-_]/g," ").replace(/\.[^.]+$/,"");
      return hxe(`${a}: ${m}`)
    }
  }
  const u=i.port?`:${i.port}`:"";
  return hxe(a+u)
}
function Ucy(n){
  const e=n.replace(/\s*·\s*GitHub$/, "").trim(), t=e.match(/^(.+?)\s+by\s+\S+\s+·\s+Pull Request/i);
  if(t)return t[1].trim();
  const i=e.match(/^(.+?)\s+·\s+Pull Request/i);
  return i?i[1].trim():null
}
function $cy(n, e, t){
  if(n.length===1)return`GitHub: ${n[0]}`;
  if(n.length<2)return null;
  const i=n[0], r=n[1];
  if(n.length<4)return`${i}/${r}`;
  const s=n[2], o=n[3];
  switch(s){
    case"pull":{
      const a=Ucy(t);
      return a?`${e?`PR #${
        o
      }
      `:`${
        i
      }
      /${
        r
      }
       PR #${
        o
      }
      `}: ${a}`:e?`PR #${o}`:`${i}/${r} PR #${o}`
    }
    case"issues":return`${i}/${r} #${o}`;
    case"blob":case"tree":{
      const a=n[n.length-1];
      return`${r}/${a}`
    }
    case"actions":return`${i}/${r} Actions`;
    case"commit":return`${i}/${r}@${o.slice(0,7)}`;
    case"releases":return n.length>=5&&n[4]?`${r} ${n[4]}`:`${r} Releases`;
    default:return`${i}/${r}`
  }
}
function qcy(n){
  const e=wr(), t=e.browserViewStore, i=n.browserId, r=e.browserAutomationService, s=()=>t.getView(i), [o, a]=lt(0), l=()=>e.workspaceContextService.getWorkspace().folders.length===1, u=async Nr=>{
    const fo=s();
    if(fo)return fo.executeJavaScript(Nr)
  }, d=xe(()=>i), m=s()?.getTabState(), p=r.getLastUrl(i), g=m?.url||p||"", f=Xit(g)?"":g, [A, w]=lt(f), [C, x]=lt(f), [I, B]=lt(!1), [R, N]=lt(!1), [M, O]=lt(!1), [$, H]=lt(!!f), [W, z]=lt(!1), [Y, j]=lt(!1), [X, ee]=lt(null), [re, ne]=lt(!1), [pe, le]=lt(!0), [he, be]=lt(!1), [fe, ke]=lt(!1);
  let Se=!1;
  const[Fe, De]=lt([]), [Pe, Ne]=lt([]), [Oe, Ge]=lt([]), [Le, We]=lt(!1), [tt, it]=lt(!1), [bt, Nt]=lt(!1);
  let ft=null, _t=null;
  const It=()=>{
    if(typeof window<"u"){
      const Nr=localStorage.getItem("css-inspector-width");
      if(Nr){
        const fo=parseInt(Nr,10);
        if(!isNaN(fo)&&fo>=250&&fo<=800)return fo
      }
    }
    return 300
  }, [sn, Vt]=lt(It()), [Ft, Xt]=lt(!1), bn=()=>{
    if(typeof window<"u"){
      const Nr=localStorage.getItem("element-tree-height");
      if(Nr){
        const fo=parseInt(Nr,10);
        if(!Number.isNaN(fo)&&fo>=100&&fo<=600)return fo
      }
    }
    return 240
  }, [St, Bt]=lt(bn()), [Jt, Ot]=lt(!1), [cn, Mt]=lt(!1), [Pt, ut]=lt(!1);
  An(()=>{
    const Nr=Date.now(), fo=()=>{
      try{
        e.analyticsService.trackEvent("browser.heartbeat",{
          durationSeconds:Math.floor((Date.now()-Nr)/1e3),tabCount:t.getAllViewIds().length,isDevToolsOpen:Pt(),isCssInspectorOpen:re()
        })
      }
      catch{
        
      }
    }, Va=window.setInterval(fo, 300*1e3);
    Ai(()=>{
      window.clearInterval(Va),fo()
    })
  }), An(Bf(A, (Nr, fo)=>{
    if(!(Nr===fo||!Nr))try{
      const Va=(()=>{
        try{
          const dl=new URL(Nr);
          return dl.hostname==="localhost"||dl.hostname==="127.0.0.1"||dl.hostname==="::1"
        }
        catch{
          return!1
        }
      })();
      e.analyticsService.trackEvent("browser.navigation",{
        isLocalhost:Va
      })
    }
    catch{
      
    }
  }, {
    defer:!0
  }));
  let ot=null;
  const[Lt, Gt]=lt(t.isLocked(i)), [jt, hn]=lt(!1);
  let on=null;
  const[en, gt]=lt(t.getRecordingType(i)), At=()=>{
    ot&&(ot(), ot=null)
  }, Tt=async(Nr, fo={
    
  })=>{
    await e.commandService.executeCommand("workbench.action.openBrowserEditor", {
      url:Nr,inactive:fo.background??!1
    })
  };
  let ze=!0;
  const Yt=Nr=>{
    if(ze===Nr)return;
    ze=Nr;
    const fo=JSON.stringify({
      type:"css-inspector-highlight-visible",visible:Nr
    });
    u(`window.postMessage(${fo}, '*')`).catch(Va=>{
      console.error("[BrowserEditor] Failed to update CSS inspector highlight visibility:",Va)
    })
  }, kt=(Nr, fo)=>{
    if(!fo||fo.length===0)return Nr;
    let Va=Nr, dl=!1;
    for(const $l of fo){
      const wo=_vu(Va,$l);
      wo.changed&&(Va=wo.records,dl=!0)
    }
    return dl?Va:Nr
  }, xt=Nr=>{
    if(!Nr)return;
    const fo=[];
    Array.isArray(Nr.availableFonts)&&fo.push(...Nr.availableFonts), Nr.styles?.fontFamily&&fo.push(...pAu(Nr.styles.fontFamily));
    const Va=Nr.allStyles?.computed?.["font-family"]?.value??"";
    Va&&fo.push(...pAu(Va)), fo.length!==0&&Ge(dl=>X4f(dl, fo))
  }, un=Nr=>{
    if(!Nr||Nr.length===0)return;
    const fo=Fe(), Va=kt(fo, Nr);
    Va!==fo&&(Ne([]), De(Va))
  };
  An(()=>{
    const Nr=sn();
    Ft()||typeof window<"u"&&localStorage.setItem("css-inspector-width", Nr.toString())
  }), An(()=>{
    const Nr=St();
    Jt()||typeof window<"u"&&localStorage.setItem("element-tree-height", Nr.toString())
  });
  const nn=Nr=>({
    selector:Nr.selector, property:Nr.property, oldValue:Nr.oldValue, newValue:Nr.newValue, originalValue:Nr.originalValue, hadInlineStyle:Nr.hadInlineStyle, timestamp:Nr.timestamp, elementPath:Nr.elementPath, elementId:Nr.elementId, elementClassName:Nr.elementClassName, elementTagName:Nr.elementTagName, elementUniqueId:Nr.elementUniqueId, changeType:Nr.changeType, domOrderChange:Nr.domOrderChange
  });
  An(()=>{
    const fo=Fe().map(nn);
    u(`window.postMessage({ type: 'update-style-changelog', changes: ${JSON.stringify(fo)} }, '*')`).catch(Va=>{
      console.error("[BrowserEditor] Failed to update style changes in browser:",Va)
    })
  }), An(()=>{
    r.setCssStyleChanges(Fe())
  });
  const Dn=()=>{
    const Nr=Fe();
    if(Nr.length===0)return;
    const fo={
      type:"reset-style-changes",changes:Nr.map(nn)
    };
    u(`window.postMessage(${JSON.stringify(fo)}, '*')`).catch(Va=>{
      console.error("[BrowserEditor] Failed to reset CSS changes:",Va)
    }), De([]), Ne([])
  }, Bn=Nr=>{
    const fo={
      type:"reset-style-changes",changes:[nn(Nr)]
    };
    u(`window.postMessage(${JSON.stringify(fo)}, '*')`).catch(dl=>{
      console.error("[BrowserEditor] Failed to undo DOM change:",dl)
    }), Ne(dl=>[...dl, Nr]);
    const Va=i7e(Nr);
    De(dl=>dl.filter($l=>i7e($l)!==Va))
  }, Vn=Nr=>{
    if(Nr.changeType==="dom"&&Nr.domOrderChange){
      const Va=Nr.domOrderChange,dl={
        type:"reorder-dom-element",elementPath:Nr.elementUniqueId||Nr.elementPath,newParentPath:Va.newParentUniqueId||Va.newParentPath,beforeSiblingPath:Va.newNextSiblingUniqueId||Va.newNextSiblingPath
      };
      u(`window.postMessage(${JSON.stringify(dl)}, '*')`).catch($l=>{
        console.error("[BrowserEditor] Failed to redo DOM order change:",$l)
      })
    }
    else if(Nr.changeType==="prop"&&Nr.propChange){
      const Va={
        type:"update-react-prop",propPath:Nr.propChange.propPath,value:Nr.propChange.newValue,elementPath:Nr.elementUniqueId||Nr.elementPath
      };
      u(`window.postMessage(${JSON.stringify(Va)}, '*')`).catch(dl=>{
        console.error("[BrowserEditor] Failed to redo prop change:",dl)
      })
    }
    else{
      const Va={
        type:"apply-style-change",property:Nr.property,value:Nr.newValue,elementPath:Nr.elementUniqueId||Nr.elementPath
      };
      u(`window.postMessage(${JSON.stringify(Va)}, '*')`).catch(dl=>{
        console.error("[BrowserEditor] Failed to redo style change:",dl)
      })
    }
    const fo=i7e(Nr);
    Ne(Va=>Va.filter(dl=>i7e(dl)!==fo)), De(Va=>[...Va, Nr])
  }, Xn=Nr=>{
    const fo=Fe(), Va=Nr.path, dl=Nr.id, $l=Nr.uniqueId, wo=Nr.tagName?.toLowerCase()||"", Zu=Nr.className||"", fh=wo+(Zu?"."+Zu.split(" ")[0]:"");
    return fo.filter(Qu=>!!(Qu.elementPath&&Qu.elementPath===Va||Qu.elementId&&dl&&Qu.elementId===dl||Qu.elementUniqueId&&$l&&Qu.elementUniqueId===$l||dl&&Qu.selector&&Qu.selector.includes(`#${dl}`)||fh&&Qu.selector&&Qu.selector.toLowerCase().includes(fh.toLowerCase())))
  }, [hi, Si]=lt(!1), [Xi, Ji]=lt(!1), [qr, Ni]=lt(!1), [Ii, Ar]=lt([]), [er, Sr]=lt(-1), [Es, Pi]=lt(-1), [gi, _i]=lt(""), [Wi, Kr]=lt(r.getHistory()), rr=()=>{
    const Nr=Ii(), fo=er();
    if(Nr.length===0||!Xi())return"";
    const Va=fo>=0?Nr[fo]:Nr[0];
    if(!Va||Va.type==="search")return"";
    const dl=C().toLowerCase(), $l=Va.url.toLowerCase(), wo=$l.replace(/^https?:\/\//, "");
    return $l.startsWith(dl)&&$l!==dl?Va.url.slice(C().length):wo.startsWith(dl)&&wo!==dl?Va.url.replace(/^https?:\/\//i, "").slice(dl.length):""
  }, [Ys, Fo]=lt(null), [Wa, ll]=lt(null), [Xc, Ns]=lt(null), [Yi, Qr]=lt(null), [fs, pr]=lt(!1), [Dr, mi]=lt(!1), vo=r.getBookmarks(), [tr, Ts]=lt(vo), [xc, Ea]=lt(!1);
  let Ra, gm;
  const Vh=()=>{
    gm&&(gm.classList.remove("is-rotating"), gm.offsetWidth, gm.classList.add("is-rotating"), setTimeout(()=>{
      gm?.classList.remove("is-rotating")
    }, 700))
  }, [Lc, Bu]=lt(void 0), [Mh, no]=lt(null), [Sl, Zd]=lt(null), [pa, Wl]=lt(!1);
  let ih=null, Eh, Tp, yA=null, Kg;
  const zy=()=>{
    Kg&&(Kg(), Kg=void 0)
  };
  Ai(()=>{
    ih!==null&&(cancelAnimationFrame(ih), ih=null), yA!==null&&(clearTimeout(yA), yA=null)
  });
  let rp=null;
  const Qc=()=>{
    const Nr=rp||e.composerDataService.selectedComposerId;
    if(!Nr)return;
    const fo=e.composerDataService.getHandleIfLoaded_MIGRATED(Nr);
    if(fo)return{
      composerId:Nr,handle:fo
    }
  };
  let Yl=null;
  An(()=>{
    const Nr=e.composerDataService.selectedComposerId;
    Yl!==null&&Nr!==Yl&&Nr!==rp&&(rp=null), Yl=Nr
  });
  const Ga=async(Nr, fo=!1)=>{
    try{
      const Va=e.composerDataService.selectedComposerId,dl=e.composerDataService.resolveComposerIdToSelected(Va)||Va,$l=Yp=>!!e.composerDataService.getHandleIfLoaded_MIGRATED(Yp);
      let wo=null;
      if(rp&&$l(rp)&&(wo=rp),!wo&&$l(dl)&&(wo=dl),!wo){
        const Yp=await e.composerService.createComposer({
          partialState:{
            unifiedMode:"agent"
          },autoSubmit:!1,openInNewTab:!0
        });
        if(!Yp){
          console.error("[BrowserEditor] Failed to create composer for element context");
          return
        }
        wo=Yp.composerId
      }
      rp=wo;
      const Zu=e.composerDataService.getComposerDataIfLoaded(wo);
      if(!Zu){
        console.error("[BrowserEditor] Could not get composer data");
        return
      }
      const fh=Nr.tagName.toLowerCase(),Qu=Wr(),Ru=Wr();
      let Xu="";
      if(Nr.id)Xu=`#${Nr.id}`;
      else if(Nr.className)Xu=`.${Nr.className.split(" ")[0]}`;
      else{
        const Yp=Nr.path.split(" > ");
        Xu=Yp[Yp.length-1]||""
      }
      const cb=`<${fh}> ${Xu}`.trim(),ad=new Set,Hd=(Nr.attributes||[]).map(Yp=>({
        name:Yp.name,value:Yp.value
      }));
      Nr.id&&!Hd.some(Yp=>Yp.name==="id")&&Hd.push({
        name:"id",value:Nr.id
      }),Nr.className&&!Hd.some(Yp=>Yp.name==="class")&&Hd.push({
        name:"class",value:Nr.className
      });
      const fb=[];
      for(const Yp of Hd){
        const aA=Yp.name?.toString()??"";
        if(!aA||ad.has(aA))continue;
        ad.add(aA);
        let nv=(Yp.value??"").toString();
        nv=nv.replace(/\s+/g," ").trim(),nv.length>200&&(nv=nv.slice(0,200)+"\u2026"),nv=nv.replace(/"/g,'\\"'),fb.push(`${aA}="${nv}"`)}const Ed=fb.length>0?`<${fh} ${fb.join(" ")}>`:`<${fh}>`;let lp=(Nr.innerText??"").toString();lp=lp.replace(/\s+/g," ").trim(),lp.length>500&&(lp=lp.slice(0,500)+"\u2026");const lb=`</${fh}>`,up=`${Ed}${lp}${lb}`,hf=[];if(Nr.path&&hf.push(`DOM Path: ${Nr.path}`),Nr.rect){const{top:Yp,left:aA,width:nv,height:$f}=Nr.rect;hf.push(`Position: top=${Math.round(Yp)}px, left=${Math.round(aA)}px, width=${Math.round(nv)}px, height=${Math.round($f)}px`)}Nr.reactComponent?.name&&hf.push(`React Component: ${Nr.reactComponent.name}`),hf.push(`HTML Element: ${up}`);const my=Xn(Nr);if(my.length>0){const Yp=my.map(aA=>`${aA.property}: ${aA.oldValue} \u2192 ${aA.newValue}`);hf.push(`Changes to apply on the element:
${Yp.join(`
`)}`)}const Dv=hf.join(`
`),f_={id:Nr.id,className:Nr.className,attributes:Nr.attributes,styles:Nr.styles,rect:Nr.rect,reactComponent:Nr.reactComponent,uniqueId:Nr.uniqueId,styleChanges:my.length>0?my.map(Yp=>({property:Yp.property,oldValue:Yp.oldValue,newValue:Yp.newValue})):void 0},dp={uiElementData:{element:fh,xpath:Nr.path,textContent:Nr.innerText||"",extra:JSON.stringify(f_),component:Nr.reactComponent?.name||"",componentPropsJson:Nr.reactComponent?.props?JSON.stringify(Nr.reactComponent.props):""}},DS={display:cb,mentionName:Dv,typeaheadType:"ui-element",uuid:Qu,storedKey:Ru,metadata:dp},Mw=e.composerViewsService.getInputDelegate(wo),Q1=Mw.getRef()!==void 0;fe()||(Se=!0,e.workbenchLayoutService.setPartHidden(!1,"workbench.parts.auxiliarybar"),Se=!1),Q1||await new Promise(Yp=>setTimeout(Yp,200)),s()?.blur(),Mw.focus(void 0,!0),await new Promise(Yp=>setTimeout(Yp,50));let c1=!1;if(Mw.runEditorUpdate(()=>{c1=!0;const Yp=lf(),aA=Yp.getFirstChild(),nv=Wd(),$f=dd(nv)?nv.clone():null,RA=Hce(DS.mentionName,void 0,void 0,eo.ui_element,void 0,DS.storedKey,void 0,void 0,DS.display);if(RA.metadata=DS.metadata,!fo&&aA){const i0=aA.getChildren();let dx=null;for(const hx of i0)pNf(hx)&&hx.typeaheadType==="ui-element"&&(dx=hx);if(dx)dx.insertBefore(RA),dx.remove(),$f&&cae($f);else{const hx=Yp.getTextContent(),k7=hx.length>0&&!hx.endsWith(" "),i$=[];k7&&i$.push(OA(" ")),i$.push(RA),i$.push(OA(" ")),v9t(i$),Yp.selectEnd()}}else{const i0=Yp.getTextContent(),dx=i0.length>0&&!i0.endsWith(" "),hx=[];dx&&hx.push(OA(" ")),hx.push(RA),hx.push(OA(" ")),v9t(hx),Yp.selectEnd()}}),!c1){const Yp=e.composerDataService.getHandleIfLoaded_MIGRATED(wo);if(!Yp)return;const aA=Zu.richText||"",nv=cye(aA,[DS]),$f=(Zu.text||"")+" "+DS.mentionName+" ";e.composerDataService.updateComposerData(Yp,{richText:nv,text:$f}),e.composerEventService.fireShouldForceText({composerId:wo,bubbleId:void 0})}}catch(Va){console.error("[BrowserEditor] Failed to add element context:",Va)}};let ja=null;const wl=300;An(()=>{const Nr=Fe(),fo=X();if(ja!==null&&(clearTimeout(ja),ja=null),!fo||Nr.length===0)return;const Va=Xn(fo);Va.length!==0&&(ja=setTimeout(()=>{ja=null;const dl=Qc();if(!dl)return;const{composerId:$l,handle:wo}=dl,Zu=e.composerDataService.getComposerDataIfLoaded($l);if(!Zu||!Zu.richText)return;const fh=fo.tagName.toLowerCase(),Qu=new Set,Ru=(fo.attributes||[]).map(up=>({name:up.name,value:up.value}));fo.id&&!Ru.some(up=>up.name==="id")&&Ru.push({name:"id",value:fo.id}),fo.className&&!Ru.some(up=>up.name==="class")&&Ru.push({name:"class",value:fo.className});const Xu=[];for(const up of Ru){const hf=up.name?.toString()??"";if(!hf||Qu.has(hf))continue;Qu.add(hf);let my=(up.value??"").toString();my=my.replace(/\s+/g," ").trim(),my.length>200&&(my=my.slice(0,200)+"\u2026"),my=my.replace(/"/g,'\\"'),Xu.push(`${hf}="${
          my
        }
        "`)}const cb=Xu.length>0?`<${fh} ${Xu.join(" ")}>`:`<${fh}>`;let ad=(fo.innerText??"").toString();ad=ad.replace(/\s+/g," ").trim(),ad.length>500&&(ad=ad.slice(0,500)+"\u2026");const Hd=`</${fh}>`,fb=`${cb}${ad}${Hd}`,Ed=[];if(fo.path&&Ed.push(`DOM Path: ${fo.path}`),fo.rect){const{top:up,left:hf,width:my,height:Dv}=fo.rect;Ed.push(`Position: top=${Math.round(up)}px, left=${Math.round(hf)}px, width=${Math.round(my)}px, height=${Math.round(Dv)}px`)}fo.reactComponent?.name&&Ed.push(`React Component: ${fo.reactComponent.name}`),Ed.push(`HTML Element: ${fb}`);const lp=Va.map(up=>`${up.property}: ${up.oldValue} \u2192 ${up.newValue}`);Ed.push(`Changes to apply on the element:
${lp.join(`
`)}`);const lb=Ed.join(`
`);try{const up=JSON.parse(Zu.richText);if(up?.root?.children){let hf=!1;for(const my of up.root.children){if(my.type==="paragraph"&&Array.isArray(my.children)){for(const Dv of my.children)if(Dv.type==="mention"&&Dv.typeaheadType==="ui-element"){if(Dv.mentionName=lb,Dv.metadata?.uiElementData?.extra)try{const f_=JSON.parse(Dv.metadata.uiElementData.extra);f_.styleChanges=Va.map(dp=>({property:dp.property,oldValue:dp.oldValue,newValue:dp.newValue})),Dv.metadata.uiElementData.extra=JSON.stringify(f_)}catch{}hf=!0;break}}if(hf)break}if(hf){const my=JSON.stringify(up);let Dv=Zu.text||"";const f_=Dv.indexOf("Changes to apply on the element:");if(f_!==-1){const dp=Dv.indexOf(`

`,f_);if(dp!==-1){const DS=Dv.slice(dp).trim();Dv=lb+" "+DS}else Dv=lb+" "}else{const dp=Dv.indexOf("HTML Element:");if(dp!==-1){const DS=Dv.indexOf(`
`,dp);if(DS!==-1){const Mw=Dv.slice(DS+1).trim();Dv=lb+" "+Mw}}}e.composerDataService.updateComposerData(wo,{richText:my,text:Dv}),e.composerEventService.fireShouldForceText({composerId:$l})}}}catch(up){console.error("[BrowserEditor] Failed to update mention with style changes:",up)}},wl))}),Ai(()=>{ja!==null&&clearTimeout(ja)});const Ph=async Nr=>{try{const fo=Qc();if(!fo)return;const{composerId:Va,handle:dl}=fo;fe()||(Se=!0,e.workbenchLayoutService.setPartHidden(!1,"workbench.parts.auxiliarybar"),Se=!1);const $l=e.composerDataService.getComposerDataIfLoaded(Va);if(!$l)return;let wo=$l.text||"",Zu=$l.richText||"",fh=!1;const Qu=X();if(Qu){let Ru=!1;try{if(Zu){const Xu=JSON.parse(Zu);if(Xu?.root?.children){for(const cb of Xu.root.children)if(cb.type==="paragraph"&&Array.isArray(cb.children)&&(Ru=cb.children.some(ad=>ad.type==="mention"&&ad.typeaheadType==="ui-element"),Ru))break}}}catch{}if(!Ru){const Xu=Qu.tagName.toLowerCase(),cb=Wr(),ad=Wr();let Hd="";if(Qu.id)Hd=`#${Qu.id}`;else if(Qu.className)Hd=`.${Qu.className.split(" ")[0]}`;else{const $f=Qu.path.split(" > ");Hd=$f[$f.length-1]||""}const fb=`<${Xu}> ${Hd}`.trim(),Ed=new Set,lp=(Qu.attributes||[]).map($f=>({name:$f.name,value:$f.value}));Qu.id&&!lp.some($f=>$f.name==="id")&&lp.push({name:"id",value:Qu.id}),Qu.className&&!lp.some($f=>$f.name==="class")&&lp.push({name:"class",value:Qu.className});const lb=[];for(const $f of lp){const RA=$f.name?.toString()??"";if(!RA||Ed.has(RA))continue;Ed.add(RA);let i0=($f.value??"").toString();i0=i0.replace(/\s+/g," ").trim(),i0.length>200&&(i0=i0.slice(0,200)+"\u2026"),i0=i0.replace(/"/g,'\\"'),lb.push(`${RA}="${i0}"`)
      }
      const up=lb.length>0?`<${Xu} ${lb.join(" ")}>`:`<${Xu}>`;
      let hf=(Qu.innerText??"").toString();
      hf=hf.replace(/\s+/g," ").trim(),hf.length>500&&(hf=hf.slice(0,500)+"\u2026");
      const my=`</${Xu}>`,Dv=`${up}${hf}${my}`,f_=[];
      if(Qu.path&&f_.push(`DOM Path: ${Qu.path}`),Qu.rect){
        const{
          top:$f,left:RA,width:i0,height:dx
        }
        =Qu.rect;
        f_.push(`Position: top=${Math.round($f)}px, left=${Math.round(RA)}px, width=${Math.round(i0)}px, height=${Math.round(dx)}px`)
      }
      Qu.reactComponent?.name&&f_.push(`React Component: ${Qu.reactComponent.name}`),f_.push(`HTML Element: ${Dv}`);
      const dp=Xn(Qu);
      if(dp.length>0){
        const $f=dp.map(RA=>`${RA.property}: ${RA.oldValue} \u2192 ${RA.newValue}`);
        f_.push(`Changes to apply on the element:
${$f.join(`
`)}`)
      }
      const DS=f_.join(`
`),Mw={
        id:Qu.id,className:Qu.className,attributes:Qu.attributes,styles:Qu.styles,rect:Qu.rect,reactComponent:Qu.reactComponent,uniqueId:Qu.uniqueId,styleChanges:dp.length>0?dp.map($f=>({
          property:$f.property,oldValue:$f.oldValue,newValue:$f.newValue
        })):void 0
      },Q1={
        uiElementData:{
          element:Xu,xpath:Qu.path,textContent:Qu.innerText||"",extra:JSON.stringify(Mw),component:Qu.reactComponent?.name||"",componentPropsJson:Qu.reactComponent?.props?JSON.stringify(Qu.reactComponent.props):""
        }
      },c1={
        display:fb,mentionName:DS,typeaheadType:"ui-element",uuid:cb,storedKey:ad,metadata:Q1
      },Yp={
        type:"mention",version:1,detail:0,format:0,mode:"segmented",style:"",text:c1.display,mentionName:c1.mentionName,typeaheadType:c1.typeaheadType,storedKey:c1.storedKey,uuid:c1.uuid,metadata:c1.metadata
      },aA={
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:" "
      };
      let nv=!1;
      try{
        if(Zu){
          const $f=JSON.parse(Zu);
          if($f?.root?.children){
            for(const RA of $f.root.children)if(RA.type==="paragraph"&&Array.isArray(RA.children)){
              RA.children.unshift(Yp,aA),nv=!0;
              break
            }
            nv&&(Zu=JSON.stringify($f))
          }
        }
      }
      catch{
        
      }
      nv||(Zu=cye("",[c1])),wo=DS+" "+wo,fh=!0
    }
  }
  if(Nr){
    wo=wo+Nr, fh=!0;
    try{
      if(Zu){
        const Ru=JSON.parse(Zu),Xu=Ru.root?.children?.find(cb=>cb.type==="paragraph");
        if(Xu&&Array.isArray(Xu.children)){
          const cb=Xu.children[Xu.children.length-1];
          cb&&cb.type==="text"?cb.text=(cb.text||"")+Nr:Xu.children.push({
            type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:Nr
          }),Zu=JSON.stringify(Ru)
        }
      }
    }
    catch{
      
    }
  }
  fh&&(e.composerDataService.updateComposerData(dl, {
    text:wo, richText:Zu
  }), e.composerEventService.fireShouldForceText({
    composerId:Va
  })), await e.composerService.handleOpenComposer(Va, {
    focusMainInputBox:!0
  }), await new Promise(Ru=>setTimeout(Ru, 50)), e.composerViewsService.focus(Va, !0)
}
catch(fo){
  console.error("[BrowserEditor] Failed to focus composer:", fo)
}
}, Hh=async(Nr=1500)=>{
  const fo=Date.now(), Va=Lc();
  return new Promise(dl=>{
    const $l=()=>{
      const wo=Va;
      if(wo){
        const Zu=wo.getBoundingClientRect();
        if(Zu.width>0&&Zu.height>0){
          dl(!0);
          return
        }
      }
      if(Date.now()-fo>=Nr){
        dl(!1);
        return
      }
      requestAnimationFrame($l)
    };
    $l()
  })
};
Ic(()=>{
  let Nr=!1;
  (async()=>{
    try{
      try{
        await e.mcpService.disableServersByName(["Chrome DevTools","Playwright"])
      }
      catch(Ru){
        console.error("[BrowserEditor] Failed to disable conflicting MCP servers:",Ru)
      }
    }
    catch(Ru){
      if(Nr)return;
      console.error("[BrowserEditor] Failed to initialize browser automation:",Ru),Fo(Ru instanceof Error?Ru.message:String(Ru))
    }
    if(Nr)return;
    const Va=Lc();
    if(!Va||Nr)return;
    const dl=t.getView(i);
    if(!dl){
      console.debug("[BrowserEditor] No manager found for browserId:",i);
      return
    }
    try{
      await dl?.getWebContentsId()||await dl.createBrowserView()
    }
    catch(Ru){
      console.debug("[BrowserEditor] Failed to check/create browser view:",Ru)
    }
    if(Nr)return;
    await dl.attachToContainer(Va);
    const $l=t.getHeadlessContainer(i);
    if($l&&($l.remove(), t.setHeadlessContainer(i, void 0)), await Hh(), Nr)return;
    const wo=dl?.canGoBack()??!1, Zu=dl?.canGoForward()??!1, fh=dl?.getURL()??"";
    if(Nr)return;
    N(wo), O(Zu);
    const Qu=f;
    if(Qu){
      try{
        Ys()||(dl.setPaneVisible(!0),n.initialPreserveFocus||dl.focus()),window.dispatchEvent(new Event("resize"))
      }
      catch(Xu){
        console.debug("[BrowserEditor] Failed to set browser view visible:",Xu)
      }
      if(!fh||fh===""||fh!==Qu){
        if(await Hh(),Nr)return;
        await a4(Qu)
      }
    }
    else if(dl.setPaneVisible(!0), dl.updateTabState({
      isLoading:!1
    }), Ji(!0), !n.initialPreserveFocus){
      const Ru=(Xu=0)=>{
        Nr||(Ra?(Ra.focus(),Ra.select()):Xu<10&&setTimeout(()=>Ru(Xu+1),50))
      };
      e.backgroundComposerService.showWindowForBcId({
        bcId:"root"
      }).then(()=>{
        setTimeout(()=>Ru(0),50)
      }).catch(()=>{
        setTimeout(()=>Ru(0),100)
      })
    }
  })().catch(Va=>{
    Nr||console.error("[BrowserEditor] Initialization error:", Va)
  }), Ai(()=>{
    Nr=!0
  })
}), Ai(()=>{
  const Nr=t.getView(i);
  Nr&&(Nr.updateTabState({
    url:A()
  }), (!t.isHeadless(i)||!t.getHeadlessContainer(i))&&Nr.detachFromContainer()), zy(), At()
}), Ic(()=>{
  const Nr=t.getView(i);
  if(!Nr)return;
  const fo=Nr.onDidChangePaneVisibility(async Va=>{
    if(Va){
      const dl=Lc();
      if(dl){
        await Nr.attachToContainer(dl);
        const $l=t.getHeadlessContainer(i);
        $l&&($l.remove(),t.setHeadlessContainer(i,void 0))
      }
    }
  });
  Ai(()=>fo.dispose())
}), Ic(()=>{
  const Nr=t.onDidChangeLockState(fo=>{
    fo.viewId===i&&(Gt(fo.locked), fo.locked||(hn(!1), on&&(clearTimeout(on), on=null)))
  });
  Ai(()=>{
    Nr.dispose(), on&&clearTimeout(on)
  })
}), Ic(()=>{
  const Nr=t.onDidChangeRecordingState(fo=>{
    fo.viewId===i&&gt(fo.recordingType)
  });
  Ai(()=>{
    Nr.dispose()
  })
});
const kb=()=>{
  Lt()&&(hn(!0), on&&clearTimeout(on), on=setTimeout(()=>{
    hn(!1), on=null
  }, 500))
}, tv=()=>{
  t.setLocked(i, !1)
}, [Jh, Qf]=lt();
An(Bf(o, ()=>{
  const fo=s()?.tabState??r.tabState, Va=new Ut;
  fo.recomputeInitiallyAndOnChange(Va, Qf), Ai(()=>Va.dispose())
}, {
  defer:!1
}));
const Vy=xe(()=>Jh()?.pageTitle||""), k0=xe(()=>Jh()?.zoomLevel??0), NC=xe(()=>Math.round(Math.pow(1.2, k0())*100));
Ic(()=>{
  const Nr=()=>{
    document.visibilityState==="visible"&&setTimeout(()=>{
      window.dispatchEvent(new Event("resize"))
    }, 50)
  };
  document.addEventListener("visibilitychange", Nr), Ai(()=>document.removeEventListener("visibilitychange", Nr))
}), An(()=>{
  const Nr=Jh();
  if(!Nr)return;
  const fo=t.getView(i);
  if(!fo)return;
  const Va=fo.canGoBack(), dl=fo.canGoForward(), $l=Nr.url;
  if(N(Va), O(dl), $l&&!Xit($l)){
    const wo=F1a($l);
    if(_t!==wo){
      Ge([]),ee(null),ft=null,_t=wo;
      const Qu=gAu($l);
      if(Qu){
        const Ru=r.getHostZoomLevel(Qu),Xu=fo.getZoomLevel();
        Ru!==void 0?Ru!==Xu&&fo.setZoomLevel(Ru):Xu!==0&&fo.resetZoom()
      }
    }
    w($l), Xi()||x($l), H(!0);
    const Zu=Nr.loadError||Nr.certificateError, fh=Nr.isLoading;
    if(!Zu&&!fh){
      r.saveLastUrl($l,i);
      const Qu=Nr.pageTitle||"",Ru=F1a($l);
      let Xu="";
      if(Ru)try{
        Xu=`https://www.google.com/s2/favicons?domain=${new URL($l).hostname}&sz=64`
      }
      catch{
        Xu=""
      }
      r.addHistoryEntry($l,Qu,Xu)
    }
  }
  else Xit($l)&&(w(""), Xi()||x(""), H(!1))
}), An(()=>{
  const Nr=gi();
  if(!Xi()||!Nr||Nr.length===0){
    Ar([]), Sr(-1);
    return
  }
  const Va=Wi(), dl=tr(), $l=u4f(Nr, Va, dl);
  Ar($l), Sr(-1)
}), An(()=>{
  const Nr=t.getView(i);
  if(!Nr)return;
  const fo=Nr.onDidFinishLoad(async()=>{
    const Va=r.hasPendingDevToolsRequest(), dl=re();
    (!cn()||!Y())&&(ee(null), ft=null);
    try{
      const wo=Nr.getURL();
      if(wo&&wo!=="about:blank"){
        const Zu=F1a(wo);
        _t!==Zu&&(Ge([]),_t=Zu)
      }
    }
    catch(wo){
      console.debug("[BrowserEditor] Failed to get current URL:",wo)
    }
    try{
      await u(V4f)
    }
    catch(wo){
      console.error("[BrowserEditor] Failed to inject area screenshot script:",wo)
    }
    try{
      await u(NNf),await D5()
    }
    catch(wo){
      console.error("[BrowserEditor] Failed to inject overlay script:",wo)
    }
    try{
      await u(LNf)
    }
    catch(wo){
      console.error("[BrowserEditor] Failed to inject DevTools script:",wo)
    }
    try{
      const wo=Nr.getURL();
      if(!wo||wo==="about:blank"){
        const Zu=yvu();
        if(Ys()){
          const fh=Avu(Zu,{
            errorMessage:Ys()??"",errorDetails:Wa(),errorKind:Xc()??"network"
          });
          await u(fh)
        }
        else await u(MNf(Zu))
      }
    }
    catch(wo){
      console.debug("[BrowserEditor] Failed to inject placeholder page:",wo)
    }
    Va&&(r.clearPendingDevToolsRequest(), Mt(!0));
    const $l=dl&&Y();
    if(Va||$l){
      j(!0),z(!0),ne(!0),le(!0);
      try{
        await u("window.postMessage({ type: 'enable-element-selection', selectionType: 'css-inspector' }, '*')")
      }
      catch(wo){
        console.error("[BrowserEditor] Failed to enable element selection:",wo)
      }
      try{
        await u("window.postMessage({ type: 'auto-select-root-element' }, '*')")
      }
      catch(wo){
        console.error("[BrowserEditor] Failed to auto-select root element:",wo)
      }
    }
  });
  Ai(()=>{
    fo.dispose()
  })
});
const E5=async(Nr, fo, Va)=>{
  const dl=e.composerDataService.selectedComposerId, $l=e.composerDataService.resolveComposerIdToSelected(dl)||dl;
  if(!$l)return;
  const wo=Nr.split(",")[1], Zu=atob(wo), fh=new Uint8Array(Zu.length);
  for(let lp=0;
  lp<Zu.length;
  lp++)fh[lp]=Zu.charCodeAt(lp);
  const Qu=Ms.wrap(fh), Xu=e.workspaceContextService.getWorkspace().id, cb=Wr(), ad=`browser-screenshot-${cb}.png`, Hd=je.joinPath(e.environmentService.workspaceStorageHome, Xu, "images", ad);
  await e.fileService.writeFile(Hd, Qu);
  const fb={
    uuid:cb, path:Hd.fsPath, dimension:{
      width:fo,height:Va
    }, loadedAt:Date.now()
  }, Ed=e.composerDataService.getHandleIfLoaded_MIGRATED($l);
  e.composerContextService.addContext({
    composerHandle:Ed, contextType:"selectedImages", value:fb
  })
}, PO=async Nr=>{
  if(!Nr.length)return!1;
  const fo=e.composerDataService.selectedComposerId;
  if((()=>{
    if(!fo)return!0;
    const $l=e.composerDataService.getComposerDataIfLoaded(fo);
    return!!($l&&$l.text&&$l.text.trim()!=="")
  })()){
    const $l=await e.composerService.createComposer({
      unifiedMode:"agent"
    });
    return $l?.composerId?await U8($l.composerId, Nr):!1
  }
  const dl=e.composerDataService.resolveComposerIdToSelected(fo)||fo;
  return await U8(dl, Nr)
}, U8=async(Nr, fo)=>{
  try{
    e.composerService.handleOpenComposer(Nr, {
      focusMainInputBox:!0,insertSelection:!1
    });
    const Va=e.composerDataService.getHandleIfLoaded_MIGRATED(Nr), dl=Va?e.composerDataService.getComposerData(Va):void 0;
    if(!dl||!Va)return console.error("[BrowserEditorContent] No composer data found"), !1;
    const $l=fo.some(dp=>dp.changeType==="prop"), wo=fo.some(dp=>dp.changeType!=="prop"||dp.changeType===void 0);
    let Zu;
    $l&&wo?Zu=`Apply these visual design changes (CSS styles and React props) to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`:$l?Zu=`Apply these React prop changes to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`:Zu=`Apply these CSS style changes to the codebase. These changes were made in a browser preview and need to be persisted to the source files:
`;
    let fh;
    const Qu=`

CRITICAL - Element Identification:
- Use the "selector" field to find the target element (contains CSS selector like "#id", ".class", or tag)
- "elementPath" contains the DOM path (e.g., "html > body > div > ...") - use to understand element hierarchy
- "elementHTML" shows the element's HTML structure for verification
- "elementClasses" lists all CSS classes on the element - search for these in stylesheets
- If "elementReactComponent" is provided, the component name (e.g., "Button", "Card") indicates where to look

CRITICAL - Where to Make Changes:
1. First check if the element uses utility classes (Tailwind, Bootstrap): modify the className/class attribute in JSX/TSX
2. For CSS Modules (*.module.css): find the imported module and update the corresponding class
3. For styled-components/emotion: find the styled() or css\`\` definition in the component file
4. For global CSS/SCSS: locate the stylesheet imported by the component or in global styles
5. For inline styles: update the style prop directly in the JSX/TSX file

CRITICAL - Making the Actual Change:
- "property" is the CSS property name (e.g., "color", "padding", "font-size")
- "oldValue" is the current value - use this to locate the exact line to change
- "newValue" is what it should be changed to
- Preserve CSS units and format (e.g., if oldValue was "16px", keep pixel units unless converting to rem/em)`;
    $l&&wo?fh=`${Qu}

For CSS Changes:
1. Search for the "oldValue" of each property in CSS/SCSS files or className attributes
2. Replace with "newValue" while maintaining existing formatting and units
3. If using Tailwind, convert CSS properties to utility classes

For Prop Changes:
1. Find the JSX/TSX file where the component is rendered (use "elementReactComponent.name")
2. Locate the specific prop being changed (in "propChange.propPath")
3. Update from "propChange.oldValue" to "propChange.newValue"`:$l?fh=`${Qu}

For Prop Changes:
1. Find the component definition or where it's rendered using "elementReactComponent.name"
2. Locate the prop specified in "propChange.propPath"
3. Change the value from "propChange.oldValue" to "propChange.newValue"
4. If the prop controls styling (like size, variant, color), ensure the new value is valid for that prop`:fh=`${Qu}

For CSS Style Changes:
1. Search for the element using "selector" or "elementClasses" to find relevant stylesheets
2. Find the exact CSS rule containing "property: oldValue"
3. Replace "oldValue" with "newValue"
4. If no existing rule exists, add a new declaration to the appropriate CSS file or inline style
5. For Tailwind: convert the CSS property/value to the appropriate utility class (e.g., "padding: 16px" \u2192 "p-4")
6. Ensure specificity is maintained - don't accidentally override other rules`;
    const Ru=fo.map((dp, DS)=>{
      const Mw=dp.elementTagName?.toLowerCase()||"element",Q1={
        property:dp.property,oldValue:dp.oldValue,newValue:dp.newValue,changeType:dp.changeType??"style",selector:dp.selector,elementId:dp.elementId||null,elementClasses:dp.elementClassName||null,elementTagName:Mw,elementPath:dp.elementPath,elementAttributes:dp.elementAttributes||[]
      };
      if(dp.elementHTML){
        const aA=dp.elementHTML.length>500?dp.elementHTML.substring(0,500)+"...":dp.elementHTML;
        Q1.elementHTML=aA
      }
      dp.elementReactComponent?.name&&(Q1.reactComponent={
        name:dp.elementReactComponent.name,props:dp.elementReactComponent.props
      }),dp.domOrderChange&&(Q1.domOrderChange=dp.domOrderChange),dp.propChange&&(Q1.propChange=dp.propChange);
      let c1="";
      if(dp.elementReactComponent?.name){
        const aA=dp.elementReactComponent.props?Object.entries(dp.elementReactComponent.props).map(([nv,$f])=>$f==null?`${nv}={null}`:typeof $f=="string"?`${nv}="${$f}"`:typeof $f=="number"||typeof $f=="boolean"?`${nv}={${$f}}`:`${nv}={${$f}}`).join(" "):"";
        c1=`<${dp.elementReactComponent.name}${aA?" "+aA:""}>`
      }
      else{
        const aA=(dp.elementAttributes||[]).map(nv=>`${nv.name}="${nv.value}"`).join(" ");
        c1=`<${Mw}${aA?" "+aA:""}>`
      }
      const Yp=dp.changeType==="prop"?"PROP_CHANGE":"CSS_CHANGE";
      return`

--- Change ${DS+1} ---
Element: ${c1}
[${Yp}]: ${JSON.stringify(Q1,null,2)}`
    }), Xu=`${Zu}${Ru.join("")}${fh}`, cb=Wr(), ad=fo.length, Hd=`${ad} change${ad!==1?"s":""}`, lp={
      hoverText:fo.map(dp=>`\u2022 ${dp.elementReactComponent?.name||(dp.elementId?`#${
        dp.elementId
      }
      `:null)||(dp.elementClassName?`.${
        dp.elementClassName.split(" ")[0]
      }
      `:null)||dp.elementTagName||"element"}: ${dp.property} \u2192 ${dp.newValue}`).join(`
`),llmText:Xu,uiElementData:{
        element:"browser-changes",xpath:"",textContent:"",extra:JSON.stringify({
          changeCount:fo.length,changes:fo.map(dp=>({
            id:dp.elementId||"",className:dp.elementClassName||"",selector:dp.selector,property:dp.property,oldValue:dp.oldValue,newValue:dp.newValue,changeType:dp.changeType,propChange:dp.propChange,reactComponent:dp.elementReactComponent||null
          }))
        }),component:"",componentPropsJson:""
      }
    }, lb={
      display:Hd,mentionName:Hd,typeaheadType:"browser-changes",uuid:cb,storedKey:cb,metadata:lp,text:Hd
    }, up=dl.text||"", hf=dl.richText, my=up&&!up.endsWith(" ")?" ":"", Dv=up+my+Hd;
    let f_=hf;
    return!f_||f_===""?f_=Tbi({
      mentions:[lb],format:"inline",baseText:"",prefix:"",separator:"",suffix:""
    }):f_=cye(f_, [lb]), e.composerDataService.updateComposerData(Va, {
      text:Dv,richText:f_
    }), e.composerEventService.fireShouldForceText({
      composerId:Nr
    }), await e.composerChatService.submitChatMaybeAbortCurrent(Nr, Xu, {
      richText:f_
    }), !0
  }
  catch(Va){
    return console.error("[BrowserEditorContent] Error adding style changes to composer:", Va), e.notificationService.error("Failed to add style changes to composer"), !1
  }
};
An(()=>{
  const Nr=Jh();
  Nr&&(Nr.url!==void 0&&$()&&(w(Nr.url), Xi()||x(Nr.url)), Nr.loadError?(Fo(Nr.loadError), ll(Nr.loadErrorDetails||null), Ns(Nr.loadErrorKind||null)):(Fo(null), ll(null), Ns(null)), Nr.certificateError?Qr(Nr.certificateError):Qr(null), Nr.isLoading!==void 0&&B(Nr.isLoading))
}), An(()=>{
  const Nr=Ys();
  if(Nr){
    const fo=yvu(), Va=Avu(fo, {
      errorMessage:Nr,errorDetails:Wa(),errorKind:Xc()??"network"
    });
    u(`window.__cursorPlaceholderInjected = false;
${Va}`).catch(dl=>{
      console.debug("[BrowserEditor] Failed to inject error page:",dl)
    })
  }
}), An(()=>{
  const Nr=e.themeService.onDidColorThemeChange(()=>{
    const fo=s()?.getURL();
    if(!fo||fo==="about:blank"){
      const Va=yvu(),dl=Ys(),$l=dl?Avu(Va,{
        errorMessage:dl,errorDetails:Wa(),errorKind:Xc()??"network"
      }):MNf(Va);
      u(`window.__cursorPlaceholderInjected = false;
${$l}`).catch(wo=>{
        console.debug("[BrowserEditor] Failed to reinject placeholder on theme change:",wo)
      })
    }
  });
  Ai(()=>Nr.dispose())
});
let BD=e.workbenchLayoutService.isVisible("workbench.parts.auxiliarybar", bi);
An(()=>{
  const Nr=e.workbenchLayoutService.onDidChangePartVisibility(()=>{
    const fo=e.workbenchLayoutService.isVisible("workbench.parts.auxiliarybar", bi);
    BD&&!fo?Se||ke(!0):!BD&&fo&&ke(!1), BD=fo
  });
  Ai(()=>Nr.dispose())
});
const wK=Nr=>{
  Nt(Nr)
};
An(()=>{
  Xi()&&Ni(!1)
}), An(()=>{
  const Nr=fo=>{
    if(!hi())return;
    if(fo.altKey&&!fo.ctrlKey&&!fo.shiftKey&&!fo.metaKey&&(fo.key==="ArrowLeft"&&R()?(fo.preventDefault(), HT()):fo.key==="ArrowRight"&&M()&&(fo.preventDefault(), GM())), (fo.metaKey||fo.ctrlKey)&&!fo.shiftKey&&!fo.altKey){
      const dl=fo.key.toLowerCase();
      dl==="["&&R()?(fo.preventDefault(),HT()):dl==="]"&&M()?(fo.preventDefault(),GM()):dl==="d"&&(fo.preventDefault(),Xd())
    }
  };
  document.addEventListener("keydown", Nr), Ai(()=>document.removeEventListener("keydown", Nr))
}), An(()=>{
  const Nr=r.onNavigateRequest(fo=>{
    fo.targetBrowserId&&fo.targetBrowserId!==i||a4(fo.url)
  });
  Ai(()=>{
    Nr.dispose()
  })
}), An(()=>{
  const Nr=fo=>{
    if(!bt()&&fo.key==="Escape"&&(W()||Y()||re()||Le())){
      if(fo.preventDefault(),fo.stopPropagation(),Y()&&re()&&X()){
        ee(null),ft=null,ne(!1),le(!0),it(!1),u("window.postMessage({ type: 'css-inspector-closed' }, '*')").catch(Va=>{
          console.error("[BrowserEditor] Failed to notify CSS inspector closed:",Va)
        });
        return
      }
      Is()
    }
  };
  document.addEventListener("keydown", Nr), Ai(()=>document.removeEventListener("keydown", Nr))
}), An(()=>{
  const Nr=fo=>{
    if(!Y())return;
    const dl=navigator.platform.toUpperCase().indexOf("MAC")>=0?fo.metaKey:fo.ctrlKey;
    if(fo.key!=="z"||!dl)return;
    if(fo.shiftKey){
      const Zu=Pe();
      if(Zu.length===0)return;
      fo.preventDefault(),fo.stopPropagation(),fo.stopImmediatePropagation();
      const fh=Zu.at(-1);
      fh&&Vn(fh);
      return
    }
    const $l=Fe();
    if($l.length===0)return;
    fo.preventDefault(), fo.stopPropagation(), fo.stopImmediatePropagation();
    const wo=$l.at(-1);
    wo&&Bn(wo)
  };
  document.addEventListener("keydown", Nr, !0), Ai(()=>document.removeEventListener("keydown", Nr, !0))
});
let VQ=!1;
An(()=>{
  const Nr=re();
  Nr!==VQ&&(VQ=Nr, Nr||(!X()||!Y()?u("window.postMessage({ type: 'css-inspector-closed' }, '*')").catch(fo=>{
    console.error("[BrowserEditor] Failed to notify CSS inspector closed:", fo)
  }):u("window.postMessage({ type: 'css-inspector-sidebar-hidden' }, '*')").catch(fo=>{
    console.error("[BrowserEditor] Failed to notify CSS inspector sidebar hidden:", fo)
  }), Y()&&u("window.postMessage({ type: 'unfreeze-element-selection' }, '*')").catch(fo=>{
    console.error("[BrowserEditor] Failed to unfreeze element selection:", fo)
  }), Ft()&&Xt(!1), zy()), setTimeout(()=>{
    u("window.postMessage({ type: 'update-css-inspector-highlight' }, '*')").catch(fo=>{
      console.error("[BrowserEditor] Failed to update highlight position:",fo)
    })
  }, 100))
}), An(Bf(o, ()=>{
  const Nr=s();
  if(!Nr)return;
  const fo=Nr.onIpcMessage(async Va=>{
    const{
      channel:dl,args:$l
    }
    =Va;
    if(dl==="keyboard-shortcut"){
      const wo=$l[0];
      wo.shortcut==="focus-url-bar"?e.backgroundComposerService.showWindowForBcId({
        bcId:"root"
      }).then(()=>{
        Ji(!0),setTimeout(()=>{
          Ra?.focus(),Ra?.select()
        },50)
      }).catch(Zu=>{
        console.error("[BrowserEditor] Failed to show root window:",Zu)
      }):wo.shortcut==="reload-page"?(Vh(),s()?.reloadIgnoringCache()):wo.shortcut==="focus-composer"?e.commandService.executeCommand("composer.focusComposer"):wo.shortcut==="navigate-back"?HT():wo.shortcut==="navigate-forward"?GM():wo.shortcut==="open-devtools"?s()?.toggleDevTools():wo.shortcut==="zoom-in"?o4():wo.shortcut==="zoom-out"?S7():wo.shortcut==="zoom-reset"?Q2():wo.shortcut==="undo"?Y()||s()?.undo():wo.shortcut==="redo"?Y()||s()?.redo():wo.shortcut==="new-browser-tab"?e.commandService.executeCommand("workbench.action.newBrowserTab",{
        sourceBrowserId:i
      }):wo.shortcut==="toggle-bookmark"&&Xd()
    }
    else if(dl==="browser-error-action"){
      const wo=s()?.getURL();
      if(!(Ys()||!wo||Xit(wo)))return;
      const fh=$l[0];
      if(!fh||typeof fh!="object"||!("action"in fh)||typeof fh.action!="string")return;
      if(fh.action==="reload")Fo(null),Vh(),s()?.reload();
      else if(fh.action==="restart"){
        Fo(null),Vh();
        const Qu=s();
        if(Qu){
          const Ru=A()||Qu.getURL();
          try{
            await Qu.destroyBrowserView(),await Qu.createBrowserView();
            const Xu=Lc();
            if(Xu){
              await Qu.attachToContainer(Xu);
              const cb=t.getHeadlessContainer(i);
              cb&&(cb.remove(),t.setHeadlessContainer(i,void 0)),Qu.setPaneVisible(!0)
            }
            Ru?(Qu.updateTabState({
              url:Ru,loadError:void 0,loadErrorDetails:void 0,loadErrorKind:void 0,isLoading:!0
            }),Qu.navigate(Ru)):Qu.updateTabState({
              url:"",loadError:void 0,loadErrorDetails:void 0,loadErrorKind:void 0,isLoading:!1
            })
          }
          catch(Xu){
            console.error("[BrowserEditor] Failed to restart browser view:",Xu),e.notificationService.error("Failed to restart browser view"),Qu.reload()
          }
        }
      }
      else if(fh.action==="copy-details"){
        const Qu=Wa();
        Qu&&e.clipboardService.writeText(Qu).catch(Ru=>{
          console.error("[BrowserEditor] Failed to copy error details:",Ru)
        })
      }
    }
    else if(dl==="devtools-opened")ut(!0);
    else if(dl==="devtools-closed")ut(!1);
    else if(dl==="element-selected"){
      const wo=$l[0],Zu=wo.keepSelectionActive===!0;
      s()?.getMatchedCSSStyles(wo.path).then(Ru=>{
        if(Ru){
          if(Ru.matched.__error){
            console.error("[BrowserEditor] CDP error:",Ru.matched.__error);
            return
          }
          if(wo.allStyles){
            wo.allStyles.matched=Ru.matched;
            for(const[Xu,cb]of Object.entries(Ru.inline))wo.allStyles.inline||(wo.allStyles.inline={
              
            }),wo.allStyles.inline[Xu]={
              value:cb,priority:null
            }
          }
          ee({
            ...wo
          })
        }
      }).catch(Ru=>{
        console.error("[BrowserEditor] Failed to get CDP matched styles:",Ru)
      }),ee(wo),xt(wo);
      try{
        e.analyticsService.trackEvent("browser.elementSelected")
      }
      catch{
        
      }
      if(Y()){
        he()||(ne(!0),le(!0),u("window.postMessage({ type: 'css-inspector-opened' }, '*')").catch(Ru=>{
          console.error("[BrowserEditor] Failed to notify CSS inspector opened:",Ru)
        })),wo.isAutoSelected||Ga(wo,wo.shiftKey===!0);
        return
      }
      const fh=e.composerDataService.selectedComposerId,Qu=e.composerDataService.resolveComposerIdToSelected(fh)||fh;
      if(Qu){
        const Ru=wo.tagName.toLowerCase(),Xu=Xn(wo),cb={
          id:wo.id,className:wo.className,attributes:wo.attributes,styles:wo.styles,rect:wo.rect,reactComponent:wo.reactComponent,uniqueId:wo.uniqueId,styleChanges:Xu.length>0?Xu.map(ad=>({
            property:ad.property,oldValue:ad.oldValue,newValue:ad.newValue
          })):void 0
        };
        try{
          const ad=e.composerDataService.getComposerDataIfLoaded(Qu);
          if(ad){
            const Hd=Wr(),fb=Wr();
            let Ed="";
            if(wo.reactComponent?.name)Ed=wo.reactComponent.name;
            else if(wo.id)Ed=`#${wo.id}`;
            else if(wo.className)Ed=`.${wo.className.split(" ")[0]}`;
            else{
              const nv=wo.path.split(" > ");
              Ed=nv[nv.length-1]||""
            }
            const lp=wo.reactComponent?.name?`<${wo.reactComponent.name}>`:`<${Ru}> ${Ed}`.trim(),lb=new Set,up=(wo.attributes||[]).map(nv=>({
              name:nv.name,value:nv.value
            }));
            wo.id&&!up.some(nv=>nv.name==="id")&&up.push({
              name:"id",value:wo.id
            }),wo.className&&!up.some(nv=>nv.name==="class")&&up.push({
              name:"class",value:wo.className
            });
            const hf=[];
            for(const nv of up){
              const $f=nv.name?.toString()??"";
              if(!$f||lb.has($f))continue;
              lb.add($f);
              let RA=(nv.value??"").toString();
              RA=RA.replace(/\s+/g," ").trim(),RA.length>200&&(RA=RA.slice(0,200)+"\u2026"),RA=RA.replace(/"/g,'\\"'),hf.push(`${$f}="${RA}"`)}const my=hf.length>0?`<${Ru} ${hf.join(" ")}>`:`<${Ru}>`;let Dv=(wo.innerText??"").toString();Dv=Dv.replace(/\s+/g," ").trim(),Dv.length>500&&(Dv=Dv.slice(0,500)+"\u2026");const f_=`</${Ru}>`;let dp=`${my}${Dv}${f_}`;if(wo.reactComponent?.name){const nv=wo.reactComponent.props?Object.entries(wo.reactComponent.props).map(([RA,i0])=>i0==null?`${RA}={null}`:typeof i0=="string"?`${RA}="${i0}"`:typeof i0=="number"||typeof i0=="boolean"?`${RA}={${i0}}`:`${RA}={${i0}}`).join(" "):"";dp=`<${wo.reactComponent.name}${nv?" "+nv:""}>${Dv}</${wo.reactComponent.name}>`+`
`+dp}if(Xu.length>0){const nv=Xu.map($f=>`${$f.property}: ${$f.oldValue} \u2192 ${$f.newValue}`);dp+=`
Pending Style Changes:
${nv.join(`
`)}`}const DS={uiElementData:{element:wo.reactComponent?.name||Ru,xpath:wo.path,textContent:wo.innerText||"",extra:JSON.stringify(cb),component:wo.reactComponent?.name||"",componentPropsJson:wo.reactComponent?.props?JSON.stringify(wo.reactComponent.props):""}},Mw={display:lp,mentionName:dp,typeaheadType:"ui-element",uuid:Hd,storedKey:fb,metadata:DS},Q1=e.composerDataService.getHandleIfLoaded_MIGRATED(Qu);if(!Q1)return;const c1=ad.richText,Yp=cye(c1,[Mw]),aA=(ad.text||"")+" "+dp+" ";e.composerDataService.updateComposerData(Q1,{richText:Yp,text:aA}),e.composerEventService.fireShouldForceText({composerId:Qu,bubbleId:void 0})}}catch(ad){console.error("[BrowserEditorContent] Error adding context or mention:",ad)}}Zu||(z(!1),u("window.postMessage({ type: 'disable-element-selection' }, '*')").catch(Ru=>{console.error("[BrowserEditor] Failed to disable element selection:",Ru)}),e.commandService.executeCommand("composer.focusComposer"))}else if(Va.channel==="element-selection-complete")Is();else if(Va.channel==="element-updated"){const wo=Va.args[0],Zu=X(),Qu=(Zu?.path===wo.path||Zu?.tagName===wo.tagName&&Zu?.id===wo.id&&Zu?.className===wo.className)&&Zu?{...wo,uniqueId:wo.uniqueId??Zu.uniqueId,cssVariables:wo.cssVariables??Zu.cssVariables,reactComponent:wo.reactComponent??Zu.reactComponent,availableFonts:wo.availableFonts??Zu.availableFonts}:wo;re()&&wo.keepSelectionActive&&tt()?ft=Qu:(ee(Qu),ft=null),re()&&wo.keepSelectionActive&&!W()&&(z(!0),u("window.postMessage({ type: 'enable-element-selection', selectionType: 'css-inspector' }, '*')").catch(Xu=>{console.error("[BrowserEditor] Failed to maintain CSS inspector selection:",Xu)}))}else if(dl==="css-inspector-style-change"){const wo=$l[0];Array.isArray(wo)&&un(wo)}else if(dl==="style-changes-confirmed"){const wo=$l[0];PO(wo)}else if(dl==="area-screenshot-selected"){const wo=$l[0];if(!wo?.bounds||wo.bounds.width<5||wo.bounds.height<5)return;n$({skipBrowserMessage:!0});const Zu=!0;e.commandService.executeCommand("cursor.browserAutomation.internal.captureScreenshot",d(),{screenshotType:"element",bounds:wo.bounds}).then(async fh=>{if(fh&&fh.dataUrl)await E5(fh.dataUrl,wo.bounds.width,wo.bounds.height),Zu&&e.commandService.executeCommand("composer.focusComposer");else throw new Error("Invalid screenshot response")}).catch(fh=>{console.error("[BrowserEditor] Failed to capture screenshot:",fh),e.notificationService.error("Failed to capture screenshot: "+fh.message)})}else if(dl==="focus-composer-input"){const wo=$l[0];Ph(wo.initialChar)}else if(dl==="css-inspector-undo"){const wo=Fe();if(wo.length>0){const Zu=wo.at(-1);Zu&&Bn(Zu)}}else if(dl==="css-inspector-redo"){const wo=Pe();if(wo.length>0){const Zu=wo.at(-1);Zu&&Vn(Zu)}}else if(dl==="element-deselected"){const wo=$l[0];ee(null),ft=null,ne(!1),le(!0),it(!1),wo?.keepSelectionActive||(z(!1),j(!1))}else if(dl==="update-target-url"){const wo=$l[0];u(`window.postMessage({ type: 'update-target-url', url: ${JSON.stringify(wo.url)} }, '*')`).catch(()=>{})}});Ai(()=>{fo.dispose()})},{defer:!1}));const ux=Nr=>{const fo=A();if(fo){const Va=gAu(fo);Va&&r.saveHostZoomLevel(Va,Nr)}},o4=()=>{const Nr=s();if(!Nr)return;const fo=nOf(NC()),Va=fAu(fo);Nr.setZoomLevel(Va),ux(Va)},S7=()=>{const Nr=s();if(!Nr)return;const fo=iOf(NC()),Va=fAu(fo);Nr.setZoomLevel(Va),ux(Va)},Q2=()=>{const Nr=s();Nr&&(Nr.resetZoom(),ux(0))},a4=async Nr=>{if(!Nr)return;(W()||Y()||re()||Le())&&Is(),!Xit(Nr)&&!Nr.match(/^https?:\/\//)&&(Nr.startsWith("localhost")||Nr.startsWith("127.0.0.1")?Nr=`http://${Nr}`:hAu(Nr)?Nr=`https://${Nr}`:Nr=`https://www.google.com/search?q=${encodeURIComponent(Nr)}`);const fo=Xit(Nr)?"":Nr;w(fo),x(fo),H(!Xit(Nr)),Fo(null),ee(null);const Va=t.getView(i);Va?.updateTabState({url:fo,loadError:void 0,loadErrorDetails:void 0,loadErrorKind:void 0,isLoading:!0});try{await new Promise(wo=>setTimeout(wo,100));const dl=Lc();if(!dl)throw new Error("Container element not available");try{await Va?.getWebContentsId()||await Va?.createBrowserView()}catch(wo){console.debug("[BrowserEditor] Failed to check webContentsId:",wo)}await Va?.attachToContainer(dl);const $l=t.getHeadlessContainer(i);$l&&($l.remove(),t.setHeadlessContainer(i,void 0)),Va?.setPaneVisible(!0),Va?.navigate(Nr)}catch(dl){const $l=dl instanceof Error?dl.message:String(dl);if(console.error("[BrowserEditor] Navigation error:",$l),$l.includes("ERR_ABORTED")||$l.includes("(-3)")){console.log("[BrowserEditor] Navigation aborted (new navigation started), ignoring error");return}Va?.updateTabState({loadError:$l,loadErrorKind:void 0,isLoading:!1})}},wP=()=>{const Nr=C();Ji(!1),Nr&&a4(Nr)},HT=async()=>{const Nr=s();if(!Nr)return;try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"back"})}catch{}Nr.goBack()&&(N(Nr.canGoBack()),O(Nr.canGoForward()))},GM=async()=>{const Nr=s();if(!Nr)return;try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"forward"})}catch{}Nr.goForward()&&(N(Nr.canGoBack()),O(Nr.canGoForward()))};An(()=>{const Nr=A(),fo=r.isBookmarked(Nr);Ea(fo)}),An(()=>{const Nr=r.onDidAddBookmark(()=>{const Zu=r.getBookmarks();Ts(Zu);const fh=A();Ea(r.isBookmarked(fh))}),fo=r.onDidRemoveBookmark(()=>{const Zu=r.getBookmarks();Ts(Zu);const fh=A();Ea(r.isBookmarked(fh))}),Va=r.onDidReorderBookmarks(Zu=>{Ts(Zu)}),dl=t.onDidRequestFocusUrlBar(Zu=>{Zu===i&&(Ji(!0),setTimeout(()=>{Ra?.focus(),Ra?.select()},0))}),$l=r.onDidChangeHistory(()=>{Kr(r.getHistory())}),wo=r.onDidChangeBookmarkBar(()=>{const Zu=r.getBookmarks();Ts(Zu);const fh=A();Ea(r.isBookmarked(fh))});Ai(()=>{Nr.dispose(),fo.dispose(),Va.dispose(),dl.dispose(),$l.dispose(),wo.dispose()})});const Xd=()=>{const Nr=A(),fo=Vy()||Nr;if(xc())r.removeBookmark(Nr);else{const wo=`https://www.google.com/s2/favicons?domain=${v4f(Nr).domain}&sz=64`,Zu=N1a(Nr,Vy(),l());r.addBookmark(Nr,fo,wo,Zu)}},KQ=(Nr,fo)=>{Nr.metaKey||Nr.ctrlKey?(Nr.preventDefault(),Tt(fo.url,{background:!0})):a4(fo.url)},XU=(Nr,fo)=>{Nr.button===1&&(Nr.preventDefault(),Nr.stopPropagation(),Tt(fo.url,{background:!0}))},{showHover:x5,hideHover:gg}=ik(0);let sS;const T5=(Nr,fo)=>{Nr.preventDefault(),Nr.stopPropagation();const Va=[];Va.push(new Hs("bookmark.rename","Rename Bookmark",void 0,!0,async()=>{const dl=fo.customName||N1a(fo.url,fo.title,l()),$l=await e.quickInputService.input({prompt:"Enter new bookmark name",value:dl,validateInput:async wo=>!wo||wo.trim().length===0?"Bookmark name cannot be empty":null});$l&&$l.trim().length>0&&r.renameBookmark(fo.url,$l.trim())})),Va.push(new id),Va.push(new Hs("bookmark.remove","Remove Bookmark",void 0,!0,async()=>{r.removeBookmark(fo.url)})),e.contextMenuService.showContextMenu({getAnchor:()=>({x:Nr.clientX,y:Nr.clientY}),getActions:()=>Va})},PL=()=>{ih!==null&&(cancelAnimationFrame(ih),ih=null)},e$=Nr=>{if(!Eh||!Tp)return;const fo=Eh.getBoundingClientRect(),Va=50,dl=10;let $l=0;if(Nr<fo.left+Va){const wo=fo.left+Va-Nr;$l=-Math.min(wo*.2,dl)}else if(Nr>fo.right-Va){const wo=Nr-(fo.right-Va);$l=Math.min(wo*.2,dl)}if($l!==0){const wo=Tp.getCurrentScrollPosition();Tp.setScrollPositionNow({scrollLeft:wo.scrollLeft+$l}),ih=requestAnimationFrame(()=>e$(Nr))}else PL()},LL=()=>{yA!==null&&(clearTimeout(yA),yA=null)},WM=(Nr,fo)=>{LL();const Va=Nr.currentTarget;yA=window.setTimeout(()=>{const dl=fo.customName||N1a(fo.url,fo.title,l()),$l=(()=>{var wo=A4f(),Zu=wo.firstChild,fh=Zu.firstChild,Qu=fh.nextSibling,Ru=Zu.nextSibling;return wo.style.setProperty("white-space","nowrap"),fh.addEventListener("error",Xu=>{Xu.currentTarget.style.display="none"}),fh.style.setProperty("object-fit","contain"),ge(Qu,dl),ge(Ru,()=>fo.url),tn(()=>Zr(fh,"src",fo.favicon)),wo})();pG({target:Va,content:$l,width:"auto"})},500)},I5=()=>{LL(),Ile()},mG=(Nr,fo)=>{if(LL(),Ile(),no(fo),Wl(!0),Nr.dataTransfer){Nr.dataTransfer.effectAllowed="move";const Va=tr()[fo];Va&&Nr.dataTransfer.setData("text/plain",Va.url)}},x_e=(Nr,fo)=>{Nr.preventDefault();const Va=Mh();if(Va===null)return;const $l=Nr.currentTarget.getBoundingClientRect(),wo=$l.left+$l.width/2,Zu=Nr.clientX;let fh;Zu<wo?fh=fo:fh=fo+1,fh===Va||fh===Va+1?Zd(null):Zd(fh),Nr.dataTransfer&&(Nr.dataTransfer.dropEffect="move"),PL(),ih=requestAnimationFrame(()=>e$(Nr.clientX))},wre=Nr=>{Nr.preventDefault()},T_e=Nr=>{const fo=Nr.relatedTarget;(!fo||!Eh?.contains(fo))&&Zd(null)},t$=Nr=>{Nr.preventDefault(),PL();const fo=Mh(),Va=Sl();if(fo===null||Va===null)return;const $l=[...tr()],[wo]=$l.splice(fo,1),Zu=Va>fo?Va-1:Va;$l.splice(Zu,0,wo),r.reorderBookmarks($l)},_re=()=>{PL(),no(null),Zd(null),Wl(!1),Ile()},{showMenuHover:pG,hideMenuHover:Ile,MenuHoverPortal:j2}=Dfn({position:2,anchorAlignment:"start",offsetY:4}),gG=Nr=>{u(`window.postMessage({ type: '${
                Nr
              }
              ' }, '*')`).catch(fo=>{console.error(`[BrowserEditor] Failed to ${Nr==="start-area-screenshot"?"start":"stop"} area screenshot mode:`,fo)})};async function D5(){if(Le()){gG("start-area-screenshot");return}if(W()&&Y()){try{await u("window.postMessage({ type: 'enter-inspect-mode' }, '*')")}catch(Nr){console.error("[BrowserEditor] Failed to resume inspect mode:",Nr)}try{await u("window.postMessage({ type: 'enable-element-selection', selectionType: 'css-inspector' }, '*')")}catch(Nr){console.error("[BrowserEditor] Failed to resume element selection:",Nr)}}}const n$=Nr=>{Le()&&(We(!1),!Nr?.skipBrowserMessage&&gG("stop-area-screenshot"))},Is=Nr=>{n$(),z(!1),j(!1),Nr?.preserveCssInspector||(ne(!1),le(!0),ee(null),ft=null,it(!1)),u("window.postMessage({ type: 'exit-inspect-mode' }, '*')").catch(fo=>{console.error("[BrowserEditor] Failed to notify exit inspect mode:",fo)}),u("window.postMessage({ type: 'disable-element-selection' }, '*')").catch(fo=>{console.error("[BrowserEditor] Failed to disable element selection:",fo)})},rc=Nr=>{Le()||(Is({preserveCssInspector:Nr?.preserveCssInspector}),We(!0),gG("start-area-screenshot"))},ta=()=>{if(n$(),Y()){j(!1),z(!1),re()&&le(!1),u("window.postMessage({ type: 'exit-inspect-mode' }, '*')").catch(Nr=>{console.error("[BrowserEditor] Failed to notify exit inspect mode:",Nr)}),u("window.postMessage({ type: 'disable-element-selection' }, '*')").catch(Nr=>{console.error("[BrowserEditor] Failed to disable element selection:",Nr)});return}j(!0),z(!0),le(!0);try{e.analyticsService.trackEvent("browser.selectElementClick")}catch{}u("window.postMessage({ type: 'enter-inspect-mode' }, '*')").catch(Nr=>{console.error("[BrowserEditor] Failed to notify inspect mode:",Nr)}),u("window.postMessage({ type: 'enable-element-selection', selectionType: 'css-inspector' }, '*')").catch(Nr=>{console.error("[BrowserEditor] Failed to enable element selection:",Nr)})},ec=Nr=>{Le()?n$():rc(Nr)},Fu=async()=>{const Nr=re();try{e.analyticsService.trackEvent("browser.cssInspector.action",{action:Nr?"close":"open"})}catch{}if(Nr)ne(!1),le(!0),it(!1),be(!0);else if(ne(!0),le(!0),be(!1),!X()){j(!0),z(!0);try{await u("window.postMessage({ type: 'enable-element-selection', selectionType: 'css-inspector' }, '*')")}catch(fo){console.error("[BrowserEditor] Failed to enable element selection:",fo)}try{await u("window.postMessage({ type: 'auto-select-root-element' }, '*')")}catch(fo){console.error("[BrowserEditor] Failed to auto-select root element:",fo)}}},ah=async()=>{try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"screenshot"})}catch{}try{const Nr=await e.commandService.executeCommand("cursor.browserAutomation.internal.captureScreenshot",d(),{screenshotType:"viewport"});if(Nr&&Nr.dataUrl){const fo=Lc();if(fo){const Va=fo.getBoundingClientRect();await E5(Nr.dataUrl,Va.width,Va.height),e.commandService.executeCommand("composer.focusComposer")}}else throw new Error("Invalid screenshot response")}catch(Nr){console.error("[BrowserEditor] Failed to capture screenshot:",Nr),e.notificationService.error("Failed to capture screenshot: "+(Nr instanceof Error?Nr.message:String(Nr)))}},Fm=async()=>{try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"clear_cookies"})}catch{}await s()?.clearCookies(),e.notificationService.info("Cookies cleared")},Sg=async()=>{try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"clear_cache"})}catch{}await s()?.clearCache(),e.notificationService.info("Cache cleared")},fm=async()=>{await s()?.clearAcceptedCertificates(),e.notificationService.info("Accepted certificates cleared")};An(()=>{const Nr=Lc();if(!Nr)return;const fo=setTimeout(()=>{const Va=Nr.getBoundingClientRect();Va.width>0&&Va.height>0&&window.dispatchEvent(new Event("resize"))},100);Ai(()=>clearTimeout(fo))});const jf=()=>!!n.transient,W1=()=>(()=>{var Nr=P4f(),fo=Nr.firstChild,Va=fo.firstChild;return Nr.style.setProperty("display","flex"),Nr.style.setProperty("flex-direction","column"),Nr.style.setProperty("height","calc(100% - 2px)"),ge(Nr,K(Xe,{get when(){return!jf()},get children(){var dl=E4f(),$l=dl.firstChild,wo=$l.firstChild,Zu=wo.firstChild,fh=wo.nextSibling,Qu=fh.firstChild,Ru=fh.nextSibling,Xu=Ru.firstChild,cb=$l.nextSibling;return wo.addEventListener("click",HT),fh.addEventListener("click",GM),Ru.addEventListener("click",()=>{Vh();try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"refresh"})}catch{}s()?.reloadIgnoringCache(),Ra?.blur()}),Bs(ad=>gm=ad,Xu),ge($l,K(Xe,{get when(){return $()},get children(){var ad=y4f(),Hd=ad.firstChild;return ad.addEventListener("click",Xd),tn(fb=>{var Ed=xc()?"Remove bookmark":"Bookmark this page",lp=Qt.asClassName(xc()?Be.starFull:Be.starEmpty);return Ed!==fb.e&&Zr(ad,"title",fb.e=Ed),lp!==fb.t&&Un(Hd,fb.t=lp),fb},{e:void 0,t:void 0}),ad}}),null),ge(cb,K(Xe,{get when(){return Xi()},get fallback(){return(()=>{var ad=O4f();return ad.addEventListener("click",()=>{Ni(!1),Ji(!0),setTimeout(()=>{Ra?.focus(),Ra?.select()},0)}),ad.addEventListener("mouseleave",()=>{Ni(!1)}),ad.addEventListener("mouseenter",()=>{Ni(!0)}),ge(ad,K(Xe,{get when(){return Ui(()=>!!I())()&&!A()},get children(){return L4f()}}),null),ge(ad,K(Xe,{get when(){return Ui(()=>!!$())()&&A()},get children(){return[(()=>{var Hd=N4f();return Hd.style.setProperty("position","absolute"),Hd.style.setProperty("left","8px"),Hd.style.setProperty("right","8px"),Hd.style.setProperty("transition","opacity 0.1s ease"),ge(Hd,A),tn(fb=>{var Ed=qr()?1:0,lp=qr()?"auto":"none";return Ed!==fb.e&&((fb.e=Ed)!=null?Hd.style.setProperty("opacity",Ed):Hd.style.removeProperty("opacity")),lp!==fb.t&&((fb.t=lp)!=null?Hd.style.setProperty("pointer-events",lp):Hd.style.removeProperty("pointer-events")),fb},{e:void 0,t:void 0}),Hd})(),(()=>{var Hd=M4f();return Hd.style.setProperty("display","flex"),Hd.style.setProperty("align-items","center"),Hd.style.setProperty("transition","opacity 0.1s ease"),Hd.style.setProperty("overflow","hidden"),Hd.style.setProperty("min-width","0"),ge(Hd,()=>{const fb=v4f(A());return[(()=>{var Ed=U4f();return ge(Ed,()=>fb.protocol),Ed})(),(()=>{var Ed=$4f();return ge(Ed,()=>fb.domain),Ed})(),K(Xe,{get when(){return fb.port},get children(){var Ed=q4f();return ge(Ed,()=>fb.port),Ed}}),(()=>{var Ed=H4f();return ge(Ed,()=>fb.path),Ed})()]}),tn(fb=>{var Ed=qr()?0:1,lp=qr()?"none":"auto";return Ed!==fb.e&&((fb.e=Ed)!=null?Hd.style.setProperty("opacity",Ed):Hd.style.removeProperty("opacity")),lp!==fb.t&&((fb.t=lp)!=null?Hd.style.setProperty("pointer-events",lp):Hd.style.removeProperty("pointer-events")),fb},{e:void 0,t:void 0}),Hd})()]}}),null),ge(ad,K(Xe,{get when(){return Ui(()=>!$())()&&!I()},get children(){return F4f()}}),null),ad})()},get children(){return[(()=>{var ad=_4f(),Hd=ad.firstChild;Hd.addEventListener("keydown",Ed=>{const lp=Ii(),lb=er();if((Ed.metaKey||Ed.ctrlKey)&&Ed.key.toLowerCase()==="l"){Ed.preventDefault(),Ed.stopPropagation(),Ra?.select();return}if(Ed.key==="Escape")Ed.preventDefault(),lp.length>0?(x(gi()),Ar([]),Sr(-1),Pi(-1)):(Ji(!1),x(A()),Ra?.blur(),s()?.focus());else if(Ed.key==="ArrowDown"){if(lp.length>0){Ed.preventDefault();const up=lb<lp.length-1?lb+1:-1;Sr(up),x(up===-1?gi():lp[up].url)}}else if(Ed.key==="ArrowUp"){if(lp.length>0){Ed.preventDefault();const up=lb<=-1?lp.length-1:lb-1;Sr(up),x(up===-1?gi():lp[up].url)}}else if(Ed.key==="Tab"&&rr()){Ed.preventDefault();const up=lb>=0?lp[lb]:lp[0];up&&(x(up.url),_i(up.url))}else if(Ed.key==="ArrowRight"&&rr()){const up=Ed.currentTarget;if(up.selectionStart===up.value.length){Ed.preventDefault();const hf=rr(),my=C()+hf;x(my),_i(my)}}}),Hd.addEventListener("keypress",Ed=>{if(Ed.key==="Enter"){const lp=er(),lb=Ii();if(lp>=0&&lp<lb.length){const up=lb[lp];a4(up.url)}else wP();Ar([]),Sr(-1),Pi(-1),Ra?.blur(),s()?.focus()}}),Hd.addEventListener("blur",()=>{Ji(!1),Ar([]),Sr(-1),Pi(-1),_i("")}),Hd.addEventListener("focus",Ed=>{Ji(!0),_i(Ed.currentTarget.value),Ed.currentTarget.select()}),Hd.addEventListener("input",Ed=>{Ji(!0);const lp=Ed.currentTarget.value;x(lp),_i(lp)});var fb=Ra;return typeof fb=="function"?Bs(fb,Hd):Ra=Hd,ge(ad,K(Xe,{get when(){return rr()},get children(){var Ed=w4f(),lp=Ed.firstChild,lb=lp.nextSibling;return ge(lp,C),ge(lb,rr),Ed}}),null),tn(()=>Hd.value=$()?C():""),ad})(),K(Ocy,{isVisible:()=>Xi()&&Ii().length>0,suggestions:Ii,selectedIndex:er,hoveredIndex:Es,query:gi,onSelect:ad=>{a4(ad.url),Ar([]),Sr(-1),Pi(-1),Ra?.blur()},onDeleteHistoryEntry:ad=>{r.removeHistoryEntry(ad),Kr(r.getHistory())},onHover:ad=>{Pi(ad)}})]}}),null),ge(cb,K(Xe,{get when(){return I()},get children(){return C4f()}}),null),ge(dl,K(Xe,{when:K4f,get children(){return[K(Xe,{get when(){return Fe().length>0},get children(){var ad=S4f(),Hd=ad.firstChild,fb=Hd.firstChild,Ed=Hd.nextSibling,lp=Ed.firstChild;ge(Hd,()=>Fe().length,fb),ge(Hd,()=>Fe().length!==1?"s":"",null),Yd(Ed,"mouseleave",gg),Ed.addEventListener("mouseenter",()=>{if(sS){const up=sS.getBoundingClientRect();x5({content:"Revert last change",target:{targetElements:[sS],x:up.left+up.width/2,y:up.bottom+4},position:{hoverPosition:2},appearance:{compact:!0},persistence:{hideOnHover:!0}})}}),Ed.addEventListener("click",()=>{const up=Fe().at(-1);up&&Bn(up)});var lb=sS;return typeof lb=="function"?Bs(lb,Ed):sS=Ed,ge(ad,K(xa,{variant:"secondary",onClick:Dn,class:"browser-pending-changes-button",children:"Undo"}),null),ge(ad,K(xa,{variant:"primary",onClick:async()=>{const up=Fe();if(up.length>0){try{e.analyticsService.trackEvent("browser.cssInspector.action",{action:"apply_clicked"})}catch{}await PO(up)&&(De([]),Ne([]))}},class:"browser-pending-changes-button",children:"Apply"}),null),tn(up=>{var hf=Fe().length===0,my=Qt.asClassName(Be.restore);return hf!==up.e&&(Ed.disabled=up.e=hf),my!==up.t&&Un(lp,up.t=my),up},{e:void 0,t:void 0}),ad}}),(()=>{var ad=k4f(),Hd=ad.firstChild,fb=Hd.firstChild,Ed=Hd.nextSibling,lp=Ed.firstChild,lb=Ed.nextSibling,up=lb.firstChild;return Hd.addEventListener("click",ta),Ed.addEventListener("click",()=>{try{e.analyticsService.trackEvent("browser.toggleDevToolsClick")}catch{}s()?.toggleDevTools()}),lb.addEventListener("click",()=>Fu()),up.style.setProperty("transform","scaleX(-1)"),ge(ad,K(z4f,{get url(){return A()},get isDev(){return!e.environmentService.isBuilt},triggerClassName:"tool-button",get portalRoot(){return e.portalElement},get zoomPercent(){return NC()},onZoomIn:o4,onZoomOut:S7,onZoomReset:Q2,onTakeScreenshot:ah,onCaptureAreaScreenshot:()=>{try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"area_screenshot"})}catch{}ec()},onHardReload:()=>{Vh();try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"hard_reload"})}catch{}s()?.reloadIgnoringCache()},onCopyUrl:()=>{try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"copy_url"})}catch{}const hf=A();hf&&e.clipboardService.writeText(hf)},onClearHistory:()=>{try{e.analyticsService.trackEvent("browser.toolbar.action",{action:"clear_history"})}catch{}r.clearHistory(),e.notificationService.info("Browsing history cleared")},onClearCookies:Fm,onClearCache:Sg,onClearCertificates:fm}),null),tn(hf=>{var my=`tool-button blue ${W()&&Y()?"active":""}`,Dv=Qt.asClassName(Be.inspect),f_=`tool-button ${Pt()?"blue active":""}`,dp=Pt()?"Hide Console":"Show Console",DS=Qt.asClassName(Be.terminal),Mw=`tool-button ${re()?"blue active":""}`,Q1=re()?"Hide CSS Inspector":"Show CSS Inspector",c1=Qt.asClassName(Be.sidebarLeft);return my!==hf.e&&Un(Hd,hf.e=my),Dv!==hf.t&&Un(fb,hf.t=Dv),f_!==hf.a&&Un(Ed,hf.a=f_),dp!==hf.o&&Zr(Ed,"title",hf.o=dp),DS!==hf.i&&Un(lp,hf.i=DS),Mw!==hf.n&&Un(lb,hf.n=Mw),Q1!==hf.s&&Zr(lb,"title",hf.s=Q1),c1!==hf.h&&Un(up,hf.h=c1),hf},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),ad})()]}}),null),tn(ad=>{var Hd=!R(),fb=Qt.asClassName(Be.arrowLeft),Ed=!M(),lp=Qt.asClassName(Be.arrowRight),lb=`nav-refresh-icon ${Qt.asClassName(Be.refresh)}`;return Hd!==ad.e&&(wo.disabled=ad.e=Hd),fb!==ad.t&&Un(Zu,ad.t=fb),Ed!==ad.a&&(fh.disabled=ad.a=Ed),lp!==ad.o&&Un(Qu,ad.o=lp),lb!==ad.i&&Un(Xu,ad.i=lb),ad},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),dl}}),fo),ge(Nr,K(Xe,{get when(){return Ui(()=>!jf())()&&tr().length>0},get children(){var dl=I4f();return ge(dl,K(_D,{scrollingDirection:"horizontal",style:{width:"100%",height:"100%"},innerContainerStyle:{height:"100%"},nonReactiveElementOptions:{verticalScrollbarSize:0,horizontalScrollbarSize:6},setScrollableRef:$l=>Tp=$l,get children(){var $l=T4f();return Bs(wo=>Eh=wo,$l),ge($l,K(Rft,{get each(){return tr()},children:(wo,Zu)=>{const fh=xe(()=>Mh()===Zu),Qu=xe(()=>Sl()===Zu);return(()=>{var Ru=J4f(),Xu=Ru.firstChild,cb=Xu.nextSibling,ad=cb.nextSibling;return Ru.addEventListener("dragend",_re),Ru.addEventListener("drop",t$),Ru.addEventListener("dragleave",T_e),Ru.addEventListener("dragenter",wre),Ru.addEventListener("dragover",Hd=>x_e(Hd,Zu)),Ru.addEventListener("dragstart",Hd=>mG(Hd,Zu)),Ru.addEventListener("mouseleave",I5),Ru.addEventListener("mouseenter",Hd=>WM(Hd,wo())),Ru.addEventListener("contextmenu",Hd=>T5(Hd,wo())),Ru.addEventListener("mouseup",Hd=>XU(Hd,wo())),Ru.addEventListener("mousedown",Hd=>{Hd.button===1&&Hd.preventDefault()}),Ru.addEventListener("click",Hd=>{pa()?(Hd.preventDefault(),Hd.stopPropagation()):KQ(Hd,wo())}),Zr(Ru,"draggable",!0),Xu.addEventListener("error",Hd=>{const fb=Hd.target;fb.style.display="none";const Ed=fb.nextElementSibling;Ed&&(Ed.style.display="flex")}),cb.style.setProperty("display","none"),ge(ad,()=>wo().customName||N1a(wo().url,wo().title,l())),tn(Hd=>{var fb=`bookmark-item ${fh()?"dragging":""} ${Qu()?"drag-over-before":""}`,Ed=wo().url,lp=wo().favicon,lb=`bookmark-favicon-fallback ${Qt.asClassName(Be.globe)}`;return fb!==Hd.e&&Un(Ru,Hd.e=fb),Ed!==Hd.t&&Zr(Ru,"title",Hd.t=Ed),lp!==Hd.a&&Zr(Xu,"src",Hd.a=lp),lb!==Hd.o&&Un(cb,Hd.o=lb),Hd},{e:void 0,t:void 0,a:void 0,o:void 0}),Ru})()}}),null),ge($l,K(Xe,{get when(){return Sl()===tr().length},get children(){var wo=x4f();return wo.style.setProperty("position","relative"),wo.style.setProperty("width","2px"),wo.style.setProperty("height","20px"),wo.style.setProperty("background","var(--vscode-focusBorder)"),wo.style.setProperty("border-radius","1px"),wo.style.setProperty("flex-shrink","0"),wo.style.setProperty("margin-left","-3px"),wo.style.setProperty("animation","dragIndicatorPulse 0.3s ease-in-out"),wo}}),null),$l}})),dl}}),fo),fo.style.setProperty("display","flex"),fo.style.setProperty("flex","1"),fo.style.setProperty("overflow","hidden"),Bs(Bu,Va),Va.style.setProperty("transition","flex 0.2s ease-out"),ge(Va,K(Xv,{get children(){return[K(ba,{get when(){return Yi()},get children(){var dl=D4f(),$l=dl.firstChild,wo=$l.firstChild,Zu=wo.firstChild,fh=wo.nextSibling,Qu=fh.nextSibling,Ru=Qu.nextSibling,Xu=Ru.firstChild,cb=Xu.firstChild,ad=cb.nextSibling,Hd=Xu.nextSibling,fb=Hd.firstChild,Ed=fb.nextSibling,lp=Hd.nextSibling,lb=lp.firstChild,up=lb.nextSibling,hf=lp.nextSibling,my=hf.firstChild,Dv=my.nextSibling,f_=Dv.firstChild,dp=hf.nextSibling,DS=dp.firstChild,Mw=DS.nextSibling,Q1=Ru.nextSibling,c1=Q1.firstChild,Yp=Q1.nextSibling,aA=Yp.firstChild,nv=aA.firstChild,$f=aA.nextSibling,RA=$f.firstChild,i0=RA.nextSibling;return ge(ad,()=>Yi()?.error),ge(Ed,()=>Yi()?.issuerName),ge(up,()=>Yi()?.subjectName),ge(Dv,()=>new Date(Yi()?.validStart||0).toLocaleDateString(),f_),ge(Dv,()=>new Date(Yi()?.validExpiry||0).toLocaleDateString(),null),ge(Mw,()=>Yi()?.fingerprint),aA.addEventListener("click",()=>{Dr()||pr(!fs())}),ge(aA,K(uxe,{get value(){return fs()},onChange:pr,size:"small"}),nv),RA.addEventListener("click",async()=>{const dx=Yi();if(dx){mi(!0);try{await s()?.rejectCertificate(dx.fingerprint),Qr(null),pr(!1)}catch(hx){console.error("[BrowserEditor] Failed to reject certificate:",hx)}finally{mi(!1)}}}),i0.addEventListener("click",async()=>{const dx=Yi();if(dx){mi(!0);try{await s()?.acceptCertificate(dx.fingerprint,fs()),await new Promise(k7=>setTimeout(k7,100)),Qr(null),pr(!1);const hx=A();hx&&s()?.navigate(hx)}catch(hx){console.error("[BrowserEditor] Failed to accept certificate:",hx)}finally{mi(!1)}}}),ge(i0,()=>Dr()?"Processing...":"Trust Certificate"),tn(dx=>{var hx=Qt.asClassName(Be.shield),k7=Qt.asClassName(Be.warningTwo),i$=Dr(),_R=Dr();return hx!==dx.e&&Un(Zu,dx.e=hx),k7!==dx.t&&Un(c1,dx.t=k7),i$!==dx.a&&(RA.disabled=dx.a=i$),_R!==dx.o&&(i0.disabled=dx.o=_R),dx},{e:void 0,t:void 0,a:void 0,o:void 0}),dl}}),K(ba,{get when(){return I()},children:null})]}}),null),ge(Va,K(Xe,{get when(){return Lt()},get children(){var dl=B4f(),$l=dl.firstChild,wo=$l.firstChild,Zu=wo.firstChild,fh=wo.nextSibling;return dl.addEventListener("wheel",kb),dl.addEventListener("mousedown",kb),dl.addEventListener("click",kb),fh.addEventListener("click",Qu=>{Qu.stopPropagation(),tv()}),tn(Qu=>{var Ru=!!jt(),Xu=Qt.asClassName(Be.lock);return Ru!==Qu.e&&dl.classList.toggle("feedback-active",Qu.e=Ru),Xu!==Qu.t&&Un(Zu,Qu.t=Xu),Qu},{e:void 0,t:void 0}),dl}}),null),ge(Va,K(Xe,{get when(){return en()},get children(){var dl=R4f(),$l=dl.firstChild,wo=$l.nextSibling,Zu=wo.firstChild;return ge(wo,en,null),dl}}),null),ge(fo,(()=>{var dl=Ui(()=>!!re());return()=>dl()&&(()=>{const $l=Zu=>{Zu.preventDefault(),Zu.stopPropagation(),Xt(!0),zy();const fh=Zu.clientX,Qu=sn(),Ru=cb=>{const ad=fh-cb.clientX,Hd=Math.max(250,Math.min(800,Qu+ad));Vt(Hd)},Xu=()=>{Xt(!1),zy()};document.addEventListener("mousemove",Ru),document.addEventListener("mouseup",Xu),Kg=()=>{document.removeEventListener("mousemove",Ru),document.removeEventListener("mouseup",Xu)}},wo=Zu=>{Zu.preventDefault(),Zu.stopPropagation(),Ot(!0),At();const fh=Zu.clientY,Qu=St(),Ru=cb=>{const ad=cb.clientY-fh,Hd=Math.max(100,Math.min(600,Qu+ad));Bt(Hd)},Xu=()=>{Ot(!1),At()};document.addEventListener("mousemove",Ru),document.addEventListener("mouseup",Xu),ot=()=>{document.removeEventListener("mousemove",Ru),document.removeEventListener("mouseup",Xu)}};return(()=>{var Zu=G4f(),fh=Zu.firstChild;return Zu.style.setProperty("min-width","260px"),Zu.style.setProperty("max-width","800px"),fh.addEventListener("mousedown",$l),ge(Zu,K(Xe,{get when(){return X()},children:Qu=>(()=>{var Ru=Q4f();return ge(Ru,K(Mcy,{get elementInfo(){return Qu()},onElementHover:Xu=>{u(`window.postMessage(${JSON.stringify({type:"hover-element",elementPath:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to hover element:",ad)})},onElementSelect:Xu=>{u(`window.postMessage(${JSON.stringify({type:"select-element",elementPath:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to select element:",ad)})},onElementReorder:Xu=>{const cb={type:"reorder-dom-element",elementPath:Xu.elementPath,newParentPath:Xu.newParentPath,beforeSiblingPath:Xu.beforeSiblingPath};u(`window.postMessage(${JSON.stringify(cb)}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to reorder element:",ad)})},onElementCut:Xu=>{u(`window.postMessage(${JSON.stringify({type:"cut-dom-element",elementPath:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to cut element:",ad)})},onElementCopy:Xu=>{u(`window.postMessage(${JSON.stringify({type:"copy-dom-element",elementPath:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to copy element:",ad)})},onElementPaste:Xu=>{u(`window.postMessage(${JSON.stringify({type:"paste-dom-element",targetElementPath:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to paste element:",ad)})},onElementDelete:Xu=>{u(`window.postMessage(${JSON.stringify({type:"delete-dom-element",elementPath:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to delete element:",ad)})}}),null),ge(Ru,K(Xe,{get when(){return pe()},get children(){var Xu=W4f();return Xu.addEventListener("mousedown",wo),Xu}}),null),tn(Xu=>{var cb=!!Jt(),ad=!pe(),Hd={...pe()?{height:`${St()}px`,"min-height":"100px","max-height":"600px"}:{flex:"1","min-height":"0",height:"auto"}};return cb!==Xu.e&&Ru.classList.toggle("element-tree-resizing",Xu.e=cb),ad!==Xu.t&&Ru.classList.toggle("element-tree-full-height",Xu.t=ad),Xu.a=La(Ru,Hd,Xu.a),Xu},{e:void 0,t:void 0,a:void 0}),Ru})()}),null),ge(Zu,K(Xe,{get when(){return pe()},get children(){return K(Xe,{get when(){return X()},children:Qu=>K(Dcy,{get elementInfo(){return Qu()},viewId:i,onClose:()=>{Is()},get availableFontFamilies(){return Oe()},get styleChanges(){return Fe()},onStyleChangesUpdate:De,onApplyChanges:async()=>{const Ru=Fe();if(Ru.length>0){try{e.analyticsService.trackEvent("browser.cssInspector.action",{action:"apply_clicked"})}catch{}const Xu=new Set(Ru.map(ad=>ad.timestamp));await PO(Ru)&&(De(ad=>ad.filter(Hd=>!Xu.has(Hd.timestamp))),Ne([]))}},onResetChanges:Dn,onUndoDomChange:Bn,onHighlightVisibilityChange:Yt,onFocusWithinChange:Ru=>{it(Ru),!Ru&&ft&&(ee(ft),ft=null)},onMenuOpenChange:wK,get panelWidth(){return sn()},onStyleChange:(Ru,Xu)=>{if(Ru==="align-horizontal"||Ru==="align-vertical"){const ad=Qu(),Hd=ad?.path||"";let fb=ad?.tagName.toLowerCase()||"";if(ad?.id)fb=`#${ad.id}`;else if(ad?.className){const lp=ad.className.split(" ")[0];lp&&(fb=`.${lp}`)}const Ed=`
														(function() {
															const elementPath = ${JSON.stringify(Hd)};
															const alignment = ${JSON.stringify(Xu)};
															const isHorizontal = ${JSON.stringify(Ru==="align-horizontal")};
															const elementInfo = ${JSON.stringify({selector:fb,path:ad?.path||"",innerHTML:ad?.innerHTML||"",id:ad?.id||"",className:ad?.className||"",tagName:ad?.tagName||"",attributes:ad?.attributes||[],reactComponent:ad?.reactComponent??void 0})};

															// Get element from path (reuse function from browserInjection)
															function getElementFromPath(path) {
																if (!path || typeof path !== 'string') return null;
																const parts = path.split(' > ').filter(Boolean);
																if (parts.length === 0) return null;

																let current = document.body;
																if (!current) return null;
																if (parts[0] === 'body') parts.shift();

																for (const part of parts) {
																	const indexSplit = part.split('[');
																	const selectorPart = indexSplit[0];
																	const indexPart = indexSplit[1] ? indexSplit[1].replace(']', '') : null;

																	const selectorMatch = selectorPart.match(/^([a-zA-Z0-9_-]+)(#[^.]+)?(..+)?$/);
																	if (!selectorMatch) return null;

																	const tagName = selectorMatch[1].toUpperCase();
																	const id = selectorMatch[2] ? selectorMatch[2].substring(1) : null;
																	const classesStr = selectorMatch[3] ? selectorMatch[3].substring(1) : null;
																	const elementIndex = indexPart ? parseInt(indexPart, 10) : -1;
																	const classes = classesStr ? classesStr.split('.').filter(Boolean) : [];

																	const matchingChildren = [];
																	for (const child of current.children) {
																		if (child.tagName !== tagName) continue;
																		if (id && child.id !== id) continue;
																		if (classes.length > 0) {
																			const hasAllClasses = classes.every((cls) => child.classList.contains(cls));
																			if (!hasAllClasses) continue;
																		}
																		matchingChildren.push(child);
																	}

																	let found = null;
																	if (elementIndex >= 0 && elementIndex < matchingChildren.length) {
																		found = matchingChildren[elementIndex];
																	} else if (matchingChildren.length > 0) {
																		found = matchingChildren[0];
																	}

																	if (!found) return null;
																	current = found;
																}
																return current;
															}

															const element = getElementFromPath(elementPath);
															if (!element || !element.parentElement) return;

															const parent = element.parentElement;
															const elementRect = element.getBoundingClientRect();
															const parentRect = parent.getBoundingClientRect();

															// Track style changes for proper recording
															const styleChanges = [];
															const timestamp = Date.now();

															function createStyleChangeRecord(property, oldValue, newValue) {
																if (oldValue === newValue) return null;
																return {
																	selector: elementInfo.selector,
																	property: property,
																	oldValue: oldValue,
																	newValue: newValue,
																	hadInlineStyle: element.style.getPropertyValue(property) !== '',
																	timestamp: timestamp,
																	elementPath: elementInfo.path,
																	elementHTML: elementInfo.innerHTML,
																	elementId: elementInfo.id,
																	elementClassName: elementInfo.className,
																	elementTagName: elementInfo.tagName,
																	elementAttributes: elementInfo.attributes,
																	elementReactComponent: elementInfo.reactComponent,
																};
															}

															// Capture old values before any changes
															const computedStyle = window.getComputedStyle(element);
															const oldPosition = computedStyle.position;
															const oldLeft = element.style.left || computedStyle.left;
															const oldTop = element.style.top || computedStyle.top;

															// Ensure element has position context
															if (oldPosition === 'static') {
																element.style.position = 'relative';
																const positionChange = createStyleChangeRecord('position', 'static', 'relative');
																if (positionChange) styleChanges.push(positionChange);
															}

															// Get current offset from parent (accounting for scroll)
															const currentLeftRelative = elementRect.left - parentRect.left;
															const currentTopRelative = elementRect.top - parentRect.top;

															if (isHorizontal) {
																// Calculate desired left position relative to parent's content box
																const elementWidth = elementRect.width;
																const parentWidth = parentRect.width;

																let desiredLeft = 0;
																if (alignment === 'left') {
                
																	desiredLeft = 0;
																
              }
               else if (alignment === 'center') {
                
																	desiredLeft = (parentWidth - elementWidth) / 2;
																
              }
               else if (alignment === 'right') {
                
																	desiredLeft = parentWidth - elementWidth;
																
              }
              

																// Calculate offset needed (for position: relative, left is relative to normal position)
																// We need to temporarily remove left/top to get normal position
																const savedLeft = element.style.left;
																const savedTop = element.style.top;
																element.style.left = '';
																element.style.top = '';
																const normalRect = element.getBoundingClientRect();
																const normalLeftRelative = normalRect.left - parentRect.left;
																element.style.left = savedLeft;
																element.style.top = savedTop;

																// Calculate the left offset needed
																const leftOffset = desiredLeft - normalLeftRelative;
																const newLeft = Math.round(leftOffset) + 'px';
																element.style.left = newLeft;

																// Track the left change
																const leftChange = createStyleChangeRecord('left', oldLeft, newLeft);
																if (leftChange) styleChanges.push(leftChange);
															
            }
             else {
              
																// Calculate desired top position relative to parent's content box
																const elementHeight = elementRect.height;
																const parentHeight = parentRect.height;

																let desiredTop = 0;
																if (alignment === 'top') {
																	desiredTop = 0;
																} else if (alignment === 'middle') {
																	desiredTop = (parentHeight - elementHeight) / 2;
																} else if (alignment === 'bottom') {
																	desiredTop = parentHeight - elementHeight;
																}

																// Calculate offset needed (for position: relative, top is relative to normal position)
																const savedLeft = element.style.left;
																const savedTop = element.style.top;
																element.style.left = '';
																element.style.top = '';
																const normalRect = element.getBoundingClientRect();
																const normalTopRelative = normalRect.top - parentRect.top;
																element.style.left = savedLeft;
																element.style.top = savedTop;

																// Calculate the top offset needed
																const topOffset = desiredTop - normalTopRelative;
																const newTop = Math.round(topOffset) + 'px';
																element.style.top = newTop;

																// Track the top change
																const topChange = createStyleChangeRecord('top', oldTop, newTop);
																if (topChange) styleChanges.push(topChange);
															}

															// Notify update via message
															window.postMessage({ type: 'update-css-inspector-highlight' }, '*');

															// Send style change records for proper tracking
															if (window.cursorBrowser && window.cursorBrowser.send && styleChanges.length > 0) {
																window.cursorBrowser.send('css-inspector-style-change', styleChanges);
															}

															// Trigger element update if cursorBrowser is available
															if (window.cursorBrowser && window.cursorBrowser.send) {
																setTimeout(() => {
																	const rect = element.getBoundingClientRect();
																	window.cursorBrowser.send('element-updated', {
																		tagName: element.tagName,
																		id: element.id || '',
																		className: element.className || '',
																		rect: {
																			top: rect.top,
																			left: rect.left,
																			width: rect.width,
																			height: rect.height,
																		},
																		allStyles: (function() {
																			const computed = window.getComputedStyle(element);
																			const effective = {};
																			const importantProps = ['display', 'position', 'top', 'right', 'bottom', 'left', 'width', 'height'];
																			for (const prop of importantProps) {
																				effective[prop] = computed.getPropertyValue(prop);
																			}
																			return { effective: effective };
																		})(),
																		keepSelectionActive: true,
																	});
																}, 50);
															}
														})();
													`;u(Ed).catch(lp=>{console.error("[BrowserEditor] Failed to apply alignment:",lp)});return}u(`window.postMessage(${JSON.stringify({type:"apply-style-change",property:Ru,value:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to apply style change:",ad)})},onElementHover:Ru=>{u(`window.postMessage(${JSON.stringify({type:"hover-element",elementPath:Ru})}, '*')`).catch(cb=>{console.error("[BrowserEditor] Failed to hover element:",cb)})},onElementSelect:Ru=>{u(`window.postMessage(${JSON.stringify({type:"select-element",elementPath:Ru})}, '*')`).catch(cb=>{console.error("[BrowserEditor] Failed to select element:",cb)})},onPropChange:(Ru,Xu)=>{u(`window.postMessage(${JSON.stringify({type:"update-react-prop",propPath:Ru,value:Xu})}, '*')`).catch(ad=>{console.error("[BrowserEditor] Failed to update React prop:",ad)})},onThemeModeChange:Ru=>{const Xu=`
													(function() {
														// Remove any existing forced theme styles
														const existingStyle = document.getElementById('__cursor_forced_theme');
														if (existingStyle) {
															existingStyle.remove();
														}

														const mode = ${JSON.stringify(Ru)};

														if (mode === 'system') {
															// Remove forced styles, let system preference take over
															return;
														}

														// Create a style element that forces the color scheme
														const style = document.createElement('style');
														style.id = '__cursor_forced_theme';
														style.textContent = \`:root { color-scheme: \${mode} !important; }\`;
														document.head.appendChild(style);

														// Try to toggle dark/light class on common elements
														const root = document.documentElement;
														const body = document.body;

														if (mode === 'dark') {
															root.classList.add('dark');
															root.classList.remove('light');
															body.classList.add('dark');
															body.classList.remove('light');
															root.setAttribute('data-theme', 'dark');
															body.setAttribute('data-theme', 'dark');
														} else {
															root.classList.add('light');
															root.classList.remove('dark');
															body.classList.add('light');
															body.classList.remove('dark');
															root.setAttribute('data-theme', 'light');
															body.setAttribute('data-theme', 'light');
														}

														// Also try setting the media query preference via meta tag
														let metaTheme = document.querySelector('meta[name="color-scheme"]');
														if (!metaTheme) {
															metaTheme = document.createElement('meta');
															metaTheme.name = 'color-scheme';
															document.head.appendChild(metaTheme);
														}
														metaTheme.content = mode;
													})();
												`;u(Xu).catch(cb=>{console.error("[BrowserEditor] Failed to apply theme mode:",cb)})}})})}}),null),tn(Qu=>{var Ru=!!Ft(),Xu=`${sn()}px`;return Ru!==Qu.e&&Zu.classList.toggle("css-inspector-resizing",Qu.e=Ru),Xu!==Qu.t&&((Qu.t=Xu)!=null?Zu.style.setProperty("width",Xu):Zu.style.removeProperty("width")),Qu},{e:void 0,t:void 0}),Zu})()})()})(),null),tn(dl=>(dl=(re(),"1"))!=null?Va.style.setProperty("flex",dl):Va.style.removeProperty("flex")),Nr})();return(()=>{var Nr=j4f();return Nr.addEventListener("focusout",()=>Si(!1)),Nr.addEventListener("focusin",()=>Si(!0)),ge(Nr,W1,null),ge(Nr,K(j2,{}),null),Nr})()}var A4f,y4f,w4f,_4f,C4f,S4f,k4f,E4f,x4f,T4f,I4f,D4f,B4f,R4f,P4f,L4f,N4f,M4f,F4f,O4f,U4f,$4f,q4f,H4f,J4f,G4f,W4f,Q4f,j4f,z4f,V4f,K4f,Y4f,M1a,Z4f,pAu,X4f,F1a,gAu,eOf,Xit,ert,tOf,fAu,nOf,iOf,bAu,Hcy=