import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const hintTitleCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block;font-family:MetaPro, Arial, sans-serif}.title{margin-top:0;font-family:MetaPro, Arial, sans-serif}";

const HintTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("h2", { class: "title is-size-2 has-text-white" }, h("slot", null))));
    }
};
HintTitle.style = hintTitleCss;

export { HintTitle as bal_hint_title };
