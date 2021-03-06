'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const tagCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.tags{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.tags .tag{margin-bottom:0.5rem}.tags .tag:not(:last-child){margin-right:0.5rem}.tags:last-child{margin-bottom:-0.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:0.9375rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.125rem}.tags.is-centered{-ms-flex-pack:center;justify-content:center}.tags.is-centered .tag{margin-right:0.25rem;margin-left:0.25rem}.tags.is-right{-ms-flex-pack:end;justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:0.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.tags.has-addons .tag:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tag:not(body){-ms-flex-align:center;align-items:center;background-color:#f5f5f6;border-radius:100px;color:#222222;display:-ms-inline-flexbox;display:inline-flex;font-size:0.8125rem;height:2em;-ms-flex-pack:center;justify-content:center;line-height:1.5;padding-left:0.75em;padding-right:0.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:0.25rem;margin-right:-0.375rem}.tag:not(body).is-white{background-color:#ffffff;color:#222222}.tag:not(body).is-black{background-color:#222222;color:#ffffff}.tag:not(body).is-light{background-color:#fafafa;color:rgba(0, 0, 0, 0.7)}.tag:not(body).is-dark{background-color:#003399;color:#fff}.tag:not(body).is-primary{background-color:#009ee7;color:#ffffff}.tag:not(body).is-primary.is-light{background-color:#ebf9ff;color:#0085c2}.tag:not(body).is-link{background-color:#009ee7;color:#003399}.tag:not(body).is-link.is-light{background-color:#ebf9ff;color:#0085c2}.tag:not(body).is-info{background-color:#003399;color:#fff}.tag:not(body).is-info.is-light{background-color:#f0fbff;color:#002b82}.tag:not(body).is-success{background-color:#3fc889;color:#ffffff}.tag:not(body).is-success.is-light{background-color:#effaf5;color:#237b53}.tag:not(body).is-warning{background-color:#ff9900;color:#fff}.tag:not(body).is-warning.is-light{background-color:#fff7eb;color:#9e5f00}.tag:not(body).is-danger{background-color:#ff3366;color:#fff}.tag:not(body).is-danger.is-light{background-color:#ffebf0;color:#db0037}.tag:not(body).is-normal{font-size:0.8125rem}.tag:not(body).is-medium{font-size:0.9375rem}.tag:not(body).is-large{font-size:1.125rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-0.375em;margin-right:0.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:0.1875em;margin-right:-0.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-0.375em;margin-right:-0.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete::before,.tag:not(body).is-delete::after{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete::before{height:1px;width:50%}.tag:not(body).is-delete::after{height:50%;width:1px}.tag:not(body).is-delete:hover,.tag:not(body).is-delete:focus{background-color:#e8e8ea}.tag:not(body).is-delete:active{background-color:#dadade}.tag:not(body).is-rounded{border-radius:100%}a.tag:hover{text-decoration:underline}:host .tag{padding:0 20px 1px 20px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-weight:700}:host .tag.default{background-color:#d8d9d9}";

const Tag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The theme type of the tag. Given by bulma our css framework.
         */
        this.type = "";
    }
    render() {
        return (index.h(index.Host, null, index.h("span", { class: `tag ${this.type ? this.type : "default"}` }, index.h("slot", null))));
    }
};
Tag.style = tagCss;

exports.bal_tag = Tag;
