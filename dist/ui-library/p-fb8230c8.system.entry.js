var __awaiter=this&&this.__awaiter||function(t,e,n,a){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{l(a.next(t))}catch(e){i(e)}}function s(t){try{l(a["throw"](t))}catch(e){i(e)}}function l(t){t.done?n(t.value):r(t.value).then(o,s)}l((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,r,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(o){if(a)throw new TypeError("Generator is already executing.");while(n)try{if(a=1,r&&(i=o[0]&2?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;if(r=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];r=0}finally{a=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-582db24d.system.js"],(function(t){"use strict";var e,n,a,r;return{setters:[function(t){e=t.r;n=t.h;a=t.H;r=t.g}],execute:function(){var i="*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block}";var o=t("bal_navbar",function(){function t(t){e(this,t);this.isMenuActive=false;this.light=false;this.logoHref=""}t.prototype.componentWillLoad=function(){this.hasNavbarStartSlot=!!this.el.querySelector('[slot="navbar-start"]');this.hasNavbarEndSlot=!!this.el.querySelector('[slot="navbar-end"]')};t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.isMenuActive=!this.isMenuActive;return[2]}))}))};t.prototype.render=function(){var t=this;return n(a,null,n("nav",{class:"navbar is-spaced"+(this.light?" is-white":" is-info"),role:"navigation","aria-label":"main navigation"},n("div",{class:"bal-track-line",style:{position:"absolute",top:"0",left:"0",display:!this.light?"none":""}}),n("div",{class:"navbar-brand"},n("a",{class:"navbar-item app-title",href:this.logoHref},n("slot",{name:"navbar-brand"})),this.hasNavbarStartSlot||this.hasNavbarEndSlot?n("a",{role:"button",class:"navbar-burger"+(this.isMenuActive?" is-active":""),"aria-label":"menu","aria-expanded":this.isMenuActive?"true":"false",onClick:function(){return t.toggle()}},n("span",{"aria-hidden":"true"}),n("span",{"aria-hidden":"true"}),n("span",{"aria-hidden":"true"})):""),n("div",{class:"navbar-menu"+(this.isMenuActive?" is-active":"")},n("div",{class:"navbar-start"},n("slot",{name:"navbar-start"})),n("div",{class:"navbar-end"},n("slot",{name:"navbar-end"})))))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());o.style=i}}}));