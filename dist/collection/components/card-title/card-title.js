import { Component, Host, h, Prop } from "@stencil/core";
export class CardTitle {
    constructor() {
        /**
         * If `true` the card text color becomes white.
         */
        this.inverted = false;
    }
    render() {
        return (h(Host, { class: [
                "bal-card-title",
                this.inverted ? "inverted" : ""
            ].join(' '), role: "heading" },
            h("slot", null)));
    }
    static get is() { return "bal-card-title"; }
    static get properties() { return {
        "inverted": {
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
                "text": "If `true` the card text color becomes white."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
