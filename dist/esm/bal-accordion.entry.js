import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const accordionCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block}span.trigger-label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}span.trigger-label span.label{margin-bottom:2px}bal-icon{height:24px;margin-right:2px}.accordion-content.is-info{border-top:1px solid #d3dbeb}.is-fullwidth{width:100%}";

const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { class: "accordion" }, h("bal-button", { expanded: true, light: true, inverted: true, type: this.type, onClick: () => this.toggle() }, h("span", { class: "trigger-label", style: !this.isCollapsed && { display: "none" } }, h("bal-icon", { name: this.openIcon }), h("span", { class: "label" }, this.openLabel)), h("span", { class: "trigger-label", style: this.isCollapsed && { display: "none" } }, h("bal-icon", { name: this.closeIcon }), h("span", { class: "label" }, this.closeLabel))), h("div", { class: [
                "accordion-content",
                this.type,
            ].join(" "), style: this.isCollapsed && { display: "none" } }, h("slot", null))));
    }
    static get watchers() { return {
        "collapsed": ["validateCollapsed"]
    }; }
};
Accordion.style = accordionCss;

export { Accordion as bal_accordion };
