import { Component, Host, h, Element, State, Listen, Event, Method, Prop, } from '@stencil/core';
export class CardSteps {
    constructor() {
        this.stepOptions = [];
        /**
         * If `true` a the style is ready for a dark background.
         */
        this.inverted = false;
        /**
         * If `true` the steps navigation is hidden.
         */
        this.hidden = false;
        /**
         * If `true` the steps navigation is on.
         */
        this.navigation = false;
    }
    /**
     * Select a step.
     */
    async select(value) {
        this.steps.forEach((t) => t.setActive(t.value === value));
        this.readSteps();
    }
    componentWillLoad() {
        this.readSteps();
    }
    stepChanged() {
        this.readSteps();
    }
    get steps() {
        return Array.from(this.element.querySelectorAll('bal-card-step'));
    }
    readSteps() {
        Promise.all(this.steps.map((value) => value.getOptions())).then((stepOptions) => {
            this.stepOptions = stepOptions;
        });
    }
    async onSelectStep(step) {
        if (!step.disabled && this.navigation) {
            await this.select(step.value);
            this.stepsDidChange.emit(step);
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: ['tabs', this.inverted ? 'is-inverted' : '', this.hidden ? 'is-hidden' : ''].join(' ') },
                h("ul", null, this.stepOptions.filter(step => !step.hidden && !this.hidden).map((step, index) => (h("li", { class: [
                        step.active ? 'is-active' : '',
                        step.disabled ? 'is-disabled' : '',
                        step.done ? 'is-done' : '',
                    ].join(' ') },
                    h("a", { onClick: () => this.onSelectStep(step), title: step.label },
                        h("span", { class: "step-index" },
                            h("span", null, index + 1)))))))),
            h("slot", null)));
    }
    static get is() { return "bal-card-steps"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card-steps.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card-steps.css"]
    }; }
    static get properties() { return {
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
                "text": "If `true` a the style is ready for a dark background."
            },
            "attribute": "inverted",
            "reflect": false,
            "defaultValue": "false"
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
                "text": "If `true` the steps navigation is hidden."
            },
            "attribute": "hidden",
            "reflect": false,
            "defaultValue": "false"
        },
        "navigation": {
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
                "text": "If `true` the steps navigation is on."
            },
            "attribute": "navigation",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "stepOptions": {}
    }; }
    static get events() { return [{
            "method": "stepsDidChange",
            "name": "balCardStepsDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the changes has finished."
            },
            "complexType": {
                "original": "CardStepOptions",
                "resolved": "CardStepOptions",
                "references": {
                    "CardStepOptions": {
                        "location": "import",
                        "path": "../card-step/card-step"
                    }
                }
            }
        }]; }
    static get methods() { return {
        "select": {
            "complexType": {
                "signature": "(value: string) => Promise<void>",
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
                "text": "Select a step.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "balCardStepChanged",
            "method": "stepChanged",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
