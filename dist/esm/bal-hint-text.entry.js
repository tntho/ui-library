import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const hintTextCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block;font-family:MetaPro, Arial, sans-serif}p{font-weight:initial;font-family:MetaPro, Arial, sans-serif}";

const HintText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("p", { class: "has-text-white" }, h("slot", null))));
    }
};
HintText.style = hintTextCss;

export { HintText as bal_hint_text };
