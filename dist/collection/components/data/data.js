import { Component, Host, h, Prop } from "@stencil/core";
export class Data {
    constructor() {
        /**
         * If `true` a bottom border is added to the data-item.
         */
        this.border = false;
        /**
         * If `true` the data list is horizontal instead of vertical.
         */
        this.horizontal = false;
    }
    render() {
        return (h(Host, { class: [
                "bal-data",
                this.border ? "has-border" : "",
                this.horizontal ? "is-horizontal" : "",
            ].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-data"; }
    static get properties() { return {
        "border": {
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
                "text": "If `true` a bottom border is added to the data-item."
            },
            "attribute": "border",
            "reflect": false,
            "defaultValue": "false"
        },
        "horizontal": {
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
                "text": "If `true` the data list is horizontal instead of vertical."
            },
            "attribute": "horizontal",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
