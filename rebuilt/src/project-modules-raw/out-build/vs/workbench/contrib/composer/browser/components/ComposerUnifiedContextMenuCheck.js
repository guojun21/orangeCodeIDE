// Module: out-build/vs/workbench/contrib/composer/browser/components/ComposerUnifiedContextMenuCheck.js
// Offset: 31926751 (bundle byte offset)
// Size: 12351 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), Jr(), h8(), XNf=qe("<span>"), eMf=qe('<div class="w-3 h-3 border border-border rounded-xs flex items-center justify-center box-border relative">'), tMf=n=>(()=>{
  var e=eMf();
  return e.addEventListener("click", t=>{
    n.onClick&&!n.disabled&&n.onClick(t)
  }), e.style.setProperty("border-width", "1px"), e.style.setProperty("flex-shrink", "0"), ge(e, K(Xe, {
    get when(){
      return n.checked
    }, get children(){
      var t=XNf();
      return tn(i=>{
        var r=`${Qt.asClassName(n.codicon??Be.checkTwo)} before:!text-[8px] !flex items-center justify-center ${n.codicon?"!mr-0":"!mr-0.5"}`,s=n.checked?"var(--vscode-button-foreground)":"var(--vscode-editor-inactiveSelectionBackground)";
        return r!==i.e&&Un(t,i.e=r),s!==i.t&&((i.t=s)!=null?t.style.setProperty("color",s):t.style.removeProperty("color")),i
      },{
        e:void 0,t:void 0
      }),t
    }
  }), null), ge(e, K(Xe, {
    get when(){
      return n.showWarningBadge
    }, get children(){
      return K(Xcu,{
        get color(){
          return n.warningBadgeColor||"var(--vscode-activityWarningBadge-background)"
        },style:{
          transform:"translateX(3px)"
        }
      })
    }
  }), null), tn(t=>{
    var i=!!n.disabled, r=!n.disabled, s=n.checked?n.customBgColor??"var(--vscode-button-background)":"transparent", o=n.checked?void 0:"solid", a=n.checked?n.customBorderColor??"var(--vscode-button-background)":"color-mix(in srgb, var(--vscode-checkbox-selectBorder) 30%, transparent)", l=n.disabled?.3:1;
    return i!==t.e&&e.classList.toggle("cursor-not-allowed", t.e=i), r!==t.t&&e.classList.toggle("cursor-pointer", t.t=r), s!==t.a&&((t.a=s)!=null?e.style.setProperty("background-color", s):e.style.removeProperty("background-color")), o!==t.o&&((t.o=o)!=null?e.style.setProperty("border-style", o):e.style.removeProperty("border-style")), a!==t.i&&((t.i=a)!=null?e.style.setProperty("border-color", a):e.style.removeProperty("border-color")), l!==t.n&&((t.n=l)!=null?e.style.setProperty("opacity", l):e.style.removeProperty("opacity")), t
  }, {
    e:void 0, t:void 0, a:void 0, o:void 0, i:void 0, n:void 0
  }), e
})()
}
});
function Svu(n){
  if(typeof n=="function"||!n||typeof n!="object"||!("id"in n)||Object.prototype.hasOwnProperty.call(n, "id")===!1||typeof n.id!="string")return!1;
  for(const e in n)if(e!=="id")return!1;
  return Qt.isThemeIcon(n)
}
function kvu(n){
  let e=n;
  return!/^[A-Za-z]/.test(e)&&e.length>0&&(e="id_"+e), e=e.replace(/[^A-Za-z0-9\-_:]/g, "_"), e
}
function nMf(n){
  const e=wr(), [t, i]=lt(""), [r, s]=lt(""), [o, a]=lt(0), [l, u]=lt(!1);
  let d=!1;
  const[m, p]=lt("");
  let g;
  const f=1e3;
  let A;
  const[w, C]=lt(!1), x=400, I=()=>{
    A!==void 0&&(e.window.clearTimeout(A), A=void 0)
  }, B=(ne, pe)=>{
    if(I(), ne.isDisabled){
      z()!==""&&Y("",!1,!0);
      const he=()=>{
        pe&&(ne.onFocus?.({
          currentTarget:pe
        }),C(!0))
      };
      w()?he():A=e.window.setTimeout(he,x);
      return
    }
    l()&&z()!==ne.id&&Y(ne.id, !1, !0);
    const le=()=>{
      pe&&(ne.onFocus?.({
        currentTarget:pe
      }),C(!0))
    };
    w()?le():A=e.window.setTimeout(le, x)
  };
  let R, N, M;
  const O=VMe(), $=xe(()=>n.searchTerm!==void 0?n.searchTerm:t()), H=()=>{
    g!==void 0&&(e.window.clearTimeout(g), g=void 0)
  };
  Ai(()=>{
    I(), H(), O.dispose()
  });
  const W=()=>{
    const ne=n.sections, pe=[];
    for(let le=0;
    le<ne.length;
    le++){
      const he=ne[le];
      if(he.type==="items")for(let be=0;
      be<he.items.length;
      be++){
        const fe=he.items[be];
        pe.push({
          item:fe,sectionIndex:le,itemIndex:be,id:fe.id
        })
      }
    }
    return pe
  }, z=xe(()=>{
    if(n.selectedId||n.onSelectedIdChange)return n.selectedId||"";
    const ne=W();
    return n.selectedIndex!==void 0&&ne.length>0?ne[n.selectedIndex]?.id||"":r()
  }), Y=(ne, pe=!1, le=!1)=>{
    d=le;
    let he=!1;
    if(n.onSelectedIdChange)he=!0, n.onSelectedIdChange(ne);
    else if(n.selectedIndex!==void 0&&n.onSelectionChange){
      const fe=W().findIndex(ke=>ke.id===ne);
      fe!==-1&&(he=!0,n.onSelectionChange(fe))
    }
    else he=!0, s(ne);
    he&&!pe&&!le&&setTimeout(()=>{
      a(Date.now())
    })
  }, j=()=>W().find(le=>le.item.showType==="check"&&!le.item.isDisabled)?.id??"", X=()=>{
    if(n.initialFocusSectionIndex===1){
      const ne=n.sections.filter(pe=>pe.type==="items");
      if(ne.length>0){
        const pe=ne[0];
        for(let le=0;
        le<pe.items.length;
        le++){
          const he=pe.items[le];
          if(!he.isDisabled)return he.id
        }
      }
    }
    if(n.initialFocusSectionIndex!==1){
      const ne=j();
      if(ne)return ne
    }
    return ee()
  }, ee=ne=>{
    const pe=!!ne?.ignoreInitialFocusSection;
    if(!pe&&n.initialFocusSectionIndex==="none")return"";
    const he=W().find(Se=>!Se.item.isDisabled)?.id??"";
    if(pe)return he;
    const be=n.sections.filter(Se=>Se.type==="items"), fe=n.initialFocusSectionIndex, ke=typeof fe=="number"?fe:0;
    if(ke>=0&&ke<be.length){
      const Se=be[ke].items;
      for(let Fe=0;
      Fe<Se.length;
      Fe++){
        const De=Se[Fe];
        if(!De.isDisabled)return De.id
      }
    }
    return he
  };
  An(Bf(()=>$(), ()=>{
    $().trim()!==""&&Y(ee({
      ignoreInitialFocusSection:!0
    }))
  })), An(Bf(()=>[n.sections, n.initialFocusSectionIndex], ()=>{
    if(n.initialFocusSectionIndex==="none"||$().trim()!=="")return;
    const ne=W(), pe=z();
    if(!(pe?ne.some(he=>he.id===pe&&!he.item.isDisabled):!1)){
      const he=X();
      he&&Y(he,!1)
    }
  })), eCi(O, ()=>M, ()=>{
    const ne=z();
    return ne?kvu(ne):""
  }, ()=>[$(), o()], n.scrollPaddingOptions), An(Bf(()=>n.selectedIndex, ()=>{
    n.autoScrollOnExternalSelectionChange&&!d&&a(Date.now()), d=!1
  }, {
    defer:!0
  }));
  const re=()=>{
    l()||u(!0)
  };
  return An(()=>{
    const ne=pe=>{
      if(!N)return;
      const le=e.window.getComputedStyle(N);
      if(le.visibility==="hidden"||le.display==="none"||!n.allowExternalFocus&&!N.contains(e.window.document.activeElement)||n.onKeyDown&&(n.onKeyDown(pe),pe.defaultPrevented))return;
      const he=W(),be=he.findIndex(ke=>ke.id===z()),fe=he[be]?.item;
      if(!(be>=0&&be<he.length&&!fe.isDisabled&&fe.onKeyDown&&(fe.onKeyDown(pe),pe.defaultPrevented))){
        if(pe.key==="ArrowDown"||pe.key==="ArrowUp"||pe.ctrlKey&&pe.key==="n"||pe.ctrlKey&&pe.key==="p"){
          if(pe.preventDefault(),be===-1){
            const Pe=he.findIndex(Ne=>!Ne.item.isDisabled);
            if(Pe!==-1){
              const Ne=he[Pe].id;
              Y(Ne)
            }
            return
          }
          const ke=(Pe,Ne)=>{
            let Oe=Pe;
            for(;
            ;
            ){
              if(Oe=(Oe+Ne+he.length)%he.length,Oe===Pe)return be;
              if(!he[Oe].item.isDisabled)return Oe
            }
          },Se=pe.key==="ArrowDown"||pe.ctrlKey&&pe.key==="n",Fe=ke(be,Se?1:-1),De=he[Fe].id;
          Y(De)
        }
        else if(pe.key==="Enter"){
          const ke=he[be]?.item;
          be>=0&&be<he.length&&!ke.isDisabled&&(ke.onClick?.(),ke.closeMenuOnClick&&n.onClose(!1),$()!==""&&(n.searchTerm===void 0?i(""):n.onSearchTermChange&&n.onSearchTermChange(""),setTimeout(()=>{
            Y(ke.id)
          })))
        }
        else if(pe.key==="+"&&$()===""){
          const ke=he[be]?.item;
          be>=0&&be<he.length&&!ke.isDisabled&&ke.incrementModelCount&&(pe.preventDefault(),ke.incrementModelCount(pe))
        }
        else if(pe.key==="-"&&$()===""){
          const ke=he[be]?.item;
          be>=0&&be<he.length&&!ke.isDisabled&&ke.decrementModelCount&&(pe.preventDefault(),ke.decrementModelCount(pe))
        }
        else if(pe.key==="Escape")!!N?.closest('.toolcall-human-review-menu[data-blocking-run-command="true"]')||(pe.preventDefault(),pe.stopPropagation(),n.onClose(!1));
        else if(n.enablePrefixMatching&&$()===""&&pe.key.length===1&&!pe.ctrlKey&&!pe.metaKey&&!pe.altKey){
          pe.preventDefault();
          const ke=(m()+pe.key).toLowerCase();
          p(ke),H(),g=e.window.setTimeout(()=>{
            p("")
          },f);
          const Se=he.findIndex(Fe=>Fe.item.isDisabled?!1:Fe.item.title.toLowerCase().startsWith(ke));
          if(Se!==-1){
            const Fe=he[Se].id;
            Y(Fe)
          }
        }
      }
    };
    e.window.addEventListener("keydown", ne), Ai(()=>{
      e.window.removeEventListener("keydown",ne)
    })
  }), (()=>{
    var ne=hMf();
    return ne.addEventListener("mousemove", re), Bs(pe=>{
      if(N=pe,n.setInternalMenuDomRef?.(pe),!n.shouldShowInput&&!n.allowExternalFocus){
        const le=async(he=0)=>{
          await new Promise(be=>setTimeout(be,0)),pe?.focus(),pe!==e.window.document.activeElement&&he<10&&le(he+1)
        };
        le()
      }
    }, ne), ge(ne, K(Xe, {
      get when(){
        return n.shouldShowInput
      },get children(){
        var pe=dMf(),le=pe.firstChild;
        return pe.style.setProperty("display","flex"),pe.style.setProperty("gap","4px"),pe.style.setProperty("align-items","center"),pe.style.setProperty("padding","0px 6px"),pe.style.setProperty("border","none"),pe.style.setProperty("box-sizing","border-box"),pe.style.setProperty("outline","none"),pe.style.setProperty("margin","2px"),ge(pe,K(Xe,{
          get when(){
            return n.isSubMenu
          },get children(){
            var he=tpe();
            return he.addEventListener("click",()=>{
              n.backToParentMenu?.(),R?.focus()
            }),he.style.setProperty("opacity","0.3"),tn(()=>Un(he,`text-dropdown-foreground !mr-0 !text-[12px] shrink-0 ${Qt.asClassName(Be.arrowLeftTwo)} ${n.backToParentMenu?"cursor-pointer":""}`)),he
          }
        }),le),le.addEventListener("input",he=>{
          const be=he.target.value;
          n.searchTerm===void 0?i(be):n.onSearchTermChange&&n.onSearchTermChange(be)
        }),Bs(he=>{
          R=he,n.setInputDomRef?.(he);
          const be=async(fe=0)=>{
            await new Promise(ke=>setTimeout(ke,0)),R?.focus(),R!==window.document.activeElement&&fe<10&&be(fe+1)
          };
          be()
        },le),tn(he=>{
          var be=`text-[12px] leading-[15px] rounded bg-[transparent] text-input-foreground py-[3px] px-0 flex-1 min-w-0 !border-none !outline-hidden box-border placeholder:opacity-50 ${n.inputClass}`,fe=n.inputPlaceholder??"Add files, folders, docs...";
          return be!==he.e&&Un(le,he.e=be),fe!==he.t&&Zr(le,"placeholder",he.t=fe),he
        },{
          e:void 0,t:void 0
        }),tn(()=>le.value=$()),pe
      }
    }), null), ge(ne, K($V, {
      get maxHeight(){
        return n.maxHeight
      },scrollingDirection:"vertical",nonReactiveElementOptions:{
        verticalScrollbarSize:10,alwaysConsumeMouseWheel:!0
      },scrollable:O,useResizeObserver:!0,get onScroll(){
        return n.onScroll
      },get disableScroll(){
        return n.disableScroll
      },setScrollContainerRef:pe=>{
        M=pe
      },children:pe=>(()=>{
        var le=mMf();
        return le.addEventListener("mouseleave",he=>{
          const be=he.relatedTarget;
          if(be&&be.closest(".workbench-hover-container"))return;
          I(),C(!1);
          const fe=z();
          if(fe){
            const Se=(()=>{
              const Fe=[];
              for(const De of n.sections)if(De.type==="items")for(const Pe of De.items)Fe.push({
                item:Pe,id:Pe.id
              });
              return Fe
            })().find(Fe=>Fe.id===fe);
            if(Se){
              const Fe=N?.querySelector(`#${kvu(fe)}`);
              Se.item.onBlur?.({
                currentTarget:Fe??null
              })
            }
          }
        }),Bs(he=>{
          pe(he)
        },le),ge(le,K(Rft,{
          get each(){
            return n.sections
          },children:he=>K(Xv,{
            get children(){
              return[K(ba,{
                get when(){
                  return he().type==="divider"
                },get children(){
                  return K(pMf,{
                    
                  })
                }
              }),K(ba,{
                get when(){
                  return he().type==="message"
                },get children(){
                  return K(Evu,{
                    get message(){
                      return he().message
                    }
                  })
                }
              }),K(ba,{
                get when(){
                  return he().type==="custom"
                },get children(){
                  var be=Rfn();
                  return ge(be,()=>he().content),tn(fe=>(fe=he()?.title==="tree"?`${n.maxHeight}px`:"auto")!=null?be.style.setProperty("height",fe):be.style.removeProperty("height")),be
                }
              }),K(ba,{
                get when(){
                  return he().type==="items"
                },get children(){
                  return K(fMf,{
                    get title(){
                      return he().title
                    },get message(){
                      return he().message
                    },get children(){
                      return K(ia,{
                        get each(){
                          return he().items
                        },children:be=>{
                          const[fe,ke]=lt(null);
                          return(()=>{
                            var Se=Rfn();
                            return Se.addEventListener("click",Fe=>{
                              be.isDisabled||(be.skipSelectionUpdate||Y(be.id),be.onClick?.(Fe),be.closeMenuOnClick&&n.onClose(!1))
                            }),Se.addEventListener("mouseup",Fe=>{
                              be.onMouseUp&&be.onMouseUp(Fe)
                            }),Se.addEventListener("mousedown",Fe=>{
                              n.onMouseDown&&n.onMouseDown(Fe)
                            }),Se.addEventListener("mouseleave",Fe=>{
                              const De=Fe.relatedTarget;
                              if(!(De&&De.closest(".workbench-hover-container"))&&(I(),"onMouseLeave"in be&&be.onMouseLeave&&be.onMouseLeave(),z()===be.id)){
                                const Pe=fe();
                                Pe&&be.onBlur?.({
                                  currentTarget:Pe
                                })
                              }
                            }),Se.addEventListener("mouseenter",Fe=>{
                              if(!l())return;
                              const De=fe();
                              "onMouseEnter"in be&&be.onMouseEnter&&be.onMouseEnter(Fe),B(be,De)
                            }),Bs(ke,Se),ge(Se,K(gMf,hb({
                              get isSelected(){
                                return z()===be.id
                              }
                            },be))),tn(()=>Zr(Se,"id",kvu(be.id))),Se
                          })()
                        }
                      })
                    }
                  })
                }
              })]
            }
          })
        })),le
      })()
    }), null), tn(pe=>{
      var le={
        "box-sizing":"border-box","border-radius":"6px","background-color":"var(--vscode-dropdown-background)",border:"1px solid var(--vscode-commandCenter-inactiveBorder, var(--vscode-widget-border))","align-items":"stretch","font-size":"12px",display:"flex","flex-direction":"column",gap:"2px",padding:"0px",contain:"paint",outline:"none","pointer-events":"auto",...n.internalContainerStyle
      },he=n["data-testid"];
      return pe.e=La(ne,le,pe.e),he!==pe.t&&Zr(ne,"data-testid",pe.t=he),pe
    }, {
      e:void 0,t:void 0
    }), ne
  })()
}
function LT(n){
  const{
    "data-testid":e, class:t, ...i
  }
  =n;
  return K(Xay, hb(i, {
    get position(){
      return n.position
    }, get close(){
      return n.onClose
    }, get width(){
      return n.width??240
    }, get style(){
      return{
        "border-radius":"6px",...typeof n.style=="object"?n.style:{
          
        }
      }
    }, class:`typeahead-popover mentions-menu${t?` ${
      t
    }
    `:""}`, get nonBlockingRoot(){
      return n.nonBlockingRoot
    }, get strictNonBlockingRoot(){
      return n.strictNonBlockingRoot
    }, get allowedOutsideClickElements(){
      return n.allowedOutsideClickElements
    }, get shouldMountInPortal(){
      return n.shouldMountInPortal??!0
    }, get children(){
      return K(nMf,n)
    }
  }))
}
var iMf, rMf, Rfn, tpe, sMf, oMf, aMf, cMf, lMf, uMf, dMf, hMf, mMf, pMf, Evu, gMf, fMf, _L=