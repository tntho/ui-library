'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const hintTextCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block;font-family:MetaPro, Arial, sans-serif}p{font-weight:initial;font-family:MetaPro, Arial, sans-serif}";

const HintText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("p", { class: "has-text-white" }, index.h("slot", null))));
    }
};
HintText.style = hintTextCss;

exports.bal_hint_text = HintText;
