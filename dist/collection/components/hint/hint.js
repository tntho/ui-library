import { Component, Host, h, Method, State, Prop, Element, Listen, } from "@stencil/core";
export class Hint {
    constructor() {
        this.isActive = false;
        /**
         * Text for the close button.
         */
        this.closeLabel = "Close";
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
    }
    handleKeyUp(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            event.preventDefault();
            this.close();
        }
    }
    clickOnOutside(event) {
        if (!this.element.contains(event.target) && this.isActive) {
            this.toggle();
        }
    }
    /**
     * Toggles the hint box.
     */
    async toggle() {
        this.isActive = !this.isActive;
    }
    /**
     * Opens the hint box.
     */
    async open() {
        this.isActive = true;
    }
    /**
     * Closes the hint box.
     */
    async close() {
        this.isActive = false;
    }
    render() {
        return (h(Host, null,
            h("div", { role: "button", class: "bal-hint-icon", onClick: () => this.toggle() },
                h("span", null, "i")),
            this.isActive ? (h("div", { class: "bal-hint-content" },
                h("slot", null),
                h("div", { class: "buttons is-row-reverse" },
                    h("bal-button", { type: "is-info", outlined: true, inverted: true, onClick: () => this.close() }, this.closeLabel)))) : ("")));
    }
    static get is() { return "bal-hint"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hint.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["hint.css"]
    }; }
    static get properties() { return {
        "closeLabel": {
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
                "text": "Text for the close button."
            },
            "attribute": "close-label",
            "reflect": false,
            "defaultValue": "\"Close\""
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
                "text": "If `true`, the user cannot interact with the input."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isActive": {}
    }; }
    static get methods() { return {
        "toggle": {
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
                "text": "Toggles the hint box.",
                "tags": []
            }
        },
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
                "text": "Opens the hint box.",
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
                "text": "Closes the hint box.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "handleKeyUp",
            "target": "document",
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "clickOnOutside",
            "target": "document",
            "capture": false,
            "passive": false
        }]; }
}
