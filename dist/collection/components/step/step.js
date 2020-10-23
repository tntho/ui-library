import { Component, Host, h, Prop, Method, State, Watch, Event, } from "@stencil/core";
export class Step {
    constructor() {
        this.isContentHidden = true;
        /**
         * This is the key of the step.
         */
        this.value = "";
        /**
         * Label for the step.
         */
        this.label = "";
        /**
         * If `true` a small red bubble is added to the step.
         */
        this.bubble = false;
        /**
         * If `true` the step is disabled.
         */
        this.disabled = false;
        /**
         * Tell's if the step is active and the content is visible.
         */
        this.active = false;
    }
    activatedHandler(newActive) {
        this.isContentHidden = !newActive;
    }
    get options() {
        return {
            value: this.value,
            label: this.label,
            active: this.active,
            disabled: this.disabled,
            hasBubble: this.bubble,
        };
    }
    /**
     * Options of the step like label, value etc.
     */
    async getOptions() {
        return this.options;
    }
    /**
     * Sets the step active.
     */
    async setActive(active) {
        this.active = active;
    }
    componentWillLoad() {
        this.isContentHidden = !this.active;
    }
    render() {
        return (h(Host, null,
            h("div", { style: this.isContentHidden && { display: "none" } },
                h("slot", null))));
    }
    static get is() { return "bal-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["step.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["step.css"]
    }; }
    static get properties() { return {
        "value": {
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
                "text": "This is the key of the step."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"\""
        },
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
                "text": "Label for the step."
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "bubble": {
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
                "text": "If `true` a small red bubble is added to the step."
            },
            "attribute": "bubble",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "If `true` the step is disabled."
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        },
        "active": {
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
                "text": "Tell's if the step is active and the content is visible."
            },
            "attribute": "active",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "isContentHidden": {}
    }; }
    static get events() { return [{
            "method": "stepChanged",
            "name": "balStepChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the steps get rendered."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "getOptions": {
            "complexType": {
                "signature": "() => Promise<StepOptions>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "StepOptions": {
                        "location": "local"
                    }
                },
                "return": "Promise<StepOptions>"
            },
            "docs": {
                "text": "Options of the step like label, value etc.",
                "tags": []
            }
        },
        "setActive": {
            "complexType": {
                "signature": "(active: boolean) => Promise<void>",
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
                "text": "Sets the step active.",
                "tags": []
            }
        }
    }; }
    static get watchers() { return [{
            "propName": "active",
            "methodName": "activatedHandler"
        }]; }
}
