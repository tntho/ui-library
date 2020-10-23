import { Component, Host, h, Element, State, Event, Method, Prop, Listen, } from "@stencil/core";
export class Tabs {
    constructor() {
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
        return (h(Host, null,
            h("div", { class: [
                    "tabs",
                    this.rounded ? "is-rounded" : "",
                    this.dense ? "is-dense" : "",
                    this.expanded ? "is-fullwidth" : "",
                ].join(" ") },
                h("ul", null,
                    this.tabsOptions.map((tab) => (h("li", { class: [
                            tab.active ? "is-active" : "",
                            tab.disabled ? "is-disabled" : "",
                        ].join(" ") },
                        h("a", { onClick: () => this.onSelectTab(tab) }, tab.label),
                        h("span", { class: "bubble", style: !tab.hasBubble && { display: "none" } })))),
                    h("li", { class: "is-right" },
                        h("slot", { name: "action" })))),
            h("slot", null)));
    }
    static get is() { return "bal-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tabs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tabs.css"]
    }; }
    static get properties() { return {
        "expanded": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true` the field expands over the whole width."
            },
            "attribute": "expanded",
            "reflect": false,
            "defaultValue": "false"
        },
        "dense": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true` the the padding gets reduced."
            },
            "attribute": "dense",
            "reflect": false,
            "defaultValue": "false"
        },
        "rounded": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If you want the rounded tab style."
            },
            "attribute": "rounded",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "tabsOptions": {}
    }; }
    static get events() { return [{
            "method": "tabsDidChange",
            "name": "balTabsDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the changes has finished."
            },
            "complexType": {
                "original": "TabItemOptions",
                "resolved": "TabItemOptions",
                "references": {
                    "TabItemOptions": {
                        "location": "import",
                        "path": "../tab-item/tab-item"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "select": {
            "complexType": {
                "signature": "(value: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Dropdown a tab by the value of the tab item.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "balTabChanged",
            "method": "tabChanged",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
