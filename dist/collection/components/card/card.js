import { Component, Host, h, Prop } from "@stencil/core";
export class BalCard {
    constructor() {
        /**
         * If `true` a light blue border is added to the card.
         */
        this.border = false;
        /**
         * If `true` the card loses its shadow.
         */
        this.flat = false;
        /**
         * If `true` the card loses its border radius.
         */
        this.square = false;
        /**
         * If `true` the card background color becomes blue.
         */
        this.inverted = false;
    }
    render() {
        return (h(Host, { class: [
                "bal-card",
                this.square ? "is-square" : "",
                this.border ? "has-border" : "",
                this.flat ? "is-flat" : "",
                this.inverted ? "is-inverted" : ""
            ].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-card"; }
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
                "text": "If `true` a light blue border is added to the card."
            },
            "attribute": "border",
            "reflect": false,
            "defaultValue": "false"
        },
        "flat": {
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
                "text": "If `true` the card loses its shadow."
            },
            "attribute": "flat",
            "reflect": false,
            "defaultValue": "false"
        },
        "square": {
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
                "text": "If `true` the card loses its border radius."
            },
            "attribute": "square",
            "reflect": false,
            "defaultValue": "false"
        },
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
                "text": "If `true` the card background color becomes blue."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
