import{r as t,c as s,h as i,H as e}from"./p-fe42e5c8.js";const a=class{constructor(i){t(this,i),this.stepChanged=s(this,"balCardStepChanged",7),this.isContentHidden=!0,this.value="",this.label="",this.hidden=!1,this.disabled=!1,this.done=!1,this.active=!1}activatedHandler(t){this.isContentHidden=!t}get options(){return{value:this.value,label:this.label,active:this.active,done:this.done,disabled:this.disabled,hidden:this.hidden}}async getOptions(){return this.options}async setActive(t){this.active=t}componentWillLoad(){this.isContentHidden=!this.active}render(){return i(e,{class:{"is-hidden":this.isContentHidden,"card-step-content":!0}},i("slot",null))}static get watchers(){return{active:["activatedHandler"]}}};a.style=":host{display:block;position:static}.card-step-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.is-hidden{display:none !important}";export{a as bal_card_step}