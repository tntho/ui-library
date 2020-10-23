import { r as registerInstance, c as createEvent, h, H as Host } from './index-ec84eadc.js';

const cardStepCss = ":host{display:block;position:static}.card-step-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1}.is-hidden{display:none !important}";

const CardStep = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stepChanged = createEvent(this, "balCardStepChanged", 7);
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
            } }, h("slot", null)));
    }
    static get watchers() { return {
        "active": ["activatedHandler"]
    }; }
};
CardStep.style = cardStepCss;

export { CardStep as bal_card_step };
