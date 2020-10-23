'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const hintTitleCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block;font-family:MetaPro, Arial, sans-serif}.title{margin-top:0;font-family:MetaPro, Arial, sans-serif}";

const HintTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("h2", { class: "title is-size-2 has-text-white" }, index.h("slot", null))));
    }
};
HintTitle.style = hintTitleCss;

exports.bal_hint_title = HintTitle;
