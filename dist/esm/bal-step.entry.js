import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';

const stepCss = ":host{display:block;position:static}";

const Step = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stepChanged = createEvent(this, "balStepChanged", 7);
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
        return (h(Host, null, h("div", { style: this.isContentHidden && { display: "none" } }, h("slot", null))));
    }
    static get watchers() { return {
        "active": ["activatedHandler"]
    }; }
};
Step.style = stepCss;

export { Step as bal_step };
