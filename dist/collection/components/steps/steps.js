import { Component, Host, h, Element, State, Listen, Event, Method, } from "@stencil/core";
export class Steps {
    constructor() {
        this.stepOptions = [];
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
        return Array.from(this.element.querySelectorAll("bal-step"));
    }
    readSteps() {
        Promise.all(this.steps.map((value) => value.getOptions())).then((stepOptions) => {
            this.stepOptions = stepOptions;
        });
    }
    async onSelectStep(step) {
        if (!step.disabled) {
            await this.select(step.value);
            this.stepsDidChange.emit(step);
        }
    }
    render() {
        return (h(Host, null,
            h("div", { class: ["tabs is-fullwidth"].join(" ") },
                h("ul", null, this.stepOptions.map((step, index) => (h("li", { class: [
                        step.active ? "is-active" : "",
                        step.disabled ? "is-disabled" : "",
                    ].join(" ") },
                    h("a", { onClick: () => this.onSelectStep(step) },
                        h("span", { class: "step-index" },
                            h("span", null, index + 1)),
                        h("span", { class: "step-label" }, step.label)),
                    h("span", { class: "bubble", style: !step.hasBubble && { display: "none" } })))))),
            h("slot", null)));
    }
    static get is() { return "bal-steps"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["steps.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["steps.css"]
    }; }
    static get states() { return {
        "stepOptions": {}
    }; }
    static get events() { return [{
            "method": "stepsDidChange",
            "name": "balStepsDidChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the changes has finished."
            },
            "complexType": {
                "original": "StepOptions",
                "resolved": "StepOptions",
                "references": {
                    "StepOptions": {
                        "location": "import",
                        "path": "../step/step"
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
            "name": "balStepChanged",
            "method": "stepChanged",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
