import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ec84eadc.js';

const tabsCss = ".tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs:not(:last-child){margin-bottom:1.5rem}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.tabs{-webkit-overflow-scrolling:touch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;font-size:0.9375rem;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;color:#222222;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:-0;padding:0.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:transparent;color:#ffffff}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:transparent;color:#ffffff}.tabs ul{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-left{padding-right:0.75em}.tabs ul.is-center{-ms-flex:none;flex:none;-ms-flex-pack:center;justify-content:center;padding-left:0.75em;padding-right:0.75em}.tabs ul.is-right{-ms-flex-pack:end;justify-content:flex-end;padding-left:0.75em}.tabs .icon:first-child{margin-right:0.5em}.tabs .icon:last-child{margin-left:0.5em}.tabs.is-centered ul{-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f6;border-bottom-color:#d3dbeb}.tabs.is-boxed li.is-active a{background-color:#ffffff;border-color:#d3dbeb;border-bottom-color:transparent !important}.tabs.is-fullwidth li{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border-color:#d3dbeb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f6;border-color:#e2e3e3;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#009ee7;border-color:#009ee7;color:#003399;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:100%;border-top-left-radius:100%;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:100%;border-top-right-radius:100%;padding-right:1.25em}.tabs.is-small{font-size:0.8125rem}.tabs.is-medium{font-size:1.125rem}.tabs.is-large{font-size:1.375rem}:host{display:block}.tabs{margin:0 !important}.tabs>ul{margin:0;padding:0}.tabs>ul>li{position:relative}.tabs>ul>li.is-right{position:absolute;right:40px}.tabs>ul>li span.bubble{background:#ff3366;height:12px;width:12px;border-radius:50%;position:absolute;display:block;top:35px;right:5px}.tabs>ul>li>a{padding:32px 20px 32px 20px;line-height:1.2;cursor:pointer;color:#7188b8;font-size:1.375rem}.tabs>ul>li.is-active>a{color:#003399;border-bottom:2px solid #003399;padding-bottom:30px}.tabs>ul>li>a:hover{color:#003399}.tabs>ul>li.is-disabled>a,.tabs>ul>li.is-disabled>a:hover{color:#7188b8;cursor:not-allowed;opacity:50%}.tabs.is-dense>ul>li>a{padding:10px 20px}.tabs.is-dense>ul>li.is-active>a{padding-bottom:8px}.tabs.is-dense>ul>li span.bubble{top:12px;right:2px}.tabs.is-rounded{border:none}.tabs.is-rounded>ul{padding:0}.tabs.is-rounded>ul>li{padding-right:10px}.tabs.is-rounded>ul>li:last-child{padding-right:0}.tabs.is-rounded>ul>li>a{border-radius:50px;padding:7.5px 20px 9.5px 20px;line-height:1.2;cursor:pointer;color:#222222;font-size:0.9375rem}.tabs.is-rounded>ul>li.is-active>a,.tabs.is-rounded>ul>li>a:hover{background:#003399;color:#ffffff;border-bottom:0}";

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabsDidChange = createEvent(this, "balTabsDidChange", 7);
        this.tabsOptions = [];
        /**
         * If `true` the field expands over the whole width.
         */
        this.expanded = false;
        /**
         * If `true` the the padding gets reduced.
         */
        this.dense = false;
        /**
         * If you want the rounded tab style.
         */
        this.rounded = false;
    }
    /**
     * Dropdown a tab by the value of the tab item.
     */
    async select(value) {
        this.tabs.forEach((t) => t.setActive(t.value === value));
        this.readTabItems();
    }
    componentWillLoad() {
        this.readTabItems();
    }
    tabChanged() {
        this.readTabItems();
    }
    readTabItems() {
        Promise.all(this.tabs.map((value) => value.getOptions())).then((tabsOptions) => {
            this.tabsOptions = tabsOptions;
        });
    }
    get tabs() {
        return Array.from(this.element.querySelectorAll("bal-tab-item"));
    }
    async onSelectTab(tab) {
        if (!tab.disabled) {
            await this.select(tab.value);
            this.tabsDidChange.emit(tab);
        }
    }
    render() {
        return (h(Host, null, h("div", { class: [
                "tabs",
                this.rounded ? "is-rounded" : "",
                this.dense ? "is-dense" : "",
                this.expanded ? "is-fullwidth" : "",
            ].join(" ") }, h("ul", null, this.tabsOptions.map((tab) => (h("li", { class: [
                tab.active ? "is-active" : "",
                tab.disabled ? "is-disabled" : "",
            ].join(" ") }, h("a", { onClick: () => this.onSelectTab(tab) }, tab.label), h("span", { class: "bubble", style: !tab.hasBubble && { display: "none" } })))), h("li", { class: "is-right" }, h("slot", { name: "action" })))), h("slot", null)));
    }
    get element() { return getElement(this); }
};
Tabs.style = tabsCss;

export { Tabs as bal_tabs };
