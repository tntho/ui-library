import { Component, Host, h, Prop } from "@stencil/core";
export class CardButton {
    constructor() {
        /**
         * Name of the icon like `edit`.
         */
        this.icon = "";
    }
    render() {
        return (h(Host, { class: "bal-card-button" },
            h("bal-button", { expanded: true, light: true, "bottem-rounded": true },
                this.icon ? h("bal-icon", { class: "icon", name: this.icon }) : "",
                h("span", { class: "label" },
                    h("slot", null)))));
    }
    static get is() { return "bal-card-button"; }
    static get properties() { return {
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Name of the icon like `edit`."
            },
            "attribute": "icon",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
}
