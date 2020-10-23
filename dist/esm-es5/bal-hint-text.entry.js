import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var hintTextCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block;font-family:MetaPro, Arial, sans-serif}p{font-weight:initial;font-family:MetaPro, Arial, sans-serif}";
var HintText = /** @class */ (function () {
    function HintText(hostRef) {
        registerInstance(this, hostRef);
    }
    HintText.prototype.render = function () {
        return (h(Host, null, h("p", { class: "has-text-white" }, h("slot", null))));
    };
    return HintText;
}());
HintText.style = hintTextCss;
export { HintText as bal_hint_text };
