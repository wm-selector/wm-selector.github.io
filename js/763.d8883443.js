"use strict";(self["webpackChunkwm_selector"]=self["webpackChunkwm_selector"]||[]).push([[763],{1763:function(t,s,e){e.r(s),e.d(s,{default:function(){return y}});var r=function(){var t=this,s=t._self._c;return s("main",{staticClass:"mobile-selector-view"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],staticClass:"small",attrs:{id:"label",type:"text",placeholder:"Please enter a label for this list…"},domProps:{value:t.label},on:{input:function(s){s.target.composing||(t.label=s.target.value)}}}),s("div",{attrs:{id:"armyList"}},[t._v(" "+t._s(t.armyList)+" "),s("div",{staticClass:"small",attrs:{id:"version"}},[t._v(t._s(t.version))])]),s("div",{attrs:{id:"units"}},t._l(t.units,(function(t,e){return s("Unit",{key:e,attrs:{unitID:e}})})),1),s("div",{attrs:{id:"summary"}},[s("div",{attrs:{id:"pointsCost"}},[t._v(" "+t._s(t.pointsCost)+" points ")]),s("span",{attrs:{id:"unitCount",title:"Units/Half"}},[t._v(" "+t._s(t.unitCount)+"/"+t._s(Math.ceil(t.unitCount/2))+" ")]),s("button",{attrs:{id:"errors_toggle_button","aria-controls":"errors","aria-expanded":t.errors.length<1||t.errorsHidden?"false":"true",disabled:t.errors.length<1},on:{click:t.toggleErrors}},[s("span",{staticClass:"fa",class:{"fa-check":t.errors.length<1,"fa-times":t.errors.length>0}},[s("span",{staticClass:"sr-only"},[t._v("Toggle Errors")])])]),t.errors.length>0?s("ul",{attrs:{id:"errors","aria-labelledby":"errors_toggle_button",hidden:t.errors.length<1||t.errorsHidden}},t._l(t.errors,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0):t._e()])])},a=[],n=e(629),i=e(2703),u=function(){var t=this,s=t._self._c;return s("div",{staticClass:"unit",attrs:{id:t.tagID}},[s("div",{staticClass:"id"},[t._v(t._s(t.unitID)+" ("+t._s(t.points)+")")]),s("button",{staticClass:"remove-button",attrs:{disabled:t.number<1},on:{click:t.remove}},[s("span",{staticClass:"fa fa-minus"},[s("span",{staticClass:"sr-only"},[t._v("Remove one "+t._s(t.unitID))])])]),s("span",{staticClass:"number"},[t._v(t._s(t.number))]),s("button",{staticClass:"add-button",on:{click:t.add}},[s("span",{staticClass:"fa fa-plus"},[s("span",{staticClass:"sr-only"},[t._v("Add one "+t._s(t.unitID))])])]),t.upgrades?s("button",{staticClass:"upgrades-toggle-button",attrs:{id:t.tagID+"_upgrades_toggle_button","aria-controls":t.tagID+"_upgrades","aria-expanded":t.upgradesHidden?"false":"true",disabled:t.number<1},on:{click:t.toggleUpgrades}},[s("span",{staticClass:"fa",class:{"fa-caret-right":t.upgradesHidden,"fa-caret-down":!t.upgradesHidden}},[s("span",{staticClass:"sr-only"},[t._v("Toggle Upgrades")])])]):t._e(),s("div",{staticClass:"upgrades",attrs:{id:t.tagID+"_upgrades","aria-labelledby":t.tagID+"_upgrades_toggle_button",hidden:t.upgradesHidden}},t._l(t.upgrades,(function(e,r){return s("Upgrade",{key:r,attrs:{upgradeID:r,unitID:t.unitID}})})),1)])},l=[],o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"upgrade",attrs:{id:t.tagID}},[s("div",{staticClass:"id"},[t._v(t._s(t.upgradeID)+" ("+t._s(t.points)+")")]),s("button",{staticClass:"remove-button",attrs:{disabled:t.number<1},on:{click:t.remove}},[s("span",{staticClass:"fa fa-minus"},[s("span",{staticClass:"sr-only"},[t._v("Remove one "+t._s(t.upgradeID)+" from "+t._s(t.unitID))])])]),s("span",{staticClass:"number"},[t._v(t._s(t.number))]),s("button",{staticClass:"add-button",attrs:{disabled:t.unitNumber<=t.number},on:{click:t.add}},[s("span",{staticClass:"fa fa-plus"},[s("span",{staticClass:"sr-only"},[t._v("Add one "+t._s(t.upgradeID)+" to "+t._s(t.unitID))])])])])},d=[],p={name:"Upgrade",computed:{number(){return i.Z.getters.units[this.unitID].upgrades[this.upgradeID].number},points(){let t,s=i.Z.getters.upgrades[this.upgradeID];return t=void 0!==s.pointsValue?s.points[i.Z.getters.units[this.unitID][s.pointsValue]||"-"]:s.points,t},tagID(){return(this.unitID+"_unit_"+this.upgradeID+"_upgrade").toLowerCase().replace(/\W+/g,"_")},unitNumber(){return i.Z.getters.units[this.unitID].number}},methods:{add(){i.Z.dispatch("setUnitUpgradeNumber",{upgradeID:this.upgradeID,unitID:this.unitID,number:this.number+1})},remove(){i.Z.dispatch("setUnitUpgradeNumber",{upgradeID:this.upgradeID,unitID:this.unitID,number:this.number-1})}},props:["unitID","upgradeID"]},g=p,c=e(1001),m=(0,c.Z)(g,o,d,!1,null,null,null),b=m.exports,_={name:"Unit",components:{Upgrade:b},computed:{number(){return i.Z.getters.units[this.unitID].number},points(){return i.Z.getters.units[this.unitID].points},tagID(){return(this.unitID+"_unit").toLowerCase().replace(/\W+/g,"_")},upgrades(){return i.Z.getters.units[this.unitID].upgrades}},data(){return{upgradesHidden:!0}},methods:{add(){i.Z.dispatch("setUnitNumber",{unitID:this.unitID,number:this.number+1})},remove(){this.number-1===0&&(this.upgradesHidden=!0),i.Z.dispatch("setUnitNumber",{unitID:this.unitID,number:this.number-1})},toggleUpgrades(){this.upgradesHidden=!this.upgradesHidden}},props:["unitID"]},h=_,v=(0,c.Z)(h,u,l,!1,null,null,null),D=v.exports,I={name:"MobileSelectorView",components:{Unit:D},computed:Object.assign({label:{get:()=>i.Z.getters.label,set(t){i.Z.dispatch("setLabel",t)}}},(0,n.Se)(["armyList","errors","pointsCost","unitCount","units","version"])),data(){return{errorsHidden:!0}},methods:{toggleErrors(){this.errorsHidden=!this.errorsHidden}},mounted(){document.getElementsByClassName("mobile-selector-view-button")[0]&&document.getElementsByClassName("mobile-selector-view-button")[0].focus()}},C=I,f=(0,c.Z)(C,r,a,!1,null,null,null),y=f.exports}}]);
//# sourceMappingURL=763.d8883443.js.map