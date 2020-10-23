import { Component, Host, h, Prop } from "@stencil/core";
export class CardActions {
    constructor() {
        /**
         * If `true` the buttons start form right to left.
         */
        this.right = false;
    }
    render() {
        return (h(Host, { class: ["bal-card-actions", this.right ? "is-right" : ""].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-card-actions"; }
    static get properties() { return {
        "right": {
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
                "text": "If `true` the buttons start form right to left."
            },
            "attribute": "right",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
