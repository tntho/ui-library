import { Component, h, Host, Prop } from "@stencil/core";
export class Tag {
    constructor() {
        /**
         * The theme type of the tag. Given by bulma our css framework.
         */
        this.type = "";
    }
    render() {
        return (h(Host, null,
            h("span", { class: `tag ${this.type ? this.type : "default"}` },
                h("slot", null))));
    }
    static get is() { return "bal-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tag.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tag.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| \"is-primary\"\r\n    | \"is-info\"\r\n    | \"is-success\"\r\n    | \"is-warning\"\r\n    | \"is-danger\"\r\n    | \"\"",
                "resolved": "\"\" | \"is-danger\" | \"is-info\" | \"is-primary\" | \"is-success\" | \"is-warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The theme type of the tag. Given by bulma our css framework."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
}
