'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const accordionCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block}span.trigger-label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}span.trigger-label span.label{margin-bottom:2px}bal-icon{height:24px;margin-right:2px}.accordion-content.is-info{border-top:1px solid #d3dbeb}.is-fullwidth{width:100%}";

const Accordion = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isCollapsed = true;
        /**
         * Type defines the theme of the accordion toggle
         */
        this.type = "is-primary";
        /**
         * Controls if the accordion is collapsed or not
         */
        this.collapsed = true;
        /**
         * Label of the open trigger button
         */
        this.openLabel = "";
        /**
         * Bal-Icon of the open trigger button
         */
        this.openIcon = "plus";
        /**
         * Label of the close trigger button
         */
        this.closeLabel = "";
        /**
         * Bal-Icon of the close trigger button
         */
        this.closeIcon = "minus";
    }
    validateCollapsed(newValue) {
        this.isCollapsed = newValue;
    }
    /**
     * Open the accordion
     */
    async open() {
        this.isCollapsed = false;
    }
    /**
     * Close the accordion
     */
    async close() {
        this.isCollapsed = true;
    }
    /**
     * Triggers the accordion
     */
    async toggle() {
        this.isCollapsed = !this.isCollapsed;
    }
    componentWillLoad() {
        this.isCollapsed = this.collapsed;
    }
    render() {
        return (index.h(index.Host, { class: "accordion" }, index.h("bal-button", { expanded: true, light: true, inverted: true, type: this.type, onClick: () => this.toggle() }, index.h("span", { class: "trigger-label", style: !this.isCollapsed && { display: "none" } }, index.h("bal-icon", { name: this.openIcon }), index.h("span", { class: "label" }, this.openLabel)), index.h("span", { class: "trigger-label", style: this.isCollapsed && { display: "none" } }, index.h("bal-icon", { name: this.closeIcon }), index.h("span", { class: "label" }, this.closeLabel))), index.h("div", { class: [
                "accordion-content",
                this.type,
            ].join(" "), style: this.isCollapsed && { display: "none" } }, index.h("slot", null))));
    }
    static get watchers() { return {
        "collapsed": ["validateCollapsed"]
    }; }
};
Accordion.style = accordionCss;

exports.bal_accordion = Accordion;
