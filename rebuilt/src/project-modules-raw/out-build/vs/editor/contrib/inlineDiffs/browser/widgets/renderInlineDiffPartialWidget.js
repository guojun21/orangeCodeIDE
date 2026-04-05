// Module: out-build/vs/editor/contrib/inlineDiffs/browser/widgets/renderInlineDiffPartialWidget.js
// Offset: 33934026 (bundle byte offset)
// Size: 6358 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), ml(), zr(), Fvi(), tl(), qI(), bwe(), es(), t0(), G1t(), k7e(), $Da(), x$f=qe("<div class=inline-diff-nav><span class=inline-diff-nav-counter> of "), Z0u=qe("<span class=keyboard-shortcut>"), T$f=qe('<button class="hoverButton partialHoverButton secondary-button"><span>'), I$f=qe('<button class="hoverButton partialHoverButton"><span>'), D$f=qe("<div class=inline-diff-outer-container><div class=inline-diff-hover-container>"), B$f=n=>{
  const e=xe(()=>n.thisX), t=wr(), i=xe(()=>e().getEditor()?.getIsMultiDiffEditor?.()), [r, s]=lt(t.diffDecorationVisibilityService.shouldHideInlineDiffs()), o=t.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
    s(t.diffDecorationVisibilityService.shouldHideInlineDiffs())
  });
  Ai(()=>{
    o.dispose()
  });
  const a=xe(()=>e().getEditor()?.getModel()?.uri.scheme===_n.vscodeNotebookCell), [l]=zJ(NBe, t.configurationService, !1), [u, d]=lt(!1), [m, p]=lt(!1), g=()=>{
    const le=t.themeService.getColorTheme().type, he=le===Fv.HIGH_CONTRAST_DARK||le===Fv.HIGH_CONTRAST_LIGHT, be=le===Fv.DARK||le===Fv.HIGH_CONTRAST_DARK;
    d(he), p(be)
  };
  g();
  const f=t.themeService.onDidColorThemeChange(()=>{
    g()
  });
  Ai(()=>{
    f.dispose()
  });
  const[A, w]=lt(0);
  An(()=>{
    const le=e().getEditor();
    if(!le)return;
    const he=le.getOption(68);
    w(he);
    const be=le.onDidChangeModelOptions(()=>{
      const fe=le.getOption(68);
      w(fe)
    });
    Ai(()=>{
      be.dispose()
    })
  });
  const[C, x]=lt(18);
  An(()=>{
    const le=e().getEditor();
    if(!le)return;
    const he=()=>{
      const ke=le.getOption(108)?.verticalScrollbarSize??0;
      x(ke+4)
    };
    he();
    const be=le.onDidChangeConfiguration(fe=>{
      fe.hasChanged(108)&&he()
    });
    Ai(()=>{
      be.dispose()
    })
  });
  const[I, B]=lt(), [R, N]=lt(!1), M=Wit(I), O=()=>{
    const le=sc(()=>e().line()), he=e().getEditor().getModel();
    if(!he||le<1||le>he.getLineCount())return;
    const be=e().getEditor().getLayoutInfo();
    if(!be)return;
    const fe=he.getLineContent(le), ke=be.glyphMarginWidth+be.lineNumbersWidth+e().getEditor().getOffsetForColumn(le, fe.length+1), Se=be.width, Fe=C(), Ne=ke+32>Se-Fe-200;
    R()!==Ne&&N(Ne)
  };
  An(Bf(M, ()=>{
    O()
  })), Ic(()=>{
    O()
  });
  const[$, H]=lt(0), [W, z]=lt(0), Y=xe(()=>e().keybindingService?.lookupKeybinding(FDa)?.getLabel()??""), j=xe(()=>e().keybindingService?.lookupKeybinding(MDa)?.getLabel()??""), X=(le, he)=>R()&&!i()&&he.length>0?"":le, ee=()=>{
    const le=e().getEditor();
    if(!le)return;
    const be=t.diffChangeSourceRegistry.getDescriptorById(e().diffId)?.descriptor, fe=be?.changes??[];
    if(z(fe.length), !be||fe.length===0){
      H(0);
      return
    }
    const ke=sc(()=>e().line()), Se=le.getModel()?.getLineCount();
    let Fe=fe.find(Pe=>{
      const Ne=Xtt(be,Pe);
      return Math.min(Ne.endLineNumber+1,Se??Ne.endLineNumber+1)===ke
    });
    Fe||(Fe=mmn(be, new ar(ke, 1)));
    const De=Fe?fe.indexOf(Fe):-1;
    H(De===-1?0:De+1)
  }, re=le=>{
    const he=e().getEditor();
    if(!he)return;
    const fe=t.diffChangeSourceRegistry.getDescriptorById(e().diffId)?.descriptor, ke=fe?.changes??[];
    if(!fe||ke.length===0)return;
    const Se=e().line(), Fe=he.getModel()?.getLineCount();
    let De=ke.find(tt=>{
      const it=Xtt(fe,tt);
      return Math.min(it.endLineNumber+1,Fe??it.endLineNumber+1)===Se
    });
    De||(De=mmn(fe, new ar(Se, 1)));
    const Pe=De?ke.indexOf(De):-1, Oe=Pe===-1?le==="next"?0:ke.length-1:(Pe+(le==="next"?1:-1)+ke.length)%ke.length, Ge=ke[Oe], Le=Xtt(fe, Ge), We=Math.min(Le.endLineNumber+1, Fe??Le.endLineNumber+1);
    he.setPosition({
      lineNumber:We,column:1
    }), he.revealLineInCenter(We)
  }, ne=wr(), pe=xe(()=>{
    const he=t.diffChangeSourceRegistry.getDescriptorById(e().diffId)?.descriptor?.metadata?.composerId;
    return ne.composerDataService.isWorktreeComposer(he)
  });
  return Ic(()=>{
    ee();
    const he=e().getEditor()?.onDidChangeModelContent(()=>sc(ee)), be=t.diffChangeSourceRegistry.onDidChange(()=>sc(ee));
    An(()=>{
      e().line(),ee()
    }), Ai(()=>{
      he?.dispose(),be?.dispose()
    })
  }), (()=>{
    var le=D$f(), he=le.firstChild;
    return Bs(B, le), le.style.setProperty("width", "100%"), le.style.setProperty("visibility", "visible"), le.style.setProperty("position", "relative"), le.style.setProperty("pointer-events", "none"), ge(he, K(Xe, {
      get when(){
        return Ui(()=>W()>1)()&&!a()
      },get children(){
        var be=x$f(),fe=be.firstChild,ke=fe.firstChild;
        return ge(be,K(kh,{
          get codicon(){
            return Be.chevronUp
          },onClick:Se=>{
            re("previous"),Se.stopPropagation()
          },class:"!text-[var(--vscode-input-foreground)]"
        }),fe),ge(fe,$,ke),ge(fe,W,null),ge(be,K(kh,{
          get codicon(){
            return Be.chevronDown
          },onClick:Se=>{
            re("next"),Se.stopPropagation()
          },class:"!text-[var(--vscode-input-foreground)]"
        }),null),be
      }
    }), null), ge(he, K(Xe, {
      get when(){
        return!pe()
      },get children(){
        return[(()=>{
          var be=T$f(),fe=be.firstChild;
          return be.addEventListener("click",ke=>{
            a()?t.diffChangeSourceRegistry.reject(e().diffId):e().commandService.executeCommand(FDa,e()),ke.stopPropagation()
          }),fe.style.setProperty("display","flex"),fe.style.setProperty("align-items","center"),fe.style.setProperty("gap","4px"),fe.style.setProperty("font-size","12px"),ge(fe,()=>X(a()?"Undo Cell":"Undo",Y()),null),ge(fe,K(Xe,{
            get when(){
              return Y()
            },get children(){
              var ke=Z0u();
              return ge(ke,Y),ke
            }
          }),null),be
        })(),K(Xe,{
          get when(){
            return!i()||!r()
          },get children(){
            var be=I$f(),fe=be.firstChild;
            return be.addEventListener("click",ke=>{
              a()?t.diffChangeSourceRegistry.accept(e().diffId):e().commandService.executeCommand(MDa,e()),ke.stopPropagation()
            }),fe.style.setProperty("display","flex"),fe.style.setProperty("align-items","center"),fe.style.setProperty("font-size","12px"),fe.style.setProperty("gap","4px"),ge(fe,()=>X(a()?"Keep Cell":"Keep",j()),null),ge(fe,K(Xe,{
              get when(){
                return j()
              },get children(){
                var ke=Z0u();
                return ge(ke,j),ke
              }
            }),null),be
          }
        })]
      }
    }), null), tn(be=>{
      var fe=l()?"true":"false",ke=u()?"true":"false",Se=m()?"true":"false",Fe=n.isOnEditorEnd()?`${A()}px`:"0px",De={
        float:"right",display:"flex","flex-direction":"row",gap:"2px",overflow:"hidden",opacity:"1","z-index":"999","margin-right":`${C()}px`,"pointer-events":"all",...n.isOnEditorEnd()?{
          "border-top-left-radius":"4px","border-top-right-radius":"4px",transform:"translateY(-100%)"
        }
        :{
          "border-bottom-left-radius":"4px","border-bottom-right-radius":"4px"
        }
      };
      return fe!==be.e&&Zr(le,"data-themed-diff",be.e=fe),ke!==be.t&&Zr(le,"data-high-contrast",be.t=ke),Se!==be.a&&Zr(le,"data-dark-theme",be.a=Se),Fe!==be.o&&((be.o=Fe)!=null?le.style.setProperty("margin-top",Fe):le.style.removeProperty("margin-top")),be.i=La(he,De,be.i),be
    }, {
      e:void 0,t:void 0,a:void 0,o:void 0,i:void 0
    }), le
  })()
}
}
}), A2e, qDa, Pmy=