import { Component, Host, h, Prop, State, Watch, Method } from "@stencil/core";
export class Accordion {
    constructor() {
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
        return (h(Host, { class: "accordion" },
            h("bal-button", { expanded: true, light: true, inverted: true, type: this.type, onClick: () => this.toggle() },
                h("span", { class: "trigger-label", style: !this.isCollapsed && { display: "none" } },
                    h("bal-icon", { name: this.openIcon }),
                    h("span", { class: "label" }, this.openLabel)),
                h("span", { class: "trigger-label", style: this.isCollapsed && { display: "none" } },
                    h("bal-icon", { name: this.closeIcon }),
                    h("span", { class: "label" }, this.closeLabel))),
            h("div", { class: [
                    "accordion-content",
                    this.type,
                ].join(" "), style: this.isCollapsed && { display: "none" } },
                h("slot", null))));
    }
    static get is() { return "bal-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["accordion.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["accordion.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| \"is-primary\"\r\n    | \"is-info\"",
                "resolved": "\"is-info\" | \"is-primary\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Type defines the theme of the accordion toggle"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"is-primary\""
        },
        "collapsed": {
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
                "text": "Controls if the accordion is collapsed or not"
            },
            "attribute": "collapsed",
            "reflect": false,
            "defaultValue": "true"
        },
        "openLabel": {
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
                "text": "Label of the open trigger button"
            },
            "attribute": "open-label",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "openIcon": {
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
                "text": "Bal-Icon of the open trigger button"
            },
            "attribute": "open-icon",
            "reflect": false,
            "defaultValue": "\"plus\""
        },
        "closeLabel": {
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
                "text": "Label of the close trigger button"
            },
            "attribute": "close-label",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "closeIcon": {
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
                "text": "Bal-Icon of the close trigger button"
            },
            "attribute": "close-icon",
            "reflect": false,
            "defaultValue": "\"minus\""
        }
    }; }
    static get states() { return {
        "isCollapsed": {}
    }; }
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Open the accordion",
                "tags": []
            }
        },
        "close": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Close the accordion",
                "tags": []
            }
        },
        "toggle": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Triggers the accordion",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "collapsed",
            "methodName": "validateCollapsed"
        }]; }
}
