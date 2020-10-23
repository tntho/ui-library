import { Component, Host, h, Prop, Method, State, Watch, Event, } from '@stencil/core';
export class CardStep {
    constructor() {
        this.isContentHidden = true;
        /**
         * This is the key of the step.
         */
        this.value = '';
        /**
         * Label for the step.
         */
        this.label = '';
        /**
         * If `true` the step is hidden in the steps navigation.
         */
        this.hidden = false;
        /**
         * If `true` the step is disabled.
         */
        this.disabled = false;
        /**
         * If `true` the step is done.
         */
        this.done = false;
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
            done: this.done,
            disabled: this.disabled,
            hidden: this.hidden,
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
        return (h(Host, { class: {
                'is-hidden': this.isContentHidden,
                'card-step-content': true,
            } },
            h("slot", null)));
    }
    static get is() { return "bal-card-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-step.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-step.css"]
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
            "defaultValue": "''"
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
            "defaultValue": "''"
        },
        "hidden": {
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
                "text": "If `true` the step is hidden in the steps navigation."
            },
            "attribute": "hidden",
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
        "done": {
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
                "text": "If `true` the step is done."
            },
            "attribute": "done",
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
            "name": "balCardStepChanged",
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
                "signature": "() => Promise<CardStepOptions>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "CardStepOptions": {
                        "location": "local"
                    }
                },
                "return": "Promise<CardStepOptions>"
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
