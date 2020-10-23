import { Component, Host, h, State, Method, Listen, Prop } from "@stencil/core";
export class Modal {
    constructor() {
        this.isActive = false;
        /**
         * Marks this modal as card-style modal, i.e. having visual lines separating head, body, and foot.
         */
        this.card = false;
    }
    async open() {
        this.isActive = true;
    }
    async close() {
        this.isActive = false;
    }
    async handleKeyUp(event) {
        if (this.isActive) {
            if (event.key === "Escape" || event.key === "Esc") {
                event.preventDefault();
                this.close();
            }
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: [
                    "modal",
                    "is-clipped",
                    this.isActive ? "is-active" : "",
                ].join(" ") },
                h("div", { class: "modal-background" }),
                h("div", { class: [
                        "modal-card box",
                        this.card ? "" : "no-border",
                    ].join(" ") },
                    h("header", { class: "modal-card-head" },
                        h("p", { class: "modal-card-title" },
                            h("slot", { name: "head" }))),
                    h("section", { class: "modal-card-body" },
                        h("slot", null)),
                    h("footer", { class: "modal-card-foot" },
                        h("div", { class: "modal-card-foot-container" },
                            h("slot", { name: "foot" })))))));
    }
    static get is() { return "bal-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["modal.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal.css"]
    }; }
    static get properties() { return {
        "card": {
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
                "text": "Marks this modal as card-style modal, i.e. having visual lines separating head, body, and foot."
            },
            "attribute": "card",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isActive": {}
    }; }
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "close": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "handleKeyUp",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
