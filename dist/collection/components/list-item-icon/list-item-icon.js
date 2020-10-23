import { Component, Host, h, Prop } from "@stencil/core";
export class ListItemIcon {
    constructor() {
        /**
         * If `true` the icon is on the right side of the list item. Default is the left side.
         */
        this.right = false;
    }
    render() {
        return (h(Host, { class: ["bal-list-item-icon", this.right ? "is-right" : ""].join(" ") },
            h("slot", null)));
    }
    static get is() { return "bal-list-item-icon"; }
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
                "text": "If `true` the icon is on the right side of the list item. Default is the left side."
            },
            "attribute": "right",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
