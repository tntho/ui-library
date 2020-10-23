import { Component, Host, h, Prop, Method, State, Watch, Event } from "@stencil/core";
export class TabItem {
    constructor() {
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
        return (h(Host, null,
            h("div", { style: this.isContentHidden && { display: "none" } },
                h("slot", null))));
    }
    static get is() { return "bal-tab-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tab-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tab-item.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "This is the key of the tab."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Label for the tab."
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "bubble": {
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
                "text": "If `true` a small red bubble is added to the tab."
            },
            "attribute": "bubble",
            "reflect": false,
            "defaultValue": "false"
        },
        "disabled": {
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
                "text": "If `true` the tab is disabled."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "active": {
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
                "text": "Tell's if the tab is active and the content is visible."
            },
            "attribute": "active",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isContentHidden": {}
    }; }
    static get events() { return [{
            "method": "tabChanged",
            "name": "balTabChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the tabs get rendered."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getOptions": {
            "complexType": {
                "signature": "() => Promise<TabItemOptions>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "TabItemOptions": {
                        "location": "local"
                    }
                },
                "return": "Promise<TabItemOptions>"
            },
            "docs": {
                "text": "Options of the tab like label, value etc.",
                "tags": []
            }
        },
        "setActive": {
            "complexType": {
                "signature": "(active: boolean) => Promise<void>",
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
                "text": "Sets the tab active.",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "active",
            "methodName": "activatedHandler"
        }]; }
}
