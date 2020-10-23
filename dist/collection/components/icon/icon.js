import { Component, Host, h, Prop } from "@stencil/core";
export class Icon {
    constructor() {
        /**
         * The name of the icon without the bal-icon prefix.
         */
        this.name = "";
        /**
         * Defines the size of the icon.
         */
        this.size = "";
        this.isRight = false;
        this.isLeft = false;
    }
    get sizeCssClass() {
        if (this.size && this.size.length > 0) {
            return `is-${this.size}`;
        }
        return "";
    }
    get iconCssClass() {
        return `icon-${this.name}`;
    }
    render() {
        return (h(Host, null,
            h("span", { class: [
                    "icon",
                    this.isRight ? "is-right" : "",
                    this.isLeft ? "is-left" : "",
                    this.sizeCssClass,
                ].join(" ") },
                h("i", { class: [
                        this.iconCssClass,
                        "font",
                    ].join(" ") }))));
    }
    static get is() { return "bal-icon"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get properties() { return {
        "name": {
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
                "text": "The name of the icon without the bal-icon prefix."
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"small\" | \"medium\" | \"large\" | \"\"",
                "resolved": "\"\" | \"large\" | \"medium\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Defines the size of the icon."
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "isRight": {
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
                "text": ""
            },
            "attribute": "is-right",
            "reflect": false,
            "defaultValue": "false"
        },
        "isLeft": {
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
                "text": ""
            },
            "attribute": "is-left",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
