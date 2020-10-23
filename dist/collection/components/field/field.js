import { Component, Host, h, Prop } from "@stencil/core";
export class Field {
    constructor() {
        /**
         * Label text
         */
        this.label = "";
        /**
         * If `true` a asterix (*) is added to the label text
         */
        this.required = false;
        /**
         * Validation message text
         */
        this.validationMessage = "";
        /**
         * Baloise icon for the right side of the input
         */
        this.iconRight = "";
        /**
         * Baloise icon for the left side of the input
         */
        this.iconLeft = "";
        /**
         * If `true` the field can be used on blue background.
         */
        this.inverted = false;
    }
    get buildIconLeftTemplate() {
        if (this.iconLeft) {
            return h("bal-icon", { name: this.iconLeft, isLeft: true, size: "medium" });
        }
        return "";
    }
    get buildIconRightTemplate() {
        if (this.iconRight) {
            return h("bal-icon", { name: this.iconRight, isRight: true, size: "medium" });
        }
        return "";
    }
    render() {
        return (h(Host, null,
            h("div", { class: ["form",
                    this.inverted ? "is-inverted" : ""
                ].join(" ") },
                h("label", { class: "label" },
                    this.label,
                    this.required === true ? "*" : "",
                    h("slot", { name: "hint" })),
                h("div", { class: "control" +
                        (this.iconLeft ? " has-icons-left" : "") +
                        (this.iconRight ? " has-icons-right" : "") },
                    h("slot", null),
                    this.buildIconLeftTemplate,
                    this.buildIconRightTemplate),
                h("p", { class: "help is-danger" }, this.validationMessage))));
    }
    static get is() { return "bal-field"; }
    static get originalStyleUrls() { return {
        "$": ["field.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["field.css"]
    }; }
    static get properties() { return {
        "label": {
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
                "text": "Label text"
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "required": {
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
                "text": "If `true` a asterix (*) is added to the label text"
            },
            "attribute": "required",
            "reflect": false,
            "defaultValue": "false"
        },
        "validationMessage": {
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
                "text": "Validation message text"
            },
            "attribute": "validation-message",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "iconRight": {
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
                "text": "Baloise icon for the right side of the input"
            },
            "attribute": "icon-right",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "iconLeft": {
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
                "text": "Baloise icon for the left side of the input"
            },
            "attribute": "icon-left",
            "reflect": false,
            "defaultValue": "\"\""
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
                "text": "If `true` the field can be used on blue background."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
