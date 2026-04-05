// Module: out-build/vs/workbench/contrib/reviewChanges/browser/utils/generatedFilesConstants.js
// Offset: 34058033 (bundle byte offset)
// Size: 28827 bytes

wCu=["package-lock.json", "yarn.lock", "pnpm-lock.yaml", "bun.lockb", "composer.lock", "poetry.lock", "Pipfile.lock", "Gemfile.lock", "go.sum", "Cargo.lock", "Podfile.lock", "go.mod.lock", "requirements.txt.lock", ".yarn-integrity", ".pnp.cjs", ".pnp.js", ".DS_Store", "Thumbs.db", "gradle-wrapper.jar", "gradlew", "gradlew.bat", "*.min.js", "*.min.css", "*.bundle.js", "*.bundle.css"]
}
});
function fpy(n){
  const e=wr();
  let t, i, r=null, s=null, o=!1;
  const a=new Set, l=()=>{
    const Ft=n.resource.goToFileUri||n.resource.modifiedUri||n.resource.originalUri;
    return Ft?(amn(e.workspaceContextService, Ft)??Ft.path).replace(/^\//, "").replace(/\/$/, ""):"Unknown"
  }, u=()=>{
    if(n.defaultCollapsed!==void 0)return n.defaultCollapsed;
    const Ft=l();
    return bqf(Ft)
  }, [d, m]=lt(500), [p, g]=lt(!1), [f, A]=lt(u()), [w, C]=lt(!1), [x, I]=lt(!1), [B, R]=lt(!1), [N, M]=lt(!1), [O, $]=lt(!1), {
    showHover:H, hideHover:W
  }
  =ik(300), z=Sie(), Y=!e.diffChangeSourceRegistry.isLegacyInlineDiffsUsed();
  An(()=>{
    n.resource.status==="deleted"&&A(!0)
  });
  const{
    linesAdded:j, linesRemoved:X
  }
  =mqf(()=>[n.resource]), ee=xe(()=>rpy(n.resource.comments.get())), re=xe(()=>{
    const Ft=j(), Xt=X();
    if(Ft===0&&Xt===0)return!1;
    const bn=n.resource.status;
    return bn==="modified"||bn==="renamed"?!1:bn==="added"||bn==="deleted"?!0:Ft>0&&Xt===0||Ft===0&&Xt>0
  }), ne=xe(()=>re()?xY.Unified:n.diffViewMode), pe=xe(()=>{
    if(n.resource.status!=="renamed")return!1;
    const Ft=n.resource.originalContents, Xt=n.resource.modifiedContents;
    return Ft!==void 0&&Xt!==void 0?Ft===Xt:!1
  }), le=xe(()=>pe()), he=xe(()=>{
    if(n.resource.status!=="renamed"||!n.resource.originalUri)return;
    const Ft=n.resource.originalUri;
    return(amn(e.workspaceContextService, Ft)??Ft.path).replace(/^\//, "").replace(/\/$/, "")
  }), be={
    expand:()=>A(!1), collapse:()=>A(!0), isCollapsed:()=>f(), getTopForLineNumber:Ft=>r?r.getModifiedEditor().getTopForLineNumber(Ft):s?s.getTopForLineNumber(Ft):0, getScrollTop:()=>r?r.getModifiedEditor().getScrollTop():s?s.getScrollTop():0
  };
  An(()=>{
    n.ref&&n.ref(be)
  });
  const{
    isDirty:fe
  }
  =lpy(()=>n.resource.modifiedUri||n.resource.originalUri), ke=hpy(()=>n.resource.modifiedUri||n.resource.originalUri), Se=Tv(e.inlineDiffService.inlineDiffs), Fe=xe(()=>n.skipComposerContext?!1:igi(e, e.composerDataService.selectedComposerHandle)), De=xe(()=>n.resource.status?n.resource.status:!n.resource.originalUri&&n.resource.modifiedUri?"added":n.resource.originalUri&&!n.resource.modifiedUri?"deleted":"modified");
  let Pe=[], Ne;
  const Oe=Ft=>{
    if(!Ft||!n.composerId)return;
    const Xt=Ft.contextKeyService.createKey("reviewChangesComposerId", n.composerId);
    Pe.push({
      dispose:()=>Xt.reset()
    })
  }, Ge=()=>l(), Le=()=>{
    const Ft=n.resource.goToFileUri||n.resource.modifiedUri||n.resource.originalUri;
    if(!Ft)return"";
    let Xt=Ft;
    if(Ft.scheme==="git"&&Ft.query)try{
      const bn=JSON.parse(Ft.query);
      typeof bn.path=="string"&&(Xt=je.file(bn.path))
    }
    catch{
      
    }
    try{
      return e.labelService.getUriLabel(Xt,{
        relative:!1
      })
    }
    catch{
      return(Xt.path||"").replace(/\/$/,"")
    }
  }, We=async Ft=>{
    Ft.stopPropagation(), e.analyticsService.trackEvent("agent_layout.undo_clicked");
    try{
      const Xt=n.resource.goToFileUri||n.resource.modifiedUri||n.resource.originalUri;
      if(!Xt)return;
      const bn=e.diffChangeSourceRegistry.getDescriptorsForUri(Xt);
      for(const St of bn)await e.diffChangeSourceRegistry.reject(St.id,{
        close:!0
      });
      await e.textFileService.save(Xt,{
        skipSaveParticipants:!0
      })
    }
    catch{
      
    }
  }, tt=async Ft=>{
    Ft.stopPropagation(), e.analyticsService.trackEvent("agent_layout.keep_clicked");
    const Xt=e.composerDataService.selectedComposerId, bn=e.composerDataService.selectedComposerHandle;
    if(bn&&e.composerDataService.getComposerData(bn)?.gitWorktree?.worktreePath){
      await e.composerService.applyWorktreeToCurrentBranch(Xt);
      return
    }
    try{
      const St=n.resource.goToFileUri||n.resource.modifiedUri||n.resource.originalUri;
      if(!St)return;
      const Bt=e.diffChangeSourceRegistry.getDescriptorsForUri(St);
      for(const Jt of Bt)await e.diffChangeSourceRegistry.accept(Jt.id);
      await e.textFileService.save(St,{
        skipSaveParticipants:!0
      })
    }
    catch{
      
    }
  }, it=()=>{
    if(!o){
      o=!0,(r||s)&&n.onDiffEditorUnmount?.(n.resource),Ne&&(clearTimeout(Ne),Ne=void 0);
      for(const Ft of a)typeof Ft=="object"&&"id"in Ft?cancelAnimationFrame(Ft.id):clearTimeout(Ft);
      a.clear();
      for(const Ft of Pe)try{
        Ft.dispose()
      }
      catch{
        
      }
      if(Pe=[],r){
        const Ft=n.diffWidgets.indexOf(r);
        Ft>-1&&n.diffWidgets.splice(Ft,1);
        const Xt=r;
        r=null;
        try{
          Xt.setModel(null)
        }
        catch{
          
        }
        try{
          Xt.dispose()
        }
        catch{
          
        }
        o=!1
      }
      else if(s){
        const Ft=s;
        s=null;
        try{
          Ft.setModel(null)
        }
        catch{
          
        }
        try{
          Ft.dispose()
        }
        catch{
          
        }
        o=!1
      }
      else o=!1
    }
  }, bt=async()=>{
    if((r||s)&&it(), le()){
      I(!0),g(!0);
      return
    }
    if(!t)return;
    I(!0);
    const Ft=document.createElement("div");
    for(Ft.style.height="100%", Ft.style.width="100%";
    t.firstChild;
    )t.removeChild(t.firstChild);
    t.appendChild(Ft);
    const Xt=n.readonly?[]:SC.getEditorContributions().filter(Mt=>Mt.id!==qrt.ID&&Mt.id!==fvn.ID&&Mt.id!=="editor.contrib.findController"), bn=e.configurationService.getValue("editor.fontFamily")||"monospace", St=e.configurationService.getValue("editor.fontSize"), Bt=e.configurationService.getValue("editor.lineNumbers")||"on", Jt=n.onReadonlyClick, Ot=n.resource, cn=(Mt, Pt)=>{
      try{
        if(Fe())return;
        const ut=Mt.getPosition();
        if(!ut)return;
        const ot=Mt.getScrolledVisiblePosition(ut);
        if(!ot)return;
        const Lt=Mt.getDomNode();
        if(!Lt)return;
        const Gt=Lt.getBoundingClientRect(),jt=Gt.left+ot.left,hn=Gt.top+ot.top,on=ut.column,en=new Hs("readonlyClick","Edit in File",void 0,!0,async()=>{
          Jt?.(Ot,Pt,on)
        });
        e.contextMenuService.showContextMenu({
          getAnchor:()=>({
            x:jt,y:hn
          }),getActions:()=>[en],autoSelectFirstItem:!0
        })
      }
      catch{
        
      }
    };
    if(De()==="added"){
      const Mt=e.instantiationService.createInstance(WS,Ft,{
        lineNumbers:Bt==="off"?"off":"on",stickyScroll:{
          enabled:!1
        },glyphMargin:n.showGlyphMargin??!1,minimap:{
          enabled:!1
        },scrollBeyondLastLine:!1,hover:{
          enabled:!0
        },automaticLayout:!0,fontFamily:bn,fontSize:St,readOnly:n.readonly||!1,scrollbar:{
          vertical:"hidden",horizontal:"auto",ignoreHorizontalScrollbarInContentHeight:!0,alwaysConsumeMouseWheel:!1
        },commentOnLineNumbers:!1
      },{
        isSimpleWidget:!1,contributions:Xt,isAddedMultiDiffEditor:!0
      });
      s=Mt,Oe(Mt);
      try{
        if(n.resource.modifiedUri){
          const ut=(await n.resource.modifiedModel).object.textEditorModel;
          if(Mt.setModel(ut),m(Mt.getContentHeight()),g(!0),n.onDiffEditorMount?.(n.resource,Mt,void 0),n.showOnlyCommentAreas&&ee()&&ee().length>0){
            const Gt=ut.getLineCount(),jt=nBa(ee(),Gt);
            jt.length>0&&Mt.setHiddenAreas(jt,"discussions-view")
          }
          n.registerSingleEditor?.(n.resource.modifiedUri?.toString(),Mt);
          const ot=Mt.onDidContentSizeChange(()=>{
            m(Mt.getContentHeight()),Mt.layout()
          });
          if(Pe.push(ot),n.readonly&&n.onReadonlyClick){
            const Gt=n.onReadonlyClick,jt=n.resource,hn=(gt,At,Tt)=>{
              if(Fe())return;
              const ze=new Hs("readonlyClick","Edit in File",void 0,!0,async()=>{
                Gt?.(jt,At,Tt)
              });
              e.contextMenuService.showContextMenu({
                getAnchor:()=>({
                  x:gt.posx,y:gt.posy
                }),getActions:()=>[ze],autoSelectFirstItem:!0
              })
            },on=Mt.onContextMenu(gt=>{
              gt.event.preventDefault(),gt.event.stopPropagation();
              const At=gt.target.position;
              if(!At)return;
              const Tt=At.lineNumber,ze=At.column;
              hn(gt.event,Tt,ze)
            });
            Pe.push(on);
            const en=Mt.onKeyDown(gt=>{
              if(gt.browserEvent.key==="Enter"&&(gt.browserEvent.metaKey||gt.browserEvent.ctrlKey)){
                gt.browserEvent.preventDefault(),gt.browserEvent.stopPropagation();
                return
              }
              const At=gt.browserEvent.key&&gt.browserEvent.key.length===1&&!gt.browserEvent.ctrlKey&&!gt.browserEvent.metaKey&&!gt.browserEvent.altKey,Tt=gt.browserEvent.key==="Backspace"||gt.browserEvent.key==="Delete";
              if(At||Tt){
                const ze=Mt.getPosition();
                ze&&(gt.browserEvent.preventDefault(),gt.browserEvent.stopPropagation(),cn(Mt,ze.lineNumber))
              }
            });
            Pe.push(en)
          }
          if(n.onReadonlyClick){
            const Gt=Mt.onMouseDown(jt=>{
              if(!jt.event.metaKey&&!jt.event.ctrlKey)return;
              const hn=jt.target.position;
              hn&&(jt.event.preventDefault(),jt.event.stopPropagation(),Jt?.(Ot,hn.lineNumber,hn.column))
            });
            Pe.push(Gt)
          }
          const Lt=n.resource.lineCommentHandler;
          if(Lt){
            const Gt=n.resource,jt=(()=>{
              const gt=Gt.goToFileUri||Gt.modifiedUri||Gt.originalUri;
              return gt?(amn(e.workspaceContextService,gt)??gt.path).replace(/^\//,""):""
            })();
            let hn=null;
            const on=Mt.onMouseDown(gt=>{
              if(hn=null,gt.target.type===3){
                const At=gt.target.range;
                At&&gt.event.leftButton&&(hn={
                  lineNumber:At.startLineNumber
                },gt.event.preventDefault(),gt.event.stopPropagation())
              }
            });
            Pe.push(on);
            const en=Mt.onMouseUp(gt=>{
              if(!hn)return;
              const At=hn.lineNumber;
              hn=null;
              const Tt=gt.target.range;
              if(!Tt)return;
              const ze=Tt.startLineNumber,Yt=Math.min(At,ze),kt=Math.max(At,ze);
              Lt(Mt,jt,Yt,kt)
            });
            Pe.push(en)
          }
        }
      }
      catch{
        
      }
      return
    }
    if(De()==="deleted"){
      const Mt=e.instantiationService.createInstance(WS,Ft,{
        lineNumbers:Bt==="off"?"off":"on",stickyScroll:{
          enabled:!1
        },glyphMargin:n.showGlyphMargin??!1,readOnly:!0,minimap:{
          enabled:!1
        },scrollBeyondLastLine:!1,hover:{
          enabled:!0
        },automaticLayout:!0,fontFamily:bn,fontSize:St,scrollbar:{
          vertical:"hidden",horizontal:"auto",ignoreHorizontalScrollbarInContentHeight:!0,alwaysConsumeMouseWheel:!1
        },commentOnLineNumbers:!1
      },{
        isSimpleWidget:!1,contributions:Xt,isDeletedMultiDiffEditor:!0
      });
      s=Mt,Oe(Mt);
      try{
        if(n.resource.originalUri){
          const ut=(await n.resource.originalModel).object.textEditorModel;
          Mt.setModel(ut),m(Mt.getContentHeight()),g(!0),n.onDiffEditorMount?.(n.resource,Mt,void 0),n.registerSingleEditor?.(n.resource.originalUri?.toString(),Mt);
          const ot=Mt.onDidContentSizeChange(()=>{
            m(Mt.getContentHeight()),Mt.layout()
          });
          Pe.push(ot)
        }
      }
      catch{
        
      }
      return
    }
    r=e.instantiationService.createInstance(JB, Ft, {
      lineNumbers:Bt==="off"?"off":"on",compactMode:!1,stickyScroll:{
        enabled:!1
      },diffAlgorithm:"legacy",isInEmbeddedEditor:!0,hideUnchangedRegions:{
        enabled:!0,contextLineCount:5
      },glyphMargin:n.showGlyphMargin??!1,renderSideBySide:ne()===xY.Split,useInlineViewWhenSpaceIsLimited:!1,minimap:{
        enabled:!1
      },scrollBeyondLastLine:!1,hover:{
        enabled:!0
      },readOnly:n.readonly||!1,overflowWidgetsDomNode:n.overflowAnchorEl,scrollbar:{
        vertical:"hidden",horizontal:"auto",ignoreHorizontalScrollbarInContentHeight:!0,alwaysConsumeMouseWheel:!1
      },selectOnLineNumbers:!0,commentOnLineNumbers:!0,guides:{
        indentation:!1,bracketPairs:!1,bracketPairsHorizontal:!1,highlightActiveBracketPair:!1,highlightActiveIndentation:!1
      },automaticLayout:!0,renderOverviewRuler:!1,renderIndicators:!1,renderMarginRevertIcon:!1,renderGutterMenu:!1,fontFamily:bn,fontSize:St
    }, {
      originalEditor:{
        isSimpleWidget:!0,contributions:Xt,hideLineNumbers:ne()!==xY.Split||Bt==="off"
      },modifiedEditor:{
        isSimpleWidget:!1,contributions:Xt,isMultiDiffEditor:!0
      }
    }), Oe(r.getModifiedEditor()), Oe(r.getOriginalEditor()), n.addDiffWidget(r);
    try{
      if(!r||o)return;
      const Mt=await n.resource.originalModel,Pt=await n.resource.modifiedModel;
      if(!Mt&&!Pt)r.setModel(null);
      else{
        let ze=null;
        (!Mt||!Pt)&&(ze=e.modelService.createModel("",null,void 0,!1,!0,!0),Pe.push({
          dispose:()=>{
            try{
              ze?.dispose()
            }
            catch{
              
            }
          }
        })),r.setModel({
          original:Mt?.object.textEditorModel||ze,modified:Pt?.object.textEditorModel||ze
        })
      }
      if(Mt&&Mt.object.textEditorModel?.getValue().length===0&&g(!0),r&&Mt&&n.resource.modifiedUri&&!n.resource.skipInlineDiffSync){
        const ze=Mt?.object.textEditorModel,Yt=n.resource.modifiedUri.toString(),kt=(Si,Xi)=>(Si.length>0&&Si[Si.length-1]===""?Array.from(Si).slice(0,-1):Array.from(Si)).join(Xi),xt=async(Si,Xi,Ji)=>{
          if(!r||o||!Mt)return;
          const qr=ze.getEOL(),Ni=kt(Ji,qr),Ii={
            startLineNumber:Si,startColumn:1,endLineNumber:Xi,endColumn:Xi<=ze.getLineCount()?ze.getLineMaxColumn(Xi):1
          };
          ze.pushEditOperations([],[{
            range:Ii,text:Ni
          }
          ],()=>null)
        },un=(Si,Xi)=>{
          const Ji=Math.min(Si.length,Xi.length);
          let qr=-1,Ni=-1;
          for(let Ii=0;
          Ii<Ji;
          Ii++)if(Si[Ii]!==Xi[Ii]){
            qr=Ii;
            break
          }
          for(let Ii=0;
          Ii<Ji;
          Ii++){
            const Ar=Si.length-1-Ii,er=Xi.length-1-Ii;
            if(Ar>=0&&er>=0&&Si[Ar]!==Xi[er]){
              Ni=Math.max(Ar,er);
              break
            }
          }
          return Si.length!==Xi.length&&(qr===-1&&(qr=Ji),Ni=Math.max(Si.length-1,Xi.length-1)),qr!==-1?{
            firstDiff:qr,lastDiff:Ni
          }
          :null
        },nn=()=>{
          if(!Mt)return[];
          const Si=[],Xi=ze.getLineCount();
          for(let Ji=1;
          Ji<=Xi;
          Ji++)Si.push(ze.getLineContent(Ji));
          return Si
        },Dn=Si=>{
          if(!Mt||Si.length===0)return null;
          const Xi=ze.getLineCount();
          for(let Ji=1;
          Ji<=Xi-Si.length+1;
          Ji++)if(Si.every((Ni,Ii)=>ze.getLineContent(Ji+Ii)===Ni))return Ji;
          return null
        },Bn=async(Si,Xi)=>{
          if(!(!r||o||!Mt))try{
            if(Xi){
              await xt(Xi.startLineNumber,Xi.endLineNumber,Xi.newLines);
              return
            }
            const Ji=nn(),qr=un(Ji,Si);
            if(qr){
              const{
                firstDiff:Ni,lastDiff:Ii
              }
              =qr,Ar=Array.from(Si).slice(Ni,Ii+1);
              await xt(Ni+1,Math.min(Ii+1,ze.getLineCount()),Ar)
            }
          }
          catch{
            
          }
        };
        if(!Y)try{
          const Xi=e.inlineDiffService.inlineDiffs.nonReactive().find(Ji=>Ji.uri.toString()===Yt);
          Xi&&await Bn(Xi.originalTextLines)
        }
        catch{
          
        }
        const Vn=e.inlineDiffService.onDidAcceptPartialDiff(async Si=>{
          if(Si.inlineDiff.uri.toString()!==Yt||!r||o)return;
          const{
            accepted:Xi,rejected:Ji
          }
          =Si.change;
          if(Ji.length>0&&Mt){
            const qr=Dn(Ji);
            if(qr!==null){
              await Bn(Si.inlineDiff.originalTextLines,{
                startLineNumber:qr,endLineNumber:qr+Ji.length-1,newLines:Xi
              });
              return
            }
          }
          await Bn(Si.inlineDiff.originalTextLines)
        });
        Pe.push(Vn);
        const Xn=e.inlineDiffService.onDidRejectPartialDiff(Si=>{
          Si.inlineDiff.uri.toString()
        });
        Pe.push(Xn);
        const hi=e.inlineDiffService.inlineDiffs.event(async()=>{
          if(!(!r||o||!Mt))try{
            const Xi=e.inlineDiffService.inlineDiffs.nonReactive().find(Ji=>Ji.uri.toString()===Yt);
            Xi&&await Bn(Xi.originalTextLines)
          }
          catch{
            
          }
        });
        Pe.push(hi)
      }
      if(r&&r.waitForDiff&&await r.waitForDiff(),!r||o)return;
      if(B()?r.showAllUnchangedRegions():r.collapseAllUnchangedRegions(),r.revealFirstDiff(),n.showOnlyCommentAreas&&ee()&&ee().length>0){
        r.showAllUnchangedRegions();
        const ze=r.getModifiedEditor(),Yt=ze.getModel();
        if(Yt){
          const kt=Yt.getLineCount(),xt=nBa(ee(),kt);
          xt.length>0&&ze.setHiddenAreas(xt,"discussions-view")
        }
        ze.revealLineInCenter(ee()[0])
      }
      if(!r||o)return;
      const ut=r.getModifiedEditor(),ot=()=>{
        if(!r||o)return;
        const ze=ut.getContentHeight();
        typeof ze=="number"&&ze>0&&(m(ze),r.layout())
      };
      ot();
      const Lt=ut.onDidContentSizeChange(()=>ot());
      Pe.push(Lt);
      const Gt=ut.onDidChangeModelContent(async()=>{
        !r||o||(Ne&&clearTimeout(Ne),Ne=setTimeout(async()=>{
          if(!(!r||o))try{
            if(await r.waitForDiff(),!r||o)return;
            !(ut.hasTextFocus()||r.getOriginalEditor().hasTextFocus())&&!B()&&r.collapseAllUnchangedRegions(),ot()
          }
          catch{
            
          }
        },500))
      });
      if(Pe.push(Gt),!r||o)return;
      const jt=r.getOriginalEditor(),hn=()=>{
        try{
          if(!r||o){
            C(!1);
            return
          }
          const ze=ut.hasTextFocus()||jt.hasTextFocus();
          C(!!ze)
        }
        catch{
          C(!1)
        }
      };
      hn();
      const on=ut.onDidFocusEditorText(()=>C(!0)),en=ut.onDidBlurEditorText(()=>hn()),gt=jt.onDidFocusEditorText(()=>C(!0)),At=jt.onDidBlurEditorText(()=>hn());
      if(Pe.push(on,en,gt,At),n.readonly&&n.onReadonlyClick&&r&&!o){
        const ze=r.getModifiedEditor(),Yt=r.getOriginalEditor(),kt=n.onReadonlyClick,xt=n.resource,un=(Xn,hi,Si)=>{
          if(Fe())return;
          const Xi=new Hs("readonlyClick","Edit in File",void 0,!0,async()=>{
            kt?.(xt,hi,Si)
          });
          e.contextMenuService.showContextMenu({
            getAnchor:()=>({
              x:Xn.posx,y:Xn.posy
            }),getActions:()=>[Xi],autoSelectFirstItem:!0
          })
        },nn=ze.onContextMenu(Xn=>{
          Xn.event.preventDefault(),Xn.event.stopPropagation();
          const hi=Xn.target.position;
          if(!hi)return;
          const Si=hi.lineNumber,Xi=hi.column;
          un(Xn.event,Si,Xi)
        });
        Pe.push(nn);
        const Dn=Yt.onContextMenu(Xn=>{
          Xn.event.preventDefault(),Xn.event.stopPropagation();
          const hi=Xn.target.position;
          if(!hi)return;
          const Si=hi.lineNumber,Xi=hi.column;
          un(Xn.event,Si,Xi)
        });
        Pe.push(Dn);
        const Bn=ze.onKeyDown(Xn=>{
          if(Xn.browserEvent.key==="Enter"&&(Xn.browserEvent.metaKey||Xn.browserEvent.ctrlKey)){
            Xn.browserEvent.preventDefault(),Xn.browserEvent.stopPropagation();
            return
          }
          const hi=Xn.browserEvent.key&&Xn.browserEvent.key.length===1&&!Xn.browserEvent.ctrlKey&&!Xn.browserEvent.metaKey&&!Xn.browserEvent.altKey,Si=Xn.browserEvent.key==="Backspace"||Xn.browserEvent.key==="Delete";
          if(hi||Si){
            const Xi=ze.getPosition();
            Xi&&(Xn.browserEvent.preventDefault(),Xn.browserEvent.stopPropagation(),cn(ze,Xi.lineNumber))
          }
        });
        Pe.push(Bn);
        const Vn=Yt.onKeyDown(Xn=>{
          if(Xn.browserEvent.key==="Enter"&&(Xn.browserEvent.metaKey||Xn.browserEvent.ctrlKey)){
            Xn.browserEvent.preventDefault(),Xn.browserEvent.stopPropagation();
            return
          }
          const hi=Xn.browserEvent.key&&Xn.browserEvent.key.length===1&&!Xn.browserEvent.ctrlKey&&!Xn.browserEvent.metaKey&&!Xn.browserEvent.altKey,Si=Xn.browserEvent.key==="Backspace"||Xn.browserEvent.key==="Delete";
          if(hi||Si){
            const Xi=Yt.getPosition();
            Xi&&(Xn.browserEvent.preventDefault(),Xn.browserEvent.stopPropagation(),cn(Yt,Xi.lineNumber))
          }
        });
        Pe.push(Vn)
      }
      if(n.onReadonlyClick&&r&&!o){
        const ze=r.getModifiedEditor(),Yt=r.getOriginalEditor(),kt=ze.onMouseDown(un=>{
          if(!un.event.metaKey&&!un.event.ctrlKey)return;
          const nn=un.target.position;
          nn&&(un.event.preventDefault(),un.event.stopPropagation(),Jt?.(Ot,nn.lineNumber,nn.column))
        });
        Pe.push(kt);
        const xt=Yt.onMouseDown(un=>{
          if(!un.event.metaKey&&!un.event.ctrlKey)return;
          const nn=un.target.position;
          nn&&(un.event.preventDefault(),un.event.stopPropagation(),Jt?.(Ot,nn.lineNumber,nn.column))
        });
        Pe.push(xt)
      }
      const Tt=n.resource.lineCommentHandler;
      if(Tt&&r&&!o){
        const ze=r.getModifiedEditor(),Yt=n.resource,kt=(()=>{
          const Dn=Yt.goToFileUri||Yt.modifiedUri||Yt.originalUri;
          return Dn?(amn(e.workspaceContextService,Dn)??Dn.path).replace(/^\//,""):""
        })();
        let xt=null;
        const un=ze.onMouseDown(Dn=>{
          if(xt=null,Dn.target.type===3){
            const Bn=Dn.target.range;
            Bn&&Dn.event.leftButton&&(xt={
              lineNumber:Bn.startLineNumber
            },Dn.event.preventDefault(),Dn.event.stopPropagation())
          }
        });
        Pe.push(un);
        const nn=ze.onMouseUp(Dn=>{
          if(!xt)return;
          const Bn=xt.lineNumber;
          xt=null;
          const Vn=Dn.target.range;
          if(!Vn)return;
          const Xn=Vn.startLineNumber,hi=Math.min(Bn,Xn),Si=Math.max(Bn,Xn);
          Tt(ze,kt,hi,Si)
        });
        Pe.push(nn)
      }
      if(r&&!o){
        r.layout();
        const Yt={
          id:requestAnimationFrame(()=>{
            if(r&&!o){
              r.layout(),g(!0);
              const kt=r.getModifiedEditor();
              n.onDiffEditorMount?.(n.resource,kt,r)
            }
          })
        };
        a.add(Yt)
      }
      else g(!0)
    }
    catch{
      
    }
  };
  Ai(()=>{
    ft&&cancelAnimationFrame(ft), it()
  });
  let Nt, ft;
  const _t=()=>`${n.resource.originalUri?.toString()||"null"}_${n.resource.modifiedUri?.toString()||"null"}`;
  An(()=>{
    const Ft=_t();
    if(Nt===Ft)return;
    Nt=Ft;
    const Xt=n.getIsVisible?n.getIsVisible():!0;
    !f()&&Xt&&(!x()&&n.getIsVisible!==void 0?(ft&&cancelAnimationFrame(ft), ft=requestAnimationFrame(()=>{
      if(o)return;
      ft=requestAnimationFrame(()=>{
        if(o)return;
        (n.getIsVisible?n.getIsVisible():!0)&&bt()
      })
    })):bt())
  }), An(()=>{
    const Ft=f(), Xt=n.getIsVisible?n.getIsVisible():!0;
    !Ft&&Xt&&!r&&!s&&Nt!==void 0?bt():!Xt&&(r||s)&&!x()?it():Ft&&Xt&&g(!0)
  }), Ic(()=>{
    if(n.onIntersectionObserve&&i&&(i.setAttribute("data-resource-key", e.reviewChangesService.getResourceKey(n.resource, n.diffViewMode)), n.onIntersectionObserve(i)), !i)return;
    const Ft=async Xt=>{
      if(!r&&!s)return;
      let bn=!1;
      if(s?bn=s.hasTextFocus():r&&(bn=r.getModifiedEditor().hasTextFocus()||r.getOriginalEditor().hasTextFocus()),!bn)return;
      const St=new vh(Xt),Bt=e.keybindingService.softDispatch(St,St.target,!0);
      if(!(Bt.kind!==2||Bt.commandId!=="workbench.action.files.save")){
        Xt.preventDefault();
        try{
          const Jt=n.resource.modifiedUri||n.resource.goToFileUri;
          if(!Jt)return;
          await e.textFileService.save(Jt,{
            skipSaveParticipants:!0
          })
        }
        catch{
          
        }
      }
    };
    window.addEventListener("keydown", Ft, !0), Ai(()=>{
      window.removeEventListener("keydown",Ft,!0)
    })
  });
  const It=async Ft=>{
    Ft.stopPropagation(), f()&&A(!1), R(Xt=>!Xt);
    try{
      if(s){
        if(n.showOnlyCommentAreas&&ee()&&ee().length>0){
          const Xt=s.getModel();
          if(Xt)if(B())s.setHiddenAreas([],"discussions-view");
          else{
            const bn=Xt.getLineCount(),St=nBa(ee(),bn);
            s.setHiddenAreas(St,"discussions-view")
          }
        }
        return
      }
      if(r&&!o){
        const Xt=r.getModifiedEditor(),bn=n.showOnlyCommentAreas&&ee()&&ee().length>0;
        if(B())r.showAllUnchangedRegions(),Xt.setHiddenAreas([],"discussions-view");
        else if(bn){
          r.showAllUnchangedRegions();
          const St=Xt.getModel();
          if(St&&ee()){
            const Bt=St.getLineCount(),Jt=nBa(ee(),Bt);
            Xt.setHiddenAreas(Jt,"discussions-view")
          }
        }
        else r.collapseAllUnchangedRegions()
      }
    }
    catch{
      
    }
  }, sn=async Ft=>{
    if(Fe())return;
    const Xt=n.resource.goToFileUri||n.resource.modifiedUri||n.resource.originalUri;
    if(Xt){
      let bn=1;
      if(s)bn=1;
      else if(r&&!f()&&!o)try{
        if(await r.waitForDiff(),!r||o)bn=1;
        else{
          const Bt=r.getLineChanges();
          if(Bt&&Bt.length>0){
            const Jt=Bt[0];
            Jt.modifiedStartLineNumber>0&&(bn=Jt.modifiedStartLineNumber)
          }
        }
      }
      catch{
        bn=1
      }
      const St=Ft.altKey===!0;
      e.editorService.openEditor({
        resource:Xt,options:{
          pinned:!0,selection:{
            startLineNumber:bn,startColumn:1
          }
        }
      },St?Aw:void 0)
    }
  }, Vt=async Ft=>{
    Ft?.preventDefault(), Ft?.stopPropagation();
    try{
      const Xt=await ppy(n.resource,e.fileService);
      if(!Xt||Xt.diffText.trim().length===0){
        e.notificationService.warn("No diff content available to mention.");
        return
      }
      const bn=Ft?.metaKey||Ft?.ctrlKey;
      let St=bn?void 0:e.composerDataService.selectedComposerId,Bt=bn?void 0:e.composerDataService.selectedComposerHandle;
      if(!St){
        const cn=await e.composerService.createComposer({
          partialState:{
            unifiedMode:"agent"
          },openInNewTab:!1
        });
        if(St=cn?.composerId,Bt=cn?.weakHandle,!St){
          e.notificationService.error("Failed to create a new chat.");
          return
        }
        await e.composerService.openComposer(St,{
          view:"pane"
        })
      }
      const Ot={
        prUrl:"",filePath:e.workspaceContextService.asRelativePath(Xt.uri)??Xt.uri.path??Xt.uri.toString(),startLine:Xt.startLine,endLine:Xt.endLine,diffContent:Xt.diffText
      };
      e.composerContextService.addContext({
        composerHandle:Bt,contextType:"gitPRDiffSelections",value:Ot,shouldShowPreview:!0
      }),e.composerService.handleOpenComposer(St,{
        focusMainInputBox:!0
      })
    }
    catch{
      e.notificationService.error("Failed to attach diff mention. Check logs for details.")
    }
  };
  return(()=>{
    var Ft=xqf(), Xt=Ft.firstChild, bn=Xt.firstChild, St=bn.firstChild, Bt=St.firstChild, Jt=Bt.firstChild, Ot=Jt.firstChild, cn=Jt.nextSibling, Mt=St.nextSibling;
    return Ft.addEventListener("mouseleave", ()=>$(!1)), Ft.addEventListener("mouseenter", ()=>$(!0)), Bs(Pt=>i=Pt, Ft), bn.addEventListener("mouseleave", ()=>M(!1)), bn.addEventListener("mouseenter", ()=>M(!0)), St.addEventListener("click", sn), ge(St, K(Xe, {
      get when(){
        return N()
      },get fallback(){
        return[K(Xe,{
          get when(){
            return z()
          },get children(){
            var Pt=Tqf();
            return ge(Pt,K(lO,{
              get fileName(){
                return Ge()
              },get workspaceContextService(){
                return e.workspaceContextService
              },get modelService(){
                return e.modelService
              },get languageService(){
                return e.languageService
              },innerClass:"app-layout-multi-diff-icon-override"
            })),Pt
          }
        }),K(Xe,{
          get when(){
            return!z()
          },get children(){
            var Pt=_Cu(),ut=Pt.firstChild,ot=ut.firstChild;
            return Pt.addEventListener("mouseleave",()=>W()),Pt.addEventListener("mouseenter",Lt=>{
              H({
                target:Lt.currentTarget,content:f()?"Expand":"Collapse",appearance:{
                  compact:!0,showPointer:!0,skipFadeInAnimation:!0
                },position:{
                  hoverPosition:2
                }
              })
            }),Pt.addEventListener("click",Lt=>{
              Lt.stopPropagation(),Lt.preventDefault(),(Lt.altKey||Lt.metaKey)&&n.parentRef?f()?n.parentRef.expandAll():n.parentRef.collapseAll():A(!f())
            }),Pt.style.setProperty("cursor","pointer"),ot.style.setProperty("font-size","18px"),ot.style.setProperty("color","var(--cursor-icon-secondary)"),tn(Lt=>{
              var Gt=Qt.asClassName(Be.chevronRight),jt=f()?void 0:"rotate(90deg)";
              return Gt!==Lt.e&&Un(ot,Lt.e=Gt),jt!==Lt.t&&((Lt.t=jt)!=null?ot.style.setProperty("transform",jt):ot.style.removeProperty("transform")),Lt
            },{
              e:void 0,t:void 0
            }),Pt
          }
        })]
      },get children(){
        var Pt=_Cu(),ut=Pt.firstChild,ot=ut.firstChild;
        return Pt.addEventListener("mouseleave",()=>W()),Pt.addEventListener("mouseenter",Lt=>{
          H({
            target:Lt.currentTarget,content:f()?"Expand":"Collapse",appearance:{
              compact:!0,showPointer:!0,skipFadeInAnimation:!0
            },position:{
              hoverPosition:2
            }
          })
        }),Pt.addEventListener("click",Lt=>{
          Lt.stopPropagation(),Lt.preventDefault(),(Lt.altKey||Lt.metaKey)&&n.parentRef?f()?n.parentRef.expandAll():n.parentRef.collapseAll():A(!f())
        }),Pt.style.setProperty("cursor","pointer"),ot.style.setProperty("font-size","18px"),ot.style.setProperty("color","var(--cursor-icon-secondary)"),tn(Lt=>{
          var Gt=Qt.asClassName(Be.chevronRight),jt=f()?void 0:"rotate(90deg)";
          return Gt!==Lt.e&&Un(ot,Lt.e=Gt),jt!==Lt.t&&((Lt.t=jt)!=null?ot.style.setProperty("transform",jt):ot.style.removeProperty("transform")),Lt
        },{
          e:void 0,t:void 0
        }),Pt
      }
    }), Bt), Jt.addEventListener("click", sn), Ot.addEventListener("mouseleave", ()=>W()), Ot.addEventListener("mouseenter", Pt=>{
      Fe()||H({
        target:Pt.currentTarget,content:Le(),appearance:{
          compact:!0,showPointer:!0,skipFadeInAnimation:!0
        },position:{
          hoverPosition:2
        }
      })
    }), Ot.style.setProperty("display", "flex"), Ot.style.setProperty("max-width", "100%"), Ot.style.setProperty("overflow", "hidden"), ge(Ot, ()=>{
      const Pt=Ge(),ut=Math.max(Pt.lastIndexOf("/"),Pt.lastIndexOf("\\")),ot=ut>=0?Pt.slice(0,ut):"",Lt=ut>=0?Pt.slice(ut+1):Pt;
      return[(()=>{
        var Gt=Iqf();
        return ge(Gt,Lt),Gt
      })(),K(Xe,{
        when:ot,get children(){
          var Gt=Dqf(),jt=Gt.firstChild,hn=jt.firstChild;
          return Gt.style.setProperty("margin-left","4px"),Gt.style.setProperty("direction","rtl"),Gt.style.setProperty("text-align","left"),jt.style.setProperty("direction","ltr"),jt.style.setProperty("unicode-bidi","embed"),ge(jt,ot,hn),Gt
        }
      })]
    }), ge(cn, K(Xe, {
      get when(){
        return n.resource.status==="added"
      },get children(){
        return Aqf()
      }
    }), null), ge(cn, K(Xe, {
      get when(){
        return n.resource.status==="deleted"
      },get children(){
        return yqf()
      }
    }), null), ge(cn, K(Xe, {
      get when(){
        return j()>0
      },get children(){
        var Pt=wqf(),ut=Pt.firstChild;
        return ge(Pt,j,null),Pt
      }
    }), null), ge(cn, K(Xe, {
      get when(){
        return X()>0&&n.resource.status!=="added"
      },get children(){
        var Pt=_qf(),ut=Pt.firstChild;
        return ge(Pt,X,null),Pt
      }
    }), null), ge(Bt, K(Xe, {
      get when(){
        return fe()
      },get children(){
        var Pt=Cqf();
        return Pt.style.setProperty("width","16px"),Pt.style.setProperty("height","16px"),Pt.style.setProperty("display","flex"),Pt.style.setProperty("justify-content","center"),Pt.style.setProperty("align-items","center"),Pt.style.setProperty("flex-shrink","0"),Pt.style.setProperty("margin-right","8px"),ge(Pt,K(apy,{
          
        })),Pt
      }
    }), null), ge(Mt, K(kh, {
      get codicon(){
        return Be.chatRounded
      },hintText:"Add to Chat",onClick:Pt=>{
        Vt(Pt)
      },iconClass:"!text-[13px]",style:{
        transform:"translate(-2px, 0px)"
      }
    }), null), ge(Mt, K(kh, {
      get codicon(){
        return Be.expander
      },get hintText(){
        return B()?"Show diff only":"Show entire file"
      },onClick:It,iconClass:"!text-[14px]"
    }), null), ge(Mt, K(Xe, {
      get when(){
        return n.showUndo
      },get children(){
        return K(kh,{
          style:{
            height:"16px"
          },get codicon(){
            return Be.xTwo
          },onClick:We,hintText:"Undo changes in this file",iconClass:"!text-[16px]"
        })
      }
    }), null), ge(Mt, K(Xe, {
      get when(){
        return n.showKeep
      },get children(){
        return K(kh,{
          style:{
            height:"16px"
          },get codicon(){
            return Be.checkTwo
          },onClick:tt,hintText:"Keep changes in this file",iconClass:"!text-[9px]"
        })
      }
    }), null), ge(Ft, K(Xe, {
      get when(){
        return!le()
      },get children(){
        var Pt=Sqf(),ut=Pt.firstChild;
        return Pt.style.setProperty("border-bottom-left-radius","6px"),Pt.style.setProperty("border-bottom-right-radius","6px"),Pt.style.setProperty("border","1px solid var(--vscode-panel-border)"),Pt.style.setProperty("border-top","none"),Pt.style.setProperty("overflow","hidden"),Bs(ot=>t=ot,ut),ut.style.setProperty("width","100%"),ut.style.setProperty("box-sizing","border-box"),tn(ot=>{
          var Lt=f()||!p()?"none":"block",Gt=p()?"block":"none",jt=`${d()}px`;
          return Lt!==ot.e&&((ot.e=Lt)!=null?Pt.style.setProperty("display",Lt):Pt.style.removeProperty("display")),Gt!==ot.t&&((ot.t=Gt)!=null?ut.style.setProperty("display",Gt):ut.style.removeProperty("display")),jt!==ot.a&&((ot.a=jt)!=null?ut.style.setProperty("height",jt):ut.style.removeProperty("height")),ot
        },{
          e:void 0,t:void 0,a:void 0
        }),Pt
      }
    }), null), ge(Ft, K(Xe, {
      get when(){
        return Ui(()=>!!pe())()&&!f()
      },get children(){
        var Pt=Eqf(),ut=Pt.firstChild;
        return Pt.style.setProperty("border-bottom-left-radius","6px"),Pt.style.setProperty("border-bottom-right-radius","6px"),Pt.style.setProperty("border","1px solid var(--vscode-panel-border)"),Pt.style.setProperty("border-top","none"),Pt.style.setProperty("padding","12px 16px"),Pt.style.setProperty("font-size","12px"),Pt.style.setProperty("color","var(--vscode-descriptionForeground)"),Pt.style.setProperty("background-color","var(--vscode-editor-background)"),ge(Pt,K(Xe,{
          get when(){
            return he()
          },get children(){
            return[" ","from"," ",(()=>{
              var ot=kqf();
              return ot.style.setProperty("font-family","var(--monaco-monospace-font)"),ot.style.setProperty("opacity","0.8"),ge(ot,he),ot
            })()]
          }
        }),null),Pt
      }
    }), null), tn(Pt=>{
      var ut=`app-layout-multi-diff-item ${w()?"isFocused":""} ${De()==="added"?"is-added-file":""} ${De()==="deleted"?"is-deleted-file":""}`,ot=n.resource.modifiedUri?.toString()||n.resource.originalUri?.toString(),Lt={
        visibility:p()?"visible":"hidden","min-height":p()?void 0:"20px",height:p()?"auto":void 0,overflow:p()?"visible":"hidden",...n.style
      },Gt=!!f(),jt=!!f(),hn=!!O(),on=!!(n.showKeep||n.showUndo),en=!n.showKeep&&!n.showUndo;
      return ut!==Pt.e&&Un(Ft,Pt.e=ut),ot!==Pt.t&&Zr(Ft,"review-changes-resource-uri",Pt.t=ot),Pt.a=La(Ft,Lt,Pt.a),Gt!==Pt.o&&Xt.classList.toggle("is-collapsed",Pt.o=Gt),jt!==Pt.i&&bn.classList.toggle("is-collapsed",Pt.i=jt),hn!==Pt.n&&Mt.classList.toggle("is-visible",Pt.n=hn),on!==Pt.s&&Mt.classList.toggle("has-review-actions",Pt.s=on),en!==Pt.h&&Mt.classList.toggle("no-review-actions",Pt.h=en),Pt
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0
    }), Ft
  })()
}
var _Cu, Aqf, yqf, wqf, _qf, Cqf, Sqf, kqf, Eqf, xqf, Tqf, Iqf, Dqf, bpy=