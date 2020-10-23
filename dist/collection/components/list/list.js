import { Component, Host, h, Prop } from "@stencil/core";
export class List {
    constructor() {
        /**
         * If `true` the list item can be hovered
         */
        this.disabled = false;
        /**
         * If `true` the list can be used on a dark backround
         */
        this.inverted = false;
        /**
         * If `true` each list item has a bottom border
         */
        this.border = false;
    }
    render() {
        return (h(Host, { role: "listbox", class: [
                "bal-list",
                this.disabled ? "is-disabled" : "",
                this.inverted ? "is-inverted" : "",
                this.border ? "has-border" : "",
            ].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-list"; }
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
                "text": "If `true` the list item can be hovered"
            },
            "attribute": "disabled",
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
                "text": "If `true` the list can be used on a dark backround"
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        },
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
                "text": "If `true` each list item has a bottom border"
            },
            "attribute": "border",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
