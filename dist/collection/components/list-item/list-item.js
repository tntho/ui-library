import { Component, Host, h, Prop } from "@stencil/core";
export class ListItem {
    constructor() {
        /**
         * If `true` the list item can be hovered
         */
        this.disabled = false;
        /**
         * If `true` the list item has a selected theme
         */
        this.selected = false;
    }
    render() {
        return (h(Host, { role: "listitem", class: [
                "bal-list-item",
                this.disabled ? "is-disabled" : "",
                this.selected ? "is-selected" : "",
            ].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-list-item"; }
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
        "selected": {
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
                "text": "If `true` the list item has a selected theme"
            },
            "attribute": "selected",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
