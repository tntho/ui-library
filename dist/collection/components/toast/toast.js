import { Component, Host, h, Prop, Method, Element, State } from "@stencil/core";
export class Toast {
    constructor() {
        this.animationClass = "fadeInDown";
        /**
         * The theme type of the toast. Given by bulma our css framework.
         */
        this.type = "is-primary";
    }
    /**
     * Closes the toast after the given duration in ms
     */
    async closeIn(duration) {
        this.timer = setTimeout(() => this.close(), duration);
    }
    /**
     * Closes this toast
     */
    async close() {
        clearTimeout(this.timer);
        this.animationClass = "fadeOut";
        this.timer = setTimeout(() => {
            this.element.remove();
            clearTimeout(this.timer);
        }, 150);
    }
    render() {
        return (h(Host, { class: "container" },
            h("div", { role: "alert", onClick: () => this.close(), class: `toast ${this.animationClass} ${this.type}` },
                h("slot", null))));
    }
    static get is() { return "bal-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["toast.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["toast.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "| \"is-primary\"\r\n    | \"is-info\"\r\n    | \"is-success\"\r\n    | \"is-warning\"\r\n    | \"is-danger\"",
                "resolved": "\"is-danger\" | \"is-info\" | \"is-primary\" | \"is-success\" | \"is-warning\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The theme type of the toast. Given by bulma our css framework."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"is-primary\""
        }
    }; }
    static get states() { return {
        "animationClass": {}
    }; }
    static get methods() { return {
        "closeIn": {
            "complexType": {
                "signature": "(duration: number) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Closes the toast after the given duration in ms",
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
                "text": "Closes this toast",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
}
