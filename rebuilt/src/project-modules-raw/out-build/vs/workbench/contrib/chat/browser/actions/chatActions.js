// Module: out-build/vs/workbench/contrib/chat/browser/actions/chatActions.js
// Offset: 28342236 (bundle byte offset)
// Size: 2249 bytes

nl(), Vs(), qi(), A9(), yn(), tg(), rt(), _r(), Jr(), Yn(), Cu(), tl(), Tq(), Ht(), L5o(), Snt(), dr(), hs(), Ei(), si(), Av(), ru(), Wt(), So(), Fc(), U$(), Kl(), Pa(), jh(), od(), ss(), wm(), zp(), Bp(), v0(), _E(), Yau(), EV(), xS(), Wq(), hcu(), SS(), gcu(), wie(), kk(), Ckt(), a8A(), Stf(), cO=dt(5004, "Chat"), xtf="workbench.action.chat.open", bcu="workbench.action.chat.triggerSetup", vcu="workbench.action.chat.toggle", Ttf="workbench.action.chat.openQuotaExceededDialog", l8A={
  documentationUrl:av.defaultChatAgent?.documentationUrl??"", manageSettingsUrl:av.defaultChatAgent?.manageSettingsUrl??"", managePlanUrl:av.defaultChatAgent?.managePlanUrl??"", enterpriseProviderId:av.defaultChatAgent?.enterpriseProviderId??"", completionsAdvancedSetting:av.defaultChatAgent?.completionsAdvancedSetting??"", completionsMenuCommand:av.defaultChatAgent?.completionsMenuCommand??""
}, Dt(class extends rn{
  constructor(){
    super({
      id:"workbench.action.chat.resetTrustedTools",title:dt(5017,"Reset Tool Confirmations"),category:cO,f1:!0
    })
  }
  run(e){
    e.get(yie).resetToolAutoConfirmation(), e.get(ms).info(_(4991, null))
  }
}), Acu=class extends at{
  static{
    this.ID="workbench.contrib.copilotTitleBarMenuRendering"
  }
  constructor(e, t, i, r){
    super();
    const s=e.register(st.CommandCenter, st.ChatTitleBarMenu, (o, a)=>{
      if(!(o instanceof h2))return;
      const l=Sh({
        id:"copilot.titleBarMenuRendering.more",label:_(4992,null),run(){
          
        }
      }),u=i.sentiment===Akt.Installed,d=i.sentiment===Akt.Disabled,{
        chatQuotaExceeded:m,completionsQuotaExceeded:p
      }
      =i.quotas,g=i.entitlement===TT.Unknown,f=r.getValue("chat.setupFromDialog");
      let A=vcu,w=_(4993,null),C=Be.copilot;
      return!u&&(!f||d)?(A=bcu,w=_(4994,null)):u&&g?(A=f?bcu:vcu,w=_(4995,null),C=Be.copilotNotConnected):u&&(m||p)&&(A=Ttf,m&&!p?w=_(4996,null):p&&!m?w=_(4997,null):w=_(4998,null),C=Be.copilotWarning),t.createInstance(Iye,t.createInstance(Ub,{
        id:A,title:w,icon:C
      },void 0,void 0,void 0,void 0),l,o.actions,"",{
        ...a,skipTelemetry:!0
      })
    }, In.any(i.onDidChangeSentiment, i.onDidChangeQuotaExceeded, i.onDidChangeEntitlement, In.filter(r.onDidChangeConfiguration, o=>o.affectsConfiguration("chat.setupFromDialog"))));
    Cte(s)
  }
}, Acu=__decorate([__param(0, O3t), __param(1, ln), __param(2, uyi), __param(3, Fn)], Acu)
}
}), ycu, Itf=