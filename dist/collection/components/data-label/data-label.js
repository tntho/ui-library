import { Component, Host, h, Prop } from "@stencil/core";
export class DataLabel {
    constructor() {
        /**
         * If `true` an asterix is added after the label.
         */
        this.required = false;
    }
    render() {
        return (h(Host, { class: "bal-data-label" },
            h("slot", null),
            this.required ? "*" : ""));
    }
    static get is() { return "bal-data-label"; }
    static get properties() { return {
        "required": {
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
                "text": "If `true` an asterix is added after the label."
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
