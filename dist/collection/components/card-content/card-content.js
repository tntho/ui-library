import { Component, Host, h, Prop } from "@stencil/core";
export class CardContent {
    render() {
        return (h(Host, { class: [
                "bal-card-content",
                this.inverted ? "inverted" : ""
            ].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-card-content"; }
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
            "reflect": false
        }
    }; }
}
