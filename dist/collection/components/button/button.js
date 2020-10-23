import { Component, h, Host, Prop } from "@stencil/core";
export class Button {
    constructor() {
        /**
         * The theme type of the button. Given by bulma our css framework.
         */
        this.type = "is-primary";
        /**
         * Size of the button
         */
        this.size = "";
        /**
         * If `true` the button has a active theme
         */
        this.isActive = false;
        /**
         * If `true` the bottom corners get rounded
         */
        this.bottemRounded = false;
    }
    render() {
        return (h(Host, { class: this.expanded ? "is-fullwidth" : "" },
            h("button", { class: [
                    "button",
                    this.type,
                    this.size,
                    this.light ? "is-light" : "",
                    this.inverted ? "is-inverted" : "",
                    this.isActive ? "is-active" : "",
                    this.outlined ? "is-outlined" : "",
                    this.expanded ? "is-fullwidth" : "",
                    this.loading ? "is-loading" : "",
                    this.isSquare ? "is-square" : "",
                    this.dense ? "is-dense" : "",
                    this.bottemRounded ? "has-round-bottom-corners" : "",
                ].join(" "), disabled: this.disabled },
                this.loading ? h("bal-spinner", { class: "is-small is-inverted" }) : "",
                h("span", { style: { display: this.loading ? "none" : "flex" } },
                    h("slot", null)))));
    }
    static get is() { return "bal-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| \"is-primary\"\r\n    | \"is-info\"\r\n    | \"is-success\"\r\n    | \"is-warning\"\r\n    | \"is-danger\"\r\n    | \"is-link\"",
                "resolved": "\"is-danger\" | \"is-info\" | \"is-link\" | \"is-primary\" | \"is-success\" | \"is-warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The theme type of the button. Given by bulma our css framework."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"is-primary\""
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"is-small\" | \"\"",
                "resolved": "\"\" | \"is-small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Size of the button"
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "isSquare": {
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
                "text": "If `true` the width of the buttons is limited"
            },
            "attribute": "is-square",
            "reflect": false
        },
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
                "text": "If `true` the button is disabled"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "light": {
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
                "text": "If `true` the button has a light color"
            },
            "attribute": "light",
            "reflect": false
        },
        "isActive": {
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
                "text": "If `true` the button has a active theme"
            },
            "attribute": "is-active",
            "reflect": false,
            "defaultValue": "false"
        },
        "expanded": {
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
                "text": "If `true` the button has a full width"
            },
            "attribute": "expanded",
            "reflect": false
        },
        "outlined": {
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
                "text": "If `true` the button is outlined"
            },
            "attribute": "outlined",
            "reflect": false
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
                "text": "If `true` the button is inverted"
            },
            "attribute": "inverted",
            "reflect": false
        },
        "dense": {
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
                "text": "If `true` the button is dense"
            },
            "attribute": "dense",
            "reflect": false
        },
        "loading": {
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
                "text": "If `true` the label is hidden and a loading spinner is shown instead."
            },
            "attribute": "loading",
            "reflect": false
        },
        "bottemRounded": {
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
                "text": "If `true` the bottom corners get rounded"
            },
            "attribute": "bottem-rounded",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
