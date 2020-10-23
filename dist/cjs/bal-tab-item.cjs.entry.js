'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const tabItemCss = ":host{display:block;position:static}";

const TabItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tabChanged = index.createEvent(this, "balTabChanged", 7);
        this.isContentHidden = true;
        /**
         * This is the key of the tab.
         */
        this.value = "";
        /**
         * Label for the tab.
         */
        this.label = "";
        /**
         * If `true` a small red bubble is added to the tab.
         */
        this.bubble = false;
        /**
         * If `true` the tab is disabled.
         */
        this.disabled = false;
        /**
         * Tell's if the tab is active and the content is visible.
         */
        this.active = false;
    }
    activatedHandler(newActive) {
        this.isContentHidden = !newActive;
    }
    get options() {
        return {
            value: this.value,
            label: this.label,
            active: this.active,
            disabled: this.disabled,
            hasBubble: this.bubble,
        };
    }
    /**
     * Options of the tab like label, value etc.
     */
    async getOptions() {
        return this.options;
    }
    /**
     * Sets the tab active.
     */
    async setActive(active) {
        this.active = active;
    }
    componentWillLoad() {
        this.isContentHidden = !this.active;
    }
    render() {
        this.tabChanged.emit(this.options);
        return (index.h(index.Host, null, index.h("div", { style: this.isContentHidden && { display: "none" } }, index.h("slot", null))));
    }
    static get watchers() { return {
        "active": ["activatedHandler"]
    }; }
};
TabItem.style = tabItemCss;

exports.bal_tab_item = TabItem;
