import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var hintTitleCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block;font-family:MetaPro, Arial, sans-serif}.title{margin-top:0;font-family:MetaPro, Arial, sans-serif}";
var HintTitle = /** @class */ (function () {
    function HintTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    HintTitle.prototype.render = function () {
        return (h(Host, null, h("h2", { class: "title is-size-2 has-text-white" }, h("slot", null))));
    };
    return HintTitle;
}());
HintTitle.style = hintTitleCss;
export { HintTitle as bal_hint_title };
