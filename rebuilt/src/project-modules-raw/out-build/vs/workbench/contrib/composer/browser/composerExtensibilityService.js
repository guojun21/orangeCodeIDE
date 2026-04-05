// Module: out-build/vs/workbench/contrib/composer/browser/composerExtensibilityService.js
// Offset: 33842378 (bundle byte offset)
// Size: 2171 bytes

rt(), Bc(), Er(), Wt(), J0(), lie(), cp(), Zk(), oP(), KS(), bDa=xi("composerExtensibilityService"), MEt={
  CREATE_SUBAGENT:"create-subagent", CREATE_RULE:"create-rule", CREATE_SKILL:"create-skill"
}, vDa=class extends at{
  constructor(e, t, i, r, s){
    super(), this.composerService=e, this.composerContextService=t, this.composerDataService=i, this.composerEventService=r, this.composerViewsService=s, this.openComposerWithSkillMention=async o=>{
      const{
        skillId:a,skillFilename:l,initialPrompt:u,logPrefix:d
      }
      =o,m=d??"composerExtensibilityService",p=await this.composerService.createComposer({
        partialState:{
          unifiedMode:"agent"
        },openInNewTab:!0
      });
      if(!p){
        console.error(`[${m}] Failed to create composer for skill`);
        return
      }
      const{
        composerId:g,weakHandle:f
      }
      =p,A=Wr();
      this.composerContextService.addContext({
        composerHandle:f,contextType:"cursorRules",value:{
          filename:l
        },uuid:A
      });
      const w=`/${a}`,C=cye(void 0,[{
        display:w,mentionName:a,typeaheadType:"cursor_skill",uuid:A,storedKey:A
      }
      ]),x=JSON.parse(C),I=_my(x);
      I&&I.children.push({
        type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:` ${u}`
      });
      const B=`${w} ${u}`;
      this.composerDataService.updateComposerData(f,{
        text:B,richText:JSON.stringify(x)
      }),this.composerEventService.fireShouldForceText({
        composerId:g
      }),await this.composerViewsService.showAndFocus(g)
    }, this.openCreateSubagentComposer=async o=>{
      await this.openComposerWithSkillMention({
        skillId:MEt.CREATE_SUBAGENT,skillFilename:`${MEt.CREATE_SUBAGENT}/SKILL.md`,initialPrompt:"Help me create this subagent for Cursor: ",logPrefix:o
      })
    }, this.openCreateRuleComposer=async o=>{
      await this.openComposerWithSkillMention({
        skillId:MEt.CREATE_RULE,skillFilename:`${MEt.CREATE_RULE}/SKILL.md`,initialPrompt:"Help me create this rule for Cursor: ",logPrefix:o
      })
    }, this.openCreateSkillComposer=async o=>{
      await this.openComposerWithSkillMention({
        skillId:MEt.CREATE_SKILL,skillFilename:`${MEt.CREATE_SKILL}/SKILL.md`,initialPrompt:"Help me create this skill for Cursor: ",logPrefix:o
      })
    }
  }
}, vDa=__decorate([__param(0, ag), __param(1, hV), __param(2, Oa), __param(3, BA), __param(4, rw)], vDa), Vi(bDa, vDa, 1)
}
}), svn, ADa=