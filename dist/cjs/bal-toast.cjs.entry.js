'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const toastCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}@keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}@keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.container{-ms-flex-positive:1;flex-grow:1;margin:0 auto;position:relative;width:auto}.container.is-fluid{max-width:none;padding-left:32px;padding-right:32px;width:100%}@media screen and (min-width: 1024px){.container{max-width:960px}}@media screen and (max-width: 1215px){.container.is-widescreen{max-width:1152px}}@media screen and (max-width: 1407px){.container.is-fullhd{max-width:1344px}}@media screen and (min-width: 1216px){.container{max-width:1152px}}@media screen and (min-width: 1408px){.container{max-width:1344px}}:host{display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-item-align:center;align-self:center;cursor:pointer;width:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-positive:0 !important;flex-grow:0 !important}:host .toast{-ms-flex-item-align:center;align-self:center;display:-ms-inline-flexbox;display:inline-flex;-webkit-animation-duration:150ms;animation-duration:150ms;margin:0.5em 0;text-align:center;-webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);box-shadow:0 1px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);border-radius:3px;padding:20px 40px;pointer-events:auto;max-width:600px;-ms-flex-positive:1;flex-grow:1;font-size:0.9375rem;font-weight:700}:host .toast.is-primary{background:#009ee7;color:#ffffff}:host .toast.is-info{background:#003399;color:#fff}:host .toast.is-success{background:#3fc889;color:#ffffff}:host .toast.is-warning{background:#ff9900;color:#ffffff}:host .toast.is-danger{background:#ff3366;color:#ffffff}";

const Toast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.animationClass = "fadeInDown";
        /**
         * The theme type of the toast. Given by bulma our css framework.
         */
        this.type = "is-primary";
    }
    /**
     * Closes the toast after the given duration in ms
     */
    async closeIn(duration) {
        this.timer = setTimeout(() => this.close(), duration);
    }
    /**
     * Closes this toast
     */
    async close() {
        clearTimeout(this.timer);
        this.animationClass = "fadeOut";
        this.timer = setTimeout(() => {
            this.element.remove();
            clearTimeout(this.timer);
        }, 150);
    }
    render() {
        return (index.h(index.Host, { class: "container" }, index.h("div", { role: "alert", onClick: () => this.close(), class: `toast ${this.animationClass} ${this.type}` }, index.h("slot", null))));
    }
    get element() { return index.getElement(this); }
};
Toast.style = toastCss;

exports.bal_toast = Toast;
