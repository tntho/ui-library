import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';

const tabItemCss = ":host{display:block;position:static}";

const TabItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabChanged = createEvent(this, "balTabChanged", 7);
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
        return (h(Host, null, h("div", { style: this.isContentHidden && { display: "none" } }, h("slot", null))));
    }
    static get watchers() { return {
        "active": ["activatedHandler"]
    }; }
};
TabItem.style = tabItemCss;

export { TabItem as bal_tab_item };
