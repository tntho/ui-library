import { Component, Host, h, Prop } from "@stencil/core";
export class DataItem {
    constructor() {
        /**
         * If `true` the item gets a lighter font color.
         */
        this.disabled = false;
    }
    render() {
        return (h(Host, { class: ["bal-data-item", this.disabled ? "is-disabled" : ""].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-data-item"; }
    static get properties() { return {
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
                "text": "If `true` the item gets a lighter font color."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
